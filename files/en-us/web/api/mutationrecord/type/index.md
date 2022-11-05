---
title: MutationRecord.type()
slug: Web/API/MutationRecord/type
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM Reference
  - Interface
  - MutationRecord
  - NeedsContent
  - NeedsUpdate
  - Reference
  - mutation
  - method
browser-compat: api.MutationRecord.type
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`type()`** returns the mutated node type of the {{domxref("MutationRecord")}} observed by the target of a {{domxref("MutationObserver")}}.

## Syntax

```js-nolint
type()
```

### Parameters

None.

### Return value

The method returns the type of the mutated node as a string; the return value can be vastly different depending on specific criteria (mostly related to the "options" paremeters of {{domxref("MutationObserver.observe")}}).

- The method will return `attributes` if the mutation to the target node of the was an attribute mutation, {{domxref("Attr")}}. This mutated node type can appear if the "attribute" parameter of {{domxref("MutationObserver.observe")}} is set to true or the `attributeFilter` parameter is in use.

- The method will return `childList` if the mutation to the target node was a mutation to the tree of nodes, i.e. the `childList` paremeter of {{domxref("MutationObserver.observe")}} is set to true.

- The method will return `characterData` if it was called on a mutation to a {{domxref("CharacterData")}} node.

## Examples

This code snippet is used to observe changes in a userlist: the userlist is DOM element that functions as a list of all users currently connected to a server (in this example, consider it is a `<ul>`). The userlist itself contains child elements (i.e. `<li>`), each containing an attribute associated with the username the user status.

The {{domxref("MutationObserver")}} observes changes in the status and username attributes of the elements via the {{domxref("MutationObserver.observe")}} `attributeFilter` parameter- when a change is observed, the appropriate callback function is called. The methods {{domxref("MutationRecord.type")}} and {{domxref("MutationRecord.attributeName")}} are used to further filter the mutations to execute some desired functionality.

```js
const userListElement = document.querySelector("#userlist");

const observer = new MutationObserver(callback);
observer.observe(userListElement, {
  attributeFilter: [ "status", "username" ],
  attributeOldValue: true,
  subtree: true
});

function callback(mutationList) {
  mutationList.forEach((mutation) => {
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
