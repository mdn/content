---
title: "HTMLTemplateElement: htmlFor property"
short-title: content
slug: Web/API/HTMLTemplateElement/htmlFor
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.htmlFor
---

{{APIRef("HTML DOM")}}

The **`HTMLTemplateElement.htmlFor`** property reflects the value
of the [`for`](/en-US/docs/Web/HTML/Reference/Elements/template#for) content property. That means that this
script-accessible property is used to set and read the value of the content property
`for`, which is the ID of the label's associated control element.

## Value

A string reflecting the [`for`](/en-US/docs/Web/HTML/Reference/Elements/template#for) HTML attribute, containing the ID of the Processing Instruction marker to replace with the contents of this `<template>` element.

## Description

The `for` attribute of a `<template>` element is used for [template out-of-order patching](/en-US/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) using `<?marker>` and `<?start>`/`<?end>` [processing instruction](/en-US/docs/Web/API/ProcessingInstruction) markers.

## Examples

```html
<template for="my-identifier"> Lorem Ipsum... </template>
```

```js
console.log(document.querySelector("template").htmlFor);
// Logs:
// my-identifier
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
