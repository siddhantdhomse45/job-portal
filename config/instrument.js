// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import {  nodeProfilingIntegration } from '@sentry/profiling-node'


Sentry.init({
  dsn: "https://d7989c774f353ad30109e90c5e103c8e@o4509070898757632.ingest.us.sentry.io/4509070906097664",

  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()

  ],
  // Set sampling rate for profiling - this is evaluated only once per SDK.init
//   tracesSampleRate: 1.0,
});