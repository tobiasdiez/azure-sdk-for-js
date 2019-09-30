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

export const apiKey: msRest.OperationParameter = {
  parameterPath: "apiKey",
  mapper: {
    required: true,
    serializedName: "Training-Key",
    type: {
      name: "String"
    }
  }
};
export const classificationType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "classificationType"
  ],
  mapper: {
    serializedName: "classificationType",
    type: {
      name: "String"
    }
  }
};
export const description: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "description"
  ],
  mapper: {
    serializedName: "description",
    type: {
      name: "String"
    }
  }
};
export const domainId0: msRest.OperationURLParameter = {
  parameterPath: "domainId",
  mapper: {
    required: true,
    serializedName: "domainId",
    type: {
      name: "Uuid"
    }
  }
};
export const domainId1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "domainId"
  ],
  mapper: {
    serializedName: "domainId",
    type: {
      name: "Uuid"
    }
  }
};
export const endpoint: msRest.OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    required: true,
    serializedName: "Endpoint",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const flavor: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "flavor"
  ],
  mapper: {
    serializedName: "flavor",
    type: {
      name: "String"
    }
  }
};
export const forceTrain: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "forceTrain"
  ],
  mapper: {
    serializedName: "forceTrain",
    defaultValue: false,
    type: {
      name: "Boolean"
    }
  }
};
export const ids: msRest.OperationQueryParameter = {
  parameterPath: "ids",
  mapper: {
    required: true,
    serializedName: "ids",
    constraints: {
      MaxItems: 64,
      MinItems: 0
    },
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const imageData: msRest.OperationParameter = {
  parameterPath: "imageData",
  mapper: {
    required: true,
    serializedName: "imageData",
    type: {
      name: "Stream"
    }
  }
};
export const imageId: msRest.OperationURLParameter = {
  parameterPath: "imageId",
  mapper: {
    required: true,
    serializedName: "imageId",
    type: {
      name: "Uuid"
    }
  }
};
export const imageIds0: msRest.OperationQueryParameter = {
  parameterPath: "imageIds",
  mapper: {
    required: true,
    serializedName: "imageIds",
    constraints: {
      MaxItems: 64,
      MinItems: 0
    },
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const imageIds1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "imageIds"
  ],
  mapper: {
    serializedName: "imageIds",
    constraints: {
      MaxItems: 256,
      MinItems: 0
    },
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const imageIds2: msRest.OperationQueryParameter = {
  parameterPath: "imageIds",
  mapper: {
    required: true,
    serializedName: "imageIds",
    constraints: {
      MaxItems: 256,
      MinItems: 0
    },
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const iterationId0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "iterationId"
  ],
  mapper: {
    serializedName: "iterationId",
    type: {
      name: "Uuid"
    }
  }
};
export const iterationId1: msRest.OperationURLParameter = {
  parameterPath: "iterationId",
  mapper: {
    required: true,
    serializedName: "iterationId",
    type: {
      name: "Uuid"
    }
  }
};
export const name: msRest.OperationQueryParameter = {
  parameterPath: "name",
  mapper: {
    required: true,
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};
export const notificationEmailAddress: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "notificationEmailAddress"
  ],
  mapper: {
    serializedName: "notificationEmailAddress",
    type: {
      name: "String"
    }
  }
};
export const orderBy: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "orderBy"
  ],
  mapper: {
    serializedName: "orderBy",
    type: {
      name: "String"
    }
  }
};
export const overlapThreshold: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "overlapThreshold"
  ],
  mapper: {
    serializedName: "overlapThreshold",
    type: {
      name: "Number"
    }
  }
};
export const platform: msRest.OperationQueryParameter = {
  parameterPath: "platform",
  mapper: {
    required: true,
    serializedName: "platform",
    type: {
      name: "String"
    }
  }
};
export const predictionId: msRest.OperationQueryParameter = {
  parameterPath: "predictionId",
  mapper: {
    required: true,
    serializedName: "predictionId",
    type: {
      name: "String"
    }
  }
};
export const projectId: msRest.OperationURLParameter = {
  parameterPath: "projectId",
  mapper: {
    required: true,
    serializedName: "projectId",
    type: {
      name: "Uuid"
    }
  }
};
export const publishName: msRest.OperationQueryParameter = {
  parameterPath: "publishName",
  mapper: {
    required: true,
    serializedName: "publishName",
    type: {
      name: "String"
    }
  }
};
export const regionIds: msRest.OperationQueryParameter = {
  parameterPath: "regionIds",
  mapper: {
    required: true,
    serializedName: "regionIds",
    constraints: {
      MaxItems: 64,
      MinItems: 0
    },
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const reservedBudgetInHours: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "reservedBudgetInHours"
  ],
  mapper: {
    serializedName: "reservedBudgetInHours",
    defaultValue: 0,
    type: {
      name: "Number"
    }
  }
};
export const skip: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "skip"
  ],
  mapper: {
    serializedName: "skip",
    defaultValue: 0,
    type: {
      name: "Number"
    }
  }
};
export const tagId: msRest.OperationURLParameter = {
  parameterPath: "tagId",
  mapper: {
    required: true,
    serializedName: "tagId",
    type: {
      name: "Uuid"
    }
  }
};
export const tagIds0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "tagIds"
  ],
  mapper: {
    serializedName: "tagIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const tagIds1: msRest.OperationQueryParameter = {
  parameterPath: "tagIds",
  mapper: {
    required: true,
    serializedName: "tagIds",
    constraints: {
      MaxItems: 20,
      MinItems: 0
    },
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const tagIds2: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "tagIds"
  ],
  mapper: {
    serializedName: "tagIds",
    constraints: {
      MaxItems: 20,
      MinItems: 0
    },
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Uuid"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const take: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "take"
  ],
  mapper: {
    serializedName: "take",
    defaultValue: 50,
    constraints: {
      InclusiveMaximum: 256,
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const targetExportPlatforms: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "targetExportPlatforms"
  ],
  mapper: {
    serializedName: "targetExportPlatforms",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const threshold: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "threshold"
  ],
  mapper: {
    serializedName: "threshold",
    type: {
      name: "Number"
    }
  }
};
export const trainingType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "trainingType"
  ],
  mapper: {
    serializedName: "trainingType",
    type: {
      name: "String"
    }
  }
};
export const type: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "type"
  ],
  mapper: {
    serializedName: "type",
    type: {
      name: "String"
    }
  }
};
