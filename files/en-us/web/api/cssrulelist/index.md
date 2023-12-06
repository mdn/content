---
title: CSSRuleList
slug: Web/API/CSSRuleList
page-type: web-api-interface
browser-compat: api.CSSRuleList
---

{{ APIRef("CSSOM") }}

A `CSSRuleList` represents an ordered collection of read-only {{domxref("CSSRule")}} objects.

While the `CSSRuleList` object is read-only, and cannot be directly modified, it is considered a `live` object, as the content can change over time.

To edit the underlying rules returned by `CSSRule` objects, use {{domxref("CSSStyleSheet.insertRule()")}} and {{domxref("CSSStyleSheet.deleteRule()")}}, which are methods of {{domxref("CSSStyleSheet")}}.

The interface has no constructor. An instance of `CSSRuleList` is returned by {{domxref("CSSStyleSheet.cssRules")}} and {{domxref("CSSKeyframesRule.cssRules")}}.

> **Note:** This interface was an [attempt to create an unmodifiable list](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only continues to be supported to not break code that's already using it. Modern APIs use types that wrap around ECMAScript array types instead, so you can treat them like ECMAScript arrays, and at the same time impose additional semantics on their usage (such as making their items read-only).

## Instance properties

- {{domxref("CSSRuleList.length")}} {{ReadOnlyInline}}
  - : Returns an integer representing the number of {{domxref("CSSRule")}} objects in the collection.

## Instance methods

- {{domxref("CSSRuleList.item()")}}
  - : Gets a single {{domxref("CSSRule")}}.

## Examples

In the following example there is a stylesheet with three rules. Using {{domxref("CSSStyleSheet.cssRules")}} returns a `CSSRuleList`, which is printed to the console.

The number of rules in the list is printed to the console using {{domxref("CSSRuleList.length")}}. The first {{domxref("CSSRule")}} can be returned by using `0` as the parameter for {{domxref("CSSRuleList.item")}}, in the example this will return the rules set for the `body` selector.

### CSS

```css
body {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  margin: 2em;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
}

.container > * {
  background-color: #3740ff;
  color: #fff;
}
```

### JavaScript

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules);
console.log(myRules.length);
console.log(myRules[0]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`CSSRule`](/en-US/docs/Web/API/CSSRule)
