// Task 2: Create Employee Card Dynamically
function createEmployeeCard(name, position) {
    // Create a card div with a unique id
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.setAttribute('data-id', Date.now());
  
    // Create and set the employee name
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = name;
  
    // Create and set the employee position
    const positionPara = document.createElement('p');
    positionPara.textContent = position;
  
    // Create the Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function(event) {
      event.stopPropagation();  // Prevent the click from bubbling
      card.parentElement.removeChild(card);
    });
  
    // Append name, position, and Remove button to the card
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeBtn);

    // Add double-click event listener to enable inline editing (Task 5)
card.addEventListener('dblclick', function() {
    inlineEditCard(card, nameHeading, positionPara);
  });
  
  
    // Add the card to the container
    document.getElementById('employeeContainer').appendChild(card);
  }
  // Task 3: Highlight All Employee Cards
function highlightEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    // Loop through each card and add the 'highlight' class
    Array.from(cards).forEach(card => {
      card.classList.add('highlight');
    });
  }
  // Task 4: Log clicks on the employee container (except Remove button clicks)
document.getElementById('employeeContainer').addEventListener('click', function(event) {
    console.log('Employee card clicked:', event.target);
  });
  // Task 5: Inline Editing for Employee Cards
// This function replaces the card's static content with input fields and a Save button.
function inlineEditCard(card, nameHeading, positionPara) {
    // Create an input field for the employee name and set its current value
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = nameHeading.textContent;
  
    // Create an input field for the employee position and set its current value
    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.value = positionPara.textContent;
  
    // Create a Save button
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
  
    // ----- CLEAR the card's static content 
    
    card.innerHTML = '';
  
    // Append the new input fields and the Save button to the card
    card.appendChild(nameInput);
    card.appendChild(positionInput);
    card.appendChild(saveBtn);
  
    // Re-create the Remove button so the card can still be deleted
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      card.parentElement.removeChild(card);
    });
    card.appendChild(removeBtn);
  
    // When the Save button is clicked, update the card with the new values
    saveBtn.addEventListener('click', function() {
      // Get the updated values from the inputs
      const updatedName = nameInput.value;
      const updatedPosition = positionInput.value;
  
      // Clear the card again 
      card.innerHTML = '';
  
      // Create new static elements with the updated values
      const updatedNameHeading = document.createElement('h3');
      updatedNameHeading.textContent = updatedName;
      const updatedPositionPara = document.createElement('p');
      updatedPositionPara.textContent = updatedPosition;
  
      // Append the updated content and the Remove button to the card
      card.appendChild(updatedNameHeading);
      card.appendChild(updatedPositionPara);
      card.appendChild(removeBtn);
    });
  }
  