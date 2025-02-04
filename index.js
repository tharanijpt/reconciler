function createDomElements(data) {
    //get the div with mainArea id from the DOM
    var parentElement = document.getElementById("mainArea");
    //clear contents inside the div
    parentElement.innerHTML = '';
  
    let added = 0;
    // Process each item in the data array
    data.forEach(function(item) {
      added++;
      // Create a new element
      var childElement = document.createElement("div");
      childElement.dataset.id = item.id; // Store the ID on the element for future lookups
  
      var grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = item.title
  
      var grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = item.description
  
      var grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete"
      grandChildElement3.setAttribute("onclick", "deleteTodo(" + item.id + ")")
  
      childElement.appendChild(grandChildElement1)
      childElement.appendChild(grandChildElement2)
      childElement.appendChild(grandChildElement3)
      parentElement.appendChild(childElement);
    });
  
    console.log(added);
  }
  
  window.setInterval(() => {
    let todos = [];
    for (let i = 0; i<Math.floor(Math.random() * 100); i++) {
      todos.push({
        title: "task ",
        description: "description ",
        id: i+1
      })
    }
  
    createDomElements(todos)
  }, 5000)
  