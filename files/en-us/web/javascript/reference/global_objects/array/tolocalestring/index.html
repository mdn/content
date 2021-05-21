---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
tags:
- Array
- Internationalization
- JavaScript
- Method
- Prototype
browser-compat: javascript.builtins.Array.toLocaleString
---
<div>{{JSRef}}</div>

<p>The <strong><code>toLocaleString()</code></strong> method returns a string representing
  the elements of the array. The elements are converted to Strings using their
  <code>toLocaleString</code> methods and these Strings are separated by a locale-specific
  String (such as a comma “,”).</p>

<div>{{EmbedInteractiveExample("pages/js/array-tolocalestring.html","shorter")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>locales</code> {{optional_inline}}</dt>
  <dd>A string with a BCP 47 language tag, or an array of such strings. For the general
    form and interpretation of the <code>locales</code> argument, see the
    {{jsxref("Intl")}} page.</dd>
  <dt><code>options</code> {{optional_inline}}</dt>
  <dd>An object with configuration properties, for numbers see
    {{jsxref("Number.prototype.toLocaleString()")}}, and for dates see
    {{jsxref("Date.prototype.toLocaleString()")}}.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A string representing the elements of the array.</p>

<h2 id="Polyfill">Polyfill</h2>

<pre class="brush: js">// https://tc39.github.io/ecma402/#sup-array.prototype.tolocalestring
if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, 'toLocaleString', {
    value: function(locales, options) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var a = Object(this);

      // 2. Let len be ? ToLength(? Get(A, "length")).
      var len = a.length &gt;&gt;&gt; 0;

      // 3. Let separator be the String value for the
      //    list-separator String appropriate for the
      //    host environment's current locale (this is
      //    derived in an implementation-defined way).
      // NOTE: In this case, we will use a comma
      var separator = ',';

      // 4. If len is zero, return the empty String.
      if (len === 0) {
        return '';
      }

      // 5. Let firstElement be ? Get(A, "0").
      var firstElement = a[0];
      // 6. If firstElement is undefined or null, then
      //  a.Let R be the empty String.
      // 7. Else,
      //  a. Let R be ?
      //     ToString(?
      //       Invoke(
      //        firstElement,
      //        "toLocaleString",
      //        « locales, options »
      //       )
      //     )
      var r = firstElement == null ?
        '' : firstElement.toLocaleString(locales, options);

      // 8. Let k be 1.
      var k = 1;

      // 9. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let S be a String value produced by
        //   concatenating R and separator.
        var s = r + separator;

        // b. Let nextElement be ? Get(A, ToString(k)).
        var nextElement = a[k];

        // c. If nextElement is undefined or null, then
        //   i. Let R be the empty String.
        // d. Else,
        //   i. Let R be ?
        //     ToString(?
        //       Invoke(
        //        nextElement,
        //        "toLocaleString",
        //        « locales, options »
        //       )
        //     )
        r = nextElement == null ?
          '' : nextElement.toLocaleString(locales, options);

        // e. Let R be a String value produced by
        //   concatenating S and R.
        r = s + r;

        // f. Increase k by 1.
        k++;
      }

      // 10. Return R.
      return r;
    }
  });
}
</pre>

<p>If you need to support truly obsolete JavaScript engines that don't support
  <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code>,
  it's best not to polyfill <code>Array.prototype</code> methods at all, as you can't make
  them non-enumerable.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_locales_and_options">Using locales and options</h3>

<p>The elements of the array are converted to strings using their
  <code>toLocaleString</code> methods.</p>

<ul>
  <li><code>Object</code>: {{jsxref("Object.prototype.toLocaleString()")}}</li>
  <li><code>Number</code>: {{jsxref("Number.prototype.toLocaleString()")}}</li>
  <li><code>Date</code>: {{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>

<p>Always display the currency for the strings and numbers in the <code>prices</code>
  array:</p>

<pre class="brush: js">var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
</pre>

<p>For more examples, see also the {{jsxref("Intl")}}, {{jsxref("NumberFormat")}}, and
  {{jsxref("DateTimeFormat")}} pages.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("Array.prototype.toString()")}}</li>
  <li>{{jsxref("Intl")}}</li>
  <li>{{jsxref("Object.prototype.toLocaleString()")}}</li>
  <li>{{jsxref("Number.prototype.toLocaleString()")}}</li>
  <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>
