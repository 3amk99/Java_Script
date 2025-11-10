let beblio = [] ;
let collection = JSON.parse(localStorage.getItem("gohst")) || [] ;
beblio.push(...collection);
function beblio_fun(list = beblio)
{
   let result_1 = document.getElementById("result");
   result_1.innerHTML = ``;
   list.forEach((element,index) => {
    let ibn = document.createElement("div");
    ibn.classList.add("ibn");
    
    let title_1 = document.createElement("p");
    title_1.classList.add("title_1");
    title_1.innerHTML = `<span style="color:black">the title is :</span> ${element.title}`;

    let author_1 = document.createElement("p");
    author_1.classList.add("author_1");
    author_1.innerHTML = `<span style="color:black">the author is :</span> ${element.author}`;

    let year_1 = document.createElement("p");
    year_1.classList.add("year_1");
    year_1.innerHTML = `<span style="color:black">the year is :</span> ${element.year}`;

    let price_1 = document.createElement("p");
    price_1.classList.add("price_1");
    price_1.innerHTML = `<span style="color:black">the price is :</span> ${element.price}DH`;

    let code_1 = document.createElement("p");
    code_1.classList.add("code_1");
    code_1.innerHTML = `<span style="color:black">the code is :</span> ${element.code}`;

    let possibility_1 = document.createElement("p");
    possibility_1.classList.add("possibility_1");
    possibility_1.innerHTML = `<span style="color:black">the possibility : </span>${element.possibility}`;

    let photo_1 = document.createElement("img");
    photo_1.classList.add("photo_1");
    photo_1.src = element.photo;
    photo_1.width = 200 ;
    photo_1.alt = "error" ;

    let button_delete = document.createElement("button");
    button_delete.classList.add("button_delete");
    button_delete.innerHTML = `delete`;
    button_delete.addEventListener("click",function()
    {
       list.splice(index,1);
       localStorage.setItem("gohst",JSON.stringify(beblio));
       beblio_fun();
       tamane();
    });
    let button_TAKE = document.createElement("button");
    button_TAKE.classList.add("button_TAKE");
    button_TAKE.innerHTML = `TAKE`;
    button_TAKE.addEventListener("click",function()
    {
       element.possibility = "there is NOT";
       beblio_fun();
       tamane();
    });
    let button_RETURNE = document.createElement("button");
    button_RETURNE.classList.add("button_RETURNE");
    button_RETURNE.innerHTML = `RETURNE`;
    button_RETURNE.addEventListener("click",function()
    {
       element.possibility = "there is";
       beblio_fun();
       tamane();
    });
    if(element.possibility === "there is" )
    {
       ibn.style.backgroundColor = "rgb(210, 255, 188)";
    }
    else if(element.possibility === "there is NOT")
    {
       ibn.style.backgroundColor = " rgb(255, 218, 218)";
    }
    ibn.appendChild(photo_1);
    ibn.appendChild(title_1);
    ibn.appendChild(author_1);
    ibn.appendChild(year_1);
    ibn.appendChild(price_1);   
    ibn.appendChild(code_1);
    ibn.appendChild(possibility_1);
    ibn.appendChild(button_delete);
    ibn.appendChild(button_TAKE);
    ibn.appendChild(button_RETURNE);
    result_1.appendChild(ibn);
    
   });

}

let search_bar = document.getElementById("bar");
search_bar.addEventListener("input",function()
{
  let search_bar_txt =  search_bar.value.toLowerCase();
  let index_beblio = beblio.filter(item => item.title.toLowerCase().includes(search_bar_txt) || String(item.code).toLowerCase().includes(search_bar_txt) );
  beblio_fun(index_beblio);
});




document.getElementById("az").addEventListener("click", function() 
{
    beblio.sort((a, b) => a.title.localeCompare(b.title)); 
    beblio_fun(beblio);
});
  document.getElementById("za").addEventListener("click", function() 
{
    beblio.sort((a, b) => b.title.localeCompare(a.title)); 
    beblio_fun(beblio);
});




function tamane()
{
    let taman_1 = document.getElementById("taman");
    taman_1.classList.add("taman_1");
    taman_1.innerHTML = ``;

    let max_price = beblio.reduce((item1,item2) => Number(item1.price) > Number(item2.price) ? item1 : item2 );
    let total_price = beblio.reduce((sum , item) => sum + Number(item.price) , 0);
    let average_price = (total_price/beblio.length).toFixed(2);
    let count = 0 ;
    beblio.forEach(item => {
     if(item.possibility === "there is")
     {
       count++;
     }
    });
    let count_all = 0 ;
    beblio.forEach(item => {
        count_all++;
    });
    let max_price_1 = document.createElement("p");
    max_price_1.classList.add("max_price_1");
    max_price_1.innerHTML = `the max price : ${max_price.price}`;

    let total_price_1 = document.createElement("p");
    total_price_1.classList.add("total_price_1");
    total_price_1.innerHTML = `the total price : ${total_price}`;
    
    let average_price_1 = document.createElement("p");
    average_price_1.classList.add("average_price");
    average_price_1.innerHTML = `the average price : ${average_price}`;

    let count_1 = document.createElement("p");
    count_1.classList.add("count");
    count_1.innerHTML = `the availebel books : ${count}`;
    let count_all_1 = document.createElement("p");
    count_all_1.classList.add("count_all_1");
    count_all_1.innerHTML = `the total books : ${count_all}`;

    taman_1.appendChild(max_price_1);
    taman_1.appendChild(total_price_1);
    taman_1.appendChild(average_price_1);
    taman_1.appendChild(count_1);
    taman_1.appendChild(count_all_1);

}
beblio_fun();
tamane();