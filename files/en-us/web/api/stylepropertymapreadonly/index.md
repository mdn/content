---
title: StylePropertyMapReadOnly
slug: Web/API/StylePropertyMapReadOnly
page-type: web-api-interface
browser-compat: api.StylePropertyMapReadOnly
---

{{APIRef("CSS Typed Object Model API")}}

The **`StylePropertyMapReadOnly`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model#css_typed_object_model) provides a read-only representation of a CSS declaration block that is an alternative to {{domxref("CSSStyleDeclaration")}}. Retrieve an instance of this interface using {{domxref('Element.computedStyleMap','Element.computedStyleMap()')}}.

## Instance properties

- {{domxref('StylePropertyMapReadOnly.size')}}
  - : Returns an unsigned long integer containing the size of the `StylePropertyMapReadOnly` object.

## Instance methods

- {{domxref('StylePropertyMapReadOnly.entries()')}}
  - : Returns an array of a given object's own enumerable property `[key, value]` pairs, in the same order as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
- {{domxref('StylePropertyMapReadOnly.forEach()')}}
  - : Executes a provided function once for each element of `StylePropertyMapReadOnly`.
- {{domxref('StylePropertyMapReadOnly.get()')}}
  - : Returns the value of the specified property.
- {{domxref('StylePropertyMapReadOnly.getAll()')}}
  - : Returns an array of {{domxref("CSSStyleValue")}} objects containing the values for the provided property.
- {{domxref('StylePropertyMapReadOnly.has()')}}
  - : Indicates whether the specified property is in the `StylePropertyMapReadOnly` object.
- {{domxref('StylePropertyMapReadOnly.keys()')}}
  - : Returns a new _array iterator_ containing the keys for each item in `StylePropertyMapReadOnly`.
- {{domxref('StylePropertyMapReadOnly.values()')}}
  - : Returns a new _array iterator_ containing the values for each index in the `StylePropertyMapReadOnly` object.

## Examples

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
  --someVariable: 1.6em;
  --someOtherVariable: translateX(33vw);
  --anotherVariable: 42;
  line-height: var(--someVariable);
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

// iterate thru the map of all the properties and values, adding a <dt> and <dd> for each
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
