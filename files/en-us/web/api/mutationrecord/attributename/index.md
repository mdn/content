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

The {{domxref("MutationRecord")}} **`attributeName`** property contains the name of a changed attribute belonging to a node that is observed by a {{domxref("MutationObserver")}}.

## Syntax

```js-nolint
attributeName()
```

### Parameters

None.

### Return value

If the mutated node type is `attributes`, the method will return the local name of the mutated attribute of the mutation target; returns `null` otherwise.

## Examples

This code snippet is used to observe changes in a userlist: the userlist is a DOM element that functions as a list of all users currently connected to a server (in this example, consider it is a `<ul>`). The userlist itself contains child elements (i.e. `<li>`), each containing an attribute associated with the username or the user status.

The {{domxref("MutationObserver")}} observes changes in the `status` and `username` attributes of the elements via the {{domxref("MutationObserver.observe()")}} "attributeFilter" parameter. When the value of one of the listed attributes is changed, the callback function is called. The callback uses the {{domxref("MutationRecord.type")}} and {{domxref("MutationRecord.attributeName")}} properties to take the appropriate action.

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
