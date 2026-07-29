---
title: contextualIdentities.ContextualIdentity
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity
page-type: webextension-api-type
browser-compat: webextensions.api.contextualIdentities.ContextualIdentity
sidebar: addonsidebar
---

The **`contextualIdentities.ContextualIdentity`** type describes one contextual identity.

## Type

Values of this type are objects. They contain these properties:

- `cookieStoreId`
  - : `string`. The cookie store ID for the identity. As contextual identities don't share cookie stores, this serves as a unique identifier.
- `color`
  - : `string`. The color for the identity. This color is shown in tabs belonging to the identity. For the list of supported values, see {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}}.
- `colorCode`
  - : `string`. A hex code representing the color used for the identity. For example: `"#37adff"`.
- `icon`
  - : `string`. The name of an icon for the identity. This icon is shown in the URL bar for tabs belonging to this identity. For the list of supported values, see {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}}.
- `iconUrl`
  - : `string`. A full resource:// URL pointing to the identity's icon. For example: "resource://usercontext-content/fingerprint.svg".
- `name`
  - : `string`. Name of the identity. This name is shown in the URL bar for tabs belonging to this identity. Note that names don't have to be unique.

## Browser compatibility

{{Compat}}
