function IntentionallyBuggyCode (val) {
  
  this.val = val;

}

if (typeof window === 'undefined') {
  //if it's not being run in browser
  //make it exportable
 exports.IBL = new IntentionallyBuggyCode();
 //add it to global object
 global.IBL = new IntentionallyBuggyCode();
} else {
  //add it to the window object
  window.IBL = new IntentionallyBuggyCode();
}

IntentionallyBuggyCode.prototype.reverse = function (str) {
  
    return str.split('').reverse().join();

}

IntentionallyBuggyCode.prototype.factorial = function (num) {
  
  if ( num === 0 ) {
    
    return 1;
  
  } else {
    
    return num + this.factorial( num - 1 );
  
  }
  
}