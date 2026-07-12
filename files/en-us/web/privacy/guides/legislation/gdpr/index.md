---
title: GDPR
slug: Web/Privacy/Guides/Legislation/GDPR
page-type: guide
sidebar: privacy
---

The **General Data Protection Regulation (GDPR)** is a comprehensive data protection law enacted by the European Union (EU) with the goal of enhancing individuals' control over their personal data and unifying data protection regulations across EU member states, including the European Economic Area (EEA) (Iceland, Liechtenstein, and Norway). GDPR governs how organizations handle personal data of EU residents, enhancing individuals' control over their personal information. Regardless of where you and your organization are based, GDPR applies to you if your website or application is available in EU.

This article explains what GDPR is, which organizations it applies to, and provides a basic introduction to GDPR requirements from a developer perspective. This is also a [glossary of GDPR terms](#gdpr_glossary_of_terms). This guide should not be construed as legal advice.

## Who falls under GDPR

GDPR applies to any organization, no matter how small, that processes the [personal data](#personal_data) of even one person in the EU, regardless of whether the organization is based in the EU or elsewhere. [Data processing](#data_processing) is any action performed on data, whether automated or manual, including collecting, storing, using, and even erasing; so basically anything.

There are no size‑based exemptions, though if a company has fewer than 250 employees, they may be exempt from keeping formal "records of processing activities" (ROPA) — but only if their data processing is occasional, low‑risk, **and** does not involve sensitive data. If a site collects any personal data, either directly or through a third party, and is accessible in the EU, it must comply with all of GDPR.

While the law applies universally, requirements under the law are proportionate to scale and risk. While the law applies to everyone collecting personal data, a sole proprieter with a small client list will not be expected to maintain a Records of Processing Activities (ROPA). Documenting what data is held, why, and for how long may be enough to demonstrate accountability. The law requires that everyone considers and documents GDPR compliance, but your blog's mailing list doesn't require the same compliance efforts of a multinational corporation.

### Enforcers

Organizations located within an EU or EEA member state must register with their country's _Data Protection Authority (DPA)_, the national regulator responsible for enforcing GDPR, handling complaints, and imposing fines. DPAs are a great resource issuing guidance; they publish guides on how to interpret GDPR, oversee breach notifications, and provide advice to individuals and institutions.

Registering with your country's DPA is a national administrative requirement, not a GDPR requirement. If your organization has no EU/EEA physical presence, then it does not "operate" in an EU member state in the legal sense that triggers DPA registration; but your organization must still comply with all the GDPR compliance requirements.

## Compliance requirements

The GDPR sets out compliance requirements for organizations that process [personal data](#personal_data). The compliance requirements are designed to ensure transparency, accountability, and the protection of personal privacy.

This table is a summary of the GDPR articles and the requirement category most relevant to you, the developer. Explanations and requirements for each category follow:

| Requirement category    | GDPR Article | Title                            | Core Purpose                                     |
| ----------------------- | ------------ | -------------------------------- | ------------------------------------------------ |
| Data inventory          | Art. 30      | Records of processing activities | Accountability through documented data flows     |
| Privacy notice          | Art. 13 & 14 | Information to data subjects     | Transparency about data use                      |
| Access request process  | Art. 15      | Right of access                  | Empower individuals to see and verify their data |
| Breach log              | Art. 33 & 34 | Breach notification              | Ensure breaches are documented and addressed     |
| Basic security controls | Art. 32      | Security of processing           | Protect data through appropriate safeguards      |

### Data inventory

[Article 30, Records of processing activities (ROPA)](https://gdpr.eu/article-30-records-of-processing-activities/), aims to ensure organizations maintain internal records of the [personal data](#personal_data) they process: why they collect it, where it goes, and who has access to it. The goal is accountability: regulators must be able to understand an organization's data flows without conducting invasive audits. It also helps organizations identify risks, unnecessary processing, and compliance gaps.

#### Requirements

Your organization must document:

- Categories of [data subjects](#data_subject) and personal data
- Purposes of processing
- Recipients and international transfers
- Retention periods
- Security measures

As noted earlier, organizations with less than 250 employees are exempt, but only if processing is _occasional_, _low‑risk_, and does _not_ involve sensitive data — a narrow exception few meet.

### Privacy notice

Transparency is the goal of [Article 13, Information to be provided where personal data are collected from the data subject](https://gdpr.eu/article-13-personal-data-collected/), and [Article 14, Information to be provided where personal data have not been obtained from the data subject](https://gdpr.eu/article-14-personal-data-not-obtained-from-data-subject/). Individuals must understand how their data is used, who has access to it, and their rights. When collecting any personal data, you must make your privacy policies clear, with no "hidden" or misleading data practices. Empower your users to make informed decisions.

#### Requirements

Your privacy notice must include:

- Identity and contact details of the [data controller](#data_controller), the person who decides why and how personal data will be processed.
- Purposes and legal bases
- Categories of data (see [data inventory](#data_inventory))
- Recipients
- Transfers outside the EU
- Retention periods
- Rights (access, deletion, objection, etc.)
- Right to lodge a complaint with a DPA
- Whether data is mandatory and consequences of not providing it
- Automated decision‑making details, if applicable

### Process for access requests

[Article 15, Right of access by the data subject](https://gdpr.eu/article-15-right-of-access/), gives individuals the right to know what data an organization holds about them and how it is used. The Data Subject Access Request (DSAR) regulations aim to prevent misuse, ensure fairness, and allow individuals to verify accuracy. It also supports other rights, including rectification, deletion, and objection.

#### Requirements

If an individual makes a _DSAR request_, a formal request to obtain a copy of their personal data you hold about them, you have one month to verify the requester's identity, locate relevant data, and provide it to them in a secure way. Verifying the identity of the subject is required to ensure the requestor is the data subject; that the request is for their own data and not someone else's. You must reply with a free (with some exceptions) copy of their personal data, describing the purposes, categories, recipients, retention, and rights.

### Breach logs

[Article 33, Notification of a personal data breach to the supervisory authority](https://gdpr.eu/article-33-notification-of-a-personal-data-breach/), and [Article 34, Communication of a personal data breach to the data subject](https://gdpr.eu/article-34-communication-of-a-personal-data-breach/) require you to detect, document, and respond to data breaches quickly. Article 33(5) mandates documentation of _every_ breach; hence a "breach log". The goal is to reduce harm to individuals and ensure regulators can assess whether security practices are adequate.

#### Requirements

When a data breach occurs, you must:

- Maintain an internal breach register documenting _all_ breaches, even those that are not reportable
- Assess risk to individuals
- Notify the DPA within 72 hours if risk is likely
- Notify affected individuals if risk is high
- Document facts, effects, and remedial actions

### Basic security controls

[Article 32, Security of processing](https://gdpr.eu/article-32-security-of-processing/), aims to ensure the protection of personal data against unauthorized access, loss, or damage. It is intentionally flexible: [security](/en-US/docs/Web/Security/) must be appropriate to the risk, meaning small organizations can adopt simpler controls while still protecting data.

#### Requirements

The level of security must match the sensitivity and volume of data processed. You have to meet basic security control standards, implementing security and privacy features such as:

- Encryption and pseudo-anonymization
- Ensuring confidentiality, integrity, and availability
- Ability to restore data after incidents
- Regular testing of security measures
- Access controls, [authentication](/en-US/docs/Web/Security/Authentication), and physical security

## GDPR glossary of terms

GDPR uses the following terms:

- Personal data
  - : Captured data; any information that relates to an individual, generally a user, who can be directly or indirectly identified. This includes names, email addresses, location information, ethnicity, gender, biometric data, religious beliefs, web cookies, and even political opinions. Personal data also includes pseudo-anonymous data if it is relatively easy to identify someone from the nominally anonymized data.

- Data processing
  - : Data actions; any actions performed on data, whether automated or manually, including but not limited to collecting, recording, organizing, structuring, storing, using, and deleting data.

- Data subject
  - : Your user; any person, generally the application user or site visitor, whose data is processed.

- Data controller
  - : You; the person in your organization who handles collectd data and decides why and how personal data is processed.

- Data processor
  - : Third parties; any third party that processes personal data on your behalf, such as cloud servers, analytics, and email service providers.

## See also

- [California Consumer Privacy Act (CCPA)](/en-US/docs/Web/Privacy/Guides/CCPA)
- [Designing for privacy](/en-US/docs/Web/Privacy/Guides/Designing_for_privacy)
- [Privacy](/en-US/docs/Web/Privacy)
