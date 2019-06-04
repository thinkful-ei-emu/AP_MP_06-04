function decoder(code){
    let split = code.split(' ');
    let array = [];

    let empty = '';

    for (let i = 0; i <split.length; i++){
        if (split[i].length === 3){
            array.push(" ");
        }
           else {
        array.push(split[i].charAt(split[i].length - 1).toUpperCase());
        }
    }

    let reducer = array.reduce(function(a, b){
        return a += b;
    },"");
    return reducer;
}

let input = "noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest";

console.log(decoder(input));