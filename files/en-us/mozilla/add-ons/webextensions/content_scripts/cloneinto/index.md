---
title: components.utils.cloneInto()
slug: Mozilla/Add-ons/WebExtensions/API/components/utils/cloneInto
page-type: webextension-api-function
browser-compat: webextensions.api.components.utils.cloneInto
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
let clonedObject = Components.utils.cloneInto(
  obj,               // object
  targetScope,       // object
  options            // object
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
      - : `Boolean`. Whether the object's functions should be cloned. Default to `false`. Cloned functions have the same semantics as functions exported using [`Components.utils.exportFunction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/components/utils/exportFunction). See [Cloning objects that have functions](#Cloning_objects_that_have_functions). {{optional_inline}}
    - `wrapReflectors` {{optional_inline}}
      - : `boolean`. Whether objects reflected from C++, such as DOM objects, should be cloned. Defaults to `false`. See [Cloning objects that contain DOM elements](#Cloning_objects_that_contain_DOM_elements).

### Return Value

A reference to the cloned object.

## Examples

This add-on script creates an object, clones it into the content window and makes it a property of the content window global:

```js
// add-on script
var addonScriptObject = { greeting: "hello from add-on" };
contentWindow.addonScriptObject = cloneInto(addonScriptObject, contentWindow);
```

Scripts running in the page can access the object:

```js
// page script
button.addEventListener(
  "click",
  function () {
    console.log(window.addonScriptObject.greeting); // "hello from add-on"
  },
  false,
);
```

Of course, you don't have to assign the clone to the window itself; you can assign it to some other object in the target scope:

```js
contentWindow.foo.addonScriptObject = cloneInto(
  addonScriptObject,
  contentWindow,
);
```

You can also pass it into a function defined in the page script. Suppose the page script defines a function like this:

```js
// page script
function foo(greeting) {
  console.log("they said: " + greeting.message);
}
```

The add-on script can define an object, clone it, and pass it into this function:

```js
// add-on script
var addonScriptObject = { message: "hello from add-on" };
contentWindow.foo(cloneInto(addonScriptObject, contentWindow)); // "they said: hello from add-on"
```

### Cloning objects that have functions

If the object to clone contains functions, you must pass the `{cloneFunctions:true}` flag, or you get an error. If you do pass this flag, then functions in the object are cloned using the same mechanism used in [`Components.utils.exportFunction`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/components/utils/exportFunction):

```js
// add-on script
var addonScriptObject = {
  greetme: function () {
    alert("hello from add-on");
  },
};
contentWindow.addonScriptObject = cloneInto(addonScriptObject, contentWindow, {
  cloneFunctions: true,
});
```

```js
// page script
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    window.addonScriptObject.greetme();
  },
  false,
);
```

### Cloning objects that contain DOM elements

By default, if the object you clone contains objects reflected from C++, such as DOM elements, the cloning operation fails with an error. If you pass the `{wrapReflectors:true}` flag, then the object you clone contains these objects:

```js
// add-on script
var addonScriptObject = {
  body: contentWindow.document.body,
};
contentWindow.addonScriptObject = cloneInto(addonScriptObject, contentWindow, {
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
