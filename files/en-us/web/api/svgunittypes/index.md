---
title: SVGUnitTypes
slug: Web/API/SVGUnitTypes
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGUnitTypes
---
{{APIRef("SVG")}}

The **`SVGUnitTypes`** interface defines a commonly used set of constants used for reflecting {{SVGAttr("gradientUnits")}}, {{SVGAttr("patternContentUnits")}} and other similar attributes.

{{InheritanceDiagram}}

## Constants

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>SVG_UNIT_TYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_UNIT_TYPE_USERSPACEONUSE</code></td>
      <td>1</td>
      <td>Corresponds to the value <code>userSpaceOnUse</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_UNIT_TYPE_OBJECTBOUNDINGBOX</code></td>
      <td>2</td>
      <td>Corresponds to the value <code>objectBoundingBox</code>.</td>
    </tr>
  </tbody>
</table>

## Properties

_This interface doesn't implement any specific properties._

## Methods

_This interface doesn't implement any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
