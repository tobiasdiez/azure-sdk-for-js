/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  UpdateRun,
  UpdateRunsListByFleetOptionalParams,
  UpdateRunsGetOptionalParams,
  UpdateRunsGetResponse,
  UpdateRunsCreateOrUpdateOptionalParams,
  UpdateRunsCreateOrUpdateResponse,
  UpdateRunsDeleteOptionalParams,
  UpdateRunsStartOptionalParams,
  UpdateRunsStartResponse,
  UpdateRunsStopOptionalParams,
  UpdateRunsStopResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a UpdateRuns. */
export interface UpdateRuns {
  /**
   * List UpdateRun resources by Fleet
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param options The options parameters.
   */
  listByFleet(
    resourceGroupName: string,
    fleetName: string,
    options?: UpdateRunsListByFleetOptionalParams
  ): PagedAsyncIterableIterator<UpdateRun>;
  /**
   * Get a UpdateRun
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsGetOptionalParams
  ): Promise<UpdateRunsGetResponse>;
  /**
   * Create a UpdateRun
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    resource: UpdateRun,
    options?: UpdateRunsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<UpdateRunsCreateOrUpdateResponse>,
      UpdateRunsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a UpdateRun
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    resource: UpdateRun,
    options?: UpdateRunsCreateOrUpdateOptionalParams
  ): Promise<UpdateRunsCreateOrUpdateResponse>;
  /**
   * Delete a UpdateRun
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a UpdateRun
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Starts an UpdateRun.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsStartOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<UpdateRunsStartResponse>,
      UpdateRunsStartResponse
    >
  >;
  /**
   * Starts an UpdateRun.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsStartOptionalParams
  ): Promise<UpdateRunsStartResponse>;
  /**
   * Stops an UpdateRun.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsStopOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<UpdateRunsStopResponse>,
      UpdateRunsStopResponse
    >
  >;
  /**
   * Stops an UpdateRun.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param fleetName The name of the Fleet resource.
   * @param updateRunName The name of the UpdateRun resource.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    fleetName: string,
    updateRunName: string,
    options?: UpdateRunsStopOptionalParams
  ): Promise<UpdateRunsStopResponse>;
}
