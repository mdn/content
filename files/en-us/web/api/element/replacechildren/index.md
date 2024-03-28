---
title: "Element: replaceChildren() method"
short-title: replaceChildren()
slug: Web/API/Element/replaceChildren
page-type: web-api-instance-method
browser-compat: api.Element.replaceChildren
---

{{APIRef("DOM")}}

The **`Element.replaceChildren()`** method replaces the
existing children of a {{domxref("Node")}} with a specified new set of children. These
can be string or {{domxref("Node")}} objects.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} or string objects to replace the
    `Element`'s existing children with. If no replacement objects are
    specified, then the `Element` is emptied of all child nodes.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the [constraints of the node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

## Examples

### Emptying a node

`replaceChildren()` provides a very convenient mechanism for emptying a node
of all its children. You call it on the parent node without any argument specified:

```js
myNode.replaceChildren();
```

### Transferring nodes between elements

`replaceChildren()` enables you to easily transfer nodes between elements,
without having to resort to verbose looping code. For example, say we have a simple
application allowing you to choose what food you want for your party. This HTML might
look something like this:

```html
<h2>Party food option list</h2>

<main>
  <div>
    <label for="no">No thanks!</label>

    <select id="no" multiple size="10">
      <option>Apples</option>
      <option>Oranges</option>
      <option>Grapes</option>
      <option>Bananas</option>
      <option>Kiwi fruits</option>
      <option>Chocolate cookies</option>
      <option>Peanut cookies</option>
      <option>Chocolate bars</option>
      <option>Ham Sandwiches</option>
      <option>Cheese Sandwiches</option>
      <option>Falafel sandwiches</option>
      <option>Ice cream</option>
      <option>Jelly</option>
      <option>Carrot sticks and hummus</option>
      <option>Margherita pizza</option>
      <option>Pepperoni pizza</option>
      <option>Vegan veggie pizza</option>
    </select>
  </div>

  <div class="buttons">
    <button id="to-yes">Transfer to "Yes" --&gt;</button>
    <button id="to-no">&lt;-- Transfer to "No"</button>
  </div>

  <div>
    <label for="yes">Yes please!</label>

    <select id="yes" multiple size="10"></select>
  </div>
</main>
```

It would make sense to use some simple CSS to lay out the two select lists in a line
alongside one another, with the control buttons in between them:

```css
main {
  display: flex;
}

div {
  margin-right: 20px;
}

label,
button {
  display: block;
}

.buttons {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

select {
  width: 200px;
}
```

What we want to do is transfer any selected options in the "no" list over to the "yes"
list when the "yes" button is pressed, and transfer any selected options in the "yes"
list over to the "no" list when the "no" button is pressed.

To do this, we give each of the buttons a click event handler, which collects together
the selected options you want to transfer in one constant, and the existing options in
the list you are transferring to in another constant. It then calls
`replaceChildren()` on the list to transfer the options to, using the spread
operator to pass in all the options contained in both constants.

```js
const noSelect = document.getElementById("no");
const yesSelect = document.getElementById("yes");
const noBtn = document.getElementById("to-no");
const yesBtn = document.getElementById("to-yes");

yesBtn.addEventListener("click", () => {
  const selectedTransferOptions =
    document.querySelectorAll("#no option:checked");
  const existingYesOptions = document.querySelectorAll("#yes option");
  yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener("click", () => {
  const selectedTransferOptions = document.querySelectorAll(
    "#yes option:checked",
  );
  const existingNoOptions = document.querySelectorAll("#no option");
  noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});
```

The end result looks like this:

{{EmbedLiveSample('Transferring_nodes_between_elements', '100%', '350')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.prepend()")}}
- {{domxref("Element.append()")}}
- {{domxref("NodeList")}}
