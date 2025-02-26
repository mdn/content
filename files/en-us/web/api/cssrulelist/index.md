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

This interface was an [attempt to create an unmodifiable list](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only continues to be supported to not break code that's already using it. Modern APIs represent list structures using types based on JavaScript [arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), thus making many array methods available, and at the same time imposing additional semantics on their usage (such as making their items read-only).

These historical reasons do not mean that you as a developer should avoid `CSSRuleList`. You don't create `CSSRuleList` objects yourself, but you get them from APIs such as {{domxref("CSSStyleSheet.cssRules")}} and {{domxref("CSSKeyframesRule.cssRules")}}, and these APIs are not deprecated. However, be careful of the semantic differences from a real array.

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
