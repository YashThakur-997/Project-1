alert("hi")

let box=document.querySelectorAll(".box1");
let output=document.querySelector(".output");

box.forEach((element) => {
element.addEventListener("click",()=>{
    output.innerHTML="box1 is clicked";
    console.log("box is clicked");
});

});
