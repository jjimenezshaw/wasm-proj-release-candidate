function change_colors() {
    const style = document.createElement('style');
    style.innerText = `
    :root {
    --color-primary: red;
    --color-primary-hover: pink;
    }
    `;
    document.body.appendChild(style);
}

function change_header(branch, release_candidate) {
    const header = document.querySelector('body > div > header');
    const div = document.createElement('div');
    div.classList.add('required');
    div.innerHTML = `<br>This is running the PROJ ${branch} ${release_candidate}. <br>
    Use this page just for testing purposes. <br>
    If you find anything wrong, please report it in <a href="https://github.com/OSGeo/PROJ">PROJ GitHub repository</a>
    or in its <a href="https://lists.osgeo.org/mailman/listinfo/proj">mailing list</a>`;
    header.appendChild(div);
}

function detect_release_candidate() {
    const branch = '*** master 2026-05-14***';// 'release candidate';
    const release_candidate = 'https://github.com/OSGeo/PROJ/actions/runs/25837929810'; // leave this empty for normal releases

    if (release_candidate) {
        change_colors();
        change_header(branch, release_candidate);
    }
}

window.addEventListener('load', detect_release_candidate);
