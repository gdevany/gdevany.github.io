"use.strict";

$(function() {
  // $('.projbox').on('click', function(event) {
  //   event.preventDefault();
  //   $('#chosenproj').css('display', 'flex');

    // $('.projname').text(this.id);
    // $('.projdesc').text(this.)
    // $('.projdesc').text($(this).parent().children('div'));
  // })
  // $('@media')
  $("#my_nanogallery2").nanogallery2({
        "thumbnailHeight": 100, "thumbnailWidth": 100,
        "thumbnailL1GutterWidth": 0,
        "thumbnailL1GutterHeight": 10,
        "itemsBaseURL": "./pics/",
        "thumbnailStacksRotateZ": 0.4,
        "thumbnailBuildInit2": "title_translateY_2px",
        "galleryBuildInit2": "perspective_8000px",
        "thumbnailHoverEffect2": "thumbnail_rotateY_0deg_30deg_easeOutQuad_150_hoverin|thumbnail_rotateY_30deg_-30deg_delay160_keyframe_hoverin_easeOutQuad_200|thumbnail_rotateY_-30deg_0deg_delay320_keyframe_hoverin_easeOutQuad_150|title_translateX_0px_20px_easeOutQuad_150_hoverin|title_translateX_20px_-20px_delay160_keyframe_hoverin_easeOutQuad_200|title_translateX_-20px_0px_delay320_keyframe_hoverin_easeOutQuad_150|description_translateX_0px_12px_easeOutQuad_150_hoverin|description_translateX_12px_-12px_delay160_keyframe_hoverin_easeOutQuad_200|description_translateX_-12px_0px_delay320_keyframe_hoverin_easeOutQuad_150"

    });
});
