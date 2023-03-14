/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SipConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipConfiguration",
    modelProperties: {
      trunks: {
        serializedName: "trunks",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "SipTrunk" } }
        }
      },
      routes: {
        constraints: {
          MaxItems: 250
        },
        serializedName: "routes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SipTrunkRoute"
            }
          }
        }
      }
    }
  }
};

export const SipTrunk: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipTrunk",
    modelProperties: {
      sipSignalingPort: {
        serializedName: "sipSignalingPort",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SipTrunkRoute: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipTrunkRoute",
    modelProperties: {
      description: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      name: {
        constraints: {
          MaxLength: 256
        },
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      numberPattern: {
        constraints: {
          MaxLength: 1024
        },
        serializedName: "numberPattern",
        required: true,
        type: {
          name: "String"
        }
      },
      trunks: {
        constraints: {
          MaxItems: 250
        },
        serializedName: "trunks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "SipRoutingError"
        }
      }
    }
  }
};

export const SipRoutingError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipRoutingError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SipRoutingError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "SipRoutingError"
        }
      }
    }
  }
};

export const SipConfigurationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipConfigurationUpdate",
    modelProperties: {
      trunks: {
        serializedName: "trunks",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "TrunkUpdate" } }
        }
      },
      routes: {
        constraints: {
          MaxItems: 250
        },
        serializedName: "routes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SipTrunkRoute"
            }
          }
        }
      }
    }
  }
};

export const TrunkUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrunkUpdate",
    modelProperties: {
      sipSignalingPort: {
        serializedName: "sipSignalingPort",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SipRoutingGetExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipRoutingGetExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SipRoutingUpdateExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SipRoutingUpdateExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};
