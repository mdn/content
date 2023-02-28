---
title: "Custom properties (--*): CSS variables"
slug: Web/CSS/--*
page-type: guide
browser-compat: css.properties.custom-property
---

{{CSSRef}}

Property names that are prefixed with `--`, like `--example-name`, represent _custom properties_ that contain a value that can be used in other declarations using the {{cssxref("var", "var()")}} function.

Custom properties are scoped to the element(s) they are declared on, and participate in the cascade: the value of such a custom property is that from the declaration decided by the cascading algorithm.

{{CSSInfo}}

## Syntax

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

- `<declaration-value>`
  - : This value matches any sequence of one or more tokens, so long as the sequence does not contain an disallowed token. It represents the entirety of what a valid declaration can have as its value.

> **Note:** Custom property names are case sensitive — `--my-color` will be treated as a separate custom property to `--My-color`.

## Example

### HTML

```html
<p id="firstParagraph">
  This paragraph should have a blue background and yellow text.
</p>
<p id="secondParagraph">
  This paragraph should have a yellow background and blue text.
</p>
<div id="container">
  <p id="thirdParagraph">
    This paragraph should have a green background and yellow text.
  </p>
</div>
```

### CSS

```css
:root {
  --first-color: #16f;
  --second-color: #ff7;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #290;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### Result

{{EmbedLiveSample('Example', 500, 130)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS variables](/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- The {{cssxref("var", "var()")}} function
