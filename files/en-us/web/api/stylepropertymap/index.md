---
title: StylePropertyMap
slug: Web/API/StylePropertyMap
page-type: web-api-interface
browser-compat: api.StylePropertyMap
---

{{APIRef("CSS Typed Object Model API")}}

The **`StylePropertyMap`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) provides a representation of a CSS declaration block that can be read and modified.

This exposes each value as a typed {{domxref("CSSStyleValue")}} object (such as a {{domxref("CSSUnitValue")}} with a numeric `value` and a `unit`), so it can be read and set without parsing or serializing strings.
It can be obtained from an element's inline style using {{domxref("HTMLElement.attributeStyleMap")}}.

Note that this is the writable counterpart to {{domxref("StylePropertyMapReadOnly")}}, which it inherits from and which is used for read-only styles (such as computed styles) — and, like its parent, an alternative to {{domxref("CSSStyleDeclaration")}}, which represents every value as a string (e.g., `"10px"`).

{{InheritanceDiagram}}

> [!NOTE]
> This interface is only available on the window thread; unlike other interfaces in this API it cannot be accessed in {{domxref("Worker")}} or {{domxref("Worklet")}} contexts.
> Worklets receive a read-only snapshot of an element's style through {{domxref("StylePropertyMapReadOnly")}}.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("StylePropertyMapReadOnly")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("StylePropertyMapReadOnly")}}._

- {{DOMxRef("StylePropertyMap.append()")}}
  - : Adds a new CSS declaration to the `StylePropertyMap` with the given property and value.
- {{DOMxRef("StylePropertyMap.clear()")}}
  - : Removes all declarations in the `StylePropertyMap`.
- {{DOMxRef("StylePropertyMap.delete()")}}
  - : Removes the CSS declaration with the given property.
- {{DOMxRef("StylePropertyMap.set()")}}
  - : Changes the CSS declaration with the given property.

## Examples

### Basic usage

This example gets a `StylePropertyMap` for a button's [style attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/style) via {{domxref("HTMLElement.attributeStyleMap")}}, then uses `set()`, `append()`, `has()`, and `delete()` to modify it.

```html
<button>Styled button</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
const buttonEl = document.querySelector("button");
const styleMap = buttonEl.attributeStyleMap;

log(`styleMap type: ${styleMap.constructor.name}`);

// set some declarations
styleMap.set("padding-top", CSS.px(10));
styleMap.set("background-color", "gold");

// add an extra background image on top of the background color
styleMap.append(
  "background-image",
  "linear-gradient(180deg, transparent, rgb(0 0 0 / 20%))",
);

log(`Has background-image: ${styleMap.has("background-image")}`);

// remove the background image again
styleMap.delete("background-image");

log(`Has background-image after delete: ${styleMap.has("background-image")}`);
```

{{EmbedLiveSample("Basic usage", 120, 220)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("StylePropertyMapReadOnly")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
