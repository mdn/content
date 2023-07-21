---
title: ":host-context()"
slug: Web/CSS/:host-context
page-type: css-pseudo-class
browser-compat: css.selectors.host-context
---

{{CSSRef}}

The **`:host-context()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) function selects the shadow host of the [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) containing the CSS it is used inside (so you can select a custom element from inside its shadow DOM) — but only if the selector given as the function's parameter matches the shadow host's ancestor(s) in the place it sits inside the DOM hierarchy.

In other words, this allows a custom element, or anything within that custom element's shadow DOM, to apply different styles based on its position within the outer DOM or classes/attributes applied to ancestor elements.

One typical use of this is with a descendant selector expression — for example `h1` — to select only instances of the custom element that are inside an `<h1>`. Another typical use would be to allow inner elements to react to classes or attributes on any ancestor elements - for example, applying a different text color when a `.dark-theme` class is applied to `<body>`.

> **Note:** This has no effect when used outside a shadow DOM.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host_context.html", "tabbed-shorter")}}

```css
/* Selects a shadow root host, only if it is
   a descendant of the selector argument given */
:host-context(h1) {
  font-weight: bold;
}

/* Changes paragraph text color from black to white when
   a .dark-theme class is applied to the document body */
p {
  color: #000;
}

:host-context(body.dark-theme) p {
  color: #fff;
}
```

## Syntax

```css-nolint
:host-context(<compound-selector>) {
  /* ... */
}
```

## Examples

### Selectively styling shadow hosts

The following snippets are taken from our [host-selectors example](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([see it live also](https://mdn.github.io/web-components-examples/host-selectors/)).

In this example we have a simple custom element — `<context-span>` — that you can wrap around text:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Inside the element's constructor, we create `style` and `span` elements, fill the `span` with the content of the custom element, and fill the `style` element with some CSS rules:

```js
const style = document.createElement("style");
const span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host(.footer) { color : red; }" +
  ":host { background: rgba(0,0,0,0.1); padding: 2px 5px; }";
```

The `:host-context(h1) { font-style: italic; }` and `:host-context(h1):after { content: " - no links in headers!" }` rules style the instance of the `<context-span>` element (the shadow host in this instance) inside the `<h1>`. We've used it to make it clear that the custom element shouldn't appear inside the `<h1>` in our design.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web components](/en-US/docs/Web/API/Web_components)
- {{cssxref(":host")}}
- {{cssxref(":host_function", ":host()")}}
