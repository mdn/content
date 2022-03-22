---
title: 'HTMLElement: paste event'
slug: Web/API/HTMLElement/paste_event
tags:
  - API
  - Clipboard API
  - HTMLElement
  - Event
  - Reference
  - Web
  - paste
browser-compat: api.HTMLElement.paste_event
---
{{ APIRef("HTML DOM") }} {{SeeCompatTable}}

The **`paste`** event fires when the user initiates a paste action through the browser's user interface.

Note that there is currently no DOM-only way to obtain the text being pasted; you'll
have to use an {{ Interface("nsIClipboard") }} to get that information.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('paste', event => { });

onpaste = event => { };
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Example

This example logs every copy and paste attempt to the {{htmlElement("textarea")}}.

### HTML

```html
<h3>Play with this text area:</h3>
<textarea id="editor" rows="3">Try copying and pasting text into this field!</textarea>

<h3>Log:</h3>
<p id="log"></p>
```

### JavaScript

```js
function logCopy(event) {
  log.innerText = 'Copied!\n' + log.innerText;
}

function logPaste(event) {
  log.innerText = 'Pasted!\n' + log.innerText;
}

const editor = document.getElementById('editor');
const log = document.getElementById('log');

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
  - {{domxref("HTMLElement.copy_event")}}
  - {{domxref("HTMLElement.cut_event")}}
