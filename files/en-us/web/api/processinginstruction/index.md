---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
tags:
  - API
  - DOM
browser-compat: api.ProcessingInstruction
---
{{APIRef("DOM")}}

The **`ProcessingInstruction`** interface represents a [processing instruction](https://www.w3.org/TR/xml/#sec-pi); that is, a {{domxref("Node")}} which embeds an instruction targeting a specific application but that can be ignored by any other applications which don't recognize the instruction.

A processing instruction is different from the [XML declaration](/en-US/docs/Web/XML/XML_introduction#xml_declaration).

> **Note:** User-defined processing instructions cannot begin with "`xml`", as `xml`-prefixed processing-instruction target names are reserved by the XML specification for particular, standard uses (see, for example, [`<?xml-stylesheet ?>`](/en-US/docs/XML/xml-stylesheet)).

The `ProcessingInstruction` interface inherits methods and properties from {{domxref("Node")}}.

{{InheritanceDiagram(700,70)}}

## Properties

- `target` ({{domxref("DOMString")}}) {{readonlyInline}}
  - : A name identifying the application to which the instruction is targeted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [document.createProcessingInstruction](/en-US/docs/Web/API/Document/createProcessingInstruction)
