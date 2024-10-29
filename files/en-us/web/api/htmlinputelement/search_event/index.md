---
title: "HTMLInputElement: search event"
short-title: search
slug: Web/API/HTMLInputElement/search_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.HTMLInputElement.search_event
---

{{APIRef}}{{non-standard_header}}

The **`search`** event is fired when a search is initiated using an {{HTMLElement("input")}} element of `type="search"`.

There are several ways a search can be initiated, such as by pressing <kbd>Enter</kbd> while the {{HTMLElement("input")}} is focused, or, if the [`incremental`](/en-US/docs/Web/HTML/Element/input#incremental) attribute is present, after a UA-defined timeout elapses since the most recent keystroke (with new keystrokes resetting the timeout so the firing of the event is {{glossary("debounce", "debounced")}}).

Current UA implementations of `<input type="search">` have an additional control to clear the field. Using this control also fires the `search` event. In that case the `value` of the {{HTMLElement("input")}} element will be the empty string.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("search", (event) => {});

onsearch = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
// addEventListener version
const input = document.querySelector('input[type="search"]');

input.addEventListener("search", () => {
  console.log(`The term searched for was ${input.value}`);
});
```

```js
// onsearch version
const input = document.querySelector('input[type="search"]');

input.onsearch = () => {
  console.log(`The term searched for was ${input.value}`);
};
```

## Specifications

This event is not part of any specification.

## Browser compatibility

{{Compat}}
