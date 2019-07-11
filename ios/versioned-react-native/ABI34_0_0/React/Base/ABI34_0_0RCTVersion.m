/**
 * @generated by scripts/bump-oss-version.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "ABI34_0_0RCTVersion.h"

NSString* const ABI34_0_0RCTVersionMajor = @"major";
NSString* const ABI34_0_0RCTVersionMinor = @"minor";
NSString* const ABI34_0_0RCTVersionPatch = @"patch";
NSString* const ABI34_0_0RCTVersionPrerelease = @"prerelease";

static NSDictionary* __rnVersion;

__attribute__((constructor))
static void __makeVersion()
{
  __rnVersion = @{
                  ABI34_0_0RCTVersionMajor: @(0),
                  ABI34_0_0RCTVersionMinor: @(59),
                  ABI34_0_0RCTVersionPatch: @(8),
                  ABI34_0_0RCTVersionPrerelease: [NSNull null],
                  };
}

NSDictionary* ABI34_0_0RCTGetreactNativeVersion(void)
{
  return __rnVersion;
}