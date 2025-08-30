---
title: Drag operations
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
page-type: guide
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Central to the Drag and Drop API are the various [drag events](/en-US/docs/Web/API/HTML_Drag_and_Drop_API#drag_events) that fire in a specific order and are expected to be handled in a specific way. This document describes the steps that occur during a drag and drop operation, and what the application is supposed to do within each handler.

## Starting a drag

The drag starts on a [draggable item](/en-US/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items), which can be a selection, a draggable element (including links, images, and any element with `draggable="true"`), a file from the operating system's file explorer, etc. First, the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event is fired on the _source node_, which is the draggable element or, for selections, the text node that the drag started on. If this event is cancelled, then the drag operation is aborted. Otherwise, the {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} event is also fired on the source node.

The `dragstart` event is the only time you can modify the {{domxref("DragEvent.dataTransfer", "dataTransfer")}}. For a custom draggable element, you almost always want to modify the drag data, which is covered in detail in [Modifying the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store). There are two other things you can change: the [feedback image](#setting_the_drag_feedback_image) and the [allowed drop effects](#drop_effects).

In this example, we add a listener for the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event by using the `addEventListener()` method.

```html
<p draggable="true">This text <strong>may</strong> be dragged.</p>
```

```js
const draggableElement = document.querySelector('p[draggable="true"]');
draggableElement.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", "This text may be dragged"),
);
```

You could also listen to a higher ancestor as drag events bubble up as most other events do. For this reason, it is common to also check the event's target, so that dragging a selection contained within this element does not trigger the `setData` (although selecting text within the element is hard, it is not impossible):

```js
draggableElement.addEventListener("dragstart", (event) => {
  if (event.target === draggableElement) {
    event.dataTransfer.setData("text/plain", "This text may be dragged");
  }
});
```

### Setting the drag feedback image

When a drag occurs, a translucent image is generated from the source node, and follows the user's pointer during the drag. This image is created automatically, so you do not need to create it yourself. However, you can use {{domxref("DataTransfer.setDragImage","setDragImage()")}} to specify a custom drag feedback image.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

Three arguments are necessary. The first is a reference to an image. This reference will typically be to an `<img>` element, but it can also be to a `<canvas>` or any other element. The feedback image will be generated from whatever the image looks like on screen, although for images, they will be drawn at their original size. The second and third arguments to the {{domxref("DataTransfer.setDragImage","setDragImage()")}} method are offsets where the image should appear relative to the mouse pointer.

It is also possible to use images and canvases that are not in a document. This technique is useful when drawing custom drag images using the canvas element, as in the following example:

```js
function dragWithCustomImage(event) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 50;

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  const dt = event.dataTransfer;
  dt.setData("text/plain", "Data to Drag");
  dt.setDragImage(canvas, 25, 25);
}
```

In this example, we make one canvas the drag image. As the canvas is 50×50 pixels, we use offsets of half of this (`25`) so that the image appears centered on the mouse pointer.

## Dragging over elements and specifying drop targets

For the entire course of the drag operation, all device input events (such as mouse or keyboard) are suppressed. Every few hundred milliseconds, a {{domxref("HTMLElement/drag_event", "drag")}} event is fired at the source node.

> [!NOTE]
> The spec requires that if you cancel this `drag` event, the drag operation is considered [aborted](#a_failed_drop); in practice no browser implements this. See example below:

```html hidden live-sample___cancel_drag
<p draggable="true" id="draggable">Drag me for 1 second!</p>
<p id="output"></p>
```

```js hidden live-sample___cancel_drag
const draggableElement = document.getElementById("draggable");
const output = document.getElementById("output");
let time = null;
draggableElement.addEventListener("dragstart", (event) => {
  time = Date.now();
  output.textContent = "";
});
draggableElement.addEventListener("drag", (event) => {
  if (time !== null && Date.now() - time > 1000) {
    event.preventDefault();
    output.textContent =
      "Drag operation cancelled; if you are still dragging the node, then your browser does not support cancelling the drag programmatically.";
    time = null;
  }
});
```

{{EmbedLiveSample("cancel_drag", "", 100)}}

In the course of the drag operation, the dragged data can be moved over various elements in the document, or even elements in other documents. Whenever a new element is entered, a {{domxref("HTMLElement/dragenter_event", "dragenter")}} event is fired on that element, and a {{domxref("HTMLElement/dragleave_event", "dragleave")}} event is fired on the previous element.

> [!NOTE]
> `dragleave` always fires _after_ `dragenter`, so conceptually, in between these two events, the target has entered a new element but has not exited the previous one yet.

Every few hundred milliseconds, a {{domxref("HTMLElement/dragover_event", "dragover")}} event is fired on the element the drag is currently inside. Most areas of a web page or application are not valid places to drop data, so elements by default ignore any drop that happened on it. The element can elect itself to be a valid drop target by cancelling the `dragover` event. If the element is an editable text field, such as a {{HTMLElement("textarea")}} or [`<input type="text">`](/en-US/docs/Web/HTML/Reference/Elements/input/text), and the data store contains one `text/plain` item, then the element is a valid drop target by default without cancelling `dragover`.

```html
<div id="drop-target">You can drag and then drop a draggable item here</div>
```

```js
const dropElement = document.getElementById("drop-target");

dropElement.addEventListener("dragover", (event) => {
  event.preventDefault();
});
```

> [!NOTE]
> The spec requires the `dragenter` event to be cancelled too, otherwise the `dragover` or `dragleave` events won't even start firing on this element; in practice no browser implements this, and the "current element" changes every time a new element is entered.

However, you will commonly wish to call the {{domxref("Event.preventDefault","preventDefault()")}} method only in certain situations (for example, only if a link is being dragged). To do this, check a condition and only cancels the event when the condition is met. For example, you can check if the dragged data contains links:

```js
dropElement.addEventListener("dragover", (event) => {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
});
```

In this example, we use the `includes` method to check if the type [`text/uri-list`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links) is present in the list of types. If it is, we will cancel the event so that a drop may be allowed. If the drag data does not contain a link, the event will not be cancelled, and a drop cannot occur at that location.

## Drop feedback

Now the user is dragging into a valid drop target. There are several ways in which you can indicate to the user that a drop is allowed at this location, and what might happen if the drop happens. Usually, the mouse pointer will update as necessary depending on the value of the {{domxref("DataTransfer.dropEffect", "dropEffect")}} property. Although the exact appearance depends on the user's platform, typically a plus sign icon will appear for a `copy` for example, and a "cannot drop here" icon will appear when a drop is not allowed. This mouse pointer feedback is sufficient in many cases.

### Drop effects

When dropping, there are several operations that may be performed:

- `copy`
  - : The data will be simultaneously present at the source and target locations after dropping.
- `move`
  - : The data will only be present at the target location, and will be removed from the source location.
- `link`
  - : Some form of linking will be created between the source and drop locations; there is only one instance of the data at the source location.
- `none`
  - : Nothing happens; the drop failed.

With the {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} events, the {{domxref("DataTransfer.dropEffect","dropEffect")}} property is initialized to the effect that the user is requesting. The user can modify the desired effect by pressing modifier keys. Although the exact keys used vary by platform, typically the <kbd>Shift</kbd> and <kbd>Control</kbd> keys would be used to switch between copying, moving, and linking. The mouse pointer will change to indicate which operation is desired. For instance, for a `copy`, the cursor might appear with a plus sign next to it.

You can modify the {{domxref("DataTransfer.dropEffect","dropEffect")}} property during the {{domxref("HTMLElement/dragenter_event", "dragenter")}} or {{domxref("HTMLElement/dragover_event", "dragover")}} events, if for example, a particular drop target only supports certain operations. You can modify the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to override the user effect, and enforce a specific drop operation to occur.

```js
target.addEventListener("dragover", (event) => {
  event.dataTransfer.dropEffect = "move";
});
```

In this example, move is the effect that is performed.

You can use the value `none` to indicate that no drop is allowed at this location. You should usually do this if the element is only temporarily not accepting drops; if it's not intended to be a drop target, you should just not cancel the event.

Note that setting `dropEffect` only indicates the desired effect _at this particular instant_; a later `dragover` dispatch may change it. To persist the choice, you must set it in every `dragover` event. Also, this effect is only _informational_, and what effects ends up being implemented depends on both the source and the target nodes (for example, if the source node cannot be modified, then even if a "move" effect is requested, it may not be possible).

For both user gestures and programmatically setting `dropEffect`, by default, all three drop effects are available. The draggable element can restrict itself to only allow certain effects by setting the {{domxref("DataTransfer.effectAllowed","effectAllowed")}} property within a {{domxref("HTMLElement/dragstart_event", "dragstart")}} event listener.

```js
element.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "copyLink";
});
```

In this example, only a copy or link operation is allowed, but a move operation is not possible to be selected either via script or via user gestures.

The values of `effectAllowed` are combinations of `dropEffect`:

- `none`
  - : No operation is permitted
- `copy`
  - : `copy` only
- `move`
  - : `move` only
- `link`
  - : `link` only
- `copyMove`
  - : `copy` or `move` only
- `copyLink`
  - : `copy` or `link` only
- `linkMove`
  - : `link` or `move` only
- `all`
  - : `copy`, `move`, or `link`
- `uninitialized`
  - : The default value when the effect has not been set; generally equivalent to `all`, except the default `dropEffect` may not always be `copy`.

By default, the `dropEffect` is initialized based on `effectAllowed`, in the order of `copy`, `link`, `move`, selecting the first one that is allowed. The unselected but allowed effects may also be selected as default if appropriate; for example, on Windows, holding the <kbd>Alt</kbd> key causes `link` to be used in priority. If `effectAllowed` is `uninitialized` and the dragged element is an `<a>` link, the default `dropEffect` is `link`; if `effectAllowed` is `uninitialized` and the dragged element is a selection from an editable text field, the default `dropEffect` is `move`.

```html hidden live-sample___drop_effects
<div class="sources-container">
  These are the sources with different <code>allowedEffect</code>
  <div id="sources"></div>
</div>
<div class="targets-container">
  These are the targets with different <code>dropEffect</code>
  <div id="targets"></div>
</div>
```

```css hidden live-sample___drop_effects
.sources-container,
.targets-container {
  width: calc(100% - 2rem);
  border: 2px dashed gray;
  padding: 0.5rem;
  margin: 1rem 0;
}

#sources,
#targets {
  display: grid;
  gap: 0.5rem;
  width: 100%;
}

#sources {
  grid-template-columns: 1fr 1fr 1fr;
}

#targets {
  grid-template-columns: 1fr 1fr;
}

#sources div,
#targets div {
  border: 2px solid black;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sources div {
  height: 50px;
}

#targets div {
  height: 75px;
}
```

```js hidden live-sample___drop_effects
for (const allowedEffect of [
  "none",
  "copy",
  "move",
  "link",
  "copyMove",
  "copyLink",
  "linkMove",
  "all",
  "uninitialized",
]) {
  const div = document.createElement("div");
  div.textContent = allowedEffect;
  div.draggable = true;
  div.addEventListener("dragstart", (event) => {
    event.dataTransfer.effectAllowed = allowedEffect;
  });
  document.getElementById("sources").appendChild(div);
}

for (const dropEffect of ["none", "copy", "move", "link"]) {
  const div = document.createElement("div");
  div.textContent = dropEffect;
  div.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = dropEffect;
  });
  document.getElementById("targets").appendChild(div);
}
```

{{EmbedLiveSample("drop_effects", "", 500)}}

### Custom drop feedback

For more complex visual effects, you can perform other operations during the {{domxref("HTMLElement/dragenter_event", "dragenter")}} event. For example, by inserting an element at the location where the drop will occur. This might be an insertion marker, or an element that represents the dragged element in its new location. To do this, you could create an [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img) element and insert it into the document during the {{domxref("HTMLElement/dragenter_event", "dragenter")}} event.

The {{domxref("HTMLElement/dragover_event", "dragover")}} event will fire at the element the mouse is pointing at. Naturally, you may need to move the insertion marker around a {{domxref("HTMLElement/dragover_event", "dragover")}} event as well. You can use the event's {{domxref("MouseEvent.clientX","clientX")}} and {{domxref("MouseEvent.clientY","clientY")}} properties as with other mouse events to determine the location of the mouse pointer.

Finally, the {{domxref("HTMLElement/dragleave_event", "dragleave")}} event will fire at an element when the drag leaves the element. This is the time when you should remove any insertion markers or highlighting. You do not need to cancel this event. The {{domxref("HTMLElement/dragleave_event", "dragleave")}} event will always fire, even if the drag is cancelled, so you can always ensure that any insertion point cleanup can be done during this event.

## Performing a drop

When the user releases the mouse, the drag and drop operation ends.

In order for the drop to be _potentially successful_, the drop must happen over a valid [drop target](#dragging_over_elements_and_specifying_drop_targets), and the `dropEffect` must not be `none` at the time of mouse release. Otherwise, the drop operation is considered [failed](#a_failed_drop).

If the drop is potentially successful, a {{domxref("HTMLElement/drop_event", "drop")}} event is fired on the drop target. You need to cancel this event using `preventDefault()` in order for the drop to be considered actually successful. Otherwise, the drop is also considered successful if the drop was dropping text (the data contains a `text/plain` item) into an editable text field. In this case, the text is inserted into the field (either at the cursor position or at the end, depending on platform conventions) and, if the `dropEffect` is `move` while the source is a selection within an editable region, the source is removed. Otherwise, for all other drag data and drop targets, the drop is also considered failed by default.

During the {{domxref("HTMLElement/drop_event", "drop")}} event, you should retrieve that data that was dropped from the event and insert it at the drop location. You can use the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine which drag operation was desired. The `drop` event is the only time when you can read the drag data store, other than `dragstart`.

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  target.textContent = data;
});
```

In the example here, once the data has been retrieved, we insert the string as the textual content of the target. This has the effect of inserting the dragged text where it was dropped, assuming that the drop target is an area of text such as a `p` or `div` element.

An empty string will be returned if data of that type does not exist. (Naturally, though, you would likely know that the right type of data was available, as it was previously checked during a {{domxref("HTMLElement/dragover_event", "dragover")}} event.)

You can retrieve other types of data as well. If the data is a link, it should have the type [`text/uri-list`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#dragging_links). You could then insert a link into the content.

```js
target.addEventListener("drop", (event) => {
  event.preventDefault();
  const lines = event.dataTransfer.getData("text/uri-list").split("\r\n");
  lines
    .filter((line) => !line.startsWith("#"))
    .forEach((line) => {
      const link = document.createElement("a");
      link.href = line;
      link.textContent = line;
      target.appendChild(link);
    });
});
```

for more information about how to read, see [Working with the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

## A failed drop

The drag-and-drop operation is considered failed if one of the following is true:

1. The user pressed the <kbd>Escape</kbd> key
2. The drop happened outside of a valid [drop target](#dragging_over_elements_and_specifying_drop_targets)
3. The drop effect was `none` at the time of mouse release
4. The `drop` event was not cancelled and the drop was not dropping text (containing a `text/plain` data) into an editable text field (see [performing a drop](#performing_a_drop))

For cases 1 and 3, if the abortion happens while hovering over a valid drop target, the drop target receives a {{domxref("HTMLElement/dragleave_event", "dragleave")}} event, as if the drop no longer happens over it, so that it could clean up any [drop feedback](#custom_drop_feedback). In all cases, the `dropEffect` is set to `none` for subsequent events.

Afterwards, a {{domxref("HTMLElement/dragend_event", "dragend")}} event is fired at the source node. An animation of the dragged selection going back to the source of the drag-and-drop operation may be displayed.

## Finishing the drag

Once the drag is complete, a {{domxref("HTMLElement/dragend_event", "dragend")}} event is fired at the source of the drag (the same element that received the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event). This event will fire if the drag was successful or if it was cancelled. However, you can use the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine which drop operation occurred.

If the {{domxref("DataTransfer.dropEffect","dropEffect")}} property has the value `none` during a {{domxref("HTMLElement/dragend_event", "dragend")}}, then the drag was cancelled. Otherwise, the effect specifies which operation was performed. The source can use this information after a `move` operation to remove the dragged item from the old location.

A drop can occur inside the same window or over another application. The {{domxref("HTMLElement/dragend_event", "dragend")}} event will always fire regardless. The event's {{domxref("MouseEvent.screenX","screenX")}} and {{domxref("MouseEvent.screenY","screenY")}} properties will be set to the screen coordinates where the drop occurred.

After the {{domxref("HTMLElement/dragend_event", "dragend")}} event has finished propagating, the drag and drop operation is complete.

## See also

- [HTML Drag and Drop API (Overview)](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Working with the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
