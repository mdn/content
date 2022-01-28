---
title: ErrorEvent
slug: Web/API/ErrorEvent
tags:
  - API
  - Event
  - Worker API
browser-compat: api.ErrorEvent
---
{{APIRef("HTML DOM")}}

The **`ErrorEvent`** interface represents events providing information related to errors in scripts or in files.

{{InheritanceDiagram}}

## Properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ErrorEvent.message")}} {{readonlyInline}}
  - : Is a {{domxref("DOMString")}} containing a human-readable error message describing the problem.
- {{domxref("ErrorEvent.filename")}} {{readonlyInline}}
  - : Is a {{domxref("DOMString")}} containing the name of the script file in which the error occurred.
- {{domxref("ErrorEvent.lineno")}} {{readonlyInline}}
  - : Is an `integer` containing the line number of the script file on which the error occurred.
- {{domxref("ErrorEvent.colno")}} {{readonlyInline}}
  - : Is an `integer` containing the column number of the script file on which the error occurred.
- {{domxref("ErrorEvent.error")}} {{readonlyInline}} {{experimental_inline}}
  - : Is a JavaScript `Object` that is concerned by the event.

## Constructor

- {{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : Creates an `ErrorEvent` event with the given parameters.

## Methods

_Inherits methods from its parent {{domxref("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), most likely objects to raise such an event
