/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { OperatorConnectClientContext } from "./operatorConnectClientContext";
import {
  OperatorConnectClientOptionalParams,
  Operator,
  GetOperatorsNextOptionalParams,
  GetOperatorsOptionalParams,
  Consent,
  GetConsentsNextOptionalParams,
  GetConsentsOptionalParams,
  GetOperatorsResponse,
  GetConsentsResponse,
  GetConsentOptionalParams,
  GetConsentResponse,
  CreateOrUpdateConsentOptionalParams,
  CreateOrUpdateConsentResponse,
  GetOperatorsNextResponse,
  GetConsentsNextResponse
} from "./models";

/// <reference lib="esnext.asynciterable" />
export class OperatorConnectClient extends OperatorConnectClientContext {
  /**
   * Initializes a new instance of the OperatorConnectClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: OperatorConnectClientOptionalParams) {
    super($host, options);
  }

  /**
   * This endpoint gets a list of all operators
   * @param options The options parameters.
   */
  public listOperators(
    options?: GetOperatorsOptionalParams
  ): PagedAsyncIterableIterator<Operator> {
    const iter = this.getOperatorsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getOperatorsPagingPage(options);
      }
    };
  }

  private async *getOperatorsPagingPage(
    options?: GetOperatorsOptionalParams
  ): AsyncIterableIterator<Operator[]> {
    let result = await this._getOperators(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getOperatorsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getOperatorsPagingAll(
    options?: GetOperatorsOptionalParams
  ): AsyncIterableIterator<Operator> {
    for await (const page of this.getOperatorsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This endpoint gets a list of all Consents with Operators for the current user
   * @param options The options parameters.
   */
  public listConsents(
    options?: GetConsentsOptionalParams
  ): PagedAsyncIterableIterator<Consent> {
    const iter = this.getConsentsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getConsentsPagingPage(options);
      }
    };
  }

  private async *getConsentsPagingPage(
    options?: GetConsentsOptionalParams
  ): AsyncIterableIterator<Consent[]> {
    let result = await this._getConsents(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getConsentsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getConsentsPagingAll(
    options?: GetConsentsOptionalParams
  ): AsyncIterableIterator<Consent> {
    for await (const page of this.getConsentsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This endpoint gets a list of all operators
   * @param options The options parameters.
   */
  private _getOperators(
    options?: GetOperatorsOptionalParams
  ): Promise<GetOperatorsResponse> {
    return this.sendOperationRequest({ options }, getOperatorsOperationSpec);
  }

  /**
   * This endpoint gets a list of all Consents with Operators for the current user
   * @param options The options parameters.
   */
  private _getConsents(
    options?: GetConsentsOptionalParams
  ): Promise<GetConsentsResponse> {
    return this.sendOperationRequest({ options }, getConsentsOperationSpec);
  }

  /**
   * This endpoint gets single Consent with Operator for current user
   * @param operatorId The id of Operator with who user has signed consent
   * @param options The options parameters.
   */
  getConsent(
    operatorId: string,
    options?: GetConsentOptionalParams
  ): Promise<GetConsentResponse> {
    return this.sendOperationRequest(
      { operatorId, options },
      getConsentOperationSpec
    );
  }

  /**
   * This endpoint creates new or updates the existing Consent with Operator
   * @param operatorId The id of the Operator with who user wants to create new or update existing
   *                   consent
   * @param options The options parameters.
   */
  createOrUpdateConsent(
    operatorId: string,
    options?: CreateOrUpdateConsentOptionalParams
  ): Promise<CreateOrUpdateConsentResponse> {
    return this.sendOperationRequest(
      { operatorId, options },
      createOrUpdateConsentOperationSpec
    );
  }

  /**
   * GetOperatorsNext
   * @param nextLink The nextLink from the previous successful call to the GetOperators method.
   * @param options The options parameters.
   */
  private _getOperatorsNext(
    nextLink: string,
    options?: GetOperatorsNextOptionalParams
  ): Promise<GetOperatorsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getOperatorsNextOperationSpec
    );
  }

  /**
   * GetConsentsNext
   * @param nextLink The nextLink from the previous successful call to the GetConsents method.
   * @param options The options parameters.
   */
  private _getConsentsNext(
    nextLink: string,
    options?: GetConsentsNextOptionalParams
  ): Promise<GetConsentsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getConsentsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperatorsOperationSpec: coreClient.OperationSpec = {
  path: "/operatorconnect/operators",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListOfOperators,
      headersMapper: Mappers.OperatorConnectClientGetOperatorsHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper: Mappers.OperatorConnectClientGetOperatorsExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getConsentsOperationSpec: coreClient.OperationSpec = {
  path: "/operatorconnect/consents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListOfConsents,
      headersMapper: Mappers.OperatorConnectClientGetConsentsHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper: Mappers.OperatorConnectClientGetConsentsExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getConsentOperationSpec: coreClient.OperationSpec = {
  path: "/operatorconnect/consents/{operatorId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Consent,
      headersMapper: Mappers.OperatorConnectClientGetConsentHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper: Mappers.OperatorConnectClientGetConsentExceptionHeaders
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.operatorId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateConsentOperationSpec: coreClient.OperationSpec = {
  path: "/operatorconnect/consents/{operatorId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Consent,
      headersMapper: Mappers.OperatorConnectClientCreateOrUpdateConsentHeaders
    },
    201: {
      bodyMapper: Mappers.Consent,
      headersMapper: Mappers.OperatorConnectClientCreateOrUpdateConsentHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper:
        Mappers.OperatorConnectClientCreateOrUpdateConsentExceptionHeaders
    }
  },
  requestBody: {
    parameterPath: {
      status: ["options", "status"],
      consentedBy: ["options", "consentedBy"],
      lastModifiedBy: ["options", "lastModifiedBy"],
      consentedCountries: ["options", "consentedCountries"],
      contacts: ["options", "contacts"],
      companyName: ["options", "companyName"]
    },
    mapper: { ...Mappers.CreateOrUpdateConsentRequest, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.operatorId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperatorsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListOfOperators,
      headersMapper: Mappers.OperatorConnectClientGetOperatorsNextHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper:
        Mappers.OperatorConnectClientGetOperatorsNextExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getConsentsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListOfConsents,
      headersMapper: Mappers.OperatorConnectClientGetConsentsNextHeaders
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper:
        Mappers.OperatorConnectClientGetConsentsNextExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};