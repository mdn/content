---
title: HTMLParamElement
slug: Web/API/HTMLParamElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLParamElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLParamElement`** interface provides special properties (beyond those of the regular {{domxref("HTMLElement")}} object interface it inherits) for manipulating {{HTMLElement("param")}} elements, representing a pair of a key and a value that acts as a parameter for an {{HTMLElement("object")}} element.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLParamElement.name")}}
  - : Is a {{domxref("DOMString")}} representing the name of the parameter. It reflects the {{htmlattrxref("name", "param")}} attribute.
- {{domxref("HTMLParamElement.value")}}
  - : Is a {{domxref("DOMString")}} representing the value associated to the parameter. It reflects the {{htmlattrxref("value", "param")}} attribute.
- {{domxref("HTMLParamElement.type")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} containing the type of the parameter when `valueType` has the `"ref"` value. It reflects the {{htmlattrxref("type", "param")}} attribute.
- {{domxref("HTMLParamElement.valueType")}} {{deprecated_inline}}
  - : Is a {{domxref("DOMString")}} containing the type of the `value`. It reflects the {{htmlattrxref("<code>valuetype</code>", "param")}} attribute and has one of the values: `"data"`, `"ref"`, or `"object"`.

## Methods

_No specific methods, inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("param") }}.
