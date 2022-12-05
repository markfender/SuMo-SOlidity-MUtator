module.exports = {
  sumoDir: '.sumo',
  baselineDir: '.sumo/baseline',
  resultsDir: '.sumo/results',
  projectDir: '',
  buildDir: '',
  contractsDir: '',
  testDir: '',
  skipContracts: [],
  skipTests: [],
  testingTimeOutInSec: 3000,
  network: "ganache",
  testingFramework: "truffle",
  optimized: true,
  tce: true,
  contractsGlob: '/**/*.sol',
  packageManagerGlob: ['/package-lock.json', '/yarn.lock'],
  testsGlob:  '/**/*.{js,sol,ts}'
}