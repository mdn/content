---
title: HTMLContentElement
slug: Web/API/HTMLContentElement
page-type: web-api-interface
tags:
  - API
  - Deprecated
  - HTML DOM
  - Interface
  - Reference
  - Non-standard
browser-compat: api.HTMLContentElement
---
{{APIRef("Web Components")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`HTMLContentElement`** interface represents a {{HTMLElement("content")}} HTML Element, which is used in [Shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM).

## Properties

_This interface inherits the properties of {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.select")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string that reflects the {{ htmlattrxref("select", "content") }} HTML attribute. The value is a comma-separated list of CSS selectors that select the content to insert in place of the `<content>` element.

## Methods

_This interface inherits the methods of {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.getDistributedNodes()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a static {{domxref("NodeList")}} of the {{glossary("distributed nodes")}} associated with this `<content>` element.

## Specifications

This feature is no longer defined by any standards.

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("content")}} HTML element, implementing this interface.
- [Shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM)
