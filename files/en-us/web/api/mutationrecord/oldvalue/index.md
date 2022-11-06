---
title: MutationRecord.oldValue()
slug: Web/API/MutationRecord/oldValue
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
browser-compat: api.MutationRecord.oldValue
---

{{APIRef("DOM")}}

The {{domxref("MutationRecord")}} method **`oldValue()`** returns the value of the {{domxref("MutationRecord.target")}} node before the observation of a mutation by a {{domxref("MutationObserver")}} if the `attributeOldValue` or `characterDataOldValue` parameters of the
{{domxref("MutationObserver.observe")}} are set to `true`.

## Syntax

```js-nolint
oldValue()
```

### Parameters

None.

### Return value

The return value depends based on the value of {{domxref("MutationRecord.type")}}. The method returns the value (as a string) of a node before a mutation observed with a {{domxref("MutationObserver")}}; otherwise, `null` is returned.

> **Note:** For this to work as expected, the `attributeOldValue` or `characterDataOldValue` parameters of the
> {{domxref("MutationObserver.observe")}} must be set to `true` to demonstrate the return functionality detailed below.

- If the mutation type is `attributes`, the method will return the pre-mutation value of the attribute element whose attribute(s) have been mutated.

- If the mutation type is `characterData`, the method will return the pre-mutation value of the {{domxref("characterData")}} node that has been mutated.

- If the mutation type is `childList`, the method will return `null`.

## Examples

In this code snippet, we'll create a span element with the content `foo` and observe it with a {{domxref("MutationObserver")}}. The observer will log to the console the value of the `foo` element before the mutation once the mutation occurs. If we change the value of the `foo` element to `bar`, the {{domxref("MutationRecord.oldValue")}} will be `foo`- if we change it again to `baz`, the `oldValue` method will return `bar`.

```js
// Create a span with "foo"
var span = document.createElement("span");
span.innerHTML = "foo";

// Create a mutation observer
var observer = new MutationObserver(function(mutations) {
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
