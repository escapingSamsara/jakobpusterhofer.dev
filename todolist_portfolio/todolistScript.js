window.addEventListener('load', function () {
  //variables
  const todoList = document.querySelector('#todoList')
  const objects = []
  const myTodoForm = document.querySelector('#todoForm')
  let _idCounter = 0
  // MOCKUP OBJECT Array
  const mockupObjectArray = [
    {
      id: 'todoElement_0',
      text: 'water plants',
      isImportant: true,
      date: getDate(),
    },
    {
      id: 'todoElement_1',
      text: 'clean kitchen',
      isImportant: false,
      date: getDate(),
    },
    {
      id: 'todoElement_2',
      text: 'study',
      isImportant: true,
      date: getDate(),
    },
    {
      id: 'todoElement_3',
      text: 'groceries',
      isImportant: false,
      date: getDate(),
    },
  ]
  mockupObjectArray.forEach((object) => {
    renderHtmlContent(object)
    objects.push(object)
  })
  // SUBMIT Button and Main Logic and Object
  myTodoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoTextVal = document.querySelector('#todoText').value
    const todoCheckboxChecked = document.querySelector('#todoCheckbox').checked
    //Putting Output in an Object and the Object in an array
    const object = {
      id: `todoElement_${_idCounter}`,
      text: todoTextVal,
      isImportant: todoCheckboxChecked,
      date: getDate(),
    }
    renderHtmlContent(object)
    objects.push(object)
    //reset form entries on submit
    myTodoForm.reset()
  })
  //FUNCTIONS
  //DATE Function
  function getDate() {
    const dateObject = new Date()
    const dateObjectString = dateObject.toString()
    const dateObjectStringSplit = dateObjectString.split('2')
    const dateString = dateObjectStringSplit[0]
    return dateString
  }
  console.log(getDate())
  //Visual Render of Tile Elements (Entries)
  function renderHtmlContent(object) {
    //Create container element div
    const todoElement = document.createElement('div')
    todoElement.id = object.id
    todoElement.classList.add('todoElement')
    if (object.isImportant) {
      todoElement.classList.add('importantTodo')
    } else {
      todoElement.classList.add('notImportantTodo')
    }
    _idCounter++
    todoList.prepend(todoElement) //prepend adds tileElement before the last added tileElement (above)
    const textKeyElement = document.createElement('p')
    textKeyElement.classList.add('todoText')
    textKeyElement.innerText = `${object.text}`
    todoElement.append(textKeyElement)
    //span for IMPORTANCE SIGN (svg)
    const importantSign = document.createElement('span')
    todoElement.append(importantSign)
    if (object.isImportant) {
      importantSign.classList.add('todoWrapperImportant')
      const importantSVG = document.createElement('img')
      importantSVG.src = './todolist_portfolio/img/important-svg5.svg'
      importantSign.append(importantSVG)
    } else {
      importantSign.classList.add('todoWrapperNotImportant')
      const importantSVG = document.createElement('img')
      importantSVG.src = './todolist_portfolio/img/important-svg5.svg'
      importantSign.append(importantSVG)
    }
    //Date Element
    const dateElement = document.createElement('p')
    dateElement.innerText = `${object.date}`
    todoElement.append(dateElement)
    dateElement.classList.add('dateElement')
    //Delete Button
    const btnElement = document.createElement('button')
    btnElement.innerText = `done`
    todoElement.append(btnElement)
    btnElement.classList.add('btnElement')
    document.querySelector('.btnElement').addEventListener('click', (ev) => {
      todoElement.remove()
    })
    const clearAllTodosBtn = document
      .querySelector('.deleteAllButton')
      .addEventListener('click', () => {
        console.log('click')
        todoElement.remove()
      })
  }
  let isFirstClick = true
  //Filter Todos (important not important toggle)
  const filterImportanceBtn = document.querySelector('.filterImportanceButton')
  filterImportanceBtn.addEventListener('click', (e) => {
    const todoNotImportant = document.querySelectorAll('.notImportantTodo')
    if (isFirstClick) {
      todoNotImportant.forEach((todo) => {
        todo.style.display = 'none'
        isFirstClick = false
      })
    } else {
      todoNotImportant.forEach((todo) => {
        todo.style.display = 'flex'
        isFirstClick = true
      })
    }
  })
})
