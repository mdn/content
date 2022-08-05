---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
page-type: web-api-instance-method
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

This method operates asynchronously, so it returns a {{jsxref("Promise")}} which resolves once the information is available. The promise's fulfillment handler is called with an object containing the usage and quota data.

## Syntax

```js
estimate()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves to an object with the following properties:

- `quota`
  - : A numeric value in bytes which provides a conservative approximation of the total storage the user's device or computer has available for the site origin or Web app. It's possible that there's more than this amount of space available though you can't rely on that being the case.
- `usage`
  - : A numeric value in bytes approximating the amount of storage space currently being used by the site or Web app, out of the available space as indicated by `quota`. Unit is byte.
- `usageDetails` {{Non-standard_Inline}}
  - : An object containing a breakdown of `usage` by storage system. All included properties will have a `usage` greater than 0 and any storage system with 0 `usage` will be excluded from the object.

> **Note:** The returned values are not exact: between compression, deduplication, and obfuscation for security reasons, they will be imprecise.

You may find that the `quota` varies from origin to origin. This variance is based on factors such as:

- How often the user visits
- Public site popularity data
- User engagement signals like bookmarking, adding to homescreen, or accepting push notifications

## Examples

In this example, we obtain the usage estimates and present the percentage of storage capacity currently used to the user.

### HTML content

```html
<label>
  You're currently using about <output id="percent">
  </output>% of your available storage.
</label>
```

### JavaScript content

```js
navigator.storage.estimate().then((estimate) => {
  document.getElementById("percent").value =
      (estimate.usage / estimate.quota * 100).toFixed(2);
});
```

### Result

{{ EmbedLiveSample('Examples', 600, 40) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Storage API
- {{domxref("Storage")}}, the object returned by {{domxref("Window.localStorage")}}
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
