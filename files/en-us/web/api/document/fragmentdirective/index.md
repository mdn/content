---
title: "Document: fragmentDirective property"
short-title: fragmentDirective
slug: Web/API/Document/fragmentDirective
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Document.fragmentDirective
---

{{APIRef}}{{SeeCompatTable}}

The **`fragmentDirective`** read-only property of the {{domxref("Document")}} interface returns the {{domxref("FragmentDirective")}} for the current document.

## Value

A {{domxref("FragmentDirective")}} object.

## Examples

Try running the following in a supporting browser's devtools, in a tab with one or more matched text fragments:

```js
document.fragmentDirective;
// returns an empty FragmentDirective object, if supported
// undefined otherwise
```

This functionality is mainly intended for feature detection at present. In the future, the `FragmentDirective` object could include additional information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Text fragments](/en-US/docs/Web/Text_fragments)
- {{cssxref("::target-text")}}
