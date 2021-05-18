---
title: Equality comparisons and sameness
slug: Web/JavaScript/Equality_comparisons_and_sameness
tags:
  - Comparison
  - Equality
  - Guide
  - Intermediate
  - JS
  - JavaScript
  - NaN
  - SameValue
  - SameValueZero
  - Sameness
---
<div>{{jsSidebar("Intermediate")}}</div>

<p>There are four equality algorithms in ES2015:</p>

<ul>
 <li>Abstract Equality Comparison (<code>==</code>)</li>
 <li>Strict Equality Comparison (<code>===</code>): used by <code>Array.prototype.indexOf</code>, <code>Array.prototype.lastIndexOf</code>, and <code>case</code>-matching</li>
 <li>SameValueZero: used by <code>%TypedArray%</code> and <code>ArrayBuffer</code> constructors, as well as <code>Map</code> and <code>Set</code> operations, and also <code>String.prototype.includes </code>and <code>Array.prototype.includes</code> since ES2016</li>
 <li>SameValue: used in all other places</li>
</ul>

<p>JavaScript provides three different value-comparison operations:</p>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators#identity">===</a> - Strict Equality Comparison ("strict equality", "identity", "triple equals")</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators">==</a> - Abstract Equality Comparison ("loose equality", "double equals")</li>
 <li>{{jsxref("Object.is")}} provides SameValue (new in ES2015).</li>
</ul>

<p>Which operation you choose depends on what sort of comparison you are looking to perform. Briefly:</p>

<ul>
 <li>double equals (<code>==</code>) will perform a type conversion when comparing two things, and will handle <code>NaN</code>, <code>-0</code>, and <code>+0</code> specially to conform to IEEE 754 (so <code>NaN != NaN</code>, and <code>-0 == +0</code>);</li>
 <li>triple equals (<code>===</code>) will do the same comparison as double equals (including the special handling for <code>NaN</code>, <code>-0</code>, and <code>+0</code>) but without type conversion; if the types differ, <code>false</code> is returned.</li>
 <li><code>Object.is</code> does no type conversion and no special handling for <code>NaN</code>, <code>-0</code>, and <code>+0</code> (giving it the same behavior as <code>===</code> except on those special numeric values).</li>
</ul>

<p>Note that the distinction between these all have to do with their handling of primitives; none of them compares whether the parameters are conceptually similar in structure. For any non-primitive objects <code>x</code> and <code>y</code> which have the same structure but are distinct objects themselves, all of the above forms will evaluate to <code>false</code>.</p>

<h2 id="Strict_equality_using">Strict equality using <code>===</code></h2>

<p>Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have the same value, they're considered equal. Finally, if both values are numbers, they're considered equal if they're both not <code>NaN</code> and are the same value, or if one is <code>+0</code> and one is <code>-0</code>.</p>

<pre class="brush: js">var num = 0;
var obj = new String('0');
var str = '0';

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
</pre>

<p>Strict equality is almost always the correct comparison operation to use. For all values except numbers, it uses the obvious semantics: a value is only equal to itself. For numbers it uses slightly different semantics to gloss over two different edge cases. The first is that floating point zero is either positively or negatively signed. This is useful in representing certain mathematical solutions, but as most situations don't care about the difference between <code>+0</code> and <code>-0</code>, strict equality treats them as the same value. The second is that floating point includes the concept of a not-a-number value, <code>NaN</code>, to represent the solution to certain ill-defined mathematical problems: negative infinity added to positive infinity, for example. Strict equality treats <code>NaN</code> as unequal to every other value -- including itself. (The only case in which <code>(x !== x)</code> is <code>true</code> is when <code>x</code> is <code>NaN</code>.)</p>

<h2 id="Loose_equality_using">Loose equality using ==</h2>

<p>The behavior for performing loose equality using <code>==</code> is as follows:</p>

<ul>
  <li>Loose equality compares two values for equality <em>after</em> converting both values to a common type. After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as <code>===</code> performs it.</li>

  <li>Loose equality is <em>symmetric</em>: <code>A == B</code> always has identical semantics to <code>B == A</code> for any values of <code>A</code> and <code>B</code> (except for the order of applied conversions).</li>

  <li><code>undefined</code> and <code>null</code> are loosely equal; that is, <code>undefined&nbsp;==&nbsp;null</code> is true, and <code>null&nbsp;==&nbsp;undefined</code> is true</li>
</ul>

<p>Traditionally, and according to ECMAScript, all primitives and objects are loosely unequal to <code>undefined</code> and <code>null</code>. But most browsers permit a very narrow class of objects (specifically, the <code>document.all</code> object for any page), in some contexts, to act as if they <em>emulate</em> the value <code>undefined</code>. Loose equality is one such context: <code>null == A</code> and <code>undefined == A</code> evaluate to true if, and only if, A is an object that <em>emulates</em> <code>undefined</code>. In all other cases an object is never loosely equal to <code>undefined</code> or <code>null</code>.</p>

<p>Loose equality comparisons among other combinations of operand types are performed as shown in the tables below. The following notations are used in the tables:</p>

<ul>
  <li><code>ToNumber(A)</code> attempts to convert its argument to a number before comparison. Its behavior is equivalent to <code>+A</code> (the unary + operator).</li>
  <li><code>ToPrimitive(A)</code> attempts to convert its object argument to a primitive value, by invoking varying sequences of <code>A.toString()</code> and <code>A.valueOf()</code> methods on <code>A</code>.</li>
  <li><code>ℝ(A)</code> attempts to convert its argument to an ECMAScript <a href="https://tc39.es/ecma262/#mathematical-value">mathematical value</a>.</li>
  <li><code>StringToBigInt(A)</code> attempts to convert its argument to a <code>BigInt</code> by applying the ECMAScript <a href="https://tc39.es/ecma262/#sec-stringtobigint"><code>StringToBigInt</code></a> algorithm.</li>
</ul>

<p><strong>number</strong> primitive <code>A</code> compared to operand <code>B</code>:</p>
<table class="standard-table">
  <thead>
    <tr>
      <th>number</th>
      <th>bigint</th>
      <th>string</th>
      <th>boolean</th>
      <th>Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>A&nbsp;===&nbsp;B</code></td>
      <td><code>ℝ(A)&nbsp;equals&nbsp;ℝ(B)</code></td>
      <td><code>A&nbsp;===&nbsp;ToNumber(B)</code></td>
      <td><code>A&nbsp;===&nbsp;ToNumber(B)</code></td>
      <td><code>A&nbsp;==&nbsp;ToPrimitive(B)</code></td>
    </tr>
  </tbody>
</table>

<p><strong>bigint</strong> primitive <code>A</code> compared to operand <code>B</code>:</p>
<table class="standard-table">
  <thead>
    <tr>
      <th>number</th>
      <th>bigint</th>
      <th>string</th>
      <th>boolean</th>
      <th>Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ℝ(A)&nbsp;equals&nbsp;ℝ(B)</code></td>
      <td><code>A&nbsp;===&nbsp;B</code></td>
      <td><code>A&nbsp;===&nbsp;StringToBigInt(B)</code></td>
      <td><code>A&nbsp;==&nbsp;ToNumber(B)</code></td>
      <td><code>A&nbsp;==&nbsp;ToPrimitive(B)</code></td>
    </tr>
  </tbody>
</table>

<p><strong>string</strong> primitive <code>A</code> compared to operand <code>B</code>:</p>
<table class="standard-table">
  <thead>
    <tr>
      <th>number</th>
      <th>bigint</th>
      <th>string</th>
      <th>boolean</th>
      <th>Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ToNumber(A)&nbsp;===&nbsp;B</code></td>
      <td><code>StringToBigInt(A)&nbsp;===&nbsp;B</code></td>
      <td><code>A&nbsp;===&nbsp;B</code></td>
      <td><code>ToNumber(A)&nbsp;===&nbsp;ToNumber(B)</code></td>
      <td><code>A&nbsp;==&nbsp;ToPrimitive(B)</code></td>
    </tr>
 </tbody>
</table>

<p><strong>boolean</strong> primitive <code>A</code> compared to operand <code>B</code>:</p>
<table class="standard-table">
  <thead>
    <tr>
      <th>number</th>
      <th>bigint</th>
      <th>string</th>
      <th>boolean</th>
      <th>Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ToNumber(A)&nbsp;===&nbsp;B</code></td>
      <td><code>ToNumber(A)&nbsp;==&nbsp;B</code></td>
      <td><code>ToNumber(A)&nbsp;===&nbsp;ToNumber(B)</code></td>
      <td><code>A&nbsp;===&nbsp;B</code></td>
      <td><code>ToNumber(A)&nbsp;==&nbsp;ToPrimitive(B)</code></td>
    </tr>
 </tbody>
</table>

<p><strong>Object</strong> <code>A</code> compared to operand <code>B</code>:</p>
<table class="standard-table">
  <thead>
    <tr>
      <th>number</th>
      <th>bigint</th>
      <th>string</th>
      <th>boolean</th>
      <th>Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ToPrimitive(A)&nbsp;==&nbsp;B</code></td>
      <td><code>ToPrimitive(A)&nbsp;==&nbsp;B</code></td>
      <td><code>ToPrimitive(A)&nbsp;==&nbsp;B</code></td>
      <td><code>ToPrimitive(A)&nbsp;==&nbsp;ToNumber(B)</code></td>
      <td><code>A&nbsp;===&nbsp;B</code></td>
    </tr>
 </tbody>
</table>

<p>In most cases, using loose equality is discouraged. The result of a comparison using strict equality is easier to predict, and may evaluate more quickly due to the lack of type coercion.</p>

<h3 id="example">Example</h3>

<p>The following example demonstrates loose equality comparisons involving the number primitive <code>0</code>, the bigint primitive <code>0n</code>, the string primitive <code>'0'</code>, and an object whose <code>toString()</code> value is <code>'0'</code>.</p>

<pre class="brush: js">const num = 0;
const big = 0n;
const str = '0';
const obj = new String('0');

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
</pre>

<h2 id="Same-value_equality">Same-value equality</h2>

<p>Same-value equality addresses a final use case: determining whether two values are <em>functionally identical</em> in all contexts. (This use case demonstrates an instance of the <a href="https://en.wikipedia.org/wiki/Liskov_substitution_principle">Liskov substitution principle</a>.) One instance occurs when an attempt is made to mutate an immutable property:</p>

<pre class="brush: js">// Add an immutable NEGATIVE_ZERO property to the Number constructor.
Object.defineProperty(Number, 'NEGATIVE_ZERO',
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v) {
  Object.defineProperty(Number, 'NEGATIVE_ZERO', { value: v });
}
</pre>

<p><code>Object.defineProperty</code> will throw an exception when attempting to change an immutable property, but it does nothing if no actual change is requested. If <code>v</code> is <code>-0</code>, no change has been requested, and no error will be thrown. Internally, when an immutable property is redefined, the newly-specified value is compared against the current value using same-value equality.</p>

<p>Same-value equality is provided by the {{jsxref("Object.is")}} method.</p>

<h2 id="Same-value-zero_equality">Same-value-zero equality</h2>

<p>Similar to same-value equality, but +0 and -0 are considered equal.</p>

<h2 id="Abstract_equality_strict_equality_and_same_value_in_the_specification">Abstract equality, strict equality, and same value in the specification</h2>

<p>In ES5, the comparison performed by <a href="/en-US/docs/Web/JavaScript/Reference/Operators"><code>==</code></a> is described in <a href="http://ecma-international.org/ecma-262/5.1/#sec-11.9.3">Section 11.9.3, The Abstract Equality Algorithm</a>. The <a href="/en-US/docs/Web/JavaScript/Reference/Operators"><code>===</code></a> comparison is <a href="http://ecma-international.org/ecma-262/5.1/#sec-11.9.6">11.9.6, The Strict Equality Algorithm</a>. (Go look at these. They're brief and readable. Hint: read the strict equality algorithm first.) ES5 also describes, in <a href="http://ecma-international.org/ecma-262/5.1/#sec-9.12">Section 9.12, The SameValue Algorithm</a> for use internally by the JS engine. It's largely the same as the Strict Equality Algorithm, except that 11.9.6.4 and 9.12.4 differ in handling {{jsxref("Number")}}s. ES2015 proposes to expose this algorithm through {{jsxref("Object.is")}}.</p>

<p>We can see that with double and triple equals, with the exception of doing a type check upfront in 11.9.6.1, the Strict Equality Algorithm is a subset of the Abstract Equality Algorithm, because 11.9.6.2–7 correspond to 11.9.3.1.a–f.</p>

<h2 id="A_model_for_understanding_equality_comparisons">A model for understanding equality comparisons?</h2>

<p>Prior to ES2015, you might have said of double equals and triple equals that one is an "enhanced" version of the other. For example, someone might say that double equals is an extended version of triple equals, because the former does everything that the latter does, but with type conversion on its operands. E.g., <code>6 == "6"</code>. (Alternatively, someone might say that double equals is the baseline, and triple equals is an enhanced version, because it requires the two operands to be the same type, so it adds an extra constraint. Which one is the better model for understanding depends on how you choose to view things.)</p>

<p>However, this way of thinking about the built-in sameness operators is not a model that can be stretched to allow a place for ES2015's {{jsxref("Object.is")}} on this "spectrum". {{jsxref("Object.is")}} isn't "looser" than double equals or "stricter" than triple equals, nor does it fit somewhere in between (i.e., being both stricter than double equals, but looser than triple equals). We can see from the sameness comparisons table below that this is due to the way that {{jsxref("Object.is")}} handles {{jsxref("NaN")}}. Notice that if <code>Object.is(NaN, NaN)</code> evaluated to <code>false</code>, we <em>could</em> say that it fits on the loose/strict spectrum as an even stricter form of triple equals, one that distinguishes between <code>-0</code> and <code>+0</code>. The {{jsxref("NaN")}} handling means this is untrue, however. Unfortunately, {{jsxref("Object.is")}} has to be thought of in terms of its specific characteristics, rather than its looseness or strictness with regard to the equality operators.</p>

<table class="standard-table">
 <caption>Sameness Comparisons</caption>
 <thead>
  <tr>
   <th scope="col">x</th>
   <th scope="col">y</th>
   <th scope="col"><code>==</code></th>
   <th scope="col"><code>===</code></th>
   <th scope="col"><code>Object.is</code></th>
   <th scope="col"><code>SameValueZero</code></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>undefined</code></td>
   <td><code>undefined</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>null</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>true</code></td>
   <td><code>true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>false</code></td>
   <td><code>false</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>'foo'</code></td>
   <td><code>'foo'</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>0</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>-0</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>+0</code></td>
   <td><code>0</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>-0</code></td>
   <td><code>0</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>0n</code></td>
   <td><code>-0n</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>false</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>false</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>0</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>'0'</code></td>
   <td><code>0</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>'17'</code></td>
   <td><code>17</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>[1, 2]</code></td>
   <td><code>'1,2'</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>new String('foo')</code></td>
   <td><code>'foo'</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>undefined</code></td>
   <td><code>✅ true</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>null</code></td>
   <td><code>false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>undefined</code></td>
   <td><code>false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>{ foo: 'bar' }</code></td>
   <td><code>{ foo: 'bar' }</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>new String('foo')</code></td>
   <td><code>new String('foo')</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>null</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>0</code></td>
   <td><code>NaN</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>'foo'</code></td>
   <td><code>NaN</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
  </tr>
  <tr>
   <td><code>NaN</code></td>
   <td><code>NaN</code></td>
   <td><code>❌ false</code></td>
   <td><code>❌ false</code></td>
   <td><code>✅ true</code></td>
   <td><code>✅ true</code></td>
  </tr>
 </tbody>
</table>

<h2 id="When_to_use_jsxrefObject.is_versus_triple_equals">When to use Object.is versus triple equals</h2>

<p>In general, the only time {{jsxref("Object.is")}}'s special behavior towards zeros is likely to be of interest is in the pursuit of certain meta-programming schemes, especially regarding property descriptors, when it is desirable for your work to mirror some of the characteristics of {{jsxref("Object.defineProperty")}}. If your use case does not require this, it is suggested to avoid {{jsxref("Object.is")}} and use <a href="/en-US/docs/Web/JavaScript/Reference/Operators"><code>===</code></a> instead. Even if your requirements involve having comparisons between two {{jsxref("NaN")}} values evaluate to <code>true</code>, generally it is easier to special-case the {{jsxref("NaN")}} checks (using the {{jsxref("isNaN")}} method available from previous versions of ECMAScript) than it is to work out how surrounding computations might affect the sign of any zeros you encounter in your comparison.</p>

<p>Here's a non-exhaustive list of built-in methods and operators that might cause a distinction between <code>-0</code> and <code>+0</code> to manifest itself in your code:</p>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Operators#-_.28unary_negation.29"><code>- (unary negation)</code></a></dt>
 <dd>
 <pre class="brush: js">let stoppingForce = obj.mass * -obj.velocity;</pre>

 <p>If <code>obj.velocity</code> is <code>0</code> (or computes to <code>0</code>), a <code>-0</code> is introduced at that place and propagates out into <code>stoppingForce</code>.</p>
 </dd>
</dl>

<dl>
 <dt>{{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}</dt>
 <dd>In some cases,it's possible for a <code>-0</code> to be introduced into an expression as a return value of these methods even when no <code>-0</code> exists as one of the parameters. For example, using {{jsxref("Math.pow")}} to raise {{jsxref("Infinity", "-Infinity")}} to the power of any negative, odd exponent evaluates to <code>-0</code>. Refer to the documentation for the individual methods.</dd>
 <dt>{{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}</dt>
 <dd>It's possible to get a <code>-0</code> return value out of these methods in some cases where a <code>-0</code> exists as one of the parameters. E.g., <code>Math.min(-0, +0)</code> evaluates to <code>-0</code>. Refer to the documentation for the individual methods.</dd>
 <dt><code><a href="/en-US/docs/Web/JavaScript/Reference/Operators">~</a></code>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators">&lt;&lt;</a></code>, <code><a href="/en-US/docs/Web/JavaScript/Reference/Operators">&gt;&gt;</a></code></dt>
 <dd>Each of these operators uses the ToInt32 algorithm internally. Since there is only one representation for 0 in the internal 32-bit integer type, <code>-0</code> will not survive a round trip after an inverse operation. E.g., both <code>Object.is(~~(-0), -0)</code> and <code>Object.is(-0 &lt;&lt; 2 &gt;&gt; 2, -0)</code> evaluate to <code>false</code>.</dd>
</dl>

<p>Relying on {{jsxref("Object.is")}} when the signedness of zeros is not taken into account can be hazardous. Of course, when the intent is to distinguish between <code>-0</code> and <code>+0</code>, it does exactly what's desired.</p>

<h2 id="Caveat_jsxrefObject.is_and_NaN">Caveat: Object.is and NaN</h2>

<p>The {{jsxref("Object.is")}} specification treats all instances of {{jsxref("NaN")}} as the same object. However, since <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a> are available, we can have distinct instances, which don't behave identically in all contexts. For example:</p>

<pre class="brush: js">var f2b = x =&gt; new Uint8Array(new Float64Array([x]).buffer);
var b2f = x =&gt; new Float64Array(x.buffer)[0];
var n = f2b(NaN);
n[0] = 1;
var nan2 = b2f(n);
nan2;
// &gt; NaN
Object.is(nan2, NaN);
// &gt; true
f2b(NaN);
// &gt; Uint8Array(8) [0, 0, 0, 0, 0, 0, 248,127)
f2b(nan2);
// &gt; Uint8Array(8) [1, 0, 0, 0, 0, 0, 248,127)</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://dorey.github.io/JavaScript-Equality-Table/">JS Comparison Table</a></li>
</ul>
