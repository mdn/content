---
title: InstallTrigger.getVersion()
slug: Web/API/InstallTrigger/getVersion
---
> **Warning:** Parts of this page show the use of the [XPInstall API](/en-US/docs/XPInstall_API_Reference). The majority of this API is now deprecated and as of Gecko 1.9 no longer available. [Extension](/en-US/docs/Extensions), [Theme](/en-US/docs/Themes), and [plug-in](/en-US/docs/Plugins) developers must switch away from `install.js` based packages to the new [packaging scheme](/en-US/docs/Bundles) with an [`install.rdf`](/en-US/docs/Install_Manifests) manifest. In particular plugin developers should see [how to package a plugin as an extension](/en-US/docs/Shipping_a_plugin_as_a_Toolkit_bundle).

### getVersion

Returns an object representing the version number from the Client Version Registry for the specified component. It is used in both trigger scripts and installation scripts.

#### Method of

[InstallTrigger](/en-US/docs/Web/API/InstallTrigger) object

#### Syntax

    InstallVersion getVersion ( String component );

#### Parameters

The `getVersion` method has one parameter:

- `component`
  - : The name of a component in the Client Version Registry.

#### Returns

If Software Installation is disabled, this method returns `NULL`. Otherwise, it returns an [InstallVersion](/en-US/docs/XPInstall_API_Reference/InstallVersion_Object) object representing the version of the component.

If the component has not been registered in the Client Version Registry or if the specified component was installed with a null version, this method returns null.

Installing a component with a `NULL` version indicates that the component should always be updated when the opportunity arises.
