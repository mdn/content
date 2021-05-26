---
title: Meta programming
slug: Web/JavaScript/Guide/Meta_programming
tags:
  - ECMAScript 2015
  - Guide
  - JavaScript
  - Proxy
  - Reflect
  - l10n:priority
---
<div>{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_Generators", "Web/JavaScript/Guide/Modules")}}</div>

<p class="summary">Starting with ECMAScript 2015, JavaScript gains support for the {{jsxref("Proxy")}} and {{jsxref("Reflect")}} objects allowing you to intercept and define custom behavior for fundamental language operations (e.g. property lookup, assignment, enumeration, function invocation, etc). With the help of these two objects you are able to program at the meta level of JavaScript.</p>

<h2 id="Proxies">Proxies</h2>

<p>Introduced in ECMAScript 6, {{jsxref("Proxy")}} objects allow you to intercept certain operations and to implement custom behaviors.</p>

<p>For example, getting a property on an object:</p>

<pre class="brush: js">let <var>handler</var> = {
  get: function(<var>target</var>, name) {
    return name in <var>target</var> ? <var>target</var>[name] : 42
  }
}

let p = new Proxy({}, <var>handler</var>)
p.a = 1
console.log(p.a, p.b) // 1, 42
</pre>

<p>The <code>Proxy</code> object defines a <dfn><code><var>target</var></code></dfn> (an empty object here) and a <dfn><code><var>handler</var></code></dfn> object, in which a <code>get</code> <dfn>trap</dfn> is implemented. Here, an object that is proxied will not return <code>undefined</code> when getting undefined properties, but will instead return the number <code>42</code>.</p>

<p>Additional examples are available on the {{jsxref("Proxy")}} reference page.</p>

<h3 id="Terminology">Terminology</h3>

<p>The following terms are used when talking about the functionality of proxies.</p>

<dl>
 <dt>{{jsxref("Global_Objects/Proxy/Proxy","handler","","true")}}</dt>
 <dd>Placeholder object which contains traps.</dd>
 <dt>traps</dt>
 <dd>The methods that provide property access. (This is analogous to the concept of <em>traps</em> in operating systems.)</dd>
 <dt>target</dt>
 <dd>Object which the proxy virtualizes. It is often used as storage backend for the proxy. Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.</dd>
 <dt>invariants</dt>
 <dd>Semantics that remain unchanged when implementing custom operations are called <em>invariants</em>. If you violate the invariants of a handler, a {{jsxref("TypeError")}} will be thrown.</dd>
</dl>

<h2 id="Handlers_and_traps">Handlers and traps</h2>

<p>The following table summarizes the available traps available to <code>Proxy</code> objects. See the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy">reference pages</a> for detailed explanations and examples.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th>Handler / trap</th>
   <th>Interceptions</th>
   <th>Invariants</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}</td>
   <td>{{jsxref("Object.getPrototypeOf()")}}<br>
    {{jsxref("Reflect.getPrototypeOf()")}}<br>
    {{jsxref("Object/proto", "__proto__")}}<br>
    {{jsxref("Object.prototype.isPrototypeOf()")}}<br>
    {{jsxref("Operators/instanceof", "instanceof")}}</td>
   <td>
    <ul>
     <li><code>getPrototypeOf</code> method must return an object or <code>null</code>.</li>
     <li>If <code><var>target</var></code> is not extensible, <code>Object.getPrototypeOf(<var>proxy</var>)</code> method must return the same value as <code>Object.getPrototypeOf(<var>target</var>)</code>.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}</td>
   <td>{{jsxref("Object.setPrototypeOf()")}}<br>
    {{jsxref("Reflect.setPrototypeOf()")}}</td>
   <td>If <code><var>target</var></code> is not extensible, the <code>prototype</code> parameter must be the same value as <code>Object.getPrototypeOf(<var>target</var>)</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}</td>
   <td>{{jsxref("Object.isExtensible()")}}<br>
    {{jsxref("Reflect.isExtensible()")}}</td>
   <td><code>Object.isExtensible(<var>proxy</var>)</code> must return the same value as <code>Object.isExtensible(<var>target</var>)</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}</td>
   <td>{{jsxref("Object.preventExtensions()")}}<br>
    {{jsxref("Reflect.preventExtensions()")}}</td>
   <td><code>Object.preventExtensions(<var>proxy</var>)</code> only returns <code>true</code> if <code>Object.isExtensible(<var>proxy</var>)</code> is <code>false</code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}</td>
   <td>{{jsxref("Object.getOwnPropertyDescriptor()")}}<br>
    {{jsxref("Reflect.getOwnPropertyDescriptor()")}}</td>
   <td>
    <ul>
     <li><code>getOwnPropertyDescriptor</code> must return an object or <code>undefined</code>.</li>
     <li>A property cannot be reported as non-existent if it exists as a non-configurable own property of <code><var>target</var></code>.</li>
     <li>A property cannot be reported as non-existent if it exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li>
     <li>A property cannot be reported as existent if it does not exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li>
     <li>A property cannot be reported as non-configurable if it does not exist as an own property of <code><var>target</var></code> or if it exists as a configurable own property of <code><var>target</var></code>.</li>
     <li>The result of <code>Object.getOwnPropertyDescriptor(<var>target</var>)</code> can be applied to <code><var>target</var></code> using <code>Object.defineProperty</code> and will not throw an exception.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}</td>
   <td>{{jsxref("Object.defineProperty()")}}<br>
    {{jsxref("Reflect.defineProperty()")}}</td>
   <td>
    <ul>
     <li>A property cannot be added if <code><var>target</var></code> is not extensible.</li>
     <li>A property cannot be added as (or modified to be) non-configurable if it does not exist as a non-configurable own property of <code><var>target</var></code>.</li>
     <li>A property may not be non-configurable if a corresponding configurable property of <code><var>target</var></code> exists.</li>
     <li>If a property has a corresponding target object property, then <code>Object.defineProperty(<var>target</var>, <var>prop</var>, <var>descriptor</var>)</code> will not throw an exception.</li>
     <li>In strict mode, a <code>false</code> value returned from the <code>defineProperty</code> handler will throw a {{jsxref("TypeError")}} exception.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/has", "handler.has()")}}</td>
   <td>
    <dl>
     <dt>Property query</dt>
     <dd><code>foo in proxy</code></dd>
     <dt>Inherited property query</dt>
     <dd><code>foo in Object.create(<var>proxy</var>)</code><br>
     {{jsxref("Reflect.has()")}}</dd>
    </dl>
   </td>
   <td>
    <ul>
     <li>A property cannot be reported as non-existent, if it exists as a non-configurable own property of <code><var>target</var></code>.</li>
     <li>A property cannot be reported as non-existent if it exists as an own property of <code><var>target</var></code> and <code><var>target</var></code> is not extensible.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/get", "handler.get()")}}</td>
   <td>
    <dl>
     <dt>Property access</dt>
     <dd><code><var>proxy</var>[foo]</code><br>
     <code><var>proxy</var>.bar</code></dd>
     <dt>Inherited property access</dt>
     <dd><code>Object.create(<var>proxy</var>)[foo]</code><br>
     {{jsxref("Reflect.get()")}}</dd>
    </dl>
   </td>
   <td>
    <ul>
     <li>The value reported for a property must be the same as the value of the corresponding <code><var>target</var></code> property if <code><var>target</var></code>'s property is a non-writable, non-configurable data property.</li>
     <li>The value reported for a property must be <code>undefined</code> if the corresponding <code><var>target</var></code> property is non-configurable accessor property that has undefined as its <code>[[Get]]</code> attribute.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/set", "handler.set()")}}</td>
   <td>
    <dl>
     <dt>Property assignment</dt>
     <dd><code><var>proxy</var>[foo] = bar</code><br>
     <code><var>proxy</var>.foo = bar</code></dd>
     <dt>Inherited property assignment</dt>
     <dd><code>Object.create(<var>proxy</var>)[foo] = bar</code><br>
     {{jsxref("Reflect.set()")}}</dd>
    </dl>
   </td>
   <td>
    <ul>
     <li>Cannot change the value of a property to be different from the value of the corresponding <code><var>target</var></code> property if the corresponding <code><var>target</var></code> property is a non-writable, non-configurable data property.</li>
     <li>Cannot set the value of a property if the corresponding <code><var>target</var></code> property is a non-configurable accessor property that has <code>undefined</code> as its <code>[[Set]]</code> attribute.</li>
     <li>In strict mode, a <code>false</code> return value from the <code>set</code> handler will throw a {{jsxref("TypeError")}} exception.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}</td>
   <td>
    <dl>
     <dt>Property deletion</dt>
     <dd><code>delete <var>proxy</var>[foo]</code><br>
     <code>delete <var>proxy</var>.foo</code><br>
     {{jsxref("Reflect.deleteProperty()")}}</dd>
    </dl>
   </td>
   <td>A property cannot be deleted if it exists as a non-configurable own property of <code><var>target</var></code>.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/handler/enumerate", "handler.enumerate()")}}</td>
   <td>
    <dl>
     <dt>Property enumeration / <code>for...in</code>:</dt>
     <dd><code>for (let name in <var>proxy</var>) {...}</code><br>
     {{jsxref("Reflect.enumerate()")}}</dd>
    </dl>
   </td>
   <td>The <code>enumerate</code> method must return an object.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}</td>
   <td>{{jsxref("Object.getOwnPropertyNames()")}}<br>
    {{jsxref("Object.getOwnPropertySymbols()")}}<br>
    {{jsxref("Object.keys()")}}<br>
    {{jsxref("Reflect.ownKeys()")}}</td>
   <td>
    <ul>
     <li>The result of <code>ownKeys</code> is a List.</li>
     <li>The Type of each result List element is either {{jsxref("String")}} or {{jsxref("Symbol")}}.</li>
     <li>The result List must contain the keys of all non-configurable own properties of <code><var>target</var></code>.</li>
     <li>If the <code><var>target</var></code> object is not extensible, then the result List must contain all the keys of the own properties of <code><var>target</var></code> and no other values.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}</td>
   <td><code>proxy(..args)</code><br>
    {{jsxref("Function.prototype.apply()")}} and {{jsxref("Function.prototype.call()")}}<br>
    {{jsxref("Reflect.apply()")}}</td>
   <td>There are no invariants for the <code><var>handler</var>.apply</code> method.</td>
  </tr>
  <tr>
   <td>{{jsxref("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}</td>
   <td><code>new proxy(...args)</code><br>
    {{jsxref("Reflect.construct()")}}</td>
   <td>The result must be an <code>Object</code>.</td>
  </tr>
 </tbody>
</table>

<h2 id="Revocable_Proxy">Revocable <code>Proxy</code></h2>

<p>The {{jsxref("Proxy.revocable()")}} method is used to create a revocable <code>Proxy</code> object. This means that the proxy can be revoked via the function <code>revoke</code> and switches the proxy off.</p>

<p>Afterwards, any operation on the proxy leads to a {{jsxref("TypeError")}}.</p>

<pre class="brush: js">let revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return '[[' + name + ']]'
  }
})
let proxy = revocable.proxy
console.log(proxy.foo)  // "[[foo]]"

revocable.revoke()

console.log(proxy.foo)  // TypeError is thrown
proxy.foo = 1           // TypeError again
delete proxy.foo        // still TypeError
typeof proxy            // "object", typeof doesn't trigger any trap
</pre>

<h2 id="Reflection">Reflection</h2>

<p>{{jsxref("Reflect")}} is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of the {{jsxref("Global_Objects/Proxy/Proxy","proxy handlers","","true")}}.</p>

<p><code>Reflect</code> is not a function object.</p>

<p><code>Reflect</code> helps with forwarding default operations from the handler to the <code><var>target</var></code>.</p>

<p>With {{jsxref("Reflect.has()")}} for example, you get the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> operator</a> as a function:</p>

<pre class="brush: js">Reflect.has(Object, 'assign') // true
</pre>

<h3 id="A_better_apply_function">A better <code>apply</code> function</h3>

<p>In ES5, you typically use the {{jsxref("Function.prototype.apply()")}} method to call a function with a given <code>this</code> value and <code><var>arguments</var></code> provided as an array (or an <a href="/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects">array-like object</a>).</p>

<pre class="brush: js">Function.prototype.apply.call(Math.floor, undefined, [1.75])
</pre>

<p>With {{jsxref("Reflect.apply")}} this becomes less verbose and easier to understand:</p>

<pre class="brush: js">Reflect.apply(Math.floor, undefined, [1.75])
// 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index
// 4

Reflect.apply(''.charAt, 'ponies', [3])
// "i"
</pre>

<h3 id="Checking_if_property_definition_has_been_successful">Checking if property definition has been successful</h3>

<p>With {{jsxref("Object.defineProperty")}}, which returns an object if successful, or throws a {{jsxref("TypeError")}} otherwise, you would use a {{jsxref("Statements/try...catch","try...catch")}} block to catch any error that occurred while defining a property. Because {{jsxref("Reflect.defineProperty")}} returns a Boolean success status, you can just use an {{jsxref("Statements/if...else","if...else")}} block here:</p>

<pre class="brush: js">if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}</pre>

<p>{{PreviousNext("Web/JavaScript/Guide/Iterators_and_Generators", "Web/JavaScript/Guide/Modules")}}</p>
