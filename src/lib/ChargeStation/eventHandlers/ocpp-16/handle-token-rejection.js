import { sleep } from '../../../../utils/csv';
import { EventTypes } from '../event-types';

export default async function handleTokenRejection({
  chargepoint,
  emitter,
  session,
}) {
  const chargeSession = chargepoint.sessions[session.connectorId];
  if (!chargeSession) {
    return;
  }

  chargeSession.isStartingSession = false;
  chargeSession.isStoppingSession = true;
  clearInterval(chargeSession.tickInterval);
  await sleep(1000);

  delete chargepoint.sessions[session.connectorId];
  emitter.emitEvent(EventTypes.SessionCancelled, { session });
}
