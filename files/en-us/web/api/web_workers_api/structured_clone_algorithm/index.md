---
title: The structured clone algorithm
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
tags:
  - Advanced
  - DOM
  - HTML5
  - JavaScript
  - Reference
---
<p>The <strong>structured clone algorithm</strong> copies complex JavaScript objects. It is used internally when invoking {{domxref("structuredClone()")}}, to transfer data between <a href="/en-US/docs/Web/API/Worker">Workers</a> via {{domxref("Worker.postMessage()", "postMessage()")}}, storing objects with <a href="/en-US/docs/Glossary/IndexedDB">IndexedDB</a>, or copying objects for <a href="#see_also">other APIs</a>.</p>

<p>It clones by recursing through the input object while maintaining a map of previously visited references, to avoid infinitely traversing cycles.</p>

<h2 id="Things_that_dont_work_with_structured_clone">Things that don't work with structured clone</h2>

<ul>
 <li>{{jsxref("Function")}} objects cannot be duplicated by the structured clone algorithm; attempting to throws a <code>DATA_CLONE_ERR</code> exception.</li>
 <li>Cloning DOM nodes likewise throws a <code>DATA_CLONE_ERR</code> exception.</li>
 <li>Certain object properties are not preserved:
  <ul>
   <li>The <code>lastIndex</code> property of {{jsxref("RegExp")}} objects is not preserved.</li>
   <li>Property descriptors, setters, getters, and similar metadata-like features are not duplicated. For example, if an object is marked readonly with a <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor">property descriptor</a>, it will be read/write in the duplicate, since that's the default.</li>
   <li>The prototype chain is not walked or duplicated.</li>
  </ul>
 </li>
</ul>

<div class="notecard note">
<p><strong>Note:</strong> Native {{jsxref("Error")}} types can be cloned in Chrome, and Firefox is <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1556604">working on it</a>.</p>
</div>

<h2 id="Supported_types">Supported types</h2>

<table class="no-markdown">
 <thead>
  <tr>
   <th scope="col">Object type</th>
   <th scope="col">Notes</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/en-US/docs/Web/JavaScript/Data_structures#primitive_values">All primitive types</a></td>
   <td>However, not symbols.</td>
  </tr>
  <tr>
   <td>{{jsxref("Boolean")}} objects</td>
   <td></td>
  </tr>
  <tr>
   <td>{{jsxref("String")}} objects</td>
   <td></td>
  </tr>
  <tr>
   <td>{{jsxref("Date")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{jsxref("RegExp")}}</td>
   <td><code>lastIndex</code> is not preserved.</td>
  </tr>
  <tr>
   <td>{{domxref("Blob")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{domxref("File")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{domxref("FileList")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{jsxref("ArrayBuffer")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{domxref("ArrayBufferView")}}</td>
   <td>Including other <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a>.</td>
  </tr>
  <tr>
   <td>{{domxref("ImageBitmap")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{domxref("ImageData")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{jsxref("Array")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{jsxref("Object")}}</td>
   <td><strong>Only</strong> plain objects (e.g. from object literals)</td>
  </tr>
  <tr>
   <td>{{jsxref("Map")}}</a></td>
   <td></td>
  </tr>
  <tr>
   <td>{{jsxref("Set")}}</a></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("structuredClone()")}}</li>
 <li><a href="https://www.w3.org/TR/html5/infrastructure.html#safe-passing-of-structured-data">HTML Specification: Safe passing of structured data</a></li>
 <li>{{domxref("window.history")}}</li>
 <li>{{domxref("window.postMessage()")}}</li>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API">Web Workers</a></li>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a></li>
</ul>
