import { withRule } from "../with-rule";
export function maxValue(value, appliesIf, messageOverride) {
    return withRule("maxValue", value, appliesIf, messageOverride);
}
