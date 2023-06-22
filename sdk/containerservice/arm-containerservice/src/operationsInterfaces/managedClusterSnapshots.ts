/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ManagedClusterSnapshot,
  ManagedClusterSnapshotsListOptionalParams,
  ManagedClusterSnapshotsListByResourceGroupOptionalParams,
  ManagedClusterSnapshotsGetOptionalParams,
  ManagedClusterSnapshotsGetResponse,
  ManagedClusterSnapshotsCreateOrUpdateOptionalParams,
  ManagedClusterSnapshotsCreateOrUpdateResponse,
  TagsObject,
  ManagedClusterSnapshotsUpdateTagsOptionalParams,
  ManagedClusterSnapshotsUpdateTagsResponse,
  ManagedClusterSnapshotsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedClusterSnapshots. */
export interface ManagedClusterSnapshots {
  /**
   * Gets a list of managed cluster snapshots in the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: ManagedClusterSnapshotsListOptionalParams
  ): PagedAsyncIterableIterator<ManagedClusterSnapshot>;
  /**
   * Lists managed cluster snapshots in the specified subscription and resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedClusterSnapshotsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ManagedClusterSnapshot>;
  /**
   * Gets a managed cluster snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClusterSnapshotsGetOptionalParams
  ): Promise<ManagedClusterSnapshotsGetResponse>;
  /**
   * Creates or updates a managed cluster snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters The managed cluster snapshot to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    parameters: ManagedClusterSnapshot,
    options?: ManagedClusterSnapshotsCreateOrUpdateOptionalParams
  ): Promise<ManagedClusterSnapshotsCreateOrUpdateResponse>;
  /**
   * Updates tags on a managed cluster snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param parameters Parameters supplied to the Update managed cluster snapshot Tags operation.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    resourceName: string,
    parameters: TagsObject,
    options?: ManagedClusterSnapshotsUpdateTagsOptionalParams
  ): Promise<ManagedClusterSnapshotsUpdateTagsResponse>;
  /**
   * Deletes a managed cluster snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    options?: ManagedClusterSnapshotsDeleteOptionalParams
  ): Promise<void>;
}
