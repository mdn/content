---
title: FragmentDirective
slug: Web/API/FragmentDirective
page-type: web-api-interface
status:
  - experimental
browser-compat: api.FragmentDirective
---

{{SeeCompatTable}}

The **`FragmentDirective`** interface is an object representing the text fragments highlighted in the current document.

It is accessed via the {{domxref("Document.fragmentDirective")}} property.

## Instance properties

None.

## Instance methods

None.

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
