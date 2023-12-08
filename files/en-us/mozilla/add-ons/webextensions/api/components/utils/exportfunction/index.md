---
title: components.utils.exportFunction()
slug: Mozilla/Add-ons/WebExtensions/API/components/utils/exportFunction
page-type: webextension-api-function
browser-compat: webextensions.api.components.utils.exportFunction
---

{{AddonSidebar()}}

This function provides a safe way to expose a function from a privileged scope to a less-privileged scope. In this way privileged code, such as an add-on, can share code with less-privileged code like a normal web page script. A function exported from privileged to less-privileged code can be called from the less privileged code's context.

The function has access to its surrounding closure just as if it were being called in the privileged context.

The exported function does not have to be added to the less privileged code's global window object: it can be exported to any object in the target scope.

`exportFunction()` is made available as a global in sandboxes which have the `wantExportHelpers` option set in the [`Sandbox()`](https://www.devdoc.net/web/developer.mozilla.org/en-US/docs/Components.utils.Sandbox.html) constructor. This includes Add-on SDK [content scripts](https://www.devdoc.net/web/developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Accessing_the_DOM.html).

To understand what happens if the functions you export accept arguments, see [Exporting functions that take arguments](#Exporting_functions_that_take_arguments).

## Syntax

```js-nolint
let exportFunctionuating = Components.utils.exportFunction(
  func,              // function
  targetScope,       // object
  options            // object
);
```

### Parameters

- `func`
  - : `function`. The function to export.
- `targetScope`
  - : `object`. The object to attach the function to. This does not have to be the global window object: it could be any other object in the target window, or an object created by the caller.
- `options` {{optional_inline}}

  - : `object`. Options for the function, as follows:

    - `defineAs` {{optional_inline}}
      - : `string`. The name of the function in `targetScope`. If this is omitted, you need to assign the return value of `exportFunction()` to an object in the target scope.
    - `allowCrossOriginArguments` {{optional_inline}}
      - : `boolean`. Do not check that arguments to the exported function are [subsumed](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) by the caller: this allows the caller to pass objects with a different origin into the exported function, which can then use its privileged status to make cross-origin requests with them. Defaults to `false`.

### Return value

The placeholder function which has been created in the target context.

## Exporting functions that take arguments

Any arguments passed into the function are not cloned. Instead, they are passed through to the privileged scope as [Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html).

### Modifying the argument

An Xray for an object refers to the original, so any changes to the argument that are made in the exported function affect the original object that was passed in:

```js
// ad// privileged scope: for example, a content script
function changeMyName(user) {
  user.name = "Bill";
}
exportFunction(changeMyName, contentWindow, {
  defineAs: "changeMyName",
});
```

```js
// ad// less-privileged scope: for example, a page script
var user = { name: "Jim" };
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    console.log(user.name); // "Jim"
    window.changeMyName(user);
    console.log(user.name); // "Bill"
  },
  false,
);
```

Note that this is subject to the normal rules of Xrays: for example, an expando property added to a DOM node is not visible in the original object.

### Xray filtering and waiving

Xrays provide a filtered view of the original object. For the full details refer to the documentation for [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html), but for example: functions are not visible in the Xrays of JavaScript [`Object`](/en-US/docs/JavaScript/Reference/Global_Objects/Object.1.html) types. If you need unfiltered access to the original, you can [waive Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#waiving-xray-vision):

```js
// ad// privileged scope: for example, a content script
function logUser(user) {
  // console.log(user.getUser());                 // error
  console.log(user.wrappedJSObject.getUser()); // "Bill"
}
exportFunction(logUser, contentWindow, {
  defineAs: "logUser",
});
```

```js
// ad// less-privileged scope: for example, a page script
var user = {
  getUser: function () {
    return "Bill";
  },
};
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    window.logUser(user);
  },
  false,
);
```

### Passing functions as arguments

If functions are given as arguments, these are also passed as Xrays. Because you can call `Function` Xrays like normal functions, this means that passing callbacks into the exported function works:

```js
// ad// privileged scope: for example, a content script
function logUser(getUser) {
  console.log(getUser()); // "Bill"
}
exportFunction(logUser, unsafeWindow, {
  defineAs: "logUser",
});
```

```js
// ad// less-privileged scope: for example, a page script
function getUser() {
  return "Bill";
}
var test = document.getElementById("test");
test.addEventListener(
  "click",
  function () {
    window.logUser(getUser);
  },
  false,
);
```

### Cross-origin checking

When the exported function is called each argument, including `this`, is checked to make sure that the caller [subsumes](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) that argument. This prevents passing cross-origin objects (such as `Window` or `Location`) to privileged functions, as the privileged code has full access to those objects and might unintentionally do something dangerous. This provision can be overridden by passing `{ allowCrossOriginArguments: true }` to `exportFunction`.

## Examples

### Export to global scope

This add-on script defines a function, then exports it to a content window:

```js
// addon-script.js
var salutation = "hello ";
function greetme(user) {
  return salutation + user;
}
Components.utils.exportFunction(greetme, contentWindow, { defineAs: "foo" });
```

Instead of using `defineAs`, the script can assign the result of `exportFunction` to an object in the target scope:

```js
// addon-script.js
var salutation = "hello ";
function greetme(user) {
  return salutation + user;
}
contentWindow.foo = Components.utils.exportFunction(greetme, contentWindow);
```

Either way, code running in the content window's scope can call the function:

```js
// page-script.js
var greeting = foo("alice");
console.log(greeting);
// "hello alice"
```

### Export to an existing local object

Instead of attaching the function to the target's global `window` object, the caller can attach it to any other object in the target context. Suppose the content window defines a local variable `bar`:

```js
// page-script.js
var bar = {};
```

Now the add-on script can attach the function to `bar`:

```js
// addon-script.js
Components.utils.exportFunction(greetme, contentWindow.bar, {
  defineAs: "greetme",
});
```

```js
// page-script.js
var value = bar.greetme("bob");
console.log(value);
// "hello bob"
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
