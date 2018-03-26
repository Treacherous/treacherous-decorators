import { withRule } from "../with-rule";
export function matches(property, appliesIf, messageOverride) {
    return withRule("matches", property, appliesIf, messageOverride);
}
