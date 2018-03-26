import { withRule } from "../with-rule";
export function isoDate(appliesIf, messageOverride) {
    return withRule("isoDate", true, appliesIf, messageOverride);
}
