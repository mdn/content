---
title: GDPR
slug: Web/Privacy/Guides/Legislation/GDPR
page-type: guide
sidebar: privacy
---

The **General Data Protection Regulation (GDPR)** is a comprehensive data protection law enacted by the European Union (EU) with the goal of enhancing individuals' control over their personal data and unifying data protection regulations across EU member states. GDPR governs how organizations handle personal data of EU residents, enhancing individuals' control over their personal information.

This article explains what GDPR is, which organizations it applies to, and provides a basic introduction to GDPR requirements from a developer perspective. This guide should not be construed as legal advice.

## Who falls under GDPR

GDPR applies to any organization, no matter how small, that processes the personal data of even one person in the EU, regardless of whether the organization is based in the EU or elsewhere. _Personal data_ includes any identifying information, such as names, email addresses, and even device IDs. _Data processing_ is any action performed on data, whether automated or manual, including collecting, storing, using, and even erasing; so basically anything.

There are no size‑based exemptions, though if your company has fewer than 250 employees, you may be exempt from keeping formal "records of processing activities" (ROPA) — but only if your data processing is occasional, low‑risk, **and** does not involve sensitive data. If your site collects any personal data, either directly or through a third party, and is accessible in any EU state, you must comply with all of GDPR.

While the law applies universally, your requirements under the law are proportionate to your scale and risk.

### Additional requirements for EU-based businesses

Organizations located within an EU member state must register with their country's _Data Protection Authority (DPA)_, the national regulator responsible for enforcing GDPR, handling complaints, and imposing fines. DPAs also issue guidance; they publish guides on how to interpret GDPR, oversee breach notifications, and provide advice to individuals and institutions.

Registering with your country's DPA is a national administrative requirement, not a GDPR requirement. If your organization has no EU physical presence, then it does not "operate" in an EU member state in the legal sense that triggers DPA registration; but you must still comply with GDPR. Your organization must still comply with all the GDPR compliance requirements.

## Compliance requirements

The GDPR sets out compliance requirements for organizations that process personal data. The compliance requirements are designed to ensure transparency, accountability, and protection of personal privacy. Minimally, even the smallest organization should maintain at least:

| Requirement             | GDPR Article | Title                            | Core Purpose                                     |
| ----------------------- | ------------ | -------------------------------- | ------------------------------------------------ |
| Data inventory          | Art. 30      | Records of Processing Activities | Accountability through documented data flows     |
| Privacy notice          | Art. 13 & 14 | Information to Data Subjects     | Transparency about data use                      |
| Access request process  | Art. 15      | Right of Access                  | Empower individuals to see and verify their data |
| Breach log              | Art. 33 & 34 | Breach Notification              | Ensure breaches are documented and addressed     |
| Basic security controls | Art. 32      | Security of Processing           | Protect data through appropriate safeguards      |

### Definitions

GDPR uses the following terms:

- Personal data
  - : Captured data; any information that relates to an individual, generally a user, who can be directly or indirectly identified. This includes names, email addresses, location information, ethnicity, gender, biometric data, religious beliefs, web cookies, and political opinions can also be personal data. Personal data also includes pseudo-anonymous data if it is relatively easy to identify someone from the alledgedly anonymized data.

- Data processing
  - : Data actions; any actions performed on data, whether automated or manual, including but not limited to collecting, recording, organizing, structuring, storing, using, and erasing data.

- Data subject
  - : Your user; any person, generally the application user or site visitor, whose data is processed.

- Data controller
  - : You; the person in your organization who handles collectd data and decides why and how personal data will be processed.

- Data processor
  - : Third parties; any third party that processes personal data on your behalf, such as cloud servers, analytics, and email service providers.

### Data inventory

[Article 30, Records of processing activities (ROPA)](https://gdpr.eu/article-30-records-of-processing-activities/), aims to ensure organizations maintain internal records of the personal data they process: why they collect it, where it goes, and who has access to it. The goal is accountability: regulators must be able to understand an organization's data flows without conducting invasive audits. It also helps organizations identify risks, unnecessary processing, and compliance gaps.

#### Requirements

Your organization must document:

- Categories of data subjects and personal data
- Purposes of processing
- Recipients and international transfers
- Retention periods
- Security measures

As noted earlier, organizations with less than 250 employees are exempt, but only if processing is _occasional_, _low‑risk_, and does _not_ involve sensitive data — a narrow exception few meet.

### Privacy notice

Transparency is the goal of [Article 13, Information to be provided where personal data are collected from the data subject](https://gdpr.eu/article-13-personal-data-collected/), and [Article 14, Information to be provided where personal data have not been obtained from the data subject](https://gdpr.eu/article-14-personal-data-not-obtained-from-data-subject/). Individuals must understand how their data is used, who receives it, and what rights they have. When collecting any personal data, you must make your privacy policies clear, with no "hidden" or misleading data practices. Empower your users to make informed decisions.

#### Requirements

Your privacy notice must include:

- Identity and contact details of the _data controller_, the person who decides why and how personal data will be processed.
- Purposes and legal bases
- Categories of data (see data inventory)
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

If someone makes a DSAR request, your organization has one month to reply with a free (with some exceptions) copy of their personal data, describing the purposes, categories, recipients, retention, and rights. Your organization must verify the identity of the subject, making sure the request is for their own personal data and not someone else's, before providing any disclosures.

### Breach logs

Organizations are required to detect, document, and respond to data breaches quickly. Addressed in [Article 33, Notification of a personal data breach to the supervisory authority](https://gdpr.eu/article-33-notification-of-a-personal-data-breach/), and [Article 34, Communication of a personal data breach to the data subject](https://gdpr.eu/article-34-communication-of-a-personal-data-breach/), GDPR's goal is to reduce harm to individuals and ensure regulators can assess whether your organization's security practices are adequate. Article 33(5) mandates documentation of _every_ breach; hence a "breach log".

#### Requirements

When a data breach occurs, you must:

- Maintain an internal breach register documenting _all_ breaches, even those that are not reportable
- Assess risk to individuals
- Notify the DPA within 72 hours if risk is likely
- Notify affected individuals if risk is high
- Document facts, effects, and remedial actions

### Basic security controls

[Article 32, Security of processing](https://gdpr.eu/article-32-security-of-processing/), aims to ensure organizations protect personal data against unauthorized access, loss, or damage. It is intentionally flexible: security must be appropriate to the risk, meaning small organizations can adopt simpler controls while still protecting data.

#### Requirements

The level of security must match the sensitivity and volume of data processed. Organization must do what is required in order to meet basic security control standards, implementing security and privacy features such as:

- Encryption and pseudo-anonymization
- Ensuring confidentiality, integrity, and availability
- Ability to restore data after incidents
- Regular testing of security measures
- Access controls, authentication, and physical security
