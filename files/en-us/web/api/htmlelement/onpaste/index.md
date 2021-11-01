---
title: HTMLElement.onpaste
slug: Web/API/HTMLElement/onpaste
tags:
  - API
  - Event Handler
  - Experimental
  - HTMLElement
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLElement.onpaste
---
{{ APIRef("HTML DOM") }} {{SeeCompatTable}}

The **`HTMLElement.onpaste`** property of the
{{domxref("HTMLElement")}} interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) that processes
{{event("paste")}} events.

The `paste` event fires when the user attempts to paste text.

Note that there is currently no DOM-only way to obtain the text being pasted; you'll
have to use an {{ Interface("nsIClipboard") }} to get that information.

## Syntax

```js
target.onpaste = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("ClipboardEvent")}} object as its
sole argument.

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

[WHATWG
Standard](https://html.spec.whatwg.org/multipage/webappapis.html#handler-onpaste)

## Browser compatibility

{{Compat}}

Since Firefox 13, the preference `dom.event.clipboardevents.enabled`
controls this feature. It defaults to `true` but can be disabled.

## See also

- Clipboard API event {{event("paste")}}
- Related event handlers

  - {{domxref("HTMLElement.oncopy")}}
  - {{domxref("HTMLElement.oncut")}}
