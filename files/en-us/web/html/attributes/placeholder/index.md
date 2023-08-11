---
title: "HTML attribute: placeholder"
slug: Web/HTML/Attributes/placeholder
page-type: html-attribute
browser-compat:
  - html.elements.input.placeholder
  - html.elements.textarea.placeholder
---

{{HTMLSidebar}}

The **`placeholder`** attribute specifies a short hint ,a word or phrase, that describes the expected value of an input. A hint could be a sample value or a short description containing the format of the expected value. The attribute, if specified, must have a value that contains no U+000A LINE FEED (LF) or U+000D CARRIAGE RETURN (CR) characters.

The **`placeholder`** attribute is supported by the following input types: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}`, and `{{HTMLElement("input/password", "password")}}`. It is also supported by the `{{HTMLElement("textarea")}}` element.

> **Note:** For a longer hint, or other advisory text, the title attribute is more appropriate.

> **Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they don't replace a proper label.

## Example

### HTML

```html
<form>
  <div class="group">
    <label>Without placeholder:</label>
    <input type="text" />
  </div>
  <div class="group">
    <label>With placeholder:</label>
    <input type="text" placeholder="Enter your name" />
  </div>
</form>
```

### Result

{{EmbedLiveSample('Placeholder')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML attribute: title](/en-US/docs/Web/HTML/Global_attributes/title)
- [CSS selector `::placeholder`](/en-US/docs/Web/CSS/::placeholder)
