---
title: SVGPreserveAspectRatio
slug: Web/API/SVGPreserveAspectRatio
page-type: web-api-interface
browser-compat: api.SVGPreserveAspectRatio
---

{{APIRef("SVG")}}

The **`SVGPreserveAspectRatio`** interface corresponds to the {{SVGAttr("preserveAspectRatio")}} attribute.

An `SVGPreserveAspectRatio` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

## Instance properties

- {{domxref("SVGPreserveAspectRatio.align", "align")}}
  - : The type of the alignment value as specified by one of the `SVG_PRESERVEASPECTRATIO_*` constants defined on this interface.
- {{domxref("SVGPreserveAspectRatio.meetOrSlice", "meetOrSlice")}}
  - : The type of the meet-or-slice value as specified by one of the `SVG_MEETORSLICE_*` constants defined on this interface.

## Instance methods

_The `SVGPreserveAspectRatio` interface do not provide any specific methods._

## Static properties

- `SVG_PRESERVEASPECTRATIO_UNKNOWN` (0)
  - : The enumeration was set to a value that is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_PRESERVEASPECTRATIO_NONE` (1)
  - : Corresponds to value `none` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMIN` (2)
  - : Corresponds to value `xMinYMin` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMIN` (3)
  - : Corresponds to value `xMidYMin` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMIN` (4)
  - : Corresponds to value `xMaxYMin` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMID` (5)
  - : Corresponds to value `xMinYMid` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMID` (6)
  - : Corresponds to value `xMidYMid` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMID` (7)
  - : Corresponds to value `xMaxYMid` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMAX` (8)
  - : Corresponds to value `xMinYMax` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMAX` (9)
  - : Corresponds to value `xMidYMax` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMAX` (10)
  - : Corresponds to value `xMaxYMax` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_MEETORSLICE_UNKNOWN` (0)
  - : The enumeration was set to a value that is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `SVG_MEETORSLICE_MEET` (1)
  - : Corresponds to value `meet` for attribute {{SVGAttr("preserveAspectRatio")}}.
- `SVG_MEETORSLICE_SLICE` (2)
  - : Corresponds to value `slice` for attribute {{SVGAttr("preserveAspectRatio")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
