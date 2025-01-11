---
title: DOMMatrix
slug: Web/API/DOMMatrix
page-type: web-api-interface
browser-compat: api.DOMMatrix
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`DOMMatrix`** interface represents 4×4 matrices, suitable for 2D and 3D operations including rotation and translation. It is a mutable version of the {{domxref("DOMMatrixReadOnly")}} interface.
The interface is available inside [web workers](/en-US/docs/Web/API/Web_Workers_API).

**`WebKitCSSMatrix`** and **`SVGMatrix`** are aliases to **`DOMMatrix`**.

{{InheritanceDiagram}}

## Constructor

- {{domxref("DOMMatrix.DOMMatrix","DOMMatrix()")}}
  - : Creates and returns a new `DOMMatrix` object.

## Instance properties

_This interface inherits properties from {{domxref("DOMMatrixReadOnly")}}, though some of these properties are altered to be mutable._

- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : Double-precision floating-point values representing each component of a 4×4 matrix, where `m11` through `m14` are the first column, `m21` through `m24` are the second column, and so forth.
- `a`, `b`, `c`, `d`, `e`, `f`

  - : Double-precision floating-point values representing the components of a 4×4 matrix which are required in order to perform 2D rotations and translations. These are aliases for specific components of a 4×4 matrix, as shown below.

    | `2D` | `3D equivalent` |
    | ---- | --------------- |
    | `a`  | `m11`           |
    | `b`  | `m12`           |
    | `c`  | `m21`           |
    | `d`  | `m22`           |
    | `e`  | `m41`           |
    | `f`  | `m42`           |

## Instance methods

_This interface includes the following methods, as well as the methods it inherits from {{domxref("DOMMatrixReadOnly")}}._

- {{domxref("DOMMatrix.invertSelf()")}}
  - : Modifies the matrix by inverting it. If the matrix can't be inverted, its components are all set to `NaN`, and [`is2D`](/en-US/docs/Web/API/DOMMatrixReadOnly#is2d) returns `false`.
- {{domxref("DOMMatrix.multiplySelf()")}}
  - : Modifies the matrix by post-multiplying it with the specified `DOMMatrix`. This is equivalent to the dot product `A⋅B`, where matrix `A` is the source matrix and `B` is the matrix given as an input to the method. Returns itself.
- {{domxref("DOMMatrix.preMultiplySelf()")}}
  - : Modifies the matrix by pre-multiplying it with the specified `DOMMatrix`. Returns itself.
- {{domxref("DOMMatrix.translateSelf()")}}
  - : Modifies the matrix by applying the specified vector. The default vector is `[0, 0, 0]`. Returns itself.
- {{domxref("DOMMatrix.scaleSelf()")}}
  - : Modifies the matrix by applying the specified scaling factors, with the center located at the specified origin. Also returns itself. By default, the scaling factor is `1` for all three axes, and the origin is `(0, 0, 0)`. Returns itself.
- {{domxref("DOMMatrix.scale3dSelf()")}}
  - : Modifies the matrix by applying the specified scaling factor to all three axes, centered on the given origin. Returns itself.
- {{domxref("DOMMatrix.rotateSelf()")}}
  - : Modifies the matrix by rotating itself around each axis by the specified number of degrees. Returns itself.
- {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}
  - : Modifies the matrix by rotating it by the specified angle around the given vector. Returns itself.
- {{domxref("DOMMatrix.rotateFromVectorSelf()")}}
  - : Modifies the matrix by rotating it by the angle between the specified vector and `(1, 0)`. Returns itself.
- {{domxref("DOMMatrix.setMatrixValue()")}}
  - : Replaces the contents of the matrix with the matrix described by the specified transform or transforms. Returns itself.
- {{domxref("DOMMatrix.skewXSelf()")}}
  - : Modifies the matrix by applying the specified skew transformation along the X-axis. Returns itself.
- {{domxref("DOMMatrix.skewYSelf()")}}
  - : Modifies the matrix by applying the specified skew transformation along the Y-axis. Returns itself.

## Static methods

_This interface inherits methods from {{domxref("DOMMatrixReadOnly")}}._

- {{domxref("DOMMatrix.fromFloat32Array", "fromFloat32Array()")}}
  - : Creates a new mutable `DOMMatrix` object given an array of single-precision (32-bit) floating-point values. If the array has six values, the result is a 2D matrix; if the array has 16 values, the result is a 3D matrix. Otherwise, a {{jsxref("TypeError")}} exception is thrown.
- {{domxref("DOMMatrix.fromFloat64Array", "fromFloat64Array()")}}
  - : Creates a new mutable `DOMMatrix` object given an array of double-precision (64-bit) floating-point values. If the array has six values, the result is a 2D matrix; if the array has 16 values, the result is a 3D matrix. Otherwise, a {{jsxref("TypeError")}} exception is thrown.
- {{domxref("DOMMatrix.fromMatrix", "fromMatrix()")}}
  - : Creates a new mutable `DOMMatrix` object given an existing matrix or an object which provides the values for its properties.

## Usage notes

The matrix defined by the `DOMMatrix` interface is comprised of four rows of four columns each. While it's beyond the scope of this article to explain the mathematics involved, this 4×4 size is enough to describe any transformation you might apply to either 2D or 3D geometries.

Here are the positions of the 16 elements (m_11 through m_44) which comprise the 4×4 abstract matrix:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

The `DOMMatrix` interface is designed with the intent that it will be used for all matrices within markup.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.is2D")}}
- {{domxref("DOMMatrixReadOnly.isIdentity")}}
