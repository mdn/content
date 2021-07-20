---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Reference
  - Symbol
  - Polyfill
browser-compat: javascript.builtins.Symbol.toStringTag
---
<div>{{JSRef}}</div>

<p>The <strong><code>Symbol.toStringTag</code></strong> well-known symbol is a string valued property that is used in the creation of the default string description of an object. It is accessed internally by the {{jsxref("Object.prototype.toString()")}} method.</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-tostringtag.html")}}</div>


<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Examples">Examples</h2>

<h3 id="Default_tags">Default tags</h3>

<pre class="brush: js">Object.prototype.toString.call('foo');     // "[object String]"
Object.prototype.toString.call([1, 2]);    // "[object Array]"
Object.prototype.toString.call(3);         // "[object Number]"
Object.prototype.toString.call(true);      // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null);      // "[object Null]"
// ... and more
</pre>

<h3 id="Built-in_toStringTag_symbols">Built-in toStringTag symbols</h3>

<pre class="brush: js">Object.prototype.toString.call(new Map());       // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// ... and more
</pre>

<h3 id="Custom_classes_default_to_object_tag">Custom classes default to object tag</h3>

<p>When creating your own class, JavaScript defaults to the "Object" tag:</p>

<pre class="brush: js">class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
</pre>

<h3 id="Custom_tag_with_toStringTag">Custom tag with toStringTag</h3>

<p>Now, with the help of <code>toStringTag</code>, you are able to set your own custom tag:</p>

<pre class="brush: js">class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'Validator';
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
</pre>

<h3 id="toStringTag_available_on_all_DOM_prototype_objects">toStringTag available on all DOM prototype objects</h3>

<p>Due to a <a href="https://github.com/heycam/webidl/pull/357">WebIDL spec change</a> in mid-2020, browsers are adding a <code>Symbol.toStringTag</code> property to all DOM prototype objects. For example, to acccess the <code>Symbol.toStringTag</code> property on {{domxref("HTMLButtonElement")}}:</p>

<pre class="brush: js">let test = document.createElement('button');
test.toString(); // Returns [object HTMLButtonElement]
test[Symbol.toStringTag];  // Returns HTMLButtonElement</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>Symbol.toStringTag</code> is available in <a href="https://github.com/zloirock/core-js#ecmascript-symbol"><code>core-js</code></a></li>
 <li>{{jsxref("Object.prototype.toString()")}}</li>
</ul>
