---
title: border
slug: Web/CSS/border
page-type: css-shorthand-property
browser-compat: css.properties.border
---

{{CSSRef("CSS Borders")}}

The **`border`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets an element's border. It sets the values of {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, and {{Cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/border.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`border-color`](/en-US/docs/Web/CSS/border-color)
- [`border-style`](/en-US/docs/Web/CSS/border-style)
- [`border-width`](/en-US/docs/Web/CSS/border-width)

## Syntax

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;

/* Global values */
border: inherit;
border: initial;
border: revert;
border: revert-layer;
border: unset;
```

The `border` property may be specified using one, two, or three of the values listed below. The order of the values does not matter.

> **Note:** The border will be invisible if its style is not defined. This is because the style defaults to `none`.

### Values

- `<line-width>`
  - : Sets the thickness of the border. Defaults to `medium` if absent. See {{Cssxref("border-width")}}.
- `<line-style>`
  - : Sets the style of the border. Defaults to `none` if absent. See {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Sets the color of the border. Defaults to `currentcolor` if absent. See {{Cssxref("border-color")}}.

## Description

As with all shorthand properties, any omitted sub-values will be set to their [initial value](/en-US/docs/Web/CSS/initial_value). Importantly, `border` cannot be used to specify a custom value for {{cssxref("border-image")}}, but instead sets it to its initial value, i.e., `none`.

The `border` shorthand is especially useful when you want all four borders to be the same. To make them different from each other, however, you can use the longhand {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, and {{Cssxref("border-color")}} properties, which accept different values for each side. Alternatively, you can target one border at a time with the physical (e.g., {{Cssxref("border-top")}} ) and logical (e.g., {{Cssxref("border-block-start")}}) border properties.

### Borders vs. outlines

Borders and [outlines](/en-US/docs/Web/CSS/outline) are very similar. However, outlines differ from borders in the following ways:

- Outlines never take up space, as they are drawn outside of an element's content.
- According to the spec, outlines don't have to be rectangular, although they usually are.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a pink outset border

#### HTML

```html
<div>I have a border, an outline, and a box shadow! Amazing, isn't it?</div>
```

#### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

#### Result

{{EmbedLiveSample('Setting_a_pink_outset_border')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("border-width")}}
- {{Cssxref("border-style")}}
- {{Cssxref("border-color")}}
- {{Cssxref("outline")}}
- [Backgrounds and borders](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders)
- [Learn CSS: Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
