---
title: Primitive
slug: Glossary/Primitive
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
<p>In {{Glossary("JavaScript")}}, a <strong>primitive</strong> (primitive value, primitive data type) is data that is not an {{Glossary("object")}} and has no {{glossary("method","methods")}}. There are 7 primitive data types: {{Glossary("string")}}, {{Glossary("number")}}, {{Glossary("bigint")}}, {{Glossary("boolean")}}, {{Glossary("undefined")}}, {{Glossary("symbol")}}, and {{Glossary("null")}}.</p>

<p>Most of the time, a primitive value is represented directly at the lowest level of the language implementation.</p>

<p>All primitives are <strong>immutable</strong>, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.</p>

<h2 id="Example">Example</h2>

<p>This example will help you understand that primitive values are <strong>immutable.</strong></p>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ
</pre>

<p>A primitive can be replaced, but it can't be directly altered.</p>

<h2 id="Primitive_wrapper_objects_in_JavaScript">Primitive wrapper objects in JavaScript</h2>

<p>Except for <code>null</code> and <code>undefined</code>, all primitive values have object equivalents that wrap around the primitive values:</p>

<ul>
 <li>{{jsxref("String")}} for the string primitive.</li>
 <li>{{jsxref("Number")}} for the number primitive.</li>
 <li>{{jsxref("BigInt")}} for the bigint primitive.</li>
 <li>{{jsxref("Boolean")}} for the boolean primitive.</li>
 <li>{{jsxref("Symbol")}} for the symbol primitive.</li>
</ul>

<p>The wrapper's <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf"><code>valueOf()</code></a> method returns the primitive value.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Data_structures">JavaScript data types</a></li>
 <li>{{Interwiki("wikipedia", "Primitive data type")}} (Wikipedia)</li>
 <li><a href="/en-US/docs/Glossary">Glossary</a>
  <ul>
   <li>{{Glossary("JavaScript")}}</li>
   <li>{{Glossary("string")}}</li>
   <li>{{Glossary("number")}}</li>
   <li>{{Glossary("bigint")}}</li>
   <li>{{Glossary("boolean")}}</li>
   <li>{{Glossary("null")}}</li>
   <li>{{Glossary("undefined")}}</li>
   <li>{{Glossary("symbol")}}</li>
  </ul>
 </li>
</ul>
