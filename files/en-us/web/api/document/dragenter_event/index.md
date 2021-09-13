---
title: 'Document: dragenter event'
slug: Web/API/Document/dragenter_event
tags:
  - API
  - DOM
  - Document
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
  - dragenter
browser-compat: api.Document.dragenter_event
---
{{APIRef}}

The `dragenter` event is fired when a dragged element or text selection enters a valid drop target.

The target object is the _immediate user selection_ (the element directly indicated by the user as the drop target), or the {{HTMLElement("body")}} element.

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
      <th scope="row">Default action</th>
      <td>Reject immediate user selection as potential target element.</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragenter", "ondragenter")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

See the [drag event](/en-US/docs/Web/API/Document/drag_event) for example code or this [JSFiddle demo](https://jsfiddle.net/zfnj5rv4/).

{{EmbedLiveSample('Examples', '300', '200', '', 'Web/API/Document/drag_event')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other drag and drop events:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragenter_event", "dragenter")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragenter_event", "dragenter")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragenter_event", "dragenter")}} event
