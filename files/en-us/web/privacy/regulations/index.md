---
title: Privacy regulations
slug: Web/Privacy/Regulations
page-type: guide
sidebar: privacy
---

Respecting a user's privacy is not just a good practice and a way to build trust, it's legally required in various jurisdictions. In this section of our privacy documentation we'll describe two of the most important regulations, the [GDPR](#), which applies to users in the European Union, and the [CCPA](#), which applies to users in California. In each case we'll explain the conditions in which a website is required to comply with the regulation and what compliance looks like.

## GDPR: Europe's privacy law

The [General Data Protection Regulation (GDPR)](/en-US/docs/Web/Privacy/Regulations/GDPR), is the European Union's comprehensive data protection law. GDPR gives individuals control over their own data and unifies data protection regulations across EU member states. GDPR governs how organizations handle the personal data of EU residents.

GDPR is a strict, opt‑in, rights‑heavy regulation that applies to anyone processing EU data. GDPR requires a lawful basis for processing. Consent must be freely given, specific, informed, and unambiguous. Users must actively opt in before data collection unless another lawful basis applies (contract, legal obligation, legitimate interest, etc.).

## CCPA: California's privacy law

The [California Consumer Privacy Act (CCPA)](/en-US/docs/Web/Privacy/Regulations/CCPA) is a California privacy law giving California residents rights over their personal information. CCPA creates requirements on businesses that collect, use, or share that data, including rights to know, delete, opt out, correct, and limit the use of sensitive data.

CCPA is business‑ and threshold‑based, opt‑out, category‑driven legislation that is focused on the sale and sharing of personal data. CCPA allows businesses to collect and use personal information by default but requires that data subjects have the right to opt out of the sale or sharing of personal information and provides data subjects the right to limit the use of their sensitive personal information, while requiring [Global Privacy Control (GPC)](/en-US/docs/Web/API/Navigator/globalPrivacyControl) signals be honored.

The CCPA law applies primarily to businesses meeting specific size‑related thresholds, but also applied based on the type of data being collected. CCPA groups personal information into defined categories — including a special category for "sensitive personal information" — and different rules apply depending on which category a business processes. Because of these differences, developers need to understand both threshold‑based requirements and category‑based requirements to know when and how each law applies.

## Complying with privacy regulations

To better ensure user privacy, you should [design and develop for privacy](/en-US/docs/Web/Privacy/Designing_for_privacy), and have comprehensive [privacy policies](/en-US/docs/Web/Privacy/GDPR#privacy_notice), security and breach workflows, a consumer request user flow or pipeline to meet [Data Subject Access Request (DSAR)](/en-US/docs/Web/Privacy/GDPR#process_for_access_requests) requirements, complete [data inventory with documentation](/en-US/docs/Web/Privacy/GDPR#data_inventory), and a consent / opt-out capabilities. To comply with both GDPR and CCPA, developers must ensure that systems minimize data collection, store it [transparently](/en-US/docs/Web/Privacy/GDPR#privacy_notice), make it retrievable and deletable, and provide user‑controlled privacy choices.

_Data minimization_ means collecting only what is reasonably necessary and proportionate for your disclosed purpose. For example, if you only need an email address to create user accounts, you cannot also require a phone number. Similarly, when collecting usage analytics, you must collect only the metrics required, not full logs. Data minimization means collecting less data compared to any unnecessary or unjustified data collection, not compared to a specific baseline.

_Transparent storage_ means storing data in a way that is fully visible, understandable, and controllable by the user. Let your users know what data is collected, where it is stored, how long and why it will be stored, and who can access it. Users should be able to see what is being stored and retrieve their data. GDPR calls this the "right of access" while CCPA calls this the "right to know". Users must be able to view the data you hold about them, download it in a usable format, and request corrections.

## Glossary of terms

The various privacy laws use slightly different vocabulary to name users, captured data, actions on that data, data processing, and those who processes the data. In our documentation, we use [GDPR terminology](https://gdpr-info.eu/art-4-gdpr/), including the following terms:

- **Personal data**
  - : Any captured data or information that relates to an individual, generally a user, who can be directly or indirectly identified. This includes names, email addresses, location information, ethnicity, gender, biometric data, religious beliefs, web [cookies](/en-US/docs/Web/HTTP/Guides/Cookies), and even political opinions. Personal data also includes anonymized data if it is relatively easy to identify someone from the nominally anonymized data.

- **Data processing**
  - : Any actions performed on data, whether automated or manually, including but not limited to collecting, recording, organizing, structuring, storing, using, and deleting data.

- **Data subject**
  - : The user whose data is being collected and processed.

- **Data controller**
  - : The person or organization who determines why and how personal data is processed: that is, the entity who is ultimately responsible for safeguarding the user's data.

- **Data processor**
  - : Any third party that processes personal data on the controller's behalf, such as cloud servers, analytics, and email service providers.

## See also

- [Designing for privacy](/en-US/docs/Web/Privacy/Designing_for_privacy)
- [Privacy guides](/en-US/docs/Web/Privacy)
