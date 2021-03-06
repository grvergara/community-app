/**
 * My submissions management page specific actions.
 */

import _ from 'lodash';
import 'isomorphic-fetch';
import { createActions } from 'redux-actions';
import { getApiV2, getApiV3 } from 'services/api';
import config from 'utils/config';
import { isClientSide } from 'utils/isomorphy';
import logger from 'utils/logger';

const apiV2 = (auth) => getApiV2(auth.tokenV2);
const apiV3 = (auth) => getApiV3(auth.tokenV3);

function deleteSubmission(challengeId, submissionId) {
  // TODO: replace Promise.resolve with the actual api call to delete the submission
  // eg: getApiV3().delete(`/challenges/${challengeId}/submissions/${submissionId}`);

  return Promise.resolve(submissionId);
}

/*  TODO: At this moment we don't need any special JS code to download
    submissions: we get them from legacy Topcoder Studio API, which is
    authenticated by cookies, and can be done with a simple <a> link in
    the component. Soon we'll migrate to use the new TC API instead, and
    then we'll decide, whether we need operate downloads in JS, or can we
    just remove this action. */
function downloadSubmission(tokens, type, submissionId) {
  _.noop(tokens, type, submissionId);
}

export default createActions({
  SMP: {
    SHOW_DETAILS: _.identity,
    CANCEL_DELETE: _.noop,
    CONFIRM_DELETE: _.identity,
    DELETE_SUBMISSION_DONE: deleteSubmission,
    DOWNLOAD_SUBMISSION: downloadSubmission,
  },
});
