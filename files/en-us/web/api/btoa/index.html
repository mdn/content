---
title: btoa()
slug: Web/API/btoa
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Web
  - btoa
  - data
  - strings
browser-compat: api.btoa
---
<p>{{APIRef("HTML DOM")}}</p>

<p>The <code><strong>btoa()</strong></code> method creates a
  {{glossary("Base64")}}-encoded ASCII string from a <a
    href="/en-US/docs/Web/API/DOMString/Binary">binary string</a> (i.e., a
  {{jsxref("String")}} object in which each character in the string is treated as a byte
  of binary data).</p>

<p>You can use this method to encode data which may otherwise cause communication
  problems, transmit it, then use the {{domxref("atob",
  "atob()")}} method to decode the data again. For example, you can encode control
  characters such as ASCII values 0 through 31.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>encodedData</var> = btoa(<var>stringToEncode</var>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code><var>stringToEncode</var></code></dt>
  <dd>The <a href="/en-US/docs/Web/API/DOMString/Binary">binary string</a> to encode.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An ASCII string containing the Base64 representation of
  <code><var>stringToEncode</var></code>.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>InvalidCharacterError</code></dt>
  <dd>The string contained a character that did not fit in a single byte. See "Unicode
    strings" below for more detail.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">const encodedData = btoa('Hello, world'); // encode a string
const decodedData = atob(encodedData); // decode the string
</pre>

<h2 id="Unicode_strings">Unicode strings</h2>

<p>The <code>btoa()</code> function takes a JavaScript string as a parameter. In
  JavaScript strings are represented using the UTF-16 character encoding: in this
  encoding, strings are represented as a sequence of 16-bit (2 byte) units. Every ASCII
  character fits into the first byte of one of these units, but many other characters
  don't.</p>

<p>Base64, by design, expects binary data as its input. In terms of JavaScript strings,
  this means strings in which each character occupies only one byte. So if you pass a
  string into <code>btoa()</code> containing characters that occupy more than one byte,
  you will get an error, because this is not considered binary data:</p>

<pre class="brush: js">const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupies &lt; 1 byte

const notOK = "✓"
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupies &gt; 1 byte

console.log(btoa(ok));    // YQ==
console.log(btoa(notOK)); // error</pre>

<p>If you need to encode Unicode text as ASCII using <code>btoa()</code>, one option is to
  convert the string such that each 16-bit unit occupies only one byte. For example:</p>

<pre class="brush: js">// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i &lt; codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  const charCodes = new Uint8Array(codeUnits.buffer);
  let result = '';
  for (let i = 0; i &lt; charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

// a string that contains characters occupying &gt; 1 byte
const myString = "☸☹☺☻☼☾☿";

const converted = toBinary(myString);
const encoded = btoa(converted);
console.log(encoded);                 // OCY5JjomOyY8Jj4mPyY=
</pre>

<p>If you do this, of course you'll have to reverse the conversion on the decoded string:
</p>

<pre class="brush: js">function fromBinary(binary) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i &lt; bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const charCodes = new Uint16Array(bytes.buffer);
  let result = '';
  for (let i = 0; i &lt; charCodes.length; i++) {
    result += String.fromCharCode(charCodes[i]);
  }
  return result;
}

const decoded = atob(encoded);
const original = fromBinary(decoded);
console.log(original);                // ☸☹☺☻☼☾☿
</pre>

<p>See also the example <code>utf8_to_b64</code> and <code>b64_to_utf8</code> functions in the <a href="https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it">Solution #1 – escaping the string before encoding it</a> section of the {{Glossary("Base64")}} glossary entry.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"><code>data</code> URIs</a>
  </li>
  <li>{{domxref("atob","atob()")}}</li>
  <li>{{Glossary("Base64")}}</li>
  <li><a href="https://github.com/MaxArt2501/base64-js/blob/master/base64.js">Polyfill</a></li>
</ul>
