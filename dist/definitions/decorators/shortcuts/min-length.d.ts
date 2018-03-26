import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function minLength(length: number, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
