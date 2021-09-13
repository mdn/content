---
title: Element.classList
slug: Web/API/Element/classList
tags:
- API
- DOM
- Element
- Property
- Read-only
- Reference
browser-compat: api.Element.classList
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Element.classList</strong></code> is a read-only property that
    returns a live {{domxref("DOMTokenList")}} collection of the <code>class</code>
    attributes of the element. This can then be used to manipulate the class list.</p>

<p>Using <code>classList</code> is a convenient alternative to accessing an element's list
    of classes as a space-delimited string via {{domxref("element.className")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <var>elementClasses</var> = <var>elementNodeReference</var>.classList;
</pre>

<h3 id="Returns">Returns</h3>

<p>A {{domxref("DOMTokenList")}} representing the contents of the element's
    <code>class</code> attribute. If the <code>class</code> attribute is not set or empty,
    it returns an empty <code>DOMTokenList</code>, i.e. a <code>DOMTokenList</code> with
    the <code>length</code> property equal to <code>0</code>.</p>

<p>Although the <code>classList</code> property itself is read-only, you can modify its associated <code>DOMTokenList</code> using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const div = document.createElement('div');
div.className = 'foo';

// our starting state: &lt;div class="foo"&gt;&lt;/div&gt;
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// &lt;div class="anotherclass"&gt;&lt;/div&gt;
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i &lt; 10 );

console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");</pre>

<div class="note">
    <p><strong>Note:</strong> Versions of Firefox before 26 do not implement the use of several arguments in the
        add/remove/toggle methods. See <a
            href="https://bugzilla.mozilla.org/show_bug.cgi?id=814014">https://bugzilla.mozilla.org/show_bug.cgi?id=814014</a>
    </p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>{{domxref("element.className")}}</li>
    <li>{{domxref("DOMTokenList")}}</li>
    <li><a href="https://github.com/eligrey/classList.js"><code>classList.js</code></a> (a cross-browser JavaScript polyfill that fully implements <code>element.classList</code>)</li>
</ul>
