console.log("Bài 1: ");
document.write("Bài 1: ");
document.write("<br>");
var a, b;
a = prompt("Nhập số a: ");
a = parseInt(a);
b = prompt("Nhập b: ");
b = parseInt(b);
if(a < b){
    let sum = 0;
    for(let i = a; i <= b; i++){
        var x = true;
        if(i < 2){
            x = false;
        }
        else{
            for (var j = 2; j < i-1; j++){
                if(i % j == 0){
                    x = false;
                    break;      
                }
            }
        }
        if(x == true){
            console.log("Số nguyên tố là: " + i);
            sum = sum + i;
        }
    }
    console.log("Tổng các số nguyên tố từ a đến b là: ", sum);
    document.write("Tổng các số nguyên tố từ a đến b là: ", sum);
}
