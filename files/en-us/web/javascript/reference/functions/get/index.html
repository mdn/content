---
title: getter
slug: Web/JavaScript/Reference/Functions/get
tags:
- ECMAScript 2015
- ECMAScript 5
- Functions
- JavaScript
- Language feature
browser-compat: javascript.functions.get
---
<div>{{jsSidebar("Functions")}}</div>

<p>The <strong><code>get</code></strong> syntax binds an object property to a function
  that will be called when that property is looked up.</p>

<div>{{EmbedInteractiveExample("pages/js/functions-getter.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">{get <var>prop</var>() { ... } }
{get [<var>expression</var>]() { ... } }</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>prop</var></code></dt>
  <dd>The name of the property to bind to the given function.</dd>
  <dt><code><var>expression</var></code></dt>
  <dd>Starting with ECMAScript 2015, you can also use expressions for a computed property
    name to bind to the given function.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Sometimes it is desirable to allow access to a property that returns a dynamically
  computed value, or you may want to reflect the status of an internal variable without
  requiring the use of explicit method calls. In JavaScript, this can be accomplished with
  the use of a <em>getter</em>.</p>

<p>It is not possible to simultaneously have a getter bound to a property and have that
  property actually hold a value, although it <em>is</em> possible to use a getter and a
  setter in conjunction to create a type of pseudo-property.</p>

<p>Note the following when working with the <code>get</code> syntax:</p>

<ul>
  <li>It can have an identifier which is either a number or a string;</li>
  <li>It must have exactly zero parameters (see <a       href="http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/"
      rel="external nofollow">Incompatible <abbr title="ECMAScript 5th edition">ES5</abbr>
      change: literal getter and setter functions must now have exactly zero or one
      arguments</a> for more information);</li>
  <li>It must not appear in an object literal with another <code>get</code> or with a data
    entry for the same property (<code>{ get x() { }, get x() { } }</code> and
    <code>{ x: ..., get x() { } }</code> are forbidden).</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Defining_a_getter_on_new_objects_in_object_initializers">Defining a getter on new
  objects in object initializers</h3>

<p>This will create a pseudo-property <code>latest</code> for object <code>obj</code>,
  which will return the last array item in <code>log</code>.</p>

<pre class="brush: js">const obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "test"
</pre>

<p>Note that attempting to assign a value to <code>latest</code> will not change it.</p>

<h3 id="Deleting_a_getter_using_the_delete_operator">Deleting a getter using the
  <code>delete</code> operator</h3>

<p>If you want to remove the getter, you can just {{jsxref("Operators/delete", "delete")}}
  it:</p>

<pre class="brush: js">delete <var>obj</var>.latest;
</pre>

<h3 id="Defining_a_getter_on_existing_objects_using_defineProperty">Defining a getter on
  existing objects using <code>defineProperty</code></h3>

<p>To append a getter to an existing object later at any time, use
  {{jsxref("Object.defineProperty()")}}.</p>

<pre class="brush: js">const o = {a: 0};

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)</pre>

<h3 id="Using_a_computed_property_name">Using a computed property name</h3>

<pre class="brush: js">const expr = 'foo';

const obj = {
  get [expr]() { return 'bar'; }
};

console.log(obj.foo); // "bar"</pre>

<h3 id="Smart_self-overwriting_lazy_getters">Smart / self-overwriting / lazy getters</h3>

<p>Getters give you a way to <em>define</em> a property of an object, but they do not
  <em>calculate</em> the property's value until it is accessed. A getter defers the cost
  of calculating the value until the value is needed. If it is never needed, you never pay
  the cost.</p>

<p>An additional optimization technique to lazify or delay the calculation of a property
  value and cache it for later access are <strong>smart (or "<a
      href="https://en.wikipedia.org/wiki/Memoization">memoized</a>") getters</strong>.
  The value is calculated the first time the getter is called, and is then cached so
  subsequent accesses return the cached value without recalculating it. This is useful in
  the following situations:</p>

<ul>
  <li>If the calculation of a property value is expensive (takes much RAM or CPU time,
    spawns worker threads, retrieves remote file, etc).</li>
  <li>If the value isn't needed just now. It will be used later, or in some case it's not
    used at all.</li>
  <li>If it's used, it will be accessed several times, and there is no need to
    re-calculate that value will never be changed or shouldn't be re-calculated.</li>
</ul>

<div class="note">
  <p><strong>Note:</strong> This means that you shouldn’t write a lazy getter for a property whose value you
    expect to change, because if the getter is lazy then it will not recalculate the
    value.</p>

  <p>Note that getters are not “lazy” or “memoized” by nature; you must implement this
    technique if you desire this behavior.</p>
</div>

<p>In the following example, the object has a getter as its own property. On getting the
  property, the property is removed from the object and re-added, but implicitly as a data
  property this time. Finally, the value gets returned.</p>

<pre class="brush: js">get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById('bookmarked-notification-anchor');
},</pre>

<p>For Firefox code, see also the <code>XPCOMUtils.jsm</code> code module, which defines
  the
  <code><a href="/en-US/docs/Mozilla/JavaScript_code_modules/XPCOMUtils.jsm#defineLazyGetter()">defineLazyGetter()</a></code>
  function.</p>

<h3 id="get_vs._defineProperty"><code>get</code> vs. <code>defineProperty</code></h3>

<p>While using the <code>get</code> keyword and {{jsxref("Object.defineProperty()")}} have
  similar results, there is a subtle difference between the two when used on
  {{jsxref("classes")}}.</p>

<p>When using <code>get</code> the property will be defined on the instance's prototype,
  while using {{jsxref("Object.defineProperty()")}} the property will be defined on the
  instance it is applied to.</p>

<pre
  class="brush: js">class Example {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(obj), 'hello'
  )
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/set">setter</a></li>
  <li>{{jsxref("Operators/delete", "delete")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Object.defineGetter", "__defineGetter__")}}</li>
  <li>{{jsxref("Object.defineSetter", "__defineSetter__")}}</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">Defining
      Getters and Setters</a> in JavaScript Guide</li>
</ul>
