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
```

You should get a {{domxref("FragmentDirective")}} object instance returned with a structure similar to the following:

```js
items: [
  {
    prefix: "",
    textStart: "Module Workers",
    textEnd: "",
    suffix: "support",
    type: "text",
  },
  {
    prefix: "feedback on",
    textStart: "usability",
    textEnd: "",
    suffix: "",
    type: "text",
  },
];
```

This functionality is mainly intended for feature detection at present, but in future, it could be expanded to include other information such as translation hints.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Text fragments](/en-US/docs/Web/Text_fragments)
- {{cssxref("::target-text")}}
