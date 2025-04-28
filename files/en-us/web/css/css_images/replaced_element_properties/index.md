---
title: Styling replaced elements
slug: Web/CSS/CSS_images/Replaced_element_properties
page-type: guide
---

{{CSSRef}}

Some [CSS](/en-US/docs/Web/CSS) properties apply to all elements, some only to grid and flex containers, others only to transformable elements. This guide introduces the properties that only apply to _replaced elements_.

A **{{glossary("replaced elements", "replaced element")}}** is an element whose representation is outside the scope of CSS; they're external objects whose representation is independent of the CSS formatting model. Some replaced elements, such as {{HTMLElement("iframe")}} elements, may have stylesheets of their own, but they don't inherit the styles of the parent document.

## Using CSS with replaced elements

CSS handles replaced elements specifically in some cases, like when calculating margins and some `auto` values. Only replaced elements can ever have {{glossary("intrinsic size", "intrinsic dimensions")}}. Some replaced elements, but not all, have intrinsic dimensions or a defined baseline, which is used by some CSS properties, such as {{cssxref("vertical-align")}}.

While document styles can set the size and position of replaced elements, document styles dont affect the replaced elements' content, with some exceptions: The [CSS images module](/en-US/docs/Web/CSS/CSS_images) includes properties which support controlling the positioning of the element's content within its box.

## Controlling object position within the content box

The CSS images module defines two properties which can be used to specify how the object contained within the replaced element should be positioned within the element's box area. The `object-fit` property is used to size objects, while the `object-position` property is used to position them.

### The `object-fit` property

The `object-fit` property specifies how the replaced element's content object should be fitted to the containing element's box. The property defines how images, videos and other embeddable media formats respond to the height and width of the replaced element's content box. If the height, width, or aspect-ratio of a element differ from the resource that will be occupying space reserved for the element, the `fill`, `contain`, `cover`, `scale-down`, and `none` values define whether the browser should scale the resource, cover the allocated space, contain the asset withing the space, or allow the resource to be distorted.

When contained or scaled down, any areas of the box not covered by the replaced element will show the element's background.

The `object-fit` property has no effect on {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, and {{HTMLElement("fencedframe")}} elements.

![A square photo of the progressive pride flag flying near a chimney.](https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg)

If we place the image, a square with a 1:1 aspect ratio, in a 100px x 300px box (1:3 aspect ratio), by default the image will fill the box, distorting itself. We can use the `object-fit` property to define how the image should be rendered when forced into a box with a different size and aspect ratio:

```html hidden live-sample___example1 live-sample___example2
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<p>
  <label><input type="checkbox" /> Change dimensions</label>
</p>
```

```css hidden live-sample___example1 live-sample___example2
body {
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
  grid-auto-flow: column;
  max-width: 98%;
  margin: 10px auto 0;
}
img {
  width: 100px;
  height: 300px;
  outline: 2px solid purple;
}
body:has(:checked) img {
  width: 300px;
  height: 100px;
}
```

```css live-sample___example1 live-sample___example2
img:nth-of-type(1) {
  object-fit: fill;
}
img:nth-of-type(2) {
  object-fit: cover;
}
img:nth-of-type(3) {
  object-fit: contain;
}
img:nth-of-type(4) {
  object-fit: scale-down;
}
img:nth-of-type(5) {
  object-fit: none;
}
img:nth-of-type(6) {
  /* no object-fit property */
  outline: 2px dashed red;
}
```

{{EmbedLiveSample('example1','100%','650')}}

Check the box to set the height and width values. Note that only the `fill` value (the default) distorts the original image. With all other values, the intrinsic aspect ratio of the image is maintained.

### The `object-position` property

The `object-position` property specifies the alignment of the replaced element's content object within the element's box.

Often used in conjunction with the {{cssxref("object-fit")}} property, it takes as it's value a {{cssxref("position_value", "&lt;position&gt;")}} value, the same value type at used in for {{cssxref("background-position")}}.

```css live-sample___example2
img {
  object-position: bottom right;
}
```

{{EmbedLiveSample('example2','100%','650')}}

```html hidden live-sample___example3
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

It can be used without `object-fit`. In this case, the image is rendered at it's intrinsic size (218px x 218px), with the position of the contents of the image set by the `object-position` value.

```css hidden live-sample___example3
img {
  margin: 10px 0 0 10px;
}
```

```css live-sample___example3
img {
  outline: 2px solid;
  object-position: 114px 72px;
}
```

{{EmbedLiveSample('example3','100%','250')}}

The `object-position` property works equally well with `<iframe>`, `<video>`, and `<embed>` elements as it does for `<img>`.

## See also

- [Understanding aspect ratios](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS images](/en-US/docs/Web/CSS/CSS_images) module
- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
