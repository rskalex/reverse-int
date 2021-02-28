module.exports = function reverse (n) {
    n = String(n);
    let arr = [];
  
    for (let i = n.length - 1; i >= 0; i--) {
        arr.push(n[i]);
    }
  
    return arr.join('');
  };
  