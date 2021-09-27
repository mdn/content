---
title: Image()
slug: Web/API/HTMLImageElement/Image
tags:
  - API
  - Constructor
  - DOM
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Image()
  - Reference
  - img
browser-compat: api.HTMLImageElement.Image
---
{{APIRef("HTML DOM")}}

The **`Image()`**
constructor creates a new {{DOMxRef("HTMLImageElement")}} instance. It is functionally
equivalent to {{DOMxRef("Document.createElement()",
    "document.createElement('img')")}}.

> **Note:** This function should not be confused with the CSS [`image()`](</en-US/docs/Web/CSS/image/image()>) function.

## Syntax

```js
var htmlImageElement = new Image(width, height);
```

### Parameters

- `width`
  - : The width of the image (i.e., the value for the {{HTMLAttrxRef("width", "img")}}
    attribute).
- `height`
  - : The height of the image (i.e., the value for the {{HTMLAttrxRef("height", "img")}}
    attribute).

## Usage note

The entire bitmap is loaded regardless of the sizes specified in the constructor. The
size specified in the constructor is reflected through the properties
{{DOMxRef("HTMLImageElement.width")}} and {{DOMxRef("HTMLImageElement.height")}} of the
resulting instance. The intrinsic width and height of the image in CSS pixels are
reflected through the properties {{DOMxRef("HTMLImageElement.naturalWidth")}} and
{{DOMxRef("HTMLImageElement.naturalHeight")}}. If no size is specified in the
constructor both pairs of properties have the same values.

## Examples

```js
var myImage = new Image(100, 200);
myImage.src = 'picture.jpg';
document.body.appendChild(myImage);
```

This would be the equivalent of defining the following HTML tag inside the
{{HTMLElement("body")}}:

```html
<img width="100" height="200" src="picture.jpg">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
