const slider = document.querySelector(".sliderr[type=range]")
const vone = document.querySelector(".value-one")
const vtwo = document.querySelector(".value-two")
const check = document.querySelector("#checkboxo")




   

slider.addEventListener("input",(value)=>{
if (value.target.value == 0) {
 vone.innerText="10"+"K";
  vtwo.innerText="8";
  discount("k")
}
if (value.target.value == 25) {
    vone.innerText="50"+"K";
    vtwo.innerText="12";
    discount("k")
}
if (value.target.value == 50) {
    vone.innerText="100"+"K";
    vtwo.innerText="16";
    discount("k")
}
if (value.target.value == 75) {

    vone.innerText="500"+"K";
    vtwo.innerText="24";
    discount("k")
}
if (value.target.value == 100) {
    vone.innerText="1"+"M";
    vtwo.innerText="36";
    discount("M")
}

})


function discount(m){
    if (check.checked == true) {
        let valueOne = parseFloat(vone.textContent)
    
    vone.innerText=valueOne-(valueOne*0.25)+m
    }
}
check.addEventListener("click",()=>{   
    if (check.checked == true) {
        let valueOne = parseFloat(vone.textContent)

    vone.innerText=valueOne-(valueOne*0.25)+"K"
    }else if (check.checked == false) {
        let valueOne = parseFloat(vone.textContent)
    vone.innerText=(valueOne/25)*100/3+"k";
    }
    })