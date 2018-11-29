(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var URL = 'fyrirlestur.html?slug=';
    fetch('../lectures.json').then(function (result) {
      if (!result.ok) {
        throw new Error('Non 200 status');
      }

      return result.json();
    }).then(function (data) {
      var lecturesData = data.lectures;
      var output = '';
      var undef = '';
      lecturesData.forEach(function (lecture) {
        if (lecture.thumbnail === undefined) undef = " class=\"".concat(lecture.thumbnail, "\"");
        output += "\n        \n          <a href=\"".concat(URL).concat(lecture.slug, "\" class \"").concat(lecture.category, " lecture lecture-page list\"><div class=\"grey\">\n            <img").concat(undef, " src=\"").concat(lecture.thumbnail, "\">\n            <p class=\"pflokkur\">").concat(lecture.category, "</p>\n            <div>\n              <h1 class=\"title\">").concat(lecture.title, "</h1>\n              <p class=\"check check--hidden\">&#10003</p>\n            </div>\n          </div></a>\n      ");
        undef = '';
      });
      document.getElementById('output').innerHTML = output;
    }).catch(function (error) {
      return console.error(error);
    });
  });
  /**
   * Felur alla fyrirlestrana, gefur þeim classan hide
   */

  function hide() {
    var el = document.getElementsByClassName('lecture');

    for (var i = 0; i < el.length; i += 1) {
      el[i].addAttribute('class', 'hide');
    }
  }
  /**
   * Sýnir alla fyrirlestra af gefnri týpu, tekur clasann hide í burtu
   * @param {*} type
   */


  function show(type) {
    var el = document.getElementsByClassName(type);

    for (var i = 0; i < el.length; i += 1) {
      el[i].removeAttribute('class', 'hide');
    }
  }
  /**
   * Finnur út hvað á að fela og hvað á að birta
   * @param {*} butArr 
   */


  function showWhat(butArr) {
    if (butArr[0] && butArr[1] && butArr[2] || !butArr[0] && !butArr[1] && !butArr[2]) console.log('showall');else {
      hide();
      if (butArr[0]) show('html');
      if (butArr[1]) show('css');
      if (butArr[2]) show('javascript');
    }
  } //document.getElementById('1').classList.remove('checked');
  var butArr = [false, false, false];
  /**
   * addEvent listener fyrir takkana
   */

  var button = document.querySelectorAll('button');
  button[0].addEventListener('click', function () {
    document.getElementById('1').classList.toggle('checked');
    butArr[0] = !butArr[0];
    showWhat(butArr);
    console.log('1 ' + butArr[0] + butArr[1] + butArr[2]);
  });
  button[1].addEventListener('click', function () {
    document.getElementById('2').classList.toggle('checked');
    butArr[1] = !butArr[1];
    showWhat(butArr);
    console.log('2 ' + butArr[1]);
  });
  button[2].addEventListener('click', function () {
    document.getElementById('3').classList.toggle('checked'); //el = document.getElementsByClassName('checked');

    butArr[2] = !butArr[2];
    showWhat(butArr);
    console.log('3 ' + butArr[2]);
  });

}());
//# sourceMappingURL=bundle.js.map
