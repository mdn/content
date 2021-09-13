---
title: HTMLImageElement.border
slug: Web/API/HTMLImageElement/border
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Image
  - Property
  - Reference
  - border
  - img
  - Deprecated
browser-compat: api.HTMLImageElement.border
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The obsolete {{domxref("HTMLImageElement")}}
property **`border`** specifies the number of pixels thick the
border surrounding the image should be. A value of 0, the default, indicates that no
border should be drawn.

You should *not* use this property! Instead, you should use CSS to style the
border. The {{cssxref("border")}} property or its longhand properties to not only set
the thickness of the border but to potentially apply a wide variety of other styling
options to it.

The width, specifically, is controlled using the writing-mode aware
{{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}},
{{cssxref("border-inline-start-width")}}, and {{cssxref("border-inline-end-width")}}
properties.

For compatibility (or perhaps other) reasons, you can use the older properties instead
(or in addition): {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}},
{{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}.

## Syntax

```js
htmlImageElement.border = thickness;
let thickness = htmlImageElement.border;
```

### Value

A {{domxref("DOMString")}} containing an integer value specifying the thickness of the
border that should surround the image, in CSS pixels. A value of `0`, or an
empty string, indicates that there should  be no border drawn. The default value of
`border` is `0`

## Usage notes

Do not use `border`. It is obsolete. Instead, use the CSS
{{cssxref("border")}} property and its longhand properties to establish borders around
images.

For example, if you have the following HTML:

```html
<img src="image.png" border="2">
```

The following will provide the same appearance using CSS instead of this obsolete
property:

```html
<img src="image.png" style="border: 2px;">
```

You can further provide additional information to change the color and other features
of the border:

```html
<img src="image.png" style="border: dashed 2px #333388;">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
