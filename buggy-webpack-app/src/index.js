//library code to be packaged

const IntentionallyBuggyCode = function(val) {
  this.val = val;
}

IntentionallyBuggyCode.prototype.reverse = function(val) {
  let reversed = val.split('').reverse().join('');
  return reversed;
}

const IBC = new IntentionallyBuggyCode();

window.IBC = IBC;

//components

const component = () => {
    
  let element = document.createElement('div');
  
    element.innerHTML = `Let's reverse the word "hello": ${IBC.reverse('hello')}`

  return element;
}

document.body.appendChild(component());
