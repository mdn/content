---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
browser-compat: javascript.builtins.Symbol.toPrimitive
---
<div>{{JSRef}}</div>

<p>The <strong><code>Symbol.toPrimitive</code></strong> is a symbol that specifies a function valued property that is called to convert an object to a corresponding primitive value.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}</div>


<h2 id="Description">Description</h2>

<p>With the help of the <code>Symbol.toPrimitive</code> property (used as a function value), an object can be converted to a primitive value. The function is called with a string argument <code><var>hint</var></code>, which specifies the preferred type of the result primitive value. The <code><var>hint</var></code> argument can be one of "<code>number</code>", "<code>string</code>", and "<code>default</code>".</p>

<p>{{js_property_attributes(0,0,0)}}</p>

<h2 id="Examples">Examples</h2>

<h3 id="Modifying_primitive_values_converted_from_an_object">Modifying primitive values converted from an object</h3>

<p>Following example describes how <code>Symbol.toPrimitive</code> property can modify the primitive value converted from an object.</p>

<pre class="brush: js">// An object without Symbol.toPrimitive property.
var obj1 = {};
console.log(+obj1);     // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ''); // "[object Object]"

// An object with Symbol.toPrimitive property.
var obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == 'number') {
      return 10;
    }
    if (hint == 'string') {
      return 'hello';
    }
    return true;
  }
};
console.log(+obj2);     // 10        -- hint is "number"
console.log(`${obj2}`); // "hello"   -- hint is "string"
console.log(obj2 + ''); // "true"    -- hint is "default"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]")}}</li>
 <li>{{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}</li>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
 <li>{{jsxref("Object.prototype.valueOf()")}}</li>
</ul>
