---
title: ":placeholder-shown"
slug: Web/CSS/:placeholder-shown
page-type: css-pseudo-class
browser-compat: css.selectors.placeholder-shown
---

{{CSSRef}}

The **`:placeholder-shown`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any {{HTMLElement("input")}} or {{HTMLElement("textarea")}} element that is currently displaying [placeholder text](/en-US/docs/Web/HTML/Element/input#placeholder).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-placeholder-shown.html", "tabbed-shorter")}}

## Syntax

```css
:placeholder-shown {
  /* ... */
}
```

## Examples

### Basic example

This example applies special font and border styles when the placeholder is shown.

#### HTML

```html
<input placeholder="Type something here!" />
```

#### CSS

```css
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: teal;
  color: purple;
  font-style: italic;
}
```

#### Result

{{EmbedLiveSample("Basic_example", 200, 80)}}

### Overflowing text

When form fields are too small, placeholder text can get cropped in an undesirable way. You can use the {{cssxref("text-overflow")}} property to alter the way overflowing text is displayed.

#### HTML

```html
<input id="input1" placeholder="Name, Rank, and Serial Number" /> <br /><br />
<input id="input2" placeholder="Name, Rank, and Serial Number" />
```

#### CSS

```css
#input2:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### Result

{{EmbedLiveSample("Overflowing_text", 200, 80)}}

### Customized input field

The following example highlights the Student ID field with a custom style.

#### HTML

```html
<form id="test">
  <p>
    <label for="name">Enter Student Name:</label>
    <input id="name" placeholder="Student Name" />
  </p>
  <p>
    <label for="branch">Enter Student Branch:</label>
    <input id="branch" placeholder="Student Branch" />
  </p>
  <p>
    <label for="sid">Enter Student ID:</label>
    <input
      type="number"
      pattern="[0-9]{8}"
      title="8 digit ID"
      id="sid"
      class="studentid"
      placeholder="8 digit id" />
  </p>
  <input type="submit" />
</form>
```

#### CSS

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### Result

{{EmbedLiveSample("Customized_input_field", 200, 180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{CSSxRef("::placeholder")}} pseudo-element styles the placeholder _itself_.
- Related HTML elements: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML forms](/en-US/docs/Learn/Forms)
