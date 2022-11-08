---
title: MutationRecord.type
slug: Web/API/MutationRecord/type
page-type: web-api-instance-property
tags:
  - type
  - MutationRecord
  - Property
  - Reference
browser-compat: api.MutationRecord.type
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} property **`type`** is the type of the {{domxref("MutationRecord")}} observed by a {{domxref("MutationObserver")}}.

## Value

The property is set to the type of the mutated node as a string. The value can be one of the following:

- The value will be `attributes` if the mutation to the target node of the was an attribute mutation, {{domxref("Attr")}}. This mutated node type can appear if the "attribute" parameter of {{domxref("MutationObserver.observe()")}} is set to true or the `attributeFilter` parameter is in use.

- The value will be `childList` if the mutation to the target node was a mutation to the tree of nodes, i.e. the `childList` paremeter of {{domxref("MutationObserver.observe()")}} is set to true.

- The value will be `characterData` if it was called on a mutation to a {{domxref("CharacterData")}} node.

## Examples

This code snippet is used to observe changes in a userlist: the userlist is DOM element that functions as a list of all users currently connected to a server (in this example, consider it is a `<ul>`). The userlist itself contains child elements (i.e. `<li>`), each containing an attribute associated with the username the user status.

The {{domxref("MutationObserver")}} observes changes in the status and username attributes of the elements via the {{domxref("MutationObserver.observe()")}} `attributeFilter` parameter- when a change is observed, the appropriate callback function is called. The propertys {{domxref("MutationRecord.type")}} and {{domxref("MutationRecord.attributeName")}} are used to further filter the mutations to execute some desired functionality.

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
    if (mutation.type == "attributes") {
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
