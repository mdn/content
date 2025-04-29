---
title: exportFunction()
slug: Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction
page-type: webextension-api-function
browser-compat: webextensions.api.contentScriptGlobalScope.exportFunction
---

{{AddonSidebar()}}

This function provides a safe way to expose a function from a privileged scope to a less-privileged scope. This enables privileged code, such as an extension, to share code with less-privileged code, such as a standard web page script. A function exported from privileged to less-privileged code can be called from the less privileged code's context.

The function has access to its surrounding closure as if called in the privileged context.

The exported function doesn't need to be added to the less privileged code's global window object; it can be exported to any object in the target scope.

See [Exporting functions that take arguments](#exporting_functions_that_take_arguments) to understand what happens if the functions you export accept arguments.

## Syntax

```js-nolint
let exportedFunction = exportFunction(
  func,              // function
  targetScope,       // object
  options            // optional object
);
```

### Parameters

- `func`
  - : `function`. The function to export.
- `targetScope`
  - : `object`. The object to attach the function to. This doesn't have to be the global window object; it could be an object in the target window or created by the caller.
- `options` {{optional_inline}}

  - : `object`. Options for the function.

    - `defineAs` {{optional_inline}}
      - : `string`. The name of the function in `targetScope`. If omitted, you need to assign the return value of `exportFunction()` to an object in the target scope.
    - `allowCrossOriginArguments` {{optional_inline}}
      - : `boolean`. Whether to check that arguments to the exported function are [subsumed](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) by the caller. This allows the caller to pass objects with a different origin into the exported function, which can then use its privileged status to make cross-origin requests with the object. Defaults to `false`.

### Return value

The placeholder function created in the target context.

## Exporting functions that take arguments

Any arguments passed into the function are not cloned. Instead, they are passed through to the privileged scope as [Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html).

### Modifying the argument

An Xray for an object refers to the original. Any changes to the argument made in the exported function affect the original object passed in. For example:

```js
// privileged scope: for example, a content script
function changeMyName(user) {
  user.name = "Bill";
}
exportFunction(changeMyName, window, {
  defineAs: "changeMyName",
});
```

```js
// less-privileged scope: for example, a page script
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

This behavior is subject to the normal rules of Xrays. For example, an expando property added to a DOM node isn't visible in the original object.

### Xray filtering and waiving

Xrays provide a filtered view of the original object. For example, functions aren't visible in the Xrays of JavaScript [`Object`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) types. If you need unfiltered access to the original, you can [waive Xrays](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#waiving-xray-vision):

```js
// privileged scope: for example, a content script
function logUser(user) {
  // console.log(user.getUser());                 // error
  console.log(user.wrappedJSObject.getUser()); // "Bill"
}
exportFunction(logUser, window, {
  defineAs: "logUser",
});
```

```js
// less-privileged scope: for example, a page script
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

See [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) in the Firefox Source Tree documentation for more information.

### Passing functions as arguments

If functions are given as arguments, these are also passed as Xrays. As you can call `Function` Xrays like normal functions, this means that passing callbacks into the exported function works:

```js
// privileged scope: for example, a content script
function logUser(getUser) {
  console.log(getUser()); // "Bill"
}
exportFunction(logUser, unsafeWindow, {
  defineAs: "logUser",
});
```

```js
// less-privileged scope: for example, a page script
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

When the exported function is called, each argument, including `this`, is checked to ensure the caller [subsumes](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/index.html#subsumes) that argument. This prevents passing cross-origin objects (such as `Window` or `Location`) to privileged functions, as the privileged code has full access to those objects and could unintentionally do something dangerous. This provision can be overridden by passing `{ allowCrossOriginArguments: true }` to `exportFunction`.

## Examples

### Export to global scope

This script defines a function and then exports it to a content window:

```js
// extension-script.js
var salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
exportFunction(greetMe, window, { defineAs: "foo" });
```

Instead of using `defineAs`, the script can assign the result of `exportFunction` to an object in the target scope:

```js
// extension-script.js
var salutation = "hello ";
function greetMe(user) {
  return salutation + user;
}
window.foo = exportFunction(greetMe, window);
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

Now the extension script can attach the function to `bar`:

```js
// extension-script.js
exportFunction(greetMe, window.bar, {
  defineAs: "greetMe",
});
```

```js
// page-script.js
var value = bar.greetMe("bob");
console.log(value);
// "hello bob"
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
