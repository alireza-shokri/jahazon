const allproduct=[
    {id:1, img_src:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/photo-1571607182000-b1d278eb9b_1200x768.jpeg?size=1200:675',price:3200,name_product:'mountain'},

    {id:2, img_src:'https://www.economist.com/img/b/1280/720/90/sites/default/files/20201017_WBP503.jpg', price:3773,name_product:'stor'},

    {id:3, img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcerxj5Gbd0MOdEBT3c3QkPxiiNP0-J83Dg&s',price:39200,name_product:'plum'},

    {id:4, img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8AISGp2zD-rlDW-VumyV8WxIJaHUIm00pA&s',price:31200,name_product:'fruit'},

    {id:5, img_src:'https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/Most-Beautiful-House-in-the-World_0_1200.jpg',price:9200,name_product:'house pull'},

    {id:6, img_src:'https://patch.com/img/cdn20/users/1911647/20240601/033104/img-1296___01153102257.jpg',price:97200,name_product:'house'},


    {id:7, img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfk-XXSCXviGd5SQ8B0iu_kYAb-9YsTPtIcg&s',price:9700,name_product:'phone'},

    {id:8, img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4f970JSQv5b_zza0Xghfq-wRwPJroW_6FFQ&s',price:11200,name_product:'phone2'},

    {id:9, img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gw5I5PxtuFqjMlyr4O0o-iiW6zFMDnryIA&s',price:92900,name_product:'computar'},
]

let $=document;
let contenar=$.querySelector(".contenar");
let house_svg=$.querySelector('.house_svg');
let list_select_product=[];
let totalll_price;
let page=0;
let basket=$.querySelector('.basket')
let all_basket=$.querySelector('.all_basket')
let fragment=$.createDocumentFragment()

// createElement box first page-----------------------------------
function createElement(object) {
    let box=$.createElement("div");
    box.className='box';

    let id_box=$.createElement('span');
    id_box.className='id_box'
    id_box.innerHTML=object.id;

    let name_product=$.createElement("p");
    name_product.className='name_product';
    name_product.innerHTML=object.name_product;

    let img_product=$.createElement('img');
    img_product.className='img_product';
    img_product.src=object.img_src;

    let parent_bay_price=$.createElement('div');
    parent_bay_price.className='parent_bay_price';

    let price=$.createElement("spen");
    price.className='price';
    price.innerHTML=object.price;

    let btn_bay=$.createElement('button');
    btn_bay.className='btn_bay';
    btn_bay.innerHTML='bay';
    btn_bay.addEventListener('click',func_bay);

    parent_bay_price.append(price,btn_bay);
    box.append(img_product,id_box,name_product,parent_bay_price);
    fragment.append(box);
}
   
// add number in svg baslet-----------------------------
function add_number_toBasket() {
    if(list_select_product[0]){
        $.querySelector('.number').innerHTML=(list_select_product.length);
        $.querySelector('.number').style.padding='2px';
    }
    else{
        $.querySelector('.number').innerHTML='';
         $.querySelector('.number').style.padding='0';
    }
}

// click in button by the box -----------------------------------
function func_bay(event){
    let vazHas=false;
    let selet_in_List=(event.target.parentElement.parentElement.children[1].innerHTML)-1;
    if(list_select_product[0]){
        list_select_product.forEach(function(hasAbject){
            if(allproduct[selet_in_List]==hasAbject){
                vazHas=true;
                return;
            }})
        if(!vazHas){
            list_select_product.push(allproduct[selet_in_List])
            add_number_toBasket();}
        else alert("تو سبد وجود دارع");
    }
    else{
        list_select_product.push(allproduct[selet_in_List])
        add_number_toBasket();}
}

// click basket-----------------------------------------
function click_basket_by(){
    if(list_select_product[0]){
        if(!page){
            contenar.innerHTML='';
            basket.innerHTML=''
            contenar.className='contenar_basket';
            all_basket.style.display='block'
            page=1; shomar=0

            document.querySelector(".boxx").style.display="block";
            setTimeout(()=>{
                list_select_product.forEach(object => {
                    createElementBasket(object)
                });
                document.querySelector(".boxx").style.display="none";
                contenar.append(fragment)
                chang_input()
            },4000)
            }
    }
    else 
        if(!page)
            alert ('هیچی نیست عزیزم')
        
}
87
// click_house-----------------------------------
function click_house() {
    if(page){
        contenar.innerHTML='';
        contenar.className='contenar';
         all_basket.style.display='none'
        page=0;
        allproduct.forEach(function(object){
        createElement(object)
    })
    contenar.append(fragment)
}}
let shomar=0;
// createElement basket -----------------------------------
function createElementBasket(selet_obgect) {
    let item=$.createElement('div');
    item.className='item';

    let id_box=$.createElement('span');
    id_box.className='id_box';
    id_box.innerHTML=selet_obgect.id;

    let number_list=$.createElement('span');
    number_list.className='number_list';
    number_list.innerHTML = ++shomar;

    let img_basket=$.createElement("img");
    img_basket.src=selet_obgect.img_src;
    img_basket.className='img_basket';

    let price_basket=$.createElement('h4');
    price_basket.className='price_basket';
    price_basket.innerHTML=selet_obgect.price;

    let input_number=$.createElement('input');
    input_number.type='number';
    input_number.min='1';
    input_number.value='1';
    input_number.addEventListener("input",chang_input);
    input_number.className='input_number'
   
    let remove_item=$.createElement('button');
    remove_item.className='remove_item';
    remove_item.addEventListener('click',remove_basket);
    remove_item.innerHTML='remove';

    item.append(id_box,number_list,img_basket,price_basket,input_number,remove_item);
    basket.append(item)
   fragment.append(all_basket)
    
}

// chang_input------------------------------------
function chang_input() {
    let totall=0;
    all=$.querySelectorAll('.price_basket');
    all.forEach(function(element){
        totall+=(+element.innerHTML)*(element.parentElement.children[4].value);
    })
   $.querySelector('.totall_price').innerHTML='totall price :  '+totall;
}
  
// remove------------------------------------
function remove_basket(elm) {
    let which=list_select_product.findIndex(function(object){
        if(elm.target.parentElement.children[0].innerHTML==object.id)
            return object;
    })
   
    list_select_product.splice(which,1);
    elm.target.parentElement.remove();
    chang_input();
    add_number_toBasket();

    let new_number_list=$.querySelectorAll('.number_list')
    for (var i=0;i<new_number_list.length;i++){
       new_number_list[i].innerHTML=(i+1);}
}

// window -------------------------------------------load
window.onload=function (){
    allproduct.forEach(function(object){
        createElement(object)})
    contenar.append(fragment) 
}

house_svg.addEventListener('click',click_house);
$.querySelector('.basket_number').addEventListener('click',click_basket_by);
