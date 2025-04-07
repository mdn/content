---
title: "DocumentFragment: moveBefore() method"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.moveBefore
---

{{APIRef("DOM")}}

The **`moveBefore()`** method of the {{domxref("DocumentFragment")}} interface moves a given {{domxref("Node")}} inside the invoking `DocumentFragment` as a direct child, before a given reference node.

`moveBefore()` provides similar functionality to the {{domxref("Node.insertBefore()")}} method, except that it doesn't remove and then reinsert the node. This means that the state of the node (which would be reset if moving it with `insertBefore()` and similar mechanisms) is preserved after the move. This includes:

- [Animation](/en-US/docs/Web/CSS/CSS_animations) and [transition](/en-US/docs/Web/CSS/CSS_transitions) state.
- {{htmlelement("iframe")}} loading state.
- Interactive node {{cssxref(":focus")}} and {{cssxref(":active")}} states.
- Text selection.
- [Fullscreen](/en-US/docs/Web/API/Fullscreen_API) element state.
- Open/close state of [popovers](/en-US/docs/Web/API/Popover_API) and {{htmlelement("dialog")}} elements.

> [!NOTE]
> The play state of {{htmlelement("video")}} and {{htmlelement("audio")}} elements is not included in the above list, as these elements retain their state when removed and reinserted, regardless of the mechanism used.

If the given `DocumentFragment` has not already been added to the DOM, `moveBefore()` inserts it into the specified position. If the node being moved is a {{domxref("DocumentFragment")}}, the entire contents of the `DocumentFragment` are moved into the child list of the specified parent `DocumentFragment`.

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

- `NotFoundError` {{jsxref("TypeError")}}
  - : The specified `referenceNode` is not a child of the `DocumentFragment` you are calling `moveBefore()` on, that is, the fragment you are trying to move `movedNode` inside.
- `TypeError` {{jsxref("TypeError")}}
  - : The second argument was not supplied.

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
