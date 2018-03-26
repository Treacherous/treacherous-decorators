import { withRule } from "../with-rule";
export function required(appliesIf, messageOverride) {
    return withRule("required", true, appliesIf, messageOverride);
}
