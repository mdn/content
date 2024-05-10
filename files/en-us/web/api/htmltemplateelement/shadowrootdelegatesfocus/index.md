---
title: "HTMLTemplateElement: shadowRootDelegatesFocus property"
short-title: shadowRootDelegatesFocus
slug: Web/API/HTMLTemplateElement/shadowRootDelegatesFocus
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootDelegatesFocus
---

{{APIRef("Web Components")}}

The **`shadowRootDelegatesFocus`** property of the {{domxref("HTMLTemplateElement")}} interface indicates whether a [shadow root](/en-US/docs/Glossary/Shadow_tree) that that was [declaratively created](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) will [delegate focus](/en-US/docs/Web/API/ShadowRoot/delegatesFocus).

If the value is `true`, then selecting a non-focusable element in the [shadow tree](/en-US/docs/Glossary/Shadow_tree) (or calling `focus()` on the host element) will cause the focus to be given to the first focusable element in the tree. The host is then given any available [`:focus`](/en-US/docs/Web/CSS/:focus) styling.
By default the value is `false`, so if a non-focusable element in the shadow tree is selected the focus will remain with the previously focused element.

This property reflects the value of the [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Element/template) element.

## Value

`true` if the shadow root delegates focus; otherwise `false`.

## Examples

This example shows how you can create a shadow root declaratively, specifying the `shadowrootdelegatesfocus` attribute on the associated `<template>`.
It then logs the `shadowRootDelegatesFocus` property of the shadow root.

First declare a declarative shadow root by specifying a `<template>` element with the `shadowrootmode` attribute set to one of the allowed values.
The `shadowrootdelegatesfocus` attribute is also set, making the shadow root delegate focus.

```html
<div>
  <template id="delegatesfocus" shadowrootmode="open" shadowrootdelegatesfocus>
    <slot></slot>
  </template>
  <h2>Shadow root delegates focus</h2>
</div>
```

We can log whether the shadow root delegates focus or not using the following JavaScript:

```js
const delegatesFocusRoot = document.querySelector("#delegatesfocus");
console.log(
  `Value of shadowRootDelegatesFocus property: ${delegatesFocusRoot.shadowRootDelegatesFocus}`,
);
```

The [Declarative Shadow DOM with delegated focus](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom_with_delegated_focus) example in the `<template>` documentation demonstrates the effects of delegating focus.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
- [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the `<template>` element
