/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureNetworkFabricManagementServiceAPI } = require("@azure/arm-managednetworkfabric");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update BfdForBgp for externalNetwork.
 *
 * @summary Update BfdForBgp for externalNetwork.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/preview/2023-02-01-preview/examples/ExternalNetworks_updateBfdForBgpAdministrativeState_MaximumSet_Gen.json
 */
async function externalNetworksUpdateBfdForBgpAdministrativeStateMaximumSetGen() {
  const subscriptionId = process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "resourceGroupName";
  const l3IsolationDomainName = "example-l3domain";
  const externalNetworkName = "example-externalnetwork";
  const body = {
    resourceIds: [
      "/subscriptions/xxxxxx/resourceGroups/resourcegroupname/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/example-l3domain",
    ],
    state: "Enable",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(credential, subscriptionId);
  const result = await client.externalNetworks.beginUpdateBfdForBgpAdministrativeStateAndWait(
    resourceGroupName,
    l3IsolationDomainName,
    externalNetworkName,
    body
  );
  console.log(result);
}

async function main() {
  externalNetworksUpdateBfdForBgpAdministrativeStateMaximumSetGen();
}

main().catch(console.error);
