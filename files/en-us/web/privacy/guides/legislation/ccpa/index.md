---
title: CCPA
slug: Web/Privacy/Guides/Legislation/CCPA
page-type: guide
sidebar: privacy
---

The **California Consumer Privacy Act (CCPA)** is California privacy law that gives California residents rights over their personal information and sets requirements on businesses that collect, use, or share that data. The CCPA was enacted in 2018 and strengthened by the **California Privacy Rights Act (CPRA)** in 2023, amending and expanding the CCPA, rather than replacing it, with **California Consumer Privacy Act Regulations (CCPAR)** taking effect in 2026.

The CCPA gives Californians the rights to know, delete, opt out, correct, and limit the use of their personal data.
The CCPA applies to data controllers and processors that meet certain thresholds (e.g., revenue, data volume). It grants data subjects strong rights over their personal data and requires data controllers to be transparent, responsive, and responsible in how they handle that data.

## Who falls under CCPA

CCPA applies to for‑profit businesses that collect personal information of California residents and either have an annual revenue of over $25M, buy, sell, or share the personal data of over 100,000 data subjects, or derive most of their revenue from the selling or sharing of personal data. Non-profit organizations and businesses that fall below these thresholds are generally exempt.

While your site my not fall under CCPA, you may fall under Europe's [General Data Protection Regulation (GDPR)](/en-US/docs/Web/Privacy/Guides/Legislation/GDPR), which has similar requirements, but encompasses a much broader umbrella of sites. Both privacy policies require the following:

- A clear privacy policy that explaining data practices.
- Provide methods for submitting requests to know, delete, correct, or limit use of personal data.
- Respond to consumer requests within defined timelines.
- Maintain security procedures to protect personal data.

CCPA requires only an **opt‑out** mechanisms, including "Do Not Sell or Share My Personal Information" links, whereas GDPR is **opt-in**, preventing the selling or sharing of personal information with explicit consent from the privacy subject.

## Data subject rights

CCPA defines consumer rights over their personal data, including:

- Right to know
  - : Data subjects can request that a business disclose the categories and specific pieces of personal data collected, how it is used, and with whom it is shared. To comply, consider creating an export UI through which a user can download their data in a readable format, such as JSON and/or CSV. Ensure you can retrieve data from all microservices and third‑party processors.

- Right to delete
  - : Data subjects can request deletion of personal data collected (with some exceptions). To handle the request for the deletion of personal data, implement a deletion pipeline that:
    - Removes data from primary databases
    - Removes cached copies
    - Sends deletion requests to third‑party processors
    - Handles soft‑delete vs. hard‑delete logic safely
      For a better user experience, and to comply with the spirit, not just the letter, of the law, enable the user to delete their own data without requiring them to make a request.

- Right to opt-out of sale or sharing
  - : Data subjects can direct data controllers not to sell or share their personal data, - Right to opt-out of sale or sharing. The law requires you to provide data subjects the ability to opt out of having their information shared; and it is illegal to sell or share the personal data of data subject who have opted out. To comply, you have to both provide the ability to opt out and provide the business logic to prevent their data from being shared.
    - Include a "Do Not Sell or Share My Personal Information" link or setting.
    - Respect user consent preference signals, including {{domxref("Navigator.globalPrivacyControl")}} and {{domxref("WorkerNavigator.globalPrivacyControl")}}.
    - Ensure backend logic suppresses data sharing with ad networks or analytics vendors.
      Global Privacy Control (GPC), which is communicated to servers using the {{HTTPHeader("Sec-GPC")}} header, and accessible to clients via {{domxref("navigator.globalPrivacyControl")}}.

- Right to correct
  - : Added by CPRA, data subjects can request correction of inaccurate personal data. To comply and for a good user experience, provide a UI and API methods for users to update inaccurate data.

- Right to limit use of sensitive personal data
  - : Data subjects can restrict how data controllers use and disclose sensitive personal data, such as precise geolocation, race, and health data). When data subjects restrict how you use their sensitive personal data. Make sure your UI include toggles for users to restrict the use of their sensitive data, and enforce the restrictions they've set at the API authorization layer level.

CCPA also explicitly prevents discrimination. Data controllers cannot retaliate against data subjects for exercising their privacy rights.

### Conformity requirements

CCPA compliance is ultimately an engineering problem as much as a legal one. To comply with CCPA, you should [design for privacy](/en-US/docs/Web/Privacy/Guides/Designing_for_privacy) and build privacy into your application's architecture, data flows, and UI features. Ensure you collect the minimum data needed, store it securely and transparently, make it retrievable and deletable, and provide your users with control over their privacy choices.

to comply with CCPA,If you collect any personal data, or incorporate third party scripts that do, in addition to implementing all the [data subject rights](#data-subject-rights), there are several steps you need to complete and maintain to comply with the law:

- [Data inventory & classification](#data-inventory--classification)
- [Access/delete/correct/opt‑out features](#)
- Privacy dashboards
- Secure data pipelines
- Automated retention & deletion
- Third‑party data controls
- Logging & audit systems

### Data inventory & classification

Map and classify personal data to create a complete picture of the information you're collecting. Identify what data is collected, why it is being collected, and how the data is used across the application. Better understanding of the data collected will help you identify what falls under CCPA, enabling you to apply the correct protections, retention rules, and user‑rights workflows.

- Identify all data points collected
  - : Enumerate all the data sources in your system, including analytics events, error logs, cookies, and telemetry signals. Privacy risks aren't limited to user‑submitted form fields. Debug logs, third‑party SDKs, and default analytics settings all collect personal data so must be considered to ensure no personal data is collected unintentionally and that there are no unaccounted-for data points.

- Classify data as personal, sensitive, or non‑personal
  - : Each data point must be categorized based on CCPA definitions, which classifies personal data as being either personal, sensitive, or non‑personal. Personal data includes anything that can identify a user directly or indirectly, while sensitive data covers higher‑risk categories such as health information, precise location, or financial identifiers. Non‑personal data includes aggregated or anonymized information. The classification determines which legal obligations apply, what security controls are required, and how user rights requests must be handled. Anonymized information should be categorized as personal if it is relatively easy to identify someone from the nominally anonymized data.

- Document data flow
  - : Understanding data flow is essential for both GDPR and CCPA compliance. Document how data moves throught clients, APIs, databases, and third‑party services. Include the client interface to backend APIs, internal databases, caches, logs, and any external processors or service providers. Documentation helps identify where data is stored, duplicated, transformed, or shared, enabling accurate deletion, export, and opt‑out handling. It also exposes unnecessary transfers or risky integrations that may need to be redesigned.

- Tag your schema data fields
  - : Tag data fields in your codebase or schema to support automated handling, such as deletion and export. Tagging your models, schemas, or metadata, marking fields as personal or sensitive, enables automating compliance tasks like data deletion, correction, and export. Tagging will also help when it comes to responding to user rights requests without manual intervention, while reducing errors. Labeling privacy features enables maintainable as your system evolves. It also simplifies audits by showing exactly how regulated data is managed.

### Data minimization

Practice data minimization. Collect only data that is truly required, making "collect only what is needed" the default in your forms, APIs, and analytics. If you're working on an existing codebase, remove unnecessary data collection.

Unless required, disable tracking. If tracking is required, anonymize it.

### Privacy notices

Build privacy notices into the UI. Ensure privacy notices are accessible, clear, and dynamic. The notices should be visible, easily locatable. For example, you can include a link to the notice from the footer and settings page.The prose of the notice should clearly state what data is collected and why. It should also be dynamic; if your application changes data practices, your privacy notice should be updated.

### Verification

Before fulfilling an access or delete request, you must verify the identity of the person making the request and ensure that they are the data subject, or a legal representative of the data subject allowed to view the data. Develop a verification workflow that includes:

- Email‑based verification
- SMS verification
- OAuth‑based identity confirmation
- Secure request logging

### Security controls

CCPA requires "reasonable security." For developers, this means:

- Encrypt data at rest and in transit
- Use role‑based access control (RBAC)
- Implement rate‑limiting on privacy request endpoints
- Audit access logs
- Secure API keys and secrets
- Regularly patch dependencies

### Third‑parties

Your work is not limited to the code you control. If you include any third party scripts or services, you are responsible for and need to manage any third-party data-sharing. This includes:

- Tracking all SDKs, analytics tools, and integrations
- Disabling data sharing when users opt out
- Ensuring vendors support deletion and access requests
- Using server‑side tagging to control what data leaves your system

### Data automation

Even if these regulations didn't exist, if you collect data, you should automate data retention and deletion. It is good practice, and now the law, to define retention periods for the data you collect, automatically delete expired data, ensure that when data is deleted, the data is deleted from your back ups, with your backup databases following the same deletion rules. Because of regulations and associated audits, you do need to document retention logic.

### Logs and audits

To ensure your privacy audits proceed smoothly, you should log:

- Privacy requests
- Data exports
- Deletions
- Access to sensitive fields
- Third‑party data transfers

These logs support compliance audits and incident investigations.

### Testing and monitoring

Test and monitor privacy features

- Add automated tests for deletion, export, and opt‑out flows
- Run privacy regression tests before releases
- Monitor for unexpected data collection, such as by rogue SDKs

## CCPA in practice

Developers are responsible for implementing all the required features of CCPA, but it takes a team to meet the spirit of the law. For example, the developer must ensuring user's can physically opt-out, but it is important to also have good UX designers who ensure that the options to opt out is evident and easy to use, and technical writers who write clear explanations and understandable calls to action, clearly conveying to the user the purpose of the data collection, what the user's options are, and stating that there will be no discrimination if the user opts out.

Here is an example of an opt out message for email tracking:

> Our emails contain a feature that lets us know **whether they are opened and read**. This is useful to:
>
> - **Send you messages that genuinely interest you:** offers, tips, new features and mobility news;
> - **Write to you at the right time** and the right pace;
> - **​Measure the quality of our communications** in order to improve them.
>
> This indicator tells us about the opening of an email, the time it was read and the type of device used.
>
> Nothing to do on your end: this tracking is already active. But you remain free to opt out at any time, from your account or by clicking here:
>
> <kbd> I decline tracking </kbd>
>
> **Good to know:** Declining tracking does not unsubscribe you from our emails. You'll continue to receive our news and good deals, simply without personalization based on this indicator.
>
> To understand everything, see our [privacy policy](https://www.mozilla.org/en-US/privacy/websites/).

## See also

- [General Data Protection Regulation (GDPR)](/en-US/docs/Web/Privacy/Guides/Legislation/GDPR)
- [Designing for privacy](/en-US/docs/Web/Privacy/Guides/Designing_for_privacy)
- [Privacy](/en-US/docs/Web/Privacy)
- [California Consumer Privacy Act (CCPA)](https://www.oag.ca.gov/privacy/ccpa) via oag.ca.gov ([pdf](https://cppa.ca.gov/regulations/pdf/20230329_final_regs_text.pdf))
- [Global Privacy Control specification](https://www.w3.org/TR/gpc) via w3.org
