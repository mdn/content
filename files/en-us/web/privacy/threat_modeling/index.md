---
title: Privacy threat modeling
slug: Web/Privacy/Threat_modeling
page-type: guide
sidebar: privacy
---

Threat modeling helps you identify problems before they become part of your application. While security threat modeling focuses on protecting systems and data from attackers, privacy threat modeling focuses on identifying and reducing risks to the people who use your application and the personal information it processes.

This article explains how to apply the threat modeling process from a privacy perspective. If you are new to threat modeling, first read the MDN guide to [threat modeling](/en-US/docs/Web/Security/Threat_modeling).

This article presents a generic approach to privacy threat modeling. Depending on your application, legal obligations, and the privacy expectations of your users, a more detailed assessment may be required. Privacy risk assessments often extend beyond technical design to include organizational, legal, and policy considerations. For example, evaluating a personal blog is very different from evaluating an application that processes health records.

If you are unfamiliar with common privacy concepts such as personal information, consent, or data minimization, start with the [Privacy primer](/en-US/docs/Web/Privacy/Privacy_primer).

## What is a privacy threat?

A privacy threat is an action or condition that can lead to privacy harms for an individual. Privacy harms can affect a person's:

- Finances: loss of money, employment, or other economic opportunities.
- Reputation: disclosure or misrepresentation of information that causes embarrassment or damages trust.
- Solitude: reduced ability to be left alone or to carry out activities without observation.
- Autonomy: reduced ability to think, communicate, or act freely without fear of monitoring or judgment.
- Safety: increased risk of stalking, harassment, coercion, or physical harm.

Whether a privacy threat results in an unacceptable privacy risk depends on the context, including the likelihood and severity of the harm, as well as the individual's awareness, expectations, and consent. For example, a user may knowingly consent to certain forms of monitoring in exchange for a service. The underlying privacy threat (such as surveillance) still exists, but the individual may consider the associated risk acceptable under those circumstances.

## Threat modeling questions

Privacy threat modeling follows the same four questions as security threat modeling, but focuses on identifying and reducing risks to people's privacy. The questions are based on the [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/).

1. [What are we working on?](/en-US/docs/Web/Security/Threat_modeling#1._what_are_we_working_on)
2. [What can go wrong?](/en-US/docs/Web/Security/Threat_modeling#2._what_can_go_wrong)
3. [What are we going to do about it?](/en-US/docs/Web/Security/Threat_modeling#3._what_are_we_going_to_do_about_it)
4. [Did we do a good enough job?](/en-US/docs/Web/Security/Threat_modeling#4._did_we_do_a_good_enough_job)

### 1. What are we working on?

Start by identifying the personal information your application processes. This includes information that users intentionally provide, such as names and email addresses, as well as information generated automatically, such as IP addresses, cookies, analytics events, or device identifiers.

Consider creating a simple data flow diagram showing how personal information moves through your application. Include where data enters the system, where it is stored, which components process it, and any external services that receive it. This diagram can help you identify where privacy threats may arise.

Ask yourself:

- What personal information does the site collect?
- Where is it collected?
- Where is it stored?
- Who can access it?
- Which third parties receive it?
- How long is the information retained?
- Is each piece of information actually necessary?

### 2. What can go wrong?

The following privacy threat categories are inspired by established privacy threat modeling approaches, including [LINDDUN](/en-US/docs/Web/Security/Threat_modeling/Frameworks#linddun) and [RFC6973](https://datatracker.ietf.org/doc/html/rfc6973) (Privacy considerations for Internet protocols). For each category, we provide some common questions and an example scenario. Not every threat applies to every application. Use the following categories as prompts while reviewing each component and data flow in your application. If a question does not apply, move on; if it does, document the affected data, the potential privacy harms, and possible mitigations.

#### Surveillance

Collecting or observing information about how people use your application.

Ask yourself:

- Can users be continuously observed or tracked?
- Is monitoring proportional to its intended purpose?

For example, an e-commerce website records every mouse movement, scroll event, click, and keystroke using a session replay service. Although intended to improve usability, the recordings also capture sensitive searches and partially completed forms, allowing administrators or third-party providers to reconstruct a user's browsing session in great detail.

#### Linkability (Correlation)

Combining information from different sources to build a more complete picture of a person, even if their identity is unknown.

Ask yourself:

- Can user behavior be linked across services or sessions?
- Can multiple datasets be combined to build detailed user profiles?

For example, a news website uses the same analytics identifier across its main site, discussion forum, and newsletter. Even though users never log in, the identifier allows the operator to correlate which articles they read, which comments they post, and which emails they open, creating a detailed behavioral profile.

#### Identifiability (Identification)

Determining the identity of an individual from data that was intended to be anonymous or pseudonymous.

Ask yourself:

- Are pseudonyms or identifiers sufficient to protect identities?
- Could identities be inferred by combining multiple data sources?

For example, a website publishes "anonymous" user reviews but includes each reviewer's city, employer, and posting dates. By comparing this information with publicly available social media profiles, someone can determine who wrote many of the reviews.

#### Information disclosure

Unauthorized or unnecessary exposure of personal information to other people, systems, or organizations.

Ask yourself:

- Do analytics or third-party services receive unnecessary personal information?
- Do you have contracts with the third-party in place to have some assurance that they will look after the data and only use it for the intended purposes?
- Do you de-identify data before sharing it with the third party?

For example, a contact form sends visitors' names, email addresses, and message contents to a third-party analytics service because the developer configured analytics to capture every form submission. The analytics provider now receives personal information that it does not need to perform its service.

#### Secondary use

Using personal information for purposes other than those for which it was originally collected or reasonably expected. Even if users consented to the original collection, they may not reasonably expect or consent to the new purpose.

Ask yourself:

- Is personal data reused for advertising, analytics, or profiling?
- Are users aware of and able to control secondary uses of their data?

For example: Users create accounts solely to purchase products. Months later, the company begins using their purchase history to train a recommendation model and to send targeted marketing emails without informing users or providing a way to opt out.

#### Stored data compromise

Unauthorized access to or disclosure of stored personal information due to security failures or data breaches.

Ask yourself:

- Are personal data, backups, logs, and exports adequately protected?
- Could a database breach or unintentional access to storage buckets expose sensitive personal information?

For example, a website stores user profiles, addresses, and password hashes in an unencrypted database backup that is accidentally exposed through a publicly accessible cloud storage bucket. Anyone who discovers the bucket can download the entire dataset.

#### Lack of comprehension or control

Individuals are unable to understand, influence, or exercise control over how their personal information is collected or used.

Ask yourself:

- Do users understand what data is collected and why?
- Can users access, correct, export, or delete their personal data?
- Are consent and privacy choices clear and meaningful?

For example, a website requires visitors to accept all tracking cookies through a single "Accept" button but provides no explanation of which data will be collected, no option to reject non-essential cookies, and no way to later change their preferences or delete collected data.

#### Non-repudiation

Creating records that permanently attribute actions or claims to an individual, limiting their ability to plausibly deny those actions.

Ask yourself:

- Are actions unnecessarily tied to a user's identity?
- Are logs retained longer than necessary?

For example, a community forum permanently stores every post, edit, IP address, and login history under a user's real name, even after the account has been deleted. Years later, those records can still be used to prove that a particular person performed specific actions, even though retaining that information is no longer necessary.

A single feature often raises multiple privacy threats. For example, adding a third-party analytics script may introduce surveillance, linkability, information disclosure, and secondary use at the same time.

### 3. What are we going to do about it?

Once you have identified privacy threats, decide how to respond to each one. Some threats can be eliminated by changing the design of your application, while others can be reduced by collecting less data, limiting access to it, or giving users more control over how it is used.

- Eliminate: Remove the feature or data collection entirely
- Reduce: Apply technical or organizational mitigations, for example: encrypt stored personal data and minimize logging.
- Accept: Document and accept the remaining privacy risk.

> [!NOTE]
> The ["transfer" strategy from security threat modeling](/en-US/docs/Web/Security/Threat_modeling#3._what_are_we_going_to_do_about_it) is often not an applicable strategy in privacy threat modeling. Unlike security threat modeling, delegating data processing to a third party does not necessarily transfer the privacy risk. While a specialized provider may offer better technical or organizational safeguards, sharing personal information with another organization may introduce additional privacy considerations.

Common privacy mitigations include:

- Collect only the data you need. Avoid collecting personal information that is not necessary for your feature.
- Avoid unnecessary identifiers. Where possible, use short-lived or pseudonymous identifiers instead of persistent identifiers.
- Limit sharing with third parties. Review analytics, advertising, and embedded content to ensure they receive only the information they need.
- Protect personal information in storage and transit. Use encryption, strong authentication, and least-privilege access controls.
- Limit how long you retain data. Delete personal information when it is no longer required.
- Provide transparency. Explain what data is collected, why it is collected, and who receives it.
- Give users control. Allow users to view, export, correct, and delete their data where possible.
- Use privacy-friendly defaults. Ask users to opt in rather than opt out where appropriate.
- Review regularly. Revisit your privacy threat model whenever you introduce new features or data processing activities.

These mitigations reflect the principle of _privacy by design_: considering privacy throughout the design and development process instead of adding it after an application has been built.

### 4. Did we do a good enough job?

As with security, there is rarely a definitive answer to this question. Threat modeling should be an ongoing activity rather than a one-time exercise. Revisit your privacy threat model whenever you:

- Introduce new features,
- Collect new kinds of personal information,
- Integrate new third-party services, or
- Significantly change how existing information is processed.

Review your privacy threat model regularly to ensure that it continues to reflect how your application actually handles personal information.

## See also

- [Guide to threat modeling](/en-US/docs/Web/Security/Threat_modeling)
- [Threat modeling frameworks and tools](/en-US/docs/Web/Security/Threat_modeling/Frameworks)
- [LINDDUN](https://linddun.org)
- [RFC 6973 Privacy Considerations for Internet Protocols](https://datatracker.ietf.org/doc/html/rfc6973)
- [Privacy Principles](https://w3ctag.github.io/privacy-principles/)
- [Privacy primer](/en-US/docs/Web/Privacy/Privacy_primer)
