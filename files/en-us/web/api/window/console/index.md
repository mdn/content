---
title: Window.console
slug: Web/API/Window/console
tags:
  - API
  - Property
  - Read-only
  - Reference
  - Window
  - console
---
{{APIRef}}

The **`Window.console`** property returns a reference to the {{domxref("console")}} object, which provides methods for logging information to the browser's console. These methods are intended for debugging purposes only and should not be relied on for presenting information to end users.

## Examples

### Logging to console

The first example logs text to the console.

```js
console.log("An error occurred while loading the content");
```

The next example logs an object to the console, with the object's fields expandable using disclosure widgets:

```js
console.dir(someObject);
```

See {{SectionOnPage("/en-US/docs/Web/API/console", "Usage")}} for more thorough examples.

## Specifications

| Specification                        | Status                           | Comment             |
| ------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('Console API')}} | {{Spec2('Console API')}} | Initial definition. |

> **Note:** Currently there are many implementation differences among browsers, but work is being done to bring them together and make them more consistent with one another.
