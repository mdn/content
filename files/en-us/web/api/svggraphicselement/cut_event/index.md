---
title: 'SVGGraphicsElement: cut event'
slug: Web/API/SVGGraphicsElement/cut_event
tags:
  - API
  - Event
  - NeedsExample
  - Reference
  - SVG
  - SVG OM
browser-compat: api.SVGGraphicsElement.cut_event
---
{{APIRef}}

The **`cut`** event is fired on an {{domxref("SVGGraphicsElement")}} when the user has initiated a "cut" action through the browser's user interface.

If the user attempts a cut action on uneditable content, the `cut` event still fires but the event object contains no data.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("ClipboardEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("SVGGraphicsElement/oncut", "oncut")}}</td>
    </tr>
  </tbody>
</table>

The event's default action is to copy the current selection (if any) to the system clipboard and remove it from the document.

A handler for this event can _modify_ the clipboard contents by calling [`setData(format, data)`](/en-US/docs/Web/API/DataTransfer/setData "The DataTransfer.setData() method sets the drag operation's drag data to the specified data and type. If data for the given type does not exist, it is added at the end of the drag data store, such that the last item in the types list will be the new type. If data for the given type already exists, the existing data is replaced in the same position. That is, the order of the types list is not changed when replacing data of the same type.") on the event's  [`ClipboardEvent.clipboardData`](/en-US/docs/Web/API/ClipboardEvent/clipboardData "The ClipboardEvent.clipboardData property holds a DataTransfer object, which can be used:") property, and cancelling the default action using [`event.preventDefault()`](/en-US/docs/Web/API/Event/preventDefault).

Note though that cancelling the default action will also prevent the document from being updated. So an event handler which wants to emulate the default action for "cut" while modifying the clipboard must also manually remove the selection from the document.

The handler cannot _read_ the clipboard data.

It's possible to construct and dispatch a [synthetic](/en-US/docs/Web/Events/Creating_and_triggering_events) `cut` event, but this will not affect the system clipboard or the document's contents.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`copy`](/en-US/docs/Web/API/SVGGraphicsElement/copy_event), [`paste`](/en-US/docs/Web/API/SVGGraphicsElement/paste_event)
- This event on HTML {{domxref("Element")}} targets: [`cut`](/en-US/docs/Web/API/Element/cut_event)
- This event on {{domxref("Document")}} targets: [`cut`](Web/API/Document/cut_event)
- This event on {{domxref("Window")}} targets: [`cut`](Web/API/Window/cut_event)
