---
title: ShadowRoot
slug: Web/API/ShadowRoot
page-type: web-api-interface
browser-compat: api.ShadowRoot
---

{{APIRef('Shadow DOM')}}

The **`ShadowRoot`** interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document's main DOM tree.

You can retrieve a reference to an element's shadow root using its {{domxref("Element.shadowRoot")}} property, provided it was created using {{domxref("Element.attachShadow()")}} with the `mode` option set to `open`.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("ShadowRoot.activeElement")}} {{ReadOnlyInline}}
  - : Returns the {{domxref('Element')}} within the shadow tree that has focus.
- {{domxref("ShadowRoot.adoptedStyleSheets")}}
  - : Add an array of constructed stylesheets to be used by the shadow DOM subtree.
    These may be shared with other DOM subtrees that share the same parent {{domxref("Document")}} node, and the document itself.
- {{domxref("ShadowRoot.delegatesFocus")}} {{ReadOnlyInline}}
  - : Returns a boolean that indicates whether `delegatesFocus` was set when the shadow was attached (see {{domxref("Element.attachShadow()")}}).
- {{DOMxRef("ShadowRoot.fullscreenElement")}} {{ReadOnlyInline}}
  - : The element that's currently in full screen mode for this shadow tree.
- {{domxref("ShadowRoot.host")}} {{ReadOnlyInline}}
  - : Returns a reference to the DOM element the `ShadowRoot` is attached to.
- {{domxref("ShadowRoot.innerHTML")}}
  - : Sets or returns a reference to the DOM tree inside the `ShadowRoot`.
- {{domxref("ShadowRoot.mode")}} {{ReadOnlyInline}}
  - : The mode of the `ShadowRoot`, either `open` or `closed`.
    This defines whether or not the shadow root's internal features are accessible from JavaScript.
- {{DOMxRef("ShadowRoot.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef('Element')}} within the shadow tree that is currently being presented in picture-in-picture mode.
- {{DOMxRef("ShadowRoot.pointerLockElement")}} {{ReadOnlyInline}}
  - : Returns the {{DOMxRef('Element')}} set as the target for mouse events while the pointer is locked.
    `null` if lock is pending, pointer is unlocked, or if the target is in another tree.
- {{DOMxRef("ShadowRoot.slotAssignment")}} {{ReadOnlyInline}}
  - : Returns a string containing the type of slot assignment, either `manual` or `named`.
- {{domxref("ShadowRoot.styleSheets")}} {{ReadOnlyInline}}
  - : Returns a {{domxref('StyleSheetList')}} of {{domxref('CSSStyleSheet')}} objects for stylesheets explicitly linked into, or embedded in a shadow tree.

## Instance methods

- {{DOMxRef("ShadowRoot.getAnimations()")}}
  - : Returns an array of all {{DOMxRef("Animation")}} objects currently in effect, whose target elements are descendants of the shadow tree.
- {{domxref("ShadowRoot.getSelection()")}} {{Non-standard_Inline}}
  - : Returns a {{domxref('Selection')}} object representing the range of text selected by the user, or the current position of the caret.
- {{domxref("ShadowRoot.elementFromPoint()")}} {{Non-standard_Inline}}
  - : Returns the topmost element at the specified coordinates.
- {{domxref("ShadowRoot.elementsFromPoint()")}} {{Non-standard_Inline}}
  - : Returns an array of all elements at the specified coordinates.

## Events

The following events are available to `ShadowRoot` via event bubbling from {{domxref("HTMLSlotElement")}}:

- `HTMLSlotElement` {{domxref("HTMLSlotElement.slotchange_event", "slotchange")}} event
  - : An event fired when the node(s) contained in that slot change.

## Examples

The following snippets are taken from our [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks) example ([see it live also](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), which creates an element that displays a square of a size and color specified in the element's attributes.

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
  const shadow = elem.shadowRoot;
  const childNodes = shadow.childNodes;
  for (const node of childNodes) {
    if (node.nodeName === "STYLE") {
      node.textContent = `
div {
  width: ${elem.getAttribute("l")}px;
  height: ${elem.getAttribute("l")}px;
  background-color: ${elem.getAttribute("c")};
}
      `;
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
