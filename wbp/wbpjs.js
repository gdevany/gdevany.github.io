$(function() {
  // $('img').on('click', function(event) {
  //   event.preventDefault();
    $("#my_nanogallery2").nanogallery2({
      "thumbnailHeight": 100, "thumbnailWidth": 100,
      "thumbnailL1GutterWidth": 8,
      "thumbnailL1GutterHeight": 8,
      "itemsBaseURL": "./pics/",
      "thumbnailStacksRotateZ": 0.4,
      "thumbnailStacksRotateZ": 0.4,
      "galleryBuildInit2": "perspective-origin_50% 150%",
      "thumbnailHoverEffect2": "image_rotateZ_0deg_7deg_easeOutQuad_150_hoverin|image_rotateZ_7deg_-7deg_delay160_keyframe_hoverin_easeOutQuad_200|image_rotateZ_-7deg_0deg_delay320_keyframe_hoverin_easeOutQuad_150"

      // $("#my_nanogallery2").nanogallery2({
      //     "thumbnailHeight": 300, "thumbnailWidth": 300,
      //     "thumbnailL1GutterWidth": 5,
      //     "thumbnailL1GutterHeight": 5,
      //     "itemsBaseURL": "./pics/",
      //     "thumbnailStacks": 4,
      //     "thumbnailStacksTranslateZ": 0.3,
      //     "thumbnailStacksRotateX": 0.9,
      //     "galleryBuildInit2": "perspective_12000px|perspective-origin_50% 150%",
      //     "thumbnailHoverEffect2": "thumbnail_translateZ_0px_100px_easeOutQuad_400 | thumbnail_rotateX_0deg_10deg_easeOutBack_200 | thumbnail_rotateX_10deg_0deg_delay250_keyframe_hoverin_easeOutBack_400"

      // $("#my_nanogallery2").nanogallery2({
      //   "thumbnailHeight": 200, "thumbnailWidth": 200,
      //   "thumbnailL1GutterWidth": 5,
      //   "thumbnailL1GutterHeight": 5,
      //   "itemsBaseURL": "./pics/",
      //   "thumbnailStacksRotateZ": 0.4,
      //   "thumbnailBuildInit2": "title_translateY_2px",
      //   "galleryBuildInit2": "perspective_8000px",
      //   "thumbnailHoverEffect2": "thumbnail_rotateY_0deg_30deg_easeOutQuad_150_hoverin|thumbnail_rotateY_30deg_-30deg_delay160_keyframe_hoverin_easeOutQuad_200|thumbnail_rotateY_-30deg_0deg_delay320_keyframe_hoverin_easeOutQuad_150|title_translateX_0px_20px_easeOutQuad_150_hoverin|title_translateX_20px_-20px_delay160_keyframe_hoverin_easeOutQuad_200|title_translateX_-20px_0px_delay320_keyframe_hoverin_easeOutQuad_150|description_translateX_0px_12px_easeOutQuad_150_hoverin|description_translateX_12px_-12px_delay160_keyframe_hoverin_easeOutQuad_200|description_translateX_-12px_0px_delay320_keyframe_hoverin_easeOutQuad_150"
      //
    });
});
