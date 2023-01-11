 module.exports = function reverse (n) {
    let str = n.toString();
    let result = str.split('').reverse().join('');
    
    if (str.startsWith('-')) {
       result = str.slice(1).split('').reverse().join('');
    } 
return Number(result);
}
   console.log(module.exports(-055))
