---
title: box-shadow
slug: Web/CSS/box-shadow
page-type: css-property
browser-compat: css.properties.box-shadow
---

{{CSSRef}}

The **`box-shadow`** [CSS](/en-US/docs/Web/CSS) property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}

The `box-shadow` property enables you to cast a drop shadow from the frame of almost any element. If a {{cssxref("border-radius")}} is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple [text shadows](/en-US/docs/Web/CSS/text-shadow) (the first specified shadow is on top).

[Box-shadow generator](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Box-shadow_generator) is an interactive tool allowing you to generate a `box-shadow`.

## Syntax

```css
/* Keyword values */
box-shadow: none;

/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;

/* Global values */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: revert-layer;
box-shadow: unset;
```

Specify a single box-shadow using:

- Two, three, or four [`<length>`](/en-US/docs/Web/CSS/length) values.

  - If only two values are given, they are interpreted as `<offset-x>` and `<offset-y>` values.
  - If a third value is given, it is interpreted as a `<blur-radius>`.
  - If a fourth value is given, it is interpreted as a `<spread-radius>`.

- Optionally, the `inset` keyword.
- Optionally, a [`<color>`](#color) value.

To specify multiple shadows, provide a comma-separated list of shadows.

### Values

- `inset`
  - : If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content).
    The presence of the `inset` keyword changes the shadow to one inside the frame (as if the content was debossed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.
- `<offset-x>`
  - : The {{cssxref("&lt;length&gt;")}} value specifies the horizontal distance. Negative values place the shadow to the left of the element.
- `<offset-y>`

  - : The {{cssxref("&lt;length&gt;")}} values specifies the vertical distance. Negative values place the shadow above the element.

    If both `<offset-x>` and `<offset-y>` are set to `0`, the shadow is placed behind the element (and may generate a blur effect if `<blur-radius>` and/or `<spread-radius>` is set).

- `<blur-radius>`

  - : This is a third {{cssxref("&lt;length&gt;")}} value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be `0` (the shadow's edge is sharp). The specification does not include an exact algorithm for how the blur radius should be calculated, however, it does elaborate as follows:

    > …for a long, straight shadow edge, this should create a color transition the length of the blur distance that is perpendicular to and centered on the shadow's edge, and that ranges from the full shadow color at the radius endpoint inside the shadow to fully transparent at the endpoint outside it.

- `<spread-radius>`
  - : This is a fourth {{cssxref("&lt;length&gt;")}} value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be `0` (the shadow will be the same size as the element).
- `<color>`
  - : See {{cssxref("&lt;color&gt;")}} values for possible keywords and notations.
    If not specified, it defaults to {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}.

### Interpolation

When animating shadows, such as when multiple shadow values on a box transition to new values on hover, the values are interpolated. {{Glossary("Interpolation")}} determines intermediate values of properties, such as the blur radius, spread radius, and color, as shadows transition. For each shadow in a list of shadows, the color, x, y, blur, and spread transition; the color as [`<color>`](/en-US/docs/Web/CSS/color_value), and the other values as [`<length>`](/en-US/docs/Web/CSS/length)s.

In interpolating multiple shadows between two comma-separated lists of multiple box shadows, the shadows are paired, in order, with interpolation occurring between paired shadows. If the lists of shadows have different lengths, then the shorter list is padded at the end with shadows whose color is `transparent`, and X, Y, and blur are `0`, with the inset, or lack of inset, being set to match. If, in any pair of shadows, one has `inset` set and the other is does not, the entire shadow list is uninterpolated; the shadows will change to the new values without an animating effect.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting three shadows

In this example, we include three shadows: an inset shadow, a regular drop shadow, and a 2px shadow that creates a border effect (we could have used an {{cssxref('outline')}} instead for that third shadow).

#### HTML

```html
<blockquote>
  <q>
    You may shoot me with your words,<br />
    You may cut me with your eyes,<br />
    You may kill me with your hatefulness,<br />
    But still, like air, I'll rise.
  </q>
  <p>&mdash; Maya Angelou</p>
</blockquote>
```

#### CSS

```css
blockquote {
  padding: 20px;
  box-shadow:
    inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
```

#### Result

{{EmbedLiveSample('Setting_three_shadows', '300', '300')}}

### Setting zero for offset and blur

When the `x-offset`, `y-offset`, and `blur` are all zero, the box shadow will be a solid-colored outline of equal-size on all sides. The shadows are drawn back to front, so the first shadow sits on top of subsequent shadows. When the `border-radius` is set to 0, as is the default, the corners of the shadow will be, well, corners. Had we put in a `border-radius` of any other value, the corners would have been rounded.

We added a margin the size of the widest box-shadow to ensure the shadow doesn't overlap adjacent elements or go beyond the border of the containing box. A box-shadow does not impact [box model](/en-US/docs/Web/CSS/CSS_Box_Model) dimensions.

#### HTML

```html
<div><p>Hello World</p></div>
```

#### CSS

```css
p {
  box-shadow:
    0 0 0 2em #f4aab9,
    0 0 0 4em #66ccff;
  margin: 4em;
  padding: 1em;
}
```

<!-- these colors are intentionally pink and blue. WCAG requires color contrast between text and background, not between border colors. -->

#### Result

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("&lt;color&gt;")}} data type (for specifying the shadow color)
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
