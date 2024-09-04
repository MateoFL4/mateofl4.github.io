document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var password = document.getElementById('password').value;
    var correctPassword = 'your-password'; // Replace with your desired password

    if (password === correctPassword) {
        document.getElementById('folderLink').classList.remove('hidden');
        document.getElementById('error-message').classList.add('hidden');
    } else {
        document.getElementById('error-message').classList.remove('hidden');
        document.getElementById('folderLink').classList.add('hidden');
    }
});
