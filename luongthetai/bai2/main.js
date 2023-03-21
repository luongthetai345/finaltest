console.log("Bài 2: ");
document.write("Bài 2: ");
document.write("<br>");
function numberOneTriangle(Number){
    let myString = "";
    for (let i = 0; i < Number; i++){
        myString += "*";
        console.log(myString);
    }
}
numberOneTriangle(4);