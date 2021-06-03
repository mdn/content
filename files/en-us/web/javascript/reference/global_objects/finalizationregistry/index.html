---
title: FinalizationRegistry
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
tags:
  - Class
  - FinalizationRegistry
  - JavaScript
  - Reference
browser-compat: javascript.builtins.FinalizationRegistry
---
<div>{{JSRef}}</div>

<p>A <strong><code>FinalizationRegistry</code></strong> object lets you request a callback when an object is garbage-collected.</p>

<h2 id="Description">Description</h2>

<p><code>FinalizationRegistry</code> provides a way to request that a <em>cleanup callback</em> get called at some point when an object registered with the registry has been <em>reclaimed</em> (garbage-collected). (Cleanup callbacks are sometimes called <em>finalizers</em>.)</p>

<div class="note">
<p><strong>Note:</strong> Cleanup callbacks should not be used for essential program logic. See <a href="#notes_on_cleanup_callbacks">Notes on cleanup callbacks</a> for details.</p>
</div>

<p>You create the registry passing in the callback:</p>

<pre class="brush: js">const registry = new FinalizationRegistry(heldValue =&gt; {
  // ....
});
</pre>

<p>Then you register any objects you want a cleanup callback for by calling the `register` method, passing in the object and a *held value* for it:</p>

<pre class="brush: js">registry.register(theObject, "some value");
</pre>

<p>The registry does not keep a strong reference to the object, as that would defeat the purpose (if the registry held it strongly, the object would never be reclaimed).</p>

<p>If <code>theObject</code> is reclaimed, your cleanup callback may be called at some point with the <em>held value</em> you provided for it (<code>"some value"</code> in the above). The held value can be any value you like: a primitive or an object, even <code>undefined</code>. If the held value is an object, the registry keeps a <em>strong</em> reference to it (so it can pass it to your cleanup callback later).</p>

<p>If you might want to unregister an object later, you pass a third value, which is the <em>unregistration token</em> you'll use later when calling the registry's <code>unregister</code> function to unregister the object. The registry only keeps a weak reference to the unregister token.</p>

<p>It's common to use the object itself as the unregister token, which is just fine:</p>

<pre class="brush: js">registry.register(theObject, "some value", theObject);
// ...some time later, if you don't care about `theObject` anymore...
registry.unregister(theObject);
</pre>

<p>It doesn't have to be the same object, though; it can be a different one:</p>

<pre class="brush: js">registry.register(theObject, "some value", tokenObject);
// ...some time later, if you don't care about `theObject` anymore...
registry.unregister(tokenObject);
</pre>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{jsxref("FinalizationRegistry/FinalizationRegistry", "FinalizationRegistry()")}}</dt>
 <dd>Creates a new <code>FinalizationRegistry</code> object.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("FinalizationRegistry.register", "FinalizationRegistry.prototype.register()")}}</dt>
 <dd>Registers an object with the registry in order to get a cleanup callback when/if the object is garbage-collected.</dd>
 <dt>{{jsxref("FinalizationRegistry.unregister", "FinalizationRegistry.prototype.unregister()")}}</dt>
 <dd>Unregisters an object from the registry.</dd>
</dl>

<h2 id="Avoid_where_possible">Avoid where possible</h2>

<p>Correct use of <code>FinalizationRegistry</code> takes careful thought, and it's best avoided if possible. It's also important to avoid relying on any specific behaviors not guaranteed by the specification. When, how, and whether garbage collection occurs is down to the implementation of any given JavaScript engine. Any behavior you observe in one engine may be different in another engine, in another version of the same engine, or even in a slightly different situation with the same version of the same engine. Garbage collection is a hard problem that JavaScript engine implementers are constantly refining and improving their solutions to.</p>

<p>Here are some specific points that the authors of the WeakRef proposal that FinalizationRegistry is part of included in its <a href="https://github.com/tc39/proposal-weakrefs/blob/master/reference.md">explainer document</a>:</p>

<blockquote>
<p><a href="https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)">Garbage collectors</a> are complicated. If an application or library depends on GC cleaning up a FinalizationRegistry or calling a finalizer [cleanup callback] in a timely, predictable manner, it's likely to be disappointed: the cleanup may happen much later than expected, or not at all. Sources of variability include:</p>

<ul>
 <li>One object might be garbage-collected much sooner than another object, even if they become unreachable at the same time, e.g., due to generational collection.</li>
 <li>Garbage collection work can be split up over time using incremental and concurrent techniques.</li>
 <li>Various runtime heuristics can be used to balance memory usage, responsiveness.</li>
 <li>The JavaScript engine may hold references to things which look like they are unreachable (e.g., in closures, or inline caches).</li>
 <li>Different JavaScript engines may do these things differently, or the same engine may change its algorithms across versions.</li>
 <li>Complex factors may lead to objects being held alive for unexpected amounts of time, such as use with certain APIs.</li>
</ul>
</blockquote>

<h2 id="Notes_on_cleanup_callbacks">Notes on cleanup callbacks</h2>

<p>Some notes on cleanup callbacks:</p>

<ul>
 <li>Developers shouldn't rely on cleanup callbacks for essential program logic. Cleanup callbacks may be useful for reducing memory usage across the course of a program, but are unlikely to be useful otherwise.</li>
 <li>A conforming JavaScript implementation, even one that does garbage collection, is not required to call cleanup callbacks. When and whether it does so is entirely down to the implementation of the JavaScript engine. When a registered object is reclaimed, any cleanup callbacks for it may be called then, or some time later, or not at all.</li>
 <li>It's likely that major implementations will call cleanup callbacks at some point during execution, but those calls may be substantially after the related object was reclaimed.</li>
 <li>There are also situations where even implementations that normally call cleanup callbacks are unlikely to call them:
  <ul>
   <li>When the JavaScript program shuts down entirely (for instance, closing a tab in a browser).</li>
   <li>When the <code>FinalizationRegistry</code> instance itself is no longer reachable by JavaScript code.</li>
  </ul>
 </li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_new_registry">Creating a new registry</h3>

<p>You create the registry passing in the callback:</p>

<pre class="brush: js">const registry = new FinalizationRegistry(heldValue =&gt; {
  // ....
});
</pre>

<h3 id="Registering_objects_for_cleanup">Registering objects for cleanup</h3>

<p>Then you register any objects you want a cleanup callback for by calling the `register` method, passing in the object and a *held value* for it:</p>

<pre class="brush: js">registry.register(theObject, "some value");</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("WeakRef")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
</ul>
