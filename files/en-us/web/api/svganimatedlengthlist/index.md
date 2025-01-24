---
title: SVGAnimatedLengthList
slug: Web/API/SVGAnimatedLengthList
page-type: web-api-interface
browser-compat: api.SVGAnimatedLengthList
---

{{APIRef("SVG")}}

## SVG animated length list interface

The `SVGAnimatedLengthList` interface is used for attributes of type {{ domxref("SVGLengthList") }} which can be animated.

### Interface overview

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">Also implement</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Methods</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Properties</th>
      <td>
        <ul>
          <li>
            readonly {{ domxref("SVGLengthList") }}
            <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGLengthList") }}
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedLengthList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
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
      <td><code>{{domxref("SVGAnimatedLengthList.baseVal", "baseVal")}}</code></td>
      <td>{{ domxref("SVGLengthList") }}</td>
      <td>
        The base value of the given attribute before applying any animations.
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGAnimatedLengthList.animVal", "animVal")}}</code></td>
      <td>{{ domxref("SVGLengthList") }}</td>
      <td>
        A read only {{ domxref("SVGLengthList") }} representing the
        current animated value of the given attribute. If the given attribute is
        not currently being animated, then the
        {{ domxref("SVGLengthList") }} will have the same contents as
        <code>baseVal</code>. The object referenced by <code>animVal</code> will
        always be distinct from the one referenced by <code>baseVal</code>, even
        when the attribute is not animated.
      </td>
    </tr>
  </tbody>
</table>

## Instance methods

The `SVGAnimatedLengthList` interface do not provide any specific methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
