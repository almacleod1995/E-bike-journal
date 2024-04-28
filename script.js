/ Add functionality to edit and delete buttons
const editButtons = document.querySelectorAll('.edit-button');
const deleteButtons = document.querySelectorAll('.delete-button');

editButtons.forEach((button) => {
	button.addEventListener('click', () => {
		// Add edit functionality here
	});
});

deleteButtons.forEach((button) => {
	button.addEventListener('click', () => {
		// Add delete functionality here
	});
});

// Add functionality to add new entry button
const addEntryButton = document.querySelector('.add-entry-button');

addEntryButton.addEventListener('click', () => {
	// Add functionality to add new entry here
});
