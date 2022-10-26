---
title: Firefox Version Format
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version/format
tags:
  - Add-ons
  - Extensions
  - WebExtensions
---

{{AddonSidebar}}


## Extension version number format

The **version string** used for web extensions distributed through addons.mozilla.org must be 1 to 4 numbers separated by dots, for example, `1.2.3.4`. Each number can have up to 9 digits. Non-zero numbers must not include a leading zero. For example, `2.01` is not an allowed version number; however, `0.2`, `2.0.1`, and `2.10` are allowed.

The regular expression for this version string is `^(0|[1-9]\d{0,9})(\.(0|[1-9]\d{0,9})){0,3}$`.

From Firefox 108, a warning is provided if an extension is installed with a version number that doesn't match this format. 

This **version string** is compatible with the legacy version number format.

[The syntax defined for Chrome's `version`](https://developer.chrome.com/docs/extensions/mv3/manifest/version/) is more restrictive than Firefox's. Chrome only provides for numbers between 0 and 65535 and doesn't allow an all zero version number, that is, 0.0.0.0. This means that:

- values for `version` that are valid for Chrome are always valid for Firefox.
- values for `version` that are valid for Firefox may not be valid for Chrome.

### Comparing versions

To determine which of two extension versions is the most recent, the version string elements are compared left to right. The first version string with an element greater than the corresponding element in the other version string is the most recent. For example, 1.10 is a more recent version than 1.9.

## Legacy version number format

Before Firefox 108, a more complex **version string** could be used without triggering a warning. This version string consists of one or more _version parts_, separated by dots.

Each **version part** is itself parsed as a sequence of four parts: `<number-a><string-b><number-c><string-d>`. Each of the parts is optional. Numbers are integers base 10 (may be negative), and strings are non-numeric ASCII characters.

Here are a few examples of valid version parts:

- `0` (as in `1.0`): `<number-a>=0`
- `5a` (as in `1.5a`): `<number-a>=5`, `<string-b>=a`
- `5pre4` (as in `3.5pre4`): `<number-a>=5`, `<string-b>=pre`, `<number-c>=4`
- `*` (as in `1.0.*`): `<string-b>=*`

A few special parsing rules are applied for backward compatibility and readability:

- if the version part is a single asterisk, it is interpreted as an infinitely-large number:
  `1.5.0.*` is the same as `1.5.0.(infinity)`
- if string-b is a plus sign, number-a is incremented to be compatible with the Firefox 1.0.x version format:
  `1.0+` is the same as `1.1pre`

The rationale behind splitting a version part into a sequence of strings and numbers is that when comparing version parts, the numeric parts are compared as numbers, for example, '1.0pre1' < '1.0pre10', while the strings are compared byte-wise. See the next section for details on how versions are compared.

You can inspect the [add-ons linter code](https://github.com/mozilla/addons-linter/blob/master/src/schema/formats.js#L10) to see how extension versions for Firefox are validated.

### Comparing versions

When two version strings are compared, their version parts are compared left to right. For Manifest V2 style version strings, an empty or missing version part is equivalent to `0`.

If, at some point, a version part of one version string is greater than the corresponding version part of another version string, then the first version string is greater than the other.

Otherwise, the version strings are equal. Note that as missing version parts are treated as if they were `0`, these version strings are equal: `1`, `1.0`, `1.0.`, `1.0.0`, and even `1.0..`.

#### Comparing version parts

Version parts are also compared left to right, parts A and C are compared as numbers, while parts B and D are compared byte-wise. A string part that exists is always less than a string part that doesn't exist. For example, `1.6a` is less than `1.6`.

#### Bxamples

```
1.-1
< 1 == 1. == 1.0 == 1.0.0
< 1.1a < 1.1aa < 1.1ab < 1.1b < 1.1c
< 1.1pre == 1.1pre0 == 1.0+
< 1.1pre1a < 1.1pre1aa < 1.1pre1b < 1.1pre1
< 1.1pre2
< 1.1pre10
< 1.1.-1
< 1.1 == 1.1.0 == 1.1.00
< 1.10
< 1.* < 1.*.1
< 2.0
```
