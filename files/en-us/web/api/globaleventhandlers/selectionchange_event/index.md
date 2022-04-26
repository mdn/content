---
title: 'selectionchange event'
slug: Web/API/GlobalEventHandlers/selectionchange_event
tags:
  - API
  - Event
  - Reference
  - Selection
  - Selection API
browser-compat: api.GlobalEventHandlers.selectionchange_event
---
{{ApiRef('DOM')}}

The global **`selectionchange`** event is fired when the {{domxref("Selection")}} of a {{domxref("Document")}} is changed.
The {{domxref("Selection")}} consists of a starting position and (optionally) a range of HTML nodes from that position.
Clicking or starting a selection outside of a text field will generally fire this event.

Additionally, this even will fire when the text selection within a {{HTMLElement("textarea")}} or {{HTMLElement("input")}} element is changed or the caret moves.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('selectionchange', event => { });
onselectionchange = event => { };
```

## Event type

A generic {{domxref("Event")}}.

## Event availability

 The **`selectionchange`** event is a global event and available to the following interfaces:

 - {{domxref("Window")}}
 - {{domxref("Document")}}
 - {{domxref("HTMLElement")}}
 - {{domxref("SVGElement")}}
 - {{domxref("MathMLElement")}}

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

- {{domxref("GlobalEventHandlers.selectstart_event", "selectstart")}} event
