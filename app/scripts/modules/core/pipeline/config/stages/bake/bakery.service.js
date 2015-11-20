'use strict';

let angular = require('angular');

// TODO: Move everything in here to config
module.exports = angular.module('spinnaker.core.pipeline.stage.bake.service', [])
  .factory('bakeryService', function($q) {

    function getRegions(provider) {
      if (!provider || provider === 'aws') {
        return $q.when(['us-gov-west-1']);
      }
      if (provider === 'gce') {
        return $q.when(['asia-east1', 'us-central1', 'europe-west1']);
      }
    }

    function getBaseOsOptions() {
      return $q.when(['RHEL', 'ubuntu']);
    }

    function getBaseLabelOptions() {
      return $q.when(['release', 'candidate', 'previous', 'unstable']);
    }

    function getVmTypes() {
      return $q.when(['pv', 'hvm']);
    }

    function getStoreTypes() {
      return $q.when(['ebs']);
    }

    return {
      getRegions: getRegions,
      getBaseOsOptions: getBaseOsOptions,
      getVmTypes: getVmTypes,
      getBaseLabelOptions: getBaseLabelOptions,
      getStoreTypes: getStoreTypes,
    };
  }).name;
