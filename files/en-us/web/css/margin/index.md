---
title: margin
slug: Web/CSS/margin
page-type: css-shorthand-property
browser-compat: css.properties.margin
---

{{CSSRef}}

The **`margin`** [CSS](/en-US/docs/Web/CSS) shorthand property sets the [margin area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin_area) on all four sides of an element.

{{EmbedInteractiveExample("pages/css/margin.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

## Syntax

```css
/* Apply to all four sides */
margin: 1em;
margin: -3px;

/* top and bottom | left and right */
margin: 5% auto;

/* top | left and right | bottom */
margin: 1em auto 2em;

/* top | right | bottom | left */
margin: 2px 1em 0 auto;

/* Global values */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

The `margin` property may be specified using one, two, three, or four values. Each value is a {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}}, or the keyword `auto`. Negative values draw the element closer to its neighbors than it would be by default.

- When **one** value is specified, it applies the same margin to **all four sides**.
- When **two** values are specified, the first margin applies to the **top and bottom**, the second to the **left and right**.
- When **three** values are specified, the first margin applies to the **top**, the second to the **right and left**, the third to the **bottom**.
- When **four** values are specified, the margins apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

### Values

- {{cssxref("length")}}
  - : The size of the margin as a fixed value.
- {{cssxref("percentage")}}
  - : The size of the margin as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref("writing-mode")}}) of the [containing block](/en-US/docs/Web/CSS/Containing_block).
- `auto`
  - : The browser selects a suitable margin to use. For example, in certain cases this value can be used to center an element.

## Description

This property can be used to set a margin on all four sides of an element. Margins create extra space _around_ an element, unlike {{cssxref("padding")}}, which creates extra space _within_ an element.

The top and bottom margins have no effect on _non-[replaced](/en-US/docs/Web/CSS/Replaced_element)_ inline elements, such as {{HTMLElement("span")}} or {{HTMLElement("code")}}.

### Horizontal centering

To center something horizontally in modern browsers, you can use {{cssxref("display")}}`: flex;` {{cssxref("justify-content")}}`: center;`.

However, in older browsers like IE8-9 that do not support Flexible Box Layout, these are not available. In order to center an element inside its parent, use `margin: 0 auto;`.

### Margin collapsing

Elements' top and bottom margins are sometimes collapsed into a single margin that is equal to the larger of the two margins. See [Mastering margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) for more information.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Simple example

#### HTML

```html
<div class="center">This element is centered.</div>

<div class="outside">This element is positioned outside of its container.</div>
```

#### CSS

```css
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{ EmbedLiveSample('Simple_example','100%',120) }}

### More examples

```css
margin: 5%; /* All sides: 5% margin */

margin: 10px; /* All sides: 10px margin */

margin: 1.6em 20px; /* top and bottom: 1.6em margin */
/* left and right: 20px margin */

margin: 10px 3% -1em; /* top:            10px margin */
/* left and right: 3% margin   */
/* bottom:         -1em margin */

margin: 10px 3px 30px 5px; /* top:    10px margin */
/* right:  3px margin  */
/* bottom: 30px margin */
/* left:   5px margin  */

margin: 2em auto; /* top and bottom: 2em margin   */
/* Box is horizontally centered */

margin: auto; /* top and bottom: 0 margin     */
/* Box is horizontally centered */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- The mapped logical properties: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}} and the shorthands {{cssxref("margin-block")}} and {{cssxref("margin-inline")}}
