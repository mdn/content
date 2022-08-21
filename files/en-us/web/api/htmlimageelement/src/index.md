---
title: HTMLImageElement.src
slug: Web/API/HTMLImageElement/src
page-type: web-api-instance-property
tags:
  - 1x
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Image
  - Reference
  - URL
  - fallback
  - source
  - src
  - Property
browser-compat: api.HTMLImageElement.src
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLImageElement")}} property
**`src`**, which reflects the HTML {{htmlattrxref("src",
    "img")}} attribute, specifies the image to display in the {{HTMLElement("img")}}
element.

## Value

When providing only a single image, rather than a set of images from which the browser
selects the best match for the viewport size and display pixel density, the
`src` attribute is a string specifying the URL of the
desired image. This can be set either within the HTML itself using the
{{htmlattrxref("src", "img")}} content attribute, or programmatically by setting the
element's `src` property.

If you use the {{htmlattrxref("srcset", "img")}} content attribute to provide multiple
image options for different display pixel densities, the URL specified by the
`src` attribute is used in one of two ways:

- as a fallback for browsers that don't support `srcset`.
- as an equivalent for specifying an image in `srcset` with the size
  multiplier `1x`; that is, the image specified by `src` is used
  on low-density screens (such as typical 72 DPI or 96 DPI displays).

Additionally, if you use `src` along with _both_
{{domxref("HTMLImageElement.sizes", "sizes")}} (or the
corresponding {{htmlattrxref("sizes", "img")}} content attribute) _and_
`srcset` in order to choose an image based on the viewport size, the
`src` attribute is only used as a fallback for browsers that don't support
`sizes` and `srcset`; otherwise, it's not used at all.

## Examples

### Specifying a single image

#### HTML

```html
<img src="grapefruit-slice-332-332.jpg"
     width="160"
     alt="Slices of grapefruit, looking yummy.">
```

#### Result

{{EmbedLiveSample("Specifying_a_single_image", 640,200)}}

### Using src with an image set

When using a set of images with the {{domxref("HTMLImageElement.srcset", "srcset")}}
property, the `src` serves as either a fallback for older browsers, or as the
`1x` size of the image.

#### HTML

#### Result

### Specifying a fallback for viewport-based selection

When using viewport-bases selection of an image from a `srcset` by also
specifying the {{domxref("HTMLImageElement.sizes", "sizes")}} property, the
`src` property serves as the fallback to be used on browsers that don't
support viewport-based selection. Browsers that _do_ support viewport-based
selection will ignore `src` in this situation.

#### HTML

#### Result

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
