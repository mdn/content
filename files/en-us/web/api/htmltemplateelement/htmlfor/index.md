---
title: "HTMLTemplateElement: htmlFor property"
short-title: content
slug: Web/API/HTMLTemplateElement/htmlFor
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.htmlFor
---

{{APIRef("HTML DOM")}}

The **`HTMLTemplateElement.htmlFor`** property reflects the value of the [`for`](/en-US/docs/Web/HTML/Reference/Elements/template#for) content property. That means that this script-accessible property is used to set and read the value of the content property `for`, which is the ID of the label's associated control element.

## Value

A string reflecting the [`for`](/en-US/docs/Web/HTML/Reference/Elements/template#for) HTML attribute, containing the ID of the Processing Instruction marker to replace with the contents of this `<template>` element.

## Description

The `for` attribute of a `<template>` element is used for [template out-of-order patching](/en-US/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) using `<?marker>` and `<?start>`/`<?end>` [processing instruction](/en-US/docs/Web/API/ProcessingInstruction) markers. Those markers are replaced with the contents of the `<template>` element when it is parsed and processed.

The `htmlFor` attribute provides JavaScript access to the attribute value. `htmlFor` is used instead of `for` to avoid clashing with the JavaScript `for` reserved word, though [this is no longer strictly necessary, so may change in the future](https://github.com/whatwg/html/issues/9379).

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
