import type { AttachmentOptions } from "allure-js-commons";
import type { RuntimeMessage } from "allure-js-commons/sdk";
import { MessageTestRuntime } from "allure-js-commons/sdk/runtime";
export declare class AllurePlaywrightTestRuntime extends MessageTestRuntime {
    expectedlyFailedTests: string[];
    constructor();
    step<T = void>(name: string, body: () => T | PromiseLike<T>): Promise<T>;
    attachment(name: string, content: Buffer | string, options: AttachmentOptions): Promise<void>;
    attachmentFromPath(name: string, path: string, options: AttachmentOptions): Promise<void>;
    sendMessage(message: RuntimeMessage): Promise<void>;
}
