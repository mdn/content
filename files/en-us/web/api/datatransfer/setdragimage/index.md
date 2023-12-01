---
title: "DataTransfer: setDragImage() method"
short-title: setDragImage()
slug: Web/API/DataTransfer/setDragImage
page-type: web-api-instance-method
browser-compat: api.DataTransfer.setDragImage
---

{{APIRef("HTML Drag and Drop API")}}

When a drag occurs, a translucent image is generated from the drag target (the element
the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event is fired at), and follows the mouse pointer during the
drag. This image is created automatically, so you do not need to create it yourself.
However, if a custom image is desired, the
**`DataTransfer.setDragImage()`** method can be used to set the
custom image to be used. The image will typically be an {{HTMLElement("img")}} element
but it can also be a {{HTMLElement("canvas")}} or any other visible element.

The method's `x` and `y` coordinates define how the image should
appear relative to the mouse pointer. These coordinates define the offset into the image
where the mouse cursor should be. For instance, to display the image so that the pointer
is at its center, use values that are half the width and height of the image.

This method must be called in the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event handler.

## Syntax

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### Parameters

- `imgElement`

  - : An image {{domxref("Element")}} element to use for the drag feedback image.

    If {{domxref("Element")}} is an img element, then set the drag data store bitmap to
    the element's image (at its intrinsic size); otherwise, set the drag data store bitmap
    to an image generated from the given element (the exact mechanism for doing so is not
    currently specified).

    Note: If the {{domxref("Element")}} is an existing {{domxref("HTMLElement")}} it needs to be visible in the viewport in order to be shown as a drag feedback image. Alternatively, you can create a new DOM element that might be off-screen specifically for this purpose.

- `xOffset`
  - : A `long` indicating the horizontal offset within the image.
- `yOffset`
  - : A `long` indicating the vertical offset within the image.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example shows how to use the `setDragImage()` method. Note the example
refers to an image file named `example.gif`. If that file is present, it will
be used as the drag image and if that file is not present, the browser will use its
default drag image.

[demo](https://codepen.io/webgeeker/full/KBzrxE/)

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Example of DataTransfer.setDragImage()</title>
    <meta name="viewport" content="width=device-width" />
    <style>
      div {
        margin: 0em;
        padding: 2em;
      }
      #source {
        color: blue;
        border: 1px solid black;
      }
      #target {
        border: 1px solid black;
      }
    </style>
    <script>
      function dragStartHandler(ev) {
        console.log("dragStart");
        // Set the drag's format and data. Use the event target's id for the data
        ev.dataTransfer.setData("text/plain", ev.target.id);
        // Create an image and use it for the drag image
        // NOTE: change "example.gif" to an existing image or the image will not
        // be created and the default drag image will be used.
        const img = new Image();
        img.src = "example.gif";
        ev.dataTransfer.setDragImage(img, 10, 10);
      }

      function dragOverHandler(ev) {
        console.log("dragOver");
        ev.preventDefault();
      }

      function dropHandler(ev) {
        console.log("Drop");
        ev.preventDefault();
        // Get the data, which is the id of the drop target
        const data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }
    </script>
  </head>
  <body>
    <h1>Example of <code>DataTransfer.setDragImage()</code></h1>
    <div>
      <p id="source" ondragstart="dragStartHandler(event);" draggable="true">
        Select this element, drag it to the Drop Zone and then release the
        selection to move the element.
      </p>
    </div>
    <div
      id="target"
      ondrop="dropHandler(event);"
      ondragover="dragOverHandler(event);">
      Drop Zone
    </div>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
