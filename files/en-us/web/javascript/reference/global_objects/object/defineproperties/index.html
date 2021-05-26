---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Object
browser-compat: javascript.builtins.Object.defineProperties
---
<div>{{JSRef}}</div>

<p>The <strong><code>Object.defineProperties()</code></strong> method defines new or
  modifies existing properties directly on an object, returning the object.</p>

<div>{{EmbedInteractiveExample("pages/js/object-defineproperties.html")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">Object.defineProperties(<var>obj</var>, <var>props</var>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>obj</var></code></dt>
  <dd>The object on which to define or modify properties.</dd>
  <dt><code><var>props</var></code></dt>
  <dd>
    <p>An object whose keys represent the names of properties to be defined or modified and
    whose values are objects describing those properties. Each value in <code>props</code>
    must be either a data descriptor or an accessor descriptor; it cannot be both (see
    {{jsxref("Object.defineProperty()")}} for more details).</p>
    <p>Data descriptors and accessor descriptors may optionally contain the following keys:</p>
    <dl>
      <dt><code>configurable</code></dt>
      <dd><code>true</code> if and only if the type of this property descriptor may be
        changed and if the property may be deleted from the corresponding object.<br>
        <strong>Defaults to <code>false</code>.</strong>
      </dd>
      <dt><code>enumerable</code></dt>
      <dd><code>true</code> if and only if this property shows up during enumeration of
        the properties on the corresponding object.<br>
        <strong>Defaults to <code>false</code>.</strong>
      </dd>
    </dl>

    <p>A data descriptor also has the following optional keys:</p>

    <dl>
      <dt><code>value</code></dt>
      <dd>The value associated with the property. Can be any valid JavaScript value
        (number, object, function, etc).<br>
        <strong>Defaults to {{jsxref("undefined")}}.</strong>
      </dd>
      <dt><code>writable</code></dt>
      <dd><code>true</code> if and only if the value associated with the property may be
        changed with an {{jsxref("Operators#assignment_operators", "assignment operator",
        "", 1)}}.<br>
        <strong>Defaults to <code>false</code>.</strong>
      </dd>
    </dl>

    <p>An accessor descriptor also has the following optional keys:</p>

    <dl>
      <dt><code>get</code></dt>
      <dd>A function which serves as a getter for the property, or {{jsxref("undefined")}}
        if there is no getter. The function's return value will be used as the value of
        the property.<br>
        <strong>Defaults to {{jsxref("undefined")}}.</strong>
      </dd>
      <dt><code>set</code></dt>
      <dd>A function which serves as a setter for the property, or {{jsxref("undefined")}}
        if there is no setter. The function will receive as its only argument the new
        value being assigned to the property.<br>
        <strong>Defaults to {{jsxref("undefined")}}.</strong>
      </dd>
    </dl>

    <p>If a descriptor has neither of <code>value</code>, <code>writable</code>,
      <code>get</code> and <code>set</code> keys, it is treated as a data descriptor. If a
      descriptor has both <code>value</code> or <code>writable</code> and <code>get</code>
      or <code>set</code> keys, an exception is thrown.</p>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>The object that was passed to the function.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_Object.defineProperties">Using Object.defineProperties</h3>

<pre class="brush: js">var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>Assuming a pristine execution environment with all names and properties referring to
  their initial values, <code>Object.defineProperties</code> is almost completely
  equivalent (note the comment in <code>isCallable</code>) to the following
  reimplementation in JavaScript:</p>

<pre class="brush: js highlight:[8]">function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB: modify as necessary if other values than functions are callable.
      return typeof v === 'function';
    }

    if (typeof desc !== 'object' || desc === null)
      throw new TypeError('bad desc');

    var d = {};

    if (hasProperty(desc, 'enumerable'))
      d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, 'configurable'))
      d.configurable = !!desc.configurable;
    if (hasProperty(desc, 'value'))
      d.value = desc.value;
    if (hasProperty(desc, 'writable'))
      d.writable = !!desc.writable;
    if (hasProperty(desc, 'get')) {
      var g = desc.get;

      if (!isCallable(g) &amp;&amp; typeof g !== 'undefined')
        throw new TypeError('bad get');
      d.get = g;
    }
    if (hasProperty(desc, 'set')) {
      var s = desc.set;
      if (!isCallable(s) &amp;&amp; typeof s !== 'undefined')
        throw new TypeError('bad set');
      d.set = s;
    }

    if (('get' in d || 'set' in d) &amp;&amp; ('value' in d || 'writable' in d))
      throw new TypeError('identity-confused descriptor');

    return d;
  }

  if (typeof obj !== 'object' || obj === null)
    throw new TypeError('bad obj');

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i &lt; keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i &lt; descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li>{{jsxref("Object.keys()")}}</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability
      and ownership of properties</a></li>
</ul>
