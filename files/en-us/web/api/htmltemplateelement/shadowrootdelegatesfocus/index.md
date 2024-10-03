---
title: "HTMLTemplateElement: shadowRootDelegatesFocus property"
short-title: shadowRootDelegatesFocus
slug: Web/API/HTMLTemplateElement/shadowRootDelegatesFocus
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootDelegatesFocus
---

{{APIRef("Web Components")}}

The **`shadowRootDelegatesFocus`** property of the {{domxref("HTMLTemplateElement")}} interface reflects the value of the [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Element/template) element.

Note that this property is not useful for developers.
If a `<template>` element is used to declaratively create a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot), then this object and property do not exist.
Otherwise, if an `HTMLTemplateElement` is created, the value of this property is irrelevant because the object is not a shadow root and cannot subsequently be changed to a shadow root.

## Value

Reflects the value of the [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Element/template) element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the `<template>` element
- [`ShadowRoot.delegatesFocus`](/en-US/docs/Web/API/ShadowRoot/delegatesFocus)
