---
title: "Ink: requestPresenter() method"
short-title: requestPresenter()
slug: Web/API/Ink/requestPresenter
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Ink.requestPresenter
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

The **`requestPresenter()`** method of the {{domxref("Ink")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("DelegatedInkTrailPresenter")}} object to handle rendering strokes.

## Syntax

```js-nolint
requestPresenter(param)
```

### Parameters

- `param` {{optional_inline}}
  - : An object that contains the following property:
    - `presentationArea` {{optional_inline}}
      - : An {{domxref("Element")}} inside which rendering of ink strokes is confined (the element's border box, to be precise). If `param` is not included, or `presentationArea` is set to `null`, ink rendering is confined to the containing viewport by default.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("DelegatedInkTrailPresenter")}} object instance.

### Exceptions

- `Error` {{domxref("DOMException")}}
  - : An error is thrown and the operation is aborted if `presentationArea` is not a valid {{domxref("Element")}}, or is not in the same document as the associated {{domxref("Ink")}} object.

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
