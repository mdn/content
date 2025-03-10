---
title: SVGAnimatedAngle
slug: Web/API/SVGAnimatedAngle
page-type: web-api-interface
browser-compat: api.SVGAnimatedAngle
---

{{APIRef("SVG")}}

## SVG animated angle interface

The `SVGAnimatedAngle` interface is used for attributes of basic type [\<angle>](/en-US/docs/Web/SVG/Content_type#angle) which can be animated.

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
            readonly {{ domxref("SVGAngle") }} <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGAngle") }} <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedAngle"
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
      <td><code>{{domxref("SVGAnimatedAngle.baseVal")}}</code></td>
      <td>{{ domxref("SVGAngle") }}</td>
      <td>
        The base value of the given attribute before applying any animations.
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGAnimatedAngle.animVal")}}</code></td>
      <td>{{ domxref("SVGAngle") }}</td>
      <td>
        A read only {{ domxref("SVGAngle") }} representing the current
        animated value of the given attribute. If the given attribute is not
        currently being animated, then the {{ domxref("SVGAngle") }} will
        have the same contents as <code>baseVal</code>. The object referenced by
        <code>animVal</code> will always be distinct from the one referenced by
        <code>baseVal</code>, even when the attribute is not animated.
      </td>
    </tr>
  </tbody>
</table>

## Instance methods

The `SVGAnimatedAngle` interface do not provide any specific methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
