---
title: "XRRigidTransform: matrix property"
short-title: matrix
slug: Web/API/XRRigidTransform/matrix
page-type: web-api-instance-property
browser-compat: api.XRRigidTransform.matrix
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only {{domxref("XRRigidTransform")}} property **`matrix`** returns the transform matrix represented by the object. The returned matrix can then be premultiplied with a column vector to rotate the vector by the 3D rotation specified by the {{domxref("XRRigidTransform.orientation", "orientation")}}, then translate it by the {{domxref("XRRigidTransform.position", "position")}}.

## Value

A {{jsxref("Float32Array")}} containing 16 entries, which represents the 4x4 transform matrix described by the {{domxref("XRRigidTransform.position", "position")}} and {{domxref("XRRigidTransform.orientation", "orientation")}} properties.

## Usage notes

### Matrix format

All 4x4 transform matrices used in WebGL are stored in 16-element {{jsxref("Float32Array")}}s. The values are stored in the array in column-major order; that is, each column is written into the array top-down before moving to the next column to the right and writing it into the array. Therefore, for the array `[a0, a1, a2, …, a13, a14, a15]`, the matrix looks like this:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a0</mi></mtd><mtd><mi>a4</mi></mtd><mtd><mi>a8</mi></mtd><mtd><mi>a12</mi></mtd></mtr><mtr><mtd><mi>a1</mi></mtd><mtd><mi>a5</mi></mtd><mtd><mi>a9</mi></mtd><mtd><mi>a13</mi></mtd></mtr><mtr><mtd><mi>a2</mi></mtd><mtd><mi>a6</mi></mtd><mtd><mi>a10</mi></mtd><mtd><mi>a14</mi></mtd></mtr><mtr><mtd><mi>a3</mi></mtd><mtd><mi>a7</mi></mtd><mtd><mi>a11</mi></mtd><mtd><mi>a15</mi></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} a[0] & a[4] & a[8] & a[12]\\ a[1] & a[5] & a[9] & a[13]\\ a[2] & a[6] & a[10] & a[14]\\ a[3] & a[7] & a[11] & a[15]\\ \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

On the first request, the `matrix` gets computed. After that, it should be cached for performance reasons.

### Creating the matrix

In this section, intended for more advanced readers, we cover how the API calculates the matrix for the specified transform. It begins by allocating a new matrix and writing a 4x4 identity matrix into it:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 & 0 & 0 & 0\\ 0 & 1 & 0 & 0\\ 0 & 0 & 1 & 0\\ 0 & 0 & 0 & 1 \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

This is a transform that will not change either the orientation or position of any point, vector, or object to which it's applied.

Next, the `position` is placed into the right-hand column, like this, resulting in a translation matrix that will transform a coordinate system by the specified distance in each dimension, with no rotational change. Here _p<sub>x</sub>_, _p<sub>y</sub>_, and _p<sub>z</sub>_ are the values of the `x`, `y`, and `z` members of the {{domxref("DOMPointReadOnly")}} `position`.

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><msub><mi>p</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><msub><mi>p</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><msub><mi>p</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 & 0 & 0 & x\\ 0 & 1 & 0 & y\\ 0 & 0 & 1 & z\\ 0 & 0 & 0 & 1 \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Then a rotation matrix is created by computing a column-vector rotation matrix from the unit quaternion specified by `orientation`:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 - 2(q_y^2 + q_z^2) & 2(q_xq_y - q_zq_w) & 2(q_xq_z + q_yq_w) & p_x\\ 2(q_xq_y + q_zq_w) & 1 - 2(q_x^2 + q_z^2) & 2(q_yq_z - q_xq_w) & p_y\\ 2(q_xq_z - q_yq_w) & 2(q_yq_z + q_xq_w) & 1 - 2(q_x^2 + q_y^2) & p_z\\ 0 & 0 & 0 & 1 \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

The final transform `matrix` is calculated by multiplying the translation matrix by the rotation matrix, in the order `(translation * rotation)`. This yields the final transform matrix as returned by `matrix`:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><msub><mi>p</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><msub><mi>p</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><msub><mi>p</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 - 2(q_y^2 + q_z^2) & 2(q_xq_y - q_zq_w) & 2(q_xq_z + q_yq_w) & p_x\\ 2(q_xq_y + q_zq_w) & 1 - 2(q_x^2 + q_z^2) & 2(q_yq_z - q_xq_w) & p_y\\ 2(q_xq_z - q_yq_w) & 2(q_yq_z + q_xq_w) & 1 - 2(q_x^2 + q_y^2) & p_z\\ 0 & 0 & 0 & 1 \end{bmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Examples

In this example, a transform is created to create a matrix which can be used as a transform during rendering of WebGL objects, in order to place objects to match a given offset and orientation. The `matrix` is then passed into a library function that uses WebGL to render an object matching a given name using the transform matrix specified to position and orient it.

```js
let transform = new XRRigidTransform(
  { x: 0, y: 0.5, z: 0.5 },
  { x: 0, y: -0.5, z: -0.5, w: 1 },
);
drawGLObject("magic-lamp", transform.matrix);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
