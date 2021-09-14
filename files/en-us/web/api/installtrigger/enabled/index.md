---
title: InstallTrigger.enabled
slug: Web/API/InstallTrigger/enabled
---
## Summary

Indicates whether or not Software Installation is enabled for this client machine.

## Method of

[InstallTrigger](/en-US/docs/Web/API/InstallTrigger)
object

## Syntax

```js
Boolean enabled ();
```

### Parameters

None

### Returns

True if Software Installation is enabled for this client machine; otherwise, false. The
method reflects the value of the Software Installation preference in the user
interface, and of the `xpinstall.enabled` preference in pref.js.

## Example

The following code uses the [startSoftwareUpdate](/en-US/docs/Web/API/InstallTrigger/startSoftwareUpdate) method to unconditionally trigger a download from
[`http://royalairways/royalpkg.xpi`](http://royalairways/royalpkg.xpi)
as long as Software Installation is enabled on the browser:

```js
if (InstallTrigger.enabled() ) {
    InstallTrigger.startSoftwareUpdate ("http://royalair.com/rasoft.xpi");
}
```
