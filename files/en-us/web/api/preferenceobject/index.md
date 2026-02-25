---
title: PreferenceObject
slug: Web/API/PreferenceObject
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PreferenceObject
spec-urls: https://drafts.csswg.org/mediaqueries-5/#preference-object-interface
---

{{APIRef("Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`PreferenceObject`** interface of the [User Peferences API](/en-US/docs/Web/API/User_Preferences_API) provides attributes and methods for reading and overriding user preferences.

Use {{domxref("PreferencesManager")}} to get access to the `PreferenceObject` object.

The `PreferencesManager` interface inherits from {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("PreferenceObject.override")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The override value if set, `null` otherwise.
- {{domxref("PreferenceObject.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The override value if set, the UA default otherwise.
- {{domxref("PreferenceObject.validValues")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The valid values for the override.

## Instance methods

- {{domxref("PreferenceObject.clearOverride()")}} {{Experimental_Inline}}
  - : If the override is set, reset it to `null` and fire {{xdomref("PreferenceObject.change_event" "change")}}
- {{domxref("PreferenceObject.requestOverride()")}} {{Experimental_Inline}}
  - : Request an override of the preference.

## Events

- {{domxref("PreferenceObject.change_event", "change")}} {{Experimental_Inline}}
  - : Fired when the override is set or reset.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
