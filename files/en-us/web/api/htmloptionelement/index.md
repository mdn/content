---
title: HTMLOptionElement
slug: Web/API/HTMLOptionElement
page-type: web-api-interface
browser-compat: api.HTMLOptionElement
---

{{APIRef("HTML DOM")}}

The **`HTMLOptionElement`** interface represents {{HTMLElement("option")}} elements and inherits all properties and methods of the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("HTMLOptionElement.Option", "Option()")}}
  - : Returns a newly created `HTMLOptionElement` object. It has four parameters: the text to display, `text`, the value associated, `value`, the value of `defaultSelected`, and the value of `selected`. The last three parameters are optional.

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLOptionElement.defaultSelected")}}
  - : Has a value of either `true` or `false` that shows the initial value of the [`selected`](/en-US/docs/Web/HTML/Element/option#selected) HTML attribute, indicating whether the option is selected by default or not.
- {{domxref("HTMLOptionElement.disabled")}}
  - : Has a value of either `true` or `false` representing the value of the [`disabled`](/en-US/docs/Web/HTML/Element/option#disabled) HTML attribute, which indicates that the option is unavailable to be selected.
- {{domxref("HTMLOptionElement.form")}} {{ReadOnlyInline}}
  - : A {{domxref("HTMLFormElement")}} representing the same value as the `form` of the corresponding {{HTMLElement("select")}} element, if the option is a descendant of a {{HTMLElement("select")}} element, or null if none is found.
- {{domxref("HTMLOptionElement.index")}} {{ReadOnlyInline}}
  - : A `long` representing the position of the option within the list of options it belongs to, in tree-order. If the option is not part of a list of options, like when it is part of the {{HTMLElement("datalist")}} element, the value is `0`.
- {{domxref("HTMLOptionElement.label")}}
  - : A string that reflects the value of the [`label`](/en-US/docs/Web/HTML/Element/option#label) HTML attribute, which provides a label for the option. If this attribute isn't specifically set, reading it returns the element's {{domxref("HTMLOptionElement.text", "text")}} content.
- {{domxref("HTMLOptionElement.selected")}}
  - : Has a value of either `true` or `false` that indicates whether the option is currently selected.
- {{domxref("HTMLOptionElement.text")}}
  - : A string that contains the text content of the element.
- {{domxref("HTMLOptionElement.value")}}
  - : A string that reflects the value of the [`value`](/en-US/docs/Web/HTML/Element/option#value) HTML attribute, if it exists; otherwise reflects value of the {{domxref("Node.textContent")}} property.

## Instance methods

_Doesn't implement any specific method, but inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("optgroup")}}
- {{domxref("HTMLOptionsCollection")}}
- {{domxref("HTMLSelectElement")}}
- {{domxref("HTMLOptGroupElement")}}
- {{domxref("HTMLElement")}}
- {{domxref("HTMLCollection")}}
