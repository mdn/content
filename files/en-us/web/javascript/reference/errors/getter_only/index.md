---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
tags:
  - Error
  - Errors
  - JavaScript
  - Strict Mode
  - TypeError
---
{{jsSidebar("Errors")}}

The JavaScript [strict
mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)-only exception "setting getter-only property" occurs when there is an attempt
to set a new value to a property for which only a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) is specified.

## Message

```js
TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Cannot set property "prop" of #<Object> which has only a getter (Chrome)
```

## Error type

{{jsxref("TypeError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) only.

## What went wrong?

There is an attempt to set a new value to a property for which only a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) is specified.
While this will be silently ignored in non-strict mode, it will throw a
{{jsxref("TypeError")}} in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

## Examples

### Property with no setter

The example below shows how to set a getter for a property. It doesn't specify a [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set), so a
`TypeError` will be thrown upon trying to set the `temperature`
property to `30`. For more details see also the
{{jsxref("Object.defineProperty()")}} page.

```js example-bad
"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    }
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"
```

To fix this error, you will either need to remove line 16, where there is an attempt to
set the temperature property, or you will need to implement a [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) for it, for
example like this:

```js example-good
"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## See also

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
