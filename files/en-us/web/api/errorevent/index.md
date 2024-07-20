---
title: ErrorEvent
slug: Web/API/ErrorEvent
page-type: web-api-interface
browser-compat: api.ErrorEvent
---

{{APIRef("HTML DOM")}}

The **`ErrorEvent`** interface represents events providing information related to errors in scripts or in files.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("ErrorEvent.message")}} {{ReadOnlyInline}}
  - : A string containing a human-readable error message describing the problem. Lacking a [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) setting reduces error logging.
- {{domxref("ErrorEvent.filename")}} {{ReadOnlyInline}}
  - : A string containing the name of the script file in which the error occurred.
- {{domxref("ErrorEvent.lineno")}} {{ReadOnlyInline}}
  - : An `integer` containing the line number of the script file on which the error occurred.
- {{domxref("ErrorEvent.colno")}} {{ReadOnlyInline}}
  - : An `integer` containing the column number of the script file on which the error occurred.
- {{domxref("ErrorEvent.error")}} {{ReadOnlyInline}}
  - : A JavaScript `Object` that is concerned by the event.

## Constructor

- {{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}
  - : Creates an `ErrorEvent` event with the given parameters.

## Instance methods

_Inherits methods from its parent {{domxref("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), most likely objects to raise such an event
