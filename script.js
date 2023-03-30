function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    var taxtValue = txtValue.toLocaleUpperCase();
    var took = taxtValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    if (took.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

var liText = '',
  liList = $('#myidd li'),
  listForRemove = [];

$(liList).each(function () {

  var text = $(this).text();

  if (liText.indexOf('|' + text + '|') == -1)
    liText += '|' + text + '|';
  else
    listForRemove.push($(this));

});

$(listForRemove).each(function () {
  $(this).remove();
});