---
title: Quaternion
slug: Glossary/Quaternion
page-type: glossary-definition
---

{{GlossarySidebar}}

A **quaternion** is the quotient of two 3D vectors and is used in 3D graphics and in accelerometer-based sensors to represent orientation or rotational data.

While mathematical quaternions are more involved than this, the **unit quaternions** (or **rotational quaternions**) used to represent rotation while using [WebGL](/en-US/docs/Glossary/WebGL) or [WebXR](/en-US/docs/Web/API/WebXR_Device_API), for example, are represented using the same syntax as a 3D point. As such, the type {{domxref("DOMPoint")}} (or {{domxref("DOMPointReadOnly")}}) is used to store quaternions.

## See also

- [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation) on Wikipedia
- [Quaternion](https://en.wikipedia.org/wiki/Quaternion) on Wikipedia
- {{domxref("XRRigidTransform.orientation")}} in the WebXR Device API reference
