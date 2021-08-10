---
title: ':invalid'
slug: Web/CSS/:invalid
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.invalid
---
<div>{{CSSRef}}</div>

<p>The <strong><code>:invalid</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> represents any {{HTMLElement("input")}} or other {{HTMLElement("form")}} element whose contents fail to <a href="/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation">validate</a>.</p>

<pre class="brush: css no-line-numbers">/* Selects any invalid &lt;input&gt; */
input:invalid {
  background-color: pink;
}</pre>

<p>This pseudo-class is useful for highlighting field errors for the user.</p>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="A_form_that_colors_elements_green_when_they_validate_and_red_when_they_dont.">A form that colors elements green when they validate and red when they don't.</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;form&gt;
  &lt;div class="field"&gt;
    &lt;label for="url_input"&gt;Enter a URL:&lt;/label&gt;
    &lt;input type="url" id="url_input"&gt;
  &lt;/div&gt;

  &lt;div class="field"&gt;
    &lt;label for="email_input"&gt;Enter an email address:&lt;/label&gt;
    &lt;input type="email" id="email_input" required&gt;
  &lt;/div&gt;
&lt;/form&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Examples', 600, 120)}}</p>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>The color red is commonly used to indicate invalid input. People who have certain types of color blindness will be unable to determine the input's state unless it is accompanied by an additional indicator that does not rely on color to convey meaning. Typically, descriptive text and/or an icon are used.</p>

<ul>
	<li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
	<li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html">Understanding Success Criterion 1.4.1 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Notes">Notes</h2>

<h3 id="Radio_buttons">Radio buttons</h3>

<p>If any one of the radio buttons in a group is <code>required</code>, the <code>:invalid</code> pseudo-class is applied to all of them if none of the buttons in the group is selected. (Grouped radio buttons share the same value for their <code>name</code> attribute.)</p>

<h3 id="Gecko_defaults">Gecko defaults</h3>

<p>By default, Gecko does not apply a style to the <code>:invalid</code> pseudo-class. However, it does apply a style (a red "glow" using the {{Cssxref("box-shadow")}} property) to the {{cssxref(":user-invalid")}} pseudo-class, which applies in a subset of cases for <code>:invalid</code>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
	<li>Other validation-related pseudo-classes: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}</li>
	<li>Related Mozilla pseudo-classes: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}</li>
	<li><a href="/en-US/docs/Learn/Forms/Form_validation">Form data validation</a></li>
	<li>Accessing the <a href="/en-US/docs/Web/API/ValidityState">validity state</a> from JavaScript</li>
</ul>
