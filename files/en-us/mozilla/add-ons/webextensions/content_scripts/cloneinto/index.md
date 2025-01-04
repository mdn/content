---
title: cloneInto()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto
page-type: webextension-api-function
browser-compat: webextensions.api.contentScriptGlobalScope.cloneInto
---

{{AddonSidebar()}}

This function provides a safe way to take an object defined in a privileged scope and create a [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) of it in a less-privileged scope. It returns a reference to the clone:

```js
var clonedObject = cloneInto(myObject, targetWindow);
```

You can then assign the clone to an object in the target scope as an expando property, and scripts running in that scope can access it:

```js
targetWindow.foo = clonedObject;
```

This enables privileged code, such as an extension, to share an object with less-privileged code, such as a web page script.

## Syntax

```js-nolint
let clonedObject = cloneInto(
  obj,               // object
  targetScope,       // object
  options            // optional object
);
```

### Parameters

- `obj`
  - : `object`. The object to clone.
- `targetScope`
  - : `object`. The object to attach the object to.
- `options` {{optional_inline}}
  - : `object`. Options for the function.
    - `cloneFunctions` {{optional_inline}}
      - : `boolean`. Whether the object's functions should be cloned. Default to `false`. Cloned functions have the same semantics as functions exported using [`exportFunction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction). See [Cloning objects that have functions](#cloning_objects_that_have_functions). {{optional_inline}}
    - `wrapReflectors` {{optional_inline}}
      - : `boolean`. Whether DOM objects should be passed by reference instead of cloned. DOM objects are usually not clonable. Defaults to `false`. See [Cloning objects that contain DOM elements](#cloning_objects_that_contain_dom_elements).

### Return Value

A reference to the cloned object.

## Examples

This content script creates an object, clones it into the content window and makes it a property of the content window global:

```js
// content script
var addonScriptObject = { greeting: "hello from your extension" };
window.addonScriptObject = cloneInto(addonScriptObject, window);
```

Scripts running in the page can access the object:

```js
// page script
button.addEventListener(
  "click",
  function () {
    console.log(window.addonScriptObject.greeting); // "hello from your extension"
  },
  false,
);
```

Of course, you don't have to assign the clone to the window itself; you can assign it to some other object in the target scope:

```js
// Content script
window.foo.addonScriptObject = cloneInto(addonScriptObject, window);
```

You can also pass it into a function defined in the page script. Suppose the page script defines a function like this:

```js
// page script
function foo(greeting) {
  console.log("they said: " + greeting.message);
}
```

The content script can define an object, clone it, and pass it into this function:

```js
// content script
var addonScriptObject = { message: "hello from your extension" };
window.foo(cloneInto(addonScriptObject, window)); // "they said: hello from your extension"
```

### Cloning objects that have functions

If the object to clone contains functions, you must pass the `{cloneFunctions:true}` flag, or you get an error. If you do pass this flag, then functions in the object are cloned using the same mechanism used in [`exportFunction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction):

```js
// content script
var addonScriptObject = {
  greetMe: function () {
    alert("hello from your extension");
  },
};
window.addonScriptObject = cloneInto(addonScriptObject, window, {
  cloneFunctions: true,
});
```

```js
// page script
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    window.addonScriptObject.greetMe();
  },
  false,
);
```

### Cloning objects that contain DOM elements

By default, if the object you clone contains objects reflected from C++, such as DOM elements, the cloning operation fails with an error. If you pass the `{wrapReflectors:true}` flag, then the object you clone contains these objects:

```js
// content script
var addonScriptObject = {
  body: window.document.body,
};
window.addonScriptObject = cloneInto(addonScriptObject, window, {
  wrapReflectors: true,
});
```

```js
// page script
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    console.log(window.addonScriptObject.body.innerHTML);
  },
  false,
);
```

Access to these objects in the target scope is subject to the normal [script security checks](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html).

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
