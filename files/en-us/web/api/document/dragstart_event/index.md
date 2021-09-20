---
title: 'Document: dragstart event'
slug: Web/API/Document/dragstart_event
tags:
  - DOM
  - Event
  - Reference
  - drag and drop
browser-compat: api.Document.dragstart_event
---
{{APIRef}}

The `dragstart` event is fired when the user starts dragging an element or text selection.

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
      <td>Initiate the drag-and-drop operation.</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragstart", "ondragstart")}}
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
  - {{domxref("Document/dragend_event", "dragend")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragstart_event", "dragstart")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragstart_event", "dragstart")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragstart_event", "dragstart")}} event
