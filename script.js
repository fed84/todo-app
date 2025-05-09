let array = [];

    function addTodo() {
      let todo = document.querySelector(".text-input-dark");
      if (todo.value === "") {
        return;
      }
      array.push(todo.value);
      renderTodo();
      todo.value = "";
    }
    function renderTodo() {
      let containerHTML = "";
      let html = "";
      let body = document.querySelector(".dark-body");
      for (i = 0; i < array.length; i++) {
        let todoWritten = array[i];
        const todoClass = body.classList.contains("light-body")
          ? "todo-object-light"
          : "todo-object-dark";
        html = `<div class="${todoClass}"><input type="radio" onclick="changeIcon(this)" class="radio-todo-input"><p>${todoWritten}</p><button class="delete-button" onclick="array.splice(${i},1);renderTodo()"><img src="images/icon-cross.svg"></button></div>`;
        containerHTML += html;
      }
      document.querySelector(".todo-list-dark").innerHTML = containerHTML;

      const buttonsDivClass = body.classList.contains("light-body")
        ? "buttons-div-light"
        : "buttons-div-dark";

      if (array.length === 0) {document.querySelector(".end-todo").innerHTML = ``;return}

      document.querySelector(".end-todo").innerHTML = `
        <div class="${buttonsDivClass}">
          <div class="button">${array.length} items left</div>
            <div class="middle-div">
              <div class="button">All</div><div class="button">Active</div><div class="button">Completed</div>
            </div>
            <div class="button">Clear Completed</div>
        </div>`;
    }

    let todoText = document.querySelector(".todo-object");

    function changeIcon(radioElement) {
      // Toggle the 'radio-input-active' class on the clicked radio button
      if (radioElement.classList.contains("radio-input-active")) {
        radioElement.classList.remove("radio-input-active");
        radioElement.nextElementSibling.classList.remove("active-text");
      } else {
        radioElement.classList.add("radio-input-active");
        radioElement.nextElementSibling.classList.add("active-text"); // Add line-through to text
      }
    }

    function changeTheme() {
      let body = document.body;

      
      body.classList.toggle("light-body");

      
      let inputDiv = document.querySelector(".input-div-dark");
      if (inputDiv) inputDiv.classList.toggle("input-div-light");

      
      let textInput = document.querySelector(".text-input-dark");
      if (textInput) textInput.classList.toggle("text-input-light");

      
      let todoList = document.querySelector(".todo-list-dark");
      if (todoList) todoList.classList.toggle("todo-list-light");

      
      let todoObjects = document.querySelectorAll(".todo-object-dark");
      todoObjects.forEach((todoObject) => {
        todoObject.classList.toggle("todo-object-light");
      });

      
      let buttonsDiv = document.querySelector(".buttons-div-dark");
      if (buttonsDiv) buttonsDiv.classList.toggle("buttons-div-light");

      
      let imageIcon = document.querySelector(".sun-image");
      if (imageIcon) {
        if (body.classList.contains("light-body")) {
          imageIcon.src = "todo-list-app/images/icon-moon.svg"; 
          imageIcon.alt = "Moon Icon"; 
        } else {
          imageIcon.src = "todo-list-app/images/icon-sun.svg"; 
          imageIcon.alt = "Sun Icon"; 
        }
      }
    }

    

