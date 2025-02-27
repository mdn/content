---
title: :in-range
slug: Web/CSS/:in-range
page-type: css-pseudo-class
browser-compat: css.selectors.in-range
---

{{CSSRef}}

The **`:in-range`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an {{htmlelement("input")}} element whose current value is within the range limits specified by the [`min`](/en-US/docs/Web/HTML/Element/input#min) and [`max`](/en-US/docs/Web/HTML/Element/input#max) attributes.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-in-range.html", "tabbed-shorter")}}

This pseudo-class is useful for giving the user a visual indication that a field's current value is within the permitted limits.

> [!NOTE]
> This pseudo-class only applies to elements that have (and can take) a range limitation. In the absence of such a limitation, the element can neither be "in-range" nor "out-of-range."

## Syntax

```css
:in-range {
  /* ... */
}
```

## Examples

### HTML

```html
<form action="" id="form1">
  <ul>
    Values between 1 and 10 are valid.
    <li>
      <input
        id="value1"
        name="value1"
        type="number"
        placeholder="1 to 10"
        min="1"
        max="10"
        value="12"
        required />
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
  background-color: rgb(0 255 0 / 25%);
}

input:out-of-range {
  background-color: rgb(255 0 0 / 25%);
  border: 2px solid red;
}

input:in-range + label::after {
  content: "okay.";
}

input:out-of-range + label::after {
  content: "out of range!";
}
```

### Result

{{EmbedLiveSample('Examples', 600, 140)}}

> [!NOTE]
> An empty `<input>` does not count as out of range, and will not be selected using the `:out-of-range` pseudo-class selector. The [`:blank`](/en-US/docs/Web/CSS/:blank) pseudo-class exists to select blank inputs, although at the time of writing this is experimental and not well-supported. You could also use the `required` attribute and the [`:invalid`](/en-US/docs/Web/CSS/:invalid) pseudo-class to provide more general logic and styling for making inputs mandatory (`:invalid` will style blank _and_ out-of-range inputs).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":out-of-range")}}
- [Form data validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
