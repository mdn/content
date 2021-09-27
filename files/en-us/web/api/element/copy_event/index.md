---
title: 'Element: copy event'
slug: Web/API/Element/copy_event
tags:
  - API
  - Clipboard API
  - Element
  - Event
  - Reference
  - Web
browser-compat: api.Element.copy_event
---
{{APIRef}}

The **`copy`** event fires when the user initiates a copy action through the browser's user interface.

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
      <td>{{domxref("HTMLElement/oncopy", "oncopy")}}</td>
    </tr>
  </tbody>
</table>

The event's default action is to copy the selection (if any) to the clipboard.

A handler for this event can _modify_ the clipboard contents by calling {{domxref("DataTransfer.setData", "setData(format, data)")}} on the event's  {{domxref("ClipboardEvent.clipboardData")}} property, and cancelling the event's default action using {{domxref("Event/preventDefault", "event.preventDefault()")}}.

However, the handler cannot _read_ the clipboard data.

It's possible to construct and dispatch a [synthetic](/en-US/docs/Web/Events/Creating_and_triggering_events) `copy` event, but this will not affect the system clipboard.

## Examples

### Live example

#### HTML

```html
<div class="source" contenteditable="true">Try copying text from this box...</div>
<div class="target" contenteditable="true">...and pasting it into this one</div>
```

```css hidden
div.source, div.target {
    border: 1px solid gray;
    margin: .5rem;
    padding: .5rem;
    height: 1rem;
    background-color: #e9eef1;
}
```

#### JS

```js
const source = document.querySelector('div.source');

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});
```

#### Result

{{ EmbedLiveSample('Live_example', '100%', '100px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/copy_event", "copy")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/copy_event", "copy")}}
