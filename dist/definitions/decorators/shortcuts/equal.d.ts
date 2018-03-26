import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function equal(value: any, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
