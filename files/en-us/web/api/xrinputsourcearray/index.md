---
title: XRInputSourceArray
slug: Web/API/XRInputSourceArray
page-type: web-api-interface
tags:
  - API
  - AR
  - Input Sources
  - Inputs
  - Interface
  - Mixed
  - Reality
  - Reference
  - Sources
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSourceArray
  - augmented
  - list
  - Experimental
browser-compat: api.XRInputSourceArray
---
{{APIRef("WebXR Device API")}}{{SecureContext_header}}{{SeeCompatTable}}

The interface **`XRInputSourceArray`** represents a _live_ list of WebXR input sources, and is used as the return value of the {{domxref("XRSession")}} property {{domxref("XRSession.inputSources", "inputSources")}}. Each entry is an {{domxref("XRInputSource")}} representing one input device connected to the WebXR system.

In addition to being able to access the input sources in the list using standard array notation (that is, with index numbers inside square brackets), methods are available to allow the use of iterators and the {{domxref("XRInputSourceArray.forEach", "forEach()")}} method is also available.

## Properties

_The following properties are available on `XRInputSourceArray` objects._

- {{domxref("XRInputSourceArray.length", "length")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The number of {{domxref("XRInputSource")}} objects in the list.

## Methods

_The following methods are available on `XRInputSourceArray` objects. You may also use the features of the [`Symbol`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) type._

- {{domxref("XRInputSourceArray.entries", "entries()")}} {{Experimental_Inline}}
  - : Returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) you can use to walk the list of key/value pairs in the list. Each item returned is an array whose first value is the index and whose second value is the {{domxref("XRInputSource")}} at that index.
- {{domxref("XRInputSourceArray.forEach", "forEach()")}} {{Experimental_Inline}}
  - : Iterates over each item in the list, in order from first to last.
- {{domxref("XRInputSourceArray.keys", "keys()")}} {{Experimental_Inline}}
  - : A list of the keys corresponding to the entries in the input source list.
- {{domxref("XRInputSourceArray.values", "values()")}} {{Experimental_Inline}}
  - : Returns an `iterator` you can use to go through all the values in the list. Each item is a single {{domxref("XRInputSource")}} object.

In addition to these methods, you may use array notation to access items in the list by index For example, the snippet of code below calls a function `handleInput()`, passing into it the first item in the input source list, if the list isn't empty.

```js
let sources = xrSession.inputSources;
if (sources.length > 0) {
  handleInput(sources[0]);
}
```

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
