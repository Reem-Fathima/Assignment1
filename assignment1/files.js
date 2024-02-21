const fs = require('fs');

// Function to read data from a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
        
        // Append additional data to the file asynchronously
        fs.appendFile('example.txt', '\nAdditional data appended!', (err) => {
            if (err) {
                console.error('Error appending data to file:', err);
            } else {
                console.log('Additional data appended to file.');
            }
        });
    }
});
