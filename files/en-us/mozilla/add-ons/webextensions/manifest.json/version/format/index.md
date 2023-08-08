---
title: Legacy Version Formats
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version/format
page-type: guide
---

{{AddonSidebar}}

This page describes legacy web extension version string formats. See the manifest [version key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) documentation for information on the current version string format.

## Firefox legacy version number

A **version string** consists of one or more _version parts_, separated by dots.

Each **version part** is parsed as a sequence of four parts: `<number-a><string-b><number-c><string-d>`. Each of the parts is optional. Numbers are integers base 10 (may be negative), and strings are non-numeric ASCII characters.

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

From Firefox 108, web extensions using this version string trigger a warning on installation.

## Comparing versions

When two version strings are compared, their version parts are compared left to right. An empty or missing version part is equivalent to `0`.

If at some point, a version part of one version string is greater than the corresponding version part of another version string, then the first version string is greater than the other one.

Otherwise, the version strings are equal. As missing version parts are treated as if they were `0`, these version strings are equal: `1`, `1.0`, `1.0.`, `1.0.0`, and even `1.0..`.

### Comparing version parts

Version parts are also compared left to right; parts A and C are compared as numbers, while parts B and D are compared byte-wise. A string part that exists is always less than a string part that doesn't exist (`1.6a` is less than `1.6`).

## Examples

```plain
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
