---
title: "HTMLImageElement: longDesc property"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLImageElement.longDesc
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The _deprecated_ property **`longDesc`** on
the {{domxref("HTMLImageElement")}} interface specifies the URL of a text or HTML file
which contains a long-form description of the image. This can be used to
provide optional added details beyond the short description provided in the
[`title`](/en-US/docs/Web/HTML/Global_attributes/title) attribute.

## Value

A string which may be either an empty string (indicating that no long
description is available) or the URL of a file containing a long form description of the
image's contents.

For example, if the image is a [PNG](/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) of a flowchart.
The `longDesc` property could be used to provide an explanation of the flow
of control represented by the chart, using only text. This can be used by readers both
as an explanation, but also as a substitute for visually-impaired users.

## Usage notes

This property is _deprecated_ and should no longer be used. Instead of
using `longDesc` to provide a link to a detailed description of an image,
encapsulate the image within a link using the {{HTMLElement("a")}} element.

Consider the following older HTML:

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

Here, the `longDesc` is used to indicate that the user should be able to
access a detailed description of the image `taco-tuesday.jpg` in the HTML
file `image-descriptions/taco-tuesday.html`.

This can be easily converted into modern HTML:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

With that, the image is a link to the HTML file describing the image in more detail.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)
