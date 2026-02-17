---
title: "HTMLTemplateElement: shadowRootCustomElementRegistry property"
short-title: shadowRootCustomElementRegistry
slug: Web/API/HTMLTemplateElement/shadowRootCustomElementRegistry
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootCustomElementRegistry
---

{{APIRef("Web Components")}}

The **`shadowRootCustomElementRegistry`** property of the {{domxref("HTMLTemplateElement")}} interface reflects the value of the `shadowrootcustomelementregistry` attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) element.

Note that this property is not useful for developers. If a `<template>` element is used to declaratively create a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot), then this object and property do not exist. Otherwise, if an `HTMLTemplateElement` is created, the value of this property is irrelevant because the object is not a shadow root and cannot subsequently be changed to a shadow root.

## Value

A string that reflects the `shadowrootcustomelementregistry` attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.customElementRegistry")}}
- {{domxref("HTMLTemplateElement.shadowRootMode")}}
- {{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}} constructor
- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
