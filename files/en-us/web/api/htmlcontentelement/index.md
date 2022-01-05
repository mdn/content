---
title: HTMLContentElement
slug: Web/API/HTMLContentElement
tags:
  - API
  - Deprecated
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLContentElement
---
{{ APIRef("Web Components") }}

{{Deprecated_header}}

The **`HTMLContentElement`** interface represents a {{HTMLElement("content")}} HTML Element, which is used in [Shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM).

## Properties

_This interface inherits the properties of {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.select")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{ htmlattrxref("select", "content") }} HTML attribute. The value is a comma-separated list of CSS selectors that select the content to insert in place of the `<content>` element.

## Methods

_This interface inherits the methods of {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.getDistributedNodes()")}}
  - : Returns a static {{domxref("NodeList")}} of the {{glossary("distributed nodes")}} associated with this `<content>` element.

## Specifications

This feature is no longer defined by any standards.

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("content")}} HTML element, implementing this interface.
- [Shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM)
