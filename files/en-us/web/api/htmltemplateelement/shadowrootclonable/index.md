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

This example demonstrates that the `shadowRootClonable` property initially reflects the `shadowrootclonable` attribute of the `<template>` element, that the default value of the property is `false`, and that it can be set using `shadowRootClonable`.

<!-- hidden logging and CSS blocks -->

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  padding: 0.5rem;
  margin: 5px
  border: 1px solid black;
}
```

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

<!-- end hidden content -->

The HTML declaratively creates two shadow roots and adds them to their parent `<div>`.
The first element does not specify `shadowrootclonable` while the second does.

```html
<!-- Declarative shadow root without clonable explicitly set -->
<div>
  <template id="default_clonable" shadowrootmode="closed">
    <slot></slot>
  </template>
  <h2>Shadow root not clonable</h2>
</div>

<!-- Declarative shadow root with clonable attribute -->
<div>
  <template id="set_clonable" shadowrootmode="open" shadowrootclonable>
    <slot></slot>
  </template>
  <h2>Shadow root clonable</h2>
</div>
```

The javascript first logs the `shadowRootClonable` value when the `shadowrootclonable` attribute has been omitted, and then for the case where it has been specified.
The values should be `false` and `true`, respectively.

```js
const defaultClonableElement = document.querySelector("#default_clonable");
log(
  `Value without shadowrootclonable attribute: ${defaultClonableElement.shadowRootClonable}`,
);
const setClonableElement = document.querySelector("#set_clonable");
log(
  `Value with shadowrootclonable attribute: ${setClonableElement.shadowRootClonable}`,
);
```

Next we explictly set the property to `true` (from `false`) and log again.
This verifies that the shadow root can be set to clonable.

```js
defaultClonableElement.shadowRootClonable = true;
log(
  `Value after setting shadowRootClonable to true: ${defaultClonableElement.shadowRootClonable}`,
);
```

The result is shown below.

{{EmbedLiveSample("Examples", "100%", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
- [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the `<template>` element
