---
title: "CSSFontFeatureValuesMap: delete() method"
short-title: delete()
slug: Web/API/CSSFontFeatureValuesMap/delete
page-type: web-api-instance-method
browser-compat: api.CSSFontFeatureValuesMap.delete
---

{{APIRef("CSSOM")}}

The **`delete()`** method of the {{domxref("CSSFontFeatureValuesMap")}}
interface removes the CSS declaration with the given property in the `CSSFontFeatureValuesMap`.

## Syntax

```js-nolint
delete(property)
```

### Parameters

- `property`
  - : An identifier indicating the declaration to remove.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example deletes the first declaration within the [`@swash`](/en-US/docs/Web/CSS/Reference/At-rules/@font-feature-values#swash) feature block.

```css
@font-feature-values "MonteCarlo" {
  @swash {
    swishy: 1;
    swashy: 2;
  }
}
```

```js
// get the rules
const myRule = document.styleSheets[0].cssRules[0];
console.log(myRule.swash.has("swishy")); // logs true
myRule.swash.delete("swishy");
console.log(myRule.swash.has("swishy")); // logs false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Map.prototype.delete()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)
