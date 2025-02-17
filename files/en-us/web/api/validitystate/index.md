---
title: ValidityState
slug: Web/API/ValidityState
page-type: web-api-interface
browser-compat: api.ValidityState
---

{{APIRef("HTML DOM")}}

The **`ValidityState`** interface represents the _validity states_ that an element can be in, with respect to constraint validation. Together, they help explain why an element's value fails to validate, if it's not valid.

## Instance properties

For each of these Boolean properties, a value of `true` indicates that the specified reason validation may have failed is true, with the exception of the `valid` property, which is `true` if the element's value obeys all constraints.

- {{domxref("ValidityState.badInput", "badInput")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the user has provided input that the browser is unable to convert.
- {{domxref("ValidityState.customError", "customError")}} {{ReadOnlyInline}}
  - : A boolean value indicating whether the element's custom validity message has been set to a non-empty string by calling the element's {{domxref('HTMLInputElement.setCustomValidity', 'setCustomValidity()')}} method.
- {{domxref("ValidityState.patternMismatch", "patternMismatch")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the value does not match the specified [`pattern`](/en-US/docs/Web/HTML/Element/input#pattern), and `false` if it does match. If `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
- {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the value is greater than the maximum specified by the [`max`](/en-US/docs/Web/HTML/Element/input#max) attribute, or `false` if it is less than or equal to the maximum. If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} and CSS pseudo-classes.
- {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the value is less than the minimum specified by the [`min`](/en-US/docs/Web/HTML/Element/input#min) attribute, or `false` if it is greater than or equal to the minimum. If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
- {{domxref("ValidityState.stepMismatch", "stepMismatch")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the value does not fit the rules determined by the [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute (that is, it's not evenly divisible by the step value), or `false` if it does fit the step rule. If `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
- {{domxref("ValidityState.tooLong", "tooLong")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the value exceeds the specified `maxlength` for {{domxref("HTMLInputElement")}} or {{domxref("HTMLTextAreaElement")}} objects, or `false` if its length is less than or equal to the maximum length. _Note: This property is never `true` in Gecko, because elements' values are prevented from being longer than `maxlength`._ If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
- {{domxref("ValidityState.tooShort", "tooShort")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the value fails to meet the specified `minlength` for {{domxref("HTMLInputElement")}} or {{domxref("HTMLTextAreaElement")}} objects, or `false` if its length is greater than or equal to the minimum length. If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
- {{domxref("ValidityState.typeMismatch", "typeMismatch")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the value is not in the required syntax (when [`type`](/en-US/docs/Web/HTML/Element/input#type) is `email` or `url`), or `false` if the syntax is correct. If `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
- {{domxref("ValidityState.valid", "valid")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the element meets all its validation constraints, and is therefore considered to be valid, or `false` if it fails any constraint. If `true`, the element matches the {{cssxref(":valid")}} CSS pseudo-class; the {{cssxref(":invalid")}} CSS pseudo-class otherwise.
- {{domxref("ValidityState.valueMissing", "valueMissing")}} {{ReadOnlyInline}}
  - : A boolean value that is `true` if the element has a [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute, but no value, or `false` otherwise. If `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Tutorial: Form data validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
