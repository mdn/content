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

  - : A string that reflects the value of the [`shadowrootmode`](/en-US/docs/Web/HTML/Element/template#shadowrootmode) attribute of the associated `<template>` element.

    > **Note:** This object's "shadow" properties have no practical use.
    > If the corresponding `<template>` element declaratively creates a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot) then there is no `HTMLTemplateElement` object.
    > Otherwise an `HTMLTemplateElement` object is created that reflects the element, but this cannot subsequently be changed to a `ShadowRoot`.

- {{domxref("HTMLTemplateElement.shadowRootDelegatesFocus", "shadowRootDelegatesFocus")}}
  - : A boolean that reflects the value of the [`shadowrootdelegatesfocus`](/en-US/docs/Web/HTML/Element/template#shadowrootdelegatesfocus) attribute of the associated `<template>` element.
    This has no practical use.
- {{domxref("HTMLTemplateElement.shadowRootClonable", "shadowRootClonable")}}
  - : A boolean that reflects the value of the [`shadowrootclonable`](/en-US/docs/Web/HTML/Element/template#shadowrootclonable) attribute of the associated `<template>` element.
    This has no practical use.

## Instance methods

_This interface inherits the methods of {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
