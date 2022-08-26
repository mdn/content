---
title: Drag Operations
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
page-type: guide
tags:
  - Advanced
  - Guide
  - HTML
  - drag and drop
---
{{DefaultAPISidebar("HTML Drag and Drop API")}}

The following describes the steps that occur during a drag and drop operation.

The drag operations described in this document use the {{domxref("DataTransfer")}} interface. This document does _not_ use the {{domxref("DataTransferItem")}} interface nor the {{domxref("DataTransferItemList")}} interface.

## The `draggable` Attribute

In a web page, there are certain cases where a default drag behavior is used. These include text selections, images, and links. When an image or link is dragged, the URL of the image or link is set as the drag data, and a drag begins. For other elements, they must be part of a selection for a default drag to occur. To see this in effect, select an area of a webpage, and then click and hold the mouse and drag the selection. An OS-specific rendering of the selection will appear and follow the mouse pointer as the drag occurs. However, this behavior is only the default drag behavior, if no listeners adjust the data to be dragged.

In HTML, apart from the default behavior for images, links, and selections, no other elements are draggable by default.

To make other HTML elements draggable, three things must be done:

1. Set the {{htmlattrxref("draggable")}} attribute to `"true"` on the element that you wish to make draggable.
2. Add a listener for the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event.
3. [Set the drag data](/en-US/docs/Web/API/DataTransfer/setData) in the above listener.

Here is an example which allows a section of content to be dragged.

```html
<p draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</p>
```

The `{{htmlattrxref("draggable")}}` attribute is set to `"true"`, so this element becomes draggable. If this attribute were omitted or set to `"false"`, the element would not be dragged, and instead the text would be selected.

The `{{htmlattrxref("draggable")}}` attribute may be used on any element, including images and links. However, for these last two, the default value is `true`, so you would only use the `{{htmlattrxref("draggable")}}` attribute with a value of `false` to disable dragging of these elements.

> **Note:** When an element is made draggable, text or other elements within it can no longer be selected in the normal way by clicking and dragging with the mouse. Instead, the user must hold down the <kbd>Alt</kbd> key to select text with the mouse, or use the keyboard.

## Starting a Drag Operation

In this example, a listener is added for the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event by using the `ondragstart` attribute.

```html
<p draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</p>
```

When a user begins to drag, the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event is fired.

In this example the {{domxref("HTMLElement/dragstart_event", "dragstart")}} listener is added to the draggable element itself. However, you could listen to a higher ancestor as drag events bubble up as most other events do.

Within the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event, you can specify the **drag data**, the **feedback image**, and the **drag effects**, all of which are described below. However, only the **drag data** is required. (The default image and drag effects are suitable in most situations.)

## Drag Data

All {{domxref("DragEvent","drag events")}} have a property called {{domxref("DragEvent.dataTransfer","dataTransfer")}} which holds the drag data (`dataTransfer` is a {{domxref("DataTransfer")}} object).

When a drag occurs, data must be associated with the drag which identifies _what_ is being dragged. For example, when dragging the selected text within a textbox, the data associated with the _drag data item_ is the text itself. Similarly, when dragging a link on a web page, the drag data item is the link's URL.

The {{domxref("DataTransfer","drag data")}} contains two pieces of information, the **type** (or format) of the data, and the data's **value**. The format is a type string (such as [`text/plain`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#text) for text data), and the value is a string of text. When the drag begins, you add data by providing a type and the data. During the drag, in an event listener for the {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} events, you use the data types of the data being dragged to check whether a drop is allowed. For instance, a drop target that accepts links would check for the type [`text/uri-list`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#link). During a drop event, a listener would retrieve the data being dragged and insert it at the drop location.

The {{domxref("DataTransfer","drag data's")}} {{domxref("DataTransfer.types","types")}} property returns a list of MIME-type like strings, such as [`text/plain`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#text) or [`image/jpeg`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#image). You can also create your own types. The most commonly used types are listed in the article [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).

A drag may include data items of several different types. This allows data to be provided in more specific types, often custom types, yet still provide fallback data for drop targets that do not support more specific types. It is usually the case that the least specific type will be normal text data using the type [`text/plain`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#text). This data will be a simple textual representation.

To set a drag data item within the {{domxref("DragEvent.dataTransfer","dataTransfer")}}, use the {{domxref("DataTransfer.setData","setData()")}} method. It takes two arguments: the type of data and the data value. For example:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

In this case, the data value is "Text to drag" and is of the format [`text/plain`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#text).

You can provide data in multiple formats. To do this, call the {{domxref("DataTransfer.setData","setData()")}} method multiple times with different formats. You should call it with formats in order from most specific to least specific.

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Here, data is added in three different types. The first type, `application/x.bookmark`, is a custom type. Other applications won't support this type, but you can use a custom type for drags between areas of the same site or application.

By providing data in other types as well, we can also support drags to other applications in less specific forms. The `application/x.bookmark` type can provide data with more details for use within the application whereas the other types can include just a single URL or text version.

Note that both the [`text/uri-list`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#link) and [`text/plain`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#text) contain the same data in this example. This will often be true, but doesn't need to be the case.

If you attempt to add data twice with the same format, the new data will replace the old data, but in the same position within the list of types as the old data.

You can clear the data using the {{domxref("DataTransfer.clearData","clearData()")}} method, which takes one argument: the type of the data to remove.

```js
event.dataTransfer.clearData("text/uri-list");
```

The `type` argument to the {{domxref("DataTransfer.clearData","clearData()")}} method is optional. If the `type` is not specified, the data associated with all types is removed. If the drag contains no drag data items, or all of the items have been subsequently cleared, then no drag will occur.

## Setting the drag feedback image

When a drag occurs, a translucent image is generated from the drag target (the element the "{{domxref("HTMLElement/dragstart_event", "dragstart")}}" event is fired at), and follows the user's pointer during the drag. This image is created automatically, so you do not need to create it yourself. However, you can use {{domxref("DataTransfer.setDragImage","setDragImage()")}} to specify a custom drag feedback image.

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
  dt.setData('text/plain', 'Data to Drag');
  dt.setDragImage(canvas, 25, 25);
}
```

In this example, we make one canvas the drag image. As the canvas is `50`×`50` pixels, we use offsets of half of this (`25`) so that the image appears centered on the mouse pointer.

## Drag Effects

When dragging, there are several operations that may be performed. The `copy` operation is used to indicate that the data being dragged will be copied from its present location to the drop location. The `move` operation is used to indicate that the data being dragged will be moved, and the `link` operation is used to indicate that some form of relationship or connection will be created between the source and drop locations.

You can specify which of the three operations are allowed for a drag source by setting the {{domxref("DataTransfer.effectAllowed","effectAllowed")}} property within a {{domxref("HTMLElement/dragstart_event", "dragstart")}} event listener.

```js
event.dataTransfer.effectAllowed = "copy";
```

In this example, only a **copy** is allowed.

You can combine the values in various ways:

- `none`
  - : no operation is permitted
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
- uninitialized
  - : The default value is `all`.

Note that these values must be used exactly as listed above. For example, setting the {{domxref("DataTransfer.effectAllowed","effectAllowed")}} property to `copyMove` allows a copy or move operation but prevents the user from performing a link operation. If you don't change the {{domxref("DataTransfer.effectAllowed","effectAllowed")}} property, then any operation is allowed, just like with the '`all`' value. So you don't need to adjust this property unless you want to exclude specific types.

During a drag operation, a listener for the {{domxref("HTMLElement/dragenter_event", "dragenter")}} or {{domxref("HTMLElement/dragover_event", "dragover")}} events can check the {{domxref("DataTransfer.effectAllowed","effectAllowed")}} property to see which operations are permitted. A related property, {{domxref("DataTransfer.dropEffect","dropEffect")}}, should be set within one of these events to specify which single operation should be performed. Valid values for {{domxref("DataTransfer.dropEffect","dropEffect")}} are `none`, `copy`, `move`, or `link`. The combination values are not used for this property.

With the {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} event, the {{domxref("DataTransfer.dropEffect","dropEffect")}} property is initialized to the effect that the user is requesting. The user can modify the desired effect by pressing modifier keys. Although the exact keys used vary by platform, typically the <kbd>Shift</kbd> and <kbd>Control</kbd> keys would be used to switch between copying, moving, and linking. The mouse pointer will change to indicate which operation is desired. For instance, for a `copy`, the cursor might appear with a plus sign next to it.

You can modify the {{domxref("DataTransfer.dropEffect","dropEffect")}} property during the {{domxref("HTMLElement/dragenter_event", "dragenter")}} or {{domxref("HTMLElement/dragover_event", "dragover")}} events, if for example, a particular drop target only supports certain operations. You can modify the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to override the user effect, and enforce a specific drop operation to occur. Note that this effect must be one listed within the {{domxref("DataTransfer.effectAllowed","effectAllowed")}} property. Otherwise, it will be set to an alternate value that is allowed.

```js
event.dataTransfer.dropEffect = "copy";
```

In this example, copy is the effect that is performed.

You can use the value `none` to indicate that no drop is allowed at this location, although it is preferred not to cancel the event in this case.

Within the {{domxref("HTMLElement/drop_event", "drop")}} and {{domxref("HTMLElement/dragend_event", "dragend")}} events, you can check the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine which effect was ultimately chosen.  If the chosen effect were "`move`", then the original data should be removed from the source of the drag within the {{domxref("HTMLElement/dragend_event", "dragend")}} event.

## Specifying Drop Targets

A listener for the {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} events are used to indicate valid drop targets, that is, places where dragged items may be dropped. Most areas of a web page or application are not valid places to drop data. Thus, the default handling of these events is not to allow a drop.

If you want to allow a drop, you must prevent the default handling by cancelling both the `dragenter` and `dragover` events. You can do this either by returning `false` from attribute-defined event listeners, or by calling the event's {{domxref("Event.preventDefault","preventDefault()")}} method. The latter may be more feasible in a function defined in a separate script.

```html
<div ondragover="return false">
<div ondragover="event.preventDefault()">
```

Calling the {{domxref("Event.preventDefault","preventDefault()")}} method during both a {{domxref("HTMLElement/dragenter_event", "dragenter")}} and {{domxref("HTMLElement/dragover_event", "dragover")}} event will indicate that a drop is allowed at that location. However, you will commonly wish to call the {{domxref("Event.preventDefault","preventDefault()")}} method only in certain situations (for example, only if a link is being dragged).

To do this, call a function which checks a condition and only cancels the event when the condition is met. If the condition is not met, don't cancel the event, and a drop will not occur there if the user releases the mouse button.

It is most common to accept or reject a drop based on the type of drag data in the data transfer — for instance, allowing images, or links, or both. To do this, you can check the {{domxref("DataTransfer.types","types")}} property of the event's {{domxref("DragEvent.dataTransfer","dataTransfer")}} (property). The {{domxref("DataTransfer.types","types")}} property returns an array of the string types that were added when the drag began, in the order from most significant to least significant.

```js
function doDragOver(event) {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

In this example, we use the `includes` method to check if the type [`text/uri-list`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#link) is present in the list of types. If it is, we will cancel the event so that a drop may be allowed. If the drag data does not contain a link, the event will not be cancelled, and a drop cannot occur at that location.

You may also wish to set either the {{domxref("DataTransfer.effectAllowed","effectAllowed")}}, {{domxref("DataTransfer.dropEffect","dropEffect")}} property, or both at the same time, if you wish to be more specific about the type of operation that will performed. Naturally, changing either property will have no effect if you do not cancel the event as well.

## Drop Feedback

There are several ways in which you can indicate to the user that a drop is allowed at a certain location. The mouse pointer will update as necessary depending on the value of the {{domxref("DataTransfer.dropEffect","dropEffect")}} property.

Although the exact appearance depends on the user's platform, typically a plus sign icon will appear for a '`copy`' for example, and a 'cannot drop here' icon will appear when a drop is not allowed. This mouse pointer feedback is sufficient in many cases.

However, you can also update the user interface with an insertion point or highlight as needed. For simple highlighting, you can use the `:-moz-drag-over` CSS pseudoclass on a drop target.

```css
.droparea:-moz-drag-over {
  outline: 1px solid black;
}
```

In this example, the element with the class `droparea` will receive a 1 pixel black outline while it is a valid drop target, that is, if the {{domxref("Event.preventDefault","preventDefault()")}} method was called during the {{domxref("HTMLElement/dragenter_event", "dragenter")}} event.

> **Note:** You must cancel the {{domxref("HTMLElement/dragenter_event", "dragenter")}} event for this pseudoclass to apply, as this state is not checked for the {{domxref("HTMLElement/dragover_event", "dragover")}} event.

For more complex visual effects, you can also perform other operations during the {{domxref("HTMLElement/dragenter_event", "dragenter")}} event. For example, by inserting an element at the location where the drop will occur. This might be an insertion marker, or an element that represents the dragged element in its new location. To do this, you could create an [image](/en-US/docs/XUL/image) or [separator](/en-US/docs/XUL/separator) element and insert it into the document during the {{domxref("HTMLElement/dragenter_event", "dragenter")}} event.

The {{domxref("HTMLElement/dragover_event", "dragover")}} event will fire at the element the mouse is pointing at. Naturally, you may need to move the insertion marker around a {{domxref("HTMLElement/dragover_event", "dragover")}} event as well. You can use the event's {{domxref("MouseEvent.clientX","clientX")}} and {{domxref("MouseEvent.clientY","clientY")}} properties as with other mouse events to determine the location of the mouse pointer.

Finally, the {{domxref("HTMLElement/dragleave_event", "dragleave")}} event will fire at an element when the drag leaves the element. This is the time when you should remove any insertion markers or highlighting. You do not need to cancel this event. Any highlighting or other visual effects specified using the `:-moz-drag-over` pseudoclass will be removed automatically. The {{domxref("HTMLElement/dragleave_event", "dragleave")}} event will always fire, even if the drag is cancelled, so you can always ensure that any insertion point cleanup can be done during this event.

## Performing a Drop

When the user releases the mouse, the drag and drop operation ends.

If the mouse is released over an element that is a valid drop target, that is, one that cancelled the last {{domxref("HTMLElement/dragenter_event", "dragenter")}} or {{domxref("HTMLElement/dragover_event", "dragover")}} event, then the drop will be successful, and a {{domxref("HTMLElement/drop_event", "drop")}} event will fire at the target. Otherwise, the drag operation is cancelled, and no {{domxref("HTMLElement/drop_event", "drop")}} event is fired.

During the {{domxref("HTMLElement/drop_event", "drop")}} event, you should retrieve that data that was dropped from the event and insert it at the drop location. You can use the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine which drag operation was desired.

As with all drag-related events, the event's {{domxref("DataTransfer","dataTransfer")}} property will hold the data that is being dragged. The {{domxref("DataTransfer.getData","getData()")}} method may be used to retrieve the data again.

```js
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

The {{domxref("DataTransfer.getData","getData()")}} method takes one argument, the type of data to retrieve. It will return the string value that was set when {{domxref("DataTransfer.setData","setData()")}} was called at the beginning of the drag operation. An empty string will be returned if data of that type does not exist. (Naturally, though, you would likely know that the right type of data was available, as it was previously checked during a {{domxref("HTMLElement/dragover_event", "dragover")}} event.)

In the example here, once the data has been retrieved, we insert the string as the textual content of the target. This has the effect of inserting the dragged text where it was dropped, assuming that the drop target is an area of text such as a `p` or `div` element.

In a web page, you should call the {{domxref("Event.preventDefault","preventDefault()")}} method of the event if you have accepted the drop, so that the browser's default handling is not triggered by the dropped data as well. For example, when a link is dragged to a web page, Firefox will open the link. By cancelling the event, this behavior will be prevented.

You can retrieve other types of data as well. If the data is a link, it should have the type [`text/uri-list`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#link). You could then insert a link into the content.

```js
function doDrop(event) {
  const lines = event.dataTransfer.getData("text/uri-list").split("\n");
  lines.filter((line) => !line.startsWith("#"))
    .forEach((line) => {
      const link = document.createElement("a");
      link.href = line;
      link.textContent = line;
      event.target.appendChild(link);
    })
  event.preventDefault();
}
```

This example inserts a link from the dragged data. As the name implies, the [`text/uri-list`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#link) type actually may contain a list of URLs, each on a separate line. The above code uses [`split`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to break the string into lines, then iterates over the list of lines, and inserts each as a link into the document. (Note also that links starting with a number sign (`#`) are skipped, as these are comments.)

For simple cases, you can use the special type `URL` just to retrieve the first valid URL in the list. For example:

```js
const link = event.dataTransfer.getData("URL");
```

This eliminates the need to check for comments or iterate through lines yourself. However, it is limited to only the first URL in the list.

The `URL` type is a special type. It is used only as a shorthand, and it does not appear within the list of types specified in the {{domxref("DataTransfer.types","types")}} property.

Sometimes you may support some different formats, and you want to retrieve the data that is most specific that is supported. In the following example, three formats are supported by a drop target.

The following example returns the data associated with the best-supported format:

```js
function doDrop(event) {
  const supportedTypes = ["application/x-moz-file", "text/uri-list", "text/plain"];
  const types = event.dataTransfer.types.filter((type) => supportedTypes.includes(type));
  if (types.length) {
    const data = event.dataTransfer.getData(types[0]);
  }
  event.preventDefault();
}
```

## Finishing a Drag

Once the drag is complete, a {{domxref("HTMLElement/dragend_event", "dragend")}} event is fired at the source of the drag (the same element that received the {{domxref("HTMLElement/dragstart_event", "dragstart")}} event). This event will fire if the drag was successful or if it was cancelled. However, you can use the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine which drop operation occurred.

If the {{domxref("DataTransfer.dropEffect","dropEffect")}} property has the value `none` during a {{domxref("HTMLElement/dragend_event", "dragend")}}, then the drag was cancelled. Otherwise, the effect specifies which operation was performed. The source can use this information after a `move` operation to remove the dragged item from the old location. The {{domxref("DataTransfer.mozUserCancelled","mozUserCancelled")}} property will be set to `true` if the user cancelled the drag (by pressing <kbd>Escape</kbd>), and `false` if the drag was cancelled for other reasons such as an invalid drop target, or if it was successful.

A drop can occur inside the same window or over another application. The {{domxref("HTMLElement/dragend_event", "dragend")}} event will always fire regardless. The event's {{domxref("MouseEvent.screenX","screenX")}} and {{domxref("MouseEvent.screenY","screenY")}} properties will be set to the screen coordinates where the drop occurred.

After the {{domxref("HTMLElement/dragend_event", "dragend")}} event has finished propagating, the drag and drop operation is complete.

## See also

- [HTML Drag and Drop API (Overview)](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
