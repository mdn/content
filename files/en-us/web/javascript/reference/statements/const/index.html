---
title: const
slug: Web/JavaScript/Reference/Statements/const
tags:
- ECMAScript 2015
- JavaScript
- Language feature
- Reference
- Statement
- constants
browser-compat: javascript.statements.const
---
<div>{{jsSidebar("Statements")}}</div>

<p>Constants are block-scoped, much like variables declared using the
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a></code>
  keyword. The value of a constant can't be changed through reassignment, and it can't be
  redeclared.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-const.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">const <var>name1</var> = <var>value1</var> [, <var>name2</var> = <var>value2</var> [, ... [, <var>nameN</var> = <var>valueN</var>]]];</pre>

<dl>
  <dt><code><var>nameN</var></code></dt>
  <dd>The constant's name, which can be any legal {{Glossary("identifier")}}.</dd>
  <dt><code><var>valueN</var></code></dt>
  <dd>The constant's value. This can be any legal <a
      href="/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions">expression</a>,
    including a function expression.</dd>
</dl>

<p> The <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Destructuring
    Assignment </a>syntax can also be used to declare variables.</p>

<pre class="brush: js">const <var>{ bar }</var> = <em>foo</em>; // where foo = { bar:10, baz:12 };
/* This creates a constant with the name 'bar', which has a value of 10 */</pre>

<h2 id="Description">Description</h2>

<p>This declaration creates a constant whose scope can be either global or local to the
  block in which it is declared. Global constants do <strong>not</strong> become
  properties of the {{domxref("window")}} object, unlike {{jsxref("Statements/var",
  "var")}} variables.</p>

<p>An initializer for a constant is required. You must specify its value in the same
  statement in which it's declared. (This makes sense, given that it can't be changed
  later.)</p>

<p>The <strong><code>const</code> declaration</strong> creates a read-only reference to a
  value. It does <strong>not</strong> mean the value it holds is immutable—just that the
  variable identifier cannot be reassigned. For instance, in the case where the content is
  an object, this means the object's contents (e.g., its properties) can be altered.</p>

<p>All the considerations about the "<a
    href="/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_TDZ">temporal
    dead zone</a>" apply to both {{jsxref("Statements/let", "let")}} and
  <code>const</code>.</p>

<p>A constant cannot share its name with a function or a variable in the same scope.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_const_usage">Basic const usage</h3>

<p>Constants can be declared with uppercase or lowercase, but a common convention is to
  use all-uppercase letters.</p>

<pre class="brush: js;">// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV is 7
console.log('my favorite number is: ' + MY_FAV);

// trying to redeclare a constant throws an error
// Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will fail too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;

</pre>

<h3 id="Block_scoping">Block scoping</h3>

<p>It's important to note the nature of block scoping.</p>

<pre class="brush: js">if (MY_FAV === 7) {
  // this is fine and creates a block scoped MY_FAV variable
  // (works equally well with let to declare a block scoped non const variable)
  let MY_FAV = 20;

  // MY_FAV is now 20
  console.log('my favorite number is ' + MY_FAV);

  // this gets hoisted into the global context and throws an error
  var MY_FAV = 20;
}

// MY_FAV is still 7
console.log('my favorite number is ' + MY_FAV);
</pre>

<h3 id="const_needs_to_be_initialized">const needs to be initialized</h3>

<pre class="brush: js">// throws an error
// Uncaught SyntaxError: Missing initializer in const declaration

const FOO;
</pre>

<h3 id="const_in_objects_and_arrays">const in objects and arrays</h3>

<p>const also works on objects and arrays.</p>

<pre class="brush: js">const MY_OBJECT = {'key': 'value'};

// Attempting to overwrite the object throws an error
// Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// The same applies to arrays
const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error
// Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/var", "var")}}</li>
  <li>{{jsxref("Statements/let", "let")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Constants">Constants in
      the JavaScript Guide</a></li>
</ul>
