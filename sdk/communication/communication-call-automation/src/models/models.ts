// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CommunicationIdentifier,
  CommunicationUserIdentifier,
  PhoneNumberIdentifier,
} from "@azure/communication-common";
import {
  CallConnectionStateModel,
  CommunicationIdentifierModel,
  RecordingChannelType,
  RecordingContentType,
  RecordingFormatType,
  RecordingState,
  RecordingStorageType,
} from "../generated/src";

export {
  CallRejectReason,
  KnownCallRejectReason,
  MediaStreamingConfiguration,
  MediaStreamingTransportType,
  MediaStreamingContentType,
  MediaStreamingAudioChannelType,
  CallConnectionStateModel,
} from "../generated/src/models/index";

/** Properties of a call connection */
export interface CallConnectionProperties {
  /** The call connection id. */
  callConnectionId?: string;
  /** The server call id. */
  serverCallId?: string;
  /**
   * The source caller Id, a phone number, that's shown to the PSTN participant being invited.
   * Required only when calling a PSTN callee.
   */
  sourceCallerIdNumber?: PhoneNumberIdentifier;
  /** Display name of the call if dialing out to a pstn number. */
  sourceDisplayName?: string;
  /** Source identity. */
  sourceIdentity?: CommunicationIdentifier;
  /** The targets of the call. */
  targets?: CommunicationIdentifier[];
  /** The state of the call connection. */
  callConnectionState?: CallConnectionStateModel;
  /** The callback URI. */
  callbackUri?: string;
  /** SubscriptionId for media streaming */
  mediaSubscriptionId?: string;
}

/** Contract model of an ACS call participant */
export interface CallParticipant {
  /** Communication identifier of the participant */
  identifier?: CommunicationIdentifier;
  /** Is participant muted */
  isMuted?: boolean;
}

export interface ServerCallLocator {
  id: string;
  readonly kind?: "serverCallLocator";
}

export interface GroupCallLocator {
  id: string;
  readonly kind?: "groupCallLocator";
}

/** The request payload start for call recording operation with call locator. */
export interface StartCallRecordingRequestDto {
  /** The call locator. */
  callLocator: ServerCallLocator | GroupCallLocator;
  /** The uri to send notifications to. */
  recordingStateCallbackUri?: string;
  /** The content type of call recording. */
  recordingContentType?: RecordingContentType;
  /** The channel type of call recording. */
  recordingChannelType?: RecordingChannelType;
  /** The format type of call recording. */
  recordingFormatType?: RecordingFormatType;
  /**
   * The sequential order in which audio channels are assigned to participants in the unmixed recording.
   * When 'recordingChannelType' is set to 'unmixed' and `audioChannelParticipantOrdering is not specified,
   * the audio channel to participant mapping will be automatically assigned based on the order in which participant
   * first audio was detected.  Channel to participant mapping details can be found in the metadata of the recording.
   */
  audioChannelParticipantOrdering?: CommunicationIdentifierModel[];
  /** Recording storage mode. `External` enables bring your own storage. */
  recordingStorageType?: RecordingStorageType;
}

export interface RecordingStateResponseDto {
  recordingId?: string;
  recordingState?: RecordingState;
}

/** The PlaySource model. */
export interface PlaySource {
  playSourceId?: string;
}

/** The FileSource model. */
export interface FileSource extends PlaySource {
  uri: string;
  readonly kind?: "fileSource";
}

/** Options to configure the recognize operation. */
export interface CallMediaRecognizeOptions {
  recognizeInputType: RecognizeInputType,
  playPrompt: FileSource,
  interruptCallMediaOperation: boolean,
  stopCurrentOperations: boolean,
  operationContext: string,
  interruptPrompt: boolean,
  initialSilenceTimeoutInSeconds: number,
  targetParticipant: CommunicationIdentifier
}

/** The recognize configuration specific to Dtmf. */
export interface CallMediaRecognizeDtmfOptions extends CallMediaRecognizeOptions {
  interToneTimeoutInSeconds: number,
  maxTonesToCollect: number,
  stopDtmfTones: DtmfTone[],
  readonly kind?: "callMediaRecognizeDtmfOptions"
}

/** A Dtmf Tone. */
export enum DtmfTone {
  /** Zero */
  Zero = "zero",
  /** One */
  One = "one",
  /** Two */
  Two = "two",
  /** Three */
  Three = "three",
  /** Four */
  Four = "four",
  /** Five */
  Five = "five",
  /** Six */
  Six = "six",
  /** Seven */
  Seven = "seven",
  /** Eight */
  Eight = "eight",
  /** Nine */
  Nine = "nine",
  /** A */
  A = "a",
  /** B */
  B = "b",
  /** C */
  C = "c",
  /** D */
  D = "d",
  /** Pound */
  Pound = "pound",
  /** Asterisk */
  Asterisk = "asterisk"
}

/** The type of the recognition that the service accepts. */
export enum RecognizeInputType {
  /** Dtmf */
  Dtmf = "dtmf",
  /** Choices */
  Choices = "choices"
}

function instanceOfPhoneNumberIdentity(
  object: any
): object is PhoneNumberIdentifier {
  return "phoneNumber" in object;
}

export class CallInvite {
  public readonly target: CommunicationIdentifier;
  public readonly sourceCallIdNumber?: PhoneNumberIdentifier;
  public sourceDisplayName?: string;
  public readonly sipHeaders?: { [propertyName: string]: string };
  public readonly voipHeaders?: { [propertyName: string]: string };

  /**
   * Create a CallInvite object with PhoneNumberIdentifierr
   * @param targetPhoneNumberIdentity - Target's PhoneNumberIdentifier
   * @param callerIdNumber - Caller's phone number identifier
   */
  constructor(
    targetPhoneNumberIdentity: PhoneNumberIdentifier,
    callerIdNumber: PhoneNumberIdentifier
  );

  /**
   * Create a CallInvite object with PhoneNumberIdentifier
   * @param targetPhoneNumberIdentity - Target's PhoneNumberIdentifier
   * @param callerIdNumber - Caller's phone number identifier
   * @param sipHeaders - Custom context for PSTN
   */
  constructor(
    targetPhoneNumberIdentity: PhoneNumberIdentifier,
    callerIdNumber: PhoneNumberIdentifier,
    sipHeader: { [propertyName: string]: string }
  );

  /**
   * Create a CallInvite object with CommunicationUserIdentifier
   * @param targetIdentity - Target's CommunicationUserIdentifier
   */
  constructor(targetIdentity: CommunicationUserIdentifier);

  /**
   * Create a CallInvite object with CommunicationUserIdentifier
   * @param targetIdentity - Target's CommunicationUserIdentifier
   * @param voipHeaders - Custom context for voip
   */
  constructor(
    targetIdentity: CommunicationUserIdentifier,
    voipHeaders: { [propertyName: string]: string }
  );

  constructor(
    targetIdentity: PhoneNumberIdentifier | CommunicationUserIdentifier,
    callerIdNumberOrHeaders?:
      | PhoneNumberIdentifier
      | { [propertyName: string]: string },
    maybeHeaders?: { [propertyName: string]: string }
  ) {
    this.target = targetIdentity;
    if (callerIdNumberOrHeaders) {
      if (instanceOfPhoneNumberIdentity(callerIdNumberOrHeaders)) {
        this.sourceCallIdNumber = callerIdNumberOrHeaders;
        if (maybeHeaders) {
          this.sipHeaders = maybeHeaders;
        }
      } else {
        this.voipHeaders = callerIdNumberOrHeaders;
      }
    }
  }
}
