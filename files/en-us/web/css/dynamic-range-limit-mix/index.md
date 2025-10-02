---
title: dynamic-range-limit-mix()
slug: Web/CSS/dynamic-range-limit-mix
page-type: css-function
status:
  - experimental
browser-compat: css.types.dynamic-range-limit-mix
sidebar: cssref
---

{{SeeCompatTable}}

The **`dynamic-range-limit-mix()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) creates a custom maximum luminance limit by mixing different {{cssxref("dynamic-range-limit")}} keywords in specified amounts.

## Syntax

```css
dynamic-range-limit-mix(standard 70%, no-limit 30%);
dynamic-range-limit-mix(no-limit 10%, constrained 20%);
dynamic-range-limit-mix(no-limit 30%, constrained 30%, standard 30%);
dynamic-range-limit-mix(
    no-limit 20%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%
)
```

### Parameters

- {{cssxref("dynamic-range-limit")}} {{cssxref("&lt;percentage>")}}
  - : A pair consisting of a `dynamic-range-limit` value (which can be another `dynamic-range-limit-mix()` function) and a `<percentage>` between `0%` and `100%` (inclusive). The `<percentage>` specifies the proportion of a `dynamic-range-limit` keyword value in the custom limit. The `dynamic-range-limit-mix()` function can take two or more of these pairs as parameters.

### Return value

A custom maximum luminance limit, expressed as a number of photographic stops higher than the HDR reference white. For privacy reasons, the actual calculated result is not exposed.

## Description

The {{cssxref("dynamic-range-limit")}} property allows you to control the brightness of High Dynamic Range (HDR) content. The `dynamic-range-limit-mix()` function can be provided as a value of `dynamic-range-limit`, and enables you to create custom brightness limits by mixing together percentages of the `dynamic-range-limit` keyword values.

### Calculating the percentages

When the given percentages add up to `100%`, the result is obvious:

```css
/* standard 70%, no-limit 30% */
dynamic-range-limit-mix(standard 70%, no-limit 30%);
```

When the given percentages do not add up to `100%`, the resulting percentages are equal to the given percentages expressed proportionately to one another so the total equals `100%`:

```css
/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 20%, constrained 30%);

/* no-limit 20%, constrained 40%, standard 40% */
dynamic-range-limit-mix(no-limit 40%, constrained 80%, standard 80%);
```

If a `dynamic-range-limit` keyword value is used more than once, the percentages for that keyword value are added together to get the total percentage:

```css
/* constrained 70%, standard 30% */
dynamic-range-limit-mix(constrained 40%, standard 30%, constrained 30%);

/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 10%, constrained 30%, no-limit 10%);
```

If any single specified percentage is less than `0%` or greater than `100%`, the `dynamic-range-limit-mix()` — and therefore the associated `dynamic-range-limit` property value — is invalid. If a keyword is used more than once and the cumulative percentage is more than `100%`, the value is valid, and the proportion rules described above come into play.

### Nested `dynamic-range-limit-mix()` functions

You can nest `dynamic-range-limit-mix()` functions inside one another. When doing so, the same rules explained earlier apply, and each set of percentages is calculated separately and then added. In the following example:

```css
dynamic-range-limit-mix(
    no-limit 10%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%,
    dynamic-range-limit-mix(constrained 10%, no-limit 30%) 20%
)
```

- The first line gives us `no-limit 10%`.
- The second line gives us `standard 5%` (`25%` of `20%`) and `constrained 15%` (`75%` of `20%`).
- The third line gives us `constrained 5%` (10/40 of `20%` which equals `25%` of `20%`) and `no-limit 15%` (30/40 of `20%` which equals `75%` of `20%`).

Adding these up to get the raw percentages gives us:

```css
dynamic-range-limit-mix(standard 5%, constrained 20%, no-limit 25%)
```

The above percentages add up to `50%`, so need to be doubled to get the final percentages. The computed value is therefore:

```css
dynamic-range-limit-mix(standard 10%, constrained 40%, no-limit 50%)
```

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic usage

Consider an {{htmlelement("img")}} element being used to embed an HDR image on a web page:

```html
<img src="my-hdr-image.jpg" alt="my image" />
```

On HDR displays, the brightest areas of the image could prove to be jarring and uncomfortable to look at. To solve this problem, we could set the image's `dynamic-range-limit` property to `dynamic-range-limit-mix(standard 70%, no-limit 30%)`, which gives it a maximum luminance limit of only slightly brighter than HDR reference white:

```css
img {
  dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);
}
```

> [!NOTE]
> You can see the `dynamic-range-limit` property in action in our [dynamic-range-limit property demo](#), which includes an HDR image that can be hovered and focused to transition the `dynamic-range-limit` value. [View the example live](#) in a display capable of displaying HDR colors, and try it out.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("dynamic-range-limit")}}
