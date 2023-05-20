---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
page-type: javascript-class
browser-compat: javascript.builtins.Intl.Collator
---

{{JSRef}}

The **`Intl.Collator`** object enables language-sensitive string comparison.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Constructor

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : Creates a new `Collator` object.

## Static methods

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance properties

These properties are defined on `Intl.Collator.prototype` and shared by all `Intl.Collator` instances.

- {{jsxref("Object/constructor", "Intl.Collator.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Intl.Collator` instances, the initial value is the {{jsxref("Intl/Collator/Collator", "Intl.Collator")}} constructor.
- `Intl.Collator.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Intl.Collator"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare()")}}
  - : Getter function that compares two strings according to the sort order of this {{jsxref("Global_Objects/Intl/Collator", "Intl.Collator")}} object.
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.

## Examples

### Using Collator

The following example demonstrates the different potential results for a string occurring before, after, or at the same level as another:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Note that the results shown in the code above can vary between browsers and browser versions. This is because the values are implementation-specific. That is, the specification requires only that the before and after values are negative and positive.

### Using locales

The results provided by [`Intl.Collator.prototype.compare()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) vary between languages. In order to get the sort order of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

```js
// in German, ä sorts with a
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1, or some other negative value

// in Swedish, ä sorts after z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1, or some other positive value
```

### Using options

The results provided by [`Intl.Collator.prototype.compare()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) can be customized using the `options` argument:

```js
// in German, ä has a as the base letter
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// 0

// in Swedish, ä and a are separate base letters
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// 1, or some other positive value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
