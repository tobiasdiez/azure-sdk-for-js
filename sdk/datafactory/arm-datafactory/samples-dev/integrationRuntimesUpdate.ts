/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Updates an integration runtime.
 *
 * @summary Updates an integration runtime.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/IntegrationRuntimes_Update.json
 */
import {
  UpdateIntegrationRuntimeRequest,
  DataFactoryManagementClient
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";

async function integrationRuntimesUpdate() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const integrationRuntimeName = "exampleIntegrationRuntime";
  const updateIntegrationRuntimeRequest: UpdateIntegrationRuntimeRequest = {
    autoUpdate: "Off",
    updateDelayOffset: '"PT3H"'
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimes.update(
    resourceGroupName,
    factoryName,
    integrationRuntimeName,
    updateIntegrationRuntimeRequest
  );
  console.log(result);
}

integrationRuntimesUpdate().catch(console.error);