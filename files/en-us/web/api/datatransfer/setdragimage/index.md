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

### Using setDragImage()

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
```

```css
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
```

```js
const source = document.getElementById("source");
const target = document.getElementById("target");

// Create an image and use it for the drag image
// Use the image URL that you desire
const img = new Image();
img.src = "/shared-assets/images/examples/favicon32.png";

source.addEventListener("dragstart", (ev) => {
  // Set the drag's format and data. Use the event target's id for the data
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.setDragImage(img, 10, 10);
});

target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});

target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  // Get the data, which is the id of the drop target
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
});
```

{{EmbedLiveSample("Using setDragImage", "", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
