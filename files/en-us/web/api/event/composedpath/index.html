---
title: Event.composedPath()
slug: Web/API/Event/composedPath
tags:
- API
- Event
- Method
- Reference
- Web Components
- composedPath
- events
- shadow dom
browser-compat: api.Event.composedPath
---
<p>{{APIRef("Shadow DOM")}}</p>

<p>The <strong><code>composedPath()</code></strong> method of the {{domxref("Event")}}
  interface returns the event’s path which is an array of the objects on which listeners
  will be invoked. This does not include nodes in shadow trees if the shadow root was
  created with its {{domxref("ShadowRoot.mode")}} closed.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>composed</em> = <em>Event</em>.composedPath();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>An array of {{domxref("EventTarget")}} objects representing the objects on which an
  event listener will be invoked.</p>

<h2 id="Examples">Examples</h2>

<p>In our composed-composed-path example (see it live), we define two trivial custom
  elements, <code>&lt;open-shadow&gt;</code> and <code>&lt;closed-shadow&gt;</code>, both
  of which take the contents of their text attribute and insert them into the element's
  shadow DOM as the text content of a <code>&lt;p&gt;</code> element. The only difference
  between the two is that their shadow roots are attached with their modes set to
  <code>open</code> and <code>closed</code> respectively.</p>

<p>The first definition looks like this, for example:</p>

<pre class="brush: js">customElements.define('open-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      let pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      let shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(pElem);

  }
});</pre>

<p>We then insert one of each element into our page:</p>

<pre class="brush: html">&lt;open-shadow text="I have an open shadow root"&gt;&lt;/open-shadow&gt;
&lt;closed-shadow text="I have a closed shadow root"&gt;&lt;/closed-shadow&gt;</pre>

<p>Then include a click event listener on the <code>&lt;html&gt;</code> element:</p>

<pre class="brush: js">document.querySelector('html').addEventListener('click',function(e) {
  console.log(e.composed);
  console.log(e.composedPath());
});</pre>

<p>When you click on the <code>&lt;open-shadow&gt;</code> element and then the
  <code>&lt;closed-shadow&gt;</code> element, you'll notice two things. First, the
  <code>composed</code> property returns <code>true</code> because the <code>click</code>
  event is always able to propagate across shadow boundaries. Second, you'll notice a
  difference in the value of <code>composedPath</code> for the two elements. The
  <code>&lt;open-shadow&gt;</code> element's composed path is this:</p>

<pre
  class="brush: js">Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]</pre>

<p>Whereas the <code>&lt;closed-shadow&gt;</code> element's composed path is a follows:
</p>

<pre
  class="brush: js">Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]</pre>

<p>In the second case, the event listeners only propagate as far as the
  <code>&lt;closed-shadow&gt;</code> element itself, but not to the nodes inside the
  shadow boundary.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
