---
title: "MutationObserver: MutationObserver() constructor"
short-title: MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
page-type: web-api-constructor
browser-compat: api.MutationObserver.MutationObserver
---

{{APIRef("DOM WHATWG")}}

The DOM **`MutationObserver()`**
constructor — part of the {{domxref("MutationObserver")}} interface — creates and
returns a new observer which invokes a specified callback when DOM events
occur.

DOM observation does not begin immediately; the
{{domxref("MutationObserver.observe", "observe()")}} method must be called first to
establish which portion of the DOM to watch and what kinds of changes to watch for.

## Syntax

```js-nolint
new MutationObserver(callback)
```

### Parameters

- `callback`

  - : A function which will be called on each DOM change that qualifies given the
    observed node or subtree and options.

    The `callback` function takes as input two parameters:

    1. An array of {{domxref("MutationRecord")}} objects, describing each change that
       occurred.
    2. The {{domxref("MutationObserver")}} which invoked the
       `callback`. This is most often used to disconnect the observer using {{domxref("MutationObserver.disconnect()")}}.

    See the [examples](#examples) below for more details.

### Return value

A new {{domxref("MutationObserver")}} object, configured to call the specified
`callback` when DOM mutations occur.

## Examples

### Observing child elements

This example has buttons to add an {{htmlelement("li")}} element to a list, and to remove the first `<li>` element from the list.

We use a `MutationObserver` to be notified about changes to the list. In the callback, we log additions and removals, and as soon as the list is empty, we disconnect the observer.

The "Reset example" button resets the example to its original state.

#### HTML

```html
<button id="add">Add child</button>
<button id="remove">Remove child</button>
<button id="reset">Reset example</button>

<ul id="container"></ul>

<pre id="log"></pre>
```

#### CSS

```css
#container,
#log {
  height: 150px;
  overflow: scroll;
}

#container li {
  background-color: paleturquoise;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const reset = document.querySelector("#reset");
const container = document.querySelector("#container");
const log = document.querySelector("#log");

let namePrefix = 0;

add.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `item ${namePrefix}`;
  container.appendChild(newItem);
  namePrefix++;
});

remove.addEventListener("click", () => {
  const itemToRemove = document.querySelector("li");
  if (itemToRemove) {
    itemToRemove.parentNode.removeChild(itemToRemove);
  }
});

reset.addEventListener("click", () => {
  document.location.reload();
});

function logChanges(records, observer) {
  for (const record of records) {
    for (const addedNode of record.addedNodes) {
      log.textContent = `Added: ${addedNode.textContent}\n${log.textContent}`;
    }
    for (const removedNode of record.removedNodes) {
      log.textContent = `Removed: ${removedNode.textContent}\n${log.textContent}`;
    }
    if (record.target.childNodes.length === 0) {
      log.textContent = `Disconnected\n${log.textContent}`;
      observer.disconnect();
    }
    console.log(record.target.childNodes.length);
  }
}

const observerOptions = {
  childList: true,
  subtree: true,
};

const observer = new MutationObserver(logChanges);
observer.observe(container, observerOptions);
```

#### Result

Try clicking "Add child" to add list items, and "Remove child" to remove them. The observer callback logs additions and removals. As soon as the list is empty, the observer logs a "Disconnected" message and disconnects the observer.

The "Reset example" button reloads the example so you can try it again.

{{EmbedLiveSample("Observing child elements", 0, 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
