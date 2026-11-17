---
title: "Element: afterscriptexecute event"
short-title: afterscriptexecute
slug: Web/API/Element/afterscriptexecute_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.Element.afterscriptexecute_event
---

{{APIRef}}{{Non-standard_header}}

> [!WARNING]
> This event was a proposal in an early version of the specification. Do not rely on it.

The **`afterscriptexecute`** event is fired after a script has been executed.

It is a proprietary event specific to Gecko (Firefox).

This event is not cancelable.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("afterscriptexecute", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onafterscriptexecute = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [`beforescriptexecute`](/en-US/docs/Web/API/Element/beforescriptexecute_event) event
