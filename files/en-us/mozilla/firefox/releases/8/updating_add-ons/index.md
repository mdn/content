---
title: Updating add-ons for Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
page-type: guide
---

{{FirefoxSidebar}}

This article provides information on steps you need to take in order to update your existing add-on for compatibility with Firefox 8. See [Firefox 8 for developers](/en-US/docs/Mozilla/Firefox/Releases/8) for a complete list of everything that changed in Firefox 8.

## Do you need to do anything at all?

If your add-on is distributed on [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO), it's been checked by an automated compatibility verification tool. Add-ons that don't use APIs that changed in Firefox 8, and have no binary components (which [need to be recompiled for every major Firefox release](/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), have automatically been updated on AMO to indicate that they work in Firefox 8.

So you should start by visiting AMO and looking to see if your add-on needs any work done at all.

> **Note:** You should still test your add-on on Firefox 8, even if it's been automatically upgraded. There are edge cases that may not be automatically detected.

Once you've confirmed that you need to make changes, come on back to this page and read on.

## Development process note

It's worth noting that during startup, Firefox 8 now checks for third-party add-ons on its first startup, and presents a user interface letting users decide whether or not to enable them. If you drop your add-on into the profile directory in order to test it, Firefox won't enable it automatically on the first startup, but will show this interface instead.

You can avoid this by setting the preference `extensions.autoDisableScopes` to 14. This should only be done for development and testing purposes.

## Interfaces have been merged

As part of our ongoing effort to streamline Gecko's internals, a few interfaces have been merged together:

- `nsIDOMWindowInternal` has been merged into `nsIDOMWindow`. The `nsIDOMWindowInternal` interface still exists, but is empty, and will be removed entirely in Firefox 9. You should update any code that relies on the existence of `nsIDOMWindowInternal` to look for `nsIDOMWindow` instead.
- All of the sub-interfaces of `nsISelection` have been merged into the base `nsISelection` interface. If by some chance you were previously looking for `nsISelection2` or `nsISelection3`, you should update your code.

## Date handling improved

Now that the JavaScript [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object can parse ISO 8601 dates, the [`ISO8601DateUtils.jsm`](/en-US/docs/JavaScript_code_modules/ISO8601DateUtils.jsm) code module has been removed. If you were using this code module, you should update your code to use the methods on `Date` instead.

## DOM changes

There have been a couple of changes in the DOM that impact add-ons:

### Selection changes

In the past, {{ domxref("Document.getSelection()") }} was returning a stringified version of the selection instead of the {{ domxref("Selection") }} object itself. This was non-standard behavior, and has been corrected.

### Potential name conflicts

When the DOM File API was added, a new global called {{ domxref("File") }} was added; this can conflict with objects in your scripts. If you have any globals called `File`, you should rename them.

Similarly, a new global, {{ domxref("ChromeWorker") }}, was introduced to support allowing Workers to be used from chrome code. If by some chance you have any globals with this name, you should rename them.

## Security changes

Support for SSL 2.0 has been removed. This shouldn't affect any current add-ons. However, for reference, some very old code was removed, as well as support for the preferences `security.enable_ssl2` (which is false by default), and all preferences starting with "`security.ssl2.`"

## See also

- [Firefox 8 for developers](/en-US/docs/Mozilla/Firefox/Releases/8)
