---
title: Ink
slug: Web/API/Ink
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Ink
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

The **`Ink`** interface of the [Ink API](/en-US/docs/Web/API/Ink_API) provides access to {{domxref("InkPresenter")}} objects for the application to use to render ink strokes.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("Ink.requestPresenter", "requestPresenter()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an {{domxref("InkPresenter")}} object to handle rendering strokes.

## Example

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  //...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
