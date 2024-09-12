// myModule.ts
import * as fs from 'fs';
import * as path from 'path';
var filePath = path.resolve(__dirname, 'expectedlyFailedTests.json');
function loadState() {
  try {
    var data = fs.readFileSync(filePath, 'utf8');
    var state = JSON.parse(data);
    return state.failedTests;
  } catch (error) {
    return;
  }
}
export function saveFailedTests(tests) {
  var state = {
    failedTests: tests
  };
  fs.writeFileSync(filePath, JSON.stringify(state));
}
var failedTests = loadState();

// Функция для получения текущего значения переменной
export function getFailedTests() {
  return failedTests;
}
//# sourceMappingURL=failedTests.js.map