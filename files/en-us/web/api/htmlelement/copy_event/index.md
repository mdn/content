---
title: "HTMLElement: copy event"
short-title: copy
slug: Web/API/HTMLElement/copy_event
page-type: web-api-event
browser-compat: api.Element.copy_event
---

{{ APIRef("HTML DOM") }}

The **`copy`** event fires when the user initiates a copy action through the browser's user interface.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Event properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : A {{domxref("DataTransfer")}} object containing the data affected by the user-initiated {{domxref("HTMLElement/cut_event", "cut")}}, {{domxref("HTMLElement/copy_event", "copy")}}, or {{domxref("HTMLElement/paste_event", "paste")}} operation, along with its MIME type.

## Example

This example blocks every copy and paste attempt from the {{htmlElement("textarea")}}.

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
const log = document.getElementById("log");

function logCopy(event) {
  log.innerText = `Copy blocked!\n${log.innerText}`;
  event.preventDefault();
}

function logPaste(event) {
  log.innerText = `Paste blocked!\n${log.innerText}`;
  event.preventDefault();
}

const editor = document.getElementById("editor");

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
  - {{domxref("HTMLElement.cut_event")}}
  - {{domxref("HTMLElement.paste_event")}}
