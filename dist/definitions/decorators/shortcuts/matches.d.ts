import { AppliesIfFunction, MessageOverrideFunction } from "./../method-types";
export declare function matches(property: string, appliesIf?: boolean | AppliesIfFunction, messageOverride?: string | MessageOverrideFunction): (target: Object, propertyKey: string) => void;
