---
title: 'HTML attribute: minlength'
slug: Web/HTML/Attributes/minlength
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - Input
  - Reference
  - minlength
  - textarea
browser-compat:
  - html.elements.input.minlength
  - html.elements.textarea.minlength
---

{{HTMLSidebar}}

The **`minlength`** attribute defines the minimum number of characters (as UTF-16 code units) the user can enter into an {{htmlelement('input')}} or {{htmlelement('textarea')}}. This must be an integer value 0 or higher. If no minlength is specified, or an invalid value is specified, the input has no minimum length. This value must be less than or equal to the value of [maxlength](/en-US/docs/Web/HTML/Attributes/maxlength), otherwise the value will never be valid, as it is impossible to meet both criteria.

The input will fail constraint validation if the length of the text value of the field is less than minlength UTF-16 code units long, with {{domxref('validityState.tooShort')}} returning `true`. Constraint validation is only applied when the value is changed by the user. Once submission fails, some browsers will display an error message indicating the minimum length required and the current length.

## Examples

By adding `minlength="5"`, the value must either be empty or five characters or longer to be valid.

```html
<label for="fruit">Enter a fruit name that is at least 5 letters long</label> <input type="text" minlength="5" id="fruit">
```

We can use pseudoclasses to style the element based on whether the value is valid. The value will be valid as long as it is either null (empty) or five or more characters long. _Lime_ is invalid, _lemon is valid_.

```css
input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength)
- [`size`](/en-US/docs/Web/HTML/Attributes/size)
- [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern)
- [Constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation)
- [Constraint validation API](/en-US/docs/Web/API/Constraint_validation)
- {{htmlelement('input')}}
