---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
page-type: css-property
browser-compat: css.properties.text-emphasis-color
---

{{CSSRef}}

The **`text-emphasis-color`** [CSS](/en-US/docs/Web/CSS) property sets the color of emphasis marks. This value can also be set using the {{cssxref("text-emphasis")}} shorthand.

{{InteractiveExample("CSS Demo: text-emphasis-color")}}

```css interactive-example-choice
text-emphasis-color: currentColor;
```

```css interactive-example-choice
text-emphasis-color: red;
```

```css interactive-example-choice
text-emphasis-color: rgba(90, 200, 160, 0.8);
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-emphasis: filled;
}
```

## Syntax

```css
/* Initial value */
text-emphasis-color: currentcolor;

/* <color> */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgb(90 200 160 / 80%);
text-emphasis-color: transparent;

/* Global values */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: revert;
text-emphasis-color: revert-layer;
text-emphasis-color: unset;
```

### Values

- `<color>`
  - : Defines the color of the emphasis marks. If no color is present, it defaults to `currentcolor`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Emphasis with a color and custom character

#### CSS

```css
em {
  text-emphasis-color: green;
  text-emphasis-style: "*";
}
```

#### HTML

```html
<p>Here's an example:</p>

<em>This has emphasis marks!</em>
```

#### Result

{{EmbedLiveSample("Emphasis_with_a_color_and_custom_character", 450, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("&lt;color&gt;")}} data type
- The other emphasis mark related properties: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}}, and {{cssxref("text-emphasis-position")}}.
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
