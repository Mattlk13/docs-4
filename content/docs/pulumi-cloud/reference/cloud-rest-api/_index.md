---
title_tag: "Pulumi Cloud: REST API"
meta_desc: An overview of the Pulumi Cloud REST API for querying Organization, Stack, State, etc. information.
title: "REST API docs"
h1: Pulumi Cloud REST API docs
meta_image: /images/docs/meta-images/docs-meta.png
menu:
    cloud:
        name: REST API docs
        parent: pulumi-cloud-reference
        weight: 1
        identifier: pulumi-cloud-reference-cloud-rest-api
aliases:
  - /docs/reference/service-rest-api/
  - /docs/intro/insights/api/
  - /docs/reference/cloud-rest-api/
  - /docs/pulumi-cloud/cloud-rest-api/
---

The Pulumi Cloud REST API is used by the Pulumi CLI to query and interact with state information, history, stack tags, etc. This API is available for end users to integrate into their own automation use cases.

## Endpoint URL

For the Managed Pulumi Cloud (i.e. [app.pulumi.com](https://app.pulumi.com/)), API endpoints are prefixed with the following url:

```
https://api.pulumi.com
```

If you are using [Self-Hosted Pulumi Cloud](/docs/pulumi-cloud/self-hosted/), then use the configured endpoint for the [Pulumi API component](/docs/pulumi-cloud/self-hosted/components/api#api-service) (e.g. `https://api.pulumi.example.com`).

## Authentication

All requests must be authenticated using a token via the `Authorization` HTTP header.

The `Authorization` header must be in the form below with the literal string `token`, then a space, then your access token value.

```
Authorization: token {token}
```

To view your access tokens, or create a new one, view the <a href="https://app.pulumi.com/account/tokens" target="_blank">Access Tokens</a> page. You will see a list of past tokens, when they were last used, and have the ability to revoke them.

The Pulumi Cloud REST API will return a 401 status code if the token is missing or invalid.

## Required Request Headers

The following headers are required for all operations except where explicitly noted:

```
Accept: application/vnd.pulumi+8
Content-Type: application/json
```

<!-- ###################################################################### -->

## Stacks

### Create Stack

Creates a new stack in the Pulumi Cloud. If the project does not exist, it will also be created.

```
POST /api/stacks/{organization}/{project}
```

#### Parameters

| Parameter      | Type   | In   | Description                                                                                      |
|----------------|--------|------|--------------------------------------------------------------------------------------------------|
| `organization` | string | path | Organization name                                                                                |
| `project`      | string | path | Name of the project to create the stack under. If the project doesn't exist, it will be created. |
| `stackName`    | string | body | Name of the stack being created.                                                                 |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"stackName":"{stackName}"}' \
  https://api.pulumi.com/api/stacks/{organization}/{project}
```

### List Stacks

Lists stacks available to the authenticated user.

```
GET /api/user/stacks
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | query | **Optional.** organization name to filter stacks by                                                          |
| `project`           | string | query | **Optional.** organization name to filter stacks by                                                          |
| `tagName`           | string | query | **Optional.** tag name to filter stacks by                                                                   |
| `tagValue`          | string | query | **Optional.** tag value to filter stacks by                                                                  |
| `continuationToken` | string | query | **Optional.** the continuation token to use for retrieving the next set of results if results were truncated |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/user/stacks?organization={organization}&tagName={tagName}&tagValue={tagValue}
```

#### Default response

```
Status: 200 OK
```

```
{
  "stacks": [
    {
      "orgName": "org1",
      "projectName": "project1",
      "stackName": "dev",
      "lastUpdate": 1612481387,
      "resourceCount": 0
    },
    {
      "orgName": "org2",
      "projectName": "project2",
      "stackName": "prod",
      "lastUpdate": 1605474464,
      "resourceCount": 0
    }
  ],
  "continuationToken": "5-"
}
```

<!-- ###################################################################### -->

### Get Stack

```
GET /api/stacks/{organization}/{project}/{stack}
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}
```

#### Default response

```
Status: 200 OK
```

```
{
  "orgName": "demo",
  "projectName": "demo-aws-ts-webserver",
  "stackName": "dev-user1",
  "currentOperation": {
    "kind": "update",
    "author": "user1",
    "started": 1615872156
  },
  "activeUpdate": "d333a711-4aa0-402f-be6d-72af9665fc37",
  "tags": {
    "gitHub:owner": "pulumi",
    "gitHub:repo": "customer-engineering",
    "pulumi:description": "A minimal AWS TypeScript Pulumi program",
    "pulumi:project": "demo-aws-ts-webserver",
    "pulumi:runtime": "nodejs",
    "pulumi:secrets_provider": "service",
    "vcs:kind": "github.com",
    "vcs:owner": "pulumi",
    "vcs:repo": "customer-engineering"
  },
  "version": 91
}
```

<!-- ###################################################################### -->

### Get Stack Downstream References

```
GET /api/stacks/{organization}/{project}/{stack}/downstreamreferences
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/downstreamreferences
```

#### Default Response

```
Status: 200 OK
```

```
{
  "referencedStacks": [
    {
      "organization": "demo",
      "routingProject": "demo-aws-ts-webserver",
      "name": "dev-user1",
      "version": 3
    }
  ]
}
```

<!-- ###################################################################### -->

### Get Stack Metadata

```
GET /api/stacks/{organization}/{project}/{stack}/metadata
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/metadata
```

#### Default Response

```
Status: 200 OK
```

```
{
  "orgName": "demo",
  "projectName": "demo-aws-ts-webserver",
  "stackName": "dev-user1",
  "userPermission": 103,
  "notificationSettings": {
    "notifyUpdateFailure": false,
    "notifyUpdateSuccess": false
  }
}
```

<!-- ###################################################################### -->

### Get Stack State

```
GET /api/stacks/{organization}/{project}/{stack}/export
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/export
```

#### Default response

```
Status: 200 OK
```

```
{
  "version": 3,
  "deployment": {
    "manifest": {
      "time": "2021-03-15T22:29:53.782994-07:00",
      "magic": "6ed32cc63f3d459cb6f52bb150bc8ff68db740bf43964d429d5ca57f52c832b1",
      "version": "v2.22.0"
    },
    "secrets_providers": {
      "type": "service",
      "state": {
        "url": "https://api.pulumi.com",
        "owner": "org1",
        "project": "demo-aws-ts-webserver",
        "stack": "dev-user1"
      }
    },
    "resources": [
      {
        "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:pulumi:Stack::demo-aws-ts-webserver-dev-user1",
        "custom": false,
        "type": "pulumi:pulumi:Stack",
        "outputs": {
          "vpcId": "vpc-04057e18647a66e24"
        }
      },
      {
        "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:providers:aws::default_3_32_0",
        "custom": true,
        "id": "d77c9fd7-1c06-427d-ba26-dbd8a8cbf91a",
        "type": "pulumi:providers:aws",
        "inputs": {
          "region": "us-west-2",
          "version": "3.32.0"
        },
        "outputs": {
          "region": "us-west-2",
          "version": "3.32.0"
        }
      },
      {
        "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::aws:ec2/vpc:Vpc::main",
        "custom": true,
        "id": "vpc-04057e18647a66e24",
        "type": "aws:ec2/vpc:Vpc",
        "inputs": {
          "__defaults": [
            "assignGeneratedIpv6CidrBlock",
            "enableDnsSupport",
            "instanceTenancy"
          ],
          "assignGeneratedIpv6CidrBlock": false,
          "cidrBlock": "10.0.0.0/16",
          "enableDnsSupport": true,
          "instanceTenancy": "default"
        },
        "outputs": {
          "__meta": "{\"schema_version\":\"1\"}",
          "arn": "arn:aws:ec2:us-west-2:0123456789:vpc/vpc-04057e18647a66e24",
          "assignGeneratedIpv6CidrBlock": false,
          "cidrBlock": "10.0.0.0/16",
          "defaultNetworkAclId": "acl-0b63012743b57140d",
          "defaultRouteTableId": "rtb-01c36ce5fcc3ac797",
          "defaultSecurityGroupId": "sg-072f0a9bf075de1f5",
          "dhcpOptionsId": "dopt-6db97615",
          "enableClassiclink": false,
          "enableClassiclinkDnsSupport": false,
          "enableDnsHostnames": false,
          "enableDnsSupport": true,
          "id": "vpc-04057e18647a66e24",
          "instanceTenancy": "default",
          "ipv6AssociationId": "",
          "ipv6CidrBlock": "",
          "mainRouteTableId": "rtb-01c36ce5fcc3ac797",
          "ownerId": "0123456789",
          "tags": {}
        },
        "parent": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:pulumi:Stack::demo-aws-ts-webserver-dev-user1",
        "provider": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:providers:aws::default_3_32_0::d77c9fd7-1c06-427d-ba26-dbd8a8cbf91a",
        "propertyDependencies": {
          "cidrBlock": null
        }
      }
    ]
  }
}
```

<!-- ###################################################################### -->

### Get Stack Resource Count

```
GET /api/stacks/{organization}/{project}/{stack}/resources/count
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/resources/count
```

#### Default response

```
Status: 200 OK
```

```
{
  "resourceCount": 2,
  "version": 5
}
```

<!-- ###################################################################### -->

### Get (Latest) Current Stack Resources

```
GET /api/stacks/{organization}/{project}/{stack}/resources/latest
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/resources/latest
```

#### Default response

```
Status: 200 OK
```

```
{
  "resources": [
    {
      "resource": {
        "type": "pulumi:pulumi:Stack",
        "urn": "urn:pulumi:dev::prog-aws-typescript::pulumi:pulumi:Stack::prog-aws-typescript-dev",
        "custom": false,
        "delete": false,
        "dependencies": [],
        "outputs": {}
      }
    },
    {
      "resource": {
        "id": "my-bucket-a4a3a07",
        "type": "aws:s3/bucket:Bucket",
        "urn": "urn:pulumi:dev::prog-aws-typescript::aws:s3/bucket:Bucket::my-bucket",
        "custom": true,
        "delete": false,
        "dependencies": [],
        "parent": "urn:pulumi:dev::prog-aws-typescript::pulumi:pulumi:Stack::prog-aws-typescript-dev",
        "additionalSecretOutputs": [
          "tags"
        ],
        "inputs": {
          "__defaults": [
            "acl",
            "bucket",
            "forceDestroy"
          ],
          "acl": "private",
          "bucket": "my-bucket-a4a3a07",
          "forceDestroy": false,
          "tags": {
            "__defaults": [],
            "anyone-can-delete-me": "true",
            "owner": "my-pulumi-login"
          }
        },
        "outputs": {
          "accelerationStatus": "",
          "acl": "private",
          "arn": "arn:aws:s3:::my-bucket-a4a3a07",
          "bucket": "my-bucket-a4a3a07",
          "bucketDomainName": "my-bucket-a4a3a07.s3.amazonaws.com",
          "bucketRegionalDomainName": "my-bucket-a4a3a07.s3.amazonaws.com",
          "corsRules": [],
          "forceDestroy": false,
          "grants": [],
          "hostedZoneId": "Z3AQBSTGFYJSTF",
          "id": "my-bucket-a4a3a07",
          "lifecycleRules": [],
          "loggings": [],
          "objectLockConfiguration": null,
          "region": "us-east-1",
          "replicationConfiguration": null,
          "requestPayer": "BucketOwner",
          "serverSideEncryptionConfiguration": {
            "rule": {
              "applyServerSideEncryptionByDefault": {
                "kmsMasterKeyId": "",
                "sseAlgorithm": "AES256"
              },
              "bucketKeyEnabled": false
            }
          },
          "tags": {
            "4dabf18193072939515e22adb298388d": "1b47061264138c4ac30d75fd1eb44270",
            "ciphertext": "v1:4MBM2acrauXVfXK0:N6Bv7P+Zt27+pP+N9z+VHWllSYtqi9/K9HXQ7lkGRjGfdReLz5lW8QBpF3sLRFK8jvqf11SUy2ueBNBGd2MIgq8j6//305ZM1l0="
          },
          "tagsAll": {
            "anyone-can-delete-me": "true",
            "owner": "my-pulumi-login"
          },
          "versioning": {
            "enabled": false,
            "mfaDelete": false
          },
          "website": null
        },
        "providerInputs": {
          "region": "us-east-1",
          "version": "5.31.0"
        }
      }
    }
  ],
  "region": "us-east-1",
  "version": 5
}
```

<!-- ###################################################################### -->

### Get Stack Resources For Version

```
GET /api/stacks/{organization}/{project}/{stack}/resources/{version}
```

#### Parameters

| Parameter      | Type   | In   | Description          |
|----------------|--------|------|----------------------|
| `organization` | string | path | organization name    |
| `project`      | string | path | project name         |
| `stack`        | string | path | stack name           |
| `version`      | number | path | stack update version |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/resources/{version}
```

#### Default response

```
Status: 200 OK
```

```
{
  "resources": [
    {
      "resource": {
        "type": "pulumi:pulumi:Stack",
        "urn": "urn:pulumi:dev::prog-aws-typescript::pulumi:pulumi:Stack::prog-aws-typescript-dev",
        "custom": false,
        "delete": false,
        "dependencies": [],
        "outputs": {}
      }
    },
    {
      "resource": {
        "id": "my-bucket-a4a3a07",
        "type": "aws:s3/bucket:Bucket",
        "urn": "urn:pulumi:dev::prog-aws-typescript::aws:s3/bucket:Bucket::my-bucket",
        "custom": true,
        "delete": false,
        "dependencies": [],
        "parent": "urn:pulumi:dev::prog-aws-typescript::pulumi:pulumi:Stack::prog-aws-typescript-dev",
        "additionalSecretOutputs": [
          "tags"
        ],
        "inputs": {
          "__defaults": [
            "acl",
            "bucket",
            "forceDestroy"
          ],
          "acl": "private",
          "bucket": "my-bucket-a4a3a07",
          "forceDestroy": false,
          "tags": {
            "__defaults": [],
            "anyone-can-delete-me": "true",
            "owner": "my-pulumi-login"
          }
        },
        "outputs": {
          "accelerationStatus": "",
          "acl": "private",
          "arn": "arn:aws:s3:::my-bucket-a4a3a07",
          "bucket": "my-bucket-a4a3a07",
          "bucketDomainName": "my-bucket-a4a3a07.s3.amazonaws.com",
          "bucketRegionalDomainName": "my-bucket-a4a3a07.s3.amazonaws.com",
          "corsRules": [],
          "forceDestroy": false,
          "grants": [],
          "hostedZoneId": "Z3AQBSTGFYJSTF",
          "id": "my-bucket-a4a3a07",
          "lifecycleRules": [],
          "loggings": [],
          "objectLockConfiguration": null,
          "region": "us-east-1",
          "replicationConfiguration": null,
          "requestPayer": "BucketOwner",
          "serverSideEncryptionConfiguration": {
            "rule": {
              "applyServerSideEncryptionByDefault": {
                "kmsMasterKeyId": "",
                "sseAlgorithm": "AES256"
              },
              "bucketKeyEnabled": false
            }
          },
          "tags": {
            "4dabf18193072939515e22adb298388d": "1b47061264138c4ac30d75fd1eb44270",
            "ciphertext": "v1:4MBM2acrauXVfXK0:N6Bv7P+Zt27+pP+N9z+VHWllSYtqi9/K9HXQ7lkGRjGfdReLz5lW8QBpF3sLRFK8jvqf11SUy2ueBNBGd2MIgq8j6//305ZM1l0="
          },
          "tagsAll": {
            "anyone-can-delete-me": "true",
            "owner": "my-pulumi-login"
          },
          "versioning": {
            "enabled": false,
            "mfaDelete": false
          },
          "website": null
        },
        "providerInputs": {
          "region": "us-east-1",
          "version": "5.31.0"
        }
      }
    }
  ],
  "region": "us-east-1",
  "version": 2
}
```
<!-- ###################################################################### -->

### Transfer Stack

Transfers the stack from one organization in the Pulumi Cloud to a different organization. The user calling this operation must have the necessary [stack permissions](/docs/pulumi-cloud/projects-and-stacks#stack-permissions) for this operation to be successful.

This operation will return a 409 response error if an update is currently in progress.

```
POST /api/stacks/{organization}/{project}/{stack}/transfer
```

#### Parameters

| Parameter      | Type   | In   | Description                                 |
|----------------|--------|------|---------------------------------------------|
| `organization` | string | path | organization name                           |
| `project`      | string | path | project name                                |
| `stack`        | string | path | stack name                                  |
| `toOrg`        | string | body | the organization to transfer the stack _to_ |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"toOrg":"{toOrg}"}' \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/transfer
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### Delete Stack

```
DELETE /api/stacks/{organization}/{project}/{stack}
```

#### Parameters

| Parameter      | Type    | In    | Description                                                             |
|----------------|---------|-------|-------------------------------------------------------------------------|
| `organization` | string  | path  | organization name                                                       |
| `project`      | string  | path  | project name                                                            |
| `stack`        | string  | path  | stack name                                                              |
| `force`        | boolean | query | flag indicating to delete the stack even if it still contains resources |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

## Stack Tags

<!-- ###################################################################### -->

### Get Stack Tags

Use [Get Stack](#get-stack) to retrieve a stack's details including its tags.

<!-- ###################################################################### -->

### Set Stack Tag

```
POST /api/stacks/{organization}/{project}/{stack}/tags
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |
| `name`         | string | body | tag name          |
| `value`        | string | body | tag value         |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"name":"{tagName}","value":"{tagValue}"}' \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/tags
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### Delete Stack Tag

```
DELETE /api/stacks/{organization}/{project}/{stack}/tags/{tagName}
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |
| `tagName`      | string | path | tag name          |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/tags/{tagName}
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

## Stack Policy Information

### Get Stack Policy Groups

Get Policy Groups associated with a stack.

```
GET /api/stacks/{organization}/{project}/{stack}/policygroups
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/policygroups
```

#### Default response

```
Status: 200 OK
```

```
{
  "policyGroups": [
    {
      "name": "continuous-policy",
      "isOrgDefault": false,
      "numStacks": 1,
      "numEnabledPolicyPacks": 1
    }
  ]
}
```

### Get Stack Policy Packs

Get Policy Packs associated with a stack.

```
GET /api/stacks/{organization}/{project}/{stack}/policypacks
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/policypacks
```

#### Default response

```
Status: 200 OK
```

```
{
  "requiredPolicies": [
    {
      "name": "continuous-policy",
      "version": 3,
      "versionTag": "0.0.3",
      "displayName": "",
      "packLocation": "REDACTED",
      "config": {
        "all": {
          "enforcementLevel": "mandatory"
        },
        "continuous-policy": {
          "enforcementLevel": "mandatory",
          "policies": [
            {
              "assertion": {
                "operator": "eq",
                "value": 0
              },
              "label": "No node12 Lambdas",
              "mode": "ai",
              "query": "nodejs version 12"
            }
          ]
        }
      }
    }
  ]
}
```

<!-- ###################################################################### -->

## Stack Updates

<!-- ###################################################################### -->

### List Stack Updates

```
GET /api/stacks/{organization}/{project}/{stack}/updates
```

By default the results are not paginated. You can specify `page` and `pageSize` query parameters to paginate the results.

> `?pageSize=1&page=1` can be used to return only the most recent update.

#### Parameters

| Parameter      | Type   | In    | Description                                                                                    |
|----------------|--------|-------|------------------------------------------------------------------------------------------------|
| `organization` | string | path  | organization name                                                                              |
| `project`      | string | path  | project name                                                                                   |
| `stack`        | string | path  | stack name                                                                                     |
| `page`         | number | query | **Optional.** page of the results to return                                                    |
| `pageSize`     | number | query | **Optional.** number of results per page                                                       |
| `output-type`  | number | query | **Optional.** the response format to return - possible values are `service` or `cli` (default) |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/updates?output-type=service
```

#### Default response (output type = cli)

```
Status: 200 OK
```

```
{
  "updates": [
    {
      "kind": "update",
      "startTime": 1733780162,
      "message": "",
      "environment": {},
      "config": {
        "aws:region": {
          "string": "us-east-1",
          "secret": false,
          "object": false
        },
        "pulumi:template": {
          "string": "aws-typescript",
          "secret": false,
          "object": false
        }
      },
      "result": "succeeded",
      "endTime": 1733780162,
      "version": 1,
      "resourceChanges": {
        "create": 1,
        "delete": 0,
        "same": 0,
        "update": 0
      },
      "resourceCount": 1
    }
  ]
}
```

#### Example response (output type = service)

```
Status: 200 OK
```

```
{
  "updates": [
    {
      "info": {
        "kind": "update",
        "startTime": 1615872578,
        "message": "Add `gcp-py-webserver` demo. (#160)",
        "environment": {
          "exec.kind": "cli",
          "git.author": "First Last",
          "git.author.email": "user1@example.com",
          "git.committer": "GitHub",
          "git.committer.email": "noreply@github.com",
          "git.dirty": "true",
          "git.head": "e61b846e6e8395338bce1053c2edb29ee3213b4b",
          "git.headName": "refs/heads/master",
          "github.pr.number": "160",
          "vcs.kind": "github.com",
          "vcs.owner": "org1",
          "vcs.repo": "repo1"
        },
        "config": {
          "aws:region": {
            "string": "us-west-2",
            "secret": false,
            "object": false
          }
        },
        "result": "succeeded",
        "endTime": 1615872594,
        "version": 95,
        "resourceChanges": {
          "create": 2
        }
      },
      "updateID": "938cd018-3ecc-4a9e-86dd-42e84fefcc9c",
      "githubCommitInfo": {
        "slug": "org1/repo1",
        "sha": "e61b846e6e8395338bce1053c2edb29ee3213b4b",
        "url": "https://github.com/org1/repo1/commit/e61b846e6e8395338bce1053c2edb29ee3213b4b",
        "author": {
          "name": "First Last",
          "githubLogin": "user1",
          "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
        }
      },
      "version": 95,
      "latestVersion": 95,
      "requestedBy": {
        "name": "First Last",
        "githubLogin": "user1",
        "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
      },
      "policyPacks": [
        {
          "name": "aws",
          "displayName": "",
          "version": 23,
          "versionTag": "0.1.20201015-2",
          "config": {
            "allowed-image-owner": {
              "allowedPublishers": [
                "self",
                "099720109477"
              ]
            },
            "maximum-instance-count": {
              "maximumInstanceCount": 2
            },
            "prohibited-services": {
              "enforcementLevel": "advisory"
            },
            "require-region": {
              "allowedRegions": [
                "us-west-2"
              ]
            },
            "vpc-sizing": {
              "enforcementLevel": "advisory",
              "maxSubnetPrefixLength": 22
            }
          }
        },
        {
          "name": "azure",
          "displayName": "",
          "version": 12,
          "versionTag": "0.1.20200912",
          "config": {
            "allowed-image-owner": {
              "allowedPublishers": [
                "canonical"
              ]
            },
            "maximum-instance-count": {
              "enforcementLevel": "advisory",
              "maximumInstanceCount": 2
            },
            "prohibited-services": {
              "enforcementLevel": "advisory"
            },
            "vpc-sizing": {
              "maxSubnetPrefixLength": 22
            }
          }
        },
        {
          "name": "k8s",
          "displayName": "",
          "version": 13,
          "versionTag": "0.1.20201105-1",
          "config": {
            "replica-count": {
              "enforcementLevel": "advisory"
            }
          }
        },
        {
          "name": "cost-optimization",
          "displayName": "",
          "version": 9,
          "versionTag": "0.1.20201015-3",
          "config": {
            "aws-budget-limit": {
              "maxMonthlyCost": 50
            },
            "gcp-budget-limit": {
              "maxMonthlyCost": 50
            }
          }
        },
        {
          "name": "azure-nextgen",
          "displayName": "",
          "version": 3,
          "versionTag": "0.1.20201222-1",
          "config": {
            "allowed-image-owner": {
              "allowedPublishers": [
                "canonical"
              ]
            },
            "maximum-instance-count": {
              "maximumInstanceCount": 2
            },
            "vnet-sizing": {
              "enforcementLevel": "advisory",
              "maxSubnetPrefixLength": 22
            }
          }
        },
        {
          "name": "gcp",
          "displayName": "",
          "version": 19,
          "versionTag": "0.1.20200912",
          "config": {
            "allowed-image-owner": {
              "allowedPublishers": [
                "ubuntu-os-cloud"
              ]
            },
            "maximum-instance-count": {
              "maximumInstanceCount": 2
            },
            "subnet-sizing": {
              "maxSubnetPrefixLength": 22
            }
          }
        }
      ]
    },
    {
      "info": {
        "kind": "destroy",
        "startTime": 1615872573,
        "message": "Add `gcp-py-webserver` demo. (#160)",
        "environment": {
          "exec.kind": "cli",
          "git.author": "First Last",
          "git.author.email": "user1@example.com",
          "git.committer": "GitHub",
          "git.committer.email": "noreply@github.com",
          "git.dirty": "true",
          "git.head": "e61b846e6e8395338bce1053c2edb29ee3213b4b",
          "git.headName": "refs/heads/master",
          "github.pr.number": "160",
          "vcs.kind": "github.com",
          "vcs.owner": "org1",
          "vcs.repo": "repo1"
        },
        "config": {
          "aws:region": {
            "string": "us-west-2",
            "secret": false,
            "object": false
          }
        },
        "result": "succeeded",
        "endTime": 1615872575,
        "version": 94,
        "resourceChanges": {
          "delete": 2
        }
      },
      "updateID": "d6a21779-99b7-42b1-b1f3-0f2045baa083",
      "githubCommitInfo": {
        "slug": "org1/repo1",
        "sha": "e61b846e6e8395338bce1053c2edb29ee3213b4b",
        "url": "https://github.com/org1/repo1/commit/e61b846e6e8395338bce1053c2edb29ee3213b4b",
        "author": {
          "name": "First Last",
          "githubLogin": "user1",
          "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
        }
      },
      "version": 94,
      "latestVersion": 95,
      "requestedBy": {
        "name": "First Last",
        "githubLogin": "user1",
        "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
      }
    }
  ],
  "itemsPerPage": 10,
  "total": 95
}
```

<!-- ###################################################################### -->

### Get Update Status

```
GET /api/stacks/{organization}/{project}/{stack}/update/{updateID}
```

#### Parameters

| Parameter      | Type   | In   | Description                                                                                               |
|----------------|--------|------|-----------------------------------------------------------------------------------------------------------|
| `organization` | string | path | organization name                                                                                         |
| `project`      | string | path | project name                                                                                              |
| `stack`        | string | path | stack name                                                                                                |
| `updateID`     | uuid   | path | update id - UUID as retrieved from [List Stack Updates](#list-stack-updates) using `?output-type=service` |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/update/{updateID}
```

#### Default response

```
Status: 200 OK
```

```
{
  "status": "succeeded",
  "events": []
}
```

<!-- ###################################################################### -->

### List Update Events

```
GET /api/stacks/{organization}/{project}/{stack}/update/{updateID}/events
```

#### Parameters

| Parameter      | Type   | In   | Description                                                                                               |
|----------------|--------|------|-----------------------------------------------------------------------------------------------------------|
| `organization` | string | path | organization name                                                                                         |
| `project`      | string | path | project name                                                                                              |
| `stack`        | string | path | stack name                                                                                                |
| `updateID`     | uuid   | path | update id - UUID as retrieved from [List Stack Updates](#list-stack-updates) using `?output-type=service` |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/update/{updateID}/events
```

#### Default response

```
Status: 200 OK
```

```
{
  "events": [
    {
      "timestamp": 1615872590,
      "type": "preludeEvent",
      "preludeEvent": {
        "config": {
          "aws:region": "us-west-2"
        }
      }
    },
    {
      "timestamp": 1615872590,
      "type": "resourcePreEvent",
      "resourcePreEvent": {
        "metadata": {
          "op": "create",
          "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:pulumi:Stack::demo-aws-ts-webserver-dev-user1",
          "type": "pulumi:pulumi:Stack",
          "old": null,
          "new": {
            "type": "pulumi:pulumi:Stack",
            "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:pulumi:Stack::demo-aws-ts-webserver-dev-user1",
            "id": "",
            "parent": "",
            "inputs": {},
            "outputs": {},
            "provider": ""
          },
          "logical": true,
          "provider": ""
        }
      }
    },
    {
      "timestamp": 1615872593,
      "type": "policyEvent",
      "policyEvent": {
        "resourceUrn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::aws:ec2/vpc:Vpc::main",
        "message": "<{%reset%}>VPCs must be of appropriate size.\nAddress space [10.0.0.0/16] is too large. Must be [/22] or smaller.<{%reset%}>\n",
        "color": "raw",
        "policyName": "vpc-sizing",
        "policyPackName": "aws",
        "policyPackVersion": "0.1.20201015-2",
        "policyPackVersionTag": "0.1.20201015-2",
        "enforcementLevel": "advisory"
      }
    },
    {
      "timestamp": 1615872593,
      "type": "resourcePreEvent",
      "resourcePreEvent": {
        "metadata": {
          "op": "create",
          "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::aws:ec2/vpc:Vpc::main",
          "type": "aws:ec2/vpc:Vpc",
          "old": null,
          "new": {
            "type": "aws:ec2/vpc:Vpc",
            "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::aws:ec2/vpc:Vpc::main",
            "custom": true,
            "id": "",
            "parent": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:pulumi:Stack::demo-aws-ts-webserver-dev-user1",
            "inputs": {
              "__defaults": [
                "assignGeneratedIpv6CidrBlock",
                "enableDnsSupport",
                "instanceTenancy"
              ],
              "assignGeneratedIpv6CidrBlock": false,
              "cidrBlock": "10.0.0.0/16",
              "enableDnsSupport": true,
              "instanceTenancy": "default"
            },
            "outputs": {},
            "provider": ""
          },
          "logical": true,
          "provider": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:providers:aws::default_3_32_0::d77c9fd7-1c06-427d-ba26-dbd8a8cbf91a"
        }
      }
    },
    {
      "timestamp": 1615872593,
      "type": "resOutputsEvent",
      "resOutputsEvent": {
        "metadata": {
          "op": "create",
          "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::aws:ec2/vpc:Vpc::main",
          "type": "aws:ec2/vpc:Vpc",
          "old": null,
          "new": {
            "type": "aws:ec2/vpc:Vpc",
            "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::aws:ec2/vpc:Vpc::main",
            "custom": true,
            "id": "vpc-04057e18647a66e24",
            "parent": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:pulumi:Stack::demo-aws-ts-webserver-dev-user1",
            "inputs": {
              "__defaults": [
                "assignGeneratedIpv6CidrBlock",
                "enableDnsSupport",
                "instanceTenancy"
              ],
              "assignGeneratedIpv6CidrBlock": false,
              "cidrBlock": "10.0.0.0/16",
              "enableDnsSupport": true,
              "instanceTenancy": "default"
            },
            "outputs": {
              "__meta": "{\"schema_version\":\"1\"}",
              "arn": "arn:aws:ec2:us-west-2:0123456789:vpc/vpc-04057e18647a66e24",
              "assignGeneratedIpv6CidrBlock": false,
              "cidrBlock": "10.0.0.0/16",
              "defaultNetworkAclId": "acl-0b63012743b57140d",
              "defaultRouteTableId": "rtb-01c36ce5fcc3ac797",
              "defaultSecurityGroupId": "sg-072f0a9bf075de1f5",
              "dhcpOptionsId": "dopt-6db97615",
              "enableClassiclink": false,
              "enableClassiclinkDnsSupport": false,
              "enableDnsHostnames": false,
              "enableDnsSupport": true,
              "id": "vpc-04057e18647a66e24",
              "instanceTenancy": "default",
              "ipv6AssociationId": "",
              "ipv6CidrBlock": "",
              "mainRouteTableId": "rtb-01c36ce5fcc3ac797",
              "ownerId": "0123456789",
              "tags": {}
            },
            "provider": ""
          },
          "logical": true,
          "provider": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:providers:aws::default_3_32_0::d77c9fd7-1c06-427d-ba26-dbd8a8cbf91a"
        }
      }
    },
    {
      "timestamp": 1615872593,
      "type": "resOutputsEvent",
      "resOutputsEvent": {
        "metadata": {
          "op": "create",
          "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:pulumi:Stack::demo-aws-ts-webserver-dev-user1",
          "type": "pulumi:pulumi:Stack",
          "old": null,
          "new": {
            "type": "pulumi:pulumi:Stack",
            "urn": "urn:pulumi:dev-user1::demo-aws-ts-webserver::pulumi:pulumi:Stack::demo-aws-ts-webserver-dev-user1",
            "id": "",
            "parent": "",
            "inputs": {},
            "outputs": {
              "vpcId": "vpc-04057e18647a66e24"
            },
            "provider": ""
          },
          "logical": true,
          "provider": ""
        }
      }
    },
    {
      "timestamp": 1615872593,
      "type": "summaryEvent",
      "summaryEvent": {
        "maybeCorrupt": false,
        "durationSeconds": 4,
        "resourceChanges": {
          "create": 2
        },
        "PolicyPacks": {
          "aws": "23",
          "azure": "12",
          "azure-nextgen": "3",
          "cost-optimization": "9",
          "gcp": "19",
          "k8s": "13"
        }
      }
    }
  ],
  "continuationToken": null
}
```

<!-- ###################################################################### -->

### List Previews

List all previews since the last update operation.

```
GET /api/stacks/{organization}/{project}/{stack}/updates/latest/previews
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/updates/latest/previews
```

#### Default response

```
Status: 200 OK
```

```
{
  "updates": [
    {
      "info": {
        "kind": "Pupdate",
        "startTime": 1624932955,
        "message": "triggered by pr #12",
        "environment": {
          "exec.kind": "cli",
          "git.author": "First Last",
          "git.author.email": "user1@example.com",
          "git.committer": "GitHub",
          "git.committer.email": "noreply@github.com",
          "git.dirty": "true",
          "git.head": "35caae8d73c3ecb0eac1256ba0e03775f24514da",
          "git.headName": "refs/heads/master",
          "vcs.kind": "github.com",
          "vcs.owner": "pulumi",
          "vcs.repo": "examples"
        },
        "config": {
          "aws:region": {
            "string": "us-west-2",
            "secret": false,
            "object": false
          }
        },
        "result": "failed",
        "endTime": 1624932956,
        "version": 1,
        "resourceChanges": {
          "create": 0,
          "delete": 0,
          "same": 0,
          "update": 0
        }
      },
      "updateID": "c30c74e6-9576-4c63-95a4-4f96e7793ebb",
      "githubCommitInfo": {
        "slug": "pulumi/examples",
        "sha": "35caae8d73c3ecb0eac1256ba0e03775f24514da",
        "url": "https://github.com/pulumi/examples/commit/35caae8d73c3ecb0eac1256ba0e03775f24514da",
        "author": {
          "name": "First Last",
          "githubLogin": "user1",
          "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
        }
      },
      "version": 1,
      "latestVersion": 0,
      "requestedBy": {
        "name": "First Last",
        "githubLogin": "user1",
        "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
      }
    },
    {
      "info": {
        "kind": "Pupdate",
        "startTime": 1624932977,
        "message": "triggered by pr #12",
        "environment": {
          "exec.kind": "cli",
          "git.author": "First Last",
          "git.author.email": "user1@example.com",
          "git.committer": "GitHub",
          "git.committer.email": "noreply@github.com",
          "git.dirty": "true",
          "git.head": "35caae8d73c3ecb0eac1256ba0e03775f24514da",
          "git.headName": "refs/heads/master",
          "vcs.kind": "github.com",
          "vcs.owner": "pulumi",
          "vcs.repo": "examples"
        },
        "config": {
          "aws:region": {
            "string": "us-west-2",
            "secret": false,
            "object": false
          }
        },
        "result": "failed",
        "endTime": 1624932992,
        "version": 1,
        "resourceChanges": {
          "create": 1
        }
      },
      "updateID": "cf72ac80-4b87-4e26-9974-9eef3267995d",
      "githubCommitInfo": {
        "slug": "pulumi/examples",
        "sha": "35caae8d73c3ecb0eac1256ba0e03775f24514da",
        "url": "https://github.com/pulumi/examples/commit/35caae8d73c3ecb0eac1256ba0e03775f24514da",
        "author": {
          "name": "First Last",
          "githubLogin": "user1",
          "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
        }
      },
      "version": 1,
      "latestVersion": 0,
      "requestedBy": {
        "name": "First Last",
        "githubLogin": "user1",
        "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
      }
    },
    {
      "info": {
        "kind": "Pupdate",
        "startTime": 1624932999,
        "message": "triggered by pr #12",
        "environment": {
          "exec.kind": "cli",
          "git.author": "First Last",
          "git.author.email": "user1@example.com",
          "git.committer": "GitHub",
          "git.committer.email": "noreply@github.com",
          "git.dirty": "true",
          "git.head": "35caae8d73c3ecb0eac1256ba0e03775f24514da",
          "git.headName": "refs/heads/master",
          "vcs.kind": "github.com",
          "vcs.owner": "pulumi",
          "vcs.repo": "examples"
        },
        "config": {
          "aws:region": {
            "string": "us-west-2",
            "secret": false,
            "object": false
          }
        },
        "result": "succeeded",
        "endTime": 1624933003,
        "version": 1,
        "resourceChanges": {
          "create": 3
        }
      },
      "updateID": "9a6ffbb0-cb82-420f-824a-efac39ac91c8",
      "githubCommitInfo": {
        "slug": "pulumi/examples",
        "sha": "35caae8d73c3ecb0eac1256ba0e03775f24514da",
        "url": "https://github.com/pulumi/examples/commit/35caae8d73c3ecb0eac1256ba0e03775f24514da",
        "author": {
          "name": "First Last",
          "githubLogin": "user1",
          "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
        }
      },
      "version": 1,
      "latestVersion": 0,
      "requestedBy": {
        "name": "First Last",
        "githubLogin": "user1",
        "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
      }
    },
    {
      "info": {
        "kind": "Pupdate",
        "startTime": 1624933009,
        "message": "triggered by pr #13",
        "environment": {
          "exec.kind": "cli",
          "git.author": "First Last",
          "git.author.email": "user1@example.com",
          "git.committer": "GitHub",
          "git.committer.email": "noreply@github.com",
          "git.dirty": "true",
          "git.head": "35caae8d73c3ecb0eac1256ba0e03775f24514da",
          "git.headName": "refs/heads/master",
          "vcs.kind": "github.com",
          "vcs.owner": "pulumi",
          "vcs.repo": "examples"
        },
        "config": {
          "aws:region": {
            "string": "us-west-2",
            "secret": false,
            "object": false
          }
        },
        "result": "succeeded",
        "endTime": 1624933012,
        "version": 1,
        "resourceChanges": {
          "create": 3
        }
      },
      "updateID": "4c51a52c-6344-4664-8698-02e068060e5a",
      "githubCommitInfo": {
        "slug": "pulumi/examples",
        "sha": "35caae8d73c3ecb0eac1256ba0e03775f24514da",
        "url": "https://github.com/pulumi/examples/commit/35caae8d73c3ecb0eac1256ba0e03775f24514da",
        "author": {
          "name": "First Last",
          "githubLogin": "user1",
          "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
        }
      },
      "version": 1,
      "latestVersion": 0,
      "requestedBy": {
        "name": "First Last",
        "githubLogin": "user1",
        "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
      }
    }
  ],
  "itemsPerPage": 10,
  "total": 4
}
```

<!-- ###################################################################### -->

## Personal Access Tokens

<!-- ###################################################################### -->

### List Personal Access Tokens

```
GET /api/user/tokens
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------|
| `show_expired`      | string | query | **Optional.** whether to return previously expired tokens with results. Defaults to false. |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/user/tokens?show_expired=true
```

#### Default response

```
Status: 200 OK
```

```
{
  "tokens": [
    {
      "id": "b02514e2-ddf6-41dc-8e16-6abf3914e68f",
      "description": "Generated by pulumi login on workstation at 20 May 21 12:04 EDT",
      "lastUsed": 1627590233
    },
    {
      "id": "ad9f7508-493a-4fbe-9918-62f1f71a53f8",
      "description": "cicd-server",
      "lastUsed": 1606860942
    }
  ]
}
```

<!-- ###################################################################### -->

### Create Personal Access Token

```
POST /api/user/tokens
```

#### Parameters

| Parameter     | Type   | In   | Description                                                                                                                        |
|---------------|--------|------|------------------------------------------------------------------------------------------------------------------------------------|
| `description` | string | body | Description of the access token.                                                                                                   |
| `expires`     | int    | body | **Optional.** unix epoch timestamp at which the token should expire, up to two years from present. 0 for no expiry. Defaults to 0. |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"description":"{description}", "expires": 0}' \
  https://api.pulumi.com/api/user/tokens
```

#### Default response

```
Status: 204 OK
```

```
{
  "id": "74529ccd-27c0-40f7-bc4a-589f145ba67f",
  "tokenValue": "pul-75a564ac7f3a48079a0c448c1e1ec95c4cfed141"
}
```

<!-- ###################################################################### -->

### Delete Personal Access Token

```
DELETE /api/user/tokens/{tokenId}
```

#### Parameters

| Parameter | Type   | In   | Description          |
|-----------|--------|------|----------------------|
| `tokenId` | string | path | the token identifier |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/user/tokens/{tokenId}
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

## Organizations

<!-- ###################################################################### -->

### List Users

{{% notes "info" %}}
In the response data `githubLogin` is synonymous with `username` and does not necessarily mean the user is from a GitHub-backed organization.

`knownToPulumi` and `virtualAdmin` are internal implementation details that should not be referenced by an end user.
{{% /notes %}}

```
GET /api/orgs/{organization}/members?type=backend
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `type`              | string | query | must be set to `backend`                                                                                     |
| `continuationToken` | string | query | **Optional.** the continuation token to use for retrieving the next set of results if results were truncated |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/members?type=backend
```

#### Default response

```
Status: 200 OK
```

```
{
  "members": [
    {
      "role": "member",
      "user": {
        "name": "First Last",
        "githubLogin": "user2",
        "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300",
        "email": "user@example.com"
      },
      "knownToPulumi": true,
      "virtualAdmin": false
    },
    {
      "role": "admin",
      "user": {
        "name": "First Last",
        "githubLogin": "user1",
        "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300",
        "email": "admin@example.com"
      },
      "knownToPulumi": true,
      "virtualAdmin": false
    }
  ]
}
```

<!-- ###################################################################### -->

### Add User to Organization

User must have already signed up for a Pulumi account and meet the [organization membership requirements](/docs/pulumi-cloud/admin/organizations/#organization-types) to be added to the organization, otherwise a 4xx error will occur.

If you want to provision SSO/SAML users, please refer to the [SCIM 2.0 Integration](/docs/pulumi-cloud/access-management/scim/) documentation.

```
POST /api/orgs/{organization}/members/{username}
```

#### Parameters

| Parameter      | Type   | In   | Description                                                  |
|----------------|--------|------|--------------------------------------------------------------|
| `organization` | string | path | organization name                                            |
| `username`     | string | path | user name                                                    |
| `role`         | string | body | The role to assign - possible values are `admin` or `member` |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"role":"{role}"}' \
  https://api.pulumi.com/api/orgs/{organization}/members/{username}
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### Update User's Role

```
PATCH /api/orgs/{organization}/members/{username}
```

#### Parameters

| Parameter      | Type   | In    | Description                                                  |
|----------------|--------|-------|--------------------------------------------------------------|
| `organization` | string | query | organization name to filter stacks by                        |
| `username`     | string | path  | user name                                                    |
| `role`         | string | body  | The role to assign - possible values are `admin` or `member` |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request PATCH \
  --data '{"role":"{role}"}' \
  https://api.pulumi.com/api/orgs/{organization}/members/{username}
```

#### Default response

```
Status: 200 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### Remove User from Organization

```
DELETE /api/orgs/{organization}/members/{username}
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `username`     | string | path | user name         |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{organization}/members/{username}
```

#### Default response

```
Status: 200 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### List Organization Access Tokens

```
GET /api/orgs/{org}/tokens
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------|
| `show_expired`      | string | query | **Optional.** whether to return previously expired tokens with results. Defaults to false. |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{org}/tokens?show_expired=true
```

#### Default response

```
Status: 200 OK
```

```
{
  "tokens": [
    {
      "id": "b02514e2-ddf6-41dc-8e16-6abf3914e68f",
      "description": "CI/CD token - Feb 2024",
      "expires": 1719333788,
      "lastUsed": 1627590233,
      "name": "Feb2024CICD"
    },
    {
      "id": "ad9f7508-493a-4fbe-9918-62f1f71a53f8",
      "description": "An org token created in Feb 2023",
      "expires": 0,
      "lastUsed": 1606860942,
      "name": "Feb2023CICD"
    }
  ]
}
```

<!-- ###################################################################### -->

### Create Organization Access Token

```
POST /api/orgs/{org}/tokens
```

#### Parameters

| Parameter     | Type   | In   | Description                                                                                                                        |
|---------------|--------|------|------------------------------------------------------------------------------------------------------------------------------------|
| `description` | string | body | Description of the access token.                                                                                                   |
| `name`        | string | body | Unique name of the access token, up to 40 characters. Must be unique across the org, including deleted tokens.                     |
| `expires`     | int    | body | **Optional.** unix epoch timestamp at which the token should expire, up to two years from present. 0 for no expiry. Defaults to 0. |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"description": "{description}", "name": "{unique_name}", "expires": 0}' \
  https://api.pulumi.com/api/orgs/{org}/tokens
```

#### Default response

```
Status: 204 OK
```

```
{
  "id": "74529ccd-27c0-40f7-bc4a-589f145ba67f",
  "tokenValue": "pul-75a564ac7f3a48079a0c448c1e1ec95c4cfed141"
}
```

<!-- ###################################################################### -->

### Delete Organization Access Token

```
DELETE /api/orgs/{org}/tokens/{tokenId}
```

#### Parameters

| Parameter | Type   | In   | Description          |
|-----------|--------|------|----------------------|
| `tokenId` | string | path | the token identifier |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{org}/tokens/{tokenId}
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### List Teams

```
GET /api/orgs/{organization}/teams
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/teams
```

#### Default Response

```
Status: 200 OK
```

```
{
   "teams":[
      {
         "kind":"pulumi",
         "name":"team1",
         "displayName":"team1",
         "description":"",
         "userRole":"none"
      },
      {
         "kind":"pulumi",
         "name":"team2",
         "displayName":"team2",
         "description":"",
         "userRole":"admin"
      }
   ]
}
```

<!-- ###################################################################### -->

### Create Team

{{% notes "info" %}}
For GitHub-backed organizations the `teamType` path parameter must be `github`. For all other organization types the `teamType` path parameter must be `pulumi`.
{{% /notes %}}

```
POST /api/orgs/{org}/teams/{teamType}
```

#### Parameters

| Parameter      | Type   | In   | Description                                                         |
|----------------|--------|------|---------------------------------------------------------------------|
| `organization` | string | path | organization name                                                   |
| `teamType`     | string | path | the type of team to create - valid options are `pulumi` or `github` |
| `name`         | string | body | team name                                                           |
| `displayName`  | string | body | **Optional.** team display name                                     |
| `description`  | string | body | **Optional.** team description                                      |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"name":"example-team","displayName":"example display name","description":"example description"}' \
  https://api.pulumi.com/api/orgs/{org}/teams/pulumi
```

#### Default response

```
Status: 200 OK
```

```
{
  "kind": "pulumi",
  "name": "example-team",
  "displayName": "example display name",
  "description": "example description",
  "members": [
    {
      "name": "First Last",
      "githubLogin": "user1",
      "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
    }
  ]
}
```

<!-- ###################################################################### -->

### Get Team

```
Get /api/orgs/{org}/teams/{teamName}
```

#### Parameters

| Parameter      | Type   | In   | Description                                                         |
|----------------|--------|------|---------------------------------------------------------------------|
| `organization` | string | path | organization name                                                   |
| `teamName`     | string | body | team name                                                           |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request GET \
  https://api.pulumi.com/api/orgs/{org}/teams/{teamName}
```

#### Default response

```
Status: 200 OK
```

```
{
  "kind": "github",
  "name": "example-team",
  "displayName": "My Example Team",
  "description": "An example team of exemplary people",
  "members": [
    {
      "name": "First Last",
      "githubLogin": "user1",
      "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300",
      "role": "member"
    },
    {
      "name": "First Last",
      "githubLogin": "user2",
      "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300",
      "role": "admin"
    }
  ],
  "userRole": "admin"
}
```

<!-- ###################################################################### -->

### Delete Team

```
DELETE /api/orgs/{org}/teams/{teamName}
```

#### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `teamName`     | string | path | team name         |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{org}/teams/{teamName}
```

#### Default response

```
Status: 200 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### Update Team Membership

{{% notes "info" %}}

- For [GitHub-backed organizations](/docs/pulumi-cloud/access-management/teams#github-based-teams), this operation cannot be used as membership is managed on GitHub.
- For [SCIM managed teams](/docs/pulumi-cloud/access-management/scim/), this operation cannot be used as membership is managed via the SSO provider.

{{% /notes %}}

```
PATCH /api/orgs/{organization}/teams/{team}
```

#### Parameters

| Parameter      | Type   | In   | Description                                                                                    |
|----------------|--------|------|------------------------------------------------------------------------------------------------|
| `organization` | string | path | organization name                                                                              |
| `team`         | string | path | team name                                                                                      |
| `memberAction` | string | body | The action for the user and team - possible values are `add`, `remove`, `promote`, or `demote` |
| `member`       | string | body | user name                                                                                      |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"memberAction":"{memberAction}","member":"{username}"}' \
  https://api.pulumi.com/api/orgs/{organization}/teams/{team}
```

#### Default response

```
Status: 200 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### Grant Stack Access to Team

```
PATCH /api/orgs/{organization}/teams/{team}
```

#### Parameters

| Parameter                         | Type    | In     | Description                                                                |
|-----------------------------------|---------|--------|----------------------------------------------------------------------------|
| `organization`                    | string  | path   | organization name                                                          |
| `team`                            | string  | path   | team name                                                                  |
| `addStackPermission`              | object  | body   | object specifying stack and permissions - see following parameters         |
| `addStackPermission .projectName` | string  | object | project name                                                               |
| `addStackPermission .stackName`   | string  | object | stack name                                                                 |
| `addStackPermission .permission`  | integer | object | number representing stack permissions: 101 (read), 102 (edit), 103 (admin) |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request PATCH \
  --data '{"addStackPermission":{"projectName":"{projectName}","stackName":"{stackName}","permission": {permission}}}' \
  https://api.pulumi.com/api/orgs/{organization}/teams/{team}
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### Remove Stack Access from Team

```
PATCH /api/orgs/{organization}/teams/{team}
```

#### Parameters

| Parameter                  | Type   | In     | Description                                                        |
|----------------------------|--------|--------|--------------------------------------------------------------------|
| `organization`             | string | path   | organization name                                                  |
| `team`                     | string | path   | team name                                                          |
| `removeStack`              | object | body   | object specifying stack and permissions - see following parameters |
| `removeStack .projectName` | string | object | project name                                                       |
| `removeStack .stackName`   | string | object | stack name                                                         |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request PATCH \
  --data '{"removeStack":{"projectName":"{projectName}","stackName":"{stackName}"}}' \
  https://api.pulumi.com/api/orgs/{organization}/teams/{team}
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### List Team Access Tokens

```
GET /api/orgs/{org}/teams/{team}/tokens
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------|
| `show_expired`      | string | query | **Optional.** whether to return previously expired tokens with results. Defaults to false. |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{org}/teams/{team}/tokens?show_expired=true
```

#### Default response

```
Status: 200 OK
```

```
{
  "tokens": [
    {
      "id": "b02514e2-ddf6-41dc-8e16-6abf3914e68f",
      "description": "CI/CD token for AI team - Feb 2024",
      "expires": 1719333788,
      "lastUsed": 1627590233,
      "name": "Feb2024CICD-AI"
    },
    {
      "id": "ad9f7508-493a-4fbe-9918-62f1f71a53f8",
      "description": "A team token for the AI team, created in Feb 2023",
      "expires": 0,
      "lastUsed": 1606860942,
      "name": "Feb2023CICD-AI"
    }
  ]
}
```

<!-- ###################################################################### -->

### Create Team Access Token

```
POST /api/orgs/{org}/teams/{team}/tokens
```

#### Parameters

| Parameter     | Type   | In   | Description                                                                                                                        |
|---------------|--------|------|------------------------------------------------------------------------------------------------------------------------------------|
| `description` | string | body | Description of the access token.                                                                                                   |
| `name`        | string | body | Unique name of the access token, up to 40 characters. Must be unique across the org, including deleted tokens.                     |
| `expires`     | int    | body | **Optional.** unix epoch timestamp at which the token should expire, up to two years from present. 0 for no expiry. Defaults to 0. |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"description": "{description}", "name": "{unique_name}", "expires": 0}' \
  https://api.pulumi.com/api/orgs/{org}/teams/{team}/tokens
```

#### Default response

```
Status: 204 OK
```

```
{
  "id": "74529ccd-27c0-40f7-bc4a-589f145ba67f",
  "tokenValue": "pul-75a564ac7f3a48079a0c448c1e1ec95c4cfed141"
}
```

<!-- ###################################################################### -->

### Delete Team Access Token

```
DELETE /api/orgs/{org}/teams/{team}/tokens/{tokenId}
```

#### Parameters

| Parameter | Type   | In   | Description          |
|-----------|--------|------|----------------------|
| `tokenId` | string | path | the token identifier |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{org}/teams/{team}/tokens/{tokenId}
```

#### Default response

```
Status: 204 OK
```

```
EMPTY RESPONSE BODY
```

<!-- ###################################################################### -->

### Create Webhook

```
// To create an organization webhook
POST /api/orgs/{organization}/hooks

// To create a stack webhook
POST /api/stacks/{organization}/{project}/{stack}/hooks
```

#### Parameters

| Parameter          | Type          | In   | Description                                                                                                                                                                     |
|--------------------|---------------|------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `active`           | boolean       | body | enable webhook                                                                                                                                                                  |
| `displayName`      | string        | body | name of webhook                                                                                                                                                                 |
| `organizationName` | string        | body | organization name                                                                                                                                                               |
| `payloadUrl`       | string        | body | URL to send request to                                                                                                                                                          |
| `projectName`      | string        | body | **Optional.** project name (required for stack webhooks)                                                                                                                        |
| `stackName`        | string        | body | **Optional.** stack name (required for stack webhooks)                                                                                                                          |
| `format`           | string        | body | **Optional.** format of the payload. Possible values are `raw`, `slack`, `ms_teams` or `pulumi_deployments`. Default is `raw`.                                                  |
| `filters`          | array[string] | body | **Optional.** list of filters for events the webhook should receive. See [webhook docs](/docs/pulumi-cloud/webhooks#filters) for more information on what filters are available |
| `secret`           | string        | body | **Optional.** secret used as the HMAC key. See [webhook docs](/docs/pulumi-cloud/webhooks#headers) for more information                                                         |

#### Examples

##### Create an organization webhook

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{
      "organizationName":"{organization}",
      "displayName":"My Webhook",
      "payloadUrl":"https://example.com",
      "secret":"mysecret",
      "active":true
  }' \
  https://api.pulumi.com/api/orgs/{organization}/hooks
```

Default Response

```
Status: 201 CREATED
```

```
{
  "organizationName":"{organization}",
  "name":"bd7e0a35",
  "displayName":"My Webhook",
  "payloadUrl":"https://example.com",
  "active":true,
  "format":"raw"
}
```

###### Create a stack webhook formatted for slack

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{
      "organizationName":"{organization}",
      "projectName":"{project}",
      "stackName":"{stack}",
      "displayName":"#some-slack-channel",
      "payloadUrl":"https://hooks.slack.com/services/...",
      "format": "slack",
      "active":true
  }' \
  https://api.pulumi.com/api/orgs/{organization}/{project}/{stack}/hooks
```

Default Response

```
Status: 201 CREATED
```

```
{
  "organizationName":"{organization}",
  "projectName":"{project}",
  "stackName":"{stack}",
  "name":"bd7e0a35",
  "displayName":"#some-slack-channel",
  "payloadUrl":"https://hooks.slack.com/services/...",
  "format":"slack",
  "active":true
}
```

###### Create a stack webhook with filters

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{
      "organizationName":"{organization}",
      "projectName":"{project}",
      "stackName":"{stack}",
      "displayName":"#stack_failures-channel",
      "payloadUrl":"https://hooks.slack.com/services/...",
      "format": "slack",
      "filters": ["preview_failed", "update_failed", "destroy_failed", "refresh_failed", "deployment_failed"],
      "active":true
  }' \
  https://api.pulumi.com/api/orgs/{organization}/{project}/{stack}/hooks
```

###### Create a Deployment webhook

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{
      "organizationName":"{organization}",
      "projectName":"{project}",
      "stackName":"{stack}",
      "displayName":"deployDownstreamStack",
      "payloadUrl":"{downstreamProject}/{downstreamStack}",
      "format": "pulumi_deployments",
      "filters": ["update_succeeded"],
      "active":true
  }' \
  https://api.pulumi.com/api/orgs/{organization}/{project}/{stack}/hooks
```

#### Default response

Default Response

```
Status: 201 CREATED
```

```
{
  "organizationName":"{organization}",
  "projectName":"{project}",
  "stackName":"{stack}",
  "name":"bd7e0a35",
  "displayName":"#stack_failures-channel",
  "payloadUrl":"https://hooks.slack.com/services/...",
  "format":"slack",
  "filters":["preview_failed", "update_failed", "destroy_failed", "refresh_failed", "deployment_failed"],
  "active":true
}
```

### List Webhooks

#### List organization webhooks

```
GET /api/orgs/{organization}/hooks
```

##### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |

##### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/hooks
```

##### Default response

```
[
  {
    "organizationName":"{organization}",
    "name":"4e662b3b",
    "displayName":"MyWebhook",
    "payloadUrl":"https://example.com",
    "format":"raw",
    "active":true
  },
  {
    "organizationName":"{organization}",
    "name":"7732dd4c",
    "displayName":"My secret webhook",
    "payloadUrl":"https://hooks.slack.com/services/...",
    "format":"slack",
    "active":true
  }
]
```

#### List stack webhooks

```
GET /api/stacks/{organization}/{project}/{stack}/hooks
```

##### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |

##### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/hooks
```

##### Default response

```
[
  {
    "organizationName":"{organization}",
    "projectName":"{project}",
    "stackName":"{stack}",
    "name":"4e662b3b",
    "displayName":"My stack webhook",
    "payloadUrl":"https://example.com",
    "active":true
  },
  {
    "organizationName":"{organization}",
    "projectName":"{project}",
    "stackName":"{stack}",
    "name":"7732dd4c",
    "displayName":"#failures-channel",
    "payloadUrl":"https://hooks.slack.com/services/...",
    "format":"slack",
    "filters":["preview_failed", "update_failed", "destroy_failed", "refresh_failed", "deployment_failed"],
    "active":true
  }
]
```

### Get Webhook

#### Get organization webhook

```
GET /api/orgs/{organization}/hooks/{webhookname}
```

##### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `webhookname`  | string | path | webhook name      |

##### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/hooks/{webhookname}
```

##### Default response

```
Status: 200 OK
```

```
{
  "organizationName":"{organization}",
  "name":"{webhookname}",
  "displayName":"My Webhook",
  "payloadUrl":"https://example.com",
  "format":"raw",
  "active":true
}
```

#### Get stack webhook

```
GET /api/stacks/{organization}/{project}/{stack}/hooks/{webhookname}
```

##### Parameters

| Parameter      | Type   | In   | Description       |
|----------------|--------|------|-------------------|
| `organization` | string | path | organization name |
| `project`      | string | path | project name      |
| `stack`        | string | path | stack name        |
| `webhookname`  | string | path | webhook name      |

##### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/hooks/{webhookname}
```

##### Default response

```
Status: 200 OK
```

```
{
  "organizationName":"{organization}",
  "projectName":"{project}",
  "stackName":"{stack}",
  "name":"{webhookname}",
  "displayName":"#failures-channel",
  "payloadUrl":"https://hooks.slack.com/services/...",
  "format":"slack",
  "filters":["preview_failed", "update_failed", "destroy_failed", "refresh_failed", "deployment_failed"],
  "active":true
}
```

### Ping Webhook

#### Ping organization webhook

```
POST /api/orgs/{organization}/hooks/{webhookname}/ping
```

#### Ping stack webhook

```
POST /api/stacks/{organization}/{project}/{stack}/hooks/{webhookname}/ping
```

#### Parameters

| Parameter      | Type   | In   | Description                            |
|----------------|--------|------|----------------------------------------|
| `organization` | string | path | organization name                      |
| `project`      | string | path | project name (only for stack webhooks) |
| `stack`        | string | path | stack name  (only for stack webhooks)  |
| `webhookname`  | string | path | webhook name                           |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  https://api.pulumi.com/api/orgs/{organization}/hooks/ping
```

#### Default response

```
Status: 200 OK
```

```
{
  "id":"ea01abd2-90b4-4670-acce-15cc019ed6e4",
  "kind":"ping",
  "payload":"{\"timestamp\":1632735487,\"message\":\"🍹 Just a friendly ping from Pulumi 🍹\"}","timestamp":1632735487,"duration":196,"requestUrl":"{webhookurl}",
  "requestHeaders":"Content-Type: application/json\r\nPulumi-Webhook-Id: ea01abd2-90b4-4670-acce-15cc019ed6e4\r\nPulumi-Webhook-Kind: ping\r\n",
  "responseCode":200,
  "responseHeaders":"{headersfromwebhook}",
  "responseBody":"OK"
}
```

### List webhook deliveries

#### List organization webhook deliveries

```
GET /api/orgs/{organization}/hooks/{webhookname}/deliveries
```

#### List stack webhook deliveries

```
GET /api/stacks/{organization}/{project}/{stack}/hooks/{webhookname}/deliveries
```

#### Parameters

| Parameter      | Type   | In   | Description                            |
|----------------|--------|------|----------------------------------------|
| `organization` | string | path | organization name                      |
| `project`      | string | path | project name (only for stack webhooks) |
| `stack`        | string | path | stack name  (only for stack webhooks)  |
| `webhookname`  | string | path | webhook name                           |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/hooks/{webhookname}/deliveries
```

#### Default response

```
[
  {
    "id":"ea01abd2-90b4-4670-acce-15cc019ed6e4",
    "kind":"ping",
    "payload":"{\"timestamp\":1632735487,\"message\":\"🍹 Just a friendly ping from Pulumi 🍹\"}","timestamp":1632735487,"duration":196,"requestUrl":"{webhookurl}",
    "requestHeaders":"Content-Type: application/json\r\nPulumi-Webhook-Id: ea01abd2-90b4-4670-acce-15cc019ed6e4\r\nPulumi-Webhook-Kind: ping\r\n",
    "responseCode":200,
    "responseHeaders":"{headersfromwebhook}",
    "responseBody":"OK"
  }
]
```

<!-- ###################################################################### -->
## Insight Accounts

### Create Account

Creates a new account for use with Pulumi Insights.

```
POST /api/preview/insights/pulumi/accounts/{accountName}
```

#### Parameters

| Parameter        | Type   | In    | Description                                                                                           |
|------------------|--------|-------|-------------------------------------------------------------------------------------------------------|
| `provider`       | string | body  | The cloud provider for the account (e.g., `aws`, `azure`, `oci`)                               |
| `environment`    | string | body  | The environment reference for the account, such as `insights/pulumi-staging@2`                         |
| `cron`           | string | body  | The cron expression defining when the account scan is scheduled (e.g., `0 0 * * *`)                    |
| `providerConfig` | object | body  | The configuration specific to the provider, such as regions for `aws` (e.g., `["us-east-1", "us-east-2"]`) |

#### Example

```bash
curl \
  -X POST \
  -H "Accept: application/vnd.pulumi+6" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  -d '{
    "provider": "aws",
    "environment": "insights/pulumi-staging@2",
    "cron": "0 0 * * *",
    "providerConfig": {
      "regions": ["us-east-1", "us-east-2", "us-west-2"]
    }
  }' \
  https://api.pulumi.com/api/preview/insights/pulumi/accounts/FizzBuzz%20AWS%20Staging
```

#### Default response

```
Status: 200 OK
```

```
{
  "message": "Account FizzBuzz AWS Staging created successfully."
}
```

<!-- ###################################################################### -->
### List Accounts

Lists Insight Accounts available to the authenticated user.

```
GET /api/preview/insights/pulumi/accounts
```

#### Parameters

| Parameter             | Type   | In    | Description                                                                                          |
|-----------------------|--------|-------|------------------------------------------------------------------------------------------------------|
| `count`               | integer| query | **Optional.** the number of results to return (default is 100)                                        |
| `continuationToken`   | string | query | **Optional.** the continuation token to use for retrieving the next set of results if results were truncated |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/preview/insights/pulumi/accounts?count=1000
```

#### Default response

```
Status: 200 OK
```

```
{
  "accounts": [
    {
      "name": "FizzBuzz Aws Prod",
      "provider": "aws",
      "providerEnvRef": "fizzbuzz/insights-pulumi-prod@4",
      "scheduledScanEnabled": false,
      "scanStatus": {
        "id": "",
        "orgId": "",
        "userId": "",
        "status": "",
        "startedAt": "2025-01-01T00:00:00Z",
        "finishedAt": null,
        "lastUpdatedAt": "2025-01-01T00:00:00Z",
        "jobTimeout": "2025-01-01T00:00:00Z"
      }
    },
    {
      "name": "FizzBuzz Aws Staging",
      "provider": "aws",
      "providerEnvRef": "fizzbuzz/insights-pulumi-staging@2",
      "scheduledScanEnabled": true,
      "scanStatus": {
        "id": "",
        "orgId": "",
        "userId": "",
        "status": "succeeded",
        "startedAt": "2025-02-03T12:01:00.000Z",
        "finishedAt": "2025-02-03T12:05:00.000Z",
        "lastUpdatedAt": "2025-02-03T12:05:00.000Z",
        "resourceCount": 250
      }
    }
  ]
}
```

<!-- ###################################################################### -->
### Get Account

Gets Insight Account details for the specific account.

```
GET /api/preview/insights/pulumi/accounts/{accountName}
```

#### Parameters

| Parameter    | Type   | In    | Description                                            |
|--------------|--------|-------|--------------------------------------------------------|
| `accountName`| string | path  | The name of the account to retrieve details for.       |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+6" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/preview/insights/pulumi/accounts/FizzBuzz%20AWS%20Staging
```

#### Default response

```
Status: 200 OK
```

```
{
  "name": "FizzBuzz AWS Staging",
  "provider": "aws",
  "providerEnvRef": "insights/pulumi-staging@2",
  "scheduledScanEnabled": true,
  "providerConfig": {
    "regions": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ]
  },
  "scanStatus": {
    "id": "",
    "orgId": "",
    "userId": "",
    "status": "",
    "startedAt": "0001-01-01T00:00:00Z",
    "finishedAt": "0001-01-01T00:00:00Z",
    "lastUpdatedAt": "0001-01-01T00:00:00Z",
    "jobTimeout": "0001-01-01T00:00:00Z"
  }
}
```

<!-- ###################################################################### -->

## Policy Groups

### List Policy Groups

List a summaries of policy groups by organization.

```
GET /api/orgs/{organization}/policygroups
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/policygroups
```

#### Default response

```
Status: 200 OK
```

```
{
  "policyGroups": [
    {
      "name": "continuous-policy",
      "isOrgDefault": false,
      "numStacks": 1,
      "numEnabledPolicyPacks": 1
    },
    {
      "name": "default-policy-group",
      "isOrgDefault": true,
      "numStacks": 2569,
      "numEnabledPolicyPacks": 1
    }
  ]
}
```

### Get Policy Group

Get policy group information.

```
GET /api/orgs/{organization}/policygroups/{policyGroup}
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `policyGroup`       | string | path  | policy group name                                                                                            |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/policygroups/{policyGroup}
```

#### Default response

```
Status: 200 OK
```

```
{
  "name": "continuous-policy",
  "isOrgDefault": false,
  "stacks": [
    {
      "name": "global",
      "routingProject": "continuous-policy"
    }
  ],
  "appliedPolicyPacks": [
    {
      "name": "continuous-policy",
      "displayName": "",
      "version": 3,
      "versionTag": "0.0.3",
      "config": {
        "all": {
          "enforcementLevel": "mandatory"
        },
        "continuous-policy": {
          "enforcementLevel": "mandatory",
          "policies": [
            {
              "assertion": {
                "operator": "eq",
                "value": 0
              },
              "label": "No node12 Lambdas",
              "mode": "ai",
              "query": "nodejs version 12"
            }
          ]
        }
      }
    }
  ]
}
```

### Create Policy Group

Create policy group.

```
POST /api/orgs/{organization}/policygroups
```

#### Parameters

| Parameter           | Type   | In    | Description        |
|---------------------|--------|-------|--------------------|
| `organization`      | string | path  | organization name  |
| `name`              | string | body  | policy group name  |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"name":"myPolicyGroup"}' \
  https://api.pulumi.com/api/orgs/{organization}/policygroups
```

#### Default response

```
Status: 204 OK
```

### Update Policy Group

Update policy group, rename, add/remove stacks, add/remove policy packs.

```
PATCH /api/orgs/{organization}/policygroups/{policyGroup}
```

| Parameter                     | Type       | In     | Description                                       |
|-------------------------------|------------|--------|---------------------------------------------------|
| `organization`                | string     | path   | organization name                                 |
| `policyGroup`                 | string     | path   | policy group name                                 |
| `newName`                     | string     | body   | new policy group name                             |
| `addStack`                    | object     | body   | add stack reference - see following parameters    |
| `addStack.name`               | string     | object | stack name                                        |
| `addStack.routingProject`     | string     | object | stack project                                     |
| `removeStack`                 | object     | body   | remove stack reference - see following parameters |
| `removeStack.name`            | string     | object | stack name                                        |
| `removeStack.routingProject`  | string     | object | stack project                                     |
| `addPolicyPack`               | object     | body   | add policy pack - see following parameters        |
| `addPolicyPack.name`          | string     | object | policy pack name                                  |
| `addPolicyPack.displayName`   | string     | object | policy pack display name                          |
| `addPolicyPack.version`       | number     | object | policy pack version                               |
| `addPolicyPack.versionTag`    | string     | object | policy pack version tag                           |
| `addPolicyPack.config`        | key/value  | object | policy pack config                                |
| `removePolicyPack`            | object     | body   | remove policy pack - see following parameters     |
| `removePolicyPack.name`       | string     | object | policy pack name                                  |
| `removePolicyPack.version`    | int        | object | policy pack version                               |
| `removePolicyPack.versionTag` | string     | object | policy pack version tag                           |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request PATCH \
  --data '{"newName":"myRenamedPolicyGroup"}' \
  https://api.pulumi.com/orgs/{organization}/policygroups/{policyGroup}
```

#### Default response

```
Status: 204 OK
```

### Delete Policy Group

```
DELETE /api/orgs/{organization}/policygroups/{policyGroup}
```

| Parameter                     | Type       | In     | Description                                       |
|-------------------------------|------------|--------|---------------------------------------------------|
| `organization`                | string     | path   | organization name                                 |
| `policyGroup`                 | string     | path   | policy group name                                 |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{organization}/policygroups/{policyGroup}
```

#### Default response

```
Status: 204 OK
```

<!-- ###################################################################### -->

## Policy Packs

### List Policy Packs

List policy packs by organization.

```
GET /api/orgs/{organization}/policypacks
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/policypacks
```

#### Default response

```
Status: 200 OK
```

```
{
  "policyPacks": [
    {
      "name": "aws-iso27001-compliance-ready-policies-typescript",
      "displayName": "",
      "versions": [
        1
      ],
      "versionTags": [
        "0.0.1"
      ]
    },
    {
      "name": "aws-typescript",
      "displayName": "",
      "versions": [
        1
      ],
      "versionTags": [
        "0.0.1"
      ]
    },
    {
      "name": "continuous-policy",
      "displayName": "",
      "versions": [
        3,
        2,
        1
      ],
      "versionTags": [
        "0.0.3",
        "0.0.2",
        "0.0.1"
      ]
    },
    {
      "name": "pulumi-vanta-policies",
      "displayName": "",
      "versions": [
        1
      ],
      "versionTags": [
        "0.0.1"
      ]
    }
  ]
}
```

### Get Latest Policy Pack Version

Get policy pack information including config schema for the latest version.

```
GET /api/orgs/{organization}/policypacks/{policyPack}/latest
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `policyPack`        | string | path  | policy pack name                                                                                             |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/policypacks/{policyPack}/latest
```

#### Default response

```
Status: 200 OK
```

```
{
  "name": "continuous-policy",
  "displayName": "",
  "version": 3,
  "versionTag": "0.0.3",
  "policies": [
    {
      "name": "continuous-policy",
      "displayName": "",
      "description": "Continuous global policies that can be configured dynamically across the entire org using Pulumi Resource Search.",
      "enforcementLevel": "mandatory",
      "message": "",
      "configSchema": {
        "properties": {
          "enforcementLevel": {
            "enum": [
              "advisory",
              "mandatory",
              "remediate",
              "disabled"
            ],
            "type": "string"
          },
          "policies": {
            "items": {
              "properties": {
                "assertion": {
                  "properties": {
                    "operator": {
                      "enum": [
                        "eq",
                        "gt",
                        "lt",
                        "lte",
                        "gte"
                      ],
                      "type": "string"
                    },
                    "value": {
                      "type": "number"
                    }
                  },
                  "type": "object"
                },
                "label": {
                  "type": "string"
                },
                "mode": {
                  "enum": [
                    "query",
                    "ai"
                  ],
                  "type": "string"
                },
                "query": {
                  "type": "string"
                }
              },
              "type": "object"
            },
            "type": "array"
          }
        },
        "type": "object"
      }
    }
  ],
  "applied": false
}
```

### Get Policy Pack at Specific Version

Get policy pack information including config schema for a specific version.

```
GET /api/orgs/{organization}/policypacks/{policyPack}/versions/{version}
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `policyPack`        | string | path  | policy pack name                                                                                             |
| `version`           | string | path  | version identifier                                                                                           |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/policypacks/{policyPack}/versions/{version}
```

#### Default response

```
Status: 200 OK
```

```
{
  "name": "continuous-policy",
  "displayName": "",
  "version": 2,
  "versionTag": "0.0.2",
  "policies": [
    {
      "name": "continuous-policy",
      "displayName": "",
      "description": "Continuous global policies that can be configured dynamically across the entire org using Pulumi Resource Search.",
      "enforcementLevel": "mandatory",
      "message": "",
      "configSchema": {
        "properties": {
          "enforcementLevel": {
            "enum": [
              "advisory",
              "mandatory",
              "remediate",
              "disabled"
            ],
            "type": "string"
          },
          "policies": {
            "items": {
              "properties": {
                "assertion": {
                  "properties": {
                    "operator": {
                      "enum": [
                        "eq",
                        "gt",
                        "lt",
                        "lte",
                        "gte"
                      ],
                      "type": "string"
                    },
                    "value": {
                      "type": "number"
                    }
                  },
                  "type": "object"
                },
                "label": {
                  "type": "string"
                },
                "mode": {
                  "enum": [
                    "query",
                    "ai"
                  ],
                  "type": "string"
                },
                "query": {
                  "type": "string"
                }
              },
              "type": "object"
            },
            "type": "array"
          }
        },
        "type": "object"
      }
    }
  ],
  "applied": false
}
```

### Get Policy Pack Schema at Specific Version

Get policy pack config schema for a specific version.

```
GET /api/orgs/{organization}/policypacks/{policyPack}/versions/{version}/schema
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `policyPack`        | string | path  | policy pack name                                                                                             |
| `version`           | string | path  | version identifier                                                                                           |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/policypacks/{policyPack}/versions/{version}/schema
```

#### Default response

```
Status: 200 OK
```

```
{
  "configSchema": {
    "all": {
      "properties": {
        "enforcementLevel": {
          "type": "string",
          "enum": [
            "advisory",
            "mandatory",
            "remediate",
            "disabled"
          ]
        }
      },
      "type": "object"
    },
    "continuous-policy": {
      "properties": {
        "enforcementLevel": {
          "enum": [
            "advisory",
            "mandatory",
            "remediate",
            "disabled"
          ],
          "type": "string"
        },
        "policies": {
          "items": {
            "properties": {
              "assertion": {
                "properties": {
                  "operator": {
                    "enum": [
                      "eq",
                      "gt",
                      "lt",
                      "lte",
                      "gte"
                    ],
                    "type": "string"
                  },
                  "value": {
                    "type": "number"
                  }
                },
                "type": "object"
              },
              "label": {
                "type": "string"
              },
              "mode": {
                "enum": [
                  "query",
                  "ai"
                ],
                "type": "string"
              },
              "query": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  }
}
```

### Create Policy Pack

Create policy pack.

```
POST /api/orgs/{organization}/policypacks
```

#### Parameters

| Parameter                            | Type          | In     | Description                                                                                     |
|--------------------------------------|---------------|--------|-------------------------------------------------------------------------------------------------|
| `organization`                       | string        | path   | organization name                                                                               |
| `name`                               | string        | body   | policy pack name                                                                                |
| `displayName`                        | string        | body   | policy pack display name                                                                        |
| `versionTag`                         | string        | body   | policy pack version tag name                                                                    |
| `policies`                           | array         | body   | policy pack policies - see following parameters                                                 |
| `policies[].name`                    | string        | object | policy name                                                                                     |
| `policies[].displayName`             | string        | object | policy display name                                                                             |
| `policies[].description`             | string        | object | policy description                                                                              |
| `policies[].enforcementLevel`        | string        | object | policy enforcement level - possible values are `advisory`, `mandatory`, `remediate`, `disabled` |
| `policies[].message`                 | string        | object | policy message                                                                                  |
| `policies[].configSchema`            | object        | object | policy config schema                                                                            |
| `policies[].configSchema.properties` | key/value     | object | config schema properties                                                                        |
| `policies[].configSchema.required`   | string array  | object | config schema required properties                                                               |
| `policies[].configSchema.type`       | string        | object | config schema type                                                                              |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"name":"myPolicyPack", "displayName": "My policy pack", "versionTag":"stable", "policies":[{"name": "myPolicy", "displayName": "My policy", "description": "awesome policy", "enforcementLevel": "mandatory","message":"my policy violation", "configSchema":{"properties": {"foo": "bar}, "required": "foo", "type": "object"}}]}' \
  https://api.pulumi.com/api/orgs/{organization}/policypacks
```

#### Default response

```
Status: 201 OK
```

```
{
	"version": 1,
  "uploadURI": "https://s3.aws.amazon.com/...",
  "requiredHeaders": {},
}

```

### Apply Policy Pack

Applies the latest version of a policy pack using the organization's default policy group.

```
POST /api/orgs/{organization}/policypacks/{policyPack}/latest
```

#### Parameters

| Parameter                            | Type          | In     | Description                                                                                     |
|--------------------------------------|---------------|--------|-------------------------------------------------------------------------------------------------|
| `organization`                       | string        | path   | organization name                                                                               |
| `policyPack`                         | string        | path   | policy pack name                                                                                |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  https://api.pulumi.com/api/orgs/{organization}/policypacks/{policyPack}/latest
```

#### Default response

```
Status: 204 OK
```

### Delete Policy Pack

```
DELETE /api/orgs/{organization}/policypacks/{policyPack}
```

| Parameter                     | Type       | In     | Description                                       |
|-------------------------------|------------|--------|---------------------------------------------------|
| `organization`                | string     | path   | organization name                                 |
| `policyPack`                  | string     | path   | policy pack name                                  |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{organization}/policypacks/{policyPack}
```

#### Default response

```
Status: 200 OK
```

### Delete Policy Pack Version

```
DELETE /api/orgs/{organization}/policypacks/{policyPack}/versions/{version}
```

| Parameter                     | Type       | In     | Description                                       |
|-------------------------------|------------|--------|---------------------------------------------------|
| `organization`                | string     | path   | organization name                                 |
| `policyPack`                  | string     | path   | policy pack name                                  |
| `version`                     | number     | path   | policy pack version                               |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{organization}/policypacks/{policyPack}/versions/{version}
```

#### Default response

```
Status: 200 OK
```

<!-- ###################################################################### -->

## Policy Results

### List Policy Violations

```
GET /api/orgs/{organization}/policyresults/violationsv2
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/policyresults/violationsv2
```

#### Default response

```
Status: 200 OK
```

```
{
    "policyViolations": [
        {
            "projectName": "pulumi-k8s-test",
            "stackName": "test",
            "stackVersion": 11,
            "policyPack": "kubernetes",
            "policyPackTag": "0.0.2",
            "policyName": "minimum-replica-count",
            "resourceURN": "urn:pulumi:test::pulumi-k8s-test::kubernetes:apps/v1:Deployment::nginx",
            "resourceType": "kubernetes:apps/v1:Deployment",
            "resourceName": "nginx",
            "message": "Checks that Kubernetes Deployments and ReplicaSets have at least three replicas.\nKubernetes Deployments should have at least three replicas.\n",
            "observedAt": "2025-01-16T23:44:13Z",
            "level": "advisory"
        },
        {
            "projectName": "test",
            "accountName": "us-west-1",
            "resourceVersion": 1,
            "policyPack": "aws-typescript",
            "policyPackTag": "0.0.1",
            "policyName": "s3-no-public-read",
            "resourceURN": "urn:insights:test/us-west-1::aws::aws:s3/bucket:Bucket::my-super-bucket-1234567890",
            "resourceType": "aws:s3/bucket:Bucket",
            "resourceName": "my-super-bucket-1234567890",
            "message": "Prohibits setting the publicRead or publicReadWrite permission on AWS S3 buckets.\nTest violation",
            "observedAt": "2025-01-16T23:08:28Z",
            "level": "advisory"
        },
    ],
    "continuationToken": ""
}
```

<!-- ###################################################################### -->

## Environments

{{< notes >}}
Pulumi ESC (Environments, Secrets, and Configuration) and its associated REST API endpoints are currently in public preview.
{{< /notes >}}

### Migrating from the Preview API

For the majority of cases, the new API is a drop-in replacement for the preview API and the main changes are that the route itself has changed (i.e. replace `/api/preview` with `/api/esc`) and where environment name is part of the path it should be prefixed with the project (i.e. replace `/{orgName}/{envName}` with `{orgName}/{projectName}/{envName}`).

However, there are a few cases where the new API has changed the behavior of the preview API. These changes are as follows:

- The [Create Environment](#create-Environment) endpoint no longer takes the environment name in the request path, it has been moved to the request body.
- The Create Version Tag endpoint no longer takes the tag name in the request path, it has been moved to the request body.

<!-- ###################################################################### -->

### List Environments available to the authenticated user.

```
GET /api/esc/environments/{organization}
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `continuationToken` | string | query | **Optional.** the continuation token to use for retrieving the next set of results if results were truncated |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/esc/environments/{organization}
```

#### Default response

```
Status: 200 OK
```

```
{
    "environments": [
        {
            "organization": "{organization}",
            "project": "my-first-project",
            "name": "my-first-environment",
            "created": "2023-10-10 11:28:01",
            "modified" :"2023-10-10 12:24:03"
        }
    ]
}

```

### Create Environment

```
POST /api/esc/environments/{organization}
```

### Body

| Key                 | Type   | In    | Description       |
|---------------------|--------|-------|-------------------|
| `project`           | string | path  | project name      |
| `name`              | string | path  | environment name  |

#### Parameters

| Parameter           | Type   | In    | Description       |
|---------------------|--------|-------|-------------------|
| `organization`      | string | path  | organization name |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  https://api.pulumi.com/api/esc/environments/{organization}/{environment}
```

#### Default response

```
Status: 200 OK
```

### Get Environment

```
GET /api/esc/environments/{organization}/{project}/{environment}
```

| Parameter           | Type   | In    | Description       |
|---------------------|--------|-------|-------------------|
| `organization`      | string | path  | organization name |
| `project`           | string | path  | project name      |
| `environment`       | string | path  | environment name  |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request GET \
  https://api.pulumi.com/api/esc/environments/{organization}/{project}/{environment}
```

#### Default response

```
Status: 200 OK
```

```
{
	"values:
    aws:
      creds:
        fn::open::aws-login:
          oidc:
            duration: 1h
            roleArn: arn:aws:iam::12345678900:role/my-environments-oidc
            sessionName: my-environments-session
    environmentVariables:
      AWS_ACCESS_KEY_ID: ${aws.creds.accessKeyId}
      AWS_SECRET_ACCESS_KEY: ${aws.creds.secretAccessKey}
      AWS_SESSION_TOKEN: ${aws.creds.sessionToken}"
}
```

### Update Environment

```
PATCH /api/esc/environments/{organization}/{project}/{environment}
```

| Parameter           | Type   | In    | Description       |
|---------------------|--------|-------|-------------------|
| `organization`      | string | path  | organization name |
| `project`           | string | path  | project name      |
| `environment`       | string | path  | environment name  |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request PATCH \
  --data '<yaml content>' \
  https://api.pulumi.com/api/esc/environments/{organization}/{project}/{environment}
```

#### Default response

```
Status: 200 OK
```

### Delete Environment

```
DELETE /api/esc/environments/{organization}/{project}/{environment}
```

| Parameter           | Type   | In    | Description       |
|---------------------|--------|-------|-------------------|
| `organization`      | string | path  | organization name |
| `project`           | string | path  | project name      |
| `environment`       | string | path  | environment name  |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/esc/environments/{organization}/{project}/{environment}
```

#### Default response

```
Status: 200 OK
```

### Open Environment

```
POST /api/esc/environments/{organization}/{project}/{environment}/open
```

| Parameter           | Type   | In    | Description       |
|---------------------|--------|-------|-------------------|
| `organization`      | string | path  | organization name |
| `project`           | string | path  | project name      |
| `environment`       | string | path  | environment name  |
| `duration`          | string | query | **Optional.** open duration - A duration string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms", "-1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  https://api.pulumi.com/api/esc/environments/{organization}/{project}/{environment}/open
```

#### Default response

```
Status: 200 OK
```

```
{
	"id": 1234567,
  "diagnostics": ""
}
```

### Read Open Environment

```
GET /api/esc/environments/{organization}/{project}/{environment}/open/{openSessionID}
```

| Parameter           | Type   | In    | Description       |
|---------------------|--------|-------|-------------------|
| `organization`      | string | path  | organization name |
| `project`           | string | path  | project name      |
| `environment`       | string | path  | environment name  |
| `openSessionID`     | string | path  | open session id   |
| `property`          | string | query | **Optional.** path to a specific property |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request GET \
  https://api.pulumi.com/api/esc/environments/{organization}/{project}/{environment}/open/{openSessionID}
```

#### Default response

```
Status: 200 OK
```

```
"values":
  "aws":
    "creds":
      "accessKeyId": "<redacted>",
      "secretAccessKey": "<redacted>",
      "sessionToken": "<redacted>",
  "environmentVariables":
    "AWS_ACCESS_KEY_ID": "<redacted>",
    "AWS_SECRET_ACCESS_KEY": "<redacted>",
    "AWS_SESSION_TOKEN": "<redacted>""
```

## Schedules

<!-- ###################################################################### -->

### Create Drift Schedule

Note: This is a convenience API for ease of use to create a Drift Schedule, but the same configuration is possible via the raw deployments schedule APIs.

```
POST /api/stacks/{organization}/{project}/{stack}/deployments/drift/schedules
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `scheduleCron`      | string | body  | cron expression for when to run drift detection                                                              |
| `autoRemediate`     | bool   | body  | true if detected drift should be remediated automatically                                                    |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"scheduleCron":"0 0 * * 0", "autoRemediate":true}' \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/drift/schedules
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "orgID": "87654321-8b3b-418a-8c01-5ddd0e00bace",
  "scheduleCron": "0 0 * * *",
  "nextExecution": "2024-04-20 00:00:00.000",
  "paused": false,
  "kind": "deployment",
  "definition": {
    "programID": "12345678-9f94-4a92-8bfb-c2da724fa65b",
    "request": {
        "inheritSettings": true,
        "operation": "detect-drift",
        "operationContext": {
            "options": {
                "remediateIfDriftDetected": true
            }
        }
    }
  },
  "created": "2024-04-19 01:00:00.000",
  "modified": "2024-04-19 01:00:00.000",
  "lastExecuted": null
}
```

### Update Drift Schedule

Note: This is a convenience API for ease of use to update a Drift Schedule, but the same configuration is possible via the raw deployments schedule APIs.

```
POST /api/stacks/{organization}/{project}/{stack}/deployments/drift/schedules/{scheduleID}
```

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `scheduleID`        | string | path  | schedule ID that you want to update                                                                          |
| `scheduleCron`      | string | body  | cron expression for when to run drift detection                                                              |
| `autoRemediate`     | bool   | body  | true if detected drift should be remediated automatically                                                    |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"scheduleCron":"0 0 * * 0","autoRemediate":true}' \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/drift/schedules/{scheduleID}
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "orgID": "87654321-8b3b-418a-8c01-5ddd0e00bace",
  "scheduleCron": "0 0 * * *",
  "nextExecution": "2024-04-20 00:00:00.000",
  "paused": false,
  "kind": "deployment",
  "definition": {
    "programID": "12345678-9f94-4a92-8bfb-c2da724fa65b",
    "request": {
        "inheritSettings": true,
        "operation": "detect-drift",
        "operationContext": {
            "options": {
                "remediateIfDriftDetected": true
            }
        }
    }
  },
  "created": "2024-04-19 01:00:00.000",
  "modified": "2024-04-19 01:00:00.000",
  "lastExecuted": null
}
```

### Create TTL Schedule

Note: This is a convenience API for ease of use to create a TTL Schedule, but the same configuration is possible via the raw deployments schedule APIs.

```
POST /api/stacks/{organization}/{project}/{stack}/deployments/ttl/schedules
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `timestamp`         | string | body  | ISO 8601 timestamp specifying when to destroy the stack. Example: `2024-04-20T00:00:00.000Z`                 |
| `deleteAfterDestroy`| bool   | body  | true if the stack should be deleted after resources are destroyed                                            |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"timestamp":"2024-04-20T00:00:00.000Z","deleteAfterDestroy":true}' \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/ttl/schedules
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "orgID": "87654321-8b3b-418a-8c01-5ddd0e00bace",
  "scheduleOnce": "2024-04-20 00:00:00.000",
  "nextExecution": "2024-04-20 00:00:00.000",
  "paused": false,
  "kind": "deployment",
  "definition": {
    "programID": "12345678-9f94-4a92-8bfb-c2da724fa65b",
    "request": {
        "inheritSettings": true,
        "operation": "destroy",
        "operationContext": {
            "options": {
                "deleteAfterDestroy": true
            }
        }
    }
  },
  "created": "2024-04-19 01:00:00.000",
  "modified": "2024-04-19 01:00:00.000",
  "lastExecuted": null
}
```

### Update TTL Schedule

Note: This is a convenience API for ease of use to update a TTL Schedule, but the same configuration is possible via the raw deployments schedule APIs.

```
POST /api/stacks/{organization}/{project}/{stack}/deployments/ttl/schedules/{scheduleID}
```

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `scheduleID`        | string | path  | schedule ID that you want to update                                                                          |
| `timestamp`         | string | body  | ISO 8601 timestamp specifying when to destroy the stack. Example: `2024-04-20T00:00:00.000Z`                 |
| `deleteAfterDestroy`| bool   | body  | true if the stack should be deleted after resources are destroyed                                            |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{"timestamp":"2024-04-20T00:00:00.000Z","deleteAfterDestroy":true}' \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/ttl/schedules/{scheduleID}
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "orgID": "87654321-8b3b-418a-8c01-5ddd0e00bace",
  "scheduleOnce": "2024-04-20 00:00:00.000",
  "nextExecution": "2024-04-20 00:00:00.000",
  "paused": false,
  "kind": "deployment",
  "definition": {
    "programID": "12345678-9f94-4a92-8bfb-c2da724fa65b",
    "request": {
        "inheritSettings": true,
        "operation": "destroy",
        "operationContext": {
            "options": {
                "deleteAfterDestroy": true
            }
        }
    }
  },
  "created": "2024-04-19 01:00:00.000",
  "modified": "2024-04-19 01:00:00.000",
  "lastExecuted": null
}
```

### Create Raw Deployment Schedule

```
POST /api/stacks/{organization}/{project}/{stack}/deployments/schedules
```

#### Parameters

| Parameter           | Type                                                                             | In    | Description                                                                                         |
|---------------------|----------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------------|
| `organization`      | string                                                                           | path  | organization name                                                                                   |
| `project`           | string                                                                           | path  | project name                                                                                        |
| `stack`             | string                                                                           | path  | stack name                                                                                          |
| `scheduleCron`      | string                                                                           | body  | cron expression for when to run the pulumi operation                                                |
| `scheduleOnce`      | string                                                                           | body  | ISO 8601 timestamp specifying when to run the pulumi operation. Example: `2024-04-20T00:00:00.000Z` |
| `request`           | [CreateDeploymentRequest](/docs/pulumi-cloud/deployments/api/#create-deployment) | body  | The create deployment request object that will be executed on every invocation                      |

Note: Exactly one of `scheduleCron` and `scheduleOnce` must be set.

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{ "scheduleCron":"0 0 * * 0", "request": { "operation": "update" } }' \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/schedules
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "orgID": "87654321-8b3b-418a-8c01-5ddd0e00bace",
  "scheduleCron": "0 0 * * *",
  "nextExecution": "2024-04-20 00:00:00.000",
  "paused": false,
  "kind": "deployment",
  "definition": {
      "programID": "12345678-911a-43a3-8389-109be345b1d6",
      "request": {
          "operation": "update"
      }
  },
  "created": "2024-04-19 01:00:00.000",
  "modified": "2024-04-19 01:00:00.000",
  "lastExecuted": null
}
```

### Update Raw Deployment Schedule

```
POST /api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}
```

#### Parameters

| Parameter           | Type                                                                             | In    | Description                                                                                         |
|---------------------|----------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------------|
| `organization`      | string                                                                           | path  | organization name                                                                                   |
| `project`           | string                                                                           | path  | project name                                                                                        |
| `stack`             | string                                                                           | path  | stack name                                                                                          |
| `scheduleID`        | string                                                                           | path  | schedule ID that you want to update                                                                 |
| `scheduleCron`      | string                                                                           | body  | cron expression for when to run the pulumi operation                                                |
| `scheduleOnce`      | string                                                                           | body  | ISO 8601 timestamp specifying when to run the pulumi operation. Example: `2024-04-20T00:00:00.000Z` |
| `request`           | [CreateDeploymentRequest](/docs/pulumi-cloud/deployments/api/#create-deployment) | body  | The create deployment request object that will be executed on every invocation                      |

Note: Exactly one of `scheduleCron` and `scheduleOnce` must be set.

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{ "scheduleCron":"0 0 * * 0", "request": { "operation": "update" } }' \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "orgID": "87654321-8b3b-418a-8c01-5ddd0e00bace",
  "scheduleCron": "0 0 * * *",
  "nextExecution": "2024-04-20 00:00:00.000",
  "paused": false,
  "kind": "deployment",
  "definition": {
      "programID": "12345678-911a-43a3-8389-109be345b1d6",
      "request": {
          "operation": "update"
      }
  },
  "created": "2024-04-19 01:00:00.000",
  "modified": "2024-04-19 01:00:00.000",
  "lastExecuted": null
}
```

### Get Schedule

```
GET /api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}
```

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `scheduleID`        | string | path  | schedule ID that you want to get                                                                             |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request GET \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "orgID": "87654321-8b3b-418a-8c01-5ddd0e00bace",
  "scheduleCron": "0 0 * * *",
  "nextExecution": "2024-04-20 00:00:00.000",
  "paused": false,
  "kind": "deployment",
  "definition": {
    "programID": "12345678-9f94-4a92-8bfb-c2da724fa65b",
    "request": {
      "operation": "update"
    }
  },
  "created": "2024-04-19 01:00:00.000",
  "modified": "2024-04-19 01:00:00.000",
  "lastExecuted": null
}
```

### Delete Schedule

```
DELETE /api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}
```

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `scheduleID`        | string | path  | schedule ID that you want to delete                                                                          |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}
```

#### Default response

```
Status: 200 OK
```

### Pause Schedule

```
POST /api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}/pause
```

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `scheduleID`        | string | path  | schedule ID that you want to pause                                                                           |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}/pause
```

#### Default response

```
Status: 200 OK
```

### Resume Schedule

```
POST /api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}/resume
```

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `scheduleID`        | string | path  | schedule ID that you want to resume                                                                          |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}/resume
```

#### Default response

```
Status: 200 OK
```

### List Schedules of a stack

```
GET /api/stacks/{organization}/{project}/{stack}/deployments/schedules
```

#### Parameters

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/schedules
```

#### Default response

```
Status: 200 OK
```

```
{
  "scheduledDeployments": [
    {
      "id": "12345678-8102-447f-b246-e9ec85786e23",
      "orgID": "87654321-8b3b-418a-8c01-5ddd0e00bace",
      "scheduleCron": "0 0 * * *",
      "nextExecution": "2024-04-20 00:00:00.000",
      "paused": false,
      "kind": "deployment",
      "definition": {
        "programID": "12345678-9f94-4a92-8bfb-c2da724fa65b",
        "request": {
          "operation": "update"
        }
      },
      "created": "2024-04-19 01:00:00.000",
      "modified": "2024-04-19 01:00:00.000",
      "lastExecuted": null
    }
  ]
}
```

### List Scheduled Deployment History

```
GET /api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}/history
```

| Parameter           | Type   | In    | Description                                                                                                  |
|---------------------|--------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string | path  | organization name                                                                                            |
| `project`           | string | path  | project name                                                                                                 |
| `stack`             | string | path  | stack name                                                                                                   |
| `scheduleID`        | string | path  | schedule ID whose history you want to see                                                                    |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request GET \
  https://api.pulumi.com/api/stacks/{organization}/{project}/{stack}/deployments/schedules/{scheduleID}/history
```

#### Default response

```
Status: 200 OK
```

```
{
    "scheduledDeploymentsHistory": [
        {
            "id": "12345678-2772-4667-bc7f-ac288ff54717",
            "scheduledActionID": "12345678-0570-4ed9-a9ff-9c54cd538a14",
            "executed": "2024-04-14 00:00:00.000",
            "version": 1,
            "result": "skipped"
        }
    ]
}
```

## Audit Logs

<!-- ###################################################################### -->

### Get Audit Log Events (JSON)

```
GET /api/orgs/{organization}/auditlogs
```

#### Parameters

| Parameter           | Type           | In    | Description                                                                                                  |
|---------------------|----------------|-------|--------------------------------------------------------------------------------------------------------------|
| `organization`      | string         | path  | organization name                                                                                            |
| `startTime`         | unix timestamp | query | return audit log entries that occurred before (i.e., are older) than this timestamp                          |
| `userFilter`        | string         | query | **Optional.** username (e.g. `user1`) to filter results by                                                   |
| `continuationToken` | string         | query | **Optional.** the continuation token to use for retrieving the next set of results if results were truncated |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token pul-abcdefghijklmnopqrstuvwxyz" \
  --compressed \
  https://api.pulumi.com/api/orgs/{organization}/auditlogs?startTime=1615872240
```

#### Default response

```
Status: 200 OK
```

```
{
    "continuationToken": "1615413365",
    "auditLogEvents": [
        {
            "timestamp": 1615413432,
            "sourceIP": "10.0.0.1",
            "event": "Stack Update Started",
            "description": "Started update \"6f93fd86-b972-4402-9952-264c81639794\" for stack \"project1/dev\"",
            "user": {
                "name": "First Last",
                "githubLogin": "user1",
                "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
            }
        },
        {
            "timestamp": 1615413365,
            "sourceIP": "10.0.0.1",
            "event": "Stack Exported",
            "description": "Exported stack project1/dev",
            "user": {
                "name": "First Last",
                "githubLogin": "user1",
                "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
            }
        },
        {
            "timestamp": 1615413365,
            "sourceIP": "10.0.0.1",
            "event": "Stack Update Started",
            "description": "Started update \"da85cf90-4c7b-4dc4-9286-6ca58b4196e3\" for stack \"project1/dev\"",
            "user": {
                "name": "First Last",
                "githubLogin": "user1",
                "avatarUrl": "https://en.gravatar.com/userimage/17756222/cabc55626abae89ebe2d8ae946521e15.png?size=300"
            }
        }
    ]
}
```

<!-- ###################################################################### -->

### Export Audit Log Events (CSV or CEF)

{{% notes "info" %}}
This API endpoint differs from other endpoints in the following ways:

- The response data is _always_ gzip compressed.
- The `Content-Type: application/json` header is omitted.

{{% /notes %}}

```
GET /api/orgs/{organization}/auditlogs/export
```

#### Parameters

| Parameter      | Type           | In    | Description                                                                                |
|----------------|----------------|-------|--------------------------------------------------------------------------------------------|
| `organization` | string         | path  | organization name                                                                          |
| `startTime`    | unix timestamp | query | return audit log entries that occurred before (i.e., are older) than this timestamp        |
| `userFilter`   | string         | query | **Optional.** username (e.g. `user1`) to filter results by                                 |
| `format`       | string         | query | **Optional.** the response format to return - possible values are `cef` or `csv` (default) |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --compressed \
  https://api.pulumi.com/api/orgs/{organization}/auditlogs/export?startTime=1615872240&format=cef
```

#### Default response

```
Status: 200 OK
```

```
Timestamp,Name,Login,Event,Description,SourceIP,RequireOrgAdmin,RequireStackAdmin,AuthenticationFailure
2021-04-11T23:51:45Z,First Last,user1,Member Role Changed,"Changed organization role for ""user2"" to admin",192.168.10.11,true,false,false
2021-04-11T23:09:36Z,First Last,user1,Member Role Changed,"Changed organization role for ""user2"" to admin",192.168.10.11,true,false,false
2021-04-11T23:09:25Z,First Last,user1,Member Role Changed,"Changed organization role for ""user3"" to admin",192.168.10.11,true,false,false
2021-04-11T21:09:52Z,First Last,user1,Secret Decrypted,"Decrypted secret value for stack ""demo-aws-ts-webserver/dev-user1"" (cipher text suffix: ""tbpiX4c="")",192.168.10.11,false,false,false
```

## Deployment runners

<!-- ###################################################################### -->

### Register a new pool

```
POST /api/orgs/{organization}/agent-pools
```

#### Parameters

| Parameter           | Type      | In    | Description         |
|---------------------|-----------|-------|---------------------|
| `organization`      | string    | path  | organization name   |
| `name`              | string    | body  | pool name           |
| `description`       | string    | body  | pool description    |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{ "name":"Production", "description": "Pool for the production account" }' \
  https://api.pulumi.com/api/orgs/{organization}/agent-pools
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "tokenValue": "pul-75a564ac7f3a48079a0c448c1e1ec95c4cfed141"
}
```

### Update a pool

```
PATCH /api/orgs/{organization}/agent-pools/{poolId}
```

#### Parameters

| Parameter           | Type      | In    | Description         |
|---------------------|-----------|-------|---------------------|
| `organization`      | string    | path  | organization name   |
| `poolId`            | string    | path  | pool id to update   |
| `name`              | string    | body  | pool name           |
| `description`       | string    | body  | pool description    |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request PATCH \
  --data '{ "name":"Production", "description": "Pool for the production account" }' \
  https://api.pulumi.com/api/orgs/{organization}/agent-pools/{poolId}
```

#### Default response

```
Status: 200 OK
```

```
{
  "name":"Production",
  "description": "Pool for the production account"
}
```

### Delete a pool

```
DELETE /api/orgs/{organization}/agent-pools/{poolId}
```

#### Parameters

| Parameter           | Type      | In    | Description         |
|---------------------|-----------|-------|---------------------|
| `organization`      | string    | path  | organization name   |
| `poolId`            | string    | path  | pool id to delete   |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{organization}/agent-pools/{poolId}
```

#### Default response

```
Status: 204 OK
```

### Get pool details

```
GET /api/orgs/{organization}/agent-pools/{poolId}
```

#### Parameters

| Parameter           | Type      | In    | Description         |
|---------------------|-----------|-------|---------------------|
| `organization`      | string    | path  | organization name   |
| `poolId`            | string    | path  | pool id to fetch    |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/agent-pools/{poolId}
```

#### Default response

```
Status: 200 OK
```

```
{
  "created": 1715701863000,
  "id": "12345678-8102-447f-b246-e9ec85786e23",
  "name":"Production",
  "description": "Pool for the production account",
  "agents": [
    {
      "version": "v1.1.0",
      "hostname": "private-ipv4-address.kind.internal",
      "ip": "192.168.0.17",
      "pid": "58188",
      "lastSeen": 1719498194000,
      "status": "online"
    }
  ]
}
```

### List registered pools

```
GET /api/orgs/{organization}/agent-pools
```

#### Parameters

| Parameter           | Type      | In    | Description         |
|---------------------|-----------|-------|---------------------|
| `organization`      | string    | path  | organization name   |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/agent-pools
```

#### Default response

```
Status: 200 OK
```

```
{
  "agentPools": [
    {
      "created": 1715701863000,
      "id": "12345678-8102-447f-b246-e9ec85786e23",
      "name":"Production",
      "description": "Pool for the production account",
      "lastSeen": 1715796999,
      "status": "online",
      "lastDeployment": 1715796961
    }
  ]
}
```

## OIDC Issuers

<!-- ###################################################################### -->

### Register a new issuer

```
POST /api/orgs/{organization}/oidc/issuers
```

#### Parameters

| Parameter           | Type          | In    | Description         |
|---------------------|---------------|-------|---------------------|
| `organization`      | string        | path  | organization name   |
| `name`              | string        | body  | oidc issuer name    |
| `url`               | string        | body  | issuer base url (this will be used as a base to build the OIDC configuration url, `url + /.well-known/openid-configuration`) |
| `thumbprints`       | array[string] | body  | **Optional.** issuer TLS certificate thumbprints |
| `maxExpiration`     | int           | body  | **Optional.** max expiration for tokens issued for this issuer in seconds    |
| `jwks`              | json ([jwks format](https://datatracker.ietf.org/doc/html/rfc7517)) | body  | **Optional.** JWK Set from the OIDC issuer    |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request POST \
  --data '{ "name":"GitHub", "url": "https://token.actions.githubusercontent.com", "maxExpiration": 3600 }' \
  https://api.pulumi.com/api/orgs/{organization}/oidc/issuers
```

#### Default response

```
Status: 200 OK
```

```
{

  "id": "e9a13d0e-798e-4e33-bab2-dde06da317bf",
  "name": "github",
  "url": "https://token.actions.githubusercontent.com",
  "issuer": "https://token.actions.githubusercontent.com",
  "created": "2024-04-19 15:07:54.693",
  "thumbprints": [
      "2b6030088e8d08fcd61b8b897019f2d99f4b9a0f7b465b065c2b90e1c53bc07d"
  ],
  "maxExpiration": 3600,
}
```

### Update an issuer

```
PATCH /api/orgs/{organization}/oidc/issuers/{issuerId}
```

#### Parameters

| Parameter           | Type          | In    | Description         |
|---------------------|---------------|-------|---------------------|
| `organization`      | string        | path  | organization name   |
| `issuerId`          | string        | path  | issuer id to update |
| `name`              | string        | body  | oidc issuer name    |
| `thumbprints`       | array[string] | body  | **Optional.** issuer TLS certificate thumbprints |
| `maxExpiration`     | int           | body  | **Optional.** max expiration for tokens issued for this issuer in seconds    |
| `jwks`              | json ([jwks format](https://datatracker.ietf.org/doc/html/rfc7517)) | body  | **Optional.** JWK Set from the OIDC issuer    |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request PATCH \
  --data '{ "name":"GitHub", "maxExpiration": 3600 }' \
  https://api.pulumi.com/api/orgs/{organization}/oidc/issuers/{issuerId}
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "e9a13d0e-798e-4e33-bab2-dde06da317bf",
  "name": "github",
  "url": "https://token.actions.githubusercontent.com",
  "issuer": "https://token.actions.githubusercontent.com",
  "created": "2024-04-19 15:07:54.693",
  "modified": "2024-04-19 15:07:54.693"
  "thumbprints": [
      "2b6030088e8d08fcd61b8b897019f2d99f4b9a0f7b465b065c2b90e1c53bc07d"
  ],
  "maxExpiration": 3600,
  "lastUsed": 1627590233
}
```

### Delete an issuer

```
DELETE /api/orgs/{organization}/oidc/issuers/{issuerId}
```

#### Parameters

| Parameter           | Type          | In    | Description         |
|---------------------|---------------|-------|---------------------|
| `organization`      | string        | path  | organization name   |
| `issuerId`          | string        | path  | issuer id to update |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request DELETE \
  https://api.pulumi.com/api/orgs/{organization}/oidc/issuers/{issuerId}
```

#### Default response

```
Status: 204 OK
```

### Get an issuer

```
GET /api/orgs/{organization}/oidc/issuers/{issuerId}
```

#### Parameters

| Parameter           | Type          | In    | Description         |
|---------------------|---------------|-------|---------------------|
| `organization`      | string        | path  | organization name   |
| `issuerId`          | string        | path  | issuer id to update |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/oidc/issuers/{issuerId}
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "e9a13d0e-798e-4e33-bab2-dde06da317bf",
  "name": "github",
  "url": "https://token.actions.githubusercontent.com",
  "issuer": "https://token.actions.githubusercontent.com",
  "created": "2024-04-19 15:07:54.693",
  "modified": "2024-04-19 15:07:54.693"
  "thumbprints": [
      "2b6030088e8d08fcd61b8b897019f2d99f4b9a0f7b465b065c2b90e1c53bc07d"
  ],
  "maxExpiration": 3600,
  "lastUsed": 1627590233
}
```

### List issuers

```
GET /api/orgs/{organization}/oidc/issuers
```

#### Parameters

| Parameter           | Type          | In    | Description         |
|---------------------|---------------|-------|---------------------|
| `organization`      | string        | path  | organization name   |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/{organization}/oidc/issuers
```

#### Default response

```
Status: 200 OK
```

```
{
  oidcIssuers: [
    {
      "id": "e9a13d0e-798e-4e33-bab2-dde06da317bf",
      "name": "github",
      "url": "https://token.actions.githubusercontent.com",
      "issuer": "https://token.actions.githubusercontent.com",
      "created": "2024-04-19 15:07:54.693",
      "modified": "2024-04-19 15:07:54.693"
      "maxExpiration": 3600,
      "lastUsed": "2024-04-19 15:07:00.458"
    }
  ]
}

```

### Get the issuer's auth policies

```
GET /api/orgs/{organization}/auth/policies/oidcissuers/{issuerId}
```

#### Parameters

| Parameter           | Type          | In    | Description         |
|---------------------|---------------|-------|---------------------|
| `organization`      | string        | path  | organization name   |
| `issuerId`          | string        | path  | issuer id to update |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/{organization}/auth/policies/oidcissuers/{issuerId}
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "e9a13d0e-798e-4e33-bab2-dde06da317bf",
  "version": 1,
  "created": "2024-04-19 15:07:54.707",
  "modified": "2024-04-19 15:07:54.707",
  "policies": [
    {
      "decision": "allow",
      "tokenType": "organization",
      "authorizedPermissions": [],
      "rules": {
          "aud": "urn:pulumi:org:org-name",
          "sub": "repo:organization/repo:*"
      }
    }
  ]
}
```

### Update the issuer's auth policies

```
PATCH /api/orgs/{organization}/auth/policies/{policyId}
```

#### Parameters

| Parameter           | Type          | In    | Description         |
|---------------------|---------------|-------|---------------------|
| `organization`      | string        | path  | organization name   |
| `policyId`          | string        | path  | policy id to update |
| `policies`          | array[object] | body  | array of policies   |
| `policy.decision`   | string        | body  | `deny`/`allow`   |
| `policy.tokenType`  | string        | body  | `organization`/`team`/`personal`/`runner`   |
| `policy.teamName`   | string        | body  | the team name to issue tokens on behalf of, required for team token type  |
| `policy.userLogin`  | string        | body  | the user login to issue tokens on behalf of, required for personal token type  |
| `policy.runnerID`   | string        | body  | the runner name to issue tokens for, required for runner token type  |
| `policy.authorizedPermissions`  | array[string] | body  | permissions allowed by the policy (only `admin` is supported for organization tokens)  |
| `policy.rules`      | object        | body  |  rules to match the token claims |

For more information about authorization rules, refer to [its documentation](/docs/pulumi-cloud/access-management/oidc/client/#configure-the-authorization-policies).

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --request PATCH \
  --data '{ "policies": [{ "decision": "allow", "tokenType": "organization", "rules": { "aud": "urn:pulumi:org:org-name", "sub": "repo:organization/repo:*" }}] }' \
  https://api.pulumi.com/api/orgs/{organization}/auth/policies/{policyId}
```

#### Default response

```
Status: 200 OK
```

```
{
  "id": "e9a13d0e-798e-4e33-bab2-dde06da317bf",
  "version": 1,
  "created": "2024-04-19 15:07:54.707",
  "modified": "2024-04-19 15:07:54.707",
  "policies": [
    {
      "decision": "allow",
      "tokenType": "organization",
      "authorizedPermissions": [],
      "rules": {
          "aud": "urn:pulumi:org:org-name",
          "sub": "repo:organization/repo:*"
      }
    }
  ]
}
```

## OAuth Token Exchange

<!-- ###################################################################### -->

### Exchange Token

Exchange an external token for a Pulumi token via an OIDC issuer trust relationship.

```
POST /api/oauth/token
```

#### Parameters

| Parameter              | Type   | In    | Description                                                                                                      |
|------------------------|--------|-------|------------------------------------------------------------------------------------------------------------------|
| `audience`             | string | body  | OAuth audience in the form `urn:pulumi:org:ORG_NAME`                                                             |
| `grant_type`           | string | body  | OAuth grant type (only `urn:ietf:params:oauth:grant-type:token-exchange` is supported)                           |
| `subject_token_type`   | string | body  | OAuth subject token type (only `urn:ietf:params:oauth:token-type:id_token` is supported)                         |
| `requested_token_type` | string | body  | OAuth requested token type (prefix of `urn:pulumi:token-type:access_token:TOKEN_TYPE` where TOKEN_TYPE is `organization`, `team`, `personal`, or `runner`) |
| `expiration`           | number | body  | OAuth token expiration in seconds                                                                                |
| `scope`                | string | body  | OAuth scope as a comma-separated array. This depends on the requested token type. For requested token type `organization`, scopes must be empty or `admin`. For `team`, the scope must be `team:TEAM_NAME`. For `personal`, it must be `user:USER_LOGIN`. For `runner`, it must be `runner:RUNNER_NAME`. |

#### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Content-Type: application/json" \
  --request POST \
  --data '{"audience":"urn:pulumi:org:ORG_NAME","grant_type":"urn:ietf:params:oauth:grant-type:token-exchange","subject_token_type":"urn:ietf:params:oauth:token-type:id_token","requested_token_type":"urn:pulumi:token-type:access_token:organization","expiration":7200,"scope":"","subject_token":"$SOURCE_TOKEN"}' \
  https://api.pulumi.com/api/oauth/token
```

#### Default response

```
Status: 200 OK
```

```json
{
  "access_token": "redacted",
  "issued_token_type": "urn:pulumi:token-type:access_token:organization",
  "token_type": "token",
  "expires_in": 7200,
  "scope": "",
  "refresh_token": ""
}
```

## Resources Under Management (RUM)

<!-- ###################################################################### -->

### Get Resource Count Summary

```http
GET /orgs/{organization}/resources/summary?granularity=<granularity>&lookbackDays=<days>
```

#### Example (hourly)

{{% notes "info" %}}
If specifying `granularity=hourly`, the maximum `lookbackDays` you can set is `2`
{{% /notes %}}

```bash
curl \
  -h "accept: application/vnd.pulumi+8" \
  -h "authorization: token $PULUMI_ACCESS_TOKEN" \
  --compressed \
  https://api.pulumi.com/api/orgs/{organization}/resources/summary?granularity=hourly&lookbackDays=1
```

#### Default response (hourly)

```
Status: 200 OK
```

```json
{
  "summary": [
    {
      "year": 2022,
      "month": 8,
      "day": 31,
      "hour": 20,
      "resources": 27378
    },
    "..."
  ]
}
```

#### Example (daily)

```bash
curl \
  -H "Accept: application/vnd.pulumi+8" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  --compressed \
  https://api.pulumi.com/api/orgs/{organization}/resources/summary?granularity=daily&lookbackDays=2
```

#### Default response (daily)

```
Status: 200 OK
```

```json
{
  "summary": [
    {
      "year": 2022,
      "month": 8,
      "day": 30,
      "resources": 27379
    },
    "..."
  ]
}
```

#### Example (weekly)

```bash
curl \
  -h "accept: application/vnd.pulumi+8" \
  -h "authorization: token $PULUMI_ACCESS_TOKEN" \
  --compressed \
  https://api.pulumi.com/api/orgs/{organization}/resources/summary?granularity=weekly&lookbackDays=28
```

#### Default response (weekly)

```
Status: 200 OK
```

```json
{
  "summary": [
    {
      "year": 2022,
      "weekNumber": 31,
      "resources": 26432
    },
    "..."
  ]
}
```

#### Example (monthly)

```bash
curl \
  -h "accept: application/vnd.pulumi+8" \
  -h "authorization: token $PULUMI_ACCESS_TOKEN" \
  --compressed \
  https://api.pulumi.com/api/orgs/{organization}/resources/summary?granularity=monthly&lookbackDays=90
```

#### Default response (monthly)

```
Status: 200 OK
```

```json
{
  "summary": [
    {
      "year": 2022,
      "month": 6,
      "resources": 24520
    },
    "..."
  ]
}
```

#### Example (yearly)

```bash
curl \
  -h "accept: application/vnd.pulumi+8" \
  -h "authorization: token $PULUMI_ACCESS_TOKEN" \
  --compressed \
  https://api.pulumi.com/api/orgs/{organization}/resources/summary?granularity=yearly&lookbackDays=730
```

#### Default response (yearly)

```
Status: 200 OK
```

```json
{
  "summary": [
    {
      "year": 2022,
      "resources": 24380
    },
    "..."
  ]
}
```

## Resource Search

{{% notes "info" %}}
The Resource Search API is currently is preview and subject to change.

Please post any bug reports or feature requests in the [Pulumi Cloud Requests repo](https://github.com/pulumi/pulumi-cloud-requests/issues/new/choose).
{{% /notes %}}

{{< chooser language "javascript,typescript,python,go" >}}

{{% choosable language javascript %}}

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "token pul-abc123",
};

const body = await (
  await fetch("https://api.pulumi.com/api/orgs/{org}/search/resources", {
    method: "GET",
    headers: headers,
  })
).json();

console.log(body);
```

{{< /choosable >}}

{{% choosable language typescript %}}

```typescript
const headers = {
  Accept: "application/json",
  Authorization: "token pul-abc123",
};

const body = await(
  await fetch("https://api.pulumi.com/api/orgs/{org}/search/resources", {
    method: "GET",
    headers: headers,
  })
).json();

console.log(body);
```

{{< /choosable >}}

{{% choosable language python %}}

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'token pul-abc123'
}

r = requests.get('https://api.pulumi.com/api/orgs/{org}/search/resources', headers = headers)

print(r.json())

```

{{< /choosable >}}

{{% choosable language go %}}

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {
    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"token pul-abc123"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.pulumi.com/api/orgs/{org}/search/resources", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

{{< /choosable >}}

{{% choosable language csharp %}}

```csharp
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class HttpExample
{
    private HttpClient Client { get; set; }

    public HttpExample()
    {
      Client = new HttpClient();
    }

    public async Task MakeGetRequest()
    {
      string url = "https://api.pulumi.com/api/orgs/{org}/search/resources";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }

    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

{{< /choosable >}}

{{% choosable language java %}}

```java
URL obj = new URL("https://api.pulumi.com/api/orgs/{org}/search/resources");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

{{< /choosable >}}

{{< /chooser >}}

`GET /api/orgs/{org}/search/resourcesv2`

Search for resources belonging to the given organization.

### Parameters

| Parameter     | Type   | In    | Description                                                       |
|---------------|--------|-------|-------------------------------------------------------------------|
| `organization`| string | query | **Required.** The organization name to search resources for.      |
| `page`        | integer| query | **Optional.** Page number to retrieve results from. Default is 1.|
| `size`        | integer| query | **Optional.** Number of results to retrieve per page. Default is 50. |
| `sort`        | string | query | **Optional.** Sort by a property, such as `modified`. Default is `modified`. |
| `asc`         | boolean| query | **Optional.** Sort results in ascending order. Default is `false`. |
| `query`       | string | query | **Optional.** A search query to filter the results. |
| `properties`  | boolean| query | **Optional.** If `true`, includes the resource properties. Default is `false`. |
| `source`      | string | query | **Optional.** The source for resource search. |

### Example

```bash
curl \
  -H "Accept: application/vnd.pulumi+6" \
  -H "Content-Type: application/json" \
  -H "Authorization: token $PULUMI_ACCESS_TOKEN" \
  https://api.pulumi.com/api/orgs/fizzbuzz/search/resourcesv2?page=1&size=50&sort=modified&asc=false&query=&properties=true&source=resource-search
```

### Detailed descriptions

**org**: Name of the organization to search.
The organization can belong to a team, enterprise, or an individual user.

The provided authorization token must have access to this organization.

**query**: The search query to execute. If omitted all resources are returned (subject to any pagination limits).

**sort**: Results are returned sorted by this field value.
If omitted, results are sorted according to their search relevance. If there is no query, results are sorted by their last modified time.

If specified more than once, the first parameter is the primary sort order and subsequent parameters control additional sorting criteria.

Allowed values: created, custom, delete, dependencies, id, modified, module, name, package, parentUrn, project, protected, providerUrn, stack, type, urn, managed, category

**asc**: Whether to return results in ascending or descending sort order.
Results are returned in descending order by default.

**size**: How many results to return at a time.

**page**: The page of results to return.
The `page` parameter can only be used to fetch up 10,000 resources. If a query matches more than 10,000 resources, the `cursor` parameter should be used instead.
Paginating with the `page` parameter is not transactional. The order of results can be impacted if a stack update completes while paginating.

**cursor**: A continuation token for pagination that allows fetching more than 10,000 resources.
Only available on Enterprise plans.
Paginating with the `cursor` parameter is not transactional. The order of results can be impacted if a stack update completes while paginating.

**properties**: Whether to include resource properties in results. Not supported for all subscriptions.

Attempting to set this on an unsupported subscription results in a 402 status code. [Contact us](/contact?form=sales) to upgrade your subscription.

### Example responses

> 200 Response

```json
{
  "total": 3,
  "resources": [
    {
      "created": "2025-02-10T19:33:09.6611691Z",
      "custom": false,
      "delete": false,
      "dependencies": [],
      "id": "i-12345abcde67890fg",
      "modified": "2025-02-10T19:33:09.6611691Z",
      "module": "aws",
      "name": "fizzbuzz-ec2-instance",
      "package": "aws",
      "parent.urn": "urn:fizzbuzz::example-stack::pulumi:pulumi:Stack::example-stack-fizzbuzz",
      "project": "example-stack",
      "protected": false,
      "provider.urn": "urn:fizzbuzz::example-stack::pulumi:providers:aws::default_4_16_7::ec2-1234abcde-5f6g-7h8i-9jklmno9876",
      "stack": "fizzbuzz",
      "type": "aws:ec2/instance:Instance",
      "urn": "urn:fizzbuzz::example-stack::aws:ec2/instance:Instance::fizzbuzz-ec2-instance",
      "properties": {
        "ami": "ami-0123456789abcdef0",
        "instanceType": "t2.micro",
        "keyName": "fizzbuzz-keypair",
        "securityGroups": ["fizzbuzz-sg"],
        "tags": {
          "Name": "fizzbuzz-ec2-instance"
        }
      },
      "metadata": {},
      "category": "compute",
      "managed": "Pulumi (discovered)"
    },
    {
      "created": "2025-02-10T19:33:09.406814916Z",
      "custom": false,
      "delete": false,
      "dependencies": [],
      "id": "db-12345xyz67890pq",
      "modified": "2025-02-10T19:33:09.406814916Z",
      "module": "aws",
      "name": "fizzbuzz-rds-instance",
      "package": "aws",
      "parent.urn": "urn:fizzbuzz::example-stack::pulumi:pulumi:Stack::example-stack-fizzbuzz",
      "project": "example-stack",
      "protected": false,
      "provider.urn": "urn:fizzbuzz::example-stack::pulumi:providers:aws::default_4_16_7::rds-xyzabc-1d2e-3f4g-5h6i7jklm8n9",
      "stack": "fizzbuzz",
      "type": "aws:rds/instance:Instance",
      "urn": "urn:fizzbuzz::example-stack::aws:rds/instance:Instance::fizzbuzz-rds-instance",
      "properties": {
        "allocatedStorage": 20,
        "engine": "mysql",
        "engineVersion": "8.0",
        "instanceClass": "db.t2.micro",
        "name": "fizzbuzz-db",
        "username": "[secret]",
        "password": "[secret]",
        "skipFinalSnapshot": true
      },
      "metadata": {},
      "category": "data",
      "managed": "Pulumi"
    },
    {
      "created": "2025-02-10T19:34:09.406814916Z",
      "custom": false,
      "delete": false,
      "dependencies": [],
      "id": "s3-12345xyz67890pq",
      "modified": "2025-02-10T19:34:09.406814916Z",
      "module": "aws",
      "name": "fizzbuzz-s3-bucket",
      "package": "aws",
      "parent.urn": "urn:fizzbuzz::example-stack::pulumi:pulumi:Stack::example-stack-fizzbuzz",
      "project": "example-stack",
      "protected": false,
      "provider.urn": "urn:fizzbuzz::example-stack::pulumi:providers:aws::default_4_16_7::s3-xyzabc-1d2e-3f4g-5h6i7jklm8n9",
      "stack": "fizzbuzz",
      "type": "aws:s3/bucket:Bucket",
      "urn": "urn:fizzbuzz::example-stack::aws:s3/bucket:Bucket::fizzbuzz-s3-bucket",
      "properties": {
        "bucket": "fizzbuzz-s3-bucket",
        "acl": "private",
        "tags": {
          "Name": "fizzbuzz-s3-bucket"
        }
      },
      "metadata": {},
      "category": "storage",
      "managed": "None"
    }
  ],
  "pagination": {
    "next": "https://api.pulumi.com/api/orgs/fizzbuzz/search/resources?page=2\u0026size=50\u0026sort=modified",
    "cursor": "https://api.pulumi.com/api/orgs/fizzbuzz/search/resources?cursor=H4sIAAAAAAAA_wTAwQ2AMAgF0Ltj9CwJX_gIsxgPpLX7j-B7cFtdoDtU9RzJqC9okhtTfLKkkZTIpbGb1svGe_wBAAD__3DHC1U3AAAA\u0026size=50\u0026sort=modified"
  }
}
```

### Responses

| Status | Meaning                                                                    | Description                                                                                     | Schema                                        |
|--------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Successful search.                                                                              | [ResourceSearchResult](#resourcesearchresult) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request. Not safe to retry.                                                                 | None                                          |
| 402    | Unsupported Query                                                          | You attempted to use functionality not included in your Pulumi subscription. Not safe to retry. | None                                          |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)   | Unprocessable query. Not safe to retry.                                                         | None                                          |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error. Safe to retry.                                                                    | None                                          |

## Data Export

{{% notes "info" %}}
The Data Export API is only available to organizations using the Enterprise and Business Critical editions.

If you don't see it in your organization, [contact us](/contact?form=sales).
{{% /notes %}}

{{% notes "info" %}}
The Data Export API is currently is preview and subject to change.

Please post any bug reports or feature requests in the [Pulumi Cloud Requests repo](https://github.com/pulumi/pulumi-cloud-requests/issues/new/choose).
{{% /notes %}}

{{< chooser language "javascript,typescript,python,go" >}}

{{% choosable language javascript %}}

```javascript
const headers = {
  Accept: "application/json",
  Authorization: "token pul-abc123",
};

const body = await (
  await fetch("https://api.pulumi.com/api/orgs/{org}/search/resources/export", {
    method: "GET",
    headers: headers,
  })
).json();

console.log(body);
```

{{< /choosable >}}

{{% choosable language typescript %}}

```typescript
const headers = {
  Accept: "application/json",
  Authorization: "token pul-abc123",
};

const body = await(
  await fetch("https://api.pulumi.com/api/orgs/{org}/search/resources/export", {
    method: "GET",
    headers: headers,
  }),
).json();

console.log(body);
```

{{< /choosable >}}

{{% choosable language python %}}

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'token pul-abc123'
}

r = requests.get('https://api.pulumi.com/api/orgs/{org}/search/resources/export', headers = headers)

print(r.json())

```

{{< /choosable >}}

{{% choosable language go %}}

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {
    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"token pul-abc123"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://api.pulumi.com/api/orgs/{org}/search/resources/export", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

{{< /choosable >}}

{{% choosable language csharp %}}

```csharp
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class HttpExample
{
    private HttpClient Client { get; set; }

    public HttpExample()
    {
      Client = new HttpClient();
    }

    public async Task MakeGetRequest()
    {
      string url = "https://api.pulumi.com/api/orgs/{org}/search/resources/export";
      var result = await GetAsync(url);
    }

    /// Performs a GET Request
    public async Task GetAsync(string url)
    {
        //Start the request
        HttpResponseMessage response = await Client.GetAsync(url);

        //Validate result
        response.EnsureSuccessStatusCode();

    }

    /// Deserialize object from request response
    private async Task DeserializeObject(HttpResponseMessage response)
    {
        //Read body
        string responseBody = await response.Content.ReadAsStringAsync();

        //Deserialize Body to object
        var result = JsonConvert.DeserializeObject(responseBody);
    }
}

```

{{< /choosable >}}

{{% choosable language java %}}

```java
URL obj = new URL("https://api.pulumi.com/api/orgs/{org}/search/resources/export");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

{{< /choosable >}}

{{< /chooser >}}

`GET /api/orgs/{org}/search/resources/export`

Export resources matching a given query in CSV format.

### Parameters

| Name       | In    | Type          | Required | Description                                                         |
|------------|-------|---------------|----------|---------------------------------------------------------------------|
| org        | path  | string        | true     | Name of the organization to search.                                 |
| query      | query | string        | false    | The search query to execute. If omitted all resources are returned. |
| sort       | query | array[string] | false    | Results are returned sorted by this field value.                    |
| asc        | query | boolean       | false    | Whether to return results in ascending or descending sort order.    |
| properties | query | boolean       | false    | Whether to return properties with results.                          |

#### Example responses

> 200 Response

```curl
< HTTP/1.1 200 OK
< Content-Type: application/octet-stream
< X-Pulumi-Request-Id: 5d286ad6-0aa6-424e-bc9f-945e1cb90952
< Date: Tue, 1 Apr 2023 00:00:00 GMT
< Transfer-Encoding: chunked

created,custom,delete,id,modified,module,name,package,parent_urn,pending,project,protected,provider_urn,stack,type,urn
```

### Responses

| Status | Meaning                                                                    | Description                                                                                     | Schema                                     |
|--------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|--------------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Successful export.                                                                              | [CSV](/docs/pulumi-cloud/insights/export/) |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request. Not safe to retry.                                                                 | None                                       |
| 402    | Unsupported Query                                                          | You attempted to use functionality not included in your Pulumi subscription. Not safe to retry. | None                                       |
| 422    | [Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)   | Unprocessable query. Not safe to retry.                                                         | None                                       |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Server error. Safe to retry.                                                                    | None                                       |

## Schemas

### ResourceSearchResult

The result of a Resource Search query.

```json
{
  "total": 10000,
  "resources": [
    {
      "created": "string",
      "custom": true,
      "delete": true,
      "dependencies": ["string"],
      "id": "string",
      "modified": "string",
      "module": "string",
      "name": "string",
      "package": "string",
      "parent.urn": "string",
      "pending": "creating",
      "project": "string",
      "properties": {},
      "protected": true,
      "provider.urn": "string",
      "stack": "string",
      "type": "string",
      "urn": "string"
    }
  ],
  "aggregations": {
    "others": 0,
    "results": [
      {
        "name": "string",
        "count": 0
      }
    ]
  },
  "pagination": {
    "previous": "string",
    "next": "string",
    "continue": "string"
  }
}
```

#### Properties

| Name         | Type                                | Description                                       |
|--------------|-------------------------------------|---------------------------------------------------|
| total        | integer(int64)\|null                | The total number of results matched by the query. |
| resources    | [[ResourceResult](#resourceresult)] | Resources matching the query.                     |
| aggregations | [Aggregations](#aggregations)       | The result of any aggregations requested.         |
| pagination   | [Pagination](#pagination)           | URIs for pagination, if appropriate.              |

### ResourceResult

An individual resource.

```json
{
  "created": "string",
  "custom": true,
  "delete": true,
  "dependencies": ["string"],
  "id": "string",
  "modified": "string",
  "module": "string",
  "name": "string",
  "package": "string",
  "parent.urn": "string",
  "pending": "creating",
  "project": "string",
  "properties": {},
  "protected": true,
  "provider.urn": "string",
  "stack": "string",
  "type": "string",
  "urn": "string"
}
```

#### Properties

| Name         | Type          | Description                                                                                                                                                                                                                                                                                                                                                                      |
|--------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| created      | string\|null  | The UTC time when the resource was created.<br><br>Resources created _or modified_ with CLI versions below 3.60 _do not_ have created set.                                                                                                                                                                                                                                       |
| custom       | boolean\|null | Whether the resource is a CustomResource.                                                                                                                                                                                                                                                                                                                                        |
| delete       | boolean\|null | Whether the resource is marked for deletion in the next update.<br><br> Typically indicates a resource that was not cleaned up due to an error.                                                                                                                                                                                                                                  |
| dependencies | [string]      | The URN of other resources this resource explicitly or implicitly [depends on](/docs/concepts/resources#dependson).                                                                                                                                                                                                                                                              |
| id           | string\|null  | The [physical name](/docs/concepts/resources/names/#physicalname) of the resource, as assigned by the resource's provider. May not be set if the resource is pending creation.                                                                                                                                                                                                   |
| modified     | string\|null  | The UTC time when the resource's state was last modified during an update, refresh or import. <br><br>Stacks modified with CLI versions below 3.60 record this for all resources as the time of the stack operation, regardless of whether the resource was modified. After CLI version 3.60 the resource's modified time is only updated when the resource's state is modified. |
| module       | string\|null  | The module component of the resource's type.<br><br>This is `s3` for a resource of type `aws:s3/bucketv2:BucketV2`.                                                                                                                                                                                                                                                              |
| name         | string\|null  | The logical name of the resource. <br><br>Typically the first parameter provided to the resource when it was instantiated.                                                                                                                                                                                                                                                       |
| package      | string\|null  | The package component of the resource's [type][types].<br><br>This is `aws` for a resource of type `aws:s3/bucketv2:BucketV2`                                                                                                                                                                                                                                                    |
| parent.urn   | string\|null  | The URN of the resource's parent, if it has one.                                                                                                                                                                                                                                                                                                                                 |
| pending      | string\|null  | The state of the resource if it is pending. <br><br>Typically indicates an operation that was interrupted due to an error, possibly needing manual intervention to resolve.<br><br>Allowed values: `creating`, `deleting`, `updating`, `reading`, `importing`.                                                                                                                   |
| project      | string\|null  | The project the resource belongs to.                                                                                                                                                                                                                                                                                                                                             |
| properties   | object\|null  | The resource's combined input and output values as recorded in Pulumi's state. Only available to certain Pulumi subscriptions.                                                                                                                                                                                                                                                   |
| protected    | boolean\|null | Whether the resource is [protected](/docs/concepts/options/protect] from deletion.                                                                                                                                                                                                                                                                                               |
| provider.urn | string\|null  | The URN of the resource's provider.                                                                                                                                                                                                                                                                                                                                              |
| stack        | string\|null  | The Stack the resource belongs to.                                                                                                                                                                                                                                                                                                                                               |
| type         | string\|null  | The type of the resource.                                                                                                                                                                                                                                                                                                                                                        |
| urn          | string\|null  | The URN of the resource.                                                                                                                                                                                                                                                                                                                                                         |

### Aggregations

A collection of aggregated values.

```json
{
  "others": 0,
  "results": [
    {
      "name": "string",
      "count": 0
    }
  ]
}
```

#### Properties

| Name    | Type                                      | Description                                                                                        |
|---------|-------------------------------------------|----------------------------------------------------------------------------------------------------|
| others  | integer(int64)\|null                      | The number of resources not counted in the top 5 results.                                          |
| results | [[AggregationResult](#aggregationresult)] | The top 5 values for the given aggregation, and the number of resources with each of those values. |

### AggregationResult

An aggregated value.

```json
{
  "name": "string",
  "count": 0
}
```

#### Properties

| Name  | Type                 | Description                          |
|-------|----------------------|--------------------------------------|
| name  | string\|null         | A value from the faceted dimension.  |
| count | integer(int64)\|null | How many resources share that value. |

### Pagination

URLs for fetching additional results.

If null, the request is invalid or does not permit pagination.

```json
{
  "previous": "string",
  "next": "string",
  "continue": "string"
}
```

#### Properties

| Name     | Type         | Description                                                                                                                                                                                                                                                                                                                                            |
|----------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| previous | string\|null | When non-null, this is a URI to fetch the previous page of results.                                                                                                                                                                                                                                                                                    |
| next     | string\|null | When non-null, this is a URI to fetch the next page of results.<br><br>This only allows paginating through the first 10,000 results of a query. <br><br>The `continue` parameter should be used to fetch more than 10,000 results.                                                                                                                     |
| continue | string\|null | When non-null, this is a URI to fetch the next page of results. <br><br>Unlike the `next` property, repeatedly following `continue` allows paginating through an unbounded number of results.<br><br>When paginating with `continue`, `next` and `previous` will always be `null`.<br><br>`continue` is only available to Pulumi Enterprise customers. |

[types]: /docs/concepts/resources/names/#types
