---
title: Updating extensions for Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
page-type: guide
---

{{FirefoxSidebar}}

This article provides information that will be useful to developers that wish to update their extensions to work properly under Firefox 2.

## Step 1: Update the install manifest

The first step — and, for most extensions, the only one that will be needed — is to update the [install manifest](/en-US/Install_Manifests) file, install.rdf, to indicate compatibility with Firefox 2.

Find the line indicating the maximum compatible version of Firefox (which, for Firefox 1.5, might look like this):

```bash
 <em:maxVersion>1.5.0.*</em:maxVersion>
```

Change it to indicate compatibility with Firefox 2:

```bash
 <em:maxVersion>2.0.0.*</em:maxVersion>
```

Then reinstall your extension.

## Step 2: Update XUL overlays

Firefox 2 incorporates changes to the default skin. Additionally, some user interface elements have been changed or moved, and it's possible your extension may be affected by these, depending on what your XUL overlays do.

Look over the article [Theme changes in Firefox 2](/en-US/Theme_changes_in_Firefox_2) to learn what changes were made that may affect your extension's XUL overlays.

## Step 3: Test

Be sure to test your extension carefully on Firefox 2 before you release it to the public. The last thing you want is for the new version of your extension to be responsible for a rash of reports of problems with the just-released version of Firefox!

## Step 4: Release

Update your extension's entry on [http://addons.mozilla.org](https://addons.mozilla.org). This will ensure that users can find it.

In addition, if your extension provides an [`updateURL`](/en-US/Install_Manifests#updateurl) in the install manifest, be sure to update the update manifest so that the new version of your extension can be found automatically by Firefox. By doing this, the first time the user runs your extension after upgrading to Firefox 2, Firefox can offer to automatically install it for them.
