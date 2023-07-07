var count=3;
var countelement = document.querySelector(".like")

console.log(countelement);

function add(){
    count++;
    countelement.innerText = "" + count;
    console.log(count)
}