---
title: ':read-only'
slug: Web/CSS/:read-only
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Read-only
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.read-only
---
<div>{{CSSRef}}</div>

<p>The <strong><code>:read-only</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> represents an element (such as <code>input</code> or <code>textarea</code>) that is not editable by the user.</p>

<pre class="brush: css no-line-numbers">input:read-only, textarea:read-only {
  background-color: #ccc;
}

p:read-only {
  background-color: #ccc;
}
</pre>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Confirming_form_information_in_read-onlyread-write_controls">Confirming form information in read-only/read-write controls</h3>

<p>One use of <code>readonly</code> form controls is to allow the user to check and verify information that they may have entered in an earlier form (for example, shipping details), while still being able to submit the information along with the rest of the form. We do just this in the example below.</p>

<p>The <code>:read-only</code> pseudo-class is used to remove all the styling that makes the inputs look like clickable fields, making them look more like read-only paragraphs.The <code>:read-write</code> pseudo-class on the other hand is used to provide some nicer styling to the editable <code>&lt;textarea&gt;</code>.</p>

<pre class="brush: css">input:-moz-read-only, textarea:-moz-read-only,
input:read-only, textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:-moz-read-write,
textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}</pre>

<p>You can find the full source code at <a class="external external-icon" href="https://github.com/mdn/learning-area/blob/master/html/forms/pseudo-classes/readonly-confirmation.html" rel="noopener">readonly-confirmation.html</a>; this renders like so:</p>

<p>{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}</p>

<h3 id="Styling_read-only_non-form_controls">Styling read-only non-form controls</h3>

<p>This selector doesn't just select {{htmlElement("input")}}/{{htmlElement("textarea")}} elements — it will select <em>any</em> element that cannot be edited by the user.</p>

<pre class="brush: html">&lt;p contenteditable&gt;This paragraph is editable; it is read-write.&lt;/p&gt;

&lt;p&gt;This paragraph is not editable; it is read-only.&lt;/p&gt;</pre>

<pre class="brush: css">p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}</pre>

<p>{{EmbedLiveSample('Styling_read-only_non-form_controls', '100%', 400)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref(":read-write")}}</li>
 <li>HTML {{htmlattrxref("contenteditable")}} attribute</li>
</ul>
