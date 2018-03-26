import { withRule } from "../with-rule";
export function equal(value, appliesIf, messageOverride) {
    return withRule("equal", value, appliesIf, messageOverride);
}
