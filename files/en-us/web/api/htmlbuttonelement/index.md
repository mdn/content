---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
tags:
  - API
  - HTML DOM
  - HTMLButtonElement
  - Interface
  - Reference
browser-compat: api.HTMLButtonElement
---
{{APIRef("HTML DOM")}}

The **`HTMLButtonElement`** interface provides properties and methods (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("button")}} elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLButtonElement.accessKey")}}
  - : Is a {{domxref("DOMString")}} indicating the single-character keyboard key to give access to the button.
- {{domxref("HTMLButtonElement.autofocus")}}
  - : Is a boolean value indicating whether or not the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.
- {{domxref("HTMLButtonElement.disabled")}}
  - : Is a boolean value indicating whether or not the control is disabled, meaning that it does not accept any clicks.
- {{domxref("HTMLButtonElement.form")}} {{readonlyInline}}
  - : Is an {{domxref("HTMLFormElement")}} reflecting the form that this button is associated with. If the button is a descendant of a form element, then this attribute is a reference to that form's associated `HTMLFormElement`.
    If the button is not a descendant of a form element, then the attribute can be a reference to any `HTMLFormElement` element in the same document it is related to, or the `null` value if none matches.
- {{domxref("HTMLButtonElement.formAction")}}
  - : Is a {{domxref("DOMString")}} reflecting the URI of a resource that processes information submitted by the button. If specified, this attribute overrides the {{htmlattrxref("action", "form")}} attribute of the {{HTMLElement("form")}} element that owns this element.
- {{domxref("HTMLButtonElement.formEnctype")}}
  - : Is a {{domxref("DOMString")}} reflecting the type of content that is used to submit the form to the server. If specified, this attribute overrides the {{htmlattrxref("enctype", "form")}} attribute of the {{HTMLElement("form")}} element that owns this element.
- {{domxref("HTMLButtonElement.formMethod")}}
  - : Is a {{domxref("DOMString")}} reflecting the HTTP method that the browser uses to submit the form. If specified, this attribute overrides the {{htmlattrxref("method", "form")}} attribute of the {{HTMLElement("form")}} element that owns this element.
- {{domxref("HTMLButtonElement.formNoValidate")}}
  - : Is a boolean value indicating that the form is not to be validated when it is submitted. If specified, this attribute overrides the {{htmlattrxref("novalidate", "form")}} attribute of the {{HTMLElement("form")}} element that owns this element.
- {{domxref("HTMLButtonElement.formTarget")}}
  - : Is a {{domxref("DOMString")}} reflecting a name or keyword indicating where to display the response that is received after submitting the form. If specified, this attribute overrides the {{htmlattrxref("target", "form")}} attribute of the {{HTMLElement("form")}} element that owns this element.
- {{domxref("HTMLButtonElement.labels")}} {{readonlyInline}}
  - : Is a {{domxref("NodeList")}} that represents a list of {{HTMLElement("label")}} elements that are labels for this button.
- {{domxref("HTMLButtonElement.menu")}} {{experimental_inline}}
  - : Is a {{domxref("HTMLMenuElement")}} representing the menu element to be displayed if the button is clicked and is of `type="menu"`.
- {{domxref("HTMLButtonElement.name")}}
  - : Is a {{domxref("DOMString")}} representing the name of the object when submitted with a form. If specified, it must not be the empty string.
- {{domxref("HTMLButtonElement.tabIndex")}}
  - : Is a `long` that represents this element's position in the tabbing order.
- {{domxref("HTMLButtonElement.type")}}

  - : Is a {{domxref("DOMString")}} indicating the behavior of the button. This is an enumerated attribute with the following possible values:

    - `submit`: The button submits the form. This is the default value if the attribute is not specified, or if it is dynamically changed to an empty or invalid value.
    - `reset`: The button resets the form.
    - `button`: The button does nothing.
    - `menu`: The button displays a menu. {{experimental_inline}}

- {{domxref("HTMLButtonElement.willValidate")}} {{readonlyInline}}
  - : Is a boolean value indicating whether the button is a candidate for constraint validation. It is `false` if any conditions bar it from constraint validation, including: its `type` property is `reset` or `button`; it has a {{HTMLElement("datalist")}} ancestor; or the `disabled` property is set to `true`.
- {{domxref("HTMLButtonElement.validationMessage")}} {{readonlyInline}}
  - : Is a {{domxref("DOMString")}} representing the localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.
- {{domxref("HTMLButtonElement.validity")}} {{readonlyInline}}
  - : Is a {{domxref("ValidityState")}} representing the validity states that this button is in.
- {{domxref("HTMLButtonElement.value")}}
  - : Is a {{domxref("DOMString")}} representing the current form control value of the button.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}_

| Name                                    | Return Type     | Description                                 |
| --------------------------------------- | --------------- | ------------------------------------------- |
| `checkValidity()`                       | A boolean value | Not supported for reset or button elements. |
| `reportValidity()`                      | A boolean value | Not supported for reset or button elements. |
| `setCustomValidity(in DOMString error)` | `void`          | Not supported for reset or button elements. |

With Gecko-based browser, use the {{cssxref(":-moz-submit-invalid")}} pseudo-class to style submit buttons based on the validation of a form.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{HTMLElement("button")}}
