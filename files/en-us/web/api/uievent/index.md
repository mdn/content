---
title: UIEvent
slug: Web/API/UIEvent
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - UIEvent
  - events
browser-compat: api.UIEvent
---
{{APIRef("DOM Events")}}

The **`UIEvent`** interface represents simple user interface events.

`UIEvent` derives from {{domxref("Event")}}. Although the {{domxref("UIEvent.initUIEvent()")}} method is kept for backward compatibility, you should create a `UIEvent` object using the {{domxref("UIEvent.UIEvent", "UIEvent()")}} constructor.

Several interfaces are direct or indirect descendants of this one: {{domxref("MouseEvent")}}, {{domxref("TouchEvent")}}, {{domxref("FocusEvent")}}, {{domxref("KeyboardEvent")}}, {{domxref("WheelEvent")}}, {{domxref("InputEvent")}}, and {{domxref("CompositionEvent")}}.

{{InheritanceDiagram}}

## Constructors

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : Creates a `UIEvent` object.

## Properties

_This interface also inherits properties of its parent, {{domxref("Event")}}._

- {{domxref("UIEvent.detail")}}{{readonlyinline}}
  - : Returns a `long` with details about the event, depending on the event type.
- {{domxref("UIEvent.layerX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the horizontal coordinate of the event relative to the current layer.
- {{domxref("UIEvent.layerY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the vertical coordinate of the event relative to the current layer.
- {{domxref("UIEvent.sourceCapabilities")}} {{experimental_inline}} {{readonlyinline}}
  - : Returns an instance of the `InputDeviceCapabilities` interface, which provides information about the physical device responsible for generating a touch event.
- {{domxref("UIEvent.view")}}{{readonlyinline}}
  - : Returns a {{domxref("WindowProxy")}} that contains the view that generated the event.
- {{domxref("UIEvent.which")}} {{deprecated_inline}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the numeric `keyCode` of the key pressed, or the character code (`charCode`) for an alphanumeric key pressed.

## Methods

_This interface also inherits methods of its parent, {{domxref("Event")}}._

- {{domxref("UIEvent.initUIEvent()")}} {{deprecated_inline}}
  - : Initializes a `UIEvent` object. If the event has already being dispatched, this method does nothing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}}
