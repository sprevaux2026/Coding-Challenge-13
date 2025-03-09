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
  