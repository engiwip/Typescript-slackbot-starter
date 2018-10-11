export interface SlackEvent {
  readonly type: string;
  readonly [event: string]: any;
}

export interface SlackMsgEvent extends SlackEvent {
  readonly subtype?: string;

  readonly user: string;
  readonly text: string;
  readonly channel: string;
}
