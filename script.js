// let elms=document.querySelectorAll(".button")
// for (const elm of elms) {
//     console.log(elm);
// }



// console.log(document.getElementsByTagName("button")[3]);


// for(let index=0;index<document.getElementsByClassName("button").length;index++){
//  console.log(document.getElementsByClassName("button")[length]);
// }


// document.getElementById("btn_click2").remove()


// document.querySelector("#btn_click0").onclick=function(){
//     console.log(btn_click0.innerHTML);
// }
// document.querySelector("#btn_click1").onclick=function(){
//     console.log(btn_click1.innerHTML);
// }
// document.querySelector("#btn_click2").onclick=function(){
//     console.log(btn_click2.innerHTML);
// }
// document.querySelector("#btn_click3").onclick=function(){
//     console.log(btn_click3.innerHTML);
// }



// let elms=document.querySelectorAll("button")
// for (const elm of elms) {
//     elm.onclick=function(){
//         console.log(elm.innerText);
//     }
// }




// btn_click2.addEventListener("click",function(){
//  alert("Hello,guys");
// })



// let btn=document.getElementById("btn_click0");
// btn_click0.onclick =()=>{
//     let value=document.getElementById("input_0").value;
//     if(value.trim () !=""){
//         console.log(value);
//     }else{
//     alert("bos olmaz")
//     }
// }


// let btn=document.getElementById("btn_click0");
// btn_click0.onclick =()=> {
//  let input=document.getElementById("input_0");
//     let value=input.value.trim();
// if(value.length==0){
//     console.log(input.nextElementSibling.style.display="block");
//     return ;
// }
// else{
//     console.log(value);
// } 
// }


//  if(value.trim()!=0){
//     console.log(input);
//  }else{
//     alert("bos olmaz")
//  }
// }

// btn_click0.addEventListener("click",function(){

//     let value=document.getElementById("input_0").value;
//     if(value.trim()!=0){
//        console.log(value);
//     }else{
//        alert("bos olmaz")
//     }
// }
// )




let btn_add=document.getElementById("btn_add");
let stu_list=document.getElementById("stu_list");
let input=document.getElementById("input_0");
btn_add.onclick=()=>{
    let input=document.getElementById("input_0").value;
    let li=document.createElement("li");
    li.innerText=input.value;
    stu_list.append(li);

}








