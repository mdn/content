---
title: Node.getRootNode()
slug: Web/API/Node/getRootNode
tags:
- API
- DOM
- Method
- Node
- Reference
- getRootNode
browser-compat: api.Node.getRootNode
---
<div>{{APIRef("DOM")}}</div>

<p>The <strong><code>getRootNode()</code></strong> method of the {{domxref("Node")}}
  interface returns the context object's root, which optionally includes the shadow root
  if it is available.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>root</em> = <em>node</em>.getRootNode(<em>options</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>options</code> {{optional_inline}}</dt>
  <dd>An object that sets options for getting the root node. The available options are:
    <ul>
      <li><code>composed</code>: A {{jsxref('Boolean')}} that indicates whether the shadow
        root should be returned (<code>false</code>, the default), or a root node beyond
        shadow root (<code>true</code>).</li>
    </ul>
  </dd>
</dl>

<h3 id="Returns">Returns</h3>

<p>An object inheriting from {{domxref('Node')}}. This will differ in exact form depending
  on where you called <code>getRootNode()</code>; for example:</p>

<ul>
  <li>Calling it on an element inside a standard web page will return an
    {{domxref("HTMLDocument")}} object representing the entire page.</li>
  <li>Calling it on an element inside a shadow DOM will return the associated
    {{domxref("ShadowRoot")}}.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>The first simple example returns a reference to the HTML/document node:</p>

<pre class="brush: js">rootNode = node.getRootNode();</pre>

<p>This more complex example shows the difference between returning a normal root, and a
  root including the shadow root. (See the <a
    href="https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html">full
    source code</a>):</p>

<pre class="brush: html">&lt;!-- source: https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html --&gt;
&lt;div class="js-parent"&gt;
  &lt;div class="js-child"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="js-shadowHost"&gt;&lt;/div&gt;
&lt;script&gt;
  // works on Chrome 54+, Opera 41+

  var parent = document.querySelector('.js-parent'),
      child = document.querySelector('.js-child'),
      shadowHost = document.querySelector('.js-shadowHost');

  console.log(parent.getRootNode().nodeName); // #document
  console.log(child.getRootNode().nodeName); // #document

  // create a ShadowRoot
  var shadowRoot = shadowHost.attachShadow({mode:'open'});
  shadowRoot.innerHTML = '&lt;style&gt;div{background:#2bb8aa;}&lt;/style&gt;'
      + '&lt;div class="js-shadowChild"&gt;content&lt;/div&gt;';
  var shadowChild = shadowRoot.querySelector('.js-shadowChild');

  // The default value of composed is false
  console.log(shadowChild.getRootNode() === shadowRoot); // true
  console.log(shadowChild.getRootNode({composed:false}) === shadowRoot); // true
  console.log(shadowChild.getRootNode({composed:true}).nodeName); // #document
&lt;/script&gt;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
