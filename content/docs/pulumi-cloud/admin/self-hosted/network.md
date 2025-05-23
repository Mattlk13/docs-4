---
title_tag: Network Requirements | Self-Hosting Pulumi
meta_desc: The Pulumi Cloud networking ingress and egress information.
title: Network reqs
h1: Pulumi Cloud self-hosted network requirements
meta_image: /images/docs/meta-images/docs-meta.png
menu:
    cloud:
        name: Network reqs
        parent: pulumi-cloud-admin-self-hosted
        weight: 4
        identifier: pulumi-cloud-admin-self-hosted-network
aliases:
  - /docs/guides/self-hosted/requirements/
  - /docs/guides/self-hosted/requirements/network/
  - /docs/pulumi-cloud/self-hosted/network/
---

{{% notes type="info" %}}
Self-hosting is only available with **Pulumi Business Critical**. If you would like to evaluate the self-hosted Pulumi Cloud, sign up for the [30-day trial](/product/self-hosted#self-hosted-trial) or [contact us](/contact/).
{{% /notes %}}

Self-hosted Pulumi Cloud comprises [three containers](/docs/pulumi-cloud/self-hosted/components): the API, Console, and Migrations. These containers require several kinds of incoming and outgoing network access as well as access to various services depending on where you're deploying it to.

Although these containers require networking access by default, self-hosted Pulumi Cloud can configured to run in an air-gapped environment without external ingress and egress. Learn more in the [Deploying Pulumi Self-Hosted in Air-Gapped Environments guide](/docs/pulumi-cloud/admin/self-hosted/airgapped).

## Ingress

### Source - CLI/end user

- *443*: Access to the self-hosted Pulumi Cloud application (HTTPS)
- *80*: Redirect to port 443 (HTTP to HTTPS)

### Source - Console component

- *8080*: Access to API component (HTTP)

## Egress

### Destination - state storage

- Relevant storage medium
    - AWS S3 Service
    - Azure Blob Storage Service
    - Google Cloud Storage
    - S3 compatible storage

### Destination - MySQL Database

- *3306*: MySQL database
- *25*: SMTP for outgoing email (if used)
- *465*: SMTP over TLS for outgoing email (if used)
- *587*: SMTP over TLS for outgoing email (if used)

### Destination - Docker Services

- hub.docker.com
- index.docker.io
- auth.docker.io
- registry-1.docker.io
- download.docker.com
- production.cloudflare.docker.com

### Destination - Additional outbound targets

These depend on what services you are using:

- Login/Auth services if SAML is configured
