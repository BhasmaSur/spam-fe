import React, { useState, useEffect } from 'react';
import { FlagContext } from './FlagContext';
import { FeatureFlagsService } from '@lazsa/libs/services';
import { isEmpty } from 'lodash';

export const FlagProvider = ({ loggedInUser, children }) => {
  const [flags, setFlags] = useState({});

  const featureFlagsForLocalToTest = {};

  useEffect(() => {
    const getFeatureFlags = async () => {
      try {
        const response = await FeatureFlagsService.getFeatureFlags();
        if (response?.status === 200 && response?.data) {
          const allFlags = {};
          response.data.forEach((item) => (allFlags[item.featureName] = item.featureFlag));
          let updatedFlags = allFlags;
          if (!isEmpty(featureFlagsForLocalToTest)) {
            updatedFlags = { ...updatedFlags, ...featureFlagsForLocalToTest };
          }
          setFlags(updatedFlags);
        }
      } catch (err) {
        //do nothing, it will fallback to the old way to check feature flags as mentioned in flags.js
      }
    };
    if (loggedInUser) {
      getFeatureFlags();
    }
  }, [loggedInUser]);

  return (
    <FlagContext.Provider
      value={{
        flags,
      }}
    >
      {children}
    </FlagContext.Provider>
  );
};
