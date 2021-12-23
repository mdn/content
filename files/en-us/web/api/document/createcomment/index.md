---
title: Document.createComment()
slug: Web/API/Document/createComment
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Document.createComment
---
{{APIRef("DOM")}}

**`createComment()`** creates a new comment node, and returns
it.

## Syntax

```js
CommentNode = document.createComment(data);
```

### Parameters

- _data_
  - : A string containing the data to be added to the Comment.

## Example

```js
var docu = new DOMParser().parseFromString('<xml></xml>',  'application/xml');
var comment = docu.createComment('This is a not-so-secret comment in your document');

docu.getElementsByTagName('xml')[0].appendChild(comment);

alert(new XMLSerializer().serializeToString(docu));
// Displays: <xml><!--This is a not-so-secret comment in your document--></xml>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
