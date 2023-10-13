export default async function handleGetConfiguration({
  chargepoint,
  callMessageId,
}) {
  const response = {
    configurationKey: chargepoint.configuration
      .getVariablesArray()
      // TODO: Move mapping to configuration class
      .map((variable) => {
        return {
          key: variable.key,
          value: variable.value,
          readOnly: false,
        };
      }),
    unknownKey: [],
  };
  chargepoint.writeCallResult(callMessageId, response);
}
