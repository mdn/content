---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
tags:
- ECMAScript 2015
- JavaScript
- Method
- Object
- Prototype
browser-compat: javascript.builtins.Object.setPrototypeOf
---
<div>{{JSRef}}</div>

<p>The <code><strong>Object.setPrototypeOf()</strong></code> method sets the prototype
  (i.e., the internal <code>[[Prototype]]</code> property) of a specified object to
  another object or {{jsxref("null")}}.</p>

<div class="warning">
  <p><strong>Warning:</strong> Changing the <code>[[Prototype]]</code> of an object is, by
    the nature of <a href="https://mathiasbynens.be/notes/prototypes">how modern
      JavaScript engines optimize property accesses</a>, currently a very slow operation
    in every browser and JavaScript engine. In addition, the effects of altering
    inheritance are subtle and far-flung, and are not limited to the time spent in the
    <code>Object.setPrototypeOf(...)</code> statement, but may extend to
    <strong><em>any</em></strong> code that has access to any object whose
    <code>[[Prototype]]</code> has been altered.</p>

  <p>Because this feature is a part of the language, it is still the burden on engine
    developers to implement that feature performantly (ideally). Until engine developers
    address this issue, if you are concerned about performance, you should avoid setting
    the <code>[[Prototype]]</code> of an object. Instead, create a new object with the
    desired <code>[[Prototype]]</code> using {{jsxref("Object.create()")}}.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><code>Object.setPrototypeOf(<var>obj</var>, <var>prototype</var>)</code></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object which is to have its prototype set.</dd>
  <dt><code><var>prototype</var></code></dt>
  <dd>The object's new prototype (an object or {{jsxref("null")}}).</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The specified object.</p>

<h2 id="Description">Description</h2>

<p>Throws a {{jsxref("TypeError")}} exception if the object whose
  <code>[[Prototype]]</code> is to be modified is non-extensible according to
  {{jsxref("Object.isExtensible()")}}. Does nothing if the <code>prototype</code>
  parameter isn't an object or {{jsxref("null")}} (i.e., number, string, boolean, or
  {{jsxref("undefined")}}). Otherwise, this method changes the <code>[[Prototype]]</code>
  of <code>obj</code> to the new value.</p>

<p><code>Object.setPrototypeOf()</code> is in the ECMAScript 2015 specification. It is
  generally considered the proper way to set the prototype of an object, vs. the more
  controversial {{jsxref("Object.prototype.__proto__")}} property.</p>

<h2 id="Appending_Prototype_Chains">Appending Prototype Chains</h2>

<p>A combination of <code>Object.getPrototypeOf()</code> and {{jsxref("Object.proto",
  "Object.prototype.__proto__")}} permits appending a whole prototype chain to a new
  prototype object:</p>

<pre class="brush: js">/**
*** Object.appendChain(@object, @prototype)
*
* Appends the first non-native prototype of a chain to a new prototype.
* Returns @object (if it was a primitive value it will transformed into an object).
*
*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
*
* Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
* new Function(["@arg"(s)], "@function_body") to that chain.
* Returns the function.
*
**/

Object.appendChain = function(oChain, oProto) {
  if (arguments.length &lt; 2) {
    throw new TypeError('Object.appendChain - Not enough arguments');
  }
  if (typeof oProto !== 'object' &amp;&amp; typeof oProto !== 'string') {
    throw new TypeError('second argument to Object.appendChain must be an object or a string');
  }

  var oNewProto = oProto,
      oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (var o1st = this.getPrototypeOf(o2nd);
    o1st !== Object.prototype &amp;&amp; o1st !== Function.prototype;
    o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
}
</pre>

<h3 id="Usage">Usage</h3>

<h4 id="First_example_Appending_a_chain_to_a_prototype">First example: Appending a chain
  to a prototype</h4>

<pre class="brush: js">function Mammal() {
  this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'
</pre>

<h4
  id="Second_example_Transforming_a_primitive_value_into_an_instance_of_its_constructor_and_append_its_chain_to_a_prototype">
  Second example: Transforming a primitive value into an instance of its constructor and
  append its chain to a prototype</h4>

<pre class="brush: js">function MySymbol() {
  this.isSymbol = 'yes';
}

var nPrime = 17;

console.log(typeof nPrime); // 'number'

var oPrime = Object.appendChain(nPrime, new MySymbol());

console.log(oPrime); // '17'
console.log(oPrime.isSymbol); // 'yes'
console.log(typeof oPrime); // 'object'
</pre>

<h4
  id="Third_example_Appending_a_chain_to_the_Function.prototype_object_and_appending_a_new_function_to_that_chain">
  Third example: Appending a chain to the Function.prototype object and appending a new
  function to that chain</h4>

<pre class="brush: js">function Person(sName) {
  this.identity = sName;
}

var george = Object.appendChain(new Person('George'),
                                'console.log("Hello guys!!");');

console.log(george.identity); // 'George'
george(); // 'Hello guys!!'
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.setPrototypeOf">Using Object.setPrototypeOf</h3>

<pre class="brush: js">var dict = Object.setPrototypeOf({}, null);
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Using the older {{jsxref("Object.prototype.__proto__")}} property, we can easily define
  <code>Object.setPrototypeOf</code> if it isn't available already:</p>

<pre class="brush: js">if (!Object.setPrototypeOf) {
    // Only works in Chrome and FireFox, does not work in IE:
     Object.prototype.setPrototypeOf = function(obj, proto) {
         if(obj.__proto__) {
             obj.__proto__ = proto;
             return obj;
         } else {
             // If you want to return prototype of Object.create(null):
             var Fn = function() {
                 for (var key in obj) {
                     Object.defineProperty(this, key, {
                         value: obj[key],
                     });
                 }
             };
             Fn.prototype = proto;
             return new Fn();
         }
     }
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
  <li>{{jsxref("Object.prototype.isPrototypeOf()")}}</li>
  <li>{{jsxref("Object.getPrototypeOf()")}}</li>
  <li>{{jsxref("Object.prototype.__proto__")}}</li>
</ul>
