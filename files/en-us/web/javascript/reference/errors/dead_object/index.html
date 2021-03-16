---
title: 'TypeError: can''t access dead object'
slug: Web/JavaScript/Reference/Errors/Dead_object
tags:
- Addons
- Error
- Errors
- JavaScript
---
<div>{{JSSidebar("Errors")}}</div>

<p>The JavaScript exception "can't access dead object" occurs when Firefox disallows
  add-ons to keep strong references to DOM objects after their parent document has been
  destroyed to improve in memory usage and to prevent memory leaks.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">TypeError: can't access dead object
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>To improve in memory usage and to prevent memory leaks, Firefox disallows add-ons to
  keep strong references to DOM objects after their parent document has been destroyed. A
  dead object, is holding a strong (keep alive) reference to a DOM element that persists
  even after it was destroyed in the DOM. To avoid these issues, references to DOM nodes
  in foreign document should instead be stored in an object which is specific to that
  document, and cleaned up when the document is unloaded, or stored as <a
    href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getWeakReference">weak
    references</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Checking_if_an_object_is_dead">Checking if an object is dead</h3>

<p><a
    href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils">Components.utils</a>
  offers a <code>isDeadWrapper()</code> method, which privileged code might use.</p>

<pre class="brush: js">if (Components.utils.isDeadWrapper(window)) {
  // dead
}</pre>

<p>Unprivileged code has no access to Component.utils and might just be able catch the
  exception.</p>

<pre class="brush: js">try {
  String(window);
}
catch (e) {
  console.log("window is likely dead");
}</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/">What
      does “can’t access dead object” mean?</a></li>
  <li><a href="/en-US/docs/Extensions/Common_causes_of_memory_leaks_in_extensions">Common
      causes of memory leaks in extensions</a></li>
  <li><a
      href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils">Components.utils</a>
  </li>
  <li><a href="/en-US/docs/Mozilla/Zombie_compartments">Zombie Compartments</a></li>
</ul>
