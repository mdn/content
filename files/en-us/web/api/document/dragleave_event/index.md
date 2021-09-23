---
title: 'Document: dragleave event'
slug: Web/API/Document/dragleave_event
tags:
  - API
  - DOM
  - Document
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
  - dragleave
browser-compat: api.Document.dragleave_event
---
{{APIRef}}

The `dragleave` event is fired when a dragged element or text selection leaves a valid drop target.

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
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragleave", "ondragleave")}}
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
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragleave_event", "dragleave")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragleave_event", "dragleave")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragleave_event", "dragleave")}} event
