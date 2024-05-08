---
title: Understanding aspect ratios and the aspect-ratio property
slug: Web/CSS/CSS_box_sizing/Understanding_aspect-ratio
page-type: guide
spec-urls: https://drafts.csswg.org/css-sizing/#aspect-ratio
---

{{CSSRef}}

When developing responsive sites, you often want to be able to set the width of an element to a percentage and have the height change size proportionally, maintaining a specific aspect ratio. When it comes to replaced elements, like images and video, maintaining a specific aspect ratio is not only necessary for {{glossary("responsive web design")}}, but it's a vital component of good user experience by preventing [cumulative layout shift](/en-US/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images).

Using CSS, you can adjust the size of replaced and non-replaced elements based on their aspect ratio. In this guide, we will learn about the `aspect-ratio` property, discuss aspect ratios for replaced and non-replaced elements, and then examine some common aspect ratio use cases.

## CSS `aspect-ratio` property

The CSS {{cssxref("aspect-ratio")}} property value defines the preferred width-to-height ratio of an element's box. The value is either a {{cssxref("ratio")}}, the keyword `auto`, or a space-separated combination of both.

The `<ratio>` is the ratio of the width and height, in that order. It is represented by two positive {{cssxref("number")}} values separated by a forward slash (`/`) or a single `<number>`. When a single number is used, it is the same as writing the ratio as `<number> / 1`, which is also the width divided by the height.

The following values are all equivalent:

```css
aspect-ratio: 3 / 6;
aspect-ratio: 1 / 2;
aspect-ratio: 0.5 / 1;
aspect-ratio: 0.5;
```

The following values are also all equivalent:

```css
aspect-ratio: 9/6;
aspect-ratio: 3/2;
aspect-ratio: 1.5;
```

```html hidden live-sample___number
<div>0.5</div>
<div>1.5</div>
```

```css hidden live-sample___number
div {
  height: 121px;
  aspect-ratio: 0.5;
  background-color: pink;
  line-height: 100px;
  text-align: center;
  float: left;
  background-image: repeating-linear-gradient(
      to right,
      black 0px 1px,
      transparent 1px 20px
    ), repeating-linear-gradient(black 0px 1px, transparent 1px 20px);
  background-size:
    181px 5px,
    5px 121px;
  background-repeat: no-repeat;
}
div + div {
  aspect-ratio: 1.5;
  background-color: lightgreen;
  margin-left: 10px;
}
```

{{EmbedLiveSample("number", "100", "130")}}

The effect of the `auto` keyword depends on whether the element on which it is applied is a replaced element or not. For replaced elements with an intrinsic aspect ratio, `auto` means the intrinsic aspect ratio should be used. In all other instances, the `auto` value means the box has no preferred aspect ratio. In both cases, this is the default behavior as if no `aspect-ratio` property were applied.

When the value contains both the `auto` keyword and a `<ratio>` value, such as `aspect-ratio: auto 2 / 3;` or `aspect-ratio: 0.75 auto;`, the `auto` value is applied to replaced elements with a natural aspect ratio and the specified ratio of the `width / height` or `<number>` is used as the preferred aspect ratio.

You will have noticed the word "preferred" in the definitions above. The `aspect-ratio` value is not always applied when set. The `aspect-ratio` property sets a "preferred" aspect ratio, so only ever has an effect if at least one of the box's sizes is automatic.

When both the height and width or inline and block sizes are explicitly set, the `aspect-ratio` property value is ignored. In this case, there is no dimension that is allowed to be automatically sized - the preferred sizes are explicitly set - so the `aspect-ratio` property has no effect. When you declare both the inline and block dimensions, those take precedence.

With replaced elements, if you don't explicitly set a value (other than `auto`) to either dimension, both will default to their intrinsic size (any `aspect-ratio` value isn't applied). The `aspect-ratio` will apply to non-replaced elements that don't have a dimension explicitly set, as non-replaced elements are either [intrinsically](/en-US/docs/Glossary/Intrinsic_Size) or [extrinsically](/en-US/docs/Glossary/Intrinsic_Size#extrinsic_sizing) sized, getting their size from their content, container, [box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)properties, etc.

When an element is rendered to the page, if no CSS is applied and no HTML sizing attributes are included, the user agent will render the object at its natural size.

Every element rendered to the page has a height and a width, and, therefore, an {{glossary("aspect ratio")}}, which is the ratio between the width and height. These natural dimensions, the size of the media object without any sizing, scaling, zooming, or borders applied, is its natural or {{glossary("intrinsic size")}}. An element's intrinsic size is determined by the element itself, not by any formatting ([box sizing](/en-US/docs/Web/CSS/CSS_box_sizing), border, margin, padding, etc.) applied.

## Adjusting aspect ratios of replaced elements

Replaced elements like {{htmlelement("img")}} and {{htmlelement("video")}} are replaced with media that have set dimensions and, therefore, an intrinsic aspect ratio. Consider a raster image, such as a JPEG, PNG, or GIF. If you place an image on a page and do not set a height or width, either via {{htmlelement("img")}} attributes or with CSS, it will be displayed at its intrinsic size.

```html hidden live-sample___original
<img src="flag.jpg?image=good" alt="Pride flag" />
```

{{EmbedLiveSample("original", "100", "230")}}

This is a `220px` square image with no CSS applied; it is displayed at its intrinsic or default size.

If replaced content is auto-sized or you provide a size for only one dimension, such as setting a value forwidth, the browser will automatically resize the other dimension, in this case, the height, while maintaining the media's original aspect ratio.

In this example, only the {{cssxref("width")}} is set on the image, so the user agent preserves its aspect ratio. The same image is repeated three times displayed at different widths: `55px`, `110px`, and at its natural size of `220px` via the [`width: auto`](/en-US/docs/Web/CSS/width) value.

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

Only when you provide sizes for both dimensions is there a risk of distorting the replaced element. For example, setting `width: 100vw;` and `height: 100vh;` on an image creates a variable aspect ratio; the image will appear either stretched or squashed when the viewport's aspect ratio differs from the image's natural aspect ratio.

In this example, the same image is repeated three times, explicitly sized with the same {{cssxref("height")}} value (`110px`) but different {{cssxref("width")}} values (`55px`, `110px`, and `220px`).

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

We distorted the image by setting both a `height` and `width`. We squashed the first one and stretched the third.

We could have created this same distorted effect using the CSS {{cssxref("aspect-ratio")}} property, by setting a single dimension (not both or neither) and providing a value other than `1` (or `1 / 1`). You likely don't want to do this, but it's good to know that it's possible.

```html hidden live-sample___stretch
<img src="flag.jpg" alt="Pride flag" />
```

```css live-sample___stretch
img {
  height: 100vh;
  aspect-ratio: 3;
}
```

{{EmbedLiveSample("stretch", "100", "230")}}

We declared a single dimension; `100vh` is the full height of the example {{htmlelement("iframe")}} viewport. For `aspect-ratio` to apply to replaced elements, one dimension must be set. Setting both or neither doesn't work.

### The `object-fit` property

To fit a replaced element to the content of its container while maintaining its intrinsic aspect ratio, set the {{cssxref("object-fit")}} property set to `cover` or `contain`. This will resize the replaced element and either clip it to "cover" the container or display it at a smaller size fully "contained" within it.

In this example, we're placing our square image into a grid of three items with an aspect ratio of `5 / 2`.

We include a container with three items, each with one image:

```html live-sample___imagegrid
<div class="grid">
  <div>
    <img src="flag.jpg" alt="Pride flag" />
  </div>
  <div>
    <img class="cover" src="flag.jpg" alt="Pride flag" />
  </div>
  <div>
    <img class="contain" src="flag.jpg" alt="Pride flag" />
  </div>
</div>
```

We create a grid with each item having an aspect ratio of 2.5 with a minimum width of `150px`, and therefore a minimum height of 60px, but the final width and height will be determined by the width of the example's iframe, which is based on your viewport size:

```css live-sample___imagegrid
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  font-size: 0; /* to minimize whitespace */
}

div div {
  aspect-ratio: 5 / 2;
  background-color: #ccc;
}
```

We then size the images and set the `object-fit` property on the last two images:

```css live-sample___imagegrid
img {
  height: 100%;
  width: 100%;
}
.cover {
  object-fit: cover;
}
.contain {
  object-fit: contain;
}
```

{{EmbedLiveSample("imagegrid", "100", "100")}}

Only the first image is distorted (stretched). We could have used the `fill` value of `object-fit` to create the same effect. The `cover` image is the full width of the container, centered vertically, and clipped to fit in the container. The `contain` value is contained; shrunk to fit and centered horizontally.

## Defining aspect ratios for non-replaced elements

While the aspect ratio of a replaced element is maintained by default, when the intrinsic size of a non-replaced element is changed the aspect ratio usually changes. For example, identical content may be three lines on a widescreen or in a wide parent container and eight lines on a narrow screen or container.

In this example, the same quote is displayed in `200px` and `600px` wide containers, and a square set with a height matching its `200px` width:

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
<p>Aspect ratio with overflow:</p>
<blockquote>
  <q
    >When you stop living your life based on what others think of you real life
    begins. At that moment, you will finally see the door of self acceptance
    opened.</q
  >
  - Shannon L. Alder
</blockquote>
<p>
  <label
    ><input type="checkbox" checked /> toggle <code>overflow: auto;</code> and
    <code>overflow: visible;</code></label
  >
</p>
```

```css hidden live-sample___alder
blockquote {
  border: 3px dotted #ccc;
  padding: 0 3px;
  margin: 20px 0;
  font-size: 1.25rem;
  line-height: 1.5;
}
body:has(:checked) blockquote {
  overflow: auto;
}
:checked + code,
:not(:checked) + code + code {
  outline: 1px solid green;
}
```

```css live-sample___alder
blockquote {
  width: 200px;
}
blockquote:nth-of-type(2) {
  width: 600px;
}
blockquote:nth-of-type(3) {
  height: 200px;
}
```

{{EmbedLiveSample("alder", "100", "800")}}

To highlight the issue with setting an non-replaced element's aspect ratio via size dimensions, toggle the {{cssxref("overflow")}} property between `auto` and `visible`.

While it's possible to define an aspect ratio on non-replaced elements by setting both dimensions and hiding overflowing content, the CSS {{cssxref("aspect-ratio")}} property provides explicit aspect ratio support. This means a specific aspect-ratio can be set even when you don't know how content or screen sizes.

In this example, we render square boxes, regardless of the width of the text, by setting `aspect ratio: 1` on {{htmlelement("blockquote")}}, a non-replaced element:

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

```css hidden live-sample___words
blockquote {
  border: 1px solid #ccc;
  padding: 1px;
  margin: 20px 0;
  background-color: #ededed;
}
```

{{EmbedLiveSample("words", "100", "400")}}

Each box has one dimension defined: the {{cssxref("inline-size")}}, which is the width in horizontal languages, is set to {{cssxref("max-content")}}, which sets the size to be as wide as it needs to be to fit the content without wrapping. The second dimension, in this case, the {{cssxref("block-size")}} or {{cssxref("height")}}, is set to be the same length as the first dimension. This is accomplished with the CSS {{cssxref("aspect-ratio")}} property. We defined the desired width-to-height ratio of the element's box to be `1`, which is the same a `1 / 1`, a square; setting the block direction to be as tall as the element is wide, without the use of the {{cssxref("height")}} or {{cssxref("block-size")}} properties.

In these examples, a size was explicitly set on the element itself. When working with non-replaced elements, aspect ratio works when there is no size dimension explicitly set.

### Creating a circle based on the container size

The inline-size of non-replaced block level elements are the size of their containers content box. Because they have an size by default, they don't need to have an explicit size set for the `aspect-ratio` property to work.

In this example, we have a container {{htmlelement("div")}} that is `200px` wide with a child {{htmlelement("p")}}. This `200px` includes `5px` of padding on each side, so the content-box's inline-size is `190px`. Without setting a height or width on the nested paragraph, we know its inline-size is `190px`. With `aspect-ratio: 1` set, the paragraph will be `190px` tall, unless it has visible overflowing content causing it to be taller (it doesn't) .

The height of the `<div>` is not explicitly set, but it contains the 190px tall paragraph, the `5px` of padding on top and bottom, plus the combined heights of the {{htmlelement("p")}} default top and bottom margins, so it is taller than it is wide. Both elements have a {{cssxref("border-radius")}} of `50%`, so the container is an oval while the child, with an `aspect-ratio` of `1` but no inline or block sizing explicitly defined, is a circle.

```html live-sample___circle
<div><p>Hello world</p></div>
```

```css live-sample___circle
div,
p {
  border-radius: 50%;
}
div {
  width: 200px;
  padding: 5px;
  background-color: #66ccff;
}
p {
  aspect-ratio: 1;
  text-align: center;
  border: 10px solid #ffffff;
  background-color: #f4aab9;
}
```

{{EmbedLiveSample("circle", "100", "250")}}

To make the `<div>` a circle, we could have set the `height` and `width` to the same value, or set `aspect-ratio: 1` and set the `overflow` to `auto` or `hidden`, or we could have just removed the margins on the paragraph with [`margin-block: 0`](/en-US/docs/Web/CSS/margin-block).

```html live-sample___circle2
<section>
  <div><p>Hello world</p></div>
  <div><p>Hello world</p></div>
  <section></section>
</section>
```

```css hidden live-sample___circle2
section {
  display: flex;
  gap: 20px;
}
div {
  width: 200px;
  padding: 5px;
  background-color: #66ccff;
}
p {
  text-align: center;
  border: 10px solid #ffffff;
  background-color: #f4aab9;
}
```

```css live-sample___circle2
div,
p {
  aspect-ratio: 1;
  border-radius: 50%;
}
div:first-of-type {
  overflow: hidden;
}
div:last-of-type p {
  margin-block: 0;
}
```

{{EmbedLiveSample("circle2", "100", "250")}}

## Common use cases

Let's look at a few examples of using `aspect-ratio` to solve some common use cases in responsive designs:

### Responsive external assets

When embedding content from third-party sites, such as videos from TikTok, Youtube, or Instagram, you want the content to be responsive. The code snippet you include on your website that includes these external videos generally creates and {{htmlelement("iframe")}} which includes the video.

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

We can use the `aspect-ratio` feature of the `@media` media query and the CSS `aspect-ratio` property to size the iframe and the video it contains so that it is always as large as possible - taking up either the full width or height of the viewports - no matter the size of the viewport, while maintaining a set aspect ratio.

We set the landscape-oriented Youtube video to be as wide as the viewport and both portrait-oriented Titkok and Instagram video iframes to be as tall as the viewport. If a viewport's aspect ratio is wider than 16:9, we set the Youtube video to be the height of the viewport. If the viewport is narrower than 9:16, we set both Instagram and Tiktok videos to the width of the viewport.

```css
iframe.youtube {
  aspect-ratio: 16/9;
  width: 100vw;
  height: auto;
}
iframe.instagram,
iframe.tiktok {
  aspect-ratio: 9/16;
  height: 100vh;
  width: auto;
}

/* if the viewort is very wide but not very tall */
@media (aspect-ratio > 16 / 9) {
  iframe.youtube {
    width: auto;
    height: 100vh;
  }
}
/* if the viewort is very tall but not very wide */
@media (aspect-ratio < 9 / 16) {
  iframe.instagram,
  iframe.tiktok {
    height: auto;
    width: 100vw;
  }
}
```

### Grid of square cells

A grid of square cells can be created by defining fixed column track sizes with each row being the same size as the column track. However, when creating responsive grids using `auto-fill` to fit as many column tracks as will fit in the container, we don't know the width of each item, so we don't know what height to set to create square items.

By setting an aspect ratio on the items, we can ensure when the grid items are laid out, each grid item will be as tall as it is wide, creating square grid items no matter the width or height.

In this square grid item example, the grid tracks are auto-sized, taking their size from the items. Each item will be at least 95px wide but could be much wider. No matter the width, each item will be a square, with the height being sized by the `aspect-ratio` to be as tall as it is wide:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
}

.item {
  aspect-ratio: 1;
}
```

```css hidden
div {
  gap: 20px;
  font-size: 1.1;
}

div div {
  background-color: #ccc;
  aspect-ratio: 1;
  counter-increment: items;
}
div div::after {
  content: counter(items);
}
.item::after {
  /*  hide the number if there's content  */
  position: absolute;
  color: transparent;
}
```

```html hidden
<div class="grid">
  <div></div>
  <div></div>
  <div class="item">
    This text would overflow the parent, but we've set properties to prevent it
    from doing so.
  </div>
  <div></div>
  <div></div>
  <div></div>
  <div class="item"><img src="flag.jpg" alt="Pride flag" /></div>
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

For the content of a grid item to not grow beyond the preferred height set by the `aspect-ratio`, set the {{cssxref("min-height")}} to `0` and the {{cssxref("overflow")}} to a value other than `visible`. This will work for intrinsically sized content. If you have content that is intrinsically larger than the available space, set that content to not be larger than the grid item by setting the {{cssxref("max-height")}} ( or {{cssxref("max-width")}}, depending on the content) to `100%`.

```css
.item {
  min-height: 0;
  overflow: auto;
}
.item > * {
  max-height: 100%;
}
```

Alternatively, the [`object-fit` property](#the_object-fit_property) can be used.

{{EmbedLiveSample("grid of square cells", "100", "350")}}

## See also

- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
