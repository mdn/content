---
title: MutationObserver.observe()
slug: Web/API/MutationObserver/observe
tags:
  - API
  - Attribute Changes
  - Changes
  - DOM
  - DOM Changes
  - DOM WHATWG
  - Element Changes
  - Method
  - Mutation Observer
  - Mutation Observer API
  - MutationObserver
  - Node Changes
  - Reference
  - observe
browser-compat: api.MutationObserver.observe
---
{{APIRef("DOM WHATWG")}}

The {{domxref("MutationObserver")}} method **`observe()`** configures the `MutationObserver`
callback to begin receiving notifications of changes to the DOM that match the given options.

Depending on the configuration, the observer may watch a single {{domxref("Node")}} in the DOM tree, or that node and some or all of its descendant nodes.

To stop the `MutationObserver` (so that none of its callbacks will be triggered any longer), call {{domxref("MutationObserver.disconnect()")}}.

## Syntax

```js
mutationObserver.observe(target, options)
```

### Parameters

- `target`
  - : A DOM {{domxref("Node")}} (which may be an {{domxref("Element")}}) within the DOM
    tree to watch for changes, or to be the root of a subtree of nodes to be watched.
- `options`

  - : An object providing options that describe which DOM mutations should be reported to `mutationObserver`’s `callback`.
    At a minimum, one of `childList`, `attributes`, and/or `characterData` must be `true` when you call {{domxref("MutationObserver.observe", "observe()")}}.
    Otherwise, a `TypeError` exception will be thrown.

    Options are as follows:

    - `subtree` {{optional_inline}}
      - : Set to `true` to extend monitoring to the entire subtree of nodes rooted at `target`.
        All of the other properties are then extended to all of the nodes in the subtree instead of applying solely to the `target` node. The default value is `false`.
    - `childList` {{optional_inline}}
      - : Set to `true` to monitor the target node (and, if `subtree` is `true`, its descendants) for the addition of new child nodes or removal of existing child nodes.
        The default value is `false`.
    - `attributes` {{optional_inline}}
      - : Set to `true` to watch for changes to the value of attributes on the node or nodes being monitored.
      - The default value is `true` if either of `attributeFilter` or `attributeOldValue` is specified, otherwise the default value is `false`.
    - `attributeFilter` {{optional_inline}}
      - : An array of specific attribute names to be monitored.
        If this property isn't included, changes to all attributes cause mutation notifications.
    - `attributeOldValue` {{optional_inline}}
      - : Set to `true` to record the previous value of any attribute that changes when monitoring the node or nodes for attribute changes;
        see {{SectionOnPage("/en-US/docs/Web/API/MutationObserver", "Monitoring attribute values")}} for details on watching for attribute changes and value recording.
        The default value is `false`.
    - `characterData` {{optional_inline}}
      - : Set to `true` to monitor the specified target node (and, if `subtree` is `true`, its descendants) for changes to the character data contained within the node or nodes.
        The default value is `true` if `characterDataOldValue` is specified, otherwise the default value is `false`.
    - `characterDataOldValue` {{optional_inline}}
      - : Set to `true` to record the previous value of a node's text whenever the text changes on nodes being monitored.
        The default value is `false`.

### Return value

`undefined`.

### Exceptions

- {{jsxref('TypeError')}}

  - : Thrown in any of the following circumstances:

    - The `options` are configured such that nothing will actually be monitored.
      (For example, if `childList`, `attributes`, and `characterData` are all `false`.)
    - The value of `options.attributes` is `false` (indicating that attribute changes are not to be monitored), but `attributeOldValue` is `true` and/or
      `attributeFilter` is present.
    - The `characterDataOldValue` option is `true` but `characterData` is `false` (indicating that character changes are not to be monitored).

## Usage notes

### Reusing MutationObservers

You can call `observe()` multiple times on the same
`MutationObserver` to watch for changes to different parts of the DOM tree
and/or different types of changes. There are some caveats to note:

- If you call `observe()` on a node that's already being observed by the same `MutationObserver`, all existing observers are automatically removed from all targets being observed before the new observer is activated.
- If the same `MutationObserver` is not already in use on the target, then the existing observers are left alone and the new one is added.

### Observation follows nodes when disconnected

Mutation observers are intended to let you be able to watch the desired set of nodes
over time, even if the direct connections between those nodes are severed. If you begin
watching a subtree of nodes, and a portion of that subtree is detached and moved
elsewhere in the DOM, you continue to watch the detached segment of nodes, receiving the
same callbacks as before the nodes were detached from the original subtree.

In other words, until you've been notified that nodes are being split off from your monitored subtree, you'll get notifications of changes to that split-off subtree and its nodes.
This prevents you from missing changes that occur after the connection is severed
and before you have a chance to specifically begin monitoring the moved node or subtree for changes.

Theoretically, this means that if you keep track of the {{domxref("MutationRecord")}} objects describing the changes that occur, you should be able to "undo" the changes,
rewinding the DOM back to its initial state.

## Examples

### Basic usage

In this example, we demonstrate how to call the method **`observe()`** on an instance of {{domxref("MutationObserver")}}, once it has been set up, passing it a target element
and an `options` object.

```js
// identify an element to observe
const elementToObserve = document.querySelector("#targetElementId");

// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
const observer = new MutationObserver(function() {
    console.log('callback that runs when observer is triggered');
});

// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {subtree: true, childList: true});
```

### Using `attributeFilter`

In this example, a Mutation Observer is set up to watch for changes to the
`status` and `username` attributes in any elements contained
within a subtree that displays the names of users in a chat room. This lets the code,
for example, reflect changes to users' nicknames, or to mark them as away from keyboard
(AFK) or offline.

```js
function callback(mutationList) {
  mutationList.forEach(function(mutation) {
    switch(mutation.type) {
      case "attributes":
        switch(mutation.attributeName) {
          case "status":
            userStatusChanged(mutation.target.username, mutation.target.status);
            break;
          case "username":
            usernameChanged(mutation.oldValue, mutation.target.username);
            break;
        }
        break;
    }
  });
}

var userListElement = document.querySelector("#userlist");

var observer = new MutationObserver(callback);
observer.observe(userListElement, {
  attributeFilter: [ "status", "username" ],
  attributeOldValue: true,
  subtree: true
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
