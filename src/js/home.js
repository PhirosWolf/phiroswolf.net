'use strict';

// .card-list .card:nth-child(n+5) {
//   display: none;
// }

let showMoreTxt = 'Show more';
let showLessTxt = 'Show less';

let aboutMeLastCards = [...document.querySelectorAll('section.about-me .card-list .card:nth-child(n+5)')];

let myProjectsLastCards = [...document.querySelectorAll('section.my-projects .card-list .card:nth-child(n+5)')];

let showMoreLessAboutMeBtn = document.querySelector('section.about-me .show-more');

let showMoreLessMyProjectsBtn = document.querySelector('section.my-projects .show-more');

let showingMoreAboutMe = false;
let showingMoreMyProjects = false;

showMoreLessAboutMeBtn.addEventListener('click', () => {
  showingMoreAboutMe = !showingMoreAboutMe;
  if (showingMoreAboutMe) {
    aboutMeLastCards.forEach((el) => {
      el.style.display = 'block';
    });
    showMoreLessAboutMeBtn.innerText = showLessTxt;
  } else {
    aboutMeLastCards.forEach((el) => {
      el.style.display = 'none';
    });
    showMoreLessAboutMeBtn.innerText = showMoreTxt;
  }
}, false);

// showMoreLessMyProjectsBtn.addEventListener('click', () => {
//   showingMoreMyProjects = !showingMoreMyProjects;
//   if (showingMoreMyProjects) {
//     myProjectsLastCards.forEach((el) => {
//       el.style.display = 'block';
//     });
//     showMoreLessAboutMeBtn.innerText = showLessTxt;
//   } else {
//     myProjectsLastCards.forEach((el) => {
//       el.style.display = 'none';
//     });
//     showMoreLessAboutMeBtn.innerText = showMoreTxt;
//   }
// }, false);

aboutMeLastCards.forEach((el) => {
  el.style.display = 'none';
});

myProjectsLastCards.forEach((el) => {
  el.style.display = 'none';
});
