---
title: SVGPreserveAspectRatio
slug: Web/API/SVGPreserveAspectRatio
page-type: web-api-interface
browser-compat: api.SVGPreserveAspectRatio
---

{{APIRef("SVG")}}

## SVG preserveAspectRatio interface

The `SVGPreserveAspectRatio` interface corresponds to the {{ SVGAttr("preserveAspectRatio") }} attribute, which is available for some of SVG's elements.

An `SVGPreserveAspectRatio` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

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
          <li>unsigned short <code>align</code></li>
          <li>unsigned short <code>meetOrSlice</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Constants</th>
      <td>
        <ul>
          <li><code>SVG_PRESERVEASPECTRATIO_UNKNOWN</code> = 0</li>
          <li><code>SVG_PRESERVEASPECTRATIO_NONE</code> = 1</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMIN</code> = 2</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMIN</code> = 3</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMIN</code> = 4</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMID</code> = 5</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMID</code> = 6</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMID</code> = 7</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMAX</code> = 8</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMAX</code> = 9</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMAX</code> = 10</li>
        </ul>
        <ul>
          <li><code>SVG_MEETORSLICE_UNKNOWN</code> = 0</li>
          <li><code>SVG_MEETORSLICE_MEET</code> = 1</li>
          <li><code>SVG_MEETORSLICE_SLICE</code> = 2</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG/coords.html#InterfaceSVGPreserveAspectRatio"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Constants

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
      <td><code>align</code></td>
      <td>unsigned short</td>
      <td>
        The type of the alignment value as specified by one of the
        <code>SVG_PRESERVEASPECTRATIO_*</code> constants defined on this interface.
      </td>
    </tr>
    <tr>
      <td><code>meetOrSlice</code></td>
      <td>unsigned short</td>
      <td>
        The type of the meet-or-slice value as specified by one of the
        <code>SVG_MEETORSLICE_*</code> constants defined on this interface.
      </td>
    </tr>
  </tbody>
</table>

**Exceptions on setting:** a [`DOMException`](/en-US/docs/Web/API/DOMException) with code `NO_MODIFICATION_ALLOWED_ERR` is raised on an attempt to change the value of an attribute on a read only object.

## Instance methods

The `SVGPreserveAspectRatio` interface do not provide any specific methods.

## Browser compatibility

{{Compat}}
