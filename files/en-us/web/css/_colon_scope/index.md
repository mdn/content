---
title: ':scope'
slug: Web/CSS/:scope
tags:
  - ':scope'
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Scoped Elements
  - Selector
  - Web
browser-compat: css.selectors.scope
---
{{CSSRef}}

The **`:scope`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents elements that are a reference point for selectors to match against.

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

Currently, when used in a stylesheet, `:scope` is the same as {{cssxref(":root")}}, since there is not at this time a way to explicitly establish a scoped element. When used from a DOM API such as {{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}}, or {{domxref("Element.closest()")}}, `:scope` matches the element on which the method was called.

## Syntax

```
:scope
```

## Examples

### Identity match

In this simple example, we demonstrate that using the `:scope` pseudo-class from the {{domxref("Element.matches()")}} method matches the element on which it's called.

#### JavaScript

```js
const paragraph = document.getElementById("para");
const output = document.getElementById("output");

if (paragraph.matches(":scope")) {
  output.textContent = "Yep, the element is its own scope as expected!";
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

A situation where the `:scope` pseudo-class prove to be useful is when you need to get direct descendant of an already retrieved {{domxref("Element")}}.

#### JavaScript

```js
const context = document.getElementById('context');
const selected = context.querySelectorAll(':scope > div');

document.getElementById('results').innerHTML = Array.prototype.map.call(
  selected,
  (element) => `#${element.getAttribute('id')}`,
).join(', ');
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
