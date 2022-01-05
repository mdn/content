---
title: console.dir()
slug: Web/API/console/dir
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
console.dir(object);
```

### Parameters

- `object`
  - : A JavaScript object whose properties should be output.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSDN: Using
  the F12 Tools Console to View Errors and Status](https://msdn.microsoft.com/library/gg589530)
- [Chrome
  Console API reference](https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject)
