---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
  - Deprecated
browser-compat: api.HTMLParamElement
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`HTMLParamElement`** interface provides special properties (beyond those of the regular {{domxref("HTMLElement")}} object interface it inherits) for manipulating {{HTMLElement("param")}} elements, representing a pair of a key and a value that acts as a parameter for an {{HTMLElement("object")}} element.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLParamElement.name")}} {{Deprecated_Inline}}
  - : A string representing the name of the parameter. It reflects the {{htmlattrxref("name", "param")}} attribute.
- {{domxref("HTMLParamElement.value")}} {{Deprecated_Inline}}
  - : A string representing the value associated to the parameter. It reflects the {{htmlattrxref("value", "param")}} attribute.
- {{domxref("HTMLParamElement.type")}} {{Deprecated_Inline}}
  - : A string containing the type of the parameter when `valueType` has the `"ref"` value. It reflects the {{htmlattrxref("type", "param")}} attribute.
- {{domxref("HTMLParamElement.valueType")}} {{Deprecated_Inline}}
  - : A string containing the type of the `value`. It reflects the {{htmlattrxref("<code>valuetype</code>", "param")}} attribute and has one of the values: `"data"`, `"ref"`, or `"object"`.

## Methods

_No specific methods, inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("param") }}.
