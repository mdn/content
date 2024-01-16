---
title: "ProcessingInstruction: sheet property"
short-title: sheet
slug: Web/API/ProcessingInstruction/sheet
page-type: web-api-instance-property
browser-compat: api.ProcessingInstruction.sheet
---

{{ApiRef("DOM")}}

The read-only **`sheet`** property of the {{domxref("ProcessingInstruction")}} interface
contains the stylesheet associated to the `ProcessingInstruction`.

The `xml-stylesheet` processing instruction is used to associate a stylesheet in an XML file.

## Value

The associated {{DOMxref("Stylesheet")}} object, or `null` if there are none.

## Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="rule.css"?>
…
```

The `sheet` property of the processing instruction will return the {{domxref("StyleSheet")}} object describing `rule.css`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)
