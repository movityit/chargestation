import { extractOcppBaseUrlFromConfiguration } from './utils';
import { Connection } from '../protocols/ocpp-1.6';

export default class ChargeStation {
  constructor(configuration, options = {}) {
    this.configuration = configuration;
    this.options = options;
    this.sessions = {};
  }
  connect() {
    const ocppBaseUrl =
      extractOcppBaseUrlFromConfiguration(this.configuration) ||
      this.options.ocppBaseUrl;
    const ocppIdentity = this.configuration['Identity'];
    this.log('message', `> Connecting to ${ocppBaseUrl}/${ocppIdentity}`);
    this.connection = new Connection(ocppBaseUrl, ocppIdentity);
    this.connection.onConnected = () => {
      this.log('message-response', '< Connected!');
      this.startHeartbeat();
    };
    this.connection.onError = (error) => {
      this.log('error', error.message);
      this.stopHeartbeat();
    };
    this.connection.connect();
  }
  disconnect() {
    this.connection.disconnect();
    this.stopHeartbeat();
  }
  startSession(connectorId) {
    this.sessions[connectorId] = {};
  }
  stopSession(connectorId) {
    delete this.sessions[connectorId];
  }
  hasRunningSession(connectorId) {
    return !!this.sessions[connectorId];
  }

  // Private

  log(type, message, command = undefined) {
    this.onLog && this.onLog({ id: Date.now(), type, message, command });
  }

  startHeartbeat() {
    this.sendCommand('Heartbeat', {});
    this.heartbeatInterval = setInterval(() => {
      this.sendCommand('Heartbeat', {});
    }, parseInt(this.configuration['HeartbeatInterval'] || '30', 10) * 1000);
  }

  stopHeartbeat() {
    clearInterval(this.heartbeatInterval);
  }

  async sendCommand(method, params) {
    const response = await this.connection.sendCommand(method, params);
    this.log('command', `sent ${method} command`, {
      request: { method, params },
      response,
    });
  }
}
