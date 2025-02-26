---
title: "HTMLImageElement: srcset property"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
page-type: web-api-instance-property
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

The `srcset` property, along with the {{domxref("HTMLImageElement.sizes", "sizes")}}
property, are a crucial component in designing responsive websites, as they
can be used together to make pages that use appropriate images for the rendering
situation.

> [!NOTE]
> If the [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) attribute uses width descriptors, the `sizes` attribute must also be present, or the `srcset` itself will be ignored.

## Value

A string containing a comma-separated list of one or more image
candidate strings to be used when determining which image resource to present inside the
{{HTMLElement("img")}} element represented by the
`HTMLImageElement`.

Each image candidate string must begin with a valid URL referencing a non-interactive
graphic resource. This is followed by whitespace and then a condition descriptor that
indicates the circumstances in which the indicated image should be used. Space
characters, other than the whitespace separating the URL and the corresponding condition
descriptor, are ignored; this includes both leading and trailing space, as well as space
before or after each comma.

The condition descriptor may take one of two forms:

- To indicate that the image resource specified by the image candidate string should
  be used when the image is being rendered with a particular width in pixels, provide a
  **width descriptor** comprised the number giving that width in pixels
  followed by the lower case letter "w". For example, to provide an image resource to be
  used when the renderer needs a 450 pixel wide image, use the width descriptor string
  `450w`. The specified width must be a positive, non-zero, integer, and
  _must_ match the intrinsic width of the referenced image. When a `srcset` contains
  "w" descriptors, the browser uses those descriptors together with the
  {{domxref("HTMLImageElement.sizes", "sizes")}} attribute to pick a resource.
- Alternatively, you can use a **pixel density descriptor**, which
  specifies the condition in which the corresponding image resource should be used as
  the display's pixel density. This is written by stating the pixel density as a
  positive, non-zero floating-point value followed by the lower-case letter "x". As an
  example, to state that the corresponding image should be used when the pixel density
  is double the standard density, you can give the pixel density descriptor
  `2x` or `2.0x`.

If the condition descriptor is not provided (in other words, the image candidate
provides only a URL), the candidate is assigned a default descriptor of "1x".

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

This string provides versions of an image to be used at the standard pixel density
(undescribed, assigned a default of `1x`) as well as double that pixel density (`2x`).

When an image element's `srcset` contains "x" descriptors, browsers also consider
the URL in the {{domxref("HTMLImageElement.src", "src")}} attribute (if present) as a
candidate, and assign it a default descriptor of `1x`.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

This string provides versions of a header image to use when the {{Glossary("user agent", "user agent's")}}
renderer needs an image of width 640px, 960px, or 1024px.

Note that if any resource in a `srcset` is described with a "w" descriptor, all
resources within that `srcset` must also be described with "w" descriptors, and
the image element's {{domxref("HTMLImageElement.src", "src")}} is not considered
a candidate.

## Examples

### HTML

The HTML below indicates that the default image resource, contained within the
{{domxref("HTMLImageElement.src", "src")}} attribute should be used for 1x
displays, and that a 400-pixel version (contained within the `srcset`, and assigned
a `2x` descriptor) should be used for 2x displays.

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
    alt="Clock"
    srcset="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 2x" />
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
  border: 2px solid rgb(150 150 150);
  padding: 0.5em;
  word-break: break-all;
}

.box img {
  width: 200px;
}
```

### JavaScript

The following code is run within a handler for the {{domxref("Window", "window")}}'s
{{domxref("Window.load_event", "load")}} event. It uses the image's
{{domxref("HTMLImageElement.currentSrc", "currentSrc")}} property to fetch and display
the URL selected by the browser from the `srcset`.

```js
window.addEventListener("load", () => {
  const box = document.querySelector(".box");
  const image = box.querySelector("img");

  const newElem = document.createElement("p");
  newElem.textContent = "Image: ";
  newElem.appendChild(document.createElement("code")).textContent =
    image.currentSrc;
  box.appendChild(newElem);
});
```

### Result

In the displayed output below, the selected URL will correspond with whether your
display results in selecting the 1x or the 2x version of the image. If you happen to
have both standard and high density displays, try moving this window between them and
reloading the page to see the results change.

{{EmbedLiveSample("Examples", 640, 320)}}

For additional examples, see our guide to [responsive images](/en-US/docs/Web/HTML/Responsive_images).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML images](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive images](/en-US/docs/Web/HTML/Responsive_images)
- [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types)
