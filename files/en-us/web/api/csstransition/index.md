---
title: CSSTransition
slug: Web/API/CSSTransition
page-type: web-api-interface
browser-compat: api.CSSTransition
---

{{APIRef("Web Animations")}}

The **`CSSTransition`** interface of the {{domxref('Web Animations API','','',' ')}} represents an {{domxref("Animation")}} object used for a [CSS Transition](/en-US/docs/Web/CSS/CSS_transitions).

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from its parent, {{domxref("Animation")}}._

- {{domxref("CSSTransition.transitionProperty")}} {{ReadOnlyInline}}
  - : Returns the transition CSS property name as a string.

## Instance methods

_This interface inherits methods from its parent, {{domxref("Animation")}}._

No specific methods.

## Examples

### Inspecting the returned CSSTransition

The transition in the following example changes the width of the box on hover. Calling {{domxref("Element.getAnimations()")}} returns an array of all {{domxref("Animation")}} objects. In our case this returns a `CSSTransition` object, representing the animation created.

```css
.box {
  background-color: #165baa;
  color: #fff;
  width: 100px;
  height: 100px;
  transition: width 4s;
}

.box:hover {
  width: 200px;
}
```

```js
const item = document.querySelector(".box");
item.addEventListener("transitionrun", () => {
  let animations = document.querySelector(".box").getAnimations();
  console.log(animations[0]);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
