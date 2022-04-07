(function (d) {
    const BASE_SIZE = 50;
    const LOGO_SIZE = 20;
    const LOGO_OFFSET = 5;

    const style = d.createElement('style');
    style.innerHTML = `
        .scholar-profile-badge-wrapper {
            text-decoration: none;
            display: flex;
            -webkit-tap-highlight-color: transparent;
            padding-bottom: ${LOGO_OFFSET}px;
            padding-right: ${LOGO_OFFSET}px;
        }

        .scholar-profile-badge-img-wrapper {
            position: relative;
            height: ${BASE_SIZE}px;
        }

        .scholar-profile-badge-img {
            border-radius: 50%;
            width: ${BASE_SIZE}px;
            height: ${BASE_SIZE}px;
        }

        .scholar-profile-badge-logo {
            position: absolute;
            bottom: -${LOGO_OFFSET}px;
            right: -${LOGO_OFFSET}px;
            width: ${LOGO_SIZE}px;
            height: ${LOGO_SIZE}px;
        }

        .scholar-profile-badge-name-wrapper {
            box-sizing: content-box;
            display: flex;
            align-items: center;
            overflow: hidden;
            background: transparent;
            align-self: stretch;
            padding-left: ${BASE_SIZE / 2}px;
            margin-left: -${BASE_SIZE / 2}px;
            border-top-right-radius: ${BASE_SIZE / 2}px;
            border-bottom-right-radius: ${BASE_SIZE / 2}px;
            width: 0;
            max-width: 0;
            transition: all 0.3s ease;
            flex-wrap: wrap;
            padding: 10px;
            border: 1px white solid;
            width: 100%;
        }

        .scholar-profile-badge-name {
            font-size: 15px;
            font-family: monospace;
            color: black;
            font-weight: bold;
            margin: 0;
            padding: 0;
            margin-left: 5px;
            margin-right: 10px;
        }
    `;
    d.head.appendChild(style);

    /**
     * @param {string} username
     */
    function getWrapper(username) {
        const wrapper = d.createElement('a');
        wrapper.href = `https://scholar.google.it/citations?user=${username}`;
        wrapper.target = '_blank';
        wrapper.className = 'scholar-profile-badge-wrapper';
        return wrapper;
    }

    /**
     * @param {string} username
     */
    function getProfile(username) {
        const profileImg = d.createElement('img');
        profileImg.src = `https://scholar.googleusercontent.com/citations?view_op=view_photo&user=${username}`;
        profileImg.alt = `${username} Scholar Profile`;
        profileImg.className = 'scholar-profile-badge-img';
        return profileImg;
    }


    function getScholarLogo() {
        const logoImg = d.createElement('img');
        logoImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/2048px-Google_Scholar_logo.svg.png';
        logoImg.alt = 'Scholar logo';
        logoImg.className = 'scholar-profile-badge-logo';
        return logoImg;
    }

    /**
     * @param {string} username
     */
    function getImagesDiv(username) {
        const parentDiv = d.createElement('div');
        parentDiv.className = 'scholar-profile-badge-img-wrapper';
        parentDiv.appendChild(getProfile(username));
        parentDiv.appendChild(getScholarLogo());
        return parentDiv;
    }

    /**
     * @param {string} username
     */
    function getNameText(username) {
        const nameText = d.createElement('p');
        nameText.className = 'scholar-profile-badge-name';
        nameText.innerText = username;
        return nameText;
    }

    /**
     * @param {HTMLElement} widget
     */
    function fillWidget(widget) {
        const user_id = widget.getAttribute('user-id');
        const username = widget.getAttribute('user-name');
        const wrapper = getWrapper(username);

        wrapper.appendChild(getImagesDiv(user_id));

        const nameDiv = d.createElement('div');
        nameDiv.className = 'scholar-profile-badge-name-wrapper';
        const nameText = getNameText(username);
        nameDiv.appendChild(nameText);
        wrapper.appendChild(nameDiv);
        wrapper.onpointerenter = (ev) => {
            const nameTextStyle = window.getComputedStyle(nameText);
            const newWidth = nameText.offsetWidth +
                parseFloat(nameTextStyle.marginLeft) +
                parseFloat(nameTextStyle.marginRight) +
                'px';
            nameDiv.style.width = newWidth;
            nameDiv.style.maxWidth = newWidth;
        };
        wrapper.onpointerleave = (ev) => {
            nameDiv.style.width = 0;
            nameDiv.style.maxWidth = 0;
        };

        widget.appendChild(wrapper);
    }

    const widgets = d.getElementsByClassName('scholar-profile-badge');
    for (let i = 0; i < widgets.length; i++) {
        fillWidget(widgets[i]);
    }
})(document);
