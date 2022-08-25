---
title: 'HTMLElement: cut event'
slug: Web/API/HTMLElement/cut_event
page-type: web-api-event
tags:
  - API
  - Clipboard API
  - HTMLElement
  - Event
  - Reference
  - Web
  - cut
browser-compat: api.Element.cut_event
---
{{ APIRef("HTML DOM") }}

The **`cut`** event fires when the user initiates a cut action through the browser's user interface.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('cut', (event) => { });

oncut = (event) => { };
```

## Event type

A {{domxref("ClipboardEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Event properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : A {{domxref("DataTransfer")}} object containing the data affected by the user-initiated {{domxref("HTMLElement/cut_event", "cut")}}, {{domxref("HTMLElement/copy_event", "copy")}}, or {{domxref("HTMLElement/paste_event", "paste")}} operation, along with its MIME type.

### Value

`functionRef` is a function name or a [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("ClipboardEvent")}} object as its
sole argument.

## Example

This example allows text to be copied from the {{htmlElement("textarea")}}, but doesn't
allow text to be cut. It also logs each copy and cut attempt.

### HTML

```html
<h3>Play with this text area:</h3>
<textarea id="editor" rows="3">Try copying and cutting the text in this field!</textarea>

<h3>Log:</h3>
<p id="log"></p>
```

### JavaScript

```js
function logCopy(event) {
  log.innerText = `Copied!\n${log.innerText}`;
}

function preventCut(event) {
  event.preventDefault();
  log.innerText = `Cut blocked!\n${log.innerText}`;
}

const editor = document.getElementById('editor');
const log = document.getElementById('log');

editor.oncopy = logCopy;
editor.oncut = preventCut;
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
  - {{domxref("HTMLElement.paste_event")}}
