---
title: Other content in SVG
slug: Web/SVG/Tutorial/Other_content_in_SVG
page-type: guide
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}

Apart from graphic primitives like rectangles and circles, SVG offers a set of elements to embed other types of content in images as well.

### Embedding raster images

Much like the img element in HTML SVG has an `image` element to serve the same purpose. You can use it to embed arbitrary raster (and vector) images. The specification requests applications to support at least PNG, JPEG and SVG format files.

The embedded picture becomes a normal SVG element. This means, that you can use clips, masks, filters, rotations and all other tools of SVG on the content:

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="200"
  height="200">
  <image
    x="90"
    y="-65"
    width="128"
    height="146"
    transform="rotate(45)"
    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
</svg>
```

{{ EmbedLiveSample('Embedding_raster_images','220','240') }}

### Embedding arbitrary XML

Since SVG is an XML application, you can of course _always_ embed arbitrary XML anywhere in an SVG document. But then you have no means to define how the surrounding SVG should react on the content. Actually, in a conforming viewer it will react in no way at all, the data will be omitted. Therefore the specification adds the `{{ SVGElement("foreignObject") }}` element to SVG. Its sole purpose is to be a container for other markup and a carrier for SVG styling attributes (most prominently `width` and `height` to define the space the object will take).

The `foreignObject` element is a good way to embed XHTML in SVG. If you have longer texts, the HTML layout is more suitable and comfortable than the SVG `text` element. Another often cited use case is the embedding of formulas with MathML. For scientific applications of SVG this is a very good way to join both worlds.

> [!NOTE]
> Please keep in mind, that the content of the `foreignObject` must be processable by the viewer. A standalone SVG viewer is unlikely to be able to render HTML or MathML.

Since the `foreignObject` is an SVG element, you can, like in the case of `image`, use any SVG goodness with it, which then will be applied to its content.

{{ PreviousNext("Web/SVG/Tutorial/Clipping_and_masking", "Web/SVG/Tutorial/Filter_effects") }}
