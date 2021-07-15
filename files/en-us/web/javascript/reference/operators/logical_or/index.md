---
title: Logical OR (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
tags:
  - JavaScript
  - Language feature
  - Logical Operator
  - Operator
  - Reference
browser-compat: javascript.operators.logical_or
---
<div>{{jsSidebar("Operators")}}</div>

<p>The logical OR (<code>||</code>) operator (logical disjunction) for a set of operands
  is true if and only if one or more of its operands is true. It is typically used with
  {{jsxref("Boolean")}} (logical) values. When it is, it returns a Boolean value. However,
  the <code>||</code> operator actually returns the value of one of the specified
  operands, so if this operator is used with non-Boolean values, it will return a
  non-Boolean value.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}</div>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">expr1 || expr2</pre>

<h2 id="Description">Description</h2>

<p>If <code>expr1</code> can be converted to <code>true</code>, returns
  <code>expr1</code>; else, returns <code>expr2</code>.
</p>

<p>If a value can be converted to <code>true</code>, the value is so-called
  {{Glossary("truthy")}}. If a value can be converted to <code>false</code>, the value is
  so-called {{Glossary("falsy")}}.</p>

<p>Examples of expressions that can be converted to false are:</p>

<ul>
  <li><code>null</code>;</li>
  <li><code>NaN</code>;</li>
  <li><code>0</code>;</li>
  <li>empty string (<code>""</code> or <code>''</code> or <code>``</code>);</li>
  <li><code>undefined</code>.</li>
</ul>

<p>Even though the <code>||</code> operator can be used with operands that are not Boolean
  values, it can still be considered a boolean operator since its return value can always
  be converted to a <a
    href="/en-US/docs/Web/JavaScript/Data_structures#boolean_type">boolean primitive</a>.
  To explicitly convert its return value (or any expression in general) to the
  corresponding boolean value, use a double {{JSxRef("Operators/Logical_NOT", "NOT
  operator")}} or the {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}
  constructor.</p>

<h3 id="Short-circuit_evaluation">Short-circuit evaluation</h3>

<p>The logical OR expression is evaluated left to right, it is tested for possible
  "short-circuit" evaluation using the following rule:</p>

<p><code>(some truthy expression) || <em>expr</em></code> is short-circuit evaluated to
  the truthy expression.</p>

<p>Short circuit means that the <code><em>expr</em></code> part above is <strong>not
    evaluated</strong>, hence any side effects of doing so do not take effect (e.g., if
  <code><em>expr</em></code> is a function call, the calling never takes place). This
  happens because the value of the operator is already determined after the evaluation of
  the first operand. See example:</p>

<pre class="brush: js">function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( B() || A() );
// logs "called B" due to the function call,
// then logs true (which is the resulting value of the operator)
</pre>

<h3 id="Operator_precedence">Operator precedence</h3>

<p>The following expressions might seem equivalent, but they are not, because the
  <code>&amp;&amp;</code> operator is executed before the <code>||</code> operator (see <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">operator
    precedence</a>).</p>

<pre
  class="brush: js">true || false &amp;&amp; false      // returns true, because &amp;&amp; is executed first
(true || false) &amp;&amp; false    // returns false, because operator precedence cannot apply</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Using_OR">Using OR</h3>

<p>The following code shows examples of the <code>||</code> (logical OR) operator.</p>

<pre class="brush: js">o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
o6 = false || 'Cat'      // f || t returns "Cat"
o7 = 'Cat' || false      // t || f returns "Cat"
o8 = ''    || false      // f || f returns false
o9 = false || ''         // f || f returns ""
o10 = false || varObject // f || object returns varObject
</pre>

<div class="notecard note">
  <p><strong>Note:</strong> If you use this operator to provide a default value to some
    variable, be aware that any <em>falsy</em> value will not be used. If you only need to
    filter out {{jsxref("null")}} or {{jsxref("undefined")}}, consider using <a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">the
      nullish coalescing operator</a>.</p>
</div>

<h3 id="Conversion_rules_for_booleans">Conversion rules for booleans</h3>

<h4 id="Converting_AND_to_OR">Converting AND to OR</h4>

<p>The following operation involving <strong>booleans</strong>:</p>

<pre class="brush: js">bCondition1 &amp;&amp; bCondition2</pre>

<p>is always equal to:</p>

<pre class="brush: js">!(!bCondition1 || !bCondition2)</pre>

<h4 id="Converting_OR_to_AND">Converting OR to AND</h4>

<p>The following operation involving <strong>booleans</strong>:</p>

<pre class="brush: js">bCondition1 || bCondition2</pre>

<p>is always equal to:</p>

<pre class="brush: js">!(!bCondition1 &amp;&amp; !bCondition2)</pre>

<h3 id="Removing_nested_parentheses">Removing nested parentheses</h3>

<p>As logical expressions are evaluated left to right, it is always possible to remove
  parentheses from a complex expression following some rules.</p>

<p>The following composite operation involving <strong>booleans</strong>:</p>

<pre
  class="brush: js">bCondition1 &amp;&amp; (bCondition2 || bCondition3)</pre>

<p>is always equal to:</p>

<pre
  class="brush: js">!(!bCondition1 || !bCondition2 &amp;&amp; !bCondition3)</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">The
      nullish coalescing operator (<code>??</code>)</a></li>
  <li>{{jsxref("Boolean")}}</li>
  <li>{{Glossary("Truthy")}}</li>
  <li>{{Glossary("Falsy")}}</li>
</ul>
