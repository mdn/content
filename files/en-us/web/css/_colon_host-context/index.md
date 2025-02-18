---
title: :host-context()
slug: Web/CSS/:host-context
page-type: css-pseudo-class
browser-compat: css.selectors.host-context
---

{{CSSRef}}

The **`:host-context()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) allows you to style elements within a [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) differently based on the selector of the shadow host (the element that has the shadow root) and its DOM ancestors.

Normally, elements within a shadow DOM are isolated from the DOM outside of it. The `:host-context()` allows you to "peek outside" of this Shadow DOM and check if any of the element's ancestor elements match a certain CSS selector. For example, applying a different text color to elements within a shadow root when a `.dark-theme` class is applied to `<body>`.

Think of it like this: Imagine you have a `<greenhouse>` custom element, that has a `<chameleon>` living inside. Here, the `<greenhouse>` is the Shadow DOM host and the `<chameleon>` element is within the Shadow DOM. The `:host-context()` lets the `<chameleon>` change its appearance based on the `<greenhouse>`'s environment. If the `<greenhouse>` is in a sunny location (has a "sunny-theme" class), the `<chameleon>` turns yellow. If the `<greenhouse>` is in a shady spot (a "shady-theme" class applied instead), the `<chameleon>` turns blue.

This selector pierces through all shadow boundaries. It will look for the sunny or shady theme applied directly to the `<greenhouse>` or on any of the host's ancestors and ancestor DOMs all the way up until it reaches the document root.

To limit the selector to only the `<greenhouse>` host directly or limit the selection to host's DOM, use the {{cssxref(":host")}} or {{cssxref(":host_function", ":host()")}} pseudo-class instead.

> [!NOTE]
> This has no effect when used outside a shadow DOM.

The [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity) of `:host-context()` is that of a [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes), plus the specificity of the selector passed as the function's argument.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host-context.html", "tabbed-shorter")}}

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

In this example we have a basic custom element — `<context-span>` — that you can wrap around text:

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
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

The `:host-context(h1) { font-style: italic; }` and `:host-context(h1):after { content: " - no links in headers!" }` rules style the instance of the `<context-span>` element (the shadow host in this instance) inside the `<h1>`. We've used it to make it clear that the custom element shouldn't appear inside the `<h1>` in our design.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web components](/en-US/docs/Web/API/Web_components)
- CSS {{cssxref(":host")}} pseudo-class
- CSS {{cssxref(":host_function", ":host()")}} pseudo-class
- CSS {{cssxref(":state",":state()")}} pseudo-class
- CSS {{CSSXref("::slotted")}} pseudo-element
- HTML {{HTMLElement("template")}} element
- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) module
