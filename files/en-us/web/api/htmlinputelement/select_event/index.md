---
title: "HTMLInputElement: select event"
short-title: select
slug: Web/API/HTMLInputElement/select_event
page-type: web-api-event
browser-compat: api.HTMLInputElement.select_event
---

{{APIRef("HTML DOM")}}

The **`select`** event of the {{domxref("HTMLInputElement")}} interface fires when the selection's extent or direction is changed programmatically, or when the user selects text.

This event is not fired when nothing is selected and the caret is moved by the user. Only the {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} event fires in this case.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("select", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onselect = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Selection logger

```html
<input value="Try selecting some text in this element." />
<p id="log"></p>
```

```js
function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd,
  );
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### Using the `onselect` event handler property

You can also set up the event handler using the `onselect` property (but note that this replaces other event listeners added using `onselect`, if any):

```js
input.onselect = logSelection;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
