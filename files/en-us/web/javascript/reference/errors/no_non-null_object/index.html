---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{JSSidebar("Errors")}}</div>

<p>The JavaScript exception "is not a non-null object" occurs when an object is expected
  somewhere and wasn't provided. {{jsxref("null")}} is not an object and won't work.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: Invalid descriptor for property {x} (Edge)
TypeError: "x" is not a non-null object (Firefox)
TypeError: Property description must be an object: "x" (Chrome)
TypeError: Invalid value used in weak set (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>An object is expected somewhere and wasn't provided. {{jsxref("null")}} is not an
  object and won't work. You must provide a proper object in the given situation.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Property_descriptor_expected">Property descriptor expected</h3>

<p>When methods like {{jsxref("Object.create()")}} or
  {{jsxref("Object.defineProperty()")}} and {{jsxref("Object.defineProperties()")}} are
  used, the optional descriptor parameter expects a property descriptor object. Providing
  no object (like just a number), will throw an error:</p>

<pre class="brush: js example-bad">Object.defineProperty({}, 'key', 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, 'key', null);
// TypeError: null is not a non-null object
</pre>

<p>A valid property descriptor object might look like this:</p>

<pre class="brush: js example-good">Object.defineProperty({}, 'key', { value: 'foo', writable: false });
</pre>

<h3 id="WeakMap_and_WeakSet_objects_require_object_keys"><code>WeakMap</code> and
  <code>WeakSet</code> objects require object keys</h3>

<p>{{jsxref("WeakMap")}} and {{jsxref("WeakSet")}} objects store object keys. You can't
  use other types as keys.</p>

<pre class="brush: js example-bad">var ws = new WeakSet();
ws.add('foo');
// TypeError: "foo" is not a non-null object</pre>

<p>Use objects instead:</p>

<pre class="brush: js example-good">ws.add({foo: 'bar'});
ws.add(window);
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.create()")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}</li>
  <li>{{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}</li>
</ul>
