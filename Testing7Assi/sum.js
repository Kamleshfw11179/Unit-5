function getSum(){
    let s = 0;
    for(var i=0;i<arguments.length;i++){
        s+=arguments[i]
    }
    return s
}

module.exports = {getSum}