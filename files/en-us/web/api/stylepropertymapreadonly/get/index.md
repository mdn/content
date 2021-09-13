---
title: StylePropertyMapReadOnly.get()
slug: Web/API/StylePropertyMapReadOnly/get
tags:
  - API
  - CSS Typed Object Model API
  - Experimental
  - Houdini
  - Method
  - Reference
  - get()
browser-compat: api.StylePropertyMapReadOnly.get
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`get()`** method of the
{{domxref("StylePropertyMapReadOnly")}} interface returns a {{domxref("CSSStyleValue")}}
object for the first value of the specified property.

## Syntax

```js
var declarationBlock = StylePropertyMapReadOnly.get(property)
```

### Parameters

- property
  - : The name of the property to retrieve the value of.

### Return value

A {{domxref("CSSStyleValue")}} object.

## Examples

Let's get just a few properties and values. Let's start by creating a link inside a
paragraph in our HTML, and adding a definition list which we will populate with
JavaScript:

```html
<p>
   <a href="https://example.com">Link</a>
</p>
<dl id="results"></dl>
```

We add a bit of CSS, including a custom property and an inheritable property:

```css
p {
  font-weight: bold;
}
a {
   --color: red;
   color: var(--color);
}
```

We use the Element's
[`computedStyleMap()`](/en-US/docs/Web/API/Element/computedStyleMap)
to return a _StylePropertyMapReadOnly_ object. We create an array of properties
of interest and use the StylePropertyMapReadOnly's `get()` method to get only
those values.

```js
// get the element
const myElement = document.querySelector('a');

// Retrieve all computed styles with computedStyleMap()
const styleMap = myElement.computedStyleMap();

// get the <dl> we'll be populating
const stylesList = document.querySelector('#results');

// array of properties we're interested in
const ofInterest = ['font-weight', 'border-left-color', 'color', '--color'];

// iterate over our properties of interest
for ( let i = 0; i < ofInterest.length; i++ ) {

  // properties
  const cssProperty = document.createElement('dt');
  cssProperty.innerText = ofInterest[i];
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement('dd');
  // use get() to find the value
  cssValue.innerText = styleMap.get(ofInterest[i]);
  stylesList.appendChild(cssValue);
}
```

{{EmbedLiveSample("Examples", 120, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Typed Object Model API](/en-US/docs/Web/Houdini/CSS_Typed_OM)
- [Learning Houdini: the CSS Typed
  Object Model](/en-US/docs/Web/Houdini/learn/CSS_Typed_OM)
