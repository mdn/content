---
title: HTMLMeterElement
slug: Web/API/HTMLMeterElement
page-type: web-api-interface
browser-compat: api.HTMLMeterElement
---

{{APIRef("HTML DOM")}}

The HTML {{HTMLElement("meter")}} elements expose the **`HTMLMeterElement`** interface, which provides special properties and methods (beyond the {{domxref("HTMLElement")}} object interface they also have available to them by inheritance) for manipulating the layout and presentation of {{HTMLElement("meter")}} elements.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLMeterElement.high")}}
  - : A `double` representing the value of the high boundary, reflecting the [`high`](/en-US/docs/Web/HTML/Element/meter#high) attribute.
- {{domxref("HTMLMeterElement.low")}}
  - : A `double` representing the value of the low boundary, reflecting the [`low`](/en-US/docs/Web/HTML/Element/meter#low) attribute.
- {{domxref("HTMLMeterElement.max")}}
  - : A `double` representing the maximum value, reflecting the [`max`](/en-US/docs/Web/HTML/Element/meter#max) attribute.
- {{domxref("HTMLMeterElement.min")}}
  - : A `double` representing the minimum value, reflecting the [`min`](/en-US/docs/Web/HTML/Element/meter#min) attribute.
- {{domxref("HTMLMeterElement.optimum")}}
  - : A `double` representing the optimum, reflecting the [`optimum`](/en-US/docs/Web/HTML/Element/meter#optimum) attribute.
- {{domxref("HTMLMeterElement.value")}}
  - : A `double` representing the current value, reflecting the [`value`](/en-US/docs/Web/HTML/Element/meter#value) attribute.
- {{domxref("HTMLMeterElement.labels")}} {{ReadOnlyInline}}
  - : A {{domxref("NodeList")}} of {{HTMLElement("label")}} elements that are associated with the element.

## Instance methods

_This interface does not implement any specific methods but inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("meter")}}
