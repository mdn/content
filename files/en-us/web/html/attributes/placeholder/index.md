---
title: "HTML attribute: placeholder"
slug: Web/HTML/Attributes/placeholder
page-type: html-attribute
browser-compat:
  - html.elements.input.placeholder
  - html.elements.textarea.placeholder
---

{{HTMLSidebar}}

The **`placeholder`** defines the text displayed in a form control when the control has no value. The placeholder text provides a brief hint to the user as to the expected type of data that should be entered into the control.

The placeholder should be a word or short phrase that hints at the expected data type, not an explanation or prompt. The placeholder should not be used instead of a {{HTMLElement("label")}}. As the placeholder is not visible if the value of the form control is not null, using `placeholder` instead of a `<label>` for a prompt harms usability and accessibility.

The **`placeholder`** attribute is supported by the following input types: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}`, and `{{HTMLElement("input/password", "password")}}`. It is also supported by the `{{HTMLElement("textarea")}}` element. The [example](#example) below shows the `placeholder` attribute in use to explain the expected format of an input field.

> **Note:** The attribute, if specified, must have a value that contains no line feeds (LF) or carriage returns (CR) characters. If the value contains either LF or CR characters, the value will be clipped.

> **Note:** For a longer hint, or other advisory text, the {{HTMLElement("small")}} should be used.

> **Warning:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they don't replace a proper label as they are not semantically useful. This harms many users who are either older or people with disabilities. For example, older users may not understand that the placeholder text disappears when they start typing, and users with cognitive impairments may not understand that the placeholder text provides a hint.

## Example

### HTML

```html
<form action="/form_action.php">
    <label for="name">Enter your name:</label>
    <br>
    <input type="tel" id="name" name="name" placeholder="e.g. John Doe">
    <br><br>
    <input type="submit">
</form
```

### Result

{{EmbedLiveSample('Example', '150px', '150px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`title`](/en-US/docs/Web/HTML/Global_attributes/title)
- CSS [`:placeholder-shown`](/en-US/docs/Web/CSS/_colon_placeholder-shown) pseudo-class selector
- CSS [`::placeholder`](/en-US/docs/Web/CSS/::placeholder) pseudo-element selector
