---
title: ':host()'
slug: Web/CSS/:host()
tags:
  - ':host()'
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.hostfunction
---
{{CSSRef}}

The **`:host()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) function selects the shadow host of the [shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM) containing the CSS it is used inside (so you can select a custom element from inside its shadow DOM) — but only if the selector given as the function's parameter matches the shadow host.

The most obvious use of this is to put a class name only on certain custom element instances, and then include the relevant class selector as the function argument. You can't use this with a descendant selector expression to select only instances of the custom element that are inside a particular ancestor. That's the job of {{CSSxRef(":host-context()")}}.

> **Note:** This has no effect when used outside a shadow DOM.

```css
/* Selects a shadow root host, only if it is
   matched by the selector argument */
:host(.special-custom-element) {
  font-weight: bold;
}
```

## Syntax

{{CSSSyntax}}

## Examples

### Selectively styling shadow hosts

The following snippets are taken from our [host-selectors example](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([see it live also](https://mdn.github.io/web-components-examples/host-selectors/)).

In this example we have a simple custom element — `<context-span>` — that you can wrap around text:

```html
<h1>Host selectors <a href="#"><context-span>example</context-span></a></h1>
```

Inside the element's constructor, we create `style` and `span` elements, fill the `span` with the content of the custom element, and fill the `style` element with some CSS rules:

```js
let style = document.createElement('style');
let span = document.createElement('span');
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({mode: 'open'});
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent = 'span:hover { text-decoration: underline; }' +
                    ':host-context(h1) { font-style: italic; }' +
                    ':host-context(h1):after { content: " - no links in headers!" }' +
                    ':host-context(article, aside) { color: gray; }' +
                    ':host(.footer) { color : red; }' +
                    ':host { background: rgba(0,0,0,0.1); padding: 2px 5px; }';
```

The `:host(.footer) { color : red; }` rule styles all instances of the `<context-span>` element (the shadow host in this instance) in the document that have the `footer` class set on them — we've used it to give instances of the element inside the {{htmlelement("footer")}} a special color.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web components](/en-US/docs/Web/Web_Components)
- {{CSSxRef(":host")}}
- {{CSSxRef(":host-context()")}}
