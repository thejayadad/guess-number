

function ranNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function check(){
    let ran = ranNum(0,10)
    let num = document.getElementById("num").value;
    let check = function(ran, num){
        if (ran === num){
            return `Correct, number i was thinking was ${ran}`
        } else {
            return `Wrong, number i was thinking was ${ran}`

        }
    }
    document.getElementById("result").innerHTML = check(ran, num);

}