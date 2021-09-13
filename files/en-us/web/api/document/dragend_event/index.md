---
title: 'Document: dragend event'
slug: Web/API/Document/dragend_event
tags:
  - API
  - DOM
  - Document
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
  - dragend
browser-compat: api.Document.dragend_event
---
{{APIRef}}

The `dragend` event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Default action</th>
      <td>Varies</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragend", "ondragend")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

See the [drag](/en-US/docs/Web/API/Document/drag_event) event for example code or this [JSFiddle demo](https://jsfiddle.net/zfnj5rv4/).

{{EmbedLiveSample('Examples', '300', '200', '', 'Web/API/Document/drag_event')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other drag and drop events:

  - {{domxref("Document/drag_event", "drag")}}
  - {{domxref("Document/dragstart_event", "dragstart")}}
  - {{domxref("Document/dragover_event", "dragover")}}
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragend_event", "dragend")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragend_event", "dragend")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragend_event", "dragend")}} event
