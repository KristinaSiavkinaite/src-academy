import {
    displayFeed,
    updateFeed,
    checkMedieQueries
  } from '../../scripts/utils/helpers'

// Comments body dropdown - opnes all !!!
$(".js-comments").click(function(){
    $(".js-comments-drop").toggle();
    displayFeed(3);
    checkMedieQueries();
});



// su situo neiseina, nes button nezino ka atidaryti
// const drop = document.querySelector(".js-comments");
//
// function toggleListItemAsDone(item) {
//   item.classList.toggle('comments__drop--is-active');
// }
//
// const items = document.getElementsByClassName("js-comments-drop");
//
// if(items.length > 0 && drop !== null) {
//   drop.onclick = function(e) {
//     if(e.target.matches('.comments__drop')) {
//         toggleListItemAsDone(e.target);
//     }
//   }
// };


const likes = document.querySelector('.js-likes');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-new-item-add-comment');
const list = document.querySelector('.js-list');


// Create new comment
function createListItem(name) {
  const element = document.createElement('div');

  element.insertAdjacentHTML(
    'beforeend',
    '<article class="comment">' +
            '<div class="comment__post">' +
            '<img class="comment__author-face" src="/images/activity-post-elijah-chang.png" alt="">' +
            '<div class="comment__body">' +
            '<h6 class="comment__author">' +
            'Elijah Chang' +
            '</h6>' +
            '<p class="comment__text">' +
            '' + name + '' +
            '</p>' +
            '</div>' +
            '</div>' +
    '<img class="comment-parts-seperator" src="/images/activity-post-seperator-horizontal.png" alt="">' +
            '<div class="comment-footer">' +
              '<div class="comment-footer__with-delete">' +
                '<button type="button" class="likes__box likes__box-in-comment">' +
                  '<div class="likes__number js-likes-number">' +
                    '0' +
                  '</div>' +
                    'Likes' +
                '</button>' +
                '<img class="comment-footer__footer-parts-seperator" src="/images/activity-post-seperator-vertical.png" alt="">' +
                '<button type="button" class="comment-footer__delete-button js-delete-button">' +
                'Delete' +
                '</button>' +
              '</div>' +
              '<time class="comment-footer__date">' +
              'JUST NOW' +
              '</time>' +
            '</div>' +
    '</article>'
  );
  return element;
}


const inputItems = document.getElementsByClassName("js-new-item-add-comment");
let inputValue = '';
if(inputItems.length > 0 && input !== null) {
input.oninput = function (event) {
  inputValue = event.target.value;
  }
};


const formItems = document.getElementsByClassName("js-form");
if(formItems.length > 0 && form !== null) {
form.onsubmit = (e) => {
  e.preventDefault();

  if (!inputValue) return;

  list.prepend(createListItem(inputValue));
  inputValue = '';
  input.value = '';

  var commentsScore = document.querySelector('.js-comment-score');
  var number = commentsScore.innerHTML;
  number++;
  commentsScore.innerHTML = number;

  displayFeed(3);
  checkMedieQueries();
  }
};


const likesItems = document.getElementsByClassName("js-likes");
if(likesItems.length > 0 && likes !== null) {
likes.onclick = function(e) {

  if(e.target.matches('.likes__box')) {

    var likesScore = e.target.querySelector('.js-likes-number');
    var likeNumber = likesScore.innerHTML;
    likeNumber++;
    likesScore.innerHTML = likeNumber;

    likesScore.classList.remove('likes__number');
    likesScore.classList.add('likes__number--is-active');

    e.target.classList.remove('likes__box');
    e.target.classList.add('likes__box--liked');

  } else {

    if(e.target.matches('.likes__box--liked')) {

      var likesScore = e.target.querySelector('.js-likes-number');
      var likeNumber = likesScore.innerHTML;
      likeNumber--;
      likesScore.innerHTML = likeNumber;

      likesScore.classList.remove('likes__number--is-active');
      likesScore.classList.add('likes__number');

      e.target.classList.remove('likes__box--liked');
      e.target.classList.add('likes__box');
    }
  }

  }
};


// Delete new written comments $ comments calculation
$('.js-comment-delete').on('click', '.js-delete-button', function(){
  $(this).parent().parent().parent().parent().remove();

  var commentsScore = document.querySelector('.js-comment-score');
  var number = commentsScore.innerHTML;
  number--;
  commentsScore.innerHTML = number;

  displayFeed(3);
  checkMedieQueries();
});
