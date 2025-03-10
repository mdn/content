---
title: :indeterminate
slug: Web/CSS/:indeterminate
page-type: css-pseudo-class
browser-compat: css.selectors.indeterminate
---

{{CSSRef}}

The **`:indeterminate`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any form element whose state is indeterminate, such as checkboxes that have been set to an [`indeterminate`](/en-US/docs/Web/API/HTMLInputElement/indeterminate) state with JavaScript, radio buttons which are members of a group in which all radio buttons are unchecked, and {{HTMLElement("progress")}} elements with no `value` attribute.

```css
/* Selects any <input> whose state is indeterminate */
input:indeterminate {
  background: lime;
}
```

Elements targeted by this selector are:

- [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox) elements whose [`indeterminate`](/en-US/docs/Web/API/HTMLInputElement/indeterminate) property is set to `true`
- [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio) elements, when all radio buttons with the same `name` value in the form are unchecked
- {{HTMLElement("progress")}} elements in an indeterminate state

## Syntax

```plain
:indeterminate
```

## Examples

### Checkbox & radio button

This example applies special styles to the labels associated with indeterminate form fields.

#### HTML

```html
<fieldset>
  <legend>Checkbox</legend>
  <div>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">This checkbox label starts out lime.</label>
  </div>
</fieldset>

<fieldset>
  <legend>Radio</legend>
  <div>
    <input type="radio" id="radio1" name="radioButton" value="val1" />
    <label for="radio1">First radio label starts out lime.</label>
  </div>
  <div>
    <input type="radio" id="radio2" name="radioButton" value="val2" />
    <label for="radio2">Second radio label also starts out lime.</label>
  </div>
</fieldset>
```

#### CSS

```css
input:indeterminate + label {
  background: lime;
}
```

```css hidden
fieldset {
  padding: 1em 0.75em;
}

fieldset:first-of-type {
  margin-bottom: 1.5rem;
}

fieldset:not(:first-of-type) > div:not(:last-child) {
  margin-bottom: 0.5rem;
}
```

#### JavaScript

```js
const inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}
```

#### Result

{{EmbedLiveSample('Checkbox_radio_button', 'auto', 230)}}

### Progress bar

#### HTML

```html
<progress></progress>
```

#### CSS

```css
progress {
  margin: 4px;
}

progress:indeterminate {
  width: 80vw;
  height: 20px;
}
```

#### Result

{{EmbedLiveSample('Progress_bar', 'auto', 30)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web forms — Working with user data](/en-US/docs/Learn_web_development/Extensions/Forms)
- [Styling web forms](/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- The [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox) element's [`indeterminate`](/en-US/docs/Web/API/HTMLInputElement/indeterminate) property
- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface which implements it.
- The {{cssxref(":checked")}} CSS selector lets you style checkboxes based on whether they're checked or not
