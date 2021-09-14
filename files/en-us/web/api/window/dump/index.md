---
title: Window.dump()
slug: Web/API/Window/dump
tags:
  - API
  - HTML DOM
  - Method
  - Non-standard
  - Window
---
{{ ApiRef() }} {{Non-standard_header}}

**`Window.dump()`** prints messages to the (native) console.

## Syntax

```js
window.dump(message);

dump(message);
```

### Parameters

- `message` is the string message to log.

## Notes

A common use of `dump()` is to debug JavaScript. The message passed to
`dump()` is sent to the System Console (Native Console) if the Firefox
process was started with the `-console` option. If the `-console`
option was not specified then the output goes to stderr. Output from dump() is not sent
to the [Browser Console](/en-US/docs/Tools/Browser_Console). Output can be
sent to the [Browser Console](/en-US/docs/Tools/Browser_Console) using [console.log()](/en-US/docs/Web/API/console/log). Privileged code can also use
[`Components.utils.reportError`](/en-US/docs/Components.utils.reportError)
and
[`nsIConsoleService`](/en-US/docs/XPCOM_Interface_Reference/nsIConsoleService)
to log messages to the [Error Console](/en-US/docs/Error_Console)/[Browser Console](/en-US/docs/Tools/Browser_Console).

`dump()` is also available to XPCOM components implemented in JavaScript,
even though {{domxref("window")}} is not the global object in components. It is also
explicitly made available in [sandboxes](/en-US/docs/Components.utils.Sandbox#Methods_available_on_the_Sandbox_object). However, this use of
`dump` is not affected by the preference mentioned below -- it will always be
shown. It is therefore advisable to either check this preference yourself or use a
debugging preference of your own to make sure you don't send lots of debugging content
to a user's console when they might not be interested in it at all. Note that
`dump` output from XPCOM components goes to `stderr`, while
`dump` called elsewhere will output to `stdout`.

In [Gecko](/en-US/docs/Mozilla/Gecko) `dump()` is **disabled by
default** – it doesn't do anything but doesn't raise an error either. To see
the `dump` output you have to enable it by setting the preference
`browser.dom.window.dump.enabled` to `true`. You can set the
preference in [about:config](http://kb.mozillazine.org/About:config) or in a
[user.js file](http://kb.mozillazine.org/User.js_file). Note: this preference
is not listed in `about:config` by default, you may need to create it
(right-click the content area -> New -> Boolean).

On Windows, you will need a console to actually see anything. If you don't have one
already, closing the application and re-opening it with the command line parameter
`-console` should create the console or use `-attach-console` to
use the existing console. On other operating systems, it's enough to launch the
application from a terminal.

To redirect the console output to a file, run firefox _without_ the -console
option and use the syntax to redirect stderr and stdout to a file, i.e.:

    firefox > console.txt 2>&1

> **Note:** If you would like the console messages to appear in the console you used to launch
> the application, you can use the [Gecko Console Redirector](https://github.com/matthewkastor/Redirector).
> Precompiled binaries are available in the zipped archive <https://github.com/matthewkastor/Redirector/archive/master.zip>
> under `Redirector-master\Gecko\Console Redirector\bin\Release` Copy all the
> dll's and the exe to wherever you want. Then run
> `Console Redirector.exe /?`

## Specifications

This is not part of any specification
