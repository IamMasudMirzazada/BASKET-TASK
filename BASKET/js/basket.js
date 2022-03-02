let products=JSON.parse(localStorage.getItem("basket"));
 let count=1;
for (let product of products) {
    console.log(product)
    console.log(product.Src)

   let tdN=document.createElement("td");
   let tdImage=document.createElement("td");
   let tdName=document.createElement("td");
   let tdCount=document.createElement("td");
   let tdDelete=document.createElement("td");

   let icon = document.createElement('i');
   icon.className = "fa-solid fa-trash-can";
    icon.onclick=function(){
 this.parentElement.parentElement.remove();
//  localStorage.removeItem(this.parentElement.)
 alert(this.parentElement.parentElement)
localStorage.removeItem(this.parentElement.parentElement);
  }

   tdN.innerText=count;
   count++;

   let img=document.createElement("img");
   img.setAttribute("src",product.Src);
   tdImage.append(img)
   tdName.innerText=product.Name;
   tdCount.innerText=product.Count
   tdDelete.append(icon)

   let tr=document.createElement("tr");
   tr.append(tdN,tdImage,tdName,tdCount,tdDelete);

   document.querySelector(".table").lastElementChild.append(tr)
   
}