import ExpoDevice from './ExpoDevice';

import {
  devicesWithNotch,
  deviceNamesByCode,
} from './Device.types';

import { Platform } from '@unimodules/core';

export const brand = ExpoDevice.brand;
export const carrier = ExpoDevice.carrier;
export const manufacturer = ExpoDevice.manufacturer;
if (Platform.OS === 'ios') {
  var modelName;
  let deviceName;
  let deviceId = ExpoDevice.deviceId;
  if (deviceId) {
    deviceName = deviceNamesByCode[deviceId];
    if (!deviceName) {
      // Not found on database. At least guess main device type from string contents:
      if (deviceId.startsWith('iPod')) {
        deviceName = 'iPod Touch';
      } else if (deviceId.startsWith('iPad')) {
        deviceName = 'iPad';
      } else if (deviceId.startsWith('iPhone')) {
        deviceName = 'iPhone';
      } else if (deviceId.startsWith('AppleTV')) {
        deviceName = 'Apple TV';
      }
    }
  }
  modelName = deviceName;
} else {
  modelName = ExpoDevice.model
}
export const model = modelName;
export const phoneNumber = ExpoDevice.phoneNumber;
export const serialNumber = ExpoDevice.serialNumber;
export const systemName = ExpoDevice.systemName;
export const totalMemory = ExpoDevice.totalMemory;
export const uniqueId = ExpoDevice.uniqueId;
export const isTablet = ExpoDevice.isTablet;
export const deviceType = ExpoDevice.deviceType;
export const deviceId = ExpoDevice.deviceId;
export const totalDiskCapacity = ExpoDevice.totalDiskCapacity;
export const supportedABIs = ExpoDevice.supportedABIs;
export function hasNotch(): boolean {
  return (
    devicesWithNotch.findIndex(
      item =>
        item.brand.toLowerCase() === ExpoDevice.brand.toLowerCase() &&
        item.model.toLowerCase() === ((Platform.OS === 'ios') ? modelName.toLowerCase() : ExpoDevice.model.toLowerCase())
    ) !== -1
  );
}
export async function getFreeDiskStorageAsync(): Promise<String> {
  return await ExpoDevice.getFreeDiskStorageAsync();
}

export async function getIPAddressAsync(): Promise<string> {
  return await ExpoDevice.getIPAddressAsync();
}

export async function getMACAddressAsync(): Promise<string> {
  return await ExpoDevice.getMACAddressAsync();
}

export async function isAirplaneModeAsync(): Promise<boolean | string> {
  if (Platform.OS === 'android') {
    return await ExpoDevice.isAirplaneModeAsync();
  } else {
    return Promise.reject('This platform does not support this method');
  }
}

export async function hasSystemFeatureAsync(feature: string): Promise<boolean | string> {
  if (Platform.OS === 'android') {
    return await ExpoDevice.hasSystemFeatureAsync(feature);
  } else {
    return Promise.reject('This platform does not support this method');
  }
}

export async function isPinOrFingerprintSetAsync(): Promise<boolean>{
  return await ExpoDevice.isPinOrFingerprintSetAsync();
}

export async function getUserAgentAsync(): Promise<String>{
  return await ExpoDevice.getUserAgentAsync();
}