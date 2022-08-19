---
title: Feature Policy
slug: Web/HTTP/Feature_Policy
tags:
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Introduction
  - Overview
  - Reference
  - Security
  - access
  - delegation
  - header
  - permission
browser-compat: http.headers.Feature-Policy
---
{{HTTPSidebar}}

Feature Policy allows web developers to selectively enable, disable, and modify the behavior of certain features and APIs in the browser. It is similar to {{Glossary("CSP", "Content Security Policy")}} but controls features instead of security behavior.

> **Warning:** The {{httpheader("Feature-Policy")}} header has now been renamed to `Permissions-Policy` in the spec, and this article will eventually be updated to reflect that change.

## In a nutshell

Feature Policy provides a mechanism to explicitly declare what functionality is used (or not used), throughout your website. This allows you to lock in best practices, even as the codebase evolves over time — as well as to more safely compose third-party content — by limiting which features are available.

With Feature Policy, you opt-in to a set of "policies" for the browser to enforce on specific features used throughout a website. These policies restrict what APIs the site can access or modify the browser's default behavior for certain features.

Examples of what you can do with Feature Policy:

- Change the default behavior of autoplay on mobile and third party videos.
- Restrict a site from using sensitive devices like the camera, microphone, or speakers.
- Allow iframes to use the [fullscreen API](/en-US/docs/Web/API/Fullscreen_API).
- Block the use of outdated APIs like [synchronous XHR](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) and {{domxref("document.write()")}}.
- Ensure images are sized properly and are not too big for the viewport.

## Concepts and usage

Feature Policy allows you to control which origins can use which features, both in the top-level page and in embedded frames. Essentially, you write a policy, which is an allowed list of origins for each feature. For every feature controlled by Feature Policy, the feature is only enabled in the current document or frame if its origin matches the allowed list of origins.

For each policy-controlled feature, the browser maintains a list of origins for which the feature is enabled, known as an allowlist. If you do not specify a policy for a feature, then a default allowlist will be used. The default allowlist is specific to each feature.

### Writing a policy

A policy is described using a set of individual policy directives. A policy directive is a combination of a defined feature name, and an allowlist of origins that can use the feature.

### Specifying your policy

Feature Policy provides two ways to specify policies to control features:

- The {{httpheader("Feature-Policy")}} HTTP header.
- The {{HTMLElement("iframe","<code>allow</code>","#Attributes")}} attribute on iframes.

The primary difference between the HTTP header and the `allow` attribute is that the allow attribute only controls features within an iframe. The header controls features in the response and any embedded content within the page.

For more details see [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy).

### Inferring the policy

Scripts can programmatically query information about the feature policy via the {{DOMxRef("FeaturePolicy")}} object located at either {{DOMxRef("Document.featurePolicy")}} or {{DOMxRef("HTMLIFrameElement.featurePolicy")}}.

## Types of policy-controlled features

Though Feature Policy provides control of multiple features using a consistent syntax, the behavior of policy controlled features varies and depends on several factors.

The general principle is that there should be an intuitive or non-breaking way for web developers to detect or handle the case when the feature is disabled. Newly introduced features may have an explicit API to signal the state. Existing features that later integrate with Feature Policy will typically use existing mechanisms. Some approaches include:

- Return "permission denied" for JavaScript APIs that require user permission grants.
- Return `false` or error from an existing JavaScript API that provides access to feature.
- Change the default values or options that control the feature behavior.

The current set of policy-controlled features fall into two broad categories:

- Enforcing best practices for good user experiences.
- Providing granular control over sensitive or powerful features.

### Best practices for good user experiences

There are several policy-controlled features to help enforce best practices for providing good performance and user experiences.

In most cases, the policy-controlled features represent functionality that when used will negatively impact the user experience. To avoid breaking existing web content, the default for such policy-controlled features is to allow the functionality to be used by all origins. Best practices are then enforced by using policies that disable the policy-controlled features. For more details see [Enforcing best practices for good user experiences](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy#enforcing_best_practices_for_good_user_experiences)

The features include:

- Layout-inducing animations
- Legacy image formats
- Oversized images
- Synchronous scripts
- Synchronous XMLHTTPRequest
- Unoptimized images
- Unsized media

### Granular control over certain features

The web provides functionality and APIs that may have privacy or security risks if abused. In some cases, you may wish to strictly limit how such functionality is used on a website. There are policy-controlled features to allow functionality to be enabled/disabled for specific origins or frames within a website. Where available, the feature integrates with the Permissions API, or feature-specific mechanisms to check if the feature is available.

The features include (see [Features list](/en-US/docs/Web/HTTP/Headers/Feature-Policy#directives)):

- Accelerometer
- Ambient light sensor
- Autoplay
- Camera
- Encrypted media
- Fullscreen
- Gamepad
- Geolocation
- Gyroscope
- Magnetometer
- Microphone
- Midi
- PaymentRequest
- Picture-in-picture
- Speakers
- USB
- Web Share API
- VR / XR

## Examples

- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- See [Feature Policy Demos](https://feature-policy-demos.appspot.com/) for example usage of many policies.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- {{HTTPHeader("Feature-Policy")}} HTTP header
- {{HTMLElement("iframe","<code>allow</code>","#Attributes")}} attribute on iframes
- [Introduction to Feature Policy](https://developer.chrome.com/blog/feature-policy/)
- [Feature policies on www.chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Feature-Policy Tester (Chrome Developer Tools extension)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
