import {AuthCredentials} from '@domain';

import {storage} from '../storage';

const AUTHKEY = '@Auth';
async function set(ac: AuthCredentials): Promise<void> {
  await storage.setItem(AUTHKEY, ac);
}

async function get(): Promise<AuthCredentials | null> {
  const ac = await storage.getItem<AuthCredentials>(AUTHKEY);
  return ac;
}

async function remove(): Promise<void> {
  await storage.removeItem(AUTHKEY);
}
export const authCredentialsStorage = {set, get, remove};
