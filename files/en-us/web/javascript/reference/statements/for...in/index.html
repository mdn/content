---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
tags:
- JavaScript
- Language feature
- Statement
browser-compat: javascript.statements.for_in
---
<div>{{jsSidebar("Statements")}}</div>

<p>The <strong><code>for...in</code> statement</strong> iterates over all <a
    href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">enumerable
    properties</a> of an object that are keyed by strings (ignoring ones keyed by <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol">Symbol</a>s),
  including inherited enumerable properties.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-forin.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">for (<var>variable</var> in <var>object</var>) {
  <var>statement</var>
}
</pre>

<dl>
  <dt><code><var>variable</var></code></dt>
  <dd>A different property name is assigned to <code><var>variable</var></code> on each
    iteration.</dd>
  <dt><code><var>object</var></code></dt>
  <dd>Object whose non-Symbol enumerable properties are iterated over.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>A <code>for...in</code> loop only iterates over enumerable, non-Symbol properties.
  Objects created from built–in constructors like <code>Array</code> and
  <code>Object</code> have inherited non–enumerable properties from
  <code>Object.prototype</code> and <code>String.prototype</code>, such as
  {{jsxref("String")}}'s {{jsxref("String.indexOf", "indexOf()")}} method or
  {{jsxref("Object")}}'s {{jsxref("Object.toString", "toString()")}} method. The loop will
  iterate over all enumerable properties of the object itself and those the object
  inherits from its prototype chain (properties of nearer prototypes take precedence over
  those of prototypes further away from the object in its prototype chain).</p>

<h3 id="Deleted_added_or_modified_properties">Deleted, added, or modified properties</h3>

<p>A <code>for...in</code> loop iterates over the properties of an object in an arbitrary
  order (see the {{jsxref("Operators/delete", "delete")}} operator for more on why one
  cannot depend on the seeming orderliness of iteration, at least in a cross-browser
  setting).</p>

<p>If a property is modified in one iteration and then visited at a later time, its value
  in the loop is its value at that later time. A property that is deleted before it has
  been visited will not be visited later. Properties added to the object over which
  iteration is occurring may either be visited or omitted from iteration.</p>

<p>In general, it is best not to add, modify, or remove properties from the object during
  iteration, other than the property currently being visited. There is no guarantee
  whether an added property will be visited, whether a modified property (other than the
  current one) will be visited before or after it is modified, or whether a deleted
  property will be visited before it is deleted.</p>

<h3 id="Array_iteration_and_for...in">Array iteration and for...in</h3>

<div class="note">
  <p><strong>Note:</strong> <code>for...in</code> should not be used to iterate over an
    {{jsxref("Array")}} where the index order is important.</p>
</div>

<p>Array indexes are just enumerable properties with integer names and are otherwise
  identical to general object properties. There is no guarantee that <code>for...in</code>
  will return the indexes in any particular order. The <code>for...in</code> loop
  statement will return all enumerable properties, including those with non–integer names
  and those that are inherited.</p>

<p>Because the order of iteration is implementation-dependent, iterating over an array may
  not visit elements in a consistent order. Therefore, it is better to use a
  {{jsxref("Statements/for", "for")}} loop with a numeric index (or
  {{jsxref("Array.prototype.forEach()")}} or the {{jsxref("Statements/for...of",
  "for...of")}} loop) when iterating over arrays where the order of access is important.
</p>

<h3 id="Iterating_over_own_properties_only">Iterating over own properties only</h3>

<p>If you only want to consider properties attached to the object itself, and not its
  prototypes, use {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}} or
  perform a {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} check
  ({{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable()")}} can also
  be used). Alternatively, if you know there won't be any outside code interference, you
  can extend built-in prototypes with a check method.</p>

<h2 id="Why_Use_for...in">Why Use for...in?</h2>

<p>Given that <code>for...in</code> is built for iterating object properties, not
  recommended for use with arrays, and options like <code>Array.prototype.forEach()</code>
  and <code>for...of</code> exist, what might be the use of <code>for...in</code> at all?
</p>

<p>It may be most practically used for debugging purposes, being an easy way to check the
  properties of an object (by outputting to the console or otherwise). Although arrays are
  often more practical for storing data, in situations where a key-value pair is preferred
  for working with data (with properties acting as the "key"), there may be instances
  where you want to check if any of those keys hold a particular value.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_for...in">Using for...in</h3>

<p>The <code>for...in</code> loop below iterates over all of the object's enumerable,
  non-Symbol properties and logs a string of the property names and their values.</p>

<pre class="brush: js">var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"</pre>

<h3 id="Iterating_own_properties">Iterating own properties</h3>

<p>The following function illustrates the use of
  {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}: the inherited
  properties are not displayed.</p>

<pre class="brush: js">var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h3 id="Compatibility_Initializer_expressions_in_strict_mode">Compatibility: Initializer
  expressions in strict mode</h3>

<p>Prior to Firefox 40, it was possible to use an initializer expression
  (<code>i=0</code>) in a <code>for...in</code> loop:</p>

<pre class="brush: js example-bad">var obj = {a: 1, b: 2, c: 3};
for (var i = 0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
</pre>

<p>This nonstandard behavior is now ignored in version 40 and later, and will present a
  {{jsxref("SyntaxError")}} ("<a
    href="/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer">for-in
    loop head declarations may not have initializers</a>") error in <a
    href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> (<a
    href="https://bugzilla.mozilla.org/show_bug.cgi?id=748550">bug 748550</a> and <a
    href="https://bugzilla.mozilla.org/show_bug.cgi?id=1164741">bug 1164741</a>).</p>

<p>Other engines such as v8 (Chrome), Chakra (IE/Edge), and JSC (WebKit/Safari) are
  investigating whether to remove the nonstandard behavior as well.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Statements/for...of", "for...of")}} – a similar statement that iterates
    over the property <em>values</em></li>
  <li>{{jsxref("Statements/for_each...in", "for each...in")}} – a similar but deprecated
    statement that iterates over the values of an object's properties, rather than the
    property names themselves</li>
  <li>{{jsxref("Statements/for", "for")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators">Iterators and
      Generator functions</a> (usable with <code>for...of</code> syntax)</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability
      and ownership of properties</a></li>
  <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
  <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
  <li>{{jsxref("Array.prototype.forEach()")}}</li>
</ul>
