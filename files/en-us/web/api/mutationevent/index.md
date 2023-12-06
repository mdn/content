---
title: MutationEvent
slug: Web/API/MutationEvent
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.MutationEvent
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

The **`MutationEvent`** interface provides event properties that are specific to modifications to the Document Object Model (DOM) hierarchy and nodes.

> **Note:** Using _mutation events_ is problematic:
>
> - Their design is [flawed](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html).
> - Adding DOM mutation listeners to a document [profoundly degrades the performance](https://groups.google.com/d/topic/mozilla.dev.platform/L0Lx11u5Bvs?pli=1) of further DOM modifications to that document (making them 1.5 - 7 times slower!). Moreover, removing the listeners does not reverse the damage.
> - They have poor cross-browser compatibility: Safari doesn't support `DOMAttrModified` (see [WebKit bug 8191](https://webkit.org/b/8191)) and Firefox doesn't support _mutation name events_ (like `DOMElementNameChanged` and `DOMAttributeNameChanged`).
>
> They have been deprecated in favor of [mutation observers](/en-US/docs/Web/API/MutationObserver). **Consider using these instead.**

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}._

- {{domxref("MutationEvent.attrChange")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Indicates what kind of change triggered the `DOMAttrModified` event. It can be `MODIFICATION` (`1`), `ADDITION` (`2`) or `REMOVAL` (`3`). It has no meaning for other events and is then set to `0`.
- {{domxref("MutationEvent.attrName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Indicates the name of the node affected by the `DOMAttrModified` event. It has no meaning for other events and is then set to the empty string (`""`).
- {{domxref("MutationEvent.newValue")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : In `DOMAttrModified` events, contains the new value of the modified {{domxref("Attr")}} node. In `DOMCharacterDataModified` events, contains the new value of the modified {{domxref("CharacterData")}} node. In all other cases, returns the empty string (`""`).
- {{domxref("MutationEvent.prevValue")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : In `DOMAttrModified` events, contains the previous value of the modified {{domxref("Attr")}} node. In `DOMCharacterDataModified` events, contains previous new value of the modified{{domxref("CharacterData")}} node. In all other cases, returns the empty string (`""`).
- {{domxref("MutationEvent.relatedNode")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Indicates the node related to the event, like the changed node inside the subtree for `DOMSubtreeModified`.

## Instance methods

- {{domxref("MutationEvent.initMutationEvent()")}} {{Deprecated_Inline}}
  - : Constructor method that returns a new `MutationEvent` configured with the parameters given.

## Mutation events list

The following is a list of all mutation events:

- `DOMAttrModified` (Not supported by Safari)
- `DOMAttributeNameChanged` (Not supported by Firefox)
- `DOMCharacterDataModified`
- `DOMElementNameChanged` (Not supported by Firefox)
- `DOMNodeInserted`
- `DOMNodeInsertedIntoDocument`
- `DOMNodeRemoved`
- `DOMNodeRemovedFromDocument`
- `DOMSubtreeModified`

## Examples

You can register a listener for mutation events using {{DOMxRef("EventTarget.addEventListener()")}} as follows:

```js
element.addEventListener(
  "DOMNodeInserted",
  (event) => {
    // …
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("MutationObserver")}}
