---
title: ':checked'
slug: Web/CSS/:checked
tags:
  - ':checked'
  - CSS
  - Checked
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Toggled
  - Web
  - button
  - checkbox
  - radio
browser-compat: css.selectors.checked
---
{{CSSRef}}

The **`:checked`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents any **radio** ([`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio)), **checkbox** ([`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox)), or **option** ({{HTMLElement("option")}} in a {{HTMLElement("select")}}) element that is checked or toggled to an `on` state.

```css
/* Matches any checked/selected radio, checkbox, or option */
:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

The user can engage this state by checking/selecting an element, or disengage it by unchecking/deselecting the element.

> **Note:** Because browsers often treat `<option>`s as [replaced elements](/en-US/docs/Web/CSS/Replaced_element), the extent to which they can be styled with the `:checked` pseudo-class varies from browser to browser.

## Syntax

{{csssyntax}}

## Examples

### Basic example

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes">
  <label for="yes">Yes</label>

  <input type="radio" name="my-input" id="no">
  <label for="no">No</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in">
  <label for="opt-in">Check me!</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Apples</option>
  <option value="opt2">Grapes</option>
  <option value="opt3">Pears</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* Labels for checked inputs */
input:checked + label {
  color: red;
}

/* Radio element, when checked */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Checkbox element, when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Option elements, when selected */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

### Toggling elements with a hidden checkbox

This example utilizes the `:checked` pseudo-class to let the user toggle content based on the state of a checkbox, all without using [JavaScript](/en-US/docs/Web/JavaScript).

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr><th>Column #1</th><th>Column #2</th><th>Column #3</th></tr>
  </thead>
  <tbody>
    <tr class="expandable"><td>[more text]</td><td>[more text]</td><td>[more text]</td></tr>
    <tr><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
    <tr><td>[cell text]</td><td>[cell text]</td><td>[cell text]</td></tr>
    <tr class="expandable"><td>[more text]</td><td>[more text]</td><td>[more text]</td></tr>
    <tr class="expandable"><td>[more text]</td><td>[more text]</td><td>[more text]</td></tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Toggle hidden rows</label>
```

#### CSS

```css
/* Hide the toggle checkbox */
#expand-toggle {
  display: none;
}

/* Hide expandable content by default */
.expandable {
  visibility: collapse;
  background: #ddd;
}

/* Style the button */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* Show hidden content when the checkbox is checked */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Style the button when the checkbox is checked */
#expand-toggle:checked ~ #expand-btn {
  background-color: #ccc;
}
```

#### Result

{{EmbedLiveSample("Toggling_elements_with_a_hidden_checkbox", "auto", 220)}}

### Image gallery

You can use the `:checked` pseudo-class to build an image gallery with full-size images that show only when the user clicks on a thumbnail. See [this demo](/@api/deki/files/6268/=css-checked-gallery.zip "css-checked-gallery.zip") for a possible cue.

> **Note:** For an analogous effect, but based on the [`:hover`](/en-US/docs/Web/CSS/:hover) pseudo-class and without hidden radioboxes, see [this demo](/@api/deki/files/6247/=css-gallery.zip "css-gallery.zip"), taken from the [:hover](/en-US/docs/Web/CSS/:hover) reference page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web forms — working with user data](/en-US/docs/Learn/Forms)
- [Styling web forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- Related HTML elements: [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio), {{HTMLElement("select")}}, and {{HTMLElement("option")}}
- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
