function addArticle(){
    var parent = document.getElementById("content");
    var article = document.createElement("article");
    var p1 = document.createElement("p");
    p1.innerHTML = "<h4>bjsdmngbgr01.thoughtworks.com          |<span>idle          |</span><span>192.168.0.1    |</span>        var/lib/cruise-agent</h4>"
    var p2 = document.createElement("p");
    p2.innerHTML="+<a href=#>Specify Resorurces</a> | Resources: <span>ubuntu<a class=""glyphicon glyphicon-remove-circle"" href=# style=text-decoration:none></a></span><span>kjjds<a class=glyphicon-remove-circle href=# style=text-decoration:none></a></span>";
    article.appendChild(p1);
    article.appendChild(p2);
    parent.appendChild(article);
}


addArticle();
