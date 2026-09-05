---
title: StylePropertyMapReadOnly
slug: Web/API/StylePropertyMapReadOnly
page-type: web-api-interface
browser-compat: api.StylePropertyMapReadOnly
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`StylePropertyMapReadOnly`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) provides a read-only representation of a CSS declaration block.

This exposes each value as a typed {{domxref("CSSStyleValue")}} object (such as a {{domxref("CSSUnitValue")}} with a numeric `value` and a `unit`), so it can be read without parsing.
It can be obtained from an element using {{domxref('Element.computedStyleMap','Element.computedStyleMap()')}}.

Note that this is an alternative to {{domxref("CSSStyleDeclaration")}}, which represents every value as a string (e.g., `"10px"`).

## Instance properties

- {{domxref('StylePropertyMapReadOnly.size')}} {{ReadOnlyInline}}
  - : Returns a non-negative integer containing the number of declarations in the `StylePropertyMapReadOnly` object.

## Instance methods

- {{domxref('StylePropertyMapReadOnly.entries()')}}
  - : Returns a new iterator that yields `[property, values]` pairs for each declaration in the object.
- {{domxref('StylePropertyMapReadOnly.forEach()')}}
  - : Executes a provided function once for each declaration in the object.
- {{domxref('StylePropertyMapReadOnly.get()')}}
  - : Returns the value of the specified property.
- {{domxref('StylePropertyMapReadOnly.getAll()')}}
  - : Returns an array of {{domxref("CSSStyleValue")}} objects containing the values for the provided property.
- {{domxref('StylePropertyMapReadOnly.has()')}}
  - : Indicates whether the specified property is in the `StylePropertyMapReadOnly` object.
- {{domxref('StylePropertyMapReadOnly.keys()')}}
  - : Returns a new iterator that yields the CSS property name of each declaration in the object.
- {{domxref('StylePropertyMapReadOnly.values()')}}
  - : Returns a new iterator that yields the values of each declaration in the object.

## Examples

### Basic usage

We have to have an element to observe:

```html
<p>
  This is a paragraph with some text. We can add some CSS, or not. The style map
  will include all the default and inherited CSS property values.
</p>
<dl id="output"></dl>
```

We add a touch of CSS with a custom property to better demonstrate the output:

```css
p {
  --some-variable: 1.6em;
  --some-other-variable: translateX(33vw);
  --another-variable: 42;
  line-height: var(--some-variable);
}
```

We add JavaScript to grab our paragraph and return back a definition list of all the default CSS property values using {{domxref('Element.computedStyleMap()')}}.

```js
// get the element
const myElement = document.querySelector("p");

// get the <dl> we'll be populating
const stylesList = document.querySelector("#output");

// Retrieve all computed styles with computedStyleMap()
const stylePropertyMap = myElement.computedStyleMap();

// iterate through the map of all the properties and values, adding a <dt> and <dd> for each
for (const [prop, val] of stylePropertyMap) {
  // properties
  const cssProperty = document.createElement("dt");
  cssProperty.innerText = prop;
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement("dd");
  cssValue.innerText = val;
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample("Examples", 120, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("StylePropertyMap")}}
- {{domxref("Element.computedStyleMap()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
