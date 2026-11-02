---
title: "MathMLAnchorElement: relList property"
short-title: relList
slug: Web/API/MathMLAnchorElement/relList
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.MathMLAnchorElement.relList
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

The **`relList`** read-only property of the {{domxref("MathMLAnchorElement")}} interface returns a live {{domxref("DOMTokenList")}} object containing the set of link types indicating the relationship between the resource represented by the link and the current document.

## Value

A live {{domxref("DOMTokenList")}} object.

Although the `relList` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `relList` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property. You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" rel="help alternate">...</a>
</math>
```

you can use the `relList` property to access the individual {{domxref("MathMLAnchorElement.rel", "rel")}} values like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.relList[0]; // "help"
mathAnchor.relList[1]; // "alternate"
```

You can also change the contained values using `DOMTokenList` features, like this:

```js
mathAnchor.relList.value = "author bookmark";
mathAnchor.relList.add("me");
```

Because the `DOMTokenList` is live, `mathAnchor.rel` will now return the value `author bookmark me`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
- {{domxref("MathMLAnchorElement.rel")}}
- [`rel` HTML attribute](/en-US/docs/Web/HTML/Reference/Attributes/rel)
