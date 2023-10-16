---
title: font-size
slug: Web/CSS/font-size
page-type: css-property
browser-compat: css.properties.font-size
---

{{CSSRef}}

The **`font-size`** [CSS](/en-US/docs/Web/CSS) property sets the size of the font. Changing the font size also updates the sizes of the font size-relative {{cssxref("&lt;length&gt;")}} units, such as `em`, `ex`, and so forth.

{{EmbedInteractiveExample("pages/css/font-size.html")}}

## Syntax

```css
/* <absolute-size> values */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* <relative-size> values */
font-size: smaller;
font-size: larger;

/* <length> values */
font-size: 12px;
font-size: 0.8em;

/* <percentage> values */
font-size: 80%;

/* math value */
font-size: math;

/* Global values */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

The `font-size` property is specified in one of the following ways:

- As one of the absolute-size, relative-size or `math` keywords
- As a `<length>` or a `<percentage>`, relative to the element's font size.

### Values

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`

  - : Absolute-size keywords, based on the user's default font size (which is `medium`).

- `larger`, `smaller`

  - : Relative-size keywords. The font will be larger or smaller relative to the parent element's font size, roughly by the ratio used to separate the absolute-size keywords above.

- {{cssxref("&lt;length&gt;")}}

  - : A positive {{cssxref("&lt;length&gt;")}} value. For most font-relative units (such as `em` and `ex`), the font size is relative to the parent element's font size.

    For font-relative units that are root-based (such as `rem`), the font size is relative to the size of the font used by the {{HTMLElement("html")}} (root) element.

- {{cssxref("&lt;percentage&gt;")}}

  - : A positive {{cssxref("&lt;percentage&gt;")}} value, relative to the parent element's font size.
    > **Note:** To maximize accessibility, it is generally best to use values that are relative to the user's default font size.

- `math`
  - : [Scaling rules](https://w3c.github.io/mathml-core/#the-math-script-level-property) are applied when determining the computed value of the `font-size` property for math elements relative to the `font-size` of the containing parent.
    See the [math-depth](/en-US/docs/Web/CSS/math-depth) property for more information.

## Description

There are several ways to specify the font size, including keywords or numerical values for pixels or ems. Choose the appropriate method based on the needs of the particular web page.

### Keywords

Keywords are a good way to set the size of fonts on the web. By setting a keyword font size on the {{HTMLElement("body")}} element, you can set relative font-sizing everywhere else on the page, giving you the ability to easily scale the font up or down on the entire page accordingly.

### Pixels

Setting the font size in pixel values (`px`) is a good choice when you need pixel accuracy. A px value is static. This is an OS-independent and cross-browser way of literally telling the browsers to render the letters at exactly the number of pixels in height that you specified. The results may vary slightly across browsers, as they may use different algorithms to achieve a similar effect.

Font sizing settings can also be used in combination. For example, if a parent element is set to `16px` and its child element is set to `larger`, the child element displays larger than the parent element on the page.

> **Note:** Defining font sizes in `px` is _[not accessible](https://en.wikipedia.org/wiki/Web_accessibility)_, because the user cannot change the font size in some browsers. For example, users with limited vision may wish to set the font size much larger than the size chosen by a web designer. Avoid using them for font sizes if you wish to create an inclusive design.

### Ems

Using an `em` value creates a dynamic or computed font size (historically the `em` unit was derived from the width of a capital "M" in a given typeface.). The numeric value acts as a multiplier of the `font-size` property of the element on which it is used. Consider this example:

```css
p {
  font-size: 2em;
}
```

In this case, the font size of `<p>` elements will be double the computed `font-size` inherited by `<p>` elements. By extension, a `font-size` of `1em` equals the computed `font-size` of the element on which it is used.

If a `font-size` has not been set on any of the `<p>`'s ancestors, then `1em` will equal the default browser `font-size`, which is usually `16px`. So, by default `1em` is equivalent to `16px`, and `2em` is equivalent to `32px`. If you were to set a `font-size` of 20px on the `<body>` element say, then `1em` on the `<p>` elements would instead be equivalent to `20px`, and `2em` would be equivalent to `40px`.

In order to calculate the `em` equivalent for any pixel value required, you can use this formula:

```plain
em = desired element pixel value / parent element font-size in pixels
```

For example, suppose the `font-size` of the `<body>` of the page is set to `16px`. If the font-size you want is `12px`, then you should specify `0.75em` (because 12/16 = 0.75). Similarly, if you want a font size of `10px`, then specify `0.625em` (10/16 = 0.625); for `22px`, specify `1.375em` (22/16).

The `em` is a very useful unit in CSS since it automatically adapts its length relative to the font that the reader chooses to use.

One important fact to keep in mind: em values compound. Take the following HTML and CSS:

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

The result is:

{{EmbedLiveSample("Ems", 400, 100)}}

Assuming that the browser's default `font-size` is 16px, the words "outer" would be rendered at 25.6px, but the word "inner" would be rendered at 40.96px. This is because the inner {{HTMLElement("span")}}'s `font-size` is 1.6em which is relative to its parent's `font-size`, which is in turn relative to its parent's `font-size`. This is often called **compounding**.

### Rems

`rem` values were invented in order to sidestep the compounding problem. `rem` values are relative to the root `html` element, not the parent element. In other words, it lets you specify a font size in a relative fashion without being affected by the size of the parent, thereby eliminating compounding.

The CSS below is nearly identical to the previous example. The only exception is that the unit has been changed to `rem`.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Then we apply this CSS to the same HTML, which looks like this:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

In this example, the words "outer inner outer" are all displayed at 25.6px (assuming that the browser's `font-size` has been left at the default value of 16px).

### Ex

Like the `em` unit, an element's `font-size` set using the `ex` unit is computed or dynamic. It behaves in exactly the same way, except that when setting the `font-size` property using `ex` units, the `font-size` equals the x-height of the [first available font](https://www.w3.org/TR/css-fonts-3/#first-available-font) used on the page. The number value multiplies the element's inherited `font-size` and the `font-size` compounds relatively.

See the W3C Editor's Draft for a more detailed description of [font-relative length units](https://drafts.csswg.org/css-values-4/#font-relative-length) such as `ex`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting font sizes

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### Result

{{EmbedLiveSample('Setting_font_sizes', 600, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size-adjust")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
