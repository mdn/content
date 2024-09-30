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

[Box-shadow generator](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator) is an interactive tool allowing you to generate a `box-shadow`.

## Syntax

```css
/* Keyword values */
box-shadow: none;

/* A color and two length values */
/* <color> | <length> | <length> */
box-shadow: red 60px -16px;

/* Three length values and a color */
/* <length> | <length> | <length> | <color> */
box-shadow: 10px 5px 5px black;

/* Four length values and a color */
/* <length> | <length> | <length> | <length> | <color> */
box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);

/* inset, length values, and a color */
/* <inset> | <length> | <length> | <color> */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow:
  3px 3px red inset,
  -1em 0 0.4em olive;

/* Global values */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: revert-layer;
box-shadow: unset;
```

Specify a single box-shadow using:

- Two, three, or four {{cssxref("length")}} values.

  - If only two values are given, they are interpreted as `<offset-x>` and `<offset-y>` values.
  - If a third value is given, it is interpreted as a `<blur-radius>`.
  - If a fourth value is given, it is interpreted as a `<spread-radius>`.

- Optionally, the `inset` keyword.
- Optionally, a [`<color>`](#color) value.

To specify multiple shadows, provide a comma-separated list of shadows.

### Values

- `<color>` {{optional_inline}}

  - : Specifies color for the shadow. See {{cssxref("&lt;color&gt;")}} values for possible keywords and notations.
    If not specified, the value of the {{cssxref("color")}} property defined in the parent element is used.

- `<length>`

  - : Specifies the offset length of the shadow. This parameter accepts two, three, or four values. Third and fourth values are optional. They are interpreted as follows:

    - If two values are specified, they are interpreted as `<offset-x>` (horizontal offset) and `<offset-y>` (vertical offset) values. Negative `<offset-x>` value places the shadow to the left of the element. Negative `<offset-y>` value places the shadow above the element.\
      If not specified, the value of `0` is used for the missing length. If both `<offset-x>` and `<offset-y>` are set to `0`, the shadow is placed behind the element (and may generate a blur effect if `<blur-radius>` and/or `<spread-radius>` is set).
    - If three values are specified, the third value is interpreted as `<blur-radius>`. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be set to `0` (meaning that the shadow's edge will be sharp). The specification does not include an exact algorithm for how the blur radius should be calculated; however, it does elaborate as follows:

      > …for a long, straight shadow edge, this should create a color transition the length of the blur distance that is perpendicular to and centered on the shadow's edge, and that ranges from the full shadow color at the radius endpoint inside the shadow to fully transparent at the endpoint outside it.

    - If four values are specified, the fourth value is interpreted as `<spread-radius>`. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be set to `0` (that is, the shadow will be the same size as the element).

- `inset` {{optional_inline}}
  - : Changes the shadow from an outer box-shadow to an inner box-shadow (as if the content is pressed into the box). Inset shadows are drawn inside the box's border (even if the border is transparent), and they appear above the background but below the content. By default, the shadow behaves like a drop shadow, giving the appearance that the box is elevated above its content. This is the default behavior when `inset` is not specified.

### Interpolation

When animating shadows, such as when multiple shadow values on a box transition to new values on hover, the values are interpolated. {{Glossary("Interpolation")}} determines intermediate values of properties, such as the blur radius, spread radius, and color, as shadows transition. For each shadow in a list of shadows, the color, x, y, blur, and spread transition; the color as [`<color>`](/en-US/docs/Web/CSS/color_value), and the other values as {{cssxref("length")}}s.

In interpolating multiple shadows between two comma-separated lists of multiple box shadows, the shadows are paired, in order, with interpolation occurring between paired shadows. If the lists of shadows have different lengths, then the shorter list is padded at the end with shadows whose color is `transparent`, and X, Y, and blur are `0`, with the inset, or lack of inset, being set to match. If in any pair of shadows, one has `inset` set and the other does not, the entire shadow list is uninterpolated; the shadows will change to the new values without an animating effect.

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
    inset 0 -3em 3em rgb(0 200 0 / 30%),
    0 0 0 2px white,
    0.3em 0.3em 1em rgb(200 0 0 / 60%);
}
```

#### Result

{{EmbedLiveSample('Setting_three_shadows', '300', '300')}}

### Setting zero for offset and blur

When the `x-offset`, `y-offset`, and `blur` are all zero, the box shadow will be a solid-colored outline of equal-size on all sides. The shadows are drawn back to front, so the first shadow sits on top of subsequent shadows. When the `border-radius` is set to 0, as is the default, the corners of the shadow will be, well, corners. Had we put in a `border-radius` of any other value, the corners would have been rounded.

We added a margin the size of the widest box-shadow to ensure the shadow doesn't overlap adjacent elements or go beyond the border of the containing box. A box-shadow does not impact [box model](/en-US/docs/Web/CSS/CSS_box_model) dimensions.

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
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color)
