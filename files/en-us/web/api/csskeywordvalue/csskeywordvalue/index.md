---
title: CSSKeywordValue()
slug: Web/API/CSSKeywordValue/CSSKeywordValue
tags:
  - API
  - CSS Typed Object Model API
  - CSSKeywordValue
  - Constructor
  - Experimental
  - Houdini
  - Reference
browser-compat: api.CSSKeywordValue.CSSKeywordValue
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSKeywordValue()`** constructor
creates a new {{domxref("CSSKeywordValue")}} object which represents CSS keywords and
other identifiers.

## Syntax

```js
var cssKeywordValue = new CSSKeywordValue(val)
```

### Parameters

- value
  - : Sets or returns the value of the new `CSSKeywordValue`.

### Exceptions

- `TypeError`
  - : If the `value` parameter is not specified or it is not of type {{jsxref('String')}}.

## Examples

The following example resets the CSS {{cssxref('display')}} property to its defaults,
setting the inline
[`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute
to `style="display: initial"` if viewed in the [developer tools
inspector](/en-US/docs/Tools/Page_Inspector/How_to/Select_an_element).

```css hidden
#myElement {
  display: flex;
}
```

```html hidden
<div id="myElement">Check the developer tools to see the log in the console and to inspect the style attribute on this div.</div>
```

```js
let keyword = new CSSKeywordValue('initial');
let myElement = document.getElementById('myElement').attributeStyleMap;
    myElement.set('display', keyword);

console.log( myElement.get('display').value);  // 'initial'
console.dir( keyword );
```

{{EmbedLiveSample("Examples", 120, 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
