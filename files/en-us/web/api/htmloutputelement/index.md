---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
page-type: web-api-interface
browser-compat: api.HTMLOutputElement
---

{{APIRef("HTML DOM")}}

The **`HTMLOutputElement`** interface provides properties and methods (beyond those inherited from {{domxref("HTMLElement")}}) for manipulating the layout and presentation of {{HTMLElement("output")}} elements.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLOutputElement.defaultValue")}}
  - : A string representing the default value of the element, initially the empty string.
- {{domxref("HTMLOutputElement.form")}} {{ReadOnlyInline}}
  - : An {{domxref("HTMLFormElement")}} indicating the form associated with the control, reflecting the [`form`](/en-US/docs/Web/HTML/Element/output#form) HTML attribute if it is defined.
- {{domxref("HTMLOutputElement.htmlFor")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMTokenList")}} reflecting the [`for`](/en-US/docs/Web/HTML/Element/output#for) HTML attribute, containing a list of IDs of other elements in the same document that contribute to (or otherwise affect) the calculated `value`.
- {{domxref("HTMLOutputElement.labels")}} {{ReadOnlyInline}}
  - : A {{domxref("NodeList")}} of {{HTMLElement("label")}} elements associated with the element.
- {{domxref("HTMLOutputElement.name")}}
  - : A string reflecting the [`name`](/en-US/docs/Web/HTML/Element/output#name) HTML attribute, containing the name for the control that is submitted with form data.
- {{domxref("HTMLOutputElement.type")}} {{ReadOnlyInline}}
  - : The string "`output`".
- {{domxref("HTMLOutputElement.validationMessage")}} {{ReadOnlyInline}}
  - : A string representing a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.
- {{domxref("HTMLOutputElement.validity")}} {{ReadOnlyInline}}
  - : A {{domxref("ValidityState")}} representing the validity states that this element is in.
- {{domxref("HTMLOutputElement.value")}}
  - : A string representing the value of the contents of the elements. Behaves like the {{domxref("Node.textContent")}} property.
- {{domxref("HTMLOutputElement.willValidate")}} {{ReadOnlyInline}}
  - : A boolean value indicating whether the element is a candidate for constraint validation.

## Instance methods

_This interface also inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLOutputElement.checkValidity()")}}
  - : Checks the validity of the element and returns a boolean value holding the check result.
- {{domxref("HTMLOutputElement.reportValidity()")}}

  - : This method reports the problems with the constraints on the element, if any, to the user. If there are problems, fires an {{domxref("HTMLInputElement/invalid_event", "invalid")}} event at the element, and returns `false`; if there are no problems, it returns `true`.

    When the problem is reported, the user agent may focus the element and change the scrolling position of the document or perform some other action that brings the element to the user's attention. User agents may report more than one constraint violation if this element suffers from multiple problems at once. If the element is not rendered, then the user agent may report the error for the running script instead of notifying the user.

- {{domxref("HTMLOutputElement.setCustomValidity()")}}
  - : Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.

## Modes

This element behaves in one of two modes: _default_ mode and _value_ mode.

### Default mode

Initially, the element is in default mode, and so the contents of the element represent both the value of the element and its default value.

If the element is in default mode when the descendants of the element are changed in any way, the `defaultValue` property is set to the value of the {{domxref("Node.textContent","textContent")}} property.

Resetting the form puts the element into default mode, and sets the {{domxref("Node.textContent","textContent")}} property to the value of the `defaultValue` property.

### Value mode

The element goes into value mode when the contents of the `value` property are set. The `value` property otherwise behaves like the {{domxref("Node.textContent","textContent")}} property. When the element is in value mode, the default value is accessible only through the `defaultValue` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("output")}}.
