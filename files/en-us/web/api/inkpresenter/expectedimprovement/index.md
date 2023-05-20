---
title: "InkPresenter: expectedImprovement property"
short-title: expectedImprovement
slug: Web/API/InkPresenter/expectedImprovement
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.InkPresenter.expectedImprovement
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

The **`expectedImprovement`** read-only property of the {{domxref("InkPresenter")}} interface returns a value, in milliseconds, indicating the latency improvement that can be expected using this presenter.

### Value

A number.

## Example

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.expectedImprovement);

  //...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
