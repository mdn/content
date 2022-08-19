---
title: SyncManager.register()
slug: Web/API/SyncManager/register
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Method
  - Reference
  - ServiceWorker
  - SyncManager
  - register
browser-compat: api.SyncManager.register
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

The **`SyncManager.register`** method of the
{{domxref("SyncManager")}} interface returns a {{jsxref("Promise")}} that resolves to a
{{domxref("SyncRegistration")}} instance.

## Syntax

```js
register()
register(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that sets options for an instance of {{domxref("SyncRegistration")}}. The
    available options are:

    - `allowOnBattery`
      - : A boolean that determines whether synchronization
        is allowed when the user agent is on a battery-powered device. The default
        is `true`.
    - `id`
      - : The unique identifier of the specified
        {{domxref("SyncRegistration")}} object.
    - `idleRequired`
      - : A boolean that determines whether synchronization is
        allowed when the user agent's device is idle. The default is `false`.
    - `maxDelay`
      - : The maximum delay in milliseconds before the next
        `sync` event (or the first `sync` event if it is periodic).
        The default is `0`, meaning there is no maximum delay.
    - `minDelay`
      - : The minimum delay in milliseconds before the
        next `sync` event (or the first sync event if it is periodic). The
        default is `0`.
    - `minPeriod`
      - : The minimum time
        in milliseconds between periodic sync events. The default is `0`,
        meaning events are not periodic.
    - `minRequiredNetwork`
      - : The network condition under which background
        synchronization will occur. Valid values are `'network-any'`,
        `'network-offline'`, `'network-online'`,
        `'network-non-mobile'`. The default value is
        `'network-online'`.

### Return value

A {{jsxref("Promise")}} that resolves to an instance of
{{domxref("SyncRegistration")}}.

## Browser compatibility

{{Compat}}
