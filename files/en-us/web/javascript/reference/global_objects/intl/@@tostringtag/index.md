---
title: Intl[@@toStringTag]
slug: Web/JavaScript/Reference/Global_Objects/Intl/@@toStringTag
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.@@toStringTag
---
{{JSRef}}

The **`Intl[@@toStringTag]`** property has an initial value of
"Intl".

{{EmbedInteractiveExample("pages/js/intl-prototype-tostringtag.html","shorter")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

{{js_property_attributes(0,0,1)}}

## Syntax

```js
Intl[Symbol.toStringTag]
```

## Examples

### Using toStringTag

```js
Object.prototype.toString.call(Intl) // "[object Intl]"
Intl.toString() // "[object Intl]"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Symbol.toStringTag")}}
