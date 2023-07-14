---
title: ":scope"
slug: Web/CSS/:scope
page-type: css-pseudo-class
browser-compat: css.selectors.scope
---

{{CSSRef}}

The **`:scope`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents elements that are a reference point, or scope, for selectors to match against.

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

When used in a stylesheet, `:scope` is the same as {{cssxref(":root")}}, as there is currently no way to explicitly establish a scoped element. When used from a DOM API, such as {{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}}, or {{domxref("Element.closest()")}}, `:scope` matches the element on which the method was called.

## Syntax

```css
:scope {
  /* ... */
}
```

## Examples

### Identity match

This example demonstrates using the `:scope` pseudo-class with the {{domxref("Element.matches()")}} method to match the element on which it's called. In this example, if `:scope` is supported, and the paragraph is within the `:root`'s scope, text is displayed in the placeholder "output" paragraph.

#### JavaScript

```js
const paragraph = document.getElementById("para");
const output = document.getElementById("output");

if (paragraph.matches(":scope")) {
  output.textContent = "The first paragraph is its own scope, as expected!";
}
```

#### HTML

```html
<p id="para">
  This is a paragraph. It is not an interesting paragraph. Sorry about that.
</p>
<p id="output"></p>
```

#### Result

{{ EmbedLiveSample('Identity_match') }}

### Direct children

A situation where the `:scope` pseudo-class proves to be useful is when you need to get a direct descendant of an already retrieved {{domxref("Element")}}.

#### JavaScript

```js
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").innerHTML = Array.prototype.map
  .call(selected, (element) => `#${element.getAttribute("id")}`)
  .join(", ");
```

#### HTML

```html
<div id="context">
  <div id="element-1">
    <div id="element-1.1"></div>
    <div id="element-1.2"></div>
  </div>
  <div id="element-2">
    <div id="element-2.1"></div>
  </div>
</div>
<p>
  Selected elements ids :
  <span id="results"></span>
</p>
```

#### Result

{{ EmbedLiveSample('Direct_children') }}

The scope of `context` is the element with the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) of `context`. The selected elements are the `div` elements that are direct children of that context, `element-1` and `element-2`, but not their descendants.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref(":root")}} [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes)
- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}} and {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} and {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} and {{domxref("DocumentFragment.querySelectorAll()")}}
