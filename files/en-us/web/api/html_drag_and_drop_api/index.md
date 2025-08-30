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

On the surface, Drag and Drop actually has three distinct use cases: dragging elements within a page, dragging data out of a page, and dragging data into a page. They have subtly different requirements and implementations. However, the Drag and Drop API provides a unified model to think about all these interactions.

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

| Event                                                   | Fires when...                                                                                                                                                                                 |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref('HTMLElement/dragstart_event', 'dragstart')}} | ...the user starts dragging an item. (See [Starting a drag](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#starting_a_drag).)                                                     |
| {{domxref('HTMLElement/drag_event', 'drag')}}           | ...a [_draggable item_](#draggable_items) is dragged, every few hundred milliseconds.                                                                                                         |
| {{domxref('HTMLElement/dragenter_event', 'dragenter')}} | ...a dragged item enters a valid drop target. (See [Specifying drop targets](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragging_over_elements_and_specifying_drop_targets).) |
| {{domxref('HTMLElement/dragleave_event', 'dragleave')}} | ...a dragged item leaves a valid drop target.                                                                                                                                                 |
| {{domxref('HTMLElement/dragover_event', 'dragover')}}   | ...a dragged item is being dragged over a valid drop target, every few hundred milliseconds.                                                                                                  |
| {{domxref('HTMLElement/drop_event', 'drop')}}           | ...an item is dropped on a valid drop target. (See [Performing a drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#performing_a_drop).)                                        |
| {{domxref('HTMLElement/dragend_event', 'dragend')}}     | ...a drag operation ends (such as releasing a mouse button or hitting the Esc key; see [Finishing the drag](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#finishing_the_drag).)  |

> [!NOTE]
> Neither `dragstart` nor `dragend` events are fired when dragging a file into the browser from the OS.

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

It is not possible to transfer JavaScript objects directly to other webpages, and surely not to external applications, so to transfer data in and out of the webpage, the data must be serialized to a string (or as a {{domxref("File")}}). In Drag & Drop, this string is encapsulated in a {{domxref("DataTransferItem")}} object, which also defines a particular `type`—typically a MIME type such as `text/html`—that defines how the string should be interpreted.

Each drag & drop operation has an associated _drag data store_, which is a {{domxref("DataTransfer")}} object accessible via the {{domxref("DragEvent")}}'s {{domxref("DragEvent.dataTransfer","dataTransfer")}} property. For the default-draggable items such as images, links, and selections, the drag data is already defined by the browser; for custom draggable elements defined using the `draggable` attribute, you must define the drag data yourself. The only time to make any modifications to the data store is within the {{domxref("HTMLElement/dragstart_event", "dragstart")}} handler—for the `dataTransfer` of any other drag event, the data store is unmodifiable.

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

By default, elements on a webpage do not accept drops, and if you release the drag, a "fly-black" animation displays indicating that the drag & drop failed. To prevent this, you must make the region of dropping a valid _drop target_. In addition, if you ever want to read the drag data store, you must do so during the {{domxref("HTMLElement/drop_event", "drop")}} event, which only fires on drop targets. Some elements are drop targets by default under certain circumstances, but all elements can elect themselves to become one by cancelling the {{domxref("HTMLElement.dragover_event","dragover")}} event with `preventDefault()`.

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

## Interfaces

- {{domxref("DragEvent")}}
- {{domxref("DataTransfer")}}
- {{domxref("DataTransferItem")}}
- {{domxref("DataTransferItemList")}}

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
