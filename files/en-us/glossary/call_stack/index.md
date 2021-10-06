---
title: Call stack
slug: Glossary/Call_stack
tags:
  - Call Stack
  - CodingScripting
  - Glossary
  - JavaScript
---
<p>A <strong>call stack</strong> is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple {{glossary("function","functions")}} — what function is currently being run and what functions are called from within that function, etc.</p>

<ul>
 <li>When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.</li>
 <li>Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.</li>
 <li>When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.</li>
 <li>If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">function greeting() {
   // [1] Some code here
   sayHi();
   // [2] Some code here
}
function sayHi() {
   return "Hi!";
}

// Invoke the `greeting` function
greeting();

// [3] Some code here
</pre>

<p>The code above would be executed like this:</p>

<ol>
 <li>Ignore all functions, until it reaches the <code>greeting()</code> function invocation.</li>
 <li>Add the <code>greeting()</code> function to the call stack list.
  <div class="notecard note">
  <p><strong>Note:</strong> Call stack list:<br>
   - greeting</p>
  </div>
 </li>
 <li>Execute all lines of code inside the <code>greeting()</code> function.</li>
 <li>Get to the <code>sayHi()</code> function invocation.</li>
 <li>Add the <code>sayHi()</code> function to the call stack list.
  <div class="notecard note">
  <p><strong>Note:</strong> Call stack list:<br>
   - sayHi<br>
   - greeting</p>
  </div>
 </li>
 <li>Execute all lines of code inside the <code>sayHi()</code> function, until reaches its end.</li>
 <li>Return execution to the line that invoked <code>sayHi()</code> and continue executing the rest of the <code>greeting()</code> function.</li>
 <li>Delete the <code>sayHi()</code> function from our call stack list.
  <div class="notecard note">
  <p><strong>Note:</strong> Call stack list:<br>
   - greeting</p>
  </div>
 </li>
 <li>When everything inside the <code>greeting()</code> function has been executed, return to its invoking line to continue executing the rest of the JS code.</li>
 <li>Delete the <code>greeting()</code> function from the call stack list.
  <div class="notecard note">
  <p><strong>Note:</strong> Call stack list:<br>
   EMPTY</p>
  </div>
 </li>
</ol>

<p>In summary, then, we start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li>{{Interwiki("wikipedia", "Call stack")}} on Wikipedia</li>
 <li><a href="/en-US/docs/Glossary">Glossary</a>
  <ul>
   <li>{{Glossary("Call stack")}}</li>
   <li>{{Glossary("Function")}}</li>
  </ul>
 </li>
</ul>

