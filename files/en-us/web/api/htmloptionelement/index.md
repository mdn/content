---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
browser-compat: api.HTMLOptionElement
---
{{APIRef("HTML DOM")}}

The **`HTMLOptionElement`** interface represents {{HTMLElement("option")}} elements and inherits all properties and methods of the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram(600, 120)}}

## Constructor

- {{domxref("HTMLOptionElement.Option", "Option()")}}
  - : Returns a newly created `HTMLOptionElement` object. It has four parameters: the text to display, `text`, the value associated, `value`, the value of `defaultSelected`, and the value of `selected`. The last three parameters are optional.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLOptionElement.defaultSelected")}}
  - : Has a value of either `true` or `false` that shows the initial value of the {{htmlattrxref("selected", "option")}} HTML attribute, indicating whether the option is selected by default or not.
- {{domxref("HTMLOptionElement.disabled")}}
  - : Has a value of either `true` or `false` representing the value of the {{htmlattrxref("disabled", "option")}} HTML attribute, which indicates that the option is unavailable to be selected. An option can also be disabled if it is a child of an {{HTMLElement("optgroup")}} element that is disabled.
- {{domxref("HTMLOptionElement.form")}} {{readonlyInline}}
  - : Is a {{domxref("HTMLFormElement")}} representing the same value as the `form` of the corresponding {{HTMLElement("select")}} element, if the option is a descendant of a {{HTMLElement("select")}} element, or null if none is found.
- {{domxref("HTMLOptionElement.index")}} {{readonlyInline}}
  - : Is a `long` representing the position of the option within the list of options it belongs to, in tree-order. If the option is not part of a list of options, like when it is part of the {{HTMLElement("datalist")}} element, the value is `0`.
- {{domxref("HTMLOptionElement.label")}} {{readonlyInline}}
  - : Is a {{domxref("DOMString")}} that reflects the value of the {{htmlattrxref("label", "option")}} HTML attribute, which provides a label for the option. If this attribute isn't specifically set, reading it returns the element's text content.
- {{domxref("HTMLOptionElement.selected")}}
  - : Has a value of either `true` or `false` that indicates whether the option is currently selected.
- {{domxref("HTMLOptionElement.text")}}
  - : Is a {{domxref("DOMString")}} that contains the text content of the element.
- {{domxref("HTMLOptionElement.value")}}
  - : Is a {{domxref("DOMString")}} that reflects the value of the {{htmlattrxref("value", "option")}} HTML attribute, if it exists; otherwise reflects value of the {{domxref("Node.textContent")}} property.

## Methods

_Doesn't implement any specific method, but inherits methods from its parent, {{domxref("HTMLElement")}}._


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("option")}}.
