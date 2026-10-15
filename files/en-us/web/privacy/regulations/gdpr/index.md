---
title: GDPR
slug: Web/Privacy/Regulations/GDPR
page-type: guide
sidebar: privacy
---

The **General Data Protection Regulation (GDPR)** is a comprehensive data protection law enacted by the [European Union (EU)](https://en.wikipedia.org/wiki/European_Union). It gives individuals control over how their personal data is used by organizations, and imposes restrictions on how an organization is allowed to handle this personal data.

This article explains what the GDPR is, which organizations it applies to, and provides a basic introduction to the requirements imposed by GDPR on web developers. The GDPR is a complex regulation and we can't provide a complete guide to compliance here: instead we just outline the most important responsibilities. The website [GDPR.EU](https://gdpr.eu/) provides comprehensive guidance.

## Scope and penalties

The GDPR applies to any organization that is based in the EU as well as any organization outside the EU that offers goods or services to EU residents, or that tracks them (for example, by setting or reading cookies or recording IP addresses).

It applies when any such organizations [process](#processing_data) the [personal data](#personal_data) of any EU resident, in the course of professional or commercial activities. That is, it does not apply to purely personal activities.

The GDPR does not make an exception for small organizations, although organizations with fewer than 250 employees are in some circumstances [exempt from some record-keeping requirements](#record_of_processing_activities).

Organizations who violate the GDPR may be fined. Fines vary depending on the severity of the violation and the size of the company, but they can be very severe: up to €20 million, or 4% of the organization's worldwide annual revenue from the previous financial year.

## GDPR terminology

- **Personal data**
  - : Any information relating to an identified or identifiable natural person. This includes data that can be directly used to identify a person, such as a name, social security number, date of birth, or address. It may also include physical attributes, such as biometric data or ethnicity, societal data such as religious or political affiliation, or finance-related information such as a credit card number.

- **Processing data**
  - : This term includes both collecting data in the first place and working with data that has been collected. Working with data includes activities such as recording, organizing, storing data, or using it in almost any other way.

- **Data subject**
  - : The people who own the personal data being processed: the users of your website.

- **Data controller**
  - : The person or organization who determines what data is processed and how it is processed. If you maintain a website that collects and uses personal data, this is you.

- **Data processor**
  - : Any person or organization who [processes data](#processing_data) on behalf of a [data controller](#data_controller).

## Data processing restrictions

The GDPR defines restrictions on what personal data may be processed and how it may be processed, including:

- You may only process a subject's personal data if they explicitly consent to it, or in various other specific cases (including, for example, that you need to process personal data in order to comply with a legal obligation). See [Article 6: Lawfulness of processing](https://gdpr.eu/article-6-how-to-process-personal-data-legally/).

- Consent must be explicit and freely given. The subject must be able to withdraw their consent at any time, and withdrawing consent must be as easy as granting it. If a website makes access to a service dependent on consent, while the personal data being requested was not needed for the service, then this indicates coercion: that is, the consent may not have been freely given. See [Article 7: Conditions for consent](https://gdpr.eu/article-7-how-to-get-consent-to-collect-personal-data/).

- You may only use personal data for the purposes indicated when you requested it.

- You must practice data minimization: that is, you may only request personal data which you need to process in order to meet the purposes indicated.

- You may only store personal data for as long as you need in order to meet the purposes indicated.

- You must maintain the accuracy of any stored personal data.

See also [Article 5: Principles relating to processing of personal data](https://gdpr.eu/article-5-how-to-process-personal-data/).

## Data security

You must maintain the confidentiality and integrity of any stored personal data. This typically means that it should be encrypted, protected from unauthorized access, and that staff should be trained in the proper handling of sensitive data.

If you have a data breach, you must tell the supervisory authority within 72 hours and, depending on the severity of the breach, may also have to inform the affected data subjects.

See also:

- [Article 32: Security of processing](https://gdpr.eu/article-32-security-of-processing/)
- [Article 33: Notification of a personal data breach to the supervisory authority](https://gdpr.eu/article-33-notification-of-a-personal-data-breach/)
- [Article 34: Communication of a personal data breach to the data subject](https://gdpr.eu/article-34-communication-of-a-personal-data-breach/).

## Rights of data subjects

The GDPR recognizes a number of rights for data subjects, and mandates that data controllers and processors enable subjects to exercise these rights.

Data subjects have the right to know what personal data is processed, how it will be processed, who has access to it, and how it is protected. They also have the right to retrieve, correct, delete, and transfer their data.

See also [Chapter 3: Rights of the data subject](https://gdpr.eu/tag/chapter-3/).

## Demonstrating compliance

Data controllers must be able to show that they comply with the terms of the GDPR. The GDPR calls this _accountability_.

### Record of processing activities

A key component of accountability is a record of the data processing activities that the data controller engages in, also called a _record of processing activities_. This documents the data that is collected and how it is used. Both data controllers and data processors must maintain these records.

Organizations with fewer than 250 employees may be exempt from this requirement, depending on the type of processing that they carry out.

See also [Article 30: Records of processing activities](https://gdpr.eu/article-30-records-of-processing-activities/).

### Data protection impact assessment

A _data protection impact assessment_ (DPIA) is another practice that an organization can follow to show that they are in compliance with the GDPR. It is performed as part of the planning for a project that involves processing personal data, and includes:

- A description of the data that the controller expects to collect and the purposes for which it will be used.
- An assessment of the necessity and proportionality of the processing, in relation to its goals.
- An assessment of the risks posed to the subjects of the data.
- A description of the measures that will be taken to address these risks.

Depending on the specific activity they are engaged in, organizations don't always have to produce a DPIA, but it always offers good evidence that a controller is in compliance with the GDPR.

See also [Article 35: Data protection impact assessment](https://gdpr.eu/article-35-impact-assessment/) and [Data Protection Impact Assessment (DPIA)](https://gdpr.eu/data-protection-impact-assessment-template/).

### Data Protection Officer

A Data Protection Officer (DPO) is an individual nominated by a controller or processor (and often, although not necessarily, an employee of the controller or processor). They are responsible for informing the controller or processor of its obligations under the GDPR, monitoring its compliance, and interacting with external parties such as data subjects and regulatory authorities.

Some organizations must appoint a DPO, while for others this is optional: however, it's considered to be a good way to help demonstrate that an organization is compliant.

See [Everything you need to know about the GDPR Data Protection Officer (DPO)](https://gdpr.eu/data-protection-officer/).

## See also

- [GDPR.EU](https://gdpr.eu/)
- [What is GDPR, the EU's new data protection law?](https://gdpr.eu/what-is-gdpr/)
- [GDPR compliance checklist](https://gdpr.eu/checklist/)
