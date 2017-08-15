var WorleyNoise = require('./worley.js');

var noise = new WorleyNoise(100, 1000);

map = noise.getNormalizedMap(100, function (e, m) {
    return m(2);
});

for (i = 0; i < 100; i++) {
  for (j = 0; j < 100; j++) {
    if (map[i * 100 + j] > 0.5) {
      process.stdout.write('[]');
    }
    else {
      process.stdout.write('  ');
    }
  }
  process.stdout.write('\n');
}
