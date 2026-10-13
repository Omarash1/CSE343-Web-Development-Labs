let cartQ = 0;

let addbtn = document.getElementById("add");
addbtn.addEventListener("click", ()=>{
    cartQ++;
    console.log("Button was clicked");
    console.log("Cart quantity: " + cartQ);
});

let removebtn = document.getElementById("remove");
removebtn.addEventListener("click", ()=>{
    if (cartQ > 0) {
        cartQ--;
    }
    else {
        console.log("Cannot remove from an empty cart");
    }
    console.log("Button was clicked");
    console.log("Cart quantity: " + cartQ);
});

let add2btn = document.getElementById("add2");
add2btn.addEventListener("click", ()=>{
    cartQ += 2;
    console.log("Button was clicked");
    console.log("Cart quantity: " + cartQ);
});

let add3btn = document.getElementById("add3");
add3btn.addEventListener("click", ()=>{
    cartQ += 3;
    console.log("Button was clicked");
    console.log("Cart quantity: " + cartQ);
});

let resetbtn = document.getElementById("Reset");
resetbtn.addEventListener("click", ()=>{
    cartQ = 0;
    console.log("Button was clicked");
    console.log("Cart quantity: " + cartQ);
});

let showQbtn = document.getElementById("ShowQ");
showQbtn.addEventListener("click", ()=>{
    console.log("Button was clicked");
    console.log("Cart quantity: " + cartQ);

    alert("Cart quantity: " + cartQ);
});



