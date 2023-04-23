---
title: "Document: createComment() method"
short-title: createComment()
slug: Web/API/Document/createComment
page-type: web-api-instance-method
browser-compat: api.Document.createComment
---

{{APIRef("DOM")}}

**`createComment()`** creates a new comment node, and returns
it.

## Syntax

```js-nolint
createComment(data)
```

### Parameters

- `data`
  - : A string containing the data to be added to the Comment.

### Return value

A new {{domxref("Comment")}} object.

## Examples

```js
const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
const comment = docu.createComment(
  "This is a not-so-secret comment in your document"
);

docu.querySelector("xml").appendChild(comment);

console.log(new XMLSerializer().serializeToString(docu));
// Displays: <xml><!--This is a not-so-secret comment in your document--></xml>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
