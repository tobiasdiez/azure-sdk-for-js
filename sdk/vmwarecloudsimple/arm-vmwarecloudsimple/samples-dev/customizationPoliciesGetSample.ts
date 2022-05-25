/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VMwareCloudSimple } from "@azure/arm-vmwarecloudsimple";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns customization policy by its name
 *
 * @summary Returns customization policy by its name
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/GetCustomizationPolicy.json
 */
async function getCustomizationPolicy() {
  const subscriptionId = "{subscription-id}";
  const regionId = "myResourceGroup";
  const pcName = "myPrivateCloud";
  const customizationPolicyName = "Linux1";
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const result = await client.customizationPolicies.get(
    regionId,
    pcName,
    customizationPolicyName
  );
  console.log(result);
}

getCustomizationPolicy().catch(console.error);