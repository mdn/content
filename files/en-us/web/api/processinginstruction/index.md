---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
page-type: web-api-interface
browser-compat: api.ProcessingInstruction
---

{{APIRef("DOM")}}

The **`ProcessingInstruction`** interface represents a [processing instruction](https://www.w3.org/TR/xml/#sec-pi); that is, a {{domxref("Node")}} which embeds an instruction targeting a specific application but that can be ignored by any other applications which don't recognize the instruction.

> **Warning:** `ProcessingInstruction` nodes are only supported in XML documents, not in HTML documents. In these, a process instruction will be considered as a comment and be represented as a {{domxref("Comment")}} object in the tree.

A processing instruction may be different than the [XML declaration](/en-US/docs/Web/XML/XML_introduction#xml_declaration).

> **Note:** User-defined processing instructions cannot begin with "`xml`", as `xml`-prefixed processing-instruction target names are reserved by the XML specification for particular, standard uses (see, for example, `<?xml-stylesheet ?>`.

For example:

```html
<?xml version="1.0"?>
```

is a processing instruction whose `target` is `xml`.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interfaces, {{domxref("CharacterData")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}._

- {{domxref("ProcessingInstruction.sheet")}} {{ReadOnlyInline}}

  - : Returns the associated {{domxref("StyleSheet")}} object, if any; or `null` if none.

- {{domxref("ProcessingInstruction.target")}} {{ReadOnlyInline}}
  - : A name identifying the application to which the instruction is targeted.

## Instance methods

_This interface doesn't have any specific method, but inherits methods from its parent interfaces, {{domxref("CharacterData")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [document.createProcessingInstruction()](/en-US/docs/Web/API/Document/createProcessingInstruction)
- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)
