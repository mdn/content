---
title: Baseline (compatibility)
slug: Glossary/Baseline/Compatibility
page-type: glossary-definition
---

{{GlossarySidebar}}

**Baseline** identifies web platform features that work across browsers.
Baseline helps you decide when to use a feature by telling you when it is less likely to cause compatibility problems for your site's visitors.

A Baseline feature - such as an API, a set of CSS properties, or a JavaScript syntax - works consistently across several well-known and widely-used desktop and mobile browsers, including Chrome, Edge, Firefox, and Safari.

Baseline features are described as either newly available in current stable browsers or widely available with continuous support over time.

## Badges

![Green widget with the checkmark: Baseline, widely available. Four browsers logos, all with checkmarks.](high.png)

If you see a **widely available** Baseline badge, then you can trust that the feature has a consistent history of support in each of the Baseline browsers for at least 2.5 years.
A widely available feature works with many browsers and devices, even ones that aren't yet up to date with the latest browser releases.

![Blue widget with the checkmark: Baseline 2022, newly available. Four browsers' logos, all with checkmarks.](limited.png)

If you see a **newly available** Baseline badge, then you can trust that the feature works in at least the latest stable version of each of the Baseline browsers and often more.
A newly available feature works in the latest browsers, but may not work with older browsers and devices.
Consider your site's audience carefully before using a newly available feature.

![Grey widget with the cross: limited availability. Four browsers' logos, two with checkmarks, two with crosses.](low.png)

If you see a **limited availability** badge, then that feature is _not_ Baseline.
Do more research and testing with your site's users before relying on that feature, or wait for it to become Baseline.

## Browser set

Baseline tracks availability with the following browsers:

- Apple Safari (iOS)
- Apple Safari (macOS)
- Google Chrome (Android)
- Google Chrome (desktop)
- Microsoft Edge (desktop)
- Mozilla Firefox (Android)
- Mozilla Firefox (desktop)

## Extra considerations

Baseline is a summary guide to browser support to help you make decisions before committing to use a feature in your projects.
Baseline is not a substitute for testing your application for accessibility, usability, performance, security, or other concerns.

Baseline may not tell you whether a feature works with:

- Older devices and browser releases
- Browsers not covered by the Baseline browser set, such as operating system web views
- Assistive technology, such as screen readers

If Baseline doesn't cover your situation, you can find more information in the browser compatibility tables on MDN, [caniuse.com](https://caniuse.com/), and [a11ysupport.io](https://a11ysupport.io/).

## Contributing

Baseline is a community effort of the W3C WebDX Community Group and relies on MDN's open source browser compatibility data.
If you have questions, feedback, or want to help update and expand the features covered by Baseline status reports, then go to [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features) to participate.

## See also

- [Cross browser testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [web-platform-dx/web-features repository](https://github.com/web-platform-dx/web-features)
- [W3C WebDX Community Group](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data repository](https://github.com/mdn/browser-compat-data)
