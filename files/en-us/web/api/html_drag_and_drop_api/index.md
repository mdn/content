---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
page-type: web-api-overview
spec-urls: https://html.spec.whatwg.org/multipage/dnd.html
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag and Drop** interfaces enable applications to use drag-and-drop features in browsers.

The user may select _draggable_ elements with a mouse, drag those elements to a _droppable_ element, and drop them by releasing the mouse button. A translucent representation of the _draggable_ elements follows the pointer during the drag operation.

You can customize which elements can become _draggable_, the type of feedback the _draggable_ elements produce, and the _droppable_ elements.

This overview of HTML Drag and Drop includes a description of the interfaces, basic steps to add drag-and-drop support to an application, and an interoperability summary of the interfaces.

## Concepts and usage

On the surface, Drag and Drop actually has three distinct use cases: [dragging elements within a page](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board), dragging data out of a page, and [dragging data into a page](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop). They have subtly different requirements and implementations. However, the Drag and Drop API provides a unified model to think about all these interactions.

At its core, a drag operation involves three things:

- The [item being dragged](#draggable_items)
- The [underlying data to be transferred](#drag_data_store)
- The [drop target](#drop_target)

It's not necessarily true that all three are under your control, or you need to define them yourself:

- When dragging external data into a page, there's no draggable item to be defined (for example, it could be a file in the operating system's file explorer).
- When dragging elements within a page, you often don't need to define any transferred data; you just manipulate the dragged element.
- When dragging out of the page, there's no drop target to be defined.

We'll look at how each one can be defined and used.

### Drag events

HTML drag-and-drop uses the [DOM event model](/en-US/docs/Web/API/Event) and _[drag events](/en-US/docs/Web/API/DragEvent)_ inherited from [mouse events](/en-US/docs/Web/API/MouseEvent). During drag operations, several event types are fired, and some events might fire many times, such as the {{domxref('HTMLElement/drag_event', 'drag')}} and {{domxref('HTMLElement/dragover_event', 'dragover')}} events.

| Event                                                   | Fires when...                                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| {{domxref('HTMLElement/dragstart_event', 'dragstart')}} | ...the [draggable item](#draggable_items) starts to be dragged.                            |
| {{domxref('HTMLElement/drag_event', 'drag')}}           | ...the draggable item is being dragged, every few hundred milliseconds.                    |
| {{domxref('HTMLElement/dragenter_event', 'dragenter')}} | ...the element has a draggable item entering it.                                           |
| {{domxref('HTMLElement/dragleave_event', 'dragleave')}} | ...the element has a draggable item leaving it.                                            |
| {{domxref('HTMLElement/dragover_event', 'dragover')}}   | ...the element has a draggable item being dragged over it, every few hundred milliseconds. |
| {{domxref('HTMLElement/drop_event', 'drop')}}           | ...the element is a [drop target](#drop_target) and the draggable item is dropped over it. |
| {{domxref('HTMLElement/dragend_event', 'dragend')}}     | ...the draggable item stops being dragged.                                                 |

> [!NOTE]
> The `dragstart`, `drag`, and `dragend` events are fired on the dragged item, and therefore can't fire when dragging a file into the browser from the OS.
>
> Similarly, the `dragenter`, `dragleave`, `dragover`, and `drop` events are fired on elements that are potential drop targets, and therefore can't fire when dragging an item out of the browser.

For more information, see [Drag operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Draggable items

In HTML, images, links, and selections are draggable by default. To make an arbitrary element draggable, set the [`draggable`](/en-US/docs/Web/HTML/Reference/Global_attributes/draggable) attribute to the value `"true"`.

```html live-sample___draggable_element live-sample___drop_target
<p id="p1" draggable="true">This element is draggable.</p>
```

At this point, the element already has the dragging appearance, although it has no behavior defined yet:

{{EmbedLiveSample("draggable_element", "", 100)}}

For images and links, `draggable` defaults to `true`, so you would only set it to `false` to disable dragging of these elements. For non-draggable elements, the "dragging" gesture usually selects the text instead.

> [!NOTE]
> When an element is made draggable, text or other elements within it can no longer be selected in the normal way by clicking and dragging with the mouse. Instead, the user must hold down the <kbd>Alt</kbd> key to select text with the mouse, or use the keyboard.

A selection is also draggable. In this case, the _source node_, or the node on which various events such as `dragstart` and `dragend` are fired, is the text node that the drag started on. The selection can partially or fully contain multiple nodes, including text nodes and element nodes, which are all considered dragged simultaneously.

As aforementioned, the dragged item can also be something not on a webpage—for example, a file in the operating system's file explorer. However, only items on the webpage can cause the {{domxref('HTMLElement/dragstart_event', 'dragstart')}} and {{domxref('HTMLElement/dragend_event', 'dragend')}} events to fire.

For more information, see the [Drag operations guide](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Drag data store

You can't transfer JavaScript objects directly to arbitrary webpages, and surely not to external applications, so to transfer data in and out of the webpage, the data must be serialized to a string (or as a {{domxref("File")}}). In drag and drop, this string is encapsulated in a {{domxref("DataTransferItem")}} object, which also defines a particular `type`—typically a MIME type such as `text/html`—that defines how the string should be interpreted.

Each drag and drop operation has an associated _drag data store_, which is a {{domxref("DataTransfer")}} object accessible via the {{domxref("DragEvent")}}'s {{domxref("DragEvent.dataTransfer","dataTransfer")}} property. For the default-draggable items such as images, links, and selections, the drag data is already defined by the browser; for custom draggable elements defined using the `draggable` attribute, you must define the drag data yourself. The only time to make any modifications to the data store is within the {{domxref("HTMLElement/dragstart_event", "dragstart")}} handler—for the `dataTransfer` of any other drag event, the data store is unmodifiable.

The {{domxref("DataTransfer.setData", "setData()")}} method can be used to add an item to the drag data, as shown in the following example.

```js live-sample___drop_target
function dragstartHandler(ev) {
  // Add different types of drag data
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Furthermore, the only time you can _read_ from the data store, apart from the `dragstart` event, is during the `drop` event (allowing the drop target to retrieve the data). For all other events, the data store cannot be accessed.

For more information, read [Working with the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store).

### Drop target

A _drop target_ is an element on which a user can drop a dragged item. By default, most elements are not drop targets, and if you release the drag, a "fly-black" animation displays, indicating that the drag and drop failed. Any element can become a drop target by canceling the {{domxref("HTMLElement.dragover_event","dragover")}} event that fires on it with `preventDefault()`.

The {{domxref("HTMLElement/drop_event", "drop")}} event only fires on drop targets, and it is the only time you can read the drag data store.

The following example shows a minimal valid drop target, and also combines the code from the previous examples.

```html live-sample___drop_target
<p id="target">Drop Zone</p>
```

```js live-sample___drop_target
const target = document.getElementById("target");

// Cancel dragover so that drop can fire
target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  ev.target.append(data);
});
```

{{EmbedLiveSample("drop_target", "", 300)}}

For more information, see [Specifying drop targets](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragging_over_elements_and_specifying_drop_targets).

## Guides

- [Drag operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
  - : Describes the steps that occur during a drag and drop operation, and what the application is supposed to do within each handler.
- [Working with the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
  - : Describes how to read and write to the drag data store during a drag and drop operation.
- [File drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
  - : A hands-on guide implementing a basic interface accepting file drops.
- [Kanban board with drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board)
  - : A hands-on guide implementing a Kanban board involving dragging and dropping elements within a webpage.

## Interfaces

- {{domxref("DragEvent")}}
  - : The event object passed to drag event handlers.
- {{domxref("DataTransfer")}}
  - : Holds any data transferred between contexts, consisting of text items and file items. Initially designed for drag and drop, it is now also used in other contexts such as [Clipboard API](/en-US/docs/Web/API/Clipboard_API).
- {{domxref("DataTransferItem")}}
  - : Represents one item in the drag data store, which can be a text item or a file item.
- {{domxref("DataTransferItemList")}}
  - : Represents the list of {{domxref("DataTransferItem")}} objects in the drag data store.

## Examples

- [Copying and moving elements with the `DataTransfer` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copying and moving elements with the `DataTransferListItem` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)

Reference pages for each interface also have individual examples.

## Specifications

{{Specifications}}

## See also

- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Working with the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop interoperability data from CanIUse](https://caniuse.com/#search=draganddrop)
