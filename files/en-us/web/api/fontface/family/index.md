---
title: "FontFace: family property"
short-title: family
slug: Web/API/FontFace/family
page-type: web-api-instance-property
browser-compat: api.FontFace.family
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`FontFace.family`** property allows the author to get or set the font family of a {{domxref("FontFace")}} object.

The value is used for name matching against a particular font face when styling elements using the [`font-family`](/en-US/docs/Web/CSS/font-family) property.
Any name may be used, and this overrides any name specified in the underlying font data.

This property is equivalent to the {{cssxref("@font-face/font-family", "font-family")}} descriptor of {{cssxref("@font-face")}}.

## Value

A string.

## Examples

```js
let fontFace = new FontFace(
  "Roboto",
  "url(https://fonts.example.com/roboto.woff2)",
);
console.log(fontFace.family); // 'Roboto'

fontFace.family = "newRoboto";
console.log(fontFace.family); // 'newRoboto'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
