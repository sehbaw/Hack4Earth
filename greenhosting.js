const bytesSent = 1000 * 1000 * 1000; // 1GB expressed in bytes
const greenHost = false; // Is the data transferred from a green host?

estimatedCO2 = co2Emission.perByte(bytesSent, greenHost);

console.log(
  `Sending a gigabyte, had a carbon footprint of ${estimatedCO2.toFixed(
    3
  )} grams of CO2`
);