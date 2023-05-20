---
title: "XRRigidTransform: position property"
short-title: position
slug: Web/API/XRRigidTransform/position
page-type: web-api-instance-property
browser-compat: api.XRRigidTransform.position
---

{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRRigidTransform")}} property
**`position`** is a {{domxref("DOMPointReadOnly")}} object which
provides the 3D point, specified in meters, describing the translation component of the
transform.

## Value

A read-only {{domxref("DOMPointReadOnly")}} indicating the 3D position component of the
transform matrix. The units are meters.

> **Note:** The `w` component of the point is always 1.0.

## Examples

To create a reference space which can be used to place an object at eye level (assuming
eye level is 1.5 meters):

```js
function onSessionStarted(xrSession) {
  xrSession.addEventListener("end", onSessionEnded);

  gl = initGraphics(xrSession);

  const glLayer = new XRWebGLLayer(xrSession, gl);
  xrSession.updateRenderState({ baseLayer: glLayer });

  if (immersiveSession) {
    xrSession
      .requestReferenceSpace("bounded-floor")
      .then((refSpace) => {
        refSpaceCreated(refSpace);
      })
      .catch(() => {
        session.requestReferenceSpace("local-floor").then(refSpaceCreated);
      });
  } else {
    session.requestReferenceSpace("viewer").then(refSpaceCreated);
  }
}

function refSpaceCreated(refSpace) {
  xrReferenceSpace = immersiveSession
    ? refSpace
    : refSpace.getOffsetReferenceSpace(new XRRigidTransform({ y: -1.5 }));
  xrSession.requestAnimationFrame(onFrame);
}
```

After setting up the graphics context for WebXR use, this begins by looking to see if a
variable `immersiveSession` is `true`; if so, we first request a
`bounded-floor` reference space. If that fails (probably because
`bounded-floor` isn't supported), we try requesting a
`local-floor` reference space.

If we're not in an immersive session, we instead request a `viewer`
reference space.

In all cases, once the space has been obtained, it gets passed into the
`refSpaceCreated()` function. For immersive spaces, the specified space is
saved for future use. However, for inline sessions, we know we're in a space not
automatically adjusted for floor level, so we request an offset reference space to shift
the viewer's height to 1.5 meters above the presumed floor level of 0 meters. That new
reference space is used instead of the one initially received.

Finally, an animation frame request is submitted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
