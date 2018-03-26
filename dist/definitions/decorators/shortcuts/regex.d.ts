import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function regex(pattern: string | RegExp, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
