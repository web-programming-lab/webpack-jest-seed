
class ProfileData extends HTMLElement {
    constructor() {
        super();
        this.githubApi = 'https://api.github.com';
        this.shadowDom = this.attachShadow({mode: 'open'});
        this.shadowDom.innerHTML = `<img id="userImage">
                                    <p id="username"></p>
                                    <ul id="follower"></ul>`;
    }

    connectedCallback() {
        let searchProfile = document.querySelector('profile-search');
        if(searchProfile) {
            searchProfile.addEventListener('onLoadProfile', (event) => {
                this.renderInformation(event.detail[0], event.detail[1]);
            });
        }
    }

    renderInformation(userInfo, followers) {
        let userImageElement = this.shadowDom.querySelector('#userImage');
        userImageElement.src = userInfo.avatar_url;
        let userNameElement = this.shadowDom.querySelector('#username');
        userNameElement.innerHTML = userInfo.name;
    
        let followersElement = this.shadowDom.querySelector('#follower');
        
        while(followersElement.lastChild != undefined) {
            followersElement.removeChild(followersElement.lastChild);
        }
    
        for(let follower of followers) {
            let followerElement = document.createElement('li');
            followerElement.innerHTML = follower.login;
            followersElement.appendChild(followerElement);
        }
    }
}

window.customElements.define('profile-data', ProfileData);