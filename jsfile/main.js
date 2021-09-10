// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.querySelector('#searchUser');

//Seach Input Event Listeners
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                // Show Profile
                ui.showProfile(data.profile);
                // show Repository
                ui.showRepos(data.repos);
            };
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});