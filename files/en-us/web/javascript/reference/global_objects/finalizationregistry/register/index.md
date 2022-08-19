---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
tags:
  - FinalizationRegistry
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.FinalizationRegistry.register
---
{{JSRef}}

The `register()` method registers an object with a
{{jsxref("FinalizationRegistry")}} instance so that if the object is garbage-collected,
the registry's callback may get called.

## Syntax

```js
register(target, heldValue);
register(target, heldValue, unregisterToken);
```

### Parameters

- `target`
  - : The target object to register.
- `heldValue`
  - : The value to pass to the finalizer for this object. This cannot be the `target` object but can be anything else, including functions and primitives.
- `unregisterToken` {{optional_inline}}
  - : A token that may be used with the `unregister` method later to unregister
    the target object. If provided (and not `undefined`), this must be an
    object. If not provided, the target cannot be unregistered.

### Return value

`undefined`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown when one of the following condition is met:
    - `target` is not an object (object as opposed to primitives; functions are objects as well)
    - `target` is the same as `heldvalue` (`target === heldValue`)
    - `unregisterToken` is not an object

## Notes

See the [Avoid where possible](/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible)
and [Notes on cleanup callbacks](/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#notes_on_cleanup_callbacks)
sections of the {{jsxref("FinalizationRegistry")}} page for important caveats.

## Examples

### Using register

The following registers the target object referenced by `target`,
passing in the held value `"some value"` and passing the target object itself
as the unregistration token:

```js
registry.register(target, "some value", target);
```

The following registers the target object referenced by `target`,
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
