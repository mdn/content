---
title: ShadowRoot
slug: Web/API/ShadowRoot
tags:
  - API
  - Interface
  - Reference
  - ShadowRoot
  - Web Components
  - shadow dom
browser-compat: api.ShadowRoot
---
{{APIRef('Shadow DOM')}}

The **`ShadowRoot`** interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document's main DOM tree.

You can retrieve a reference to an element's shadow root using its {{domxref("Element.shadowRoot")}} property, provided it was created using {{domxref("Element.attachShadow()")}} with the `mode` option set to `open`.

## Properties

- {{domxref("ShadowRoot.activeElement")}} {{readonlyInline}}
  - : Returns the {{domxref('Element')}} within the shadow tree that has focus.
- {{domxref("ShadowRoot.delegatesFocus")}} {{readonlyinline}} {{non-standard_inline}} {{deprecated_inline}}
  - : Returns a boolean that indicates whether `delegatesFocus` was set when the shadow was attached (see {{domxref("Element.attachShadow()")}}).
- {{DOMxRef("ShadowRoot.fullscreenElement")}} {{ReadOnlyInline}}
  - : The element that's currently in full screen mode for this shadow tree.
- {{domxref("ShadowRoot.host")}} {{readonlyinline}}
  - : Returns a reference to the DOM element the `ShadowRoot` is attached to.
- {{domxref("ShadowRoot.innerHTML")}} {{non-standard_inline}}
  - : Sets or returns a reference to the DOM tree inside the `ShadowRoot`.
- {{domxref("ShadowRoot.mode")}} {{readonlyinline}}
  - : The mode of the `ShadowRoot` — either `open` or `closed`.
    This defines whether or not the shadow root's internal features are accessible from JavaScript.
- {{DOMxRef("ShadowRoot.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef('Element')}} within the shadow tree that is currently being presented in picture-in-picture mode.
- {{DOMxRef("ShadowRoot.pointerLockElement")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef('Element')}} set as the target for mouse events while the pointer is locked.
    `null` if lock is pending, pointer is unlocked, or if the target is in another tree.
- {{domxref("ShadowRoot.styleSheets")}} {{readonlyInline}}
  - : Returns a {{domxref('StyleSheetList')}} of {{domxref('CSSStyleSheet')}} objects for stylesheets explicitly linked into, or embedded in a shadow tree.

### Event handlers

- {{domxref("ShadowRoot.onslotchange")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) representing the code to be called when the {{event("slotchange")}} event is raised.

## Methods

- {{DOMxRef("ShadowRoot.getAnimations()")}}
  - : Returns an array of all {{DOMxRef("Animation")}} objects currently in effect, whose target elements are descendants of the shadow tree.
- {{domxref("ShadowRoot.getSelection()")}}
  - : Returns a {{domxref('Selection')}} object representing the range of text selected by the user, or the current position of the caret.
- {{domxref("ShadowRoot.elementFromPoint()")}}
  - : Returns the topmost element at the specified coordinates.
- {{domxref("ShadowRoot.elementsFromPoint()")}}
  - : Returns an array of all elements at the specified coordinates.

## Examples

The following snippets are taken from our [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) example ([see it live also](https://mdn.github.io/web-components-examples/life-cycle-callbacks)), which creates an element that displays a square of a size and color specified in the element's attributes.

Inside the `<custom-square>` element's class definition we include some life cycle callbacks that make a call to an external function, `updateStyle()`, which actually applies the size and color to the element. You'll see that we are passing it `this` (the custom element itself) as a parameter.

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

In the `updateStyle()` function itself, we get a reference to the shadow DOM using {{domxref("Element.shadowRoot")}}.
From here we use standard DOM traversal techniques to find the {{htmlelement("style")}} element inside the shadow DOM and then update the CSS found inside it:

```js
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {
      childNodes[i].textContent =
        'div {' +
          'width: ' + elem.getAttribute('l') + 'px;' +
          'height: ' + elem.getAttribute('l') + 'px;' +
          'background-color: ' + elem.getAttribute('c') + ';' +
        '}';
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
