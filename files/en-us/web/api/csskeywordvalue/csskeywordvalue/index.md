---
title: CSSKeywordValue()
slug: Web/API/CSSKeywordValue/CSSKeywordValue
page-type: web-api-constructor
browser-compat: api.CSSKeywordValue.CSSKeywordValue
---

{{APIRef("CSS Typed Object Model API")}}

The **`CSSKeywordValue()`** constructor
creates a new {{domxref("CSSKeywordValue")}} object which represents CSS keywords and
other identifiers.

## Syntax

```js-nolint
new CSSKeywordValue(val)
```

### Parameters

- `value`
  - : Sets or returns the value of the new `CSSKeywordValue`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `value` parameter is not specified or it is not of type {{jsxref('String')}}.

## Examples

The following example resets the CSS {{cssxref('display')}} property to its defaults,
setting the inline
[`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute
to `style="display: initial"` if viewed in the [developer tools inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/select_an_element/index.html).

```css hidden
#myElement {
  display: flex;
}
```

```html hidden
<div id="myElement">
  Check the developer tools to see the log in the console and to inspect the
  style attribute on this div.
</div>
```

```js
const keyword = new CSSKeywordValue("initial");
const myElement = document.getElementById("myElement").attributeStyleMap;
myElement.set("display", keyword);

console.log(myElement.get("display").value); // 'initial'
console.dir(keyword);
```

{{EmbedLiveSample("Examples", 120, 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
