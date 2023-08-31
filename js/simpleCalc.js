const display = document.querySelector('#simple-calc-display'); // Display area selector
const del = document.getElementById('delete'); // Delete key selector
const erase = document.getElementById('erase'); // Erase key selector
const val = document.querySelectorAll('.val'); // Numbers and operators key selector
const evaluate = document.getElementById('equal'); // Equal Key selector

// Delete (D) key functionality
del.addEventListener('click', () => {
    display.value = '';
});

// Erase key functionality
erase.addEventListener('click', () => {
    display.value = display.value.substring(0, display.value.length - 1);
});

// Numbers (1, 2, 3, 4, 5, 6, 7, 8, 9, 0) and operators (+, -, *, /) functionality
val.forEach((e) => {
    e.addEventListener('click', () => {
        display.value += e.innerHTML;
    });
});

// Equal (=) key functionality
evaluate.addEventListener('click', () => {
    display.value = eval(display.value);
});

// Adding keyboard keys functionality
display.addEventListener('keydown', (e) => {

    if (e.key === 'Delete') {
        display.value = '';
    }

    else if (e.key === 'Enter') {
        display.value = eval(display.value);
    }
});