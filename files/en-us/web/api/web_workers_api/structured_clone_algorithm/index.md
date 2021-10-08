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

> **Note:** Native {{jsxref("Error")}} types can be cloned in Chrome, and Firefox is [working on it](https://bugzilla.mozilla.org/show_bug.cgi?id=1556604).

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
      <td>{{domxref("ArrayBufferView")}}</td>
      <td>
        Including other <a href="/en-US/docs/Web/JavaScript/Typed_arrays">typed arrays</a>.
      </td>
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
  </tbody>
</table>

## See also

- [HTML Specification: Safe passing of structured data](https://www.w3.org/TR/html5/infrastructure.html#safe-passing-of-structured-data)
- {{Glossary("Transferable objects")}}
- {{domxref("structuredClone()")}}
- {{domxref("window.history")}}
- {{domxref("window.postMessage()")}}
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)
