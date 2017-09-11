define(["require", "exports", "./exposer", "./decorators/with-display-name", "./decorators/with-rule-foreach", "./decorators/with-rule", "./decorators/with-ruleset-foreach", "./decorators/with-ruleset", "./helpers/metadata-helper"], function (require, exports, exposer_1, with_display_name_1, with_rule_foreach_1, with_rule_1, with_ruleset_foreach_1, with_ruleset_1, metadata_helper_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(exposer_1);
    __export(with_display_name_1);
    __export(with_rule_foreach_1);
    __export(with_rule_1);
    __export(with_ruleset_foreach_1);
    __export(with_ruleset_1);
    __export(metadata_helper_1);
});
