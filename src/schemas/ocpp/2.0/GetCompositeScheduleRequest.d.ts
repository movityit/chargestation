/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Can be used to force a power or current profile.
 *
 *
 */
export type ChargingRateUnitEnumType = "W" | "A";

export interface GetCompositeScheduleRequest {
  customData?: CustomDataType;
  /**
   * Length of the requested schedule in seconds.
   *
   *
   */
  duration: number;
  chargingRateUnit?: ChargingRateUnitEnumType;
  /**
   * The ID of the EVSE for which the schedule is requested. When evseid=0, the Charging Station will calculate the expected consumption for the grid connection.
   *
   */
  evseId: number;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
