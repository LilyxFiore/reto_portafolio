var arrayArticles = [];
var arrHeaders = ["dmngbgr01.thoughtworks.com          |<span>idle          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent",
                  "dmngbgr02.thoughtworks.com          |<span>idle          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent",
                  "dmngbgr03.thoughtworks.com          |<span>idle          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent"];

function addArticle(){
    var count = arrayArticles.length;
    var sectionContent = document.getElementById("content");
    var article = document.createElement("article");
    var headerArticle = document.createElement("h4");
    headerArticle.innerHTML = arrHeaders[count];
    var contentArticle = document.createElement("p");
    contentArticle.innerHTML="+";
    contentArticle.id="c"+count;

    var addResource = document.createElement("a");
    addResource.innerHTML="Specify Resources";

    contentArticle.appendChild(addResource);

    addResource.addEventListener("click", function(e){
      e.preventDefault();

      var texto = prompt("¿Que desea agregar?");

      var arrayTexto = texto.split(",");

      arrayTexto.forEach(function(e,i){
        var span = document.createElement("span");
        span.id="s"+i+count;
        var aRemove = document.createElement("a");
        aRemove.href="#";
        aRemove.setAttribute("class",'glyphicon glyphicon-remove-circle');
        aRemove.addEventListener('click',function(e) {
          e.preventDefault();
          var padre = e.target.parentNode.parentNode;
          var idParent = e.target.parentNode.id;
          console.log(padre);
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
    arrayArticles.push(article);
}

arrHeaders.forEach(function(e) {
  addArticle();
})
