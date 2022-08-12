---
title: SVGTextPathElement
slug: Web/API/SVGTextPathElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGTextPathElement
---
{{APIRef("SVG")}}

The **`SVGTextPathElement`** interface corresponds to the {{SVGElement("textPath")}} element.

{{InheritanceDiagram}}

## Constants

### Method types

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>TEXTPATH_METHODTYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>TEXTPATH_METHODTYPE_ALIGN</code></td>
      <td>1</td>
      <td>Corresponds to the value <code>align</code>.</td>
    </tr>
    <tr>
      <td><code>TEXTPATH_METHODTYPE_STRETCH</code></td>
      <td>2</td>
      <td>Corresponds to the value <code>stretch</code>.</td>
    </tr>
  </tbody>
</table>

### Spacing types

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>TEXTPATH_SPACINGTYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>TEXTPATH_SPACINGTYPE_AUTO</code></td>
      <td>1</td>
      <td>Corresponds to the value <code>auto</code>.</td>
    </tr>
    <tr>
      <td><code>TEXTPATH_SPACINGTYPE_EXACT</code></td>
      <td>2</td>
      <td>Corresponds to the value <code>exact</code>.</td>
    </tr>
  </tbody>
</table>

## Properties

_This interface also inherits properties from its parent interface, {{domxref("SVGTextContentElement")}}._

- {{domxref("SVGTextPathElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given element.
- {{domxref("SVGTextPathElement.startOffset")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the X component of the {{SVGAttr("startOffset")}} attribute of the given element.
- {{domxref("SVGTextPathElement.method")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("method")}} attribute of the given element. It takes one of the `TEXTPATH_METHODTYPE_*` constants defined on this interface.
- {{domxref("SVGTextPathElement.spacing")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("spacing")}} attribute of the given element. It takes one of the `TEXTPATH_SPACINGTYPE_*` constants defined on this interface.

## Methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGTextContentElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("textPath")}}
