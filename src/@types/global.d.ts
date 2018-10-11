declare module '*/config.json' {
  export const slackApiToken: string;
}

declare module '*.json' {
  const resource: any;
  export = resource;
}
