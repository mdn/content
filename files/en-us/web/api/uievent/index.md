---
title: UIEvent
slug: Web/API/UIEvent
page-type: web-api-interface
browser-compat: api.UIEvent
---

{{APIRef("UI Events")}}

The **`UIEvent`** interface represents simple user interface events.

`UIEvent` derives from {{domxref("Event")}}. Although the {{domxref("UIEvent.initUIEvent()")}} method is kept for backward compatibility, you should create a `UIEvent` object using the {{domxref("UIEvent.UIEvent", "UIEvent()")}} constructor.

Several interfaces are direct or indirect descendants of this one: {{domxref("MouseEvent")}}, {{domxref("TouchEvent")}}, {{domxref("FocusEvent")}}, {{domxref("KeyboardEvent")}}, {{domxref("WheelEvent")}}, {{domxref("InputEvent")}}, and {{domxref("CompositionEvent")}}.

{{InheritanceDiagram}}

## Constructors

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : Creates a `UIEvent` object.

## Instance properties

_This interface also inherits properties of its parent, {{domxref("Event")}}._

- {{domxref("UIEvent.detail")}} {{ReadOnlyInline}}
  - : Returns a `long` with details about the event, depending on the event type.
- {{domxref("UIEvent.sourceCapabilities")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns an instance of the `InputDeviceCapabilities` interface, which provides information about the physical device responsible for generating a touch event.
- {{domxref("UIEvent.view")}} {{ReadOnlyInline}}
  - : Returns a {{glossary("WindowProxy")}} that contains the view that generated the event.
- {{domxref("UIEvent.which")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Returns the numeric `keyCode` of the key pressed, or the character code (`charCode`) for an alphanumeric key pressed.

## Instance methods

_This interface also inherits methods of its parent, {{domxref("Event")}}._

- {{domxref("UIEvent.initUIEvent()")}} {{Deprecated_Inline}}
  - : Initializes a `UIEvent` object. If the event has already been dispatched, this method does nothing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Event")}}
