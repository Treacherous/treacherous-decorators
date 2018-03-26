import { withRule } from "../with-rule";
export function regex(pattern, appliesIf, messageOverride) {
    return withRule("regex", pattern, appliesIf, messageOverride);
}
