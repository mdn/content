---
title: console
slug: Web/API/console
page-type: web-api-interface
browser-compat: api.console
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

The **`console`** object provides access to the debugging console (e.g., the [Web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) in Firefox).

Implementations of the console API may differ between runtimes. In particular, some console methods may work differently or not work at all in some online editors and IDEs. To see the behavior described in this documentation, try the methods in your browser's developer tools, although even here, there are some differences between browsers.

The `console` object is available in any global scope. For example:

```js
console.log("Failed to open the specified link");
```

## Instance methods

- {{domxref("console/assert_static", "console.assert()")}}
  - : Log an error message to console if the first argument is `false`.
- {{domxref("console/clear_static", "console.clear()")}}
  - : Clear the console.
- {{domxref("console/count_static", "console.count()")}}
  - : Log the number of times this line has been called with the given label.
- {{domxref("console/countReset_static", "console.countReset()")}}
  - : Resets the value of the counter with the given label.
- {{domxref("console/debug_static", "console.debug()")}}
  - : Outputs a message to the console with the debug log level.
- {{domxref("console/dir_static", "console.dir()")}}
  - : Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.
- {{domxref("console/dirxml_static", "console.dirxml()")}}
  - : Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.
- {{domxref("console/error_static", "console.error()")}}
  - : Outputs a message to the console with the error log level.
- `console.exception()` {{Non-standard_inline}} {{deprecated_inline}}
  - : An alias for `console.error()`.
- {{domxref("console/group_static", "console.group()")}}
  - : Creates a new inline [group](#using_groups_in_the_console), indenting all following output by another level. To move back out a level, call `console.groupEnd()`.
- {{domxref("console/groupCollapsed_static", "console.groupCollapsed()")}}
  - : Creates a new inline [group](#using_groups_in_the_console), indenting all following output by another level. However, unlike `console.group()` this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call `console.groupEnd()`.
- {{domxref("console/groupEnd_static", "console.groupEnd()")}}
  - : Exits the current inline [group](#using_groups_in_the_console).
- {{domxref("console/info_static", "console.info()")}}
  - : Outputs a message to the console with the info log level.
- {{domxref("console/log_static", "console.log()")}}
  - : Outputs a message to the console.
- {{domxref("console/profile_static", "console.profile()")}} {{Non-standard_inline}}
  - : Starts the browser's built-in profiler (for example, the [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)). You can specify an optional name for the profile.
- {{domxref("console/profileEnd_static", "console.profileEnd()")}} {{Non-standard_inline}}
  - : Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).
- {{domxref("console/table_static", "console.table()")}}
  - : Displays tabular data as a table.
- {{domxref("console/time_static", "console.time()")}}
  - : Starts a [timer](#timers) with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
  - : Stops the specified [timer](#timers) and logs the elapsed time in milliseconds since it started.
- {{domxref("console/timeLog_static", "console.timeLog()")}}
  - : Logs the value of the specified [timer](#timers) to the console.
- {{domxref("console/timeStamp_static", "console.timeStamp()")}} {{Non-standard_inline}}
  - : Adds a marker to the browser performance tool's timeline ([Chrome](https://developer.chrome.com/docs/devtools/performance/reference) or [Firefox](https://profiler.firefox.com/docs/#/./guide-ui-tour-timeline)).
- {{domxref("console/trace_static", "console.trace()")}}
  - : Outputs a [stack trace](#stack_traces).
- {{domxref("console/warn_static", "console.warn()")}}
  - : Outputs a message to the console with the warning log level.

## Examples

### Outputting text to the console

The console's most frequently used feature is logging text and other data. There are several categories of output you can generate using the {{domxref("console/log_static", "console.log()")}}, {{domxref("console/info_static", "console.info()")}}, {{domxref("console/warn_static", "console.warn()")}}, {{domxref("console/error_static", "console.error()")}}, or {{domxref("console/debug_static", "console.debug()")}} methods. Each of these results in output styled differently in the log, and you can use the filtering controls provided by your browser to view only the kinds of output that interest you.

There are two ways to use each of the output methods:

- Pass in a variable number of arguments whose string representations get concatenated into one string, then output to the console.
- Pass in a string containing zero or more substitution strings followed by a variable number of arguments to replace them.

#### Outputting a single object

The simplest way to use the logging methods is to output a single object:

```js
const someObject = { str: "Some text", id: 5 };
console.log(someObject);
```

The output looks something like this:

```plain
{str:"Some text", id:5}
```

The browser will display as much information about the object as it can and wishes to. For example, private state of the object may be displayed too. Certain types of objects, such as DOM elements or functions, may also be displayed in a special way.

#### Snapshotting objects

Information about an object is lazily retrieved. This means that the log message shows the content of an object at the time when it's first viewed, not when it was logged. For example:

```js
const obj = {};
console.log(obj);
obj.prop = 123;
```

This will output `{}`. However, if you expand the object's details, you will see `prop: 123`.

If you are going to mutate your object and you want to prevent the logged information from being updated, you can [deep-clone](/en-US/docs/Glossary/Deep_copy) the object before logging it. A common way is to {{jsxref("JSON.stringify()")}} and then {{jsxref("JSON.parse()")}} it:

```js
console.log(JSON.parse(JSON.stringify(obj)));
```

There are other alternatives that work in browsers, such as {{DOMxRef("Window.structuredClone", "structuredClone()")}}, which are more effective at cloning different types of objects.

#### Outputting multiple objects

You can also output multiple objects by listing them when calling the logging method, like this:

```js
const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

The output will look like this:

```plain
My first car was a Dodge Charger . The object is: {str:"Some text", id:5}
```

#### Using string substitutions

The first parameter to the logging methods can be a string containing zero or more substitution strings. Each substitution string is replaced by the corresponding argument value.

- `%o`
  - : Outputs a JavaScript object in the "optimally useful formatting" style, for example DOM elements may be displayed the same way as they would appear in the element inspector.
- `%O`
  - : Outputs a JavaScript object in the "generic JavaScript object formatting" style, usually in the form of an expandable tree. This is similar to {{domxref("console/dir_static", "console.dir()")}}.
- `%d` or `%i`
  - : Outputs an integer.
- `%s`
  - : Outputs a string.
- `%f`
  - : Outputs a floating-point value.
- `%c`
  - : Applies CSS style rules to all following text. See [Styling console output](#styling_console_output).

Some browsers may implement additional format specifiers. For example, Safari and Firefox support the C-style precision formatting `%.<precision>f`. For example `console.log("Foo %.2f", 1.1)` will output the number to 2 decimal places: `Foo 1.10`, while `console.log("Foo %.2d", 1.1)` will output the number as two significant figures with a leading 0: `Foo 01`.

Each of these pulls the next argument after the format string off the parameter list. For example:

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}
```

The output looks like this:

```plain
Hello, Bob. You've called me 1 times.
Hello, Bob. You've called me 2 times.
Hello, Bob. You've called me 3 times.
Hello, Bob. You've called me 4 times.
Hello, Bob. You've called me 5 times.
```

#### Styling console output

You can use the `%c` directive to apply a CSS style to console output:

```js
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px",
);
```

The text before the directive will not be affected, but the text after the directive will be styled using the CSS declarations in the parameter.

![Styled Text in Firefox console](css-styling.png)

You may use `%c` multiple times:

<!-- cSpell:ignore corange cred -->

```js
console.log(
  "Multiple styles: %cred %corange",
  "color: red",
  "color: orange",
  "Additional unformatted message",
);
```

The properties usable along with the `%c` syntax are as follows (at least, in Firefox — they may differ in other browsers):

- {{cssxref("background")}} and its longhand equivalents
- {{cssxref("border")}} and its longhand equivalents
- {{cssxref("border-radius")}}
- {{cssxref("box-decoration-break")}}
- {{cssxref("box-shadow")}}
- {{cssxref("clear")}} and {{cssxref("float")}}
- {{cssxref("color")}}
- {{cssxref("cursor")}}
- {{cssxref("display")}}
- {{cssxref("font")}} and its longhand equivalents
- {{cssxref("line-height")}}
- {{cssxref("margin")}}
- {{cssxref("outline")}} and its longhand equivalents
- {{cssxref("padding")}}
- `text-*` properties such as {{cssxref("text-transform")}}
- {{cssxref("white-space")}}
- {{cssxref("word-spacing")}} and {{cssxref("word-break")}}
- {{cssxref("writing-mode")}}

> [!NOTE]
> Each console message behaves like an inline element by default. If you want properties such as `padding`, `margin`, and so on to have any effect, you can set the `display` property to `display: inline-block`.

> [!NOTE]
> In order to support both light and dark color schemes, {{cssxref("color_value/light-dark")}} can be used when specifying colors; for example: `color: light-dark(#D00000, #FF4040);`

### Using groups in the console

You can use nested groups to help organize your output by visually combining related material. To create a new nested block, call `console.group()`. The `console.groupCollapsed()` method is similar but creates the new block collapsed, requiring the use of a disclosure button to open it for reading.

To exit the current group, call `console.groupEnd()`. For example, given this code:

```js
console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");
```

The output looks like this:

![Demo of nested groups in Firefox console](console_groups_demo.png)

### Timers

You can start a timer to calculate the duration of a specific operation. To start one, call the `console.time()` method, giving it a name as the only parameter. To stop the timer, and to get the elapsed time in milliseconds, just call the `console.timeEnd()` method, again passing the timer's name as the parameter. Up to 10,000 timers can run simultaneously on a given page.

For example, given this code:

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Will log the time needed by the user to dismiss the alert box, log the time to the console, wait for the user to dismiss the second alert, and then log the ending time to the console:

![Time log in Firefox console](console-timelog.png)

Notice that the timer's name is displayed both when the timer is started and when it's stopped.

### Stack traces

The console object also supports outputting a stack trace; this will show you the call path taken to reach the point at which you call {{domxref("console/trace_static", "console.trace()")}}. Given code like this:

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

The output in the console looks something like this:

![Stack trace in Firefox console](api-trace2.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) — how the Web console in Firefox handles console API calls
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) — how to see console output when the debugging target is a mobile device
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/console/api/)
- [Microsoft Edge DevTools](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Safari Web Inspector](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)
