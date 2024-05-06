---
title: Understanding aspect-ratio
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
page-type: guide
spec-urls: https://drafts.csswg.org/css-sizing/#aspect-ratio
---

When developing responsive sites, you often want to be able to set the inline-direction size to a percentage and have the block-direction change size proportionally, maintaining a specific aspect ratio. When it comes to images and video, maintaining these replaced elements' aspect ratio is not only necessary for {{glossary("responsive web design")}}, but it's a vital component of good user experience by preventing cumulative {{domxref("LayoutShift", "layout shift")}}.

With CSS, we can size replaced and non-replaced elements based on their aspect ratio. In this guide, we discuss controlling aspect ratio with CSS for design aesthetics and to improve user experience and page loading performance.

## Understanding aspect ratio

When an element is rendered to the page, if no CSS is applied and no HTML sizing attributes are included, the user agent will render the object at its natural size.

Every element rendered to the page has a height and a width, and, therefore, an {{glossary("aspect ratio")}}, which is the ratio between the width and height. These natural dimensions, the size of the media object without any sizing, scaling, zooming, or borders applied, is its natural or {{glossary("intrinsic size")}}. An element's intrinsic size is determined by the element itself, not by any formatting ([box sizing](/en-US/docs/Web/CSS/CSS_box_sizing), border, marging, padding, etc.) applied.

### Replaced elements

Replaced elements like {{htmlelement("img")}} and {{htmlelement("video")}} are replaced with media that have set dimensions and therefore an intrinsic aspect ratio. Consider a raster image, such as a JPEG, PNG, or GIF. If you place an image on a page and do not set a height or width, either via {{htmlelement("img")}} attributes or with CSS, it will be displayed at its intrinsic size.

If this content is auto-sized or you provide a size for only one dimension, such as the width, and browser will automatically resize the other dimension, in this case the height, maintaining the media's original aspect ratio.

In this example, a single dimension is set on the image, so the user agent preserves the image's aspect ratio. The image is displayed at `width: 55px`, `width: 110px`, and at its natural [`width: auto`](/en-US/docs/Web/CSS/width) size of `220px`.

```html hidden live-sample___image
<img src="flag.jpg" alt="Pride flag" />
<img src="flag.jpg" alt="Pride flag" />
<img src="flag.jpg" alt="Pride flag" />
```

```css hidden live-sample___image
img {
  width: 55px;
  margin-right: 5px;
}
img + img {
  width: 110px;
}
img + img + img {
  width: auto;
}
```

{{EmbedLiveSample("image", "100", "230")}}

Only when you provide sizes for both dimensions is there a risk of distorting the replaced element. For example, setting `width: 100vw; height: 100vh;` on an image creates a variable aspect ratio; the image will appear either stretched or squashed when the viewport's aspect ratio differs from the image's natural aspect ratio.

In this example, the same image is repeated three times, explicitly sized with the same {{cssxref("height")}} value (`110px`) but different {{cssxref("width")}} values (`55px`, `110px`, and `220px`):

```html hidden live-sample___imagebad
<img src="flag.jpg" alt="Pride flag" />
<img src="flag.jpg" alt="Pride flag" />
<img src="flag.jpg" alt="Pride flag" />
```

```css hidden live-sample___imagebad
img {
  width: 55px;
  height: 110px;
}
img + img {
  width: 110px;
}
img + img + img {
  width: 220px;
}
```

{{EmbedLiveSample("imagebad", "100", "120")}}

Declaring both a width and height distorted these images, squashing the first one and stretching the third.

In this examples, we used `height` and `width` to distort the image. By default, if only one of these values is set, the aspect ratio of a replaced element is preserved. We can set the {{cssxref("aspect-ratio")}} property to something other than the object's intrinsic aspect ratio to distort it. You likely don't want to do that, but it's possible.

```html hidden live-sample___stretch
<img src="flag.jpg" alt="Pride flag" />
```

```css hidden live-sample___stretch
img {
  aspect-ratio: 3;
}
```

{{EmbedLiveSample("stretch", "100", "230")}}

### Non-replaced elements

While the aspect ratio of a replaced element is maintained by default, when the intrinsic size of a non-replaced element is changed the aspect ratio usually changes. For example, identical content may be two lines on a widescreen or in a wide parent container and six lines on a narrow screen or container.

In this example, the same quote is displayed in `200px` and `800px` wide containers:

```html hidden live-sample___alder
<p>Narrow:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
<p>Wide:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
```

```css hidden live-sample___alder
blockquote {
  border: 3px dotted #ccc;
  padding: 0 3px;
  width: 200px;
  margin: 20px 0;
}
blockquote:last-of-type {
  width: 800px;
}
```

{{EmbedLiveSample("alder", "100", "300")}}

With CSS, we can also set an aspect ratio on non-replaced elements:

```html hidden live-sample___words
<p>Short text:</p>
<blockquote>Breath.</blockquote>
<p>longer text:</p>
<blockquote>You're perfect just as you are.</blockquote>
```

```css live-sample___words
blockquote {
  inline-size: max-content;
  aspect-ratio: 1;
}
```

In this example, the blockquotes are as wide as they need to be to fit the content. The width effect was accomplished by setting the {{cssxref("inline-size")}} to {{cssxref("max-content")}}. The square effect was accomplished with the CSS {{cssxref("aspect-ratio")}} property. The value of `1` creates a square; the block direction is defined to be as tall as the element is wide, without the use of the {{cssxref("height")}} or {{cssxref("block-size")}} properties.

```css hidden live-sample___words
blockquote {
  border: 3px dotted #ccc;
  padding: 0 3px;
  margin: 20px 0;
  background-color: #ededed;
}
```

{{EmbedLiveSample("words", "100", "400")}}

We've always been able to preserve a replaced element's aspect ratio. With the CSS {{cssxref("aspect-ratio")}} property, we can specify aspect ratios for both replaced and non-replaced elements.

## Common use cases

### Responsive external assets

When embedding content from third party sites, such as videos from TikTok, Youtube, or Instagram, you want the content to be responsive. The code snippet you include on your website that includes these external videos generally creates and {{htmlelement("iframe")}} which includes the video.

While every {{htmlelement("video")}} element has the aspect ratio of its media file, we're including an `<iframe>`, not a `<video>`. We need the `<iframe>` to be responsive while always maintaining the aspect ratio of the video it contains. We may want to set the iframe's width to `100%` of its container or `100vw` to be as wide as the viewport regardless of the viewport's size. Setting a height might stretch or squash the video. Instead, we set the `aspect-ratio` of the video's container to be the same aspect ratio as the video. Problem solved!

The standard aspect ratio for YouTube on a computer is 16:9. For Tiktok and Instagram, it's 9:16.

```css
.youtube {
  aspect-ratio: 16/9;
}
.instagram,
.tiktok {
  aspect-ratio: 9/16;
}
```

If we want the iframe and the video it contains to be as large as possible while being 100% visible and, of course, while maintaining the aspect ratio, we can use the `aspect-ratio` feature of the `@media` media query.

We set the landscape sized Youtube to be as wide as the viewport and both portrait-sized Titkok and Instagram to be as tall as the viewport. However, if a viewport's aspect ratio is wider than 16:9, Youtube is set to be only as tall as the viewport. If the viewport is narrower than 9:16, Instagram and Tiktok are set to be only as wide as the viewport.

```css
.youtube {
  aspect-ratio: 16/9;
  width: 100vw;
  height: auto;
}
.instagram,
.tiktok {
  aspect-ratio: 9/16;
  height: 100vh;
  width: auto;
}

@media (aspect-ratio > 16 / 9) {
  .youtube {
    width: auto;
    height: 100vh;
  }
}
@media (aspect-ratio < 9 / 16) {
  .instagram,
  .tiktok {
    height: auto;
    width: 100vw;
  }
}
```

### Grid of square cells

A grid of square cells can be created by defining fixed column track sizes with each row being the same size as the column track. However, when creating responsive grids using `auto-fill` to fit as many column tracks as will fit in the container, we don't know what the width of each item, so we don't know what height to set to create square items.

By setting an aspect ratio on the items, we can ensure when the grid items are laid out, each grid item will be as tall as it is wide, creating square grid items no matter the width or height.

In this square grid item example, the grid tracks are auto-sized, taking their size from the items, with the height being sized by the `aspect-ratio` to be as tall as they are wide:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.item {
  aspect-ratio: 1;
}
```

```css hidden
div {
  gap: 20px;
}

div div {
  background-color: #ccc;
  aspect-ratio: 1;
  counter-increment: items;
}
div div:after {
  content: counter(items);
}
```

```html hidden
<div class="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```
