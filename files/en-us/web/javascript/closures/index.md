---
title: Closures
slug: Web/JavaScript/Closures
tags:
  - Closure
  - ES5
  - Guide
  - Intermediate
  - JavaScript
  - Reference
---
<div>{{jsSidebar("Intermediate")}}</div>

<p><span class="summary">A <strong>closure</strong> is the combination of a function bundled together (enclosed) with references to its surrounding state (the <strong>lexical environment</strong>).</span> In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.</p>

<h2 id="Lexical_scoping">Lexical scoping</h2>

<p>Consider the following example code:</p>

<pre class="brush: js">function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();</pre>

<p><code>init()</code> creates a local variable called <code>name</code> and a function called <code>displayName()</code>. The <code>displayName()</code> function is an inner function that is defined inside <code>init()</code> and is available only within the body of the <code>init()</code> function. Note that the <code>displayName()</code> function has no local variables of its own. However, since inner functions have access to the variables of outer functions, <code>displayName()</code> can access the variable <code>name</code> declared in the parent function, <code>init()</code>.</p>

<p>Run the code using <a href="https://jsfiddle.net/xAFs9/3/">this JSFiddle link</a> and notice that the <code>alert()</code> statement within the <code>displayName()</code> function successfully displays the value of the <code>name</code> variable, which is declared in its parent function. This is an example of <em>lexical</em> <em>scoping</em>, which describes how a parser resolves variable names when functions are nested. The word <em>lexical</em> refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.</p>

<h2 id="Closure">Closure</h2>

<p>Consider the following code example:</p>

<pre class="brush: js">function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
</pre>

<p>Running this code has exactly the same effect as the previous example of the <code>init()</code> function above. What's different (and interesting) is that the <code>displayName()</code> inner function is returned from the outer function <em>before being executed</em>.</p>

<p>At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables within a function exist for just the duration of that function's execution. Once <code>makeFunc()</code> finishes executing, you might expect that the name variable would no longer be accessible. However, because the code still works as expected, this is obviously not the case in JavaScript.</p>

<p>The reason is that functions in JavaScript form closures. A <em>closure</em> is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, <code>myFunc</code> is a reference to the instance of the function <code>displayName</code> that is created when <code>makeFunc</code> is run. The instance of <code>displayName</code> maintains a reference to its lexical environment, within which the variable <code>name</code> exists. For this reason, when <code>myFunc</code> is invoked, the variable <code>name</code> remains available for use, and "Mozilla" is passed to <code>alert</code>.</p>

<p>Here's a slightly more interesting example—a <code>makeAdder</code> function:</p>

<pre class="brush: js">function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
</pre>

<p>In this example, we have defined a function <code>makeAdder(x)</code>, that takes a single argument <code>x</code>, and returns a new function. The function it returns takes a single argument <code>y</code>, and returns the sum of <code>x</code> and <code>y</code>.</p>

<p>In essence, <code>makeAdder</code> is a function factory. It creates functions that can add a specific value to their argument. In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.</p>

<p><code>add5</code> and <code>add10</code> are both closures. They share the same function body definition, but store different lexical environments. In <code>add5</code>'s lexical environment, <code>x</code> is 5, while in the lexical environment for <code>add10</code>, <code>x</code> is 10.</p>

<h2 id="Practical_closures">Practical closures</h2>

<p>Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.</p>

<p>Consequently, you can use a closure anywhere that you might normally use an object with only a single method.</p>

<p>Situations where you might want to do this are particularly common on the web. Much of the code written in front-end JavaScript is event-based. You define some behavior, and then attach it to an event that is triggered by the user (such as a click or a keypress). The code is attached as a callback (a single function that is executed in response to the event).</p>

<p>For instance, suppose we want to add buttons to a page to adjust the text size. One way of doing this is to specify the font-size of the <code>body</code> element (in pixels), and then set the size of the other elements on the page (such as headers) using the relative <code>em</code> unit:</p>

<pre class="brush: css">body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
</pre>

<p>Such interactive text size buttons can change the <code>font-size</code> property of the <code>body</code> element, and the adjustments are picked up by other elements on the page thanks to the relative units.</p>

<p>Here's the JavaScript:</p>

<pre class="brush: js">function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
</pre>

<p><code>size12</code>, <code>size14</code>, and <code>size16</code> are now functions that resize the body text to 12, 14, and 16 pixels, respectively. You can attach them to buttons (in this case hyperlinks) as demonstrated in the following code example.</p>

<pre class="brush: js">document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
</pre>

<pre class="brush: html">&lt;a href="#" id="size-12"&gt;12&lt;/a&gt;
&lt;a href="#" id="size-14"&gt;14&lt;/a&gt;
&lt;a href="#" id="size-16"&gt;16&lt;/a&gt;
</pre>

<p>Run the code using <a href="https://jsfiddle.net/vnkuZ/7726/">JSFiddle</a>.</p>

<h2 id="Emulating_private_methods_with_closures">Emulating private methods with closures</h2>

<p>Languages such as Java allow you to declare methods as private, meaning that they can be called only by other methods in the same class.</p>

<p>JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code. They also provide a powerful way of managing your global namespace.</p>

<p>The following code illustrates how to use closures to define public functions that can access private functions and variables. Note that these closures follow the <a href="http://www.google.com/search?q=javascript+module+pattern">Module Design Pattern</a>.</p>

<pre class="brush: js">var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
</pre>

<p>In previous examples, each closure had its own lexical environment. Here though, there is a single lexical environment that is shared by the three functions: <code>counter.increment</code>, <code>counter.decrement</code>, and <code>counter.value</code>.</p>

<p>The shared lexical environment is created in the body of an anonymous function, <em>which is executed as soon as it has been defined </em>(also known as an <a href="/en-US/docs/Glossary/IIFE">IIFE</a>). The lexical environment contains two private items: a variable called <code>privateCounter</code>, and a function called <code>changeBy</code>. You can't access either of these private members from outside the anonymous function. Instead, you can access them using the three public functions that are returned from the anonymous wrapper.</p>

<p>Those three public functions are closures that share the same lexical environment. Thanks to JavaScript's lexical scoping, they each have access to the <code>privateCounter</code> variable and the <code>changeBy</code> function.</p>

<pre class="brush: js">var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();

alert(counter1.value());  // 0.

counter1.increment();
counter1.increment();
alert(counter1.value()); // 2.

counter1.decrement();
alert(counter1.value()); // 1.
alert(counter2.value()); // 0.
</pre>

<p>Notice how the two counters maintain their independence from one another. Each closure references a different version of the <code>privateCounter</code> variable through its own closure. Each time one of the counters is called, its lexical environment changes by changing the value of this variable. Changes to the variable value in one closure don't affect the value in the other closure.</p>

<div class="note">
<p><strong>Note:</strong> Using closures in this way provides benefits that are normally associated with object-oriented programming. In particular, <em>data hiding</em> and <em>encapsulation</em>.</p>
</div>

<h2 id="Closure_Scope_Chain">Closure Scope Chain</h2>

<p>Every closure has three scopes:</p>

<ul>
 <li>Local Scope (Own scope)</li>
 <li>Outer Functions Scope</li>
 <li>Global Scope</li>
</ul>

<p>A common mistake is not realizing that in the case where the outer function is itself a nested function, access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a chain of function scopes. To demonstrate, consider the following example code.</p>

<pre class="brush: js">// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var sum2 = sum(1);
var sum3 = sum2(2);
var sum4 = sum3(3);
var result = sum4(4);
console.log(result) //log 20
</pre>

<p>In the example above, there's a series of nested functions, all of which have access to the outer functions' scope. In this context, we can say that closures have access to <em>all</em> outer function scopes.</p>

<h2 id="Creating_closures_in_loops_A_common_mistake">Creating closures in loops: A common mistake</h2>

<p>Prior to the introduction of the <a href="/en-US/docs/Web/JavaScript/Reference/Statements/let"><code>let</code> </a>keyword in ECMAScript 2015, a common problem with closures occurred when you created them inside a loop. To demonstrate, consider the following example code.</p>

<pre class="brush: html">&lt;p id="help"&gt;Helpful notes will appear here&lt;/p&gt;
&lt;p&gt;E-mail: &lt;input type="text" id="email" name="email"&gt;&lt;/p&gt;
&lt;p&gt;Name: &lt;input type="text" id="name" name="name"&gt;&lt;/p&gt;
&lt;p&gt;Age: &lt;input type="text" id="age" name="age"&gt;&lt;/p&gt;
</pre>

<pre class="brush: js">function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i &lt; helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
</pre>

<p>Try running the code in <a href="https://jsfiddle.net/v7gjv/8164/">JSFiddle</a>.</p>

<p>The <code>helpText</code> array defines three helpful hints, each associated with the ID of an input field in the document. The loop cycles through these definitions, hooking up an <code>onfocus</code> event to each one that shows the associated help method.</p>

<p>If you try this code out, you'll see that it doesn't work as expected. No matter what field you focus on, the message about your age will be displayed.</p>

<p>The reason for this is that the functions assigned to <code>onfocus</code> are closures; they consist of the function definition and the captured environment from the <code>setupHelp</code> function's scope. Three closures have been created by the loop, but each one shares the same single lexical environment, which has a variable with changing values (<code>item</code>). This is because the variable <code>item</code> is declared with <code>var</code> and thus has function scope due to hoisting. The value of <code>item.help</code> is determined when the <code>onfocus</code> callbacks are executed. Because the loop has already run its course by that time, the <code>item</code> variable object (shared by all three closures) has been left pointing to the last entry in the <code>helpText</code> list.</p>

<p>One solution in this case is to use more closures: in particular, to use a function factory as described earlier:</p>

<pre class="brush: js">function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i &lt; helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
</pre>

<p>Run the code using <a href="https://jsfiddle.net/v7gjv/9573/">this JSFiddle link</a>.</p>

<p>This works as expected. Rather than the callbacks all sharing a single lexical environment, the <code>makeHelpCallback</code> function creates <em>a new lexical environment</em> for each callback, in which <code>help</code> refers to the corresponding string from the <code>helpText</code> array.</p>

<p>One other way to write the above using anonymous closures is:</p>

<pre class="brush: js">function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i &lt; helpText.length; i++) {
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();</pre>

<p>If you don't want to use more closures, you can use the <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code> keyword introduced in ES2015 :</p>

<pre class="brush: js">function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (let i = 0; i &lt; helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();</pre>

<p>This example uses <code>let</code> instead of <code>var</code>, so every closure binds the block-scoped variable, meaning that no additional closures are required.</p>

<p>Another alternative could be to use <code>forEach()</code> to iterate over the <code>helpText</code> array and attach a listener to each <a href="/en-US/docs/Web/HTML/Element/input" title="The HTML &lt;input&gt; element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent."><code>&lt;input&gt;</code></a>, as shown:</p>

<pre class="brush: js">function showHelp(help) {
  document.getElementById('help').textContent = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  helpText.forEach(function(text) {
    document.getElementById(text.id).onfocus = function() {
      showHelp(text.help);
    }
  });
}

setupHelp();</pre>

<h2 id="Performance_considerations">Performance considerations</h2>

<p>It is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task, as it will negatively affect script performance both in terms of processing speed and memory consumption.</p>

<p>For instance, when creating a new object/class, methods should normally be associated to the object's prototype rather than defined into the object constructor. The reason is that whenever the constructor is called, the methods would get reassigned (that is, for every object creation).</p>

<p>Consider the following case:</p>

<pre class="brush: js">function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
</pre>

<p>Because the previous code does not take advantage of the benefits of using closures in this particular instance, we could instead rewrite it to avoid using closure as follows:</p>

<pre class="brush: js">function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};
</pre>

<p>However, redefining the prototype is not recommended. The following example instead appends to the existing prototype:</p>

<pre class="brush: js">function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
</pre>

<p>In the two previous examples, the inherited prototype can be shared by all objects and the method definitions need not occur at every object creation. See <a href="/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model">Details of the Object Model</a> for more.</p>
