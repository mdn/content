---
title: The structured clone algorithm
slug: Web/API/Web_Workers_API/Structured_clone_algorithm
page-type: guide
---

{{DefaultAPISidebar("Web Workers API") }}

The **structured clone algorithm** copies complex JavaScript objects.
It is used internally when invoking {{DOMxRef("WorkerGlobalScope.structuredClone", "structuredClone()")}}, to transfer data between [Workers](/en-US/docs/Web/API/Worker) via {{domxref("Worker.postMessage()", "postMessage()")}}, storing objects with [IndexedDB](/en-US/docs/Glossary/IndexedDB), or copying objects for [other APIs](#see_also).

It clones by recursing through the input object while maintaining a map of previously visited references, to avoid infinitely traversing cycles.

## Things that don't work with structured clone

- {{jsxref("Function")}} objects cannot be duplicated by the structured clone algorithm; attempting to throws a `DataCloneError` exception.
- Cloning DOM nodes likewise throws a `DataCloneError` exception.
- Certain object properties are not preserved:

  - The `lastIndex` property of {{jsxref("RegExp")}} objects is not preserved.
  - Property descriptors, setters, getters, and similar metadata-like features are not duplicated.
    For example, if an object is marked readonly with a [property descriptor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), it will be read/write in the duplicate, since that's the default.
  - The prototype chain is not walked or duplicated.
  - [Class private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) are not duplicated. (Although private properties of built-in types may.)

## Supported types

### JavaScript types

- {{jsxref("Array")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Boolean")}}
- {{jsxref("DataView")}}
- {{jsxref("Date")}}
- {{jsxref("Error")}} types (but see [Error types](#error_types) below).
- {{jsxref("Map")}}
- {{jsxref("Number")}}
- {{jsxref("Object")}} objects: but only plain objects (e.g. from object literals).
- [Primitive types](/en-US/docs/Web/JavaScript/Data_structures#primitive_values), except `symbol`.
- {{jsxref("RegExp")}}: but note that `lastIndex` is not preserved.
- {{jsxref("Set")}}
- {{jsxref("String")}}
- {{jsxref("TypedArray")}}

#### Error types

For `Error` types, the error name must be one of: {{jsxref("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} (or will be set to "Error").

Browsers must serialize the properties `name` and `message`, and are expected to serialize other "interesting" properties of the errors such as `stack`, `cause`, etc.

{{JSxRef("AggregateError")}} support is expected to be added to the specification in [whatwg/html#5749](https://github.com/whatwg/html/pull/5749) (and is already supported in some browsers).

### Web/API types

- {{domxref("AudioData")}}
- {{domxref("Blob")}}
- {{domxref("CropTarget")}}
- {{domxref("CryptoKey")}}
- {{domxref("DOMException")}}: browsers must serialize the properties {{domxref("DOMException.name","name")}} and {{domxref("DOMException.message","message")}}. Other attributes may also be serialized/cloned.
- {{domxref("DOMMatrix")}}
- {{domxref("DOMMatrixReadOnly")}}
- {{domxref("DOMPoint")}}
- {{domxref("DOMPointReadOnly")}}
- {{domxref("DOMQuad")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMRectReadOnly")}}
- {{domxref("EncodedAudioChunk")}}
- {{domxref("EncodedVideoChunk")}}
- {{domxref("FencedFrameConfig")}}
- {{domxref("File")}}
- {{domxref("FileList")}}
- {{domxref("FileSystemDirectoryHandle")}}
- {{domxref("FileSystemFileHandle")}}
- {{domxref("FileSystemHandle")}}
- {{domxref("GPUCompilationInfo")}}
- {{domxref("GPUCompilationMessage")}}
- {{domxref("GPUPipelineError")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("RTCCertificate")}}
- {{domxref("RTCEncodedAudioFrame")}}
- {{domxref("RTCEncodedVideoFrame")}}
- {{domxref("VideoFrame")}}
- {{domxref("WebTransportError")}}

> [!NOTE]
> Serializable objects are marked up in [Web IDL files](https://github.com/w3c/webref/tree/main/ed/idl) with the attribute `[Serializable]`.

## See also

- [HTML Specification: Safe passing of structured data](https://html.spec.whatwg.org/multipage/infrastructure.html#safe-passing-of-structured-data)
- [Transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects)
- {{DOMxRef("Window.structuredClone()")}}
- {{DOMxRef("WorkerGlobalScope.structuredClone()")}}
- {{domxref("window.postMessage()")}}
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)
