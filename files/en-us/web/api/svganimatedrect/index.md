---
title: SVGAnimatedRect
slug: Web/API/SVGAnimatedRect
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGAnimatedRect
---
{{APIRef("SVG")}}

The `SVGAnimatedRect` interface is used for attributes of basic {{ domxref("SVGRect") }} which can be animated.

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
            readonly {{ domxref("SVGRect") }} <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGRect") }} <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedRect"
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
      <td>{{ domxref("SVGRect") }}</td>
      <td>
        The base value of the given attribute before applying any animations.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>{{ domxref("SVGRect") }}</td>
      <td>
        A read only {{ domxref("SVGRect") }} representing the current
        animated value of the given attribute. If the given attribute is not
        currently being animated, then the {{ domxref("SVGRect") }} will
        have the same contents as <code>baseVal</code>. The object referenced by
        <code>animVal</code> will always be distinct from the one referenced by
        <code>baseVal</code>, even when the attribute is not animated.
      </td>
    </tr>
  </tbody>
</table>

## Methods

_The `SVGAnimatedRect` interface do not provide any specific methods._

## Browser compatibility

{{Compat}}
