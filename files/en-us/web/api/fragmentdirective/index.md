---
title: FragmentDirective
slug: Web/API/FragmentDirective
page-type: web-api-interface
status:
  - experimental
browser-compat: api.FragmentDirective
---

{{SeeCompatTable}}

The **`FragmentDirective`** interface is an object exposed for feature detectability, that is, whether or not a browser supports text fragments.

It is accessed via the {{domxref("Document.fragmentDirective")}} property.

## Instance properties

None.

## Instance methods

None.

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
