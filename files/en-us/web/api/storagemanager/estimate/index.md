---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
tags:
  - API
  - Method
  - Quota
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageManager
  - Usage
  - estimate
browser-compat: api.StorageManager.estimate
---
{{securecontext_header}}{{APIRef("Storage")}}

The **`estimate()`** method of the {{domxref("StorageManager")}} interface asks the Storage Manager for how much storage the current [origin](/en-US/docs/Glossary/Same-origin_policy) takes up (`usage`), and how much space is available (`quota`).

This method operates asynchronously, so it returns a {{jsxref("Promise")}} which resolves once the information is available. The promise's fulfillment handler is called with a {{domxref("StorageEstimate")}} containing the usage and quota data.

## Syntax

```js
const estimatePromise = StorageManager.estimate();
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves to an object which conforms to the {{domxref('StorageEstimate')}} dictionary. This dictionary contains estimates of how much space is available to the origin in {{domxref("StorageEstimate.quota")}}, as well as how much is currently used in {{domxref("StorageEstimate.usage")}}.

> **Note:** The returned values are not exact: between compression, deduplication, and obfuscation for security reasons, they will be imprecise.

You may find that the `quota` varies from origin to origin. This variance is based on factors such as:

- How often the user visits
- Public site popularity data
- User engagement signals like bookmarking, adding to homescreen, or accepting push notifications

## Example

In this example, we obtain the usage estimates and present the percentage of storage capacity currently used to the user.

### HTML content

```html
<label>
  You’re currently using about <output id="percent">
  </output>% of your available storage.
</label>
```

### JavaScript content

```js
navigator.storage.estimate().then(function(estimate) {
  document.getElementById("percent").value =
      (estimate.usage / estimate.quota * 100).toFixed(2);
});
```

### Result

{{ EmbedLiveSample('Example', 600, 40) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Storage API
- {{domxref("Storage")}}, the object returned by {{domxref("Window.localStorage")}}
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
