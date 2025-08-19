---
title: "HTML attribute: form"
short-title: form
slug: Web/HTML/Reference/Attributes/form
page-type: html-attribute
browser-compat:
  - html.elements.button.form
  - html.elements.fieldset.form
  - html.elements.input.form
  - html.elements.label.form
  - html.elements.meter.form
  - html.elements.object.form
  - html.elements.output.form
  - html.elements.progress.form
  - html.elements.select.form
  - html.elements.textarea.form
sidebar: htmlsidebar
---

The `form` HTML attribute indicates the `<form>` element with which the current element is associated. This attribute requires the `id` of a `<form>` element in the same document. This attribute applies to the following elements: `<button>`, `<fieldset>`, `<input>`, `<label>`, `<meter>`, `<object>`, `<output>`, `<progress>`, `<select>`, and `<textarea>`.

## Values

The `form` HTML attribute's value must be the `id` of a `<form>` element in the same document. This links the current element with the specified `<form>`.

## Examples

```html
<form id="form">
    <input type="text" name="username" value="david">
</form>
<!-- Password input outside the form -->
<input form="form" type="password" name="password" value="secret">
<!-- Select outside the form -->
<select form="form" name="options">
    <option value="A">A</option>
    <option value="B">B</option>
</select>
<!-- Textarea outside the form -->
<textarea rows="4" name="description" form="form">Hello, World!</textarea>
<!-- Submit button outside the form -->
<button type="submit" form="form">Submit</button>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{compat}}
