import {withRule} from "../with-rule";
import {getRulesetFromMetadata, updateRulesetMetadata} from "../../helpers/metadata-helper";
import {AppliesIfFunction, MessageOverrideFunction} from "./../method-types";

export function equal(value: any, appliesIf?: boolean | AppliesIfFunction, 
    messageOverride?: string | MessageOverrideFunction) {
    return withRule("equal", value, appliesIf, messageOverride);
}