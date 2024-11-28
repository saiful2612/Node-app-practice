// Initialize an empty array to store unique values
const uniqueValues = [];

function handleSubmit(event) {
  event.preventDefault(); // Prevent the page from refreshing

  // Get the value from the input field
  const input = document.getElementById('unique').value.trim();

  // Check if the input is not empty
  if (input === "") {
    alert("Please enter a value.");
    return;
  }

  // Check if the value is already in the array
  if (uniqueValues.includes(input)) {
    alert("This value is already present in the array!");
    // Clear the input field for the next entry
    document.getElementById('unique').value = '';
  } else {
    // Add the value to the array
    uniqueValues.push(input);
    
    // Update the UI
    updateUI();

    // Clear the input field for the next entry
    document.getElementById('unique').value = '';
  }
}

// Function to update the UI with unique values
function updateUI() {
  const uniqueValuesList = document.getElementById('uniqueValuesList');
  uniqueValuesList.innerHTML = ''; // Clear the existing list

  // Create a list item for each unique value
  uniqueValues.forEach(value => {
    const listItem = document.createElement('li');
    listItem.textContent = value;
    uniqueValuesList.appendChild(listItem);
  });
}