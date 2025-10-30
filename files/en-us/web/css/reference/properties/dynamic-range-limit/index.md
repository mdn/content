---
title: dynamic-range-limit
slug: Web/CSS/Reference/Properties/dynamic-range-limit
page-type: css-property
browser-compat: css.properties.dynamic-range-limit
sidebar: cssref
---

The **`dynamic-range-limit`** [CSS](/en-US/docs/Web/CSS) property specifies the maximum luminance allowed for High Dynamic Range (HDR) content.

## Syntax

```css
/* Keyword values */
dynamic-range-limit: standard;
dynamic-range-limit: no-limit;
dynamic-range-limit: constrained;

/* dynamic-range-limit-mix() function */
dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);

/* Global values */
dynamic-range-limit: inherit;
dynamic-range-limit: initial;
dynamic-range-limit: revert;
dynamic-range-limit: revert-layer;
dynamic-range-limit: unset;
```

### Values

The `dynamic-range-limit` property is specified as one of the following keyword values or a {{cssxref("dynamic-range-limit-mix()")}} function call.

The following keyword values can be specified:

- `standard`
  - : Specifies the maximum luminance as **HDR reference white**, which is the CSS color `white`.
- `no-limit`
  - : Specifies the maximum luminance as much greater than that of HDR reference white. The precise level is not specified.
- `constrained`
  - : Specifies the maximum luminance as somewhat greater than that of HDR reference white, such that a mix of Standard Dynamic Range (SDR) and HDR content can be comfortably viewed together. The precise level is not specified.

The {{cssxref("dynamic-range-limit-mix()")}} function specifies the maximum luminance as a custom value that is a combination of the different keyword values proportionate to the provided percentages. It takes two or more pairs, each consisting of a `dynamic-range-limit` keyword (or a nested `dynamic-range-limit-mix()` function) and a percentage.

## Description

Dynamic range is the difference in luminance (brightness) between the lightest and darkest parts of content. Dynamic range is measured in photographic stops, where an increase of one stop represents a doubling of the luminance.

### SDR, HDR, and headroom

Traditional web content uses **Standard Dynamic Range (SDR)**, where the brightest color is equivalent to the CSS color `white` (`#ffffff` in hexadecimal). The brightness in **High Dynamic Range (HDR)** content, on the other hand, can go beyond the standard white. In HDR terminology, the standard CSS `white` is also called the HDR reference white.

The peak luminance at which content can be displayed depends on the content, the available display hardware, and user preferences. The amount by which the peak luminance of white can exceed HDR reference white is termed **HDR headroom** and is typically expressed in photographic stops.

SDR content always has an HDR headroom of `0` because its brightest white _is_ the HDR reference white. Older monitors may also have an HDR headroom of `0` because they are not able to display brighter colors. Newer monitors may have an HDR headroom greater than `0`, allowing them to display the brighter colors available in HDR content.

### The use-case for `dynamic-range-limit`

The brightness of HDR content can be jarring to the viewer. This is especially apparent in apps where a mixture of HDR and SDR content is displayed, leading to inconsistency in the brightness.

The `dynamic-range-limit` property allows you to control the brightness of HDR content. For example, you might want to constrain the maximum brightness of all thumbnails in a photo or video gallery to HDR reference white (this is what the `standard` keyword value does) or to a brightness only slightly more than the HDR reference white (using the `constrained` keyword value or a custom limit created using {{cssxref("dynamic-range-limit-mix()")}}). When a user views a single HDR image, or if the user selects a preference to enable it, you could then set the image's `dynamic-range-limit` to `no-limit`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `dynamic-range-limit` usage

In our [dynamic-range-limit property demo](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit), we include an HDR image that can be hovered and focused to transition the `dynamic-range-limit` value. [View the example live](https://mdn.github.io/dom-examples/dynamic-range-limit/) in a display capable of displaying HDR colors, and try it out. The code is explained below.

#### HTML

In the markup, we embed an HDR image using an {{htmlelement("img")}} element. We include a [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) value of `0` to make the image focusable via the keyboard.

```html
<img
  src="gioia-pixel-ultrahdr.jpg"
  alt="A subway station, with white strip lights lighting the platform and ad posters in the background"
  tabindex="0" />
```

#### CSS

We give our `<img>` element some rudimentary styles, then set its `dynamic-range-limit` property to `standard`, which means it won't be displayed any brighter than HDR reference white. We also set a {{cssxref("transition")}} property so that the `<img>` element's `dynamic-range-limit` value will transition over `0.6` seconds when its state changes.

```css
img {
  width: 50%;
  border: 1px solid black;
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

On hover or focus, we change the value of the `<img>` element's `dynamic-range-limit` to `no-limit` so that it will display as brightly as the browser and display setup allow.

```css
img:hover,
img:focus {
  dynamic-range-limit: no-limit;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[`dynamic-range`](/en-US/docs/Web/CSS/@media/dynamic-range) and [`video-dynamic-range`](/en-US/docs/Web/CSS/@media/video-dynamic-range) media features
