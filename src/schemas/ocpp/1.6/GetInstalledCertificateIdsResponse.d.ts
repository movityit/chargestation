/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type HashAlgorithmEnumType = 'SHA256' | 'SHA384' | 'SHA512';
export type GetInstalledCertificateStatusEnumType = 'Accepted' | 'NotFound';

export interface GetInstalledCertificateIdsResponse {
  /**
   * @minItems 1
   */
  certificateHashData?: [CertificateHashDataType, ...CertificateHashDataType[]];
  status: GetInstalledCertificateStatusEnumType;
}
export interface CertificateHashDataType {
  hashAlgorithm: HashAlgorithmEnumType;
  issuerNameHash: string;
  issuerKeyHash: string;
  serialNumber: string;
}
