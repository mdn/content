---
title: UIEvent()
slug: Web/API/UIEvent/UIEvent
tags:
  - API
  - Constructor
  - Reference
  - UIEvent
browser-compat: api.UIEvent.UIEvent
---
{{APIRef("DOM Events")}}

The **`UIEvent()`** constructor creates a new
{{domxref("UIEvent")}}.

## Syntax

```js
event = new UIEvent(typeArg [, UIEventInit])
```

### Values

- `typeArg`
  - : Is a {{domxref("DOMString")}} representing the name of the event.
- `UIEventInit` {{optional_inline}}

  - : Is a `UIEventInit` dictionary, having the following fields:

    - **`detail`**: optional and defaulting to `0`,
      of type `long`, that is a event-dependant value associated with the
      event. {{domxref("UIEvent.detail")}} lists the semantic for standard events.
    - **`view`**: optional and defaulting to
      `null`, of type {{domxref("WindowProxy")}}, that is the
      {{domxref("Window")}} associated with the event .
    - **`sourceCapabilities`**: {{non-standard_inline}} An
      instance of the {{domxref("InputDeviceCapabilities")}} interface which provides
      information about the physical device responsible for generating a touch event.

    > **Note:** The `UIEventInit` dictionary also accepts fields from the
    > {{domxref("Event.Event", "EventInit")}} dictionary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("UIEvent")}}, the interface of the objects it constructs.
