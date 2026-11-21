---
title: "`filter()` CSS function"
short-title: filter()
slug: Web/CSS/Reference/Values/image/filter
page-type: css-function
browser-compat: css.types.image.filter
sidebar: cssref
---

The **`filter()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) applies one or more filter effects, such as a blur or a color change, to an {{cssxref("image")}}, and returns the filtered image.

{{InteractiveExample("CSS Demo: filter()")}}

```css interactive-example-choice
background-image: url("/shared-assets/images/examples/leopard.jpg");
```

```css interactive-example-choice
background-image: filter(
  url("/shared-assets/images/examples/leopard.jpg"),
  blur(5px)
);
```

```css interactive-example-choice
background-image: filter(
  url("/shared-assets/images/examples/leopard.jpg"),
  grayscale(100%)
);
```

```css interactive-example-choice
background-image: filter(
  url("/shared-assets/images/examples/leopard.jpg"),
  sepia(100%) brightness(80%)
);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">The text isn't filtered.</div>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  height: 100%;
  background-size: cover;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 2px 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Syntax

```css
/* A single filter function */
filter(url("photo.jpg"), blur(5px))

/* Several filter functions, applied in order */
filter(url("photo.jpg"), grayscale(100%) brightness(120%))

/* Filtering a gradient */
filter(linear-gradient(to right, red, blue), hue-rotate(90deg))

/* Referencing an SVG filter */
filter(url("photo.jpg"), url("filters.svg#noise"))
```

### Parameters

The `filter()` function accepts two comma-separated parameters:

- {{cssxref("image")}}
  - : The image to filter. This can be any `<image>` value, such as a {{cssxref("url_function", "url()")}} or a [gradient](/en-US/docs/Web/CSS/Reference/Values/gradient).
- Filter list
  - : One or more filter effects, separated by spaces, to apply to the image. This accepts the same values as the {{cssxref("filter")}} property: {{cssxref("filter-function")}} values, such as {{cssxref("filter-function/blur", "blur()")}} or {{cssxref("filter-function/sepia", "sepia()")}}, and `url()` references to SVG {{SVGElement("filter")}} elements. The filters are applied in the order they're listed.

### Return value

An {{cssxref("image")}}: the original image with the filters applied.

## Description

The `filter()` function lets you apply filter effects to a single image, wherever an `<image>` value is accepted, such as in the {{cssxref("background-image")}}, {{cssxref("border-image-source")}}, or {{cssxref("list-style-image")}} properties.

This is different from the {{cssxref("filter")}} property, which applies filter effects to the whole element, including its text, borders, and children. With `filter()`, you can, for example, blur or darken a background image to make the text on top of it easier to read, without affecting the text.

### Size of the filtered image

The filtered image keeps the size and position of the original image. Effects that would draw outside the original image are clipped to the image's area. For example, a {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} applied to a fully opaque image may have no visible effect, because the shadow is drawn outside the image.

The {{cssxref("filter-function/blur", "blur()")}} function blurs the image using copies of the pixels at its edges, instead of blurring the edges with transparent pixels. This avoids a faded border around the blurred image.

### Animating `filter()` images

When a transition or animation goes between two `filter()` images that use the same original image and differ only in their filter functions, the filter functions are interpolated, as they would be for the `filter` property. For example, an image can transition smoothly from `blur(0)` to `blur(5px)`. Otherwise, the two images are interpolated in the same way as other images, by cross-fading between them.

## Formal syntax

{{csssyntax}}

## Examples

### Filtering a background image without affecting text

In this example, we compare the `filter` property and the `filter()` function. Both boxes blur and darken the same background image.

#### HTML

```html
<div class="container">
  <div class="filter-property">Filtered with the filter property</div>
  <div class="filter-function">Filtered with the filter() function</div>
</div>
```

#### CSS

The first box uses the `filter` property, which also blurs the box's text. The second box uses the `filter()` function in its `background-image`, so only the background image is blurred and darkened.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.container > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 160px;
  padding: 1rem;
  background-size: cover;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
}

.filter-property {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  filter: blur(4px) brightness(60%);
}

.filter-function {
  background-image: filter(
    url("/shared-assets/images/examples/leopard.jpg"),
    blur(4px) brightness(60%)
  );
}
```

```css hidden
@layer no-support {
  @supports not (background-image: filter(url("a.png"), blur(1px))) {
    body::before {
      content: "Your browser doesn't support the filter() function";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Filtering a background image without affecting text", "", 250)}}

In the first box, the text is blurred along with the background image, which makes it hard to read. In the second box, only the background image is blurred and darkened, and the text stays sharp.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("filter")}} property
- {{cssxref("backdrop-filter")}} property
- {{cssxref("filter-function")}} data type
- {{cssxref("image")}} data type
- [CSS filter effects](/en-US/docs/Web/CSS/Guides/Filter_effects) module
