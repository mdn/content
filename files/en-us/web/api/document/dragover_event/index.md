---
title: 'Document: dragover event'
slug: Web/API/Document/dragover_event
tags:
  - API
  - DOM
  - Document
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
browser-compat: api.Document.dragover_event
---
{{APIRef}}

The `dragover` event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).

The event is fired on the drop target(s).

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
      <td>Reset the current drag operation to "none".</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ondragover", "ondragover")}}
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
  - {{domxref("Document/dragenter_event", "dragenter")}}
  - {{domxref("Document/dragleave_event", "dragleave")}}
  - {{domxref("Document/drop_event", "drop")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/dragover_event", "dragover")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/dragover_event", "dragover")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/dragover_event", "dragover")}} event
