// Given a valid (IPv4) IP address, return a defanged version of that IP address.
//
// A defanged IP address replaces every period "." with "[.]".



var defangIPaddr = function(address) {
    let arr = []
    let splitIp = address.split('')
    // console.log(splitIp)
    for(let i = 0 ; i < splitIp.length; i++){
        if(splitIp[i] === "."){
            arr.push("[.]")
        }else{
            arr.push(splitIp[i])
        }
    }return arr.join('')
};
