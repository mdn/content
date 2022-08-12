---
title: proxy.register()
slug: Mozilla/Add-ons/WebExtensions/API/proxy/register
tags:
  - API
  - Add-ons
  - Function
  - Method
  - Proxy
  - Reference
  - WebExtensions
  - register
  - registerProxyScript
browser-compat: webextensions.api.proxy.register
---
{{AddonSidebar()}} {{deprecated_header}}

> **Warning:** This method was deprecated in Firefox 68 and removed in Firefox 71. In Firefox 68–70, calling this method logs an error message to the console:
>
> ![](proxy_register_warning.png)

Registers a [Proxy Auto-Configuration (PAC) file](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file). The file is executed immediately, and its `FindProxyForURL()` function will be called for any HTTP or HTTPS requests.

If PAC files are registered by more than one extension, then requests will be passed initially to the one that was registered first.

- If the `FindProxyForURL()` function in the first PAC returns "DIRECT" for a request, then the request will be passed unchanged to the `FindProxyForURL()` function in the next PAC.
- If the `FindProxyForURL()` function in the first PAC proxies the request by returning "PROXY" or some other proxying value, then the proxy URL will be passed to the `FindProxyForURL()` function in the next PAC.

Each extension can only register a single PAC file: if you call `register()` twice, the second PAC file will replace the first.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Communicating with PAC files

You can exchange messages between the PAC file and your extension's background page (or any other privileged pages, like popup pages) using [`runtime.sendMessage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) and [`runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage).

To send a message to the PAC file, you must set the `toProxyScript` option:

```js
// background.js

// Log any messages from the proxy.
browser.runtime.onMessage.addListener((message, sender) => {
  if (sender.url === browser.extension.getURL(proxyScriptURL)) {
    console.log(message);
  }
});

let messageToProxy = {
  enabled: true,
  foo: "A string",
  bar: 1234
};

browser.runtime.sendMessage(messageToProxy, {toProxyScript: true});
```

```js
// pac.js

browser.runtime.onMessage.addListener((message) => {
  if (message.enabled) {
    browser.runtime.sendMessage("I'm enabled!");
  }
});
```

## PAC file specification

The basic PAC file syntax is described in the [PAC documentation](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file), but the implementation used by the proxy API differs from standard PAC design in several ways, which are described in this section.

### FindProxyForURL() return value

The standard `FindProxyForURL()` [returns a string](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#return_value_format). In Firefox 55 and 56, the PAC file used with the proxy API also returns a string. In Firefox 55 _only_, you must pass an argument to the "DIRECT" return value, even though it doesn't need an argument.

From Firefox 57 onwards, `FindProxyForURL()` may still return a string, but may alternatively (and preferably) return an array of {{WebExtAPIRef("proxy.ProxyInfo")}} objects.

If the array contains more than one object, then all `ProxyInfo` objects after the first one represent failovers: if the proxy at position N in the array is not reachable when its `ProxyInfo.failoverTimeout` expires, then the browser will try the proxy at position N+1.

For example:

```js
const proxySpecification = [
  {
    type: "socks",
    host: "foo.com",
    port: 1080,
    proxyDNS: true,
    failoverTimeout: 5
  },
  {
    type: "socks",
    host: "bar.com",
    port: 1060,
  }
];
```

The first proxy in the array will be tried first. If it does not respond in `failoverTimeout` seconds, the next will be tried, until the end of the array is reached.

### PAC file environment

The global helper functions usually available for PAC files ([`isPlainHostName()`](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#isplainhostname), [`dnsDomainIs()`](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#dnsdomainis), and so on) are not available.

Code running in the PAC file does not get access to:

- any DOM functions (for example, [window](/en-US/docs/Web/API/Window) or any of its properties)
- any WebExtension APIs except [`runtime.sendMessage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) and [`runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- the [Console API](/en-US/docs/Web/API/console) - to log messages from a PAC, send a message to the background script:

```js
//  pac.js

// send the log message to the background script
browser.runtime.sendMessage(`Proxy-blocker: blocked ${url}`);
```

```js
// background-script.js

function handleMessage(message, sender) {
  // only handle messages from the proxy script
  if (sender.url !== browser.extension.getURL(proxyScriptURL)) {
    return;
  }
  console.log(message);
}

browser.runtime.onMessage.addListener(handleMessage);
```

## Syntax

```js
let registering = browser.proxy.register(
  url   // string
)
```

### Parameters

- `url`
  - : `String`. URL pointing to the PAC file to load. PAC files must be bundled with the extension, and `url` must be relative to the extension's [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the PAC file has been registered, or rejected if there was an error.

## Examples

```js
const proxyScriptURL = "proxy/proxy-script.js";

browser.proxy.register(proxyScriptURL);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
