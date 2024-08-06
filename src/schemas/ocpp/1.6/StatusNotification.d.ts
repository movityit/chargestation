/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface StatusNotificationRequest {
  connectorId: number;
  errorCode:
    | 'ConnectorLockFailure'
    | 'EVCommunicationError'
    | 'GroundFailure'
    | 'HighTemperature'
    | 'InternalError'
    | 'LocalListConflict'
    | 'NoError'
    | 'OtherError'
    | 'OverCurrentFailure'
    | 'PowerMeterFailure'
    | 'PowerSwitchFailure'
    | 'ReaderFailure'
    | 'ResetFailure'
    | 'UnderVoltage'
    | 'OverVoltage'
    | 'WeakSignal';
  info?: string;
  status:
    | 'Available'
    | 'Preparing'
    | 'Charging'
    | 'SuspendedEVSE'
    | 'SuspendedEV'
    | 'Finishing'
    | 'Reserved'
    | 'Unavailable'
    | 'Faulted';
  timestamp?: string;
  vendorId?: string;
  vendorErrorCode?: string;
}
