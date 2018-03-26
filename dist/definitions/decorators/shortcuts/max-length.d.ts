import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function maxLength(length: number, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
