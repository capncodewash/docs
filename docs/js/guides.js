var BCLS = ( function () {
    var heading = document.getElementsByTagName('h1')[0],
        title = document.getElementsByTagName('title')[0],
        sections = document.getElementsByTagName('h2'),
        sidenav = document.getElementById('sidenav'),
        navList,
        navA,
        navItem,
        navText,
        i,
        iMax,
        item;

    /**
     * tests for all the ways a variable might be undefined or not have a value
     * @param {*} x the variable to test
     * @return {Boolean} true if variable is defined and has a value
     */
    function isDefined (x){
        if ( x === "" || x === null || x === undefined || x === NaN) {
            return false;
        }
        return true;
    };

    function buildSideNav() {
        if (isDefined(sections)) {
            var homeHead = document.createElement('p'),
                homeLink = document.createElement('a');
            homeLink.setAttribute('href', '../../index.html');
            homeLink.setAttribute('style', 'font-size:1.4em;font-weight:bold;text-align:right;margin:0;padding-left:1em');
            homeLink.textContent = 'Docs Index';
            homeHead.appendChild(homeLink);
            navList = document.createElement('ul');
            navList.setAttribute('class', 'sidenav-list');
            navItem = document.createElement('li');
            navA = document.createElement('a');
            navA.setAttribute('href', '#toc0');
            navText = document.createTextNode('Top');
            navA.appendChild(navText);
            navItem.appendChild(navA);
            navList.appendChild(navItem);
            iMax = sections.length;
            for (i = 0; i < iMax; i++) {
                item = sections[i];
                navItem = document.createElement('li');
                navA = document.createElement('a');
                navA.setAttribute('href', '#' + item.id );
                navText = document.createTextNode(item.textContent);
                navA.appendChild(navText);
                navItem.appendChild(navA);
                navList.appendChild(navItem);
            }
            sidenav.appendChild(homeHead);
            sidenav.appendChild(navList);
        }
    }

    function setTitle() {
        title.textContent = 'Videojs ' + heading.textContent;
    }

    function addFooter() {
        var path = document.location.pathname,
            footer = document.createElement('div'),
            srcLink = document.createElement('a'),
            main = document.getElementById('main'),
            srcPath;
        // extract file name
        if (path.indexOf('#') > 0) {
            path = path.substring(0, path.indexOf('#'));
        }
        path = path.substring(path.lastIndexOf('/') + 1);
        srcPath = 'https://github.com/videojs/docs/blob/gh-pages/docs/guides/' + path;
        footer.setAttribute('class', 'footer');
        srcLink.setAttribute('href', srcPath);
        srcLink.appendChild(document.createTextNode('source'));
        footer.innerHTML = 'Want to add or fix something? Go to the ';
        footer.appendChild(srcLink);
        footer.innerHTML += ', fork it, work it, submit a pull request.';
        main.appendChild(footer);
    }

    setTitle();
    buildSideNav();
    addFooter();
})();