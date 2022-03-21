/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ConfigurationServiceSettings,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Check if the Application Configuration Service settings are valid.
 *
 * @summary Check if the Application Configuration Service settings are valid.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/ConfigurationServices_Validate.json
 */
async function configurationServicesValidate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const configurationServiceName = "default";
  const settings: ConfigurationServiceSettings = {
    gitProperty: {
      repositories: [
        {
          name: "fake",
          label: "master",
          patterns: ["app/dev"],
          uri: "https://github.com/fake-user/fake-repository"
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.configurationServices.beginValidateAndWait(
    resourceGroupName,
    serviceName,
    configurationServiceName,
    settings
  );
  console.log(result);
}

configurationServicesValidate().catch(console.error);