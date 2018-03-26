import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function number(appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
