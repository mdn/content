---
title: MutationObserverInit.attributeFilter
slug: Web/API/MutationObserverInit/attributeFilter
tags:
  - API
  - Attribute
  - Changes
  - DOM
  - DOM WHATWG
  - Mutation Observers
  - MutationObserverInit
  - Observer
  - Property
  - atttributeFilter
  - mutation
browser-compat: api.MutationObserverInit.attributeFilter
---
{{APIRef("DOM WHATWG")}}

The **{{domxref("MutationObserverInit")}}**
dictionary's optional **`attributeFilter`** property is an
array of strings specifying the names of the attributes whose values are to be
monitored for changes.

If this property is specified, there's no need to also
set {{domxref("MutationObserverInit.attributes", "attributes")}} to `true`,
as it's implied.

If the {{domxref("MutationObserverInit.attributes", "attributes")}} permission is
`true` but no `attributeFilter` is included in the options object,
all attributes' values are watched for changes.

## Syntax

```js
var options = {
  attributeFilter: [ "list", "of", "attribute", "names" ]
}
```

### Value

An array of {{domxref("DOMString")}} objects, each specifying the name of one attribute
whose value is to be monitored for changes. There is no default value.

If this property exists on the options object when the
{{domxref("MutationObserver.MutationObserver", "MutationObserver()")}} constructor is
used to create a new `MutationObserver`, attribute monitoring is enabled
regardless of whether or not the {{domxref("MutationObserverInit.attributes",
  "attributes")}} property is `true`.

## Example

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

The `callback()` function—which will be passed into the
{{domxref("MutationObserver.observe", "observe()")}} method when starting the observer,
looks at each item in the list of {{domxref("MutationRecord")}} objects. For any items
representing an attribute change (which can be detected by the value of
{{domxref("MutationRecord.type")}} being `"attributes"`), we use the
attribute's name, obtained using {{domxref("MutationRecord.attributeName")}}, to
identify the type of change that occurred and then dispatch to the appropriate handler
function.

Note the use of {{domxref("MutationRecord.oldValue")}} to get the previous value of the
`"username"` property so we have that information when doing lookups in our
local array of users.

When `observe()` is called, the specified options include both
`attributeFilter` and {{domxref("MutationObserverInit.subtree", "subtree")}},
so that we monitor the attribute values for all of the nodes contained within the
subtree rooted at the node with the ID `"userlist"`. The
{{domxref("MutationObserverInit.attributeOldValue", "attributeOldValue")}} option is set
to `true` because we want the prior value of the changed attributes recorded
and reported in the mutation records we receive.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
