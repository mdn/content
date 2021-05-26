---
title: JavaScript data types and data structures
slug: Web/JavaScript/Data_structures
tags:
  - Beginner
  - Guide
  - JavaScript
  - Types
---
<div>{{jsSidebar("More")}}</div>

<p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>

<h2 id="Dynamic_typing">Dynamic typing</h2>

<p>JavaScript is a <em>loosely typed</em> and <em>dynamic</em> language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</p>

<pre class="brush: js">let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
</pre>

<h2 id="Data_and_Structure_types">Data and Structure types</h2>

<p>The latest ECMAScript standard defines nine types:</p>

<ul>
 <li>Six <strong>Data Types</strong> that are <a href="/en-US/docs/Glossary/Primitive">primitives</a>, checked by <a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a> operator:

  <ul>
   <li><a href="/en-US/docs/Glossary/undefined">undefined</a> : <code>typeof instance === "undefined"</code></li>
   <li><a href="/en-US/docs/Glossary/Boolean">Boolean</a> : <code>typeof instance === "boolean"</code></li>
   <li><a href="/en-US/docs/Glossary/Number">Number</a> : <code>typeof instance === "number"</code></li>
   <li><a href="/en-US/docs/Glossary/String">String</a> : <code>typeof instance === "string"</code></li>
   <li><a href="/en-US/docs/Glossary/BigInt">BigInt</a> : <code>typeof instance === "bigint"</code></li>
   <li><a href="/en-US/docs/Glossary/Symbol">Symbol</a> : <code>typeof instance === "symbol"</code></li>
  </ul>
 </li>
 <li><strong>Structural</strong> <strong>Types</strong>:
  <ul>
   <li><a href="/en-US/docs/Glossary/Object">Object</a> : <code>typeof instance === "object"</code>. Special non-data but <strong>Structural</strong> <strong>type</strong> for any <a href="/en-US/docs/Learn/JavaScript/Objects#the_constructor">constructed</a> object instance also used as data structures: new {{jsxref("Object")}}, new {{jsxref("Array")}}, new {{jsxref("Map")}}, new {{jsxref("Set")}}, new {{jsxref("WeakMap")}}, new {{jsxref("WeakSet")}}, new {{jsxref("Date")}} and almost everything made with <a href="/en-US/docs/Web/JavaScript/Reference/Operators/new">new keyword</a>;</li>
   <li><a href="/en-US/docs/Glossary/Function">Function</a> : a non-data structure, though it also answers for <code>typeof</code> operator: <code>typeof instance === "function"</code>. This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.</li>
  </ul>
 </li>
 <li><strong>Structural Root</strong> Primitive:
  <ul>
   <li><strong><a href="/en-US/docs/Glossary/Null">null</a></strong> : <code>typeof instance === "object"</code>. Special <a href="/en-US/docs/Glossary/Primitive">primitive</a> type having additional usage for its value: if object is not inherited, then <code>null</code> is shown;</li>
  </ul>
 </li>
</ul>

<p>Keep in mind the only valuable purpose of <code>typeof</code> operator usage is checking the Data Type. If we wish to check any Structural Type derived from Object it is pointless to use <code>typeof</code> for that, as we will always receive <code>"object"</code>. The proper way to check what sort of Object we are using is the {{jsxref("Operators/instanceof", "instanceof")}} keyword. But even in that case there might be misconceptions.</p>

<p>As we can see the meaning of every primitive type is obvious except of undefined and null which are almost the same. This happens as the concept of Time is strictly connected with the purpose of algorithms. We can purport something that does not yet exist or does not exist anymore: <strong>undefined</strong>. But when we wish to be able to represent something that exists being empty, we have to invent another keyword. And that is what <strong>null</strong> stands for: the beginning of structural meaning.</p>

<h2 id="Primitive_values">Primitive values</h2>

<p>All types except objects define immutable values (that is, values which can't be changed). For example (and unlike in C), Strings are immutable. We refer to values of these types as "<em>primitive values</em>".</p>

<h3 id="Boolean_type">Boolean type</h3>

<p>Boolean represents a logical entity and can have two values: <code>true</code> and <code>false</code>. See <a href="/en-US/docs/Glossary/Boolean">Boolean</a> and {{jsxref("Boolean")}} for more details.</p>

<h3 id="Null_type">Null type</h3>

<p>The Null type has exactly one value: <code>null</code>. See {{jsxref("null")}} and <a href="/en-US/docs/Glossary/Null">Null</a> for more details.</p>

<h3 id="Undefined_type">Undefined type</h3>

<p>A variable that has not been assigned a value has the value <code>undefined</code>. See {{jsxref("undefined")}} and <a href="/en-US/docs/Glossary/undefined">Undefined</a> for more details.</p>

<h3 id="Number_type">Number type</h3>

<p>ECMAScript has two built-in numeric types: <strong>Number</strong> and <strong>BigInt</strong> (see below).</p>

<p>The Number type is a <a href="https://en.wikipedia.org/wiki/Double_precision_floating-point_format">double-precision 64-bit binary format IEEE 754 value</a> (numbers between -(2^53 − 1) and 2^53 − 1). In addition to representing floating-point numbers, the number type has three symbolic values: <code>+Infinity</code>, <code>-Infinity</code>, and {{jsxref("NaN")}} ("<strong>N</strong>ot a <strong>N</strong>umber").</p>

<p>To check for the largest available value or smallest available value within {{jsxref("Infinity", "±Infinity")}}, you can use the constants {{jsxref("Number.MAX_VALUE")}} or {{jsxref("Number.MIN_VALUE")}}.</p>

<div class="notecard note">
<p><strong>Note:</strong> Starting with ECMAScript 2015, you are also able to check if a number is in the double-precision floating-point number range using {{jsxref("Number.isSafeInteger()")}} as well as {{jsxref("Number.MAX_SAFE_INTEGER")}} and {{jsxref("Number.MIN_SAFE_INTEGER")}}.</p>

<p>Beyond this range, integers in JavaScript are not safe anymore and will be a double-precision floating point approximation of the value.</p>
</div>

<p>The number type has only one integer with two representations: <code>0</code> is represented as both <code>-0</code> and <code>+0</code>. (<code>0</code> is an alias for <code>+0</code>.) </p>

<p>In the praxis, this has almost no impact. For example, <code>+0 === -0</code> is <code>true</code>. However, you are able to notice this when you divide by zero:</p>

<pre class="brush: js">&gt; 42 / +0
Infinity
&gt; 42 / -0
-Infinity
</pre>

<p>Although a number often represents only its value, JavaScript provides {{jsxref("Operators", "binary (bitwise) operators")}}.</p>

<div class="notecard note">
<p><strong>Note:</strong> Although bitwise operators <em>can</em> be used to represent several Boolean values within a single number using <a href="https://en.wikipedia.org/wiki/Mask_%28computing%29">bit masking</a>, this is usually considered a bad practice. JavaScript offers other means to represent a set of Booleans (like an array of Booleans, or an object with Boolean values assigned to named properties). Bit masking also tends to make the code more difficult to read, understand, and maintain.</p>
</div>

<p>It may be necessary to use such techniques in very constrained environments, like when trying to cope with the limitations of local storage, or in extreme cases (such as when each bit over the network counts). This technique should only be considered when it is the last measure that can be taken to optimize size.</p>

<h3 id="BigInt_type">BigInt type</h3>

<p>The {{jsxref("BigInt")}} type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With <code>BigInt</code>s, you can safely store and operate on large integers even beyond the safe integer limit for <code>Number</code>s.</p>

<p>A <code>BigInt</code> is created by appending <code>n</code> to the end of an integer or by calling the constructor.</p>

<p>You can obtain the safest value that can be incremented with <code>Number</code>s by using the constant {{jsxref("Number.MAX_SAFE_INTEGER")}}. With the introduction of <code>BigInt</code>s, you can operate with numbers beyond the {{jsxref("Number.MAX_SAFE_INTEGER")}}.</p>

<p>This example demonstrates, where incrementing the {{jsxref("Number.MAX_SAFE_INTEGER")}} returns the expected result:</p>

<pre class="brush: js">&gt; const x = 2n ** 53n;
9007199254740992n
&gt; const y = x + 1n;
9007199254740993n
</pre>

<p>You can use the operators <code>+</code>, <code>*</code>, <code>-</code>, <code>**</code>, and <code>%</code> with <code>BigInt</code>s—just like with <code>Number</code>s. A <code>BigInt</code> is not strictly equal to a <code>Number</code>, but it is loosely so.</p>

<p>A <code>BigInt</code> behaves like a <code>Number</code> in cases where it is converted to <code>Boolean</code>: <code>if</code>, <code>||</code>, <code>&amp;&amp;</code>, <code>Boolean</code>, <code>!</code>.</p>

<p><code>BigInt</code>s cannot be operated on interchangeably with <code>Number</code>s. Instead a {{jsxref("TypeError")}} will be thrown.</p>

<h3 id="String_type">String type</h3>

<p>JavaScript's {{jsxref("String")}} type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index <code>0</code>, the next at index <code>1</code>, and so on. The length of a String is the number of elements in it.</p>

<p>Unlike some programming languages (such as C), JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.</p>

<p>However, it is still possible to create another string based on an operation on the original string. For example:</p>

<ul>
 <li>A substring of the original by picking individual letters or using {{jsxref("String.substr()")}}.</li>
 <li>A concatenation of two strings using the concatenation operator (<code>+</code>) or {{jsxref("String.concat()")}}.</li>
</ul>

<h4 id="Beware_of_stringly-typing_your_code!">Beware of "stringly-typing" your code!</h4>

<p>It can be tempting to use strings to represent complex data. Doing this comes with short-term benefits:</p>

<ul>
 <li>It is easy to build complex strings with concatenation.</li>
 <li>Strings are easy to debug (what you see printed is always what is in the string).</li>
 <li>Strings are the common denominator of a lot of APIs (<a href="/en-US/docs/Web/API/HTMLInputElement">input fields</a>, <a href="/en-US/docs/Storage">local storage</a> values, <a href="/en-US/docs/Web/API/XMLHttpRequest" title="Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing."><code>XMLHttpRequest</code></a> responses when using <code>responseText</code>, etc.) and it can be tempting to only work with strings.</li>
</ul>

<p>With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. For instance, with a separator, one could emulate a list (while a JavaScript array would be more suitable). Unfortunately, when the separator is used in one of the "list" elements, then, the list is broken. An escape character can be chosen, etc. All of this requires conventions and creates an unnecessary maintenance burden.</p>

<p>Use strings for textual data. When representing complex data, <em>parse</em> strings, and use the appropriate abstraction.</p>

<h3 id="Symbol_type">Symbol type</h3>

<p>A Symbol is a <strong>unique</strong> and <strong>immutable</strong> primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".</p>

<p>For more details see <a href="/en-US/docs/Glossary/Symbol">Symbol</a> and the {{jsxref("Symbol")}} object wrapper in JavaScript.</p>

<h2 id="Objects">Objects</h2>

<p>In computer science, an object is a value in memory which is possibly referenced by an <a href="/en-US/docs/Glossary/Identifier">identifier</a>.</p>

<h3 id="Properties">Properties</h3>

<p>In JavaScript, objects can be seen as a collection of properties. With the <a href="/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals">object literal syntax</a>, a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using <em>key</em> values. A <em>key</em> value is either a String or a Symbol value.</p>

<p>There are two types of object properties which have certain attributes: The <em>data</em> property and the <em>accessor</em> property.</p>

<div class="notecard note">
<p><strong>Note:</strong> Each property has corresponding <em>attributes.</em> Attributes are used internally by the JavaScript engine, so you cannot directly access them. That's why attributes are listed in double square brackets, rather than single.</p>

<p>See {{jsxref("Object.defineProperty()")}} to learn more.</p>
</div>

<h4 id="Data_property">Data property</h4>

<p>Associates a key with a value, and has the following attributes:</p>

<table class="standard-table">
 <caption>Attributes of a data property</caption>
 <thead>
  <tr>
   <th scope="col">Attribute</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
   <th scope="col">Default value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>[[Value]]</td>
   <td>Any JavaScript type</td>
   <td>The value retrieved by a get access of the property.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Writable]]</td>
   <td>Boolean</td>
   <td>If <code>false</code>, the property's [[Value]] cannot be changed.</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Enumerable]]</td>
   <td>Boolean</td>
   <td>
    <p>If <code>true</code>, the property will be enumerated in <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> loops.<br>
     See also <a href="/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties">Enumerability and ownership of properties</a>.</p>
   </td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Configurable]]</td>
   <td>Boolean</td>
   <td>If <code>false</code>, the property cannot be deleted, cannot be changed to an accessor property, and attributes other than [[Value]] and [[Writable]] cannot be changed.</td>
   <td><code>false</code></td>
  </tr>
 </tbody>
</table>

<table class="standard-table">
 <caption>Obsolete attributes (as of ECMAScript 3, renamed in ECMAScript 5)</caption>
 <thead>
  <tr>
   <th scope="col">Attribute</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Read-only</td>
   <td>Boolean</td>
   <td>Reversed state of the ES5 [[Writable]] attribute.</td>
  </tr>
  <tr>
   <td>DontEnum</td>
   <td>Boolean</td>
   <td>Reversed state of the ES5 [[Enumerable]] attribute.</td>
  </tr>
  <tr>
   <td>DontDelete</td>
   <td>Boolean</td>
   <td>Reversed state of the ES5 [[Configurable]] attribute.</td>
  </tr>
 </tbody>
</table>

<h4 id="Accessor_property">Accessor property</h4>

<p>Associates a key with one of two accessor functions (<code>get</code> and <code>set</code>) to retrieve or store a value, and has the following attributes:</p>

<table class="standard-table">
 <caption>Attributes of an accessor property</caption>
 <thead>
  <tr>
   <th scope="col">Attribute</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
   <th scope="col">Default value</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>[[Get]]</td>
   <td>Function object or <code>undefined</code></td>
   <td>The function is called with an empty argument list and retrieves the property value whenever a get access to the value is performed.<br>
    See also <a href="/en-US/docs/Web/JavaScript/Reference/Functions/get"><code>get</code></a>.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Set]]</td>
   <td>Function object or <code>undefined</code></td>
   <td>The function is called with an argument that contains the assigned value and is executed whenever a specified property is attempted to be changed.<br>
    See also <a href="/en-US/docs/Web/JavaScript/Reference/Functions/set"><code>set</code></a>.</td>
   <td><code>undefined</code></td>
  </tr>
  <tr>
   <td>[[Enumerable]]</td>
   <td>Boolean</td>
   <td>If <code>true</code>, the property will be enumerated in <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> loops.</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td>[[Configurable]]</td>
   <td>Boolean</td>
   <td>If <code>false</code>, the property can't be deleted and can't be changed to a data property.</td>
   <td><code>false</code></td>
  </tr>
 </tbody>
</table>

<h3 id="Normal_objects_and_functions">"Normal" objects, and functions</h3>

<p>A JavaScript object is a mapping between <em>keys</em> and <em>values</em>. Keys are strings (or {{jsxref("Symbol")}}s), and <em>values</em> can be anything. This makes objects a natural fit for <a href="https://en.wikipedia.org/wiki/Hash_table">hashmaps</a>.</p>

<p>Functions are regular objects with the additional capability of being <em>callable</em>.</p>

<h3 id="Dates">Dates</h3>

<p>When representing dates, the best choice is to use the built-in <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code> utility</a> in JavaScript.</p>

<h3 id="Indexed_collections_Arrays_and_typed_Arrays">Indexed collections: Arrays and typed Arrays</h3>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Arrays</a> are regular objects for which there is a particular relationship between integer-keyed properties and the <code>length</code> property.</p>

<p>Additionally, arrays inherit from <code>Array.prototype</code>, which provides to them a handful of convenient methods to manipulate arrays. For example, <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf</a></code> (searching a value in the array) or <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">push</a></code> (adding an element to the array), and so on. This makes Arrays a perfect candidate to represent lists or sets.</p>

<p><a href="/en-US/docs/Web/JavaScript/Typed_arrays">Typed Arrays</a> are new to JavaScript with ECMAScript 2015, and present an array-like view of an underlying binary data buffer. The following table helps determine the equivalent C data types:</p>

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
   <td><code>1.2E-38</code> to <code>3.4E38</code></td>
   <td>4</td>
   <td>32-bit IEEE floating point number (7 significant digits e.g., <code>1.1234567</code>)</td>
   <td><code>unrestricted float</code></td>
   <td><code>float</code></td>
  </tr>
  <tr>
   <td>{{jsxref("Float64Array")}}</td>
   <td><code>5E-324</code> to <code>1.8E308</code></td>
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

<h3 id="Keyed_collections_Maps_Sets_WeakMaps_WeakSets">Keyed collections: Maps, Sets, WeakMaps, WeakSets</h3>

<p>These data structures, introduced in ECMAScript Edition 6, take object references as keys. {{jsxref("Set")}} and {{jsxref("WeakSet")}} represent a set of objects, while {{jsxref("Map")}} and {{jsxref("WeakMap")}} associate a value to an object.</p>

<p>The difference between <code>Map</code>s and <code>WeakMap</code>s is that in the former, object keys can be enumerated over. This allows garbage collection optimizations in the latter case.</p>

<p>One could implement <code>Map</code>s and <code>Set</code>s in pure ECMAScript 5. However, since objects cannot be compared (in the sense of <code>&lt;</code> "less than", for instance), look-up performance would necessarily be linear. Native implementations of them (including <code>WeakMap</code>s) can have look-up performance that is approximately logarithmic to constant time.</p>

<p>Usually, to bind data to a DOM node, one could set properties directly on the object, or use <code>data-*</code> attributes. This has the downside that the data is available to any script running in the same context. <code>Map</code>s and <code>WeakMap</code>s make it easy to <em>privately</em> bind data to an object.</p>

<h3 id="Structured_data_JSON">Structured data: JSON</h3>

<p>JSON (<strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages. JSON builds universal data structures.</p>

<p>See <a href="/en-US/docs/Glossary/JSON">JSON</a> and {{jsxref("JSON")}} for more details.</p>

<h3 id="More_objects_in_the_standard_library">More objects in the standard library</h3>

<p>JavaScript has a standard library of built-in objects.</p>

<p>Please have a look at the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects">reference</a> to find out about more objects.</p>

<h2 id="Determining_types_using_the_typeof_operator">Determining types using the <code>typeof</code> operator</h2>

<p>The <code>typeof</code> operator can help you to find the type of your variable.</p>

<p>Please read the <a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">reference page</a> for more details and edge cases.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a class="link-https" href="https://github.com/nzakas/computer-science-in-javascript/">Nicholas Zakas collection of common data structure and common algorithms in JavaScript.</a></li>
 <li><a href="https://github.com/monmohan/DataStructures_In_Javascript">Search Tre(i)es implemented in JavaScript</a></li>
 <li><a href="https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values">Data Types and Values in the ECMAScript specification</a></li>
</ul>
