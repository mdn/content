---
title: "HTMLTemplateElement: shadowRootClonable property"
short-title: shadowRootClonable
slug: Web/API/HTMLTemplateElement/shadowRootClonable
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootClonable
---

{{APIRef("Web Components")}}

The **`shadowRootClonable`** property reflects the value of the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Element/template) element.

Note that this property is not useful for developers.
If a `<template>` element is used to declaratively create a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot), then this object and property do not exist.
Otherwise, if an `HTMLTemplateElement` is created, the value of this property is irrelevant because the object is not a shadow root and cannot subsequently be changed to a shadow root.

## Value

Reflects the value of the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Element/template) element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the `<template>` element
- [`ShadowRoot.clonable`](/en-US/docs/Web/API/ShadowRoot/clonable)
