import * as consola from 'consola';
import { RTMClient, WebClient } from '@slack/client';

import * as Events from './events';

export default function handler(
  web: WebClient,
  _client: RTMClient,
  event: Events.SlackEvent,
) {
  switch (event.type) {
    case 'message': {
      const packet = event as Events.SlackMsgEvent;

      consola.info(`receive message: ${packet.text}`);

      web.chat.postMessage({
        channel: packet.channel,
        text: packet.text,
      });
      break;
    }

    default: {
      // do
    }
  }
}
