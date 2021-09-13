---
title: HTMLImageElement.longDesc
slug: Web/API/HTMLImageElement/longDesc
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Long description
  - Property
  - Reference
  - description
  - img
  - longDesc
  - Deprecated
browser-compat: api.HTMLImageElement.longDesc
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The _deprecated_ property **`longDesc`** on
the {{domxref("HTMLImageElement")}} interface specifies the URL of a text or HTML file
which contains a long-form description of the image. This can be used to
provide optional added details beyond the short description provided in the
{{htmlattrxref("title")}} attribute.

## Syntax

```js
descURL = htmlImageElement.longDesc;
htmlImageElement.longDesc = descURL;
```

### Value

A {{domxref("DOMString")}} which may be either an empty string (indicating that no long
description is available) or the URL of a file containing a long form description of the
image's contents.

For example, if the image is a [PNG](/en-US/docs/Web/Media/Formats/Image_types#png) of a flowchart.
The `longDesc` property could be used to provide an explanation of the flow
of control represented by the chart, using only text. This can be used by readers both
as an explanation, but also as a substitute for visually-impaired users.

## Usage notes

This property is _deprecated_ and should no longer be used. Instead of
using `longDesc` to provide a link to a detailed description of an image,
encapsulate the image within a link using the {{HTMLElement("a")}} element.

Consider the following older HTML:

```html
<img src="taco-tuesday.jpg" longDesc="image-descriptions/taco-tuesday.html">
```

Here, the `longDesc` is used to indicate that the user should be able to
access a detailed description of the image `taco-tuesday.jpg` in the HTML
file `image-descriptions/taco-tuesday.html`.

This can be easily converted into modern HTML:

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg">
</a>
```

With that, the image is a link to the HTML file describing the image in more detail.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}
