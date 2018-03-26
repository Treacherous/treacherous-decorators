import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function maxValue(value: number, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
