---
title: "HTMLModelElement: currentSrc property"
short-title: currentSrc
slug: Web/API/HTMLModelElement/currentSrc
page-type: web-api-instance-property
browser-compat: api.HTMLModelElement.currentSrc
---

{{APIRef("HTML DOM")}}

The **`HTMLModelElement.currentSrc`** property contains the URL of the chosen model resource. This will be set when the User Agent selects a model resource based on the accepted file types. The value is an empty string if no `src` attribute is present or valid {{HTMLElement("source")}} elements are found.

## Value

A string containing the absolute URL of the chosen model source; it will be one of the resources listed by the {{domxref("HTMLSourceElement")}} contained within the model element, or the value of the `src` attribute if no {{HTMLElement("source")}} elements are provided.

## Examples

```js
const obj = document.createElement("model");
console.log(obj.currentSrc); // ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLModelElement")}}: Interface used to define the `HTMLModelElement.currentSrc` property
