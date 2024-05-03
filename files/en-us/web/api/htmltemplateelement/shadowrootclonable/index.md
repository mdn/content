---
title: "HTMLTemplateElement: shadowRootClonable property"
short-title: shadowRootClonable
slug: Web/API/HTMLTemplateElement/shadowRootClonable
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootClonable
---

{{APIRef("Web Components")}}

The **`shadowRootClonable`** property of the {{domxref("HTMLTemplateElement")}} interface indicates whether a [shadow root](/en-US/docs/Glossary/Shadow_tree) that that was [declaratively created](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) is [`clonable`](/en-US/docs/Web/API/ShadowRoot/clonable).

If this is `true` then a shadow host cloned with {{domxref("Node.cloneNode()")}} or {{domxref("Document.importNode()")}} will include a shadow root in the copy.
The default value is `false`.

This property reflects the value of the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Element/template) element.

## Value

`true` if the shadow root of is clonable; otherwise `false`.

## Examples

This example shows how you can create a shadow root declaratively, specifying the `shadowrootclonable` attribute, and then log the value.

First we declare shadow root, using a `<template>` element with the `shadowrootmode` attribute
The `shadowrootclonable` is also set, making it clonable.

```html
<div>
  <template id="clonable" shadowrootmode="open" shadowrootclonable>
    <slot></slot>
  </template>
  <h2>Shadow root not clonable</h2>
</div>
```

We can log whether the value is clonable or not using the following JavaScript

```js
const clonableShadowDOM = document.querySelector("#clonable");
console.log(
  `Value of shadowRootClonable attribute: ${clonableShadowDOM.shadowRootClonable}`,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
- [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the `<template>` element
