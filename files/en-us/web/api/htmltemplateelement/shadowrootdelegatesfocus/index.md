---
title: "HTMLTemplateElement: shadowRootDelegatesFocus property"
short-title: shadowRootDelegatesFocus
slug: Web/API/HTMLTemplateElement/shadowRootDelegatesFocus
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootDelegatesFocus
---

{{APIRef("Web Components")}}

The **`shadowRootDelegatesFocus`** property of the {{domxref("HTMLTemplateElement")}} interface indicates whether a [shadow root](/en-US/docs/Glossary/Shadow_tree) that that was [declaratively created](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) will [delegate focus](/en-US/docs/Web/API/ShadowRoot/delegatesFocus).

If the value is `true`, then selecting a non-focussable element in the [shadow tree](/en-US/docs/Glossary/Shadow_tree) (or calling `focus()` on the host element), will cause the focus to be given to the first focussable element in the tree, and the host is given any available [`:focus`](/en-US/docs/Web/CSS/:focus) styling.
By default the value is `false`.<!-- and when a non focussable element in the shadow tree is selected the shadow host (parent element) receives any [`:focus`](/en-US/docs/Web/CSS/:focus) styling such as an outline or border-->

This property reflects the value of the [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Element/template) element.

## Value

`true` if the shadow root delegates focus; otherwise `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
- [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the `<template>` element
