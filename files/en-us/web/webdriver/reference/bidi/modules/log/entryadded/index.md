---
title: log.entryAdded event
short-title: log.entryAdded
slug: Web/WebDriver/Reference/BiDi/Modules/log/entryAdded
page-type: webdriver-event
browser-compat: webdriver.bidi.log.entryAdded_event
sidebar: webdriver
---

The `log.entryAdded` [event](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) of the [`log`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/log) module fires when a new log entry is created in the browser, from either a console API call or an unhandled JavaScript error.

## Event data

The `params` field in the event notification is a log entry object. Based on the source of the log, the log entry object has different types: `"console"` or `"javascript"`. Each type may provide additional fields specific to that source.

### Common fields

All log entry objects include the following fields:

- `level`
  - : A string that indicates the severity of the log entry. It has one of the following values:
    - `"debug"`: A debug-level message (from {{domxref("console/debug_static", "console.debug()")}} or {{domxref("console/trace_static", "console.trace()")}}).
    - `"info"`: An informational message (from {{domxref("console/log_static", "console.log()")}}, {{domxref("console/info_static", "console.info()")}}, and [other console methods](/en-US/docs/Web/API/console) that don't produce a more specific level).
    - `"warn"`: A warning message (from {{domxref("console/warn_static", "console.warn()")}}).
    - `"error"`: An error message (from {{domxref("console/error_static", "console.error()")}} or {{domxref("console/assert_static", "console.assert()")}}).
- `source`
  - : An object that identifies the [realm](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms) where the log entry was created. It contains the following fields:
    - `realm`
      - : A string that contains the ID of the realm.
    - `context` {{optional_inline}}
      - : A string that contains the ID of the context in which the log entry was created.
    - `userContext` {{optional_inline}}
      - : A string that contains the ID of the user context in which the script-related event occurred.
- `stackTrace` {{optional_inline}}
  - : An object with a `callFrames` array that represents the [JavaScript stack](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/script/stackTrace) at the point the entry was created. Each item in the array is a stack frame with the following fields: `columnNumber`, `functionName`, `lineNumber`, and `url`.
- `text`
  - : A string that contains the log message or `null` if not available. For console entries, it is the concatenation of all stringified arguments joined by spaces, and for JavaScript errors, it is generally the error message.
    The exact format is browser-dependent, so don't rely on this value for assertions in tests.
- `timestamp`
  - : A non-negative integer that represents the time when the log entry was created, in UTC, as milliseconds elapsed since the epoch ({{jsxref("Date.now()")}}).
- `type`
  - : A string that identifies the source of the log entry. It has one of the following values:
    - `"console"`: Indicates that the log entry was generated from a call to a console API method (for example, {{domxref("console/log_static", "console.log()")}}, {{domxref("console/warn_static", "console.warn()")}}). Log entry objects of this type include [additional fields](#console_log_entry_fields).
    - `"javascript"`: Indicates that the log entry was generated from an unhandled JavaScript error.

### `"console"` log entry fields

In addition to the [common fields](#common_fields), log entry objects with `"type": "console"` also include:

- `args`
  - : An array of objects that represent the arguments passed to the console method. Each object has a `type` field (such as `"string"`, `"number"`, `"boolean"`, or `"array"`) and optional `value`, `handle`, and `internalId` fields.
- `method`
  - : A string that contains the name of the console method that was called (for example, `"log"`, `"error"`, `"assert"`, `"debug"`, `"trace"`, `"warn"`).

## Examples

### Receiving an event for a console log

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `log.entryAdded` active, the browser sends a `log.entryAdded` event when a script evaluates `console.log("hello", [1, true, "foo"])`:

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "console",
    "method": "log",
    "source": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
      "context": "6B3D5B3A-6571-432B-8E96-E53B5C2ECBB5"
    },
    "args": [
      {
        "type": "string",
        "value": "hello"
      },
      {
        "type": "array",
        "value": [
          { "type": "number", "value": 1 },
          { "type": "boolean", "value": true },
          { "type": "string", "value": "foo" }
        ]
      }
    ],
    "level": "info",
    "text": "hello 1,true,foo",
    "timestamp": 1712345678901,
    "stackTrace": {
      "callFrames": [
        {
          "columnNumber": 8,
          "functionName": "",
          "lineNumber": 1,
          "url": "https://example.com/app.js"
        }
      ]
    }
  }
}
```

### Receiving an event for a console warning

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `log.entryAdded` active, the browser sends a `log.entryAdded` event when a script evaluates `console.warn("something went wrong")`:

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "console",
    "method": "warn",
    "source": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
      "context": "6B3D5B3A-6571-432B-8E96-E53B5C2ECBB5"
    },
    "args": [
      {
        "type": "string",
        "value": "something went wrong"
      }
    ],
    "level": "warn",
    "text": "something went wrong",
    "timestamp": 1712345678950,
    "stackTrace": {
      "callFrames": [
        {
          "columnNumber": 8,
          "functionName": "",
          "lineNumber": 1,
          "url": "https://example.com/app.js"
        }
      ]
    }
  }
}
```

### Receiving an event for an unhandled JavaScript error

With a [WebDriver BiDi connection](/en-US/docs/Web/WebDriver/How_to/Create_BiDi_connection) and a [subscription](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) to `log.entryAdded` active, the browser sends a `log.entryAdded` event when an unhandled JavaScript error occurs:

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "javascript",
    "level": "error",
    "source": {
      "realm": "7c37f4c0-abcd-1234-ef56-789012345678",
      "context": "6B3D5B3A-6571-432B-8E96-E53B5C2ECBB5"
    },
    "text": "ReferenceError: undefinedVariable is not defined",
    "timestamp": 1712345679100,
    "stackTrace": {
      "callFrames": [
        {
          "columnNumber": 27,
          "functionName": "",
          "lineNumber": 3,
          "url": "https://example.com/app.js"
        },
        {
          "columnNumber": 18,
          "functionName": "",
          "lineNumber": 3,
          "url": "https://example.com/app.js"
        }
      ]
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.subscribe`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) command
- [`console`](/en-US/docs/Web/API/console) API
