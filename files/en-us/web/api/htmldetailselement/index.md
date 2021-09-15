---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLDetailsElement
  - Interface
  - Reference
browser-compat: api.HTMLDetailsElement
---
{{APIRef("HTML DOM")}}

The **`HTMLDetailsElement`** interface provides special properties (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("details")}} elements.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDetailsElement.open")}}
  - : Is a boolean value reflecting the {{htmlattrxref("open", "details")}} HTML attribute, indicating whether or not the element's contents (not counting the {{HTMLElement("summary")}}) is to be shown to the user.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Events

Listen to this event using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`toggle`](/en-US/docs/Web/API/HTMLDetailsElement/toggle_event)
  - : Fired when the `open`/`closed` state of a {{HtmlElement("details")}} element is toggled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("details")}}
