---
title: firefoxOptions
slug: Web/WebDriver/Capabilities/firefoxOptions
tags:
  - Reference
  - WebDriver
  - capabilities
  - Extension capabilities
  - firefoxOptions
---
The **`moz:firefoxOptions` capability** is a namespaced set of
capabilities specific to [Firefox](https://www.mozilla.org/en-US/firefox/). It is used to control the
behavior of Firefox and can be used as a member of
[`alwaysMatch`](/en-US/docs/Web/WebDriver/Capabilities#alwaysmatch) or as a member of one of the
[`firstMatch`](/en-US/docs/Web/WebDriver/Capabilities#firstmatch) entries.

It is used to define options which control how Firefox gets started and run.

`moz:firefoxOptions` is a JSON Object which may contain any of the following fields:

##### `binary` (string)

Absolute path to the custom Firefox binary to use.

On macOS you may either give the path to the application bundle, i.e. `/Applications/Firefox.app`, or the
absolute path to the executable binary inside this bundle, for example
`/Applications/Firefox.app/Contents/MacOS/firefox-bin`.

geckodriver will attempt to deduce the default location of Firefox on the current system if left undefined. The
default locations of Firefox are:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">System</th>
      <th scope="col">Default location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>macOS</td>
      <td>
        <ol>
          <li>
            <code>/Applications/Firefox.app/Contents/MacOS/firefox-bin</code>
          </li>
          <li>
            <code
              >$HOME/Applications/Firefox.app/Contents/MacOS/firefox-bin</code
            >
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Linux<br />BSD</td>
      <td>
        <p>
          First <code>firefox</code> found on the system path. This is
          equivalent to the output of running
          <a
            href="https://manpages.debian.org/stretch/debianutils/which.1.en.html"
            >which(1)</a
          >:
        </p>
        <pre class="brush: plain">
% which firefox
/usr/bin/firefox
</pre
        >
      </td>
    </tr>
    <tr>
      <td>Windows</td>
      <td>
        <p>From the Window system registry:</p>
        <ol>
          <li>
            <code
              >HKEY_LOCAL_MACHINE\SOFTWARE WOW6432Node\Mozilla\Mozilla
              Firefox\[VERSION]\Main\PathToExe</code
            >
          </li>
          <li>
            <code
              >HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\Mozilla
              Firefox\[VERSION]\Main\PathToExe</code
            >
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

##### `args` (array of strings)

Command line arguments to pass to the Firefox binary. These must include the leading dash (`-`) where
required, e.g. `["-headless"]`.

To have geckodriver pick up an existing [profile](#profile) on the local filesystem, you may pass
`["-profile", "/path/to/profile"]`. But if a profile has to be transferred to a target machine it is
recommended to use the `profile` entry.

##### `profile` (string)

Base64-encoded ZIP of a profile directory to use for the Firefox instance. This may be used to e.g. install
extensions or custom certificates, but for setting custom preferences we recommend using the `prefs` ([Preferences Object](#prefs)) entry instead.

Profiles are created in the systems temporary folder. This is also where the encoded profile is extracted when
`profile` is provided. By default geckodriver will create a new profile in this location.

The effective profile in use by the WebDriver session is returned to the user in the `moz:profile`
capability in the [new session response](/en-US/docs/Web/WebDriver/Commands/NewSession).

To have geckodriver pick up an existing profile on the filesystem, please set the `args` field to
`{"args": ["-profile", "/path/to/your/profile"]}`. Note that if you use a remote client targeting a server
on a different system, the profile must already exist on the target system.

##### `log` (Log object)

To increase the logging verbosity of geckodriver and Firefox, you may pass a [`log`](#log)
object that may look like `{"log": {"level": "trace"}}` to include all trace-level logs and above

##### `prefs` (Preferences object)

Map of preference name to preference value, which can be a string, a boolean or an integer.

##### `env` (Env object)

Map of environment variable name to environment variable value, both of which must be strings.

### Android

Starting with geckodriver 0.26.0 additional capabilities exist if Firefox or an application embedding [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView) has to be controlled on Android:

##### `androidPackage` (string, required)

The package name of Firefox, e.g. `org.mozilla.firefox`,
`org.mozilla.firefox_beta,` or `org.mozilla.fennec` depending on the release
channel, or the package name of the application embedding GeckoView, e.g. `org.mozilla.geckoview_example`.

##### `androidActivity` (string, optional)

The fully qualified class name of the activity to be launched, e.g. `.GeckoViewActivity`. If not
specified, the package's default activity will be used.

##### `androidDeviceSerial` (string, optional)

The serial number of the device on which to launch the application. If not specified and multiple devices are
attached, an error will be returned.

##### `androidIntentArguments` (array of strings, optional)

Arguments to launch the intent with. Under the hood, geckodriver uses [Android am](https://developer.android.com/studio/command-line/adb#am) to start the Android application
under test. The given intent arguments are appended to the `am start` command. See Android's [specification for intent arguments](https://developer.android.com/studio/command-line/adb#IntentSpec) for
details. This allows to control how the application is launched and to include optional extras for enabling and
disabling features. For example, to launch with the view action and a specified URL before navigating as part of a
test, include:

```json
{
  "androidIntentArguments": [
    "-a", "android.intent.action.VIEW",
    "-d", "https://example.com"
  ]
}
```

For example, to specify a boolean extra that can be processed with [android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>), include:

```json
{
  "androidIntentArguments": [
    "--ez", "customBooleanFlagName", "true"
  ]
}
```

### Log object

A JSON Object that may have any of these fields:

##### `level` (string)

Set the level of verbosity of geckodriver and Firefox. Available levels are `trace`, `debug`,
`config`, `info`, `warn`, `error`, and `fatal`. If left
undefined the default is `info`. The value is treated case-insensitively.

### Preferences object

A JSON Object with one entry per preference to set. The preference will be written to the [profile](#profile) before starting Firefox. A full list of available preferences is available from visiting
"about:config" in your Firefox browser. Some of these are documented in [this source](https://searchfox.org/mozilla-central/source/modules/libpref/init/all.js) file.

An example of a preference object:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Env object

A JSON Object with one entry per environment variable to set. On Desktop, the Firefox under test will launch with
given variable in its environment. On Android, the GeckoView-based App will have the given variable added to the
`env` block in its configuration YAML.

An example of an env object:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## Example

The following is an example of a full [capabilities object](/en-US/docs/Web/WebDriver/Capabilities) that
selects a specific Firefox binary to run with a prepared [profile](#profile) from the filesystem in [headless mode](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/). It also increases the number of IPC processes
through a preference, turns off chrome errors/warnings in the console, and enables more verbose logging:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "moz:firefoxOptions": {
        "binary": "/usr/local/firefox/bin/firefox",
        "args": ["-headless", "-profile", "/path/to/my/profile"],
        "prefs": {
          "dom.ipc.processCount": 8,
          "javascript.options.showInConsole": false
        },
        "log": {"level": "trace"},
        "env": {
          "MOZ_LOG": "nsHttp:5",
          "MOZ_LOG_FILE": "/path/to/my/profile/log"
        }
      }
    }
  }
}
```

The [`moz:firefoxOptions`](#firefoxoptions) must be placed—as above—inside
[`alwaysMatch`](/en-US/docs/Web/WebDriver/Capabilities#alwaysmatch), or in one of the
[`firstMatch`](/en-US/docs/Web/WebDriver/Capabilities#firstmatch) [capabilities objects](/en-US/docs/Web/WebDriver/Capabilities) as seen here:

```json
{
  "capabilities": {
    "firstMatch": [
      {"moz:firefoxOptions": …}
    ]
  }
}
```

### Android

This runs the GeckoView example application as installed on the first Android emulator running on the host machine:

```json
{
  "capabilities": {
    "alwaysMatch": {
      "moz:firefoxOptions": {
        "androidPackage": "org.mozilla.geckoview_example",
        "androidActivity": "org.mozilla.geckoview_example.GeckoView",
        "androidDeviceSerial": "emulator-5554",
        "androidIntentArguments": [
          "-d", "http://example.org"
        ],
        "env": {
          "MOZ_LOG": "nsHttp:5",
          "MOZ_LOG_FILE": "/mnt/sdcard/log"
        }
      }
    }
  }
}
```

## See also

- [geckodriver's documentation on supported Firefox capabilities](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)
- [Chrome-specific WebDriver capabilities](https://chromedriver.chromium.org/capabilities)
  (`goog:chromeOptions)`
- [List of WebDriver capabilities](/en-US/docs/Web/WebDriver/Capabilities)
- [New Session](/en-US/docs/Web/WebDriver/Commands/NewSession) command

{{QuickLinksWithSubpages}}
