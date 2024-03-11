---
title: "console: dir() static method"
short-title: dir()
slug: Web/API/console/dir_static
page-type: web-api-instance-method
browser-compat: api.console.dir_static
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console.dir()`** static method displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objects.

In other words, `console.dir()` is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.

![A screenshot of the Firefox console where console.dir(document.location) is run. We can see the URL of the page, followed by a block of properties. If the property is a function or an object, a disclosure triangle is prepended.](console-dir.png)

## Syntax

```js-nolint
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

- [Microsoft Edge's documentation for `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Node.JS documentation for `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Google Chrome's documentation for `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
