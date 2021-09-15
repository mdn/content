---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
tags:
  - Advanced
  - Guide
  - HTML5
  - Overview
  - XUL
  - drag and drop
  - events
---
{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag and Drop** interfaces enable applications to use drag-and-drop features in browsers.

The user may select _draggable_ elements with a mouse, drag those elements to a _droppable_ element, and drop them by releasing the mouse button. A translucent representation of the _draggable_ elements follows the pointer during the drag operation.

For web sites, extensions, and XUL applications, you can customize which elements can become _draggable_, the type of feedback the _draggable_ elements produce, and the _droppable_ elements.

This overview of HTML Drag and Drop includes a description of the interfaces, basic steps to add drag-and-drop support to an application, and an interoperability summary of the interfaces.

## Drag Events

HTML drag-and-drop uses the {{domxref("Event","DOM event model")}} and _{{domxref("DragEvent","drag events")}}_ inherited from {{domxref("MouseEvent","mouse events")}}. A typical _drag operation_ begins when a user selects a _draggable_ element, drags the element to a _droppable_ element, and then releases the dragged element.

During drag operations, several event types are fired, and some events might fire many times, such as the {{domxref('Document/drag_event', 'drag')}} and {{domxref('Document/dragover_event', 'dragover')}} events.

Each [drag event type](/en-US/docs/Web/API/DragEvent#event_types) has an associated [global event handler](/en-US/docs/Web/API/DragEvent#globaleventhandlers):

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Event</th>
      <th scope="col">On Event Handler</th>
      <th scope="col">Fires when…</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref('Document/drag_event', 'drag')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.ondrag','ondrag')}}
      </td>
      <td>…a <em>dragged item</em> (element or text selection) is dragged.</td>
    </tr>
    <tr>
      <td>{{domxref('Document/dragend_event', 'dragend')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.ondragend','ondragend')}}
      </td>
      <td>
        …a drag operation ends (such as releasing a mouse button or hitting the
        Esc key; see
        <a
          href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragend"
          title="Finishing a Drag"
          >Finishing a Drag</a
        >.)
      </td>
    </tr>
    <tr>
      <td>
        {{domxref('Document/dragenter_event', 'dragenter')}}
      </td>
      <td>
        {{domxref('GlobalEventHandlers.ondragenter','ondragenter')}}
      </td>
      <td>
        …a dragged item enters a valid drop target. (See
        <a
          href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets"
          title="Specifying Drop Targets"
          >Specifying Drop Targets</a
        >.)
      </td>
    </tr>
    <tr>
      <td>
        {{domxref('Document/dragleave_event', 'dragleave')}}
      </td>
      <td>
        {{domxref('GlobalEventHandlers.ondragleave','ondragleave')}}
      </td>
      <td>…a dragged item leaves a valid drop target.</td>
    </tr>
    <tr>
      <td>
        {{domxref('Document/dragover_event', 'dragover')}}
      </td>
      <td>
        {{domxref('GlobalEventHandlers.ondragover','ondragover')}}
      </td>
      <td>
        …a dragged item is being dragged over a valid drop target, every few
        hundred milliseconds.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref('Document/dragstart_event', 'dragstart')}}
      </td>
      <td>
        {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}}
      </td>
      <td>
        …the user starts dragging an item. (See
        <a
          href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragstart"
          title="Starting a Drag Operation"
          >Starting a Drag Operation</a
        >.)
      </td>
    </tr>
    <tr>
      <td>{{domxref('Document/drop_event', 'drop')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.ondrop','ondrop')}}
      </td>
      <td>
        …an item is dropped on a valid drop target. (See
        <a
          href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop"
          title="Performing a Drop"
          >Performing a Drop</a
        >.)
      </td>
    </tr>
  </tbody>
</table>

**Note:** Neither `dragstart` nor `dragend` events are fired when dragging a file into the browser from the OS.

## Interfaces

The HTML Drag and Drop interfaces are {{domxref("DragEvent")}}, {{domxref("DataTransfer")}}, {{domxref("DataTransferItem")}} and {{domxref("DataTransferItemList")}}.

The {{domxref("DragEvent")}} interface has a constructor and one {{domxref("DragEvent.dataTransfer","dataTransfer")}} property, which is a {{domxref("DataTransfer")}} object.

{{domxref("DataTransfer")}} objects include the drag event's state, such as the type of drag being done (like `copy` or `move`), the drag's data (one or more items), and the MIME type of each _drag item_. {{domxref("DataTransfer")}} objects also have methods to add or remove items to the drag's data.

The {{domxref("DragEvent")}} and {{domxref("DataTransfer")}} interfaces should be the only ones needed to add HTML Drag and Drop capabilities to an application. (Firefox supports some {{anch("Gecko specific interfaces","Gecko-specific extensions")}} to the {{domxref("DataTransfer")}} object, but those extensions will only work on Firefox.)

Each {{domxref("DataTransfer")}} object contains an {{domxref("DataTransfer.items","items")}} property, which is a {{domxref("DataTransferItemList","list")}} of {{domxref("DataTransferItem")}} objects. A {{domxref("DataTransferItem")}} object represents a single _drag item_, each with a {{domxref("DataTransferItem.kind","kind")}} property (either `string` or `file`) and a {{domxref("DataTransferItem.type","type")}} property for the data item's MIME type. The {{domxref("DataTransferItem")}} object also has methods to get the drag item's data.

The {{domxref("DataTransferItemList")}} object is a list of {{domxref("DataTransferItem")}} objects. The list object has methods to add a drag item to the list, remove a drag item from the list, and clear the list of all drag items.

A key difference between the {{domxref("DataTransfer")}} and {{domxref("DataTransferItem")}} interfaces is that the former uses the synchronous {{domxref("DataTransfer.getData","getData()")}} method to access a drag item's data, but the latter instead uses the asynchronous {{domxref("DataTransferItem.getAsString","getAsString()")}} method.

**Note:** {{domxref("DragEvent")}} and {{domxref("DataTransfer")}} are broadly supported on desktop browsers. However, the {{domxref("DataTransferItem")}} and {{domxref("DataTransferItemList")}} interfaces have limited browser support. See {{anch("Interoperability")}} for more information about drag-and-drop interoperability.

### Gecko-specific interfaces

Mozilla and Firefox support some features not in the standard drag-and-drop model. These are _convenience functions_ to help with dragging multiple items or non-string data (such as files). For more information, see [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items). Additionally, see the {{domxref("DataTransfer")}} reference page for all of the [Gecko-specific properties](/en-US/docs/Web/API/DataTransfer#gecko_properties) and [Gecko-specific methods](/en-US/docs/Web/API/DataTransfer#gecko_methods).

## The basics

This section is a summary of the basic steps to add drag-and-drop functionality to an application.

### Identify what is _draggable_

Making an element _draggable_ requires adding the {{htmlattrxref("draggable")}} attribute and the {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} global event handler, as shown in the following code sample:

```html
<script>
  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
  });
</script>

<p id="p1" draggable="true">This element is draggable.</p>
```

For more information, see:

- [Draggable attribute reference](/en-US/docs/Web/HTML/Global_attributes/draggable "draggable global attribute")
- [Drag operations guide](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#draggableattribute)

### Define the drag's data

The application is free to include any number of data items in a drag operation. Each data item is a {{domxref("DOMString","string")}} of a particular `type` — typically a MIME type such as `text/html`.

Each {{domxref("DragEvent","drag event")}} has a {{domxref("DragEvent.dataTransfer","dataTransfer")}} property that _holds_ the event's data. This property (which is a {{domxref("DataTransfer")}} object) also has methods to _manage_ drag data. The {{domxref("DataTransfer.setData","setData()")}} method is used to add an item to the drag data, as shown in the following example.

```js
function dragstart_handler(ev) {
  // Add different types of drag data
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
}
```

- For a list of common data types used in drag-and-drop (such as text, HTML, links, and files), see [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- For more information about drag data, see [Drag Data](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragdata).

### Define the drag image

By default, the browser supplies an image that appears beside the pointer during a drag operation. However, an application may define a custom image with the {{domxref("DataTransfer.setDragImage","setDragImage()")}} method, as shown in the following example.

```js
function dragstart_handler(ev) {
  // Create an image and then use it for the drag image.
  // NOTE: change "example.gif" to a real image URL or the image
  // will not be created and the default drag image will be used.
  let img = new Image();
  img.src = 'example.gif';
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

Learn more about drag feedback images in:

- [Setting the Drag Feedback Image](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragfeedback "Setting the Drag Feedback Image")

### Define the drag _effect_

The {{domxref("DataTransfer.dropEffect","dropEffect")}} property is used to control the feedback the user is given during a drag-and-drop operation. It typically affects which cursor the browser displays while dragging. For example, when the user hovers over a drop target, the browser's cursor may indicate the type of operation that will occur.

Three effects may be defined:

1.  **`copy`** indicates that the dragged data will be copied from its present location to the drop location.
2.  **`move`** indicates that the dragged data will be moved from its present location to the drop location.
3.  **`link`** indicates that some form of relationship or connection will be created between the source and drop locations.

During the drag operation, drag effects may be modified to indicate that certain effects are allowed at certain locations.

The following example shows how to use this property.

```js
function dragstart_handler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

For more details, see:

- [Drag Effects](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drageffects "Drag Effects")

### Define a _drop zone_

By default, the browser prevents anything from happening when dropping something onto most HTML elements. To change that behavior so that an element becomes a _drop zone_ or is _droppable_, the element must have both {{domxref("GlobalEventHandlers.ondragover","ondragover")}} and {{domxref("GlobalEventHandlers.ondrop","ondrop")}} event handler attributes.

The following example shows how to use those attributes, and includes basic event handlers for each attribute.

```html
<script>
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 const data = ev.dataTransfer.getData("text/plain");
 ev.target.appendChild(document.getElementById(data));
}
</script>

<p id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Zone</p>
```

Note that each handler calls {{domxref("Event.preventDefault","preventDefault()")}} to prevent additional event processing for this event (such as [touch events](/en-US/docs/Web/API/Touch_events) or [pointer events](/en-US/docs/Web/API/Pointer_events)).

For more information, see:

- [Specifying Drop Targets](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets)

### Handle the drop _effect_

The handler for the {{domxref("Document/drop_event", "drop")}} event is free to process the drag data in an application-specific way.

Typically, an application uses the {{domxref("DataTransfer.getData","getData()")}} method to retrieve drag items and then process them accordingly. Additionally, application semantics may differ depending on the value of the {{domxref("DataTransfer.dropEffect","dropEffect")}} and/or the state of modifier keys.

The following example shows a drop handler getting the source element's `id` from the drag data, and then using the `id` to move the source element to the drop element:

```html
<script>
function dragstart_handler(ev) {
 // Add the target element's id to the data transfer object
 ev.dataTransfer.setData("application/my-app", ev.target.id);
 ev.dataTransfer.effectAllowed = "move";
}
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 const data = ev.dataTransfer.getData("application/my-app");
 ev.target.appendChild(document.getElementById(data));
}
</script>

<p id="p1" draggable="true" ondragstart="dragstart_handler(event)">This element is draggable.</p>
<div id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)">Drop Zone</div>
```

For more information, see:

- [Performing a Drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop)

### Drag end

At the end of a drag operation, the {{domxref("Document/dragend_event", "dragend")}} event fires at the _source_ element — the element that was the target of the drag start.

This event fires regardless of whether the drag completed or was canceled. The {{domxref("Document/dragend_event", "dragend")}} event handler can check the value of the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine if the drag operation succeeded or not.

For more information about handling the end of a drag operation, see:

- [Finishing a Drag](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragend "Finishing a Drag")

## Interoperability

As can be seen in the [DataTransferItem interface's Browser Compatibility table](/en-US/docs/Web/API/DataTransferItem#browser_compatibility), drag-and-drop interoperability is relatively broad among desktop browsers (except the {{domxref("DataTransferItem")}} and {{domxref("DataTransferItemList")}} interfaces have less support). This data also indicates drag-and-drop support among mobile browsers is very low.

## Examples and demos

- [Copying and moving elements with the `DataTransfer` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copying and moving elements with the `DataTransferListItem` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Dragging and dropping files (Firefox only): <https://jsfiddle.net/9C2EF/>
- Dragging and dropping files (All browsers): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- A parking project using the Drag and Drop API: <https://park.glitch.me/> (You can edit [here](https://glitch.com/edit/#!/park))

## Specifications

| **Specification**                                | **Status**                       | **Comment** |
| ------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#dnd")}} | {{Spec2('HTML WHATWG')}} |             |

## See also

- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Dragging and Dropping Multiple Items](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Recommended Drag Types](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop interoperability data from CanIUse](https://caniuse.com/#search=draganddrop "Drag and Drop interoperability data from CanIUse")
