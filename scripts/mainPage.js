function appendProdData(image,cat,loc){
    let div = document.createElement("div");
    div.setAttribute("class","ProdImgCat");

    let div2 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("class","images");
    img.src=image;

    let div3 = document.createElement("div");
    div3.setAttribute("class","category");

    let p = document.createElement("p");
    p.innerText = cat;
    p.style.textAlign= "center";


    let p2 = document.createElement("p");
    p2.innerText = "[VIEW MORE]";
    p2.setAttribute = ("id", "viewMore");
    p2.style.textAlign = "center";
    div.style = "border:1px solid gray";

    div3.append(p);
    div2.append(img);

    div.append(div2, div3,p2);
    loc.append(div);
    
}

export default appendProdData;