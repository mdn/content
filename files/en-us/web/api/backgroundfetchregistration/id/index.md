---
title: BackgroundFetchRegistration.id
slug: Web/API/BackgroundFetchRegistration/id
tags:
  - API
  - Property
  - Reference
  - id
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration.id
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`id`** read-only property of the {{domxref("BackgroundFetchRegistration")}} interface returns a copy of the background fetch's `ID`.

## Syntax

```js
let id = BackgroundFetchRegistration.id;
```

### Value

A {{domxref("DOMString","string")}}.

## Examples

Logging the {{domxref("BackgroundFetchRegistration.id")}} to the console returns the `ID` set when registering the fetch. In this case, `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
