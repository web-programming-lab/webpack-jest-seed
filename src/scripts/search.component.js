class ProfileSearch extends HTMLElement {
    constructor() {
        super();
        this.githubApi = 'https://api.github.com';
        this.authorizationHeader = {
            headers: {'Authorization': `token ${__GITHUBTOKEN__}`}
        };  

        this.shadowDom = this.attachShadow({mode: 'open'});
        this.shadowDom.innerHTML = `<form name="searchForm">
                                    <input name="username" type="text" placeholder="username">
                                    <button type="submit">search</button>
                                    </form>`;
    }

    connectedCallback() {
        this.refs = {
            form: this.shadowDom.querySelector('form'),
            input: this.shadowDom.querySelector('input')
        }

        this.refs.form.addEventListener('submit', (e) => {
                this.getData(this.refs.input.value);
                e.preventDefault();
                return false;
        });
    }

    async getUserInfo(username) {
        let urlUserInfo = `${this.githubApi}/users/${username}`;
        let response = await fetch(urlUserInfo, this.authorizationHeader);
        return await response.json();
    }

    async getFollowers(username) {
        let urlFollowers = `${this.githubApi}/users/${username}/followers`;
        let response = await fetch(urlFollowers, this.authorizationHeader);
        return await response.json();
    }

    async getData(username) {
        let userInfo = this.getUserInfo(username);
        let follower = this.getFollowers(username);
        let finalResult = [await userInfo, await follower];
        this.dispatchEvent(new CustomEvent('onLoadProfile', {detail: finalResult}));
    }
}

window.customElements.define('profile-search', ProfileSearch);