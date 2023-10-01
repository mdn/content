---
title: "Range: createContextualFragment() method"
short-title: createContextualFragment()
slug: Web/API/Range/createContextualFragment
page-type: web-api-instance-method
browser-compat: api.Range.createContextualFragment
---

{{ApiRef("DOM")}}

The **`Range.createContextualFragment()`** method returns a
{{domxref("DocumentFragment")}} by invoking the HTML fragment parsing algorithm or the
XML fragment parsing algorithm with the start of the range (the _parent_ of the
selected node) as the context node. The HTML fragment parsing algorithm is used if the
range belongs to a `Document` whose HTMLness bit is set. In the HTML case, if
the context node would be `html`, for historical reasons the fragment parsing
algorithm is invoked with `body` as the context instead.

## Syntax

```js-nolint
createContextualFragment(tagString)
```

### Parameters

- `tagString`
  - : Text that contains text and tags to be converted to a document fragment.

### Return value

A {{domxref("DocumentFragment")}} object.

## Examples

```js
const tagString = "<div>I am a div node</div>";
const range = document.createRange();

// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(tagString);
document.body.appendChild(documentFragment);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
