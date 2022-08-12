---
title: HTMLMeterElement
slug: Web/API/HTMLMeterElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - HTMLMeterElement
  - Interface
  - Reference
browser-compat: api.HTMLMeterElement
---
{{APIRef("HTML DOM")}}

The HTML {{HTMLElement("meter")}} elements expose the **`HTMLMeterElement`** interface, which provides special properties and methods (beyond the {{domxref("HTMLElement")}} object interface they also have available to them by inheritance) for manipulating the layout and presentation of {{HTMLElement("meter")}} elements.

{{InheritanceDiagram}}

## Properties

_Also inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLMeterElement.high")}}
  - : A `double` representing the value of the high boundary, reflecting the {{htmlattrxref("high","meter")}} attribute.
- {{domxref("HTMLMeterElement.low")}}
  - : A `double` representing the value of the low boundary, reflecting the {{htmlattrxref("low","meter")}}attribute.
- {{domxref("HTMLMeterElement.max")}}
  - : A `double` representing the maximum value, reflecting the {{htmlattrxref("max","meter")}} attribute.
- {{domxref("HTMLMeterElement.min")}}
  - : A `double` representing the minimum value, reflecting the {{htmlattrxref("min","meter")}} attribute.
- {{domxref("HTMLMeterElement.optimum")}}
  - : A `double` representing the optimum, reflecting the {{htmlattrxref("optimum","meter")}} attribute.
- {{domxref("HTMLMeterElement.value")}}
  - : A `double` representing the current value, reflecting the {{htmlattrxref("value","meter")}} attribute.
- {{domxref("HTMLMeterElement.labels")}} {{ReadOnlyInline}}
  - : A {{domxref("NodeList")}} of {{HTMLElement("label")}} elements that are associated with the element.

## Methods

_This interface does not implement any specific methods but inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("meter")}}
