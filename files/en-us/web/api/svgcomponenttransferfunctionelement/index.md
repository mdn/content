---
title: SVGComponentTransferFunctionElement
slug: Web/API/SVGComponentTransferFunctionElement
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGComponentTransferFunctionElement
---
{{APIRef("SVG")}}

The **`SVGComponentTransferFunctionElement`** interface defines a base interface used by the component transfer function interfaces.

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
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        The type is not one of predefined types. It is invalid to attempt to
        define a new value of this type or to attempt to switch an existing
        value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY</code></td>
      <td>1</td>
      <td>Corresponds to the value <code>identity</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_TABLE</code></td>
      <td>2</td>
      <td>Corresponds to the value <code>table</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE</code></td>
      <td>3</td>
      <td>Corresponds to the value <code>discrete</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_LINEAR</code></td>
      <td>4</td>
      <td>Corresponds to the value <code>linear</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_GAMMA</code></td>
      <td>5</td>
      <td>Corresponds to the value <code>gamma</code>.</td>
    </tr>
  </tbody>
</table>

## Properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGComponentTransferFunctionElement.type")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("type")}} attribute of the given element. It takes one of the `SVG_FECOMPONENTTRANSFER_TYPE_*` constants defined on this interface.
- {{domxref("SVGComponentTransferFunctionElement.tableValues")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumberList")}} corresponding to the {{SVGAttr("tableValues")}} attribute of the given element.
- {{domxref("SVGComponentTransferFunctionElement.slope")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("slope")}} attribute of the given element.
- {{domxref("SVGComponentTransferFunctionElement.intercept")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("intercept")}} attribute of the given element.
- {{domxref("SVGComponentTransferFunctionElement.amplitude")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("amplitude")}} attribute of the given element.
- {{domxref("SVGComponentTransferFunctionElement.exponent")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("exponent")}} attribute of the given element.
- {{domxref("SVGComponentTransferFunctionElement.offset")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedNumber")}} corresponding to the {{SVGAttr("offset")}} attribute of the given element.

## Methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEFuncAElement")}}
- {{domxref("SVGFEFuncBElement")}}
- {{domxref("SVGFEFuncGElement")}}
- {{domxref("SVGFEFuncRElement")}}
