---
title: "DocumentFragment: moveBefore() method"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.moveBefore
---

{{APIRef("DOM")}}

The **`moveBefore()`** method of the {{domxref("DocumentFragment")}} interface moves a given {{domxref("Node")}} inside the invoking `DocumentFragment` as a direct child, before a given reference node.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameters

- `movedNode`
  - : A {{domxref("Node")}} representing the node to be moved.
- `referenceNode`
  - : A {{domxref("Node")}} that `movedNode` will be moved before, or `null`. If the value is `null`, `movedNode` is inserted at the end of the invoking `DocumentFragment`'s child nodes.
    > [!NOTE]
    > The `referenceNode` parameter is mandatory. You must explicitly pass a {{domxref("Node")}} or `null`.

### Return value

None ({{jsxref("Undefined")}}).

### Exceptions

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Thrown when:
    - The specified `referenceNode` is not yet added to the DOM, and you are trying to move it inside a node that is part of the DOM, or vice versa.
    - An attempt is made to move `movedNode` between two different documents.
- `NotFoundError` {{jsxref("TypeError")}}
  - : The specified `referenceNode` is not a child of the `DocumentFragment` you are calling `moveBefore()` on, that is, the fragment you are trying to move `movedNode` inside.
- `TypeError` {{jsxref("TypeError")}}
  - : The second argument was not supplied.

## Description

The `moveBefore()` method moves a given node to a new place in the DOM. It provides similar functionality to the {{domxref("Node.insertBefore()")}} method, except that it doesn't remove and then reinsert the node. This means that the state of the node (which would be reset if moving it with `insertBefore()` and similar mechanisms) is preserved after the move. This includes:

- [Animation](/en-US/docs/Web/CSS/CSS_animations) and [transition](/en-US/docs/Web/CSS/CSS_transitions) state.
- {{htmlelement("iframe")}} loading state.
- Interactive node {{cssxref(":focus")}} and {{cssxref(":active")}} states.
- [Fullscreen](/en-US/docs/Web/API/Fullscreen_API) element state.
- Open/close state of [popovers](/en-US/docs/Web/API/Popover_API).
- Modal state of {{htmlelement("dialog")}} elements (modal dialog will not be closed).

The play state of {{htmlelement("video")}} and {{htmlelement("audio")}} elements is not included in the above list, as these elements retain their state when removed and reinserted, regardless of the mechanism used.

> [!NOTE]
> When observing changes to the DOM using a {{domxref("MutationObserver")}}, nodes moved with `moveBefore()` will be recorded with a [removed node](/en-US/docs/Web/API/MutationRecord/removedNodes) and an [added node](/en-US/docs/Web/API/MutationRecord/addedNodes).

### `moveBefore()` constaints

There are some constraints to be aware of when using `moveBefore()`:

- It can only work when moving a node within the same document.
- It won't work if you try to move a node that is not connected to the DOM to an already connected parent, or vice versa.

In such cases, `moveBefore()` will fail with a `HierarchyRequestError` exception. If the above constraints are requirements for your particular use case, you should use {{domxref("Node.insertBefore()")}} instead, or use [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) to handle the errors that arise from such cases.

### Moving custom elements

When moving a [custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements), care needs to be taken to handle the `connectedCallback()` and `disconnectedCallback()` [lifecycle callbacks](/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) appropriately, if any are defined in the custom element's constructor.

The problem is that `disconnectedCallback()` then `connectedCallback()` are fired each time a custom element is moved with `movedBefore()` (or similar methods such as {{domxref("Node.insertBefore()")}}), whereas they are supposed to be called only when the element is removed from or added to the DOM.

Consider this minimal example:

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }
}

customElements.define("my-custom-element", MyCustomElement);
```

In this case, "Custom element removed from page." and "Custom element added to page." are logged to the console with each move, which isn't too problematic. In more complex examples, however, initialization and cleanup code could be called multiple times, which could cause problems with the state and functionality of the moved element.

The `moveBefore()` method has a way to solve this problem. Custom elements have a lifecycle callback called `connectedMoveCallback()` which, if defined in the constructor, will run instead of `connectedCallback()` and `disconnectedCallback()` when an element instance is moved via `moveBefore()`. You could add an empty `connectedMoveCallback()` to stop the other two callbacks running, or include some custom logic to handle the move:

```js
connectedMoveCallback() {
  console.log("Custom element moved with moveBefore()");
}
```

## Examples

### Basic `moveBefore()` usage

In this demo we illustrate basic usage of `moveBefore()`.

#### HTML

The HTML features three {{htmlelement("button")}} elements, and an {{htmlelement("article")}} element. We will use the buttons to control inserting `DocumentFragments` into the `<article>`, and emptying it.

```html live-sample___movebefore-basic
<button id="insert1">Insert fragment</button>
<button id="insert2">Insert modified fragment</button>
<button id="clear">Clear</button>
<article id="wrapper"></article>
```

#### CSS

We provide some rudimentary styling for the look and feel and spacing of elements that will later be inserted into the page as children of JavaScript-generated `DocumentFragment`s.

```css live-sample___movebefore-basic
#section1,
#section2,
#mover {
  display: inline-block;
  width: 200px;
  height: 30px;
  border: 5px solid rgb(0 0 0 / 0.25);
  margin-top: 10px;
}

#section1,
#section2 {
  background-color: hotpink;
}

#mover {
  background-color: orange;
}
```

#### JavaScript

In our script, we define a function, `createFragment()`, which creates a `DocumentFragment` containing a {{htmlelement("div")}} element and two {{htmlelement("section")}} elements as immediate children.

We then attach a click event listener to each `<button>` via {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

- The first button appends the `DocumentFragment` to the `#wrapper` `<article>` element, unmodified.
- The second button appends the `DocumentFragment` to the `#wrapper` `<article>` element, but first uses `moveBefore()` to move the `<div>` to be the second child of the `DocumentFragment` rather than the first.
- The third button empties the `#wrapper` `<article>` element using {{domxref("Element.innerHTML", "innerHTML()")}}.

```js live-sample___movebefore-basic
const wrapper = document.getElementById("wrapper");
const insertBtn1 = document.getElementById("insert1");
const insertBtn2 = document.getElementById("insert2");
const clearBtn = document.getElementById("clear");

function createFragment() {
  let fragment = new DocumentFragment();
  const divElem = document.createElement("div");
  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  divElem.id = "mover";
  section1.id = "section1";
  section2.id = "section2";
  fragment.appendChild(divElem);
  fragment.appendChild(section1);
  fragment.appendChild(section2);

  return fragment;
}

insertBtn1.addEventListener("click", () => {
  const fragment = createFragment();
  wrapper.appendChild(fragment);
});

insertBtn2.addEventListener("click", () => {
  const fragment = createFragment();
  fragment.moveBefore(
    fragment.querySelector("#mover"),
    fragment.querySelector("#section2"),
  );

  wrapper.appendChild(fragment);
});

clearBtn.addEventListener("click", () => {
  wrapper.innerHTML = "";
});
```

#### Result

The rendered example looks like this:

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

Try clicking the first two buttons a few times and note how the `DocumentFragment` structure is modified by the second button.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.moveBefore()")}}
- {{domxref("Element.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
