import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function date(appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
