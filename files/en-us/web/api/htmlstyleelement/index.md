---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - HTMLStyleElement
  - Interface
  - Reference
browser-compat: api.HTMLStyleElement
---
{{APIRef("HTML DOM")}}

The **`HTMLStyleElement`** interface represents a {{HTMLElement("style")}} element. It inherits properties and methods from its parent, {{domxref("HTMLElement")}}.

This interface doesn't allow to manipulate the CSS it contains (in most case). To manipulate CSS, see [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) for an overview of the objects used to manipulate specified CSS properties using the DOM.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLStyleElement.media")}}
  - : A string reflecting the HTML attribute representing the intended destination medium for style information.
- {{domxref("HTMLStyleElement.type")}} {{deprecated_inline}}
  - : A string reflecting the HTML attribute representing the type of style being applied by this statement.
- {{domxref("HTMLStyleElement.disabled")}}
  - : A boolean value indicating whether or not the associated stylesheet is disabled.
- {{domxref("HTMLStyleElement.sheet")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CSSStyleSheet")}} object associated with the given element, or `null` if there is none
- {{domxref("HTMLStyleElement.scoped")}} {{non-standard_inline}} {{deprecated_inline}}
  - : A boolean value indicating if the element applies to the whole document (`false`) or only to the parent's sub-tree (`true`).

## Methods

_No specific method; inherits properties from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("style")}}.
- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) to see how to manipulate CSS.
