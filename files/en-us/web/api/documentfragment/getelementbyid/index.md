---
title: DocumentFragment.getElementById()
slug: Web/API/DocumentFragment/getElementById
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.getElementById
---

{{ ApiRef("DOM") }}

The **`getElementById()`** method of the {{domxref("DocumentFragment")}} returns an {{domxref("Element")}} object representing the element whose {{domxref("Element.id", "id")}} property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

If you need to get access to an element which doesn't have an ID, you can use {{domxref("Document.querySelector", "querySelector()")}} to find the element using any {{Glossary("CSS selector", "selector")}}.

> **Note:** IDs should be unique inside a document fragment. If two or more elements in a document fragment have the same ID, this method returns the first element found.

## Syntax

```js-nolint
getElementById(id)
```

> **Note:** The capitalization of `"Id"` in the name of this method _must_ be correct for the code to function; `getElementByID()` is _not_ valid and will not work, however natural it may seem.

### Parameters

- `id`
  - : The ID of the element to locate. The ID is a case-sensitive string which is unique within the document fragment: only one element should have any given ID.

### Return value

An {{domxref("Element")}} object describing the DOM element object matching the specified ID, or `null` if no matching element was found in the document fragment.

## Examples

### Extend a list of elements

This example creates a list with one element, `Cherry`, while a `Find elements` button will look for `Apple` and `Cherry` and logs it. The button `Add fragment to document` will insert four extra elements in the list, changing the results of pressing the `Find elements` button. Finally, a `Reset` button sets the example in its original state.

#### HTML

```html
<button id="reset">Reset example</button>
Basket content:
<ul>
  <li id="Cherry">Cherry</li>
</ul>
<button id="add">Add fragment to document</button>

Console: <button id="find">Find elements</button>
<pre id="log" />
```

```css hidden
#reset,
#add {
  display: block;
  margin-bottom: 10px;
}
```

#### JavaScript

```js
// Obtain the unordered list in the document
const ul = document.querySelector("ul");

// Log
const log = document.getElementById("log");

// Add fragment to document
const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  // Create the document fragment
  const fruits = ["Apple", "Orange", "Banana", "Melon"];
  const fragment = new DocumentFragment();
  for (const fruit of fruits) {
    const li = document.createElement("li");
    li.textContent = fruit;
    li.id = fruit;
    fragment.append(li);
  }

  // Insert the fragment inside the document's unordered list
  ul.append(fragment);

  // We only add once: disable the button
  addButton.disabled = true;
});

// Search for Cherry and Apple
const findButton = document.getElementById("find");
findButton.addEventListener("click", () => {
  log.textContent = `Found 'Apple' in the list? ${
    document.getElementById("Apple") ? "Yes" : "No"
  }\n`;
  log.textContent += `Found 'Cherry' in the list? ${
    document.getElementById("Cherry") ? "Yes" : "No"
  }`;
});

// Reset the example
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  // Empty the list
  while (ul.firstChild) {
    // The list is LIVE so it will re-index each call
    ul.removeChild(ul.firstChild);
  }

  // Create 'Cherry` entry and adds it to the list
  const li = document.createElement("li");
  li.textContent = "Cherry";
  li.id = "Cherry";
  ul.append(li);

  // Empty log
  log.textContent = "";

  // (Re-)Activate the 'add' button
  addButton.disabled = false;
});
```

#### Result

{{EmbedLiveSample('Examples', '100%', '320')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.getElementById()")}}
