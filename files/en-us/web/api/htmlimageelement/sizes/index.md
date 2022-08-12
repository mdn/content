---
title: HTMLImageElement.sizes
slug: Web/API/HTMLImageElement/sizes
page-type: web-api-instance-property
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Property
  - Reference
  - Responsive Design
  - Responsive Images
  - size
  - sizes
  - width
browser-compat: api.HTMLImageElement.sizes
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLImageElement")}} property
**`sizes`** allows you to specify the layout width of the
image for each of a list of media conditions. This provides the ability to
automatically select among different images—even images of different orientations or
aspect ratios—as the document state changes to match different media
conditions.

Each condition is specified using the same conditional format used
by [media queries](/en-US/docs/Web/CSS/Media_Queries).

## Value

A string containing a comma-separated list of source size descriptors
followed by an optional fallback size. Each **source size descriptor** is
comprised of a media condition, then at least one whitespace character, then the
**source size value** to use for the image when the media condition
evaluates to `true`.

#### Media conditions

Each source size descriptor consists of a media condition as defined by the media
queries standard. Because a source size descriptor is used to specify the width to use
for the image during layout of the page, the media condition is typically (but not
necessarily) based entirely on width information. See
{{SectionOnPage("/en-US/docs/Web/CSS/Media_Queries/Using_media_queries", "Syntax")}} for
details on how to construct a media condition.

#### Source size values

The source size value is a [CSS length](/en-US/docs/Web/CSS/length). It may
be specified using font-relative units (such as `em` or `ex`),
absolute units (such as `px` or `cm`), or the `vw`
unit, which lets you specify the width as a percentage of the viewport width
(`1vw` being 1% of the viewport width).

> **Note:** The source size value must _not_ be specified as a
> percentage of the container size; that is, lengths such as `50%` or
> `100%` are not allowed, as there would be uncertainty as to what the
> specified value is a percentage of.

## Examples

### Selecting an image to fit window width

In this example, a blog-like layout is created, displaying some text and an image which
for which three size points are specified, depending on the width of the window. Three
versions of the image are also available, with their widths specified. The browser takes
all of this information and selects an image and width that best meets the specified
values.

How exactly the images are used may depend upon the browser and what the pixel density
of the user's display is.

Buttons at the bottom of the example let you actually modify the `sizes`
property slightly, switching the largest of the three widths for the image between 40em
and 50em.

#### HTML

```html
<article>
  <h1>An amazing headline</h1>
  <div class="test"></div>
  <p>This is even more amazing content text. It's really spectacular.
     And fascinating. Oh, it's also clever and witty. Award-winning
     stuff, I'm sure.</p>
  <img src="new-york-skyline-wide.jpg"
       srcset="new-york-skyline-wide.jpg 3724w,
               new-york-skyline-4by3.jpg 1961w,
               new-york-skyline-tall.jpg 1060w"
       sizes="((min-width: 50em) and (max-width: 60em)) 50em,
              ((min-width: 30em) and (max-width: 50em)) 30em,
              (max-width: 30em) 20em">
  <p>Then there's even more amazing stuff to say down here. Can you
     believe it? I sure can't.</p>

  <button id="break40">Last Width: 40em</button>
  <button id="break50">Last Width: 50em</button>
</article>
```

#### CSS

```css
article {
  margin: 1em;
  max-width: 60em;
  min-width: 20em;
  border: 4em solid #880E4F;
  border-radius: 7em;
  padding: 1.5em;
  font: 16px "Open Sans", Verdana, Arial, Helvetica, sans-serif;
}

article img {
  display: block;
  max-width: 100%;
  border: 1px solid #888;
  box-shadow: 0 0.5em 0.3em #888;
  margin-bottom: 1.25em;
}
```

#### JavaScript

The JavaScript code handles the two buttons that let you toggle the third width option
between 40em and 50em; this is done by handling the {{domxref("Element.click_event",
  "click")}} event, using the JavaScript string object method {{jsxref("String.replace",
  "replace()")}} to replace the relevant portion of the `sizes` string.

```js
const image = document.querySelector("article img");
const break40 = document.getElementById("break40");
const break50 = document.getElementById("break50");

break40.addEventListener("click",
    () => image.sizes = image.sizes.replace(/50em,/, "40em,"));

break50.addEventListener("click",
    () => image.sizes = image.sizes.replace(/40em,/, "50em,"));
```

#### Result

{{EmbedLiveSample("Selecting an image to fit window width", "", 1050)}}

The page is best {{LiveSampleLink('Selecting an image to fit window width', 'viewed in its own window')}}, so you can adjust the sizes fully.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/Media_Queries)
- [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Images in HTML](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Responsive images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
