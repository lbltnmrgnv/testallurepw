// myModule.ts
import * as fs from 'fs';
import * as path from 'path';
var filePath = path.resolve(__dirname, 'expectedlyFailedTests.json');
function loadState() {
  try {
    var data = fs.readFileSync(filePath, 'utf8');
    var state = JSON.parse(data);
    return state.failedTests || []; // Возвращаем пустой массив, если что-то пошло не так
  } catch (error) {
    return []; // Возвращаем пустой массив в случае ошибки
  }
}
export function saveFailedTests(tests) {
  var state = {
    failedTests: tests
  };
  fs.writeFileSync(filePath, JSON.stringify(state));
}
var failedTests = loadState(); // В результате у вас всегда будет массив, даже если пустой

export function getFailedTests() {
  return failedTests;
}
//# sourceMappingURL=failedTests.js.map