---
title: Comment()
slug: Web/API/Comment/Comment
tags:
  - API
  - Comment
  - Constructor
  - DOM
browser-compat: api.Comment.Comment
---
{{ApiRef("DOM")}}{{SeeCompatTable}}

The **`Comment()`** constructor returns a newly created
{{domxref("Comment")}} object with the optional {{domxref("DOMString")}} given in
parameter as its textual content.

## Syntax

```js
comment1 = new Comment(); // Create an empty comment
comment2 = new Comment("This is a comment");
```

## Example

```js
var comment = new Comment("Test");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

> **Note:** For browsers where this constructor is not supported,
> {{domxref("Document.createComment()")}} may be suitable.

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
