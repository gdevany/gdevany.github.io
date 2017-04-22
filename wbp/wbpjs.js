$(function() {
  $('.tnpic').on('click', function(event) {
    event.preventDefault();
    console.log('in function call')
    let imgurl = $(this).valueof().attr('src');
    cosole.log(imgurl);
    OpenInNewTabWinBrowser(imgurl);
    function OpenInNewTabWinBrowser(url) {
      var win = window.open(url, '_blank');
      console.log('in OpenInNewTabWinBrowser');
      win.focus();
    }
  })
});
