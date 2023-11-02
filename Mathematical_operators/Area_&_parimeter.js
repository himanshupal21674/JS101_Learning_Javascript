function areaAndPerimeter(L1,B1,L2,B2) {
    //write code here
    let area1 = L1*B1;
    let area2 = L2*B2;
    let perimeter1 = 2*(L1+B1);
    let perimeter2 = 2*(L2+B2);
    if (area1>area2){
        console.log("true");
    }
    else{
        console.log("false");
    }
    if (perimeter1>perimeter2){
        console.log("true");
    }
    else{
        console.log("false");
    }
    
}