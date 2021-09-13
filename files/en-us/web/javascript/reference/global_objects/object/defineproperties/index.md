---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
tags:
  - ECMAScript 5
  - JavaScript
  - Method
  - Object
browser-compat: javascript.builtins.Object.defineProperties
---
{{JSRef}}

The **`Object.defineProperties()`** method defines new or
modifies existing properties directly on an object, returning the object.

{{EmbedInteractiveExample("pages/js/object-defineproperties.html")}}

## Syntax

```js
Object.defineProperties(obj, props)
```

### Parameters

- `obj`
  - : The object on which to define or modify properties.
- `props`

  - : An object whose keys represent the names of properties to be defined or modified and
    whose values are objects describing those properties. Each value in `props`
    must be either a data descriptor or an accessor descriptor; it cannot be both (see
    {{jsxref("Object.defineProperty()")}} for more details).

    Data descriptors and accessor descriptors may optionally contain the following keys:

    - `configurable`
      - : `true` if and only if the type of this property descriptor may be
        changed and if the property may be deleted from the corresponding object.
        **Defaults to `false`.**
    - `enumerable`
      - : `true` if and only if this property shows up during enumeration of
        the properties on the corresponding object.
        **Defaults to `false`.**

    A data descriptor also has the following optional keys:

    - `value`
      - : The value associated with the property. Can be any valid JavaScript value
        (number, object, function, etc).
        **Defaults to {{jsxref("undefined")}}.**
    - `writable`
      - : `true` if and only if the value associated with the property may be
        changed with an {{jsxref("Operators#assignment_operators", "assignment operator",
        "", 1)}}.
        **Defaults to `false`.**

    An accessor descriptor also has the following optional keys:

    - `get`
      - : A function which serves as a getter for the property, or {{jsxref("undefined")}}
        if there is no getter. The function's return value will be used as the value of
        the property.
        **Defaults to {{jsxref("undefined")}}.**
    - `set`
      - : A function which serves as a setter for the property, or {{jsxref("undefined")}}
        if there is no setter. The function will receive as its only argument the new
        value being assigned to the property.
        **Defaults to {{jsxref("undefined")}}.**

    If a descriptor has neither of `value`, `writable`,
    `get` and `set` keys, it is treated as a data descriptor. If a
    descriptor has both `value` or `writable` and `get`
    or `set` keys, an exception is thrown.

### Return value

The object that was passed to the function.

## Examples

### Using Object.defineProperties

```js
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

## Polyfill

Assuming a pristine execution environment with all names and properties referring to
their initial values, `Object.defineProperties` is almost completely
equivalent (note the comment in `isCallable`) to the following
reimplementation in JavaScript:

```js
function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB: modify as necessary if other values than functions are callable.
      return typeof v === 'function';
    }

    if (typeof desc !== 'object' || desc === null)
      throw new TypeError('bad desc');

    var d = {};

    if (hasProperty(desc, 'enumerable'))
      d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, 'configurable'))
      d.configurable = !!desc.configurable;
    if (hasProperty(desc, 'value'))
      d.value = desc.value;
    if (hasProperty(desc, 'writable'))
      d.writable = !!desc.writable;
    if (hasProperty(desc, 'get')) {
      var g = desc.get;

      if (!isCallable(g) && typeof g !== 'undefined')
        throw new TypeError('bad get');
      d.get = g;
    }
    if (hasProperty(desc, 'set')) {
      var s = desc.set;
      if (!isCallable(s) && typeof s !== 'undefined')
        throw new TypeError('bad set');
      d.set = s;
    }

    if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d))
      throw new TypeError('identity-confused descriptor');

    return d;
  }

  if (typeof obj !== 'object' || obj === null)
    throw new TypeError('bad obj');

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i < descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Enumerability
  and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
