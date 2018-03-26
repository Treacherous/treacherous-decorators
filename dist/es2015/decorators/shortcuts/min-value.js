import { withRule } from "../with-rule";
export function minValue(value, appliesIf, messageOverride) {
    return withRule("minValue", value, appliesIf, messageOverride);
}
