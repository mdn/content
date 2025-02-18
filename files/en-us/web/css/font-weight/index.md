---
title: font-weight
slug: Web/CSS/font-weight
page-type: css-property
browser-compat: css.properties.font-weight
---

{{CSSRef}}

The **`font-weight`** [CSS](/en-US/docs/Web/CSS) property sets the weight (or boldness) of the font. The weights available depend on the {{cssxref("font-family")}} that is currently set.

{{EmbedInteractiveExample("pages/css/font-weight.html")}}

## Syntax

```css
/* <font-weight-absolute> keyword values */
font-weight: normal;
font-weight: bold;

/* <font-weight-absolute> numeric values [1,1000] */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400; /* normal */
font-weight: 500;
font-weight: 600;
font-weight: 700; /* bold */
font-weight: 800;
font-weight: 900;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: revert-layer;
font-weight: unset;
```

The `font-weight` property is specified using either a `<font-weight-absolute>` value or a relative weight value, as listed below.

### Values

- `normal`

  - : Normal font weight. Same as `400`.

- `bold`

  - : Bold font weight. Same as `700`.

- `<number>`

  - : A {{cssxref("&lt;number&gt;")}} value between 1 and 1000, both values included. Higher numbers represent weights that are bolder than (or as bold as) lower numbers. This allows fine-grain control for [variable fonts](#variable_fonts). For non-variable fonts, if the exact specified weight is unavailable, a [fallback weight](#fallback_weights) algorithm is used — numeric values that are divisible by 100 correspond to common weight names, as described in the [Common weight name mapping](#common_weight_name_mapping) section below.

- `lighter`

  - : One relative font weight lighter than the parent element. Note that only four font weights are considered for relative weight calculation; see the [Meaning of relative weights](#meaning_of_relative_weights) section below.

- `bolder`
  - : One relative font weight heavier than the parent element. Note that only four font weights are considered for relative weight calculation; see the [Meaning of relative weights](#meaning_of_relative_weights) section below.

### Fallback weights

If the exact weight given is unavailable, then the following rule is used to determine the weight actually rendered:

- If the target weight given is between `400` and `500` inclusive:

  - Look for available weights between the target and `500`, in ascending order.
  - If no match is found, look for available weights less than the target, in descending order.
  - If no match is found, look for available weights greater than `500`, in ascending order.

- If a weight less than `400` is given, look for available weights less than the target, in descending order. If no match is found, look for available weights greater than the target, in ascending order.

- If a weight greater than `500` is given, look for available weights greater than the target, in ascending order. If no match is found, look for available weights less than the target, in descending order.

> [!NOTE]
> The fallback weight algorithm is only used for rendering. The computed value of the property is still the specified value.

### Meaning of relative weights

When `lighter` or `bolder` is specified, the below chart shows how the absolute font weight of the element is determined.

Note that when using relative weights, only four font weights are considered — thin (100), normal (400), bold (700), and heavy (900). If a font family has more weights available, they are ignored for the purposes of relative weight calculation.

<table class="standard-table">
  <thead>
    <tr>
      <th>Inherited value</th>
      <th><code>bolder</code></th>
      <th><code>lighter</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>100</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>200</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>300</th>
      <td>400</td>
      <td>100</td>
    </tr>
    <tr>
      <th>400</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>500</th>
      <td>700</td>
      <td>100</td>
    </tr>
    <tr>
      <th>600</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>700</th>
      <td>900</td>
      <td>400</td>
    </tr>
    <tr>
      <th>800</th>
      <td>900</td>
      <td>700</td>
    </tr>
    <tr>
      <th>900</th>
      <td>900</td>
      <td>700</td>
    </tr>
  </tbody>
</table>

### Common weight name mapping

The numerical values `100` to `900` roughly correspond to the following common weight names (see the [OpenType specification](https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass)):

| Value | Common weight name                                                                                                                 |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 100   | Thin (Hairline)                                                                                                                    |
| 200   | Extra Light (Ultra Light)                                                                                                          |
| 300   | Light                                                                                                                              |
| 400   | Normal (Regular)                                                                                                                   |
| 500   | Medium                                                                                                                             |
| 600   | Semi Bold (Demi Bold)                                                                                                              |
| 700   | Bold                                                                                                                               |
| 800   | Extra Bold (Ultra Bold)                                                                                                            |
| 900   | Black (Heavy)                                                                                                                      |
| 950   | [Extra Black (Ultra Black)](https://learn.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks) |

### Variable fonts

While many fonts have a particular weight corresponding to one of the numbers in [Common weight name mapping](#common_weight_name_mapping), most variable fonts support a range of weights providing much finer granularity, giving designers and developers more control over the chosen weight.

For TrueType or OpenType variable fonts, the "wght" variation is used to implement varying widths.

This demo loads with `font-weight: 500;` set. Change the value of the `font-weight` property in the `.sample` selector to see the weight of the text change (e.g., 200, 700). Click "Play" in the code blocks below to edit the example in the MDN Playground:

```html live-sample___font-weight-example
<p class="sample">
  ...it would not be wonderful to meet a Megalosaurus, forty feet long or so,
  waddling like an elephantine lizard up Holborn Hill.
</p>
```

```css live-sample___font-weight-example
@font-face {
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/MutatorSans.ttf");
  font-family: "MutatorSans";
  font-style: normal;
  font-weight: 1 1000;
}

.sample {
  text-transform: uppercase;
  font-weight: 500;
  font:
    1.5rem "MutatorSans",
    sans-serif;
}
```

{{EmbedLiveSample("font-weight-example", "", "200px")}}

## Accessibility

People experiencing low vision conditions may have difficulty reading text set with a `font-weight` value of `100` (Thin/Hairline) or `200` (Extra Light), especially if the font has a [low contrast color ratio](/en-US/docs/Web/CSS/color#accessibility).

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting font weights

#### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the bank,
  and of having nothing to do: once or twice she had peeped into the book her
  sister was reading, but it had no pictures or conversations in it, "and what
  is the use of a book," thought Alice "without pictures or conversations?"
</p>

<div>
  I'm heavy<br />
  <span>I'm lighter</span>
</div>
```

#### CSS

```css
/* Set paragraph text to be bold. */
p {
  font-weight: bold;
}

/* Set div text to two steps heavier than
   normal but less than a standard bold. */
div {
  font-weight: 600;
}

/* Set span text to be one step lighter
   than its parent. */
span {
  font-weight: lighter;
}
```

#### Result

{{EmbedLiveSample("Setting_font_weights","400","300")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-family")}}
- {{cssxref("font-style")}}
- SVG {{SVGAttr("font-weight")}} attribute
- [Learn: Fundamental text and font styling](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS fonts](/en-US/docs/Web/CSS/CSS_fonts) module
