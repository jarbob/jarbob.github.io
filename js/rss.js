/*
* @author : jarbob
*
* @function : Add click function to rss code!
*
*
* */


document.onclick = function (e) {
  if('title' == e.target.tagName){
      window.open(e.target.nextSibling.nextSibling.childNodes[0].data,'_blank');
  }
};