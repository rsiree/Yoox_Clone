function appendProducts(data, count, check, i, loc) {
    let el = data[i - 1];
        
    if (i < 0 || i > data.length) {
        appendProduts(data, 0, 3, 1, loc);
        return;
    }
    if (i <= check) {
        var div = document.createElement("div");
        div.setAttribute = ("class", "p-append-div");
        div.setAttribute = ("class", "catPage");

        let img = document.createElement("img");
        img.setAttribute = ("class", "d-3-img");
        let title = document.createElement("p");
        title.setAttribute = ("class", "d-3-title");
        let cat = document.createElement("div");
        cat.setAttribute = ("class", "d-3-cat");
        let price = document.createElement("p");
        price.setAttribute = ("class", "d-3-price");
            
        img.src = el.img;
        title.innerText = el.heading;
        cat.innerText = el.category;
        price.innerText = el.price;

        div.append(img, title, cat, price);
        img.addEventListener("click", function () {
            localStorage.setItem("p-array", JSON.stringify(el));
            window.location.href = "product.html";

        });
            
            
            
        loc.append(div);
            appendProduts(data,count,check,i+1,loc);
        }
        
        document.querySelector(".ar-left").addEventListener("click",function(){
            pDiv3.innerText="";
            // console.log("1l",i,count);
            count=count-1;
            appendProduts(div3Data,count,check-2,i-2,loc);
        });
        document.querySelector(".ar-right").addEventListener("click",function(){
            pDiv3.innerText="";
            // console.log("1r",i,count);
            count=count+1;
            appendProduts(div3Data,count,check+2,count*3,loc);
        }); 
}

// export  appendProducts