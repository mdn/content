---
title: WorkerNavigator.onLine
slug: Web/API/WorkerNavigator/onLine
page-type: web-api-instance-property
tags:
  - API
  - DOM Reference
  - WorkerNavigator
  - Online
  - Property
  - Reference
browser-compat: api.WorkerNavigator.onLine
---
{{ApiRef("HTML DOM")}}

Returns the online status of the browser. The property returns a boolean value, with `true` meaning online and `false` meaning offline. The property sends updates whenever the browser's ability to connect to the network changes. The update occurs when the user follows links or when a script requests a remote page.

For example, the property should return `false` when users click links soon after they lose internet connection.

Browsers implement this property differently.

In Chrome and Safari, if the browser is not able to connect to a local area network (LAN) or a router, it is offline; all other conditions return `true`. So while you can assume that the browser is offline when it returns a `false` value, you cannot assume that a true value necessarily means that the browser can access the internet. You could be getting false positives, such as in cases where the computer is running a virtualization software that has virtual ethernet adapters that are always
"connected." Therefore, if you really want to determine the online status of the browser, you should develop additional means for checking. To learn more, see the 2011 article, [Working Off the Grid](https://web.dev/workingoffthegrid/).

In Firefox and Internet Explorer, switching the browser to offline mode sends a `false` value.

## Value

`online` is a boolean `true` or `false`.

## Examples

### Basic usage

To check if you are online in a worker, query `navigator.onLine`, as in the following example:

```js
if (navigator.onLine) {
  console.log('online');
} else {
  console.log('offline');
}
```

If the browser doesn't support `navigator.onLine` the above example will always come out as `false`/`undefined`.

### Listening for changes in network status

To see changes in the network state, use [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) to listen for the events on `online` and `offline`, as in the following example:

```js
addEventListener('offline', (e) => { console.log('offline'); });

addEventListener('online', (e) => { console.log('online'); });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
