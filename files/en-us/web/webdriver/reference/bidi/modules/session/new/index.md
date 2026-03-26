---
title: session.new command
short-title: session.new
slug: Web/WebDriver/Reference/BiDi/Modules/session/new
page-type: webdriver-command
browser-compat: webdriver.bidi.session.new
sidebar: webdriver
---

The `session.new` [command](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) of the [`session`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session) module creates a new BiDi session with the browser.

Since this command is used to create a new session, it runs without an already active session. (In BiDi, such a command is called a static command.)

> [!NOTE]
> A session created this way is only accessible over WebSocket and cannot be managed using classic WebDriver HTTP commands.

## Syntax

```json-nolint
{
  "method": "session.new",
  "params": {
    "capabilities": {}
  }
}
```

### Parameters

The `params` field contains:

- `capabilities`
  - : An object that specifies the requested features for the session. It can include the following fields:
    - `alwaysMatch` {{optional_inline}}
      - : An object that specifies the requested features that must all be satisfied by the browser for session creation.
        If the browser cannot satisfy all requested features in this object, the session is not created.
    - `firstMatch` {{optional_inline}}
      - : An array of objects, each specifying an alternative set of requested features for session creation.
        The browser tries each set in the order specified and creates a session using the first where all requested features can be satisfied.
        If the browser cannot satisfy all requested features in any of the sets, the session is not created.

The `alwaysMatch` and `firstMatch` objects can include the following features:

- [`acceptInsecureCerts`](/en-US/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) {{optional_inline}}
  - : A boolean that indicates whether untrusted TLS certificates (for example, self-signed or expired) are accepted for the duration of the session.
- `browserName` {{optional_inline}}
  - : A string that specifies the name of the browser to use (for example, `"firefox"` or `"chrome"`).
- `browserVersion` {{optional_inline}}
  - : A string that specifies the browser version to match (for example, `"120.0"`).
- `platformName` {{optional_inline}}
  - : A string that specifies the operating system to match (for example, `"windows"`, `"mac"`, `"android"`, or `"linux"`).
- `proxy` {{optional_inline}}
  - : An object that specifies the proxy configuration the browser should use for network requests.
- `unhandledPromptBehavior` {{optional_inline}}
  - : An object that specifies the default behavior when a user prompt (such as an `alert`, `confirm`, or `prompt` dialog) is encountered during a command.

### Return value

The following fields in the `result` object of the response describe the characteristics of the created session:

- `sessionId`
  - : A string that contains the unique identifier for the newly created session.
- `capabilities`
  - : An object that describes the capabilities that were negotiated and are active for the session. It includes the following fields:
    - [`acceptInsecureCerts`](/en-US/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts)
      - : A boolean that indicates whether untrusted TLS certificates (for example, self-signed or expired) are accepted for the duration of the session.
    - `browserName`
      - : A string that contains the name of the browser.
    - `browserVersion`
      - : A string that contains the version of the browser.
    - `platformName`
      - : A string that contains the name of the operating system.
    - `setWindowRect`
      - : A boolean that indicates whether the browser window can be resized and repositioned using the [Set Window Rect](/en-US/docs/Web/WebDriver/Reference/Classic/Commands/SetWindowRect) command.
    - `userAgent`
      - : A string that contains the browser's user agent string (for example, `"Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0"`).
    - `proxy` {{optional_inline}}
      - : An object that describes the active proxy configuration. An empty object (`{}`) indicates no proxy is configured.
    - `unhandledPromptBehavior` {{optional_inline}}
      - : An object that describes the default behavior when a user prompt (such as an `alert`, `confirm`, or `prompt` dialog) is encountered during a command. This field is present only when specified in the `capabilities` parameter.
    - [`webSocketUrl`](/en-US/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) {{optional_inline}}
      - : A string that contains the WebSocket URL for the session.

The browser may also return vendor-specific capabilities prefixed with a browser identifier (for example, `moz:buildID` for Firefox).

### Errors

- session not created
  - : A session already exists, or the browser is unable to create a new session (for example, because a requested capability cannot be satisfied).

## Examples

### Creating a session with default capabilities

With a WebDriver BiDi connection established, send the following message to create a new session with default capabilities:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {
    "capabilities": {}
  }
}
```

The browser responds with the session identifier and the negotiated capabilities:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "sessionId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "capabilities": {
      "acceptInsecureCerts": false,
      "browserName": "firefox",
      "browserVersion": "147.0.4",
      "platformName": "mac",
      "setWindowRect": true,
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:147.0) Gecko/20100101 Firefox/147.0",
      "proxy": {}
    }
  }
}
```

### Creating a session with required capabilities

To require a specific browser and accept insecure certificates using `alwaysMatch`, send the following message:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {
    "capabilities": {
      "alwaysMatch": {
        "browserName": "firefox",
        "acceptInsecureCerts": true
      }
    }
  }
}
```

If the browser can satisfy the requested capabilities, it responds with the session identifier and negotiated capabilities as follows:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "sessionId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "capabilities": {
      "acceptInsecureCerts": true,
      "browserName": "firefox",
      "browserVersion": "147.0.4",
      "platformName": "mac",
      "setWindowRect": true,
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:147.0) Gecko/20100101 Firefox/147.0",
      "proxy": {}
    }
  }
}
```

### Attempting to create a session when one already exists

In browsers that don't support multiple sessions (e.g., Firefox), sending `session.new` when a session is already active results in an error response:

```json
{
  "type": "error",
  "id": 1,
  "error": "session not created",
  "message": "Maximum number of active sessions",
  "stacktrace": ""
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`session.status`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) command
- [`session.end`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) command
