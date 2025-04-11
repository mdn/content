---
title: "Element: computedStyleMap() method"
short-title: computedStyleMap()
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

A {{domxref("StylePropertyMapReadOnly")}} object.

Unlike {{domxref("Window.getComputedStyle")}}, the return value contains [computed values](/en-US/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), not [resolved values](/en-US/docs/Web/CSS/Value_processing#resolved_value). For most properties, they are the same, except a few layout-related properties, where the resolved value is the [used value](/en-US/docs/Web/CSS/Value_processing#used_value) instead of the computed value. See the [difference with `getComputedStyle()`](#difference_with_getcomputedstyle) example for details.

## Examples

### Getting default styles

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

// iterate through the map of all the properties and values, adding a <dt> and <dd> for each
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

{{EmbedLiveSample("getting_default_styles", 300, 300)}}

Did you realize how many default CSS properties a link had? Update the `document.querySelector("a")`
to `document.querySelector("p")`, and you'll notice a difference in the `margin-top`
and `margin-bottom` default computed values.

### Difference with getComputedStyle()

{{domxref("Window.getComputedStyle()")}} returns resolved values, which are usually the same as computed values (as `computedStyleMap()` does), but for some properties, they are the used values instead. For example, percentage values for widths are resolved to pixel values _post-layout_, so the used values are in pixels, while the computed values are still in percentages.

Note that the way we present it makes the two APIs seem more similar than they are. `computedStyleMap()` contains [CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API) objects, while `getComputedStyle()` contains strings. The former presents the same information in a more structured and processable way.

```html
<div class="container">
  <div class="item"></div>
</div>
<pre id="result"></pre>
```

```css
.container {
  width: 200px;
  height: 200px;
}

.item {
  width: 50%;
  height: 100px;
  background-color: tomato;
}
```

```js
const item = document.querySelector(".item");
const result = document.querySelector("#result");
const resolvedValues = getComputedStyle(item);
const computedValues = item.computedStyleMap();

result.textContent = `resolvedValues.width = ${resolvedValues.width}
computedValues.get("width") = ${computedValues.get("width")}
resolvedValues.height = ${resolvedValues.height}
computedValues.get("height") = ${computedValues.get("height")}
resolvedValues.backgroundColor = ${resolvedValues.backgroundColor}
computedValues.get("background-color") = ${computedValues.get(
  "background-color",
)}`;
```

{{EmbedLiveSample("difference_with_getcomputedstyle", 300, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.getComputedStyle()")}}
