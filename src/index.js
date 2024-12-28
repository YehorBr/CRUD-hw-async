// 1. Реалізуйте функцію для отримання списку всіх студентів (HTTP GET /students)
// 2. Реалізуйте функцію для додавання нового студента (HTTP POST /students)
// 3. Реалізуйте функцію для оновлення інформації про студента (HTTP PUT /students/{id})
// 4. Реалізуйте функцію для часткового оновлення студента (HTTP PATCH /students/{id})
// 5. Реалізуйте функцію для видалення студента за його ідентифікатором (HTTP DELETE /students/{id})
// 6. Створити HTML-сторінку з необхідними елементами, такими як кнопки, текстові поля та таблицю для відображення студентів.

// 7. Написати JavaScript-код для обробки подій користувача.
// 7.1. Додати обробники подій для кнопок, щоб вони виконували відповідні HTTP-запити.
// 7.2. При натисканні на кнопку "Отримати студентів" (GET), виконати HTTP-запит GET /students і відобразити отримані дані в таблиці.
// 7.3. Реалізувати форму для додавання нового студента. При натисканні на кнопку "Додати студента" (POST), зібрати дані з полів вводу, сформувати об'єкт з даними  і виконати HTTP-запит POST /students, щоб додати нового студента до бази даних.
// 7.4. Реалізувати можливість оновлення інформації про студента. Для кожного студента в таблиці додати кнопку "Оновити". При натисканні на цю кнопку, виконати HTTP-запит PUT /students/:id, де :id — ідентифікатор фільму, і відправити оновлені дані про студента на сервер.
// 7.5. Додати можливість видалення студента. Для кожного студента в таблиці додати кнопку "Видалити". При натисканні на цю кнопку, виконати HTTP-запит DELETE /students/:id.


import {fetchStudents} from './api-server'
import {addStudent} from './api-server'
import {deleteStudent} from './api-server'
import {updateStudent} from './api-server'


const getStudentsBtn = document.querySelector('.get-students-btn')
const studentList = document.querySelector('.student-list')
const form = document.querySelector('.add-form')
const deleteBtn = document.querySelector(".delete-button")
const updateBtn = document.querySelector(".update-button")
const updateForm = document.querySelector(".update-form")
const backdropRef = document.querySelector(".backdrop")
const modalRef = document.querySelector(".modal")
const closeModalBtn = document.querySelector(".close-modal-btn")

if (getStudentsBtn) {
    getStudentsBtn.addEventListener('click', onGetStudentsBtn);
}

if (form) {
    form.addEventListener('submit', onSubmit);
}

if (studentList) {
    studentList.addEventListener('click', onBtnClick);
}

if (updateBtn) {
    updateBtn.addEventListener('click', onUpdateBtn);
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', onCloseBtn);
}

if (updateForm) {
    updateForm.addEventListener('submit', onUpdateSubmit);
}



function onGetStudentsBtn(){
    fetchStudents().then(studentsArr =>{
        const studentMarkUp = studentListMarkUp(studentsArr)
        studentList.innerHTML = studentMarkUp
    } );
}

function studentListMarkUp(arrOfStudents){
    return arrOfStudents.map((student)=>{
        return `
        <li id="${student.id}">
      <h1>Ім'я:${student.name}</h1>
      <p>Вік:${student.age}</p>
      <p>Курс:${student.course}</p>
      <p>${student.skills}</p>
      <p>email:${student.email}</p>
      <p>Зараховано:${student.isEnrolled}</p>
      <button class="delete-button" type="button">Видалити студента</button>
      <button class="update-button" type="button">Оновити студента</button>
    </li>
        `
    }) 
}

function onSubmit(e){
    e.preventDefault()

    const formEl = e.currentTarget.elements

    const newStudent = {
        name: formEl.name.value,
        age: formEl.age.value,
        course: formEl.course.value,
        skills: [formEl.skills.value],
        email: formEl.email.value,
        isEnrolled: formEl.isEnrolled.checked 
    }

    addStudent(newStudent)
    .then(response  => console.log('afaffa'))

    e.currentTarget.reset()
}

function onUpdateBtn(id){
    modalRef.classList.add('is-show')
    backdropRef.classList.add('modal-show')

    console.log(document.getElementById(id));

}

function onCloseBtn(){
    modalRef.classList.remove('is-show')
    backdropRef.classList.remove('modal-show')
}


function onBtnClick(e){
    studentId = e.target.parentNode.id;


    if(e.target.classList.contains('delete-button')){
        deleteStudent(studentId).then(() => onGetStudentsBtn())
        
    }
    else if(e.target.classList.contains('update-button')){
        onUpdateBtn(studentId)
        
    }
}

function onUpdateSubmit(e) {
    e.preventDefault()
    
    let valueToUpdate = {}

    for (const element of e.target.elements) {
        if (element.value !== '') {
            valueToUpdate[element.name] = element.value
        }
    
    }
    

    updateStudent(studentId, valueToUpdate)
    .then(()=>{
        onGetStudentsBtn();
        modalRef.classList.remove('is-show');
        backdropRef.classList.remove('modal-show');
        updateForm.reset();
    })
    
}


