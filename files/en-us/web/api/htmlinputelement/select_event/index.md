---
title: "HTMLInputElement: select event"
short-title: select
slug: Web/API/HTMLInputElement/select_event
page-type: web-api-event
browser-compat: api.HTMLInputElement.select_event
---

{{APIRef}}

The **`select`** event fires when some text has been selected.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("select", (event) => {});

onselect = (event) => {};
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

### onselect equivalent

You can also set up the event handler using the `onselect` property:

```js
input.onselect = logSelection;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
