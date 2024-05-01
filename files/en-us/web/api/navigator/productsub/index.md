---
title: "Navigator: productSub property"
short-title: productSub
slug: Web/API/Navigator/productSub
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Navigator.productSub
---

{{ ApiRef("HTML DOM") }} {{Deprecated_Header}}

The **`Navigator.productSub`** read-only property that returns either the string "20030107", or the string "20100101".

## Value

Either "20030107", or "20100101".

## Examples

```js
document.body.textContent = `productSub: ${navigator.productSub}`;
```

{{ EmbedLiveSample("Examples") }}

## Notes

On IE, this property returns undefined.

On Apple Safari and Google Chrome this property always returns `20030107`.

On Firefox, this property always returns `20100101`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
