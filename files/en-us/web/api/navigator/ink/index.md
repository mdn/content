---
title: "Navigator: ink property"
short-title: ink
slug: Web/API/Navigator/ink
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.ink
---

{{SeeCompatTable}}{{APIRef("Ink API")}}

The **`ink`** read-only property of the {{domxref("Navigator")}} interface returns an {{domxref("Ink")}} object for the current document, providing access to [Ink API](/en-US/docs/Web/API/Ink_API) functionality.

## Value

An {{domxref('Ink')}} object.

## Example

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
