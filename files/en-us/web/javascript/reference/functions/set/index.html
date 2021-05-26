---
title: setter
slug: Web/JavaScript/Reference/Functions/set
tags:
- ECMAScript 5
- Functions
- JavaScript
- Language feature
browser-compat: javascript.functions.set
---
<div>{{jsSidebar("Functions")}}</div>

<p><span class="seoSummary">The <strong><code>set</code></strong> syntax binds an object
    property to a function to be called when there is an attempt to set that
    property.</span></p>

<div>{{EmbedInteractiveExample("pages/js/functions-setter.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">{set <var>prop</var>(<var>val</var>) { . . . }}
{set [<var>expression</var>](<var>val</var>) { . . . }}</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>prop</var></code></dt>
  <dd>The name of the property to bind to the given function.</dd>
  <dt><code><var>val</var></code></dt>
  <dd>An alias for the variable that holds the value attempted to be assigned to
    <code><var>prop</var></code>.</dd>
  <dt><code><var>expression</var></code></dt>
  <dd>Starting with ECMAScript 2015, you can also use expressions for a computed property
    name to bind to the given function.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>In JavaScript, a setter can be used to execute a function whenever a specified property
  is attempted to be changed. Setters are most often used in conjunction with getters to
  create a type of pseudo-property. It is not possible to simultaneously have a setter on
  a property that holds an actual value.</p>

<p>Note the following when working with the <code>set</code> syntax:</p>

<ul>
  <li>It can have an identifier which is either a number or a string;</li>
  <li>It must have exactly one parameter (see <a       href="http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/"
      rel="external nofollow">Incompatible <abbr
        title="ECMAScript 5th edition">ES5</abbr> change: literal getter and setter
      functions must now have exactly zero or one arguments</a> for more information);
  </li>
  <li>It must not appear in an object literal with another <code>set</code> or with a
    data entry for the same property.<br>
    ( <code>{ set x(v) { }, set x(v) { } }</code> and
    <code>{ x: ..., set x(v) { } }</code> are forbidden )</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Defining_a_setter_on_new_objects_in_object_initializers">Defining a setter on new
  objects in object initializers</h3>

<p>The following example define a pseudo-property <code>current</code> of object
  <code>language</code>. When <code>current</code> is assigned a value, it updates
  <code>log</code> with that value:</p>

<pre class="brush: js">const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
</pre>

<p>Note that <code>current</code> is not defined, and any attempts to access it will
  result in <code>undefined</code>.</p>

<h3 id="Removing_a_setter_with_the_delete_operator">Removing a setter with the
  <code>delete</code> operator</h3>

<p>If you want to remove the setter, you can just {{jsxref("Operators/delete", "delete")}}
  it:</p>

<pre class="brush: js">delete language.current;
</pre>

<h3 id="Defining_a_setter_on_existing_objects_using_defineProperty">Defining a setter on
  existing objects using <code>defineProperty</code></h3>

<p>To append a setter to an <em>existing</em> object, use
  {{jsxref("Object.defineProperty()")}}.</p>

<pre class="brush: js">const o = {a: 0};

Object.defineProperty(o, 'b', {
  set: function(x) { this.a = x / 2; }
});

o.b = 10;
//  Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a)
//  5</pre>

<h3 id="Using_a_computed_property_name">Using a computed property name</h3>

<pre class="brush: js">const expr = 'foo';

const obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz);
//  "bar"

obj.foo = 'baz';
//  run the setter

console.log(obj.baz);
//  "baz"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions/get">getter</a></li>
  <li>{{jsxref("Operators/delete", "delete")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Object.defineGetter", "__defineGetter__")}}</li>
  <li>{{jsxref("Object.defineSetter", "__defineSetter__")}}</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters">Defining
      Getters and Setters</a> in JavaScript Guide</li>
</ul>
