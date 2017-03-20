window.addEventListener('load',function(){
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

  function addPopup(contentArticle){
    var texto="";
    var popUp = document.createElement("div");
    popUp.setAttribute("class","tool-tip");

    var sPopUp = document.createElement("span");
    sPopUp.innerHTML = "(Separate multiple resources name with commas) </br>";
    popUp.appendChild(sPopUp);

    var iPopUp = document.createElement("input");
    iPopUp.setAttribute("id","popUpText");
    iPopUp.setAttribute("type","text");
    iPopUp.style.width = "470px";
    iPopUp.innerHTML = "</br>";

    popUp.style.display = "block";

    popUp.appendChild(iPopUp);

    var addButtonResource = document.createElement("button");
    addButtonResource.setAttribute("id","add");
    addButtonResource.setAttribute("type","button");
    addButtonResource.innerHTML= "Add resources";
    popUp.appendChild(addButtonResource);



    var closePopUp = document.createElement("button");
    closePopUp.setAttribute("id","close");
    closePopUp.setAttribute("type","button");
    closePopUp.innerHTML= "Close";

    addButtonResource.addEventListener('click',function(e){
      e.preventDefault();
      console.log(contentArticle);
      popUp.style.left = "55px";
      console.log(popUp.style.left);
      addResource(contentArticle,iPopUp.value);
      popUp.style.display = "none";
    });

    closePopUp.addEventListener('click',function(e){
      e.preventDefault();
      popUp.style.display = "none";
    });

    popUp.appendChild(closePopUp);
    contentArticle.appendChild(popUp);
    return texto;
  }

  function addArticle(index,color){

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
      addPopup(contentArticle);
    });

    article.appendChild(headerArticle);
    article.appendChild(contentArticle);
    sectionContent.appendChild(circle);
    sectionContent.appendChild(article);
    sectionLeft.appendChild(sectionContent);


  }

  function addResource(contentArticle,texto){
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
    });
  }

  function deleteResource(contentArticle,span){
    contentArticle.removeChild(span);
  }

});
