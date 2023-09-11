---
title: StyleSheetList
slug: Web/API/StyleSheetList
page-type: web-api-interface
browser-compat: api.StyleSheetList
---

{{APIRef("CSSOM")}}

The `StyleSheetList` interface represents a list of {{domxref("CSSStyleSheet")}} objects. An instance of this object can be returned by {{domxref("Document.styleSheets")}}.

It is an array-like object but can't be iterated over using {{jsxref("Array")}} methods. However it can be iterated over in a standard {{jsxref("Statements/for", "for")}} loop over its indices, or converted to an {{jsxref("Array")}}.

> **Note:** This interface was an [attempt to create an unmodifiable list](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only continues to be supported to not break code that's already using it. Modern APIs use types that wrap around ECMAScript array types instead, so you can treat them like ECMAScript arrays, and at the same time impose additional semantics on their usage (such as making their items read-only).

## Instance properties

- {{domxref("StyleSheetList.length")}} {{ReadOnlyInline}}
  - : Returns the number of {{domxref("CSSStyleSheet")}} objects in the collection.

## Instance methods

- {{domxref("StyleSheetList.item()")}}
  - : Returns the {{domxref("CSSStyleSheet")}} object at the index passed in, or `null` if no item exists for that index.

## Examples

### Get CSSStyleSheet objects with for loop

```js
const styleSheet = [];
const styleSheets = document.styleSheets;

for (let i = 0; i < styleSheets.length; i++) {
  styleSheet.push(styleSheets[i]);
}
```

### Get all CSS rules for the document using Array methods

```js
const allCSS = [...document.styleSheets]
  .map((styleSheet) => {
    try {
      return [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
    } catch (e) {
      console.log(
        "Access to stylesheet %s is denied. Ignoring…",
        styleSheet.href,
      );
    }
  })
  .filter(Boolean)
  .join("\n");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
