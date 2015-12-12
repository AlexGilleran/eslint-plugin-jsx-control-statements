/**
 * @fileoverview If tag must have condition attribute
 * @author Vivek Kumar Bansal
 * @copyright 2015 Vivek Kumar Bansal. All rights reserved.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {

    function isIfComponent(node) {
        return node.name && node.name.type === "JSXIdentifier" && node.name.name === "If";
    }

    function hasConditionAttr(decl) {
        if (decl.type === 'JSXSpreadAttribute') {
          return false;
        }
        return (decl.name.name === 'condition');
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        JSXOpeningElement: function (node) {
            var attributes = node.attributes;

            if (!isIfComponent(node) || attributes.some(hasConditionAttr)) {
                return;
            }

            context.report(node, "If tag must have a condition attribute.");
        }
    };

};

module.exports.schema = [];