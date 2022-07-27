---
title: MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
page-type: web-api-constructor
tags:
  - API
  - Changes
  - Constructor
  - DOM
  - DOM Changes
  - DOM Reference
  - DOM Tree
  - Mutation Observer API
  - MutationObserver
  - Observing
  - Reference
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

```js
new MutationObserver(callback)
```

### Parameters

- `callback`

  - : A function which will be called on each DOM change that qualifies given the
    observed node or subtree and options.

    The `callback` function takes as input two parameters:

    1. An array of {{domxref("MutationRecord")}} objects, describing each change that
        occurred; and
    2. the {{domxref("MutationObserver")}} which invoked the
        `callback`.

    See the [examples](#examples) below for more details.

### Return value

A new {{domxref("MutationObserver")}} object, configured to call the specified
`callback` when DOM mutations occur.

## Examples

This example creates a new `MutationObserver` configured to watch a node and
all of its children for additions and removals of elements to the tree, as well as any
changes to attributes on any of the elements in the tree.

### The callback function

```js
function callback(mutationList, observer) {
  mutationList.forEach((mutation) => {
    switch(mutation.type) {
      case 'childList':
        /* One or more children have been added to and/or removed
           from the tree.
           (See mutation.addedNodes and mutation.removedNodes.) */
        break;
      case 'attributes':
        /* An attribute value changed on the element in
           mutation.target.
           The attribute name is in mutation.attributeName, and
           its previous value is in mutation.oldValue. */
        break;
    }
  });
}
```

The `callback()` function is invoked when the observer sees changes matching
the configuration of the observation request specified when calling
{{domxref("MutationObserver.observe", "observe()")}} to begin watching the DOM.

The kind of change that took place (either a change to the list of children, or a
change to an attribute) is detected by looking at the {{domxref("MutationRecord.type",
  "mutation.type")}} property.

### Creating and starting the observer

This code actually sets up the observation process.

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,

  // Omit (or set to false) to observe only changes to the parent node
  subtree: true
}

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);
```

The desired subtree is located by finding an element with the ID
`someElement`. A set of options for the observer is also established in the
`observerOptions` record. In it, we specify values of `true` for
both `childList` and `attributes`, so we get the information we
want.

Then the observer is instantiated, specifying the `callback()` function. We
begin observing the DOM nodes of interest by calling `observe()`, specifying
the `target` node and the `options` object.

From this point until {{domxref("MutationObserver.disconnect", "disconnect()")}} is
called, `callback()` will be called each time an element is added to or
removed from the DOM tree rooted at `targetNode`, or any of those
elements' attributes are changed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
