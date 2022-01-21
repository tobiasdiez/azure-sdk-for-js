/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  EnergyService,
  EnergyServicesListByResourceGroupOptionalParams,
  EnergyServicesListBySubscriptionOptionalParams,
  EnergyServicesGetOptionalParams,
  EnergyServicesGetResponse,
  EnergyServicesCreateOptionalParams,
  EnergyServicesCreateResponse,
  EnergyServicesUpdateOptionalParams,
  EnergyServicesUpdateResponse,
  EnergyServicesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EnergyServices. */
export interface EnergyServices {
  /**
   * Returns list of oep resources..
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: EnergyServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<EnergyService>;
  /**
   * Lists a collection of oep resources under the given Azure Subscription ID.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: EnergyServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<EnergyService>;
  /**
   * Returns oep resource for a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesGetOptionalParams
  ): Promise<EnergyServicesGetResponse>;
  /**
   * Method that gets called if subscribed for ResourceCreationBegin trigger.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<EnergyServicesCreateResponse>,
      EnergyServicesCreateResponse
    >
  >;
  /**
   * Method that gets called if subscribed for ResourceCreationBegin trigger.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesCreateOptionalParams
  ): Promise<EnergyServicesCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesUpdateOptionalParams
  ): Promise<EnergyServicesUpdateResponse>;
  /**
   * Deletes oep resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes oep resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesDeleteOptionalParams
  ): Promise<void>;
}