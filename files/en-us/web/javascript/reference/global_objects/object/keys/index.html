---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
tags:
- ECMAScript 5
- JavaScript
- JavaScript 1.8.5
- Method
- Object
- Polyfill
browser-compat: javascript.builtins.Object.keys
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">The <code><strong>Object.keys()</strong></code> method returns
    an array of a given object's own enumerable property <strong>names</strong>, iterated
    in the same order that a normal loop would.</span></p>

<div>{{EmbedInteractiveExample("pages/js/object-keys.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">Object.keys(<var>obj</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object of which the enumerable's own properties are to be returned.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An array of strings that represent all the enumerable properties of the given object.
</p>

<h2 id="Description">Description</h2>

<p><code>Object.keys()</code> returns an array whose elements are strings corresponding to
  the enumerable properties found directly upon <code>object</code>. The ordering of the
  properties is the same as that given by looping over the properties of the object
  manually.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.keys">Using Object.keys</h3>

<pre class="brush: js">// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
</pre>

<p>If you want <em>all</em> properties—including non-enumerables—see
  {{jsxref("Object.getOwnPropertyNames()")}}.</p>

<h3 id="Non-object_coercion">Non-object coercion</h3>

<p>In ES5, if the argument to this method is not an object (a primitive), then it will
  cause a {{jsxref("TypeError")}}.</p>

<p>From ES2015 onwards, a non-object argument will be coerced to an object.</p>

<pre class="brush: js">// In ES5
Object.keys('foo');  // TypeError: "foo" is not an object

// In ES2015+
Object.keys('foo');  // ["0", "1", "2"]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>To add compatible <code>Object.keys</code> support in older environments that do not
  natively support it, copy the following snippet:</p>

<pre class="brush: js">// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' &amp;&amp; (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i &lt; dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
</pre>

<p>Please note that the above code includes non-enumerable keys in IE7 (and maybe IE8),
  when passing in an object from a different window.</p>

<p>For a simple Browser Polyfill, see <a
    href="http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html">Javascript
    - Object.keys Browser Compatibility</a>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>A polyfill of <code>Object.keys</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-object"><code>core-js</code></a></li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability
      and ownership of properties</a></li>
  <li>{{jsxref("Object.prototype.propertyIsEnumerable()")}}</li>
  <li>{{jsxref("Object.create()")}}</li>
  <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
  <li>{{jsxref("Object.values()")}}</li>
  <li>{{jsxref("Object.entries()")}}</li>
</ul>
