---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "setting getter-only property" occurs when there is an attempt to set a new value to a property for which only a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) is specified, or when setting a [private property](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) that similarly only has a getter defined.

## Message

```plain
TypeError: Cannot set property x of #<Object> which has only a getter (V8-based)
TypeError: '#x' was defined without a setter (V8-based)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
TypeError: Trying to access an undefined private setter (Safari)
```

## Error type

{{jsxref("TypeError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

There is an attempt to set a new value to a property for which only a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) is specified.
While this will be silently ignored in non-strict mode, it will throw a
{{jsxref("TypeError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode). Classes are always in strict mode, so assigning to a getter-only private property always throws this error.

## Examples

### Property with no setter

The example below shows how to set a getter for a property.
It doesn't specify a [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set), so a
`TypeError` will be thrown upon trying to set the `temperature`
property to `30`. For more details see also the
{{jsxref("Object.defineProperty()")}} page.

```js example-bad
"use strict";

function Archiver() {
  const temperature = null;
  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
  });
}

const arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"
```

To fix this error, you will either need to remove the `arc.temperature = 30` line, which attempts to
set the temperature property, or you will need to implement a [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) for it, for
example like this:

```js example-good
"use strict";

function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## See also

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
