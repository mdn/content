---
title: HTMLTemplateElement
slug: Web/API/HTMLTemplateElement
page-type: web-api-interface
browser-compat: api.HTMLTemplateElement
---

{{APIRef("Web Components")}}

The **`HTMLTemplateElement`** interface enables access to the contents of an HTML {{HTMLElement("template")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits the properties of {{domxref("HTMLElement")}}._

- {{domxref("HTMLTemplateElement.content", "content")}} {{ReadOnlyInline}}
  - : A read-only {{domxref("DocumentFragment")}} which contains the DOM subtree representing the {{HTMLElement("template")}} element's template contents.
- {{domxref("HTMLTemplateElement.shadowRootMode", "shadowRootMode")}}
  - : Indicates the value of the [`mode`](/en-US/docs/Web/API/ShadowRoot/mode) property of a declaratively created [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot).
    This reflects the value of the [`shadowrootmode`](/en-US/docs/Web/HTML/Element/template#shadowrootmode) attribute of the associated `<template>` element.
- {{domxref("HTMLTemplateElement.shadowRootDelegatesFocus", "shadowRootDelegatesFocus")}}
  - : Indicates the [`delegatesFocus`](/en-US/docs/Web/API/ShadowRoot/delegatesFocus) property of a declaratively created [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot).
    This reflects the value of the [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the associated `<template>` element.
- {{domxref("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : Indicates the [`clonable`](/en-US/docs/Web/API/ShadowRoot/clonable) property of a declaratively created [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot).
    This reflects the value of the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated `<template>` element.

## Instance methods

_This interface inherits the methods of {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
