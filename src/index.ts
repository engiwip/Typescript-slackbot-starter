import * as consola from 'consola';
import { RTMClient, WebClient } from '@slack/client';

import * as config from '@/config.json';

import * as Slack from './slack';

async function connect(token: string) {
  const slack = new RTMClient(token);
  const webClient = new WebClient(token);
  try {
    await slack.start();

    slack.on('message', event => Slack.handler(webClient, slack, event));

    consola.start(`슬랙 [${token}] 연결 성공`);
  } catch (e) {
    consola.error('슬랙과 연결하는 도중 오류가 발생 하였습니다.');
    consola.error(e);

    process.kill(-1);
  }
}

connect(config.slackApiToken);
