import {withRule} from "../with-rule";
import {getRulesetFromMetadata, updateRulesetMetadata} from "../../helpers/metadata-helper";
import {AppliesIfFunction, MessageOverrideFunction} from "./../method-types";

export function matches(property: string, appliesIf?: boolean | AppliesIfFunction, 
    messageOverride?: string | MessageOverrideFunction) {
    return withRule("matches", property, appliesIf, messageOverride);
}