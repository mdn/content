---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - WeakSet
  - Polyfill
browser-compat: javascript.builtins.WeakSet
---
<div>{{JSRef}}</div>

<p>The <strong><code>WeakSet</code></strong> object lets you store weakly held <em>objects</em> in a collection.</p>

<h2 id="Description">Description</h2>

<p><code>WeakSet</code> objects are collections of objects. Just as with {{jsxref("Set")}}s, each object in a <code>WeakSet</code> may occur only once; all objects in a <code>WeakSet</code>'s collection are unique.</p>

<p>The main differences to the {{jsxref("Set")}} object are:</p>

<ul>
 <li><code>WeakSet</code>s are collections of <strong>objects only</strong>. They cannot contain arbitrary values of any type, as {{jsxref("Set")}}s can.</li>
 <li>The <code>WeakSet</code> is <em>weak</em>, meaning references to objects in a <code>WeakSet</code> are held <em>weakly</em>. If no other references to an object stored in the <code>WeakSet</code> exist, those objects can be garbage collected.
  <div class="notecard note">
  <p><strong>Note:</strong> This also means that there is no list of current objects stored in the collection. <code>WeakSets</code> are not enumerable.</p>
  </div>
 </li>
</ul>

<h3 id="Use_case_Detecting_circular_references">Use case: Detecting circular references</h3>

<p>Functions that call themselves recursively need a way of guarding against circular data structures by tracking which objects have already been processed.</p>

<p><code>WeakSet</code>s are ideal for this purpose:</p>

<pre class="brush: js">// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = null){
  if(!_refs)
    _refs = new WeakSet();

  // Avoid infinite recursion
  if(_refs.has(subject))
    return;

  fn(subject);
  if("object" === typeof subject){
    _refs.add(subject);
    for(let key in subject)
      execRecursively(fn, subject[key], _refs);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar"
  }
};

foo.bar.baz = foo; // Circular reference!
execRecursively(obj =&gt; console.log(obj), foo);
</pre>

<p>Here, a <code>WeakSet</code> is created on the first run, and passed along with every subsequent function call (using the internal <code>_refs</code> parameter).</p>

<p>The number of objects or their traversal order is immaterial, so a <code>WeakSet</code> is more suitable (and performant) than a {{jsxref("Set")}} for tracking object references, especially if a very large number of objects is involved.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("WeakSet/WeakSet", "WeakSet()")}}</dt>
 <dd>Creates a new <code>WeakSet</code> object.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("WeakSet.add", "WeakSet.prototype.add(<var>value</var>)")}}</dt>
 <dd>Appends <code><var>value</var></code> to the <code>WeakSet</code> object.</dd>
 <dt>{{jsxref("WeakSet.delete", "WeakSet.prototype.delete(<var>value</var>)")}}</dt>
 <dd>Removes <code><var>value</var></code> from the <code>WeakSet</code>. <code>WeakSet.prototype.has(<var>value</var>)</code> will return <code>false</code> afterwards.</dd>
 <dt>{{jsxref("WeakSet.has", "WeakSet.prototype.has(<var>value</var>)")}}</dt>
 <dd>Returns a boolean asserting whether <code><var>value</var></code> is present in the <code>WeakSet</code> object or not.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_WeakSet_object">Using the WeakSet object</h3>

<pre class="brush: js">const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);    // true

ws.delete(foo); // removes foo from the set
ws.has(foo);    // false, foo has been removed
ws.has(bar);    // true, bar is retained</pre>

<p>Note that <code>foo !== bar</code>. While they are similar objects, <em>they are not <strong>the same object</strong></em>. And so they are both added to the set.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>WeakSet</code> is available in <a href="https://github.com/zloirock/core-js#weakset"><code>core-js</code></a></li>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
</ul>
