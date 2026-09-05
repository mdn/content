---
title: Namespace.propertyName
slug: Mozilla/Add-ons/WebExtensions/API/Namespace/propertyName
page-type: webextension-api-property
# Add status if the property is deprecated or experimental, otherwise remove the status field
status:
  - deprecated
  - experimental
browser-compat: webextensions.api.Namespace.propertyName
sidebar: addonsidebar
---

<!-- If this property is experimental, include the following macro -->

{{SeeCompatTable}}

<!-- If this property is deprecated, include a warning with replacement info -->

> [!WARNING]
> This property is deprecated. Use {{WebExtAPIRef("Namespace.replacementProperty")}} instead.

<!-- Write one or two sentences describing what the property does -->

A {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} object that can be used to …

<!-- If the property is an object, describe it using a WebExtAPIRef link as above -->
<!-- If the property is a simple value, just describe the type and purpose -->

## Value

<!-- Describe the property value. Pick one of the patterns below and remove the rest -->

<!-- If the value is the same for all browsers -->

Its value is `value`.

<!-- If the property can take multiple values -->

This value is a string whose possible values are:

- `value1`
  - : Description of value1.
- `value2`
  - : Description of value2.

<!-- If the values vary between browsers -->

Its value is:

- in Chrome, `value`
- in Firefox, `value`
- in Safari, `value`

<!-- If the property is read-only -->

This property is read-only.

## Description

<!-- Add a detailed description of the property's behavior, how it interacts with other APIs, edge cases, etc. -->
<!-- This section can be omitted if the introductory paragraph and Value section are sufficient. -->

## Examples

### Example title

<!-- Write a descriptive title and a short example showing how to use the property -->

```js
browser.Namespace.propertyName.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

<!-- Add see also links as appropriate -->

## See also

- {{WebExtAPIRef("Namespace")}}
