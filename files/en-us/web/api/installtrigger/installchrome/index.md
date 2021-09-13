---
title: InstallTrigger.installChrome
slug: Web/API/InstallTrigger/installChrome
---
### installChrome

Installs new skin or locale packages in Netscape 6 and Mozilla.

#### Method of

[InstallTrigger](/en-US/XPInstall_API_Reference/InstallTrigger_Object) object

#### Syntax

    int installChrome( TYPE, url, name )

#### Parameters

The `installChrome` method has the following parameters:

- `TYPE`
  - : `TYPE` can be `InstallTrigger.SKIN` or `InstallTrigger.LOCALE`.
- `url`
  - : url is a string containing a full or relative URL to download
- `name`
  - : name is displayed in the dialog, but is also used to \*select\* the theme so it must match exactly the name in the internal manifest.rdf file.

#### Returns

A boolean value indicating False if the software install feature has been turned off, and True if it's on. Note that this return value does not indicate anything about the success of the installation.

#### Description

`installChrome` is a special method for installing new chrome in Netscape 6 and Mozilla. The method performs a simplified installation of language packs or Netscape 6/Mozilla skins, and saves you the trouble of writing separate installation scripts in the XPI files or using the more sophisticated methods of the [Install](/en-US/XPInstall_API_Reference/Install_Object) and [File](/en-US/XPInstall_API_Reference/File_Object) objects.
