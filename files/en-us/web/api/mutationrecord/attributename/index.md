---
title: MutationRecord.attributeName()
slug: Web/API/MutationRecord/attributeName
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
browser-compat: api.MutationRecord.attributeName
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`attributeName()`** returns the local name of the mutated attribute in the {{domxref("MutationRecord")}} observed by the target of a {{domxref("MutationObserver")}}.

## Syntax

```js-nolint
attributeName()
```

### Parameters

None.

### Return value

If the mutated node type is `attributes`, the method will return the local name of the mutated attribute of the mutation target; returns `null` otherwise.

## Examples

This code snippet is used to observe changes in a userlist: the userlist is DOM element that functions as a list of all users currently connected to a server (in this example, consider it is a `<ul>`). The userlist itself contains child elements (i.e. `<li>`), each containing an attribute associated with the username the user status.

The {{domxref("MutationObserver")}} observes changes in the status and username attributes of the elements via the {{domxref("MutationObserver.observe")}} "attributeFilter" parameter- when a change is observed, the appropriate callback function is called. The methods {{domxref("MutationRecord.type")}} and {{domxref("MutationRecord.attributeName")}} are used to further filter the mutations to execute some desired functionality.

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
