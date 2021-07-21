---
title: FinalizationRegistry.prototype.unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
tags:
  - FinalizationRegistry
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.FinalizationRegistry.unregister
---
{{JSRef}}

The `unregister` unregisters a target object from a
{{jsxref("FinalizationRegistry")}} instance.

## Syntax

```js
unregister(unregisterToken);
```

### Parameters

- `unregisterToken`
  - : The token used with the {{jsxref("FinalizationRegistry.prototype.register",
        "register")}} method when registering the target object.

### Return value

`undefined`.

## Notes

When a target object has been reclaimed, it is no longer registered in the registry.
There is no need to all `unregister` in your cleanup callback. Only call
`unregister` if you haven't received a cleanup callback and no longer need
to receive one.

## Examples

### Using unregister

This example shows registering a target object using that same object as the unregister
token, then later unregistering it via `unregister`:

```js
class Thingy {
    #cleanup = label => {
    //         ^^^^^−−−−− held value
        console.error(
            `The \`release\` method was never called for the object with the label "${label}"`
        );
    };
    #registry = new FinalizationRegistry(this.#cleanup);

    /**
     * Constructs a `Thingy` instance. Be sure to call `release` when you're done with it.
     *
     * @param   label       A label for the `Thingy`.
     */
    constructor(label) {
        //                            vvvvv−−−−− held value
        this.#registry.register(this, label, this);
        //          target −−−−−^^^^         ^^^^−−−−− unregister token
    }

    /**
     * Releases resources held by this `Thingy` instance.
     */
    release() {
        this.#registry.unregister(this);
        //                        ^^^^−−−−− unregister token
    }
}
```

This example shows registering a target object using a different object as its
unregister token:

```js
 {
    //         ^^^^−−−−− held value
        console.error(
            `The \`release\` method was never called for the \`Thingy\` for the file "${file.name}"`
        );
    };
    #registry = new FinalizationRegistry(this.#cleanup);

    /**
     * Constructs a `Thingy` instance for the given file. Be sure to call `release` when you're done with it.
     *
     * @param   filename    The name of the file.
     */
    constructor(filename) {
        this.#file = File.open(filename);
        //                            vvvvv−−−−− held value
        this.#registry.register(this, label, this.#file);
        //          target −−−−−^^^^         ^^^^^^^^^^−−−−− unregister token
    }

    /**
     * Releases resources held by this `Thingy` instance.
     */
    release() {
        if (this.#file) {
            this.#registry.unregister(this.#file);
            //                        ^^^^^^^^^^−−−−− unregister token
            File.close(this.#file);
            this.#file = null;
        }
    }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("FinalizationRegistry")}}
