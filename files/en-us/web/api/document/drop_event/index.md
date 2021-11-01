---
title: 'Document: drop event'
slug: Web/API/Document/drop_event
tags:
  - DOM
  - Drag Event
  - Drop
  - Event
  - HTML 5
  - Reference
  - drag and drop
browser-compat: api.Document.drop_event
---
{{APIRef}}

The **`drop`** event is fired when an element or text selection is dropped on a valid drop target.

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
      <td>Varies</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("DragEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers/ondrop", "ondrop")}}
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
  - {{domxref("Document/dragleave_event", "dragleave")}}

- This event on other targets:

  - {{domxref("Window")}}: {{domxref("Window/drop_event", "drop")}} event
  - {{domxref("HTMLElement")}}: {{domxref("HTMLElement/drop_event", "drop")}} event
  - {{domxref("SVGElement")}}: {{domxref("SVGElement/drop_event", "drop")}} event
