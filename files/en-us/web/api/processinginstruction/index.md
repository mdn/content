---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
page-type: web-api-interface
browser-compat: api.ProcessingInstruction
---

{{APIRef("DOM")}}

The **`ProcessingInstruction`** interface represents a [processing instruction](https://www.w3.org/TR/xml/#sec-pi) — a {{domxref("Node")}} that embeds an instruction targeting a specific application, which can be ignored by any application that doesn't recognize the instruction.

## Constructor

- {{domxref("ProcessingInstruction.ProcessingInstruction()")}}
  - : Creates a new ProcessingInstruction object instance.

    Developers cannot use the `ProcessingInstruction()` constructor directly to create a new `ProcessingInstruction` instance, and must use the {{domxref("document.createProcessingInstruction()")}} method instead. Attempting to use the `ProcessingInstruction()` constructor directly results in an "illegal constructor" error.

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
  - : Returns an array of attribute names from the current node.
- {{domxref("ProcessingInstruction.hasAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean value indicating if the element has the specified attribute or not.
- {{domxref("ProcessingInstruction.hasAttributes()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a boolean value indicating if the element has one or more HTML attributes present.
- {{domxref("ProcessingInstruction.removeAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Removes the named attribute from the current node.
- {{domxref("ProcessingInstruction.setAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Sets the named attribute of the current node to a new value.
- {{domxref("ProcessingInstruction.toggleAttribute()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Toggles a boolean attribute, removing it if it is present and adding it if it is not present, on the specified element.

These methods provide easier access to the {domxref("CharacterData.data", "data")} string attributes.

## Description

Processing instructions are, as the name suggests, are instructions about how to process the document. They can include stylesheets for XML documents, placeholders for HTML documents, or other processing instructions.

They are {{domxref("Node", "Nodes")}} and not {{domxref("Element", "Elements")}} in that they do not change the shape of the {{domxref("Document Object Model", "Document Object Model (DOM)")}} in that they do not have children or cause nesting as demonstrated in the [Patching example](#usage_with_template_for_patching) later.

{{InheritanceDiagram}}

Initially, `ProcessingInstruction` nodes were only supported in XML documents, not in HTML documents. In non-supporting browsers, a process instruction will be considered as a comment and be represented as a {{domxref("Comment")}} object in the tree. Check the [browser compatibility](#browser_compatibility) section for support information.

When written in documents directly, rather than created by {{domxref("document.createProcessingInstruction()")}}, they begin with `<?`, followed by the `target`, optional `data` attributes and end with `?>`. For example: `<?my-target name="my-name"?>`.

When written in HTML, processing instructions can be provided with or without the trailing `?`, and the browser will add it if not supplied. That is both `<?my-target?>` and `<?my-target>` are acceptable and will both include the trailing `?` when processed into the DOM by the parser. XML, being stricter, requires the trailing `?`.

HTML also has [more restrictions on the `target` name](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state) for backwards compatibility. Effectively, it must match `[A-Za-z_][-_A-Za-z0-9]*` or it is processed as a comment.

Although the syntax is identical to that for processing instructions, the [XML declaration](/en-US/docs/Web/XML/Guides/XML_introduction#xml_declaration) (`<?xml version="1.0"?>`) is not considered to be a processing instruction and is not added as such to the DOM.

User-defined processing instructions cannot begin with `"xml"`, as `xml`-prefixed processing-instruction target names are reserved by the XML specification for particular, standard uses (see, for example, `<?xml-stylesheet ?>`).

For backwards compatibility, `xml`-prefixed processing instructions are parsed as comments in HTML documents.

## Examples

### Basic usage

```xml
<?display table-view?>
```

This example shows a processing instruction whose `target` is `display` and who's data is `table-view`.

### Reserved XML target example

```xml
<?xml-stylesheet href="styles.css"?>
```

This example shows a processing instruction whose `xml-stylesheet` is `display` and who's data is `href="styles.css"`.

### Usage with `<template for>` patching

<!-- Have prettier ignore this, as indentation is important and discussed next -->
<!-- prettier-ignore-start -->
```html
<body>
  <div>
    <?start name="placeholder">
    Loading...
    <?end>
  </div>
  ...
  <template for="placeholder">
    Lorem Ipsum...
  </template>
  ...
</body>
```
<!-- prettier-ignore-end -->

Uses the `<?start>` and `<?end>` processing instructions as placeholders and later on fills in the contents using `<template for>`. Both exclude the optional trailing `?`.

This example also demonstrates the lack of children and nesting as shown with the indentation in the previous example. The `<?start>` and `<?end>` processing instructions, although linked in terms of `<template for>`, are not linked in terms of the DOM and do not cause the `Loading..` text contents in between to be a child (as demonstrated by the lack of indentation).

### Using methods as opposed to the `data` attribute

```js
const pi = document.createProcessingInstruction(
  "my-target",
  "my-data1='value1' my-data2='value2'",
);

console.log(pi.data);
console.log(pi.getAttribute("my-data1"));
console.log(pi.getAttribute("my-data1"));
// logs
// my-data1='value1' my-data2='value2'
// value1
// value2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [document.createProcessingInstruction()](/en-US/docs/Web/API/Document/createProcessingInstruction)
- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)
