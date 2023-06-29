---
title: "HTML attribute: maxlength"
slug: Web/HTML/Attributes/maxlength
page-type: html-attribute
browser-compat:
  - html.elements.input.maxlength
  - html.elements.textarea.maxlength
---

{{HTMLSidebar}}

The **`maxlength`** attribute defines the maximum string length the user can enter into an {{htmlelement('input')}} or {{htmlelement('textarea')}}. This must be an integer value 0 or higher. The string [length](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) is measured in UTF-16 code units, which is usually equivalent to the number of characters for most scripts, although not always — [Strings with length not equal to the number of characters](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters) has some examples.

If no maxlength is specified, or an invalid value is specified, the input or textarea has no maximum length.

Any `maxlength` value must be greater than or equal to the value of [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength), if present and valid. The input will fail constraint validation if the length of the text value of the field is greater than maxlength UTF-16 code units long. Constraint validation is only applied when the value is changed by the user.

### Constraint validation

While the browser will generally prevent user from entering more text than the maxlength attribute allows, should the length be longer than the maxlength allows, the read-only {{domxref("ValidityState.tooLong", "tooLong")}} property of a {{domxref("ValidityState")}} object will be true.

{{EmbedInteractiveExample("pages/tabbed/attribute-maxlength.html", "tabbed-shorter")}}

## Examples

```html
<input type="password" maxlength="4" />
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength)
- [`size`](/en-US/docs/Web/HTML/Attributes/size)
- [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern)
- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Form validation](/en-US/docs/Learn/Forms/Form_validation)
- {{htmlelement('input')}}
