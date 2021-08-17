---
title: XRSession.onselectstart
slug: Web/API/XRSession/onselectstart
tags:
  - API
  - AR
  - Augmented Reality
  - Event Handler
  - Experimental
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XRSession
  - onselectstart
browser-compat: api.XRSession.onselectstart
---
{{APIRef("WebXR Device API")}}

The **`onselectstart`** attribute of
the {{DOMxRef("XRSession")}} object is the event handler for the
{{DOMxRef("XRSession.selectstart_event", "selectstart")}} event, which is dispatched
when user starts making some sort of selection by pressing a trigger, touchpad, or
button, speaking a command, or making a hand gesture. For example, this might include
pressing a button or moving a joystick.

> **Note:** Not to be confused with {{DOMxRef("XRSession.onselect")}}
> and {{DOMxRef("XRSession.onselectend")}}.

## Syntax

```js
XRSession.onselectstart = function(event) { ... }
```

## Example

```js
XRSession.onselectstart = function(event) {
  console.log("The user has started a primary action, but might not have completed it.")
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("XRSession.onselectend")}}
- {{DOMxRef("XRSession.onselect")}}
