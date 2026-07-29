---
title: CSSFontFeatureValuesMap
slug: Web/API/CSSFontFeatureValuesMap
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSFontFeatureValuesMap
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSFontFeatureValuesMap`** interface of the [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) represents an iterable and read-only set of the [CSSFontFeatureValuesRule](/en-US/docs/Web/API/CSSFontFeatureValuesRule) properties, such as [`swash`](/en-US/docs/Web/API/CSSFontFeatureValuesRule/swash), [`annotation`](/en-US/docs/Web/API/CSSFontFeatureValuesRule/annotation), [`ornaments`](/en-US/docs/Web/API/CSSFontFeatureValuesRule/ornaments), etc.

An `CSSFontFeatureValuesMap` instance is a read-only [Map-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in which each key is the user-defined name used to reference a font feature, and the corresponding value is the index for the font feature within the font.

## Instance properties

- {{domxref('CSSFontFeatureValuesMap.size')}} {{experimental_inline}}
  - : Returns a positive integer containing the size of the `CSSFontFeatureValuesMap` object.

## Instance methods

- {{domxref('CSSFontFeatureValuesMap.clear()')}} {{experimental_inline}}
  - : Removes all declarations in the `CSSFontFeatureValuesMap`.
- {{domxref('CSSFontFeatureValuesMap.delete()')}} {{experimental_inline}}
  - : Removes the CSS declaration with the given property in the `CSSFontFeatureValuesMap`.
- {{domxref('CSSFontFeatureValuesMap.entries()')}} {{experimental_inline}}
  - : Returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `[key, value]` pairs for each declaration in this `CSSFontFeatureValuesMap` in insertion order.
- {{domxref('CSSFontFeatureValuesMap.forEach()')}} {{experimental_inline}}
  - : Executes a provided function once per each key/value pair in this `CSSFontFeatureValuesMap` in insertion order.
- {{domxref('CSSFontFeatureValuesMap.get()')}} {{experimental_inline}}
  - : Returns value corresponding to the key in this `CSSFontFeatureValuesMap`, or `undefined` if there is none.
- {{domxref('CSSFontFeatureValuesMap.has()')}} {{experimental_inline}}
  - : Returns a boolean indicating whether an entry with the specified key exists in this `CSSFontFeatureValuesMap` or not.
- {{domxref('CSSFontFeatureValuesMap.keys()')}} {{experimental_inline}}
  - : Returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `key` for each declaration in this `CSSFontFeatureValuesMap` in insertion order.
- {{domxref('CSSFontFeatureValuesMap.set()')}} {{experimental_inline}}
  - : Adds a new entry with a specified key and value to this `CSSFontFeatureValuesMap`, or updates an existing entry if the key already exists.
- {{domxref('CSSFontFeatureValuesMap.values()')}} {{experimental_inline}}
  - : Returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `value` for each declaration in this `CSSFontFeatureValuesMap` in insertion order.
- [`CSSFontFeatureValuesMap.[Symbol.iterator]()`](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator)
  - : Returns the iterator object itself. This allows iterator objects to also be iterable.

## Examples

### Logging user-defined names

This example shows how you can log the user-defined names (and their mapped index) stored in a `CSSFontFeatureValuesMap` (for particular `CSSFontFeatureValuesRule` properties).

#### CSS

First we declare a {{cssxref("@font-feature-values")}} for the _Font One_ font family.
This includes the declaration of the names "nice-style" and "odd-style" that can be used to represent the `styleset` alternate glyphs for _Font One_ and specify the index values for those alternates.
It also includes the declaration of the name "swishy" that can be used to represent the `swash` alternate glyphs for _Font One_ and specify the index for that alternate.

The "nice-style" alternate glyphs are then applied for any `.nice-look` class, using {{CSSXRef("font-variant-alternates")}} property and passing the name to the [`styleset()`](/en-US/docs/Web/CSS/Reference/Properties/font-variant-alternates#styleset) function.
The same is done for the name "swishy" for the `swash` alternate glyphs, which is then passed to the [`swash()`](/en-US/docs/Web/CSS/Reference/Properties/font-variant-alternates#swash) function.
The "odd-style" glyphs are not used (they are just added to demonstrate that multiple values may be defined in the map.)

```css
/* At-rule for "nice-style", "odd-style", and "swishy" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12; /* name used to represent the alternate set of glyphs at index 12 */
    odd-style: 10; /* name used to represent the alternate set of glyphs at index 10 */
  }
  @swash {
    swishy: 1; /* name used to represent the alternate set of glyphs at index 1 */
  }
}

/* Apply the at-rules to the appropriate selectors */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
.swoosh {
  font-variant-alternates: swash(swishy);
}
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The code below finds the corresponding `CSSFontFeatureValuesRule` for the CSS `@font-feature-values` at-rule added above.
It then iterates the values of the `styleset` and `swash` properties, which are represented by `CSSFontFeatureValuesMap` instances, using the [`forEach()`](/en-US/docs/Web/API/CSSFontFeatureValuesMap/forEach) method.
On each step it logs the user-defined names and index values.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const rules = document.querySelector("#css-output").sheet.cssRules;
const fontOne = rules[0]; // A CSSFontFeatureValuesRule
if (fontOne.styleset) {
  // styleset property is supported
  log(
    "The user has defined the following name(s)/index(s) for CSSFontFeatureValuesRule.styleset:",
  );
  fontOne.styleset.forEach((value, key) => log(` ${key} : ${value}`));
} else {
  log("Browser does not support CSSFontFeatureValuesMap.styleset property.");
}

if (fontOne.swash) {
  log(
    "The user has defined the following name(s)/index(s) for CSSFontFeatureValuesRule.swash:",
  );
  fontOne.swash.forEach((value, key) => log(` ${key} : ${value}`));
} else {
  log("Browser does not support CSSFontFeatureValuesMap.swash property.");
}
```

#### Result

{{EmbedLiveSample("Logging user-defined names", "100%", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-feature-values")}}
