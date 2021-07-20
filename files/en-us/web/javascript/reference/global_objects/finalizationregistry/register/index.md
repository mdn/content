---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
tags:
  - FinalizationRegistry
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.FinalizationRegistry.register
---
<div>{{JSRef}}</div>

<p>The <code>register()</code> method registers an object with a
  {{jsxref("FinalizationRegistry")}} instance so that if the object is garbage-collected,
  the registry's callback may get called.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
register(target, heldValue);
register(target, heldValue, unregisterToken);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>The target object to register.</dd>
  <dt><code><var>heldValue</var></code></dt>
  <dd>The value to pass to the finalizer for this object. This cannot be the
    <code><var>target</var></code> object.</dd>
  <dt><code><var>unregisterToken</var></code> {{optional_inline}}</dt>
  <dd>A token that may be used with the <code>unregister</code> method later to unregister
    the target object. If provided (and not <code>undefined</code>), this must be an
    object. If not provided, the target cannot be unregistered.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>undefined</code>.</p>

<h2 id="Notes">Notes</h2>

<p>See the <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible">Avoid
    where possible</a> and <a
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks">Notes
    on cleanup callbacks</a> sections of the {{jsxref("FinalizationRegistry")}} page for
  important caveats.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_register">Using register</h3>

<p>The following registers the target object referenced by <code><var>target</var></code>,
  passing in the held value <code>"some value"</code> and passing the target object itself
  as the unregistration token:</p>

<pre class="brush: js">registry.register(target, "some value", target);
</pre>

<p>The following registers the target object referenced by <code><var>target</var></code>,
  passing in another object as the held value, and not passing in any unregistration token
  (which means <code><var>target</var></code> can't be unregistered):</p>

<pre class="brush: js">registry.register(target, {"useful": "info about target"});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("FinalizationRegistry")}}</li>
</ul>
