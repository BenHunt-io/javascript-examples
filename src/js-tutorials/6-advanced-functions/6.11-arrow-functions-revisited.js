// Arrow functions have no {this, arguments variable}, they can't call super or new.
// They aren't meant operate within their own particular context, rather they are really good at operating within the current context,
// e.g., There is no "inside" or "outside"


function defer(f, ms) {
    return function() {
      // Takes this and arguments from `defer`.
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  
  function sayHi(who) {
    console.log('Hello, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John"); // Hello, John after 2 seconds