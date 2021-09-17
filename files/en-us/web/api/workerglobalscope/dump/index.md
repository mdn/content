---
title: WorkerGlobalScope.dump()
slug: Web/API/WorkerGlobalScope/dump
tags:
  - API
  - Method
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - dump
browser-compat: api.WorkerGlobalScope.dump
---
{{APIRef("Web Workers API")}} {{Deprecated_Header}} {{Non-standard_header}}

The **`dump()`** method of the {{domxref("WorkerGlobalScope")}} interface allows you to write a message to stdout — i.e. in your terminal, in Firefox only. This is the same as Firefox's {{domxref("window.dump")}}, but for workers.

## Syntax

```js
dump('My message\n');
```

### Parameters

A {{domxref("DOMString")}} containing the message you want to send.

### Returns

Void.

## Example

To write an output from your worker to your computer's terminal, you first have to run an instance of Firefox started from your command line/terminal. For example, on Mac OS X you'd run it using something like this (assuming you are inside the `Applications` folder):

```bash
./Firefox.app/Contents/MacOS/firefox-bin -profile /tmp -no-remote
```

Now go into `about:config` and enable the `browser.dom.window.dump.enabled` pref.

Next, run a worker containing the following line:

```js
dump('test\n');
```

This should result in a "test" message being output to the terminal.

## Specifications

This method does not appear in any specification.

## Browser compatibility

{{Compat}}

## See also

{{domxref("WorkerGlobalScope")}}
