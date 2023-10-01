---
title: "ElementInternals: setValidity() method"
short-title: setValidity()
slug: Web/API/ElementInternals/setValidity
page-type: web-api-instance-method
browser-compat: api.ElementInternals.setValidity
---

{{APIRef("DOM")}}

The **`setValidity()`** method of the {{domxref("ElementInternals")}} interface sets the validity of the element.

## Syntax

```js-nolint
setValidity(flags)
setValidity(flags, message)
setValidity(flags, message, anchor)
```

### Parameters

- `flags` {{Optional_Inline}}

  - : A dictionary object containing one or more flags indicating the validity state of the element:

    - `valueMissing`
      - : A boolean value that is `true` if the element has a [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute, but no value, or `false` otherwise. If `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
    - `typeMismatch`
      - : A boolean value that is `true` if the value is not in the required syntax (when [`type`](/en-US/docs/Web/HTML/Element/input#type) is `email` or `url`), or `false` if the syntax is correct. If `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
    - `patternMismatch`
      - : A boolean value that is `true` if the value does not match the specified [`pattern`](/en-US/docs/Web/HTML/Element/input#pattern), and `false` if it does match. If `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-class.
    - `tooLong`
      - : A boolean value that is `true` if the value exceeds the specified `maxlength` for {{domxref("HTMLInputElement")}} or {{domxref("HTMLTextAreaElement")}} objects, or `false` if its length is less than or equal to the maximum length. If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
    - `tooShort`
      - : A boolean value that is `true` if the value fails to meet the specified `minlength` for {{domxref("HTMLInputElement")}} or {{domxref("HTMLTextAreaElement")}} objects, or `false` if its length is greater than or equal to the minimum length. If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
    - `rangeUnderflow`
      - : A boolean value that is `true` if the value is less than the minimum specified by the [`min`](/en-US/docs/Web/HTML/Element/input#min) attribute, or `false` if it is greater than or equal to the minimum. If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
    - `rangeOverflow`
      - : A boolean value that is `true` if the value is greater than the maximum specified by the [`max`](/en-US/docs/Web/HTML/Element/input#max) attribute, or `false` if it is less than or equal to the maximum. If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} and CSS pseudo-classes.
    - `stepMismatch`
      - : A boolean value that is `true` if the value does not fit the rules determined by the [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute (that is, it's not evenly divisible by the step value), or `false` if it does fit the step rule. If `true`, the element matches the {{cssxref(":invalid")}} and {{cssxref(":out-of-range")}} CSS pseudo-classes.
    - `badInput`
      - : A boolean value that is `true` if the user has provided input that the browser is unable to convert.
    - `customError`
      - : A boolean value indicating whether the element's custom validity message has been set to a non-empty string by calling the element's {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} method.

    > **Note:** To set all flags to `false`, indicating that this element passes all constraints validation, pass in an empty object `{}`. In this case, you do not need to also pass a `message`.

- `message` {{Optional_Inline}}
  - : A string containing a message, which will be set if any `flags` are `true`. This parameter is only optional if all `flags` are `false`.
- `anchor` {{Optional_Inline}}
  - : An {{domxref("HTMLElement")}} which can be used by the user agent to report problems with this form submission.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the element does not have its `formAssociated` property set to `true`.
- {{jsxref("TypeError")}}
  - : Thrown if one or more `flags` is `true`.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if `anchor` is given, but the anchor is not a shadow-including descendant of the element.

## Examples

In the following example `setValidity` is called with an empty `flags` parameter to indicate that the element meets constraint validation rules.

```js
this.internals_.setValidity({});
```

In the following example `setValidity` is called with the flag `valueMissing` set to `true`. A `message` parameter must then also be passed containing a message.

```js
this.internals_.setValidity({ valueMissing: true }, "my message");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
