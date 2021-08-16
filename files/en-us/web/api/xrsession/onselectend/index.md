---
title: XRSession.onselectend
slug: Web/API/XRSession/onselectend
tags:
  - API
  - AR
  - Augmented Reality
  - Event Handler
  - Reference
  - VR
  - Virtual Reality
  - WebXR Device API
  - XRSession
  - onselectend
browser-compat: api.XRSession.onselectend
---
{{APIRef("WebXR Device API")}}

The **`onselectend`** attribute of the
{{DOMxRef("XRSession")}} object is the event handler for the
{{DOMxRef("XRSession.selectend_event", "selectend")}} event, which is dispatched when
user finishes making some sort of selection by releasing a trigger, touchpad, or
button, finishes speaking a command, or makes a hand gesture. For example, this might
include releasing a button or joystick.

> **Note:** Not to be confused with {{DOMxRef("XRSession.onselectstart")}}
> and {{DOMxRef("XRSession.onselect")}}.

## Syntax

```js
XRSession.onselectend = function(event) { ... }
```

## Example

```js
XRSession.onselectend = function(event) {
  console.log("The user has completed a primary action.")
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("XRSession.onselectstart")}}
- {{DOMxRef("XRSession.onselect")}}
