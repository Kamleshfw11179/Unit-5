function convert(a,b){
    if(b==="kb"){
        return(a*1024)
    }
    if(b==="mb"){
        return(a*1048576)
    }
    if(b==="gb"){
        return(a*1073741824)
    }
    if(b==="tb"){
        return(a*1099511627776)
    }
}

export {convert}