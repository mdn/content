---
title: SVGPreserveAspectRatio
slug: Web/API/SVGPreserveAspectRatio
page-type: web-api-interface
browser-compat: api.SVGPreserveAspectRatio
---

{{APIRef("SVG")}}

The **`SVGPreserveAspectRatio`** interface corresponds to the {{ SVGAttr("preserveAspectRatio") }} attribute, which is available for some of SVG's elements.

An `SVGPreserveAspectRatio` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

## Instance properties

- {{domxref("SVGPreserveAspectRatio.align", "align")}}

  - : The type of the alignment value as specified by one of the `SVG_PRESERVEASPECTRATIO_*` constants defined on this interface.

- {{domxref("SVGPreserveAspectRatio.meetOrSlice", "meetOrSlice")}}
  - : The type of the meet-or-slice value as specified by one of the `SVG_MEETORSLICE_*` constants defined on this interface.

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_UNKNOWN</code>
      </td>
      <td>0</td>
      <td>
        The enumeration was set to a value that is not one of predefined types.
        It is invalid to attempt to define a new value of this type or to
        attempt to switch an existing value to this type.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_NONE</code>
      </td>
      <td>1</td>
      <td>
        Corresponds to value <code>none</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMIN</code>
      </td>
      <td>2</td>
      <td>
        Corresponds to value <code>xMinYMin</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMIN</code>
      </td>
      <td>3</td>
      <td>
        Corresponds to value <code>xMidYMin</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMIN</code>
      </td>
      <td>4</td>
      <td>
        Corresponds to value <code>xMaxYMin</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMID</code>
      </td>
      <td>5</td>
      <td>
        Corresponds to value <code>xMinYMid</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMID</code>
      </td>
      <td>6</td>
      <td>
        Corresponds to value <code>xMidYMid</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMID</code>
      </td>
      <td>7</td>
      <td>
        Corresponds to value <code>xMaxYMid</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMAX</code>
      </td>
      <td>8</td>
      <td>
        Corresponds to value <code>xMinYMax</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMAX</code>
      </td>
      <td>9</td>
      <td>
        Corresponds to value <code>xMidYMax</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMAX</code>
      </td>
      <td>10</td>
      <td>
        Corresponds to value <code>xMaxYMax</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The enumeration was set to a value that is not one of predefined types.
        It is invalid to attempt to define a new value of this type or to
        attempt to switch an existing value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_MEET</code></td>
      <td>1</td>
      <td>
        Corresponds to value <code>meet</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_SLICE</code></td>
      <td>2</td>
      <td>
        Corresponds to value <code>slice</code> for attribute
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
  </tbody>
</table>

## Instance methods

_The `SVGPreserveAspectRatio` interface do not provide any specific methods._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
