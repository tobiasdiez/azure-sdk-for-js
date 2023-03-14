/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates a existing streaming endpoint.
 *
 * @summary Updates a existing streaming endpoint.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Streaming/stable/2022-11-01/examples/streamingendpoint-update.json
 */
async function updateAStreamingEndpoint() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "0a6ec948-5a62-437d-b9df-934dc7c1b722";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "mediaresources";
  const accountName = "slitestmedia10";
  const streamingEndpointName = "myStreamingEndpoint1";
  const parameters = {
    description: "test event 2",
    availabilitySetName: "availableset",
    location: "West US",
    scaleUnits: 5,
    tags: { tag3: "value3", tag5: "value5" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.streamingEndpoints.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    streamingEndpointName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateAStreamingEndpoint();
}

main().catch(console.error);
