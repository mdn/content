---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
page-type: javascript-instance-method
browser-compat: javascript.builtins.FinalizationRegistry.register
---

{{JSRef}}

The **`register()`** method of {{jsxref("FinalizationRegistry")}} instances registers an value with this `FinalizationRegistry` so that if the value is garbage-collected, the registry's callback may get called.

## Syntax

```js-nolint
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Parameters

- `target`
  - : The target value to register.
- `heldValue`
  - : The value to pass to the finalizer for this `target`. This cannot be the `target` itself but can be anything else, including functions and primitives.
- `unregisterToken` {{optional_inline}}
  - : A token that may be used with the `unregister` method later to unregister the target value. If provided (and not `undefined`), this must be an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). If not provided, the target cannot be unregistered.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - `target` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) (object as opposed to primitives; functions are objects as well)
    - `target` is the same as `heldvalue` (`target === heldValue`)
    - `unregisterToken` is not an object or a [non-registered symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)

## Description

See the [Avoid where possible](/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible)
and [Notes on cleanup callbacks](/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks)
sections of the {{jsxref("FinalizationRegistry")}} page for important caveats.

## Examples

### Using register

The following registers the value referenced by `target`,
passing in the held value `"some value"` and passing the target itself
as the unregistration token:

```js
registry.register(target, "some value", target);
```

The following registers the value referenced by `target`,
passing in another object as the held value, and not passing in any unregistration token
(which means `target` can't be unregistered):

```js
registry.register(target, { useful: "info about target" });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("FinalizationRegistry")}}
