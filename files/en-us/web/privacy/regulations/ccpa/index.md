---
title: CCPA
slug: Web/Privacy/Regulations/CCPA
page-type: guide
sidebar: privacy
---

The **California Consumer Privacy Act (CCPA)** is a California privacy law that gives California residents rights over their personal information and places requirements on businesses that collect, use, or share that data.

The CCPA gives Californians the rights to know, delete, opt out, correct, and limit the use of their personal data.
The CCPA applies to organizations that meet certain thresholds (e.g., revenue, data volume). It grants consumers rights over their personal data and requires businesses to be transparent, responsive, and responsible in how they handle that data.

## Scope and penalties

The CCPA applies to for-profit businesses that collect personal information of California residents and meet any of the following criteria:

- Have an annual revenue of over 25 million US dollars.
- Buy, sell, or share the personal data of over 100,000 California residents
- Derive most of their revenue from the selling or sharing of personal data belonging to California residents.

Non-profit organizations and businesses that don't meet the criteria listed above are generally exempt.

Penalties for violating the CCPA vary based on the severity of the violation and are periodically revised. They are calculated per violation, so the total amount can escalate quickly for sites that have a lot of users.

## CCPA terminology

- **Business**
  - : The organization that collects and processes personal information.

- **Consumer**
  - : The person whose information is collected and processed by the business.

- **Personal information**
  - : Information that identifies, relates to, or could reasonably be linked with an individual or their household. This includes: name, email address, social security number, browsing history, purchase history, or any other data that could be used to build a profile about an individual.

- **Sensitive personal information**
  - : A subset of personal information including government identifiers such as a social security number, account login details, credit card number, biometric data, contents of messages, information about health, sex life or sexual orientation, information about racial or ethnic origin, religious or philosophical beliefs, or union membership.

## Transparency

When or before a business requests personal information, it must inform consumers about:

- The categories of [personal information](#personal_information) collected, the purposes for which it is collected, and whether it is sold or shared.

- The categories of [sensitive personal information](#sensitive_personal_information) collected, the purposes for which it is collected, and whether it is sold or shared.

- The length of time for which the business will retain the information.

The business must not use the information for any additional purposes, without also giving the consumer notice about these additional purposes.

The business must have a privacy policy on its website. This gives a broad picture of its practices for collecting, using, sharing, and selling personal information. It must also explain the [rights](#consumer_rights) that consumers have under the CCPA and how to exercise them.

## Security and integrity

A business must implement reasonable security measures to protect personal information from unauthorized access.

## Consumer rights

The CCPA describes six rights that it secures for California residents over their personal information:

- [The right to know](#right_to_know_delete_and_correct) about the personal information that a business collects about them.
- [The right to delete](#right_to_know_delete_and_correct) personal information.
- [The right to correct](#right_to_know_delete_and_correct) personal information.
- [The right to opt out of the sale or sharing](#right_to_opt_out_of_sale_or_sharing) of their personal information.
- [The right to limit the use and disclosure](#right_to_limit_sensitive_personal_information) of sensitive personal information.
- [The right to non-discrimination](#right_to_non-discrimination) for exercising their other CCPA rights.

### Right to know, delete, and correct

Consumers can request that a business:

- Disclose the categories and specific pieces of personal information collected, how they are used, and with whom they are shared.

- Delete personal information that has been collected (with some exceptions). Websites must delete not only copies of the data that they hold but data that they have shared with third parties.

- Correct inaccurate personal information.

To comply, websites must provide at least two methods that its users can use to submit a request, such as an email address, a web form, or a toll-free phone number. The website must have a privacy policy that includes instructions about how to submit a request.

Websites have 45 days to respond to a request, but may extend that by another 45 days if they notify the requester.

### Right to opt out of sale or sharing

Consumers can direct a business not to sell or share their personal information. In the context of the CCPA, sharing information refers specifically to its use in cross-context behavioral advertising.

There are two main methods consumers can use to opt out:

- Businesses that sell personal information must provide a clear and conspicuous "Do Not Sell or Share My Personal Information" link on their website that allows consumers to opt out.

- Businesses that sell personal information must respect the [Global Privacy Control](https://globalprivacycontrol.org/) signal, as conveyed in the {{httpheader("Sec-GPC")}} HTTP header.

### Right to limit sensitive personal information

Consumers can direct a business to limit its use of their [sensitive personal information](#sensitive_personal_information) to that which is necessary to perform the services or provide the goods that a consumer would reasonably expect.

### Right to non-discrimination

This means that if a consumer exercises one of their other rights under CCPA, then businesses must not retaliate against them. For example, either of the following could be considered discrimination:

- A consumer opts out of sharing their data, and the business then denies access to a service that does not depend on sharing that data.

- A consumer who has opted out of sharing their data is charged more for a service than one who has not.

## See also

- [General Data Protection Regulation (GDPR)](/en-US/docs/Web/Privacy/Regulations/GDPR)
- [California Consumer Privacy Act (CCPA)](https://www.oag.ca.gov/privacy/ccpa) via oag.ca.gov ([pdf](https://cppa.ca.gov/regulations/pdf/20230329_final_regs_text.pdf))
- [Global Privacy Control specification](https://www.w3.org/TR/gpc) via w3.org
