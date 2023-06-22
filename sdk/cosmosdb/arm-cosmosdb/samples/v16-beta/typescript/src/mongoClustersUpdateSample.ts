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
  MongoClusterUpdate,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing mongo cluster. The request body can contain one to many of the properties present in the normal mongo cluster definition.
 *
 * @summary Updates an existing mongo cluster. The request body can contain one to many of the properties present in the normal mongo cluster definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-15-preview/examples/mongo-cluster/CosmosDBMongoClusterAddNode.json
 */
async function addNewShardNodes() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "TestResourceGroup";
  const mongoClusterName = "myMongoCluster";
  const parameters: MongoClusterUpdate = {
    nodeGroupSpecs: [{ kind: "Shard", nodeCount: 4 }]
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoClusters.beginUpdateAndWait(
    resourceGroupName,
    mongoClusterName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing mongo cluster. The request body can contain one to many of the properties present in the normal mongo cluster definition.
 *
 * @summary Updates an existing mongo cluster. The request body can contain one to many of the properties present in the normal mongo cluster definition.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-03-15-preview/examples/mongo-cluster/CosmosDBMongoClusterUpdate.json
 */
async function updateTheMongoCluster() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "TestResourceGroup";
  const mongoClusterName = "myMongoCluster";
  const parameters: MongoClusterUpdate = {
    administratorLogin: "mongoAdmin",
    administratorLoginPassword: "password",
    nodeGroupSpecs: [
      {
        diskSizeGB: 256,
        enableHa: true,
        kind: "Shard",
        nodeCount: 4,
        sku: "M50"
      }
    ],
    serverVersion: "5.0"
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.mongoClusters.beginUpdateAndWait(
    resourceGroupName,
    mongoClusterName,
    parameters
  );
  console.log(result);
}

async function main() {
  addNewShardNodes();
  updateTheMongoCluster();
}

main().catch(console.error);
