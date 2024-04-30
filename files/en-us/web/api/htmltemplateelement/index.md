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
  - : XXxxx.
- {{domxref("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : Indicates whether a shadow root that has been [declaratively created](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) is [`clonable`](/en-US/docs/Web/API/ShadowRoot/clonable).
    This reflects the value of the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated `<template>` element.

## Instance methods

_This interface inherits the methods of {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
