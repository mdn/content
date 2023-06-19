---
title: Privacy on the web
slug: Web/Privacy
---

{{QuicklinksWithSubPages}}

People use websites for several important tasks such as banking, shopping, entertainment, and paying their taxes. In doing so, they are required to share personal information with those sites. Users place a certain level of trust in the sites they share their data with — if that information fell into the wrong hands it could be used to exploit users, for example by profiling them, targetting them with unwanted ads, or even stealing their identify or money.

Modern browsers already have a wealth of features to protect users' privacy on the web, but that's not enough. To create a trustworthy, privacy-respecting experience, developers need to educate their users in good practices (and enforce them) and create sites that collect as little data as possible, use it responsibly, and transport and store it securely.

In this article, we define privacy and important related terms, examine browser features that automatically protect user privacy, and look at what users can do to create privacy-respecting web content that minimizes the risk of users' personal information/data being obtained unexpectedly by third parties.

## Privacy defined

Before we look at the various privacy and security features available to use on the web, let's define some important terms.

### What is privacy?

It is hard to talk about privacy without also talking about security — they are closely related, and you can't really create privacy-respecting websites without good security. Therefore, we shall provide a definition of both.

- **Privacy** refers to the act of giving users the right to control how their data is collected, stored, and used, and not using it irresponsibly. For example, developers should make it very clear to users of their sites what data they are collecting, who else it will be shared with, and what they will use it for. Users must be given a chance to consent to your terms of data usage, and also be able to see what items of their data you have stored, and delete them if they no longer wish you to have them. You must also comply with your own terms — nothing erodes user trust like having their data used in ways — and shared with third parties — that they didn't agree to. And this isn't just ethically wrong — it could be against the law. Many parts of the world now have legislation that protect consumer privacy rights (for example the EU's [GDPR](https://gdpr.eu/)).

- **Security** is the act of keeping private data and systems protected against unauthorized access. This includes both company (internal) data, and user and partner (external) data. It is no use having a robust privacy policy that causes your users to trust you, if your security is weak and malicious parties can steal their data anyway.

### Personal and private information

**Personal information** is any information that describes a user. Examples include:

- Physical attributes such as height, gender expression, weight, hair color, or age
- Postal address, email address, phone number, or other contact information
- Passport number, bank account, credit card, social security number, or other official identifiers
- Health information such as medical history, allergies, or ongoing conditions
- Usernames and passwords
- Hobbies, interests, or other personal preferences
- Biometic data such as fingerprints or facial recognition data

**Private information** is any information that users do not want shared publicly and must be kept private (i.e. accessible only by a certain group of authorized users). Some private data is private by law (for example medical data), and some is private more by personal preference.

### Personally identifiable information

Following on the above section, **Personally identifiable information** (PII) is information which can be used, in whole or in part, to track down and/or identify a specific person. For example, if a site leaks a list of users' names and zip codes online, a bad actor could almost certainly use this information to find their full address. Even if a full scale leak does not happen, it is still possible to identify users through less obvious means, such as what browser they are using, what device they are using, if they have certain fonts installed, etc.

### Tracking

**Tracking** refers to the process of a third party recording a user's activity across many different websites. This can be done in various ways, for example:

- Looking at cookies that the user has set (for example, to persist a log in or personalization details across different sites) if the third party is embedded on the same domain.
- Looking at the {{httpheader("Referer")}} header to see where a user has navigated from.

Tracking data can be used to profile a user and their interests and preferences, which is usually bad and can be annoying to various degrees. For example:

- It is used for targetted ads: Everyone has had the unnerving experience of researching some items to buy on one device, and then suddenly being bombarded by adverts for the same products on all their other devices.
- Selling or sharing data: Some third parties have been known to compile tracking data and then sell it to/share it with others to use for various purposes, like targetted ads. This is obviously highly unethical, and may also be illegal depending on where in the world it happens.
- Prejudice via data: In the worst cases, sharing data could result in the user being unfairly disadvantaged, for example imagine an insurance company finding out data points about a potential custom that they didn't consent to share, and using them as a justification for increasing insurance premiums.

> **Note:** See [What can third-party resources do?](https://web.dev/learn/privacy/third-parties/#what-can-third-party-resources-do) for a useful related scenario description, and additional information.

### Fingerprinting

The process of identifying users by building up a store of data points about them is known as **fingerprinting**. This usually has negative connotations, because it can be used to track user activity across different websites in a covert manner. Think about it — tracking is annoying enough even when you consent to it, but having it happen without consent feels really invasive and erodes trust very quickly.

Modern browsers take steps to help prevent fingerprinting-based attacks by either not allowing information to be accessed or, where the information must be made available, by introducing variations that prevent it from being used for identification purposes.

For example, if a website queries a user's browser for the elapsed time, a comparison of that time to the time as reported by the server might be useful as a factor in fingerprinting. Because of this, browsers typically introduce a small amount of variability to timers in order to make them less useful for identifying the user's system. We'll look at other browser privacy-enhancing technologies in the section below.

> **Note:** See also [Fingerprinting](https://web.dev/learn/privacy/fingerprinting/) over on web.dev for additional useful information.

## What do browsers do automatically?

Browser vendors are aware of the need to protect user privacy, and the negative effects of tracking, fingerprinting, etc., on user experience. To this end, they have implemented various features that enhance privacy protection and/or mitigate threats. In this section we look at different categories of privacy protection that browsers apply automatically.

### HTTPS by default

[Transport Layer Security](/en-US/docs/Web/Security/Transport_Layer_Security) provides security and privacy by encrypting data during transport over the network, and is the technology behind the [HTTPS](/en-US/docs/Glossary/HTTPS) protocol. This is good for privacy because it stops third parties from being able to intercept transmitted data and use it maliciously, for example for tracking.

Browsers are all moving towards requiring HTTPS by default; this is practically the case already, as you can't do much without it.

Related topics are as follows:

- [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency)
  - : An open standard for monitoring and auditing certificates, creating a database of public logs that can be used to help identify incorrect or malicious certificates.
- [HTTP Strict Transport Security (HSTS)](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HSTS is used by servers to let them protect themselves from protocol downgrade and cookie hijack attacks by letting sites tell clients that they can only use HTTPS to communicate with the server.
- [HTTP/2](/en-US/docs/Glossary/HTTP_2)
  - : While HTTP/2 technically does not <em>have</em> to use encryption, most browser developers are only supporting it when used with HTTPS, so it can be thought of in that regard as being security/privacy enhancing.

### Opt-in for "powerful features"

So-called "powerful" web API features that provide access to potentially sensitive data and operations are available only in [secure contexts](/en-US/docs/Web/Security/Secure_Contexts), which basically means HTTP-only. Not only that, but they are gated behind a system of user permissions, so users have to explicitly opt-in to features like notifications, accessing media streams from web cams, web payments, etc. (GET BETTER LINKS FOR THESE, AND MORE EXAMPLES)

This provides further security and privacy protection.

### Anti-tracking technology

Browsers have implemented several anti-tracking features that automatically enhance their users' privacy protection. Many of these block or limit the ability of third party sites embedded in {{htmlelement("iframe")}}s to access cookies set on the top-level domain, run tracking scripts, etc.

> **Note:** browsers are aiming to eventually phase out third party cookies altogether, while providing alternative solutions for common use cases that currently require them. You'll find a number of the solutions discussed here, and in the [What does a developer need to do?](#what_does_a_developer_need_to_do) section later on.

#### Firefox

- [Firefox tracking protection](/en-US/docs/Web/Privacy/Firefox_tracking_protection)
  - : Firefox Desktop and Firefox for Android include built-in tracking protection. In Private Browsing windows (tabs, in Firefox for Android), Firefox will block content loaded from domains that track users across sites.
- [Enhanced tracking protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)
  - : Blocks trackers that follow you around online to collect information about your browsing habits and interests without breaking site functionality. It also includes protections against harmful scripts, such as malware that drains your battery.
- [Redirect tracking protection](/en-US/docs/Web/Privacy/Redirect_tracking_protection)
  - : Firefox includes protection against redirect tracking, which is an abuse of cross-site navigation in which a tracker momentarily redirects a user to their website for the purpose of using first-party storage to track that user across websites.
- [State partitioning](/en-US/docs/Web/Privacy/State_Partitioning)
  - : A reworking of how Firefox manages client-side state (i.e., data stored in the browser) to mitigate the ability of websites to abuse state for cross-site tracking. This is achieved by providing what is effectively a "different", isolated storage location to every website a user visits.
- [Storage access policy](/en-US/docs/Web/Privacy/Storage_Access_Policy)
  - : A storage access policy that blocks cookies and other site data from third-party tracking resources. This policy is designed as an alternative to the older cookie policies, which was available in Firefox for many years.

#### Chrome

- [Privacy sandbox project](https://developer.chrome.com/en/docs/privacy-sandbox/)
  - : A series of proposals to satisfy cross-site use cases without third-party cookies or other tracking mechanisms. Themes include identity and tracking protection, more privacy-respecting ad solutions, preventing covert tracking, and safely sharing data across browsing contexts.

#### Safari

- [Intelligent Tracking Prevention](https://webkit.org/blog/9521/intelligent-tracking-prevention-2-3/)
  - : Multiple priavy enhancements in the Safari browser to prevent tracking.

### Stricter controls on sending cross-site cookies

GOT HERE

Browsers are stricter about sending cookies in cross-site requests (talk about SameSite and default values; see https://developer.chrome.com/docs/privacy-sandbox/overview/#will-samesite-become-irrelevant-after-third-party-cookies-are-deprecated)

## New privacy technology

Web browsers are actively working on improving the privacy space through new features:

{{ListSubpages()}} LOOK AT THE CURRENT STATE OF THE LIVE SITE, TO SE WHAT TOPICS I AM MISSING FROM THE PAGE
ALSO, INVESTIGATE WHY THE SIDEBAR IS BROKEN

PUT THESE ITEMS SOMEWHERE ELSE

- [Content Security Policy](/en-US/docs/Web/HTTP/CSP)
  - : Provides the ability to define the extent to which a document's content can be accessed by other devices over the web; used in particular to prevent or mitigate attacks on the server
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
  - : Provides a way to determine the status of permissions for the current browser context.
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
  - : Lets web servers selectively enable or disable features and APIs, both for a document and for subdocuments loaded in {{HTMLElement("iframe")}}s via the {{HTTPHeader("Permissions-Policy")}} HTTP header. The <a href="/en-US/docs/Web/HTML/Element/iframe#allow"><code>allow</code></a> attribute can be used to set Permissions Policies on individual {{HTMLElement("iframe")}}s.

### Permission requests in \<iframe> elements

Things can get tricky when your web app uses the {{HTMLElement("iframe")}} element to embed content from another site inside your own, especially if the document you load into the frame has its own permission needs to consider.

While specifications for these technologies either state or recommend tactics for handling situations like this, browsers may offer different solutions to improve security even further or try new features, or try to reduce complexity for users, among other possible reasons.

<!-- allow attribute, feature policy, and permissions api stuff -->

A specific user experience issue that often arises is a document that's loaded with permission to access a resource and the document contains an {{HTMLElement("iframe")}} with the [`allow`](/en-US/docs/Web/HTML/Element/iframe#allow) attribute to delegate that permission to the contents of the frame. In this case, it's possible for the user to wind up being prompted repeatedly for that same resource, first by the main page, then by the document in the frame.

Browsers may choose to provide ways around this. For example, in Firefox 73, the user permission requests were revised so that when an `<iframe>` uses the `allow` keyword to delegate permission to the embedded document, the browser asks the user to grant the parent document permission to use the resource, and that permission is then shared with the embedded content that requested the resource, to begin with.

<!-- diagram and/or code snippet to clarify things-->

## See also

- [Web security](/en-US/docs/Web/Security)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/)
