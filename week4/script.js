//var number1 = 10 ;
let count_p = 0 ;
//const number3 = 10 ;
const name_p = ["image/img1.jpg","image/img2.jpg","image/img3.jpg ","image/img4.jpg"];

console. log(name_p[count_p]);
function forwardPic(){
    name_p.length;
    if(count_p < name_p.length-1 ){
        count_p = count_p + 1  ;
    }else{
        count_p = 0 ;
    }
    
    console.log("count = " , count_p);
    console.log("count = " , name_p[count_p]);
    console.log(name_p.length) ;

    document.getElementById("slider").src = name_p[count_p] ;
}
setInterval(forwardPic,3000);