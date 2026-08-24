---
title: ProcessingInstruction
slug: Web/API/ProcessingInstruction
page-type: web-api-interface
browser-compat: api.ProcessingInstruction
---

{{APIRef("DOM")}}

The **`ProcessingInstruction`** interface represents a [processing instruction](https://www.w3.org/TR/xml/#sec-pi) — a {{domxref("Node")}} that embeds an instruction targeting a specific application, which can be ignored by any application that doesn't recognize the instruction.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ProcessingInstruction.ProcessingInstruction()")}}
  - : Creates a new ProcessingInstruction object instance.

    Developers cannot use the `ProcessingInstruction()` constructor directly to create a new `ProcessingInstruction` instance; doing so results in an "illegal constructor" error. Instead, use the {{domxref("document.createProcessingInstruction()")}} method.

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

These methods provide easier access to the {{domxref("CharacterData.data", "data")}} string attributes.

## Description

Processing instructions, as the name suggests, specify how to process a document. They can include stylesheets for XML documents, placeholders for HTML documents, or other processing instructions.

Processing instructions are {{domxref("Node", "Nodes")}} rather than {{domxref("Element", "Elements")}}. They don't have children or cause nesting (as demonstrated in our [Patching example](#usage_with_template_for_patching), and therefore don't change the shape of the [Document Object Model (DOM)](/en-US/docs/Web/API/Document_Object_Model).

Initially, `ProcessingInstruction` nodes were only supported in XML documents, not HTML documents. In non-supporting browsers, processing instructions will be interpreted as comments and represented as {{domxref("Comment")}} objects in the DOM tree.

When written in documents directly, rather than created by {{domxref("document.createProcessingInstruction()")}}, they begin and end with `<?` and `?>` delimiters, and contain a `target` and optional `data` attributes. For example:

```xml
<?my-target name="my-name"?>
```

When written in HTML, processing instructions can be provided with or without the trailing `?`, and the browser will add it if not supplied when parsing the DOM. Both `<?my-target?>` and `<?my-target>` are therefore valid. XML is stricter and requires the trailing `?`.

HTML also has [more restrictions on the `target` name](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state) in the HTML parser for backwards compatibility. Effectively, it must match `[A-Za-z_][-_A-Za-z0-9]*` or it is processed as a comment.

Although the syntax is identical to that of processing instructions, the [XML declaration](/en-US/docs/Web/XML/Guides/XML_introduction#xml_declaration) (`<?xml version="1.0"?>`) is not considered to be a processing instruction and is not added to the DOM.

User-defined processing instructions cannot begin with `"xml"`, as `xml`-prefixed processing-instruction target names are reserved by the XML specification for particular, standard uses (for example, `<?xml-stylesheet ?>`).

For backwards compatibility, if the target is `xml` or `xml-stylesheet`, the processing instruction is parsed as a comment in an HTML document. This applies whether it is included in the original HTML or inserted using a method such as {{domxref("Element.innerHTML")}}.

## Examples

### Basic usage

This example shows a processing instruction with a `target` of `display` and `data` of `table-view`.

```xml
<?display table-view?>
```

### Reserved XML target example

```xml
<?xml-stylesheet href="styles.css"?>
```

This example shows a processing instruction with a target of `xml-stylesheet` and `data` of `href="styles.css"`.

### Usage with `<template for>` patching

This example uses the `<?start>` and `<?end>` processing instructions as placeholders and later on fills in the contents using `<template for>`. Both exclude the optional trailing `?`.

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

This example also demonstrates the lack of processing instruction children and nesting. The `<?start>` and `<?end>` processing instructions, although linked in terms of `<template for>`, are not linked in terms of the DOM and do not cause the `Loading...` content in between to be a child (as demonstrated by the lack of indentation).

### Using methods as opposed to the `data` attribute

This example creates a processing instruction using the `createProcessingInstruction()` method. It then logs the processing instruction's data (accessed via its {{domxref("CharacterData.data")}} property) and then its two attributes individually (accessed via its {{domxref("ProcessingInstruction.getAttribute()")}} method).

```js
const pi = document.createProcessingInstruction(
  "my-target",
  "my-data1='value1' my-data2='value2'",
);

console.log(pi.data);
console.log(pi.getAttribute("my-data1"));
console.log(pi.getAttribute("my-data2"));
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
