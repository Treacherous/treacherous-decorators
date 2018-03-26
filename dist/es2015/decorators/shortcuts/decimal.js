import { withRule } from "../with-rule";
export function decimal(appliesIf, messageOverride) {
    return withRule("decimal", true, appliesIf, messageOverride);
}
