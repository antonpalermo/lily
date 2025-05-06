import debug from 'debug';

export function logger(namespace, msg) {
  const log = debug(namespace);
  log(msg);
}
