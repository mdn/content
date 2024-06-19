---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
page-type: web-api-interface
browser-compat: api.HTMLTemplateElement
---

{{APIRef("Web Components")}}

The **`HTMLTemplateElement`** interface enables access to the contents of an HTML {{HTMLElement("template")}} element.

> **Note:** An HTML parser can create either an `HTMLTemplateElement` or a {{domxref("ShadowRoot")}} when it parses a {{HTMLElement("template")}} element, depending on the `<template>` attributes.
> If an `HTMLTemplateElement` is created the "shadow" attributes are reflected from the template.
> However these are not useful, because an `HTMLTemplateElement` is not a shadow root and cannot subsequently be changed to a shadow root.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits the properties of {{domxref("HTMLElement")}}._

- {{domxref("HTMLTemplateElement.content", "content")}} {{ReadOnlyInline}}
  - : A read-only {{domxref("DocumentFragment")}} which contains the DOM subtree representing the {{HTMLElement("template")}} element's template contents.
- {{domxref("HTMLTemplateElement.shadowRootMode", "shadowRootMode")}}
  - : A string that reflects the value of the [`shadowrootmode`](/en-US/docs/Web/HTML/Element/template#shadowrootmode) attribute of the associated `<template>` element.
- {{domxref("HTMLTemplateElement.shadowRootDelegatesFocus", "shadowRootDelegatesFocus")}}
  - : A boolean that reflects the value of the [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the associated `<template>` element.
- {{domxref("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : A boolean that reflects the value of the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated `<template>` element.
- {{domxref("HTMLTemplateElement.shadowRootSerializable", "shadowRootSerializable")}}
  - : A boolean that reflects the value of the [`shadowrootserializable`](/en-US/docs/Web/HTML/Element/template#shadowrootserializable) attribute of the associated `<template>` element.

## Instance methods

_This interface inherits the methods of {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
