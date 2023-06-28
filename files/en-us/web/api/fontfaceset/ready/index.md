---
title: "FontFaceSet: ready property"
short-title: ready
slug: Web/API/FontFaceSet/ready
page-type: web-api-instance-property
browser-compat: api.FontFaceSet.ready
---

{{APIRef("CSS Font Loading API")}}

The `ready` read-only property of the {{domxref("FontFaceSet")}} interface returns a {{jsxref("Promise")}} that resolves to the given {{domxref("FontFaceSet")}}.

The promise will only resolve once the document has completed loading fonts, layout operations are completed, and no further font loads are needed.

## Value

A {{jsxref("Promise")}} that resolves to the given {{domxref("FontFaceSet")}}.

## Examples

In the following example the value of `ready` is printed to the console once the promise has resolved.

```js
async function isReady() {
  let ready = await document.fonts.ready;
  console.log(ready);
}

isReady();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
