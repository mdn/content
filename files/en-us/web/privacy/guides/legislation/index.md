---
title: International privacy laws
slug: Web/Privacy/Guides/Legislation
page-type: guide
sidebar: privacy
---

- [General Data Protection Regulation (GDPR)](/en-US/docs/Web/Privacy/Guides/Legislation/GDPR)
  - : The European Union's comprehensive data protection law enacted to enhance individual control over their own data and to unify data protection regulations across EU member states. GDPR governs how organizations handle personal data of EU residents, enhancing individuals' control over their personal information.
  - : GDPR is a strict, opt‑in, rights‑heavy regulation that applies to anyone processing EU data. GDPR requires a lawful basis for processing. Consent must be freely given, specific, informed, and unambiguous. Users must actively opt in before data collection unless another lawful basis applies (contract, legal obligation, legitimate interest, etc.).

- [California Consumer Privacy Act (CCPA)](/en-US/docs/Web/Privacy/Guides/Legislation/CCPA)
  - : California's privacy law providing residents rights over their personal information and creates requirements on businesses that collect, use, or share that data, including rights to know, delete, opt out, correct, and limit the use of sensitive data.
  - : CCPA is business‑threshold‑based, opt‑out, category‑driven legislation that is focused on the sale and sharing of personal data. CCPA allows businesses to collect and use personal information by default but requires data subjects have the right to opt out of sale or sharing of personal information and the right to limit use of sensitive personal information, while requiring Global Privacy Control (GPC) signals be honored.

To comply with both, developers must ensure that systems collect less data, store it transparently, make it retrievable and deletable, and provide user‑controlled privacy choices. [Design and develop for privacy](/en-US/docs/Web/Privacy/Guides/Designing_for_privacy), and have comprehensive privacy policies, security and breach workflows, Data Subject Access Request (DSAR) / consumer request pipelines, complete data inventory with documentation, and a consent / opt-out capabilities.

## Glossary of terms

The various privacy laws slightly different vocabulary in defining users, captured data, actions on that data, data processing, and who processes the data. In our documentation, we use GDPR terminology, including the following terms:

- Personal data
  - : Captured data; any information that relates to an individual, generally a user, who can be directly or indirectly identified. This includes names, email addresses, location information, ethnicity, gender, biometric data, religious beliefs, web [cookies](/en-US/docs/Web/HTTP/Guides/Cookies), and even political opinions. Personal data also includes pseudo-anonymous data if it is relatively easy to identify someone from the nominally anonymized data.

- Data processing
  - : Data actions; any actions performed on data, whether automated or manually, including but not limited to collecting, recording, organizing, structuring, storing, using, and deleting data.

- Data subject
  - : Your user; any person, generally the application user or site visitor, whose data is processed.

- Data controller
  - : You; the person in your organization who handles collectd data and decides why and how personal data is processed.

- Data processor
  - : Third parties; any third party that processes personal data on your behalf, such as cloud servers, analytics, and email service providers.

## See also

- [Designing for privacy](/en-US/docs/Web/Privacy/Guides/Designing_for_privacy)
- [Privacy guides](/en-US/docs/Web/Privacy/Guides)
