function addArticle(){
    var parent = document.getElementById("content");
    var article = document.createElement("article");
    var p1 = document.createElement("p");
    p1.innerHTML = "<h4>bjsdmngbgr01.thoughtworks.com          |<span>idle          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent</h4>"
    var p2 = document.createElement("p");
    p2.innerHTML="+";
    p2.id="p2";
    var a2 = document.createElement("a");
    a2.innerHTML="Specify Resources";
    p2.appendChild(a2);
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
        p2.appendChild(span);
        span.appendChild(aRemove);
      })

    })

    article.appendChild(p1);
    article.appendChild(p2);
    parent.appendChild(article);
}


addArticle();
