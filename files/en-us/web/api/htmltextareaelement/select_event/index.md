---
title: "HTMLTextAreaElement: select event"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
page-type: web-api-event
browser-compat: api.HTMLTextAreaElement.select_event
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
<textarea>Try selecting some text in this element.</textarea>
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

const textarea = document.querySelector("textarea");
textarea.addEventListener("select", logSelection);
```

{{EmbedLiveSample("Selection_logger")}}

### onselect equivalent

You can also set up the event handler using the `onselect` property:

```js
textarea.onselect = logSelection;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
