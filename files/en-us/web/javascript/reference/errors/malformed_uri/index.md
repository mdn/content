---
title: 'URIError: malformed URI sequence'
slug: Web/JavaScript/Reference/Errors/Malformed_URI
tags:
- Error
- Errors
- JavaScript
- URIError
---
<div>{{jsSidebar("Errors")}}</div>

<p>The JavaScript exception "malformed URI sequence" occurs when URI encoding or decoding
  wasn't successful.</p>

<h2 id="Message">Message</h2>

<pre class="brush: js">URIError: The URI to be encoded contains invalid character (Edge)
URIError: malformed URI sequence (Firefox)
URIError: URI malformed (Chrome)
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("URIError")}}</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>URI encoding or decoding wasn't successful. An argument given to either the
  {{jsxref("decodeURI")}}, {{jsxref("encodeURI")}}, {{jsxref("encodeURIComponent")}},  or
  {{jsxref("decodeURIComponent")}} function was not valid, so that the function was unable
  encode or decode properly.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Encoding">Encoding</h3>

<p>Encoding replaces each instance of certain characters by one, two, three, or four
  escape sequences representing the UTF-8 encoding of the character. An
  {{jsxref("URIError")}} will be thrown if there is an attempt to encode a surrogate which
  is not part of a high-low pair, for example:</p>

<pre class="brush: js example-bad">encodeURI('\uD800');
// "URIError: malformed URI sequence"

encodeURI('\uDFFF');
// "URIError: malformed URI sequence"
</pre>

<p>A high-low pair is ok. For example:</p>

<pre class="brush: js example-good">encodeURI('\uD800\uDFFF');
// "%F0%90%8F%BF"</pre>

<h3 id="Decoding">Decoding</h3>

<p>Decoding replaces each escape sequence in the encoded URI component with the character
  that it represents. If there isn't such a character, an error will be thrown:</p>

<pre class="brush: js example-bad">decodeURIComponent('%E0%A4%A');
// "URIError: malformed URI sequence"
</pre>

<p>With proper input, this should usually look like something like this:</p>

<pre class="brush: js example-good">decodeURIComponent('JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "JavaScript_шеллы"</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{jsxref("URIError")}}</li>
  <li>{{jsxref("decodeURI")}}</li>
  <li>{{jsxref("encodeURI")}}</li>
  <li>{{jsxref("encodeURIComponent")}}</li>
  <li>{{jsxref("decodeURIComponent")}}</li>
</ul>
