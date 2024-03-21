---
title: contextualIdentities.ContextualIdentity
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity
page-type: webextension-api-type
browser-compat: webextensions.api.contextualIdentities.ContextualIdentity
---

{{AddonSidebar}}

The **`contextualIdentities.ContextualIdentity`** type describes a single contextual identity.

## Type

Values of this type are objects. They contain the following properties:

- `cookieStoreId`
  - : `string`. The cookie store ID for the identity. Since contextual identities don't share cookie stores, this serves as a unique identifier.
- `color`

  - : `string`. The color for the identity. This will be shown in tabs belonging to this identity. The following values are valid:

    - "blue"
    - "turquoise"
    - "green"
    - "yellow"
    - "orange"
    - "red"
    - "pink"
    - "purple"
    - "toolbar"

    The value "toolbar" represents a theme-dependent color. Identities with color "toolbar" will be displayed in the same color as text in the toolbar (corresponding to the [theme key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors) `"toolbar_field_text"`).

- `colorCode`
  - : `string`. A hex code representing the exact color used for the identity. For example: `"#37adff"`. In the special case of the "toolbar" color, `colorCode` is always `"#7c7c7d"`, regardless of the displayed color.
- `icon`

  - : `string`. The name of an icon for the identity. This will be shown in the URL bar for tabs belonging to this identity. The following values are valid:

    - "fingerprint"
    - "briefcase"
    - "dollar"
    - "cart"
    - "circle"
    - "gift"
    - "vacation"
    - "food"
    - "fruit"
    - "pet"
    - "tree"
    - "chill"
    - "fence"

- `iconUrl`
  - : `string`. A full resource:// URL pointing to the identity's icon. For example: "resource://usercontext-content/fingerprint.svg".
- `name`
  - : `string`. Name of the identity. This will be shown in the URL bar for tabs belonging to this identity. Note that names don't have to be unique.

## Browser compatibility

{{Compat}}
