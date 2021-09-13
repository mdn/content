---
title: performance.toJSON()
slug: Web/API/Performance/toJSON
tags:
  - API
  - Method
  - Performance
  - Reference
browser-compat: api.Performance.toJSON
---
{{APIRef("High Resolution Timing")}}

The **`toJSON()`** method of the {{domxref("Performance")}}
interface is a standard serializer: it returns a JSON representation of the performance
object's properties.

{{availableinworkers}}

## Syntax

```js
myPerf = performance.toJSON()
```

### Arguments

- None
  - :

### Return value

- myPerf
  - : A JSON object that is the serialization of the {{domxref("Performance")}} object.

## Example

```js
var js;
js = window.performance.toJSON();
console.log("json = " + JSON.stringify(js));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
