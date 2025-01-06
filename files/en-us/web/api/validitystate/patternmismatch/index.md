---
title: "ValidityState: patternMismatch property"
short-title: patternMismatch
slug: Web/API/ValidityState/patternMismatch
page-type: web-api-instance-property
browser-compat: api.ValidityState.patternMismatch
---

{{APIRef("HTML DOM")}}

The read-only **`patternMismatch`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, does not conform to the constraints set by the element's [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute.

The `patternMismatch` property will be true if and only if the following conditions are all true:

- the field supports the [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute — which means the {{HTMLElement("input")}} is of `type` {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}}, or {{HTMLElement("input/search", "search")}}
- the [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute contains a valid regular expression
- the {{HTMLElement("input")}} value doesn't conform to the constraints set by the [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) value.

## Value

A boolean that is `true` if the `ValidityState` object does not conform to the constraints.

## Examples

Given the following:

```html
<p>
  <label
    >Enter your phone number in the format (123)456-7890 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit area code"
      size="2" />)-
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit prefix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-digit number"
      size="3" />
  </label>
</p>
```

Here we have 3 sections for a North American phone number with an implicit label encompassing all three components of the phone number, expecting 3-digits, 3-digits and 4-digits respectively, as defined by the [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern) attribute set on each.

If the values are too long or too short, or contain characters that aren't digits, `patternMismatch` will be true. When `true`, the element matches the {{cssxref(":invalid")}} CSS pseudo-classes.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 87)}}

Note, in this case, we get a `patternMismatch` not a {{domxref('validityState.tooLong')}} or {{domxref('validityState.tooShort')}} if the values are too long or too short because it is the pattern that is dictating the length of the value. Had we used [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength) and [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength) attributes instead, we may have seen {{domxref('validityState.tooLong')}} or {{domxref('validityState.tooShort')}} being true.

> [!NOTE]
> The `{{HTMLElement("input/email", "email")}}` input type requires, at minimum, a match of `x@y` and the `{{HTMLElement("input/url", "url")}}` type requires, at minimum, a match to x:, with no pattern attribute present. When invalid, the {{domxref('validityState.typeMismatch')}} will be true, if there is no pattern attribute (or if the pattern attribute is not valid for that input type).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
