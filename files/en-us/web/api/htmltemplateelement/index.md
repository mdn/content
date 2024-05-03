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
  - : XXxxx.
- {{domxref("HTMLTemplateElement.shadowRootDelegatesFocus", "shadowRootDelegatesFocus")}}
  - : Indicates whether a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot) that was [declaratively created](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) will [delegate focus](/en-US/docs/Web/API/ShadowRoot/delegatesFocus) if a non-focussable element is selected.
    This reflects the value of the [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the associated `<template>` element.
- {{domxref("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : Indicates whether a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot) that was [declaratively created](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) is [clonable](/en-US/docs/Web/API/ShadowRoot/clonable).
    This reflects the value of the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated `<template>` element.

## Instance methods

_This interface inherits the methods of {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
