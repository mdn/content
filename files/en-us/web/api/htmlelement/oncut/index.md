---
title: HTMLElement.oncut
slug: Web/API/HTMLElement/oncut
tags:
  - API
  - Event Handler
  - Experimental
  - HTMLElement
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLElement.oncut
---
{{ APIRef("HTML DOM") }} {{SeeCompatTable}}

The **`HTMLElement.oncut`** property of the
{{domxref("HTMLElement")}} interface is an [event handler](/en-US/docs/Web/Events/Event_handlers) that processes
{{event("cut")}} events.

The `cut` event fires when the user attempts to cut text.

## Syntax

```js
target.oncut = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("ClipboardEvent")}} object as its
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
  log.innerText = 'Copied!\n' + log.innerText;
}

function preventCut(event) {
  event.preventDefault();
  log.innerText = 'Cut blocked!\n' + log.innerText;
}

const editor = document.getElementById('editor');
const log = document.getElementById('log');

editor.oncopy = logCopy;
editor.oncut = preventCut;
```

### Result

{{EmbedLiveSample("Example", 700, 300)}}

## Specifications

[WHATWG
Standard](https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncut)

## Browser compatibility

{{Compat}}

Since Firefox 13, the preference `dom.event.clipboardevents.enabled`
controls this feature. It defaults to `true` but can be disabled.

## See also

- Clipboard API event {{event("cut")}}
- Related event handlers

  - {{domxref("HTMLElement.oncopy")}}
  - {{domxref("HTMLElement.onpaste")}}
