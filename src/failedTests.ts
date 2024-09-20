// myModule.ts
import * as fs from 'fs';
import * as path from 'path';

interface State {
    failedTests: string[];
}

const filePath = path.resolve(__dirname, 'expectedlyFailedTests.json');

function loadState(): string[] {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const state: State = JSON.parse(data);
        return state.failedTests || []; // Возвращаем пустой массив, если что-то пошло не так
    } catch (error) {
        return []; // Возвращаем пустой массив в случае ошибки
    }
}

export function saveFailedTests(tests: string[]): void {
    const state: State = { failedTests: tests };
    fs.writeFileSync(filePath, JSON.stringify(state));
}

let failedTests: string[] = loadState(); // В результате у вас всегда будет массив, даже если пустой

export function getFailedTests(): string[] {
    return failedTests;
}
