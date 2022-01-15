---
title: Event.composedPath()
slug: Web/API/Event/composedPath
tags:
  - Method
  - Reference
  - Web Components
browser-compat: api.Event.composedPath
---
{{APIRef("Shadow DOM")}}

The **`composedPath()`** method of the {{domxref("Event")}}
interface returns the event's path which is an array of the objects on which listeners
will be invoked. This does not include nodes in shadow trees if the shadow root was
created with its {{domxref("ShadowRoot.mode")}} closed.

## Syntax

```js
var composed = Event.composedPath();
```

### Parameters

None.

### Return value

An array of {{domxref("EventTarget")}} objects representing the objects on which an
event listener will be invoked.

## Examples

In our composed-composed-path example (see it live), we define two trivial custom
elements, `<open-shadow>` and `<closed-shadow>`, both
of which take the contents of their text attribute and insert them into the element's
shadow DOM as the text content of a `<p>` element. The only difference
between the two is that their shadow roots are attached with their modes set to
`open` and `closed` respectively.

The first definition looks like this, for example:

```js
customElements.define('open-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      let pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      let shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(pElem);

  }
});
```

We then insert one of each element into our page:

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

Then include a click event listener on the `<html>` element:

```js
document.querySelector('html').addEventListener('click',function(e) {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

When you click on the `<open-shadow>` element and then the
`<closed-shadow>` element, you'll notice two things. First, the
`composed` property returns `true` because the `click`
event is always able to propagate across shadow boundaries. Second, you'll notice a
difference in the value of `composedPath` for the two elements. The
`<open-shadow>` element's composed path is this:

```js
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

Whereas the `<closed-shadow>` element's composed path is a follows:

```js
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

In the second case, the event listeners only propagate as far as the
`<closed-shadow>` element itself, but not to the nodes inside the
shadow boundary.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
