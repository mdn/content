---
title: "filter() CSS function"
short-title: "filter()"
slug: Web/CSS/Reference/Values/filter
page-type: css-function
browser-compat: css.types.image.filter
sidebar: cssref
spec-urls:
  - https://drafts.csswg.org/filter-effects-1/#FilterCSSImageValue
---

The **`filter()`** CSS function applies graphical filter effects to an image and returns the modified image. It can be used anywhere a CSS `<image>` value is accepted, such as the `background-image` property.

Unlike the CSS [`filter`](/en-US/docs/Web/CSS/Reference/Properties/filter) property, which applies effects to an element's rendering, the `filter()` function creates a filtered image value that can be used as an image source.

## Syntax

```css
filter( [ <image> | <string> ], <filter-value-list> )
```

### Parameters

- `<image>`: An image value to process, such as a `url()` or a gradient.
- `<string>`: A string representing an image URL.
- `<filter-value-list>`: One or more filter functions, using the same syntax as the CSS [`filter`](/en-US/docs/Web/CSS/Reference/Properties/filter) property. Examples include `blur()`, `grayscale()`, and `contrast()`.

## Examples

### Applying a filter to a background image

The following example uses `filter()` to create a blurred background image:

```css
.banner {
  background-image: filter(url("landscape.jpg"), blur(5px));
}
```

### Combining filter functions

You can combine multiple filter functions in the second argument. They are applied in order:

```css
.banner {
  background-image: filter(url("landscape.jpg"), grayscale(100%) blur(5px));
}
```

### Providing a fallback

You can declare a regular image first so browsers that do not support `filter()` can still display the image:

```css
.banner {
  background-image: url("landscape.jpg");
  background-image: filter(url("landscape.jpg"), grayscale(100%));
}
```

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`filter`](/en-US/docs/Web/CSS/Reference/Properties/filter)
- [`blur()`](/en-US/docs/Web/CSS/Reference/Values/filter-function/blur)
- [`grayscale()`](/en-US/docs/Web/CSS/Reference/Values/filter-function/grayscale)
- [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects/#FilterCSSImageValue)
