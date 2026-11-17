---
title: "Element: beforescriptexecute event"
short-title: beforescriptexecute
slug: Web/API/Element/beforescriptexecute_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.Element.beforescriptexecute_event
---

{{APIRef("DOM")}}{{Non-standard_header}}

> [!WARNING]
> This event was a proposal in an early version of the specification. Do not rely on it.

The **`beforescriptexecute`** event is fired when a script is about to be executed. Canceling the event prevents the script from executing.

It is a proprietary event specific to Gecko (Firefox).

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("beforescriptexecute", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onbeforescriptexecute = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [`afterscriptexecute`](/en-US/docs/Web/API/Element/afterscriptexecute_event) event
