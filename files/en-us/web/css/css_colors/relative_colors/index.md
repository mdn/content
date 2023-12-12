---
title: Using relative colors
slug: Web/CSS/CSS_colors/Relative_colors
page-type: guide
---

{{CSSRef}}

The [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5) specification defines **relative color syntax**, which allows CSS {{cssxref("&lt;color&gt;")}} values to be defined relative to other existing colors, rather than defining a color value from scratch each time. This is a very powerful feature that enables easy creation of complements to existing colors — such as lighter, darker, saturated, semi-transparent, or inverted variants — paving the way towards more effective color palette creation.

This article explains the syntax, shows what the different options are, and looks at some illustrative examples.

## General syntax

A relative CSS color value looks something like this:

```text
rgb(from red r g b)
rgb(from red r g b / alpha)
```

1. You pass an **originating color** into a CSS color function, preceded by the `from` keyword. This can be any {{cssxref("&lt;color&gt;")}} value, including a color value contained in a [CSS custom property](/en-US/docs/Web/CSS/Using_CSS_custom_properties).
2. This causes supporting browsers to destructure the originating color into its component color channels (plus, optionally, the alpha channel) as represented in the color system you are passing the color in to. These are made available as appropriately-named values inside the color function — `r`, `g`, and `b` in this case.
3. The color components of the new color are then defined after the originating color — these could be static values, or values based on the originating color's channel values.

Let's look at relative syntax in action. The below CSS is used to style two {{htmlelement("div")}} elements, one with a absolute background color — `red` — and one with a relative background color created with the `rgb()` function, based on the same `red` keyword value:

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
</div>
```

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
#one {
  background-color: red;
}

#two {
  background-color: rgb(from red 200 g b);
}
```

The output is as follows:

{{ EmbedLiveSample("General syntax", "100%", "200") }}

The relative color uses the [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) function, takes `red` as an input (equivalent to `rgb(255 0 0)`), and then defines the new color as having an `r` channel of value `200` and `g` and `b` channels with a value the same as the input color (the `g` and `b` values). This results in a slightly darker red. If we had specified an `r` channel value of `255` (or just the `r` value), the resulting output color would be exactly the same as the input value.

```text
/* These four all produce an equivalent output */
red
rgb(255 0 0)
rgb(from red r g b)
rgb(from red 255 g b)
```

## Syntax flexibility

There is an important distinction to be made between the destructured channel values made available in the function, and the channel values of the output color set by the developer.

Take `rgb(from red r g b)` as an example. When a relative color is defined via an `rgb()` function, its red, green, and blue channel values are made available in the `r`, `g`, and `b` values, but when specifying the output values, you don't need to use these values at all. You need to provide the channel values in the right order, and they can be any value values you wish, giving relative CSS colors a high degree of flexibility.

For example, if you wanted to, you could transform red into blue, like so:

```css
rgb(from red 0 0 255)
/* output color is rgb(0 0 255), full blue */
```

You can even mix up or repeat the provided values. The following takes a slightly darker red as an input and outputs a light gray color with the channels all defined by the input color's `r` channel value:

```css
rgb(from rgb(200 0 0) r r r)
/* output color is rgb(200 200 200), light gray */
```

The following reverses the order of the channel values:

```css
rgb(from rgb(200 170 0) b g r)
/* output color is rgb(0 170 200) */
```

## Color functions that support relative colors

In the section above we only saw relative colors defined via the [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) function. However, relative colors can be defined using any modern CSS function — [`color()`](/en-US/docs/Web/CSS/color_value/color), [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb), [`lab()`](/en-US/docs/Web/CSS/color_value/lab), [`lch()`](/en-US/docs/Web/CSS/color_value/lch), [`oklab()`](/en-US/docs/Web/CSS/color_value/oklab), [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch), or [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb). The syntax structure is exactly the same in each case — the only thing that differs is the names of the provided originating color channel values.

Relative color examples follow of each. Each case is the simplest possible, with the output channels exactly matching the originating color channels:

```css
/* color() with and without alpha channel */
color(from red a98-rgb r g b)
color(from red a98-rgb r g b / alpha)

/* hsl() with and without alpha channel */
hsl(from red h s l)
hsl(from red h s l / alpha)

/* hwb() with and without alpha channel */
hwb(from red h w b)
hwb(from red h w b / alpha)

/* lab() with and without alpha channel */
lab(from red l a b)
lab(from red l a b / alpha)

/* lch() with and without alpha channel */
lch(from red l c h)
lch(from red l c h / alpha)

/* oklab() with and without alpha channel */
oklab(from red l a b)
oklab(from red l a b / alpha)

/* oklch() with and without alpha channel */
oklch(from red l c h)
oklch(from red l c h / alpha)

/* rgb() with and without alpha channel */
rgb(from red r g b)
rgb(from red r g b / alpha)
```

As you can see from the above example, the color system of the originating color doesn't need to match the color system being used to create the output color. Again, this provides a lot of flexibility — generally you won't be interested in (and might not even know) the system a color is defined in. You'll just want to grab the color and, for example, create a lighter variant of it by putting it into an `hsl()` function and varying the lightness (`l`) value.

> **Note:** Although included in the specification, current implementations don't allow relative colors to be defined via the legacy `rgba()` and `hsla()` functions.

## Using custom properties

When creating a relative color, you can use values defined in [CSS custom properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties) both for the originating color and when defining the output color channel values. Let's look at an example.

In the below CSS we define two custom properties:

- `--base-color` contains our base brand color, a nice purple.
- `--standard-opacity` contains the standard opacity value that we want to apply to semi-transparent boxes.

We then give two {{htmlelement("div")}} elements a background color. One is given an absolute color — our brand purple. The other one is given a relative color equal to our brand purple, transformed to have an alpha channel equal to our standard opacity value.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
</div>
```

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: repeating-linear-gradient(
    45deg,
    white,
    white 24px,
    black 25px,
    black 50px
  );
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: purple;
  --standard-opacity: 0.75;
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: hwb(from var(--base-color) h w b / var(--standard-opacity));
}
```

The output is as follows:

{{ EmbedLiveSample("Using custom properties", "100%", "200") }}

## Using math functions

You can use CSS math functions such as {{cssxref("calc()")}} to calculate

## Checking for browser support

## Examples

> **Note:** You can find more examples demonstrating the use of relative color syntax in the different functional notation types on their dedicated pages: [`color()`](/en-US/docs/Web/CSS/color_value/color#using_relative_colors_with_color), [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl#using_relative_colors_with_hsl), [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb#using_relative_colors_with_hwb), [`lab()`](/en-US/docs/Web/CSS/color_value/lab#using_relative_colors_with_lab), [`lch()`](/en-US/docs/Web/CSS/color_value/lch#using_relative_colors_with_lch), [`oklab()`](/en-US/docs/Web/CSS/color_value/oklab#using_relative_colors_with_oklab), [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch#using_relative_colors_with_oklch), [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb#using_relative_colors_with_rgb).

### xx

### Varying the alpha channel

## See also

- The {{CSSXref("&lt;color&gt;", "&lt;color&gt;")}} data type
- functional notation typess:
  - [sRGB](https://en.wikipedia.org/wiki/SRGB) color space: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}}, {{CSSXref("color_value/rgb", "rgb()")}};
  - [CIELAB](https://en.wikipedia.org/wiki/CIELAB_color_space) color space: {{CSSXref("color_value/lab", "lab()")}}, {{CSSXref("color_value/lch", "lch()")}};
  - [Oklab](https://bottosson.github.io/posts/oklab/) color space: {{CSSXref("color_value/oklab", "oklab()")}}, {{CSSXref("color_value/oklch", "oklch()")}};
- Other color spaces: {{CSSXref("color_value/color", "color()")}}.
- [CSS relative color syntax](https://developer.chrome.com/blog/css-relative-color-syntax) on developer.chrome.com (2023)
