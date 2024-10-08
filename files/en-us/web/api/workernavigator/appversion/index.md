---
title: "WorkerNavigator: appVersion property"
short-title: appVersion
slug: Web/API/WorkerNavigator/appVersion
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.WorkerNavigator.appVersion
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}{{AvailableInWorkers("worker")}}

Returns either `"4.0"` or a string representing version information about
the browser.

> [!NOTE]
> Do not rely on this property to return the correct browser version.

## Value

Either `"4.0"` or a string representing version information about the
browser.

## Examples

```js
alert(`Your browser version is reported as ${navigator.appVersion}`);
```

## Notes

The `navigator.userAgent` property may also contain the version
number (for example
`"Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1"`),
but you should be aware of how easy it is to change the user agent string and "spoof"
other browsers, platforms, or user agents, and also how cavalier the browser vendor
themselves are with these properties.

The `navigator.appVersion`, `navigator.appName` and
`navigator.userAgent` properties have been used in "browser sniffing"
code: scripts that attempt to find out what kind of browser you are using and adjust
pages accordingly. This lead to the current situation, where browsers had to return fake
values from these properties in order not to be locked out of some websites.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
