---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
page-type: web-api-interface
browser-compat: api.HTMLImageElement
---

{{APIRef("HTML DOM")}}

The **`HTMLImageElement`** interface represents an HTML {{HTMLElement("img")}} element, providing the properties and methods used to manipulate image elements.

{{InheritanceDiagram}}

## Constructor

- {{domxref("HTMLImageElement.Image()", "Image()")}}
  - : The `Image()` constructor creates and returns a new `HTMLImageElement` object representing an HTML {{HTMLElement("img")}} element which is not attached to any DOM tree. It accepts optional width and height parameters. When called without parameters, `new Image()` is equivalent to calling {{DOMxRef("Document.createElement()", "document.createElement('img')")}}.

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.alt")}}
  - : A string that reflects the [`alt`](/en-US/docs/Web/HTML/Element/img#alt) HTML attribute, thus indicating the alternate fallback content to be displayed if the image has not been loaded.
- {{domxref("HTMLImageElement.complete")}} {{ReadOnlyInline}}
  - : Returns a boolean value that is `true` if the browser has finished fetching the image, whether successful or not. That means this value is also `true` if the image has no {{domxref("HTMLImageElement.src", "src")}} value indicating an image to load.
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : A string specifying the CORS setting for this image element. See [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin) for further details. This may be `null` if CORS is not used.
- {{domxref("HTMLImageElement.currentSrc")}} {{ReadOnlyInline}}
  - : Returns a string representing the URL from which the currently displayed image was loaded. This may change as the image is adjusted due to changing conditions, as directed by any [media queries](/en-US/docs/Web/CSS/CSS_media_queries) which are in place.
- {{domxref("HTMLImageElement.decoding")}}
  - : An optional string representing a hint given to the browser on how it should decode the image. If this value is provided, it must be one of the possible permitted values: `sync` to decode the image synchronously, `async` to decode it asynchronously, or `auto` to indicate no preference (which is the default). Read the {{domxref("HTMLImageElement.decoding", "decoding")}} page for details on the implications of this property's values.
- {{domxref("HTMLImageElement.fetchPriority")}} {{Experimental_Inline}}
  - : An optional string representing a hint given to the browser on how it should prioritize fetching of the image relative to other images. If this value is provided, it must be one of the possible permitted values: `high` to fetch at a high priority, `low` to fetch at a low priority, or `auto` to indicate no preference (which is the default).
- {{domxref("HTMLImageElement.height")}}
  - : An integer value that reflects the [`height`](/en-US/docs/Web/HTML/Element/img#height) HTML attribute, indicating the rendered height of the image in CSS pixels.
- {{domxref("HTMLImageElement.isMap")}}
  - : A boolean value that reflects the [`ismap`](/en-US/docs/Web/HTML/Element/img#ismap) HTML attribute, indicating that the image is part of a server-side image map. This is different from a client-side image map, specified using an `<img>` element and a corresponding {{HTMLElement("map")}} which contains {{HTMLElement("area")}} elements indicating the clickable areas in the image. The image _must_ be contained within an {{HTMLElement("a")}} element; see the `ismap` page for details.
- {{domxref("HTMLImageElement.loading")}}
  - : A string providing a hint to the browser used to optimize loading the document by determining whether to load the image immediately (`eager`) or on an as-needed basis (`lazy`).
- {{domxref("HTMLImageElement.naturalHeight")}} {{ReadOnlyInline}}
  - : Returns an integer value representing the intrinsic height of the image in CSS pixels, if it is available; else, it shows `0`. This is the height the image would be if it were rendered at its natural full size.
- {{domxref("HTMLImageElement.naturalWidth")}} {{ReadOnlyInline}}
  - : An integer value representing the intrinsic width of the image in CSS pixels, if it is available; otherwise, it will show `0`. This is the width the image would be if it were rendered at its natural full size.
- {{domxref("HTMLImageElement.referrerPolicy")}}
  - : A string that reflects the [`referrerpolicy`](/en-US/docs/Web/HTML/Element/img#referrerpolicy) HTML attribute, which tells the {{Glossary("user agent")}} how to decide which referrer to use in order to fetch the image. Read this article for details on the possible values of this string.
- {{domxref("HTMLImageElement.sizes")}}
  - : A string reflecting the [`sizes`](/en-US/docs/Web/HTML/Element/img#sizes) HTML attribute. This string specifies a list of comma-separated conditional sizes for the image; that is, for a given viewport size, a particular image size is to be used. Read the documentation on the {{domxref("HTMLImageElement.sizes", "sizes")}} page for details on the format of this string.
- {{domxref("HTMLImageElement.src")}}
  - : A string that reflects the [`src`](/en-US/docs/Web/HTML/Element/img#src) HTML attribute, which contains the full URL of the image including base URI. You can load a different image into the element by changing the URL in the `src` attribute.
- {{domxref("HTMLImageElement.srcset")}}
  - : A string reflecting the [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) HTML attribute. This specifies a list of candidate images, separated by commas (`',', U+002C COMMA`). Each candidate image is a URL followed by a space, followed by a specially-formatted string indicating the size of the image. The size may be specified either the width or a size multiple. Read the {{domxref("HTMLImageElement.srcset", "srcset")}} page for specifics on the format of the size substring.
- {{domxref("HTMLImageElement.useMap")}}
  - : A string reflecting the [`usemap`](/en-US/docs/Web/HTML/Element/img#usemap) HTML attribute, containing the page-local URL of the {{HTMLElement("map")}} element describing the image map to use. The page-local URL is a pound (hash) symbol (`#`) followed by the ID of the `<map>` element, such as `#my-map-element`. The `<map>` in turn contains {{HTMLElement("area")}} elements indicating the clickable areas in the image.
- {{domxref("HTMLImageElement.width")}}
  - : An integer value that reflects the [`width`](/en-US/docs/Web/HTML/Element/img#width) HTML attribute, indicating the rendered width of the image in CSS pixels.
- {{domxref("HTMLImageElement.x")}} {{ReadOnlyInline}}
  - : An integer indicating the horizontal offset of the left border edge of the image's CSS layout box relative to the origin of the {{HTMLElement("html")}} element's containing block.
- {{domxref("HTMLImageElement.y")}} {{ReadOnlyInline}}
  - : The integer vertical offset of the top border edge of the image's CSS layout box relative to the origin of the {{HTMLElement("html")}} element's containing block.

## Obsolete properties

- {{domxref("HTMLImageElement.align")}} {{deprecated_inline}}
  - : A string indicating the alignment of the image with respect to the surrounding context. The possible values are `"left"`, `"right"`, `"justify"`, and `"center"`. This is obsolete; you should instead use CSS (such as {{cssxref("text-align")}}, which works with images despite its name) to specify the alignment.
- {{domxref("HTMLImageElement.border")}} {{deprecated_inline}}
  - : A string which defines the width of the border surrounding the image. This is deprecated; use the CSS {{cssxref("border")}} property instead.
- {{domxref("HTMLImageElement.hspace")}} {{deprecated_inline}}
  - : An integer value which specifies the amount of space (in pixels) to leave empty on the left and right sides of the image.
- {{domxref("HTMLImageElement.longDesc")}} {{deprecated_inline}}
  - : A string specifying the URL at which a long description of the image's contents may be found. This is used to turn the image into a hyperlink automatically. Modern HTML should instead place an `<img>` inside an {{HTMLElement("a")}} element defining the hyperlink.
- {{domxref("HTMLImageElement.name")}} {{deprecated_inline}}
  - : A string representing the name of the element.
- {{domxref("HTMLImageElement.vspace")}} {{deprecated_inline}}
  - : An integer value specifying the amount of empty space, in pixels, to leave above and below the image.

## Instance methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.decode()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the image is decoded and it's safe to append the image to the DOM. This prevents rendering of the next frame from having to pause to decode the image, as would happen if an undecoded image were added to the DOM.

## Errors

If an error occurs while trying to load or render the image, and an `onerror` event handler has been configured to handle the {{domxref("Element/error_event", "error")}} event, that event handler will get called. This can happen in a number of situations, including:

- The [`src`](/en-US/docs/Web/HTML/Element/img#src) attribute is empty or `null`.
- The specified `src` URL is the same as the URL of the page the user is currently on.
- The specified image is corrupted in some way that prevents it from being loaded.
- The specified image's metadata is corrupted in such a way that it's impossible to retrieve its dimensions, and no dimensions were specified in the `<img>` element's attributes.
- The specified image is in a format not supported by the {{Glossary("user agent")}}.

## Example

```js
const img1 = new Image(); // Image constructor
img1.src = "image1.png";
img1.alt = "alt";
document.body.appendChild(img1);

const img2 = document.createElement("img"); // Use DOM HTMLImageElement
img2.src = "image2.jpg";
img2.alt = "alt text";
document.body.appendChild(img2);

// using first image in the document
alert(document.images[0].src);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("img")}}
