---
title: SVGAnimatedTransformList
slug: Web/API/SVGAnimatedTransformList
page-type: web-api-interface
tags:
  - API
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGAnimatedTransformList
---
{{APIRef("SVG")}}

## SVG animated transform list interface

The `SVGAnimatedTransformList` interface is used for attributes which take a list of numbers and which can be animated.

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
            readonly {{ domxref("SVGTransformList") }}
            <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGTransformList") }}
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG/coords.html#InterfaceSVGAnimatedTransformList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Properties

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
      <td><code>baseVal</code></td>
      <td>{{ domxref("SVGTransformList") }}</td>
      <td>
        The base value of the given attribute before applying any animations.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>{{ domxref("SVGTransformList") }}</td>
      <td>
        A read only {{ domxref("SVGTransformList") }} representing
        the current animated value of the given attribute. If the given
        attribute is not currently being animated, then the
        {{ domxref("SVGTransformList") }} will have the same contents
        as <code>baseVal</code>. The object referenced by
        <code>animVal</code> will always be distinct from the one referenced by
        <code>baseVal</code>, even when the attribute is not animated.
      </td>
    </tr>
  </tbody>
</table>

## Methods

The `SVGAnimatedTransformList` interface doesn't provide any specific methods.

## Browser compatibility

{{Compat}}
