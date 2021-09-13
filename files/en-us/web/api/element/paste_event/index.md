---
title: 'Element: paste event'
slug: Web/API/Element/paste_event
tags:
  - Clipboard API
  - Event
  - NeedsUpdate
  - Reference
browser-compat: api.Element.paste_event
---
{{APIRef}}

The **`paste`** event is fired when the user has initiated a "paste" action through the browser's user interface.

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
      <td>{{domxref("HTMLElement/onpaste", "onpaste")}}</td>
    </tr>
  </tbody>
</table>

If the cursor is in an editable context (for example, in a {{HTMLElement("textarea")}} or an element with [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set to `true`) then the default action is to insert the contents of the clipboard into the document at the cursor position.

A handler for this event can access the clipboard contents by calling {{domxref("DataTransfer/getData", "getData()")}} on the event's `clipboardData` property.

To override the default behavior (for example to insert some different data or a transformation of the clipboard contents) an event handler must cancel the default action using {{domxref("Event/preventDefault", "event.preventDefault()")}}, and then insert its desired data manually.

It's possible to construct and dispatch a [synthetic](/en-US/docs/Web/Events/Creating_and_triggering_events) `paste` event, but this will not affect the document's contents.

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
const target = document.querySelector('div.target');

target.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();

    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

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

- Related events: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}
- This event on {{domxref("Document")}} targets: {{domxref("Document/paste_event", "paste")}}
- This event on {{domxref("Window")}} targets: {{domxref("Window/paste_event", "paste")}}
