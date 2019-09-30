/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/peeringServicesMappers";
import * as Parameters from "../models/parameters";
import { PeeringManagementClientContext } from "../peeringManagementClientContext";

/** Class representing a PeeringServices. */
export class PeeringServices {
  private readonly client: PeeringManagementClientContext;

  /**
   * Create a PeeringServices.
   * @param {PeeringManagementClientContext} client Reference to the service client.
   */
  constructor(client: PeeringManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets an existing peering service with the specified name under the given subscription and
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServicesGetResponse>
   */
  get(resourceGroupName: string, peeringServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PeeringServicesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering.
   * @param callback The callback
   */
  get(resourceGroupName: string, peeringServiceName: string, callback: msRest.ServiceCallback<Models.PeeringService>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, peeringServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PeeringService>): void;
  get(resourceGroupName: string, peeringServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PeeringService>, callback?: msRest.ServiceCallback<Models.PeeringService>): Promise<Models.PeeringServicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        peeringServiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PeeringServicesGetResponse>;
  }

  /**
   * Creates a new peering service or updates an existing peering with the specified name under the
   * given subscription and resource group.
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param peeringService The properties needed to create or update a peering service.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServicesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, peeringServiceName: string, peeringService: Models.PeeringService, options?: msRest.RequestOptionsBase): Promise<Models.PeeringServicesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param peeringService The properties needed to create or update a peering service.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, peeringServiceName: string, peeringService: Models.PeeringService, callback: msRest.ServiceCallback<Models.PeeringService>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param peeringService The properties needed to create or update a peering service.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, peeringServiceName: string, peeringService: Models.PeeringService, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PeeringService>): void;
  createOrUpdate(resourceGroupName: string, peeringServiceName: string, peeringService: Models.PeeringService, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PeeringService>, callback?: msRest.ServiceCallback<Models.PeeringService>): Promise<Models.PeeringServicesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        peeringServiceName,
        peeringService,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.PeeringServicesCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing peering service with the specified name under the given subscription and
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, peeringServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, peeringServiceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, peeringServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, peeringServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        peeringServiceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Updates tags for a peering service with the specified name under the given subscription and
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServicesUpdateResponse>
   */
  update(resourceGroupName: string, peeringServiceName: string, options?: Models.PeeringServicesUpdateOptionalParams): Promise<Models.PeeringServicesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param callback The callback
   */
  update(resourceGroupName: string, peeringServiceName: string, callback: msRest.ServiceCallback<Models.PeeringService>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param peeringServiceName The name of the peering service.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, peeringServiceName: string, options: Models.PeeringServicesUpdateOptionalParams, callback: msRest.ServiceCallback<Models.PeeringService>): void;
  update(resourceGroupName: string, peeringServiceName: string, options?: Models.PeeringServicesUpdateOptionalParams | msRest.ServiceCallback<Models.PeeringService>, callback?: msRest.ServiceCallback<Models.PeeringService>): Promise<Models.PeeringServicesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        peeringServiceName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PeeringServicesUpdateResponse>;
  }

  /**
   * Lists all of the peering services under the given subscription and resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServicesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PeeringServicesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PeeringServiceListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PeeringServiceListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PeeringServiceListResult>, callback?: msRest.ServiceCallback<Models.PeeringServiceListResult>): Promise<Models.PeeringServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.PeeringServicesListByResourceGroupResponse>;
  }

  /**
   * Lists all of the peerings under the given subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServicesListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.PeeringServicesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.PeeringServiceListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PeeringServiceListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PeeringServiceListResult>, callback?: msRest.ServiceCallback<Models.PeeringServiceListResult>): Promise<Models.PeeringServicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.PeeringServicesListBySubscriptionResponse>;
  }

  /**
   * Lists all of the peering services under the given subscription and resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServicesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PeeringServicesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PeeringServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PeeringServiceListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PeeringServiceListResult>, callback?: msRest.ServiceCallback<Models.PeeringServiceListResult>): Promise<Models.PeeringServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.PeeringServicesListByResourceGroupNextResponse>;
  }

  /**
   * Lists all of the peerings under the given subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PeeringServicesListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PeeringServicesListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PeeringServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PeeringServiceListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PeeringServiceListResult>, callback?: msRest.ServiceCallback<Models.PeeringServiceListResult>): Promise<Models.PeeringServicesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.PeeringServicesListBySubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.peeringServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringService
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.peeringServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "peeringService",
    mapper: {
      ...Mappers.PeeringService,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PeeringService
    },
    201: {
      bodyMapper: Mappers.PeeringService
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.peeringServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.peeringServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      tags: [
        "options",
        "tags"
      ]
    },
    mapper: {
      ...Mappers.ResourceTags,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PeeringService
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringServiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServices",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringServiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringServiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PeeringServiceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
