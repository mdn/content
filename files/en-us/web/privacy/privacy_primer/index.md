---
title: Privacy primer
slug: Web/Privacy/Privacy_primer
page-type: guide
sidebar: privacy
---

This guide is an introduction to privacy for web developers. It provides an overview of the principles that a website needs to follow in order to respect the privacy of its users.

It is largely based on the principles listed in the [W3C Privacy Principles](https://www.w3.org/TR/privacy-principles/) statement, but unlike that document, this guide covers only principles that apply to web developers, not those that apply to browser developers or standards designers.

It's split into two main sections:

- [Working with a user's personal data](#working_with_personal_data)
- [User recognition and tracking](#user_recognition_and_tracking)

## Working with personal data

Websites often have a legitimate need to collect and process a user's personal data. To be respectful of a user's privacy, a website must align the data they collect and the way they use it with the user's intentions. That is, they should only collect data that the user intends to share, and they should only use it in the way that the user intends for it to be used.

### Personal data

Personal data is defined in the [General Data Protection Regulation (GDPR)](https://gdpr.eu/article-4-definitions/) as:

> any information relating to an identified or identifiable natural person

This includes data that can be directly used to identify a person, such as a name, social security number, date of birth, or address. It also includes information that is associated with a person, such as medical, financial, or employment information.

### Requesting personal data

Websites should collect only personal data that the user wishes to provide, and collect only the data they they actually need. For example, a shopping site might allow people to make purchases without creating an account: this means the site doesn't collect as much personal data, and also reduces friction for shoppers.

When requesting data, websites should clearly explain what they are asking for and how it will be used.

Web developers should design the user interface that requests data so as to learn the user's true intent. This means that user interfaces should not attempt to manipulate users into sharing more data than they really intend to, for example by making it easier to share data than not to share it, or by asking users to agree to terms that they could not be expected to understand.

### Using personal data

Websites should use personal data only for the purposes they specified when requesting it.

If possible, before sites use personal data, they should process it in such a way that individual users are not identifiable: this process is called _de-identification_.

Websites should protect the personal data that they collect from unauthorized access by third parties. This typically means that stored personal data should be encrypted, and that personal data should only be transmitted using a secure protocol such as TLS. If unauthorized access is detected, the website should notify the user as soon as possible.

Websites should delete personal data once they no longer need it.

### Allowing users to manage their data

Websites should allow users to manage the personal data that they have provided. This includes the ability to:

- Access, correct, export, and delete any stored personal data.
- Withdraw any consent that they have given about how their data should be used.

Websites should make it as easy for users to perform these actions as it is for them to share their data in the first place. That is, websites should not make it easy for users to share data but hard for them to delete it.

Websites should not retaliate against users who exercise these rights. For example, if a user withdraws consent to the use of their data, and the website then denies access to a service that does not depend on that data, this could be considered retaliation.

### Publishing a privacy policy

Websites should publish a privacy policy, to help users understand how the site will use their data. The policy should describe:

- What personal data the site collects.
- How the data will be used.
- Steps the site takes to protect data from unauthorised access.
- Any third parties with which the site will share the data, including a declaration that the site will ask for user consent before sharing.
- The duration for which the site will keep the data before it is deleted.
- How the user can view and manage their data.

## User recognition and tracking

User recognition is the act of realising that an identity belongs to the same person as some other identity which was observed at some other time. Websites often have a legitimate need to recognize users. For example, a library website needs to be able to show the user which books they have checked out, and to do this they need to know that this user is the same user who checked out those books. Websites typically use cookies to implement this.

Recognizing a user is sometimes called _tracking_ a user.

### Tracking techniques

Websites can use various techniques to track users. The W3C document [Unsanctioned Web Tracking](https://www.w3.org/2001/tag/doc/unsanctioned-tracking/) distinguishes two categories of technique:

1. Those that are based on explicit web standards, such as cookies or other client-side storage APIs.
2. Those that are not, such as {{glossary("fingerprinting")}}, that typically exploit information leaked by unrelated Web APIs. This second category constitutes _unsanctioned tracking_.

**Websites should only use techniques in the first category to track users.** The reason for this is that techniques in the first category are visible and can be controlled by users, either directly in the browser or through extensions. For example, a user can see which cookies they have and can clear them, or an extension can automatically clear cookies in certain situations.

Even when individual users don't take advantage of these controls, privacy researchers and advocates can identify and highlight tracking which uses these explicit techniques. This helps the development of tools and regulations that can help protect the privacy of all users.

Unsanctioned tracking is also sometimes called _covert tracking_ to emphasise that it is hidden from user visibility and control.

### Cross-context tracking

Recognition may connect observations in the same context or may connect observations in different contexts. A _context_ is defined subjectively as an environment which users consider to be different from other contexts.

Typically, a context maps to a {{glossary("site")}}, so:

- A site understanding that two separate requests to itself are from the same user typically represents same-context recognition.
- A site understanding that a request to itself is from the same user as a request to a different site typically represents cross-context recognition.

However, this isn't necessarily the case, because the definition of a context is subjective: a user might interpret two sites as a single context.

To respect a user's privacy, **sites should avoid cross-context tracking unless the user intends for it to happen and can control whether it does**.

A good example of a situation in which cross-context tracking is legitimate is [federated login](/en-US/docs/Web/Security/Authentication/Federated_identity), in which a third-party {{glossary("identity provider")}} needs to recognise a user who is trying to sign into a different site. In this situation, the user intends for the third party to recognise them.

### Tracking prevention in web browsers

Most web browsers implement some form of tracking prevention. Although the details are not always the same, tracking prevention policies broadly follow the principles outlined above. That is, browsers try to prevent unsanctioned tracking as much as possible, and all cross-context tracking, except in specific legitimate cases.

This means that, by following the principles listed above, sites can ensure that they work in as many browsers as possible.

## See also

- [Privacy principles](https://www.w3.org/TR/privacy-principles/#dfn-context) (W3C)
