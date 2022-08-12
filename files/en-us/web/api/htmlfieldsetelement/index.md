---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLFieldSetElement
---
{{APIRef("HTML DOM")}}

The **`HTMLFieldSetElement`** interface provides special properties and methods (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of {{ HTMLElement("fieldset") }} elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFieldSetElement.disabled")}}
  - : A boolean value reflecting the {{htmlattrxref("disabled", "fieldset")}} HTML attribute, indicating whether the user can interact with the control.
- {{domxref("HTMLFieldSetElement.elements")}} {{ReadOnlyInline}}
  - : The elements belonging to this field set. The type of this property depends on the version of the spec that is implemented by the browser.
- {{domxref("HTMLFieldSetElement.form")}} {{ReadOnlyInline}}
  - : An {{domxref("HTMLFormControlsCollection")}} or {{domxref("HTMLCollection")}} referencing the containing form element, if this element is in a form.
    If the field set is not a descendant of a form element, then the attribute can be the ID of any form element in the same document it is related to, or the `null` value if none matches.
- {{domxref("HTMLFieldSetElement.name")}}
  - : A string reflecting the {{htmlattrxref("name", "fieldset")}} HTML attribute, containing the name of the field set. This can be used when accessing the field set in JavaScript. It is _not_ part of the data which is sent to the server.
- {{domxref("HTMLFieldSetElement.type")}} {{ReadOnlyInline}}
  - : The string "`fieldset`".
- {{domxref("HTMLFieldSetElement.validationMessage")}}
  - : A string representing a localized message that describes the validation constraints that the element does not satisfy (if any). This is the empty string if the element is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.
- {{domxref("HTMLFieldSetElement.validity")}}
  - : A {{domxref("ValidityState")}} representing the validity states that this element is in.
- {{domxref("HTMLFieldSetElement.willValidate")}}
  - : A boolean value `false`, because {{HTMLElement("fieldset")}} objects are never candidates for constraint validation.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
  - : Always returns `true` because {{HTMLElement("fieldset")}} objects are never candidates for constraint validation.
- {{domxref("HTMLFieldSetElement.reportValidity()")}}
  - : Always returns `true` because {{HTMLElement("fieldset")}} objects are never candidates for constraint validation.
- {{domxref("HTMLFieldSetElement.setCustomValidity()")}}
  - : Sets a custom validity message for the field set. If this message is not the empty string, then the field set is suffering from a custom validity error, and does not validate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("fieldset") }}.
