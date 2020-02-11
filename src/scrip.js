"use strict";
const headerBlock = document.querySelector('.plusMenu');
const litlMenu = document.querySelector('.under');

headerBlock.addEventListener('mouseover', function () {
         litlMenu.style.display = 'block';
    });

litlMenu.addEventListener('mouseleave', function () {
    litlMenu.style.display = 'none';
});
