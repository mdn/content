---
title: MutationRecord.oldValue
slug: Web/API/MutationRecord/oldValue
page-type: web-api-instance-property
tags:
  - oldValue
  - MutationRecord
  - Property
  - Reference
browser-compat: api.MutationRecord.oldValue
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} **`oldValue`** property contains the character data or attribute value of an observed node before it was changed.

## Value

The property is set to the value (as a string) of a node before a mutation observed with a {{domxref("MutationObserver")}}. The value depends based on the value of {{domxref("MutationRecord.type")}}.

> **Note:** For this to work as expected, the `attributeOldValue` or `characterDataOldValue` parameters of the
> {{domxref("MutationObserver.observe()")}} must be set to `true` to demonstrate the functionality detailed below.

- If the mutation type is `attributes`, the value will be the pre-mutation value of the attribute element whose attribute(s) have been mutated.

- If the mutation type is `characterData`, the value will be the pre-mutation value of the {{domxref("characterData")}} node that has been mutated.

- If the mutation type is `childList`, the value will be `null`.

## Examples

In this code snippet, we'll create a span element with the content `foo` and observe it with a {{domxref("MutationObserver")}}. The observer will log to the console the value of the `foo` element before the mutation once the mutation occurs. If we change the value of the `foo` element to `bar`, the {{domxref("MutationRecord.oldValue")}} will be `foo`- if we change it again to `baz`, the `oldValue` property will be `bar`.

```js
// Create a span with "foo"
let span = document.createElement("span");
span.innerHTML = "foo";

// Create a mutation observer
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Log the old value of the span once the mutation occurs
        console.log(mutation.oldValue);
    });
});

// Observe the span for mutations
observer.observe(span, {
    characterData: true,
    characterDataOldValue: true
});

// Change the content of the span to "bar"
span.innerHTML = "bar";
/// Console output: foo

// Change it again to "baz"
span.innerHTML = "baz";
/// Console output: bar

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
