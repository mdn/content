---
title: HTMLImageElement.srcset
slug: Web/API/HTMLImageElement/srcset
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Image
  - Image Candidates
  - Property
  - Reference
  - Responsive Design
  - list
  - source
  - srcset
browser-compat: api.HTMLImageElement.srcset
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLImageElement")}} property
**`srcset`** is a string which identifies one or more
**image candidate strings**, separated using commas (`,`) each
specifying image resources to use under given circumstances.

Each image
candidate string contains an image URL and an optional width or pixel density descriptor
that indicates the conditions under which that candidate should be used instead of the
image specified by the {{domxref("HTMLImageElement.src", "src")}} property.

The `srcset` property, along with the {{domxref("HTMLImageElement.sizes",
  "sizes")}} property, are a crucial component in designing responsive web sites, as they
can be used together to make pages that use appropriate images for the rendering
situation.

## Syntax

```js
htmlImageElement.srcset = imageCandidateStrings;
let srcset = htmlImageElement.srcset;
```

### Value

A {{domxref("USVString")}} containing a comma-separated list of one or more image
candidate strings to be used when determining which image resource to present inside the
{{HTMLElement("img")}} element represented by the
`HTMLImageElement`_._

Each image candidate string must begin with a valid URL referencing a non-interactive
graphic resource. This is followed by whitespace and then a condition descriptor that
indicates the circumstances in which the indicated image should be used. Space
characters, other than the whitespace separating the URL and the corresponding condition
descriptor, are ignored; this includes both leading and trailing space, as well as space
before or after each comma.

If the condition descriptor is not provided (in other words, the image candidate
provides only a URL), the candidate is used as the fallback if none of the other
candidates match. Otherwise, the condition descriptor may take one of two forms:

- To indicate that the image resource specified by the image candidate string should
  be used when the image is being rendered with a particular width in pixels, provide a
  **width descriptor** comprised the number giving that width in pixels
  followed by the lower case letter "w". For example, to provide an image resource to be
  used when the renderer needs a 450 pixel wide image, use the width descriptor string
  `450w`. The specified width must be a positive, non-zero, integer, and
  _must_ match the intrinsic width of the referenced image.
- Alternatively, you can use a **pixel density descriptor**, which
  specifies the condition in which the corresponding image resource should be used as
  the display's pixel density. This is written by stating the pixel density as a
  positive, non-zero floating-point value followed by the lower-case letter "x". As an
  example, to state that the corresponding  image should be used when the pixel density
  is double the standard density, you can give the pixel density descriptor
  `2x` or `2.0x`.

You may mix and match the two types of descriptor. You must not, however, provide
multiple image candidate strings that specify the same descriptor. All of the following
are valid image candidate strings:

```html
"images/team-photo.jpg 1x, images/team-photo-retina.jpg 2x, images/team-photo-full 2048w"
```

This string provides versions of an image to be used at the standard pixel density
(`1x`) as well as double that pixel density (`2x`). Also available
is a version of the image for use at a width of 2048 pixels (`2048w`).

```html
"header640.png 640w, header960.png 960w, header1024.png 1024w, header.png"
```

This string provides versions of a header image to use when the {{Glossary("user
  agent", "user agent's")}} renderer needs an image of width 640px, 960px, or 1024px. An
additional, fallback image candidate is provided without any condition at all, to be
used for any other width.

```html
"icon32px.png 32w, icon64px.png 64w, icon-retina.png 2x, icon-ultra.png 3x, icon.svg"
```

Here, options are provided for an icon at widths of 32px and 64px, as well as at pixel
densities of 2x and 3x. A fallback image is provided as an SVG file that should be used
in all other cases. Notice that the candidates may use different image types.

For more information on what image formats are available for use in the
{{HTMLElement("img")}} element, see [Image file type and format guide](/en-US/docs/Web/Media/Formats/Image_types).

## Example

### HTML

The HTML below indicates that the default image is the 200 pixel wide version of the
clock image we use in several places throughout our documentation. Also specified by the
`srcset` attribute is that the 200-pixel version should be used for 1x
displays while the 400-pixel version should be used for 2x displays.

```html
<div class="box">
  <img src="/en-us/web/html/element/img/clock-demo-200px.png"
       alt="Clock"
       srcset="/en-us/web/html/element/img/clock-demo-200px.png 1x, /en-us/web/html/element/img/clock-demo-400px.png">
</div>
```

### CSS

The CSS specifies that the image and its surrounding box should be 200 pixels square
and should have a simple border around it. Also provided is the
{{cssxref("word-break")}} attribute, using the `break-all` value to tell the
browser to wrap the string within the width available regardless of where in the string
the wrap must occur.

```css
.box {
  width: 200px;
  border: 2px solid rgba(150, 150, 150, 255);
  padding: 0.5em;
  word-break: break-all;
}

.box img {
  width: 200px;
}
```

### JavaScript

The following code is run within a handler for the {{domxref("Window", "window")}}'s
{{domxref("Window.load_event", "load")}} event.  It uses the image's 
{{domxref("HTMLImageElement.currentSrc", "currentSrc")}} property to fetch and display
the URL selected by the browser from the `srcset`.

```js
let box = document.querySelector(".box");
let image = box.querySelector("img");

let newElem = document.createElement("p");
newElem.innerHTML = `Image: <code>${image.currentSrc}</code>`;
box.appendChild(newElem);
```

### Result

In the displayed output below, the selected URL will correspond with whether your
display results in selecting the 1x or the 2x version of the image. If you happen to
have both standard and high density displays, try moving this window between them and
reloading the page to see the results change.

{{EmbedLiveSample("Example", 640, 320)}}

For additional examples, see our guide to [responsive
images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Images in
  HTML](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Responsive
  images](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Image file type and format
  guide](/en-US/docs/Web/Media/Formats/Image_types)
