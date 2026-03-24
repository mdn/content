---
title: "HTMLTemplateElement: shadowRootReferenceTarget property"
short-title: shadowRootReferenceTarget
slug: Web/API/HTMLTemplateElement/shadowRootReferenceTarget
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootReferenceTarget
---

{{APIRef("Web Components")}}

The **`shadowRootReferenceTarget`** property of the {{domxref("HTMLTemplateElement")}} interface reflects the value of the [`shadowrootreferencetarget`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootreferencetarget) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) element.

> [!NOTE]
> This property is not useful for developers, and is only documented for completeness.
> If a `<template>` element is used to declaratively create a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot), then this object and property do not exist.
> Otherwise, if an `HTMLTemplateElement` is created, the value of this property is irrelevant because the object is not a shadow root and cannot subsequently be changed to a shadow root.

## Value

Reflects the value of the [`shadowrootreferencetarget`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootreferencetarget) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`shadowrootreferencetarget`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus) attribute of the `<template>` element
- [`ShadowRoot.referenceTarget`](/en-US/docs/Web/API/ShadowRoot/delegatesFocus)
