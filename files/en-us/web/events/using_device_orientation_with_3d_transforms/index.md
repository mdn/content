---
title: Using device orientation with 3D transforms
slug: Web/Events/Using_device_orientation_with_3D_transforms
tags:
  - Advanced
  - CSS
  - DOM
  - Orientation
  - Transforms
---
{{DefaultAPISidebar("Device Orientation Events")}}
This article provides tips on how to use device orientation information in tandem with CSS 3D transforms.

## Using orientation to rotate an element

The easiest way to convert [orientation data](/en-US/docs/Web/API/Window/deviceorientation_event) to a [3D transform](/en-US/docs/Web/CSS/transform) is basically to use the alpha, gamma, and beta values as `rotateZ`, `rotateX` and `rotateY` values.

It is important to keep in mind, however, that the [Device Orientation coordinate system](/en-US/docs/Web/Events/Orientation_and_motion_data_explained) is different from the [CSS coordinate system](/en-US/docs/Web/CSS/CSSOM_View/Coordinate_systems). Namely, the former is [right-handed](https://en.wikipedia.org/wiki/Right-hand_rule) and its Y axis is positive upwards, while the latter is a left-handed coordinate system whose Y axis is positive to the bottom. Furthermore, the Device Orientation angle rotations should always be done in a Z - X' - Y'' order that does not match the order of some [CSS Transforms](/en-US/docs/Web/CSS/CSS_Transforms). These are some of the practical consequences of these differences:

- The order of angle rotations matters, so make sure the alpha, beta and gamma rotations are applied in this order.
- The [rotate3d()](/en-US/docs/Web/CSS/transform-function/rotate3d) CSS transformation, and the [DOMMatrixReadOnly.rotate()](/en-US/docs/Web/API/DOMMatrixReadOnly/rotate) and [DOMMatrix.rotateSelf()](/en-US/docs/Web/API/DOMMatrix/rotateSelf) functions apply angle rotations in a Z - Y' - X'' order, so it is not possible to apply the alpha, beta and gamma rotations in the right order with a single call to any of them. Instead, you should rotate each axis individually in the correct order.
- Due to the differences in coordinate systems outlined above, when looking towards the origin rotations are applied clockwise around in CSS and counter-clockwise in the Device Orientation spec. This means alpha and beta need to be inverted (the rotations around Z and X), but gamma (the rotation around Y) does not because they point to different directions in the two coordinate systems.

Here's a simple code snippet to sum it up:

```js
const elem = document.getElementById("view3d");

window.addEventListener("deviceorientation", (e) => {
  elem.style.transform =
    `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${e.gamma}deg)`;
});
```

## rotate3d to orientation

Should you ever need to convert a rotate3d axis-angle to orientation Euler angles, you can use the following algorithm:

```js
// convert a rotate3d axis-angle to deviceorientation angles
function orient(aa) {
    const x = aa.x, y = aa.y, z = aa.z, a = aa.a,
        c = Math.cos(aa.a),
        s = Math.sin(aa.a),
        t = 1 - c,
        // axis-angle to rotation matrix
        rm00 =    c + x*x * t,
        rm10 =  z*s + y*x * t,
        rm20 = -y*s + z*x * t,
        rm01 = -z*s + x*y * t,
        rm11 =    c + y*y * t,
        rm21 =  x*s + z*y * t,
        rm02 =  y*s + x*z * t,
        rm12 = -x*s + y*z * t,
        rm22 =    c + z*z * t,

        TO_DEG = 180 / Math.PI,
        ea = [],
        n = Math.hypot(rm22, rm20);

    // rotation matrix to Euler angles
    ea[1] = Math.atan2(-rm21, n);

    if (n > 0.001) {
      ea[0] = Math.atan2(rm01, rm11);
      ea[2] = Math.atan2(rm20, rm22);
    } else {
      ea[0] = 0;
      ea[2] = (rm21 > 0 ? 1 : -1) * Math.atan2(-rm10, rm00);
    }

    return {
      alpha: -ea[0] * TO_DEG - 180,
      beta: -ea[1] * TO_DEG,
      gamma: ea[2] * TO_DEG,
    };
}
```

## See also

- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- [Detecting device orientation](/en-US/docs/Web/Events/Detecting_device_orientation)
