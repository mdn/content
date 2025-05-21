---
title: "DelegatedInkTrailPresenter: expectedImprovement property"
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.DelegatedInkTrailPresenter.expectedImprovement
---

{{APIRef("Ink API")}}{{Deprecated_header}}{{Non-Standard_Header}}

The **`expectedImprovement`** read-only property of the {{domxref("DelegatedInkTrailPresenter")}} interface returns a value, in milliseconds, indicating the latency improvement that can be expected using this presenter.

### Value

A number.

## Example

```js
async function inkInit() {
  const ink = navigator.ink;
  const presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.expectedImprovement);

  // …
}
```

## Specifications

The feature is no longer a part of the specification.

## Browser compatibility

{{Compat}}

## See also

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
