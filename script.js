 
  const products = [
    {
      name: "Rose",
      price: 20,  
      description: "love, beauty, and emotion",
      image: "flower.jpg",
      qty: 1,
    },
    {
      name: "Peony",
      price: 30,
      description: "Peonies grow from tuberous roots, boasting glossy, is a king flower",
      image: "peony.jpg",
      qty: 2,
    },
  ];

  for(let val of products){
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card">
    <img src="${val.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${val.name}</h5>
      <p>price ${val.price}</p>
      <p class="card-text">${val.description}</p>
      <a href="#" class="btn btn-primary addToCart">Add</a>  
    </div>
  </div>
  </div>
    `
  }
  
  let cart = [];

  let addbtn = document.querySelectorAll(".addToCart");

  addbtn.forEach((element,i) => {
    element.addEventListener("click",function(){
        addToCart(products[i])
    })
  });
  
  function addToCart(obj) {
    if(cart.find(val => val.name == obj.name)){
      obj.qty++
    }else {
      cart.push(obj);
    }
    printcart()
    total()
  }

  function printcart(){
    document.getElementById("cartItems").innerHTML =""
    for(let val of cart){
      document.getElementById("cartItems").innerHTML += `
      <div class="d-flex justify-content-between">
      <img src="${val.image}" width="50">
      <p>${val.name}</p>
      <p>${val.price}</p>
      <p class="btn btn-secondary rounded plusBtn">+</p>
      <p>${val.qty}</p>
      <p class="btn btn-secondary rounded minusBtn">-</p>
      <p class="btn btn-secondary rounded deleteBtn">X</p>
      </div>
    `
  }
  
  // here
  
  // here

    let plusbtn = document.querySelectorAll(".plusBtn");
    let minusbtn = document.querySelectorAll(".minusBtn");
    let deletebtn = document.querySelectorAll(".deleteBtn");
    
    plusbtn.forEach((element,i) => {
    element.addEventListener("click",function(){
        cart[i].qty++;
        printcart();
        total()
    });
  });
  minusbtn.forEach((element,i) => {
    element.addEventListener("click",function(){
      if(cart[i].qty > 1){
        cart[i].qty--;
      }
      else{
        cart.splice(i,1);
      }
        printcart();
        total()
    });
  });
  deletebtn.forEach((element,i) => {
    element.addEventListener("click",function(){
      cart[i].qty = 1;
      cart.splice(i,1);
        printcart();
        total()
    });
  });

 

    
}

function total(){
  let total = 0;
  let disc = 0;
  let finalltotal = 0;
  for(let val of cart){
    total += val.qty * val.price
  }

  if(total >= 100){
    disc = total * 0.1;
    finalltotal = total - disc;
    document.getElementById("total").innerHTML = `Total ${total} $ <br> Discount : ${disc} $ <br> Total After Discount ${finalltotal} $`
  }else {
    document.getElementById("total").innerHTML = `Total ${total} $`
  }
  if(total == 0){
    document.getElementById("total").innerHTML = ""
  }
}
  

