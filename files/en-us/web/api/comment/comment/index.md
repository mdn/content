---
title: "Comment: Comment() constructor"
short-title: Comment()
slug: Web/API/Comment/Comment
page-type: web-api-constructor
browser-compat: api.Comment.Comment
---

{{ApiRef("DOM")}}

The **`Comment()`** constructor returns a newly created
{{domxref("Comment")}} object with the optional string given in
parameter as its textual content.

## Syntax

```js-nolint
new Comment()
new Comment(aString)
```

### Parameters

- `aString` {{optional_inline}}

### Return value

A new {{domxref("Comment")}} containing `aString`, or the empty string if no parameter was given.

## Example

```js
let comment = new Comment("Test");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
- {{domxref("Document.createComment()")}} is an outdated alternative to this constructor.
