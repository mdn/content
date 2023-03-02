---
title: lab()
slug: Web/CSS/color_value/lab
page-type: css-function
status:
  - experimental
browser-compat: css.types.color.lab
---

{{CSSRef}}{{SeeCompatTable}}

The **`lab()`** functional notation expresses a given color in the CIE L\*a\*b\* color space. Lab represents the entire range of color that humans can see.

## Syntax

```css
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);
```

### Values

- Functional notation: `lab(L a b [/ A])`

  - `L` is a {{cssxref("&lt;number&gt;")}} between `0` and `100` or a {{cssxref("&lt;percentage&gt;")}} between `0%` and `100%` that specifies the CIE Lightness where the number `0` corresponds to `0%` (black) and the number `100` corresponds to `100%` (white).

  - `a` is a {{cssxref("&lt;number&gt;")}} between `-125` and `125` or a {{cssxref("&lt;percentage&gt;")}} between `-100%` and `100%`, specifying the distance along the `a` axis in the Lab colorspace, that is how green/red the color is.

  - `b` is a {{cssxref("&lt;number&gt;")}} between `-125` and `125` or a {{cssxref("&lt;percentage&gt;")}} between `-100%` and `100%`, specifying the distance along the `b` axis in the Lab colorspace, that is how blue/yellow the color is.

  - `A` (alpha) can be a {{cssxref("&lt;number&gt;")}} between `0` and `1`, or a {{cssxref("&lt;percentage&gt;")}}, where the number `1` corresponds to `100%` (full opacity).

### Formal syntax

{{csssyntax}}

## Examples

### Adjusting lightness and color axes with lab()

The following example shows the effect of varying the lightness, a-axis, and b-axis values of the `lab()` function.

```html
<div id="red"></div>
<div id="red-a"></div>

<div id="green"></div>
<div id="green-b"></div>

<div id="blue"></div>
<div id="blue-light"></div>
```

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
#red {
  background-color: lab(100 125 125);
}
#red-a {
  background-color: lab(100 110 125);
}

#green {
  background-color: lab(75% -120 125);
}
#green-b {
  background-color: lab(75% -120 10);
}

#blue {
  background-color: lab(0 -120 -120);
}
#blue-light {
  background-color: lab(70 -120 -120);
}
```

{{EmbedLiveSample("Adjusting_lightness_and_color_axes_with_lab")}}

### Adjusting opacity with lab()

The following example shows the effect of varying the `A` (alpha) value of the `lab()` functional notation.
The `#red` and `#red-alpha` elements overlap the `#background-div` element to demonstrate the effect of opacity.
Giving `A` a value of `0.4` makes the color 40% opaque.

```html
<div id="background-div">
  <div id="red"></div>
  <div id="red-alpha"></div>
</div>
```

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
```

```css
#background-div {
  background-color: lightblue;
  width: 150px;
  height: 40px;
}

#red {
  background-color: lab(100 125 125);
}
#red-alpha {
  background-color: lab(100 125 125 / 0.4);
}
```

{{EmbedLiveSample('Adjusting_opacity_with_lab')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Color values](/en-US/docs/Web/CSS/color_value) lists color notation
- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): includes `lab()` and {{cssxref("color_value/lch",'lch()')}} colors.
