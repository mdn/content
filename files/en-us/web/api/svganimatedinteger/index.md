---
title: SVGAnimatedInteger
slug: Web/API/SVGAnimatedInteger
page-type: web-api-interface
tags:
  - API
  - NeedsBrowserCompatibility
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGAnimatedInteger
---
{{APIRef("SVG")}}

## SVG animated integer interface

The `SVGAnimatedInteger` interface is used for attributes of basic type [\<integer>](/en-US/docs/Web/SVG/Content_type#integer) which can be animated.

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
          <li>readonly long <code>baseVal</code></li>
          <li>readonly long <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedInteger"
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
      <td>long</td>
      <td>
        The base value of the given attribute before applying any animations.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>long</td>
      <td>
        If the given attribute or property is being animated, contains the
        current animated value of the attribute or property. If the given
        attribute or property is not currently being animated, contains the same
        value as <code>baseVal</code>.
      </td>
    </tr>
  </tbody>
</table>

## Methods

The `SVGAnimatedInteger` interface do not provide any specific methods.

## Browser compatibility

{{Compat}}
