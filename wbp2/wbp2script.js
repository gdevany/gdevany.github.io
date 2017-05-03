"use.strict";

$(function() {
  $('.projbox').on('click', function(event) {
    event.preventDefault();
    $('#chosenproj').css('display', 'flex');

    $('.projname').text(this.id);
    $('.projdesc').text($(this).children('div'));
  })
});
