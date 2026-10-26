---
title: "HTMLTextAreaElement: select event"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
page-type: web-api-event
browser-compat: api.HTMLTextAreaElement.select_event
---

{{APIRef("Selection API")}}

The **`select`** event fires when some text has been selected.

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

### Using the `onselect` event handler property

You can also set up the event handler using the `onselect` property (but note that this replaces other event listeners added using `onselect`, if any):

```js
textarea.onselect = logSelection;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.select()")}}
