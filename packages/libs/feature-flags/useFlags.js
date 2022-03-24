/**
 * There are two ways to handle feature flags. The old way is that a feature flag value is
 * associated to different environments which indicate in which environment is it enabled.
 * E.g. { feature1: [environments.devDemo] }
 *
 * which indicate that feature is available on DevDemo environment
 *
 * The new way is that the feature flags are sourced from an API call which give the following
 * feature flag structure
 *
 * { feature1: true, feature2: false }
 *
 * In this depending on where the application is running (the environment and Tenant), the API
 * returns if the feature is enabled or disabled. This method is truly API driven.
 *
 * If the API does not return any value, the feature flag method falls back on the old approach.
 * Hence the feature flags should also be maintained in flags.js file along with it being
 * maintained in the database, exposed via an API
 *
 */

import { useContext } from 'react';
import { environments, flags } from './flags';
import { environmentUrls } from './../utils';
import { FlagContext } from './FlagContext';
import isEmpty from 'lodash/isEmpty';

export const useFlags = () => {
  const currentUrl = window.location.hostname;
  let currentEnvironment = environments.local;
  const value = useContext(FlagContext);
  let newFeatureFlagSupport = false;

  if (value && !isEmpty(value.flags)) {
    newFeatureFlagSupport = true;
  }

  const flagsToUse = newFeatureFlagSupport ? value.flags : flags;

  const {
    devIntegEnvironmentUrl,
    devEnvironmentUrl,
    qaEnvironmentUrl,
    demoEnvironmentUrl,
    preProdEnvironmentUrl,
    prodEnvironmentUrl,
    novartisEnvironmentUrl,
  } = environmentUrls;

  // TODO take this from environment variable instead of setting it in the Windows object.
  if (currentUrl) {
    if (currentUrl.includes(devIntegEnvironmentUrl)) {
      currentEnvironment = environments.devInteg;
    } else if (currentUrl.includes(devEnvironmentUrl)) {
      currentEnvironment = environments.dev;
    } else if (currentUrl.includes(qaEnvironmentUrl)) {
      currentEnvironment = environments.qa;
    } else if (currentUrl.includes(demoEnvironmentUrl)) {
      currentEnvironment = environments.demo;
    } else if (currentUrl.includes(preProdEnvironmentUrl)) {
      currentEnvironment = environments.preProd;
    } else if (
      currentUrl.includes(prodEnvironmentUrl) ||
      currentUrl.includes(novartisEnvironmentUrl)
    ) {
      currentEnvironment = environments.prod;
    } else {
      currentEnvironment = environments.devInteg;
    }
  }

  const updatedFlags = {};
  const isLocalEnv = currentEnvironment === environments.local;
  flagsToUse &&
    Object.entries(flagsToUse).forEach(([key, value]) => {
      // new way - via API
      if (newFeatureFlagSupport) {
        if (value || isLocalEnv) {
          updatedFlags[key] = true;
        } else {
          updatedFlags[key] = false;
        }
      } else {
        // old way - via environment comparison
        if (value) {
          if (value.includes(currentEnvironment) || isLocalEnv) {
            updatedFlags[key] = true;
          } else {
            updatedFlags[key] = false;
          }
        }
      }
    });

  return updatedFlags;
};
