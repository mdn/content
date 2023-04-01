---
title: Element.computedStyleMap()
slug: Web/API/Element/computedStyleMap
page-type: web-api-instance-method
browser-compat: api.Element.computedStyleMap
---

{{APIRef("CSS Typed Object Model API")}}

The **`computedStyleMap()`** method of
the {{domxref("Element")}} interface returns a {{domxref("StylePropertyMapReadOnly")}}
interface which provides a read-only representation of a CSS declaration block that is
an alternative to {{domxref("CSSStyleDeclaration")}}.

## Syntax

```js-nolint
computedStyleMap()
```

### Parameters

None.

### Return value

A {{domxref("StylePropertyMapReadOnly")}} interface.

## Examples

We start with some simple HTML: a paragraph with a link, and a definition list to which
we will add all the CSS Property / Value pairs.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

We add a little bit of CSS

```css
a {
  --color: red;
  color: var(--color);
}
```

We add JavaScript to grab our link and return back a definition list of all the CSS
property values using `computedStyleMap().`

```js
// get the element
const myElement = document.querySelector("a");

// get the <dl> we'll be populating
const stylesList = document.querySelector("#regurgitation");

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// iterate thru the map of all the properties and values, adding a <dt> and <dd> for each
for (const [prop, val] of allComputedStyles) {
  // properties
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // values
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

In [browsers that support `computedStyleMap()`](#browser_compatibility),
you'll see a list of all the CSS properties and values.
In other browsers you'll just see a link.

{{EmbedLiveSample("Examples", 300, 300)}}

Did you realize how many default CSS properties a link had? Update the '`a`'
to the '`p`', and you'll notice a difference in the `margin-top`
and `margin-bottom` default computed values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
