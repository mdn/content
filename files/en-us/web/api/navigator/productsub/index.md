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

The **`Navigator.productSub`** read-only property returns the
build number of the current browser.

## Value

A string.

## Examples

```js
document.body.textContent = `productSub: ${navigator.productSub}`;
```

{{ EmbedLiveSample("Examples") }}

## Notes

On IE, this property returns undefined.

On Apple Safari and Google Chrome this property always returns `20030107`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
