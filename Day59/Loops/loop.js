//The while loop

//The while loop has the following syntax:

/* while (condition) {
  // code
  // so-called "loop body"
} */
//While the condition is truthy, the code from the loop body is executed.
//For instance, the loop below outputs i while i < 3:
  
  let i = 0;
  while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
  }

//For instance, a shorter way to write while (i != 0) is while (i):

let j = 3;
while (j) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( j );
  j--;
}
// Curly braces are not required for a single-line body
   // If the loop body has a single statement, we can omit the curly braces {…}:
        let k = 3;
        while (k) alert(k--);
    
 // The "do...while" loop
 //The condition check can be moved below the loop body using the do..while syntax:

 /* do {
   // loop body
 } while (condition); */

//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
//For example:

let a = 0;
do {
  alert(a);
  a++;
} while (a < 3);

//The “for” loop
//The for loop is more complex, but it’s also the most commonly used loop.
/* for (begin; condition; step) {
    // ... loop body ...
  } */

    for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
        alert(i);
    }
    //Inline variable declaration
    //Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.
    
    for (let i = 0; i < 3; i++) {
      alert(i); // 0, 1, 2
    }
    alert(i); // error, no such variable
    //Instead of defining a variable, we could use an existing one:
    
    let c = 0;
    
    for (c = 0; c < 3; c++) { // use an existing variable
      alert(c); // 0, 1, 2
    }
    
    alert(c); // 3, visible, because declared outside of the loop

    // Skipping parts:
        // Any part of for can be skipped.
        // For example, we can omit begin if we don’t need to do anything at the loop start.
        // Like here:
        let m = 0; // we have m already declared and assigned
        for (; m < 3; m++) {
          // no need for begin
          alert(m); // 0, 1, 2
        }
    
        // We can also remove the stop part:
        let n = 0;
        for (; n < 3; ) {
          alert(n++);
        }
        
    
        // Breaking the loop
        // Normally, a loop exits when its condition becomes falsy.
        // But we can force the exit at any time using the special break directive.
    
        // For example, the loop below asks the user for a series of numbers, “breaking” when no
        // number is entered:
        let sum = 0;
        while (true) {
          let value = +prompt("Enter a number", '');
    
          if (!value) break; // (*)
    
          sum += value;
        }
        alert("Sum: " + sum);
        
        // Continue to the next iteration
        // The continue directive is a “lighter version” of break. It doesn’t stop the whole loop.
        // Instead, it stops the current iteration and forces the loop to start a new one (if the
        // condition allows).
    
        // We can use it if we’re done with the current iteration and would like to move on to the
        // next one.
    
        // The loop below uses continue to output only odd values:
        for (let y = 0; y < 10; y++) {
          // if true, skip the remaining part of the body
          if (y % 2 == 0) continue;
    
          alert(y); // 1, 3, 5, 7. 9
        }
        // For even values of i, the continue directive stops executing the body and passes control
        // to the next iteration of for (with the next number). So the alert is only called for odd
        // values.
    
        // The continue directive helps decrease nesting
        // A loop that shows odd values could look like this:
        for (let z = 0; z < 10; z++) {
          if (z % 2) {
            alert(z); // 1, 3, 5, 7, 9
          }
        }
        // But as a side effect, this created one more level of nesting (the alert call inside the
        // curly braces). If the code inside of if is longer than a few lines, that may decrease the
        // overall readability.
    
        // No break/continue to the right side of ‘?’
        // Please note that syntax constructs that are not expressions cannot be used with the
        // ternary operator ?. In particular, directives such as break/continue aren’t allowed there.
    
        // For example, if we take this code:
        if (i > 5) {
          alert(i);
        } else {
          // continue;
        }
    
        // and rewrite it using a question mark:
        // (1 > 5) ? alert(i) : continue;  // continue isn't allowed here
        // it stops working: there’s a syntax error.
        // This is just another reason not to use the question mark operator ? instead of if.
    
        // Labels for break/continue
    
        // Sometimes we need to break out from multiple nested loops at once.
        // For example, in the code below we loop over i and j, prompting for the coordinates
        // (i, j) from (0,0) to (2,2):
    
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            let input = prompt(`Value at coords ${i}, ${j}, ''`);
    
            // What if we want to exit from here to done (below)?
          }
        }
        alert("Done");
    
        // The ordinary break after input would only break the inner loop. That’s not sufficient
        // – labels, come to the rescue!
    
        // A label is an identifier with a colon before a loop:
        // labelName: for (...) {
        // ...
        // }
    
        // The break <labelName> statement in the loop below breaks out to the label:
        outer: for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            let input = prompt(`Value at coords (${i},${j}), ''`);
    
            // if an empty string or cancelled, then break out of both loops
            if (!input) break outer; // (*)
    
            // do something with the value...
          }
        }
        alert("Done");
        // In the code above, break outer looks upwards for the label named outer and breaks out
        // of that loop.
        // So the control goes straight from (*) to alert('Done!').
    
        // We can also move the label onto a separate line:
        // outer:
        // for (let i = 0; i < 3; i++) { ... }
    
        // The continue directive can also be used with a label. In this case, code execution jumps
        // to the next iteration of the labeled loop.
    
        // Labels do not allow to “jump” anywhere
        // Labels do not allow us to jump into an arbitrary place in the code.
    
        // For example, it is impossible to do this:
        // break label; // jump to the label below (doesn't work)
        // label: for (...)
        // A break directive must be inside a code block. Technically, any labelled code block will
        // do, e.g.:
        label: {
          // ...
          break label; // works
          // ...
        }
        // …Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above.
        // A continue is only possible from inside a loop.
    
        // Task 1:
        let l = 3;
        while (l) {
          alert(l--);
        } // 3, 2, 1
        // let i = 3;
        // alert(i--); // shows 3, decreases i to 2
        // alert(i--) // shows 2, decreases i to 1
        // alert(i--) // shows 1, decreases i to 0
        // // done, while(i) check stops the loop
    
        // Task 2: Which values does the while loop show?
    
        // Both loops alert the same values, or not?
    
        // The prefix form ++i:
        let s = 0;
        while (++s < 5) alert(s); // 1, 2, 3, 4
        // ++i first increments i and then returns the new value.
    
        // The postfix form i++
        let w = 0;
        while (w++ < 5) alert(w); // 1, 2, 3, 4
        // The first value is again i = 1. The postfix form of i++ increments i and then returns
        // the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).
    
        // But the alert call is separate. It’s another statement which executes after the increment
        // and the comparison. So it gets the current i = 1.
    
        // Task 3: Which values get shown by the "for" loop?
        // Both loops alert same values or not?
        // The postfix form:
        for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4
    
        // The prefix form:
        for (let i = 0; i < 5; ++i) alert(i); //0, 1, 2, 3, 4
    
        // Task 4: Output even numbers in the loop
        // Use the for loop to output even numbers from 2 to 10.
        for (let i = 0; i <= 10; i++) {
          if (i % 2 == 0) {
            alert(i);
          }
        }
    
        //Task 5: Replace "for" with "while"
        // Rewrite the code changing the for loop to while without altering its behavior (the output
        // should stay same).
        let v = 0;
        while (v < 3) {
          alert(`Number ${v}!`);
          v++;
        }

        // Task 6: Repeat until the input is correct
        let num;
        do {
          num = prompt("Enter a number greater than 100", 0);
        } 
        while (num <= 100 && num);

        //Task 7: Repeat until the input is correct
        /* let num;
        do {
          num = prompt("Enter a number greater than 100", 0);
        } while (num <= 100 && num); */

        let h = 10;

 nextPrime:
for (let i = 2; i <= h; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

