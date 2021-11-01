---
title: box-shadow
slug: Web/CSS/box-shadow
tags:
  - CSS
  - CSS Backgrounds and Borders
  - CSS Property
  - CSS Styles
  - HTML Colors
  - Reference
  - Shadows
  - Styles
  - Styling HTML
  - box-shadow
  - recipe:css-property
browser-compat: css.properties.box-shadow
---
{{CSSRef}}

The **`box-shadow`** [CSS](/en-US/docs/Web/CSS) property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}

The `box-shadow` property enables you to cast a drop shadow from the frame of almost any element. If a {{cssxref("border-radius")}} is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple [text shadows](/en-US/docs/Web/CSS/text-shadow) (the first specified shadow is on top).

[Box-shadow generator](/en-US/docs/Web/CSS/CSS_Background_and_Borders/Box-shadow_generator) is an interactive tool allowing you to generate a `box-shadow`.

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
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* Global keywords */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
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
    The presence of the `inset` keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.
- `<offset-x>` `<offset-y>`
  - : These are two {{cssxref("&lt;length&gt;")}} values to set the shadow offset. `<offset-x>` specifies the horizontal distance. Negative values place the shadow to the left of the element. `<offset-y>` specifies the vertical distance. Negative values place the shadow above the element. See {{cssxref("&lt;length&gt;")}} for possible units.
    If both values are `0`, the shadow is placed behind the element (and may generate a blur effect if `<blur-radius>` and/or `<spread-radius>` is set).
- `<blur-radius>`

  - : This is a third {{cssxref("&lt;length&gt;")}} value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be `0` (the shadow's edge is sharp). The specification does not include an exact algorithm for how the blur radius should be calculated, however, it does elaborate as follows:

    > …for a long, straight shadow edge, this should create a color transition the length of the blur distance that is perpendicular to and centered on the shadow’s edge, and that ranges from the full shadow color at the radius endpoint inside the shadow to fully transparent at the endpoint outside it.

- `<spread-radius>`
  - : This is a fourth {{cssxref("&lt;length&gt;")}} value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be `0` (the shadow will be the same size as the element).
- `<color>`
  - : See {{cssxref("&lt;color&gt;")}} values for possible keywords and notations.
    If not specified, it defaults to {{cssxref("&lt;color&gt;","currentColor","#currentcolor_keyword")}}.

### Interpolation

Each shadow in the list (treating `none` as a 0-length list) is interpolated via the color (as color) component, and x, y, blur, and (when appropriate) spread (as length) components. For each shadow, if both input shadows are or are not `inset`, then the interpolated shadow must match the input shadows in that regard. If any pair of input shadows has one `inset` and the other not `inset`, the entire shadow list is uninterpolated. If the lists of shadows have different lengths, then the shorter list is padded at the end with shadows whose color is `transparent`, all lengths are `0`, and whose `inset` (or not) matches the longer list.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting three shadows

In this example, we include three shadows: an inset shadow, a regular drop shadow, and a 2px shadow that creates a border effect (we could have used an {{cssxref('outline')}} instead for that third shadow).

#### HTML

```html
<blockquote><q>You may shoot me with your words,<br/>
You may cut me with your eyes,<br/>
You may kill me with your hatefulness,<br/>
But still, like air, I'll rise.</q>
<p>&mdash; Maya Angelou</p>
</blockquote>
```

#### CSS

```css
blockquote {
  padding: 20px;
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
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
  box-shadow: 0 0 0 2em #F4AAB9,
              0 0 0 4em #66CCFF;
  margin: 4em;
  padding:1em;
}
```

#### Result

{{EmbedLiveSample('Setting_zero_for_offset_and_blur', '300', '300')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- {{cssxref("text-shadow")}}
- [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color)
