---
title: SVGAnimatedNumberList
slug: Web/API/SVGAnimatedNumberList
page-type: web-api-interface
browser-compat: api.SVGAnimatedNumberList
---

{{APIRef("SVG")}}

## SVG animated number list interface

The `SVGAnimatedNumber` interface is used for attributes which take a list of numbers and which can be animated.

### Interface overview

<table class="standard-table">
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
            readonly {{ domxref("SVGNumberList") }}
            <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGNumberList") }}
            <code>animVal</code>
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

- {{domxref("SVGAnimatedNumberList.baseVal")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGNumberList")}} that represents the base value of the given attribute before applying any animations.
- {{domxref("SVGAnimatedNumberList.animVal")}} {{ReadOnlyInline}}
  - : A read only {{ domxref("SVGNumberList") }} that represents the current animated value of the given attribute. If the given attribute is not currently being animated, then the {{ domxref("SVGNumberList") }} will have the same contents as `baseVal`. The object referenced by `animVal` will always be distinct from the one referenced by `baseVal`, even when the attribute is not animated.

## Instance methods

The `SVGAnimatedNumberList` interface do not provide any specific methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
