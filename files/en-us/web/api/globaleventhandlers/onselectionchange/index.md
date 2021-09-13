---
title: GlobalEventHandlers.onselectionchange
slug: Web/API/GlobalEventHandlers/onselectionchange
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - Selection
  - Selection API
  - onselectionchange
browser-compat: api.GlobalEventHandlers.onselectionchange
---
{{ApiRef('DOM')}}

The **`onselectionchange`** property of the {{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) for `selectionchange` events.

The {{domxref("Document.selectionchange_event")}} is fired when the {{domxref("Selection")}} of a {{domxref("Document")}} is changed.
The {{domxref("Selection")}} consists of a starting position and (optionally) a range of HTML nodes from that position.
Clicking or starting a selection outside of a text field will generally fire this event.

The {{domxref("HTMLTextAreaElement.selectionchange_event")}} and {{domxref("HTMLInputElement.selectionchange_event")}} events are fired, respectively, when the text selection within a {{HTMLElement("textarea")}} or {{HTMLElement("input")}} element is changed or the caret moves.

## Syntax

```js
document.onselectionchange = functionRef;
```

### Value

`functionRef` is a function name or a [function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives an {{domxref("Event")}} object as its sole argument.

## Example

### Getting the changed Document Selection

This code fragment shows how you can get `selectionchange` events on the {{domxref("Document")}}.
This will include events fired on text controls, which will bubble up to this handler.

```js
document.onselectionchange = function() {
  console.log('New selection made');
  let selection = document.getSelection();
};
```

For a full example, see our [Key quote generator](https://github.com/chrisdavidmills/selection-api-examples/#key-quote-generator-see-it-running-live) demo.

### Using selectionchange with a text control

The example below shows how to get the start, end, and direction of text selected in a {{HTMLElement("textarea")}}.
It uses {{domxref("HTMLTextAreaElement")}} properties `selectionStart`, `selectionEnd`, and `selectionDirection` (for an {{HTMLElement("input")}} element you would use properties with the same name on {{domxref("HTMLInputElement")}}).

> **Note:** We don't use {{domxref("Selection")}} here, because it contains information about selected {{domxref("Document")}} nodes, not the selected text.

#### HTML

```html
<div>Enter and select text here:<br><textarea id="mytext" rows="2" cols="20"></textarea></div>
<div>selectionStart: <span id="start"></span></div>
<div>selectionEnd: <span id="end"></span></div>
<div>selectionDirection: <span id="direction"></span></div>
```

#### JavaScript

```js
const myinput = document.getElementById("mytext");

myinput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = mytext.selectionStart;
  document.getElementById("end").textContent = mytext.selectionEnd;
  document.getElementById("direction").textContent = mytext.selectionDirection;
});
```

#### Result

{{EmbedLiveSample("Using_selectionchange_with_a_text_control")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("selectionchange")}} event
- Related event handler: {{domxref("GlobalEventHandlers.onselectstart")}}
