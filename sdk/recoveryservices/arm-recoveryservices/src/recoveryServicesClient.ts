/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  VaultCertificatesImpl,
  RegisteredIdentitiesImpl,
  ReplicationUsagesImpl,
  PrivateLinkResourcesOperationsImpl,
  RecoveryServicesImpl,
  VaultsImpl,
  OperationsImpl,
  VaultExtendedInfoImpl,
  UsagesImpl
} from "./operations";
import {
  VaultCertificates,
  RegisteredIdentities,
  ReplicationUsages,
  PrivateLinkResourcesOperations,
  RecoveryServices,
  Vaults,
  Operations,
  VaultExtendedInfo,
  Usages
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  RecoveryServicesClientOptionalParams,
  GetOperationStatusOptionalParams,
  GetOperationStatusResponse,
  GetOperationResultOptionalParams,
  GetOperationResultResponse
} from "./models";

export class RecoveryServicesClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the RecoveryServicesClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: RecoveryServicesClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: RecoveryServicesClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-recoveryservices/5.2.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2023-01-01";
    this.vaultCertificates = new VaultCertificatesImpl(this);
    this.registeredIdentities = new RegisteredIdentitiesImpl(this);
    this.replicationUsages = new ReplicationUsagesImpl(this);
    this.privateLinkResourcesOperations = new PrivateLinkResourcesOperationsImpl(
      this
    );
    this.recoveryServices = new RecoveryServicesImpl(this);
    this.vaults = new VaultsImpl(this);
    this.operations = new OperationsImpl(this);
    this.vaultExtendedInfo = new VaultExtendedInfoImpl(this);
    this.usages = new UsagesImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Gets the operation status for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param operationId
   * @param options The options parameters.
   */
  getOperationStatus(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: GetOperationStatusOptionalParams
  ): Promise<GetOperationStatusResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, vaultName, operationId, options },
      getOperationStatusOperationSpec
    );
  }

  /**
   * Gets the operation result for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param operationId
   * @param options The options parameters.
   */
  getOperationResult(
    resourceGroupName: string,
    vaultName: string,
    operationId: string,
    options?: GetOperationResultOptionalParams
  ): Promise<GetOperationResultResponse> {
    return this.sendOperationRequest(
      { resourceGroupName, vaultName, operationId, options },
      getOperationResultOperationSpec
    );
  }

  vaultCertificates: VaultCertificates;
  registeredIdentities: RegisteredIdentities;
  replicationUsages: ReplicationUsages;
  privateLinkResourcesOperations: PrivateLinkResourcesOperations;
  recoveryServices: RecoveryServices;
  vaults: Vaults;
  operations: Operations;
  vaultExtendedInfo: VaultExtendedInfo;
  usages: Usages;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/operationStatus/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationResultOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/operationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
