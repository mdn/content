---
title: CookieStore.onchange
slug: Web/API/CookieStore/onchange
tags:
  - API
  - Property
  - Reference
  - onchange
  - CookieStore
browser-compat: api.CookieStore.onchange
---
{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}

The **`onchange`** EventHandler of the {{domxref("CookieStore")}} interface fires when a change is made to any cookie.

## Syntax

```js
CookieStore.onchange = function() { /* ... */ }
CookieStore.addEventListener('change', function() { /* ... */ })
```

## Examples

In this example we listen for changes using the `onchange` event handler.

```js
cookieStore.onchange = function() {
    console.log('1 change event');
};
```

In this example we listen for changes using {{domxref("EventTarget.addEventListener","addEventListener()")}}.

```js
cookieStore.addEventListener('change', (event) => {
  console.log('1 change event');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
