var arrHeaders = ["dmngbgr00.thoughtworks.com          |<span>ide          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent",
                  "dmngbgr01.thoughtworks.com          |<span>building          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent",
                  "dmngbgr02.thoughtworks.com          |<span>building          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent",
                  "dmngbgr03.thoughtworks.com          |<span>ide          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent"];

arrHeaders.forEach(function(e,i) {
  var color;
  if(i==0 || i == 3){
    color = "green";
  }
  else{
    color = "yellow";
  }
  addArticle(i,color);
})

function addArticle(index,color){
    var mainContent = document.getElementsByTagName('main')[0];
    mainContent.setAttribute("class","content-main");

    var titleMain = document.createElement("h1");
    titleMain.setAttribute("class","title-main");
    titleMain.innerHTML="Cruise";

    var headerLogin = document.getElementsByTagName('header')[0];
    headerLogin.setAttribute("class","header-login");
    var divLogin = document.createElement("div");
    divLogin.setAttribute("class","login");

    var spanSignIn = document.createElement('span');
    spanSignIn.setAttribute("class","sign-in");
    spanSignIn.innerHTML="Signed in as ";
    var aSpanSignIn = document.createElement("a");
    aSpanSignIn.href = "#";
    aSpanSignIn.innerHTML = "Member";
    spanSignIn.appendChild(aSpanSignIn);
    divLogin.appendChild(spanSignIn);

    var spanSignOut = document.createElement('span');
    spanSignOut.setAttribute("class","sign-out");
    spanSignOut.innerHTML="&#10137;";
    var aSpanSignOut = document.createElement("a");
    aSpanSignOut.href = "#";
    aSpanSignOut.innerHTML="Sign out";
    spanSignOut.appendChild(aSpanSignOut);
    divLogin.appendChild(spanSignOut);

    var sectionLeft = document.getElementById("left");
    sectionLeft.setAttribute("class","left");

    var sectionContent = document.createElement("section");
    sectionContent.setAttribute("class", 'content-left '+color);
    var article = document.createElement("article");
    var circle = document.createElement("aside");
    circle.setAttribute("class","circle");
    var headerArticle = document.createElement("h4");
    headerArticle.innerHTML = arrHeaders[index];

    var contentArticle = document.createElement("p");
    contentArticle.innerHTML="+";
    var aSpecify = document.createElement("a");
    aSpecify.href="#";
    aSpecify.innerHTML="Specify Resources";
    contentArticle.appendChild(aSpecify);
    var tXtResource = document.createElement("span");
    tXtResource.innerHTML = "| Resources";
    contentArticle.appendChild(tXtResource);

    aSpecify.addEventListener("click", function(e){
      e.preventDefault();
      addResource(contentArticle);
    })
    article.appendChild(headerArticle);
    article.appendChild(contentArticle);
    sectionContent.appendChild(circle);
    sectionContent.appendChild(article);
    sectionLeft.appendChild(sectionContent);
    headerLogin.appendChild(divLogin);
    mainContent.appendChild(titleMain);
}

function addResource(contentArticle){
  var texto = prompt("¿Qué desea agregar?");
  var arrayTexto = texto.split(",");
  arrayTexto.forEach(function(e,i){
    if(e != ""){
      var span = document.createElement("span");
      var aRemove = document.createElement("a");
      aRemove.setAttribute("class","remove");
      aRemove.innerHTML = "x";

      aRemove.addEventListener('click',function(e) {
        e.preventDefault();
        deleteResource(contentArticle,span);
      });

      span.innerHTML = e;
      contentArticle.appendChild(span);
      span.appendChild(aRemove);
    }
  })
}

function deleteResource(contentArticle,span){
  contentArticle.removeChild(span);
}
