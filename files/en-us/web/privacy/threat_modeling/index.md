---
title: Privacy threat modeling
slug: Web/Privacy/Threat_modeling
page-type: guide
sidebar: privacy
---

In MDN's [security](/en-US/docs/Web/Security) section, we introduce [threat modeling](/en-US/docs/Web/Security/Threat_modeling) as a process helping you to identify and understand potential security risks and determine vulnerabilities specific to your application. This article gives guidance on how to do threat modeling from a privacy perspective. For a more general introduction to threat modeling, consult the articles in MDN's security section.

This article presents a general approach to privacy threat modeling. Depending on your application, legal obligations, and the privacy expectations of your users, a more detailed assessment may be required. Privacy risk assessments often extend beyond technical design to include organizational, legal, and policy considerations. For example, evaluating a personal blog is very different from evaluating an application that processes health records.

## What is a privacy threat?

A privacy threat is an action or condition that can lead to privacy harms for an individual. These harms can affect:

- Financial loss of money, employment, or other economic opportunities.
- Reputation: disclosure or misrepresentation of information that causes embarrassment or damages trust.
- Solitude: reduced ability to be left alone or to carry out activities without observation.
- Autonomy: reduced ability to think, communicate, or act freely without fear of monitoring or judgment.
- Safety: increased risk of stalking, harassment, coercion, or physical harm.

Whether a privacy threat results in an unacceptable privacy risk depends on the context, including the likelihood and severity of the harm, as well as the individual's awareness, expectations, and consent. For example, a user may knowingly consent to certain forms of monitoring in exchange for a service. The underlying privacy threat (such as surveillance) still exists, but the individual may consider the associated risk acceptable under those circumstances.

## Identifying personal information

When answering the first key threat modeling question ["What are we working on?"](/en-US/docs/Web/Security/Threat_modeling#2._what_can_go_wrong), we can take a particular focus on identify personal information.

- What personal information does the site collect?
- Where is it collected?
- Where is it stored?
- Who can access it?
- Which third parties receive it?

(TBD maybe expand this some more)

## Common privacy threats

In [Threat modeling frameworks and tools](/en-US/docs/Web/Security/Threat_modeling/Frameworks), we introduce the [LINDDUN](https://linddun.org) framework which represents seven categories of privacy threats. Additionally, [RFC6973](https://datatracker.ietf.org/doc/html/rfc6973) "Privacy considerations for Internet protocols" as well as the W3C TAG's [Privacy Principles](https://w3ctag.github.io/privacy-principles/) provide useful guiding principles which help you to think more about privacy threats.

The LINDDUN categories, RFC6973, and the W3C TAG's Privacy Principles are particularly helpful resources for answering one of the third threat modeling questions: ["What can go wrong?"](/en-US/docs/Web/Security/Threat_modeling#2._what_can_go_wrong).

The following common privacy threat categories are inspired by RFC6973 and the LINDDUN framework. For each category, we provide some common questions and an example scenario.

### Surveillance

Monitoring an individual's communications, behavior, or activities, either directly or indirectly.

Questions to ask:

- Can users be continuously observed or tracked?
- Is monitoring proportional to its intended purpose?

Example:

An e-commerce website records every mouse movement, scroll event, click, and keystroke using a session replay service. Although intended to improve usability, the recordings also capture sensitive searches and partially completed forms, allowing administrators or third-party providers to reconstruct a user's browsing session in great detail.

### Linkability (Correlation)

Associating two or more pieces of data or actions with the same individual or group, even if their identity is unknown.

Questions to ask:

- Can user behavior be linked across services or sessions?
- Can multiple datasets be combined to build detailed user profiles?

Example:

A news website uses the same analytics identifier across its main site, discussion forum, and newsletter. Even though users never log in, the identifier allows the operator to correlate which articles they read, which comments they post, and which emails they open, creating a detailed behavioral profile.

### Identifiability (Identification)

Determining the identity of an individual from data that was intended to be anonymous or pseudonymous.

Questions to ask:

- Are pseudonyms or identifiers sufficient to protect identities?
- Could identities be inferred by combining multiple data sources?

Example:

A website publishes "anonymous" user reviews but includes each reviewer's city, employer, and posting dates. By comparing this information with publicly available social media profiles, someone can determine who wrote many of the reviews.

### Information disclosure

Unauthorized or unnecessary exposure of personal information to other people, systems, or organizations.

Questions to ask:

- Are personal data, backups, logs, and exports adequately protected?
- Do analytics or third-party services receive unnecessary personal information?

Example:

A contact form sends visitors' names, email addresses, and message contents to a third-party analytics service because the developer configured analytics to capture every form submission. The analytics provider now receives personal information that it does not need to perform its service.

### Secondary use

Using personal information for purposes other than those for which it was originally collected or reasonably expected. Even if users consented to the original collection, they may not reasonably expect or consent to the new purpose.

Questions to ask:

- Is personal data reused for advertising, analytics, or profiling?
- Are users aware of and able to control secondary uses of their data?

Example:

Users create accounts solely to purchase products. Months later, the company begins using their purchase history to train a recommendation model and to send targeted marketing emails without informing users or providing a way to opt out.

### Stored data compromise

Unauthorized access to or disclosure of stored personal information due to security failures or data breaches.

Questions to ask:

- Are stored data encrypted and access-controlled?
- Could a breach expose sensitive personal information?

Example:

A website stores user profiles, addresses, and password hashes in an unencrypted database backup that is accidentally exposed through a publicly accessible cloud storage bucket. Anyone who discovers the bucket can download the entire dataset.

### Exclusion (Unawareness)

Individuals are unable to understand, influence, or exercise control over how their personal information is collected or used.

Questions to ask:

- Do users understand what data is collected and why?
- Can users access, correct, export, or delete their personal data?
- Are consent and privacy choices clear and meaningful?

Example:

A website requires visitors to accept all tracking cookies through a single "Accept" button but provides no explanation of which data will be collected, no option to reject non-essential cookies, and no way to later change their preferences or delete collected data.

### Non-repudiation

Creating records that permanently attribute actions or claims to an individual, limiting their ability to plausibly deny those actions.

Questions to ask:

- Are actions unnecessarily tied to a user's identity?
- Are logs retained longer than necessary?

Example:

A community forum permanently stores every post, edit, IP address, and login history under a user's real name, even after the account has been deleted. Years later, those records can still be used to prove that a particular person performed specific actions, even though retaining that information is no longer necessary.

## Mitigations and responses

To answer the third threat modeling question ["What are we going to do about it?"](/en-US/docs/Web/Security/Threat_modeling#3._what_are_we_going_to_do_about_it), we will need to look into deciding how to respond to the identified privacy threats.

TBD TBD

TBD TBD

## Did we do a good enough job?

The fourth threat modeling question ["Did we do a good enough job?"](/en-US/docs/Web/Security/Threat_modeling#4._did_we_do_a_good_enough_job), like security, is hard to measure and to give an ultimate answer to. However, like with general threat modeling, it should be understood as an recurring exercise to revisit the identified threats and their responses as well as keeping an active eye on new developments in the privacy field on a regular basis. Your privacy focused threat model document can also help inform the privacy policy for your website or project.

## See also

- [Guide to threat modeling](/en-US/docs/Web/Security/Threat_modeling)
- [Threat modeling frameworks and tools](/en-US/docs/Web/Security/Threat_modeling/Frameworks)
- [LINDDUN](https://linddun.org)
- [RFC 6973 Privacy Considerations for Internet Protocols](https://datatracker.ietf.org/doc/html/rfc6973)
- [Privacy Principles](https://w3ctag.github.io/privacy-principles/)
