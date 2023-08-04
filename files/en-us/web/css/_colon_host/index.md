---
title: ":host"
slug: Web/CSS/:host
page-type: css-pseudo-class
browser-compat: css.selectors.host
---

{{CSSRef}}

The **`:host`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selects the shadow host of the [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) containing the CSS it is used inside — in other words, this allows you to select a custom element from inside its shadow DOM.

> **Note:** This has no effect when used outside a shadow DOM.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host.html", "tabbed-shorter")}}

```css
/* Selects a shadow root host */
:host {
  font-weight: bold;
}
```

## Syntax

```css
:host {
  /* ... */
}
```

## Examples

### Styling the shadow host

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
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgba(0,0,0,0.1); padding: 2px 5px; }";
```

The `:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }` rule styles all instances of the `<context-span>` element (the shadow host in this instance) in the document.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web components](/en-US/docs/Web/API/Web_components)
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
