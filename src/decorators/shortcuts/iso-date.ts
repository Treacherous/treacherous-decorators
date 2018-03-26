import {withRule} from "../with-rule";
import {getRulesetFromMetadata, updateRulesetMetadata} from "../../helpers/metadata-helper";
import {AppliesIfFunction, MessageOverrideFunction} from "./../method-types";

export function isoDate(appliesIf?: boolean | AppliesIfFunction, 
    messageOverride?: string | MessageOverrideFunction) {
    return withRule("isoDate", true, appliesIf, messageOverride);
}