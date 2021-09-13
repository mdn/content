---
title: InstallTrigger.compareVersion
slug: Web/API/InstallTrigger/compareVersion
---
> **Warning:** Parts of this page show the use of the [XPInstall API](/en-US/docs/XPInstall_API_Reference). The majority of this API is now deprecated and as of Gecko 1.9 no longer available. [Extension](/en-US/docs/Extensions), [Theme](/en-US/docs/Themes), and [plug-in](/en-US/docs/Plugins) developers must switch away from `install.js` based packages to the new [packaging scheme](/en-US/docs/Bundles) with an [`install.rdf`](/en-US/docs/Install_Manifests) manifest. In particular plugin developers should see [how to package a plugin as an extension](/en-US/docs/Shipping_a_plugin_as_a_Toolkit_bundle).

### compareVersion

Compares the version of a file or package with the version of an existing file or package.

#### Method of

[InstallTrigger](/en-US/docs/Web/API/InstallTrigger) object

#### Syntax

    int compareVersion (
       String registryName,
       InstallVersion version);

    int compareVersion (
       String registryName,
       String version);

    int compareVersion (
       String registryName,
       int major,
       int minor,
       int release,
       int build);

#### Parameters

The `compareVersion` method has the following parameters:

- `registryName`
  - : The pathname in the Client Version Registry for the component whose version is to be compared. This parameter can be an absolute pathname, such as `/royalairways/RoyalSW` or a relative pathname, such as `plugins/royalairway/RoyalSW`. Note that the registry pathname is not the location of the software on the computer; it is the location of information about the software inside the Client Version Registry.
- `version`
  - : An [InstallVersion](/en-US/docs/XPInstall_API_Reference/InstallVersion_Object) object containing version information or a String in the format major.minor.release.build, where major, minor, release, and build are integer values representing version information.

#### Returns

If the versions are the same or if Software Installation is not enabled, this method returns 0. If the version of `registryName` is smaller (earlier) than `version`, this method returns a negative number. Otherwise, this method returns a positive number. In particular, this method returns one of the following values:

- `-5`
  - : component not present or not registered.
- `-4`
  - : `registryName` has a smaller (earlier) major number than `version`.
- `-3`
  - : `registryName` has a smaller (earlier) minor number than `version`.
- `-2`
  - : `registryName` has a smaller (earlier) release number than `version`.
- `-1`
  - : `registryName` has a smaller (earlier) build number than `version`.
- `0`
  - : The version numbers are the same; both objects represent the same version.
- `1`
  - : `registryName` has a larger (newer) build number than `version`.
- `2`
  - : `registryName` has a larger (newer) release number than `version`.
- `3`
  - : `registryName` has a larger (newer) minor number than `version`.
- `4`
  - : `registryName` has a larger (newer) major number than `version`.

The following constants can be used to check the value returned by compareVersion:

    int MAJOR_DIFF = 4;
    int MINOR_DIFF = 3;
    int REL_DIFF = 2;
    int BLD_DIFF = 1;
    int EQUAL = 0;

In Communicator 4.5, the following constants are defined and available for checking the value returned by `compareVersion`:

    <code>InstallTrigger.MAJOR_DIFF
    InstallTrigger.MINOR_DIFF
    InstallTrigger.REL_DIFF
    InstallTrigger.BLD_DIFF
    InstallTrigger.EQUAL
    </code>

#### Description

The `compareVersion` method compares the version of an installed file or package with a specified version. It is often used as a check against which to initiate the installation process. If `registryName` is not found in the Client Version Registry or if `registryName` does not have version, `registryName` is assumed to have a version of 0.0.0.0. If `registryName` represents a file, `compareVersion` checks for the existence of the file. If the file has been deleted, its version is assumed to be 0.0.0.0.
