---
title: Comment
slug: Web/API/Comment
page-type: web-api-interface
tags:
  - Interface
  - Reference
browser-compat: api.Comment
---
{{ ApiRef("DOM") }}

The **`Comment`** interface represents textual notations within markup; although it is generally not visually shown, such comments are available to be read in the source view.

Comments are represented in HTML and XML as content between '`<!--`' and '`-->`'. In XML, like inside SVG or MathML markup, the character sequence '`--`' cannot be used within a comment.

{{InheritanceDiagram}}

## Properties

_This interface has no specific property, but inherits those of its parent, {{domxref("CharacterData")}}, and indirectly those of {{domxref("Node")}}._

## Constructor

- {{ domxref("Comment.Comment()", "Comment()") }}
  - : Returns a new `Comment` object with the parameter as its textual content. If not present, its default value is the empty string, `''`.

## Methods

_This interface has no specific method, but inherits those of its parent, {{domxref("CharacterData")}}, and indirectly those of {{domxref("Node")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM API](/en-US/docs/Web/API/Document_Object_Model)
