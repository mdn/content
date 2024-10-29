---
title: SVGRenderingIntent
slug: Web/API/SVGRenderingIntent
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.SVGRenderingIntent
---

{{APIRef("SVG")}}{{deprecated_header}}

The **`SVGRenderingIntent`** interface defines the enumerated list of possible values for {{SVGAttr("rendering-intent")}} attributes or descriptors.

{{InheritanceDiagram}}

> [!WARNING]
> This interface was removed in the SVG 2 specification.

## Constants

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_AUTO</code></td>
      <td>1</td>
      <td>Corresponds to the value <code>auto</code>.</td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_PERCEPTUAL</code></td>
      <td>2</td>
      <td>Corresponds to the value <code>perceptual</code>.</td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_RELATIVE_COLORIMETRIC</code></td>
      <td>3</td>
      <td>Corresponds to the value <code>relative-colorimetric</code>.</td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_SATURATION</code></td>
      <td>4</td>
      <td>Corresponds to the value <code>saturation</code>.</td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_ABSOLUTE_COLORIMETRIC</code></td>
      <td>5</td>
      <td>Corresponds to the value <code>absolute-colorimetric</code>.</td>
    </tr>
  </tbody>
</table>

## Instance properties

_This interface doesn't implement any specific properties._

## Instance methods

_This interface doesn't implement any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("rendering-intent")}}
