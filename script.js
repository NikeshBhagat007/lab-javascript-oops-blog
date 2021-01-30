/* Fill your code*/
//class and its properties title and description 
class Blog
{
    constructor(title,details)
    {
        this.title = title;
        this.details= details;
        this.addTitle();
        this.addDescription();
    }
    //function displays heading of blog 
    addTitle()
    {
        //created h1 element and appent it in html
        var title_card=document.createElement("h1");
        title_card.setAttribute("id","blog-tile");
        document.getElementById("card-text").appendChild(title_card);
        title_card.innerHTML=this.title;
        console.log(title_card);
    }
    //function displays description about blog
    addDescription()
    {
        var description_card=document.createElement("p");
        description_card.setAttribute("id","blog-descr");
        document.getElementById("card-text").appendChild(description_card);
        console.log(this.details);
        description_card.innerHTML +=this.details;
        console.log(description_card);
    }
}

// trigger event of displaying blog template on click of Add new Post button
var addBtn = document.getElementById("addBlog");
addBtn.addEventListener("click",function(){
    document.getElementById("popupContact").style.display = "block";
});

// trigger event of hide blog template on click of cross sign
var closeBtn = document.getElementById("close");
closeBtn.addEventListener("click",function(){
    document.getElementById("popupContact").style.display = "none";
});


// trigger event of hide blog template on click of cross sign
var postBtn = document.getElementById("post");
postBtn.addEventListener("click",function(){
    document.getElementById("popupContact").style.display="none";
    var $img =document.createElement("img");
    $img.setAttribute("src","./assets/java card image.svg")
    document.getElementById("card-text").appendChild($img);
    var $title =document.getElementById("title").value;
    console.log($title);
    var $detail =document.getElementById("detail").value;
    console.log($detail);
    var objBlog = new Blog($title,$detail);
});