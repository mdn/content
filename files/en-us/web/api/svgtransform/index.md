---
title: SVGTransform
slug: Web/API/SVGTransform
page-type: web-api-interface
browser-compat: api.SVGTransform
---

{{APIRef("SVG")}}

## SVG transform interface

`SVGTransform` is the interface for one of the component transformations within an {{ domxref("SVGTransformList") }}; thus, an `SVGTransform` object corresponds to a single component (e.g., `scale(…)` or `matrix(…)`) within a {{ SVGAttr("transform") }} attribute.

An `SVGTransform` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

### Interface overview

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">Also implement</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Methods</th>
      <td>
        <ul>
          <li>
            <code
              >void setMatrix(in {{ domxref("DOMMatrix") }}
              matrix)</code
            >
          </li>
          <li><code>void setTranslate(in float tx, in float ty)</code></li>
          <li><code>void setScale(in float sx, in float sy)</code></li>
          <li>
            <code
              >void setRotate(in float angle, in float cx, in float cy)</code
            >
          </li>
          <li><code>void setSkewX(in float angle)</code></li>
          <li><code>void setSkewY(in float angle)</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Properties</th>
      <td>
        <ul>
          <li>readonly unsigned short <code>type</code></li>
          <li>readonly float <code>angle</code></li>
          <li>
            readonly {{ domxref("DOMMatrix") }} <code>matrix</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Constants</th>
      <td>
        <ul>
          <li><code>SVG_TRANSFORM_UNKNOWN</code> = 0</li>
          <li><code>SVG_TRANSFORM_MATRIX</code> = 1</li>
          <li><code>SVG_TRANSFORM_TRANSLATE</code> = 2</li>
          <li><code>SVG_TRANSFORM_SCALE</code> = 3</li>
          <li><code>SVG_TRANSFORM_ROTATE</code> = 4</li>
          <li><code>SVG_TRANSFORM_SKEWX</code> = 5</li>
          <li><code>SVG_TRANSFORM_SKEWY</code> = 6</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/coords.html#InterfaceSVGTransform"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Constants

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The unit type is not one of predefined unit types. It is invalid to
        attempt to define a new value of this type or to attempt to switch an
        existing value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_MATRIX</code></td>
      <td>1</td>
      <td>A <code>matrix(…)</code> transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_TRANSLATE</code></td>
      <td>2</td>
      <td>A <code>translate(…)</code> transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SCALE</code></td>
      <td>3</td>
      <td>A <code>scale(…)</code> transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_ROTATE</code></td>
      <td>4</td>
      <td>A <code>rotate(…)</code> transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWX</code></td>
      <td>5</td>
      <td>A <code>skewx(…)</code> transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWY</code></td>
      <td>6</td>
      <td>A <code>skewy(…)</code> transformation</td>
    </tr>
  </tbody>
</table>

## Instance properties

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{domxref("SVGTransform.type", "type")}}</code></td>
      <td>unsigned short</td>
      <td>
        The type of the value as specified by one of the SVG_TRANSFORM_*
        constants defined on this interface.
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGTransform.angle", "angle")}}</code></td>
      <td>float</td>
      <td>
        A convenience attribute for <code>SVG_TRANSFORM_ROTATE</code>,
        <code>SVG_TRANSFORM_SKEWX</code> and <code>SVG_TRANSFORM_SKEWY</code>.
        It holds the angle that was specified.<br /><br />For
        <code>SVG_TRANSFORM_MATRIX</code>,
        <code>SVG_TRANSFORM_TRANSLATE</code> and
        <code>SVG_TRANSFORM_SCALE</code>, <code>angle</code> will be zero.
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGTransform.matrix", "matrix")}}</code></td>
      <td>{{ domxref("DOMMatrix") }}</td>
      <td>
        <p>
          The matrix that represents this transformation. The matrix object is
          live, meaning that any changes made to the
          <code>SVGTransform</code> object are immediately reflected in the
          matrix object and vice versa. In case the matrix object is changed
          directly (i.e., without using the methods on the
          <code>SVGTransform</code> interface itself) then the type of the
          <code>SVGTransform</code> changes to
          <code>SVG_TRANSFORM_MATRIX</code>.
        </p>
        <ul>
          <li>
            For <code>SVG_TRANSFORM_MATRIX</code>, the matrix contains the a, b,
            c, d, e, f values supplied by the user.
          </li>
          <li>
            For <code>SVG_TRANSFORM_TRANSLATE</code>, e and f represent the
            translation amounts (a=1, b=0, c=0 and d=1).
          </li>
          <li>
            For <code>SVG_TRANSFORM_SCALE</code>, a and d represent the scale
            amounts (b=0, c=0, e=0 and f=0).
          </li>
          <li>
            For <code>SVG_TRANSFORM_SKEWX</code> and
            <code>SVG_TRANSFORM_SKEWY</code>, a, b, c and d represent the matrix
            which will result in the given skew (e=0 and f=0).
          </li>
          <li>
            For <code>SVG_TRANSFORM_ROTATE</code>, a, b, c, d, e and f together
            represent the matrix which will result in the given rotation. When
            the rotation is around the center point (0, 0), e and f will be
            zero.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Instance methods

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name &#x26; Arguments</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><strong>{{domxref("SVGTransform.setMatrix", "setMatrix")}}</strong>(in {{ domxref("DOMMatrix") }}
          <em>matrix</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Sets the transform type to <code>SVG_TRANSFORM_MATRIX</code>, with
          parameter matrix defining the new transformation. Note that the values
          from the parameter <code>matrix</code> are copied.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when attempting
            to modify a read only attribute or when the object itself is read
            only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>{{domxref("SVGTransform.setTranslate", "setTranslate")}}</strong>(in float <em>tx</em>, in float
          <em>ty</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Sets the transform type to <code>SVG_TRANSFORM_TRANSLATE</code>, with
          parameters <code>tx</code> and <code>ty</code> defining the
          translation amounts.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when attempting
            to modify a read only attribute or when the object itself is read
            only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>{{domxref("SVGTransform.setScale", "setScale")}}</strong>(in float <em>sx</em>, in float
          <em>sy</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Sets the transform type to <code>SVG_TRANSFORM_SCALE</code>, with
          parameters <code>sx</code> and <code>sy</code> defining the scale
          amounts.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when attempting
            to modify a read only attribute or when the object itself is read
            only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>{{domxref("SVGTransform.setRotate", "setRotate")}}</strong>(in float <em>angle</em>, in float
          <em>cx</em>, in float <em>cy</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Sets the transform type to <code>SVG_TRANSFORM_ROTATE</code>, with
          parameter <code>angle</code> defining the rotation angle and
          parameters <code>cx</code> and <code>cy</code> defining the optional
          center of rotation.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when attempting
            to modify a read only attribute or when the object itself is read
            only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>{{domxref("SVGTransform.setSkewX", "setSkewX")}}</strong>(in float <em>angle</em>)</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Sets the transform type to <code>SVG_TRANSFORM_SKEWX</code>, with
          parameter <code>angle</code> defining the amount of skew.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when attempting
            to modify a read only attribute or when the object itself is read
            only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>{{domxref("SVGTransform.setSkewY", "setSkewY")}}</strong>(in float <em>angle</em>)</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Sets the transform type to <code>SVG_TRANSFORM_SKEWY</code>, with
          parameter <code>angle</code> defining the amount of skew.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when attempting
            to modify a read only attribute or when the object itself is read
            only.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
