function taxCal(num){
    if(num<=250000){
        return 0;
    }else if(num>250000&&num<=500000){
        return Math.round(num * 0.1)
    }else if(num>500000&&num<=1000000){
        return Math.round(num * 0.2)
    }
    else if(num>1000000){
        return Math.round(num*0.3)
    }
}
module.exports = {taxCal}