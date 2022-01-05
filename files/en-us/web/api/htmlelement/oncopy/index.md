---
title: HTMLElement.oncopy
slug: Web/API/HTMLElement/oncopy
tags:
  - API
  - Event Handler
  - Experimental
  - HTMLElement
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLElement.oncopy
---
{{ APIRef("HTML DOM") }}{{SeeCompatTable}}

The **`oncopy`** property of the {{domxref("HTMLElement")}}
interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) that processes
{{domxref("Element/copy_event", "copy")}} events.

The `copy` event fires when the user attempts to copy text.

## Syntax

```js
target.oncopy = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("ClipboardEvent")}} object as its
sole argument.

## Example

This example blocks every copy and paste attempt from the {{htmlElement("textarea")}}.

### HTML

```html
<h3>Play with this text area:</h3>
<textarea id="editor" rows="3">Try copying and pasting text into this field!</textarea>

<h3>Log:</h3>
<p id="log"></p>
```

### JavaScript

```js
const log = document.getElementById('log');

function logCopy(event) {
  log.innerText = 'Copy blocked!\n' + log.innerText;
  event.preventDefault();
}

function logPaste(event) {
  log.innerText = 'Paste blocked!\n' + log.innerText;
  event.preventDefault();
}

const editor = document.getElementById('editor');

editor.oncopy = logCopy;
editor.onpaste = logPaste;
```

### Result

{{EmbedLiveSample("Example", 700, 300)}}

## Specifications

[WHATWG
Standard](https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncopy)

## Browser compatibility

{{Compat}}

Since Firefox 13, the preference `dom.event.clipboardevents.enabled`
controls this feature. It defaults to `true` but can be disabled.

## See also

- Clipboard API event {{domxref("Element/copy_event", "copy")}}
- Related event handlers

  - {{domxref("HTMLElement.oncut")}}
  - {{domxref("HTMLElement.onpaste")}}
