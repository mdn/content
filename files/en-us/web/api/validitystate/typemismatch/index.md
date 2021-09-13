---
title: ValidityState.typeMismatch
slug: Web/API/ValidityState/typeMismatch
tags:
  - API
  - Constraint Validation API
  - DOM
  - Property
  - Reference
browser-compat: api.ValidityState.typeMismatch
---
<p>{{draft}}The read-only <strong><code>typeMismatch</code></strong> property of a <strong><code><a href="/en-US/docs/Web/API/ValidityState">ValidityState</a></code></strong> object indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, does not conform to the constraints set by the element's <code><a href="/en-US/docs/Web/HTML/Element/input#input_types">type</a></code> attribute.</p>

<p>If the <code>type</code> attribute expects specific strings, such as the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/url", "url")}} types and the value don't doesn't conform to the constraints set by the type, the <code>typeMismatch</code> property will be true.</p>

<p>The {{HTMLElement("input/email", "email")}} input type expects one or more valid email addresses, depending on whether the <code><a href="/en-US/docs/Web/HTML/Attributes/multiple">multiple</a></code> attribute is present. A valid email address includes an email prefix and a domain, with or without a top level domain. If the value of the email input is not an empty string, a single valid e-mail address, or one or more comma separated email address if the <code><a href="/en-US/docs/Web/HTML/Attributes/multiple">multiple</a></code> attribute is present, there is a <code>typeMismatch</code>.</p>

<p>The {{HTMLElement("input/url", "url")}} input type expects one or more valid email URLs, depending on whether the <code><a href="/en-US/docs/Web/HTML/Attributes/multiple">multiple</a></code> attribute is present. A valid URL includes a protocol, optionally with an IP address, or  an optional subdomain, domain, and top level domain combination. If the value of the URL input is not an empty string, a single valid URL, or one or more comma separated URLS if the <code><a href="/en-US/docs/Web/HTML/Attributes/multiple">multiple</a></code> attribute is present, there is a <code>typeMismatch</code>.</p>

<table class="standard-table">
 <caption> <code>type</code> attribute conformance</caption>
 <thead>
  <tr>
   <th>Input type</th>
   <th>Value</th>
   <th>Expected value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{HTMLElement("input/email", "email")}}</td>
   <td><code>x@y</code> or <code>x@y.z</code></td>
   <td>email address, with or without <a href="/en-US/docs/Glossary/TLD">TLD</a></td>
  </tr>
  <tr>
   <td>{{HTMLElement("input/url", "url")}}</td>
   <td><code>x:</code> or <code>x://y.z</code></td>
   <td>protocol or full URL with protocol</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Given the following:</p>

<pre class="brush: html">&lt;p&gt;
 &lt;label&gt;
    Enter an email address:
    &lt;input type="email" value="example.com"/&gt;
 &lt;/label&gt;
&lt;/p&gt;
&lt;p&gt;
 &lt;label&gt;
     Enter a URL:
     &lt;input type="url" value="example.com"/&gt;
  &lt;/label&gt;
&lt;/p&gt;</pre>

<pre class="brush: css">input:invalid {
  border: red solid 3px;
}</pre>

<p>{{EmbedLiveSample("Examples", 300, 40)}}</p>

<p>The above each produce a <code>typeMismatch</code> because the email address is just a domain and the URL has no protocol</p>

<p>The <code>typeMismatch</code> occurs when there is a disconnect between the <code><a href="/en-US/docs/Web/HTML/Attributes/value">value</a></code> expected via the <code><a href="/en-US/docs/Web/HTML/Element/input#%3cinput%3e_types">type</a></code> attribute and the data that is actually present. The <code>typeMismatch</code> is only one of the many possible errors and is only relevant for the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/url", "url")}} types. When the value provided doesn't match the expected value based on the type for other input types, you get different errors. For example, if the {{HTMLElement("input/number", "number")}} input value is not a floating point number, the <code>badInput</code> is <code>true</code>. If the email is <code><a href="/en-US/docs/Web/HTML/Attributes/required">required</a></code> but is empty, the {{domxref('ValidityState.valueMissing','valueMissing')}} will be <code>true</code>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation">Constraint validation</a></li>
 <li><a href="/en-US/docs/Learn/Forms/Form_validation">Forms: Data form validation</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">Regular Expressions</a></li>
</ul>
