---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "is not a function" occurs when there was an attempt to call a
  value from a function, but the value is not actually a function.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: Object doesn't support property or method {x} (Edge)
TypeError: "x" is not a function
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>It attempted to call a value from a function, but the value is not actually a function.
  Some code expects you to provide a function, but that didn't happen.</p>

<p>Maybe there is a typo in the function name? Maybe the object you are calling the method
  on does not have this function? For example, JavaScript <code>Objects</code> have no
  <code>map</code> function, but the JavaScript <code>Array</code> object does.</p>

<p>There are many built-in functions in need of a (callback) function. You will have to
  provide a function in order to have these methods working properly:</p>

<ul>
  <li>When working with {{jsxref("Array")}} or {{jsxref("TypedArray")}} objects:
    <ul>
      <li>{{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}},
        {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}},
        {{jsxref("Array.prototype.filter()")}},  {{jsxref("Array.prototype.reduce()")}},
        {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}
      </li>
    </ul>
  </li>
  <li>When working with {{jsxref("Map")}} and {{jsxref("Set")}} objects:
    <ul>
      <li>{{jsxref("Map.prototype.forEach()")}} and {{jsxref("Set.prototype.forEach()")}}
      </li>
    </ul>
  </li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="A_typo_in_the_function_name">A typo in the function name</h3>

<p>In this case, which happens way too often, there is a typo in the method name:</p>

<pre class="brush: js example-bad">let x = document.getElementByID('foo');
// TypeError: document.getElementByID is not a function
</pre>

<p>The correct function name is <code>getElementById</code>:</p>

<pre class="brush: js example-good">let x = document.getElementById('foo');
</pre>

<h3 id="Function_called_on_the_wrong_object">Function called on the wrong object</h3>

<p>For certain methods, you have to provide a (callback) function and it will work on
  specific objects only. In this example, {{jsxref("Array.prototype.map()")}} is used,
  which will work with {{jsxref("Array")}} objects only.</p>

<pre class="brush: js example-bad">let obj = {a: 13, b: 37, c: 42};

obj.map(function(num) {
  return num * 2;
});

// TypeError: obj.map is not a function</pre>

<p>Use an array instead:</p>

<pre class="brush: js example-good">let numbers = [1, 4, 9];

numbers.map(function(num) {
  return num * 2;
});

// Array [2, 8, 18]
</pre>

<h3 id="Function_shares_a_name_with_a_pre-existing_property">Function shares a name with a
  pre-existing property</h3>

<p>Sometimes when making a class, you may have a property and a function with the same
  name. Upon calling the function, the compiler thinks that the function ceases to exist.
</p>

<pre class="brush: js example-bad">var Dog = function () {
 this.age = 11;
 this.color = "black";
 this.name = "Ralph";
 return this;
}

Dog.prototype.name = function(name) {
 this.name = name;
 return this;
}

var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name is not a function
</pre>

<p>Use a different property name instead:</p>

<pre class="brush: js example-good">var Dog = function () {
 this.age = 11;
 this.color = "black";
 this.dogName = "Ralph"; //Using this.dogName instead of .name
 return this;
}

Dog.prototype.name = function(name) {
 this.dogName = name;
 return this;
}

var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }
</pre>

<h3 id="Using_brackets_for_multiplication">Using brackets for multiplication</h3>

<p>In math, you can write 2 × (3 + 5) as 2*(3 + 5) or just 2(3 + 5).</p>

<p>Using the latter will throw an error:</p>

<pre class="js example-bad">const sixteen = 2(3 + 5);
alert('2 x (3 + 5) is ' + String(sixteen));
//Uncaught TypeError: 2 is not a function</pre>

<p>You can correct the code by adding a <code>*</code> operator:</p>

<pre class="js example-good">const sixteen = 2 * (3 + 5);
alert('2 x (3 + 5) is ' + String(sixteen));
//2 x (3 + 5) is 16
</pre>

<h3 id="Import_the_exported_module_correctly">Import the exported module correctly</h3>

<p>Ensure you are importing the module correctly.</p>

<p>An example helpers library (<code>helpers.js</code>)</p>

<pre class="brush: js">let helpers = function () { };

helpers.groupBy = function (objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  },
{});
}

export default helpers;
</pre>

<p>The correct import usage (<code>App.js</code>):</p>

<pre>import helpers from './helpers'</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions">Functions</a></li>
</ul>
