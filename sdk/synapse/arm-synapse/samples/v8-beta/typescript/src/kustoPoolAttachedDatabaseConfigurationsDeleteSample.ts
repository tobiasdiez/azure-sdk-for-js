/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the attached database configuration with the given name.
 *
 * @summary Deletes the attached database configuration with the given name.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolAttachedDatabaseConfigurationsDelete.json
 */
async function kustoPoolAttachedDatabaseConfigurationsDelete() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const workspaceName = "kustorptest";
  const kustoPoolName = "kustoclusterrptest4";
  const attachedDatabaseConfigurationName = "attachedDatabaseConfigurations1";
  const resourceGroupName = "kustorptest";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolAttachedDatabaseConfigurations.beginDeleteAndWait(
    workspaceName,
    kustoPoolName,
    attachedDatabaseConfigurationName,
    resourceGroupName
  );
  console.log(result);
}

kustoPoolAttachedDatabaseConfigurationsDelete().catch(console.error);