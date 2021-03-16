---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
tags:
- Error
- Errors
- JavaScript
- TypeError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "can't define property "x": "obj" is not extensible" occurs
  when {{jsxref("Object.preventExtensions()")}} marked an object as no longer extensible,
  so that it will never have properties beyond the ones it had at the time it was marked
  as non-extensible.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: Cannot create property for a non-extensible object (Edge)
TypeError: can't define property "x": "obj" is not extensible (Firefox)
TypeError: Cannot define property: "x", object is not extensible. (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>Usually, an object is extensible and new properties can be added to it. However, in
  this case {{jsxref("Object.preventExtensions()")}} marked an object as no longer
  extensible, so that it will never have properties beyond the ones it had at the time it
  was marked as non-extensible.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Adding_new_properties_to_a_non-extensible_objects">Adding new properties to a
  non-extensible objects</h3>

<p>In <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a>,
  attempting to add new properties to a non-extensible object throws a
  <code>TypeError</code>. In sloppy mode, the addition of the "x" property is silently
  ignored.</p>

<pre class="brush: js example-bad">'use strict';

var obj = {};
Object.preventExtensions(obj);

obj.x = 'foo';
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>In both, <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">strict mode</a> and
  sloppy mode, a call to {{jsxref("Object.defineProperty()")}} throws when adding a new
  property to a non-extensible object.</p>

<pre class="brush: js example-bad">var obj = { };
Object.preventExtensions(obj);

Object.defineProperty(obj,
  'x', { value: "foo" }
);
// TypeError: can't define property "x": "obj" is not extensible
</pre>

<p>To fix this error, you will either need to remove the call to
  {{jsxref("Object.preventExtensions()")}} entirely, or move it to a position so that the
  property is added earlier and only later the object is marked as non-extensible. Of
  course you can also remove the property that was attempted to be added, if you don't
  need it.</p>

<pre class="brush: js example-good">'use strict';

var obj = {};
obj.x = 'foo'; // add property first and only then prevent extensions

Object.preventExtensions(obj);</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.preventExtensions()")}}</li>
</ul>
