import { withRule } from "../with-rule";
export function step(value, appliesIf, messageOverride) {
    return withRule("step", value, appliesIf, messageOverride);
}
