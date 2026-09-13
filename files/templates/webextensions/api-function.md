---
title: Namespace.functionName()
slug: Mozilla/Add-ons/WebExtensions/API/Namespace/functionName
page-type: webextension-api-function
# Add status if the function is deprecated or experimental, otherwise remove the status field
status:
  - deprecated
  - experimental
browser-compat: webextensions.api.Namespace.functionName
sidebar: addonsidebar
---

<!-- If this function is experimental, include the following macro -->

{{SeeCompatTable}}

<!-- If this function is deprecated, include a warning with replacement info -->

> [!WARNING]
> This function is deprecated. Use {{WebExtAPIRef("Namespace.replacementFunction()")}} instead.

<!-- Write one or two sentences describing what the function does -->

Description of the function.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let result = browser.Namespace.functionName(
  param1,   // type
  param2    // type
);
```

### Parameters

- `param1`
  - : `type`. Description of the parameter.
- `param2` {{optional_inline}}
  - : `type`. Description of the parameter.

<!-- If there are no parameters, replace the list above with "None." -->

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with …

<!-- If the function does not return anything, use "None ({{jsxref('undefined')}})." instead -->

### Exceptions

<!-- List the exceptions the function can throw. Use a definition list with one term and definition per exception. -->
<!-- Remove this subsection if the function does not throw any exceptions. -->

- `Error`
  - : Description of when this error is thrown.

## Description

<!-- Add a detailed description of how the function behaves, edge cases, interactions with other APIs, etc. -->
<!-- This section can be omitted if the introductory paragraph is sufficient. -->

## Examples

### Example title

<!-- Write a descriptive title and a short example showing how to use the function -->

```js
browser.Namespace.functionName(param1).then((result) => {
  console.log(result);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

<!-- Add see also links as appropriate -->

## See also

- {{WebExtAPIRef("Namespace")}}
