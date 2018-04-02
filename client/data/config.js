import Raven from "raven-js";

const sentry_key = "42dfb4794ea546d283d289c381aca760";
const sentry_app = "873420";
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
