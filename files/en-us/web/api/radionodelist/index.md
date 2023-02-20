---
title: RadioNodeList
slug: Web/API/RadioNodeList
page-type: web-api-interface
browser-compat: api.RadioNodeList
---

{{APIRef("HTML DOM")}}

The **`RadioNodeList`** interface represents a collection of radio elements in a {{HTMLElement("form")}} or a {{HTMLElement("fieldset")}} element.

{{InheritanceDiagram}}

## Instance properties

_The `RadioNodeList` interface inherits the properties of_ {{domxref("NodeList")}}.

- {{domxref("RadioNodeList.value")}}
  - : If the underlying element collection contains radio buttons, the `value` property represents the checked radio button. On retrieving the `value` property, the `value` of the currently `checked` radio button is returned as a string. If the collection does not contain any radio buttons or none of the radio buttons in the collection is in `checked` state, the empty string is returned. On setting the `value` property, the first radio button input element whose `value` property is equal to the new value will be set to `checked`.

## Instance methods

_The `RadioNodeList` interface inherits the methods of_ {{domxref("NodeList")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("form")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}} elements.
