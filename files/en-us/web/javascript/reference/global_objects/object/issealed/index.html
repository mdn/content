---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
tags:
- ECMAScript 5
- JavaScript
- JavaScript 1.8.5
- Method
- Object
browser-compat: javascript.builtins.Object.isSealed
---
<div>{{JSRef}}</div>

<p>The <strong><code>Object.isSealed()</code></strong> method determines if an object is
  sealed.</p>

<div>{{EmbedInteractiveExample("pages/js/object-issealed.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Object.isSealed(<var>obj</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object which should be checked.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Boolean")}} indicating whether or not the given object is sealed.</p>

<h2 id="Description">Description</h2>

<p>Returns <code>true</code> if the object is sealed, otherwise <code>false</code>. An
  object is sealed if it is not {{jsxref("Object.isExtensible", "extensible", "", 1)}} and
  if all its properties are non-configurable and therefore not removable (but not
  necessarily non-writable).</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.isSealed">Using Object.isSealed</h3>

<pre class="brush: js">// Objects aren't sealed by default.
var empty = {};
Object.isSealed(empty); // === false

// If you make an empty object non-extensible,
// it is vacuously sealed.
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// The same is not true of a non-empty object,
// unless its properties are all non-configurable.
var hasProp = { fee: 'fie foe fum' };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// But make them all non-configurable
// and the object becomes sealed.
Object.defineProperty(hasProp, 'fee', {
  configurable: false
});
Object.isSealed(hasProp); // === true

// The easiest way to seal an object, of course,
// is Object.seal.
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// A sealed object is, by definition, non-extensible.
Object.isExtensible(sealed); // === false

// A sealed object might be frozen,
// but it doesn't have to be.
Object.isFrozen(sealed); // === true
// (all properties also non-writable)

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false
// ('p' is still writable)

var s3 = Object.seal({ get p() { return 0; } });
Object.isFrozen(s3); // === true
// (only configurability matters for accessor properties)
</pre>

<h3 id="Non-object_coercion">Non-object coercion</h3>

<p>In ES5, if the argument to this method is not an object (a primitive), then it will
  cause a {{jsxref("TypeError")}}. In ES2015, a non-object argument will be treated as if
  it was a sealed ordinary object, return <code>true</code>.</p>

<pre class="brush: js">Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.seal()")}}</li>
  <li>{{jsxref("Object.preventExtensions()")}}</li>
  <li>{{jsxref("Object.isExtensible()")}}</li>
  <li>{{jsxref("Object.freeze()")}}</li>
  <li>{{jsxref("Object.isFrozen()")}}</li>
</ul>
