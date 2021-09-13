---
title: FontFaceSet.ready
slug: Web/API/FontFaceSet/ready
tags:
  - API
  - CSSFontLoading API
  - CSSOM
  - Experimental
  - FontFaceSet
  - Fonts
  - Property
  - Ready
  - Reference
browser-compat: api.FontFaceSet.ready
---
{{APIRef("CSSFontLoading")}}{{SeeCompatTable}}{{draft}}

The `ready` readonly property of the {{domxref("FontFaceSet")}} interface
returns a {{jsxref("Promise")}} that resolves to the given {{domxref("FontFaceSet")}}.

## Syntax

```js
fontFaceSet.ready.then(function(fontFaceSet) {
  // ...
});
```

### Returns

A {{jsxref("Promise")}} that resolves to the given {{domxref("FontFaceSet")}}.

### Parameters

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
