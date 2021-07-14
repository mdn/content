---
title: Property accessors
slug: Web/JavaScript/Reference/Operators/Property_Accessors
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.property_accessors
---
<div>{{jsSidebar("Operators")}}</div>

<p><span class="seoSummary"><strong>Property accessors</strong> provide access to an
    object's properties by using the dot notation or the bracket notation.</span></p>

<div>{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
object.property
object['property']
</pre>

<h2 id="Description">Description</h2>

<p>One can think of an object as an <em>associative array</em> (a.k.a. <em>map</em>,
  <em>dictionary</em>, <em>hash</em>, <em>lookup table</em>). The <em>keys</em> in this
  array are the names of the object's properties.</p>

<p>It's typical when speaking of an object's properties to make a distinction between
  properties and methods. However, the property/method distinction is little more than a
  convention. A method is a property that can be called (for example, if it has a
  reference to a {{jsxref("Function")}} instance as its value).</p>

<p>There are two ways to access properties: <em>dot notation</em> and <em>bracket
    notation</em>.</p>

<h3 id="Dot_notation">Dot notation</h3>

<p>In the <code><var>object.property</var></code> syntax, the <code>property</code> must
  be a valid JavaScript <a href="/en-US/docs/Glossary/Identifier">identifier</a>. (In the
  ECMAScript standard, the names of properties are technically "IdentifierNames", not
  "Identifiers", so reserved words can be used but are not recommended). For example,
  <code><var>object</var>.$1</code> is valid, while <code><var>object</var>.1</code> is
  not.</p>

<pre class="brush: js">const variable = <var>object</var>.<var>property_name;</var>

<var>object</var>.<var>property_name</var> = value;
</pre>

<pre class="brush: js">const object = {};

object.$1 = 'foo';
console.log(object.$1);  // 'foo'

object.1 = 'bar';        // SyntaxError
console.log(object.1);   // SyntaxError
</pre>

<p>Here, the method named <code>createElement</code> is retrieved from
  <code>document</code> and is called.</p>

<pre class="brush: js">document.createElement('pre')
</pre>

<p>If you use a method for a numeric literal, and the numeric literal has no exponent and
  no decimal point, you should leave <a
    href="/en-US/docs/Glossary/Whitespace">white-space(s)</a> before the dot preceding the
  method call, so that the dot is not interpreted as a decimal point.</p>

<pre class="brush: js">77 .toExponential()
// or
77
.toExponential()
// or
;(77).toExponential()
// or
77..toExponential()
// or
77.0.toExponential()
// because 77. === 77.0, no ambiguity</pre>

<h3 id="Bracket_notation">Bracket notation</h3>

<p>In the <code>object[property_name]</code> syntax,
  the <code><var>property_name</var></code> is just a string or <a
    href="/en-US/docs/Glossary/Symbol">Symbol</a>. So, it can be any string, including
  <code>'1foo'</code>, <code>'!bar!'</code>, or even <code>' '</code> (a space).</p>

<pre class="brush: js">const variable = <var>object</var>[<var>property_name</var>]
<var>object</var>[<var>property_name</var>] = value;</pre>

<p>This does the exact same thing as the previous example.</p>

<pre class="brush: js">document['createElement']('pre')
</pre>

<p>A space before bracket notation is allowed.</p>

<pre class="brush: js">document ['createElement']('pre')</pre>

<h3 id="Property_names">Property names</h3>

<p>Property names are string or <a href="/en-US/docs/Glossary/Symbol">Symbol</a>. Any
  other value, including a number, is coerced to a string. This outputs
  <code>'value'</code>, since <code>1</code> is coerced into <code>'1'</code>.</p>

<pre class="brush: js">let object = {}
object['1'] = 'value'
console.log(object[1])
</pre>

<p>This also outputs <code>'value'</code>, since both <code><var>foo</var></code> and
  <code><var>bar</var></code> are converted to the same string.</p>

<pre class="brush: js">let foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value'
console.log(object[bar])
</pre>

<p>In the <a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a> JavaScript
  engine, this string would be "<code>[object Object]</code>".</p>

<h3 id="Method_binding">Method binding</h3>

<p>A method is not bound to the object that it is a method of. Specifically,
  <code>this</code> is not fixed in a method. Put another way, <code>this</code> does not
  necessarily refer to the object containing a method. Instead, <code>this</code> is
  "passed" by the function call. See <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/this#method_binding">method
    binding</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Bracket_notation_vs._eval">Bracket notation vs. <code>eval</code></h3>

<p>JavaScript novices often make the mistake of using {{jsxref("Global_Objects/eval", "eval()")}} where
  the bracket notation can be used instead.</p>

<p>For example, the following syntax is often seen in many scripts.</p>

<pre class="brush: js">x = eval('document.forms.form_name.elements.' + strFormControl + '.value')
</pre>

<p><code>eval()</code> is slow and should be avoided whenever possible. Also,
  <code>strFormControl</code> would have to hold an identifier, which is not required for
  names and <code>id</code>s of form controls. It is better to use bracket notation
  instead:</p>

<pre class="brush: js">x = document.forms['form_name'].elements[strFormControl].value
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Object")}}</li>
  <li>{{jsxref("Object.defineProperty()")}}</li>
  <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining">Optional
      chaining</a></li>
</ul>
