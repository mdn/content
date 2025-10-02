---
title: dynamic-range-limit
slug: Web/CSS/dynamic-range-limit
page-type: css-property
browser-compat: css.properties.dynamic-range-limit
sidebar: cssref
---

The **`dynamic-range-limit`** [CSS](/en-US/docs/Web/CSS) property allows the maximum **luminance** of **High Dynamic Range** (HDR) content to be limited.

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

The `dynamic-range-limit` property is specified as one of the following keyword values or a {{cssxref("dynamic-range-limit-mix()")}} function call:

### Values

- Keyword values:
  - : The following keyword values can be specified:
    - `standard`
      - : The highest luminance that can be displayed in selected content is that of **HDR reference white**, which is the CSS color `white`.
    - `no-limit`
      - : The highest luminance that can be displayed in selected content is much greater than that of HDR reference white. The precise level is not defined in the specification.
    - `constrained`
      - : The highest luminance that can be displayed in selected content is somewhat greater than that of HDR reference white, such that a mix of SDR and HDR content can be comfortably viewed together. Again, the precise level is not defined.
- {{cssxref("dynamic-range-limit-mix()")}}
  - : Takes two or more pairs, each consisting of a `dynamic-range-limit` keyword (or a nested `dynamic-range-limit-mix()` function) and a percentage, and creates a custom maximum luminance limit that is a mix of the different keywords proportionate to the provided percentages.

## Description

Dynamic range is the difference in luminance (brightness) between the lightest and darkest parts of content. Dynamic range is measured in photographic stops, where an increase of one stop represents a doubling of the luminance.

The dynamic range between the lightest color and the darkest color is calculated using the following formula:

<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <msub>
      <mo>log</mo>
      <mn>2</mn>
    </msub>
    <mo>(</mo>
    <mi>high&#x2011;luminance</mi>
    <mo>)</mo>
  </mrow>
  <mo>&#x2212;</mo>
  <mrow>
    <msub>
      <mo>log</mo>
      <mn>2</mn>
    </msub>
    <mo>(</mo>
    <mi>low&#x2011;luminance</mi>
    <mo>)</mo>
  </mrow>
</math>

Traditional web content uses **Standard Dynamic Range (SDR)**, where the brightest color is equivalent to the CSS color `white` (`#ffffff` in hexadecimal). The brightness in High Dynamic Range (HDR) content, on the other hand, can go beyond the standard white. In HDR terminology, the standard CSS `white` is also called the HDR reference white.

The peak luminance at which content can be displayed depends on the content, the available display hardware, and user preferences. The amount by which the peak luminance of white can exceed HDR reference white is termed **HDR headroom** and is typically expressed in photographic stops.

SDR content always has an HDR headroom of `0` because its brightest white _is_ the HDR reference white. Older monitors may also have an HDR headroom of `0` because they are not able to display brighter colors. Newer monitors may have an HDR headroom greater than `0`, allowing them to display the brighter colors available in HDR content.

The brightness of HDR content can be jarring to the viewer. This is especially apparent in apps where a mixture of HDR and SDR content is displayed, leading to inconsistency in the brightness.

The `dynamic-range-limit` property allows you to control the brightness of HDR content. For example, you might want to constrain the maximum brightness of all thumbnails in a photo or video gallery to HDR reference white (this is what the `standard` keyword value does) or to a brightness only slightly more than the HDR reference white (using the `constrained` keyword value or a custom limit created using {{cssxref("dynamic-range-limit-mix()")}}). When a user views a single HDR image, or if the user selects a preference to enable it, you could then set the image's `dynamic-range-limit` to `no-limit`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `dynamic-range-limit` usage

In our [dynamic-range-limit property demo](#), we include an HDR image that can be hovered and focused to transition the `dynamic-range-limit` value. [View the example live](#) in a display capable of displaying HDR colors, and try it out. The code is explained below.

#### HTML

In the markup, we embed an HDR image using an {{htmlelement("img")}} element. We include a [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) value of `0` to make the image focusable via the keyboard.

```html
<img
  src="gioia-pixel-ultrahdr.jpg"
  alt="A subway station, with while strip lights lighting the platform and ad posters in the background"
  tabindex="0" />
```

#### CSS

We give our `<img>` element some rudimentary styles, then set its `dynamic-range-limit` property to `standard`, which means it won't be displayed any brighter than HDR reference white. We also set a {{cssxref("transition")}} property so that the `<img>` element's `dynamic-range-limit` value will transition over 0.6 seconds when its state changes.

```css
img {
  width: 50%;
  border: 1px solid black;
  dynamic-range-limit: standard;
  transition: dynamic-range-limit 0.6s;
}
```

On hover and focus, we change the value of the `<img>` element's `dynamic-range-limit` to `no-limit` so that it will display as brightly as the browser and display setup allows.

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
