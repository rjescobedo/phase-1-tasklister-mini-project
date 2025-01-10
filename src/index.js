document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //Declared form variable
  const form = document.querySelector('#create-task-form');

  //Attached event listener to form
  form.addEventListener('submit', (event) => {
    //console.log('clicked');
    //preventDefault so the page doesn't reset/load
    event.preventDefault();
    //Grabbing the value of the input field
    const taskDescription = document.querySelector('#new-task-description').value;
    //Object is created with task/taskDescript key-value pair
    const taskObject = {
      task: taskDescription
    }
    //console.log(dataObject)
    //buildToDo function handles the form data and displays it on the UI 
    function buildToDo(task) {
      //console.log(task);
      const ul = document.querySelector('#tasks');
      const li = document.createElement('li');
      li.textContent = task.task;
      ul.append(li);
      //.reset clears out the input field once submitted
      form.reset();
    }
    
    buildToDo(taskObject);
    
  });

});
