---
title: ProcessingInstruction.sheet
slug: Web/API/ProcessingInstruction/sheet
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.ProcessingInstruction.sheet
---
{{ApiRef("DOM")}}

The read-only **`sheet`** property of the {{domxref("ProcessingInstruction")}} interface
represent the name of the stylesheet associated to the `ProcessingInstruction`.

The `xml-stylesheet` processing instruction is used to associate a stylesheet in an XML file.

## Value

A string containing the name of the associated stylesheet, or `null` if there are none.

## Example

```html
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="rule.css"?>
…
```

The `sheet` property of the processing instruction will return `rule.css`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)
