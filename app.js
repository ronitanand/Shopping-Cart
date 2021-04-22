const show_cart=document.querySelector('.show-cart');
const cart_button=document.querySelector('.cart-button i');
const cart=document.querySelector('.cart');
const total=document.querySelector('.total span');
let total_price=0;
let records=[];
const show=(img_addr,name,price)=>{
    let data=`
    <img src='${img_addr}' alt='picture here'>
    <h2>${name}</h2>
    <h2>${price}</h2>
    `
    console.log(name);
    show_cart.innerHTML=data;
   // document.querySelector('.items').classList.add('blur');
    window.scroll(1,1);
    
}



const add=(src,cake_name,price,e)=>{
    console.log(src,cake_name,price);
    console.log(e);
    
    
    if(!records.includes(e)){
    let cart_details=`
    <div class='cart-items'>
    <img src='${src}' >
    <h3>${cake_name}</h3>
    <h3>${price}</h3>
    <input type='number' value='1' onchange="change(this.value,this.previousElementSibling.textContent)"></input>
    </div>
    `
    let new_price=price.replace('$','');
    total_price+=Number(new_price);
    total.innerHTML=total_price+'$';
    records.push(cake_name);
    cart.innerHTML+=cart_details;
    }
    else{
        alert('already present');
    }
}

const change=(quantity,rate)=>{
    console.log(quantity);
    console.log(rate);
    let new_rate=rate.replace('$','');
    new_rate=Number(new_rate);
    total_price+=new_rate;
    total.innerHTML=total_price+'$';

}