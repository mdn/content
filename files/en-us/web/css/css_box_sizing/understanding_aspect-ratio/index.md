---
title: Understanding aspect-ratio
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
page-type: guide
spec-urls: https://drafts.csswg.org/css-sizing/#aspect-ratio
---

This guide will focus on element aspect ratios and controlling aspect ratio with CSS for design esthetics and to improved user experience and page loading performance.

## Understanding aspect ratio

When an element is rendered to the page, if no CSS is applied and no HTML sizing attributes are included, the user agent will render the object at its natural size.

Every element rendered to the page has a height, a width, and an {{glossary("aspect ratio")}}, which is the ratio between the width and height. These natural dimensions, the size of the media object without any sizing, scaling, zooming, or borders applied, is its natural or {{glossary("intrinsic size")}}. An element's intrinsic size is determined by the element itself, not by any formatting ([box sizing](/en-US/docs/Web/CSS/CSS_box_sizing), border, marging, padding, etc.) applied.

Replaced elements like {{htmlelement("img")}} and {{htmlelement("video")}} are replaced with media that have set dimensions and therefore an intrinsic aspect ratio. If this content is auto-sized or you provide a size for only one dimension, such as the width, and browser will automatically resize the other dimension, in this case the height, maintaining the media's original aspect ratio.

Consider a raster image, such as a JPEG, PNG, or GIF. If you place an image on a page and do not set a height or width, either via {{htmlelement("img")}} attributes or with CSS, it will be displayed at its intrinsic size. If a single dimension is set on the image, such as `width: 100%`, the user agent will preserve its aspect ratio.

In this example, the image is displayed at `55px` wide, `110px` wide, and at its natural [`width: auto`](/en-US/docs/Web/CSS/width) size of `220px`.

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

Only when you provide sizes for both dimensions is there a risk of distorting the media. For example, if you set a variable aspect ratio, such as by setting `width: 100vw; height: 100vh;`, the image will appear either stretched or squashed if the viewport's aspect ratio differs from the images aspect ratio.

In this examples, the same image is repeated three times, explicitly sized with the same {{cssxref("height")}} value (`110px`) but different {{cssxref("width")}} values (`55px`, `110px`, and `220px`):

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

While the aspect-ratio of a replaced element is maintained by default, when the intrinsic size of a non-replaced element is changed the aspect ratio usually changes. For example, identical content may be two lines on a wide screen or in a wide parent container and six lines on a narrow screen or container.

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

```html hidden live-sample___alder2
<p>Short text:</p>
<blockquote>Breath.</blockquote>
<p>longer text:</p>
<blockquote>You're perfect just as you are.</blockquote>
```

```css live-sample___alder2
blockquote {
  inline-size: max-content;
  aspect-ratio: 1;
}
```

In this example, the blockquotes are as wide as they need to be to fit the content. The width effect was accomplished by setting the {{cssxref("inline-size")}} to {{cssxref("max-content")}}. The square effect was accomplished with the CSS {{cssxref("aspect-ratio")}} property. The value of `1` creates a square; the block direction is defined to be as tall as the element is wide, without the use of the {{cssxref("height")}} or {{cssxref("block-size")}} properties.

```css hidden live-sample___alder2
blockquote {
  border: 3px dotted #ccc;
  padding: 0 3px;
  margin: 20px 0;
  background-color: #ededed;
}
```

{{EmbedLiveSample("alder2", "100", "400")}}

We've always been able to preserve a replaced element's aspect ratio. The rest of this article focuses on setting aspect ratios for non-replaced elements.
