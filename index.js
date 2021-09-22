// Code your solution in this file!
//let blk1
//let blk2
//console.log('Hello World');
//let distToHq
/* function distanceFromHqInBlocks(){
    return blk1 - blk2;
    
}
distanceFromHqInBlocks(50,42);
let function distanceFromHqInFeet() {
    return (distanceFromHqInBlocks() * 264);
}
distanceFromHqInFeet; */

/* let x=43;
let y=1;
//console.log('Hello World');
//let distToHq
function distanceFromHqInBlocks(x,y) {
    return x - y;
    
} */
/* let distance
let distance2

function distanceFromHqInBlocks(distance){
    let x = 43
    let y = 42
        return distance = (x - y);
};

console.log(distance); */
let blk1=43
let blk2=42
let blk3=600

function distanceFromHqInBlocks(block3, block2){
    return blk3 - blk2;

}
console.log(distanceFromHqInBlocks());



function distanceFromHqInBlocks(block1, block2){
    return blk1 - blk2;

}

console.log(distanceFromHqInBlocks());

    function distanceFromHqInFeet(blocks){
        let distance= distanceFromHqInBlocks();
        return distance * 264
        //console.log(feet);  
    }

        function distanceTravelledInFeet(blk1,blk2){
            if (blk1>blk2){
                return (blk1-blk2) * 264
             }else{
                 return (blk2-blk1) * 264
             }
        }

    console.log("Is this running");
    console.log(blk1);
    console.log(blk2);

    function calculatesFarePrice(block1,block2){
        let feetDistance = distanceTravelledInFeet(block1,block2);
        if(feetDistance<400){
            return 0 
        }else if (
            feetDistance>400 && feetDistance<=2000){
            return .02 * (feetDistance -400)
        }else if (feetDistance>2000 && feetDistance<2500){
            return 25
        }else{
            return "cannot travel that far"
        }

    }
//distanceFromHqInBlocks(distanceFromHqInFeet(), 8);{

/*  distanceFromHqInFeet() * distanceFromHqInBlocks();
console.log(distanceFromHqInBlocks());*/
console.log(distanceFromHqInFeet()); 


/*  function distanceFromHqInBlocks(distance2){
    let w = 50
    let z = 42
    return distance2 = w - z;
};

console.log(distance2);

function distanceFromHqInFeet(distanceFeet){
    return (distance * 264);
}

console.log(distanceFromHqInFeet()); */