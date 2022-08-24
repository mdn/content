---
title: The structured clone algorithm
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
page-type: guide
tags:
  - Advanced
  - DOM
  - HTML
  - JavaScript
  - Reference
---
{{DefaultAPISidebar("Web Workers API") }}

The **structured clone algorithm** copies complex JavaScript objects.
It is used internally when invoking {{domxref("structuredClone()")}}, to transfer data between [Workers](/en-US/docs/Web/API/Worker) via {{domxref("Worker.postMessage()", "postMessage()")}}, storing objects with [IndexedDB](/en-US/docs/Glossary/IndexedDB), or copying objects for [other APIs](#see_also).

It clones by recursing through the input object while maintaining a map of previously visited references, to avoid infinitely traversing cycles.

## Things that don't work with structured clone

- {{jsxref("Function")}} objects cannot be duplicated by the structured clone algorithm; attempting to throws a `DataCloneError` exception.
- Cloning DOM nodes likewise throws a `DataCloneError` exception.
- Certain object properties are not preserved:

  - The `lastIndex` property of {{jsxref("RegExp")}} objects is not preserved.
  - Property descriptors, setters, getters, and similar metadata-like features are not duplicated.
    For example, if an object is marked readonly with a [property descriptor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), it will be read/write in the duplicate, since that's the default.
  - The prototype chain is not walked or duplicated.

## Supported types

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Object type</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/en-US/docs/Web/JavaScript/Data_structures#primitive_values">All primitive types</a>
      </td>
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
      <td>{{jsxref("TypedArray")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("DataView")}}</td>
      <td></td>
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
      <td>{{jsxref("Map")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{jsxref("Set")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{domxref("DOMException")}}</td>
      <td>Browsers must serialize the properties {{domxref("DOMException.name","name")}} and {{domxref("DOMException.message","message")}}.
      Other attributes may also be serialized/cloned.</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Native <code>Error</code> types</a></td>
      <td>
        <p>The error name must be one of: {{jsxref("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} (or will be set to "Error").</p>
        <p>Browsers must serialize the properties <code>name</code> and <code>message</code>, and are expected to serialize other "interesting" properties of the errors such as <code>stack</code>, <code>cause</code>, etc.</p>
        <p>{{JSxRef("AggregateError")}} support is expected to be added to the specification in <a href="https://github.com/whatwg/html/pull/5749">whatwg/html#5749</a> (and is already supported in some browsers).</p>
      </td>
    </tr>
  </tbody>
</table>

## See also

- [HTML Specification: Safe passing of structured data](https://html.spec.whatwg.org/multipage/infrastructure.html#safe-passing-of-structured-data)
- {{Glossary("Transferable objects")}}
- {{domxref("structuredClone()")}}
- {{domxref("window.history")}}
- {{domxref("window.postMessage()")}}
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)
