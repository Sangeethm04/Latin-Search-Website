var liText = '', liList = $('#myUL li'), listForRemove = [];

$(liList).each(function () {
    
  var text = $(this).text();

  if (liText.indexOf('|'+ text + '|') == -1)
    liText += '|'+ text + '|';
  else
    listForRemove.push($(this));
    
});
    
$(listForRemove).each(function () { $(this).remove(); });