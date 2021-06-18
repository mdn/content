---
title: JavaScript typed arrays
slug: Web/JavaScript/Typed_arrays
tags:
  - Guide
  - JavaScript
---
<div>{{JsSidebar("Advanced")}}</div>

<p><strong>JavaScript typed arrays</strong> are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.</p>

<p>{{jsxref("Array")}} objects grow and shrink dynamically and can have any JavaScript value. JavaScript engines perform optimizations so that these arrays are fast. However, as web applications become more and more powerful, adding features such as audio and video manipulation, access to raw data using WebSockets, and so forth, it has become clear that there are times when it would be helpful for JavaScript code to be able to quickly and easily manipulate raw binary data. This is where typed arrays come in. Each entry in a JavaScript typed array is a raw binary value in one of a number of supported formats, from 8-bit integers to 64-bit floating-point numbers.</p>

<p>However, typed arrays are <em>not</em> to be confused with normal arrays, as calling {{jsxref("Array.isArray()")}} on a typed array returns <code>false</code>. Moreover, not all methods available for normal arrays are supported by typed arrays (e.g. push and pop).</p>

<h2 id="Buffers_and_views_typed_array_architecture">Buffers and views: typed array architecture</h2>

<p>To achieve maximum flexibility and efficiency, JavaScript typed arrays split the implementation into <strong>buffers</strong> and <strong>views</strong>. A buffer (implemented by the {{jsxref("ArrayBuffer")}} object) is an object representing a chunk of data; it has no format to speak of and offers no mechanism for accessing its contents. In order to access the memory contained in a buffer, you need to use a view. A view provides a context — that is, a data type, starting offset, and the number of elements — that turns the data into a typed array.</p>

<p><img alt="Typed arrays in an ArrayBuffer" src="typed_arrays.png"></p>

<h3 id="ArrayBuffer">ArrayBuffer</h3>

<p>The {{jsxref("ArrayBuffer")}} is a data type that is used to represent a generic, fixed-length binary data buffer. You can't directly manipulate the contents of an <code>ArrayBuffer</code>; instead, you create a typed array view or a {{jsxref("DataView")}} which represents the buffer in a specific format, and use that to read and write the contents of the buffer.</p>

<h3 id="Typed_array_views">Typed array views</h3>

<p>Typed array views have self-descriptive names and provide views for all the usual numeric types like <code>Int8</code>, <code>Uint32</code>, <code>Float64</code> and so forth. There is one special typed array view, the <code>Uint8ClampedArray</code>. It clamps the values between 0 and 255. This is useful for <a href="/en-US/docs/Web/API/ImageData">Canvas data processing</a>, for example.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">Type</th>
   <th class="header" scope="col">Value Range</th>
   <th class="header" scope="col">Size in bytes</th>
   <th class="header" scope="col">Description</th>
   <th class="header" scope="col">Web IDL type</th>
   <th class="header" scope="col">Equivalent C type</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Int8Array")}}</td>
   <td><code>-128</code> to <code>127</code></td>
   <td>1</td>
   <td>8-bit two's complement signed integer</td>
   <td><code>byte</code></td>
   <td><code>int8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8Array")}}</td>
   <td><code>0</code> to <code>255</code></td>
   <td>1</td>
   <td>8-bit unsigned integer</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint8ClampedArray")}}</td>
   <td><code>0</code> to <code>255</code></td>
   <td>1</td>
   <td>8-bit unsigned integer (clamped)</td>
   <td><code>octet</code></td>
   <td><code>uint8_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int16Array")}}</td>
   <td><code>-32768</code> to <code>32767</code></td>
   <td>2</td>
   <td>16-bit two's complement signed integer</td>
   <td><code>short</code></td>
   <td><code>int16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint16Array")}}</td>
   <td><code>0</code> to <code>65535</code></td>
   <td>2</td>
   <td>16-bit unsigned integer</td>
   <td><code>unsigned short</code></td>
   <td><code>uint16_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Int32Array")}}</td>
   <td><code>-2147483648</code> to <code>2147483647</code></td>
   <td>4</td>
   <td>32-bit two's complement signed integer</td>
   <td><code>long</code></td>
   <td><code>int32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Uint32Array")}}</td>
   <td><code>0</code> to <code>4294967295</code></td>
   <td>4</td>
   <td>32-bit unsigned integer</td>
   <td><code>unsigned long</code></td>
   <td><code>uint32_t</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float32Array")}}</td>
   <td><code>-3.4E38</code> to <code>3.4E38</code><br/>
    and <code>1.2E-38</code> is the min positive number</td>
   <td>4</td>
   <td>32-bit IEEE floating point number (7 significant digits e.g., <code>1.123456</code>)</td>
   <td><code>unrestricted float</code></td>
   <td><code>float</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float64Array")}}</td>
   <td><code>-1.8E308</code> to <code>1.8E308</code><br/>
    and <code>5E-324</code> is the min positive number</td>
   <td>8</td>
   <td>64-bit IEEE floating point number (16 significant digits e.g., <code>1.123...15</code>)</td>
   <td><code>unrestricted double</code></td>
   <td><code>double</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigInt64Array")}}</td>
   <td><code>-2^63</code> to <code>2^63 - 1</code></td>
   <td>8</td>
   <td>64-bit two's complement signed integer</td>
   <td><code>bigint</code></td>
   <td><code>int64_t (signed long long)</code></td>
  </tr>
  <tr>
   <td>{{jsxref("BigUint64Array")}}</td>
   <td><code>0</code> to <code>2^64 - 1</code></td>
   <td>8</td>
   <td>64-bit unsigned integer</td>
   <td><code>bigint</code></td>
   <td><code>uint64_t (unsigned long long)</code></td>
  </tr>
 </tbody>
</table>

<h3 id="DataView">DataView</h3>

<p>The {{jsxref("DataView")}} is a low-level interface that provides a getter/setter API to read and write arbitrary data to the buffer. This is useful when dealing with different types of data, for example. Typed array views are in the native byte-order (see <a href="/en-US/docs/Glossary/Endianness">Endianness</a>) of your platform. With a <code>DataView</code> you are able to control the byte-order. It is big-endian by default and can be set to little-endian in the getter/setter methods.</p>

<h2 id="Web_APIs_using_typed_arrays">Web APIs using typed arrays</h2>

<p>These are some examples of APIs that make use of typed arrays; there are others, and more are being added all the time.</p>

<dl>
 <dt><a href="/en-US/docs/Web/API/FileReader#readasarraybuffer()"><code>FileReader.prototype.readAsArrayBuffer()</code></a></dt>
 <dd>The <code>FileReader.prototype.readAsArrayBuffer()</code> method starts reading the contents of the specified <a href="/en-US/docs/Web/API/Blob"><code>Blob</code></a> or <a href="/en-US/docs/Web/API/File"><code>File</code></a>.</dd>
 <dt><a href="/en-US/docs/Web/API/XMLHttpRequest#send()"><code>XMLHttpRequest.prototype.send()</code></a></dt>
 <dd><code>XMLHttpRequest</code> instances' <code>send()</code> method now supports typed arrays and {{jsxref("ArrayBuffer")}} objects as argument.</dd>
 <dt><code><a href="/en-US/docs/Web/API/ImageData">ImageData.data</a></code></dt>
 <dd>Is a {{jsxref("Uint8ClampedArray")}} representing a one-dimensional array containing the data in the RGBA order, with integer values between <code>0</code> and <code>255</code> inclusive.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_views_with_buffers">Using views with buffers</h3>

<p>First of all, we will need to create a buffer, here with a fixed length of 16-bytes:</p>

<pre class="brush:js">let buffer = new ArrayBuffer(16);
</pre>

<p>At this point, we have a chunk of memory whose bytes are all pre-initialized to 0. There's not a lot we can do with it, though. We can confirm that it is indeed 16 bytes long, and that's about it:</p>

<pre class="brush:js">if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
</pre>

<p>Before we can really work with this buffer, we need to create a view. Let's create a view that treats the data in the buffer as an array of 32-bit signed integers:</p>

<pre class="brush:js">let int32View = new Int32Array(buffer);
</pre>

<p>Now we can access the fields in the array just like a normal array:</p>

<pre class="brush:js">for (let i = 0; i &lt; int32View.length; i++) {
  int32View[i] = i * 2;
}
</pre>

<p>This fills out the 4 entries in the array (4 entries at 4 bytes each makes 16 total bytes) with the values <code>0</code>, <code>2</code>, <code>4</code>, and <code>6</code>.</p>

<h3 id="Multiple_views_on_the_same_data">Multiple views on the same data</h3>

<p>Things start to get really interesting when you consider that you can create multiple views onto the same data. For example, given the code above, we can continue like this:</p>

<pre class="brush:js">let int16View = new Int16Array(buffer);

for (let i = 0; i &lt; int16View.length; i++) {
  console.log('Entry ' + i + ': ' + int16View[i]);
}
</pre>

<p>Here we create a 16-bit integer view that shares the same buffer as the existing 32-bit view and we output all the values in the buffer as 16-bit integers. Now we get the output <code>0</code>, <code>0</code>, <code>2</code>, <code>0</code>, <code>4</code>, <code>0</code>, <code>6</code>, <code>0</code>.</p>

<p>You can go a step farther, though. Consider this:</p>

<pre class="brush:js">int16View[0] = 32;
console.log('Entry 0 in the 32-bit array is now ' + int32View[0]);
</pre>

<p>The output from this is <code>"Entry 0 in the 32-bit array is now 32"</code>.</p>

<p>In other words, the two arrays are indeed viewed on the same data buffer, treating it as different formats. You can do this with any <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects" title="JavaScript typed arrays/ArrayBufferView#Typed array subclasses">view types</a>.</p>

<h3 id="Working_with_complex_data_structures">Working with complex data structures</h3>

<p>By combining a single buffer with multiple views of different types, starting at different offsets into the buffer, you can interact with data objects containing multiple data types. This lets you, for example, interact with complex data structures from <a href="/en-US/docs/Web/API/WebGL_API">WebGL</a>, data files, or C structures you need to use while using <a href="/en-US/docs/Mozilla/js-ctypes" title="js-ctypes">js-ctypes</a>.</p>

<p>Consider this C structure:</p>

<pre class="brush:cpp">struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};</pre>

<p>You can access a buffer containing data in this format like this:</p>

<pre class="brush:js">let buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

let idView = new Uint32Array(buffer, 0, 1);
let usernameView = new Uint8Array(buffer, 4, 16);
let amountDueView = new Float32Array(buffer, 20, 1);</pre>

<p>Then you can access, for example, the amount due with <code>amountDueView[0]</code>.</p>

<div class="note"><p><strong>Note:</strong> The <a href="https://en.wikipedia.org/wiki/Data_structure_alignment">data structure alignment</a> in a C structure is platform-dependent. Take precautions and considerations for these padding differences.</p></div>

<h3 id="Conversion_to_normal_arrays">Conversion to normal arrays</h3>

<p>After processing a typed array, it is sometimes useful to convert it back to a normal array in order to benefit from the {{jsxref("Array")}} prototype. This can be done using {{jsxref("Array.from()")}}</p>

<pre class="brush:js">const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);</pre>

<p>as well as the {{jsxref("operators/spread_syntax", "spread operator", "", 1)}}</p>

<pre class="brush:js">const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = [...typedArray];</pre>

<p>or using the following code where <code>Array.from()</code> is unsupported.</p>

<pre class="brush:js">const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.prototype.slice.call(typedArray);</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Glossary/Base64#appendix_decode_a_base64_string_to_uint8array_or_arraybuffer">Getting <code>ArrayBuffer</code>s or typed arrays from Base64-encoded strings</a></li>
 <li><a href="https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays">Faster Canvas Pixel Manipulation with Typed Arrays</a></li>
 <li><a href="https://www.html5rocks.com/en/tutorials/webgl/typed_arrays">Typed Arrays: Binary Data in the Browser</a></li>
 <li><a href="/en-US/docs/Glossary/Endianness">Endianness</a></li>
</ul>
