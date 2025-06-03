---
title: SVGComponentTransferFunctionElement
slug: Web/API/SVGComponentTransferFunctionElement
page-type: web-api-interface
browser-compat: api.SVGComponentTransferFunctionElement
---

{{APIRef("SVG")}}

The **`SVGComponentTransferFunctionElement`** interface represents a base interface used by the component transfer function interfaces.

{{InheritanceDiagram}}

## Instance properties

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

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGElement")}}._

## Static properties

- `SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY` (1)
  - : Corresponds to the value `identity`.
- `SVG_FECOMPONENTTRANSFER_TYPE_TABLE` (2)
  - : Corresponds to the value `table`.
- `SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE` (3)
  - : Corresponds to the value `discrete`.
- `SVG_FECOMPONENTTRANSFER_TYPE_LINEAR` (4)
  - : Corresponds to the value `linear`.
- `SVG_FECOMPONENTTRANSFER_TYPE_GAMMA` (5)
  - : Corresponds to the value `gamma`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGFEFuncAElement")}}
- {{domxref("SVGFEFuncBElement")}}
- {{domxref("SVGFEFuncGElement")}}
- {{domxref("SVGFEFuncRElement")}}
