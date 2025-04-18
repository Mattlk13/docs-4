"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");

// Get the account ID of the current user as a Pulumi output.
const accountID = aws.getCallerIdentityOutput().accountId;

// Create an S3 bucket.
const bucket = new aws.s3.BucketV2("my-bucket");

// Create an S3 bucket policy allowing anyone in the account to list the contents of the bucket.
const policy = new aws.s3.BucketPolicy("my-bucket-policy", {
    bucket: bucket.id,
    policy: pulumi.jsonStringify({
        Version: "2012-10-17",
        Statement: [
            {
                Effect: "Allow",
                Principal: {
                    AWS: pulumi.interpolate`arn:aws:iam::${accountID}:root`,
                },
                Action: "s3:ListBucket",
                Resource: bucket.arn,
            },
        ],
    }),
});

// Export the name of the bucket
exports.bucketName = bucket.id;
