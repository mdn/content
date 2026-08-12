---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
page-type: web-api-interface
browser-compat: api.ProcessingInstruction
---

{{APIRef("DOM")}}

The **`ProcessingInstruction`** interface represents a [processing instruction](https://www.w3.org/TR/xml/#sec-pi); that is, a {{domxref("Node")}} which embeds an instruction targeting a specific application but that can be ignored by any other applications which don't recognize the instruction.

> [!WARNING]
> Until recently, `ProcessingInstruction` were only supported in XML documents, not in HTML documents. In non-supporting browsers, a process instruction will be considered as a comment and be represented as a {{domxref("Comment")}} object in the tree. Check the [browser compatibility](#browser_compatibility) section for support information.

A processing instruction may be different than the [XML declaration](/en-US/docs/Web/XML/Guides/XML_introduction#xml_declaration).

> [!NOTE]
> User-defined processing instructions cannot begin with `"xml"`, as `xml`-prefixed processing-instruction target names are reserved by the XML specification for particular, standard uses (see, for example, `<?xml-stylesheet ?>`.

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

_This interface also inherits methods from its parent interfaces, {{domxref("CharacterData")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}._

- {{domxref("ProcessingInstruction.getAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retrieves the value of the named attribute from the current node and returns it as a string.
- {{domxref("ProcessingInstruction.getAttributeNames()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of attribute names from the current element.
- {{domxref("ProcessingInstruction.hasAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean value indicating if the element has the specified attribute or not.
- {{domxref("ProcessingInstruction.hasAttributes()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean value indicating if the element has one or more HTML attributes present.
- {{domxref("ProcessingInstruction.removeAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Removes the named attribute from the current node.
- {{domxref("ProcessingInstruction.setAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Sets the value of a named attribute of the current node.
- {{domxref("ProcessingInstruction.toggleAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [document.createProcessingInstruction()](/en-US/docs/Web/API/Document/createProcessingInstruction)
- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)
