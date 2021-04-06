function actionTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="actionplace" and hide them
    tabcontent = document.getElementsByClassName("actionplace");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="actiontab" and remove the class "active"
    tablinks = document.getElementsByClassName("actiontab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function leftactionTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="lefttabs" and hide them
    tabcontent = document.getElementsByClassName("lefttabs");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="lefttabs" and remove the class "active"
    tablinks = document.getElementsByClassName("lefttabs");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // luuks like a tree and idk how it's works ;-DDD
  var tree = document.querySelectorAll('ul.tree a:not(:last-child)');
for(var i = 0; i < tree.length; i++){
    tree[i].addEventListener('click', function(e) {
        var parent = e.target.parentElement;
        var classList = parent.classList;
        if(classList.contains("open")) {
            classList.remove('open');
            var opensubs = parent.querySelectorAll(':scope .open');
            for(var i = 0; i < opensubs.length; i++){
                opensubs[i].classList.remove('open');
            }
        } else {
            classList.add('open');
        }
        e.preventDefault();
    });
}