---
title: 'InternalError: too much recursion'
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
tags:
- Error
- Errors
- InternalError
- JavaScript
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "too much recursion" or "Maximum call stack size exceeded"
	occurs when there are too many function calls, or a function is missing a base case.
</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">Error: Out of stack space (Edge)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("InternalError")}}.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>A function that calls itself is called a <em>recursive function</em>. Once a condition
	is met, the function stops calling itself. This is called a <em>base case</em>.</p>

<p>In some ways, recursion is analogous to a loop. Both execute the same code multiple
	times, and both require a condition (to avoid an infinite loop, or rather, infinite
	recursion in this case). When there are too many function calls, or a function is
	missing a base case, JavaScript will throw this error.</p>

<h2 id="Examples">Examples</h2>

<p>This recursive function runs 10 times, as per the exit condition.</p>

<pre class="brush: js">function loop(x) {
  if (x &gt;= 10) // "x &gt;= 10" is the exit condition
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);</pre>

<p>Setting this condition to an extremely high value, won't work:</p>

<pre class="brush: js example-bad">function loop(x) {
  if (x &gt;= 1000000000000)
    return;
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion</pre>

<p>This recursive function is missing a base case. As there is no exit condition, the
	function will call itself infinitely.</p>

<pre class="brush: js example-bad">function loop(x) {
 // The base case is missing

loop(x + 1); // Recursive call
}

loop(0);

// InternalError: too much recursion</pre>

<h3 id="Class_error_too_much_recursion">Class error: too much recursion</h3>

<pre class="brush: js example-bad">class Person{
	constructor(){}
	set name(name){
		this.name = name; // Recursive call
	}
}

const tony = new Person();
tony.name = "Tonisha"; // InternalError: too much recursion
</pre>

<p>When a value is assigned to the property name (this.name = name;) JavaScript needs to
	set that property. When this happens, the setter function is triggered.</p>

<pre class="brush: js example-bad">set name(name){
	this.name = name; // Recursive call
}
</pre>

<div class="note">
	<p><strong>Note:</strong> In this example when the setter is triggered, it is told to do the same thing
		again: <em>to set the same property that it is meant to handle.</em> This causes
		the function to call itself, again and again, making it infinitely recursive.</p>
</div>

<p>This issue also appears if the same variable is used in the getter.</p>

<pre class="brush: js example-bad">get name(){
	return this.name; // Recursive call
}
</pre>

<p>To avoid this problem, make sure that the property being assigned to inside the setter
	function is different from the one that initially triggered the setter.The same goes
	for the getter.</p>

<pre class="brush: js">class Person{
	constructor(){}
	set name(name){
		this._name = name;
	}
	get name(){
		return this._name;
	}
}
const tony = new Person();
tony.name = "Tonisha";
console.log(tony);
</pre>

<h2 id="See_also">See also</h2>

<ul>
	<li>{{Glossary("Recursion")}}</li>
	<li><a href="/en-US/docs/Web/JavaScript/Guide/Functions#Recursion">Recursive
			functions</a></li>
</ul>
