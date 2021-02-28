module.exports = function reverse (n) {
    if ( n < 0) {
        n = String(n);
        let arr = [];
            for (let i = n.length - 1; i >= 1; i--) {
                arr.push(n[i]);
            }
            return(arr.join(''));
    } else {
        n = String(n);
        let arr = [];
            for (let i = n.length - 1; i >= 0; i--) {
                arr.push(n[i]);
            }
            return(arr.join(''));
    }

  }
  
//   reverse (1121);