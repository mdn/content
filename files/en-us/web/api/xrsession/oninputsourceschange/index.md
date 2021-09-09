---
title: XRSession.oninputsourceschange
slug: Web/API/XRSession/oninputsourceschange
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
  - XR
  - oninputsourceschange
browser-compat: api.XRSession.oninputsourceschange
---
{{APIRef("WebXR Device API")}}

The **`oninputsourcechange`** attribute of the {{DOMxRef("XRSession")}} object is the event handler for the {{DOMxRef("XRSession.inputsourcechange_event", "inputsourcechange")}} event, which is dispatched when session's list of active XR input sources has changed. The list itself is accessible via {{DOMxRef("XRSession.inputSources")}}.

> **Note:** The {{DOMxRef("XRInputSource")}} objects in {{DOMxRef("XRSession.inputSources")}} array are "live", so values within them are updated in-place. Therefore if you wish to compare input states between frames, you should make a copy of the content of the state in question.

## Syntax

```js
XRSession.oninputsourceschange = function(event) { ... }
```

## Example

```js
XRSession.oninputsourceschange = function(event) {
  console.log("The list of active XR input sources has changed.")
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{DOMxRef("XRSession.inputSources")}}
