---
title: "`opacity()` CSS function"
short-title: opacity()
slug: Web/CSS/Reference/Values/filter-function/opacity
page-type: css-function
browser-compat: css.types.filter-function.opacity
sidebar: cssref
---

The **`opacity()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) applies transparency to the samples in the input image. Its result is a {{cssxref("filter-function")}}.

{{InteractiveExample("CSS Demo: opacity()")}}

```css interactive-example-choice
filter: opacity(1);
```

```css interactive-example-choice
filter: opacity(80%);
```

```css interactive-example-choice
filter: opacity(50%);
```

```css interactive-example-choice
filter: opacity(0.2);
```

```css interactive-example-choice
filter: opacity(0);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

> [!NOTE]
> The `opacity()` filter function is similar to the {{cssxref("opacity")}} property. While the `opacity` property applies transparency to an entire element and its descendants (creating a new stacking context), the `opacity()` filter function applies transparency to the rendered graphical output as part of a filter chain. Both can take advantage of hardware acceleration in modern browser compositing engines depending on layout context.

## Syntax

```css
opacity(amount)
```

### Parameters

- `amount` {{Optional_Inline}}
  - : The degree of opacity applied to the input image, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value of `0%` (or `0`) is completely transparent, while a value of `100%` (or `1`) leaves the input unchanged. Values between `0%` and `100%` (or `0` and `1`) are linear multipliers on the effect. Values greater than `100%` (or `1`) are allowed, but are clamped to `1` (`100%`). Negative values are not allowed; they are clamped to `0`. If omitted, the default value is `1`. The initial value for {{Glossary("interpolation")}} is `1`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic examples of opacity()

```css
opacity(0%)    /* Completely transparent */
opacity(0)     /* Equivalent to 0% */

opacity(50%)   /* 50% opacity (half transparent) */
opacity(0.5)   /* Equivalent to 50% */

opacity(100%)  /* Completely opaque (no effect) */
opacity(1)     /* Equivalent to 100% */

opacity()      /* Default value of 1 when omitted */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other {{cssxref("filter-function")}} functions available to be used in values of the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties include:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- The CSS {{cssxref("opacity")}} property
