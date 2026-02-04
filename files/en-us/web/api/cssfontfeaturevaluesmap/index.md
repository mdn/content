---
title: CSSFontFeatureValuesMap
slug: Web/API/CSSFontFeatureValuesMap
page-type: web-api-interface
browser-compat: api.CSSFontFeatureValuesMap
---

{{APIRef("CSSOM")}}

The **`CSSFontFeatureValuesMap`** interface of the [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) represents an iterable and read-only set of font feature parameters.

An `CSSFontFeatureValuesMap` instance is a read-only [Map-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in which each key is the user-defined-ident and the corresponding value is an index for the font feature it relates to.

## Instance property

- {{domxref('CSSFontFeatureValuesMap.size')}}
  - : Returns an unsigned long integer containing the size of the `CSSFontFeatureValuesMap` object.

## Instance Method

- {{domxref('CSSFontFeatureValuesMap.clear()')}}
  - : Removes all declarations in the `CSSFontFeatureValuesMap`.
- {{domxref('CSSFontFeatureValuesMap.delete()')}}
  - : Removes the CSS declaration with the given property in the `CSSFontFeatureValuesMap`.
- {{domxref('CSSFontFeatureValuesMap.entries()')}}
  - : Returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `[key, value]` pairs for each declaration in this `CSSFontFeatureValuesMap` in insertion order.
- {{domxref('CSSFontFeatureValuesMap.forEach()')}}
  - : Executes a provided function once per each key/value pair in this `CSSFontFeatureValuesMap` in insertion order.
- {{domxref('CSSFontFeatureValuesMap.get()')}}
  - : Returns value corresponding to the key in this `CSSFontFeatureValuesMap`, or `undefined` if there is none.
- {{domxref('CSSFontFeatureValuesMap.has()')}}
  - : Returns a boolean indicating whether an entry with the specified key exists in this `CSSFontFeatureValuesMap` or not.
- {{domxref('CSSFontFeatureValuesMap.keys()')}}
  - : Returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `key` for each declaration in this `CSSFontFeatureValuesMap` in insertion order.
- {{domxref('CSSFontFeatureValuesMap.set()')}}
  - : Adds a new entry with a specified key and value to this `CSSFontFeatureValuesMap`, or updates an existing entry if the key already exists.
- {{domxref('CSSFontFeatureValuesMap.values()')}}
  - : Returns a new [map iterator](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator) object that contains the `value` for each declaration in this `CSSFontFeatureValuesMap` in insertion order.
- [`CSSFontFeatureValuesMap.[Symbol.iterator]()`](/en-US/docs/Web/API/CSSFontFeatureValuesMap/Symbol.iterator)
  - : Returns the iterator object itself. This allows iterator objects to also be iterable.

## Examples

### Logging user-defined names

This example logs the names, [`keys`](/en-US/docs/Web/API/CSSFontFeatureValuesMap/keys), the user has assigned for use in {{cssxref("font-variant-alternates")}} for the [`@styleset`](/en-US/docs/Web/API/CSSFontFeatureValuesRule/styleset) property.

#### HTML

```html
<pre id="log">Your Browser does not support <strong>CSSFontFeatureValuesMap.styleset</strong> property</pre>
```

#### CSS

```css
/* At-rule for "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* Apply the at-rules with a single declaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

#### JavaScript

```js
const log = document.querySelector("#log");
const rules = document.querySelector("#css-output").sheet.cssRules;
const fontOne = rules[0]; // A CSSFontFeatureValuesRule
if (fontOne.styleset) { // check to see if styleset property is supported
  log.textContent = `The user has defined a name for styleset called: "${fontOne.styleset.keys().next().value}".`;
};
```

#### Result

{{EmbedLiveSample("Logging_user-defined_names", "100%", "75px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-feature-values")}}
