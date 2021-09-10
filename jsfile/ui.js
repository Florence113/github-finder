class UI {
    constructor () {
        this.profile = document.querySelector('#profile');
    }

    // Display Profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3 col-sm-12">
                    <img src="${user.avatar_url}" class="img-fluid mb-3">
                    <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9 col-sm-12">
                    <span class="badge badge-warning">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info mb-3">Following: ${user.following}</span>
                    <ul class="list-group">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repository</h3>
        <div id="repos"></div>
        `;
    }

    // Show user Repository
    showRepos(repos) {
        let output = '';
        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        });
        //Output Repository
        document.querySelector('#repos').innerHTML = output; 
    }

    // Show Alert Message
    showAlert(message, className) {
        // Clear any remaining multiple alert
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add Class
        div.className = className;
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get Search box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);
        // Set timeout after 3 sec
        setTimeout( () => {
            this.clearAlert();
        }, 3000)
    }

    // Clear Alert Message
    clearAlert() {
        const currrentAlert = document.querySelector('.alert');
        if(currrentAlert) {
            currrentAlert.remove();
        }
    }

    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
} 