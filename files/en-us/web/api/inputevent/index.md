---
title: InputEvent
slug: Web/API/InputEvent
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM Events
  - Input
  - Interface
  - Reference
  - events
browser-compat: api.InputEvent
---
{{APIRef("UI Events")}}

The **`InputEvent`** interface represents an event notifying the user of editable content changes.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("InputEvent.InputEvent", "InputEvent()")}}
  - : Creates an `InputEvent` object.

## Properties

_This interface inherits properties from its parents, {{DOMxRef("UIEvent")}} and {{DOMxRef("Event")}}._

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : Returns a string with the inserted characters. This may be an empty string if the change doesn't insert text (such as when deleting characters, for example).
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DataTransfer")}} object containing information about richtext or plaintext data being added to or removed from editable content.
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : Returns the type of change for editable content such as, for example, inserting, deleting, or formatting text. See the property page for a complete list of input types.
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : Returns a {{JSxRef("Boolean")}} value indicating if the event is fired after {{domxref("Element/compositionstart_event", "compositionstart")}} and before {{domxref("Element/compositionend_event", "compositionend")}}.

## Methods

_This interface inherits methods from its parents, {{DOMxRef("UIEvent")}} and {{DOMxRef("Event")}}._

- {{DOMxRef('InputEvent.getTargetRanges()')}}
  - : Returns an array of static ranges that will be affected by a change to the DOM if the input event is not canceled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`beforeinput` event](/en-US/docs/Web/API/HTMLElement/beforeinput_event)
- [`input` event](/en-US/docs/Web/API/HTMLElement/input_event)
