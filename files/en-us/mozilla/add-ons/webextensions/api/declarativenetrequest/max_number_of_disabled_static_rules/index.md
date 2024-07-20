---
title: declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/MAX_NUMBER_OF_DISABLED_STATIC_RULES
page-type: webextension-api-property
browser-compat: webextensions.api.declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES
---

{{AddonSidebar}}

The maximum number of static rules that can be disabled on each static ruleset. See [static ruleset limits](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits) for more information on the static ruleset limits.

Rules are enabled and disabled in static rulesets with {{WebExtAPIRef("declarativeNetRequest.updateStaticRules","updateStaticRules")}} and a list of disabled rules for a static ruleset is obtained with {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds","getDisabledRuleIds")}}.

This limit is:

- in Firefox: `5000`
- in Chrome: `5000`, counted across all rulesets instead of per ruleset.
- in Safari, there is no implementation for this limit.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
