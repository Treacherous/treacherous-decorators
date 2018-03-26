import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function notEqual(value: any, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
