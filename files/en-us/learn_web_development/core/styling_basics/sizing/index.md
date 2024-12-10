---
title: Sizing items in CSS
slug: Learn_web_development/Core/Styling_basics/Sizing
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In the various lessons so far, you have come across a number of ways to size items on a web page using CSS. Understanding how big the different features in your design will be is important. So, in this lesson we will summarize the various ways elements get a size via CSS and define a few terms about sizing that will help you in the future.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        HTML basics (study
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML syntax</a
        >), <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS basic syntax</a>, <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS selectors</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Understand the concept of intrinsic size.</li>
          <li>Setting absolute and percentage sizes.</li>
          <li>Setting maximum and minimum width and height.</li>
          <li>Understand viewport units, and why they are useful.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## The natural or intrinsic size of things

HTML Elements have a natural size, set before they are affected by any CSS. A straightforward example is an image. An image file contains sizing information, described as its **intrinsic size**. This size is determined by the image _itself_, not by any formatting we happen to apply.

If you place an image on a page and do not change its height or width, either by using attributes on the `<img>` tag or else by CSS, it will be displayed using that intrinsic size. We have given the image in the example below a border so that you can see the extent of its size as defined in its file.

```html live-sample___intrinsic-image
<img
  alt="star"
  src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
```

```css live-sample___intrinsic-image
img {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-image")}}

An empty {{htmlelement("div")}}, on the other hand, has no size of its own. If you add a {{htmlelement("div")}} to your HTML with no content, then give it a border as we did with the image, you will see a line on the page. This is the collapsed border on the element — there is no content to hold it open. In our example below, that border stretches to the width of the container, because it is a block level element, a behavior that should be starting to become familiar to you. It has no height (or size in the block dimension) because there is no content.

```html live-sample___intrinsic-text
<div class="box"></div>
```

```css live-sample___intrinsic-text
.box {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text")}}

In the example above, try adding some text inside the empty element. The border now contains that text because the height of the element is defined by the content. Therefore the size of this `<div>` in the block dimension comes from the size of the content. Again, this is the intrinsic size of the element — its size is defined by its content.

## Setting a specific size

We can, of course, give elements in our design a specific size. When a size is given to an element (the content of which then needs to fit into that size) we refer to it as an **extrinsic size**. Take our `<div>` from the example above — we can give it specific {{cssxref("width")}} and {{cssxref("height")}} values, and it will now have that size no matter what content is placed into it. A set height can cause content to overflow if there is more content than the element has space to fit inside it (you'll learn more about [overflow](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow) in a subsequent lesson).

```html live-sample___height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a height set, this box has content in it which will
    need more space than the assigned height, and so we get overflow.
  </div>
</div>
```

```css live-sample___height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("height", "", "200px")}}

Due to this problem of overflow, fixing the height of elements with lengths or percentages is something we need to do very carefully on the web.

### Using percentages

In many ways, percentages act like length units, and as we [discussed in the lesson on values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages), they can often be used interchangeably with lengths. When using a percentage you need to be aware what it is a percentage _of_. In the case of a box inside another container, if you give the child box a percentage width it will be a percentage of the width of the parent container.

```html live-sample___percent-width
<div class="box">I have a percentage width.</div>
```

```css live-sample___percent-width
body {
  font: 1.2em sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 50%;
}
```

{{EmbedLiveSample("percent-width")}}

This is because percentages resolve against the size of the containing block. With no percentage applied, our `<div>` would take up `100%` of the available space, as it is a block level element. If we give it a percentage width, this becomes a percentage of the space it would normally fill.

### Percentage margins and padding

If you set `margins` and `padding` as a percentage, you may notice some strange behavior. In the below example we have a box. We have given the inner box a {{cssxref("margin")}} of 10% and a {{cssxref("padding")}} of `10%`. The padding and margin on the top and bottom of the box are the same size as the padding and margin on the left and right.

```html live-sample___percent-mp
<div class="box">I have margin and padding set to 10% on all sides.</div>
```

```css live-sample___percent-mp
body {
  font: 1.2em sans-serif;
}
.box {
  border: 5px solid darkblue;
  width: 200px;
  margin: 10%;
  padding: 10%;
}
```

{{EmbedLiveSample("percent-mp", "", "380px")}}

You might expect for example the percentage top and bottom margins to be a percentage of the element's height, and the percentage left and right margins to be a percentage of the element's width. However, this is not the case!

When you use margin and padding set in percentages, the value is calculated from the **inline size** of the containing block — therefore the width when working in a horizontal language. In our example, all of the margins and padding are `10%` of the width. This means you can have equal-sized margins and padding all around the box. This is a fact worth remembering if you do use percentages in this way.

## min- and max- sizes

In addition to giving things a fixed size, we can ask CSS to give an element a minimum or a maximum size. If you have a box that might contain a variable amount of content, and you always want it to be _at least_ a certain height, you could set the {{cssxref("min-height")}} property on it. The box will always be at least this height, but will then grow taller if there is more content than the box has space for at its minimum height.

In the example below you can see two boxes, both with a defined `min-height` of 100 pixels. The box on the left is 100 pixels tall; the box on the right has content that needs more room, and so it has grown taller than 100 pixels.

```html live-sample___min-height
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a min-height set, this box has content in it which
    will need more space than the assigned height, and so it grows from the
    minimum.
  </div>
</div>
```

```css live-sample___min-height
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  min-height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("min-height", "", "220px")}}

This is very useful for avoiding overflow when dealing with variable amounts of content.

A common use of {{cssxref("max-width")}} is to cause images to scale down if there is not enough space to display them at their intrinsic width while making sure they don't become larger than that width.

As an example, if you were to set `width: 100%` on an image, and its intrinsic width was smaller than its container, the image would be forced to stretch and become larger, causing it to look pixelated.

If you instead use `max-width: 100%`, and its intrinsic width is smaller than its container, the image will not be forced to stretch and become larger, thus preventing pixelation.

In the example below, we have used the same image three times. The first image has been given `width: 100%` and is in a container which is larger than it, therefore it stretches to the container width. The second image has `max-width: 100%` set on it and therefore does not stretch to fill the container. The third box contains the same image again, also with `max-width: 100%` set; in this case you can see how it has scaled down to fit into the box.

```html live-sample___max-width
<div class="wrapper">
  <div class="box">
    <img
      alt="star"
      class="width"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="mini-box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
</div>
```

```css hidden live-sample___max-width
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box,
.mini-box {
  border: 5px solid darkblue;
}
```

```css live-sample___max-width
.box {
  width: 200px;
}
.mini-box {
  width: 50px;
}
.width {
  width: 100%;
}
.max {
  max-width: 100%;
}
```

{{EmbedLiveSample("max-width", "", "260px")}}

This technique is used to make images _responsive_, so that when viewed on a smaller device they scale down appropriately. You should, however, not use this technique to load really large images and then scale them down in the browser. Images should be appropriately sized to be no larger than they need to be for the largest size they are displayed in the design. Downloading overly large images will cause your site to become slow, and it can cost users more money if they are on a metered connection.

## Viewport units

The viewport — which is the visible area of your page in the browser you are using to view a site — also has a size. In CSS we have units which relate to the size of the viewport — the `vw` unit for viewport width, and `vh` for viewport height. Using these units you can size something relative to the viewport of the user.

`1vh` is equal to 1% of the viewport height, and `1vw` is equal to 1% of the viewport width. You can use these units to size boxes, but also text. In the example below we have a box which is sized as 20vh and 20vw. The box contains a letter `A`, which has been given a {{cssxref("font-size")}} of 10vh.

```html live-sample___vw-vh
<div class="box">A</div>
```

```css live-sample___vw-vh
body {
  font-family: sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 20vw;
  height: 20vh;
  font-size: 10vh;
}
```

{{EmbedLiveSample("vw-vh")}}

If you change the `vh` and `vw` values this will change the size of the box or font; changing the viewport size will also change their sizes because they are sized relative to the viewport. To see the example change when you change the viewport size you will need to load the example in a new browser window that you can resize (as the embedded `<iframe>` that contains the example shown above is its viewport). Open the example, resize the browser window, and observe what happens to the size of the box and text.

Sizing things according to the viewport can be useful in your designs. For example, if you want a full-page hero section to show before the rest of your content, making that part of your page `100vh` high will push the rest of the content below the viewport, meaning that it will only appear once the document is scrolled.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Sizing](/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing_tasks).

## Summary

This lesson has given you a rundown of some key issues that you might run into when sizing things on the web. When you move onto [CSS Layout](/en-US/docs/Learn_web_development/Core/CSS_layout), sizing will become very important in mastering the different layout methods, so it is worth understanding the concepts here before moving on.

In the next article, we'll take a look at how backgrounds and borders are manipulated in CSS.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
