---
title: Capabilities
slug: Web/WebDriver/Capabilities
page-type: landing-page
---

{{QuickLinksWithSubpages("/en-US/docs/Web/WebDriver")}}

WebDriver **_capabilities_** are used to communicate the features supported by a [session](/en-US/docs/Web/WebDriver). A client may also use capabilities to define which features it requires the driver to satisfy when [creating a new session](/en-US/docs/Web/WebDriver/Commands/NewSession).

When a WebDriver session is created it returns a set of capabilities describing the negotiated, effective capabilities of the session. Some of the capabilities included in this set are [standard and shared between all browsers](#list-of-capabilities), but the set may also contain [browser-specific capabilities](#vendor-specific-capabilities) and these are always prefixed.

## Capabilities negotiation

Capabilities can be used to require a driver that supports a certain subset of features. This can be used to require certain browser features, such as the [ability to resize the window dimensions](/en-US/docs/Web/WebDriver/Capabilities/setWindowRect), but is also used in distributed environments to select a particular browser configuration from a matrix of choices.

Selecting a particular web browser or platform only makes sense when you use a remote WebDriver. In this case the client makes contact with WebDriver through one or more intermediary nodes which negotiates which driver to return to you based on the capabilities it receives.

The capabilities object is a selection mechanism that limits which driver configurations the server will return. If you request a Firefox instance using `browserName` and Firefox is not installed on the remote, or macOS from a remote that only supports Linux, you may be out of luck. But occasionally you may not care which specific operating system or web browser your session has: you just want a session that has some _capability_.

The selection process, or the _capabilities negotiation_, is done through `alwaysMatch` and `firstMatch`.

### `alwaysMatch`

As the name suggests, capabilities described inside the `alwaysMatch` capabilities object are features you _require_ the session to have. If the server can not provide what features you require, it will fail.

If for example you ask for Firefox version 62 on a system that only has 60 installed, the session creation will fail:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox",
      "browserVersion": "60"
    }
  }
}
```

### `firstMatch`

The `firstMatch` field accepts _an array_ of capabilities objects which will be matched in turn until one matches what the server can provide, or it will fail.

This can be useful when you want a driver that runs on macOS or Linux, but not Windows:

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### Combining `alwaysMatch` and `firstMatch`

`firstMatch` can of course be combined with `alwaysMatch` to narrow down the selection. If for example you a driver that runs on macOS or Linux but it _has_ to be Firefox:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox"
    },
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

The previous example is exactly equivalent to putting the Firefox requirement in each `firstMatch` arm:

```json
{
  "capabilities": {
    "firstMatch": [
      { "browserName": "firefox", "platformName": "macos" },
      { "browserName": "firefox", "platformName": "linux" }
    ]
  }
}
```

Which you choose of the two preceding examples is not important, but it can matter when pass along browser configuration. To avoid unnecessarily repeating data, such as profiles, it is advisable to make use of `alwaysMatch` so that this data is only transmitted across the wire once:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox",
      "moz:firefoxOptions": {
        "profile": "<base64 encoded profile>",
        "args": ["-headless"],
        "prefs": { "dom.ipc.processCount": 8 },
        "log": { "level": "trace" }
      }
    },
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

## List of capabilities

- [`browserName`](/en-US/docs/Web/WebDriver/Capabilities/browserName)
- [`browserVersion`](/en-US/docs/Web/WebDriver/Capabilities/browserVersion)
- [`platformName`](/en-US/docs/Web/WebDriver/Capabilities/platformName)
- [`acceptInsecureCerts`](/en-US/docs/Web/WebDriver/Capabilities/acceptInsecureCerts): This capability communicates whether expired or invalid [TLS certificates](/en-US/docs/Glossary/TLS) are checked when [navigating](/en-US/docs/Web/WebDriver/Commands/NavigateTo). If the capability is false, an [insecure certificate](/en-US/docs/Web/WebDriver/Errors/InsecureCertificate) error will be returned as navigation encounters domains with certificate problems. Otherwise, self-signed or otherwise invalid certificates will be implicitly trusted by the browser on navigation. The capability has effect for the lifetime of the session.
- [`pageLoadStrategy`](/en-US/docs/Web/WebDriver/Capabilities/pageLoadStrategy)
- [`proxy`](/en-US/docs/Web/WebDriver/Capabilities/proxy)
- [`setWindowRect`](/en-US/docs/Web/WebDriver/Capabilities/setWindowRect)
- [`timeouts`](/en-US/docs/Web/WebDriver/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/en-US/docs/Web/WebDriver/Capabilities/unhandledPromptBehavior)

## Vendor-specific capabilities

In addition to the [standard capabilities](#list-of-capabilities) WebDriver allows third-parties to _extend_ the set of capabilities to match their needs. Browser vendors and suppliers of drivers typically use extension capabilities to provide configuration to the browser, but they can also be used by intermediaries for arbitrary blobs of information.

- [Firefox capabilities](/en-US/docs/Web/WebDriver/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome capabilities](/en-US/docs/Web/WebDriver/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

## Legacy capabilities

The majority of Selenium clients use `desiredCapabilities` and `requiredCapabilities` to configure the new session. These are very similar to `firstMatch` and `alwaysMatch` described above. Some drivers support these legacy capabilities, but they are deprecated and should be avoided.

Converting a legacy capabilities object into the new style is easy. The first thing you need to know is that `alwaysMatch`/`firstMatch` is _always_ wrapped inside a `capabilities` JSON Object, whereas `desiredCapabilities`/`requiredCapabilities` exists at the top level. Generally speaking, anything that has previously gone in `desiredCapabilities` should go in a `firstMatch` branch arm to achieve the same effect.

Take this deprecated capabilities object:

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

This would be functionally equivalent in the new style:

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

But because there is only one `firstMatch` arm, and we know that session creation will fail if the server doesn't have a Firefox installed, it is also equivalent to this:

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## See also

- [New Session](/en-US/docs/Web/WebDriver/Commands/NewSession) command
- [Delete Session](/en-US/docs/Web/WebDriver/Commands/NewSession) command
