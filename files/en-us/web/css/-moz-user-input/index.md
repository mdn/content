---
title: '-moz-user-input'
slug: Web/CSS/-moz-user-input
tags:
  - CSS
  - CSS Property
  - 'CSS:Mozilla Extensions'
  - Deprecated
  - Non-standard
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.-moz-user-input
---
<div>{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}</div>

<p>In Mozilla applications, <strong><code>-moz-user-input</code></strong> determines if an element will accept user input.</p>

<pre class="brush:css">/* Keyword values */
-moz-user-input: none;
-moz-user-input: enabled;
-moz-user-input: disabled;

/* Global values */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
</pre>

<p>For elements that normally take user input, such as a {{HTMLElement("textarea")}}, the initial value of <code>-moz-user-input</code> is <code>enabled</code>.</p>

<div class="note">
<p><strong>Note:</strong> <code>-moz-user-input</code> was one of the proposals leading to the proposed CSS 3 {{cssxref("user-input")}} property, which has not yet reached Candidate Recommendation (call for implementations). A similar property, <code>user-focus</code>, was proposed in <a href="https://www.w3.org/TR/2000/WD-css3-userint-20000216">early drafts of a predecessor of the CSS3 UI specification</a>, but was rejected by the working group.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt>none</dt>
 <dd>The element does not respond to user input, and it does not become {{CSSxRef(":active")}}.</dd>
 <dt>enabled</dt>
 <dd>The element accepts user input. For textboxes, this is the default behavior. <strong>Please note that this value is no longer supported in Firefox 60 onwards ({{bug(1405087)}}).</strong></dd>
 <dt>disabled</dt>
 <dd>The element does not accept user input. However, this is not the same as setting {{XULAttr("disabled")}} to true, in that the element is drawn normally. <strong>Please note that this value is no longer supported in Firefox 60 onwards ({{bug(1405087)}}).</strong></dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{CSSSyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Disabling_user_input_for_an_element">Disabling user input for an element</h3>

<pre class="brush:css">input.example {
  /* The user will be able to select the text, but not change it. */
  -moz-user-input: disabled;
}
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSSxRef("-moz-user-focus")}}</li>
 <li>{{CSSxRef("-moz-user-modify")}}</li>
 <li>{{CSSxRef("-moz-user-select")}}</li>
</ul>
