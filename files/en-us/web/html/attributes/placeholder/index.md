---
title: "HTML attribute: placeholder"
short-title: placeholder
slug: Web/HTML/Attributes/placeholder
page-type: html-attribute
browser-compat:
  - html.elements.input.placeholder
  - html.elements.textarea.placeholder
---

{{HTMLSidebar}}

The **`placeholder`** attribute defines the text displayed in a form control when the control has no value. The placeholder text should provide a brief hint to the user as to the expected type of data that should be entered into the control.

Effective placeholder text includes a word or short phrase that hints at the expected data type, not an explanation or prompt. The placeholder must not be used instead of a {{HTMLElement("label")}}. As the placeholder is not visible if the value of the form control is not null, using `placeholder` instead of a `<label>` for a prompt harms usability and accessibility.

The `placeholder` attribute is supported by the following input types: `{{HTMLElement("input/text", "text")}}`, `{{HTMLElement("input/search", "search")}}`, `{{HTMLElement("input/url", "url")}}`, `{{HTMLElement("input/tel", "tel")}}`, `{{HTMLElement("input/email", "email")}}`, and `{{HTMLElement("input/password", "password")}}`. It is also supported by the `{{HTMLElement("textarea")}}` element. The [example](#example) below shows the `placeholder` attribute in use to explain the expected format of an input field.

> [!NOTE]
> Except in `{{HTMLElement("textarea")}}` elements, the `placeholder` attribute can't include any line feeds (LF) or carriage returns (CR). If either is included in the value, the placeholder text will be clipped.

## Accessibility concerns

Placeholders should only be used to show an example of the type of data that should be entered into a form; never as a replacement for a `<label>` element; doing so harms accessibility and user experience.

The `<label>` text is visually and programmatically associated with its corresponding form control. Screen readers don't announce placeholder content by default, but they do announce label content; it's the label that informs assistive technology users what data should be entered in the control. Labels also improve user experience for users of pointing devices: When a user clicks, touches, or taps a `<label>`, focus is moved to the label's associated form control.

Placeholders can not be relied upon as a replacement for a label even for those not relying on assistive technology. Placeholder text is displayed at lower color contrast than the default form control text. This is by design, as you don't want users to be confused by what is placeholder text versus what is a filled-in form field. However, this lack of contrast can cause issues for low-vision users. Additionally, placeholder text disappears from form fields when users start entering text. If the placeholder text contains instructional information or examples that disappear, it can be confusing to users with cognitive issues and can make the form inaccessible if the placeholder contained the label.

## Example

### HTML

```html
<form action="/en-US/docs/Web/HTML/Attributes/placeholder">
  <label for="name">Enter your name:</label>
  <input type="text" id="name" name="name" placeholder="e.g. Mike Shinoda" />
  <button type="submit">Submit</button>
</form>
```

### Result

{{EmbedLiveSample('Example', '150px', '150px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`title`](/en-US/docs/Web/HTML/Global_attributes/title)
- CSS [`:placeholder-shown`](/en-US/docs/Web/CSS/:placeholder-shown) pseudo-class selector
- CSS [`::placeholder`](/en-US/docs/Web/CSS/::placeholder) pseudo-element selector
