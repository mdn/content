---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
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

- [`HTMLFieldSetElement.disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#disabled_fieldset)
  - : A boolean value reflecting the {{htmlattrxref("disabled", "fieldset")}} HTML attribute, indicating whether the user can interact with the control.
- [`HTMLFieldSetElement.elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements){{ReadOnlyInline}}
  - : The elements belonging to this field set. The type of this property depends on the version of the spec that is implemented by the browser.
- [`HTMLFieldSetElement.form`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form){{ReadOnlyInline}}
  - : An {{domxref("HTMLFormControlsCollection")}} or {{domxref("HTMLCollection")}} referencing the containing form element, if this element is in a form.
    If the field set is not a descendant of a form element, then the attribute can be the ID of any form element in the same document it is related to, or the `null` value if none matches.
- [`HTMLFieldSetElement.name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#attr-name)
  - : A string reflecting the {{htmlattrxref("name", "fieldset")}} HTML attribute, containing the name of the field set. This can be used when accessing the field set in JavaScript. It is _not_ part of the data which is sent to the server.
- [`HTMLFieldSetElement.name`](https://developer.mozilla.org/en-US/docs/Glossary/Type){{ReadOnlyInline}}
  - : The string "`fieldset`".
- [`HTMLFieldSetElement.validationMessage`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/validationMessage)
  - : A string representing a localized message that describes the validation constraints that the element does not satisfy (if any). This is the empty string if the element is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.
- [`HTMLFieldSetElement.validity`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/validit)
  - : A {{domxref("ValidityState")}} representing the validity states that this element is in.
- [`HTMLFieldSetElement.willValidate`](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation)
  - : A boolean value `false`, because {{HTMLElement("fieldset")}} objects are never candidates for constraint validation.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- [`HTMLFieldSetElement.checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)
  - : Always returns `true` because {{HTMLElement("fieldset")}} objects are never candidates for constraint validation.
- [`HTMLFieldSetElement.reportValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity)
  - : Always returns `true` because {{HTMLElement("fieldset")}} objects are never candidates for constraint validation.
- [`HTMLFieldSetElement.setCustomValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity)
  - : Sets a custom validity message for the field set. If this message is not the empty string, then the field set is suffering from a custom validity error, and does not validate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("fieldset") }}.
