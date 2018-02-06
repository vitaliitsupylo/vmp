;
(() => {
    'use strict';

    /*variables*/

    /*reader file*/
    const openFile = document.querySelector('.menu_top .file');
    const video = document.getElementById('video');


    /*reader file*/
    if (openFile !== null) {
        (require('./modules/reader'))(openFile, video);
    }

})();
