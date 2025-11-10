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
    title_1.innerHTML = `the title is : ${element.title}`;

    let author_1 = document.createElement("p");
    author_1.classList.add("author_1");
    author_1.innerHTML = `the author is : ${element.author}`;

    let year_1 = document.createElement("p");
    year_1.classList.add("year_1");
    year_1.innerHTML = `the year is : ${element.year}`;

    let price_1 = document.createElement("p");
    price_1.classList.add("price_1");
    price_1.innerHTML = `the price is : ${element.price}`;

    let code_1 = document.createElement("p");
    code_1.classList.add("code_1");
    code_1.innerHTML = `the code is : ${element.code}`;

    let possibility_1 = document.createElement("p");
    possibility_1.classList.add("possibility_1");
    possibility_1.innerHTML = `the possibility : ${element.possibility}`;

    let photo_1 = document.createElement("img");
    photo_1.classList.add("photo_1");
    photo_1.src = element.photo;
    photo_1.width = 200 ;
    photo_1.alt = element.title ;

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



function tamane()
{
    let taman_1 = document.getElementById("taman");
    taman_1.classList.add("taman_1");
    taman_1.innerHTML = ``;

    let count = 0 ;
    beblio.forEach(item => {
     if(item.possibility === "existed")
     {
       count++;
     }
    });
    let count_all = 0 ;
    beblio.forEach(item => {
        count_all++;
    });

    let count_1 = document.createElement("p");
    count_1.classList.add("count");
    count_1.innerHTML = `the availebel books : ${count}`;

    let count_all_1 = document.createElement("p");
    count_all_1.classList.add("count_all_1");
    count_all_1.innerHTML = `the total books : ${count_all}`;

    taman_1.appendChild(count_1);
    taman_1.appendChild(count_all_1);
}
beblio_fun();
tamane();