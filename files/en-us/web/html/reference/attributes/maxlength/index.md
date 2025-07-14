---
title: "HTML attribute: maxlength"
short-title: maxlength
slug: Web/HTML/Reference/Attributes/maxlength
page-type: html-attribute
browser-compat:
  - html.elements.input.maxlength
  - html.elements.textarea.maxlength
sidebar: htmlsidebar
---

The **`maxlength`** attribute defines the maximum [string length](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) that the user can enter into an {{htmlelement('input')}} or {{htmlelement('textarea')}}. The attribute must have an integer value of 0 or higher.

The length is measured in {{glossary("UTF-16", "UTF-16 code units")}}, which is often but not always equal to the number of characters. If no `maxlength` is specified, or an invalid value is specified, the input has no maximum length.

Any `maxlength` value must be greater than or equal to the value of [`minlength`](/en-US/docs/Web/HTML/Reference/Attributes/minlength), if present and valid. The input will fail constraint validation if the length of the text value of the field is greater than maxlength UTF-16 code units long. Constraint validation is only applied when the value is changed by the user.

### Constraint validation

While the browser will generally prevent user from entering more text than the maxlength attribute allows, should the length be longer than the maxlength allows, the read-only {{domxref("ValidityState.tooLong", "tooLong")}} property of a {{domxref("ValidityState")}} object will be true.

{{InteractiveExample("HTML Demo: maxlength", "tabbed-shorter")}}

```html interactive-example
<label for="name">Product name:</label>
<input
  id="name"
  name="name"
  type="text"
  value="Shampoo"
  minlength="3"
  maxlength="20"
  required />

<label for="description">Product description:</label>
<textarea
  id="description"
  name="description"
  minlength="10"
  maxlength="40"
  required></textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid,
textarea:valid {
  background-color: palegreen;
}
```

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

- [`minlength`](/en-US/docs/Web/HTML/Reference/Attributes/minlength)
- [`size`](/en-US/docs/Web/HTML/Reference/Attributes/size)
- [`pattern`](/en-US/docs/Web/HTML/Reference/Attributes/pattern)
- [Constraint validation](/en-US/docs/Web/HTML/Guides/Constraint_validation)
- [Form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- {{htmlelement('input')}}
