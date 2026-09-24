---
title: Processing instructions
short-title: Processing instructions
slug: Web/HTML/Guides/Processing_instructions
page-type: guide
spec-urls:
  - https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state
  - https://dom.spec.whatwg.org/#processinginstruction
sidebar: htmlsidebar
---

A **processing instruction** is a {{domxref("Node")}} that embeds an instruction for an application that processes the document. If the application does not recognize the instruction, it can be ignored.

Processing instructions are written with `<?` and `?>` delimiters and contain a `target` and optional `data`. For example:

```xml
<?my-target name="my-name"?>
```

In this example `my-target` is the target and `name="my-name"` is the data.

This guide explains how processing instructions work in HTML and XML, how they are represented in the {{DOMxRef("Document_Object_Model", "DOM")}}, and how they are used for {{glossary("Out_of_order_patching", "out-of-order patching")}} with {{HTMLElement("template")}}.

## Processing instructions in the DOM

Processing instructions are leaf {{domxref("Node", "Nodes")}} represented by the {{domxref("ProcessingInstruction")}} interface, which inherits from {{domxref("CharacterData")}}. Like {{domxref("Comment")}} nodes, they cannot have children and do not affect the shape of the DOM tree.

Key characteristics:

- `nodeType` is `Node.PROCESSING_INSTRUCTION_NODE` (`7`).
- `nodeName` is the {{domxref("ProcessingInstruction.target", "target")}}.
- `nodeValue` / {{domxref("Node.textContent", "textContent")}} / {{domxref("CharacterData.data", "data")}} is the content after the target and before `?>`.
- The `target` identifies the application the instruction is for, and `data` holds the instruction payload as a string.

You can create and manipulate processing instructions with JavaScript:

```js
// Create a processing instruction
const pi = document.createProcessingInstruction(
  "my-target",
  'my-data1="value1" my-data2="value2"',
);

// Inspect via CharacterData properties
console.log(pi.target); // "my-target"
console.log(pi.data); // 'my-data1="value1" my-data2="value2"'

// Use attribute helpers instead of parsing data manually
console.log(pi.getAttribute("my-data1")); // "value1"
pi.setAttribute("my-data2", "newValue");
console.log(pi.data); // 'my-data1="value1" my-data2="newValue"'
```

Processing instructions can be inserted into the document like other nodes, for example with {{domxref("Node.appendChild()")}} or {{domxref("Node.insertBefore()")}}. See {{domxref("Document.createProcessingInstruction()")}} and {{domxref("ProcessingInstruction")}} for the full API.

## Syntax

When written directly in markup rather than created via the DOM API, processing instructions use the form:

```xml
<?target data?>
```

- `target` — a name identifying the application. In XML, targets starting with `xml` (case-insensitive) are reserved for standardization; user-defined targets must not start with `xml`.
- `data` — optional string content. For the attribute-style data used with declarative patching, you can use `getAttribute()` helpers rather than parsing `data` yourself.

Although the syntax looks like the [XML declaration](#xml-declaration-is-not-a-processing-instruction) (`<?xml version="1.0"?>`), the XML declaration is not a processing instruction and is not added to the DOM.

## Processing instructions in XML

Processing instructions originated in XML and are fully supported there:

- The trailing `?>` is required. `<?my-target>` without the closing `?` is a parse error.
- Targets beginning with `xml` are reserved. The most common standardized instruction is `xml-stylesheet`, used to associate stylesheets or transformations:

  ```xml
  <?xml-stylesheet type="text/css" href="stylesheet.css"?>
  <?xml-stylesheet type="text/xsl" href="transform.xsl"?>
  ```

- XML comments use `<!-- -->` and cannot contain `--`; processing instructions are distinct nodes (`<?...?>`).

See [XML introduction](/en-US/docs/Web/XML/Guides/XML_introduction) for more on XML processing.

## Processing instructions in HTML

Processing instructions in {{Glossary("HTML")}} have historically been limited, and browsers treated unknown `<?...?>` sequences as comments or exposed them as {{domxref("Comment")}} nodes. Modern HTML now defines parsing rules and active uses for them.

### Parsing differences from XML

HTML is more lenient but also more restrictive in specific ways:

- **Optional trailing `?`:** Both `<?my-target?>` and `<?my-target>` are valid in HTML. If the `?` is omitted, the parser adds it when creating the DOM node. XML requires `?>`.

  ```html-nolint
  <!-- Both create a ProcessingInstruction with target "my-target" in HTML -->
  <?my-target?>
  <?my-target>
  ```

- **Restricted target names:** For backwards compatibility, the HTML parser only creates a `ProcessingInstruction` if the target matches the pattern `[A-Za-z_][-_A-Za-z0-9]*`. If the target contains other characters, the markup is parsed as a comment instead. This is defined in the [HTML parsing spec](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state).

  ```html-nolint
  <!-- Valid target -> ProcessingInstruction -->
  <?valid-target data?>

  <!-- Invalid target -> Comment -->
  <?123-invalid?>
  <?my:target?>
  ```

- **Reserved `xml` targets become comments in HTML:** If the target is `xml` or `xml-stylesheet`, the content is parsed as a comment in HTML documents. This applies whether the markup is in the original HTML or inserted via {{domxref("Element.innerHTML")}}:

  ```html-nolint
  <!-- Parsed as Comment, not ProcessingInstruction, in HTML -->
  <?xml-stylesheet type="text/css" href="style.css"?>
  ```

  To apply styles in HTML, use {{HTMLElement("link")}} or {{HTMLElement("style")}} instead. `xml-stylesheet` processing instructions are meaningful only in XML.

> [!NOTE]
> In browsers that do not support `ProcessingInstruction` in HTML, the markup is still ignored for rendering but appears as a `Comment` node in the DOM. Feature detection is not typically needed, but you can check `pi instanceof ProcessingInstruction` after parsing.

### Where processing instructions can appear

Processing instructions are leaf nodes and can be children of {{domxref("Document")}}, {{domxref("DocumentFragment")}}, and {{domxref("Element")}} — similar to comments. They do not cause nesting and do not have end tags; `<?start>` and `<?end>` are two separate nodes with no parent-child relationship, even when used as a pair for patching (see below).

## Using processing instructions for declarative template patching

The primary HTML use case for processing instructions today is declarative {{glossary("Out_of_order_patching", "out-of-order patching")}} with {{HTMLElement("template")}} (`<template for="">`), which enables streaming HTML where placeholders are replaced once the template is parsed.

This feature is experimental — see {{HTMLElement("template")}} for browser compatibility.

### Markers

Patching uses `name`-based markers:

- `<?marker name="identifier">` — a single-point marker replaced by the template contents.
- `<?start name="identifier">` ... `<?end>` — a range marker where the start, end, and everything between them is replaced by the template contents. The `<?end>` marker has no attributes.

Markers are identified by the `name` attribute, accessed via `pi.getAttribute("name")` or `pi.data`.

### Patching with `<?marker>`

```html-nolint
<body>
  <div>
    <?marker name="placeholder">
  </div>
  <!-- ... later in the stream ... -->
  <template for="placeholder">Lorem Ipsum...</template>
</body>
```

Initially an empty `<div>` is rendered. After the `<template for="placeholder">` is parsed, the `<?marker>` node is replaced with `Lorem Ipsum...`, resulting in:

```html-nolint
<div>
  Lorem Ipsum...
</div>
```

### Range patching with `<?start>` and `<?end>`

Use `<?start>` / `<?end>` to show temporary content until the template arrives:

```html-nolint
<body>
  <div>
    <?start name="placeholder">
    Loading...
    <?end>
  </div>
  <!-- ... later ... -->
  <template for="placeholder">Lorem Ipsum...</template>
</body>
```

Before patching, `Loading...` is visible. After the template is processed, the entire range including both markers and the placeholder text is replaced with `Lorem Ipsum...`.

The `Loading...` text is not a child of the processing instruction — all three (`<?start>`, text, `<?end>`) are siblings.

### Scope and `<head>` patching

To prevent unrelated components from patching each other, `<template for="">` can only patch markers inside its parent DOM tree. The exception is direct children of {{HTMLElement("body")}} — they can patch {{HTMLElement("head")}} markers, which allows streaming updates to {{HTMLElement("title")}} and metadata:

```html-nolint
<head>
  <?start name="title"><title>Loading...</title><?end>
</head>
<body>
  <template for="title"><title>The actual title</title></template>
</body>
```

After parsing:

```html-nolint
<head>
  <title>The actual title</title>
</head>
```

### Re-patching

You can place new markers inside a `<template for="">` to allow the same region to be patched again later:

```html-nolint
<head>
  <?start name="title"><title>Loading...</title><?end>
</head>
<body>
  <template for="title"><?start name="title"><title>Route A</title><?end></template>
  <!-- later, via script or streamed HTML -->
  <template for="title"><title>Route B</title></template>
</body>
```

If a `for` attribute does not match any existing marker `name`, the template contents remain inert in the DOM and are not displayed.

## Limitations and considerations

- **Leaf nodes, no nesting:** Processing instructions never have children. `<?start>` does not contain the content that follows it in the DOM tree.
- **Invisible:** They do not render visually; `<?start>` / `<?end>` content is visible only because it is normal text/DOM between the markers.
- **Ignored when unknown:** Applications that do not recognize a target safely ignore the node — which is why `<?marker>` degrades to an invisible placeholder in browsers without patching support.
- **Not elements:** They are not matched by CSS selectors and do not have attributes in the element sense; use the `ProcessingInstruction` attribute methods to work with `data`.

## Specifications

{{Specifications}}

## See also

- {{domxref("ProcessingInstruction")}} interface
- {{domxref("Document.createProcessingInstruction()")}}
- {{HTMLElement("template")}} — declarative shadow DOM and patching
- [HTML parsing — processing instruction target state](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state)
- [DOM Standard](https://dom.spec.whatwg.org/#processinginstruction)
- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
