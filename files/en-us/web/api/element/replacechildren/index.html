---
title: Element.replaceChildren()
slug: Web/API/Element/replaceChildren
tags:
  - API
  - DOM
  - Method
  - Node
  - Element
  - Reference
  - replaceChildren
browser-compat: api.Element.replaceChildren
---
<div>{{APIRef("DOM")}}</div>

<p>The <strong><code>Element.replaceChildren()</code></strong> method replaces the
  existing children of a {{domxref("Node")}} with a specified new set of children. These
  can be {{domxref("DOMString")}} or {{domxref("Node")}} objects.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
replaceChildren(...nodesOrDOMStrings)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>nodesOrDOMStrings</var></code></dt>
  <dd>A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to replace the
    <code>Element</code>'s existing children with. If no replacement objects are
    specified, then the <code>Element</code> is emptied of all child nodes.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>{{domxref("HierarchyRequestError")}}: The <a
      href="https://dom.spec.whatwg.org/#concept-node-tree">constraints of the node
      tree</a> are violated.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Emptying_a_node">Emptying a node</h3>

<p><code>replaceChildren()</code> provides a very convenient mechanism for emptying a node
  of all its children. You call it on the parent node without any argument specified:</p>

<pre class="brush: js">myNode.replaceChildren();</pre>

<h3 id="Transferring_nodes_between_elements">Transferring nodes between elements</h3>

<p><code>replaceChildren()</code> enables you to easily transfer nodes between elements,
  without having to resort to verbose looping code. For example, say we have a simple
  application allowing you to choose what food you want for your party. This HTML might
  look something like this:</p>

<pre class="brush: html">&lt;h2&gt;Party food option list&lt;/h2&gt;

&lt;main&gt;
  &lt;div&gt;
    &lt;label for="no"&gt;No thanks!&lt;/label&gt;

    &lt;select id="no" multiple size="10"&gt;
      &lt;option&gt;Apples&lt;/option&gt;
      &lt;option&gt;Oranges&lt;/option&gt;
      &lt;option&gt;Grapes&lt;/option&gt;
      &lt;option&gt;Bananas&lt;/option&gt;
      &lt;option&gt;Kiwi fruits&lt;/option&gt;
      &lt;option&gt;Chocolate cookies&lt;/option&gt;
      &lt;option&gt;Peanut cookies&lt;/option&gt;
      &lt;option&gt;Chocolate bars&lt;/option&gt;
      &lt;option&gt;Ham Sandwiches&lt;/option&gt;
      &lt;option&gt;Cheese Sandwiches&lt;/option&gt;
      &lt;option&gt;Falafel sandwiches&lt;/option&gt;
      &lt;option&gt;Ice cream&lt;/option&gt;
      &lt;option&gt;Jelly&lt;/option&gt;
      &lt;option&gt;Carrot sticks and houmous&lt;/option&gt;
      &lt;option&gt;Margherita pizza&lt;/option&gt;
      &lt;option&gt;Pepperoni pizza&lt;/option&gt;
      &lt;option&gt;Vegan veggie pizza&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;

  &lt;div class="buttons"&gt;
    &lt;button id="to-yes"&gt;Transfer to "Yes" --&amp;gt;&lt;/button&gt;
    &lt;button id="to-no"&gt;&amp;lt;-- Transfer to "No"&lt;/button&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;label for="yes"&gt;Yes please!&lt;/label&gt;

    &lt;select id="yes" multiple size="10"&gt;

    &lt;/select&gt;
  &lt;/div&gt;
&lt;/main&gt;</pre>

<p>It would make sense to use some simple CSS to lay out the two select lists in a line
  alongside one another, with the control buttons in between them:</p>

<pre class="brush: css">main {
  display: flex;
}

div {
  margin-right: 20px;
}

label, button {
  display: block;
}

.buttons {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

select {
  width: 200px;
}</pre>

<p>What we want to do is transfer any selected options in the "no" list over to the "yes"
  list when the "yes" button is pressed, and transfer any selected options in the "yes"
  list over to the "no" list when the "no" button is pressed.</p>

<p>To do this, we give each of the buttons a click event handler, which collects together
  the selected options you want to transfer in one constant, and the existing options in
  the list you are transferring to in another constant. It then calls
  <code>replaceChildren()</code> on the list to transfer the options to, using the spread
  operator to pass in all the options contained in both constants.</p>

<pre class="brush: js">const noSelect = document.getElementById('no');
const yesSelect = document.getElementById('yes');
const noBtn = document.getElementById('to-no');
const yesBtn = document.getElementById('to-yes');

yesBtn.addEventListener('click', () =&gt; {
  const selectedTransferOptions = document.querySelectorAll('#no option:checked');
  const existingYesOptions = document.querySelectorAll('#yes option');
  yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener('click', () =&gt; {
  const selectedTransferOptions = document.querySelectorAll('#yes option:checked');
  const existingNoOptions = document.querySelectorAll('#no option');
  noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});</pre>

<p>The end result looks like this:</p>

<p>{{EmbedLiveSample('Transferring_nodes_between_elements', '100%', '350')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Element.prepend()")}}</li>
  <li>{{domxref("Element.append()")}}</li>
  <li>{{domxref("NodeList")}}</li>
</ul>
