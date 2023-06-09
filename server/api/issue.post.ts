import { info, error } from 'firebase-functions/logger';

export default defineEventHandler(async event => {
  try {
    /**
     * The workaround is:
     * 
     * // @ts-expect-error - req.body is not defined in the type definitions
     * const body = await (event.node.req.body || readBody(event));
     */
    const body = await readBody(event);
    info(body);
    setResponseStatus(event, 200);
  } catch (e) {
    error(e);
    setResponseStatus(event, 500);
    return e;
  }
  return 'It works';
});
