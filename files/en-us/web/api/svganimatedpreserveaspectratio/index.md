---
title: SVGAnimatedPreserveAspectRatio
slug: Web/API/SVGAnimatedPreserveAspectRatio
tags:
  - API
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGAnimatedPreserveAspectRatio
---
{{APIRef("SVG")}}

## SVG animated preserveAspectRatio interface

The `SVGAnimatedPreserveAspectRatio` interface is used for attributes of type {{ domxref("SVGPreserveAspectRatio") }} which can be animated.

### Interface overview

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Also implement</th>
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
          <li>readonly float <code>baseVal</code></li>
          <li>readonly float <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/coords.html#InterfaceSVGAnimatedPreserveAspectRatio"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Properties

- {{domxref("SVGAnimatedPreserveAspectRatio.baseVal")}} {{ReadOnlyInline}}
  - : Is a {{domxref("SVGPreserveAspectRatio")}} that represents the base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedPreserveAspectRatio.animVal")}} {{ReadOnlyInline}}
  - : Is a {{domxref("SVGPreserveAspectRatio")}} that represents the current animated value of the given attribute. If the given attribute is not currently being animated, then the {{ domxref("SVGPreserveAspectRatio") }} will have the same contents as `baseVal`. The object referenced by `animVal` is always distinct from the one referenced by `baseVal`, even when the attribute is not animated.

## Methods

The `SVGAnimatedPreserveAspectRatio` interface do not provide any specific methods.

## Browser compatibility

{{Compat}}
