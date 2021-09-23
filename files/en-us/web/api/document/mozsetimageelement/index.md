---
title: Document.mozSetImageElement()
slug: Web/API/Document/mozSetImageElement
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - Non-standard
  - Reference
browser-compat: api.Document.mozSetImageElement
---
{{ ApiRef("DOM") }}{{ non-standard_header() }}

The **`Document.mozSetImageElement()`** method changes the
element being used as the CSS background for a background with a given background
element ID.

## Syntax

```js
document.mozSetImageElement(imageElementId, imageElement);
```

### Parameters

- `imageElementId` is a string indicating the name of an element that has
  been specified as a background image using the {{ cssxref("-moz-element") }} CSS
  function.
- `imageElement` is the new element to use as the background corresponding
  to that image element string. Specify `null` to remove the background
  element.

## Example

This example changes the background of a {{ HTMLElement("div") }} block each time the
block is clicked by the user.

[View this example live](https://media.prod.mdn.mozit.cloud/samples/domref/mozSetImageElement.html).

```html
<style type="text/css">
  #mybox {
    background-image: -moz-element(#canvasbg);
    text-align: center;
    width: 400px;
    height: 400px;
    cursor: pointer;
  }
</style>
```

The CSS defined by the {{ HTMLElement("style") }} block above is used by our {{
  HTMLElement("div") }} to use an element with the id "canvasbg" as its background.

```js
var c = 0x00;
function clicked() {
  var canvas = document.createElement("canvas");
  canvas.setAttribute("width", 100);
  canvas.setAttribute("height", 100);

  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "#" + c.toString(16) + "0000";
  ctx.fillRect(25, 25, 75, 75);

  c += 0x11;
  if (c > 0xff) {
    c = 0x00;
  }

  document.mozSetImageElement("canvasbg", canvas);
}
```

The code here is called each time the user clicks the {{ HTMLElement("div") }} element.
It creates a new {{ HTMLElement("canvas") }} with the width and height set to 100
pixels, then draws into it a 50 by 50 pixel square. Each time the function is called,
the square is a different color (its red component is increased each time), so each time
the user clicks the element, the background is filled with a brighter and brighter
pattern of red tiles.

Once the canvas is drawn, `document.mozSetImageElement()` is called to set
the background for any CSS using the ID "canvasbg" as its background element ID to be
our new canvas.

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{ cssxref("-moz-element") }}
