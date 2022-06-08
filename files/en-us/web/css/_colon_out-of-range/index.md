---
title: ':out-of-range'
slug: Web/CSS/:out-of-range
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
  - UI Selector
browser-compat: css.selectors.out-of-range
---
{{CSSRef}}

The **`:out-of-range`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an {{htmlelement("input")}} element whose current value is outside the range limits specified by the {{htmlattrxref("min", "input")}} and {{htmlattrxref("max","input")}} attributes.

```css
/* Selects any <input>, but only when it has a range
   specified, and its value is outside that range */
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
}
```

This pseudo-class is useful for giving the user a visual indication that a field's current value is outside the permitted limits.

> **Note:** This pseudo-class only applies to elements that have (and can take) a range limitation. In the absence of such a limitation, the element can neither be "in-range" nor "out-of-range."

## Syntax

```
:out-of-range
```

## Examples

### HTML

```html
<form action="" id="form1">
 <p>Values between 1 and 10 are valid.</p>
  <ul>
    <li>
      <input id="value1" name="value1" type="number" placeholder="1 to 10" min="1" max="10" value="12">
      <label for="value1">Your value is </label>
    </li>
  </ul>
</form>
```

### CSS

```css
li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}

input:in-range + label::after {
  content: 'okay.';
}

input:out-of-range + label::after {
  content: 'out of range!';
}
```

### Result

{{EmbedLiveSample('Examples', 600, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":in-range")}}
- [Form data validation](/en-US/docs/Learn/Forms/Form_validation)
