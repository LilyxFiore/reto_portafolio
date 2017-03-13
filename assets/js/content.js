var arrayArticles = [];
var arrHeaders = ["dmngbgr01.thoughtworks.com          |<span>idle          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent",
                  "dmngbgr02.thoughtworks.com          |<span>idle          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent",
                  "dmngbgr03.thoughtworks.com          |<span>idle          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent"];

function addArticle(){
    var sectionContent = document.getElementById("content");
    var article = document.createElement("article");
    var headerArticle = document.createElement("h4");
    headerArticle.innerHTML = arrHeaders[arrayArticles.length];
    var contentArticle = document.createElement("p");
    contentArticle.innerHTML="+";
    contentArticle.id="p2";
    var a2 = document.createElement("a");
    a2.innerHTML="Specify Resources";
    contentArticle.appendChild(a2);
    a2.addEventListener("click", function(e){
      e.preventDefault();
      var z = prompt("¿Que desea agregar?");

      var x = z.split(",");

      x.forEach(function(e,i){
        var span = document.createElement("span");
        span.id="s"+i;
        var aRemove = document.createElement("a");
        aRemove.href="#";
        aRemove.setAttribute("class",'glyphicon glyphicon-remove-circle');
        aRemove.addEventListener('click',function(e) {
          e.preventDefault();
          var padre = document.getElementById("p2");
          var idParent = e.target.parentNode.id;
          console.log(idParent);
          padre.removeChild(document.getElementById(idParent));
        });
        span.innerHTML = e;
        contentArticle.appendChild(span);
        span.appendChild(aRemove);
      })

    })

    article.appendChild(headerArticle);
    article.appendChild(contentArticle);
    sectionContent.appendChild(article);
}


addArticle();
