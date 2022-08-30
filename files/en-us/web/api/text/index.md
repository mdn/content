---
title: Text
slug: Web/API/Text
page-type: web-api-interface
tags:
  - Interface
  - Reference
browser-compat: api.Text
---
{{ApiRef("DOM")}}

The **`Text`** interface represents a text {{domxref("Node", "node")}} in a DOM tree.

{{InheritanceDiagram}}

To understand what a text node is, consider the following document:

```html
<html lang="en" class="e">
  <head>
    <title>Aliens?</title>
  </head>
  <body>
    Why yes.
  </body>
</html>
```

In that document, there are three text nodes, with the following contents:

- "`Aliens?`" (the contents of the `title` element)
- "`\n`" (after the `</head>` end tag, a newline followed by a space)
- "`Why yes.\n`" (the contents of the `body` element)

Each of those text nodes is an object that has the properties and methods documented in this article.

## Constructor

- {{domxref("Text.Text", "Text()")}}
  - : Returns a new `Text` node with the parameter as its textual content.

## Properties

_Inherits properties from its parents, {{domxref("CharacterData")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}._

- {{domxref("Text.assignedSlot")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("HTMLSlotElement")}} representing the {{htmlelement("slot")}} the node is inserted in.
- {{domxref("Text.wholeText")}} {{ReadOnlyInline}}
  - : Returns a string containing the text of all `Text` nodes logically adjacent to this {{domxref("Node")}}, concatenated in document order.

## Methods

_Inherits methods from its parent, {{domxref("CharacterData")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}._

- {{domxref("Text.splitText")}}
  - : Breaks the node into two nodes at a specified offset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM API](/en-US/docs/Web/API/Document_Object_Model)
