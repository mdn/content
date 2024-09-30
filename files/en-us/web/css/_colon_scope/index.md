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

Which element(s) `:scope` matches depends on the context in which it is used:

- When used at the root level of a stylesheet, `:scope` is equivalent to {{cssxref(":root")}}, which in a regular HTML document matches the {{htmlelement("html")}} element.
- When used inside a {{cssxref("@scope")}} block, `:scope` matches the block's defined scope root. It provides a way to apply styles to the root of the scope from inside the `@scope` block itself.
- When used within a DOM API call — such as {{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}}, or {{domxref("Element.closest()")}} — `:scope` matches the element on which the method was called.

## Syntax

```css
:scope {
  /* ... */
}
```

## Examples

### Using `:scope` as an alternative to `:root`

This example shows that `:scope` is equivalent to `:root` when used at the root level of a stylesheet. In this case, the provided CSS colors the background of the `<html>` element orange.

#### HTML

```html
<html></html>
```

#### CSS

```css
:scope {
  background-color: orange;
}
```

#### Result

{{ EmbedLiveSample("Using :scope as an alternative to :root", "100%", 50) }}

### Using `:scope` to style the scope root in a `@scope` block

In this example, we use two separate `@scope` blocks to match links inside elements with a `.light-scheme` and `.dark-scheme` class respectively. Note how `:scope` is used to select and provide styling to the scope roots themselves. In this example, the scope roots are the {{htmlelement("div")}} elements that have the classes applied to them.

#### HTML

```html
<div class="light-scheme">
  <p>
    MDN contains lots of information about
    <a href="/en-US/docs/Web/HTML">HTML</a>,
    <a href="/en-US/docs/Web/CSS">CSS</a>, and
    <a href="/en-US/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN contains lots of information about
    <a href="/en-US/docs/Web/HTML">HTML</a>,
    <a href="/en-US/docs/Web/CSS">CSS</a>, and
    <a href="/en-US/docs/Web/JavaScript">JavaScript</a>.
  </p>
</div>
```

#### CSS

```css hidden
div {
  padding: 10px;
}
```

```css
@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### Result

{{ EmbedLiveSample("Using :scope to style the scope root in a @scope block", "100%", 150) }}

### Using `:scope` in JavaScript

This example demonstrates using the `:scope` pseudo-class in JavaScript. This can be useful if you need to get a direct descendant of an already retrieved {{domxref("Element")}}.

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
  Selected element ids :
  <span id="results"></span>
</p>
```

#### JavaScript

```js
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").textContent = Array.prototype.map
  .call(selected, (element) => `#${element.getAttribute("id")}`)
  .join(", ");
```

#### Result

The scope of `context` is the element with the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) of `context`. The selected elements are the `<div>` elements that are direct children of that context — `element-1` and `element-2` — but not their descendants.

{{ EmbedLiveSample('Using :scope in JavaScript') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("@scope")}} [at-rule](/en-US/docs/Web/CSS/At-rule)
- The {{cssxref(":root")}} [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes)
- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}} and {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} and {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} and {{domxref("DocumentFragment.querySelectorAll()")}}
