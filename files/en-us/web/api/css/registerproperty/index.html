---
title: CSS.registerProperty()
slug: Web/API/CSS/RegisterProperty
tags:
- CSS
- Houdini
- Reference
browser-compat: api.CSS.registerProperty
---
<div>{{SeeCompatTable}}</div>

<p>The <code><strong>CSS.registerProperty()</strong></code> method registers
  {{cssxref('--*', 'custom properties')}}, allowing for property type checking, default
  values, and properties that do or do not inherit their value.</p>

<p>Registering a custom property allows you to tell the browser how the custom property
  should behave; what are allowed types, whether the custom property inherits its value,
  and what the default value of the custom property is.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">CSS.registerProperty(<em>PropertyDefinition</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<p>A <code>PropertyDefinition</code> dictionary object, which can contain the following
  members:</p>

<dl>
  <dt><code>name</code></dt>
  <dd>A <code><a href="/en-US/docs/Web/API/DOMString">DOMString</a></code> indicating the
    name of the property being defined.</dd>
  <dt><code>syntax</code> {{optional_inline}}</dt>
  <dd>A <code><a href="/en-US/docs/Web/API/DOMString">DOMString</a></code> representing
    the expected syntax of the defined property. Defaults to <code>"*"</code>.</dd>
  <dt><code>inherits</code></dt>
  <dd>A boolean value defining whether the defined property should be inherited
    (<code>true</code>), or not (<code>false</code>). Defaults to <code>false</code>.</dd>
  <dt><code>initialValue</code> {{optional_inline}}</dt>
  <dd>A <code><a href="/en-US/docs/Web/API/DOMString">DOMString</a></code> representing
    the initial value of the defined property.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>undefined</code>.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>InvalidModificationError</code></dt>
  <dd>The given <code>name</code> has already been registered.</dd>
  <dt><code>SyntaxError</code></dt>
  <dd>The given <code>name</code> isn't a valid custom property name (starts with two
    dashes, e.g. <code>--foo</code>).</dd>
  <dt><code>TypeError</code></dt>
  <dd>The required <code>name</code> and/or <code>inherits</code> dictionary members were
    not provided.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following will register a {{cssxref('--*', 'custom property')}},
  <code>--my-color</code>, using <code>registerProperty()</code>, as a color, give it a
  default value, and have it not inherit its value:</p>

<pre class="brush: js">window.CSS.registerProperty({
  name: '--my-color',
  syntax: '&lt;color&gt;',
  inherits: false,
  initialValue: '#c0ffee',
});
</pre>

<p>In this example, the custom property <code>--my-color</code> has been registered using
  the syntax <code>&lt;color&gt;</code> . We can now use that property to transition a
  gradient on hover or focus. Notice that with the registered property the transition
  works, but that it doesn't with the unregistered property!</p>

<pre class="brush: css">.registered {
  --my-color: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--my-color));
  transition: --my-color 1s ease-in-out;
}

.registered:hover,
.registered:focus {
  --my-color: #b4d455;
}

.unregistered {
  --unregistered: #c0ffee;
  background-image: linear-gradient(to right, #fff, var(--unregistered));
  transition: --unregistered 1s ease-in-out;
}

.unregistered:hover,
.unregistered:focus {
  --unregistered: #b4d455;
}
button {
  font-size: 3vw;
}</pre>

<p>We can add these styles to some buttons:</p>

<pre class="brush: html">&lt;button class="registered"&gt;Background Registered&lt;/button&gt;
&lt;button class="unregistered"&gt;Background Not Registered&lt;/button&gt;
</pre>

<p>{{EmbedLiveSample("Examples", 320, 320)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide">Using the CSS
      properties and values API</a></li>
  <li>{{DOMxRef("CSS")}}</li>
  <li>{{DOMxRef("CSS.supports()")}}</li>
  <li>{{DOMxRef("CSS.escape()")}}</li>
  <li>{{DOMxRef("CSS.factory_functions", 'CSS factory functions')}}</li>
</ul>
