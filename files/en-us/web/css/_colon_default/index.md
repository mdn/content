---
title: ':default'
slug: 'Web/CSS/:default'
tags:
  - ':default'
  - CSS
  - Forms
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
  - default
browser-compat: css.selectors.default
---
<div>{{CSSRef}}</div>

<p>The <strong><code>:default</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> selects form elements that are the default in a group of related elements.</p>

<p>What this selector matches is defined in <a href="https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default">HTML Standard §4.16.3 Pseudo-classes</a> — it may match the {{htmlelement("button")}}, <code><a href="/en-US/docs/Web/HTML/Element/input/checkbox">&lt;input type="checkbox"&gt;</a></code>, <code><a href="/en-US/docs/Web/HTML/Element/input/radio">&lt;input type="radio"&gt;</a></code>, and {{htmlelement("option")}} elements:</p>

<ul>
 <li>A default option element is the first one with the <code>selected</code> attribute, or the first enabled option in DOM order. <code>multiple</code> {{htmlelement("select")}}s can have more than one <code>selected</code> option, so all will match <code>:default</code>.</li>
 <li><code>&lt;input type="checkbox"&gt;</code> and <code>&lt;input type="radio"&gt;</code> match if they have the <code>checked</code> attribute.</li>
 <li>{{htmlelement("button")}} matches if it is a {{htmlelement("form")}}’s <a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission">default submission button</a>: the first <code>&lt;button&gt;</code> in DOM order that belongs to the form. This also applies to {{htmlelement("input")}} types that submit forms, like <code>image</code> or <code>submit</code>.</li>
</ul>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;fieldset&gt;
  &lt;legend&gt;Favorite season&lt;/legend&gt;

  &lt;input type="radio" name="season" id="spring"&gt;
  &lt;label for="spring"&gt;Spring&lt;/label&gt;

  &lt;input type="radio" name="season" id="summer" checked&gt;
  &lt;label for="summer"&gt;Summer&lt;/label&gt;

  &lt;input type="radio" name="season" id="fall"&gt;
  &lt;label for="fall"&gt;Fall&lt;/label&gt;

  &lt;input type="radio" name="season" id="winter"&gt;
  &lt;label for="winter"&gt;Winter&lt;/label&gt;
&lt;/fieldset&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Forms">Web forms — Working with user data</a></li>
 <li><a href="/en-US/docs/Learn/Forms/Styling_web_forms">Styling web forms</a></li>
 <li>Related HTML elements: {{htmlelement("button")}}, <code><a href="/en-US/docs/Web/HTML/Element/input/checkbox">&lt;input type="checkbox"&gt;</a></code>, <code><a href="/en-US/docs/Web/HTML/Element/input/radio">&lt;input type="radio"&gt;</a></code>, and {{htmlelement("option")}}</li>
</ul>
</div>
