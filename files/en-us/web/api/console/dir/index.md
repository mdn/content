---
title: console.dir()
slug: Web/API/console/dir
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Reference
  - Web Development
  - console
  - web console
browser-compat: api.console.dir
---
{{APIRef("Console API")}}

The method **`console.dir()`** displays an interactive list of the properties of
the specified JavaScript object. The output is presented as a hierarchical
listing with disclosure triangles that let you see the contents of child objects.

In other words, `console.dir()` is the way to see all the properties of a
specified JavaScript object in console by which the developer can easily get the
properties of the object.

{{AvailableInWorkers}}

![console-dir.png](console-dir.png)

## Syntax

```js
dir(object)
```

### Parameters

- `object`
  - : A JavaScript object whose properties should be output.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSDN: Using the F12 Tools Console to View Errors and Status](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85))
- [Chrome Console API reference](https://developer.chrome.com/docs/devtools/console/api/#dir)
