import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function decimal(appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
