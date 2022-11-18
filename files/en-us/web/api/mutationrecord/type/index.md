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

The {{domxref("MutationRecord")}} read-only property **`type`** is the type of the {{domxref("MutationRecord")}} observed by a {{domxref("MutationObserver")}}.

## Value

The property is set to the type of the mutation as a string. The value can be one of the following:

- `attributes` if the mutation was an attribute mutation.

- `characterData` if it was a mutation to a {{domxref("CharacterData")}} node.

- `childList` if the mutation a mutation to the tree of nodes.

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
