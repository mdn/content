---
title: "HTMLElement: paste event"
short-title: paste
slug: Web/API/HTMLElement/paste_event
page-type: web-api-event
browser-compat: api.Element.paste_event
---

{{ APIRef("HTML DOM") }}

The **`paste`** event fires when the user initiates a paste action through the browser's user interface.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Event properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : A {{domxref("DataTransfer")}} object containing the data affected by the user-initiated {{domxref("HTMLElement/cut_event", "cut")}}, {{domxref("HTMLElement/copy_event", "copy")}}, or `paste` operation, along with its MIME type.

## Example

This example logs every copy and paste attempt to the {{htmlElement("textarea")}}.

### HTML

```html
<h3>Play with this text area:</h3>
<textarea id="editor" rows="3">
Try copying and pasting text into this field!
</textarea>

<h3>Log:</h3>
<p id="log"></p>
```

### JavaScript

```js
function logCopy(event) {
  log.innerText = `Copied!\n${log.innerText}`;
}

function logPaste(event) {
  log.innerText = `Pasted!\n${log.innerText}`;
}

const editor = document.getElementById("editor");
const log = document.getElementById("log");

editor.oncopy = logCopy;
editor.onpaste = logPaste;
```

### Result

{{EmbedLiveSample("Example", 700, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events
  - {{domxref("HTMLElement.copy_event", "copy")}} event
  - {{domxref("HTMLElement.cut_event", "cut")}} event
