---
title: SVG Conditional Processing Attributes
slug: Web/SVG/Attribute/Conditional_Processing
tags:
  - Intermediate
  - NeedsExample
  - Property
  - Reference
  - SVG
browser-compat: svg.attributes.conditional_processing
---
The SVG conditional processing attributes are all the attributes that can be specified on some SVG elements to control whether or not the element on which it appears should be rendered.

- [requiredExtensions](#attr-requiredextensions)
- [requiredFeatures](#attr-requiredfeatures)
- [systemLanguage](#attr-systemlanguage)

## Attributes

- {{SVGAttr('requiredExtensions')}}
  - : List all the browser specific capabilities that must be supported by the browser to be allowed to render the associated element.
    _Value_: A list of space-separated URI; _Animatable_: **No**
- {{SVGAttr('requiredFeatures')}} {{deprecated_inline}}
  - : List all the features, [as defined is the SVG 1.1 specification](https://www.w3.org/TR/SVG11/feature.html), that must be supported by the browser to be allowed to render the associated element.
    _Value_: A list of space-separated URI; _Animatable_: **No**
- {{SVGAttr('systemLanguage')}}
  - : Indicates which language the user must have chosen to render the associated element.
    _Value_: A list of comma-separated language tags according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}; _Animatable_: **No**

## Browser compatibility

{{Compat}}
