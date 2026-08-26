---
title: "HTMLTemplateElement: htmlFor property"
short-title: content
slug: Web/API/HTMLTemplateElement/htmlFor
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.htmlFor
---

{{APIRef("HTML DOM")}}

The **`htmlFor`** property of the {{domxref("HTMLTemplateElement")}} interface is the ID of the Processing Instruction marker to replace with the contents of the associated `<template>` element. It reflects the value of, and is used to set and get the [`for`](/en-US/docs/Web/HTML/Reference/Elements/template#for) content attribute.

## Value

A string containing the ID of the Processing Instruction marker to replace with the contents of this `<template>` element.

## Description

The `for` attribute of a `<template>` element is used for [template out-of-order patching](/en-US/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) using `<?marker>` and `<?start>`/`<?end>` [processing instruction](/en-US/docs/Web/API/ProcessingInstruction) markers.

## Examples

```html
<template for="my-identifier"> Lorem Ipsum... </template>
```

```js
console.log(document.querySelector("template").htmlFor);
// my-identifier
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
