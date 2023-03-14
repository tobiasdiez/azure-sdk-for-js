/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { MonitorOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  OperationAutoGenerated,
  MonitorOperationsListNextOptionalParams,
  MonitorOperationsListOptionalParams,
  MonitorOperationsListResponse,
  MonitorOperationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MonitorOperations operations. */
export class MonitorOperationsImpl implements MonitorOperations {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class MonitorOperations class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Lists available Operations for this Resource Provider
   * @param options The options parameters.
   */
  public list(
    options?: MonitorOperationsListOptionalParams
  ): PagedAsyncIterableIterator<OperationAutoGenerated> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: MonitorOperationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<OperationAutoGenerated[]> {
    let result: MonitorOperationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: MonitorOperationsListOptionalParams
  ): AsyncIterableIterator<OperationAutoGenerated> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists available Operations for this Resource Provider
   * @param options The options parameters.
   */
  private _list(
    options?: MonitorOperationsListOptionalParams
  ): Promise<MonitorOperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: MonitorOperationsListNextOptionalParams
  ): Promise<MonitorOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Monitor/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResultAutoGenerated
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  queryParameters: [Parameters.apiVersion14],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResultAutoGenerated
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated2
    }
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
