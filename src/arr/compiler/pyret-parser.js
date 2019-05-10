({
provides: {},requires: [],nativeRequires: ["jglr/jglr"],
/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */
theModule: function(runtime, ns, uri, E) {
  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "version": 1,
    "start": "START",
    "name": "PyretGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "rulesByOldId": {
      "0": {
        "name": "program",
        "symbols": [
          "@prelude",
          "@block"
        ]
      },
      "1": {
        "name": "prelude",
        "symbols": [
          "@provide-stmts",
          "@import-stmts"
        ]
      },
      "2": {
        "name": "provide-stmts",
        "symbols": [
          "@provide-stmts_I0*"
        ]
      },
      "3": {
        "name": "provide-stmts_I0*",
        "symbols": []
      },
      "4": {
        "name": "provide-stmts_I0*",
        "symbols": [
          "@provide-stmts_I0*",
          "@provide-stmts_I0"
        ]
      },
      "5": {
        "name": "provide-stmts_I0",
        "symbols": [
          "@provide-stmt"
        ]
      },
      "6": {
        "name": "import-stmts",
        "symbols": [
          "@import-stmts_I0*"
        ]
      },
      "7": {
        "name": "import-stmts_I0*",
        "symbols": []
      },
      "8": {
        "name": "import-stmts_I0*",
        "symbols": [
          "@import-stmts_I0*",
          "@import-stmts_I0"
        ]
      },
      "9": {
        "name": "import-stmts_I0",
        "symbols": [
          "@import-stmt"
        ]
      },
      "10": {
        "name": "import-stmt",
        "symbols": [
          "'INCLUDE",
          "@import-source"
        ]
      },
      "11": {
        "name": "import-stmt",
        "symbols": [
          "'INCLUDE",
          "'FROM",
          "@module-ref",
          "'COLON",
          "@import-stmt_A1_I4?",
          "'END"
        ]
      },
      "12": {
        "name": "import-stmt_A1_I4?",
        "symbols": []
      },
      "13": {
        "name": "import-stmt_A1_I4?",
        "symbols": [
          "@import-stmt_A1_I4"
        ]
      },
      "14": {
        "name": "import-stmt_A1_I4",
        "symbols": [
          "@include-spec",
          "@import-stmt_A1_I4_I1*",
          "@import-stmt_A1_I4_I2?"
        ]
      },
      "15": {
        "name": "import-stmt_A1_I4_I1*",
        "symbols": []
      },
      "16": {
        "name": "import-stmt_A1_I4_I1*",
        "symbols": [
          "@import-stmt_A1_I4_I1*",
          "@import-stmt_A1_I4_I1"
        ]
      },
      "17": {
        "name": "import-stmt_A1_I4_I1",
        "symbols": [
          "'COMMA",
          "@include-spec"
        ]
      },
      "18": {
        "name": "import-stmt_A1_I4_I2?",
        "symbols": []
      },
      "19": {
        "name": "import-stmt_A1_I4_I2?",
        "symbols": [
          "@import-stmt_A1_I4_I2"
        ]
      },
      "20": {
        "name": "import-stmt_A1_I4_I2",
        "symbols": [
          "'COMMA"
        ]
      },
      "21": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "@import-source",
          "'AS",
          "'NAME"
        ]
      },
      "22": {
        "name": "import-stmt",
        "symbols": [
          "'IMPORT",
          "@comma-names",
          "'FROM",
          "@import-source"
        ]
      },
      "23": {
        "name": "import-source",
        "symbols": [
          "@import-special"
        ]
      },
      "24": {
        "name": "import-source",
        "symbols": [
          "@import-name"
        ]
      },
      "25": {
        "name": "import-special",
        "symbols": [
          "'NAME",
          "'PARENNOSPACE",
          "'STRING",
          "@import-special_I3*",
          "'RPAREN"
        ]
      },
      "26": {
        "name": "import-special_I3*",
        "symbols": []
      },
      "27": {
        "name": "import-special_I3*",
        "symbols": [
          "@import-special_I3*",
          "@import-special_I3"
        ]
      },
      "28": {
        "name": "import-special_I3",
        "symbols": [
          "'COMMA",
          "'STRING"
        ]
      },
      "29": {
        "name": "import-name",
        "symbols": [
          "'NAME"
        ]
      },
      "30": {
        "name": "include-spec",
        "symbols": [
          "@include-name-spec"
        ]
      },
      "31": {
        "name": "include-spec",
        "symbols": [
          "@include-type-spec"
        ]
      },
      "32": {
        "name": "include-spec",
        "symbols": [
          "@include-data-spec"
        ]
      },
      "33": {
        "name": "include-spec",
        "symbols": [
          "@include-module-spec"
        ]
      },
      "34": {
        "name": "include-name-spec",
        "symbols": [
          "@name-spec"
        ]
      },
      "35": {
        "name": "include-type-spec",
        "symbols": [
          "'TYPE",
          "@name-spec"
        ]
      },
      "36": {
        "name": "include-data-spec",
        "symbols": [
          "'DATA",
          "@data-name-spec",
          "@include-data-spec_I2?"
        ]
      },
      "37": {
        "name": "include-data-spec_I2?",
        "symbols": []
      },
      "38": {
        "name": "include-data-spec_I2?",
        "symbols": [
          "@include-data-spec_I2"
        ]
      },
      "39": {
        "name": "include-data-spec_I2",
        "symbols": [
          "@hiding-spec"
        ]
      },
      "40": {
        "name": "include-module-spec",
        "symbols": [
          "'MODULE",
          "@name-spec"
        ]
      },
      "41": {
        "name": "provide-stmt",
        "symbols": [
          "@provide-vals-stmt"
        ]
      },
      "42": {
        "name": "provide-stmt",
        "symbols": [
          "@provide-types-stmt"
        ]
      },
      "43": {
        "name": "provide-stmt",
        "symbols": [
          "@provide-block"
        ]
      },
      "44": {
        "name": "provide-vals-stmt",
        "symbols": [
          "'PROVIDE",
          "@stmt",
          "'END"
        ]
      },
      "45": {
        "name": "provide-vals-stmt",
        "symbols": [
          "'PROVIDE",
          "@provide-vals-stmt_A1_I1"
        ]
      },
      "46": {
        "name": "provide-vals-stmt_A1_I1",
        "symbols": [
          "'STAR"
        ]
      },
      "47": {
        "name": "provide-vals-stmt_A1_I1",
        "symbols": [
          "'TIMES"
        ]
      },
      "48": {
        "name": "provide-types-stmt",
        "symbols": [
          "'PROVIDE-TYPES",
          "@record-ann"
        ]
      },
      "49": {
        "name": "provide-types-stmt",
        "symbols": [
          "'PROVIDE-TYPES",
          "@provide-types-stmt_A1_I1"
        ]
      },
      "50": {
        "name": "provide-types-stmt_A1_I1",
        "symbols": [
          "'STAR"
        ]
      },
      "51": {
        "name": "provide-types-stmt_A1_I1",
        "symbols": [
          "'TIMES"
        ]
      },
      "52": {
        "name": "provide-block",
        "symbols": [
          "'PROVIDECOLON",
          "@provide-block_A0_I1?",
          "'END"
        ]
      },
      "53": {
        "name": "provide-block_A0_I1?",
        "symbols": []
      },
      "54": {
        "name": "provide-block_A0_I1?",
        "symbols": [
          "@provide-block_A0_I1"
        ]
      },
      "55": {
        "name": "provide-block_A0_I1",
        "symbols": [
          "@provide-spec",
          "@provide-block_A0_I1_I1*",
          "@provide-block_A0_I1_I2?"
        ]
      },
      "56": {
        "name": "provide-block_A0_I1_I1*",
        "symbols": []
      },
      "57": {
        "name": "provide-block_A0_I1_I1*",
        "symbols": [
          "@provide-block_A0_I1_I1*",
          "@provide-block_A0_I1_I1"
        ]
      },
      "58": {
        "name": "provide-block_A0_I1_I1",
        "symbols": [
          "'COMMA",
          "@provide-spec"
        ]
      },
      "59": {
        "name": "provide-block_A0_I1_I2?",
        "symbols": []
      },
      "60": {
        "name": "provide-block_A0_I1_I2?",
        "symbols": [
          "@provide-block_A0_I1_I2"
        ]
      },
      "61": {
        "name": "provide-block_A0_I1_I2",
        "symbols": [
          "'COMMA"
        ]
      },
      "62": {
        "name": "provide-block",
        "symbols": [
          "'PROVIDE",
          "'FROM",
          "@module-ref",
          "'COLON",
          "@provide-block_A1_I4?",
          "'END"
        ]
      },
      "63": {
        "name": "provide-block_A1_I4?",
        "symbols": []
      },
      "64": {
        "name": "provide-block_A1_I4?",
        "symbols": [
          "@provide-block_A1_I4"
        ]
      },
      "65": {
        "name": "provide-block_A1_I4",
        "symbols": [
          "@provide-spec",
          "@provide-block_A1_I4_I1*",
          "@provide-block_A1_I4_I2?"
        ]
      },
      "66": {
        "name": "provide-block_A1_I4_I1*",
        "symbols": []
      },
      "67": {
        "name": "provide-block_A1_I4_I1*",
        "symbols": [
          "@provide-block_A1_I4_I1*",
          "@provide-block_A1_I4_I1"
        ]
      },
      "68": {
        "name": "provide-block_A1_I4_I1",
        "symbols": [
          "'COMMA",
          "@provide-spec"
        ]
      },
      "69": {
        "name": "provide-block_A1_I4_I2?",
        "symbols": []
      },
      "70": {
        "name": "provide-block_A1_I4_I2?",
        "symbols": [
          "@provide-block_A1_I4_I2"
        ]
      },
      "71": {
        "name": "provide-block_A1_I4_I2",
        "symbols": [
          "'COMMA"
        ]
      },
      "72": {
        "name": "provide-spec",
        "symbols": [
          "@provide-name-spec"
        ]
      },
      "73": {
        "name": "provide-spec",
        "symbols": [
          "@provide-type-spec"
        ]
      },
      "74": {
        "name": "provide-spec",
        "symbols": [
          "@provide-data-spec"
        ]
      },
      "75": {
        "name": "provide-spec",
        "symbols": [
          "@provide-module-spec"
        ]
      },
      "76": {
        "name": "name-spec",
        "symbols": [
          "@name-spec_A0_I0",
          "@name-spec_A0_I1?"
        ]
      },
      "77": {
        "name": "name-spec_A0_I0",
        "symbols": [
          "'STAR"
        ]
      },
      "78": {
        "name": "name-spec_A0_I0",
        "symbols": [
          "'TIMES"
        ]
      },
      "79": {
        "name": "name-spec_A0_I1?",
        "symbols": []
      },
      "80": {
        "name": "name-spec_A0_I1?",
        "symbols": [
          "@name-spec_A0_I1"
        ]
      },
      "81": {
        "name": "name-spec_A0_I1",
        "symbols": [
          "@hiding-spec"
        ]
      },
      "82": {
        "name": "name-spec",
        "symbols": [
          "@module-ref"
        ]
      },
      "83": {
        "name": "name-spec",
        "symbols": [
          "@module-ref",
          "'AS",
          "'NAME"
        ]
      },
      "84": {
        "name": "data-name-spec",
        "symbols": [
          "@data-name-spec_A0_I0"
        ]
      },
      "85": {
        "name": "data-name-spec_A0_I0",
        "symbols": [
          "'STAR"
        ]
      },
      "86": {
        "name": "data-name-spec_A0_I0",
        "symbols": [
          "'TIMES"
        ]
      },
      "87": {
        "name": "data-name-spec",
        "symbols": [
          "@module-ref"
        ]
      },
      "88": {
        "name": "provide-name-spec",
        "symbols": [
          "@name-spec"
        ]
      },
      "89": {
        "name": "provide-type-spec",
        "symbols": [
          "'TYPE",
          "@name-spec"
        ]
      },
      "90": {
        "name": "provide-data-spec",
        "symbols": [
          "'DATA",
          "@data-name-spec",
          "@provide-data-spec_I2?"
        ]
      },
      "91": {
        "name": "provide-data-spec_I2?",
        "symbols": []
      },
      "92": {
        "name": "provide-data-spec_I2?",
        "symbols": [
          "@provide-data-spec_I2"
        ]
      },
      "93": {
        "name": "provide-data-spec_I2",
        "symbols": [
          "@hiding-spec"
        ]
      },
      "94": {
        "name": "provide-module-spec",
        "symbols": [
          "'MODULE",
          "@name-spec"
        ]
      },
      "95": {
        "name": "hiding-spec",
        "symbols": [
          "'HIDING",
          "@hiding-spec_I1",
          "@hiding-spec_I2?",
          "'RPAREN"
        ]
      },
      "96": {
        "name": "hiding-spec_I1",
        "symbols": [
          "'PARENSPACE"
        ]
      },
      "97": {
        "name": "hiding-spec_I1",
        "symbols": [
          "'PARENNOSPACE"
        ]
      },
      "98": {
        "name": "hiding-spec_I2?",
        "symbols": []
      },
      "99": {
        "name": "hiding-spec_I2?",
        "symbols": [
          "@hiding-spec_I2"
        ]
      },
      "100": {
        "name": "hiding-spec_I2",
        "symbols": [
          "@hiding-spec_I2_I0*",
          "'NAME"
        ]
      },
      "101": {
        "name": "hiding-spec_I2_I0*",
        "symbols": []
      },
      "102": {
        "name": "hiding-spec_I2_I0*",
        "symbols": [
          "@hiding-spec_I2_I0*",
          "@hiding-spec_I2_I0"
        ]
      },
      "103": {
        "name": "hiding-spec_I2_I0",
        "symbols": [
          "'NAME",
          "'COMMA"
        ]
      },
      "104": {
        "name": "module-ref",
        "symbols": [
          "@module-ref_I0*",
          "'NAME"
        ]
      },
      "105": {
        "name": "module-ref_I0*",
        "symbols": []
      },
      "106": {
        "name": "module-ref_I0*",
        "symbols": [
          "@module-ref_I0*",
          "@module-ref_I0"
        ]
      },
      "107": {
        "name": "module-ref_I0",
        "symbols": [
          "'NAME",
          "'DOT"
        ]
      },
      "108": {
        "name": "comma-names",
        "symbols": [
          "'NAME",
          "@comma-names_I1*"
        ]
      },
      "109": {
        "name": "comma-names_I1*",
        "symbols": []
      },
      "110": {
        "name": "comma-names_I1*",
        "symbols": [
          "@comma-names_I1*",
          "@comma-names_I1"
        ]
      },
      "111": {
        "name": "comma-names_I1",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "112": {
        "name": "block",
        "symbols": [
          "@block_I0*"
        ]
      },
      "113": {
        "name": "block_I0*",
        "symbols": []
      },
      "114": {
        "name": "block_I0*",
        "symbols": [
          "@block_I0*",
          "@block_I0"
        ]
      },
      "115": {
        "name": "block_I0",
        "symbols": [
          "@stmt"
        ]
      },
      "116": {
        "name": "stmt",
        "symbols": [
          "@type-expr"
        ]
      },
      "117": {
        "name": "stmt",
        "symbols": [
          "@newtype-expr"
        ]
      },
      "118": {
        "name": "stmt",
        "symbols": [
          "@spy-stmt"
        ]
      },
      "119": {
        "name": "stmt",
        "symbols": [
          "@let-expr"
        ]
      },
      "120": {
        "name": "stmt",
        "symbols": [
          "@fun-expr"
        ]
      },
      "121": {
        "name": "stmt",
        "symbols": [
          "@data-expr"
        ]
      },
      "122": {
        "name": "stmt",
        "symbols": [
          "@when-expr"
        ]
      },
      "123": {
        "name": "stmt",
        "symbols": [
          "@var-expr"
        ]
      },
      "124": {
        "name": "stmt",
        "symbols": [
          "@rec-expr"
        ]
      },
      "125": {
        "name": "stmt",
        "symbols": [
          "@assign-expr"
        ]
      },
      "126": {
        "name": "stmt",
        "symbols": [
          "@check-test"
        ]
      },
      "127": {
        "name": "stmt",
        "symbols": [
          "@check-expr"
        ]
      },
      "128": {
        "name": "stmt",
        "symbols": [
          "@contract-stmt"
        ]
      },
      "129": {
        "name": "spy-stmt",
        "symbols": [
          "'SPY",
          "@spy-stmt_I1?",
          "'COLON",
          "@spy-stmt_I3?",
          "'END"
        ]
      },
      "130": {
        "name": "spy-stmt_I1?",
        "symbols": []
      },
      "131": {
        "name": "spy-stmt_I1?",
        "symbols": [
          "@spy-stmt_I1"
        ]
      },
      "132": {
        "name": "spy-stmt_I1",
        "symbols": [
          "@binop-expr"
        ]
      },
      "133": {
        "name": "spy-stmt_I3?",
        "symbols": []
      },
      "134": {
        "name": "spy-stmt_I3?",
        "symbols": [
          "@spy-stmt_I3"
        ]
      },
      "135": {
        "name": "spy-stmt_I3",
        "symbols": [
          "@spy-contents"
        ]
      },
      "136": {
        "name": "spy-contents",
        "symbols": [
          "@spy-field",
          "@spy-contents_I1*"
        ]
      },
      "137": {
        "name": "spy-contents_I1*",
        "symbols": []
      },
      "138": {
        "name": "spy-contents_I1*",
        "symbols": [
          "@spy-contents_I1*",
          "@spy-contents_I1"
        ]
      },
      "139": {
        "name": "spy-contents_I1",
        "symbols": [
          "'COMMA",
          "@spy-field"
        ]
      },
      "140": {
        "name": "spy-field",
        "symbols": [
          "@id-expr"
        ]
      },
      "141": {
        "name": "spy-field",
        "symbols": [
          "'NAME",
          "'COLON",
          "@binop-expr"
        ]
      },
      "142": {
        "name": "type-expr",
        "symbols": [
          "'TYPE",
          "'NAME",
          "@ty-params",
          "'EQUALS",
          "@ann"
        ]
      },
      "143": {
        "name": "newtype-expr",
        "symbols": [
          "'NEWTYPE",
          "'NAME",
          "'AS",
          "'NAME"
        ]
      },
      "144": {
        "name": "let-expr",
        "symbols": [
          "@toplevel-binding",
          "'EQUALS",
          "@binop-expr"
        ]
      },
      "145": {
        "name": "binding",
        "symbols": [
          "@name-binding"
        ]
      },
      "146": {
        "name": "binding",
        "symbols": [
          "@tuple-binding"
        ]
      },
      "147": {
        "name": "tuple-binding",
        "symbols": [
          "'LBRACE",
          "@tuple-binding_I1*",
          "@binding",
          "@tuple-binding_I3?",
          "'RBRACE",
          "@tuple-binding_I5?"
        ]
      },
      "148": {
        "name": "tuple-binding_I1*",
        "symbols": []
      },
      "149": {
        "name": "tuple-binding_I1*",
        "symbols": [
          "@tuple-binding_I1*",
          "@tuple-binding_I1"
        ]
      },
      "150": {
        "name": "tuple-binding_I1",
        "symbols": [
          "@binding",
          "'SEMI"
        ]
      },
      "151": {
        "name": "tuple-binding_I3?",
        "symbols": []
      },
      "152": {
        "name": "tuple-binding_I3?",
        "symbols": [
          "@tuple-binding_I3"
        ]
      },
      "153": {
        "name": "tuple-binding_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "154": {
        "name": "tuple-binding_I5?",
        "symbols": []
      },
      "155": {
        "name": "tuple-binding_I5?",
        "symbols": [
          "@tuple-binding_I5"
        ]
      },
      "156": {
        "name": "tuple-binding_I5",
        "symbols": [
          "'AS",
          "@name-binding"
        ]
      },
      "157": {
        "name": "name-binding",
        "symbols": [
          "@name-binding_I0?",
          "'NAME",
          "@name-binding_I2?"
        ]
      },
      "158": {
        "name": "name-binding_I0?",
        "symbols": []
      },
      "159": {
        "name": "name-binding_I0?",
        "symbols": [
          "@name-binding_I0"
        ]
      },
      "160": {
        "name": "name-binding_I0",
        "symbols": [
          "'SHADOW"
        ]
      },
      "161": {
        "name": "name-binding_I2?",
        "symbols": []
      },
      "162": {
        "name": "name-binding_I2?",
        "symbols": [
          "@name-binding_I2"
        ]
      },
      "163": {
        "name": "name-binding_I2",
        "symbols": [
          "'COLONCOLON",
          "@ann"
        ]
      },
      "164": {
        "name": "toplevel-binding",
        "symbols": [
          "@binding"
        ]
      },
      "165": {
        "name": "multi-let-expr",
        "symbols": [
          "'LET",
          "@let-binding",
          "@multi-let-expr_I2*",
          "@multi-let-expr_I3",
          "@block",
          "'END"
        ]
      },
      "166": {
        "name": "multi-let-expr_I2*",
        "symbols": []
      },
      "167": {
        "name": "multi-let-expr_I2*",
        "symbols": [
          "@multi-let-expr_I2*",
          "@multi-let-expr_I2"
        ]
      },
      "168": {
        "name": "multi-let-expr_I2",
        "symbols": [
          "'COMMA",
          "@let-binding"
        ]
      },
      "169": {
        "name": "multi-let-expr_I3",
        "symbols": [
          "'BLOCK"
        ]
      },
      "170": {
        "name": "multi-let-expr_I3",
        "symbols": [
          "'COLON"
        ]
      },
      "171": {
        "name": "let-binding",
        "symbols": [
          "@let-expr"
        ]
      },
      "172": {
        "name": "let-binding",
        "symbols": [
          "@var-expr"
        ]
      },
      "173": {
        "name": "letrec-expr",
        "symbols": [
          "'LETREC",
          "@let-expr",
          "@letrec-expr_I2*",
          "@letrec-expr_I3",
          "@block",
          "'END"
        ]
      },
      "174": {
        "name": "letrec-expr_I2*",
        "symbols": []
      },
      "175": {
        "name": "letrec-expr_I2*",
        "symbols": [
          "@letrec-expr_I2*",
          "@letrec-expr_I2"
        ]
      },
      "176": {
        "name": "letrec-expr_I2",
        "symbols": [
          "'COMMA",
          "@let-expr"
        ]
      },
      "177": {
        "name": "letrec-expr_I3",
        "symbols": [
          "'BLOCK"
        ]
      },
      "178": {
        "name": "letrec-expr_I3",
        "symbols": [
          "'COLON"
        ]
      },
      "179": {
        "name": "type-bind",
        "symbols": [
          "'NAME",
          "@ty-params",
          "'EQUALS",
          "@ann"
        ]
      },
      "180": {
        "name": "newtype-bind",
        "symbols": [
          "'NEWTYPE",
          "'NAME",
          "'AS",
          "'NAME"
        ]
      },
      "181": {
        "name": "type-let-bind",
        "symbols": [
          "@type-bind"
        ]
      },
      "182": {
        "name": "type-let-bind",
        "symbols": [
          "@newtype-bind"
        ]
      },
      "183": {
        "name": "type-let-expr",
        "symbols": [
          "'TYPE-LET",
          "@type-let-bind",
          "@type-let-expr_I2*",
          "@type-let-expr_I3",
          "@block",
          "'END"
        ]
      },
      "184": {
        "name": "type-let-expr_I2*",
        "symbols": []
      },
      "185": {
        "name": "type-let-expr_I2*",
        "symbols": [
          "@type-let-expr_I2*",
          "@type-let-expr_I2"
        ]
      },
      "186": {
        "name": "type-let-expr_I2",
        "symbols": [
          "'COMMA",
          "@type-let-bind"
        ]
      },
      "187": {
        "name": "type-let-expr_I3",
        "symbols": [
          "'BLOCK"
        ]
      },
      "188": {
        "name": "type-let-expr_I3",
        "symbols": [
          "'COLON"
        ]
      },
      "189": {
        "name": "contract-stmt",
        "symbols": [
          "'NAME",
          "'COLONCOLON",
          "@ty-params",
          "@contract-stmt_I3"
        ]
      },
      "190": {
        "name": "contract-stmt_I3",
        "symbols": [
          "@ann"
        ]
      },
      "191": {
        "name": "contract-stmt_I3",
        "symbols": [
          "@noparen-arrow-ann"
        ]
      },
      "192": {
        "name": "fun-expr",
        "symbols": [
          "'FUN",
          "'NAME",
          "@fun-header",
          "@fun-expr_I3",
          "@doc-string",
          "@block",
          "@where-clause",
          "'END"
        ]
      },
      "193": {
        "name": "fun-expr_I3",
        "symbols": [
          "'BLOCK"
        ]
      },
      "194": {
        "name": "fun-expr_I3",
        "symbols": [
          "'COLON"
        ]
      },
      "195": {
        "name": "fun-header",
        "symbols": [
          "@ty-params",
          "@args",
          "@return-ann"
        ]
      },
      "196": {
        "name": "ty-params",
        "symbols": [
          "@ty-params_I0?"
        ]
      },
      "197": {
        "name": "ty-params_I0?",
        "symbols": []
      },
      "198": {
        "name": "ty-params_I0?",
        "symbols": [
          "@ty-params_I0"
        ]
      },
      "199": {
        "name": "ty-params_I0",
        "symbols": [
          "@ty-params_I0_I0",
          "@comma-names",
          "@ty-params_I0_I2"
        ]
      },
      "200": {
        "name": "ty-params_I0_I0",
        "symbols": [
          "'LANGLE"
        ]
      },
      "201": {
        "name": "ty-params_I0_I0",
        "symbols": [
          "'LT"
        ]
      },
      "202": {
        "name": "ty-params_I0_I2",
        "symbols": [
          "'RANGLE"
        ]
      },
      "203": {
        "name": "ty-params_I0_I2",
        "symbols": [
          "'GT"
        ]
      },
      "204": {
        "name": "args",
        "symbols": [
          "@args_I0",
          "@args_I1?",
          "'RPAREN"
        ]
      },
      "205": {
        "name": "args_I0",
        "symbols": [
          "'PARENNOSPACE"
        ]
      },
      "206": {
        "name": "args_I0",
        "symbols": [
          "'PARENAFTERBRACE"
        ]
      },
      "207": {
        "name": "args_I1?",
        "symbols": []
      },
      "208": {
        "name": "args_I1?",
        "symbols": [
          "@args_I1"
        ]
      },
      "209": {
        "name": "args_I1",
        "symbols": [
          "@binding",
          "@args_I1_I1*"
        ]
      },
      "210": {
        "name": "args_I1_I1*",
        "symbols": []
      },
      "211": {
        "name": "args_I1_I1*",
        "symbols": [
          "@args_I1_I1*",
          "@args_I1_I1"
        ]
      },
      "212": {
        "name": "args_I1_I1",
        "symbols": [
          "'COMMA",
          "@binding"
        ]
      },
      "213": {
        "name": "return-ann",
        "symbols": [
          "@return-ann_I0?"
        ]
      },
      "214": {
        "name": "return-ann_I0?",
        "symbols": []
      },
      "215": {
        "name": "return-ann_I0?",
        "symbols": [
          "@return-ann_I0"
        ]
      },
      "216": {
        "name": "return-ann_I0",
        "symbols": [
          "'THINARROW",
          "@ann"
        ]
      },
      "217": {
        "name": "doc-string",
        "symbols": [
          "@doc-string_I0?"
        ]
      },
      "218": {
        "name": "doc-string_I0?",
        "symbols": []
      },
      "219": {
        "name": "doc-string_I0?",
        "symbols": [
          "@doc-string_I0"
        ]
      },
      "220": {
        "name": "doc-string_I0",
        "symbols": [
          "'DOC",
          "'STRING"
        ]
      },
      "221": {
        "name": "where-clause",
        "symbols": [
          "@where-clause_I0?"
        ]
      },
      "222": {
        "name": "where-clause_I0?",
        "symbols": []
      },
      "223": {
        "name": "where-clause_I0?",
        "symbols": [
          "@where-clause_I0"
        ]
      },
      "224": {
        "name": "where-clause_I0",
        "symbols": [
          "'WHERE",
          "@block"
        ]
      },
      "225": {
        "name": "check-expr",
        "symbols": [
          "@check-expr_A0_I0",
          "'STRING",
          "'COLON",
          "@block",
          "'END"
        ]
      },
      "226": {
        "name": "check-expr_A0_I0",
        "symbols": [
          "'CHECK"
        ]
      },
      "227": {
        "name": "check-expr_A0_I0",
        "symbols": [
          "'EXAMPLES"
        ]
      },
      "228": {
        "name": "check-expr",
        "symbols": [
          "@check-expr_A1_I0",
          "@block",
          "'END"
        ]
      },
      "229": {
        "name": "check-expr_A1_I0",
        "symbols": [
          "'CHECKCOLON"
        ]
      },
      "230": {
        "name": "check-expr_A1_I0",
        "symbols": [
          "'EXAMPLESCOLON"
        ]
      },
      "231": {
        "name": "check-test",
        "symbols": [
          "@binop-expr",
          "@check-op",
          "@check-test_A0_I2?",
          "@binop-expr",
          "@check-test_A0_I4?"
        ]
      },
      "232": {
        "name": "check-test_A0_I2?",
        "symbols": []
      },
      "233": {
        "name": "check-test_A0_I2?",
        "symbols": [
          "@check-test_A0_I2"
        ]
      },
      "234": {
        "name": "check-test_A0_I2",
        "symbols": [
          "'PERCENT",
          "@check-test_A0_I2_I1",
          "@binop-expr",
          "'RPAREN"
        ]
      },
      "235": {
        "name": "check-test_A0_I2_I1",
        "symbols": [
          "'PARENSPACE"
        ]
      },
      "236": {
        "name": "check-test_A0_I2_I1",
        "symbols": [
          "'PARENNOSPACE"
        ]
      },
      "237": {
        "name": "check-test_A0_I4?",
        "symbols": []
      },
      "238": {
        "name": "check-test_A0_I4?",
        "symbols": [
          "@check-test_A0_I4"
        ]
      },
      "239": {
        "name": "check-test_A0_I4",
        "symbols": [
          "'BECAUSE",
          "@binop-expr"
        ]
      },
      "240": {
        "name": "check-test",
        "symbols": [
          "@binop-expr",
          "@check-op-postfix",
          "@check-test_A1_I2?"
        ]
      },
      "241": {
        "name": "check-test_A1_I2?",
        "symbols": []
      },
      "242": {
        "name": "check-test_A1_I2?",
        "symbols": [
          "@check-test_A1_I2"
        ]
      },
      "243": {
        "name": "check-test_A1_I2",
        "symbols": [
          "'BECAUSE",
          "@binop-expr"
        ]
      },
      "244": {
        "name": "check-test",
        "symbols": [
          "@binop-expr"
        ]
      },
      "245": {
        "name": "data-expr",
        "symbols": [
          "'DATA",
          "'NAME",
          "@ty-params",
          "'COLON",
          "@data-expr_I4?",
          "@data-expr_I5*",
          "@data-sharing",
          "@where-clause",
          "'END"
        ]
      },
      "246": {
        "name": "data-expr_I4?",
        "symbols": []
      },
      "247": {
        "name": "data-expr_I4?",
        "symbols": [
          "@data-expr_I4"
        ]
      },
      "248": {
        "name": "data-expr_I4",
        "symbols": [
          "@first-data-variant"
        ]
      },
      "249": {
        "name": "data-expr_I5*",
        "symbols": []
      },
      "250": {
        "name": "data-expr_I5*",
        "symbols": [
          "@data-expr_I5*",
          "@data-expr_I5"
        ]
      },
      "251": {
        "name": "data-expr_I5",
        "symbols": [
          "@data-variant"
        ]
      },
      "252": {
        "name": "variant-constructor",
        "symbols": [
          "'NAME",
          "@variant-members"
        ]
      },
      "253": {
        "name": "first-data-variant",
        "symbols": [
          "@variant-constructor",
          "@data-with"
        ]
      },
      "254": {
        "name": "first-data-variant",
        "symbols": [
          "'NAME",
          "@data-with"
        ]
      },
      "255": {
        "name": "data-variant",
        "symbols": [
          "'BAR",
          "@variant-constructor",
          "@data-with"
        ]
      },
      "256": {
        "name": "data-variant",
        "symbols": [
          "'BAR",
          "'NAME",
          "@data-with"
        ]
      },
      "257": {
        "name": "variant-members",
        "symbols": [
          "'PARENNOSPACE",
          "@variant-members_I1?",
          "'RPAREN"
        ]
      },
      "258": {
        "name": "variant-members_I1?",
        "symbols": []
      },
      "259": {
        "name": "variant-members_I1?",
        "symbols": [
          "@variant-members_I1"
        ]
      },
      "260": {
        "name": "variant-members_I1",
        "symbols": [
          "@variant-member",
          "@variant-members_I1_I1*"
        ]
      },
      "261": {
        "name": "variant-members_I1_I1*",
        "symbols": []
      },
      "262": {
        "name": "variant-members_I1_I1*",
        "symbols": [
          "@variant-members_I1_I1*",
          "@variant-members_I1_I1"
        ]
      },
      "263": {
        "name": "variant-members_I1_I1",
        "symbols": [
          "'COMMA",
          "@variant-member"
        ]
      },
      "264": {
        "name": "variant-member",
        "symbols": [
          "@variant-member_I0?",
          "@binding"
        ]
      },
      "265": {
        "name": "variant-member_I0?",
        "symbols": []
      },
      "266": {
        "name": "variant-member_I0?",
        "symbols": [
          "@variant-member_I0"
        ]
      },
      "267": {
        "name": "variant-member_I0",
        "symbols": [
          "'REF"
        ]
      },
      "268": {
        "name": "data-with",
        "symbols": [
          "@data-with_I0?"
        ]
      },
      "269": {
        "name": "data-with_I0?",
        "symbols": []
      },
      "270": {
        "name": "data-with_I0?",
        "symbols": [
          "@data-with_I0"
        ]
      },
      "271": {
        "name": "data-with_I0",
        "symbols": [
          "'WITH",
          "@fields"
        ]
      },
      "272": {
        "name": "data-sharing",
        "symbols": [
          "@data-sharing_I0?"
        ]
      },
      "273": {
        "name": "data-sharing_I0?",
        "symbols": []
      },
      "274": {
        "name": "data-sharing_I0?",
        "symbols": [
          "@data-sharing_I0"
        ]
      },
      "275": {
        "name": "data-sharing_I0",
        "symbols": [
          "'SHARING",
          "@fields"
        ]
      },
      "276": {
        "name": "var-expr",
        "symbols": [
          "'VAR",
          "@toplevel-binding",
          "'EQUALS",
          "@binop-expr"
        ]
      },
      "277": {
        "name": "rec-expr",
        "symbols": [
          "'REC",
          "@toplevel-binding",
          "'EQUALS",
          "@binop-expr"
        ]
      },
      "278": {
        "name": "assign-expr",
        "symbols": [
          "'NAME",
          "'COLONEQUALS",
          "@binop-expr"
        ]
      },
      "279": {
        "name": "when-expr",
        "symbols": [
          "'WHEN",
          "@binop-expr",
          "@when-expr_I2",
          "@block",
          "'END"
        ]
      },
      "280": {
        "name": "when-expr_I2",
        "symbols": [
          "'BLOCK"
        ]
      },
      "281": {
        "name": "when-expr_I2",
        "symbols": [
          "'COLON"
        ]
      },
      "282": {
        "name": "binop-expr",
        "symbols": [
          "@expr",
          "@binop-expr_I1*"
        ]
      },
      "283": {
        "name": "binop-expr_I1*",
        "symbols": []
      },
      "284": {
        "name": "binop-expr_I1*",
        "symbols": [
          "@binop-expr_I1*",
          "@binop-expr_I1"
        ]
      },
      "285": {
        "name": "binop-expr_I1",
        "symbols": [
          "@binop",
          "@expr"
        ]
      },
      "286": {
        "name": "binop",
        "symbols": [
          "'PLUS"
        ]
      },
      "287": {
        "name": "binop",
        "symbols": [
          "'DASH"
        ]
      },
      "288": {
        "name": "binop",
        "symbols": [
          "'TIMES"
        ]
      },
      "289": {
        "name": "binop",
        "symbols": [
          "'SLASH"
        ]
      },
      "290": {
        "name": "binop",
        "symbols": [
          "'LEQ"
        ]
      },
      "291": {
        "name": "binop",
        "symbols": [
          "'GEQ"
        ]
      },
      "292": {
        "name": "binop",
        "symbols": [
          "'EQUALEQUAL"
        ]
      },
      "293": {
        "name": "binop",
        "symbols": [
          "'SPACESHIP"
        ]
      },
      "294": {
        "name": "binop",
        "symbols": [
          "'EQUALTILDE"
        ]
      },
      "295": {
        "name": "binop",
        "symbols": [
          "'NEQ"
        ]
      },
      "296": {
        "name": "binop",
        "symbols": [
          "'LT"
        ]
      },
      "297": {
        "name": "binop",
        "symbols": [
          "'GT"
        ]
      },
      "298": {
        "name": "binop",
        "symbols": [
          "'AND"
        ]
      },
      "299": {
        "name": "binop",
        "symbols": [
          "'OR"
        ]
      },
      "300": {
        "name": "binop",
        "symbols": [
          "'CARET"
        ]
      },
      "301": {
        "name": "check-op",
        "symbols": [
          "'IS"
        ]
      },
      "302": {
        "name": "check-op",
        "symbols": [
          "'ISEQUALEQUAL"
        ]
      },
      "303": {
        "name": "check-op",
        "symbols": [
          "'ISEQUALTILDE"
        ]
      },
      "304": {
        "name": "check-op",
        "symbols": [
          "'ISSPACESHIP"
        ]
      },
      "305": {
        "name": "check-op",
        "symbols": [
          "'ISROUGHLY"
        ]
      },
      "306": {
        "name": "check-op",
        "symbols": [
          "'ISNOT"
        ]
      },
      "307": {
        "name": "check-op",
        "symbols": [
          "'ISNOTEQUALEQUAL"
        ]
      },
      "308": {
        "name": "check-op",
        "symbols": [
          "'ISNOTEQUALTILDE"
        ]
      },
      "309": {
        "name": "check-op",
        "symbols": [
          "'ISNOTSPACESHIP"
        ]
      },
      "310": {
        "name": "check-op",
        "symbols": [
          "'RAISES"
        ]
      },
      "311": {
        "name": "check-op",
        "symbols": [
          "'RAISESOTHER"
        ]
      },
      "312": {
        "name": "check-op",
        "symbols": [
          "'SATISFIES"
        ]
      },
      "313": {
        "name": "check-op",
        "symbols": [
          "'SATISFIESNOT"
        ]
      },
      "314": {
        "name": "check-op",
        "symbols": [
          "'RAISESSATISFIES"
        ]
      },
      "315": {
        "name": "check-op",
        "symbols": [
          "'RAISESVIOLATES"
        ]
      },
      "316": {
        "name": "check-op-postfix",
        "symbols": [
          "'RAISESNOT"
        ]
      },
      "317": {
        "name": "expr",
        "symbols": [
          "@paren-expr"
        ]
      },
      "318": {
        "name": "expr",
        "symbols": [
          "@id-expr"
        ]
      },
      "319": {
        "name": "expr",
        "symbols": [
          "@prim-expr"
        ]
      },
      "320": {
        "name": "expr",
        "symbols": [
          "@lambda-expr"
        ]
      },
      "321": {
        "name": "expr",
        "symbols": [
          "@method-expr"
        ]
      },
      "322": {
        "name": "expr",
        "symbols": [
          "@app-expr"
        ]
      },
      "323": {
        "name": "expr",
        "symbols": [
          "@obj-expr"
        ]
      },
      "324": {
        "name": "expr",
        "symbols": [
          "@tuple-expr"
        ]
      },
      "325": {
        "name": "expr",
        "symbols": [
          "@tuple-get"
        ]
      },
      "326": {
        "name": "expr",
        "symbols": [
          "@dot-expr"
        ]
      },
      "327": {
        "name": "expr",
        "symbols": [
          "@template-expr"
        ]
      },
      "328": {
        "name": "expr",
        "symbols": [
          "@bracket-expr"
        ]
      },
      "329": {
        "name": "expr",
        "symbols": [
          "@get-bang-expr"
        ]
      },
      "330": {
        "name": "expr",
        "symbols": [
          "@update-expr"
        ]
      },
      "331": {
        "name": "expr",
        "symbols": [
          "@extend-expr"
        ]
      },
      "332": {
        "name": "expr",
        "symbols": [
          "@if-expr"
        ]
      },
      "333": {
        "name": "expr",
        "symbols": [
          "@if-pipe-expr"
        ]
      },
      "334": {
        "name": "expr",
        "symbols": [
          "@cases-expr"
        ]
      },
      "335": {
        "name": "expr",
        "symbols": [
          "@for-expr"
        ]
      },
      "336": {
        "name": "expr",
        "symbols": [
          "@user-block-expr"
        ]
      },
      "337": {
        "name": "expr",
        "symbols": [
          "@inst-expr"
        ]
      },
      "338": {
        "name": "expr",
        "symbols": [
          "@multi-let-expr"
        ]
      },
      "339": {
        "name": "expr",
        "symbols": [
          "@letrec-expr"
        ]
      },
      "340": {
        "name": "expr",
        "symbols": [
          "@type-let-expr"
        ]
      },
      "341": {
        "name": "expr",
        "symbols": [
          "@construct-expr"
        ]
      },
      "342": {
        "name": "expr",
        "symbols": [
          "@table-select"
        ]
      },
      "343": {
        "name": "expr",
        "symbols": [
          "@table-extend"
        ]
      },
      "344": {
        "name": "expr",
        "symbols": [
          "@table-filter"
        ]
      },
      "345": {
        "name": "expr",
        "symbols": [
          "@table-order"
        ]
      },
      "346": {
        "name": "expr",
        "symbols": [
          "@table-extract"
        ]
      },
      "347": {
        "name": "expr",
        "symbols": [
          "@table-update"
        ]
      },
      "348": {
        "name": "expr",
        "symbols": [
          "@table-expr"
        ]
      },
      "349": {
        "name": "expr",
        "symbols": [
          "@load-table-expr"
        ]
      },
      "350": {
        "name": "expr",
        "symbols": [
          "@reactor-expr"
        ]
      },
      "351": {
        "name": "template-expr",
        "symbols": [
          "'DOTDOTDOT"
        ]
      },
      "352": {
        "name": "bad-expr",
        "symbols": [
          "'UNTERMINATED-STRING"
        ]
      },
      "353": {
        "name": "bad-expr",
        "symbols": [
          "'UNTERMINATED-BLOCK-COMMENT"
        ]
      },
      "354": {
        "name": "bad-expr",
        "symbols": [
          "'BAD-OPER"
        ]
      },
      "355": {
        "name": "bad-expr",
        "symbols": [
          "'BAD-NUMBER"
        ]
      },
      "356": {
        "name": "bad-expr",
        "symbols": [
          "'UNKNOWN"
        ]
      },
      "357": {
        "name": "paren-expr",
        "symbols": [
          "@paren-expr_I0",
          "@binop-expr",
          "'RPAREN"
        ]
      },
      "358": {
        "name": "paren-expr_I0",
        "symbols": [
          "'PARENSPACE"
        ]
      },
      "359": {
        "name": "paren-expr_I0",
        "symbols": [
          "'PARENAFTERBRACE"
        ]
      },
      "360": {
        "name": "id-expr",
        "symbols": [
          "'NAME"
        ]
      },
      "361": {
        "name": "prim-expr",
        "symbols": [
          "@num-expr"
        ]
      },
      "362": {
        "name": "prim-expr",
        "symbols": [
          "@frac-expr"
        ]
      },
      "363": {
        "name": "prim-expr",
        "symbols": [
          "@rfrac-expr"
        ]
      },
      "364": {
        "name": "prim-expr",
        "symbols": [
          "@bool-expr"
        ]
      },
      "365": {
        "name": "prim-expr",
        "symbols": [
          "@string-expr"
        ]
      },
      "366": {
        "name": "num-expr",
        "symbols": [
          "'NUMBER"
        ]
      },
      "367": {
        "name": "frac-expr",
        "symbols": [
          "'RATIONAL"
        ]
      },
      "368": {
        "name": "rfrac-expr",
        "symbols": [
          "'ROUGHRATIONAL"
        ]
      },
      "369": {
        "name": "bool-expr",
        "symbols": [
          "'TRUE"
        ]
      },
      "370": {
        "name": "bool-expr",
        "symbols": [
          "'FALSE"
        ]
      },
      "371": {
        "name": "string-expr",
        "symbols": [
          "'STRING"
        ]
      },
      "372": {
        "name": "lambda-expr",
        "symbols": [
          "'LAM",
          "@fun-header",
          "@lambda-expr_A0_I2",
          "@doc-string",
          "@block",
          "@where-clause",
          "'END"
        ]
      },
      "373": {
        "name": "lambda-expr_A0_I2",
        "symbols": [
          "'BLOCK"
        ]
      },
      "374": {
        "name": "lambda-expr_A0_I2",
        "symbols": [
          "'COLON"
        ]
      },
      "375": {
        "name": "lambda-expr",
        "symbols": [
          "'LBRACE",
          "@fun-header",
          "@lambda-expr_A1_I2",
          "@doc-string",
          "@block",
          "@where-clause",
          "'RBRACE"
        ]
      },
      "376": {
        "name": "lambda-expr_A1_I2",
        "symbols": [
          "'BLOCK"
        ]
      },
      "377": {
        "name": "lambda-expr_A1_I2",
        "symbols": [
          "'COLON"
        ]
      },
      "378": {
        "name": "method-expr",
        "symbols": [
          "'METHOD",
          "@fun-header",
          "@method-expr_I2",
          "@doc-string",
          "@block",
          "@where-clause",
          "'END"
        ]
      },
      "379": {
        "name": "method-expr_I2",
        "symbols": [
          "'BLOCK"
        ]
      },
      "380": {
        "name": "method-expr_I2",
        "symbols": [
          "'COLON"
        ]
      },
      "381": {
        "name": "app-expr",
        "symbols": [
          "@expr",
          "@app-args"
        ]
      },
      "382": {
        "name": "app-args",
        "symbols": [
          "'PARENNOSPACE",
          "@opt-comma-binops",
          "'RPAREN"
        ]
      },
      "383": {
        "name": "opt-comma-binops",
        "symbols": [
          "@opt-comma-binops_I0?"
        ]
      },
      "384": {
        "name": "opt-comma-binops_I0?",
        "symbols": []
      },
      "385": {
        "name": "opt-comma-binops_I0?",
        "symbols": [
          "@opt-comma-binops_I0"
        ]
      },
      "386": {
        "name": "opt-comma-binops_I0",
        "symbols": [
          "@comma-binops"
        ]
      },
      "387": {
        "name": "comma-binops",
        "symbols": [
          "@binop-expr",
          "@comma-binops_I1*"
        ]
      },
      "388": {
        "name": "comma-binops_I1*",
        "symbols": []
      },
      "389": {
        "name": "comma-binops_I1*",
        "symbols": [
          "@comma-binops_I1*",
          "@comma-binops_I1"
        ]
      },
      "390": {
        "name": "comma-binops_I1",
        "symbols": [
          "'COMMA",
          "@binop-expr"
        ]
      },
      "391": {
        "name": "trailing-opt-comma-binops",
        "symbols": [
          "@trailing-opt-comma-binops_I0"
        ]
      },
      "392": {
        "name": "trailing-opt-comma-binops_I0",
        "symbols": [
          "@comma-binops",
          "@trailing-opt-comma-binops_I0_A0_I1?"
        ]
      },
      "393": {
        "name": "trailing-opt-comma-binops_I0_A0_I1?",
        "symbols": []
      },
      "394": {
        "name": "trailing-opt-comma-binops_I0_A0_I1?",
        "symbols": [
          "@trailing-opt-comma-binops_I0_A0_I1"
        ]
      },
      "395": {
        "name": "trailing-opt-comma-binops_I0_A0_I1",
        "symbols": [
          "'COMMA"
        ]
      },
      "396": {
        "name": "trailing-opt-comma-binops_I0",
        "symbols": []
      },
      "397": {
        "name": "inst-expr",
        "symbols": [
          "@expr",
          "'LANGLE",
          "@ann",
          "@inst-expr_I3*",
          "@inst-expr_I4"
        ]
      },
      "398": {
        "name": "inst-expr_I3*",
        "symbols": []
      },
      "399": {
        "name": "inst-expr_I3*",
        "symbols": [
          "@inst-expr_I3*",
          "@inst-expr_I3"
        ]
      },
      "400": {
        "name": "inst-expr_I3",
        "symbols": [
          "'COMMA",
          "@ann"
        ]
      },
      "401": {
        "name": "inst-expr_I4",
        "symbols": [
          "'RANGLE"
        ]
      },
      "402": {
        "name": "inst-expr_I4",
        "symbols": [
          "'GT"
        ]
      },
      "403": {
        "name": "tuple-expr",
        "symbols": [
          "'LBRACE",
          "@tuple-fields",
          "'RBRACE"
        ]
      },
      "404": {
        "name": "tuple-fields",
        "symbols": [
          "@binop-expr",
          "@tuple-fields_I1*",
          "@tuple-fields_I2?"
        ]
      },
      "405": {
        "name": "tuple-fields_I1*",
        "symbols": []
      },
      "406": {
        "name": "tuple-fields_I1*",
        "symbols": [
          "@tuple-fields_I1*",
          "@tuple-fields_I1"
        ]
      },
      "407": {
        "name": "tuple-fields_I1",
        "symbols": [
          "'SEMI",
          "@binop-expr"
        ]
      },
      "408": {
        "name": "tuple-fields_I2?",
        "symbols": []
      },
      "409": {
        "name": "tuple-fields_I2?",
        "symbols": [
          "@tuple-fields_I2"
        ]
      },
      "410": {
        "name": "tuple-fields_I2",
        "symbols": [
          "'SEMI"
        ]
      },
      "411": {
        "name": "tuple-get",
        "symbols": [
          "@expr",
          "'DOT",
          "'LBRACE",
          "'NUMBER",
          "'RBRACE"
        ]
      },
      "412": {
        "name": "obj-expr",
        "symbols": [
          "'LBRACE",
          "@obj-fields",
          "'RBRACE"
        ]
      },
      "413": {
        "name": "obj-expr",
        "symbols": [
          "'LBRACE",
          "'RBRACE"
        ]
      },
      "414": {
        "name": "obj-fields",
        "symbols": [
          "@obj-field",
          "@obj-fields_I1*",
          "@obj-fields_I2?"
        ]
      },
      "415": {
        "name": "obj-fields_I1*",
        "symbols": []
      },
      "416": {
        "name": "obj-fields_I1*",
        "symbols": [
          "@obj-fields_I1*",
          "@obj-fields_I1"
        ]
      },
      "417": {
        "name": "obj-fields_I1",
        "symbols": [
          "'COMMA",
          "@obj-field"
        ]
      },
      "418": {
        "name": "obj-fields_I2?",
        "symbols": []
      },
      "419": {
        "name": "obj-fields_I2?",
        "symbols": [
          "@obj-fields_I2"
        ]
      },
      "420": {
        "name": "obj-fields_I2",
        "symbols": [
          "'COMMA"
        ]
      },
      "421": {
        "name": "obj-field",
        "symbols": [
          "@key",
          "'COLON",
          "@binop-expr"
        ]
      },
      "422": {
        "name": "obj-field",
        "symbols": [
          "'REF",
          "@key",
          "@obj-field_A1_I2?",
          "'COLON",
          "@binop-expr"
        ]
      },
      "423": {
        "name": "obj-field_A1_I2?",
        "symbols": []
      },
      "424": {
        "name": "obj-field_A1_I2?",
        "symbols": [
          "@obj-field_A1_I2"
        ]
      },
      "425": {
        "name": "obj-field_A1_I2",
        "symbols": [
          "'COLONCOLON",
          "@ann"
        ]
      },
      "426": {
        "name": "obj-field",
        "symbols": [
          "'METHOD",
          "@key",
          "@fun-header",
          "@obj-field_A2_I3",
          "@doc-string",
          "@block",
          "@where-clause",
          "'END"
        ]
      },
      "427": {
        "name": "obj-field_A2_I3",
        "symbols": [
          "'BLOCK"
        ]
      },
      "428": {
        "name": "obj-field_A2_I3",
        "symbols": [
          "'COLON"
        ]
      },
      "429": {
        "name": "fields",
        "symbols": [
          "@field",
          "@fields_I1*",
          "@fields_I2?"
        ]
      },
      "430": {
        "name": "fields_I1*",
        "symbols": []
      },
      "431": {
        "name": "fields_I1*",
        "symbols": [
          "@fields_I1*",
          "@fields_I1"
        ]
      },
      "432": {
        "name": "fields_I1",
        "symbols": [
          "'COMMA",
          "@field"
        ]
      },
      "433": {
        "name": "fields_I2?",
        "symbols": []
      },
      "434": {
        "name": "fields_I2?",
        "symbols": [
          "@fields_I2"
        ]
      },
      "435": {
        "name": "fields_I2",
        "symbols": [
          "'COMMA"
        ]
      },
      "436": {
        "name": "field",
        "symbols": [
          "@key",
          "'COLON",
          "@binop-expr"
        ]
      },
      "437": {
        "name": "field",
        "symbols": [
          "'METHOD",
          "@key",
          "@fun-header",
          "@field_A1_I3",
          "@doc-string",
          "@block",
          "@where-clause",
          "'END"
        ]
      },
      "438": {
        "name": "field_A1_I3",
        "symbols": [
          "'BLOCK"
        ]
      },
      "439": {
        "name": "field_A1_I3",
        "symbols": [
          "'COLON"
        ]
      },
      "440": {
        "name": "key",
        "symbols": [
          "'NAME"
        ]
      },
      "441": {
        "name": "construct-expr",
        "symbols": [
          "'LBRACK",
          "@construct-modifier",
          "@binop-expr",
          "'COLON",
          "@trailing-opt-comma-binops",
          "'RBRACK"
        ]
      },
      "442": {
        "name": "construct-modifier",
        "symbols": []
      },
      "443": {
        "name": "construct-modifier",
        "symbols": [
          "'LAZY"
        ]
      },
      "444": {
        "name": "table-expr",
        "symbols": [
          "'TABLE",
          "@table-headers",
          "@table-rows",
          "'END"
        ]
      },
      "445": {
        "name": "table-headers",
        "symbols": [
          "@table-headers_I0?"
        ]
      },
      "446": {
        "name": "table-headers_I0?",
        "symbols": []
      },
      "447": {
        "name": "table-headers_I0?",
        "symbols": [
          "@table-headers_I0"
        ]
      },
      "448": {
        "name": "table-headers_I0",
        "symbols": [
          "@table-headers_I0_I0*",
          "@table-header"
        ]
      },
      "449": {
        "name": "table-headers_I0_I0*",
        "symbols": []
      },
      "450": {
        "name": "table-headers_I0_I0*",
        "symbols": [
          "@table-headers_I0_I0*",
          "@table-headers_I0_I0"
        ]
      },
      "451": {
        "name": "table-headers_I0_I0",
        "symbols": [
          "@list-table-header"
        ]
      },
      "452": {
        "name": "list-table-header",
        "symbols": [
          "@table-header",
          "'COMMA"
        ]
      },
      "453": {
        "name": "table-header",
        "symbols": [
          "'NAME",
          "@table-header_I1?"
        ]
      },
      "454": {
        "name": "table-header_I1?",
        "symbols": []
      },
      "455": {
        "name": "table-header_I1?",
        "symbols": [
          "@table-header_I1"
        ]
      },
      "456": {
        "name": "table-header_I1",
        "symbols": [
          "'COLONCOLON",
          "@ann"
        ]
      },
      "457": {
        "name": "table-rows",
        "symbols": [
          "@table-rows_I0?"
        ]
      },
      "458": {
        "name": "table-rows_I0?",
        "symbols": []
      },
      "459": {
        "name": "table-rows_I0?",
        "symbols": [
          "@table-rows_I0"
        ]
      },
      "460": {
        "name": "table-rows_I0",
        "symbols": [
          "@table-rows_I0_I0*",
          "@table-row"
        ]
      },
      "461": {
        "name": "table-rows_I0_I0*",
        "symbols": []
      },
      "462": {
        "name": "table-rows_I0_I0*",
        "symbols": [
          "@table-rows_I0_I0*",
          "@table-rows_I0_I0"
        ]
      },
      "463": {
        "name": "table-rows_I0_I0",
        "symbols": [
          "@table-row"
        ]
      },
      "464": {
        "name": "table-row",
        "symbols": [
          "'ROW",
          "@table-items"
        ]
      },
      "465": {
        "name": "table-items",
        "symbols": [
          "@table-items_I0?"
        ]
      },
      "466": {
        "name": "table-items_I0?",
        "symbols": []
      },
      "467": {
        "name": "table-items_I0?",
        "symbols": [
          "@table-items_I0"
        ]
      },
      "468": {
        "name": "table-items_I0",
        "symbols": [
          "@table-items_I0_I0*",
          "@binop-expr"
        ]
      },
      "469": {
        "name": "table-items_I0_I0*",
        "symbols": []
      },
      "470": {
        "name": "table-items_I0_I0*",
        "symbols": [
          "@table-items_I0_I0*",
          "@table-items_I0_I0"
        ]
      },
      "471": {
        "name": "table-items_I0_I0",
        "symbols": [
          "@list-table-item"
        ]
      },
      "472": {
        "name": "list-table-item",
        "symbols": [
          "@binop-expr",
          "'COMMA"
        ]
      },
      "473": {
        "name": "reactor-expr",
        "symbols": [
          "'REACTOR",
          "'COLON",
          "@fields",
          "'END"
        ]
      },
      "474": {
        "name": "dot-expr",
        "symbols": [
          "@expr",
          "'DOT",
          "'NAME"
        ]
      },
      "475": {
        "name": "bracket-expr",
        "symbols": [
          "@expr",
          "'LBRACK",
          "@binop-expr",
          "'RBRACK"
        ]
      },
      "476": {
        "name": "get-bang-expr",
        "symbols": [
          "@expr",
          "'BANG",
          "'NAME"
        ]
      },
      "477": {
        "name": "extend-expr",
        "symbols": [
          "@expr",
          "'DOT",
          "'LBRACE",
          "@fields",
          "'RBRACE"
        ]
      },
      "478": {
        "name": "update-expr",
        "symbols": [
          "@expr",
          "'BANG",
          "'LBRACE",
          "@fields",
          "'RBRACE"
        ]
      },
      "479": {
        "name": "if-expr",
        "symbols": [
          "'IF",
          "@binop-expr",
          "@if-expr_I2",
          "@block",
          "@if-expr_I4*",
          "@if-expr_I5?",
          "'END"
        ]
      },
      "480": {
        "name": "if-expr_I2",
        "symbols": [
          "'BLOCK"
        ]
      },
      "481": {
        "name": "if-expr_I2",
        "symbols": [
          "'COLON"
        ]
      },
      "482": {
        "name": "if-expr_I4*",
        "symbols": []
      },
      "483": {
        "name": "if-expr_I4*",
        "symbols": [
          "@if-expr_I4*",
          "@if-expr_I4"
        ]
      },
      "484": {
        "name": "if-expr_I4",
        "symbols": [
          "@else-if"
        ]
      },
      "485": {
        "name": "if-expr_I5?",
        "symbols": []
      },
      "486": {
        "name": "if-expr_I5?",
        "symbols": [
          "@if-expr_I5"
        ]
      },
      "487": {
        "name": "if-expr_I5",
        "symbols": [
          "'ELSECOLON",
          "@block"
        ]
      },
      "488": {
        "name": "else-if",
        "symbols": [
          "'ELSEIF",
          "@binop-expr",
          "'COLON",
          "@block"
        ]
      },
      "489": {
        "name": "if-pipe-expr",
        "symbols": [
          "'ASK",
          "@if-pipe-expr_I1",
          "@if-pipe-expr_I2*",
          "@if-pipe-expr_I3?",
          "'END"
        ]
      },
      "490": {
        "name": "if-pipe-expr_I1",
        "symbols": [
          "'BLOCK"
        ]
      },
      "491": {
        "name": "if-pipe-expr_I1",
        "symbols": [
          "'COLON"
        ]
      },
      "492": {
        "name": "if-pipe-expr_I2*",
        "symbols": []
      },
      "493": {
        "name": "if-pipe-expr_I2*",
        "symbols": [
          "@if-pipe-expr_I2*",
          "@if-pipe-expr_I2"
        ]
      },
      "494": {
        "name": "if-pipe-expr_I2",
        "symbols": [
          "@if-pipe-branch"
        ]
      },
      "495": {
        "name": "if-pipe-expr_I3?",
        "symbols": []
      },
      "496": {
        "name": "if-pipe-expr_I3?",
        "symbols": [
          "@if-pipe-expr_I3"
        ]
      },
      "497": {
        "name": "if-pipe-expr_I3",
        "symbols": [
          "'BAR",
          "'OTHERWISECOLON",
          "@block"
        ]
      },
      "498": {
        "name": "if-pipe-branch",
        "symbols": [
          "'BAR",
          "@binop-expr",
          "'THENCOLON",
          "@block"
        ]
      },
      "499": {
        "name": "cases-binding",
        "symbols": [
          "@cases-binding_I0?",
          "@binding"
        ]
      },
      "500": {
        "name": "cases-binding_I0?",
        "symbols": []
      },
      "501": {
        "name": "cases-binding_I0?",
        "symbols": [
          "@cases-binding_I0"
        ]
      },
      "502": {
        "name": "cases-binding_I0",
        "symbols": [
          "'REF"
        ]
      },
      "503": {
        "name": "cases-args",
        "symbols": [
          "'PARENNOSPACE",
          "@cases-args_I1?",
          "'RPAREN"
        ]
      },
      "504": {
        "name": "cases-args_I1?",
        "symbols": []
      },
      "505": {
        "name": "cases-args_I1?",
        "symbols": [
          "@cases-args_I1"
        ]
      },
      "506": {
        "name": "cases-args_I1",
        "symbols": [
          "@cases-binding",
          "@cases-args_I1_I1*"
        ]
      },
      "507": {
        "name": "cases-args_I1_I1*",
        "symbols": []
      },
      "508": {
        "name": "cases-args_I1_I1*",
        "symbols": [
          "@cases-args_I1_I1*",
          "@cases-args_I1_I1"
        ]
      },
      "509": {
        "name": "cases-args_I1_I1",
        "symbols": [
          "'COMMA",
          "@cases-binding"
        ]
      },
      "510": {
        "name": "cases-expr",
        "symbols": [
          "'CASES",
          "@cases-expr_I1",
          "@ann",
          "'RPAREN",
          "@binop-expr",
          "@cases-expr_I5",
          "@cases-expr_I6*",
          "@cases-expr_I7?",
          "'END"
        ]
      },
      "511": {
        "name": "cases-expr_I1",
        "symbols": [
          "'PARENSPACE"
        ]
      },
      "512": {
        "name": "cases-expr_I1",
        "symbols": [
          "'PARENNOSPACE"
        ]
      },
      "513": {
        "name": "cases-expr_I5",
        "symbols": [
          "'BLOCK"
        ]
      },
      "514": {
        "name": "cases-expr_I5",
        "symbols": [
          "'COLON"
        ]
      },
      "515": {
        "name": "cases-expr_I6*",
        "symbols": []
      },
      "516": {
        "name": "cases-expr_I6*",
        "symbols": [
          "@cases-expr_I6*",
          "@cases-expr_I6"
        ]
      },
      "517": {
        "name": "cases-expr_I6",
        "symbols": [
          "@cases-branch"
        ]
      },
      "518": {
        "name": "cases-expr_I7?",
        "symbols": []
      },
      "519": {
        "name": "cases-expr_I7?",
        "symbols": [
          "@cases-expr_I7"
        ]
      },
      "520": {
        "name": "cases-expr_I7",
        "symbols": [
          "'BAR",
          "'ELSE",
          "'THICKARROW",
          "@block"
        ]
      },
      "521": {
        "name": "cases-branch",
        "symbols": [
          "'BAR",
          "'NAME",
          "@cases-branch_I2?",
          "'THICKARROW",
          "@block"
        ]
      },
      "522": {
        "name": "cases-branch_I2?",
        "symbols": []
      },
      "523": {
        "name": "cases-branch_I2?",
        "symbols": [
          "@cases-branch_I2"
        ]
      },
      "524": {
        "name": "cases-branch_I2",
        "symbols": [
          "@cases-args"
        ]
      },
      "525": {
        "name": "for-bind",
        "symbols": [
          "@binding",
          "'FROM",
          "@binop-expr"
        ]
      },
      "526": {
        "name": "for-expr",
        "symbols": [
          "'FOR",
          "@expr",
          "'PARENNOSPACE",
          "@for-expr_I3?",
          "'RPAREN",
          "@return-ann",
          "@for-expr_I6",
          "@block",
          "'END"
        ]
      },
      "527": {
        "name": "for-expr_I3?",
        "symbols": []
      },
      "528": {
        "name": "for-expr_I3?",
        "symbols": [
          "@for-expr_I3"
        ]
      },
      "529": {
        "name": "for-expr_I3",
        "symbols": [
          "@for-bind",
          "@for-expr_I3_I1*"
        ]
      },
      "530": {
        "name": "for-expr_I3_I1*",
        "symbols": []
      },
      "531": {
        "name": "for-expr_I3_I1*",
        "symbols": [
          "@for-expr_I3_I1*",
          "@for-expr_I3_I1"
        ]
      },
      "532": {
        "name": "for-expr_I3_I1",
        "symbols": [
          "'COMMA",
          "@for-bind"
        ]
      },
      "533": {
        "name": "for-expr_I6",
        "symbols": [
          "'BLOCK"
        ]
      },
      "534": {
        "name": "for-expr_I6",
        "symbols": [
          "'COLON"
        ]
      },
      "535": {
        "name": "column-order",
        "symbols": [
          "'NAME",
          "@column-order_I1"
        ]
      },
      "536": {
        "name": "column-order_I1",
        "symbols": [
          "'ASCENDING"
        ]
      },
      "537": {
        "name": "column-order_I1",
        "symbols": [
          "'DESCENDING"
        ]
      },
      "538": {
        "name": "table-select",
        "symbols": [
          "'TABLE-SELECT",
          "'NAME",
          "@table-select_I2*",
          "'FROM",
          "@expr",
          "'END"
        ]
      },
      "539": {
        "name": "table-select_I2*",
        "symbols": []
      },
      "540": {
        "name": "table-select_I2*",
        "symbols": [
          "@table-select_I2*",
          "@table-select_I2"
        ]
      },
      "541": {
        "name": "table-select_I2",
        "symbols": [
          "'COMMA",
          "'NAME"
        ]
      },
      "542": {
        "name": "table-filter",
        "symbols": [
          "'TABLE-FILTER",
          "@expr",
          "@table-filter_I2?",
          "'COLON",
          "@binop-expr",
          "'END"
        ]
      },
      "543": {
        "name": "table-filter_I2?",
        "symbols": []
      },
      "544": {
        "name": "table-filter_I2?",
        "symbols": [
          "@table-filter_I2"
        ]
      },
      "545": {
        "name": "table-filter_I2",
        "symbols": [
          "'USING",
          "@binding",
          "@table-filter_I2_I2*"
        ]
      },
      "546": {
        "name": "table-filter_I2_I2*",
        "symbols": []
      },
      "547": {
        "name": "table-filter_I2_I2*",
        "symbols": [
          "@table-filter_I2_I2*",
          "@table-filter_I2_I2"
        ]
      },
      "548": {
        "name": "table-filter_I2_I2",
        "symbols": [
          "'COMMA",
          "@binding"
        ]
      },
      "549": {
        "name": "table-order",
        "symbols": [
          "'TABLE-ORDER",
          "@expr",
          "'COLON",
          "@column-order",
          "@table-order_I4*",
          "'END"
        ]
      },
      "550": {
        "name": "table-order_I4*",
        "symbols": []
      },
      "551": {
        "name": "table-order_I4*",
        "symbols": [
          "@table-order_I4*",
          "@table-order_I4"
        ]
      },
      "552": {
        "name": "table-order_I4",
        "symbols": [
          "'COMMA",
          "@column-order"
        ]
      },
      "553": {
        "name": "table-extract",
        "symbols": [
          "'TABLE-EXTRACT",
          "'NAME",
          "'FROM",
          "@expr",
          "'END"
        ]
      },
      "554": {
        "name": "table-update",
        "symbols": [
          "'TABLE-UPDATE",
          "@expr",
          "@table-update_I2?",
          "'COLON",
          "@obj-fields",
          "'END"
        ]
      },
      "555": {
        "name": "table-update_I2?",
        "symbols": []
      },
      "556": {
        "name": "table-update_I2?",
        "symbols": [
          "@table-update_I2"
        ]
      },
      "557": {
        "name": "table-update_I2",
        "symbols": [
          "'USING",
          "@binding",
          "@table-update_I2_I2*"
        ]
      },
      "558": {
        "name": "table-update_I2_I2*",
        "symbols": []
      },
      "559": {
        "name": "table-update_I2_I2*",
        "symbols": [
          "@table-update_I2_I2*",
          "@table-update_I2_I2"
        ]
      },
      "560": {
        "name": "table-update_I2_I2",
        "symbols": [
          "'COMMA",
          "@binding"
        ]
      },
      "561": {
        "name": "table-extend",
        "symbols": [
          "'TABLE-EXTEND",
          "@expr",
          "@table-extend_I2?",
          "'COLON",
          "@table-extend-fields",
          "'END"
        ]
      },
      "562": {
        "name": "table-extend_I2?",
        "symbols": []
      },
      "563": {
        "name": "table-extend_I2?",
        "symbols": [
          "@table-extend_I2"
        ]
      },
      "564": {
        "name": "table-extend_I2",
        "symbols": [
          "'USING",
          "@binding",
          "@table-extend_I2_I2*"
        ]
      },
      "565": {
        "name": "table-extend_I2_I2*",
        "symbols": []
      },
      "566": {
        "name": "table-extend_I2_I2*",
        "symbols": [
          "@table-extend_I2_I2*",
          "@table-extend_I2_I2"
        ]
      },
      "567": {
        "name": "table-extend_I2_I2",
        "symbols": [
          "'COMMA",
          "@binding"
        ]
      },
      "568": {
        "name": "table-extend-fields",
        "symbols": [
          "@table-extend-fields_I0*",
          "@table-extend-field",
          "@table-extend-fields_I2?"
        ]
      },
      "569": {
        "name": "table-extend-fields_I0*",
        "symbols": []
      },
      "570": {
        "name": "table-extend-fields_I0*",
        "symbols": [
          "@table-extend-fields_I0*",
          "@table-extend-fields_I0"
        ]
      },
      "571": {
        "name": "table-extend-fields_I0",
        "symbols": [
          "@list-table-extend-field"
        ]
      },
      "572": {
        "name": "table-extend-fields_I2?",
        "symbols": []
      },
      "573": {
        "name": "table-extend-fields_I2?",
        "symbols": [
          "@table-extend-fields_I2"
        ]
      },
      "574": {
        "name": "table-extend-fields_I2",
        "symbols": [
          "'COMMA"
        ]
      },
      "575": {
        "name": "list-table-extend-field",
        "symbols": [
          "@table-extend-field",
          "'COMMA"
        ]
      },
      "576": {
        "name": "table-extend-field",
        "symbols": [
          "@key",
          "@table-extend-field_A0_I1?",
          "'COLON",
          "@binop-expr"
        ]
      },
      "577": {
        "name": "table-extend-field_A0_I1?",
        "symbols": []
      },
      "578": {
        "name": "table-extend-field_A0_I1?",
        "symbols": [
          "@table-extend-field_A0_I1"
        ]
      },
      "579": {
        "name": "table-extend-field_A0_I1",
        "symbols": [
          "'COLONCOLON",
          "@ann"
        ]
      },
      "580": {
        "name": "table-extend-field",
        "symbols": [
          "@key",
          "@table-extend-field_A1_I1?",
          "'COLON",
          "@expr",
          "'OF",
          "'NAME"
        ]
      },
      "581": {
        "name": "table-extend-field_A1_I1?",
        "symbols": []
      },
      "582": {
        "name": "table-extend-field_A1_I1?",
        "symbols": [
          "@table-extend-field_A1_I1"
        ]
      },
      "583": {
        "name": "table-extend-field_A1_I1",
        "symbols": [
          "'COLONCOLON",
          "@ann"
        ]
      },
      "584": {
        "name": "load-table-expr",
        "symbols": [
          "'LOAD-TABLE",
          "'COLON",
          "@table-headers",
          "@load-table-expr_I3?",
          "'END"
        ]
      },
      "585": {
        "name": "load-table-expr_I3?",
        "symbols": []
      },
      "586": {
        "name": "load-table-expr_I3?",
        "symbols": [
          "@load-table-expr_I3"
        ]
      },
      "587": {
        "name": "load-table-expr_I3",
        "symbols": [
          "@load-table-specs"
        ]
      },
      "588": {
        "name": "load-table-specs",
        "symbols": [
          "@load-table-specs_I0*",
          "@load-table-spec"
        ]
      },
      "589": {
        "name": "load-table-specs_I0*",
        "symbols": []
      },
      "590": {
        "name": "load-table-specs_I0*",
        "symbols": [
          "@load-table-specs_I0*",
          "@load-table-specs_I0"
        ]
      },
      "591": {
        "name": "load-table-specs_I0",
        "symbols": [
          "@load-table-spec"
        ]
      },
      "592": {
        "name": "load-table-spec",
        "symbols": [
          "'SOURCECOLON",
          "@expr"
        ]
      },
      "593": {
        "name": "load-table-spec",
        "symbols": [
          "'SANITIZE",
          "'NAME",
          "'USING",
          "@expr"
        ]
      },
      "594": {
        "name": "user-block-expr",
        "symbols": [
          "'BLOCK",
          "@block",
          "'END"
        ]
      },
      "595": {
        "name": "ann",
        "symbols": [
          "@name-ann"
        ]
      },
      "596": {
        "name": "ann",
        "symbols": [
          "@record-ann"
        ]
      },
      "597": {
        "name": "ann",
        "symbols": [
          "@arrow-ann"
        ]
      },
      "598": {
        "name": "ann",
        "symbols": [
          "@app-ann"
        ]
      },
      "599": {
        "name": "ann",
        "symbols": [
          "@pred-ann"
        ]
      },
      "600": {
        "name": "ann",
        "symbols": [
          "@dot-ann"
        ]
      },
      "601": {
        "name": "ann",
        "symbols": [
          "@tuple-ann"
        ]
      },
      "602": {
        "name": "name-ann",
        "symbols": [
          "'NAME"
        ]
      },
      "603": {
        "name": "comma-ann-field",
        "symbols": [
          "@ann-field",
          "@comma-ann-field_I1*"
        ]
      },
      "604": {
        "name": "comma-ann-field_I1*",
        "symbols": []
      },
      "605": {
        "name": "comma-ann-field_I1*",
        "symbols": [
          "@comma-ann-field_I1*",
          "@comma-ann-field_I1"
        ]
      },
      "606": {
        "name": "comma-ann-field_I1",
        "symbols": [
          "'COMMA",
          "@ann-field"
        ]
      },
      "607": {
        "name": "trailing-opt-comma-ann-field",
        "symbols": [
          "@trailing-opt-comma-ann-field_I0"
        ]
      },
      "608": {
        "name": "trailing-opt-comma-ann-field_I0",
        "symbols": [
          "@comma-ann-field",
          "@trailing-opt-comma-ann-field_I0_A0_I1?"
        ]
      },
      "609": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1?",
        "symbols": []
      },
      "610": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1?",
        "symbols": [
          "@trailing-opt-comma-ann-field_I0_A0_I1"
        ]
      },
      "611": {
        "name": "trailing-opt-comma-ann-field_I0_A0_I1",
        "symbols": [
          "'COMMA"
        ]
      },
      "612": {
        "name": "trailing-opt-comma-ann-field_I0",
        "symbols": []
      },
      "613": {
        "name": "record-ann",
        "symbols": [
          "'LBRACE",
          "@trailing-opt-comma-ann-field",
          "'RBRACE"
        ]
      },
      "614": {
        "name": "ann-field",
        "symbols": [
          "'NAME",
          "'COLONCOLON",
          "@ann"
        ]
      },
      "615": {
        "name": "tuple-ann",
        "symbols": [
          "'LBRACE",
          "@ann",
          "@tuple-ann_I2*",
          "@tuple-ann_I3?",
          "'RBRACE"
        ]
      },
      "616": {
        "name": "tuple-ann_I2*",
        "symbols": []
      },
      "617": {
        "name": "tuple-ann_I2*",
        "symbols": [
          "@tuple-ann_I2*",
          "@tuple-ann_I2"
        ]
      },
      "618": {
        "name": "tuple-ann_I2",
        "symbols": [
          "'SEMI",
          "@ann"
        ]
      },
      "619": {
        "name": "tuple-ann_I3?",
        "symbols": []
      },
      "620": {
        "name": "tuple-ann_I3?",
        "symbols": [
          "@tuple-ann_I3"
        ]
      },
      "621": {
        "name": "tuple-ann_I3",
        "symbols": [
          "'SEMI"
        ]
      },
      "622": {
        "name": "noparen-arrow-ann",
        "symbols": [
          "@noparen-arrow-ann_I0?",
          "'THINARROW",
          "@ann"
        ]
      },
      "623": {
        "name": "noparen-arrow-ann_I0?",
        "symbols": []
      },
      "624": {
        "name": "noparen-arrow-ann_I0?",
        "symbols": [
          "@noparen-arrow-ann_I0"
        ]
      },
      "625": {
        "name": "noparen-arrow-ann_I0",
        "symbols": [
          "@arrow-ann-args"
        ]
      },
      "626": {
        "name": "arrow-ann-args",
        "symbols": [
          "@comma-anns"
        ]
      },
      "627": {
        "name": "arrow-ann-args",
        "symbols": [
          "@arrow-ann-args_A1_I0",
          "@comma-ann-field",
          "'RPAREN"
        ]
      },
      "628": {
        "name": "arrow-ann-args_A1_I0",
        "symbols": [
          "'PARENSPACE"
        ]
      },
      "629": {
        "name": "arrow-ann-args_A1_I0",
        "symbols": [
          "'PARENNOSPACE"
        ]
      },
      "630": {
        "name": "arrow-ann-args_A1_I0",
        "symbols": [
          "'PARENAFTERBRACE"
        ]
      },
      "631": {
        "name": "arrow-ann",
        "symbols": [
          "@arrow-ann_I0",
          "@arrow-ann_I1?",
          "'THINARROW",
          "@ann",
          "'RPAREN"
        ]
      },
      "632": {
        "name": "arrow-ann_I0",
        "symbols": [
          "'PARENSPACE"
        ]
      },
      "633": {
        "name": "arrow-ann_I0",
        "symbols": [
          "'PARENNOSPACE"
        ]
      },
      "634": {
        "name": "arrow-ann_I0",
        "symbols": [
          "'PARENAFTERBRACE"
        ]
      },
      "635": {
        "name": "arrow-ann_I1?",
        "symbols": []
      },
      "636": {
        "name": "arrow-ann_I1?",
        "symbols": [
          "@arrow-ann_I1"
        ]
      },
      "637": {
        "name": "arrow-ann_I1",
        "symbols": [
          "@arrow-ann-args"
        ]
      },
      "638": {
        "name": "app-ann",
        "symbols": [
          "@app-ann_I0",
          "'LANGLE",
          "@comma-anns",
          "@app-ann_I3"
        ]
      },
      "639": {
        "name": "app-ann_I0",
        "symbols": [
          "@name-ann"
        ]
      },
      "640": {
        "name": "app-ann_I0",
        "symbols": [
          "@dot-ann"
        ]
      },
      "641": {
        "name": "app-ann_I3",
        "symbols": [
          "'RANGLE"
        ]
      },
      "642": {
        "name": "app-ann_I3",
        "symbols": [
          "'GT"
        ]
      },
      "643": {
        "name": "comma-anns",
        "symbols": [
          "@ann",
          "@comma-anns_I1*"
        ]
      },
      "644": {
        "name": "comma-anns_I1*",
        "symbols": []
      },
      "645": {
        "name": "comma-anns_I1*",
        "symbols": [
          "@comma-anns_I1*",
          "@comma-anns_I1"
        ]
      },
      "646": {
        "name": "comma-anns_I1",
        "symbols": [
          "'COMMA",
          "@ann"
        ]
      },
      "647": {
        "name": "pred-ann",
        "symbols": [
          "@ann",
          "'PERCENT",
          "@pred-ann_I2",
          "@id-expr",
          "'RPAREN"
        ]
      },
      "648": {
        "name": "pred-ann_I2",
        "symbols": [
          "'PARENSPACE"
        ]
      },
      "649": {
        "name": "pred-ann_I2",
        "symbols": [
          "'PARENNOSPACE"
        ]
      },
      "650": {
        "name": "dot-ann",
        "symbols": [
          "'NAME",
          "'DOT",
          "'NAME"
        ]
      },
      "651": {
        "name": "START",
        "symbols": [
          "@program"
        ]
      },
      "848": {
        "position": 1,
        "like": 0
      },
      "941": {
        "position": 1,
        "like": 1
      },
      "1126": {
        "position": 1,
        "like": 2
      },
      "1725": {
        "position": 2,
        "like": 0
      },
      "1727": {
        "position": 1,
        "like": 112
      },
      "9748": {
        "position": 2,
        "like": 1
      },
      "9794": {
        "position": 1,
        "like": 6
      },
      "10123": {
        "position": 2,
        "like": 4
      },
      "10174": {
        "position": 1,
        "like": 5
      },
      "10225": {
        "position": 1,
        "like": 41
      },
      "10276": {
        "position": 1,
        "like": 42
      },
      "10327": {
        "position": 1,
        "like": 43
      },
      "11082": {
        "position": 1,
        "like": 360
      },
      "11253": {
        "position": 1,
        "like": 371
      },
      "11426": {
        "position": 1,
        "like": 115
      },
      "11472": {
        "position": 1,
        "like": 358
      },
      "11504": {
        "position": 2,
        "like": 114
      },
      "11550": {
        "position": 1,
        "like": 116
      },
      "11596": {
        "position": 1,
        "like": 117
      },
      "11642": {
        "position": 1,
        "like": 118
      },
      "11688": {
        "position": 1,
        "like": 119
      },
      "11734": {
        "position": 1,
        "like": 120
      },
      "11780": {
        "position": 1,
        "like": 121
      },
      "11826": {
        "position": 1,
        "like": 122
      },
      "11872": {
        "position": 1,
        "like": 123
      },
      "11918": {
        "position": 1,
        "like": 124
      },
      "11964": {
        "position": 1,
        "like": 125
      },
      "12010": {
        "position": 1,
        "like": 126
      },
      "12056": {
        "position": 1,
        "like": 127
      },
      "12102": {
        "position": 1,
        "like": 128
      },
      "12280": {
        "position": 1,
        "like": 244
      },
      "12942": {
        "position": 1,
        "like": 318
      },
      "13115": {
        "position": 1,
        "like": 164
      },
      "13117": {
        "position": 1,
        "like": 145
      },
      "13119": {
        "position": 1,
        "like": 146
      },
      "13638": {
        "position": 1,
        "like": 159
      },
      "13640": {
        "position": 1,
        "like": 160
      },
      "13642": {
        "position": 1,
        "like": 338
      },
      "13898": {
        "position": 1,
        "like": 339
      },
      "14060": {
        "position": 1,
        "like": 340
      },
      "14280": {
        "position": 1,
        "like": 359
      },
      "14358": {
        "position": 1,
        "like": 226
      },
      "14360": {
        "position": 1,
        "like": 227
      },
      "14408": {
        "position": 1,
        "like": 229
      },
      "14454": {
        "position": 1,
        "like": 230
      },
      "14638": {
        "position": 1,
        "like": 282
      },
      "15580": {
        "position": 1,
        "like": 317
      },
      "15661": {
        "position": 1,
        "like": 319
      },
      "15742": {
        "position": 1,
        "like": 320
      },
      "15823": {
        "position": 1,
        "like": 321
      },
      "15904": {
        "position": 1,
        "like": 322
      },
      "15985": {
        "position": 1,
        "like": 323
      },
      "16066": {
        "position": 1,
        "like": 324
      },
      "16147": {
        "position": 1,
        "like": 325
      },
      "16228": {
        "position": 1,
        "like": 326
      },
      "16309": {
        "position": 1,
        "like": 327
      },
      "16390": {
        "position": 1,
        "like": 328
      },
      "16471": {
        "position": 1,
        "like": 329
      },
      "16552": {
        "position": 1,
        "like": 330
      },
      "16633": {
        "position": 1,
        "like": 331
      },
      "16714": {
        "position": 1,
        "like": 332
      },
      "16795": {
        "position": 1,
        "like": 333
      },
      "16876": {
        "position": 1,
        "like": 334
      },
      "16957": {
        "position": 1,
        "like": 335
      },
      "17038": {
        "position": 1,
        "like": 336
      },
      "17119": {
        "position": 1,
        "like": 337
      },
      "17200": {
        "position": 1,
        "like": 341
      },
      "17281": {
        "position": 1,
        "like": 342
      },
      "17362": {
        "position": 1,
        "like": 343
      },
      "17443": {
        "position": 1,
        "like": 344
      },
      "17524": {
        "position": 1,
        "like": 345
      },
      "17605": {
        "position": 1,
        "like": 346
      },
      "17686": {
        "position": 1,
        "like": 347
      },
      "17767": {
        "position": 1,
        "like": 348
      },
      "17848": {
        "position": 1,
        "like": 349
      },
      "17929": {
        "position": 1,
        "like": 350
      },
      "18010": {
        "position": 1,
        "like": 351
      },
      "18253": {
        "position": 1,
        "like": 361
      },
      "18334": {
        "position": 1,
        "like": 362
      },
      "18415": {
        "position": 1,
        "like": 363
      },
      "18496": {
        "position": 1,
        "like": 364
      },
      "18577": {
        "position": 1,
        "like": 365
      },
      "18658": {
        "position": 1,
        "like": 366
      },
      "18739": {
        "position": 1,
        "like": 367
      },
      "18820": {
        "position": 1,
        "like": 368
      },
      "18901": {
        "position": 1,
        "like": 369
      },
      "18982": {
        "position": 1,
        "like": 370
      },
      "20525": {
        "position": 2,
        "like": 8
      },
      "20573": {
        "position": 1,
        "like": 9
      },
      "21115": {
        "position": 2,
        "like": 45
      },
      "21166": {
        "position": 1,
        "like": 46
      },
      "21217": {
        "position": 1,
        "like": 47
      },
      "21376": {
        "position": 1,
        "like": 50
      },
      "21427": {
        "position": 1,
        "like": 51
      },
      "21478": {
        "position": 2,
        "like": 48
      },
      "21529": {
        "position": 2,
        "like": 49
      },
      "21638": {
        "position": 1,
        "like": 82
      },
      "21644": {
        "position": 1,
        "like": 88
      },
      "21669": {
        "position": 1,
        "like": 77
      },
      "21673": {
        "position": 1,
        "like": 78
      },
      "21728": {
        "position": 1,
        "like": 54
      },
      "21730": {
        "position": 1,
        "like": 55
      },
      "21736": {
        "position": 1,
        "like": 72
      },
      "21739": {
        "position": 1,
        "like": 73
      },
      "21742": {
        "position": 1,
        "like": 74
      },
      "21745": {
        "position": 1,
        "like": 75
      },
      "21748": {
        "position": 1,
        "like": 76
      },
      "22022": {
        "position": 1,
        "like": 131
      },
      "22024": {
        "position": 1,
        "like": 132
      },
      "22247": {
        "position": 2,
        "like": 240
      },
      "22428": {
        "position": 1,
        "like": 301
      },
      "22461": {
        "position": 1,
        "like": 302
      },
      "22494": {
        "position": 1,
        "like": 303
      },
      "22527": {
        "position": 1,
        "like": 304
      },
      "22560": {
        "position": 1,
        "like": 305
      },
      "22593": {
        "position": 1,
        "like": 306
      },
      "22626": {
        "position": 1,
        "like": 307
      },
      "22659": {
        "position": 1,
        "like": 308
      },
      "22692": {
        "position": 1,
        "like": 309
      },
      "22725": {
        "position": 1,
        "like": 310
      },
      "22758": {
        "position": 1,
        "like": 311
      },
      "22791": {
        "position": 1,
        "like": 312
      },
      "22824": {
        "position": 1,
        "like": 313
      },
      "22857": {
        "position": 1,
        "like": 314
      },
      "22890": {
        "position": 1,
        "like": 315
      },
      "22923": {
        "position": 1,
        "like": 316
      },
      "23062": {
        "position": 1,
        "like": 440
      },
      "23068": {
        "position": 1,
        "like": 404
      },
      "23115": {
        "position": 2,
        "like": 413
      },
      "23385": {
        "position": 1,
        "like": 196
      },
      "23388": {
        "position": 1,
        "like": 198
      },
      "23396": {
        "position": 1,
        "like": 200
      },
      "23398": {
        "position": 1,
        "like": 201
      },
      "23685": {
        "position": 1,
        "like": 414
      },
      "23722": {
        "position": 2,
        "like": 157
      },
      "23727": {
        "position": 1,
        "like": 171
      },
      "23731": {
        "position": 1,
        "like": 172
      },
      "24005": {
        "position": 1,
        "like": 181
      },
      "24009": {
        "position": 1,
        "like": 182
      },
      "25035": {
        "position": 2,
        "like": 282
      },
      "25715": {
        "position": 2,
        "like": 381
      },
      "26716": {
        "position": 1,
        "like": 443
      },
      "26835": {
        "position": 1,
        "like": 445
      },
      "26838": {
        "position": 1,
        "like": 447
      },
      "27112": {
        "position": 1,
        "like": 491
      },
      "27115": {
        "position": 1,
        "like": 490
      },
      "27203": {
        "position": 1,
        "like": 512
      },
      "27209": {
        "position": 1,
        "like": 511
      },
      "28060": {
        "position": 2,
        "like": 10
      },
      "28157": {
        "position": 1,
        "like": 29
      },
      "28252": {
        "position": 1,
        "like": 23
      },
      "28300": {
        "position": 1,
        "like": 24
      },
      "28396": {
        "position": 1,
        "like": 108
      },
      "28506": {
        "position": 3,
        "like": 44
      },
      "28560": {
        "position": 1,
        "like": 608
      },
      "28565": {
        "position": 1,
        "like": 603
      },
      "28623": {
        "position": 1,
        "like": 607
      },
      "28628": {
        "position": 2,
        "like": 89
      },
      "28631": {
        "position": 1,
        "like": 87
      },
      "28635": {
        "position": 2,
        "like": 90
      },
      "28644": {
        "position": 1,
        "like": 85
      },
      "28648": {
        "position": 1,
        "like": 86
      },
      "28652": {
        "position": 1,
        "like": 84
      },
      "28657": {
        "position": 2,
        "like": 94
      },
      "28660": {
        "position": 3,
        "like": 52
      },
      "28711": {
        "position": 2,
        "like": 55
      },
      "28721": {
        "position": 1,
        "like": 81
      },
      "28724": {
        "position": 2,
        "like": 76
      },
      "28727": {
        "position": 1,
        "like": 80
      },
      "28737": {
        "position": 2,
        "like": 104
      },
      "28743": {
        "position": 2,
        "like": 106
      },
      "29546": {
        "position": 3,
        "like": 278
      },
      "29875": {
        "position": 1,
        "like": 233
      },
      "30047": {
        "position": 3,
        "like": 240
      },
      "30093": {
        "position": 1,
        "like": 242
      },
      "30185": {
        "position": 3,
        "like": 144
      },
      "30231": {
        "position": 2,
        "like": 404
      },
      "30241": {
        "position": 1,
        "like": 205
      },
      "30246": {
        "position": 2,
        "like": 195
      },
      "30272": {
        "position": 1,
        "like": 206
      },
      "30292": {
        "position": 2,
        "like": 149
      },
      "30298": {
        "position": 1,
        "like": 377
      },
      "30346": {
        "position": 1,
        "like": 376
      },
      "30688": {
        "position": 3,
        "like": 403
      },
      "30769": {
        "position": 3,
        "like": 412
      },
      "30850": {
        "position": 2,
        "like": 414
      },
      "30863": {
        "position": 3,
        "like": 157
      },
      "30865": {
        "position": 1,
        "like": 162
      },
      "31061": {
        "position": 3,
        "like": 594
      },
      "31692": {
        "position": 3,
        "like": 228
      },
      "31830": {
        "position": 1,
        "like": 281
      },
      "31876": {
        "position": 1,
        "like": 280
      },
      "31970": {
        "position": 1,
        "like": 387
      },
      "32125": {
        "position": 1,
        "like": 383
      },
      "32127": {
        "position": 1,
        "like": 385
      },
      "32129": {
        "position": 1,
        "like": 386
      },
      "32145": {
        "position": 3,
        "like": 474
      },
      "32391": {
        "position": 1,
        "like": 602
      },
      "32403": {
        "position": 1,
        "like": 633
      },
      "32410": {
        "position": 1,
        "like": 596
      },
      "32415": {
        "position": 1,
        "like": 632
      },
      "32551": {
        "position": 1,
        "like": 634
      },
      "32558": {
        "position": 1,
        "like": 595
      },
      "32559": {
        "position": 1,
        "like": 639
      },
      "32565": {
        "position": 1,
        "like": 597
      },
      "32570": {
        "position": 1,
        "like": 598
      },
      "32575": {
        "position": 1,
        "like": 599
      },
      "32580": {
        "position": 1,
        "like": 600
      },
      "32581": {
        "position": 1,
        "like": 640
      },
      "32587": {
        "position": 1,
        "like": 601
      },
      "32605": {
        "position": 1,
        "like": 288
      },
      "32637": {
        "position": 1,
        "like": 296
      },
      "32669": {
        "position": 1,
        "like": 297
      },
      "32701": {
        "position": 2,
        "like": 284
      },
      "32855": {
        "position": 1,
        "like": 286
      },
      "32887": {
        "position": 1,
        "like": 287
      },
      "32919": {
        "position": 1,
        "like": 289
      },
      "32951": {
        "position": 1,
        "like": 290
      },
      "32983": {
        "position": 1,
        "like": 291
      },
      "33015": {
        "position": 1,
        "like": 292
      },
      "33047": {
        "position": 1,
        "like": 293
      },
      "33079": {
        "position": 1,
        "like": 294
      },
      "33111": {
        "position": 1,
        "like": 295
      },
      "33143": {
        "position": 1,
        "like": 298
      },
      "33175": {
        "position": 1,
        "like": 299
      },
      "33207": {
        "position": 1,
        "like": 300
      },
      "33404": {
        "position": 3,
        "like": 476
      },
      "33566": {
        "position": 3,
        "like": 357
      },
      "33647": {
        "position": 1,
        "like": 374
      },
      "33695": {
        "position": 1,
        "like": 373
      },
      "33828": {
        "position": 1,
        "like": 380
      },
      "33876": {
        "position": 1,
        "like": 379
      },
      "34167": {
        "position": 1,
        "like": 457
      },
      "34169": {
        "position": 1,
        "like": 459
      },
      "34178": {
        "position": 1,
        "like": 453
      },
      "34191": {
        "position": 2,
        "like": 448
      },
      "34196": {
        "position": 2,
        "like": 450
      },
      "34198": {
        "position": 1,
        "like": 451
      },
      "34287": {
        "position": 1,
        "like": 429
      },
      "34293": {
        "position": 1,
        "like": 481
      },
      "34341": {
        "position": 1,
        "like": 480
      },
      "34937": {
        "position": 1,
        "like": 544
      },
      "35192": {
        "position": 1,
        "like": 556
      },
      "35277": {
        "position": 1,
        "like": 563
      },
      "35521": {
        "position": 2,
        "like": 108
      },
      "35633": {
        "position": 1,
        "like": 611
      },
      "35635": {
        "position": 2,
        "like": 608
      },
      "35637": {
        "position": 1,
        "like": 610
      },
      "35639": {
        "position": 2,
        "like": 603
      },
      "35647": {
        "position": 3,
        "like": 613
      },
      "35698": {
        "position": 3,
        "like": 83
      },
      "35701": {
        "position": 1,
        "like": 93
      },
      "35704": {
        "position": 3,
        "like": 90
      },
      "35707": {
        "position": 1,
        "like": 92
      },
      "35711": {
        "position": 1,
        "like": 61
      },
      "35715": {
        "position": 3,
        "like": 55
      },
      "35717": {
        "position": 2,
        "like": 57
      },
      "35720": {
        "position": 1,
        "like": 60
      },
      "35722": {
        "position": 1,
        "like": 97
      },
      "35733": {
        "position": 1,
        "like": 96
      },
      "35736": {
        "position": 2,
        "like": 107
      },
      "35830": {
        "position": 1,
        "like": 629
      },
      "35878": {
        "position": 1,
        "like": 628
      },
      "35880": {
        "position": 1,
        "like": 190
      },
      "35881": {
        "position": 1,
        "like": 643
      },
      "36025": {
        "position": 4,
        "like": 189
      },
      "36071": {
        "position": 1,
        "like": 191
      },
      "36117": {
        "position": 1,
        "like": 630
      },
      "36441": {
        "position": 1,
        "like": 624
      },
      "36443": {
        "position": 1,
        "like": 625
      },
      "36445": {
        "position": 1,
        "like": 626
      },
      "36709": {
        "position": 1,
        "like": 134
      },
      "36711": {
        "position": 1,
        "like": 135
      },
      "36713": {
        "position": 1,
        "like": 136
      },
      "36719": {
        "position": 1,
        "like": 140
      },
      "36724": {
        "position": 4,
        "like": 231
      },
      "36987": {
        "position": 1,
        "like": 236
      },
      "37019": {
        "position": 1,
        "like": 235
      },
      "37083": {
        "position": 2,
        "like": 243
      },
      "37129": {
        "position": 4,
        "like": 143
      },
      "37176": {
        "position": 1,
        "like": 410
      },
      "37180": {
        "position": 3,
        "like": 404
      },
      "37182": {
        "position": 2,
        "like": 406
      },
      "37185": {
        "position": 1,
        "like": 409
      },
      "37187": {
        "position": 3,
        "like": 195
      },
      "37190": {
        "position": 1,
        "like": 213
      },
      "37193": {
        "position": 1,
        "like": 215
      },
      "37213": {
        "position": 1,
        "like": 209
      },
      "37231": {
        "position": 1,
        "like": 208
      },
      "37235": {
        "position": 2,
        "like": 150
      },
      "37236": {
        "position": 1,
        "like": 153
      },
      "37241": {
        "position": 1,
        "like": 152
      },
      "37330": {
        "position": 1,
        "like": 217
      },
      "37377": {
        "position": 1,
        "like": 219
      },
      "37477": {
        "position": 3,
        "like": 199
      },
      "37480": {
        "position": 1,
        "like": 202
      },
      "37483": {
        "position": 1,
        "like": 203
      },
      "37491": {
        "position": 1,
        "like": 424
      },
      "37591": {
        "position": 1,
        "like": 420
      },
      "37595": {
        "position": 3,
        "like": 414
      },
      "37597": {
        "position": 2,
        "like": 416
      },
      "37600": {
        "position": 1,
        "like": 419
      },
      "37602": {
        "position": 3,
        "like": 421
      },
      "37608": {
        "position": 2,
        "like": 163
      },
      "37621": {
        "position": 1,
        "like": 170
      },
      "37752": {
        "position": 2,
        "like": 167
      },
      "37756": {
        "position": 1,
        "like": 169
      },
      "37802": {
        "position": 1,
        "like": 178
      },
      "37852": {
        "position": 1,
        "like": 177
      },
      "37979": {
        "position": 2,
        "like": 175
      },
      "37991": {
        "position": 1,
        "like": 188
      },
      "38041": {
        "position": 1,
        "like": 187
      },
      "38168": {
        "position": 2,
        "like": 185
      },
      "38172": {
        "position": 1,
        "like": 194
      },
      "38220": {
        "position": 1,
        "like": 193
      },
      "38360": {
        "position": 4,
        "like": 276
      },
      "38406": {
        "position": 4,
        "like": 277
      },
      "38498": {
        "position": 2,
        "like": 387
      },
      "38505": {
        "position": 3,
        "like": 382
      },
      "39055": {
        "position": 1,
        "like": 637
      },
      "39062": {
        "position": 1,
        "like": 636
      },
      "39071": {
        "position": 2,
        "like": 285
      },
      "39148": {
        "position": 4,
        "like": 475
      },
      "39561": {
        "position": 4,
        "like": 444
      },
      "39642": {
        "position": 2,
        "like": 460
      },
      "39643": {
        "position": 1,
        "like": 463
      },
      "39646": {
        "position": 2,
        "like": 462
      },
      "39648": {
        "position": 1,
        "like": 464
      },
      "39753": {
        "position": 2,
        "like": 453
      },
      "39757": {
        "position": 1,
        "like": 455
      },
      "39761": {
        "position": 2,
        "like": 452
      },
      "39763": {
        "position": 4,
        "like": 473
      },
      "39850": {
        "position": 2,
        "like": 429
      },
      "40340": {
        "position": 2,
        "like": 493
      },
      "40343": {
        "position": 1,
        "like": 494
      },
      "40346": {
        "position": 1,
        "like": 496
      },
      "40437": {
        "position": 1,
        "like": 529
      },
      "40524": {
        "position": 1,
        "like": 528
      },
      "40610": {
        "position": 2,
        "like": 540
      },
      "40694": {
        "position": 2,
        "like": 545
      },
      "40877": {
        "position": 2,
        "like": 557
      },
      "40968": {
        "position": 2,
        "like": 564
      },
      "41139": {
        "position": 1,
        "like": 586
      },
      "41141": {
        "position": 1,
        "like": 587
      },
      "41275": {
        "position": 4,
        "like": 21
      },
      "41326": {
        "position": 2,
        "like": 110
      },
      "41329": {
        "position": 4,
        "like": 22
      },
      "41377": {
        "position": 1,
        "like": 65
      },
      "41434": {
        "position": 1,
        "like": 64
      },
      "41436": {
        "position": 3,
        "like": 614
      },
      "41442": {
        "position": 2,
        "like": 605
      },
      "41445": {
        "position": 2,
        "like": 58
      },
      "41451": {
        "position": 1,
        "like": 99
      },
      "41504": {
        "position": 2,
        "like": 643
      },
      "41563": {
        "position": 5,
        "like": 142
      },
      "41609": {
        "position": 1,
        "like": 254
      },
      "41695": {
        "position": 1,
        "like": 247
      },
      "41700": {
        "position": 1,
        "like": 248
      },
      "41705": {
        "position": 1,
        "like": 253
      },
      "41713": {
        "position": 5,
        "like": 129
      },
      "41759": {
        "position": 2,
        "like": 136
      },
      "41766": {
        "position": 5,
        "like": 231
      },
      "41812": {
        "position": 1,
        "like": 238
      },
      "41936": {
        "position": 2,
        "like": 407
      },
      "41942": {
        "position": 2,
        "like": 216
      },
      "41956": {
        "position": 2,
        "like": 209
      },
      "41963": {
        "position": 3,
        "like": 204
      },
      "41967": {
        "position": 5,
        "like": 147
      },
      "42202": {
        "position": 2,
        "like": 220
      },
      "42249": {
        "position": 2,
        "like": 425
      },
      "42254": {
        "position": 1,
        "like": 428
      },
      "42302": {
        "position": 1,
        "like": 427
      },
      "42353": {
        "position": 2,
        "like": 417
      },
      "42357": {
        "position": 2,
        "like": 168
      },
      "42442": {
        "position": 2,
        "like": 176
      },
      "42527": {
        "position": 4,
        "like": 179
      },
      "42531": {
        "position": 4,
        "like": 180
      },
      "42535": {
        "position": 2,
        "like": 186
      },
      "42666": {
        "position": 5,
        "like": 225
      },
      "42712": {
        "position": 5,
        "like": 279
      },
      "42761": {
        "position": 2,
        "like": 389
      },
      "42764": {
        "position": 5,
        "like": 477
      },
      "42845": {
        "position": 5,
        "like": 411
      },
      "42926": {
        "position": 3,
        "like": 650
      },
      "42932": {
        "position": 1,
        "like": 649
      },
      "42934": {
        "position": 1,
        "like": 648
      },
      "42945": {
        "position": 1,
        "like": 401
      },
      "43026": {
        "position": 1,
        "like": 402
      },
      "43107": {
        "position": 5,
        "like": 397
      },
      "43188": {
        "position": 2,
        "like": 399
      },
      "43233": {
        "position": 5,
        "like": 478
      },
      "43484": {
        "position": 1,
        "like": 392
      },
      "43570": {
        "position": 1,
        "like": 391
      },
      "43572": {
        "position": 2,
        "like": 464
      },
      "43575": {
        "position": 1,
        "like": 465
      },
      "43578": {
        "position": 1,
        "like": 467
      },
      "43765": {
        "position": 2,
        "like": 456
      },
      "43888": {
        "position": 3,
        "like": 436
      },
      "43892": {
        "position": 1,
        "like": 435
      },
      "43896": {
        "position": 3,
        "like": 429
      },
      "43898": {
        "position": 2,
        "like": 431
      },
      "43901": {
        "position": 1,
        "like": 434
      },
      "44075": {
        "position": 2,
        "like": 497
      },
      "44086": {
        "position": 5,
        "like": 489
      },
      "44255": {
        "position": 2,
        "like": 529
      },
      "44424": {
        "position": 2,
        "like": 541
      },
      "44508": {
        "position": 3,
        "like": 545
      },
      "44515": {
        "position": 2,
        "like": 535
      },
      "44518": {
        "position": 1,
        "like": 536
      },
      "44521": {
        "position": 1,
        "like": 537
      },
      "44610": {
        "position": 5,
        "like": 553
      },
      "44700": {
        "position": 3,
        "like": 557
      },
      "44794": {
        "position": 3,
        "like": 564
      },
      "44892": {
        "position": 5,
        "like": 584
      },
      "44973": {
        "position": 2,
        "like": 588
      },
      "44974": {
        "position": 1,
        "like": 591
      },
      "44978": {
        "position": 2,
        "like": 590
      },
      "45197": {
        "position": 1,
        "like": 13
      },
      "45199": {
        "position": 1,
        "like": 14
      },
      "45205": {
        "position": 1,
        "like": 30
      },
      "45208": {
        "position": 1,
        "like": 31
      },
      "45211": {
        "position": 1,
        "like": 32
      },
      "45214": {
        "position": 1,
        "like": 33
      },
      "45217": {
        "position": 1,
        "like": 34
      },
      "45282": {
        "position": 2,
        "like": 111
      },
      "45285": {
        "position": 2,
        "like": 65
      },
      "45295": {
        "position": 6,
        "like": 62
      },
      "45346": {
        "position": 2,
        "like": 606
      },
      "45349": {
        "position": 4,
        "like": 95
      },
      "45352": {
        "position": 2,
        "like": 100
      },
      "45356": {
        "position": 2,
        "like": 102
      },
      "45361": {
        "position": 2,
        "like": 645
      },
      "45364": {
        "position": 3,
        "like": 622
      },
      "45410": {
        "position": 3,
        "like": 627
      },
      "45432": {
        "position": 2,
        "like": 252
      },
      "45438": {
        "position": 2,
        "like": 254
      },
      "45443": {
        "position": 1,
        "like": 268
      },
      "45448": {
        "position": 1,
        "like": 270
      },
      "45538": {
        "position": 2,
        "like": 253
      },
      "45543": {
        "position": 3,
        "like": 141
      },
      "45549": {
        "position": 2,
        "like": 138
      },
      "45552": {
        "position": 2,
        "like": 239
      },
      "45598": {
        "position": 4,
        "like": 234
      },
      "45634": {
        "position": 2,
        "like": 211
      },
      "45639": {
        "position": 6,
        "like": 147
      },
      "45641": {
        "position": 1,
        "like": 155
      },
      "45724": {
        "position": 1,
        "like": 221
      },
      "45726": {
        "position": 1,
        "like": 223
      },
      "45728": {
        "position": 1,
        "like": 224
      },
      "45730": {
        "position": 5,
        "like": 422
      },
      "45736": {
        "position": 6,
        "like": 165
      },
      "45817": {
        "position": 6,
        "like": 173
      },
      "45898": {
        "position": 6,
        "like": 183
      },
      "46025": {
        "position": 2,
        "like": 390
      },
      "46033": {
        "position": 2,
        "like": 400
      },
      "46038": {
        "position": 1,
        "like": 621
      },
      "46047": {
        "position": 2,
        "like": 617
      },
      "46050": {
        "position": 1,
        "like": 620
      },
      "46057": {
        "position": 1,
        "like": 641
      },
      "46062": {
        "position": 1,
        "like": 642
      },
      "46067": {
        "position": 4,
        "like": 638
      },
      "46237": {
        "position": 1,
        "like": 395
      },
      "46239": {
        "position": 2,
        "like": 392
      },
      "46241": {
        "position": 1,
        "like": 394
      },
      "46243": {
        "position": 6,
        "like": 441
      },
      "46326": {
        "position": 2,
        "like": 468
      },
      "46431": {
        "position": 2,
        "like": 470
      },
      "46463": {
        "position": 1,
        "like": 471
      },
      "46509": {
        "position": 1,
        "like": 439
      },
      "46557": {
        "position": 1,
        "like": 438
      },
      "46608": {
        "position": 2,
        "like": 432
      },
      "46692": {
        "position": 2,
        "like": 483
      },
      "46696": {
        "position": 1,
        "like": 484
      },
      "46700": {
        "position": 1,
        "like": 486
      },
      "46702": {
        "position": 1,
        "like": 487
      },
      "46708": {
        "position": 3,
        "like": 498
      },
      "46714": {
        "position": 3,
        "like": 497
      },
      "46716": {
        "position": 1,
        "like": 514
      },
      "46719": {
        "position": 1,
        "like": 513
      },
      "46807": {
        "position": 3,
        "like": 525
      },
      "46813": {
        "position": 2,
        "like": 531
      },
      "46987": {
        "position": 6,
        "like": 538
      },
      "47068": {
        "position": 6,
        "like": 542
      },
      "47152": {
        "position": 2,
        "like": 547
      },
      "47155": {
        "position": 6,
        "like": 549
      },
      "47239": {
        "position": 2,
        "like": 551
      },
      "47245": {
        "position": 2,
        "like": 559
      },
      "47248": {
        "position": 6,
        "like": 554
      },
      "47332": {
        "position": 2,
        "like": 566
      },
      "47335": {
        "position": 6,
        "like": 561
      },
      "47428": {
        "position": 2,
        "like": 568
      },
      "47435": {
        "position": 2,
        "like": 570
      },
      "47437": {
        "position": 1,
        "like": 571
      },
      "47467": {
        "position": 2,
        "like": 592
      },
      "47609": {
        "position": 6,
        "like": 11
      },
      "47657": {
        "position": 2,
        "like": 14
      },
      "47667": {
        "position": 2,
        "like": 35
      },
      "47670": {
        "position": 2,
        "like": 36
      },
      "47679": {
        "position": 2,
        "like": 40
      },
      "47685": {
        "position": 5,
        "like": 25
      },
      "47733": {
        "position": 2,
        "like": 27
      },
      "47737": {
        "position": 1,
        "like": 71
      },
      "47741": {
        "position": 3,
        "like": 65
      },
      "47743": {
        "position": 2,
        "like": 67
      },
      "47746": {
        "position": 1,
        "like": 70
      },
      "47748": {
        "position": 2,
        "like": 103
      },
      "47750": {
        "position": 2,
        "like": 646
      },
      "47759": {
        "position": 1,
        "like": 259
      },
      "47761": {
        "position": 1,
        "like": 260
      },
      "47770": {
        "position": 1,
        "like": 266
      },
      "47774": {
        "position": 1,
        "like": 267
      },
      "47778": {
        "position": 2,
        "like": 271
      },
      "47844": {
        "position": 2,
        "like": 250
      },
      "47849": {
        "position": 1,
        "like": 251
      },
      "47864": {
        "position": 1,
        "like": 272
      },
      "47867": {
        "position": 1,
        "like": 274
      },
      "47873": {
        "position": 2,
        "like": 139
      },
      "47876": {
        "position": 2,
        "like": 212
      },
      "47879": {
        "position": 2,
        "like": 156
      },
      "47881": {
        "position": 7,
        "like": 375
      },
      "47962": {
        "position": 2,
        "like": 224
      },
      "48013": {
        "position": 5,
        "like": 647
      },
      "48018": {
        "position": 2,
        "like": 618
      },
      "48021": {
        "position": 5,
        "like": 615
      },
      "48026": {
        "position": 5,
        "like": 631
      },
      "48031": {
        "position": 7,
        "like": 372
      },
      "48112": {
        "position": 7,
        "like": 378
      },
      "48193": {
        "position": 2,
        "like": 472
      },
      "48228": {
        "position": 7,
        "like": 479
      },
      "48309": {
        "position": 2,
        "like": 487
      },
      "48315": {
        "position": 4,
        "like": 498
      },
      "48522": {
        "position": 2,
        "like": 532
      },
      "48525": {
        "position": 1,
        "like": 534
      },
      "48571": {
        "position": 1,
        "like": 533
      },
      "48698": {
        "position": 2,
        "like": 548
      },
      "48701": {
        "position": 2,
        "like": 552
      },
      "48704": {
        "position": 2,
        "like": 560
      },
      "48707": {
        "position": 2,
        "like": 567
      },
      "48717": {
        "position": 1,
        "like": 578
      },
      "48722": {
        "position": 1,
        "like": 582
      },
      "48724": {
        "position": 2,
        "like": 575
      },
      "48725": {
        "position": 1,
        "like": 574
      },
      "48728": {
        "position": 3,
        "like": 568
      },
      "48730": {
        "position": 1,
        "like": 573
      },
      "48754": {
        "position": 3,
        "like": 14
      },
      "48756": {
        "position": 2,
        "like": 16
      },
      "48760": {
        "position": 1,
        "like": 20
      },
      "48764": {
        "position": 1,
        "like": 19
      },
      "48766": {
        "position": 3,
        "like": 36
      },
      "48769": {
        "position": 1,
        "like": 38
      },
      "48772": {
        "position": 1,
        "like": 39
      },
      "48775": {
        "position": 2,
        "like": 28
      },
      "48778": {
        "position": 2,
        "like": 68
      },
      "48781": {
        "position": 3,
        "like": 257
      },
      "48787": {
        "position": 2,
        "like": 260
      },
      "48794": {
        "position": 2,
        "like": 264
      },
      "48843": {
        "position": 2,
        "like": 256
      },
      "48848": {
        "position": 2,
        "like": 255
      },
      "48853": {
        "position": 2,
        "like": 275
      },
      "48859": {
        "position": 8,
        "like": 192
      },
      "48908": {
        "position": 3,
        "like": 488
      },
      "48998": {
        "position": 2,
        "like": 516
      },
      "49001": {
        "position": 1,
        "like": 517
      },
      "49004": {
        "position": 1,
        "like": 519
      },
      "49087": {
        "position": 2,
        "like": 579
      },
      "49088": {
        "position": 2,
        "like": 583
      },
      "49177": {
        "position": 4,
        "like": 593
      },
      "49181": {
        "position": 2,
        "like": 17
      },
      "49187": {
        "position": 2,
        "like": 262
      },
      "49190": {
        "position": 9,
        "like": 245
      },
      "49236": {
        "position": 3,
        "like": 256
      },
      "49241": {
        "position": 3,
        "like": 255
      },
      "49246": {
        "position": 8,
        "like": 426
      },
      "49252": {
        "position": 4,
        "like": 488
      },
      "49265": {
        "position": 9,
        "like": 510
      },
      "49346": {
        "position": 9,
        "like": 526
      },
      "49427": {
        "position": 4,
        "like": 576
      },
      "49514": {
        "position": 2,
        "like": 263
      },
      "49517": {
        "position": 8,
        "like": 437
      },
      "49536": {
        "position": 1,
        "like": 524
      },
      "49541": {
        "position": 1,
        "like": 523
      },
      "49543": {
        "position": 3,
        "like": 520
      },
      "49557": {
        "position": 1,
        "like": 502
      },
      "49561": {
        "position": 1,
        "like": 506
      },
      "49570": {
        "position": 1,
        "like": 501
      },
      "49576": {
        "position": 1,
        "like": 505
      },
      "49578": {
        "position": 4,
        "like": 521
      },
      "49581": {
        "position": 4,
        "like": 520
      },
      "49583": {
        "position": 6,
        "like": 580
      },
      "49586": {
        "position": 2,
        "like": 506
      },
      "49593": {
        "position": 2,
        "like": 499
      },
      "49596": {
        "position": 3,
        "like": 503
      },
      "49598": {
        "position": 5,
        "like": 521
      },
      "49604": {
        "position": 2,
        "like": 508
      },
      "49607": {
        "position": 2,
        "like": 509
      }
    },
    "actionsByOldId": {
      "0": "dA",
      "1": "dA",
      "2": "dA",
      "3": "Inline",
      "4": [
        "ListSnoc",
        "provide-stmts_I0*",
        "provide-stmts_I0",
        true
      ],
      "5": "Inline",
      "6": "dA",
      "7": "Inline",
      "8": [
        "ListSnoc",
        "import-stmts_I0*",
        "import-stmts_I0",
        true
      ],
      "9": "Inline",
      "10": "dA",
      "11": "dA",
      "12": "Inline",
      "13": "Inline",
      "14": "Inline",
      "15": "Inline",
      "16": [
        "ListSnoc",
        "import-stmt_A1_I4_I1*",
        "import-stmt_A1_I4_I1",
        true
      ],
      "17": "Inline",
      "18": "Inline",
      "19": "Inline",
      "20": "Inline",
      "21": "dA",
      "22": "dA",
      "23": "dA",
      "24": "dA",
      "25": "dA",
      "26": "Inline",
      "27": [
        "ListSnoc",
        "import-special_I3*",
        "import-special_I3",
        true
      ],
      "28": "Inline",
      "29": "dA",
      "30": "dA",
      "31": "dA",
      "32": "dA",
      "33": "dA",
      "34": "dA",
      "35": "dA",
      "36": "dA",
      "37": "Inline",
      "38": "Inline",
      "39": "Inline",
      "40": "dA",
      "41": "dA",
      "42": "dA",
      "43": "dA",
      "44": "dA",
      "45": "dA",
      "46": "Inline",
      "47": "Inline",
      "48": "dA",
      "49": "dA",
      "50": "Inline",
      "51": "Inline",
      "52": "dA",
      "53": "Inline",
      "54": "Inline",
      "55": "Inline",
      "56": "Inline",
      "57": [
        "ListSnoc",
        "provide-block_A0_I1_I1*",
        "provide-block_A0_I1_I1",
        true
      ],
      "58": "Inline",
      "59": "Inline",
      "60": "Inline",
      "61": "Inline",
      "62": "dA",
      "63": "Inline",
      "64": "Inline",
      "65": "Inline",
      "66": "Inline",
      "67": [
        "ListSnoc",
        "provide-block_A1_I4_I1*",
        "provide-block_A1_I4_I1",
        true
      ],
      "68": "Inline",
      "69": "Inline",
      "70": "Inline",
      "71": "Inline",
      "72": "dA",
      "73": "dA",
      "74": "dA",
      "75": "dA",
      "76": "dA",
      "77": "Inline",
      "78": "Inline",
      "79": "Inline",
      "80": "Inline",
      "81": "Inline",
      "82": "dA",
      "83": "dA",
      "84": "dA",
      "85": "Inline",
      "86": "Inline",
      "87": "dA",
      "88": "dA",
      "89": "dA",
      "90": "dA",
      "91": "Inline",
      "92": "Inline",
      "93": "Inline",
      "94": "dA",
      "95": "dA",
      "96": "Inline",
      "97": "Inline",
      "98": "Inline",
      "99": "Inline",
      "100": "Inline",
      "101": "Inline",
      "102": [
        "ListSnoc",
        "hiding-spec_I2_I0*",
        "hiding-spec_I2_I0",
        true
      ],
      "103": "Inline",
      "104": "dA",
      "105": "Inline",
      "106": [
        "ListSnoc",
        "module-ref_I0*",
        "module-ref_I0",
        true
      ],
      "107": "Inline",
      "108": "dA",
      "109": "Inline",
      "110": [
        "ListSnoc",
        "comma-names_I1*",
        "comma-names_I1",
        true
      ],
      "111": "Inline",
      "112": "dA",
      "113": "Inline",
      "114": [
        "ListSnoc",
        "block_I0*",
        "block_I0",
        true
      ],
      "115": "Inline",
      "116": "dA",
      "117": "dA",
      "118": "dA",
      "119": "dA",
      "120": "dA",
      "121": "dA",
      "122": "dA",
      "123": "dA",
      "124": "dA",
      "125": "dA",
      "126": "dA",
      "127": "dA",
      "128": "dA",
      "129": "dA",
      "130": "Inline",
      "131": "Inline",
      "132": "Inline",
      "133": "Inline",
      "134": "Inline",
      "135": "Inline",
      "136": "dA",
      "137": "Inline",
      "138": [
        "ListSnoc",
        "spy-contents_I1*",
        "spy-contents_I1",
        true
      ],
      "139": "Inline",
      "140": "dA",
      "141": "dA",
      "142": "dA",
      "143": "dA",
      "144": "dA",
      "145": "dA",
      "146": "dA",
      "147": "dA",
      "148": "Inline",
      "149": [
        "ListSnoc",
        "tuple-binding_I1*",
        "tuple-binding_I1",
        true
      ],
      "150": "Inline",
      "151": "Inline",
      "152": "Inline",
      "153": "Inline",
      "154": "Inline",
      "155": "Inline",
      "156": "Inline",
      "157": "dA",
      "158": "Inline",
      "159": "Inline",
      "160": "Inline",
      "161": "Inline",
      "162": "Inline",
      "163": "Inline",
      "164": "dA",
      "165": "dA",
      "166": "Inline",
      "167": [
        "ListSnoc",
        "multi-let-expr_I2*",
        "multi-let-expr_I2",
        true
      ],
      "168": "Inline",
      "169": "Inline",
      "170": "Inline",
      "171": "dA",
      "172": "dA",
      "173": "dA",
      "174": "Inline",
      "175": [
        "ListSnoc",
        "letrec-expr_I2*",
        "letrec-expr_I2",
        true
      ],
      "176": "Inline",
      "177": "Inline",
      "178": "Inline",
      "179": "dA",
      "180": "dA",
      "181": "dA",
      "182": "dA",
      "183": "dA",
      "184": "Inline",
      "185": [
        "ListSnoc",
        "type-let-expr_I2*",
        "type-let-expr_I2",
        true
      ],
      "186": "Inline",
      "187": "Inline",
      "188": "Inline",
      "189": "dA",
      "190": "Inline",
      "191": "Inline",
      "192": "dA",
      "193": "Inline",
      "194": "Inline",
      "195": "dA",
      "196": "dA",
      "197": "Inline",
      "198": "Inline",
      "199": "Inline",
      "200": "Inline",
      "201": "Inline",
      "202": "Inline",
      "203": "Inline",
      "204": "dA",
      "205": "Inline",
      "206": "Inline",
      "207": "Inline",
      "208": "Inline",
      "209": "Inline",
      "210": "Inline",
      "211": [
        "ListSnoc",
        "args_I1_I1*",
        "args_I1_I1",
        true
      ],
      "212": "Inline",
      "213": "dA",
      "214": "Inline",
      "215": "Inline",
      "216": "Inline",
      "217": "dA",
      "218": "Inline",
      "219": "Inline",
      "220": "Inline",
      "221": "dA",
      "222": "Inline",
      "223": "Inline",
      "224": "Inline",
      "225": "dA",
      "226": "Inline",
      "227": "Inline",
      "228": "dA",
      "229": "Inline",
      "230": "Inline",
      "231": "dA",
      "232": "Inline",
      "233": "Inline",
      "234": "Inline",
      "235": "Inline",
      "236": "Inline",
      "237": "Inline",
      "238": "Inline",
      "239": "Inline",
      "240": "dA",
      "241": "Inline",
      "242": "Inline",
      "243": "Inline",
      "244": "dA",
      "245": "dA",
      "246": "Inline",
      "247": "Inline",
      "248": "Inline",
      "249": "Inline",
      "250": [
        "ListSnoc",
        "data-expr_I5*",
        "data-expr_I5",
        true
      ],
      "251": "Inline",
      "252": "dA",
      "253": "dA",
      "254": "dA",
      "255": "dA",
      "256": "dA",
      "257": "dA",
      "258": "Inline",
      "259": "Inline",
      "260": "Inline",
      "261": "Inline",
      "262": [
        "ListSnoc",
        "variant-members_I1_I1*",
        "variant-members_I1_I1",
        true
      ],
      "263": "Inline",
      "264": "dA",
      "265": "Inline",
      "266": "Inline",
      "267": "Inline",
      "268": "dA",
      "269": "Inline",
      "270": "Inline",
      "271": "Inline",
      "272": "dA",
      "273": "Inline",
      "274": "Inline",
      "275": "Inline",
      "276": "dA",
      "277": "dA",
      "278": "dA",
      "279": "dA",
      "280": "Inline",
      "281": "Inline",
      "282": "dA",
      "283": "Inline",
      "284": [
        "ListSnoc",
        "binop-expr_I1*",
        "binop-expr_I1",
        true
      ],
      "285": "Inline",
      "286": "dA",
      "287": "dA",
      "288": "dA",
      "289": "dA",
      "290": "dA",
      "291": "dA",
      "292": "dA",
      "293": "dA",
      "294": "dA",
      "295": "dA",
      "296": "dA",
      "297": "dA",
      "298": "dA",
      "299": "dA",
      "300": "dA",
      "301": "dA",
      "302": "dA",
      "303": "dA",
      "304": "dA",
      "305": "dA",
      "306": "dA",
      "307": "dA",
      "308": "dA",
      "309": "dA",
      "310": "dA",
      "311": "dA",
      "312": "dA",
      "313": "dA",
      "314": "dA",
      "315": "dA",
      "316": "dA",
      "317": "dA",
      "318": "dA",
      "319": "dA",
      "320": "dA",
      "321": "dA",
      "322": "dA",
      "323": "dA",
      "324": "dA",
      "325": "dA",
      "326": "dA",
      "327": "dA",
      "328": "dA",
      "329": "dA",
      "330": "dA",
      "331": "dA",
      "332": "dA",
      "333": "dA",
      "334": "dA",
      "335": "dA",
      "336": "dA",
      "337": "dA",
      "338": "dA",
      "339": "dA",
      "340": "dA",
      "341": "dA",
      "342": "dA",
      "343": "dA",
      "344": "dA",
      "345": "dA",
      "346": "dA",
      "347": "dA",
      "348": "dA",
      "349": "dA",
      "350": "dA",
      "351": "dA",
      "352": "dA",
      "353": "dA",
      "354": "dA",
      "355": "dA",
      "356": "dA",
      "357": "dA",
      "358": "Inline",
      "359": "Inline",
      "360": "dA",
      "361": "dA",
      "362": "dA",
      "363": "dA",
      "364": "dA",
      "365": "dA",
      "366": "dA",
      "367": "dA",
      "368": "dA",
      "369": "dA",
      "370": "dA",
      "371": "dA",
      "372": "dA",
      "373": "Inline",
      "374": "Inline",
      "375": "dA",
      "376": "Inline",
      "377": "Inline",
      "378": "dA",
      "379": "Inline",
      "380": "Inline",
      "381": "dA",
      "382": "dA",
      "383": "dA",
      "384": "Inline",
      "385": "Inline",
      "386": "Inline",
      "387": "dA",
      "388": "Inline",
      "389": [
        "ListSnoc",
        "comma-binops_I1*",
        "comma-binops_I1",
        true
      ],
      "390": "Inline",
      "391": "dA",
      "392": "Inline",
      "393": "Inline",
      "394": "Inline",
      "395": "Inline",
      "396": "Inline",
      "397": "dA",
      "398": "Inline",
      "399": [
        "ListSnoc",
        "inst-expr_I3*",
        "inst-expr_I3",
        true
      ],
      "400": "Inline",
      "401": "Inline",
      "402": "Inline",
      "403": "dA",
      "404": "dA",
      "405": "Inline",
      "406": [
        "ListSnoc",
        "tuple-fields_I1*",
        "tuple-fields_I1",
        true
      ],
      "407": "Inline",
      "408": "Inline",
      "409": "Inline",
      "410": "Inline",
      "411": "dA",
      "412": "dA",
      "413": "dA",
      "414": "dA",
      "415": "Inline",
      "416": [
        "ListSnoc",
        "obj-fields_I1*",
        "obj-fields_I1",
        true
      ],
      "417": "Inline",
      "418": "Inline",
      "419": "Inline",
      "420": "Inline",
      "421": "dA",
      "422": "dA",
      "423": "Inline",
      "424": "Inline",
      "425": "Inline",
      "426": "dA",
      "427": "Inline",
      "428": "Inline",
      "429": "dA",
      "430": "Inline",
      "431": [
        "ListSnoc",
        "fields_I1*",
        "fields_I1",
        true
      ],
      "432": "Inline",
      "433": "Inline",
      "434": "Inline",
      "435": "Inline",
      "436": "dA",
      "437": "dA",
      "438": "Inline",
      "439": "Inline",
      "440": "dA",
      "441": "dA",
      "442": "dA",
      "443": "dA",
      "444": "dA",
      "445": "dA",
      "446": "Inline",
      "447": "Inline",
      "448": "Inline",
      "449": "Inline",
      "450": [
        "ListSnoc",
        "table-headers_I0_I0*",
        "table-headers_I0_I0",
        true
      ],
      "451": "Inline",
      "452": "dA",
      "453": "dA",
      "454": "Inline",
      "455": "Inline",
      "456": "Inline",
      "457": "dA",
      "458": "Inline",
      "459": "Inline",
      "460": "Inline",
      "461": "Inline",
      "462": [
        "ListSnoc",
        "table-rows_I0_I0*",
        "table-rows_I0_I0",
        true
      ],
      "463": "Inline",
      "464": "dA",
      "465": "dA",
      "466": "Inline",
      "467": "Inline",
      "468": "Inline",
      "469": "Inline",
      "470": [
        "ListSnoc",
        "table-items_I0_I0*",
        "table-items_I0_I0",
        true
      ],
      "471": "Inline",
      "472": "dA",
      "473": "dA",
      "474": "dA",
      "475": "dA",
      "476": "dA",
      "477": "dA",
      "478": "dA",
      "479": "dA",
      "480": "Inline",
      "481": "Inline",
      "482": "Inline",
      "483": [
        "ListSnoc",
        "if-expr_I4*",
        "if-expr_I4",
        true
      ],
      "484": "Inline",
      "485": "Inline",
      "486": "Inline",
      "487": "Inline",
      "488": "dA",
      "489": "dA",
      "490": "Inline",
      "491": "Inline",
      "492": "Inline",
      "493": [
        "ListSnoc",
        "if-pipe-expr_I2*",
        "if-pipe-expr_I2",
        true
      ],
      "494": "Inline",
      "495": "Inline",
      "496": "Inline",
      "497": "Inline",
      "498": "dA",
      "499": "dA",
      "500": "Inline",
      "501": "Inline",
      "502": "Inline",
      "503": "dA",
      "504": "Inline",
      "505": "Inline",
      "506": "Inline",
      "507": "Inline",
      "508": [
        "ListSnoc",
        "cases-args_I1_I1*",
        "cases-args_I1_I1",
        true
      ],
      "509": "Inline",
      "510": "dA",
      "511": "Inline",
      "512": "Inline",
      "513": "Inline",
      "514": "Inline",
      "515": "Inline",
      "516": [
        "ListSnoc",
        "cases-expr_I6*",
        "cases-expr_I6",
        true
      ],
      "517": "Inline",
      "518": "Inline",
      "519": "Inline",
      "520": "Inline",
      "521": "dA",
      "522": "Inline",
      "523": "Inline",
      "524": "Inline",
      "525": "dA",
      "526": "dA",
      "527": "Inline",
      "528": "Inline",
      "529": "Inline",
      "530": "Inline",
      "531": [
        "ListSnoc",
        "for-expr_I3_I1*",
        "for-expr_I3_I1",
        true
      ],
      "532": "Inline",
      "533": "Inline",
      "534": "Inline",
      "535": "dA",
      "536": "Inline",
      "537": "Inline",
      "538": "dA",
      "539": "Inline",
      "540": [
        "ListSnoc",
        "table-select_I2*",
        "table-select_I2",
        true
      ],
      "541": "Inline",
      "542": "dA",
      "543": "Inline",
      "544": "Inline",
      "545": "Inline",
      "546": "Inline",
      "547": [
        "ListSnoc",
        "table-filter_I2_I2*",
        "table-filter_I2_I2",
        true
      ],
      "548": "Inline",
      "549": "dA",
      "550": "Inline",
      "551": [
        "ListSnoc",
        "table-order_I4*",
        "table-order_I4",
        true
      ],
      "552": "Inline",
      "553": "dA",
      "554": "dA",
      "555": "Inline",
      "556": "Inline",
      "557": "Inline",
      "558": "Inline",
      "559": [
        "ListSnoc",
        "table-update_I2_I2*",
        "table-update_I2_I2",
        true
      ],
      "560": "Inline",
      "561": "dA",
      "562": "Inline",
      "563": "Inline",
      "564": "Inline",
      "565": "Inline",
      "566": [
        "ListSnoc",
        "table-extend_I2_I2*",
        "table-extend_I2_I2",
        true
      ],
      "567": "Inline",
      "568": "dA",
      "569": "Inline",
      "570": [
        "ListSnoc",
        "table-extend-fields_I0*",
        "table-extend-fields_I0",
        true
      ],
      "571": "Inline",
      "572": "Inline",
      "573": "Inline",
      "574": "Inline",
      "575": "dA",
      "576": "dA",
      "577": "Inline",
      "578": "Inline",
      "579": "Inline",
      "580": "dA",
      "581": "Inline",
      "582": "Inline",
      "583": "Inline",
      "584": "dA",
      "585": "Inline",
      "586": "Inline",
      "587": "Inline",
      "588": "dA",
      "589": "Inline",
      "590": [
        "ListSnoc",
        "load-table-specs_I0*",
        "load-table-specs_I0",
        true
      ],
      "591": "Inline",
      "592": "dA",
      "593": "dA",
      "594": "dA",
      "595": "dA",
      "596": "dA",
      "597": "dA",
      "598": "dA",
      "599": "dA",
      "600": "dA",
      "601": "dA",
      "602": "dA",
      "603": "dA",
      "604": "Inline",
      "605": [
        "ListSnoc",
        "comma-ann-field_I1*",
        "comma-ann-field_I1",
        true
      ],
      "606": "Inline",
      "607": "dA",
      "608": "Inline",
      "609": "Inline",
      "610": "Inline",
      "611": "Inline",
      "612": "Inline",
      "613": "dA",
      "614": "dA",
      "615": "dA",
      "616": "Inline",
      "617": [
        "ListSnoc",
        "tuple-ann_I2*",
        "tuple-ann_I2",
        true
      ],
      "618": "Inline",
      "619": "Inline",
      "620": "Inline",
      "621": "Inline",
      "622": "dA",
      "623": "Inline",
      "624": "Inline",
      "625": "Inline",
      "626": "dA",
      "627": "dA",
      "628": "Inline",
      "629": "Inline",
      "630": "Inline",
      "631": "dA",
      "632": "Inline",
      "633": "Inline",
      "634": "Inline",
      "635": "Inline",
      "636": "Inline",
      "637": "Inline",
      "638": "dA",
      "639": "Inline",
      "640": "Inline",
      "641": "Inline",
      "642": "Inline",
      "643": "dA",
      "644": "Inline",
      "645": [
        "ListSnoc",
        "comma-anns_I1*",
        "comma-anns_I1",
        true
      ],
      "646": "Inline",
      "647": "dA",
      "648": "Inline",
      "649": "Inline",
      "650": "dA",
      "651": "dA"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      21,
      22,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      62,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      82,
      83,
      77,
      78,
      79,
      80,
      81,
      84,
      87,
      85,
      86,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      228,
      226,
      227,
      229,
      230,
      231,
      240,
      244,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      241,
      242,
      243,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261,
      262,
      263,
      264,
      265,
      266,
      267,
      268,
      269,
      270,
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      302,
      303,
      304,
      305,
      306,
      307,
      308,
      309,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      375,
      373,
      374,
      376,
      377,
      378,
      379,
      380,
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390,
      391,
      392,
      396,
      393,
      394,
      395,
      397,
      398,
      399,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      419,
      420,
      421,
      422,
      426,
      423,
      424,
      425,
      427,
      428,
      429,
      430,
      431,
      432,
      433,
      434,
      435,
      436,
      437,
      438,
      439,
      440,
      441,
      442,
      443,
      444,
      445,
      446,
      447,
      448,
      449,
      450,
      451,
      452,
      453,
      454,
      455,
      456,
      457,
      458,
      459,
      460,
      461,
      462,
      463,
      464,
      465,
      466,
      467,
      468,
      469,
      470,
      471,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480,
      481,
      482,
      483,
      484,
      485,
      486,
      487,
      488,
      489,
      490,
      491,
      492,
      493,
      494,
      495,
      496,
      497,
      498,
      499,
      500,
      501,
      502,
      503,
      504,
      505,
      506,
      507,
      508,
      509,
      510,
      511,
      512,
      513,
      514,
      515,
      516,
      517,
      518,
      519,
      520,
      521,
      522,
      523,
      524,
      525,
      526,
      527,
      528,
      529,
      530,
      531,
      532,
      533,
      534,
      535,
      536,
      537,
      538,
      539,
      540,
      541,
      542,
      543,
      544,
      545,
      546,
      547,
      548,
      549,
      550,
      551,
      552,
      553,
      554,
      555,
      556,
      557,
      558,
      559,
      560,
      561,
      562,
      563,
      564,
      565,
      566,
      567,
      568,
      569,
      570,
      571,
      572,
      573,
      574,
      575,
      576,
      580,
      577,
      578,
      579,
      581,
      582,
      583,
      584,
      585,
      586,
      587,
      588,
      589,
      590,
      591,
      592,
      593,
      594,
      595,
      596,
      597,
      598,
      599,
      600,
      601,
      602,
      603,
      604,
      605,
      606,
      607,
      608,
      612,
      609,
      610,
      611,
      613,
      614,
      615,
      616,
      617,
      618,
      619,
      620,
      621,
      622,
      623,
      624,
      625,
      626,
      627,
      628,
      629,
      630,
      631,
      632,
      633,
      634,
      635,
      636,
      637,
      638,
      639,
      640,
      641,
      642,
      643,
      644,
      645,
      646,
      647,
      648,
      649,
      650,
      651
    ],
    "reduceActions": [
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      848,
      24,
      112,
      24,
      113,
      25,
      941,
      5,
      6,
      5,
      7,
      6,
      1126,
      0,
      1725,
      0,
      158,
      32,
      1727,
      0,
      9748,
      0,
      9794,
      0,
      10123,
      0,
      10174,
      0,
      10225,
      0,
      10276,
      0,
      10327,
      0,
      53,
      12,
      105,
      22,
      11082,
      0,
      11253,
      0,
      11426,
      0,
      11472,
      0,
      11504,
      0,
      11550,
      0,
      11596,
      0,
      11642,
      0,
      11688,
      0,
      11734,
      0,
      11780,
      0,
      11826,
      0,
      11872,
      0,
      11918,
      0,
      11964,
      0,
      12010,
      0,
      12056,
      0,
      12102,
      0,
      130,
      26,
      12280,
      0,
      12942,
      0,
      13115,
      0,
      13117,
      0,
      13119,
      0,
      148,
      29,
      196,
      37,
      197,
      38,
      13638,
      0,
      13640,
      0,
      13642,
      0,
      13898,
      0,
      14060,
      0,
      14280,
      0,
      14358,
      0,
      14360,
      0,
      14408,
      0,
      14454,
      0,
      14638,
      59,
      283,
      59,
      15580,
      0,
      15661,
      0,
      15742,
      0,
      15823,
      0,
      15904,
      0,
      15985,
      0,
      16066,
      0,
      16147,
      0,
      16228,
      0,
      16309,
      0,
      16390,
      0,
      16471,
      0,
      16552,
      0,
      16633,
      0,
      16714,
      0,
      16795,
      0,
      16876,
      0,
      16957,
      0,
      17038,
      0,
      17119,
      0,
      17200,
      0,
      17281,
      0,
      17362,
      0,
      17443,
      0,
      17524,
      0,
      17605,
      0,
      17686,
      0,
      17767,
      0,
      17848,
      0,
      17929,
      0,
      18010,
      0,
      18253,
      0,
      18334,
      0,
      18415,
      0,
      18496,
      0,
      18577,
      0,
      18658,
      0,
      18739,
      0,
      18820,
      0,
      18901,
      0,
      18982,
      0,
      442,
      74,
      445,
      75,
      446,
      76,
      449,
      77,
      20525,
      0,
      20573,
      0,
      21115,
      0,
      21166,
      0,
      21217,
      0,
      21376,
      0,
      21427,
      0,
      21478,
      0,
      21529,
      0,
      607,
      112,
      612,
      113,
      21638,
      0,
      21644,
      0,
      21669,
      0,
      21673,
      0,
      21728,
      0,
      21730,
      122,
      56,
      13,
      21736,
      0,
      21739,
      0,
      21742,
      0,
      21745,
      0,
      21748,
      18,
      79,
      18,
      22022,
      0,
      22024,
      0,
      232,
      47,
      22247,
      49,
      241,
      49,
      22428,
      0,
      22461,
      0,
      22494,
      0,
      22527,
      0,
      22560,
      0,
      22593,
      0,
      22626,
      0,
      22659,
      0,
      22692,
      0,
      22725,
      0,
      22758,
      0,
      22791,
      0,
      22824,
      0,
      22857,
      0,
      22890,
      0,
      22923,
      0,
      23062,
      0,
      23068,
      124,
      405,
      67,
      23115,
      0,
      23385,
      0,
      23388,
      0,
      23396,
      0,
      23398,
      0,
      23685,
      125,
      415,
      69,
      23722,
      33,
      161,
      33,
      23727,
      0,
      23731,
      0,
      166,
      34,
      174,
      35,
      24005,
      0,
      24009,
      0,
      184,
      36,
      383,
      60,
      384,
      61,
      25035,
      0,
      25715,
      0,
      26716,
      0,
      457,
      79,
      458,
      80,
      461,
      81,
      26835,
      0,
      26838,
      0,
      27112,
      0,
      27115,
      0,
      492,
      87,
      27203,
      0,
      27209,
      0,
      539,
      97,
      543,
      98,
      555,
      101,
      562,
      103,
      28060,
      0,
      28157,
      0,
      28252,
      0,
      28300,
      0,
      28396,
      23,
      109,
      23,
      28506,
      0,
      28560,
      114,
      609,
      114,
      28565,
      111,
      604,
      111,
      28623,
      0,
      28628,
      0,
      28631,
      0,
      28635,
      19,
      91,
      19,
      28644,
      0,
      28648,
      0,
      28652,
      0,
      28657,
      0,
      28660,
      0,
      28711,
      14,
      59,
      14,
      28721,
      0,
      28724,
      0,
      28727,
      0,
      28737,
      0,
      28743,
      0,
      623,
      117,
      29546,
      0,
      133,
      27,
      29875,
      0,
      30047,
      0,
      30093,
      0,
      30185,
      0,
      30231,
      68,
      408,
      68,
      30241,
      0,
      30246,
      41,
      213,
      41,
      214,
      42,
      207,
      39,
      30272,
      0,
      151,
      30,
      30292,
      0,
      30298,
      0,
      30346,
      0,
      217,
      43,
      218,
      44,
      423,
      71,
      30688,
      0,
      30769,
      0,
      30850,
      70,
      418,
      70,
      30863,
      0,
      30865,
      0,
      31061,
      0,
      31692,
      0,
      31830,
      0,
      31876,
      0,
      31970,
      62,
      388,
      62,
      32125,
      0,
      32127,
      0,
      32129,
      0,
      32145,
      0,
      32391,
      0,
      32403,
      0,
      32410,
      0,
      32415,
      0,
      398,
      66,
      32551,
      0,
      32558,
      0,
      32559,
      0,
      32565,
      0,
      32570,
      0,
      32575,
      0,
      32580,
      0,
      32581,
      0,
      32587,
      0,
      635,
      118,
      32605,
      0,
      32637,
      0,
      32669,
      0,
      32701,
      0,
      32855,
      0,
      32887,
      0,
      32919,
      0,
      32951,
      0,
      32983,
      0,
      33015,
      0,
      33047,
      0,
      33079,
      0,
      33111,
      0,
      33143,
      0,
      33175,
      0,
      33207,
      0,
      33404,
      0,
      33566,
      0,
      33647,
      0,
      33695,
      0,
      33828,
      0,
      33876,
      0,
      34167,
      0,
      34169,
      0,
      34178,
      78,
      454,
      78,
      34191,
      0,
      34196,
      0,
      34198,
      0,
      34287,
      126,
      430,
      72,
      34293,
      0,
      34341,
      0,
      495,
      88,
      527,
      95,
      34937,
      0,
      35192,
      0,
      35277,
      0,
      585,
      109,
      589,
      110,
      35521,
      0,
      63,
      15,
      35633,
      0,
      35635,
      0,
      35637,
      0,
      35639,
      0,
      35647,
      0,
      35698,
      0,
      35701,
      0,
      35704,
      0,
      35707,
      0,
      35711,
      0,
      35715,
      0,
      35717,
      0,
      35720,
      0,
      35722,
      0,
      101,
      21,
      98,
      20,
      35733,
      0,
      35736,
      0,
      35830,
      0,
      35878,
      0,
      35880,
      0,
      644,
      119,
      35881,
      119,
      36025,
      0,
      36071,
      0,
      36117,
      0,
      36441,
      0,
      36443,
      0,
      36445,
      0,
      246,
      50,
      36709,
      0,
      36711,
      0,
      36713,
      28,
      137,
      28,
      36719,
      0,
      36724,
      48,
      237,
      48,
      36987,
      0,
      37019,
      0,
      37083,
      0,
      37129,
      0,
      37176,
      0,
      37180,
      0,
      37182,
      0,
      37185,
      0,
      37187,
      0,
      37190,
      0,
      37193,
      0,
      210,
      40,
      37213,
      40,
      37231,
      0,
      37235,
      0,
      37236,
      0,
      37241,
      0,
      37330,
      0,
      37377,
      0,
      37477,
      0,
      37480,
      0,
      37483,
      0,
      37491,
      0,
      37591,
      0,
      37595,
      0,
      37597,
      0,
      37600,
      0,
      37602,
      0,
      37608,
      0,
      37621,
      0,
      37752,
      0,
      37756,
      0,
      37802,
      0,
      37852,
      0,
      37979,
      0,
      37991,
      0,
      38041,
      0,
      38168,
      0,
      38172,
      0,
      38220,
      0,
      38360,
      0,
      38406,
      0,
      38498,
      0,
      38505,
      0,
      616,
      115,
      39055,
      0,
      39062,
      0,
      39071,
      0,
      39148,
      0,
      391,
      63,
      396,
      64,
      39561,
      0,
      39642,
      0,
      39643,
      0,
      39646,
      0,
      39648,
      82,
      465,
      82,
      466,
      83,
      469,
      84,
      39753,
      0,
      39757,
      0,
      39761,
      0,
      39763,
      0,
      39850,
      73,
      433,
      73,
      482,
      85,
      40340,
      0,
      40343,
      0,
      40346,
      0,
      530,
      96,
      40437,
      96,
      40524,
      0,
      40610,
      0,
      40694,
      99,
      546,
      99,
      550,
      100,
      40877,
      102,
      558,
      102,
      40968,
      104,
      565,
      104,
      569,
      105,
      41139,
      0,
      41141,
      0,
      12,
      7,
      26,
      10,
      41275,
      0,
      41326,
      0,
      41329,
      0,
      41377,
      123,
      66,
      16,
      41434,
      0,
      41436,
      0,
      41442,
      0,
      41445,
      0,
      41451,
      0,
      41504,
      0,
      41563,
      0,
      41609,
      55,
      268,
      55,
      269,
      56,
      249,
      51,
      41695,
      0,
      41700,
      0,
      41705,
      55,
      41713,
      0,
      41759,
      0,
      41766,
      0,
      41812,
      0,
      41936,
      0,
      41942,
      0,
      41956,
      0,
      41963,
      0,
      41967,
      31,
      154,
      31,
      221,
      45,
      222,
      46,
      42202,
      0,
      42249,
      0,
      42254,
      0,
      42302,
      0,
      42353,
      0,
      42357,
      0,
      42442,
      0,
      42527,
      0,
      42531,
      0,
      42535,
      0,
      42666,
      0,
      42712,
      0,
      42761,
      0,
      42764,
      0,
      42845,
      0,
      42926,
      0,
      42932,
      0,
      42934,
      0,
      42945,
      0,
      43026,
      0,
      43107,
      0,
      43188,
      0,
      619,
      116,
      43233,
      0,
      43484,
      65,
      393,
      65,
      43570,
      0,
      43572,
      0,
      43575,
      0,
      43578,
      0,
      43765,
      0,
      43888,
      0,
      43892,
      0,
      43896,
      0,
      43898,
      0,
      43901,
      0,
      485,
      86,
      44075,
      24,
      44086,
      0,
      44255,
      0,
      44424,
      0,
      44508,
      0,
      44515,
      0,
      44518,
      0,
      44521,
      0,
      44610,
      0,
      44700,
      0,
      44794,
      0,
      44892,
      0,
      44973,
      0,
      44974,
      0,
      44978,
      0,
      45197,
      0,
      45199,
      121,
      15,
      8,
      45205,
      0,
      45208,
      0,
      45211,
      0,
      45214,
      0,
      45217,
      0,
      45282,
      0,
      45285,
      17,
      69,
      17,
      45295,
      0,
      45346,
      0,
      45349,
      0,
      45352,
      0,
      45356,
      0,
      45361,
      0,
      45364,
      0,
      45410,
      0,
      265,
      54,
      258,
      52,
      45432,
      0,
      45438,
      0,
      45443,
      0,
      45448,
      0,
      272,
      57,
      273,
      58,
      45538,
      0,
      45543,
      0,
      45549,
      0,
      45552,
      0,
      45598,
      0,
      45634,
      0,
      45639,
      0,
      45641,
      0,
      45724,
      0,
      45726,
      0,
      45728,
      24,
      45730,
      0,
      45736,
      0,
      45817,
      0,
      45898,
      0,
      46025,
      0,
      46033,
      0,
      46038,
      0,
      46047,
      0,
      46050,
      0,
      46057,
      0,
      46062,
      0,
      46067,
      0,
      46237,
      0,
      46239,
      0,
      46241,
      0,
      46243,
      0,
      46326,
      0,
      46431,
      0,
      46463,
      0,
      46509,
      0,
      46557,
      0,
      46608,
      0,
      46692,
      0,
      46696,
      0,
      46700,
      0,
      46702,
      24,
      46708,
      24,
      46714,
      0,
      46716,
      0,
      46719,
      0,
      515,
      92,
      46807,
      0,
      46813,
      0,
      46987,
      0,
      47068,
      0,
      47152,
      0,
      47155,
      0,
      47239,
      0,
      47245,
      0,
      47248,
      0,
      47332,
      0,
      47335,
      0,
      577,
      107,
      581,
      108,
      47428,
      106,
      572,
      106,
      47435,
      0,
      47437,
      0,
      47467,
      0,
      47609,
      0,
      47657,
      9,
      18,
      9,
      47667,
      0,
      47670,
      11,
      37,
      11,
      47679,
      0,
      47685,
      0,
      47733,
      0,
      47737,
      0,
      47741,
      0,
      47743,
      0,
      47746,
      0,
      47748,
      0,
      47750,
      0,
      47759,
      0,
      261,
      53,
      47761,
      53,
      47770,
      0,
      47774,
      0,
      47778,
      0,
      47844,
      0,
      47849,
      0,
      47864,
      0,
      47867,
      0,
      47873,
      0,
      47876,
      0,
      47879,
      0,
      47881,
      0,
      47962,
      0,
      48013,
      0,
      48018,
      0,
      48021,
      0,
      48026,
      0,
      48031,
      0,
      48112,
      0,
      48193,
      0,
      48228,
      0,
      48309,
      0,
      48315,
      0,
      518,
      93,
      48522,
      0,
      48525,
      0,
      48571,
      0,
      48698,
      0,
      48701,
      0,
      48704,
      0,
      48707,
      0,
      48717,
      0,
      48722,
      0,
      48725,
      0,
      48724,
      0,
      48728,
      0,
      48730,
      0,
      48754,
      0,
      48756,
      0,
      48760,
      0,
      48764,
      0,
      48766,
      0,
      48769,
      0,
      48772,
      0,
      48775,
      0,
      48778,
      0,
      48781,
      0,
      48787,
      0,
      48794,
      0,
      48843,
      55,
      48848,
      55,
      48853,
      0,
      48859,
      0,
      48908,
      24,
      48998,
      0,
      49001,
      0,
      49004,
      0,
      49087,
      0,
      49088,
      0,
      49177,
      0,
      49181,
      0,
      49187,
      0,
      49190,
      0,
      49236,
      0,
      49241,
      0,
      49246,
      0,
      49252,
      0,
      522,
      94,
      49265,
      0,
      49346,
      0,
      49427,
      0,
      49514,
      0,
      49517,
      0,
      500,
      89,
      504,
      90,
      49536,
      0,
      49541,
      0,
      49543,
      24,
      49557,
      0,
      507,
      91,
      49561,
      91,
      49570,
      0,
      49576,
      0,
      49578,
      24,
      49581,
      0,
      49583,
      0,
      49586,
      0,
      49593,
      0,
      49596,
      0,
      49598,
      0,
      49604,
      0,
      49607,
      0
    ],
    "rnTable": [
      {
        "program": [
          1
        ],
        "prelude": [
          2
        ],
        "provide-stmts": [
          3
        ],
        "provide-stmts_I0*": [
          4
        ],
        "$": [
          -1,
          0,
          2,
          4,
          6
        ],
        "'INCLUDE": [
          -1,
          4,
          6
        ],
        "'IMPORT": [
          -1,
          4,
          6
        ],
        "'NAME": [
          -1,
          2,
          4,
          6
        ],
        "'STRING": [
          -1,
          2,
          4,
          6
        ],
        "'TYPE": [
          -1,
          2,
          4,
          6
        ],
        "'DATA": [
          -1,
          2,
          4,
          6
        ],
        "'PROVIDE": [
          -1,
          6
        ],
        "'PROVIDE-TYPES": [
          -1,
          6
        ],
        "'PROVIDECOLON": [
          -1,
          6
        ],
        "'PARENSPACE": [
          -1,
          2,
          4,
          6
        ],
        "'SPY": [
          -1,
          2,
          4,
          6
        ],
        "'NEWTYPE": [
          -1,
          2,
          4,
          6
        ],
        "'LBRACE": [
          -1,
          2,
          4,
          6
        ],
        "'SHADOW": [
          -1,
          2,
          4,
          6
        ],
        "'LET": [
          -1,
          2,
          4,
          6
        ],
        "'BLOCK": [
          -1,
          2,
          4,
          6
        ],
        "'LETREC": [
          -1,
          2,
          4,
          6
        ],
        "'TYPE-LET": [
          -1,
          2,
          4,
          6
        ],
        "'FUN": [
          -1,
          2,
          4,
          6
        ],
        "'PARENAFTERBRACE": [
          -1,
          2,
          4,
          6
        ],
        "'CHECK": [
          -1,
          2,
          4,
          6
        ],
        "'EXAMPLES": [
          -1,
          2,
          4,
          6
        ],
        "'CHECKCOLON": [
          -1,
          2,
          4,
          6
        ],
        "'EXAMPLESCOLON": [
          -1,
          2,
          4,
          6
        ],
        "'VAR": [
          -1,
          2,
          4,
          6
        ],
        "'REC": [
          -1,
          2,
          4,
          6
        ],
        "'WHEN": [
          -1,
          2,
          4,
          6
        ],
        "'DOTDOTDOT": [
          -1,
          2,
          4,
          6
        ],
        "'NUMBER": [
          -1,
          2,
          4,
          6
        ],
        "'RATIONAL": [
          -1,
          2,
          4,
          6
        ],
        "'ROUGHRATIONAL": [
          -1,
          2,
          4,
          6
        ],
        "'TRUE": [
          -1,
          2,
          4,
          6
        ],
        "'FALSE": [
          -1,
          2,
          4,
          6
        ],
        "'LAM": [
          -1,
          2,
          4,
          6
        ],
        "'METHOD": [
          -1,
          2,
          4,
          6
        ],
        "'LBRACK": [
          -1,
          2,
          4,
          6
        ],
        "'TABLE": [
          -1,
          2,
          4,
          6
        ],
        "'REACTOR": [
          -1,
          2,
          4,
          6
        ],
        "'IF": [
          -1,
          2,
          4,
          6
        ],
        "'ASK": [
          -1,
          2,
          4,
          6
        ],
        "'CASES": [
          -1,
          2,
          4,
          6
        ],
        "'FOR": [
          -1,
          2,
          4,
          6
        ],
        "'TABLE-SELECT": [
          -1,
          2,
          4,
          6
        ],
        "'TABLE-FILTER": [
          -1,
          2,
          4,
          6
        ],
        "'TABLE-ORDER": [
          -1,
          2,
          4,
          6
        ],
        "'TABLE-EXTRACT": [
          -1,
          2,
          4,
          6
        ],
        "'TABLE-UPDATE": [
          -1,
          2,
          4,
          6
        ],
        "'TABLE-EXTEND": [
          -1,
          2,
          4,
          6
        ],
        "'LOAD-TABLE": [
          -1,
          2,
          4,
          6
        ]
      },
      {
        "$": [
          -1,
          -1
        ]
      },
      {
        "block": [
          5
        ],
        "block_I0*": [
          6
        ],
        "$": [
          -1,
          8,
          10,
          12
        ],
        "'NAME": [
          -1,
          12
        ],
        "'STRING": [
          -1,
          12
        ],
        "'TYPE": [
          -1,
          12
        ],
        "'DATA": [
          -1,
          12
        ],
        "'PARENSPACE": [
          -1,
          12
        ],
        "'SPY": [
          -1,
          12
        ],
        "'NEWTYPE": [
          -1,
          12
        ],
        "'LBRACE": [
          -1,
          12
        ],
        "'SHADOW": [
          -1,
          12
        ],
        "'LET": [
          -1,
          12
        ],
        "'BLOCK": [
          -1,
          12
        ],
        "'LETREC": [
          -1,
          12
        ],
        "'TYPE-LET": [
          -1,
          12
        ],
        "'FUN": [
          -1,
          12
        ],
        "'PARENAFTERBRACE": [
          -1,
          12
        ],
        "'CHECK": [
          -1,
          12
        ],
        "'EXAMPLES": [
          -1,
          12
        ],
        "'CHECKCOLON": [
          -1,
          12
        ],
        "'EXAMPLESCOLON": [
          -1,
          12
        ],
        "'VAR": [
          -1,
          12
        ],
        "'REC": [
          -1,
          12
        ],
        "'WHEN": [
          -1,
          12
        ],
        "'DOTDOTDOT": [
          -1,
          12
        ],
        "'NUMBER": [
          -1,
          12
        ],
        "'RATIONAL": [
          -1,
          12
        ],
        "'ROUGHRATIONAL": [
          -1,
          12
        ],
        "'TRUE": [
          -1,
          12
        ],
        "'FALSE": [
          -1,
          12
        ],
        "'LAM": [
          -1,
          12
        ],
        "'METHOD": [
          -1,
          12
        ],
        "'LBRACK": [
          -1,
          12
        ],
        "'TABLE": [
          -1,
          12
        ],
        "'REACTOR": [
          -1,
          12
        ],
        "'IF": [
          -1,
          12
        ],
        "'ASK": [
          -1,
          12
        ],
        "'CASES": [
          -1,
          12
        ],
        "'FOR": [
          -1,
          12
        ],
        "'TABLE-SELECT": [
          -1,
          12
        ],
        "'TABLE-FILTER": [
          -1,
          12
        ],
        "'TABLE-ORDER": [
          -1,
          12
        ],
        "'TABLE-EXTRACT": [
          -1,
          12
        ],
        "'TABLE-UPDATE": [
          -1,
          12
        ],
        "'TABLE-EXTEND": [
          -1,
          12
        ],
        "'LOAD-TABLE": [
          -1,
          12
        ]
      },
      {
        "import-stmts": [
          7
        ],
        "import-stmts_I0*": [
          8
        ],
        "$": [
          -1,
          14,
          16,
          18
        ],
        "'INCLUDE": [
          -1,
          18
        ],
        "'IMPORT": [
          -1,
          18
        ],
        "'NAME": [
          -1,
          14,
          16,
          18
        ],
        "'STRING": [
          -1,
          14,
          16,
          18
        ],
        "'TYPE": [
          -1,
          14,
          16,
          18
        ],
        "'DATA": [
          -1,
          14,
          16,
          18
        ],
        "'PARENSPACE": [
          -1,
          14,
          16,
          18
        ],
        "'SPY": [
          -1,
          14,
          16,
          18
        ],
        "'NEWTYPE": [
          -1,
          14,
          16,
          18
        ],
        "'LBRACE": [
          -1,
          14,
          16,
          18
        ],
        "'SHADOW": [
          -1,
          14,
          16,
          18
        ],
        "'LET": [
          -1,
          14,
          16,
          18
        ],
        "'BLOCK": [
          -1,
          14,
          16,
          18
        ],
        "'LETREC": [
          -1,
          14,
          16,
          18
        ],
        "'TYPE-LET": [
          -1,
          14,
          16,
          18
        ],
        "'FUN": [
          -1,
          14,
          16,
          18
        ],
        "'PARENAFTERBRACE": [
          -1,
          14,
          16,
          18
        ],
        "'CHECK": [
          -1,
          14,
          16,
          18
        ],
        "'EXAMPLES": [
          -1,
          14,
          16,
          18
        ],
        "'CHECKCOLON": [
          -1,
          14,
          16,
          18
        ],
        "'EXAMPLESCOLON": [
          -1,
          14,
          16,
          18
        ],
        "'VAR": [
          -1,
          14,
          16,
          18
        ],
        "'REC": [
          -1,
          14,
          16,
          18
        ],
        "'WHEN": [
          -1,
          14,
          16,
          18
        ],
        "'DOTDOTDOT": [
          -1,
          14,
          16,
          18
        ],
        "'NUMBER": [
          -1,
          14,
          16,
          18
        ],
        "'RATIONAL": [
          -1,
          14,
          16,
          18
        ],
        "'ROUGHRATIONAL": [
          -1,
          14,
          16,
          18
        ],
        "'TRUE": [
          -1,
          14,
          16,
          18
        ],
        "'FALSE": [
          -1,
          14,
          16,
          18
        ],
        "'LAM": [
          -1,
          14,
          16,
          18
        ],
        "'METHOD": [
          -1,
          14,
          16,
          18
        ],
        "'LBRACK": [
          -1,
          14,
          16,
          18
        ],
        "'TABLE": [
          -1,
          14,
          16,
          18
        ],
        "'REACTOR": [
          -1,
          14,
          16,
          18
        ],
        "'IF": [
          -1,
          14,
          16,
          18
        ],
        "'ASK": [
          -1,
          14,
          16,
          18
        ],
        "'CASES": [
          -1,
          14,
          16,
          18
        ],
        "'FOR": [
          -1,
          14,
          16,
          18
        ],
        "'TABLE-SELECT": [
          -1,
          14,
          16,
          18
        ],
        "'TABLE-FILTER": [
          -1,
          14,
          16,
          18
        ],
        "'TABLE-ORDER": [
          -1,
          14,
          16,
          18
        ],
        "'TABLE-EXTRACT": [
          -1,
          14,
          16,
          18
        ],
        "'TABLE-UPDATE": [
          -1,
          14,
          16,
          18
        ],
        "'TABLE-EXTEND": [
          -1,
          14,
          16,
          18
        ],
        "'LOAD-TABLE": [
          -1,
          14,
          16,
          18
        ]
      },
      {
        "provide-stmts_I0": [
          9
        ],
        "provide-stmt": [
          10
        ],
        "provide-vals-stmt": [
          11
        ],
        "provide-types-stmt": [
          12
        ],
        "provide-block": [
          13
        ],
        "'PROVIDE": [
          14
        ],
        "'PROVIDE-TYPES": [
          15
        ],
        "'PROVIDECOLON": [
          16
        ],
        "$": [
          -1,
          20
        ],
        "'INCLUDE": [
          -1,
          20
        ],
        "'IMPORT": [
          -1,
          20
        ],
        "'NAME": [
          -1,
          20
        ],
        "'STRING": [
          -1,
          20
        ],
        "'TYPE": [
          -1,
          20
        ],
        "'DATA": [
          -1,
          20
        ],
        "'PARENSPACE": [
          -1,
          20
        ],
        "'SPY": [
          -1,
          20
        ],
        "'NEWTYPE": [
          -1,
          20
        ],
        "'LBRACE": [
          -1,
          20
        ],
        "'SHADOW": [
          -1,
          20
        ],
        "'LET": [
          -1,
          20
        ],
        "'BLOCK": [
          -1,
          20
        ],
        "'LETREC": [
          -1,
          20
        ],
        "'TYPE-LET": [
          -1,
          20
        ],
        "'FUN": [
          -1,
          20
        ],
        "'PARENAFTERBRACE": [
          -1,
          20
        ],
        "'CHECK": [
          -1,
          20
        ],
        "'EXAMPLES": [
          -1,
          20
        ],
        "'CHECKCOLON": [
          -1,
          20
        ],
        "'EXAMPLESCOLON": [
          -1,
          20
        ],
        "'VAR": [
          -1,
          20
        ],
        "'REC": [
          -1,
          20
        ],
        "'WHEN": [
          -1,
          20
        ],
        "'DOTDOTDOT": [
          -1,
          20
        ],
        "'NUMBER": [
          -1,
          20
        ],
        "'RATIONAL": [
          -1,
          20
        ],
        "'ROUGHRATIONAL": [
          -1,
          20
        ],
        "'TRUE": [
          -1,
          20
        ],
        "'FALSE": [
          -1,
          20
        ],
        "'LAM": [
          -1,
          20
        ],
        "'METHOD": [
          -1,
          20
        ],
        "'LBRACK": [
          -1,
          20
        ],
        "'TABLE": [
          -1,
          20
        ],
        "'REACTOR": [
          -1,
          20
        ],
        "'IF": [
          -1,
          20
        ],
        "'ASK": [
          -1,
          20
        ],
        "'CASES": [
          -1,
          20
        ],
        "'FOR": [
          -1,
          20
        ],
        "'TABLE-SELECT": [
          -1,
          20
        ],
        "'TABLE-FILTER": [
          -1,
          20
        ],
        "'TABLE-ORDER": [
          -1,
          20
        ],
        "'TABLE-EXTRACT": [
          -1,
          20
        ],
        "'TABLE-UPDATE": [
          -1,
          20
        ],
        "'TABLE-EXTEND": [
          -1,
          20
        ],
        "'LOAD-TABLE": [
          -1,
          20
        ]
      },
      {
        "$": [
          -1,
          22
        ]
      },
      {
        "'NAME": [
          17,
          24
        ],
        "'STRING": [
          18
        ],
        "'TYPE": [
          19
        ],
        "'DATA": [
          20
        ],
        "stmt": [
          21
        ],
        "'PARENSPACE": [
          22
        ],
        "block_I0": [
          23
        ],
        "type-expr": [
          24
        ],
        "newtype-expr": [
          25
        ],
        "spy-stmt": [
          26
        ],
        "let-expr": [
          27
        ],
        "fun-expr": [
          28
        ],
        "data-expr": [
          29
        ],
        "when-expr": [
          30
        ],
        "var-expr": [
          31
        ],
        "rec-expr": [
          32
        ],
        "assign-expr": [
          33
        ],
        "check-test": [
          34
        ],
        "check-expr": [
          35
        ],
        "contract-stmt": [
          36
        ],
        "'SPY": [
          37
        ],
        "binop-expr": [
          38
        ],
        "id-expr": [
          39
        ],
        "'NEWTYPE": [
          40
        ],
        "toplevel-binding": [
          41
        ],
        "binding": [
          42
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          45
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'FUN": [
          56
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "check-expr_A0_I0": [
          58
        ],
        "'CHECK": [
          59
        ],
        "'EXAMPLES": [
          60
        ],
        "check-expr_A1_I0": [
          61
        ],
        "'CHECKCOLON": [
          62
        ],
        "'EXAMPLESCOLON": [
          63
        ],
        "'VAR": [
          64
        ],
        "'REC": [
          65
        ],
        "'WHEN": [
          66
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ],
        "$": [
          -1,
          26
        ],
        "'END": [
          -1,
          26
        ],
        "'RBRACE": [
          -1,
          26
        ],
        "'WHERE": [
          -1,
          26
        ],
        "'BAR": [
          -1,
          26
        ],
        "'ELSECOLON": [
          -1,
          26
        ],
        "'ELSEIF": [
          -1,
          26
        ]
      },
      {
        "$": [
          -1,
          28
        ],
        "'NAME": [
          -1,
          28
        ],
        "'STRING": [
          -1,
          28
        ],
        "'TYPE": [
          -1,
          28
        ],
        "'DATA": [
          -1,
          28
        ],
        "'PARENSPACE": [
          -1,
          28
        ],
        "'SPY": [
          -1,
          28
        ],
        "'NEWTYPE": [
          -1,
          28
        ],
        "'LBRACE": [
          -1,
          28
        ],
        "'SHADOW": [
          -1,
          28
        ],
        "'LET": [
          -1,
          28
        ],
        "'BLOCK": [
          -1,
          28
        ],
        "'LETREC": [
          -1,
          28
        ],
        "'TYPE-LET": [
          -1,
          28
        ],
        "'FUN": [
          -1,
          28
        ],
        "'PARENAFTERBRACE": [
          -1,
          28
        ],
        "'CHECK": [
          -1,
          28
        ],
        "'EXAMPLES": [
          -1,
          28
        ],
        "'CHECKCOLON": [
          -1,
          28
        ],
        "'EXAMPLESCOLON": [
          -1,
          28
        ],
        "'VAR": [
          -1,
          28
        ],
        "'REC": [
          -1,
          28
        ],
        "'WHEN": [
          -1,
          28
        ],
        "'DOTDOTDOT": [
          -1,
          28
        ],
        "'NUMBER": [
          -1,
          28
        ],
        "'RATIONAL": [
          -1,
          28
        ],
        "'ROUGHRATIONAL": [
          -1,
          28
        ],
        "'TRUE": [
          -1,
          28
        ],
        "'FALSE": [
          -1,
          28
        ],
        "'LAM": [
          -1,
          28
        ],
        "'METHOD": [
          -1,
          28
        ],
        "'LBRACK": [
          -1,
          28
        ],
        "'TABLE": [
          -1,
          28
        ],
        "'REACTOR": [
          -1,
          28
        ],
        "'IF": [
          -1,
          28
        ],
        "'ASK": [
          -1,
          28
        ],
        "'CASES": [
          -1,
          28
        ],
        "'FOR": [
          -1,
          28
        ],
        "'TABLE-SELECT": [
          -1,
          28
        ],
        "'TABLE-FILTER": [
          -1,
          28
        ],
        "'TABLE-ORDER": [
          -1,
          28
        ],
        "'TABLE-EXTRACT": [
          -1,
          28
        ],
        "'TABLE-UPDATE": [
          -1,
          28
        ],
        "'TABLE-EXTEND": [
          -1,
          28
        ],
        "'LOAD-TABLE": [
          -1,
          28
        ]
      },
      {
        "import-stmts_I0": [
          126
        ],
        "import-stmt": [
          127
        ],
        "'INCLUDE": [
          128
        ],
        "'IMPORT": [
          129
        ],
        "$": [
          -1,
          30
        ],
        "'NAME": [
          -1,
          30
        ],
        "'STRING": [
          -1,
          30
        ],
        "'TYPE": [
          -1,
          30
        ],
        "'DATA": [
          -1,
          30
        ],
        "'PARENSPACE": [
          -1,
          30
        ],
        "'SPY": [
          -1,
          30
        ],
        "'NEWTYPE": [
          -1,
          30
        ],
        "'LBRACE": [
          -1,
          30
        ],
        "'SHADOW": [
          -1,
          30
        ],
        "'LET": [
          -1,
          30
        ],
        "'BLOCK": [
          -1,
          30
        ],
        "'LETREC": [
          -1,
          30
        ],
        "'TYPE-LET": [
          -1,
          30
        ],
        "'FUN": [
          -1,
          30
        ],
        "'PARENAFTERBRACE": [
          -1,
          30
        ],
        "'CHECK": [
          -1,
          30
        ],
        "'EXAMPLES": [
          -1,
          30
        ],
        "'CHECKCOLON": [
          -1,
          30
        ],
        "'EXAMPLESCOLON": [
          -1,
          30
        ],
        "'VAR": [
          -1,
          30
        ],
        "'REC": [
          -1,
          30
        ],
        "'WHEN": [
          -1,
          30
        ],
        "'DOTDOTDOT": [
          -1,
          30
        ],
        "'NUMBER": [
          -1,
          30
        ],
        "'RATIONAL": [
          -1,
          30
        ],
        "'ROUGHRATIONAL": [
          -1,
          30
        ],
        "'TRUE": [
          -1,
          30
        ],
        "'FALSE": [
          -1,
          30
        ],
        "'LAM": [
          -1,
          30
        ],
        "'METHOD": [
          -1,
          30
        ],
        "'LBRACK": [
          -1,
          30
        ],
        "'TABLE": [
          -1,
          30
        ],
        "'REACTOR": [
          -1,
          30
        ],
        "'IF": [
          -1,
          30
        ],
        "'ASK": [
          -1,
          30
        ],
        "'CASES": [
          -1,
          30
        ],
        "'FOR": [
          -1,
          30
        ],
        "'TABLE-SELECT": [
          -1,
          30
        ],
        "'TABLE-FILTER": [
          -1,
          30
        ],
        "'TABLE-ORDER": [
          -1,
          30
        ],
        "'TABLE-EXTRACT": [
          -1,
          30
        ],
        "'TABLE-UPDATE": [
          -1,
          30
        ],
        "'TABLE-EXTEND": [
          -1,
          30
        ],
        "'LOAD-TABLE": [
          -1,
          30
        ]
      },
      {
        "$": [
          -1,
          32
        ],
        "'INCLUDE": [
          -1,
          32
        ],
        "'IMPORT": [
          -1,
          32
        ],
        "'NAME": [
          -1,
          32
        ],
        "'STRING": [
          -1,
          32
        ],
        "'TYPE": [
          -1,
          32
        ],
        "'DATA": [
          -1,
          32
        ],
        "'PROVIDE": [
          -1,
          32
        ],
        "'PROVIDE-TYPES": [
          -1,
          32
        ],
        "'PROVIDECOLON": [
          -1,
          32
        ],
        "'PARENSPACE": [
          -1,
          32
        ],
        "'SPY": [
          -1,
          32
        ],
        "'NEWTYPE": [
          -1,
          32
        ],
        "'LBRACE": [
          -1,
          32
        ],
        "'SHADOW": [
          -1,
          32
        ],
        "'LET": [
          -1,
          32
        ],
        "'BLOCK": [
          -1,
          32
        ],
        "'LETREC": [
          -1,
          32
        ],
        "'TYPE-LET": [
          -1,
          32
        ],
        "'FUN": [
          -1,
          32
        ],
        "'PARENAFTERBRACE": [
          -1,
          32
        ],
        "'CHECK": [
          -1,
          32
        ],
        "'EXAMPLES": [
          -1,
          32
        ],
        "'CHECKCOLON": [
          -1,
          32
        ],
        "'EXAMPLESCOLON": [
          -1,
          32
        ],
        "'VAR": [
          -1,
          32
        ],
        "'REC": [
          -1,
          32
        ],
        "'WHEN": [
          -1,
          32
        ],
        "'DOTDOTDOT": [
          -1,
          32
        ],
        "'NUMBER": [
          -1,
          32
        ],
        "'RATIONAL": [
          -1,
          32
        ],
        "'ROUGHRATIONAL": [
          -1,
          32
        ],
        "'TRUE": [
          -1,
          32
        ],
        "'FALSE": [
          -1,
          32
        ],
        "'LAM": [
          -1,
          32
        ],
        "'METHOD": [
          -1,
          32
        ],
        "'LBRACK": [
          -1,
          32
        ],
        "'TABLE": [
          -1,
          32
        ],
        "'REACTOR": [
          -1,
          32
        ],
        "'IF": [
          -1,
          32
        ],
        "'ASK": [
          -1,
          32
        ],
        "'CASES": [
          -1,
          32
        ],
        "'FOR": [
          -1,
          32
        ],
        "'TABLE-SELECT": [
          -1,
          32
        ],
        "'TABLE-FILTER": [
          -1,
          32
        ],
        "'TABLE-ORDER": [
          -1,
          32
        ],
        "'TABLE-EXTRACT": [
          -1,
          32
        ],
        "'TABLE-UPDATE": [
          -1,
          32
        ],
        "'TABLE-EXTEND": [
          -1,
          32
        ],
        "'LOAD-TABLE": [
          -1,
          32
        ]
      },
      {
        "$": [
          -1,
          34
        ],
        "'INCLUDE": [
          -1,
          34
        ],
        "'IMPORT": [
          -1,
          34
        ],
        "'NAME": [
          -1,
          34
        ],
        "'STRING": [
          -1,
          34
        ],
        "'TYPE": [
          -1,
          34
        ],
        "'DATA": [
          -1,
          34
        ],
        "'PROVIDE": [
          -1,
          34
        ],
        "'PROVIDE-TYPES": [
          -1,
          34
        ],
        "'PROVIDECOLON": [
          -1,
          34
        ],
        "'PARENSPACE": [
          -1,
          34
        ],
        "'SPY": [
          -1,
          34
        ],
        "'NEWTYPE": [
          -1,
          34
        ],
        "'LBRACE": [
          -1,
          34
        ],
        "'SHADOW": [
          -1,
          34
        ],
        "'LET": [
          -1,
          34
        ],
        "'BLOCK": [
          -1,
          34
        ],
        "'LETREC": [
          -1,
          34
        ],
        "'TYPE-LET": [
          -1,
          34
        ],
        "'FUN": [
          -1,
          34
        ],
        "'PARENAFTERBRACE": [
          -1,
          34
        ],
        "'CHECK": [
          -1,
          34
        ],
        "'EXAMPLES": [
          -1,
          34
        ],
        "'CHECKCOLON": [
          -1,
          34
        ],
        "'EXAMPLESCOLON": [
          -1,
          34
        ],
        "'VAR": [
          -1,
          34
        ],
        "'REC": [
          -1,
          34
        ],
        "'WHEN": [
          -1,
          34
        ],
        "'DOTDOTDOT": [
          -1,
          34
        ],
        "'NUMBER": [
          -1,
          34
        ],
        "'RATIONAL": [
          -1,
          34
        ],
        "'ROUGHRATIONAL": [
          -1,
          34
        ],
        "'TRUE": [
          -1,
          34
        ],
        "'FALSE": [
          -1,
          34
        ],
        "'LAM": [
          -1,
          34
        ],
        "'METHOD": [
          -1,
          34
        ],
        "'LBRACK": [
          -1,
          34
        ],
        "'TABLE": [
          -1,
          34
        ],
        "'REACTOR": [
          -1,
          34
        ],
        "'IF": [
          -1,
          34
        ],
        "'ASK": [
          -1,
          34
        ],
        "'CASES": [
          -1,
          34
        ],
        "'FOR": [
          -1,
          34
        ],
        "'TABLE-SELECT": [
          -1,
          34
        ],
        "'TABLE-FILTER": [
          -1,
          34
        ],
        "'TABLE-ORDER": [
          -1,
          34
        ],
        "'TABLE-EXTRACT": [
          -1,
          34
        ],
        "'TABLE-UPDATE": [
          -1,
          34
        ],
        "'TABLE-EXTEND": [
          -1,
          34
        ],
        "'LOAD-TABLE": [
          -1,
          34
        ]
      },
      {
        "$": [
          -1,
          36
        ],
        "'INCLUDE": [
          -1,
          36
        ],
        "'IMPORT": [
          -1,
          36
        ],
        "'NAME": [
          -1,
          36
        ],
        "'STRING": [
          -1,
          36
        ],
        "'TYPE": [
          -1,
          36
        ],
        "'DATA": [
          -1,
          36
        ],
        "'PROVIDE": [
          -1,
          36
        ],
        "'PROVIDE-TYPES": [
          -1,
          36
        ],
        "'PROVIDECOLON": [
          -1,
          36
        ],
        "'PARENSPACE": [
          -1,
          36
        ],
        "'SPY": [
          -1,
          36
        ],
        "'NEWTYPE": [
          -1,
          36
        ],
        "'LBRACE": [
          -1,
          36
        ],
        "'SHADOW": [
          -1,
          36
        ],
        "'LET": [
          -1,
          36
        ],
        "'BLOCK": [
          -1,
          36
        ],
        "'LETREC": [
          -1,
          36
        ],
        "'TYPE-LET": [
          -1,
          36
        ],
        "'FUN": [
          -1,
          36
        ],
        "'PARENAFTERBRACE": [
          -1,
          36
        ],
        "'CHECK": [
          -1,
          36
        ],
        "'EXAMPLES": [
          -1,
          36
        ],
        "'CHECKCOLON": [
          -1,
          36
        ],
        "'EXAMPLESCOLON": [
          -1,
          36
        ],
        "'VAR": [
          -1,
          36
        ],
        "'REC": [
          -1,
          36
        ],
        "'WHEN": [
          -1,
          36
        ],
        "'DOTDOTDOT": [
          -1,
          36
        ],
        "'NUMBER": [
          -1,
          36
        ],
        "'RATIONAL": [
          -1,
          36
        ],
        "'ROUGHRATIONAL": [
          -1,
          36
        ],
        "'TRUE": [
          -1,
          36
        ],
        "'FALSE": [
          -1,
          36
        ],
        "'LAM": [
          -1,
          36
        ],
        "'METHOD": [
          -1,
          36
        ],
        "'LBRACK": [
          -1,
          36
        ],
        "'TABLE": [
          -1,
          36
        ],
        "'REACTOR": [
          -1,
          36
        ],
        "'IF": [
          -1,
          36
        ],
        "'ASK": [
          -1,
          36
        ],
        "'CASES": [
          -1,
          36
        ],
        "'FOR": [
          -1,
          36
        ],
        "'TABLE-SELECT": [
          -1,
          36
        ],
        "'TABLE-FILTER": [
          -1,
          36
        ],
        "'TABLE-ORDER": [
          -1,
          36
        ],
        "'TABLE-EXTRACT": [
          -1,
          36
        ],
        "'TABLE-UPDATE": [
          -1,
          36
        ],
        "'TABLE-EXTEND": [
          -1,
          36
        ],
        "'LOAD-TABLE": [
          -1,
          36
        ]
      },
      {
        "$": [
          -1,
          38
        ],
        "'INCLUDE": [
          -1,
          38
        ],
        "'IMPORT": [
          -1,
          38
        ],
        "'NAME": [
          -1,
          38
        ],
        "'STRING": [
          -1,
          38
        ],
        "'TYPE": [
          -1,
          38
        ],
        "'DATA": [
          -1,
          38
        ],
        "'PROVIDE": [
          -1,
          38
        ],
        "'PROVIDE-TYPES": [
          -1,
          38
        ],
        "'PROVIDECOLON": [
          -1,
          38
        ],
        "'PARENSPACE": [
          -1,
          38
        ],
        "'SPY": [
          -1,
          38
        ],
        "'NEWTYPE": [
          -1,
          38
        ],
        "'LBRACE": [
          -1,
          38
        ],
        "'SHADOW": [
          -1,
          38
        ],
        "'LET": [
          -1,
          38
        ],
        "'BLOCK": [
          -1,
          38
        ],
        "'LETREC": [
          -1,
          38
        ],
        "'TYPE-LET": [
          -1,
          38
        ],
        "'FUN": [
          -1,
          38
        ],
        "'PARENAFTERBRACE": [
          -1,
          38
        ],
        "'CHECK": [
          -1,
          38
        ],
        "'EXAMPLES": [
          -1,
          38
        ],
        "'CHECKCOLON": [
          -1,
          38
        ],
        "'EXAMPLESCOLON": [
          -1,
          38
        ],
        "'VAR": [
          -1,
          38
        ],
        "'REC": [
          -1,
          38
        ],
        "'WHEN": [
          -1,
          38
        ],
        "'DOTDOTDOT": [
          -1,
          38
        ],
        "'NUMBER": [
          -1,
          38
        ],
        "'RATIONAL": [
          -1,
          38
        ],
        "'ROUGHRATIONAL": [
          -1,
          38
        ],
        "'TRUE": [
          -1,
          38
        ],
        "'FALSE": [
          -1,
          38
        ],
        "'LAM": [
          -1,
          38
        ],
        "'METHOD": [
          -1,
          38
        ],
        "'LBRACK": [
          -1,
          38
        ],
        "'TABLE": [
          -1,
          38
        ],
        "'REACTOR": [
          -1,
          38
        ],
        "'IF": [
          -1,
          38
        ],
        "'ASK": [
          -1,
          38
        ],
        "'CASES": [
          -1,
          38
        ],
        "'FOR": [
          -1,
          38
        ],
        "'TABLE-SELECT": [
          -1,
          38
        ],
        "'TABLE-FILTER": [
          -1,
          38
        ],
        "'TABLE-ORDER": [
          -1,
          38
        ],
        "'TABLE-EXTRACT": [
          -1,
          38
        ],
        "'TABLE-UPDATE": [
          -1,
          38
        ],
        "'TABLE-EXTEND": [
          -1,
          38
        ],
        "'LOAD-TABLE": [
          -1,
          38
        ]
      },
      {
        "$": [
          -1,
          40
        ],
        "'INCLUDE": [
          -1,
          40
        ],
        "'IMPORT": [
          -1,
          40
        ],
        "'NAME": [
          -1,
          40
        ],
        "'STRING": [
          -1,
          40
        ],
        "'TYPE": [
          -1,
          40
        ],
        "'DATA": [
          -1,
          40
        ],
        "'PROVIDE": [
          -1,
          40
        ],
        "'PROVIDE-TYPES": [
          -1,
          40
        ],
        "'PROVIDECOLON": [
          -1,
          40
        ],
        "'PARENSPACE": [
          -1,
          40
        ],
        "'SPY": [
          -1,
          40
        ],
        "'NEWTYPE": [
          -1,
          40
        ],
        "'LBRACE": [
          -1,
          40
        ],
        "'SHADOW": [
          -1,
          40
        ],
        "'LET": [
          -1,
          40
        ],
        "'BLOCK": [
          -1,
          40
        ],
        "'LETREC": [
          -1,
          40
        ],
        "'TYPE-LET": [
          -1,
          40
        ],
        "'FUN": [
          -1,
          40
        ],
        "'PARENAFTERBRACE": [
          -1,
          40
        ],
        "'CHECK": [
          -1,
          40
        ],
        "'EXAMPLES": [
          -1,
          40
        ],
        "'CHECKCOLON": [
          -1,
          40
        ],
        "'EXAMPLESCOLON": [
          -1,
          40
        ],
        "'VAR": [
          -1,
          40
        ],
        "'REC": [
          -1,
          40
        ],
        "'WHEN": [
          -1,
          40
        ],
        "'DOTDOTDOT": [
          -1,
          40
        ],
        "'NUMBER": [
          -1,
          40
        ],
        "'RATIONAL": [
          -1,
          40
        ],
        "'ROUGHRATIONAL": [
          -1,
          40
        ],
        "'TRUE": [
          -1,
          40
        ],
        "'FALSE": [
          -1,
          40
        ],
        "'LAM": [
          -1,
          40
        ],
        "'METHOD": [
          -1,
          40
        ],
        "'LBRACK": [
          -1,
          40
        ],
        "'TABLE": [
          -1,
          40
        ],
        "'REACTOR": [
          -1,
          40
        ],
        "'IF": [
          -1,
          40
        ],
        "'ASK": [
          -1,
          40
        ],
        "'CASES": [
          -1,
          40
        ],
        "'FOR": [
          -1,
          40
        ],
        "'TABLE-SELECT": [
          -1,
          40
        ],
        "'TABLE-FILTER": [
          -1,
          40
        ],
        "'TABLE-ORDER": [
          -1,
          40
        ],
        "'TABLE-EXTRACT": [
          -1,
          40
        ],
        "'TABLE-UPDATE": [
          -1,
          40
        ],
        "'TABLE-EXTEND": [
          -1,
          40
        ],
        "'LOAD-TABLE": [
          -1,
          40
        ]
      },
      {
        "'FROM": [
          130
        ],
        "'NAME": [
          17,
          24
        ],
        "'STRING": [
          18
        ],
        "'TYPE": [
          19
        ],
        "'DATA": [
          20
        ],
        "stmt": [
          131
        ],
        "provide-vals-stmt_A1_I1": [
          132
        ],
        "'STAR": [
          133
        ],
        "'TIMES": [
          134
        ],
        "'PARENSPACE": [
          22
        ],
        "type-expr": [
          24
        ],
        "newtype-expr": [
          25
        ],
        "spy-stmt": [
          26
        ],
        "let-expr": [
          27
        ],
        "fun-expr": [
          28
        ],
        "data-expr": [
          29
        ],
        "when-expr": [
          30
        ],
        "var-expr": [
          31
        ],
        "rec-expr": [
          32
        ],
        "assign-expr": [
          33
        ],
        "check-test": [
          34
        ],
        "check-expr": [
          35
        ],
        "contract-stmt": [
          36
        ],
        "'SPY": [
          37
        ],
        "binop-expr": [
          38
        ],
        "id-expr": [
          39
        ],
        "'NEWTYPE": [
          40
        ],
        "toplevel-binding": [
          41
        ],
        "binding": [
          42
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          45
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'FUN": [
          56
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "check-expr_A0_I0": [
          58
        ],
        "'CHECK": [
          59
        ],
        "'EXAMPLES": [
          60
        ],
        "check-expr_A1_I0": [
          61
        ],
        "'CHECKCOLON": [
          62
        ],
        "'EXAMPLESCOLON": [
          63
        ],
        "'VAR": [
          64
        ],
        "'REC": [
          65
        ],
        "'WHEN": [
          66
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'STAR": [
          135
        ],
        "'TIMES": [
          136
        ],
        "record-ann": [
          137
        ],
        "provide-types-stmt_A1_I1": [
          138
        ],
        "'LBRACE": [
          139
        ]
      },
      {
        "module-ref": [
          140
        ],
        "name-spec": [
          141
        ],
        "'TYPE": [
          142
        ],
        "'DATA": [
          143
        ],
        "'MODULE": [
          144
        ],
        "'STAR": [
          145
        ],
        "'TIMES": [
          146
        ],
        "provide-block_A0_I1?": [
          147
        ],
        "provide-block_A0_I1": [
          148
        ],
        "provide-spec": [
          149
        ],
        "provide-name-spec": [
          150
        ],
        "provide-type-spec": [
          151
        ],
        "provide-data-spec": [
          152
        ],
        "provide-module-spec": [
          153
        ],
        "name-spec_A0_I0": [
          154
        ],
        "module-ref_I0*": [
          155
        ],
        "'END": [
          -1,
          42
        ],
        "'NAME": [
          -1,
          44
        ]
      },
      {
        "'COLONCOLON": [
          156
        ],
        "'COLONEQUALS": [
          157
        ],
        "$": [
          -1,
          46
        ],
        "'END": [
          -1,
          46
        ],
        "'NAME": [
          -1,
          46
        ],
        "'PARENNOSPACE": [
          -1,
          46
        ],
        "'STRING": [
          -1,
          46
        ],
        "'TYPE": [
          -1,
          46
        ],
        "'DATA": [
          -1,
          46
        ],
        "'TIMES": [
          -1,
          46
        ],
        "'PARENSPACE": [
          -1,
          46
        ],
        "'DOT": [
          -1,
          46
        ],
        "'SPY": [
          -1,
          46
        ],
        "'NEWTYPE": [
          -1,
          46
        ],
        "'LBRACE": [
          -1,
          46
        ],
        "'RBRACE": [
          -1,
          46
        ],
        "'SHADOW": [
          -1,
          46
        ],
        "'LET": [
          -1,
          46
        ],
        "'BLOCK": [
          -1,
          46
        ],
        "'LETREC": [
          -1,
          46
        ],
        "'TYPE-LET": [
          -1,
          46
        ],
        "'FUN": [
          -1,
          46
        ],
        "'LANGLE": [
          -1,
          46
        ],
        "'LT": [
          -1,
          46
        ],
        "'GT": [
          -1,
          46
        ],
        "'PARENAFTERBRACE": [
          -1,
          46
        ],
        "'WHERE": [
          -1,
          46
        ],
        "'CHECK": [
          -1,
          46
        ],
        "'EXAMPLES": [
          -1,
          46
        ],
        "'CHECKCOLON": [
          -1,
          46
        ],
        "'EXAMPLESCOLON": [
          -1,
          46
        ],
        "'BAR": [
          -1,
          46
        ],
        "'VAR": [
          -1,
          46
        ],
        "'REC": [
          -1,
          46
        ],
        "'WHEN": [
          -1,
          46
        ],
        "'PLUS": [
          -1,
          46
        ],
        "'DASH": [
          -1,
          46
        ],
        "'SLASH": [
          -1,
          46
        ],
        "'LEQ": [
          -1,
          46
        ],
        "'GEQ": [
          -1,
          46
        ],
        "'EQUALEQUAL": [
          -1,
          46
        ],
        "'SPACESHIP": [
          -1,
          46
        ],
        "'EQUALTILDE": [
          -1,
          46
        ],
        "'NEQ": [
          -1,
          46
        ],
        "'AND": [
          -1,
          46
        ],
        "'OR": [
          -1,
          46
        ],
        "'CARET": [
          -1,
          46
        ],
        "'IS": [
          -1,
          46
        ],
        "'ISEQUALEQUAL": [
          -1,
          46
        ],
        "'ISEQUALTILDE": [
          -1,
          46
        ],
        "'ISSPACESHIP": [
          -1,
          46
        ],
        "'ISROUGHLY": [
          -1,
          46
        ],
        "'ISNOT": [
          -1,
          46
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          46
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          46
        ],
        "'ISNOTSPACESHIP": [
          -1,
          46
        ],
        "'RAISES": [
          -1,
          46
        ],
        "'RAISESOTHER": [
          -1,
          46
        ],
        "'SATISFIES": [
          -1,
          46
        ],
        "'SATISFIESNOT": [
          -1,
          46
        ],
        "'RAISESSATISFIES": [
          -1,
          46
        ],
        "'RAISESVIOLATES": [
          -1,
          46
        ],
        "'RAISESNOT": [
          -1,
          46
        ],
        "'DOTDOTDOT": [
          -1,
          46
        ],
        "'NUMBER": [
          -1,
          46
        ],
        "'RATIONAL": [
          -1,
          46
        ],
        "'ROUGHRATIONAL": [
          -1,
          46
        ],
        "'TRUE": [
          -1,
          46
        ],
        "'FALSE": [
          -1,
          46
        ],
        "'LAM": [
          -1,
          46
        ],
        "'METHOD": [
          -1,
          46
        ],
        "'LBRACK": [
          -1,
          46
        ],
        "'TABLE": [
          -1,
          46
        ],
        "'REACTOR": [
          -1,
          46
        ],
        "'BANG": [
          -1,
          46
        ],
        "'IF": [
          -1,
          46
        ],
        "'ELSECOLON": [
          -1,
          46
        ],
        "'ELSEIF": [
          -1,
          46
        ],
        "'ASK": [
          -1,
          46
        ],
        "'CASES": [
          -1,
          46
        ],
        "'FOR": [
          -1,
          46
        ],
        "'TABLE-SELECT": [
          -1,
          46
        ],
        "'TABLE-FILTER": [
          -1,
          46
        ],
        "'TABLE-ORDER": [
          -1,
          46
        ],
        "'TABLE-EXTRACT": [
          -1,
          46
        ],
        "'TABLE-UPDATE": [
          -1,
          46
        ],
        "'TABLE-EXTEND": [
          -1,
          46
        ],
        "'LOAD-TABLE": [
          -1,
          46
        ]
      },
      {
        "$": [
          -1,
          48
        ],
        "'COLON": [
          -1,
          48
        ],
        "'END": [
          -1,
          48
        ],
        "'COMMA": [
          -1,
          48
        ],
        "'NAME": [
          -1,
          48
        ],
        "'PARENNOSPACE": [
          -1,
          48
        ],
        "'STRING": [
          -1,
          48
        ],
        "'RPAREN": [
          -1,
          48
        ],
        "'TYPE": [
          -1,
          48
        ],
        "'DATA": [
          -1,
          48
        ],
        "'TIMES": [
          -1,
          48
        ],
        "'PARENSPACE": [
          -1,
          48
        ],
        "'DOT": [
          -1,
          48
        ],
        "'SPY": [
          -1,
          48
        ],
        "'NEWTYPE": [
          -1,
          48
        ],
        "'LBRACE": [
          -1,
          48
        ],
        "'RBRACE": [
          -1,
          48
        ],
        "'SEMI": [
          -1,
          48
        ],
        "'SHADOW": [
          -1,
          48
        ],
        "'LET": [
          -1,
          48
        ],
        "'BLOCK": [
          -1,
          48
        ],
        "'LETREC": [
          -1,
          48
        ],
        "'TYPE-LET": [
          -1,
          48
        ],
        "'FUN": [
          -1,
          48
        ],
        "'LANGLE": [
          -1,
          48
        ],
        "'LT": [
          -1,
          48
        ],
        "'GT": [
          -1,
          48
        ],
        "'PARENAFTERBRACE": [
          -1,
          48
        ],
        "'WHERE": [
          -1,
          48
        ],
        "'CHECK": [
          -1,
          48
        ],
        "'EXAMPLES": [
          -1,
          48
        ],
        "'CHECKCOLON": [
          -1,
          48
        ],
        "'EXAMPLESCOLON": [
          -1,
          48
        ],
        "'BECAUSE": [
          -1,
          48
        ],
        "'BAR": [
          -1,
          48
        ],
        "'SHARING": [
          -1,
          48
        ],
        "'VAR": [
          -1,
          48
        ],
        "'REC": [
          -1,
          48
        ],
        "'WHEN": [
          -1,
          48
        ],
        "'PLUS": [
          -1,
          48
        ],
        "'DASH": [
          -1,
          48
        ],
        "'SLASH": [
          -1,
          48
        ],
        "'LEQ": [
          -1,
          48
        ],
        "'GEQ": [
          -1,
          48
        ],
        "'EQUALEQUAL": [
          -1,
          48
        ],
        "'SPACESHIP": [
          -1,
          48
        ],
        "'EQUALTILDE": [
          -1,
          48
        ],
        "'NEQ": [
          -1,
          48
        ],
        "'AND": [
          -1,
          48
        ],
        "'OR": [
          -1,
          48
        ],
        "'CARET": [
          -1,
          48
        ],
        "'IS": [
          -1,
          48
        ],
        "'ISEQUALEQUAL": [
          -1,
          48
        ],
        "'ISEQUALTILDE": [
          -1,
          48
        ],
        "'ISSPACESHIP": [
          -1,
          48
        ],
        "'ISROUGHLY": [
          -1,
          48
        ],
        "'ISNOT": [
          -1,
          48
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          48
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          48
        ],
        "'ISNOTSPACESHIP": [
          -1,
          48
        ],
        "'RAISES": [
          -1,
          48
        ],
        "'RAISESOTHER": [
          -1,
          48
        ],
        "'SATISFIES": [
          -1,
          48
        ],
        "'SATISFIESNOT": [
          -1,
          48
        ],
        "'RAISESSATISFIES": [
          -1,
          48
        ],
        "'RAISESVIOLATES": [
          -1,
          48
        ],
        "'RAISESNOT": [
          -1,
          48
        ],
        "'DOTDOTDOT": [
          -1,
          48
        ],
        "'NUMBER": [
          -1,
          48
        ],
        "'RATIONAL": [
          -1,
          48
        ],
        "'ROUGHRATIONAL": [
          -1,
          48
        ],
        "'TRUE": [
          -1,
          48
        ],
        "'FALSE": [
          -1,
          48
        ],
        "'LAM": [
          -1,
          48
        ],
        "'METHOD": [
          -1,
          48
        ],
        "'LBRACK": [
          -1,
          48
        ],
        "'RBRACK": [
          -1,
          48
        ],
        "'TABLE": [
          -1,
          48
        ],
        "'ROW": [
          -1,
          48
        ],
        "'REACTOR": [
          -1,
          48
        ],
        "'BANG": [
          -1,
          48
        ],
        "'IF": [
          -1,
          48
        ],
        "'ELSECOLON": [
          -1,
          48
        ],
        "'ELSEIF": [
          -1,
          48
        ],
        "'ASK": [
          -1,
          48
        ],
        "'THENCOLON": [
          -1,
          48
        ],
        "'CASES": [
          -1,
          48
        ],
        "'FOR": [
          -1,
          48
        ],
        "'TABLE-SELECT": [
          -1,
          48
        ],
        "'TABLE-FILTER": [
          -1,
          48
        ],
        "'USING": [
          -1,
          48
        ],
        "'TABLE-ORDER": [
          -1,
          48
        ],
        "'TABLE-EXTRACT": [
          -1,
          48
        ],
        "'TABLE-UPDATE": [
          -1,
          48
        ],
        "'TABLE-EXTEND": [
          -1,
          48
        ],
        "'OF": [
          -1,
          48
        ],
        "'LOAD-TABLE": [
          -1,
          48
        ],
        "'SOURCECOLON": [
          -1,
          48
        ],
        "'SANITIZE": [
          -1,
          48
        ]
      },
      {
        "'NAME": [
          158
        ]
      },
      {
        "'NAME": [
          159
        ]
      },
      {
        "$": [
          -1,
          50
        ],
        "'END": [
          -1,
          50
        ],
        "'NAME": [
          -1,
          50
        ],
        "'STRING": [
          -1,
          50
        ],
        "'TYPE": [
          -1,
          50
        ],
        "'DATA": [
          -1,
          50
        ],
        "'PARENSPACE": [
          -1,
          50
        ],
        "'SPY": [
          -1,
          50
        ],
        "'NEWTYPE": [
          -1,
          50
        ],
        "'LBRACE": [
          -1,
          50
        ],
        "'RBRACE": [
          -1,
          50
        ],
        "'SHADOW": [
          -1,
          50
        ],
        "'LET": [
          -1,
          50
        ],
        "'BLOCK": [
          -1,
          50
        ],
        "'LETREC": [
          -1,
          50
        ],
        "'TYPE-LET": [
          -1,
          50
        ],
        "'FUN": [
          -1,
          50
        ],
        "'PARENAFTERBRACE": [
          -1,
          50
        ],
        "'WHERE": [
          -1,
          50
        ],
        "'CHECK": [
          -1,
          50
        ],
        "'EXAMPLES": [
          -1,
          50
        ],
        "'CHECKCOLON": [
          -1,
          50
        ],
        "'EXAMPLESCOLON": [
          -1,
          50
        ],
        "'BAR": [
          -1,
          50
        ],
        "'VAR": [
          -1,
          50
        ],
        "'REC": [
          -1,
          50
        ],
        "'WHEN": [
          -1,
          50
        ],
        "'DOTDOTDOT": [
          -1,
          50
        ],
        "'NUMBER": [
          -1,
          50
        ],
        "'RATIONAL": [
          -1,
          50
        ],
        "'ROUGHRATIONAL": [
          -1,
          50
        ],
        "'TRUE": [
          -1,
          50
        ],
        "'FALSE": [
          -1,
          50
        ],
        "'LAM": [
          -1,
          50
        ],
        "'METHOD": [
          -1,
          50
        ],
        "'LBRACK": [
          -1,
          50
        ],
        "'TABLE": [
          -1,
          50
        ],
        "'REACTOR": [
          -1,
          50
        ],
        "'IF": [
          -1,
          50
        ],
        "'ELSECOLON": [
          -1,
          50
        ],
        "'ELSEIF": [
          -1,
          50
        ],
        "'ASK": [
          -1,
          50
        ],
        "'CASES": [
          -1,
          50
        ],
        "'FOR": [
          -1,
          50
        ],
        "'TABLE-SELECT": [
          -1,
          50
        ],
        "'TABLE-FILTER": [
          -1,
          50
        ],
        "'TABLE-ORDER": [
          -1,
          50
        ],
        "'TABLE-EXTRACT": [
          -1,
          50
        ],
        "'TABLE-UPDATE": [
          -1,
          50
        ],
        "'TABLE-EXTEND": [
          -1,
          50
        ],
        "'LOAD-TABLE": [
          -1,
          50
        ]
      },
      {
        "'NAME": [
          -1,
          52
        ],
        "'STRING": [
          -1,
          52
        ],
        "'PARENSPACE": [
          -1,
          52
        ],
        "'LBRACE": [
          -1,
          52
        ],
        "'LET": [
          -1,
          52
        ],
        "'BLOCK": [
          -1,
          52
        ],
        "'LETREC": [
          -1,
          52
        ],
        "'TYPE-LET": [
          -1,
          52
        ],
        "'PARENAFTERBRACE": [
          -1,
          52
        ],
        "'DOTDOTDOT": [
          -1,
          52
        ],
        "'NUMBER": [
          -1,
          52
        ],
        "'RATIONAL": [
          -1,
          52
        ],
        "'ROUGHRATIONAL": [
          -1,
          52
        ],
        "'TRUE": [
          -1,
          52
        ],
        "'FALSE": [
          -1,
          52
        ],
        "'LAM": [
          -1,
          52
        ],
        "'METHOD": [
          -1,
          52
        ],
        "'LBRACK": [
          -1,
          52
        ],
        "'TABLE": [
          -1,
          52
        ],
        "'REACTOR": [
          -1,
          52
        ],
        "'IF": [
          -1,
          52
        ],
        "'ASK": [
          -1,
          52
        ],
        "'CASES": [
          -1,
          52
        ],
        "'FOR": [
          -1,
          52
        ],
        "'TABLE-SELECT": [
          -1,
          52
        ],
        "'TABLE-FILTER": [
          -1,
          52
        ],
        "'TABLE-ORDER": [
          -1,
          52
        ],
        "'TABLE-EXTRACT": [
          -1,
          52
        ],
        "'TABLE-UPDATE": [
          -1,
          52
        ],
        "'TABLE-EXTEND": [
          -1,
          52
        ],
        "'LOAD-TABLE": [
          -1,
          52
        ]
      },
      {
        "$": [
          -1,
          54
        ],
        "'END": [
          -1,
          54
        ],
        "'NAME": [
          -1,
          54
        ],
        "'STRING": [
          -1,
          54
        ],
        "'TYPE": [
          -1,
          54
        ],
        "'DATA": [
          -1,
          54
        ],
        "'PARENSPACE": [
          -1,
          54
        ],
        "'SPY": [
          -1,
          54
        ],
        "'NEWTYPE": [
          -1,
          54
        ],
        "'LBRACE": [
          -1,
          54
        ],
        "'RBRACE": [
          -1,
          54
        ],
        "'SHADOW": [
          -1,
          54
        ],
        "'LET": [
          -1,
          54
        ],
        "'BLOCK": [
          -1,
          54
        ],
        "'LETREC": [
          -1,
          54
        ],
        "'TYPE-LET": [
          -1,
          54
        ],
        "'FUN": [
          -1,
          54
        ],
        "'PARENAFTERBRACE": [
          -1,
          54
        ],
        "'WHERE": [
          -1,
          54
        ],
        "'CHECK": [
          -1,
          54
        ],
        "'EXAMPLES": [
          -1,
          54
        ],
        "'CHECKCOLON": [
          -1,
          54
        ],
        "'EXAMPLESCOLON": [
          -1,
          54
        ],
        "'BAR": [
          -1,
          54
        ],
        "'VAR": [
          -1,
          54
        ],
        "'REC": [
          -1,
          54
        ],
        "'WHEN": [
          -1,
          54
        ],
        "'DOTDOTDOT": [
          -1,
          54
        ],
        "'NUMBER": [
          -1,
          54
        ],
        "'RATIONAL": [
          -1,
          54
        ],
        "'ROUGHRATIONAL": [
          -1,
          54
        ],
        "'TRUE": [
          -1,
          54
        ],
        "'FALSE": [
          -1,
          54
        ],
        "'LAM": [
          -1,
          54
        ],
        "'METHOD": [
          -1,
          54
        ],
        "'LBRACK": [
          -1,
          54
        ],
        "'TABLE": [
          -1,
          54
        ],
        "'REACTOR": [
          -1,
          54
        ],
        "'IF": [
          -1,
          54
        ],
        "'ELSECOLON": [
          -1,
          54
        ],
        "'ELSEIF": [
          -1,
          54
        ],
        "'ASK": [
          -1,
          54
        ],
        "'CASES": [
          -1,
          54
        ],
        "'FOR": [
          -1,
          54
        ],
        "'TABLE-SELECT": [
          -1,
          54
        ],
        "'TABLE-FILTER": [
          -1,
          54
        ],
        "'TABLE-ORDER": [
          -1,
          54
        ],
        "'TABLE-EXTRACT": [
          -1,
          54
        ],
        "'TABLE-UPDATE": [
          -1,
          54
        ],
        "'TABLE-EXTEND": [
          -1,
          54
        ],
        "'LOAD-TABLE": [
          -1,
          54
        ]
      },
      {
        "$": [
          -1,
          56
        ],
        "'END": [
          -1,
          56
        ],
        "'NAME": [
          -1,
          56
        ],
        "'STRING": [
          -1,
          56
        ],
        "'TYPE": [
          -1,
          56
        ],
        "'DATA": [
          -1,
          56
        ],
        "'PARENSPACE": [
          -1,
          56
        ],
        "'SPY": [
          -1,
          56
        ],
        "'NEWTYPE": [
          -1,
          56
        ],
        "'LBRACE": [
          -1,
          56
        ],
        "'RBRACE": [
          -1,
          56
        ],
        "'SHADOW": [
          -1,
          56
        ],
        "'LET": [
          -1,
          56
        ],
        "'BLOCK": [
          -1,
          56
        ],
        "'LETREC": [
          -1,
          56
        ],
        "'TYPE-LET": [
          -1,
          56
        ],
        "'FUN": [
          -1,
          56
        ],
        "'PARENAFTERBRACE": [
          -1,
          56
        ],
        "'WHERE": [
          -1,
          56
        ],
        "'CHECK": [
          -1,
          56
        ],
        "'EXAMPLES": [
          -1,
          56
        ],
        "'CHECKCOLON": [
          -1,
          56
        ],
        "'EXAMPLESCOLON": [
          -1,
          56
        ],
        "'BAR": [
          -1,
          56
        ],
        "'VAR": [
          -1,
          56
        ],
        "'REC": [
          -1,
          56
        ],
        "'WHEN": [
          -1,
          56
        ],
        "'DOTDOTDOT": [
          -1,
          56
        ],
        "'NUMBER": [
          -1,
          56
        ],
        "'RATIONAL": [
          -1,
          56
        ],
        "'ROUGHRATIONAL": [
          -1,
          56
        ],
        "'TRUE": [
          -1,
          56
        ],
        "'FALSE": [
          -1,
          56
        ],
        "'LAM": [
          -1,
          56
        ],
        "'METHOD": [
          -1,
          56
        ],
        "'LBRACK": [
          -1,
          56
        ],
        "'TABLE": [
          -1,
          56
        ],
        "'REACTOR": [
          -1,
          56
        ],
        "'IF": [
          -1,
          56
        ],
        "'ELSECOLON": [
          -1,
          56
        ],
        "'ELSEIF": [
          -1,
          56
        ],
        "'ASK": [
          -1,
          56
        ],
        "'CASES": [
          -1,
          56
        ],
        "'FOR": [
          -1,
          56
        ],
        "'TABLE-SELECT": [
          -1,
          56
        ],
        "'TABLE-FILTER": [
          -1,
          56
        ],
        "'TABLE-ORDER": [
          -1,
          56
        ],
        "'TABLE-EXTRACT": [
          -1,
          56
        ],
        "'TABLE-UPDATE": [
          -1,
          56
        ],
        "'TABLE-EXTEND": [
          -1,
          56
        ],
        "'LOAD-TABLE": [
          -1,
          56
        ]
      },
      {
        "$": [
          -1,
          58
        ],
        "'END": [
          -1,
          58
        ],
        "'NAME": [
          -1,
          58
        ],
        "'STRING": [
          -1,
          58
        ],
        "'TYPE": [
          -1,
          58
        ],
        "'DATA": [
          -1,
          58
        ],
        "'PARENSPACE": [
          -1,
          58
        ],
        "'SPY": [
          -1,
          58
        ],
        "'NEWTYPE": [
          -1,
          58
        ],
        "'LBRACE": [
          -1,
          58
        ],
        "'RBRACE": [
          -1,
          58
        ],
        "'SHADOW": [
          -1,
          58
        ],
        "'LET": [
          -1,
          58
        ],
        "'BLOCK": [
          -1,
          58
        ],
        "'LETREC": [
          -1,
          58
        ],
        "'TYPE-LET": [
          -1,
          58
        ],
        "'FUN": [
          -1,
          58
        ],
        "'PARENAFTERBRACE": [
          -1,
          58
        ],
        "'WHERE": [
          -1,
          58
        ],
        "'CHECK": [
          -1,
          58
        ],
        "'EXAMPLES": [
          -1,
          58
        ],
        "'CHECKCOLON": [
          -1,
          58
        ],
        "'EXAMPLESCOLON": [
          -1,
          58
        ],
        "'BAR": [
          -1,
          58
        ],
        "'VAR": [
          -1,
          58
        ],
        "'REC": [
          -1,
          58
        ],
        "'WHEN": [
          -1,
          58
        ],
        "'DOTDOTDOT": [
          -1,
          58
        ],
        "'NUMBER": [
          -1,
          58
        ],
        "'RATIONAL": [
          -1,
          58
        ],
        "'ROUGHRATIONAL": [
          -1,
          58
        ],
        "'TRUE": [
          -1,
          58
        ],
        "'FALSE": [
          -1,
          58
        ],
        "'LAM": [
          -1,
          58
        ],
        "'METHOD": [
          -1,
          58
        ],
        "'LBRACK": [
          -1,
          58
        ],
        "'TABLE": [
          -1,
          58
        ],
        "'REACTOR": [
          -1,
          58
        ],
        "'IF": [
          -1,
          58
        ],
        "'ELSECOLON": [
          -1,
          58
        ],
        "'ELSEIF": [
          -1,
          58
        ],
        "'ASK": [
          -1,
          58
        ],
        "'CASES": [
          -1,
          58
        ],
        "'FOR": [
          -1,
          58
        ],
        "'TABLE-SELECT": [
          -1,
          58
        ],
        "'TABLE-FILTER": [
          -1,
          58
        ],
        "'TABLE-ORDER": [
          -1,
          58
        ],
        "'TABLE-EXTRACT": [
          -1,
          58
        ],
        "'TABLE-UPDATE": [
          -1,
          58
        ],
        "'TABLE-EXTEND": [
          -1,
          58
        ],
        "'LOAD-TABLE": [
          -1,
          58
        ]
      },
      {
        "$": [
          -1,
          60
        ],
        "'END": [
          -1,
          60
        ],
        "'NAME": [
          -1,
          60
        ],
        "'STRING": [
          -1,
          60
        ],
        "'TYPE": [
          -1,
          60
        ],
        "'DATA": [
          -1,
          60
        ],
        "'PARENSPACE": [
          -1,
          60
        ],
        "'SPY": [
          -1,
          60
        ],
        "'NEWTYPE": [
          -1,
          60
        ],
        "'LBRACE": [
          -1,
          60
        ],
        "'RBRACE": [
          -1,
          60
        ],
        "'SHADOW": [
          -1,
          60
        ],
        "'LET": [
          -1,
          60
        ],
        "'BLOCK": [
          -1,
          60
        ],
        "'LETREC": [
          -1,
          60
        ],
        "'TYPE-LET": [
          -1,
          60
        ],
        "'FUN": [
          -1,
          60
        ],
        "'PARENAFTERBRACE": [
          -1,
          60
        ],
        "'WHERE": [
          -1,
          60
        ],
        "'CHECK": [
          -1,
          60
        ],
        "'EXAMPLES": [
          -1,
          60
        ],
        "'CHECKCOLON": [
          -1,
          60
        ],
        "'EXAMPLESCOLON": [
          -1,
          60
        ],
        "'BAR": [
          -1,
          60
        ],
        "'VAR": [
          -1,
          60
        ],
        "'REC": [
          -1,
          60
        ],
        "'WHEN": [
          -1,
          60
        ],
        "'DOTDOTDOT": [
          -1,
          60
        ],
        "'NUMBER": [
          -1,
          60
        ],
        "'RATIONAL": [
          -1,
          60
        ],
        "'ROUGHRATIONAL": [
          -1,
          60
        ],
        "'TRUE": [
          -1,
          60
        ],
        "'FALSE": [
          -1,
          60
        ],
        "'LAM": [
          -1,
          60
        ],
        "'METHOD": [
          -1,
          60
        ],
        "'LBRACK": [
          -1,
          60
        ],
        "'TABLE": [
          -1,
          60
        ],
        "'REACTOR": [
          -1,
          60
        ],
        "'IF": [
          -1,
          60
        ],
        "'ELSECOLON": [
          -1,
          60
        ],
        "'ELSEIF": [
          -1,
          60
        ],
        "'ASK": [
          -1,
          60
        ],
        "'CASES": [
          -1,
          60
        ],
        "'FOR": [
          -1,
          60
        ],
        "'TABLE-SELECT": [
          -1,
          60
        ],
        "'TABLE-FILTER": [
          -1,
          60
        ],
        "'TABLE-ORDER": [
          -1,
          60
        ],
        "'TABLE-EXTRACT": [
          -1,
          60
        ],
        "'TABLE-UPDATE": [
          -1,
          60
        ],
        "'TABLE-EXTEND": [
          -1,
          60
        ],
        "'LOAD-TABLE": [
          -1,
          60
        ]
      },
      {
        "$": [
          -1,
          62
        ],
        "'END": [
          -1,
          62
        ],
        "'NAME": [
          -1,
          62
        ],
        "'STRING": [
          -1,
          62
        ],
        "'TYPE": [
          -1,
          62
        ],
        "'DATA": [
          -1,
          62
        ],
        "'PARENSPACE": [
          -1,
          62
        ],
        "'SPY": [
          -1,
          62
        ],
        "'NEWTYPE": [
          -1,
          62
        ],
        "'LBRACE": [
          -1,
          62
        ],
        "'RBRACE": [
          -1,
          62
        ],
        "'SHADOW": [
          -1,
          62
        ],
        "'LET": [
          -1,
          62
        ],
        "'BLOCK": [
          -1,
          62
        ],
        "'LETREC": [
          -1,
          62
        ],
        "'TYPE-LET": [
          -1,
          62
        ],
        "'FUN": [
          -1,
          62
        ],
        "'PARENAFTERBRACE": [
          -1,
          62
        ],
        "'WHERE": [
          -1,
          62
        ],
        "'CHECK": [
          -1,
          62
        ],
        "'EXAMPLES": [
          -1,
          62
        ],
        "'CHECKCOLON": [
          -1,
          62
        ],
        "'EXAMPLESCOLON": [
          -1,
          62
        ],
        "'BAR": [
          -1,
          62
        ],
        "'VAR": [
          -1,
          62
        ],
        "'REC": [
          -1,
          62
        ],
        "'WHEN": [
          -1,
          62
        ],
        "'DOTDOTDOT": [
          -1,
          62
        ],
        "'NUMBER": [
          -1,
          62
        ],
        "'RATIONAL": [
          -1,
          62
        ],
        "'ROUGHRATIONAL": [
          -1,
          62
        ],
        "'TRUE": [
          -1,
          62
        ],
        "'FALSE": [
          -1,
          62
        ],
        "'LAM": [
          -1,
          62
        ],
        "'METHOD": [
          -1,
          62
        ],
        "'LBRACK": [
          -1,
          62
        ],
        "'TABLE": [
          -1,
          62
        ],
        "'REACTOR": [
          -1,
          62
        ],
        "'IF": [
          -1,
          62
        ],
        "'ELSECOLON": [
          -1,
          62
        ],
        "'ELSEIF": [
          -1,
          62
        ],
        "'ASK": [
          -1,
          62
        ],
        "'CASES": [
          -1,
          62
        ],
        "'FOR": [
          -1,
          62
        ],
        "'TABLE-SELECT": [
          -1,
          62
        ],
        "'TABLE-FILTER": [
          -1,
          62
        ],
        "'TABLE-ORDER": [
          -1,
          62
        ],
        "'TABLE-EXTRACT": [
          -1,
          62
        ],
        "'TABLE-UPDATE": [
          -1,
          62
        ],
        "'TABLE-EXTEND": [
          -1,
          62
        ],
        "'LOAD-TABLE": [
          -1,
          62
        ]
      },
      {
        "$": [
          -1,
          64
        ],
        "'END": [
          -1,
          64
        ],
        "'NAME": [
          -1,
          64
        ],
        "'STRING": [
          -1,
          64
        ],
        "'TYPE": [
          -1,
          64
        ],
        "'DATA": [
          -1,
          64
        ],
        "'PARENSPACE": [
          -1,
          64
        ],
        "'SPY": [
          -1,
          64
        ],
        "'NEWTYPE": [
          -1,
          64
        ],
        "'LBRACE": [
          -1,
          64
        ],
        "'RBRACE": [
          -1,
          64
        ],
        "'SHADOW": [
          -1,
          64
        ],
        "'LET": [
          -1,
          64
        ],
        "'BLOCK": [
          -1,
          64
        ],
        "'LETREC": [
          -1,
          64
        ],
        "'TYPE-LET": [
          -1,
          64
        ],
        "'FUN": [
          -1,
          64
        ],
        "'PARENAFTERBRACE": [
          -1,
          64
        ],
        "'WHERE": [
          -1,
          64
        ],
        "'CHECK": [
          -1,
          64
        ],
        "'EXAMPLES": [
          -1,
          64
        ],
        "'CHECKCOLON": [
          -1,
          64
        ],
        "'EXAMPLESCOLON": [
          -1,
          64
        ],
        "'BAR": [
          -1,
          64
        ],
        "'VAR": [
          -1,
          64
        ],
        "'REC": [
          -1,
          64
        ],
        "'WHEN": [
          -1,
          64
        ],
        "'DOTDOTDOT": [
          -1,
          64
        ],
        "'NUMBER": [
          -1,
          64
        ],
        "'RATIONAL": [
          -1,
          64
        ],
        "'ROUGHRATIONAL": [
          -1,
          64
        ],
        "'TRUE": [
          -1,
          64
        ],
        "'FALSE": [
          -1,
          64
        ],
        "'LAM": [
          -1,
          64
        ],
        "'METHOD": [
          -1,
          64
        ],
        "'LBRACK": [
          -1,
          64
        ],
        "'TABLE": [
          -1,
          64
        ],
        "'REACTOR": [
          -1,
          64
        ],
        "'IF": [
          -1,
          64
        ],
        "'ELSECOLON": [
          -1,
          64
        ],
        "'ELSEIF": [
          -1,
          64
        ],
        "'ASK": [
          -1,
          64
        ],
        "'CASES": [
          -1,
          64
        ],
        "'FOR": [
          -1,
          64
        ],
        "'TABLE-SELECT": [
          -1,
          64
        ],
        "'TABLE-FILTER": [
          -1,
          64
        ],
        "'TABLE-ORDER": [
          -1,
          64
        ],
        "'TABLE-EXTRACT": [
          -1,
          64
        ],
        "'TABLE-UPDATE": [
          -1,
          64
        ],
        "'TABLE-EXTEND": [
          -1,
          64
        ],
        "'LOAD-TABLE": [
          -1,
          64
        ]
      },
      {
        "$": [
          -1,
          66
        ],
        "'END": [
          -1,
          66
        ],
        "'NAME": [
          -1,
          66
        ],
        "'STRING": [
          -1,
          66
        ],
        "'TYPE": [
          -1,
          66
        ],
        "'DATA": [
          -1,
          66
        ],
        "'PARENSPACE": [
          -1,
          66
        ],
        "'SPY": [
          -1,
          66
        ],
        "'NEWTYPE": [
          -1,
          66
        ],
        "'LBRACE": [
          -1,
          66
        ],
        "'RBRACE": [
          -1,
          66
        ],
        "'SHADOW": [
          -1,
          66
        ],
        "'LET": [
          -1,
          66
        ],
        "'BLOCK": [
          -1,
          66
        ],
        "'LETREC": [
          -1,
          66
        ],
        "'TYPE-LET": [
          -1,
          66
        ],
        "'FUN": [
          -1,
          66
        ],
        "'PARENAFTERBRACE": [
          -1,
          66
        ],
        "'WHERE": [
          -1,
          66
        ],
        "'CHECK": [
          -1,
          66
        ],
        "'EXAMPLES": [
          -1,
          66
        ],
        "'CHECKCOLON": [
          -1,
          66
        ],
        "'EXAMPLESCOLON": [
          -1,
          66
        ],
        "'BAR": [
          -1,
          66
        ],
        "'VAR": [
          -1,
          66
        ],
        "'REC": [
          -1,
          66
        ],
        "'WHEN": [
          -1,
          66
        ],
        "'DOTDOTDOT": [
          -1,
          66
        ],
        "'NUMBER": [
          -1,
          66
        ],
        "'RATIONAL": [
          -1,
          66
        ],
        "'ROUGHRATIONAL": [
          -1,
          66
        ],
        "'TRUE": [
          -1,
          66
        ],
        "'FALSE": [
          -1,
          66
        ],
        "'LAM": [
          -1,
          66
        ],
        "'METHOD": [
          -1,
          66
        ],
        "'LBRACK": [
          -1,
          66
        ],
        "'TABLE": [
          -1,
          66
        ],
        "'REACTOR": [
          -1,
          66
        ],
        "'IF": [
          -1,
          66
        ],
        "'ELSECOLON": [
          -1,
          66
        ],
        "'ELSEIF": [
          -1,
          66
        ],
        "'ASK": [
          -1,
          66
        ],
        "'CASES": [
          -1,
          66
        ],
        "'FOR": [
          -1,
          66
        ],
        "'TABLE-SELECT": [
          -1,
          66
        ],
        "'TABLE-FILTER": [
          -1,
          66
        ],
        "'TABLE-ORDER": [
          -1,
          66
        ],
        "'TABLE-EXTRACT": [
          -1,
          66
        ],
        "'TABLE-UPDATE": [
          -1,
          66
        ],
        "'TABLE-EXTEND": [
          -1,
          66
        ],
        "'LOAD-TABLE": [
          -1,
          66
        ]
      },
      {
        "$": [
          -1,
          68
        ],
        "'END": [
          -1,
          68
        ],
        "'NAME": [
          -1,
          68
        ],
        "'STRING": [
          -1,
          68
        ],
        "'TYPE": [
          -1,
          68
        ],
        "'DATA": [
          -1,
          68
        ],
        "'PARENSPACE": [
          -1,
          68
        ],
        "'SPY": [
          -1,
          68
        ],
        "'NEWTYPE": [
          -1,
          68
        ],
        "'LBRACE": [
          -1,
          68
        ],
        "'RBRACE": [
          -1,
          68
        ],
        "'SHADOW": [
          -1,
          68
        ],
        "'LET": [
          -1,
          68
        ],
        "'BLOCK": [
          -1,
          68
        ],
        "'LETREC": [
          -1,
          68
        ],
        "'TYPE-LET": [
          -1,
          68
        ],
        "'FUN": [
          -1,
          68
        ],
        "'PARENAFTERBRACE": [
          -1,
          68
        ],
        "'WHERE": [
          -1,
          68
        ],
        "'CHECK": [
          -1,
          68
        ],
        "'EXAMPLES": [
          -1,
          68
        ],
        "'CHECKCOLON": [
          -1,
          68
        ],
        "'EXAMPLESCOLON": [
          -1,
          68
        ],
        "'BAR": [
          -1,
          68
        ],
        "'VAR": [
          -1,
          68
        ],
        "'REC": [
          -1,
          68
        ],
        "'WHEN": [
          -1,
          68
        ],
        "'DOTDOTDOT": [
          -1,
          68
        ],
        "'NUMBER": [
          -1,
          68
        ],
        "'RATIONAL": [
          -1,
          68
        ],
        "'ROUGHRATIONAL": [
          -1,
          68
        ],
        "'TRUE": [
          -1,
          68
        ],
        "'FALSE": [
          -1,
          68
        ],
        "'LAM": [
          -1,
          68
        ],
        "'METHOD": [
          -1,
          68
        ],
        "'LBRACK": [
          -1,
          68
        ],
        "'TABLE": [
          -1,
          68
        ],
        "'REACTOR": [
          -1,
          68
        ],
        "'IF": [
          -1,
          68
        ],
        "'ELSECOLON": [
          -1,
          68
        ],
        "'ELSEIF": [
          -1,
          68
        ],
        "'ASK": [
          -1,
          68
        ],
        "'CASES": [
          -1,
          68
        ],
        "'FOR": [
          -1,
          68
        ],
        "'TABLE-SELECT": [
          -1,
          68
        ],
        "'TABLE-FILTER": [
          -1,
          68
        ],
        "'TABLE-ORDER": [
          -1,
          68
        ],
        "'TABLE-EXTRACT": [
          -1,
          68
        ],
        "'TABLE-UPDATE": [
          -1,
          68
        ],
        "'TABLE-EXTEND": [
          -1,
          68
        ],
        "'LOAD-TABLE": [
          -1,
          68
        ]
      },
      {
        "$": [
          -1,
          70
        ],
        "'END": [
          -1,
          70
        ],
        "'NAME": [
          -1,
          70
        ],
        "'STRING": [
          -1,
          70
        ],
        "'TYPE": [
          -1,
          70
        ],
        "'DATA": [
          -1,
          70
        ],
        "'PARENSPACE": [
          -1,
          70
        ],
        "'SPY": [
          -1,
          70
        ],
        "'NEWTYPE": [
          -1,
          70
        ],
        "'LBRACE": [
          -1,
          70
        ],
        "'RBRACE": [
          -1,
          70
        ],
        "'SHADOW": [
          -1,
          70
        ],
        "'LET": [
          -1,
          70
        ],
        "'BLOCK": [
          -1,
          70
        ],
        "'LETREC": [
          -1,
          70
        ],
        "'TYPE-LET": [
          -1,
          70
        ],
        "'FUN": [
          -1,
          70
        ],
        "'PARENAFTERBRACE": [
          -1,
          70
        ],
        "'WHERE": [
          -1,
          70
        ],
        "'CHECK": [
          -1,
          70
        ],
        "'EXAMPLES": [
          -1,
          70
        ],
        "'CHECKCOLON": [
          -1,
          70
        ],
        "'EXAMPLESCOLON": [
          -1,
          70
        ],
        "'BAR": [
          -1,
          70
        ],
        "'VAR": [
          -1,
          70
        ],
        "'REC": [
          -1,
          70
        ],
        "'WHEN": [
          -1,
          70
        ],
        "'DOTDOTDOT": [
          -1,
          70
        ],
        "'NUMBER": [
          -1,
          70
        ],
        "'RATIONAL": [
          -1,
          70
        ],
        "'ROUGHRATIONAL": [
          -1,
          70
        ],
        "'TRUE": [
          -1,
          70
        ],
        "'FALSE": [
          -1,
          70
        ],
        "'LAM": [
          -1,
          70
        ],
        "'METHOD": [
          -1,
          70
        ],
        "'LBRACK": [
          -1,
          70
        ],
        "'TABLE": [
          -1,
          70
        ],
        "'REACTOR": [
          -1,
          70
        ],
        "'IF": [
          -1,
          70
        ],
        "'ELSECOLON": [
          -1,
          70
        ],
        "'ELSEIF": [
          -1,
          70
        ],
        "'ASK": [
          -1,
          70
        ],
        "'CASES": [
          -1,
          70
        ],
        "'FOR": [
          -1,
          70
        ],
        "'TABLE-SELECT": [
          -1,
          70
        ],
        "'TABLE-FILTER": [
          -1,
          70
        ],
        "'TABLE-ORDER": [
          -1,
          70
        ],
        "'TABLE-EXTRACT": [
          -1,
          70
        ],
        "'TABLE-UPDATE": [
          -1,
          70
        ],
        "'TABLE-EXTEND": [
          -1,
          70
        ],
        "'LOAD-TABLE": [
          -1,
          70
        ]
      },
      {
        "$": [
          -1,
          72
        ],
        "'END": [
          -1,
          72
        ],
        "'NAME": [
          -1,
          72
        ],
        "'STRING": [
          -1,
          72
        ],
        "'TYPE": [
          -1,
          72
        ],
        "'DATA": [
          -1,
          72
        ],
        "'PARENSPACE": [
          -1,
          72
        ],
        "'SPY": [
          -1,
          72
        ],
        "'NEWTYPE": [
          -1,
          72
        ],
        "'LBRACE": [
          -1,
          72
        ],
        "'RBRACE": [
          -1,
          72
        ],
        "'SHADOW": [
          -1,
          72
        ],
        "'LET": [
          -1,
          72
        ],
        "'BLOCK": [
          -1,
          72
        ],
        "'LETREC": [
          -1,
          72
        ],
        "'TYPE-LET": [
          -1,
          72
        ],
        "'FUN": [
          -1,
          72
        ],
        "'PARENAFTERBRACE": [
          -1,
          72
        ],
        "'WHERE": [
          -1,
          72
        ],
        "'CHECK": [
          -1,
          72
        ],
        "'EXAMPLES": [
          -1,
          72
        ],
        "'CHECKCOLON": [
          -1,
          72
        ],
        "'EXAMPLESCOLON": [
          -1,
          72
        ],
        "'BAR": [
          -1,
          72
        ],
        "'VAR": [
          -1,
          72
        ],
        "'REC": [
          -1,
          72
        ],
        "'WHEN": [
          -1,
          72
        ],
        "'DOTDOTDOT": [
          -1,
          72
        ],
        "'NUMBER": [
          -1,
          72
        ],
        "'RATIONAL": [
          -1,
          72
        ],
        "'ROUGHRATIONAL": [
          -1,
          72
        ],
        "'TRUE": [
          -1,
          72
        ],
        "'FALSE": [
          -1,
          72
        ],
        "'LAM": [
          -1,
          72
        ],
        "'METHOD": [
          -1,
          72
        ],
        "'LBRACK": [
          -1,
          72
        ],
        "'TABLE": [
          -1,
          72
        ],
        "'REACTOR": [
          -1,
          72
        ],
        "'IF": [
          -1,
          72
        ],
        "'ELSECOLON": [
          -1,
          72
        ],
        "'ELSEIF": [
          -1,
          72
        ],
        "'ASK": [
          -1,
          72
        ],
        "'CASES": [
          -1,
          72
        ],
        "'FOR": [
          -1,
          72
        ],
        "'TABLE-SELECT": [
          -1,
          72
        ],
        "'TABLE-FILTER": [
          -1,
          72
        ],
        "'TABLE-ORDER": [
          -1,
          72
        ],
        "'TABLE-EXTRACT": [
          -1,
          72
        ],
        "'TABLE-UPDATE": [
          -1,
          72
        ],
        "'TABLE-EXTEND": [
          -1,
          72
        ],
        "'LOAD-TABLE": [
          -1,
          72
        ]
      },
      {
        "$": [
          -1,
          74
        ],
        "'END": [
          -1,
          74
        ],
        "'NAME": [
          -1,
          74
        ],
        "'STRING": [
          -1,
          74
        ],
        "'TYPE": [
          -1,
          74
        ],
        "'DATA": [
          -1,
          74
        ],
        "'PARENSPACE": [
          -1,
          74
        ],
        "'SPY": [
          -1,
          74
        ],
        "'NEWTYPE": [
          -1,
          74
        ],
        "'LBRACE": [
          -1,
          74
        ],
        "'RBRACE": [
          -1,
          74
        ],
        "'SHADOW": [
          -1,
          74
        ],
        "'LET": [
          -1,
          74
        ],
        "'BLOCK": [
          -1,
          74
        ],
        "'LETREC": [
          -1,
          74
        ],
        "'TYPE-LET": [
          -1,
          74
        ],
        "'FUN": [
          -1,
          74
        ],
        "'PARENAFTERBRACE": [
          -1,
          74
        ],
        "'WHERE": [
          -1,
          74
        ],
        "'CHECK": [
          -1,
          74
        ],
        "'EXAMPLES": [
          -1,
          74
        ],
        "'CHECKCOLON": [
          -1,
          74
        ],
        "'EXAMPLESCOLON": [
          -1,
          74
        ],
        "'BAR": [
          -1,
          74
        ],
        "'VAR": [
          -1,
          74
        ],
        "'REC": [
          -1,
          74
        ],
        "'WHEN": [
          -1,
          74
        ],
        "'DOTDOTDOT": [
          -1,
          74
        ],
        "'NUMBER": [
          -1,
          74
        ],
        "'RATIONAL": [
          -1,
          74
        ],
        "'ROUGHRATIONAL": [
          -1,
          74
        ],
        "'TRUE": [
          -1,
          74
        ],
        "'FALSE": [
          -1,
          74
        ],
        "'LAM": [
          -1,
          74
        ],
        "'METHOD": [
          -1,
          74
        ],
        "'LBRACK": [
          -1,
          74
        ],
        "'TABLE": [
          -1,
          74
        ],
        "'REACTOR": [
          -1,
          74
        ],
        "'IF": [
          -1,
          74
        ],
        "'ELSECOLON": [
          -1,
          74
        ],
        "'ELSEIF": [
          -1,
          74
        ],
        "'ASK": [
          -1,
          74
        ],
        "'CASES": [
          -1,
          74
        ],
        "'FOR": [
          -1,
          74
        ],
        "'TABLE-SELECT": [
          -1,
          74
        ],
        "'TABLE-FILTER": [
          -1,
          74
        ],
        "'TABLE-ORDER": [
          -1,
          74
        ],
        "'TABLE-EXTRACT": [
          -1,
          74
        ],
        "'TABLE-UPDATE": [
          -1,
          74
        ],
        "'TABLE-EXTEND": [
          -1,
          74
        ],
        "'LOAD-TABLE": [
          -1,
          74
        ]
      },
      {
        "$": [
          -1,
          76
        ],
        "'END": [
          -1,
          76
        ],
        "'NAME": [
          -1,
          76
        ],
        "'STRING": [
          -1,
          76
        ],
        "'TYPE": [
          -1,
          76
        ],
        "'DATA": [
          -1,
          76
        ],
        "'PARENSPACE": [
          -1,
          76
        ],
        "'SPY": [
          -1,
          76
        ],
        "'NEWTYPE": [
          -1,
          76
        ],
        "'LBRACE": [
          -1,
          76
        ],
        "'RBRACE": [
          -1,
          76
        ],
        "'SHADOW": [
          -1,
          76
        ],
        "'LET": [
          -1,
          76
        ],
        "'BLOCK": [
          -1,
          76
        ],
        "'LETREC": [
          -1,
          76
        ],
        "'TYPE-LET": [
          -1,
          76
        ],
        "'FUN": [
          -1,
          76
        ],
        "'PARENAFTERBRACE": [
          -1,
          76
        ],
        "'WHERE": [
          -1,
          76
        ],
        "'CHECK": [
          -1,
          76
        ],
        "'EXAMPLES": [
          -1,
          76
        ],
        "'CHECKCOLON": [
          -1,
          76
        ],
        "'EXAMPLESCOLON": [
          -1,
          76
        ],
        "'BAR": [
          -1,
          76
        ],
        "'VAR": [
          -1,
          76
        ],
        "'REC": [
          -1,
          76
        ],
        "'WHEN": [
          -1,
          76
        ],
        "'DOTDOTDOT": [
          -1,
          76
        ],
        "'NUMBER": [
          -1,
          76
        ],
        "'RATIONAL": [
          -1,
          76
        ],
        "'ROUGHRATIONAL": [
          -1,
          76
        ],
        "'TRUE": [
          -1,
          76
        ],
        "'FALSE": [
          -1,
          76
        ],
        "'LAM": [
          -1,
          76
        ],
        "'METHOD": [
          -1,
          76
        ],
        "'LBRACK": [
          -1,
          76
        ],
        "'TABLE": [
          -1,
          76
        ],
        "'REACTOR": [
          -1,
          76
        ],
        "'IF": [
          -1,
          76
        ],
        "'ELSECOLON": [
          -1,
          76
        ],
        "'ELSEIF": [
          -1,
          76
        ],
        "'ASK": [
          -1,
          76
        ],
        "'CASES": [
          -1,
          76
        ],
        "'FOR": [
          -1,
          76
        ],
        "'TABLE-SELECT": [
          -1,
          76
        ],
        "'TABLE-FILTER": [
          -1,
          76
        ],
        "'TABLE-ORDER": [
          -1,
          76
        ],
        "'TABLE-EXTRACT": [
          -1,
          76
        ],
        "'TABLE-UPDATE": [
          -1,
          76
        ],
        "'TABLE-EXTEND": [
          -1,
          76
        ],
        "'LOAD-TABLE": [
          -1,
          76
        ]
      },
      {
        "$": [
          -1,
          78
        ],
        "'END": [
          -1,
          78
        ],
        "'NAME": [
          -1,
          78
        ],
        "'STRING": [
          -1,
          78
        ],
        "'TYPE": [
          -1,
          78
        ],
        "'DATA": [
          -1,
          78
        ],
        "'PARENSPACE": [
          -1,
          78
        ],
        "'SPY": [
          -1,
          78
        ],
        "'NEWTYPE": [
          -1,
          78
        ],
        "'LBRACE": [
          -1,
          78
        ],
        "'RBRACE": [
          -1,
          78
        ],
        "'SHADOW": [
          -1,
          78
        ],
        "'LET": [
          -1,
          78
        ],
        "'BLOCK": [
          -1,
          78
        ],
        "'LETREC": [
          -1,
          78
        ],
        "'TYPE-LET": [
          -1,
          78
        ],
        "'FUN": [
          -1,
          78
        ],
        "'PARENAFTERBRACE": [
          -1,
          78
        ],
        "'WHERE": [
          -1,
          78
        ],
        "'CHECK": [
          -1,
          78
        ],
        "'EXAMPLES": [
          -1,
          78
        ],
        "'CHECKCOLON": [
          -1,
          78
        ],
        "'EXAMPLESCOLON": [
          -1,
          78
        ],
        "'BAR": [
          -1,
          78
        ],
        "'VAR": [
          -1,
          78
        ],
        "'REC": [
          -1,
          78
        ],
        "'WHEN": [
          -1,
          78
        ],
        "'DOTDOTDOT": [
          -1,
          78
        ],
        "'NUMBER": [
          -1,
          78
        ],
        "'RATIONAL": [
          -1,
          78
        ],
        "'ROUGHRATIONAL": [
          -1,
          78
        ],
        "'TRUE": [
          -1,
          78
        ],
        "'FALSE": [
          -1,
          78
        ],
        "'LAM": [
          -1,
          78
        ],
        "'METHOD": [
          -1,
          78
        ],
        "'LBRACK": [
          -1,
          78
        ],
        "'TABLE": [
          -1,
          78
        ],
        "'REACTOR": [
          -1,
          78
        ],
        "'IF": [
          -1,
          78
        ],
        "'ELSECOLON": [
          -1,
          78
        ],
        "'ELSEIF": [
          -1,
          78
        ],
        "'ASK": [
          -1,
          78
        ],
        "'CASES": [
          -1,
          78
        ],
        "'FOR": [
          -1,
          78
        ],
        "'TABLE-SELECT": [
          -1,
          78
        ],
        "'TABLE-FILTER": [
          -1,
          78
        ],
        "'TABLE-ORDER": [
          -1,
          78
        ],
        "'TABLE-EXTRACT": [
          -1,
          78
        ],
        "'TABLE-UPDATE": [
          -1,
          78
        ],
        "'TABLE-EXTEND": [
          -1,
          78
        ],
        "'LOAD-TABLE": [
          -1,
          78
        ]
      },
      {
        "$": [
          -1,
          80
        ],
        "'END": [
          -1,
          80
        ],
        "'NAME": [
          -1,
          80
        ],
        "'STRING": [
          -1,
          80
        ],
        "'TYPE": [
          -1,
          80
        ],
        "'DATA": [
          -1,
          80
        ],
        "'PARENSPACE": [
          -1,
          80
        ],
        "'SPY": [
          -1,
          80
        ],
        "'NEWTYPE": [
          -1,
          80
        ],
        "'LBRACE": [
          -1,
          80
        ],
        "'RBRACE": [
          -1,
          80
        ],
        "'SHADOW": [
          -1,
          80
        ],
        "'LET": [
          -1,
          80
        ],
        "'BLOCK": [
          -1,
          80
        ],
        "'LETREC": [
          -1,
          80
        ],
        "'TYPE-LET": [
          -1,
          80
        ],
        "'FUN": [
          -1,
          80
        ],
        "'PARENAFTERBRACE": [
          -1,
          80
        ],
        "'WHERE": [
          -1,
          80
        ],
        "'CHECK": [
          -1,
          80
        ],
        "'EXAMPLES": [
          -1,
          80
        ],
        "'CHECKCOLON": [
          -1,
          80
        ],
        "'EXAMPLESCOLON": [
          -1,
          80
        ],
        "'BAR": [
          -1,
          80
        ],
        "'VAR": [
          -1,
          80
        ],
        "'REC": [
          -1,
          80
        ],
        "'WHEN": [
          -1,
          80
        ],
        "'DOTDOTDOT": [
          -1,
          80
        ],
        "'NUMBER": [
          -1,
          80
        ],
        "'RATIONAL": [
          -1,
          80
        ],
        "'ROUGHRATIONAL": [
          -1,
          80
        ],
        "'TRUE": [
          -1,
          80
        ],
        "'FALSE": [
          -1,
          80
        ],
        "'LAM": [
          -1,
          80
        ],
        "'METHOD": [
          -1,
          80
        ],
        "'LBRACK": [
          -1,
          80
        ],
        "'TABLE": [
          -1,
          80
        ],
        "'REACTOR": [
          -1,
          80
        ],
        "'IF": [
          -1,
          80
        ],
        "'ELSECOLON": [
          -1,
          80
        ],
        "'ELSEIF": [
          -1,
          80
        ],
        "'ASK": [
          -1,
          80
        ],
        "'CASES": [
          -1,
          80
        ],
        "'FOR": [
          -1,
          80
        ],
        "'TABLE-SELECT": [
          -1,
          80
        ],
        "'TABLE-FILTER": [
          -1,
          80
        ],
        "'TABLE-ORDER": [
          -1,
          80
        ],
        "'TABLE-EXTRACT": [
          -1,
          80
        ],
        "'TABLE-UPDATE": [
          -1,
          80
        ],
        "'TABLE-EXTEND": [
          -1,
          80
        ],
        "'LOAD-TABLE": [
          -1,
          80
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "spy-stmt_I1?": [
          161
        ],
        "spy-stmt_I1": [
          162
        ],
        "binop-expr": [
          163
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ],
        "'COLON": [
          -1,
          82
        ]
      },
      {
        "check-op": [
          165
        ],
        "check-op-postfix": [
          166
        ],
        "'IS": [
          167
        ],
        "'ISEQUALEQUAL": [
          168
        ],
        "'ISEQUALTILDE": [
          169
        ],
        "'ISSPACESHIP": [
          170
        ],
        "'ISROUGHLY": [
          171
        ],
        "'ISNOT": [
          172
        ],
        "'ISNOTEQUALEQUAL": [
          173
        ],
        "'ISNOTEQUALTILDE": [
          174
        ],
        "'ISNOTSPACESHIP": [
          175
        ],
        "'RAISES": [
          176
        ],
        "'RAISESOTHER": [
          177
        ],
        "'SATISFIES": [
          178
        ],
        "'SATISFIESNOT": [
          179
        ],
        "'RAISESSATISFIES": [
          180
        ],
        "'RAISESVIOLATES": [
          181
        ],
        "'RAISESNOT": [
          182
        ],
        "$": [
          -1,
          84
        ],
        "'END": [
          -1,
          84
        ],
        "'NAME": [
          -1,
          84
        ],
        "'STRING": [
          -1,
          84
        ],
        "'TYPE": [
          -1,
          84
        ],
        "'DATA": [
          -1,
          84
        ],
        "'PARENSPACE": [
          -1,
          84
        ],
        "'SPY": [
          -1,
          84
        ],
        "'NEWTYPE": [
          -1,
          84
        ],
        "'LBRACE": [
          -1,
          84
        ],
        "'RBRACE": [
          -1,
          84
        ],
        "'SHADOW": [
          -1,
          84
        ],
        "'LET": [
          -1,
          84
        ],
        "'BLOCK": [
          -1,
          84
        ],
        "'LETREC": [
          -1,
          84
        ],
        "'TYPE-LET": [
          -1,
          84
        ],
        "'FUN": [
          -1,
          84
        ],
        "'PARENAFTERBRACE": [
          -1,
          84
        ],
        "'WHERE": [
          -1,
          84
        ],
        "'CHECK": [
          -1,
          84
        ],
        "'EXAMPLES": [
          -1,
          84
        ],
        "'CHECKCOLON": [
          -1,
          84
        ],
        "'EXAMPLESCOLON": [
          -1,
          84
        ],
        "'BAR": [
          -1,
          84
        ],
        "'VAR": [
          -1,
          84
        ],
        "'REC": [
          -1,
          84
        ],
        "'WHEN": [
          -1,
          84
        ],
        "'DOTDOTDOT": [
          -1,
          84
        ],
        "'NUMBER": [
          -1,
          84
        ],
        "'RATIONAL": [
          -1,
          84
        ],
        "'ROUGHRATIONAL": [
          -1,
          84
        ],
        "'TRUE": [
          -1,
          84
        ],
        "'FALSE": [
          -1,
          84
        ],
        "'LAM": [
          -1,
          84
        ],
        "'METHOD": [
          -1,
          84
        ],
        "'LBRACK": [
          -1,
          84
        ],
        "'TABLE": [
          -1,
          84
        ],
        "'REACTOR": [
          -1,
          84
        ],
        "'IF": [
          -1,
          84
        ],
        "'ELSECOLON": [
          -1,
          84
        ],
        "'ELSEIF": [
          -1,
          84
        ],
        "'ASK": [
          -1,
          84
        ],
        "'CASES": [
          -1,
          84
        ],
        "'FOR": [
          -1,
          84
        ],
        "'TABLE-SELECT": [
          -1,
          84
        ],
        "'TABLE-FILTER": [
          -1,
          84
        ],
        "'TABLE-ORDER": [
          -1,
          84
        ],
        "'TABLE-EXTRACT": [
          -1,
          84
        ],
        "'TABLE-UPDATE": [
          -1,
          84
        ],
        "'TABLE-EXTEND": [
          -1,
          84
        ],
        "'LOAD-TABLE": [
          -1,
          84
        ]
      },
      {
        "$": [
          -1,
          86
        ],
        "'COLON": [
          -1,
          86
        ],
        "'END": [
          -1,
          86
        ],
        "'COMMA": [
          -1,
          86
        ],
        "'NAME": [
          -1,
          86
        ],
        "'PARENNOSPACE": [
          -1,
          86
        ],
        "'STRING": [
          -1,
          86
        ],
        "'RPAREN": [
          -1,
          86
        ],
        "'TYPE": [
          -1,
          86
        ],
        "'DATA": [
          -1,
          86
        ],
        "'TIMES": [
          -1,
          86
        ],
        "'PARENSPACE": [
          -1,
          86
        ],
        "'DOT": [
          -1,
          86
        ],
        "'SPY": [
          -1,
          86
        ],
        "'NEWTYPE": [
          -1,
          86
        ],
        "'LBRACE": [
          -1,
          86
        ],
        "'RBRACE": [
          -1,
          86
        ],
        "'SEMI": [
          -1,
          86
        ],
        "'SHADOW": [
          -1,
          86
        ],
        "'LET": [
          -1,
          86
        ],
        "'BLOCK": [
          -1,
          86
        ],
        "'LETREC": [
          -1,
          86
        ],
        "'TYPE-LET": [
          -1,
          86
        ],
        "'FUN": [
          -1,
          86
        ],
        "'LANGLE": [
          -1,
          86
        ],
        "'LT": [
          -1,
          86
        ],
        "'GT": [
          -1,
          86
        ],
        "'PARENAFTERBRACE": [
          -1,
          86
        ],
        "'WHERE": [
          -1,
          86
        ],
        "'CHECK": [
          -1,
          86
        ],
        "'EXAMPLES": [
          -1,
          86
        ],
        "'CHECKCOLON": [
          -1,
          86
        ],
        "'EXAMPLESCOLON": [
          -1,
          86
        ],
        "'BECAUSE": [
          -1,
          86
        ],
        "'BAR": [
          -1,
          86
        ],
        "'SHARING": [
          -1,
          86
        ],
        "'VAR": [
          -1,
          86
        ],
        "'REC": [
          -1,
          86
        ],
        "'WHEN": [
          -1,
          86
        ],
        "'PLUS": [
          -1,
          86
        ],
        "'DASH": [
          -1,
          86
        ],
        "'SLASH": [
          -1,
          86
        ],
        "'LEQ": [
          -1,
          86
        ],
        "'GEQ": [
          -1,
          86
        ],
        "'EQUALEQUAL": [
          -1,
          86
        ],
        "'SPACESHIP": [
          -1,
          86
        ],
        "'EQUALTILDE": [
          -1,
          86
        ],
        "'NEQ": [
          -1,
          86
        ],
        "'AND": [
          -1,
          86
        ],
        "'OR": [
          -1,
          86
        ],
        "'CARET": [
          -1,
          86
        ],
        "'IS": [
          -1,
          86
        ],
        "'ISEQUALEQUAL": [
          -1,
          86
        ],
        "'ISEQUALTILDE": [
          -1,
          86
        ],
        "'ISSPACESHIP": [
          -1,
          86
        ],
        "'ISROUGHLY": [
          -1,
          86
        ],
        "'ISNOT": [
          -1,
          86
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          86
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          86
        ],
        "'ISNOTSPACESHIP": [
          -1,
          86
        ],
        "'RAISES": [
          -1,
          86
        ],
        "'RAISESOTHER": [
          -1,
          86
        ],
        "'SATISFIES": [
          -1,
          86
        ],
        "'SATISFIESNOT": [
          -1,
          86
        ],
        "'RAISESSATISFIES": [
          -1,
          86
        ],
        "'RAISESVIOLATES": [
          -1,
          86
        ],
        "'RAISESNOT": [
          -1,
          86
        ],
        "'DOTDOTDOT": [
          -1,
          86
        ],
        "'NUMBER": [
          -1,
          86
        ],
        "'RATIONAL": [
          -1,
          86
        ],
        "'ROUGHRATIONAL": [
          -1,
          86
        ],
        "'TRUE": [
          -1,
          86
        ],
        "'FALSE": [
          -1,
          86
        ],
        "'LAM": [
          -1,
          86
        ],
        "'METHOD": [
          -1,
          86
        ],
        "'LBRACK": [
          -1,
          86
        ],
        "'RBRACK": [
          -1,
          86
        ],
        "'TABLE": [
          -1,
          86
        ],
        "'ROW": [
          -1,
          86
        ],
        "'REACTOR": [
          -1,
          86
        ],
        "'BANG": [
          -1,
          86
        ],
        "'IF": [
          -1,
          86
        ],
        "'ELSECOLON": [
          -1,
          86
        ],
        "'ELSEIF": [
          -1,
          86
        ],
        "'ASK": [
          -1,
          86
        ],
        "'THENCOLON": [
          -1,
          86
        ],
        "'CASES": [
          -1,
          86
        ],
        "'FOR": [
          -1,
          86
        ],
        "'TABLE-SELECT": [
          -1,
          86
        ],
        "'TABLE-FILTER": [
          -1,
          86
        ],
        "'USING": [
          -1,
          86
        ],
        "'TABLE-ORDER": [
          -1,
          86
        ],
        "'TABLE-EXTRACT": [
          -1,
          86
        ],
        "'TABLE-UPDATE": [
          -1,
          86
        ],
        "'TABLE-EXTEND": [
          -1,
          86
        ],
        "'OF": [
          -1,
          86
        ],
        "'LOAD-TABLE": [
          -1,
          86
        ],
        "'SOURCECOLON": [
          -1,
          86
        ],
        "'SANITIZE": [
          -1,
          86
        ]
      },
      {
        "'NAME": [
          183
        ]
      },
      {
        "'EQUALS": [
          184
        ]
      },
      {
        "'EQUALS": [
          -1,
          88
        ]
      },
      {
        "'FROM": [
          -1,
          90
        ],
        "'COLON": [
          -1,
          90
        ],
        "'COMMA": [
          -1,
          90
        ],
        "'RPAREN": [
          -1,
          90
        ],
        "'EQUALS": [
          -1,
          90
        ],
        "'RBRACE": [
          -1,
          90
        ],
        "'SEMI": [
          -1,
          90
        ]
      },
      {
        "'FROM": [
          -1,
          92
        ],
        "'COLON": [
          -1,
          92
        ],
        "'COMMA": [
          -1,
          92
        ],
        "'RPAREN": [
          -1,
          92
        ],
        "'EQUALS": [
          -1,
          92
        ],
        "'RBRACE": [
          -1,
          92
        ],
        "'SEMI": [
          -1,
          92
        ]
      },
      {
        "'NAME": [
          185,
          94
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          186
        ],
        "id-expr": [
          39
        ],
        "ty-params": [
          187
        ],
        "'LBRACE": [
          164,
          94
        ],
        "tuple-binding_I1*": [
          188
        ],
        "'RBRACE": [
          189
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "fun-header": [
          190
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'PARENAFTERBRACE": [
          57,
          96,
          98
        ],
        "'REF": [
          196
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          197
        ],
        "tuple-fields": [
          198
        ],
        "obj-fields": [
          199
        ],
        "obj-field": [
          200
        ],
        "key": [
          201
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ],
        "'PARENNOSPACE": [
          -1,
          96,
          98
        ],
        "'SHADOW": [
          -1,
          94
        ]
      },
      {
        "'NAME": [
          202
        ]
      },
      {
        "'NAME": [
          -1,
          100
        ]
      },
      {
        "'NAME": [
          -1,
          102
        ]
      },
      {
        "$": [
          -1,
          104
        ],
        "'COLON": [
          -1,
          104
        ],
        "'END": [
          -1,
          104
        ],
        "'COMMA": [
          -1,
          104
        ],
        "'NAME": [
          -1,
          104
        ],
        "'PARENNOSPACE": [
          -1,
          104
        ],
        "'STRING": [
          -1,
          104
        ],
        "'RPAREN": [
          -1,
          104
        ],
        "'TYPE": [
          -1,
          104
        ],
        "'DATA": [
          -1,
          104
        ],
        "'TIMES": [
          -1,
          104
        ],
        "'PARENSPACE": [
          -1,
          104
        ],
        "'DOT": [
          -1,
          104
        ],
        "'SPY": [
          -1,
          104
        ],
        "'NEWTYPE": [
          -1,
          104
        ],
        "'LBRACE": [
          -1,
          104
        ],
        "'RBRACE": [
          -1,
          104
        ],
        "'SEMI": [
          -1,
          104
        ],
        "'SHADOW": [
          -1,
          104
        ],
        "'LET": [
          -1,
          104
        ],
        "'BLOCK": [
          -1,
          104
        ],
        "'LETREC": [
          -1,
          104
        ],
        "'TYPE-LET": [
          -1,
          104
        ],
        "'FUN": [
          -1,
          104
        ],
        "'LANGLE": [
          -1,
          104
        ],
        "'LT": [
          -1,
          104
        ],
        "'GT": [
          -1,
          104
        ],
        "'PARENAFTERBRACE": [
          -1,
          104
        ],
        "'WHERE": [
          -1,
          104
        ],
        "'CHECK": [
          -1,
          104
        ],
        "'EXAMPLES": [
          -1,
          104
        ],
        "'CHECKCOLON": [
          -1,
          104
        ],
        "'EXAMPLESCOLON": [
          -1,
          104
        ],
        "'BECAUSE": [
          -1,
          104
        ],
        "'BAR": [
          -1,
          104
        ],
        "'SHARING": [
          -1,
          104
        ],
        "'VAR": [
          -1,
          104
        ],
        "'REC": [
          -1,
          104
        ],
        "'WHEN": [
          -1,
          104
        ],
        "'PLUS": [
          -1,
          104
        ],
        "'DASH": [
          -1,
          104
        ],
        "'SLASH": [
          -1,
          104
        ],
        "'LEQ": [
          -1,
          104
        ],
        "'GEQ": [
          -1,
          104
        ],
        "'EQUALEQUAL": [
          -1,
          104
        ],
        "'SPACESHIP": [
          -1,
          104
        ],
        "'EQUALTILDE": [
          -1,
          104
        ],
        "'NEQ": [
          -1,
          104
        ],
        "'AND": [
          -1,
          104
        ],
        "'OR": [
          -1,
          104
        ],
        "'CARET": [
          -1,
          104
        ],
        "'IS": [
          -1,
          104
        ],
        "'ISEQUALEQUAL": [
          -1,
          104
        ],
        "'ISEQUALTILDE": [
          -1,
          104
        ],
        "'ISSPACESHIP": [
          -1,
          104
        ],
        "'ISROUGHLY": [
          -1,
          104
        ],
        "'ISNOT": [
          -1,
          104
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          104
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          104
        ],
        "'ISNOTSPACESHIP": [
          -1,
          104
        ],
        "'RAISES": [
          -1,
          104
        ],
        "'RAISESOTHER": [
          -1,
          104
        ],
        "'SATISFIES": [
          -1,
          104
        ],
        "'SATISFIESNOT": [
          -1,
          104
        ],
        "'RAISESSATISFIES": [
          -1,
          104
        ],
        "'RAISESVIOLATES": [
          -1,
          104
        ],
        "'RAISESNOT": [
          -1,
          104
        ],
        "'DOTDOTDOT": [
          -1,
          104
        ],
        "'NUMBER": [
          -1,
          104
        ],
        "'RATIONAL": [
          -1,
          104
        ],
        "'ROUGHRATIONAL": [
          -1,
          104
        ],
        "'TRUE": [
          -1,
          104
        ],
        "'FALSE": [
          -1,
          104
        ],
        "'LAM": [
          -1,
          104
        ],
        "'METHOD": [
          -1,
          104
        ],
        "'LBRACK": [
          -1,
          104
        ],
        "'RBRACK": [
          -1,
          104
        ],
        "'TABLE": [
          -1,
          104
        ],
        "'ROW": [
          -1,
          104
        ],
        "'REACTOR": [
          -1,
          104
        ],
        "'BANG": [
          -1,
          104
        ],
        "'IF": [
          -1,
          104
        ],
        "'ELSECOLON": [
          -1,
          104
        ],
        "'ELSEIF": [
          -1,
          104
        ],
        "'ASK": [
          -1,
          104
        ],
        "'THENCOLON": [
          -1,
          104
        ],
        "'CASES": [
          -1,
          104
        ],
        "'FOR": [
          -1,
          104
        ],
        "'TABLE-SELECT": [
          -1,
          104
        ],
        "'TABLE-FILTER": [
          -1,
          104
        ],
        "'USING": [
          -1,
          104
        ],
        "'TABLE-ORDER": [
          -1,
          104
        ],
        "'TABLE-EXTRACT": [
          -1,
          104
        ],
        "'TABLE-UPDATE": [
          -1,
          104
        ],
        "'TABLE-EXTEND": [
          -1,
          104
        ],
        "'OF": [
          -1,
          104
        ],
        "'LOAD-TABLE": [
          -1,
          104
        ],
        "'SOURCECOLON": [
          -1,
          104
        ],
        "'SANITIZE": [
          -1,
          104
        ]
      },
      {
        "let-expr": [
          203
        ],
        "var-expr": [
          204
        ],
        "toplevel-binding": [
          41
        ],
        "binding": [
          42
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "let-binding": [
          206
        ],
        "'VAR": [
          64
        ],
        "'NAME": [
          -1,
          24
        ]
      },
      {
        "block": [
          207
        ],
        "block_I0*": [
          6
        ],
        "'END": [
          -1,
          10,
          12
        ],
        "'NAME": [
          -1,
          12
        ],
        "'STRING": [
          -1,
          12
        ],
        "'TYPE": [
          -1,
          12
        ],
        "'DATA": [
          -1,
          12
        ],
        "'PARENSPACE": [
          -1,
          12
        ],
        "'SPY": [
          -1,
          12
        ],
        "'NEWTYPE": [
          -1,
          12
        ],
        "'LBRACE": [
          -1,
          12
        ],
        "'SHADOW": [
          -1,
          12
        ],
        "'LET": [
          -1,
          12
        ],
        "'BLOCK": [
          -1,
          12
        ],
        "'LETREC": [
          -1,
          12
        ],
        "'TYPE-LET": [
          -1,
          12
        ],
        "'FUN": [
          -1,
          12
        ],
        "'PARENAFTERBRACE": [
          -1,
          12
        ],
        "'CHECK": [
          -1,
          12
        ],
        "'EXAMPLES": [
          -1,
          12
        ],
        "'CHECKCOLON": [
          -1,
          12
        ],
        "'EXAMPLESCOLON": [
          -1,
          12
        ],
        "'VAR": [
          -1,
          12
        ],
        "'REC": [
          -1,
          12
        ],
        "'WHEN": [
          -1,
          12
        ],
        "'DOTDOTDOT": [
          -1,
          12
        ],
        "'NUMBER": [
          -1,
          12
        ],
        "'RATIONAL": [
          -1,
          12
        ],
        "'ROUGHRATIONAL": [
          -1,
          12
        ],
        "'TRUE": [
          -1,
          12
        ],
        "'FALSE": [
          -1,
          12
        ],
        "'LAM": [
          -1,
          12
        ],
        "'METHOD": [
          -1,
          12
        ],
        "'LBRACK": [
          -1,
          12
        ],
        "'TABLE": [
          -1,
          12
        ],
        "'REACTOR": [
          -1,
          12
        ],
        "'IF": [
          -1,
          12
        ],
        "'ASK": [
          -1,
          12
        ],
        "'CASES": [
          -1,
          12
        ],
        "'FOR": [
          -1,
          12
        ],
        "'TABLE-SELECT": [
          -1,
          12
        ],
        "'TABLE-FILTER": [
          -1,
          12
        ],
        "'TABLE-ORDER": [
          -1,
          12
        ],
        "'TABLE-EXTRACT": [
          -1,
          12
        ],
        "'TABLE-UPDATE": [
          -1,
          12
        ],
        "'TABLE-EXTEND": [
          -1,
          12
        ],
        "'LOAD-TABLE": [
          -1,
          12
        ]
      },
      {
        "$": [
          -1,
          106
        ],
        "'COLON": [
          -1,
          106
        ],
        "'END": [
          -1,
          106
        ],
        "'COMMA": [
          -1,
          106
        ],
        "'NAME": [
          -1,
          106
        ],
        "'PARENNOSPACE": [
          -1,
          106
        ],
        "'STRING": [
          -1,
          106
        ],
        "'RPAREN": [
          -1,
          106
        ],
        "'TYPE": [
          -1,
          106
        ],
        "'DATA": [
          -1,
          106
        ],
        "'TIMES": [
          -1,
          106
        ],
        "'PARENSPACE": [
          -1,
          106
        ],
        "'DOT": [
          -1,
          106
        ],
        "'SPY": [
          -1,
          106
        ],
        "'NEWTYPE": [
          -1,
          106
        ],
        "'LBRACE": [
          -1,
          106
        ],
        "'RBRACE": [
          -1,
          106
        ],
        "'SEMI": [
          -1,
          106
        ],
        "'SHADOW": [
          -1,
          106
        ],
        "'LET": [
          -1,
          106
        ],
        "'BLOCK": [
          -1,
          106
        ],
        "'LETREC": [
          -1,
          106
        ],
        "'TYPE-LET": [
          -1,
          106
        ],
        "'FUN": [
          -1,
          106
        ],
        "'LANGLE": [
          -1,
          106
        ],
        "'LT": [
          -1,
          106
        ],
        "'GT": [
          -1,
          106
        ],
        "'PARENAFTERBRACE": [
          -1,
          106
        ],
        "'WHERE": [
          -1,
          106
        ],
        "'CHECK": [
          -1,
          106
        ],
        "'EXAMPLES": [
          -1,
          106
        ],
        "'CHECKCOLON": [
          -1,
          106
        ],
        "'EXAMPLESCOLON": [
          -1,
          106
        ],
        "'BECAUSE": [
          -1,
          106
        ],
        "'BAR": [
          -1,
          106
        ],
        "'SHARING": [
          -1,
          106
        ],
        "'VAR": [
          -1,
          106
        ],
        "'REC": [
          -1,
          106
        ],
        "'WHEN": [
          -1,
          106
        ],
        "'PLUS": [
          -1,
          106
        ],
        "'DASH": [
          -1,
          106
        ],
        "'SLASH": [
          -1,
          106
        ],
        "'LEQ": [
          -1,
          106
        ],
        "'GEQ": [
          -1,
          106
        ],
        "'EQUALEQUAL": [
          -1,
          106
        ],
        "'SPACESHIP": [
          -1,
          106
        ],
        "'EQUALTILDE": [
          -1,
          106
        ],
        "'NEQ": [
          -1,
          106
        ],
        "'AND": [
          -1,
          106
        ],
        "'OR": [
          -1,
          106
        ],
        "'CARET": [
          -1,
          106
        ],
        "'IS": [
          -1,
          106
        ],
        "'ISEQUALEQUAL": [
          -1,
          106
        ],
        "'ISEQUALTILDE": [
          -1,
          106
        ],
        "'ISSPACESHIP": [
          -1,
          106
        ],
        "'ISROUGHLY": [
          -1,
          106
        ],
        "'ISNOT": [
          -1,
          106
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          106
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          106
        ],
        "'ISNOTSPACESHIP": [
          -1,
          106
        ],
        "'RAISES": [
          -1,
          106
        ],
        "'RAISESOTHER": [
          -1,
          106
        ],
        "'SATISFIES": [
          -1,
          106
        ],
        "'SATISFIESNOT": [
          -1,
          106
        ],
        "'RAISESSATISFIES": [
          -1,
          106
        ],
        "'RAISESVIOLATES": [
          -1,
          106
        ],
        "'RAISESNOT": [
          -1,
          106
        ],
        "'DOTDOTDOT": [
          -1,
          106
        ],
        "'NUMBER": [
          -1,
          106
        ],
        "'RATIONAL": [
          -1,
          106
        ],
        "'ROUGHRATIONAL": [
          -1,
          106
        ],
        "'TRUE": [
          -1,
          106
        ],
        "'FALSE": [
          -1,
          106
        ],
        "'LAM": [
          -1,
          106
        ],
        "'METHOD": [
          -1,
          106
        ],
        "'LBRACK": [
          -1,
          106
        ],
        "'RBRACK": [
          -1,
          106
        ],
        "'TABLE": [
          -1,
          106
        ],
        "'ROW": [
          -1,
          106
        ],
        "'REACTOR": [
          -1,
          106
        ],
        "'BANG": [
          -1,
          106
        ],
        "'IF": [
          -1,
          106
        ],
        "'ELSECOLON": [
          -1,
          106
        ],
        "'ELSEIF": [
          -1,
          106
        ],
        "'ASK": [
          -1,
          106
        ],
        "'THENCOLON": [
          -1,
          106
        ],
        "'CASES": [
          -1,
          106
        ],
        "'FOR": [
          -1,
          106
        ],
        "'TABLE-SELECT": [
          -1,
          106
        ],
        "'TABLE-FILTER": [
          -1,
          106
        ],
        "'USING": [
          -1,
          106
        ],
        "'TABLE-ORDER": [
          -1,
          106
        ],
        "'TABLE-EXTRACT": [
          -1,
          106
        ],
        "'TABLE-UPDATE": [
          -1,
          106
        ],
        "'TABLE-EXTEND": [
          -1,
          106
        ],
        "'OF": [
          -1,
          106
        ],
        "'LOAD-TABLE": [
          -1,
          106
        ],
        "'SOURCECOLON": [
          -1,
          106
        ],
        "'SANITIZE": [
          -1,
          106
        ]
      },
      {
        "let-expr": [
          208
        ],
        "toplevel-binding": [
          41
        ],
        "binding": [
          42
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "'NAME": [
          -1,
          24
        ]
      },
      {
        "$": [
          -1,
          108
        ],
        "'COLON": [
          -1,
          108
        ],
        "'END": [
          -1,
          108
        ],
        "'COMMA": [
          -1,
          108
        ],
        "'NAME": [
          -1,
          108
        ],
        "'PARENNOSPACE": [
          -1,
          108
        ],
        "'STRING": [
          -1,
          108
        ],
        "'RPAREN": [
          -1,
          108
        ],
        "'TYPE": [
          -1,
          108
        ],
        "'DATA": [
          -1,
          108
        ],
        "'TIMES": [
          -1,
          108
        ],
        "'PARENSPACE": [
          -1,
          108
        ],
        "'DOT": [
          -1,
          108
        ],
        "'SPY": [
          -1,
          108
        ],
        "'NEWTYPE": [
          -1,
          108
        ],
        "'LBRACE": [
          -1,
          108
        ],
        "'RBRACE": [
          -1,
          108
        ],
        "'SEMI": [
          -1,
          108
        ],
        "'SHADOW": [
          -1,
          108
        ],
        "'LET": [
          -1,
          108
        ],
        "'BLOCK": [
          -1,
          108
        ],
        "'LETREC": [
          -1,
          108
        ],
        "'TYPE-LET": [
          -1,
          108
        ],
        "'FUN": [
          -1,
          108
        ],
        "'LANGLE": [
          -1,
          108
        ],
        "'LT": [
          -1,
          108
        ],
        "'GT": [
          -1,
          108
        ],
        "'PARENAFTERBRACE": [
          -1,
          108
        ],
        "'WHERE": [
          -1,
          108
        ],
        "'CHECK": [
          -1,
          108
        ],
        "'EXAMPLES": [
          -1,
          108
        ],
        "'CHECKCOLON": [
          -1,
          108
        ],
        "'EXAMPLESCOLON": [
          -1,
          108
        ],
        "'BECAUSE": [
          -1,
          108
        ],
        "'BAR": [
          -1,
          108
        ],
        "'SHARING": [
          -1,
          108
        ],
        "'VAR": [
          -1,
          108
        ],
        "'REC": [
          -1,
          108
        ],
        "'WHEN": [
          -1,
          108
        ],
        "'PLUS": [
          -1,
          108
        ],
        "'DASH": [
          -1,
          108
        ],
        "'SLASH": [
          -1,
          108
        ],
        "'LEQ": [
          -1,
          108
        ],
        "'GEQ": [
          -1,
          108
        ],
        "'EQUALEQUAL": [
          -1,
          108
        ],
        "'SPACESHIP": [
          -1,
          108
        ],
        "'EQUALTILDE": [
          -1,
          108
        ],
        "'NEQ": [
          -1,
          108
        ],
        "'AND": [
          -1,
          108
        ],
        "'OR": [
          -1,
          108
        ],
        "'CARET": [
          -1,
          108
        ],
        "'IS": [
          -1,
          108
        ],
        "'ISEQUALEQUAL": [
          -1,
          108
        ],
        "'ISEQUALTILDE": [
          -1,
          108
        ],
        "'ISSPACESHIP": [
          -1,
          108
        ],
        "'ISROUGHLY": [
          -1,
          108
        ],
        "'ISNOT": [
          -1,
          108
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          108
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          108
        ],
        "'ISNOTSPACESHIP": [
          -1,
          108
        ],
        "'RAISES": [
          -1,
          108
        ],
        "'RAISESOTHER": [
          -1,
          108
        ],
        "'SATISFIES": [
          -1,
          108
        ],
        "'SATISFIESNOT": [
          -1,
          108
        ],
        "'RAISESSATISFIES": [
          -1,
          108
        ],
        "'RAISESVIOLATES": [
          -1,
          108
        ],
        "'RAISESNOT": [
          -1,
          108
        ],
        "'DOTDOTDOT": [
          -1,
          108
        ],
        "'NUMBER": [
          -1,
          108
        ],
        "'RATIONAL": [
          -1,
          108
        ],
        "'ROUGHRATIONAL": [
          -1,
          108
        ],
        "'TRUE": [
          -1,
          108
        ],
        "'FALSE": [
          -1,
          108
        ],
        "'LAM": [
          -1,
          108
        ],
        "'METHOD": [
          -1,
          108
        ],
        "'LBRACK": [
          -1,
          108
        ],
        "'RBRACK": [
          -1,
          108
        ],
        "'TABLE": [
          -1,
          108
        ],
        "'ROW": [
          -1,
          108
        ],
        "'REACTOR": [
          -1,
          108
        ],
        "'BANG": [
          -1,
          108
        ],
        "'IF": [
          -1,
          108
        ],
        "'ELSECOLON": [
          -1,
          108
        ],
        "'ELSEIF": [
          -1,
          108
        ],
        "'ASK": [
          -1,
          108
        ],
        "'THENCOLON": [
          -1,
          108
        ],
        "'CASES": [
          -1,
          108
        ],
        "'FOR": [
          -1,
          108
        ],
        "'TABLE-SELECT": [
          -1,
          108
        ],
        "'TABLE-FILTER": [
          -1,
          108
        ],
        "'USING": [
          -1,
          108
        ],
        "'TABLE-ORDER": [
          -1,
          108
        ],
        "'TABLE-EXTRACT": [
          -1,
          108
        ],
        "'TABLE-UPDATE": [
          -1,
          108
        ],
        "'TABLE-EXTEND": [
          -1,
          108
        ],
        "'OF": [
          -1,
          108
        ],
        "'LOAD-TABLE": [
          -1,
          108
        ],
        "'SOURCECOLON": [
          -1,
          108
        ],
        "'SANITIZE": [
          -1,
          108
        ]
      },
      {
        "'NAME": [
          209
        ],
        "'NEWTYPE": [
          210
        ],
        "type-bind": [
          211
        ],
        "newtype-bind": [
          212
        ],
        "type-let-bind": [
          213
        ]
      },
      {
        "'NAME": [
          214
        ]
      },
      {
        "'NAME": [
          -1,
          110
        ],
        "'STRING": [
          -1,
          110
        ],
        "'PARENSPACE": [
          -1,
          110
        ],
        "'LBRACE": [
          -1,
          110
        ],
        "'LET": [
          -1,
          110
        ],
        "'BLOCK": [
          -1,
          110
        ],
        "'LETREC": [
          -1,
          110
        ],
        "'TYPE-LET": [
          -1,
          110
        ],
        "'PARENAFTERBRACE": [
          -1,
          110
        ],
        "'DOTDOTDOT": [
          -1,
          110
        ],
        "'NUMBER": [
          -1,
          110
        ],
        "'RATIONAL": [
          -1,
          110
        ],
        "'ROUGHRATIONAL": [
          -1,
          110
        ],
        "'TRUE": [
          -1,
          110
        ],
        "'FALSE": [
          -1,
          110
        ],
        "'LAM": [
          -1,
          110
        ],
        "'METHOD": [
          -1,
          110
        ],
        "'LBRACK": [
          -1,
          110
        ],
        "'TABLE": [
          -1,
          110
        ],
        "'REACTOR": [
          -1,
          110
        ],
        "'IF": [
          -1,
          110
        ],
        "'ASK": [
          -1,
          110
        ],
        "'CASES": [
          -1,
          110
        ],
        "'FOR": [
          -1,
          110
        ],
        "'TABLE-SELECT": [
          -1,
          110
        ],
        "'TABLE-FILTER": [
          -1,
          110
        ],
        "'TABLE-ORDER": [
          -1,
          110
        ],
        "'TABLE-EXTRACT": [
          -1,
          110
        ],
        "'TABLE-UPDATE": [
          -1,
          110
        ],
        "'TABLE-EXTEND": [
          -1,
          110
        ],
        "'LOAD-TABLE": [
          -1,
          110
        ]
      },
      {
        "'STRING": [
          215
        ]
      },
      {
        "'STRING": [
          -1,
          112
        ]
      },
      {
        "'STRING": [
          -1,
          114
        ]
      },
      {
        "block": [
          216
        ],
        "block_I0*": [
          6
        ],
        "'END": [
          -1,
          10,
          12
        ],
        "'NAME": [
          -1,
          12
        ],
        "'STRING": [
          -1,
          12
        ],
        "'TYPE": [
          -1,
          12
        ],
        "'DATA": [
          -1,
          12
        ],
        "'PARENSPACE": [
          -1,
          12
        ],
        "'SPY": [
          -1,
          12
        ],
        "'NEWTYPE": [
          -1,
          12
        ],
        "'LBRACE": [
          -1,
          12
        ],
        "'SHADOW": [
          -1,
          12
        ],
        "'LET": [
          -1,
          12
        ],
        "'BLOCK": [
          -1,
          12
        ],
        "'LETREC": [
          -1,
          12
        ],
        "'TYPE-LET": [
          -1,
          12
        ],
        "'FUN": [
          -1,
          12
        ],
        "'PARENAFTERBRACE": [
          -1,
          12
        ],
        "'CHECK": [
          -1,
          12
        ],
        "'EXAMPLES": [
          -1,
          12
        ],
        "'CHECKCOLON": [
          -1,
          12
        ],
        "'EXAMPLESCOLON": [
          -1,
          12
        ],
        "'VAR": [
          -1,
          12
        ],
        "'REC": [
          -1,
          12
        ],
        "'WHEN": [
          -1,
          12
        ],
        "'DOTDOTDOT": [
          -1,
          12
        ],
        "'NUMBER": [
          -1,
          12
        ],
        "'RATIONAL": [
          -1,
          12
        ],
        "'ROUGHRATIONAL": [
          -1,
          12
        ],
        "'TRUE": [
          -1,
          12
        ],
        "'FALSE": [
          -1,
          12
        ],
        "'LAM": [
          -1,
          12
        ],
        "'METHOD": [
          -1,
          12
        ],
        "'LBRACK": [
          -1,
          12
        ],
        "'TABLE": [
          -1,
          12
        ],
        "'REACTOR": [
          -1,
          12
        ],
        "'IF": [
          -1,
          12
        ],
        "'ASK": [
          -1,
          12
        ],
        "'CASES": [
          -1,
          12
        ],
        "'FOR": [
          -1,
          12
        ],
        "'TABLE-SELECT": [
          -1,
          12
        ],
        "'TABLE-FILTER": [
          -1,
          12
        ],
        "'TABLE-ORDER": [
          -1,
          12
        ],
        "'TABLE-EXTRACT": [
          -1,
          12
        ],
        "'TABLE-UPDATE": [
          -1,
          12
        ],
        "'TABLE-EXTEND": [
          -1,
          12
        ],
        "'LOAD-TABLE": [
          -1,
          12
        ]
      },
      {
        "'END": [
          -1,
          116
        ],
        "'NAME": [
          -1,
          116
        ],
        "'STRING": [
          -1,
          116
        ],
        "'TYPE": [
          -1,
          116
        ],
        "'DATA": [
          -1,
          116
        ],
        "'PARENSPACE": [
          -1,
          116
        ],
        "'SPY": [
          -1,
          116
        ],
        "'NEWTYPE": [
          -1,
          116
        ],
        "'LBRACE": [
          -1,
          116
        ],
        "'SHADOW": [
          -1,
          116
        ],
        "'LET": [
          -1,
          116
        ],
        "'BLOCK": [
          -1,
          116
        ],
        "'LETREC": [
          -1,
          116
        ],
        "'TYPE-LET": [
          -1,
          116
        ],
        "'FUN": [
          -1,
          116
        ],
        "'PARENAFTERBRACE": [
          -1,
          116
        ],
        "'CHECK": [
          -1,
          116
        ],
        "'EXAMPLES": [
          -1,
          116
        ],
        "'CHECKCOLON": [
          -1,
          116
        ],
        "'EXAMPLESCOLON": [
          -1,
          116
        ],
        "'VAR": [
          -1,
          116
        ],
        "'REC": [
          -1,
          116
        ],
        "'WHEN": [
          -1,
          116
        ],
        "'DOTDOTDOT": [
          -1,
          116
        ],
        "'NUMBER": [
          -1,
          116
        ],
        "'RATIONAL": [
          -1,
          116
        ],
        "'ROUGHRATIONAL": [
          -1,
          116
        ],
        "'TRUE": [
          -1,
          116
        ],
        "'FALSE": [
          -1,
          116
        ],
        "'LAM": [
          -1,
          116
        ],
        "'METHOD": [
          -1,
          116
        ],
        "'LBRACK": [
          -1,
          116
        ],
        "'TABLE": [
          -1,
          116
        ],
        "'REACTOR": [
          -1,
          116
        ],
        "'IF": [
          -1,
          116
        ],
        "'ASK": [
          -1,
          116
        ],
        "'CASES": [
          -1,
          116
        ],
        "'FOR": [
          -1,
          116
        ],
        "'TABLE-SELECT": [
          -1,
          116
        ],
        "'TABLE-FILTER": [
          -1,
          116
        ],
        "'TABLE-ORDER": [
          -1,
          116
        ],
        "'TABLE-EXTRACT": [
          -1,
          116
        ],
        "'TABLE-UPDATE": [
          -1,
          116
        ],
        "'TABLE-EXTEND": [
          -1,
          116
        ],
        "'LOAD-TABLE": [
          -1,
          116
        ]
      },
      {
        "'END": [
          -1,
          118
        ],
        "'NAME": [
          -1,
          118
        ],
        "'STRING": [
          -1,
          118
        ],
        "'TYPE": [
          -1,
          118
        ],
        "'DATA": [
          -1,
          118
        ],
        "'PARENSPACE": [
          -1,
          118
        ],
        "'SPY": [
          -1,
          118
        ],
        "'NEWTYPE": [
          -1,
          118
        ],
        "'LBRACE": [
          -1,
          118
        ],
        "'SHADOW": [
          -1,
          118
        ],
        "'LET": [
          -1,
          118
        ],
        "'BLOCK": [
          -1,
          118
        ],
        "'LETREC": [
          -1,
          118
        ],
        "'TYPE-LET": [
          -1,
          118
        ],
        "'FUN": [
          -1,
          118
        ],
        "'PARENAFTERBRACE": [
          -1,
          118
        ],
        "'CHECK": [
          -1,
          118
        ],
        "'EXAMPLES": [
          -1,
          118
        ],
        "'CHECKCOLON": [
          -1,
          118
        ],
        "'EXAMPLESCOLON": [
          -1,
          118
        ],
        "'VAR": [
          -1,
          118
        ],
        "'REC": [
          -1,
          118
        ],
        "'WHEN": [
          -1,
          118
        ],
        "'DOTDOTDOT": [
          -1,
          118
        ],
        "'NUMBER": [
          -1,
          118
        ],
        "'RATIONAL": [
          -1,
          118
        ],
        "'ROUGHRATIONAL": [
          -1,
          118
        ],
        "'TRUE": [
          -1,
          118
        ],
        "'FALSE": [
          -1,
          118
        ],
        "'LAM": [
          -1,
          118
        ],
        "'METHOD": [
          -1,
          118
        ],
        "'LBRACK": [
          -1,
          118
        ],
        "'TABLE": [
          -1,
          118
        ],
        "'REACTOR": [
          -1,
          118
        ],
        "'IF": [
          -1,
          118
        ],
        "'ASK": [
          -1,
          118
        ],
        "'CASES": [
          -1,
          118
        ],
        "'FOR": [
          -1,
          118
        ],
        "'TABLE-SELECT": [
          -1,
          118
        ],
        "'TABLE-FILTER": [
          -1,
          118
        ],
        "'TABLE-ORDER": [
          -1,
          118
        ],
        "'TABLE-EXTRACT": [
          -1,
          118
        ],
        "'TABLE-UPDATE": [
          -1,
          118
        ],
        "'TABLE-EXTEND": [
          -1,
          118
        ],
        "'LOAD-TABLE": [
          -1,
          118
        ]
      },
      {
        "toplevel-binding": [
          217
        ],
        "binding": [
          42
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "'NAME": [
          -1,
          24
        ]
      },
      {
        "toplevel-binding": [
          218
        ],
        "binding": [
          42
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "'NAME": [
          -1,
          24
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          219
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'PARENNOSPACE": [
          220
        ],
        "'DOT": [
          221
        ],
        "'LANGLE": [
          222
        ],
        "binop-expr_I1*": [
          223
        ],
        "app-args": [
          224
        ],
        "'LBRACK": [
          225,
          120,
          122
        ],
        "'BANG": [
          226
        ],
        "$": [
          -1,
          120,
          122
        ],
        "'COLON": [
          -1,
          120,
          122
        ],
        "'END": [
          -1,
          120,
          122
        ],
        "'COMMA": [
          -1,
          120,
          122
        ],
        "'NAME": [
          -1,
          120,
          122
        ],
        "'STRING": [
          -1,
          120,
          122
        ],
        "'RPAREN": [
          -1,
          120,
          122
        ],
        "'TYPE": [
          -1,
          120,
          122
        ],
        "'DATA": [
          -1,
          120,
          122
        ],
        "'TIMES": [
          -1,
          122
        ],
        "'PARENSPACE": [
          -1,
          120,
          122
        ],
        "'SPY": [
          -1,
          120,
          122
        ],
        "'NEWTYPE": [
          -1,
          120,
          122
        ],
        "'LBRACE": [
          -1,
          120,
          122
        ],
        "'RBRACE": [
          -1,
          120,
          122
        ],
        "'SEMI": [
          -1,
          120,
          122
        ],
        "'SHADOW": [
          -1,
          120,
          122
        ],
        "'LET": [
          -1,
          120,
          122
        ],
        "'BLOCK": [
          -1,
          120,
          122
        ],
        "'LETREC": [
          -1,
          120,
          122
        ],
        "'TYPE-LET": [
          -1,
          120,
          122
        ],
        "'FUN": [
          -1,
          120,
          122
        ],
        "'LT": [
          -1,
          122
        ],
        "'GT": [
          -1,
          122
        ],
        "'PARENAFTERBRACE": [
          -1,
          120,
          122
        ],
        "'WHERE": [
          -1,
          120,
          122
        ],
        "'CHECK": [
          -1,
          120,
          122
        ],
        "'EXAMPLES": [
          -1,
          120,
          122
        ],
        "'CHECKCOLON": [
          -1,
          120,
          122
        ],
        "'EXAMPLESCOLON": [
          -1,
          120,
          122
        ],
        "'BECAUSE": [
          -1,
          120,
          122
        ],
        "'BAR": [
          -1,
          120,
          122
        ],
        "'SHARING": [
          -1,
          120,
          122
        ],
        "'VAR": [
          -1,
          120,
          122
        ],
        "'REC": [
          -1,
          120,
          122
        ],
        "'WHEN": [
          -1,
          120,
          122
        ],
        "'PLUS": [
          -1,
          122
        ],
        "'DASH": [
          -1,
          122
        ],
        "'SLASH": [
          -1,
          122
        ],
        "'LEQ": [
          -1,
          122
        ],
        "'GEQ": [
          -1,
          122
        ],
        "'EQUALEQUAL": [
          -1,
          122
        ],
        "'SPACESHIP": [
          -1,
          122
        ],
        "'EQUALTILDE": [
          -1,
          122
        ],
        "'NEQ": [
          -1,
          122
        ],
        "'AND": [
          -1,
          122
        ],
        "'OR": [
          -1,
          122
        ],
        "'CARET": [
          -1,
          122
        ],
        "'IS": [
          -1,
          120,
          122
        ],
        "'ISEQUALEQUAL": [
          -1,
          120,
          122
        ],
        "'ISEQUALTILDE": [
          -1,
          120,
          122
        ],
        "'ISSPACESHIP": [
          -1,
          120,
          122
        ],
        "'ISROUGHLY": [
          -1,
          120,
          122
        ],
        "'ISNOT": [
          -1,
          120,
          122
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          120,
          122
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          120,
          122
        ],
        "'ISNOTSPACESHIP": [
          -1,
          120,
          122
        ],
        "'RAISES": [
          -1,
          120,
          122
        ],
        "'RAISESOTHER": [
          -1,
          120,
          122
        ],
        "'SATISFIES": [
          -1,
          120,
          122
        ],
        "'SATISFIESNOT": [
          -1,
          120,
          122
        ],
        "'RAISESSATISFIES": [
          -1,
          120,
          122
        ],
        "'RAISESVIOLATES": [
          -1,
          120,
          122
        ],
        "'RAISESNOT": [
          -1,
          120,
          122
        ],
        "'DOTDOTDOT": [
          -1,
          120,
          122
        ],
        "'NUMBER": [
          -1,
          120,
          122
        ],
        "'RATIONAL": [
          -1,
          120,
          122
        ],
        "'ROUGHRATIONAL": [
          -1,
          120,
          122
        ],
        "'TRUE": [
          -1,
          120,
          122
        ],
        "'FALSE": [
          -1,
          120,
          122
        ],
        "'LAM": [
          -1,
          120,
          122
        ],
        "'METHOD": [
          -1,
          120,
          122
        ],
        "'RBRACK": [
          -1,
          120,
          122
        ],
        "'TABLE": [
          -1,
          120,
          122
        ],
        "'ROW": [
          -1,
          120,
          122
        ],
        "'REACTOR": [
          -1,
          120,
          122
        ],
        "'IF": [
          -1,
          120,
          122
        ],
        "'ELSECOLON": [
          -1,
          120,
          122
        ],
        "'ELSEIF": [
          -1,
          120,
          122
        ],
        "'ASK": [
          -1,
          120,
          122
        ],
        "'THENCOLON": [
          -1,
          120,
          122
        ],
        "'CASES": [
          -1,
          120,
          122
        ],
        "'FOR": [
          -1,
          120,
          122
        ],
        "'TABLE-SELECT": [
          -1,
          120,
          122
        ],
        "'TABLE-FILTER": [
          -1,
          120,
          122
        ],
        "'TABLE-ORDER": [
          -1,
          120,
          122
        ],
        "'TABLE-EXTRACT": [
          -1,
          120,
          122
        ],
        "'TABLE-UPDATE": [
          -1,
          120,
          122
        ],
        "'TABLE-EXTEND": [
          -1,
          120,
          122
        ],
        "'LOAD-TABLE": [
          -1,
          120,
          122
        ]
      },
      {
        "$": [
          -1,
          124
        ],
        "'COLON": [
          -1,
          124
        ],
        "'END": [
          -1,
          124
        ],
        "'COMMA": [
          -1,
          124
        ],
        "'NAME": [
          -1,
          124
        ],
        "'PARENNOSPACE": [
          -1,
          124
        ],
        "'STRING": [
          -1,
          124
        ],
        "'RPAREN": [
          -1,
          124
        ],
        "'TYPE": [
          -1,
          124
        ],
        "'DATA": [
          -1,
          124
        ],
        "'TIMES": [
          -1,
          124
        ],
        "'PARENSPACE": [
          -1,
          124
        ],
        "'DOT": [
          -1,
          124
        ],
        "'SPY": [
          -1,
          124
        ],
        "'NEWTYPE": [
          -1,
          124
        ],
        "'LBRACE": [
          -1,
          124
        ],
        "'RBRACE": [
          -1,
          124
        ],
        "'SEMI": [
          -1,
          124
        ],
        "'SHADOW": [
          -1,
          124
        ],
        "'LET": [
          -1,
          124
        ],
        "'BLOCK": [
          -1,
          124
        ],
        "'LETREC": [
          -1,
          124
        ],
        "'TYPE-LET": [
          -1,
          124
        ],
        "'FUN": [
          -1,
          124
        ],
        "'LANGLE": [
          -1,
          124
        ],
        "'LT": [
          -1,
          124
        ],
        "'GT": [
          -1,
          124
        ],
        "'PARENAFTERBRACE": [
          -1,
          124
        ],
        "'WHERE": [
          -1,
          124
        ],
        "'CHECK": [
          -1,
          124
        ],
        "'EXAMPLES": [
          -1,
          124
        ],
        "'CHECKCOLON": [
          -1,
          124
        ],
        "'EXAMPLESCOLON": [
          -1,
          124
        ],
        "'BECAUSE": [
          -1,
          124
        ],
        "'BAR": [
          -1,
          124
        ],
        "'SHARING": [
          -1,
          124
        ],
        "'VAR": [
          -1,
          124
        ],
        "'REC": [
          -1,
          124
        ],
        "'WHEN": [
          -1,
          124
        ],
        "'PLUS": [
          -1,
          124
        ],
        "'DASH": [
          -1,
          124
        ],
        "'SLASH": [
          -1,
          124
        ],
        "'LEQ": [
          -1,
          124
        ],
        "'GEQ": [
          -1,
          124
        ],
        "'EQUALEQUAL": [
          -1,
          124
        ],
        "'SPACESHIP": [
          -1,
          124
        ],
        "'EQUALTILDE": [
          -1,
          124
        ],
        "'NEQ": [
          -1,
          124
        ],
        "'AND": [
          -1,
          124
        ],
        "'OR": [
          -1,
          124
        ],
        "'CARET": [
          -1,
          124
        ],
        "'IS": [
          -1,
          124
        ],
        "'ISEQUALEQUAL": [
          -1,
          124
        ],
        "'ISEQUALTILDE": [
          -1,
          124
        ],
        "'ISSPACESHIP": [
          -1,
          124
        ],
        "'ISROUGHLY": [
          -1,
          124
        ],
        "'ISNOT": [
          -1,
          124
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          124
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          124
        ],
        "'ISNOTSPACESHIP": [
          -1,
          124
        ],
        "'RAISES": [
          -1,
          124
        ],
        "'RAISESOTHER": [
          -1,
          124
        ],
        "'SATISFIES": [
          -1,
          124
        ],
        "'SATISFIESNOT": [
          -1,
          124
        ],
        "'RAISESSATISFIES": [
          -1,
          124
        ],
        "'RAISESVIOLATES": [
          -1,
          124
        ],
        "'RAISESNOT": [
          -1,
          124
        ],
        "'DOTDOTDOT": [
          -1,
          124
        ],
        "'NUMBER": [
          -1,
          124
        ],
        "'RATIONAL": [
          -1,
          124
        ],
        "'ROUGHRATIONAL": [
          -1,
          124
        ],
        "'TRUE": [
          -1,
          124
        ],
        "'FALSE": [
          -1,
          124
        ],
        "'LAM": [
          -1,
          124
        ],
        "'METHOD": [
          -1,
          124
        ],
        "'LBRACK": [
          -1,
          124
        ],
        "'RBRACK": [
          -1,
          124
        ],
        "'TABLE": [
          -1,
          124
        ],
        "'ROW": [
          -1,
          124
        ],
        "'REACTOR": [
          -1,
          124
        ],
        "'BANG": [
          -1,
          124
        ],
        "'IF": [
          -1,
          124
        ],
        "'ELSECOLON": [
          -1,
          124
        ],
        "'ELSEIF": [
          -1,
          124
        ],
        "'ASK": [
          -1,
          124
        ],
        "'THENCOLON": [
          -1,
          124
        ],
        "'CASES": [
          -1,
          124
        ],
        "'FOR": [
          -1,
          124
        ],
        "'TABLE-SELECT": [
          -1,
          124
        ],
        "'TABLE-FILTER": [
          -1,
          124
        ],
        "'USING": [
          -1,
          124
        ],
        "'TABLE-ORDER": [
          -1,
          124
        ],
        "'TABLE-EXTRACT": [
          -1,
          124
        ],
        "'TABLE-UPDATE": [
          -1,
          124
        ],
        "'TABLE-EXTEND": [
          -1,
          124
        ],
        "'OF": [
          -1,
          124
        ],
        "'LOAD-TABLE": [
          -1,
          124
        ],
        "'SOURCECOLON": [
          -1,
          124
        ],
        "'SANITIZE": [
          -1,
          124
        ]
      },
      {
        "$": [
          -1,
          126
        ],
        "'COLON": [
          -1,
          126
        ],
        "'END": [
          -1,
          126
        ],
        "'COMMA": [
          -1,
          126
        ],
        "'NAME": [
          -1,
          126
        ],
        "'PARENNOSPACE": [
          -1,
          126
        ],
        "'STRING": [
          -1,
          126
        ],
        "'RPAREN": [
          -1,
          126
        ],
        "'TYPE": [
          -1,
          126
        ],
        "'DATA": [
          -1,
          126
        ],
        "'TIMES": [
          -1,
          126
        ],
        "'PARENSPACE": [
          -1,
          126
        ],
        "'DOT": [
          -1,
          126
        ],
        "'SPY": [
          -1,
          126
        ],
        "'NEWTYPE": [
          -1,
          126
        ],
        "'LBRACE": [
          -1,
          126
        ],
        "'RBRACE": [
          -1,
          126
        ],
        "'SEMI": [
          -1,
          126
        ],
        "'SHADOW": [
          -1,
          126
        ],
        "'LET": [
          -1,
          126
        ],
        "'BLOCK": [
          -1,
          126
        ],
        "'LETREC": [
          -1,
          126
        ],
        "'TYPE-LET": [
          -1,
          126
        ],
        "'FUN": [
          -1,
          126
        ],
        "'LANGLE": [
          -1,
          126
        ],
        "'LT": [
          -1,
          126
        ],
        "'GT": [
          -1,
          126
        ],
        "'PARENAFTERBRACE": [
          -1,
          126
        ],
        "'WHERE": [
          -1,
          126
        ],
        "'CHECK": [
          -1,
          126
        ],
        "'EXAMPLES": [
          -1,
          126
        ],
        "'CHECKCOLON": [
          -1,
          126
        ],
        "'EXAMPLESCOLON": [
          -1,
          126
        ],
        "'BECAUSE": [
          -1,
          126
        ],
        "'BAR": [
          -1,
          126
        ],
        "'SHARING": [
          -1,
          126
        ],
        "'VAR": [
          -1,
          126
        ],
        "'REC": [
          -1,
          126
        ],
        "'WHEN": [
          -1,
          126
        ],
        "'PLUS": [
          -1,
          126
        ],
        "'DASH": [
          -1,
          126
        ],
        "'SLASH": [
          -1,
          126
        ],
        "'LEQ": [
          -1,
          126
        ],
        "'GEQ": [
          -1,
          126
        ],
        "'EQUALEQUAL": [
          -1,
          126
        ],
        "'SPACESHIP": [
          -1,
          126
        ],
        "'EQUALTILDE": [
          -1,
          126
        ],
        "'NEQ": [
          -1,
          126
        ],
        "'AND": [
          -1,
          126
        ],
        "'OR": [
          -1,
          126
        ],
        "'CARET": [
          -1,
          126
        ],
        "'IS": [
          -1,
          126
        ],
        "'ISEQUALEQUAL": [
          -1,
          126
        ],
        "'ISEQUALTILDE": [
          -1,
          126
        ],
        "'ISSPACESHIP": [
          -1,
          126
        ],
        "'ISROUGHLY": [
          -1,
          126
        ],
        "'ISNOT": [
          -1,
          126
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          126
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          126
        ],
        "'ISNOTSPACESHIP": [
          -1,
          126
        ],
        "'RAISES": [
          -1,
          126
        ],
        "'RAISESOTHER": [
          -1,
          126
        ],
        "'SATISFIES": [
          -1,
          126
        ],
        "'SATISFIESNOT": [
          -1,
          126
        ],
        "'RAISESSATISFIES": [
          -1,
          126
        ],
        "'RAISESVIOLATES": [
          -1,
          126
        ],
        "'RAISESNOT": [
          -1,
          126
        ],
        "'DOTDOTDOT": [
          -1,
          126
        ],
        "'NUMBER": [
          -1,
          126
        ],
        "'RATIONAL": [
          -1,
          126
        ],
        "'ROUGHRATIONAL": [
          -1,
          126
        ],
        "'TRUE": [
          -1,
          126
        ],
        "'FALSE": [
          -1,
          126
        ],
        "'LAM": [
          -1,
          126
        ],
        "'METHOD": [
          -1,
          126
        ],
        "'LBRACK": [
          -1,
          126
        ],
        "'RBRACK": [
          -1,
          126
        ],
        "'TABLE": [
          -1,
          126
        ],
        "'ROW": [
          -1,
          126
        ],
        "'REACTOR": [
          -1,
          126
        ],
        "'BANG": [
          -1,
          126
        ],
        "'IF": [
          -1,
          126
        ],
        "'ELSECOLON": [
          -1,
          126
        ],
        "'ELSEIF": [
          -1,
          126
        ],
        "'ASK": [
          -1,
          126
        ],
        "'THENCOLON": [
          -1,
          126
        ],
        "'CASES": [
          -1,
          126
        ],
        "'FOR": [
          -1,
          126
        ],
        "'TABLE-SELECT": [
          -1,
          126
        ],
        "'TABLE-FILTER": [
          -1,
          126
        ],
        "'USING": [
          -1,
          126
        ],
        "'TABLE-ORDER": [
          -1,
          126
        ],
        "'TABLE-EXTRACT": [
          -1,
          126
        ],
        "'TABLE-UPDATE": [
          -1,
          126
        ],
        "'TABLE-EXTEND": [
          -1,
          126
        ],
        "'OF": [
          -1,
          126
        ],
        "'LOAD-TABLE": [
          -1,
          126
        ],
        "'SOURCECOLON": [
          -1,
          126
        ],
        "'SANITIZE": [
          -1,
          126
        ]
      },
      {
        "$": [
          -1,
          128
        ],
        "'COLON": [
          -1,
          128
        ],
        "'END": [
          -1,
          128
        ],
        "'COMMA": [
          -1,
          128
        ],
        "'NAME": [
          -1,
          128
        ],
        "'PARENNOSPACE": [
          -1,
          128
        ],
        "'STRING": [
          -1,
          128
        ],
        "'RPAREN": [
          -1,
          128
        ],
        "'TYPE": [
          -1,
          128
        ],
        "'DATA": [
          -1,
          128
        ],
        "'TIMES": [
          -1,
          128
        ],
        "'PARENSPACE": [
          -1,
          128
        ],
        "'DOT": [
          -1,
          128
        ],
        "'SPY": [
          -1,
          128
        ],
        "'NEWTYPE": [
          -1,
          128
        ],
        "'LBRACE": [
          -1,
          128
        ],
        "'RBRACE": [
          -1,
          128
        ],
        "'SEMI": [
          -1,
          128
        ],
        "'SHADOW": [
          -1,
          128
        ],
        "'LET": [
          -1,
          128
        ],
        "'BLOCK": [
          -1,
          128
        ],
        "'LETREC": [
          -1,
          128
        ],
        "'TYPE-LET": [
          -1,
          128
        ],
        "'FUN": [
          -1,
          128
        ],
        "'LANGLE": [
          -1,
          128
        ],
        "'LT": [
          -1,
          128
        ],
        "'GT": [
          -1,
          128
        ],
        "'PARENAFTERBRACE": [
          -1,
          128
        ],
        "'WHERE": [
          -1,
          128
        ],
        "'CHECK": [
          -1,
          128
        ],
        "'EXAMPLES": [
          -1,
          128
        ],
        "'CHECKCOLON": [
          -1,
          128
        ],
        "'EXAMPLESCOLON": [
          -1,
          128
        ],
        "'BECAUSE": [
          -1,
          128
        ],
        "'BAR": [
          -1,
          128
        ],
        "'SHARING": [
          -1,
          128
        ],
        "'VAR": [
          -1,
          128
        ],
        "'REC": [
          -1,
          128
        ],
        "'WHEN": [
          -1,
          128
        ],
        "'PLUS": [
          -1,
          128
        ],
        "'DASH": [
          -1,
          128
        ],
        "'SLASH": [
          -1,
          128
        ],
        "'LEQ": [
          -1,
          128
        ],
        "'GEQ": [
          -1,
          128
        ],
        "'EQUALEQUAL": [
          -1,
          128
        ],
        "'SPACESHIP": [
          -1,
          128
        ],
        "'EQUALTILDE": [
          -1,
          128
        ],
        "'NEQ": [
          -1,
          128
        ],
        "'AND": [
          -1,
          128
        ],
        "'OR": [
          -1,
          128
        ],
        "'CARET": [
          -1,
          128
        ],
        "'IS": [
          -1,
          128
        ],
        "'ISEQUALEQUAL": [
          -1,
          128
        ],
        "'ISEQUALTILDE": [
          -1,
          128
        ],
        "'ISSPACESHIP": [
          -1,
          128
        ],
        "'ISROUGHLY": [
          -1,
          128
        ],
        "'ISNOT": [
          -1,
          128
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          128
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          128
        ],
        "'ISNOTSPACESHIP": [
          -1,
          128
        ],
        "'RAISES": [
          -1,
          128
        ],
        "'RAISESOTHER": [
          -1,
          128
        ],
        "'SATISFIES": [
          -1,
          128
        ],
        "'SATISFIESNOT": [
          -1,
          128
        ],
        "'RAISESSATISFIES": [
          -1,
          128
        ],
        "'RAISESVIOLATES": [
          -1,
          128
        ],
        "'RAISESNOT": [
          -1,
          128
        ],
        "'DOTDOTDOT": [
          -1,
          128
        ],
        "'NUMBER": [
          -1,
          128
        ],
        "'RATIONAL": [
          -1,
          128
        ],
        "'ROUGHRATIONAL": [
          -1,
          128
        ],
        "'TRUE": [
          -1,
          128
        ],
        "'FALSE": [
          -1,
          128
        ],
        "'LAM": [
          -1,
          128
        ],
        "'METHOD": [
          -1,
          128
        ],
        "'LBRACK": [
          -1,
          128
        ],
        "'RBRACK": [
          -1,
          128
        ],
        "'TABLE": [
          -1,
          128
        ],
        "'ROW": [
          -1,
          128
        ],
        "'REACTOR": [
          -1,
          128
        ],
        "'BANG": [
          -1,
          128
        ],
        "'IF": [
          -1,
          128
        ],
        "'ELSECOLON": [
          -1,
          128
        ],
        "'ELSEIF": [
          -1,
          128
        ],
        "'ASK": [
          -1,
          128
        ],
        "'THENCOLON": [
          -1,
          128
        ],
        "'CASES": [
          -1,
          128
        ],
        "'FOR": [
          -1,
          128
        ],
        "'TABLE-SELECT": [
          -1,
          128
        ],
        "'TABLE-FILTER": [
          -1,
          128
        ],
        "'USING": [
          -1,
          128
        ],
        "'TABLE-ORDER": [
          -1,
          128
        ],
        "'TABLE-EXTRACT": [
          -1,
          128
        ],
        "'TABLE-UPDATE": [
          -1,
          128
        ],
        "'TABLE-EXTEND": [
          -1,
          128
        ],
        "'OF": [
          -1,
          128
        ],
        "'LOAD-TABLE": [
          -1,
          128
        ],
        "'SOURCECOLON": [
          -1,
          128
        ],
        "'SANITIZE": [
          -1,
          128
        ]
      },
      {
        "$": [
          -1,
          130
        ],
        "'COLON": [
          -1,
          130
        ],
        "'END": [
          -1,
          130
        ],
        "'COMMA": [
          -1,
          130
        ],
        "'NAME": [
          -1,
          130
        ],
        "'PARENNOSPACE": [
          -1,
          130
        ],
        "'STRING": [
          -1,
          130
        ],
        "'RPAREN": [
          -1,
          130
        ],
        "'TYPE": [
          -1,
          130
        ],
        "'DATA": [
          -1,
          130
        ],
        "'TIMES": [
          -1,
          130
        ],
        "'PARENSPACE": [
          -1,
          130
        ],
        "'DOT": [
          -1,
          130
        ],
        "'SPY": [
          -1,
          130
        ],
        "'NEWTYPE": [
          -1,
          130
        ],
        "'LBRACE": [
          -1,
          130
        ],
        "'RBRACE": [
          -1,
          130
        ],
        "'SEMI": [
          -1,
          130
        ],
        "'SHADOW": [
          -1,
          130
        ],
        "'LET": [
          -1,
          130
        ],
        "'BLOCK": [
          -1,
          130
        ],
        "'LETREC": [
          -1,
          130
        ],
        "'TYPE-LET": [
          -1,
          130
        ],
        "'FUN": [
          -1,
          130
        ],
        "'LANGLE": [
          -1,
          130
        ],
        "'LT": [
          -1,
          130
        ],
        "'GT": [
          -1,
          130
        ],
        "'PARENAFTERBRACE": [
          -1,
          130
        ],
        "'WHERE": [
          -1,
          130
        ],
        "'CHECK": [
          -1,
          130
        ],
        "'EXAMPLES": [
          -1,
          130
        ],
        "'CHECKCOLON": [
          -1,
          130
        ],
        "'EXAMPLESCOLON": [
          -1,
          130
        ],
        "'BECAUSE": [
          -1,
          130
        ],
        "'BAR": [
          -1,
          130
        ],
        "'SHARING": [
          -1,
          130
        ],
        "'VAR": [
          -1,
          130
        ],
        "'REC": [
          -1,
          130
        ],
        "'WHEN": [
          -1,
          130
        ],
        "'PLUS": [
          -1,
          130
        ],
        "'DASH": [
          -1,
          130
        ],
        "'SLASH": [
          -1,
          130
        ],
        "'LEQ": [
          -1,
          130
        ],
        "'GEQ": [
          -1,
          130
        ],
        "'EQUALEQUAL": [
          -1,
          130
        ],
        "'SPACESHIP": [
          -1,
          130
        ],
        "'EQUALTILDE": [
          -1,
          130
        ],
        "'NEQ": [
          -1,
          130
        ],
        "'AND": [
          -1,
          130
        ],
        "'OR": [
          -1,
          130
        ],
        "'CARET": [
          -1,
          130
        ],
        "'IS": [
          -1,
          130
        ],
        "'ISEQUALEQUAL": [
          -1,
          130
        ],
        "'ISEQUALTILDE": [
          -1,
          130
        ],
        "'ISSPACESHIP": [
          -1,
          130
        ],
        "'ISROUGHLY": [
          -1,
          130
        ],
        "'ISNOT": [
          -1,
          130
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          130
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          130
        ],
        "'ISNOTSPACESHIP": [
          -1,
          130
        ],
        "'RAISES": [
          -1,
          130
        ],
        "'RAISESOTHER": [
          -1,
          130
        ],
        "'SATISFIES": [
          -1,
          130
        ],
        "'SATISFIESNOT": [
          -1,
          130
        ],
        "'RAISESSATISFIES": [
          -1,
          130
        ],
        "'RAISESVIOLATES": [
          -1,
          130
        ],
        "'RAISESNOT": [
          -1,
          130
        ],
        "'DOTDOTDOT": [
          -1,
          130
        ],
        "'NUMBER": [
          -1,
          130
        ],
        "'RATIONAL": [
          -1,
          130
        ],
        "'ROUGHRATIONAL": [
          -1,
          130
        ],
        "'TRUE": [
          -1,
          130
        ],
        "'FALSE": [
          -1,
          130
        ],
        "'LAM": [
          -1,
          130
        ],
        "'METHOD": [
          -1,
          130
        ],
        "'LBRACK": [
          -1,
          130
        ],
        "'RBRACK": [
          -1,
          130
        ],
        "'TABLE": [
          -1,
          130
        ],
        "'ROW": [
          -1,
          130
        ],
        "'REACTOR": [
          -1,
          130
        ],
        "'BANG": [
          -1,
          130
        ],
        "'IF": [
          -1,
          130
        ],
        "'ELSECOLON": [
          -1,
          130
        ],
        "'ELSEIF": [
          -1,
          130
        ],
        "'ASK": [
          -1,
          130
        ],
        "'THENCOLON": [
          -1,
          130
        ],
        "'CASES": [
          -1,
          130
        ],
        "'FOR": [
          -1,
          130
        ],
        "'TABLE-SELECT": [
          -1,
          130
        ],
        "'TABLE-FILTER": [
          -1,
          130
        ],
        "'USING": [
          -1,
          130
        ],
        "'TABLE-ORDER": [
          -1,
          130
        ],
        "'TABLE-EXTRACT": [
          -1,
          130
        ],
        "'TABLE-UPDATE": [
          -1,
          130
        ],
        "'TABLE-EXTEND": [
          -1,
          130
        ],
        "'OF": [
          -1,
          130
        ],
        "'LOAD-TABLE": [
          -1,
          130
        ],
        "'SOURCECOLON": [
          -1,
          130
        ],
        "'SANITIZE": [
          -1,
          130
        ]
      },
      {
        "$": [
          -1,
          132
        ],
        "'COLON": [
          -1,
          132
        ],
        "'END": [
          -1,
          132
        ],
        "'COMMA": [
          -1,
          132
        ],
        "'NAME": [
          -1,
          132
        ],
        "'PARENNOSPACE": [
          -1,
          132
        ],
        "'STRING": [
          -1,
          132
        ],
        "'RPAREN": [
          -1,
          132
        ],
        "'TYPE": [
          -1,
          132
        ],
        "'DATA": [
          -1,
          132
        ],
        "'TIMES": [
          -1,
          132
        ],
        "'PARENSPACE": [
          -1,
          132
        ],
        "'DOT": [
          -1,
          132
        ],
        "'SPY": [
          -1,
          132
        ],
        "'NEWTYPE": [
          -1,
          132
        ],
        "'LBRACE": [
          -1,
          132
        ],
        "'RBRACE": [
          -1,
          132
        ],
        "'SEMI": [
          -1,
          132
        ],
        "'SHADOW": [
          -1,
          132
        ],
        "'LET": [
          -1,
          132
        ],
        "'BLOCK": [
          -1,
          132
        ],
        "'LETREC": [
          -1,
          132
        ],
        "'TYPE-LET": [
          -1,
          132
        ],
        "'FUN": [
          -1,
          132
        ],
        "'LANGLE": [
          -1,
          132
        ],
        "'LT": [
          -1,
          132
        ],
        "'GT": [
          -1,
          132
        ],
        "'PARENAFTERBRACE": [
          -1,
          132
        ],
        "'WHERE": [
          -1,
          132
        ],
        "'CHECK": [
          -1,
          132
        ],
        "'EXAMPLES": [
          -1,
          132
        ],
        "'CHECKCOLON": [
          -1,
          132
        ],
        "'EXAMPLESCOLON": [
          -1,
          132
        ],
        "'BECAUSE": [
          -1,
          132
        ],
        "'BAR": [
          -1,
          132
        ],
        "'SHARING": [
          -1,
          132
        ],
        "'VAR": [
          -1,
          132
        ],
        "'REC": [
          -1,
          132
        ],
        "'WHEN": [
          -1,
          132
        ],
        "'PLUS": [
          -1,
          132
        ],
        "'DASH": [
          -1,
          132
        ],
        "'SLASH": [
          -1,
          132
        ],
        "'LEQ": [
          -1,
          132
        ],
        "'GEQ": [
          -1,
          132
        ],
        "'EQUALEQUAL": [
          -1,
          132
        ],
        "'SPACESHIP": [
          -1,
          132
        ],
        "'EQUALTILDE": [
          -1,
          132
        ],
        "'NEQ": [
          -1,
          132
        ],
        "'AND": [
          -1,
          132
        ],
        "'OR": [
          -1,
          132
        ],
        "'CARET": [
          -1,
          132
        ],
        "'IS": [
          -1,
          132
        ],
        "'ISEQUALEQUAL": [
          -1,
          132
        ],
        "'ISEQUALTILDE": [
          -1,
          132
        ],
        "'ISSPACESHIP": [
          -1,
          132
        ],
        "'ISROUGHLY": [
          -1,
          132
        ],
        "'ISNOT": [
          -1,
          132
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          132
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          132
        ],
        "'ISNOTSPACESHIP": [
          -1,
          132
        ],
        "'RAISES": [
          -1,
          132
        ],
        "'RAISESOTHER": [
          -1,
          132
        ],
        "'SATISFIES": [
          -1,
          132
        ],
        "'SATISFIESNOT": [
          -1,
          132
        ],
        "'RAISESSATISFIES": [
          -1,
          132
        ],
        "'RAISESVIOLATES": [
          -1,
          132
        ],
        "'RAISESNOT": [
          -1,
          132
        ],
        "'DOTDOTDOT": [
          -1,
          132
        ],
        "'NUMBER": [
          -1,
          132
        ],
        "'RATIONAL": [
          -1,
          132
        ],
        "'ROUGHRATIONAL": [
          -1,
          132
        ],
        "'TRUE": [
          -1,
          132
        ],
        "'FALSE": [
          -1,
          132
        ],
        "'LAM": [
          -1,
          132
        ],
        "'METHOD": [
          -1,
          132
        ],
        "'LBRACK": [
          -1,
          132
        ],
        "'RBRACK": [
          -1,
          132
        ],
        "'TABLE": [
          -1,
          132
        ],
        "'ROW": [
          -1,
          132
        ],
        "'REACTOR": [
          -1,
          132
        ],
        "'BANG": [
          -1,
          132
        ],
        "'IF": [
          -1,
          132
        ],
        "'ELSECOLON": [
          -1,
          132
        ],
        "'ELSEIF": [
          -1,
          132
        ],
        "'ASK": [
          -1,
          132
        ],
        "'THENCOLON": [
          -1,
          132
        ],
        "'CASES": [
          -1,
          132
        ],
        "'FOR": [
          -1,
          132
        ],
        "'TABLE-SELECT": [
          -1,
          132
        ],
        "'TABLE-FILTER": [
          -1,
          132
        ],
        "'USING": [
          -1,
          132
        ],
        "'TABLE-ORDER": [
          -1,
          132
        ],
        "'TABLE-EXTRACT": [
          -1,
          132
        ],
        "'TABLE-UPDATE": [
          -1,
          132
        ],
        "'TABLE-EXTEND": [
          -1,
          132
        ],
        "'OF": [
          -1,
          132
        ],
        "'LOAD-TABLE": [
          -1,
          132
        ],
        "'SOURCECOLON": [
          -1,
          132
        ],
        "'SANITIZE": [
          -1,
          132
        ]
      },
      {
        "$": [
          -1,
          134
        ],
        "'COLON": [
          -1,
          134
        ],
        "'END": [
          -1,
          134
        ],
        "'COMMA": [
          -1,
          134
        ],
        "'NAME": [
          -1,
          134
        ],
        "'PARENNOSPACE": [
          -1,
          134
        ],
        "'STRING": [
          -1,
          134
        ],
        "'RPAREN": [
          -1,
          134
        ],
        "'TYPE": [
          -1,
          134
        ],
        "'DATA": [
          -1,
          134
        ],
        "'TIMES": [
          -1,
          134
        ],
        "'PARENSPACE": [
          -1,
          134
        ],
        "'DOT": [
          -1,
          134
        ],
        "'SPY": [
          -1,
          134
        ],
        "'NEWTYPE": [
          -1,
          134
        ],
        "'LBRACE": [
          -1,
          134
        ],
        "'RBRACE": [
          -1,
          134
        ],
        "'SEMI": [
          -1,
          134
        ],
        "'SHADOW": [
          -1,
          134
        ],
        "'LET": [
          -1,
          134
        ],
        "'BLOCK": [
          -1,
          134
        ],
        "'LETREC": [
          -1,
          134
        ],
        "'TYPE-LET": [
          -1,
          134
        ],
        "'FUN": [
          -1,
          134
        ],
        "'LANGLE": [
          -1,
          134
        ],
        "'LT": [
          -1,
          134
        ],
        "'GT": [
          -1,
          134
        ],
        "'PARENAFTERBRACE": [
          -1,
          134
        ],
        "'WHERE": [
          -1,
          134
        ],
        "'CHECK": [
          -1,
          134
        ],
        "'EXAMPLES": [
          -1,
          134
        ],
        "'CHECKCOLON": [
          -1,
          134
        ],
        "'EXAMPLESCOLON": [
          -1,
          134
        ],
        "'BECAUSE": [
          -1,
          134
        ],
        "'BAR": [
          -1,
          134
        ],
        "'SHARING": [
          -1,
          134
        ],
        "'VAR": [
          -1,
          134
        ],
        "'REC": [
          -1,
          134
        ],
        "'WHEN": [
          -1,
          134
        ],
        "'PLUS": [
          -1,
          134
        ],
        "'DASH": [
          -1,
          134
        ],
        "'SLASH": [
          -1,
          134
        ],
        "'LEQ": [
          -1,
          134
        ],
        "'GEQ": [
          -1,
          134
        ],
        "'EQUALEQUAL": [
          -1,
          134
        ],
        "'SPACESHIP": [
          -1,
          134
        ],
        "'EQUALTILDE": [
          -1,
          134
        ],
        "'NEQ": [
          -1,
          134
        ],
        "'AND": [
          -1,
          134
        ],
        "'OR": [
          -1,
          134
        ],
        "'CARET": [
          -1,
          134
        ],
        "'IS": [
          -1,
          134
        ],
        "'ISEQUALEQUAL": [
          -1,
          134
        ],
        "'ISEQUALTILDE": [
          -1,
          134
        ],
        "'ISSPACESHIP": [
          -1,
          134
        ],
        "'ISROUGHLY": [
          -1,
          134
        ],
        "'ISNOT": [
          -1,
          134
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          134
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          134
        ],
        "'ISNOTSPACESHIP": [
          -1,
          134
        ],
        "'RAISES": [
          -1,
          134
        ],
        "'RAISESOTHER": [
          -1,
          134
        ],
        "'SATISFIES": [
          -1,
          134
        ],
        "'SATISFIESNOT": [
          -1,
          134
        ],
        "'RAISESSATISFIES": [
          -1,
          134
        ],
        "'RAISESVIOLATES": [
          -1,
          134
        ],
        "'RAISESNOT": [
          -1,
          134
        ],
        "'DOTDOTDOT": [
          -1,
          134
        ],
        "'NUMBER": [
          -1,
          134
        ],
        "'RATIONAL": [
          -1,
          134
        ],
        "'ROUGHRATIONAL": [
          -1,
          134
        ],
        "'TRUE": [
          -1,
          134
        ],
        "'FALSE": [
          -1,
          134
        ],
        "'LAM": [
          -1,
          134
        ],
        "'METHOD": [
          -1,
          134
        ],
        "'LBRACK": [
          -1,
          134
        ],
        "'RBRACK": [
          -1,
          134
        ],
        "'TABLE": [
          -1,
          134
        ],
        "'ROW": [
          -1,
          134
        ],
        "'REACTOR": [
          -1,
          134
        ],
        "'BANG": [
          -1,
          134
        ],
        "'IF": [
          -1,
          134
        ],
        "'ELSECOLON": [
          -1,
          134
        ],
        "'ELSEIF": [
          -1,
          134
        ],
        "'ASK": [
          -1,
          134
        ],
        "'THENCOLON": [
          -1,
          134
        ],
        "'CASES": [
          -1,
          134
        ],
        "'FOR": [
          -1,
          134
        ],
        "'TABLE-SELECT": [
          -1,
          134
        ],
        "'TABLE-FILTER": [
          -1,
          134
        ],
        "'USING": [
          -1,
          134
        ],
        "'TABLE-ORDER": [
          -1,
          134
        ],
        "'TABLE-EXTRACT": [
          -1,
          134
        ],
        "'TABLE-UPDATE": [
          -1,
          134
        ],
        "'TABLE-EXTEND": [
          -1,
          134
        ],
        "'OF": [
          -1,
          134
        ],
        "'LOAD-TABLE": [
          -1,
          134
        ],
        "'SOURCECOLON": [
          -1,
          134
        ],
        "'SANITIZE": [
          -1,
          134
        ]
      },
      {
        "$": [
          -1,
          136
        ],
        "'COLON": [
          -1,
          136
        ],
        "'END": [
          -1,
          136
        ],
        "'COMMA": [
          -1,
          136
        ],
        "'NAME": [
          -1,
          136
        ],
        "'PARENNOSPACE": [
          -1,
          136
        ],
        "'STRING": [
          -1,
          136
        ],
        "'RPAREN": [
          -1,
          136
        ],
        "'TYPE": [
          -1,
          136
        ],
        "'DATA": [
          -1,
          136
        ],
        "'TIMES": [
          -1,
          136
        ],
        "'PARENSPACE": [
          -1,
          136
        ],
        "'DOT": [
          -1,
          136
        ],
        "'SPY": [
          -1,
          136
        ],
        "'NEWTYPE": [
          -1,
          136
        ],
        "'LBRACE": [
          -1,
          136
        ],
        "'RBRACE": [
          -1,
          136
        ],
        "'SEMI": [
          -1,
          136
        ],
        "'SHADOW": [
          -1,
          136
        ],
        "'LET": [
          -1,
          136
        ],
        "'BLOCK": [
          -1,
          136
        ],
        "'LETREC": [
          -1,
          136
        ],
        "'TYPE-LET": [
          -1,
          136
        ],
        "'FUN": [
          -1,
          136
        ],
        "'LANGLE": [
          -1,
          136
        ],
        "'LT": [
          -1,
          136
        ],
        "'GT": [
          -1,
          136
        ],
        "'PARENAFTERBRACE": [
          -1,
          136
        ],
        "'WHERE": [
          -1,
          136
        ],
        "'CHECK": [
          -1,
          136
        ],
        "'EXAMPLES": [
          -1,
          136
        ],
        "'CHECKCOLON": [
          -1,
          136
        ],
        "'EXAMPLESCOLON": [
          -1,
          136
        ],
        "'BECAUSE": [
          -1,
          136
        ],
        "'BAR": [
          -1,
          136
        ],
        "'SHARING": [
          -1,
          136
        ],
        "'VAR": [
          -1,
          136
        ],
        "'REC": [
          -1,
          136
        ],
        "'WHEN": [
          -1,
          136
        ],
        "'PLUS": [
          -1,
          136
        ],
        "'DASH": [
          -1,
          136
        ],
        "'SLASH": [
          -1,
          136
        ],
        "'LEQ": [
          -1,
          136
        ],
        "'GEQ": [
          -1,
          136
        ],
        "'EQUALEQUAL": [
          -1,
          136
        ],
        "'SPACESHIP": [
          -1,
          136
        ],
        "'EQUALTILDE": [
          -1,
          136
        ],
        "'NEQ": [
          -1,
          136
        ],
        "'AND": [
          -1,
          136
        ],
        "'OR": [
          -1,
          136
        ],
        "'CARET": [
          -1,
          136
        ],
        "'IS": [
          -1,
          136
        ],
        "'ISEQUALEQUAL": [
          -1,
          136
        ],
        "'ISEQUALTILDE": [
          -1,
          136
        ],
        "'ISSPACESHIP": [
          -1,
          136
        ],
        "'ISROUGHLY": [
          -1,
          136
        ],
        "'ISNOT": [
          -1,
          136
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          136
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          136
        ],
        "'ISNOTSPACESHIP": [
          -1,
          136
        ],
        "'RAISES": [
          -1,
          136
        ],
        "'RAISESOTHER": [
          -1,
          136
        ],
        "'SATISFIES": [
          -1,
          136
        ],
        "'SATISFIESNOT": [
          -1,
          136
        ],
        "'RAISESSATISFIES": [
          -1,
          136
        ],
        "'RAISESVIOLATES": [
          -1,
          136
        ],
        "'RAISESNOT": [
          -1,
          136
        ],
        "'DOTDOTDOT": [
          -1,
          136
        ],
        "'NUMBER": [
          -1,
          136
        ],
        "'RATIONAL": [
          -1,
          136
        ],
        "'ROUGHRATIONAL": [
          -1,
          136
        ],
        "'TRUE": [
          -1,
          136
        ],
        "'FALSE": [
          -1,
          136
        ],
        "'LAM": [
          -1,
          136
        ],
        "'METHOD": [
          -1,
          136
        ],
        "'LBRACK": [
          -1,
          136
        ],
        "'RBRACK": [
          -1,
          136
        ],
        "'TABLE": [
          -1,
          136
        ],
        "'ROW": [
          -1,
          136
        ],
        "'REACTOR": [
          -1,
          136
        ],
        "'BANG": [
          -1,
          136
        ],
        "'IF": [
          -1,
          136
        ],
        "'ELSECOLON": [
          -1,
          136
        ],
        "'ELSEIF": [
          -1,
          136
        ],
        "'ASK": [
          -1,
          136
        ],
        "'THENCOLON": [
          -1,
          136
        ],
        "'CASES": [
          -1,
          136
        ],
        "'FOR": [
          -1,
          136
        ],
        "'TABLE-SELECT": [
          -1,
          136
        ],
        "'TABLE-FILTER": [
          -1,
          136
        ],
        "'USING": [
          -1,
          136
        ],
        "'TABLE-ORDER": [
          -1,
          136
        ],
        "'TABLE-EXTRACT": [
          -1,
          136
        ],
        "'TABLE-UPDATE": [
          -1,
          136
        ],
        "'TABLE-EXTEND": [
          -1,
          136
        ],
        "'OF": [
          -1,
          136
        ],
        "'LOAD-TABLE": [
          -1,
          136
        ],
        "'SOURCECOLON": [
          -1,
          136
        ],
        "'SANITIZE": [
          -1,
          136
        ]
      },
      {
        "$": [
          -1,
          138
        ],
        "'COLON": [
          -1,
          138
        ],
        "'END": [
          -1,
          138
        ],
        "'COMMA": [
          -1,
          138
        ],
        "'NAME": [
          -1,
          138
        ],
        "'PARENNOSPACE": [
          -1,
          138
        ],
        "'STRING": [
          -1,
          138
        ],
        "'RPAREN": [
          -1,
          138
        ],
        "'TYPE": [
          -1,
          138
        ],
        "'DATA": [
          -1,
          138
        ],
        "'TIMES": [
          -1,
          138
        ],
        "'PARENSPACE": [
          -1,
          138
        ],
        "'DOT": [
          -1,
          138
        ],
        "'SPY": [
          -1,
          138
        ],
        "'NEWTYPE": [
          -1,
          138
        ],
        "'LBRACE": [
          -1,
          138
        ],
        "'RBRACE": [
          -1,
          138
        ],
        "'SEMI": [
          -1,
          138
        ],
        "'SHADOW": [
          -1,
          138
        ],
        "'LET": [
          -1,
          138
        ],
        "'BLOCK": [
          -1,
          138
        ],
        "'LETREC": [
          -1,
          138
        ],
        "'TYPE-LET": [
          -1,
          138
        ],
        "'FUN": [
          -1,
          138
        ],
        "'LANGLE": [
          -1,
          138
        ],
        "'LT": [
          -1,
          138
        ],
        "'GT": [
          -1,
          138
        ],
        "'PARENAFTERBRACE": [
          -1,
          138
        ],
        "'WHERE": [
          -1,
          138
        ],
        "'CHECK": [
          -1,
          138
        ],
        "'EXAMPLES": [
          -1,
          138
        ],
        "'CHECKCOLON": [
          -1,
          138
        ],
        "'EXAMPLESCOLON": [
          -1,
          138
        ],
        "'BECAUSE": [
          -1,
          138
        ],
        "'BAR": [
          -1,
          138
        ],
        "'SHARING": [
          -1,
          138
        ],
        "'VAR": [
          -1,
          138
        ],
        "'REC": [
          -1,
          138
        ],
        "'WHEN": [
          -1,
          138
        ],
        "'PLUS": [
          -1,
          138
        ],
        "'DASH": [
          -1,
          138
        ],
        "'SLASH": [
          -1,
          138
        ],
        "'LEQ": [
          -1,
          138
        ],
        "'GEQ": [
          -1,
          138
        ],
        "'EQUALEQUAL": [
          -1,
          138
        ],
        "'SPACESHIP": [
          -1,
          138
        ],
        "'EQUALTILDE": [
          -1,
          138
        ],
        "'NEQ": [
          -1,
          138
        ],
        "'AND": [
          -1,
          138
        ],
        "'OR": [
          -1,
          138
        ],
        "'CARET": [
          -1,
          138
        ],
        "'IS": [
          -1,
          138
        ],
        "'ISEQUALEQUAL": [
          -1,
          138
        ],
        "'ISEQUALTILDE": [
          -1,
          138
        ],
        "'ISSPACESHIP": [
          -1,
          138
        ],
        "'ISROUGHLY": [
          -1,
          138
        ],
        "'ISNOT": [
          -1,
          138
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          138
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          138
        ],
        "'ISNOTSPACESHIP": [
          -1,
          138
        ],
        "'RAISES": [
          -1,
          138
        ],
        "'RAISESOTHER": [
          -1,
          138
        ],
        "'SATISFIES": [
          -1,
          138
        ],
        "'SATISFIESNOT": [
          -1,
          138
        ],
        "'RAISESSATISFIES": [
          -1,
          138
        ],
        "'RAISESVIOLATES": [
          -1,
          138
        ],
        "'RAISESNOT": [
          -1,
          138
        ],
        "'DOTDOTDOT": [
          -1,
          138
        ],
        "'NUMBER": [
          -1,
          138
        ],
        "'RATIONAL": [
          -1,
          138
        ],
        "'ROUGHRATIONAL": [
          -1,
          138
        ],
        "'TRUE": [
          -1,
          138
        ],
        "'FALSE": [
          -1,
          138
        ],
        "'LAM": [
          -1,
          138
        ],
        "'METHOD": [
          -1,
          138
        ],
        "'LBRACK": [
          -1,
          138
        ],
        "'RBRACK": [
          -1,
          138
        ],
        "'TABLE": [
          -1,
          138
        ],
        "'ROW": [
          -1,
          138
        ],
        "'REACTOR": [
          -1,
          138
        ],
        "'BANG": [
          -1,
          138
        ],
        "'IF": [
          -1,
          138
        ],
        "'ELSECOLON": [
          -1,
          138
        ],
        "'ELSEIF": [
          -1,
          138
        ],
        "'ASK": [
          -1,
          138
        ],
        "'THENCOLON": [
          -1,
          138
        ],
        "'CASES": [
          -1,
          138
        ],
        "'FOR": [
          -1,
          138
        ],
        "'TABLE-SELECT": [
          -1,
          138
        ],
        "'TABLE-FILTER": [
          -1,
          138
        ],
        "'USING": [
          -1,
          138
        ],
        "'TABLE-ORDER": [
          -1,
          138
        ],
        "'TABLE-EXTRACT": [
          -1,
          138
        ],
        "'TABLE-UPDATE": [
          -1,
          138
        ],
        "'TABLE-EXTEND": [
          -1,
          138
        ],
        "'OF": [
          -1,
          138
        ],
        "'LOAD-TABLE": [
          -1,
          138
        ],
        "'SOURCECOLON": [
          -1,
          138
        ],
        "'SANITIZE": [
          -1,
          138
        ]
      },
      {
        "$": [
          -1,
          140
        ],
        "'COLON": [
          -1,
          140
        ],
        "'END": [
          -1,
          140
        ],
        "'COMMA": [
          -1,
          140
        ],
        "'NAME": [
          -1,
          140
        ],
        "'PARENNOSPACE": [
          -1,
          140
        ],
        "'STRING": [
          -1,
          140
        ],
        "'RPAREN": [
          -1,
          140
        ],
        "'TYPE": [
          -1,
          140
        ],
        "'DATA": [
          -1,
          140
        ],
        "'TIMES": [
          -1,
          140
        ],
        "'PARENSPACE": [
          -1,
          140
        ],
        "'DOT": [
          -1,
          140
        ],
        "'SPY": [
          -1,
          140
        ],
        "'NEWTYPE": [
          -1,
          140
        ],
        "'LBRACE": [
          -1,
          140
        ],
        "'RBRACE": [
          -1,
          140
        ],
        "'SEMI": [
          -1,
          140
        ],
        "'SHADOW": [
          -1,
          140
        ],
        "'LET": [
          -1,
          140
        ],
        "'BLOCK": [
          -1,
          140
        ],
        "'LETREC": [
          -1,
          140
        ],
        "'TYPE-LET": [
          -1,
          140
        ],
        "'FUN": [
          -1,
          140
        ],
        "'LANGLE": [
          -1,
          140
        ],
        "'LT": [
          -1,
          140
        ],
        "'GT": [
          -1,
          140
        ],
        "'PARENAFTERBRACE": [
          -1,
          140
        ],
        "'WHERE": [
          -1,
          140
        ],
        "'CHECK": [
          -1,
          140
        ],
        "'EXAMPLES": [
          -1,
          140
        ],
        "'CHECKCOLON": [
          -1,
          140
        ],
        "'EXAMPLESCOLON": [
          -1,
          140
        ],
        "'BECAUSE": [
          -1,
          140
        ],
        "'BAR": [
          -1,
          140
        ],
        "'SHARING": [
          -1,
          140
        ],
        "'VAR": [
          -1,
          140
        ],
        "'REC": [
          -1,
          140
        ],
        "'WHEN": [
          -1,
          140
        ],
        "'PLUS": [
          -1,
          140
        ],
        "'DASH": [
          -1,
          140
        ],
        "'SLASH": [
          -1,
          140
        ],
        "'LEQ": [
          -1,
          140
        ],
        "'GEQ": [
          -1,
          140
        ],
        "'EQUALEQUAL": [
          -1,
          140
        ],
        "'SPACESHIP": [
          -1,
          140
        ],
        "'EQUALTILDE": [
          -1,
          140
        ],
        "'NEQ": [
          -1,
          140
        ],
        "'AND": [
          -1,
          140
        ],
        "'OR": [
          -1,
          140
        ],
        "'CARET": [
          -1,
          140
        ],
        "'IS": [
          -1,
          140
        ],
        "'ISEQUALEQUAL": [
          -1,
          140
        ],
        "'ISEQUALTILDE": [
          -1,
          140
        ],
        "'ISSPACESHIP": [
          -1,
          140
        ],
        "'ISROUGHLY": [
          -1,
          140
        ],
        "'ISNOT": [
          -1,
          140
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          140
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          140
        ],
        "'ISNOTSPACESHIP": [
          -1,
          140
        ],
        "'RAISES": [
          -1,
          140
        ],
        "'RAISESOTHER": [
          -1,
          140
        ],
        "'SATISFIES": [
          -1,
          140
        ],
        "'SATISFIESNOT": [
          -1,
          140
        ],
        "'RAISESSATISFIES": [
          -1,
          140
        ],
        "'RAISESVIOLATES": [
          -1,
          140
        ],
        "'RAISESNOT": [
          -1,
          140
        ],
        "'DOTDOTDOT": [
          -1,
          140
        ],
        "'NUMBER": [
          -1,
          140
        ],
        "'RATIONAL": [
          -1,
          140
        ],
        "'ROUGHRATIONAL": [
          -1,
          140
        ],
        "'TRUE": [
          -1,
          140
        ],
        "'FALSE": [
          -1,
          140
        ],
        "'LAM": [
          -1,
          140
        ],
        "'METHOD": [
          -1,
          140
        ],
        "'LBRACK": [
          -1,
          140
        ],
        "'RBRACK": [
          -1,
          140
        ],
        "'TABLE": [
          -1,
          140
        ],
        "'ROW": [
          -1,
          140
        ],
        "'REACTOR": [
          -1,
          140
        ],
        "'BANG": [
          -1,
          140
        ],
        "'IF": [
          -1,
          140
        ],
        "'ELSECOLON": [
          -1,
          140
        ],
        "'ELSEIF": [
          -1,
          140
        ],
        "'ASK": [
          -1,
          140
        ],
        "'THENCOLON": [
          -1,
          140
        ],
        "'CASES": [
          -1,
          140
        ],
        "'FOR": [
          -1,
          140
        ],
        "'TABLE-SELECT": [
          -1,
          140
        ],
        "'TABLE-FILTER": [
          -1,
          140
        ],
        "'USING": [
          -1,
          140
        ],
        "'TABLE-ORDER": [
          -1,
          140
        ],
        "'TABLE-EXTRACT": [
          -1,
          140
        ],
        "'TABLE-UPDATE": [
          -1,
          140
        ],
        "'TABLE-EXTEND": [
          -1,
          140
        ],
        "'OF": [
          -1,
          140
        ],
        "'LOAD-TABLE": [
          -1,
          140
        ],
        "'SOURCECOLON": [
          -1,
          140
        ],
        "'SANITIZE": [
          -1,
          140
        ]
      },
      {
        "$": [
          -1,
          142
        ],
        "'COLON": [
          -1,
          142
        ],
        "'END": [
          -1,
          142
        ],
        "'COMMA": [
          -1,
          142
        ],
        "'NAME": [
          -1,
          142
        ],
        "'PARENNOSPACE": [
          -1,
          142
        ],
        "'STRING": [
          -1,
          142
        ],
        "'RPAREN": [
          -1,
          142
        ],
        "'TYPE": [
          -1,
          142
        ],
        "'DATA": [
          -1,
          142
        ],
        "'TIMES": [
          -1,
          142
        ],
        "'PARENSPACE": [
          -1,
          142
        ],
        "'DOT": [
          -1,
          142
        ],
        "'SPY": [
          -1,
          142
        ],
        "'NEWTYPE": [
          -1,
          142
        ],
        "'LBRACE": [
          -1,
          142
        ],
        "'RBRACE": [
          -1,
          142
        ],
        "'SEMI": [
          -1,
          142
        ],
        "'SHADOW": [
          -1,
          142
        ],
        "'LET": [
          -1,
          142
        ],
        "'BLOCK": [
          -1,
          142
        ],
        "'LETREC": [
          -1,
          142
        ],
        "'TYPE-LET": [
          -1,
          142
        ],
        "'FUN": [
          -1,
          142
        ],
        "'LANGLE": [
          -1,
          142
        ],
        "'LT": [
          -1,
          142
        ],
        "'GT": [
          -1,
          142
        ],
        "'PARENAFTERBRACE": [
          -1,
          142
        ],
        "'WHERE": [
          -1,
          142
        ],
        "'CHECK": [
          -1,
          142
        ],
        "'EXAMPLES": [
          -1,
          142
        ],
        "'CHECKCOLON": [
          -1,
          142
        ],
        "'EXAMPLESCOLON": [
          -1,
          142
        ],
        "'BECAUSE": [
          -1,
          142
        ],
        "'BAR": [
          -1,
          142
        ],
        "'SHARING": [
          -1,
          142
        ],
        "'VAR": [
          -1,
          142
        ],
        "'REC": [
          -1,
          142
        ],
        "'WHEN": [
          -1,
          142
        ],
        "'PLUS": [
          -1,
          142
        ],
        "'DASH": [
          -1,
          142
        ],
        "'SLASH": [
          -1,
          142
        ],
        "'LEQ": [
          -1,
          142
        ],
        "'GEQ": [
          -1,
          142
        ],
        "'EQUALEQUAL": [
          -1,
          142
        ],
        "'SPACESHIP": [
          -1,
          142
        ],
        "'EQUALTILDE": [
          -1,
          142
        ],
        "'NEQ": [
          -1,
          142
        ],
        "'AND": [
          -1,
          142
        ],
        "'OR": [
          -1,
          142
        ],
        "'CARET": [
          -1,
          142
        ],
        "'IS": [
          -1,
          142
        ],
        "'ISEQUALEQUAL": [
          -1,
          142
        ],
        "'ISEQUALTILDE": [
          -1,
          142
        ],
        "'ISSPACESHIP": [
          -1,
          142
        ],
        "'ISROUGHLY": [
          -1,
          142
        ],
        "'ISNOT": [
          -1,
          142
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          142
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          142
        ],
        "'ISNOTSPACESHIP": [
          -1,
          142
        ],
        "'RAISES": [
          -1,
          142
        ],
        "'RAISESOTHER": [
          -1,
          142
        ],
        "'SATISFIES": [
          -1,
          142
        ],
        "'SATISFIESNOT": [
          -1,
          142
        ],
        "'RAISESSATISFIES": [
          -1,
          142
        ],
        "'RAISESVIOLATES": [
          -1,
          142
        ],
        "'RAISESNOT": [
          -1,
          142
        ],
        "'DOTDOTDOT": [
          -1,
          142
        ],
        "'NUMBER": [
          -1,
          142
        ],
        "'RATIONAL": [
          -1,
          142
        ],
        "'ROUGHRATIONAL": [
          -1,
          142
        ],
        "'TRUE": [
          -1,
          142
        ],
        "'FALSE": [
          -1,
          142
        ],
        "'LAM": [
          -1,
          142
        ],
        "'METHOD": [
          -1,
          142
        ],
        "'LBRACK": [
          -1,
          142
        ],
        "'RBRACK": [
          -1,
          142
        ],
        "'TABLE": [
          -1,
          142
        ],
        "'ROW": [
          -1,
          142
        ],
        "'REACTOR": [
          -1,
          142
        ],
        "'BANG": [
          -1,
          142
        ],
        "'IF": [
          -1,
          142
        ],
        "'ELSECOLON": [
          -1,
          142
        ],
        "'ELSEIF": [
          -1,
          142
        ],
        "'ASK": [
          -1,
          142
        ],
        "'THENCOLON": [
          -1,
          142
        ],
        "'CASES": [
          -1,
          142
        ],
        "'FOR": [
          -1,
          142
        ],
        "'TABLE-SELECT": [
          -1,
          142
        ],
        "'TABLE-FILTER": [
          -1,
          142
        ],
        "'USING": [
          -1,
          142
        ],
        "'TABLE-ORDER": [
          -1,
          142
        ],
        "'TABLE-EXTRACT": [
          -1,
          142
        ],
        "'TABLE-UPDATE": [
          -1,
          142
        ],
        "'TABLE-EXTEND": [
          -1,
          142
        ],
        "'OF": [
          -1,
          142
        ],
        "'LOAD-TABLE": [
          -1,
          142
        ],
        "'SOURCECOLON": [
          -1,
          142
        ],
        "'SANITIZE": [
          -1,
          142
        ]
      },
      {
        "$": [
          -1,
          144
        ],
        "'COLON": [
          -1,
          144
        ],
        "'END": [
          -1,
          144
        ],
        "'COMMA": [
          -1,
          144
        ],
        "'NAME": [
          -1,
          144
        ],
        "'PARENNOSPACE": [
          -1,
          144
        ],
        "'STRING": [
          -1,
          144
        ],
        "'RPAREN": [
          -1,
          144
        ],
        "'TYPE": [
          -1,
          144
        ],
        "'DATA": [
          -1,
          144
        ],
        "'TIMES": [
          -1,
          144
        ],
        "'PARENSPACE": [
          -1,
          144
        ],
        "'DOT": [
          -1,
          144
        ],
        "'SPY": [
          -1,
          144
        ],
        "'NEWTYPE": [
          -1,
          144
        ],
        "'LBRACE": [
          -1,
          144
        ],
        "'RBRACE": [
          -1,
          144
        ],
        "'SEMI": [
          -1,
          144
        ],
        "'SHADOW": [
          -1,
          144
        ],
        "'LET": [
          -1,
          144
        ],
        "'BLOCK": [
          -1,
          144
        ],
        "'LETREC": [
          -1,
          144
        ],
        "'TYPE-LET": [
          -1,
          144
        ],
        "'FUN": [
          -1,
          144
        ],
        "'LANGLE": [
          -1,
          144
        ],
        "'LT": [
          -1,
          144
        ],
        "'GT": [
          -1,
          144
        ],
        "'PARENAFTERBRACE": [
          -1,
          144
        ],
        "'WHERE": [
          -1,
          144
        ],
        "'CHECK": [
          -1,
          144
        ],
        "'EXAMPLES": [
          -1,
          144
        ],
        "'CHECKCOLON": [
          -1,
          144
        ],
        "'EXAMPLESCOLON": [
          -1,
          144
        ],
        "'BECAUSE": [
          -1,
          144
        ],
        "'BAR": [
          -1,
          144
        ],
        "'SHARING": [
          -1,
          144
        ],
        "'VAR": [
          -1,
          144
        ],
        "'REC": [
          -1,
          144
        ],
        "'WHEN": [
          -1,
          144
        ],
        "'PLUS": [
          -1,
          144
        ],
        "'DASH": [
          -1,
          144
        ],
        "'SLASH": [
          -1,
          144
        ],
        "'LEQ": [
          -1,
          144
        ],
        "'GEQ": [
          -1,
          144
        ],
        "'EQUALEQUAL": [
          -1,
          144
        ],
        "'SPACESHIP": [
          -1,
          144
        ],
        "'EQUALTILDE": [
          -1,
          144
        ],
        "'NEQ": [
          -1,
          144
        ],
        "'AND": [
          -1,
          144
        ],
        "'OR": [
          -1,
          144
        ],
        "'CARET": [
          -1,
          144
        ],
        "'IS": [
          -1,
          144
        ],
        "'ISEQUALEQUAL": [
          -1,
          144
        ],
        "'ISEQUALTILDE": [
          -1,
          144
        ],
        "'ISSPACESHIP": [
          -1,
          144
        ],
        "'ISROUGHLY": [
          -1,
          144
        ],
        "'ISNOT": [
          -1,
          144
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          144
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          144
        ],
        "'ISNOTSPACESHIP": [
          -1,
          144
        ],
        "'RAISES": [
          -1,
          144
        ],
        "'RAISESOTHER": [
          -1,
          144
        ],
        "'SATISFIES": [
          -1,
          144
        ],
        "'SATISFIESNOT": [
          -1,
          144
        ],
        "'RAISESSATISFIES": [
          -1,
          144
        ],
        "'RAISESVIOLATES": [
          -1,
          144
        ],
        "'RAISESNOT": [
          -1,
          144
        ],
        "'DOTDOTDOT": [
          -1,
          144
        ],
        "'NUMBER": [
          -1,
          144
        ],
        "'RATIONAL": [
          -1,
          144
        ],
        "'ROUGHRATIONAL": [
          -1,
          144
        ],
        "'TRUE": [
          -1,
          144
        ],
        "'FALSE": [
          -1,
          144
        ],
        "'LAM": [
          -1,
          144
        ],
        "'METHOD": [
          -1,
          144
        ],
        "'LBRACK": [
          -1,
          144
        ],
        "'RBRACK": [
          -1,
          144
        ],
        "'TABLE": [
          -1,
          144
        ],
        "'ROW": [
          -1,
          144
        ],
        "'REACTOR": [
          -1,
          144
        ],
        "'BANG": [
          -1,
          144
        ],
        "'IF": [
          -1,
          144
        ],
        "'ELSECOLON": [
          -1,
          144
        ],
        "'ELSEIF": [
          -1,
          144
        ],
        "'ASK": [
          -1,
          144
        ],
        "'THENCOLON": [
          -1,
          144
        ],
        "'CASES": [
          -1,
          144
        ],
        "'FOR": [
          -1,
          144
        ],
        "'TABLE-SELECT": [
          -1,
          144
        ],
        "'TABLE-FILTER": [
          -1,
          144
        ],
        "'USING": [
          -1,
          144
        ],
        "'TABLE-ORDER": [
          -1,
          144
        ],
        "'TABLE-EXTRACT": [
          -1,
          144
        ],
        "'TABLE-UPDATE": [
          -1,
          144
        ],
        "'TABLE-EXTEND": [
          -1,
          144
        ],
        "'OF": [
          -1,
          144
        ],
        "'LOAD-TABLE": [
          -1,
          144
        ],
        "'SOURCECOLON": [
          -1,
          144
        ],
        "'SANITIZE": [
          -1,
          144
        ]
      },
      {
        "$": [
          -1,
          146
        ],
        "'COLON": [
          -1,
          146
        ],
        "'END": [
          -1,
          146
        ],
        "'COMMA": [
          -1,
          146
        ],
        "'NAME": [
          -1,
          146
        ],
        "'PARENNOSPACE": [
          -1,
          146
        ],
        "'STRING": [
          -1,
          146
        ],
        "'RPAREN": [
          -1,
          146
        ],
        "'TYPE": [
          -1,
          146
        ],
        "'DATA": [
          -1,
          146
        ],
        "'TIMES": [
          -1,
          146
        ],
        "'PARENSPACE": [
          -1,
          146
        ],
        "'DOT": [
          -1,
          146
        ],
        "'SPY": [
          -1,
          146
        ],
        "'NEWTYPE": [
          -1,
          146
        ],
        "'LBRACE": [
          -1,
          146
        ],
        "'RBRACE": [
          -1,
          146
        ],
        "'SEMI": [
          -1,
          146
        ],
        "'SHADOW": [
          -1,
          146
        ],
        "'LET": [
          -1,
          146
        ],
        "'BLOCK": [
          -1,
          146
        ],
        "'LETREC": [
          -1,
          146
        ],
        "'TYPE-LET": [
          -1,
          146
        ],
        "'FUN": [
          -1,
          146
        ],
        "'LANGLE": [
          -1,
          146
        ],
        "'LT": [
          -1,
          146
        ],
        "'GT": [
          -1,
          146
        ],
        "'PARENAFTERBRACE": [
          -1,
          146
        ],
        "'WHERE": [
          -1,
          146
        ],
        "'CHECK": [
          -1,
          146
        ],
        "'EXAMPLES": [
          -1,
          146
        ],
        "'CHECKCOLON": [
          -1,
          146
        ],
        "'EXAMPLESCOLON": [
          -1,
          146
        ],
        "'BECAUSE": [
          -1,
          146
        ],
        "'BAR": [
          -1,
          146
        ],
        "'SHARING": [
          -1,
          146
        ],
        "'VAR": [
          -1,
          146
        ],
        "'REC": [
          -1,
          146
        ],
        "'WHEN": [
          -1,
          146
        ],
        "'PLUS": [
          -1,
          146
        ],
        "'DASH": [
          -1,
          146
        ],
        "'SLASH": [
          -1,
          146
        ],
        "'LEQ": [
          -1,
          146
        ],
        "'GEQ": [
          -1,
          146
        ],
        "'EQUALEQUAL": [
          -1,
          146
        ],
        "'SPACESHIP": [
          -1,
          146
        ],
        "'EQUALTILDE": [
          -1,
          146
        ],
        "'NEQ": [
          -1,
          146
        ],
        "'AND": [
          -1,
          146
        ],
        "'OR": [
          -1,
          146
        ],
        "'CARET": [
          -1,
          146
        ],
        "'IS": [
          -1,
          146
        ],
        "'ISEQUALEQUAL": [
          -1,
          146
        ],
        "'ISEQUALTILDE": [
          -1,
          146
        ],
        "'ISSPACESHIP": [
          -1,
          146
        ],
        "'ISROUGHLY": [
          -1,
          146
        ],
        "'ISNOT": [
          -1,
          146
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          146
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          146
        ],
        "'ISNOTSPACESHIP": [
          -1,
          146
        ],
        "'RAISES": [
          -1,
          146
        ],
        "'RAISESOTHER": [
          -1,
          146
        ],
        "'SATISFIES": [
          -1,
          146
        ],
        "'SATISFIESNOT": [
          -1,
          146
        ],
        "'RAISESSATISFIES": [
          -1,
          146
        ],
        "'RAISESVIOLATES": [
          -1,
          146
        ],
        "'RAISESNOT": [
          -1,
          146
        ],
        "'DOTDOTDOT": [
          -1,
          146
        ],
        "'NUMBER": [
          -1,
          146
        ],
        "'RATIONAL": [
          -1,
          146
        ],
        "'ROUGHRATIONAL": [
          -1,
          146
        ],
        "'TRUE": [
          -1,
          146
        ],
        "'FALSE": [
          -1,
          146
        ],
        "'LAM": [
          -1,
          146
        ],
        "'METHOD": [
          -1,
          146
        ],
        "'LBRACK": [
          -1,
          146
        ],
        "'RBRACK": [
          -1,
          146
        ],
        "'TABLE": [
          -1,
          146
        ],
        "'ROW": [
          -1,
          146
        ],
        "'REACTOR": [
          -1,
          146
        ],
        "'BANG": [
          -1,
          146
        ],
        "'IF": [
          -1,
          146
        ],
        "'ELSECOLON": [
          -1,
          146
        ],
        "'ELSEIF": [
          -1,
          146
        ],
        "'ASK": [
          -1,
          146
        ],
        "'THENCOLON": [
          -1,
          146
        ],
        "'CASES": [
          -1,
          146
        ],
        "'FOR": [
          -1,
          146
        ],
        "'TABLE-SELECT": [
          -1,
          146
        ],
        "'TABLE-FILTER": [
          -1,
          146
        ],
        "'USING": [
          -1,
          146
        ],
        "'TABLE-ORDER": [
          -1,
          146
        ],
        "'TABLE-EXTRACT": [
          -1,
          146
        ],
        "'TABLE-UPDATE": [
          -1,
          146
        ],
        "'TABLE-EXTEND": [
          -1,
          146
        ],
        "'OF": [
          -1,
          146
        ],
        "'LOAD-TABLE": [
          -1,
          146
        ],
        "'SOURCECOLON": [
          -1,
          146
        ],
        "'SANITIZE": [
          -1,
          146
        ]
      },
      {
        "$": [
          -1,
          148
        ],
        "'COLON": [
          -1,
          148
        ],
        "'END": [
          -1,
          148
        ],
        "'COMMA": [
          -1,
          148
        ],
        "'NAME": [
          -1,
          148
        ],
        "'PARENNOSPACE": [
          -1,
          148
        ],
        "'STRING": [
          -1,
          148
        ],
        "'RPAREN": [
          -1,
          148
        ],
        "'TYPE": [
          -1,
          148
        ],
        "'DATA": [
          -1,
          148
        ],
        "'TIMES": [
          -1,
          148
        ],
        "'PARENSPACE": [
          -1,
          148
        ],
        "'DOT": [
          -1,
          148
        ],
        "'SPY": [
          -1,
          148
        ],
        "'NEWTYPE": [
          -1,
          148
        ],
        "'LBRACE": [
          -1,
          148
        ],
        "'RBRACE": [
          -1,
          148
        ],
        "'SEMI": [
          -1,
          148
        ],
        "'SHADOW": [
          -1,
          148
        ],
        "'LET": [
          -1,
          148
        ],
        "'BLOCK": [
          -1,
          148
        ],
        "'LETREC": [
          -1,
          148
        ],
        "'TYPE-LET": [
          -1,
          148
        ],
        "'FUN": [
          -1,
          148
        ],
        "'LANGLE": [
          -1,
          148
        ],
        "'LT": [
          -1,
          148
        ],
        "'GT": [
          -1,
          148
        ],
        "'PARENAFTERBRACE": [
          -1,
          148
        ],
        "'WHERE": [
          -1,
          148
        ],
        "'CHECK": [
          -1,
          148
        ],
        "'EXAMPLES": [
          -1,
          148
        ],
        "'CHECKCOLON": [
          -1,
          148
        ],
        "'EXAMPLESCOLON": [
          -1,
          148
        ],
        "'BECAUSE": [
          -1,
          148
        ],
        "'BAR": [
          -1,
          148
        ],
        "'SHARING": [
          -1,
          148
        ],
        "'VAR": [
          -1,
          148
        ],
        "'REC": [
          -1,
          148
        ],
        "'WHEN": [
          -1,
          148
        ],
        "'PLUS": [
          -1,
          148
        ],
        "'DASH": [
          -1,
          148
        ],
        "'SLASH": [
          -1,
          148
        ],
        "'LEQ": [
          -1,
          148
        ],
        "'GEQ": [
          -1,
          148
        ],
        "'EQUALEQUAL": [
          -1,
          148
        ],
        "'SPACESHIP": [
          -1,
          148
        ],
        "'EQUALTILDE": [
          -1,
          148
        ],
        "'NEQ": [
          -1,
          148
        ],
        "'AND": [
          -1,
          148
        ],
        "'OR": [
          -1,
          148
        ],
        "'CARET": [
          -1,
          148
        ],
        "'IS": [
          -1,
          148
        ],
        "'ISEQUALEQUAL": [
          -1,
          148
        ],
        "'ISEQUALTILDE": [
          -1,
          148
        ],
        "'ISSPACESHIP": [
          -1,
          148
        ],
        "'ISROUGHLY": [
          -1,
          148
        ],
        "'ISNOT": [
          -1,
          148
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          148
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          148
        ],
        "'ISNOTSPACESHIP": [
          -1,
          148
        ],
        "'RAISES": [
          -1,
          148
        ],
        "'RAISESOTHER": [
          -1,
          148
        ],
        "'SATISFIES": [
          -1,
          148
        ],
        "'SATISFIESNOT": [
          -1,
          148
        ],
        "'RAISESSATISFIES": [
          -1,
          148
        ],
        "'RAISESVIOLATES": [
          -1,
          148
        ],
        "'RAISESNOT": [
          -1,
          148
        ],
        "'DOTDOTDOT": [
          -1,
          148
        ],
        "'NUMBER": [
          -1,
          148
        ],
        "'RATIONAL": [
          -1,
          148
        ],
        "'ROUGHRATIONAL": [
          -1,
          148
        ],
        "'TRUE": [
          -1,
          148
        ],
        "'FALSE": [
          -1,
          148
        ],
        "'LAM": [
          -1,
          148
        ],
        "'METHOD": [
          -1,
          148
        ],
        "'LBRACK": [
          -1,
          148
        ],
        "'RBRACK": [
          -1,
          148
        ],
        "'TABLE": [
          -1,
          148
        ],
        "'ROW": [
          -1,
          148
        ],
        "'REACTOR": [
          -1,
          148
        ],
        "'BANG": [
          -1,
          148
        ],
        "'IF": [
          -1,
          148
        ],
        "'ELSECOLON": [
          -1,
          148
        ],
        "'ELSEIF": [
          -1,
          148
        ],
        "'ASK": [
          -1,
          148
        ],
        "'THENCOLON": [
          -1,
          148
        ],
        "'CASES": [
          -1,
          148
        ],
        "'FOR": [
          -1,
          148
        ],
        "'TABLE-SELECT": [
          -1,
          148
        ],
        "'TABLE-FILTER": [
          -1,
          148
        ],
        "'USING": [
          -1,
          148
        ],
        "'TABLE-ORDER": [
          -1,
          148
        ],
        "'TABLE-EXTRACT": [
          -1,
          148
        ],
        "'TABLE-UPDATE": [
          -1,
          148
        ],
        "'TABLE-EXTEND": [
          -1,
          148
        ],
        "'OF": [
          -1,
          148
        ],
        "'LOAD-TABLE": [
          -1,
          148
        ],
        "'SOURCECOLON": [
          -1,
          148
        ],
        "'SANITIZE": [
          -1,
          148
        ]
      },
      {
        "$": [
          -1,
          150
        ],
        "'COLON": [
          -1,
          150
        ],
        "'END": [
          -1,
          150
        ],
        "'COMMA": [
          -1,
          150
        ],
        "'NAME": [
          -1,
          150
        ],
        "'PARENNOSPACE": [
          -1,
          150
        ],
        "'STRING": [
          -1,
          150
        ],
        "'RPAREN": [
          -1,
          150
        ],
        "'TYPE": [
          -1,
          150
        ],
        "'DATA": [
          -1,
          150
        ],
        "'TIMES": [
          -1,
          150
        ],
        "'PARENSPACE": [
          -1,
          150
        ],
        "'DOT": [
          -1,
          150
        ],
        "'SPY": [
          -1,
          150
        ],
        "'NEWTYPE": [
          -1,
          150
        ],
        "'LBRACE": [
          -1,
          150
        ],
        "'RBRACE": [
          -1,
          150
        ],
        "'SEMI": [
          -1,
          150
        ],
        "'SHADOW": [
          -1,
          150
        ],
        "'LET": [
          -1,
          150
        ],
        "'BLOCK": [
          -1,
          150
        ],
        "'LETREC": [
          -1,
          150
        ],
        "'TYPE-LET": [
          -1,
          150
        ],
        "'FUN": [
          -1,
          150
        ],
        "'LANGLE": [
          -1,
          150
        ],
        "'LT": [
          -1,
          150
        ],
        "'GT": [
          -1,
          150
        ],
        "'PARENAFTERBRACE": [
          -1,
          150
        ],
        "'WHERE": [
          -1,
          150
        ],
        "'CHECK": [
          -1,
          150
        ],
        "'EXAMPLES": [
          -1,
          150
        ],
        "'CHECKCOLON": [
          -1,
          150
        ],
        "'EXAMPLESCOLON": [
          -1,
          150
        ],
        "'BECAUSE": [
          -1,
          150
        ],
        "'BAR": [
          -1,
          150
        ],
        "'SHARING": [
          -1,
          150
        ],
        "'VAR": [
          -1,
          150
        ],
        "'REC": [
          -1,
          150
        ],
        "'WHEN": [
          -1,
          150
        ],
        "'PLUS": [
          -1,
          150
        ],
        "'DASH": [
          -1,
          150
        ],
        "'SLASH": [
          -1,
          150
        ],
        "'LEQ": [
          -1,
          150
        ],
        "'GEQ": [
          -1,
          150
        ],
        "'EQUALEQUAL": [
          -1,
          150
        ],
        "'SPACESHIP": [
          -1,
          150
        ],
        "'EQUALTILDE": [
          -1,
          150
        ],
        "'NEQ": [
          -1,
          150
        ],
        "'AND": [
          -1,
          150
        ],
        "'OR": [
          -1,
          150
        ],
        "'CARET": [
          -1,
          150
        ],
        "'IS": [
          -1,
          150
        ],
        "'ISEQUALEQUAL": [
          -1,
          150
        ],
        "'ISEQUALTILDE": [
          -1,
          150
        ],
        "'ISSPACESHIP": [
          -1,
          150
        ],
        "'ISROUGHLY": [
          -1,
          150
        ],
        "'ISNOT": [
          -1,
          150
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          150
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          150
        ],
        "'ISNOTSPACESHIP": [
          -1,
          150
        ],
        "'RAISES": [
          -1,
          150
        ],
        "'RAISESOTHER": [
          -1,
          150
        ],
        "'SATISFIES": [
          -1,
          150
        ],
        "'SATISFIESNOT": [
          -1,
          150
        ],
        "'RAISESSATISFIES": [
          -1,
          150
        ],
        "'RAISESVIOLATES": [
          -1,
          150
        ],
        "'RAISESNOT": [
          -1,
          150
        ],
        "'DOTDOTDOT": [
          -1,
          150
        ],
        "'NUMBER": [
          -1,
          150
        ],
        "'RATIONAL": [
          -1,
          150
        ],
        "'ROUGHRATIONAL": [
          -1,
          150
        ],
        "'TRUE": [
          -1,
          150
        ],
        "'FALSE": [
          -1,
          150
        ],
        "'LAM": [
          -1,
          150
        ],
        "'METHOD": [
          -1,
          150
        ],
        "'LBRACK": [
          -1,
          150
        ],
        "'RBRACK": [
          -1,
          150
        ],
        "'TABLE": [
          -1,
          150
        ],
        "'ROW": [
          -1,
          150
        ],
        "'REACTOR": [
          -1,
          150
        ],
        "'BANG": [
          -1,
          150
        ],
        "'IF": [
          -1,
          150
        ],
        "'ELSECOLON": [
          -1,
          150
        ],
        "'ELSEIF": [
          -1,
          150
        ],
        "'ASK": [
          -1,
          150
        ],
        "'THENCOLON": [
          -1,
          150
        ],
        "'CASES": [
          -1,
          150
        ],
        "'FOR": [
          -1,
          150
        ],
        "'TABLE-SELECT": [
          -1,
          150
        ],
        "'TABLE-FILTER": [
          -1,
          150
        ],
        "'USING": [
          -1,
          150
        ],
        "'TABLE-ORDER": [
          -1,
          150
        ],
        "'TABLE-EXTRACT": [
          -1,
          150
        ],
        "'TABLE-UPDATE": [
          -1,
          150
        ],
        "'TABLE-EXTEND": [
          -1,
          150
        ],
        "'OF": [
          -1,
          150
        ],
        "'LOAD-TABLE": [
          -1,
          150
        ],
        "'SOURCECOLON": [
          -1,
          150
        ],
        "'SANITIZE": [
          -1,
          150
        ]
      },
      {
        "$": [
          -1,
          152
        ],
        "'COLON": [
          -1,
          152
        ],
        "'END": [
          -1,
          152
        ],
        "'COMMA": [
          -1,
          152
        ],
        "'NAME": [
          -1,
          152
        ],
        "'PARENNOSPACE": [
          -1,
          152
        ],
        "'STRING": [
          -1,
          152
        ],
        "'RPAREN": [
          -1,
          152
        ],
        "'TYPE": [
          -1,
          152
        ],
        "'DATA": [
          -1,
          152
        ],
        "'TIMES": [
          -1,
          152
        ],
        "'PARENSPACE": [
          -1,
          152
        ],
        "'DOT": [
          -1,
          152
        ],
        "'SPY": [
          -1,
          152
        ],
        "'NEWTYPE": [
          -1,
          152
        ],
        "'LBRACE": [
          -1,
          152
        ],
        "'RBRACE": [
          -1,
          152
        ],
        "'SEMI": [
          -1,
          152
        ],
        "'SHADOW": [
          -1,
          152
        ],
        "'LET": [
          -1,
          152
        ],
        "'BLOCK": [
          -1,
          152
        ],
        "'LETREC": [
          -1,
          152
        ],
        "'TYPE-LET": [
          -1,
          152
        ],
        "'FUN": [
          -1,
          152
        ],
        "'LANGLE": [
          -1,
          152
        ],
        "'LT": [
          -1,
          152
        ],
        "'GT": [
          -1,
          152
        ],
        "'PARENAFTERBRACE": [
          -1,
          152
        ],
        "'WHERE": [
          -1,
          152
        ],
        "'CHECK": [
          -1,
          152
        ],
        "'EXAMPLES": [
          -1,
          152
        ],
        "'CHECKCOLON": [
          -1,
          152
        ],
        "'EXAMPLESCOLON": [
          -1,
          152
        ],
        "'BECAUSE": [
          -1,
          152
        ],
        "'BAR": [
          -1,
          152
        ],
        "'SHARING": [
          -1,
          152
        ],
        "'VAR": [
          -1,
          152
        ],
        "'REC": [
          -1,
          152
        ],
        "'WHEN": [
          -1,
          152
        ],
        "'PLUS": [
          -1,
          152
        ],
        "'DASH": [
          -1,
          152
        ],
        "'SLASH": [
          -1,
          152
        ],
        "'LEQ": [
          -1,
          152
        ],
        "'GEQ": [
          -1,
          152
        ],
        "'EQUALEQUAL": [
          -1,
          152
        ],
        "'SPACESHIP": [
          -1,
          152
        ],
        "'EQUALTILDE": [
          -1,
          152
        ],
        "'NEQ": [
          -1,
          152
        ],
        "'AND": [
          -1,
          152
        ],
        "'OR": [
          -1,
          152
        ],
        "'CARET": [
          -1,
          152
        ],
        "'IS": [
          -1,
          152
        ],
        "'ISEQUALEQUAL": [
          -1,
          152
        ],
        "'ISEQUALTILDE": [
          -1,
          152
        ],
        "'ISSPACESHIP": [
          -1,
          152
        ],
        "'ISROUGHLY": [
          -1,
          152
        ],
        "'ISNOT": [
          -1,
          152
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          152
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          152
        ],
        "'ISNOTSPACESHIP": [
          -1,
          152
        ],
        "'RAISES": [
          -1,
          152
        ],
        "'RAISESOTHER": [
          -1,
          152
        ],
        "'SATISFIES": [
          -1,
          152
        ],
        "'SATISFIESNOT": [
          -1,
          152
        ],
        "'RAISESSATISFIES": [
          -1,
          152
        ],
        "'RAISESVIOLATES": [
          -1,
          152
        ],
        "'RAISESNOT": [
          -1,
          152
        ],
        "'DOTDOTDOT": [
          -1,
          152
        ],
        "'NUMBER": [
          -1,
          152
        ],
        "'RATIONAL": [
          -1,
          152
        ],
        "'ROUGHRATIONAL": [
          -1,
          152
        ],
        "'TRUE": [
          -1,
          152
        ],
        "'FALSE": [
          -1,
          152
        ],
        "'LAM": [
          -1,
          152
        ],
        "'METHOD": [
          -1,
          152
        ],
        "'LBRACK": [
          -1,
          152
        ],
        "'RBRACK": [
          -1,
          152
        ],
        "'TABLE": [
          -1,
          152
        ],
        "'ROW": [
          -1,
          152
        ],
        "'REACTOR": [
          -1,
          152
        ],
        "'BANG": [
          -1,
          152
        ],
        "'IF": [
          -1,
          152
        ],
        "'ELSECOLON": [
          -1,
          152
        ],
        "'ELSEIF": [
          -1,
          152
        ],
        "'ASK": [
          -1,
          152
        ],
        "'THENCOLON": [
          -1,
          152
        ],
        "'CASES": [
          -1,
          152
        ],
        "'FOR": [
          -1,
          152
        ],
        "'TABLE-SELECT": [
          -1,
          152
        ],
        "'TABLE-FILTER": [
          -1,
          152
        ],
        "'USING": [
          -1,
          152
        ],
        "'TABLE-ORDER": [
          -1,
          152
        ],
        "'TABLE-EXTRACT": [
          -1,
          152
        ],
        "'TABLE-UPDATE": [
          -1,
          152
        ],
        "'TABLE-EXTEND": [
          -1,
          152
        ],
        "'OF": [
          -1,
          152
        ],
        "'LOAD-TABLE": [
          -1,
          152
        ],
        "'SOURCECOLON": [
          -1,
          152
        ],
        "'SANITIZE": [
          -1,
          152
        ]
      },
      {
        "$": [
          -1,
          154
        ],
        "'COLON": [
          -1,
          154
        ],
        "'END": [
          -1,
          154
        ],
        "'COMMA": [
          -1,
          154
        ],
        "'NAME": [
          -1,
          154
        ],
        "'PARENNOSPACE": [
          -1,
          154
        ],
        "'STRING": [
          -1,
          154
        ],
        "'RPAREN": [
          -1,
          154
        ],
        "'TYPE": [
          -1,
          154
        ],
        "'DATA": [
          -1,
          154
        ],
        "'TIMES": [
          -1,
          154
        ],
        "'PARENSPACE": [
          -1,
          154
        ],
        "'DOT": [
          -1,
          154
        ],
        "'SPY": [
          -1,
          154
        ],
        "'NEWTYPE": [
          -1,
          154
        ],
        "'LBRACE": [
          -1,
          154
        ],
        "'RBRACE": [
          -1,
          154
        ],
        "'SEMI": [
          -1,
          154
        ],
        "'SHADOW": [
          -1,
          154
        ],
        "'LET": [
          -1,
          154
        ],
        "'BLOCK": [
          -1,
          154
        ],
        "'LETREC": [
          -1,
          154
        ],
        "'TYPE-LET": [
          -1,
          154
        ],
        "'FUN": [
          -1,
          154
        ],
        "'LANGLE": [
          -1,
          154
        ],
        "'LT": [
          -1,
          154
        ],
        "'GT": [
          -1,
          154
        ],
        "'PARENAFTERBRACE": [
          -1,
          154
        ],
        "'WHERE": [
          -1,
          154
        ],
        "'CHECK": [
          -1,
          154
        ],
        "'EXAMPLES": [
          -1,
          154
        ],
        "'CHECKCOLON": [
          -1,
          154
        ],
        "'EXAMPLESCOLON": [
          -1,
          154
        ],
        "'BECAUSE": [
          -1,
          154
        ],
        "'BAR": [
          -1,
          154
        ],
        "'SHARING": [
          -1,
          154
        ],
        "'VAR": [
          -1,
          154
        ],
        "'REC": [
          -1,
          154
        ],
        "'WHEN": [
          -1,
          154
        ],
        "'PLUS": [
          -1,
          154
        ],
        "'DASH": [
          -1,
          154
        ],
        "'SLASH": [
          -1,
          154
        ],
        "'LEQ": [
          -1,
          154
        ],
        "'GEQ": [
          -1,
          154
        ],
        "'EQUALEQUAL": [
          -1,
          154
        ],
        "'SPACESHIP": [
          -1,
          154
        ],
        "'EQUALTILDE": [
          -1,
          154
        ],
        "'NEQ": [
          -1,
          154
        ],
        "'AND": [
          -1,
          154
        ],
        "'OR": [
          -1,
          154
        ],
        "'CARET": [
          -1,
          154
        ],
        "'IS": [
          -1,
          154
        ],
        "'ISEQUALEQUAL": [
          -1,
          154
        ],
        "'ISEQUALTILDE": [
          -1,
          154
        ],
        "'ISSPACESHIP": [
          -1,
          154
        ],
        "'ISROUGHLY": [
          -1,
          154
        ],
        "'ISNOT": [
          -1,
          154
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          154
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          154
        ],
        "'ISNOTSPACESHIP": [
          -1,
          154
        ],
        "'RAISES": [
          -1,
          154
        ],
        "'RAISESOTHER": [
          -1,
          154
        ],
        "'SATISFIES": [
          -1,
          154
        ],
        "'SATISFIESNOT": [
          -1,
          154
        ],
        "'RAISESSATISFIES": [
          -1,
          154
        ],
        "'RAISESVIOLATES": [
          -1,
          154
        ],
        "'RAISESNOT": [
          -1,
          154
        ],
        "'DOTDOTDOT": [
          -1,
          154
        ],
        "'NUMBER": [
          -1,
          154
        ],
        "'RATIONAL": [
          -1,
          154
        ],
        "'ROUGHRATIONAL": [
          -1,
          154
        ],
        "'TRUE": [
          -1,
          154
        ],
        "'FALSE": [
          -1,
          154
        ],
        "'LAM": [
          -1,
          154
        ],
        "'METHOD": [
          -1,
          154
        ],
        "'LBRACK": [
          -1,
          154
        ],
        "'RBRACK": [
          -1,
          154
        ],
        "'TABLE": [
          -1,
          154
        ],
        "'ROW": [
          -1,
          154
        ],
        "'REACTOR": [
          -1,
          154
        ],
        "'BANG": [
          -1,
          154
        ],
        "'IF": [
          -1,
          154
        ],
        "'ELSECOLON": [
          -1,
          154
        ],
        "'ELSEIF": [
          -1,
          154
        ],
        "'ASK": [
          -1,
          154
        ],
        "'THENCOLON": [
          -1,
          154
        ],
        "'CASES": [
          -1,
          154
        ],
        "'FOR": [
          -1,
          154
        ],
        "'TABLE-SELECT": [
          -1,
          154
        ],
        "'TABLE-FILTER": [
          -1,
          154
        ],
        "'USING": [
          -1,
          154
        ],
        "'TABLE-ORDER": [
          -1,
          154
        ],
        "'TABLE-EXTRACT": [
          -1,
          154
        ],
        "'TABLE-UPDATE": [
          -1,
          154
        ],
        "'TABLE-EXTEND": [
          -1,
          154
        ],
        "'OF": [
          -1,
          154
        ],
        "'LOAD-TABLE": [
          -1,
          154
        ],
        "'SOURCECOLON": [
          -1,
          154
        ],
        "'SANITIZE": [
          -1,
          154
        ]
      },
      {
        "$": [
          -1,
          156
        ],
        "'COLON": [
          -1,
          156
        ],
        "'END": [
          -1,
          156
        ],
        "'COMMA": [
          -1,
          156
        ],
        "'NAME": [
          -1,
          156
        ],
        "'PARENNOSPACE": [
          -1,
          156
        ],
        "'STRING": [
          -1,
          156
        ],
        "'RPAREN": [
          -1,
          156
        ],
        "'TYPE": [
          -1,
          156
        ],
        "'DATA": [
          -1,
          156
        ],
        "'TIMES": [
          -1,
          156
        ],
        "'PARENSPACE": [
          -1,
          156
        ],
        "'DOT": [
          -1,
          156
        ],
        "'SPY": [
          -1,
          156
        ],
        "'NEWTYPE": [
          -1,
          156
        ],
        "'LBRACE": [
          -1,
          156
        ],
        "'RBRACE": [
          -1,
          156
        ],
        "'SEMI": [
          -1,
          156
        ],
        "'SHADOW": [
          -1,
          156
        ],
        "'LET": [
          -1,
          156
        ],
        "'BLOCK": [
          -1,
          156
        ],
        "'LETREC": [
          -1,
          156
        ],
        "'TYPE-LET": [
          -1,
          156
        ],
        "'FUN": [
          -1,
          156
        ],
        "'LANGLE": [
          -1,
          156
        ],
        "'LT": [
          -1,
          156
        ],
        "'GT": [
          -1,
          156
        ],
        "'PARENAFTERBRACE": [
          -1,
          156
        ],
        "'WHERE": [
          -1,
          156
        ],
        "'CHECK": [
          -1,
          156
        ],
        "'EXAMPLES": [
          -1,
          156
        ],
        "'CHECKCOLON": [
          -1,
          156
        ],
        "'EXAMPLESCOLON": [
          -1,
          156
        ],
        "'BECAUSE": [
          -1,
          156
        ],
        "'BAR": [
          -1,
          156
        ],
        "'SHARING": [
          -1,
          156
        ],
        "'VAR": [
          -1,
          156
        ],
        "'REC": [
          -1,
          156
        ],
        "'WHEN": [
          -1,
          156
        ],
        "'PLUS": [
          -1,
          156
        ],
        "'DASH": [
          -1,
          156
        ],
        "'SLASH": [
          -1,
          156
        ],
        "'LEQ": [
          -1,
          156
        ],
        "'GEQ": [
          -1,
          156
        ],
        "'EQUALEQUAL": [
          -1,
          156
        ],
        "'SPACESHIP": [
          -1,
          156
        ],
        "'EQUALTILDE": [
          -1,
          156
        ],
        "'NEQ": [
          -1,
          156
        ],
        "'AND": [
          -1,
          156
        ],
        "'OR": [
          -1,
          156
        ],
        "'CARET": [
          -1,
          156
        ],
        "'IS": [
          -1,
          156
        ],
        "'ISEQUALEQUAL": [
          -1,
          156
        ],
        "'ISEQUALTILDE": [
          -1,
          156
        ],
        "'ISSPACESHIP": [
          -1,
          156
        ],
        "'ISROUGHLY": [
          -1,
          156
        ],
        "'ISNOT": [
          -1,
          156
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          156
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          156
        ],
        "'ISNOTSPACESHIP": [
          -1,
          156
        ],
        "'RAISES": [
          -1,
          156
        ],
        "'RAISESOTHER": [
          -1,
          156
        ],
        "'SATISFIES": [
          -1,
          156
        ],
        "'SATISFIESNOT": [
          -1,
          156
        ],
        "'RAISESSATISFIES": [
          -1,
          156
        ],
        "'RAISESVIOLATES": [
          -1,
          156
        ],
        "'RAISESNOT": [
          -1,
          156
        ],
        "'DOTDOTDOT": [
          -1,
          156
        ],
        "'NUMBER": [
          -1,
          156
        ],
        "'RATIONAL": [
          -1,
          156
        ],
        "'ROUGHRATIONAL": [
          -1,
          156
        ],
        "'TRUE": [
          -1,
          156
        ],
        "'FALSE": [
          -1,
          156
        ],
        "'LAM": [
          -1,
          156
        ],
        "'METHOD": [
          -1,
          156
        ],
        "'LBRACK": [
          -1,
          156
        ],
        "'RBRACK": [
          -1,
          156
        ],
        "'TABLE": [
          -1,
          156
        ],
        "'ROW": [
          -1,
          156
        ],
        "'REACTOR": [
          -1,
          156
        ],
        "'BANG": [
          -1,
          156
        ],
        "'IF": [
          -1,
          156
        ],
        "'ELSECOLON": [
          -1,
          156
        ],
        "'ELSEIF": [
          -1,
          156
        ],
        "'ASK": [
          -1,
          156
        ],
        "'THENCOLON": [
          -1,
          156
        ],
        "'CASES": [
          -1,
          156
        ],
        "'FOR": [
          -1,
          156
        ],
        "'TABLE-SELECT": [
          -1,
          156
        ],
        "'TABLE-FILTER": [
          -1,
          156
        ],
        "'USING": [
          -1,
          156
        ],
        "'TABLE-ORDER": [
          -1,
          156
        ],
        "'TABLE-EXTRACT": [
          -1,
          156
        ],
        "'TABLE-UPDATE": [
          -1,
          156
        ],
        "'TABLE-EXTEND": [
          -1,
          156
        ],
        "'OF": [
          -1,
          156
        ],
        "'LOAD-TABLE": [
          -1,
          156
        ],
        "'SOURCECOLON": [
          -1,
          156
        ],
        "'SANITIZE": [
          -1,
          156
        ]
      },
      {
        "$": [
          -1,
          158
        ],
        "'COLON": [
          -1,
          158
        ],
        "'END": [
          -1,
          158
        ],
        "'COMMA": [
          -1,
          158
        ],
        "'NAME": [
          -1,
          158
        ],
        "'PARENNOSPACE": [
          -1,
          158
        ],
        "'STRING": [
          -1,
          158
        ],
        "'RPAREN": [
          -1,
          158
        ],
        "'TYPE": [
          -1,
          158
        ],
        "'DATA": [
          -1,
          158
        ],
        "'TIMES": [
          -1,
          158
        ],
        "'PARENSPACE": [
          -1,
          158
        ],
        "'DOT": [
          -1,
          158
        ],
        "'SPY": [
          -1,
          158
        ],
        "'NEWTYPE": [
          -1,
          158
        ],
        "'LBRACE": [
          -1,
          158
        ],
        "'RBRACE": [
          -1,
          158
        ],
        "'SEMI": [
          -1,
          158
        ],
        "'SHADOW": [
          -1,
          158
        ],
        "'LET": [
          -1,
          158
        ],
        "'BLOCK": [
          -1,
          158
        ],
        "'LETREC": [
          -1,
          158
        ],
        "'TYPE-LET": [
          -1,
          158
        ],
        "'FUN": [
          -1,
          158
        ],
        "'LANGLE": [
          -1,
          158
        ],
        "'LT": [
          -1,
          158
        ],
        "'GT": [
          -1,
          158
        ],
        "'PARENAFTERBRACE": [
          -1,
          158
        ],
        "'WHERE": [
          -1,
          158
        ],
        "'CHECK": [
          -1,
          158
        ],
        "'EXAMPLES": [
          -1,
          158
        ],
        "'CHECKCOLON": [
          -1,
          158
        ],
        "'EXAMPLESCOLON": [
          -1,
          158
        ],
        "'BECAUSE": [
          -1,
          158
        ],
        "'BAR": [
          -1,
          158
        ],
        "'SHARING": [
          -1,
          158
        ],
        "'VAR": [
          -1,
          158
        ],
        "'REC": [
          -1,
          158
        ],
        "'WHEN": [
          -1,
          158
        ],
        "'PLUS": [
          -1,
          158
        ],
        "'DASH": [
          -1,
          158
        ],
        "'SLASH": [
          -1,
          158
        ],
        "'LEQ": [
          -1,
          158
        ],
        "'GEQ": [
          -1,
          158
        ],
        "'EQUALEQUAL": [
          -1,
          158
        ],
        "'SPACESHIP": [
          -1,
          158
        ],
        "'EQUALTILDE": [
          -1,
          158
        ],
        "'NEQ": [
          -1,
          158
        ],
        "'AND": [
          -1,
          158
        ],
        "'OR": [
          -1,
          158
        ],
        "'CARET": [
          -1,
          158
        ],
        "'IS": [
          -1,
          158
        ],
        "'ISEQUALEQUAL": [
          -1,
          158
        ],
        "'ISEQUALTILDE": [
          -1,
          158
        ],
        "'ISSPACESHIP": [
          -1,
          158
        ],
        "'ISROUGHLY": [
          -1,
          158
        ],
        "'ISNOT": [
          -1,
          158
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          158
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          158
        ],
        "'ISNOTSPACESHIP": [
          -1,
          158
        ],
        "'RAISES": [
          -1,
          158
        ],
        "'RAISESOTHER": [
          -1,
          158
        ],
        "'SATISFIES": [
          -1,
          158
        ],
        "'SATISFIESNOT": [
          -1,
          158
        ],
        "'RAISESSATISFIES": [
          -1,
          158
        ],
        "'RAISESVIOLATES": [
          -1,
          158
        ],
        "'RAISESNOT": [
          -1,
          158
        ],
        "'DOTDOTDOT": [
          -1,
          158
        ],
        "'NUMBER": [
          -1,
          158
        ],
        "'RATIONAL": [
          -1,
          158
        ],
        "'ROUGHRATIONAL": [
          -1,
          158
        ],
        "'TRUE": [
          -1,
          158
        ],
        "'FALSE": [
          -1,
          158
        ],
        "'LAM": [
          -1,
          158
        ],
        "'METHOD": [
          -1,
          158
        ],
        "'LBRACK": [
          -1,
          158
        ],
        "'RBRACK": [
          -1,
          158
        ],
        "'TABLE": [
          -1,
          158
        ],
        "'ROW": [
          -1,
          158
        ],
        "'REACTOR": [
          -1,
          158
        ],
        "'BANG": [
          -1,
          158
        ],
        "'IF": [
          -1,
          158
        ],
        "'ELSECOLON": [
          -1,
          158
        ],
        "'ELSEIF": [
          -1,
          158
        ],
        "'ASK": [
          -1,
          158
        ],
        "'THENCOLON": [
          -1,
          158
        ],
        "'CASES": [
          -1,
          158
        ],
        "'FOR": [
          -1,
          158
        ],
        "'TABLE-SELECT": [
          -1,
          158
        ],
        "'TABLE-FILTER": [
          -1,
          158
        ],
        "'USING": [
          -1,
          158
        ],
        "'TABLE-ORDER": [
          -1,
          158
        ],
        "'TABLE-EXTRACT": [
          -1,
          158
        ],
        "'TABLE-UPDATE": [
          -1,
          158
        ],
        "'TABLE-EXTEND": [
          -1,
          158
        ],
        "'OF": [
          -1,
          158
        ],
        "'LOAD-TABLE": [
          -1,
          158
        ],
        "'SOURCECOLON": [
          -1,
          158
        ],
        "'SANITIZE": [
          -1,
          158
        ]
      },
      {
        "$": [
          -1,
          160
        ],
        "'COLON": [
          -1,
          160
        ],
        "'END": [
          -1,
          160
        ],
        "'COMMA": [
          -1,
          160
        ],
        "'NAME": [
          -1,
          160
        ],
        "'PARENNOSPACE": [
          -1,
          160
        ],
        "'STRING": [
          -1,
          160
        ],
        "'RPAREN": [
          -1,
          160
        ],
        "'TYPE": [
          -1,
          160
        ],
        "'DATA": [
          -1,
          160
        ],
        "'TIMES": [
          -1,
          160
        ],
        "'PARENSPACE": [
          -1,
          160
        ],
        "'DOT": [
          -1,
          160
        ],
        "'SPY": [
          -1,
          160
        ],
        "'NEWTYPE": [
          -1,
          160
        ],
        "'LBRACE": [
          -1,
          160
        ],
        "'RBRACE": [
          -1,
          160
        ],
        "'SEMI": [
          -1,
          160
        ],
        "'SHADOW": [
          -1,
          160
        ],
        "'LET": [
          -1,
          160
        ],
        "'BLOCK": [
          -1,
          160
        ],
        "'LETREC": [
          -1,
          160
        ],
        "'TYPE-LET": [
          -1,
          160
        ],
        "'FUN": [
          -1,
          160
        ],
        "'LANGLE": [
          -1,
          160
        ],
        "'LT": [
          -1,
          160
        ],
        "'GT": [
          -1,
          160
        ],
        "'PARENAFTERBRACE": [
          -1,
          160
        ],
        "'WHERE": [
          -1,
          160
        ],
        "'CHECK": [
          -1,
          160
        ],
        "'EXAMPLES": [
          -1,
          160
        ],
        "'CHECKCOLON": [
          -1,
          160
        ],
        "'EXAMPLESCOLON": [
          -1,
          160
        ],
        "'BECAUSE": [
          -1,
          160
        ],
        "'BAR": [
          -1,
          160
        ],
        "'SHARING": [
          -1,
          160
        ],
        "'VAR": [
          -1,
          160
        ],
        "'REC": [
          -1,
          160
        ],
        "'WHEN": [
          -1,
          160
        ],
        "'PLUS": [
          -1,
          160
        ],
        "'DASH": [
          -1,
          160
        ],
        "'SLASH": [
          -1,
          160
        ],
        "'LEQ": [
          -1,
          160
        ],
        "'GEQ": [
          -1,
          160
        ],
        "'EQUALEQUAL": [
          -1,
          160
        ],
        "'SPACESHIP": [
          -1,
          160
        ],
        "'EQUALTILDE": [
          -1,
          160
        ],
        "'NEQ": [
          -1,
          160
        ],
        "'AND": [
          -1,
          160
        ],
        "'OR": [
          -1,
          160
        ],
        "'CARET": [
          -1,
          160
        ],
        "'IS": [
          -1,
          160
        ],
        "'ISEQUALEQUAL": [
          -1,
          160
        ],
        "'ISEQUALTILDE": [
          -1,
          160
        ],
        "'ISSPACESHIP": [
          -1,
          160
        ],
        "'ISROUGHLY": [
          -1,
          160
        ],
        "'ISNOT": [
          -1,
          160
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          160
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          160
        ],
        "'ISNOTSPACESHIP": [
          -1,
          160
        ],
        "'RAISES": [
          -1,
          160
        ],
        "'RAISESOTHER": [
          -1,
          160
        ],
        "'SATISFIES": [
          -1,
          160
        ],
        "'SATISFIESNOT": [
          -1,
          160
        ],
        "'RAISESSATISFIES": [
          -1,
          160
        ],
        "'RAISESVIOLATES": [
          -1,
          160
        ],
        "'RAISESNOT": [
          -1,
          160
        ],
        "'DOTDOTDOT": [
          -1,
          160
        ],
        "'NUMBER": [
          -1,
          160
        ],
        "'RATIONAL": [
          -1,
          160
        ],
        "'ROUGHRATIONAL": [
          -1,
          160
        ],
        "'TRUE": [
          -1,
          160
        ],
        "'FALSE": [
          -1,
          160
        ],
        "'LAM": [
          -1,
          160
        ],
        "'METHOD": [
          -1,
          160
        ],
        "'LBRACK": [
          -1,
          160
        ],
        "'RBRACK": [
          -1,
          160
        ],
        "'TABLE": [
          -1,
          160
        ],
        "'ROW": [
          -1,
          160
        ],
        "'REACTOR": [
          -1,
          160
        ],
        "'BANG": [
          -1,
          160
        ],
        "'IF": [
          -1,
          160
        ],
        "'ELSECOLON": [
          -1,
          160
        ],
        "'ELSEIF": [
          -1,
          160
        ],
        "'ASK": [
          -1,
          160
        ],
        "'THENCOLON": [
          -1,
          160
        ],
        "'CASES": [
          -1,
          160
        ],
        "'FOR": [
          -1,
          160
        ],
        "'TABLE-SELECT": [
          -1,
          160
        ],
        "'TABLE-FILTER": [
          -1,
          160
        ],
        "'USING": [
          -1,
          160
        ],
        "'TABLE-ORDER": [
          -1,
          160
        ],
        "'TABLE-EXTRACT": [
          -1,
          160
        ],
        "'TABLE-UPDATE": [
          -1,
          160
        ],
        "'TABLE-EXTEND": [
          -1,
          160
        ],
        "'OF": [
          -1,
          160
        ],
        "'LOAD-TABLE": [
          -1,
          160
        ],
        "'SOURCECOLON": [
          -1,
          160
        ],
        "'SANITIZE": [
          -1,
          160
        ]
      },
      {
        "$": [
          -1,
          162
        ],
        "'COLON": [
          -1,
          162
        ],
        "'END": [
          -1,
          162
        ],
        "'COMMA": [
          -1,
          162
        ],
        "'NAME": [
          -1,
          162
        ],
        "'PARENNOSPACE": [
          -1,
          162
        ],
        "'STRING": [
          -1,
          162
        ],
        "'RPAREN": [
          -1,
          162
        ],
        "'TYPE": [
          -1,
          162
        ],
        "'DATA": [
          -1,
          162
        ],
        "'TIMES": [
          -1,
          162
        ],
        "'PARENSPACE": [
          -1,
          162
        ],
        "'DOT": [
          -1,
          162
        ],
        "'SPY": [
          -1,
          162
        ],
        "'NEWTYPE": [
          -1,
          162
        ],
        "'LBRACE": [
          -1,
          162
        ],
        "'RBRACE": [
          -1,
          162
        ],
        "'SEMI": [
          -1,
          162
        ],
        "'SHADOW": [
          -1,
          162
        ],
        "'LET": [
          -1,
          162
        ],
        "'BLOCK": [
          -1,
          162
        ],
        "'LETREC": [
          -1,
          162
        ],
        "'TYPE-LET": [
          -1,
          162
        ],
        "'FUN": [
          -1,
          162
        ],
        "'LANGLE": [
          -1,
          162
        ],
        "'LT": [
          -1,
          162
        ],
        "'GT": [
          -1,
          162
        ],
        "'PARENAFTERBRACE": [
          -1,
          162
        ],
        "'WHERE": [
          -1,
          162
        ],
        "'CHECK": [
          -1,
          162
        ],
        "'EXAMPLES": [
          -1,
          162
        ],
        "'CHECKCOLON": [
          -1,
          162
        ],
        "'EXAMPLESCOLON": [
          -1,
          162
        ],
        "'BECAUSE": [
          -1,
          162
        ],
        "'BAR": [
          -1,
          162
        ],
        "'SHARING": [
          -1,
          162
        ],
        "'VAR": [
          -1,
          162
        ],
        "'REC": [
          -1,
          162
        ],
        "'WHEN": [
          -1,
          162
        ],
        "'PLUS": [
          -1,
          162
        ],
        "'DASH": [
          -1,
          162
        ],
        "'SLASH": [
          -1,
          162
        ],
        "'LEQ": [
          -1,
          162
        ],
        "'GEQ": [
          -1,
          162
        ],
        "'EQUALEQUAL": [
          -1,
          162
        ],
        "'SPACESHIP": [
          -1,
          162
        ],
        "'EQUALTILDE": [
          -1,
          162
        ],
        "'NEQ": [
          -1,
          162
        ],
        "'AND": [
          -1,
          162
        ],
        "'OR": [
          -1,
          162
        ],
        "'CARET": [
          -1,
          162
        ],
        "'IS": [
          -1,
          162
        ],
        "'ISEQUALEQUAL": [
          -1,
          162
        ],
        "'ISEQUALTILDE": [
          -1,
          162
        ],
        "'ISSPACESHIP": [
          -1,
          162
        ],
        "'ISROUGHLY": [
          -1,
          162
        ],
        "'ISNOT": [
          -1,
          162
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          162
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          162
        ],
        "'ISNOTSPACESHIP": [
          -1,
          162
        ],
        "'RAISES": [
          -1,
          162
        ],
        "'RAISESOTHER": [
          -1,
          162
        ],
        "'SATISFIES": [
          -1,
          162
        ],
        "'SATISFIESNOT": [
          -1,
          162
        ],
        "'RAISESSATISFIES": [
          -1,
          162
        ],
        "'RAISESVIOLATES": [
          -1,
          162
        ],
        "'RAISESNOT": [
          -1,
          162
        ],
        "'DOTDOTDOT": [
          -1,
          162
        ],
        "'NUMBER": [
          -1,
          162
        ],
        "'RATIONAL": [
          -1,
          162
        ],
        "'ROUGHRATIONAL": [
          -1,
          162
        ],
        "'TRUE": [
          -1,
          162
        ],
        "'FALSE": [
          -1,
          162
        ],
        "'LAM": [
          -1,
          162
        ],
        "'METHOD": [
          -1,
          162
        ],
        "'LBRACK": [
          -1,
          162
        ],
        "'RBRACK": [
          -1,
          162
        ],
        "'TABLE": [
          -1,
          162
        ],
        "'ROW": [
          -1,
          162
        ],
        "'REACTOR": [
          -1,
          162
        ],
        "'BANG": [
          -1,
          162
        ],
        "'IF": [
          -1,
          162
        ],
        "'ELSECOLON": [
          -1,
          162
        ],
        "'ELSEIF": [
          -1,
          162
        ],
        "'ASK": [
          -1,
          162
        ],
        "'THENCOLON": [
          -1,
          162
        ],
        "'CASES": [
          -1,
          162
        ],
        "'FOR": [
          -1,
          162
        ],
        "'TABLE-SELECT": [
          -1,
          162
        ],
        "'TABLE-FILTER": [
          -1,
          162
        ],
        "'USING": [
          -1,
          162
        ],
        "'TABLE-ORDER": [
          -1,
          162
        ],
        "'TABLE-EXTRACT": [
          -1,
          162
        ],
        "'TABLE-UPDATE": [
          -1,
          162
        ],
        "'TABLE-EXTEND": [
          -1,
          162
        ],
        "'OF": [
          -1,
          162
        ],
        "'LOAD-TABLE": [
          -1,
          162
        ],
        "'SOURCECOLON": [
          -1,
          162
        ],
        "'SANITIZE": [
          -1,
          162
        ]
      },
      {
        "$": [
          -1,
          164
        ],
        "'COLON": [
          -1,
          164
        ],
        "'END": [
          -1,
          164
        ],
        "'COMMA": [
          -1,
          164
        ],
        "'NAME": [
          -1,
          164
        ],
        "'PARENNOSPACE": [
          -1,
          164
        ],
        "'STRING": [
          -1,
          164
        ],
        "'RPAREN": [
          -1,
          164
        ],
        "'TYPE": [
          -1,
          164
        ],
        "'DATA": [
          -1,
          164
        ],
        "'TIMES": [
          -1,
          164
        ],
        "'PARENSPACE": [
          -1,
          164
        ],
        "'DOT": [
          -1,
          164
        ],
        "'SPY": [
          -1,
          164
        ],
        "'NEWTYPE": [
          -1,
          164
        ],
        "'LBRACE": [
          -1,
          164
        ],
        "'RBRACE": [
          -1,
          164
        ],
        "'SEMI": [
          -1,
          164
        ],
        "'SHADOW": [
          -1,
          164
        ],
        "'LET": [
          -1,
          164
        ],
        "'BLOCK": [
          -1,
          164
        ],
        "'LETREC": [
          -1,
          164
        ],
        "'TYPE-LET": [
          -1,
          164
        ],
        "'FUN": [
          -1,
          164
        ],
        "'LANGLE": [
          -1,
          164
        ],
        "'LT": [
          -1,
          164
        ],
        "'GT": [
          -1,
          164
        ],
        "'PARENAFTERBRACE": [
          -1,
          164
        ],
        "'WHERE": [
          -1,
          164
        ],
        "'CHECK": [
          -1,
          164
        ],
        "'EXAMPLES": [
          -1,
          164
        ],
        "'CHECKCOLON": [
          -1,
          164
        ],
        "'EXAMPLESCOLON": [
          -1,
          164
        ],
        "'BECAUSE": [
          -1,
          164
        ],
        "'BAR": [
          -1,
          164
        ],
        "'SHARING": [
          -1,
          164
        ],
        "'VAR": [
          -1,
          164
        ],
        "'REC": [
          -1,
          164
        ],
        "'WHEN": [
          -1,
          164
        ],
        "'PLUS": [
          -1,
          164
        ],
        "'DASH": [
          -1,
          164
        ],
        "'SLASH": [
          -1,
          164
        ],
        "'LEQ": [
          -1,
          164
        ],
        "'GEQ": [
          -1,
          164
        ],
        "'EQUALEQUAL": [
          -1,
          164
        ],
        "'SPACESHIP": [
          -1,
          164
        ],
        "'EQUALTILDE": [
          -1,
          164
        ],
        "'NEQ": [
          -1,
          164
        ],
        "'AND": [
          -1,
          164
        ],
        "'OR": [
          -1,
          164
        ],
        "'CARET": [
          -1,
          164
        ],
        "'IS": [
          -1,
          164
        ],
        "'ISEQUALEQUAL": [
          -1,
          164
        ],
        "'ISEQUALTILDE": [
          -1,
          164
        ],
        "'ISSPACESHIP": [
          -1,
          164
        ],
        "'ISROUGHLY": [
          -1,
          164
        ],
        "'ISNOT": [
          -1,
          164
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          164
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          164
        ],
        "'ISNOTSPACESHIP": [
          -1,
          164
        ],
        "'RAISES": [
          -1,
          164
        ],
        "'RAISESOTHER": [
          -1,
          164
        ],
        "'SATISFIES": [
          -1,
          164
        ],
        "'SATISFIESNOT": [
          -1,
          164
        ],
        "'RAISESSATISFIES": [
          -1,
          164
        ],
        "'RAISESVIOLATES": [
          -1,
          164
        ],
        "'RAISESNOT": [
          -1,
          164
        ],
        "'DOTDOTDOT": [
          -1,
          164
        ],
        "'NUMBER": [
          -1,
          164
        ],
        "'RATIONAL": [
          -1,
          164
        ],
        "'ROUGHRATIONAL": [
          -1,
          164
        ],
        "'TRUE": [
          -1,
          164
        ],
        "'FALSE": [
          -1,
          164
        ],
        "'LAM": [
          -1,
          164
        ],
        "'METHOD": [
          -1,
          164
        ],
        "'LBRACK": [
          -1,
          164
        ],
        "'RBRACK": [
          -1,
          164
        ],
        "'TABLE": [
          -1,
          164
        ],
        "'ROW": [
          -1,
          164
        ],
        "'REACTOR": [
          -1,
          164
        ],
        "'BANG": [
          -1,
          164
        ],
        "'IF": [
          -1,
          164
        ],
        "'ELSECOLON": [
          -1,
          164
        ],
        "'ELSEIF": [
          -1,
          164
        ],
        "'ASK": [
          -1,
          164
        ],
        "'THENCOLON": [
          -1,
          164
        ],
        "'CASES": [
          -1,
          164
        ],
        "'FOR": [
          -1,
          164
        ],
        "'TABLE-SELECT": [
          -1,
          164
        ],
        "'TABLE-FILTER": [
          -1,
          164
        ],
        "'USING": [
          -1,
          164
        ],
        "'TABLE-ORDER": [
          -1,
          164
        ],
        "'TABLE-EXTRACT": [
          -1,
          164
        ],
        "'TABLE-UPDATE": [
          -1,
          164
        ],
        "'TABLE-EXTEND": [
          -1,
          164
        ],
        "'OF": [
          -1,
          164
        ],
        "'LOAD-TABLE": [
          -1,
          164
        ],
        "'SOURCECOLON": [
          -1,
          164
        ],
        "'SANITIZE": [
          -1,
          164
        ]
      },
      {
        "$": [
          -1,
          166
        ],
        "'COLON": [
          -1,
          166
        ],
        "'END": [
          -1,
          166
        ],
        "'COMMA": [
          -1,
          166
        ],
        "'NAME": [
          -1,
          166
        ],
        "'PARENNOSPACE": [
          -1,
          166
        ],
        "'STRING": [
          -1,
          166
        ],
        "'RPAREN": [
          -1,
          166
        ],
        "'TYPE": [
          -1,
          166
        ],
        "'DATA": [
          -1,
          166
        ],
        "'TIMES": [
          -1,
          166
        ],
        "'PARENSPACE": [
          -1,
          166
        ],
        "'DOT": [
          -1,
          166
        ],
        "'SPY": [
          -1,
          166
        ],
        "'NEWTYPE": [
          -1,
          166
        ],
        "'LBRACE": [
          -1,
          166
        ],
        "'RBRACE": [
          -1,
          166
        ],
        "'SEMI": [
          -1,
          166
        ],
        "'SHADOW": [
          -1,
          166
        ],
        "'LET": [
          -1,
          166
        ],
        "'BLOCK": [
          -1,
          166
        ],
        "'LETREC": [
          -1,
          166
        ],
        "'TYPE-LET": [
          -1,
          166
        ],
        "'FUN": [
          -1,
          166
        ],
        "'LANGLE": [
          -1,
          166
        ],
        "'LT": [
          -1,
          166
        ],
        "'GT": [
          -1,
          166
        ],
        "'PARENAFTERBRACE": [
          -1,
          166
        ],
        "'WHERE": [
          -1,
          166
        ],
        "'CHECK": [
          -1,
          166
        ],
        "'EXAMPLES": [
          -1,
          166
        ],
        "'CHECKCOLON": [
          -1,
          166
        ],
        "'EXAMPLESCOLON": [
          -1,
          166
        ],
        "'BECAUSE": [
          -1,
          166
        ],
        "'BAR": [
          -1,
          166
        ],
        "'SHARING": [
          -1,
          166
        ],
        "'VAR": [
          -1,
          166
        ],
        "'REC": [
          -1,
          166
        ],
        "'WHEN": [
          -1,
          166
        ],
        "'PLUS": [
          -1,
          166
        ],
        "'DASH": [
          -1,
          166
        ],
        "'SLASH": [
          -1,
          166
        ],
        "'LEQ": [
          -1,
          166
        ],
        "'GEQ": [
          -1,
          166
        ],
        "'EQUALEQUAL": [
          -1,
          166
        ],
        "'SPACESHIP": [
          -1,
          166
        ],
        "'EQUALTILDE": [
          -1,
          166
        ],
        "'NEQ": [
          -1,
          166
        ],
        "'AND": [
          -1,
          166
        ],
        "'OR": [
          -1,
          166
        ],
        "'CARET": [
          -1,
          166
        ],
        "'IS": [
          -1,
          166
        ],
        "'ISEQUALEQUAL": [
          -1,
          166
        ],
        "'ISEQUALTILDE": [
          -1,
          166
        ],
        "'ISSPACESHIP": [
          -1,
          166
        ],
        "'ISROUGHLY": [
          -1,
          166
        ],
        "'ISNOT": [
          -1,
          166
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          166
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          166
        ],
        "'ISNOTSPACESHIP": [
          -1,
          166
        ],
        "'RAISES": [
          -1,
          166
        ],
        "'RAISESOTHER": [
          -1,
          166
        ],
        "'SATISFIES": [
          -1,
          166
        ],
        "'SATISFIESNOT": [
          -1,
          166
        ],
        "'RAISESSATISFIES": [
          -1,
          166
        ],
        "'RAISESVIOLATES": [
          -1,
          166
        ],
        "'RAISESNOT": [
          -1,
          166
        ],
        "'DOTDOTDOT": [
          -1,
          166
        ],
        "'NUMBER": [
          -1,
          166
        ],
        "'RATIONAL": [
          -1,
          166
        ],
        "'ROUGHRATIONAL": [
          -1,
          166
        ],
        "'TRUE": [
          -1,
          166
        ],
        "'FALSE": [
          -1,
          166
        ],
        "'LAM": [
          -1,
          166
        ],
        "'METHOD": [
          -1,
          166
        ],
        "'LBRACK": [
          -1,
          166
        ],
        "'RBRACK": [
          -1,
          166
        ],
        "'TABLE": [
          -1,
          166
        ],
        "'ROW": [
          -1,
          166
        ],
        "'REACTOR": [
          -1,
          166
        ],
        "'BANG": [
          -1,
          166
        ],
        "'IF": [
          -1,
          166
        ],
        "'ELSECOLON": [
          -1,
          166
        ],
        "'ELSEIF": [
          -1,
          166
        ],
        "'ASK": [
          -1,
          166
        ],
        "'THENCOLON": [
          -1,
          166
        ],
        "'CASES": [
          -1,
          166
        ],
        "'FOR": [
          -1,
          166
        ],
        "'TABLE-SELECT": [
          -1,
          166
        ],
        "'TABLE-FILTER": [
          -1,
          166
        ],
        "'USING": [
          -1,
          166
        ],
        "'TABLE-ORDER": [
          -1,
          166
        ],
        "'TABLE-EXTRACT": [
          -1,
          166
        ],
        "'TABLE-UPDATE": [
          -1,
          166
        ],
        "'TABLE-EXTEND": [
          -1,
          166
        ],
        "'OF": [
          -1,
          166
        ],
        "'LOAD-TABLE": [
          -1,
          166
        ],
        "'SOURCECOLON": [
          -1,
          166
        ],
        "'SANITIZE": [
          -1,
          166
        ]
      },
      {
        "$": [
          -1,
          168
        ],
        "'COLON": [
          -1,
          168
        ],
        "'END": [
          -1,
          168
        ],
        "'COMMA": [
          -1,
          168
        ],
        "'NAME": [
          -1,
          168
        ],
        "'PARENNOSPACE": [
          -1,
          168
        ],
        "'STRING": [
          -1,
          168
        ],
        "'RPAREN": [
          -1,
          168
        ],
        "'TYPE": [
          -1,
          168
        ],
        "'DATA": [
          -1,
          168
        ],
        "'TIMES": [
          -1,
          168
        ],
        "'PARENSPACE": [
          -1,
          168
        ],
        "'DOT": [
          -1,
          168
        ],
        "'SPY": [
          -1,
          168
        ],
        "'NEWTYPE": [
          -1,
          168
        ],
        "'LBRACE": [
          -1,
          168
        ],
        "'RBRACE": [
          -1,
          168
        ],
        "'SEMI": [
          -1,
          168
        ],
        "'SHADOW": [
          -1,
          168
        ],
        "'LET": [
          -1,
          168
        ],
        "'BLOCK": [
          -1,
          168
        ],
        "'LETREC": [
          -1,
          168
        ],
        "'TYPE-LET": [
          -1,
          168
        ],
        "'FUN": [
          -1,
          168
        ],
        "'LANGLE": [
          -1,
          168
        ],
        "'LT": [
          -1,
          168
        ],
        "'GT": [
          -1,
          168
        ],
        "'PARENAFTERBRACE": [
          -1,
          168
        ],
        "'WHERE": [
          -1,
          168
        ],
        "'CHECK": [
          -1,
          168
        ],
        "'EXAMPLES": [
          -1,
          168
        ],
        "'CHECKCOLON": [
          -1,
          168
        ],
        "'EXAMPLESCOLON": [
          -1,
          168
        ],
        "'BECAUSE": [
          -1,
          168
        ],
        "'BAR": [
          -1,
          168
        ],
        "'SHARING": [
          -1,
          168
        ],
        "'VAR": [
          -1,
          168
        ],
        "'REC": [
          -1,
          168
        ],
        "'WHEN": [
          -1,
          168
        ],
        "'PLUS": [
          -1,
          168
        ],
        "'DASH": [
          -1,
          168
        ],
        "'SLASH": [
          -1,
          168
        ],
        "'LEQ": [
          -1,
          168
        ],
        "'GEQ": [
          -1,
          168
        ],
        "'EQUALEQUAL": [
          -1,
          168
        ],
        "'SPACESHIP": [
          -1,
          168
        ],
        "'EQUALTILDE": [
          -1,
          168
        ],
        "'NEQ": [
          -1,
          168
        ],
        "'AND": [
          -1,
          168
        ],
        "'OR": [
          -1,
          168
        ],
        "'CARET": [
          -1,
          168
        ],
        "'IS": [
          -1,
          168
        ],
        "'ISEQUALEQUAL": [
          -1,
          168
        ],
        "'ISEQUALTILDE": [
          -1,
          168
        ],
        "'ISSPACESHIP": [
          -1,
          168
        ],
        "'ISROUGHLY": [
          -1,
          168
        ],
        "'ISNOT": [
          -1,
          168
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          168
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          168
        ],
        "'ISNOTSPACESHIP": [
          -1,
          168
        ],
        "'RAISES": [
          -1,
          168
        ],
        "'RAISESOTHER": [
          -1,
          168
        ],
        "'SATISFIES": [
          -1,
          168
        ],
        "'SATISFIESNOT": [
          -1,
          168
        ],
        "'RAISESSATISFIES": [
          -1,
          168
        ],
        "'RAISESVIOLATES": [
          -1,
          168
        ],
        "'RAISESNOT": [
          -1,
          168
        ],
        "'DOTDOTDOT": [
          -1,
          168
        ],
        "'NUMBER": [
          -1,
          168
        ],
        "'RATIONAL": [
          -1,
          168
        ],
        "'ROUGHRATIONAL": [
          -1,
          168
        ],
        "'TRUE": [
          -1,
          168
        ],
        "'FALSE": [
          -1,
          168
        ],
        "'LAM": [
          -1,
          168
        ],
        "'METHOD": [
          -1,
          168
        ],
        "'LBRACK": [
          -1,
          168
        ],
        "'RBRACK": [
          -1,
          168
        ],
        "'TABLE": [
          -1,
          168
        ],
        "'ROW": [
          -1,
          168
        ],
        "'REACTOR": [
          -1,
          168
        ],
        "'BANG": [
          -1,
          168
        ],
        "'IF": [
          -1,
          168
        ],
        "'ELSECOLON": [
          -1,
          168
        ],
        "'ELSEIF": [
          -1,
          168
        ],
        "'ASK": [
          -1,
          168
        ],
        "'THENCOLON": [
          -1,
          168
        ],
        "'CASES": [
          -1,
          168
        ],
        "'FOR": [
          -1,
          168
        ],
        "'TABLE-SELECT": [
          -1,
          168
        ],
        "'TABLE-FILTER": [
          -1,
          168
        ],
        "'USING": [
          -1,
          168
        ],
        "'TABLE-ORDER": [
          -1,
          168
        ],
        "'TABLE-EXTRACT": [
          -1,
          168
        ],
        "'TABLE-UPDATE": [
          -1,
          168
        ],
        "'TABLE-EXTEND": [
          -1,
          168
        ],
        "'OF": [
          -1,
          168
        ],
        "'LOAD-TABLE": [
          -1,
          168
        ],
        "'SOURCECOLON": [
          -1,
          168
        ],
        "'SANITIZE": [
          -1,
          168
        ]
      },
      {
        "$": [
          -1,
          170
        ],
        "'COLON": [
          -1,
          170
        ],
        "'END": [
          -1,
          170
        ],
        "'COMMA": [
          -1,
          170
        ],
        "'NAME": [
          -1,
          170
        ],
        "'PARENNOSPACE": [
          -1,
          170
        ],
        "'STRING": [
          -1,
          170
        ],
        "'RPAREN": [
          -1,
          170
        ],
        "'TYPE": [
          -1,
          170
        ],
        "'DATA": [
          -1,
          170
        ],
        "'TIMES": [
          -1,
          170
        ],
        "'PARENSPACE": [
          -1,
          170
        ],
        "'DOT": [
          -1,
          170
        ],
        "'SPY": [
          -1,
          170
        ],
        "'NEWTYPE": [
          -1,
          170
        ],
        "'LBRACE": [
          -1,
          170
        ],
        "'RBRACE": [
          -1,
          170
        ],
        "'SEMI": [
          -1,
          170
        ],
        "'SHADOW": [
          -1,
          170
        ],
        "'LET": [
          -1,
          170
        ],
        "'BLOCK": [
          -1,
          170
        ],
        "'LETREC": [
          -1,
          170
        ],
        "'TYPE-LET": [
          -1,
          170
        ],
        "'FUN": [
          -1,
          170
        ],
        "'LANGLE": [
          -1,
          170
        ],
        "'LT": [
          -1,
          170
        ],
        "'GT": [
          -1,
          170
        ],
        "'PARENAFTERBRACE": [
          -1,
          170
        ],
        "'WHERE": [
          -1,
          170
        ],
        "'CHECK": [
          -1,
          170
        ],
        "'EXAMPLES": [
          -1,
          170
        ],
        "'CHECKCOLON": [
          -1,
          170
        ],
        "'EXAMPLESCOLON": [
          -1,
          170
        ],
        "'BECAUSE": [
          -1,
          170
        ],
        "'BAR": [
          -1,
          170
        ],
        "'SHARING": [
          -1,
          170
        ],
        "'VAR": [
          -1,
          170
        ],
        "'REC": [
          -1,
          170
        ],
        "'WHEN": [
          -1,
          170
        ],
        "'PLUS": [
          -1,
          170
        ],
        "'DASH": [
          -1,
          170
        ],
        "'SLASH": [
          -1,
          170
        ],
        "'LEQ": [
          -1,
          170
        ],
        "'GEQ": [
          -1,
          170
        ],
        "'EQUALEQUAL": [
          -1,
          170
        ],
        "'SPACESHIP": [
          -1,
          170
        ],
        "'EQUALTILDE": [
          -1,
          170
        ],
        "'NEQ": [
          -1,
          170
        ],
        "'AND": [
          -1,
          170
        ],
        "'OR": [
          -1,
          170
        ],
        "'CARET": [
          -1,
          170
        ],
        "'IS": [
          -1,
          170
        ],
        "'ISEQUALEQUAL": [
          -1,
          170
        ],
        "'ISEQUALTILDE": [
          -1,
          170
        ],
        "'ISSPACESHIP": [
          -1,
          170
        ],
        "'ISROUGHLY": [
          -1,
          170
        ],
        "'ISNOT": [
          -1,
          170
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          170
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          170
        ],
        "'ISNOTSPACESHIP": [
          -1,
          170
        ],
        "'RAISES": [
          -1,
          170
        ],
        "'RAISESOTHER": [
          -1,
          170
        ],
        "'SATISFIES": [
          -1,
          170
        ],
        "'SATISFIESNOT": [
          -1,
          170
        ],
        "'RAISESSATISFIES": [
          -1,
          170
        ],
        "'RAISESVIOLATES": [
          -1,
          170
        ],
        "'RAISESNOT": [
          -1,
          170
        ],
        "'DOTDOTDOT": [
          -1,
          170
        ],
        "'NUMBER": [
          -1,
          170
        ],
        "'RATIONAL": [
          -1,
          170
        ],
        "'ROUGHRATIONAL": [
          -1,
          170
        ],
        "'TRUE": [
          -1,
          170
        ],
        "'FALSE": [
          -1,
          170
        ],
        "'LAM": [
          -1,
          170
        ],
        "'METHOD": [
          -1,
          170
        ],
        "'LBRACK": [
          -1,
          170
        ],
        "'RBRACK": [
          -1,
          170
        ],
        "'TABLE": [
          -1,
          170
        ],
        "'ROW": [
          -1,
          170
        ],
        "'REACTOR": [
          -1,
          170
        ],
        "'BANG": [
          -1,
          170
        ],
        "'IF": [
          -1,
          170
        ],
        "'ELSECOLON": [
          -1,
          170
        ],
        "'ELSEIF": [
          -1,
          170
        ],
        "'ASK": [
          -1,
          170
        ],
        "'THENCOLON": [
          -1,
          170
        ],
        "'CASES": [
          -1,
          170
        ],
        "'FOR": [
          -1,
          170
        ],
        "'TABLE-SELECT": [
          -1,
          170
        ],
        "'TABLE-FILTER": [
          -1,
          170
        ],
        "'USING": [
          -1,
          170
        ],
        "'TABLE-ORDER": [
          -1,
          170
        ],
        "'TABLE-EXTRACT": [
          -1,
          170
        ],
        "'TABLE-UPDATE": [
          -1,
          170
        ],
        "'TABLE-EXTEND": [
          -1,
          170
        ],
        "'OF": [
          -1,
          170
        ],
        "'LOAD-TABLE": [
          -1,
          170
        ],
        "'SOURCECOLON": [
          -1,
          170
        ],
        "'SANITIZE": [
          -1,
          170
        ]
      },
      {
        "$": [
          -1,
          172
        ],
        "'COLON": [
          -1,
          172
        ],
        "'END": [
          -1,
          172
        ],
        "'COMMA": [
          -1,
          172
        ],
        "'NAME": [
          -1,
          172
        ],
        "'PARENNOSPACE": [
          -1,
          172
        ],
        "'STRING": [
          -1,
          172
        ],
        "'RPAREN": [
          -1,
          172
        ],
        "'TYPE": [
          -1,
          172
        ],
        "'DATA": [
          -1,
          172
        ],
        "'TIMES": [
          -1,
          172
        ],
        "'PARENSPACE": [
          -1,
          172
        ],
        "'DOT": [
          -1,
          172
        ],
        "'SPY": [
          -1,
          172
        ],
        "'NEWTYPE": [
          -1,
          172
        ],
        "'LBRACE": [
          -1,
          172
        ],
        "'RBRACE": [
          -1,
          172
        ],
        "'SEMI": [
          -1,
          172
        ],
        "'SHADOW": [
          -1,
          172
        ],
        "'LET": [
          -1,
          172
        ],
        "'BLOCK": [
          -1,
          172
        ],
        "'LETREC": [
          -1,
          172
        ],
        "'TYPE-LET": [
          -1,
          172
        ],
        "'FUN": [
          -1,
          172
        ],
        "'LANGLE": [
          -1,
          172
        ],
        "'LT": [
          -1,
          172
        ],
        "'GT": [
          -1,
          172
        ],
        "'PARENAFTERBRACE": [
          -1,
          172
        ],
        "'WHERE": [
          -1,
          172
        ],
        "'CHECK": [
          -1,
          172
        ],
        "'EXAMPLES": [
          -1,
          172
        ],
        "'CHECKCOLON": [
          -1,
          172
        ],
        "'EXAMPLESCOLON": [
          -1,
          172
        ],
        "'BECAUSE": [
          -1,
          172
        ],
        "'BAR": [
          -1,
          172
        ],
        "'SHARING": [
          -1,
          172
        ],
        "'VAR": [
          -1,
          172
        ],
        "'REC": [
          -1,
          172
        ],
        "'WHEN": [
          -1,
          172
        ],
        "'PLUS": [
          -1,
          172
        ],
        "'DASH": [
          -1,
          172
        ],
        "'SLASH": [
          -1,
          172
        ],
        "'LEQ": [
          -1,
          172
        ],
        "'GEQ": [
          -1,
          172
        ],
        "'EQUALEQUAL": [
          -1,
          172
        ],
        "'SPACESHIP": [
          -1,
          172
        ],
        "'EQUALTILDE": [
          -1,
          172
        ],
        "'NEQ": [
          -1,
          172
        ],
        "'AND": [
          -1,
          172
        ],
        "'OR": [
          -1,
          172
        ],
        "'CARET": [
          -1,
          172
        ],
        "'IS": [
          -1,
          172
        ],
        "'ISEQUALEQUAL": [
          -1,
          172
        ],
        "'ISEQUALTILDE": [
          -1,
          172
        ],
        "'ISSPACESHIP": [
          -1,
          172
        ],
        "'ISROUGHLY": [
          -1,
          172
        ],
        "'ISNOT": [
          -1,
          172
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          172
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          172
        ],
        "'ISNOTSPACESHIP": [
          -1,
          172
        ],
        "'RAISES": [
          -1,
          172
        ],
        "'RAISESOTHER": [
          -1,
          172
        ],
        "'SATISFIES": [
          -1,
          172
        ],
        "'SATISFIESNOT": [
          -1,
          172
        ],
        "'RAISESSATISFIES": [
          -1,
          172
        ],
        "'RAISESVIOLATES": [
          -1,
          172
        ],
        "'RAISESNOT": [
          -1,
          172
        ],
        "'DOTDOTDOT": [
          -1,
          172
        ],
        "'NUMBER": [
          -1,
          172
        ],
        "'RATIONAL": [
          -1,
          172
        ],
        "'ROUGHRATIONAL": [
          -1,
          172
        ],
        "'TRUE": [
          -1,
          172
        ],
        "'FALSE": [
          -1,
          172
        ],
        "'LAM": [
          -1,
          172
        ],
        "'METHOD": [
          -1,
          172
        ],
        "'LBRACK": [
          -1,
          172
        ],
        "'RBRACK": [
          -1,
          172
        ],
        "'TABLE": [
          -1,
          172
        ],
        "'ROW": [
          -1,
          172
        ],
        "'REACTOR": [
          -1,
          172
        ],
        "'BANG": [
          -1,
          172
        ],
        "'IF": [
          -1,
          172
        ],
        "'ELSECOLON": [
          -1,
          172
        ],
        "'ELSEIF": [
          -1,
          172
        ],
        "'ASK": [
          -1,
          172
        ],
        "'THENCOLON": [
          -1,
          172
        ],
        "'CASES": [
          -1,
          172
        ],
        "'FOR": [
          -1,
          172
        ],
        "'TABLE-SELECT": [
          -1,
          172
        ],
        "'TABLE-FILTER": [
          -1,
          172
        ],
        "'USING": [
          -1,
          172
        ],
        "'TABLE-ORDER": [
          -1,
          172
        ],
        "'TABLE-EXTRACT": [
          -1,
          172
        ],
        "'TABLE-UPDATE": [
          -1,
          172
        ],
        "'TABLE-EXTEND": [
          -1,
          172
        ],
        "'OF": [
          -1,
          172
        ],
        "'LOAD-TABLE": [
          -1,
          172
        ],
        "'SOURCECOLON": [
          -1,
          172
        ],
        "'SANITIZE": [
          -1,
          172
        ]
      },
      {
        "$": [
          -1,
          174
        ],
        "'COLON": [
          -1,
          174
        ],
        "'END": [
          -1,
          174
        ],
        "'COMMA": [
          -1,
          174
        ],
        "'NAME": [
          -1,
          174
        ],
        "'PARENNOSPACE": [
          -1,
          174
        ],
        "'STRING": [
          -1,
          174
        ],
        "'RPAREN": [
          -1,
          174
        ],
        "'TYPE": [
          -1,
          174
        ],
        "'DATA": [
          -1,
          174
        ],
        "'TIMES": [
          -1,
          174
        ],
        "'PARENSPACE": [
          -1,
          174
        ],
        "'DOT": [
          -1,
          174
        ],
        "'SPY": [
          -1,
          174
        ],
        "'NEWTYPE": [
          -1,
          174
        ],
        "'LBRACE": [
          -1,
          174
        ],
        "'RBRACE": [
          -1,
          174
        ],
        "'SEMI": [
          -1,
          174
        ],
        "'SHADOW": [
          -1,
          174
        ],
        "'LET": [
          -1,
          174
        ],
        "'BLOCK": [
          -1,
          174
        ],
        "'LETREC": [
          -1,
          174
        ],
        "'TYPE-LET": [
          -1,
          174
        ],
        "'FUN": [
          -1,
          174
        ],
        "'LANGLE": [
          -1,
          174
        ],
        "'LT": [
          -1,
          174
        ],
        "'GT": [
          -1,
          174
        ],
        "'PARENAFTERBRACE": [
          -1,
          174
        ],
        "'WHERE": [
          -1,
          174
        ],
        "'CHECK": [
          -1,
          174
        ],
        "'EXAMPLES": [
          -1,
          174
        ],
        "'CHECKCOLON": [
          -1,
          174
        ],
        "'EXAMPLESCOLON": [
          -1,
          174
        ],
        "'BECAUSE": [
          -1,
          174
        ],
        "'BAR": [
          -1,
          174
        ],
        "'SHARING": [
          -1,
          174
        ],
        "'VAR": [
          -1,
          174
        ],
        "'REC": [
          -1,
          174
        ],
        "'WHEN": [
          -1,
          174
        ],
        "'PLUS": [
          -1,
          174
        ],
        "'DASH": [
          -1,
          174
        ],
        "'SLASH": [
          -1,
          174
        ],
        "'LEQ": [
          -1,
          174
        ],
        "'GEQ": [
          -1,
          174
        ],
        "'EQUALEQUAL": [
          -1,
          174
        ],
        "'SPACESHIP": [
          -1,
          174
        ],
        "'EQUALTILDE": [
          -1,
          174
        ],
        "'NEQ": [
          -1,
          174
        ],
        "'AND": [
          -1,
          174
        ],
        "'OR": [
          -1,
          174
        ],
        "'CARET": [
          -1,
          174
        ],
        "'IS": [
          -1,
          174
        ],
        "'ISEQUALEQUAL": [
          -1,
          174
        ],
        "'ISEQUALTILDE": [
          -1,
          174
        ],
        "'ISSPACESHIP": [
          -1,
          174
        ],
        "'ISROUGHLY": [
          -1,
          174
        ],
        "'ISNOT": [
          -1,
          174
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          174
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          174
        ],
        "'ISNOTSPACESHIP": [
          -1,
          174
        ],
        "'RAISES": [
          -1,
          174
        ],
        "'RAISESOTHER": [
          -1,
          174
        ],
        "'SATISFIES": [
          -1,
          174
        ],
        "'SATISFIESNOT": [
          -1,
          174
        ],
        "'RAISESSATISFIES": [
          -1,
          174
        ],
        "'RAISESVIOLATES": [
          -1,
          174
        ],
        "'RAISESNOT": [
          -1,
          174
        ],
        "'DOTDOTDOT": [
          -1,
          174
        ],
        "'NUMBER": [
          -1,
          174
        ],
        "'RATIONAL": [
          -1,
          174
        ],
        "'ROUGHRATIONAL": [
          -1,
          174
        ],
        "'TRUE": [
          -1,
          174
        ],
        "'FALSE": [
          -1,
          174
        ],
        "'LAM": [
          -1,
          174
        ],
        "'METHOD": [
          -1,
          174
        ],
        "'LBRACK": [
          -1,
          174
        ],
        "'RBRACK": [
          -1,
          174
        ],
        "'TABLE": [
          -1,
          174
        ],
        "'ROW": [
          -1,
          174
        ],
        "'REACTOR": [
          -1,
          174
        ],
        "'BANG": [
          -1,
          174
        ],
        "'IF": [
          -1,
          174
        ],
        "'ELSECOLON": [
          -1,
          174
        ],
        "'ELSEIF": [
          -1,
          174
        ],
        "'ASK": [
          -1,
          174
        ],
        "'THENCOLON": [
          -1,
          174
        ],
        "'CASES": [
          -1,
          174
        ],
        "'FOR": [
          -1,
          174
        ],
        "'TABLE-SELECT": [
          -1,
          174
        ],
        "'TABLE-FILTER": [
          -1,
          174
        ],
        "'USING": [
          -1,
          174
        ],
        "'TABLE-ORDER": [
          -1,
          174
        ],
        "'TABLE-EXTRACT": [
          -1,
          174
        ],
        "'TABLE-UPDATE": [
          -1,
          174
        ],
        "'TABLE-EXTEND": [
          -1,
          174
        ],
        "'OF": [
          -1,
          174
        ],
        "'LOAD-TABLE": [
          -1,
          174
        ],
        "'SOURCECOLON": [
          -1,
          174
        ],
        "'SANITIZE": [
          -1,
          174
        ]
      },
      {
        "$": [
          -1,
          176
        ],
        "'COLON": [
          -1,
          176
        ],
        "'END": [
          -1,
          176
        ],
        "'COMMA": [
          -1,
          176
        ],
        "'NAME": [
          -1,
          176
        ],
        "'PARENNOSPACE": [
          -1,
          176
        ],
        "'STRING": [
          -1,
          176
        ],
        "'RPAREN": [
          -1,
          176
        ],
        "'TYPE": [
          -1,
          176
        ],
        "'DATA": [
          -1,
          176
        ],
        "'TIMES": [
          -1,
          176
        ],
        "'PARENSPACE": [
          -1,
          176
        ],
        "'DOT": [
          -1,
          176
        ],
        "'SPY": [
          -1,
          176
        ],
        "'NEWTYPE": [
          -1,
          176
        ],
        "'LBRACE": [
          -1,
          176
        ],
        "'RBRACE": [
          -1,
          176
        ],
        "'SEMI": [
          -1,
          176
        ],
        "'SHADOW": [
          -1,
          176
        ],
        "'LET": [
          -1,
          176
        ],
        "'BLOCK": [
          -1,
          176
        ],
        "'LETREC": [
          -1,
          176
        ],
        "'TYPE-LET": [
          -1,
          176
        ],
        "'FUN": [
          -1,
          176
        ],
        "'LANGLE": [
          -1,
          176
        ],
        "'LT": [
          -1,
          176
        ],
        "'GT": [
          -1,
          176
        ],
        "'PARENAFTERBRACE": [
          -1,
          176
        ],
        "'WHERE": [
          -1,
          176
        ],
        "'CHECK": [
          -1,
          176
        ],
        "'EXAMPLES": [
          -1,
          176
        ],
        "'CHECKCOLON": [
          -1,
          176
        ],
        "'EXAMPLESCOLON": [
          -1,
          176
        ],
        "'BECAUSE": [
          -1,
          176
        ],
        "'BAR": [
          -1,
          176
        ],
        "'SHARING": [
          -1,
          176
        ],
        "'VAR": [
          -1,
          176
        ],
        "'REC": [
          -1,
          176
        ],
        "'WHEN": [
          -1,
          176
        ],
        "'PLUS": [
          -1,
          176
        ],
        "'DASH": [
          -1,
          176
        ],
        "'SLASH": [
          -1,
          176
        ],
        "'LEQ": [
          -1,
          176
        ],
        "'GEQ": [
          -1,
          176
        ],
        "'EQUALEQUAL": [
          -1,
          176
        ],
        "'SPACESHIP": [
          -1,
          176
        ],
        "'EQUALTILDE": [
          -1,
          176
        ],
        "'NEQ": [
          -1,
          176
        ],
        "'AND": [
          -1,
          176
        ],
        "'OR": [
          -1,
          176
        ],
        "'CARET": [
          -1,
          176
        ],
        "'IS": [
          -1,
          176
        ],
        "'ISEQUALEQUAL": [
          -1,
          176
        ],
        "'ISEQUALTILDE": [
          -1,
          176
        ],
        "'ISSPACESHIP": [
          -1,
          176
        ],
        "'ISROUGHLY": [
          -1,
          176
        ],
        "'ISNOT": [
          -1,
          176
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          176
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          176
        ],
        "'ISNOTSPACESHIP": [
          -1,
          176
        ],
        "'RAISES": [
          -1,
          176
        ],
        "'RAISESOTHER": [
          -1,
          176
        ],
        "'SATISFIES": [
          -1,
          176
        ],
        "'SATISFIESNOT": [
          -1,
          176
        ],
        "'RAISESSATISFIES": [
          -1,
          176
        ],
        "'RAISESVIOLATES": [
          -1,
          176
        ],
        "'RAISESNOT": [
          -1,
          176
        ],
        "'DOTDOTDOT": [
          -1,
          176
        ],
        "'NUMBER": [
          -1,
          176
        ],
        "'RATIONAL": [
          -1,
          176
        ],
        "'ROUGHRATIONAL": [
          -1,
          176
        ],
        "'TRUE": [
          -1,
          176
        ],
        "'FALSE": [
          -1,
          176
        ],
        "'LAM": [
          -1,
          176
        ],
        "'METHOD": [
          -1,
          176
        ],
        "'LBRACK": [
          -1,
          176
        ],
        "'RBRACK": [
          -1,
          176
        ],
        "'TABLE": [
          -1,
          176
        ],
        "'ROW": [
          -1,
          176
        ],
        "'REACTOR": [
          -1,
          176
        ],
        "'BANG": [
          -1,
          176
        ],
        "'IF": [
          -1,
          176
        ],
        "'ELSECOLON": [
          -1,
          176
        ],
        "'ELSEIF": [
          -1,
          176
        ],
        "'ASK": [
          -1,
          176
        ],
        "'THENCOLON": [
          -1,
          176
        ],
        "'CASES": [
          -1,
          176
        ],
        "'FOR": [
          -1,
          176
        ],
        "'TABLE-SELECT": [
          -1,
          176
        ],
        "'TABLE-FILTER": [
          -1,
          176
        ],
        "'USING": [
          -1,
          176
        ],
        "'TABLE-ORDER": [
          -1,
          176
        ],
        "'TABLE-EXTRACT": [
          -1,
          176
        ],
        "'TABLE-UPDATE": [
          -1,
          176
        ],
        "'TABLE-EXTEND": [
          -1,
          176
        ],
        "'OF": [
          -1,
          176
        ],
        "'LOAD-TABLE": [
          -1,
          176
        ],
        "'SOURCECOLON": [
          -1,
          176
        ],
        "'SANITIZE": [
          -1,
          176
        ]
      },
      {
        "$": [
          -1,
          178
        ],
        "'COLON": [
          -1,
          178
        ],
        "'END": [
          -1,
          178
        ],
        "'COMMA": [
          -1,
          178
        ],
        "'NAME": [
          -1,
          178
        ],
        "'PARENNOSPACE": [
          -1,
          178
        ],
        "'STRING": [
          -1,
          178
        ],
        "'RPAREN": [
          -1,
          178
        ],
        "'TYPE": [
          -1,
          178
        ],
        "'DATA": [
          -1,
          178
        ],
        "'TIMES": [
          -1,
          178
        ],
        "'PARENSPACE": [
          -1,
          178
        ],
        "'DOT": [
          -1,
          178
        ],
        "'SPY": [
          -1,
          178
        ],
        "'NEWTYPE": [
          -1,
          178
        ],
        "'LBRACE": [
          -1,
          178
        ],
        "'RBRACE": [
          -1,
          178
        ],
        "'SEMI": [
          -1,
          178
        ],
        "'SHADOW": [
          -1,
          178
        ],
        "'LET": [
          -1,
          178
        ],
        "'BLOCK": [
          -1,
          178
        ],
        "'LETREC": [
          -1,
          178
        ],
        "'TYPE-LET": [
          -1,
          178
        ],
        "'FUN": [
          -1,
          178
        ],
        "'LANGLE": [
          -1,
          178
        ],
        "'LT": [
          -1,
          178
        ],
        "'GT": [
          -1,
          178
        ],
        "'PARENAFTERBRACE": [
          -1,
          178
        ],
        "'WHERE": [
          -1,
          178
        ],
        "'CHECK": [
          -1,
          178
        ],
        "'EXAMPLES": [
          -1,
          178
        ],
        "'CHECKCOLON": [
          -1,
          178
        ],
        "'EXAMPLESCOLON": [
          -1,
          178
        ],
        "'BECAUSE": [
          -1,
          178
        ],
        "'BAR": [
          -1,
          178
        ],
        "'SHARING": [
          -1,
          178
        ],
        "'VAR": [
          -1,
          178
        ],
        "'REC": [
          -1,
          178
        ],
        "'WHEN": [
          -1,
          178
        ],
        "'PLUS": [
          -1,
          178
        ],
        "'DASH": [
          -1,
          178
        ],
        "'SLASH": [
          -1,
          178
        ],
        "'LEQ": [
          -1,
          178
        ],
        "'GEQ": [
          -1,
          178
        ],
        "'EQUALEQUAL": [
          -1,
          178
        ],
        "'SPACESHIP": [
          -1,
          178
        ],
        "'EQUALTILDE": [
          -1,
          178
        ],
        "'NEQ": [
          -1,
          178
        ],
        "'AND": [
          -1,
          178
        ],
        "'OR": [
          -1,
          178
        ],
        "'CARET": [
          -1,
          178
        ],
        "'IS": [
          -1,
          178
        ],
        "'ISEQUALEQUAL": [
          -1,
          178
        ],
        "'ISEQUALTILDE": [
          -1,
          178
        ],
        "'ISSPACESHIP": [
          -1,
          178
        ],
        "'ISROUGHLY": [
          -1,
          178
        ],
        "'ISNOT": [
          -1,
          178
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          178
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          178
        ],
        "'ISNOTSPACESHIP": [
          -1,
          178
        ],
        "'RAISES": [
          -1,
          178
        ],
        "'RAISESOTHER": [
          -1,
          178
        ],
        "'SATISFIES": [
          -1,
          178
        ],
        "'SATISFIESNOT": [
          -1,
          178
        ],
        "'RAISESSATISFIES": [
          -1,
          178
        ],
        "'RAISESVIOLATES": [
          -1,
          178
        ],
        "'RAISESNOT": [
          -1,
          178
        ],
        "'DOTDOTDOT": [
          -1,
          178
        ],
        "'NUMBER": [
          -1,
          178
        ],
        "'RATIONAL": [
          -1,
          178
        ],
        "'ROUGHRATIONAL": [
          -1,
          178
        ],
        "'TRUE": [
          -1,
          178
        ],
        "'FALSE": [
          -1,
          178
        ],
        "'LAM": [
          -1,
          178
        ],
        "'METHOD": [
          -1,
          178
        ],
        "'LBRACK": [
          -1,
          178
        ],
        "'RBRACK": [
          -1,
          178
        ],
        "'TABLE": [
          -1,
          178
        ],
        "'ROW": [
          -1,
          178
        ],
        "'REACTOR": [
          -1,
          178
        ],
        "'BANG": [
          -1,
          178
        ],
        "'IF": [
          -1,
          178
        ],
        "'ELSECOLON": [
          -1,
          178
        ],
        "'ELSEIF": [
          -1,
          178
        ],
        "'ASK": [
          -1,
          178
        ],
        "'THENCOLON": [
          -1,
          178
        ],
        "'CASES": [
          -1,
          178
        ],
        "'FOR": [
          -1,
          178
        ],
        "'TABLE-SELECT": [
          -1,
          178
        ],
        "'TABLE-FILTER": [
          -1,
          178
        ],
        "'USING": [
          -1,
          178
        ],
        "'TABLE-ORDER": [
          -1,
          178
        ],
        "'TABLE-EXTRACT": [
          -1,
          178
        ],
        "'TABLE-UPDATE": [
          -1,
          178
        ],
        "'TABLE-EXTEND": [
          -1,
          178
        ],
        "'OF": [
          -1,
          178
        ],
        "'LOAD-TABLE": [
          -1,
          178
        ],
        "'SOURCECOLON": [
          -1,
          178
        ],
        "'SANITIZE": [
          -1,
          178
        ]
      },
      {
        "$": [
          -1,
          180
        ],
        "'COLON": [
          -1,
          180
        ],
        "'END": [
          -1,
          180
        ],
        "'COMMA": [
          -1,
          180
        ],
        "'NAME": [
          -1,
          180
        ],
        "'PARENNOSPACE": [
          -1,
          180
        ],
        "'STRING": [
          -1,
          180
        ],
        "'RPAREN": [
          -1,
          180
        ],
        "'TYPE": [
          -1,
          180
        ],
        "'DATA": [
          -1,
          180
        ],
        "'TIMES": [
          -1,
          180
        ],
        "'PARENSPACE": [
          -1,
          180
        ],
        "'DOT": [
          -1,
          180
        ],
        "'SPY": [
          -1,
          180
        ],
        "'NEWTYPE": [
          -1,
          180
        ],
        "'LBRACE": [
          -1,
          180
        ],
        "'RBRACE": [
          -1,
          180
        ],
        "'SEMI": [
          -1,
          180
        ],
        "'SHADOW": [
          -1,
          180
        ],
        "'LET": [
          -1,
          180
        ],
        "'BLOCK": [
          -1,
          180
        ],
        "'LETREC": [
          -1,
          180
        ],
        "'TYPE-LET": [
          -1,
          180
        ],
        "'FUN": [
          -1,
          180
        ],
        "'LANGLE": [
          -1,
          180
        ],
        "'LT": [
          -1,
          180
        ],
        "'GT": [
          -1,
          180
        ],
        "'PARENAFTERBRACE": [
          -1,
          180
        ],
        "'WHERE": [
          -1,
          180
        ],
        "'CHECK": [
          -1,
          180
        ],
        "'EXAMPLES": [
          -1,
          180
        ],
        "'CHECKCOLON": [
          -1,
          180
        ],
        "'EXAMPLESCOLON": [
          -1,
          180
        ],
        "'BECAUSE": [
          -1,
          180
        ],
        "'BAR": [
          -1,
          180
        ],
        "'SHARING": [
          -1,
          180
        ],
        "'VAR": [
          -1,
          180
        ],
        "'REC": [
          -1,
          180
        ],
        "'WHEN": [
          -1,
          180
        ],
        "'PLUS": [
          -1,
          180
        ],
        "'DASH": [
          -1,
          180
        ],
        "'SLASH": [
          -1,
          180
        ],
        "'LEQ": [
          -1,
          180
        ],
        "'GEQ": [
          -1,
          180
        ],
        "'EQUALEQUAL": [
          -1,
          180
        ],
        "'SPACESHIP": [
          -1,
          180
        ],
        "'EQUALTILDE": [
          -1,
          180
        ],
        "'NEQ": [
          -1,
          180
        ],
        "'AND": [
          -1,
          180
        ],
        "'OR": [
          -1,
          180
        ],
        "'CARET": [
          -1,
          180
        ],
        "'IS": [
          -1,
          180
        ],
        "'ISEQUALEQUAL": [
          -1,
          180
        ],
        "'ISEQUALTILDE": [
          -1,
          180
        ],
        "'ISSPACESHIP": [
          -1,
          180
        ],
        "'ISROUGHLY": [
          -1,
          180
        ],
        "'ISNOT": [
          -1,
          180
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          180
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          180
        ],
        "'ISNOTSPACESHIP": [
          -1,
          180
        ],
        "'RAISES": [
          -1,
          180
        ],
        "'RAISESOTHER": [
          -1,
          180
        ],
        "'SATISFIES": [
          -1,
          180
        ],
        "'SATISFIESNOT": [
          -1,
          180
        ],
        "'RAISESSATISFIES": [
          -1,
          180
        ],
        "'RAISESVIOLATES": [
          -1,
          180
        ],
        "'RAISESNOT": [
          -1,
          180
        ],
        "'DOTDOTDOT": [
          -1,
          180
        ],
        "'NUMBER": [
          -1,
          180
        ],
        "'RATIONAL": [
          -1,
          180
        ],
        "'ROUGHRATIONAL": [
          -1,
          180
        ],
        "'TRUE": [
          -1,
          180
        ],
        "'FALSE": [
          -1,
          180
        ],
        "'LAM": [
          -1,
          180
        ],
        "'METHOD": [
          -1,
          180
        ],
        "'LBRACK": [
          -1,
          180
        ],
        "'RBRACK": [
          -1,
          180
        ],
        "'TABLE": [
          -1,
          180
        ],
        "'ROW": [
          -1,
          180
        ],
        "'REACTOR": [
          -1,
          180
        ],
        "'BANG": [
          -1,
          180
        ],
        "'IF": [
          -1,
          180
        ],
        "'ELSECOLON": [
          -1,
          180
        ],
        "'ELSEIF": [
          -1,
          180
        ],
        "'ASK": [
          -1,
          180
        ],
        "'THENCOLON": [
          -1,
          180
        ],
        "'CASES": [
          -1,
          180
        ],
        "'FOR": [
          -1,
          180
        ],
        "'TABLE-SELECT": [
          -1,
          180
        ],
        "'TABLE-FILTER": [
          -1,
          180
        ],
        "'USING": [
          -1,
          180
        ],
        "'TABLE-ORDER": [
          -1,
          180
        ],
        "'TABLE-EXTRACT": [
          -1,
          180
        ],
        "'TABLE-UPDATE": [
          -1,
          180
        ],
        "'TABLE-EXTEND": [
          -1,
          180
        ],
        "'OF": [
          -1,
          180
        ],
        "'LOAD-TABLE": [
          -1,
          180
        ],
        "'SOURCECOLON": [
          -1,
          180
        ],
        "'SANITIZE": [
          -1,
          180
        ]
      },
      {
        "$": [
          -1,
          182
        ],
        "'COLON": [
          -1,
          182
        ],
        "'END": [
          -1,
          182
        ],
        "'COMMA": [
          -1,
          182
        ],
        "'NAME": [
          -1,
          182
        ],
        "'PARENNOSPACE": [
          -1,
          182
        ],
        "'STRING": [
          -1,
          182
        ],
        "'RPAREN": [
          -1,
          182
        ],
        "'TYPE": [
          -1,
          182
        ],
        "'DATA": [
          -1,
          182
        ],
        "'TIMES": [
          -1,
          182
        ],
        "'PARENSPACE": [
          -1,
          182
        ],
        "'DOT": [
          -1,
          182
        ],
        "'SPY": [
          -1,
          182
        ],
        "'NEWTYPE": [
          -1,
          182
        ],
        "'LBRACE": [
          -1,
          182
        ],
        "'RBRACE": [
          -1,
          182
        ],
        "'SEMI": [
          -1,
          182
        ],
        "'SHADOW": [
          -1,
          182
        ],
        "'LET": [
          -1,
          182
        ],
        "'BLOCK": [
          -1,
          182
        ],
        "'LETREC": [
          -1,
          182
        ],
        "'TYPE-LET": [
          -1,
          182
        ],
        "'FUN": [
          -1,
          182
        ],
        "'LANGLE": [
          -1,
          182
        ],
        "'LT": [
          -1,
          182
        ],
        "'GT": [
          -1,
          182
        ],
        "'PARENAFTERBRACE": [
          -1,
          182
        ],
        "'WHERE": [
          -1,
          182
        ],
        "'CHECK": [
          -1,
          182
        ],
        "'EXAMPLES": [
          -1,
          182
        ],
        "'CHECKCOLON": [
          -1,
          182
        ],
        "'EXAMPLESCOLON": [
          -1,
          182
        ],
        "'BECAUSE": [
          -1,
          182
        ],
        "'BAR": [
          -1,
          182
        ],
        "'SHARING": [
          -1,
          182
        ],
        "'VAR": [
          -1,
          182
        ],
        "'REC": [
          -1,
          182
        ],
        "'WHEN": [
          -1,
          182
        ],
        "'PLUS": [
          -1,
          182
        ],
        "'DASH": [
          -1,
          182
        ],
        "'SLASH": [
          -1,
          182
        ],
        "'LEQ": [
          -1,
          182
        ],
        "'GEQ": [
          -1,
          182
        ],
        "'EQUALEQUAL": [
          -1,
          182
        ],
        "'SPACESHIP": [
          -1,
          182
        ],
        "'EQUALTILDE": [
          -1,
          182
        ],
        "'NEQ": [
          -1,
          182
        ],
        "'AND": [
          -1,
          182
        ],
        "'OR": [
          -1,
          182
        ],
        "'CARET": [
          -1,
          182
        ],
        "'IS": [
          -1,
          182
        ],
        "'ISEQUALEQUAL": [
          -1,
          182
        ],
        "'ISEQUALTILDE": [
          -1,
          182
        ],
        "'ISSPACESHIP": [
          -1,
          182
        ],
        "'ISROUGHLY": [
          -1,
          182
        ],
        "'ISNOT": [
          -1,
          182
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          182
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          182
        ],
        "'ISNOTSPACESHIP": [
          -1,
          182
        ],
        "'RAISES": [
          -1,
          182
        ],
        "'RAISESOTHER": [
          -1,
          182
        ],
        "'SATISFIES": [
          -1,
          182
        ],
        "'SATISFIESNOT": [
          -1,
          182
        ],
        "'RAISESSATISFIES": [
          -1,
          182
        ],
        "'RAISESVIOLATES": [
          -1,
          182
        ],
        "'RAISESNOT": [
          -1,
          182
        ],
        "'DOTDOTDOT": [
          -1,
          182
        ],
        "'NUMBER": [
          -1,
          182
        ],
        "'RATIONAL": [
          -1,
          182
        ],
        "'ROUGHRATIONAL": [
          -1,
          182
        ],
        "'TRUE": [
          -1,
          182
        ],
        "'FALSE": [
          -1,
          182
        ],
        "'LAM": [
          -1,
          182
        ],
        "'METHOD": [
          -1,
          182
        ],
        "'LBRACK": [
          -1,
          182
        ],
        "'RBRACK": [
          -1,
          182
        ],
        "'TABLE": [
          -1,
          182
        ],
        "'ROW": [
          -1,
          182
        ],
        "'REACTOR": [
          -1,
          182
        ],
        "'BANG": [
          -1,
          182
        ],
        "'IF": [
          -1,
          182
        ],
        "'ELSECOLON": [
          -1,
          182
        ],
        "'ELSEIF": [
          -1,
          182
        ],
        "'ASK": [
          -1,
          182
        ],
        "'THENCOLON": [
          -1,
          182
        ],
        "'CASES": [
          -1,
          182
        ],
        "'FOR": [
          -1,
          182
        ],
        "'TABLE-SELECT": [
          -1,
          182
        ],
        "'TABLE-FILTER": [
          -1,
          182
        ],
        "'USING": [
          -1,
          182
        ],
        "'TABLE-ORDER": [
          -1,
          182
        ],
        "'TABLE-EXTRACT": [
          -1,
          182
        ],
        "'TABLE-UPDATE": [
          -1,
          182
        ],
        "'TABLE-EXTEND": [
          -1,
          182
        ],
        "'OF": [
          -1,
          182
        ],
        "'LOAD-TABLE": [
          -1,
          182
        ],
        "'SOURCECOLON": [
          -1,
          182
        ],
        "'SANITIZE": [
          -1,
          182
        ]
      },
      {
        "$": [
          -1,
          184
        ],
        "'COLON": [
          -1,
          184
        ],
        "'END": [
          -1,
          184
        ],
        "'COMMA": [
          -1,
          184
        ],
        "'NAME": [
          -1,
          184
        ],
        "'PARENNOSPACE": [
          -1,
          184
        ],
        "'STRING": [
          -1,
          184
        ],
        "'RPAREN": [
          -1,
          184
        ],
        "'TYPE": [
          -1,
          184
        ],
        "'DATA": [
          -1,
          184
        ],
        "'TIMES": [
          -1,
          184
        ],
        "'PARENSPACE": [
          -1,
          184
        ],
        "'DOT": [
          -1,
          184
        ],
        "'SPY": [
          -1,
          184
        ],
        "'NEWTYPE": [
          -1,
          184
        ],
        "'LBRACE": [
          -1,
          184
        ],
        "'RBRACE": [
          -1,
          184
        ],
        "'SEMI": [
          -1,
          184
        ],
        "'SHADOW": [
          -1,
          184
        ],
        "'LET": [
          -1,
          184
        ],
        "'BLOCK": [
          -1,
          184
        ],
        "'LETREC": [
          -1,
          184
        ],
        "'TYPE-LET": [
          -1,
          184
        ],
        "'FUN": [
          -1,
          184
        ],
        "'LANGLE": [
          -1,
          184
        ],
        "'LT": [
          -1,
          184
        ],
        "'GT": [
          -1,
          184
        ],
        "'PARENAFTERBRACE": [
          -1,
          184
        ],
        "'WHERE": [
          -1,
          184
        ],
        "'CHECK": [
          -1,
          184
        ],
        "'EXAMPLES": [
          -1,
          184
        ],
        "'CHECKCOLON": [
          -1,
          184
        ],
        "'EXAMPLESCOLON": [
          -1,
          184
        ],
        "'BECAUSE": [
          -1,
          184
        ],
        "'BAR": [
          -1,
          184
        ],
        "'SHARING": [
          -1,
          184
        ],
        "'VAR": [
          -1,
          184
        ],
        "'REC": [
          -1,
          184
        ],
        "'WHEN": [
          -1,
          184
        ],
        "'PLUS": [
          -1,
          184
        ],
        "'DASH": [
          -1,
          184
        ],
        "'SLASH": [
          -1,
          184
        ],
        "'LEQ": [
          -1,
          184
        ],
        "'GEQ": [
          -1,
          184
        ],
        "'EQUALEQUAL": [
          -1,
          184
        ],
        "'SPACESHIP": [
          -1,
          184
        ],
        "'EQUALTILDE": [
          -1,
          184
        ],
        "'NEQ": [
          -1,
          184
        ],
        "'AND": [
          -1,
          184
        ],
        "'OR": [
          -1,
          184
        ],
        "'CARET": [
          -1,
          184
        ],
        "'IS": [
          -1,
          184
        ],
        "'ISEQUALEQUAL": [
          -1,
          184
        ],
        "'ISEQUALTILDE": [
          -1,
          184
        ],
        "'ISSPACESHIP": [
          -1,
          184
        ],
        "'ISROUGHLY": [
          -1,
          184
        ],
        "'ISNOT": [
          -1,
          184
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          184
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          184
        ],
        "'ISNOTSPACESHIP": [
          -1,
          184
        ],
        "'RAISES": [
          -1,
          184
        ],
        "'RAISESOTHER": [
          -1,
          184
        ],
        "'SATISFIES": [
          -1,
          184
        ],
        "'SATISFIESNOT": [
          -1,
          184
        ],
        "'RAISESSATISFIES": [
          -1,
          184
        ],
        "'RAISESVIOLATES": [
          -1,
          184
        ],
        "'RAISESNOT": [
          -1,
          184
        ],
        "'DOTDOTDOT": [
          -1,
          184
        ],
        "'NUMBER": [
          -1,
          184
        ],
        "'RATIONAL": [
          -1,
          184
        ],
        "'ROUGHRATIONAL": [
          -1,
          184
        ],
        "'TRUE": [
          -1,
          184
        ],
        "'FALSE": [
          -1,
          184
        ],
        "'LAM": [
          -1,
          184
        ],
        "'METHOD": [
          -1,
          184
        ],
        "'LBRACK": [
          -1,
          184
        ],
        "'RBRACK": [
          -1,
          184
        ],
        "'TABLE": [
          -1,
          184
        ],
        "'ROW": [
          -1,
          184
        ],
        "'REACTOR": [
          -1,
          184
        ],
        "'BANG": [
          -1,
          184
        ],
        "'IF": [
          -1,
          184
        ],
        "'ELSECOLON": [
          -1,
          184
        ],
        "'ELSEIF": [
          -1,
          184
        ],
        "'ASK": [
          -1,
          184
        ],
        "'THENCOLON": [
          -1,
          184
        ],
        "'CASES": [
          -1,
          184
        ],
        "'FOR": [
          -1,
          184
        ],
        "'TABLE-SELECT": [
          -1,
          184
        ],
        "'TABLE-FILTER": [
          -1,
          184
        ],
        "'USING": [
          -1,
          184
        ],
        "'TABLE-ORDER": [
          -1,
          184
        ],
        "'TABLE-EXTRACT": [
          -1,
          184
        ],
        "'TABLE-UPDATE": [
          -1,
          184
        ],
        "'TABLE-EXTEND": [
          -1,
          184
        ],
        "'OF": [
          -1,
          184
        ],
        "'LOAD-TABLE": [
          -1,
          184
        ],
        "'SOURCECOLON": [
          -1,
          184
        ],
        "'SANITIZE": [
          -1,
          184
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          227
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "$": [
          -1,
          186
        ],
        "'COLON": [
          -1,
          186
        ],
        "'END": [
          -1,
          186
        ],
        "'COMMA": [
          -1,
          186
        ],
        "'NAME": [
          -1,
          186
        ],
        "'PARENNOSPACE": [
          -1,
          186
        ],
        "'STRING": [
          -1,
          186
        ],
        "'RPAREN": [
          -1,
          186
        ],
        "'TYPE": [
          -1,
          186
        ],
        "'DATA": [
          -1,
          186
        ],
        "'TIMES": [
          -1,
          186
        ],
        "'PARENSPACE": [
          -1,
          186
        ],
        "'DOT": [
          -1,
          186
        ],
        "'SPY": [
          -1,
          186
        ],
        "'NEWTYPE": [
          -1,
          186
        ],
        "'LBRACE": [
          -1,
          186
        ],
        "'RBRACE": [
          -1,
          186
        ],
        "'SEMI": [
          -1,
          186
        ],
        "'SHADOW": [
          -1,
          186
        ],
        "'LET": [
          -1,
          186
        ],
        "'BLOCK": [
          -1,
          186
        ],
        "'LETREC": [
          -1,
          186
        ],
        "'TYPE-LET": [
          -1,
          186
        ],
        "'FUN": [
          -1,
          186
        ],
        "'LANGLE": [
          -1,
          186
        ],
        "'LT": [
          -1,
          186
        ],
        "'GT": [
          -1,
          186
        ],
        "'PARENAFTERBRACE": [
          -1,
          186
        ],
        "'WHERE": [
          -1,
          186
        ],
        "'CHECK": [
          -1,
          186
        ],
        "'EXAMPLES": [
          -1,
          186
        ],
        "'CHECKCOLON": [
          -1,
          186
        ],
        "'EXAMPLESCOLON": [
          -1,
          186
        ],
        "'BECAUSE": [
          -1,
          186
        ],
        "'BAR": [
          -1,
          186
        ],
        "'SHARING": [
          -1,
          186
        ],
        "'VAR": [
          -1,
          186
        ],
        "'REC": [
          -1,
          186
        ],
        "'WHEN": [
          -1,
          186
        ],
        "'PLUS": [
          -1,
          186
        ],
        "'DASH": [
          -1,
          186
        ],
        "'SLASH": [
          -1,
          186
        ],
        "'LEQ": [
          -1,
          186
        ],
        "'GEQ": [
          -1,
          186
        ],
        "'EQUALEQUAL": [
          -1,
          186
        ],
        "'SPACESHIP": [
          -1,
          186
        ],
        "'EQUALTILDE": [
          -1,
          186
        ],
        "'NEQ": [
          -1,
          186
        ],
        "'AND": [
          -1,
          186
        ],
        "'OR": [
          -1,
          186
        ],
        "'CARET": [
          -1,
          186
        ],
        "'IS": [
          -1,
          186
        ],
        "'ISEQUALEQUAL": [
          -1,
          186
        ],
        "'ISEQUALTILDE": [
          -1,
          186
        ],
        "'ISSPACESHIP": [
          -1,
          186
        ],
        "'ISROUGHLY": [
          -1,
          186
        ],
        "'ISNOT": [
          -1,
          186
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          186
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          186
        ],
        "'ISNOTSPACESHIP": [
          -1,
          186
        ],
        "'RAISES": [
          -1,
          186
        ],
        "'RAISESOTHER": [
          -1,
          186
        ],
        "'SATISFIES": [
          -1,
          186
        ],
        "'SATISFIESNOT": [
          -1,
          186
        ],
        "'RAISESSATISFIES": [
          -1,
          186
        ],
        "'RAISESVIOLATES": [
          -1,
          186
        ],
        "'RAISESNOT": [
          -1,
          186
        ],
        "'DOTDOTDOT": [
          -1,
          186
        ],
        "'NUMBER": [
          -1,
          186
        ],
        "'RATIONAL": [
          -1,
          186
        ],
        "'ROUGHRATIONAL": [
          -1,
          186
        ],
        "'TRUE": [
          -1,
          186
        ],
        "'FALSE": [
          -1,
          186
        ],
        "'LAM": [
          -1,
          186
        ],
        "'METHOD": [
          -1,
          186
        ],
        "'LBRACK": [
          -1,
          186
        ],
        "'RBRACK": [
          -1,
          186
        ],
        "'TABLE": [
          -1,
          186
        ],
        "'ROW": [
          -1,
          186
        ],
        "'REACTOR": [
          -1,
          186
        ],
        "'BANG": [
          -1,
          186
        ],
        "'IF": [
          -1,
          186
        ],
        "'ELSECOLON": [
          -1,
          186
        ],
        "'ELSEIF": [
          -1,
          186
        ],
        "'ASK": [
          -1,
          186
        ],
        "'THENCOLON": [
          -1,
          186
        ],
        "'CASES": [
          -1,
          186
        ],
        "'FOR": [
          -1,
          186
        ],
        "'TABLE-SELECT": [
          -1,
          186
        ],
        "'TABLE-FILTER": [
          -1,
          186
        ],
        "'USING": [
          -1,
          186
        ],
        "'TABLE-ORDER": [
          -1,
          186
        ],
        "'TABLE-EXTRACT": [
          -1,
          186
        ],
        "'TABLE-UPDATE": [
          -1,
          186
        ],
        "'TABLE-EXTEND": [
          -1,
          186
        ],
        "'OF": [
          -1,
          186
        ],
        "'LOAD-TABLE": [
          -1,
          186
        ],
        "'SOURCECOLON": [
          -1,
          186
        ],
        "'SANITIZE": [
          -1,
          186
        ]
      },
      {
        "$": [
          -1,
          188
        ],
        "'COLON": [
          -1,
          188
        ],
        "'END": [
          -1,
          188
        ],
        "'COMMA": [
          -1,
          188
        ],
        "'NAME": [
          -1,
          188
        ],
        "'PARENNOSPACE": [
          -1,
          188
        ],
        "'STRING": [
          -1,
          188
        ],
        "'RPAREN": [
          -1,
          188
        ],
        "'TYPE": [
          -1,
          188
        ],
        "'DATA": [
          -1,
          188
        ],
        "'TIMES": [
          -1,
          188
        ],
        "'PARENSPACE": [
          -1,
          188
        ],
        "'DOT": [
          -1,
          188
        ],
        "'SPY": [
          -1,
          188
        ],
        "'NEWTYPE": [
          -1,
          188
        ],
        "'LBRACE": [
          -1,
          188
        ],
        "'RBRACE": [
          -1,
          188
        ],
        "'SEMI": [
          -1,
          188
        ],
        "'SHADOW": [
          -1,
          188
        ],
        "'LET": [
          -1,
          188
        ],
        "'BLOCK": [
          -1,
          188
        ],
        "'LETREC": [
          -1,
          188
        ],
        "'TYPE-LET": [
          -1,
          188
        ],
        "'FUN": [
          -1,
          188
        ],
        "'LANGLE": [
          -1,
          188
        ],
        "'LT": [
          -1,
          188
        ],
        "'GT": [
          -1,
          188
        ],
        "'PARENAFTERBRACE": [
          -1,
          188
        ],
        "'WHERE": [
          -1,
          188
        ],
        "'CHECK": [
          -1,
          188
        ],
        "'EXAMPLES": [
          -1,
          188
        ],
        "'CHECKCOLON": [
          -1,
          188
        ],
        "'EXAMPLESCOLON": [
          -1,
          188
        ],
        "'BECAUSE": [
          -1,
          188
        ],
        "'BAR": [
          -1,
          188
        ],
        "'SHARING": [
          -1,
          188
        ],
        "'VAR": [
          -1,
          188
        ],
        "'REC": [
          -1,
          188
        ],
        "'WHEN": [
          -1,
          188
        ],
        "'PLUS": [
          -1,
          188
        ],
        "'DASH": [
          -1,
          188
        ],
        "'SLASH": [
          -1,
          188
        ],
        "'LEQ": [
          -1,
          188
        ],
        "'GEQ": [
          -1,
          188
        ],
        "'EQUALEQUAL": [
          -1,
          188
        ],
        "'SPACESHIP": [
          -1,
          188
        ],
        "'EQUALTILDE": [
          -1,
          188
        ],
        "'NEQ": [
          -1,
          188
        ],
        "'AND": [
          -1,
          188
        ],
        "'OR": [
          -1,
          188
        ],
        "'CARET": [
          -1,
          188
        ],
        "'IS": [
          -1,
          188
        ],
        "'ISEQUALEQUAL": [
          -1,
          188
        ],
        "'ISEQUALTILDE": [
          -1,
          188
        ],
        "'ISSPACESHIP": [
          -1,
          188
        ],
        "'ISROUGHLY": [
          -1,
          188
        ],
        "'ISNOT": [
          -1,
          188
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          188
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          188
        ],
        "'ISNOTSPACESHIP": [
          -1,
          188
        ],
        "'RAISES": [
          -1,
          188
        ],
        "'RAISESOTHER": [
          -1,
          188
        ],
        "'SATISFIES": [
          -1,
          188
        ],
        "'SATISFIESNOT": [
          -1,
          188
        ],
        "'RAISESSATISFIES": [
          -1,
          188
        ],
        "'RAISESVIOLATES": [
          -1,
          188
        ],
        "'RAISESNOT": [
          -1,
          188
        ],
        "'DOTDOTDOT": [
          -1,
          188
        ],
        "'NUMBER": [
          -1,
          188
        ],
        "'RATIONAL": [
          -1,
          188
        ],
        "'ROUGHRATIONAL": [
          -1,
          188
        ],
        "'TRUE": [
          -1,
          188
        ],
        "'FALSE": [
          -1,
          188
        ],
        "'LAM": [
          -1,
          188
        ],
        "'METHOD": [
          -1,
          188
        ],
        "'LBRACK": [
          -1,
          188
        ],
        "'RBRACK": [
          -1,
          188
        ],
        "'TABLE": [
          -1,
          188
        ],
        "'ROW": [
          -1,
          188
        ],
        "'REACTOR": [
          -1,
          188
        ],
        "'BANG": [
          -1,
          188
        ],
        "'IF": [
          -1,
          188
        ],
        "'ELSECOLON": [
          -1,
          188
        ],
        "'ELSEIF": [
          -1,
          188
        ],
        "'ASK": [
          -1,
          188
        ],
        "'THENCOLON": [
          -1,
          188
        ],
        "'CASES": [
          -1,
          188
        ],
        "'FOR": [
          -1,
          188
        ],
        "'TABLE-SELECT": [
          -1,
          188
        ],
        "'TABLE-FILTER": [
          -1,
          188
        ],
        "'USING": [
          -1,
          188
        ],
        "'TABLE-ORDER": [
          -1,
          188
        ],
        "'TABLE-EXTRACT": [
          -1,
          188
        ],
        "'TABLE-UPDATE": [
          -1,
          188
        ],
        "'TABLE-EXTEND": [
          -1,
          188
        ],
        "'OF": [
          -1,
          188
        ],
        "'LOAD-TABLE": [
          -1,
          188
        ],
        "'SOURCECOLON": [
          -1,
          188
        ],
        "'SANITIZE": [
          -1,
          188
        ]
      },
      {
        "$": [
          -1,
          190
        ],
        "'COLON": [
          -1,
          190
        ],
        "'END": [
          -1,
          190
        ],
        "'COMMA": [
          -1,
          190
        ],
        "'NAME": [
          -1,
          190
        ],
        "'PARENNOSPACE": [
          -1,
          190
        ],
        "'STRING": [
          -1,
          190
        ],
        "'RPAREN": [
          -1,
          190
        ],
        "'TYPE": [
          -1,
          190
        ],
        "'DATA": [
          -1,
          190
        ],
        "'TIMES": [
          -1,
          190
        ],
        "'PARENSPACE": [
          -1,
          190
        ],
        "'DOT": [
          -1,
          190
        ],
        "'SPY": [
          -1,
          190
        ],
        "'NEWTYPE": [
          -1,
          190
        ],
        "'LBRACE": [
          -1,
          190
        ],
        "'RBRACE": [
          -1,
          190
        ],
        "'SEMI": [
          -1,
          190
        ],
        "'SHADOW": [
          -1,
          190
        ],
        "'LET": [
          -1,
          190
        ],
        "'BLOCK": [
          -1,
          190
        ],
        "'LETREC": [
          -1,
          190
        ],
        "'TYPE-LET": [
          -1,
          190
        ],
        "'FUN": [
          -1,
          190
        ],
        "'LANGLE": [
          -1,
          190
        ],
        "'LT": [
          -1,
          190
        ],
        "'GT": [
          -1,
          190
        ],
        "'PARENAFTERBRACE": [
          -1,
          190
        ],
        "'WHERE": [
          -1,
          190
        ],
        "'CHECK": [
          -1,
          190
        ],
        "'EXAMPLES": [
          -1,
          190
        ],
        "'CHECKCOLON": [
          -1,
          190
        ],
        "'EXAMPLESCOLON": [
          -1,
          190
        ],
        "'BECAUSE": [
          -1,
          190
        ],
        "'BAR": [
          -1,
          190
        ],
        "'SHARING": [
          -1,
          190
        ],
        "'VAR": [
          -1,
          190
        ],
        "'REC": [
          -1,
          190
        ],
        "'WHEN": [
          -1,
          190
        ],
        "'PLUS": [
          -1,
          190
        ],
        "'DASH": [
          -1,
          190
        ],
        "'SLASH": [
          -1,
          190
        ],
        "'LEQ": [
          -1,
          190
        ],
        "'GEQ": [
          -1,
          190
        ],
        "'EQUALEQUAL": [
          -1,
          190
        ],
        "'SPACESHIP": [
          -1,
          190
        ],
        "'EQUALTILDE": [
          -1,
          190
        ],
        "'NEQ": [
          -1,
          190
        ],
        "'AND": [
          -1,
          190
        ],
        "'OR": [
          -1,
          190
        ],
        "'CARET": [
          -1,
          190
        ],
        "'IS": [
          -1,
          190
        ],
        "'ISEQUALEQUAL": [
          -1,
          190
        ],
        "'ISEQUALTILDE": [
          -1,
          190
        ],
        "'ISSPACESHIP": [
          -1,
          190
        ],
        "'ISROUGHLY": [
          -1,
          190
        ],
        "'ISNOT": [
          -1,
          190
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          190
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          190
        ],
        "'ISNOTSPACESHIP": [
          -1,
          190
        ],
        "'RAISES": [
          -1,
          190
        ],
        "'RAISESOTHER": [
          -1,
          190
        ],
        "'SATISFIES": [
          -1,
          190
        ],
        "'SATISFIESNOT": [
          -1,
          190
        ],
        "'RAISESSATISFIES": [
          -1,
          190
        ],
        "'RAISESVIOLATES": [
          -1,
          190
        ],
        "'RAISESNOT": [
          -1,
          190
        ],
        "'DOTDOTDOT": [
          -1,
          190
        ],
        "'NUMBER": [
          -1,
          190
        ],
        "'RATIONAL": [
          -1,
          190
        ],
        "'ROUGHRATIONAL": [
          -1,
          190
        ],
        "'TRUE": [
          -1,
          190
        ],
        "'FALSE": [
          -1,
          190
        ],
        "'LAM": [
          -1,
          190
        ],
        "'METHOD": [
          -1,
          190
        ],
        "'LBRACK": [
          -1,
          190
        ],
        "'RBRACK": [
          -1,
          190
        ],
        "'TABLE": [
          -1,
          190
        ],
        "'ROW": [
          -1,
          190
        ],
        "'REACTOR": [
          -1,
          190
        ],
        "'BANG": [
          -1,
          190
        ],
        "'IF": [
          -1,
          190
        ],
        "'ELSECOLON": [
          -1,
          190
        ],
        "'ELSEIF": [
          -1,
          190
        ],
        "'ASK": [
          -1,
          190
        ],
        "'THENCOLON": [
          -1,
          190
        ],
        "'CASES": [
          -1,
          190
        ],
        "'FOR": [
          -1,
          190
        ],
        "'TABLE-SELECT": [
          -1,
          190
        ],
        "'TABLE-FILTER": [
          -1,
          190
        ],
        "'USING": [
          -1,
          190
        ],
        "'TABLE-ORDER": [
          -1,
          190
        ],
        "'TABLE-EXTRACT": [
          -1,
          190
        ],
        "'TABLE-UPDATE": [
          -1,
          190
        ],
        "'TABLE-EXTEND": [
          -1,
          190
        ],
        "'OF": [
          -1,
          190
        ],
        "'LOAD-TABLE": [
          -1,
          190
        ],
        "'SOURCECOLON": [
          -1,
          190
        ],
        "'SANITIZE": [
          -1,
          190
        ]
      },
      {
        "$": [
          -1,
          192
        ],
        "'COLON": [
          -1,
          192
        ],
        "'END": [
          -1,
          192
        ],
        "'COMMA": [
          -1,
          192
        ],
        "'NAME": [
          -1,
          192
        ],
        "'PARENNOSPACE": [
          -1,
          192
        ],
        "'STRING": [
          -1,
          192
        ],
        "'RPAREN": [
          -1,
          192
        ],
        "'TYPE": [
          -1,
          192
        ],
        "'DATA": [
          -1,
          192
        ],
        "'TIMES": [
          -1,
          192
        ],
        "'PARENSPACE": [
          -1,
          192
        ],
        "'DOT": [
          -1,
          192
        ],
        "'SPY": [
          -1,
          192
        ],
        "'NEWTYPE": [
          -1,
          192
        ],
        "'LBRACE": [
          -1,
          192
        ],
        "'RBRACE": [
          -1,
          192
        ],
        "'SEMI": [
          -1,
          192
        ],
        "'SHADOW": [
          -1,
          192
        ],
        "'LET": [
          -1,
          192
        ],
        "'BLOCK": [
          -1,
          192
        ],
        "'LETREC": [
          -1,
          192
        ],
        "'TYPE-LET": [
          -1,
          192
        ],
        "'FUN": [
          -1,
          192
        ],
        "'LANGLE": [
          -1,
          192
        ],
        "'LT": [
          -1,
          192
        ],
        "'GT": [
          -1,
          192
        ],
        "'PARENAFTERBRACE": [
          -1,
          192
        ],
        "'WHERE": [
          -1,
          192
        ],
        "'CHECK": [
          -1,
          192
        ],
        "'EXAMPLES": [
          -1,
          192
        ],
        "'CHECKCOLON": [
          -1,
          192
        ],
        "'EXAMPLESCOLON": [
          -1,
          192
        ],
        "'BECAUSE": [
          -1,
          192
        ],
        "'BAR": [
          -1,
          192
        ],
        "'SHARING": [
          -1,
          192
        ],
        "'VAR": [
          -1,
          192
        ],
        "'REC": [
          -1,
          192
        ],
        "'WHEN": [
          -1,
          192
        ],
        "'PLUS": [
          -1,
          192
        ],
        "'DASH": [
          -1,
          192
        ],
        "'SLASH": [
          -1,
          192
        ],
        "'LEQ": [
          -1,
          192
        ],
        "'GEQ": [
          -1,
          192
        ],
        "'EQUALEQUAL": [
          -1,
          192
        ],
        "'SPACESHIP": [
          -1,
          192
        ],
        "'EQUALTILDE": [
          -1,
          192
        ],
        "'NEQ": [
          -1,
          192
        ],
        "'AND": [
          -1,
          192
        ],
        "'OR": [
          -1,
          192
        ],
        "'CARET": [
          -1,
          192
        ],
        "'IS": [
          -1,
          192
        ],
        "'ISEQUALEQUAL": [
          -1,
          192
        ],
        "'ISEQUALTILDE": [
          -1,
          192
        ],
        "'ISSPACESHIP": [
          -1,
          192
        ],
        "'ISROUGHLY": [
          -1,
          192
        ],
        "'ISNOT": [
          -1,
          192
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          192
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          192
        ],
        "'ISNOTSPACESHIP": [
          -1,
          192
        ],
        "'RAISES": [
          -1,
          192
        ],
        "'RAISESOTHER": [
          -1,
          192
        ],
        "'SATISFIES": [
          -1,
          192
        ],
        "'SATISFIESNOT": [
          -1,
          192
        ],
        "'RAISESSATISFIES": [
          -1,
          192
        ],
        "'RAISESVIOLATES": [
          -1,
          192
        ],
        "'RAISESNOT": [
          -1,
          192
        ],
        "'DOTDOTDOT": [
          -1,
          192
        ],
        "'NUMBER": [
          -1,
          192
        ],
        "'RATIONAL": [
          -1,
          192
        ],
        "'ROUGHRATIONAL": [
          -1,
          192
        ],
        "'TRUE": [
          -1,
          192
        ],
        "'FALSE": [
          -1,
          192
        ],
        "'LAM": [
          -1,
          192
        ],
        "'METHOD": [
          -1,
          192
        ],
        "'LBRACK": [
          -1,
          192
        ],
        "'RBRACK": [
          -1,
          192
        ],
        "'TABLE": [
          -1,
          192
        ],
        "'ROW": [
          -1,
          192
        ],
        "'REACTOR": [
          -1,
          192
        ],
        "'BANG": [
          -1,
          192
        ],
        "'IF": [
          -1,
          192
        ],
        "'ELSECOLON": [
          -1,
          192
        ],
        "'ELSEIF": [
          -1,
          192
        ],
        "'ASK": [
          -1,
          192
        ],
        "'THENCOLON": [
          -1,
          192
        ],
        "'CASES": [
          -1,
          192
        ],
        "'FOR": [
          -1,
          192
        ],
        "'TABLE-SELECT": [
          -1,
          192
        ],
        "'TABLE-FILTER": [
          -1,
          192
        ],
        "'USING": [
          -1,
          192
        ],
        "'TABLE-ORDER": [
          -1,
          192
        ],
        "'TABLE-EXTRACT": [
          -1,
          192
        ],
        "'TABLE-UPDATE": [
          -1,
          192
        ],
        "'TABLE-EXTEND": [
          -1,
          192
        ],
        "'OF": [
          -1,
          192
        ],
        "'LOAD-TABLE": [
          -1,
          192
        ],
        "'SOURCECOLON": [
          -1,
          192
        ],
        "'SANITIZE": [
          -1,
          192
        ]
      },
      {
        "$": [
          -1,
          194
        ],
        "'COLON": [
          -1,
          194
        ],
        "'END": [
          -1,
          194
        ],
        "'COMMA": [
          -1,
          194
        ],
        "'NAME": [
          -1,
          194
        ],
        "'PARENNOSPACE": [
          -1,
          194
        ],
        "'STRING": [
          -1,
          194
        ],
        "'RPAREN": [
          -1,
          194
        ],
        "'TYPE": [
          -1,
          194
        ],
        "'DATA": [
          -1,
          194
        ],
        "'TIMES": [
          -1,
          194
        ],
        "'PARENSPACE": [
          -1,
          194
        ],
        "'DOT": [
          -1,
          194
        ],
        "'SPY": [
          -1,
          194
        ],
        "'NEWTYPE": [
          -1,
          194
        ],
        "'LBRACE": [
          -1,
          194
        ],
        "'RBRACE": [
          -1,
          194
        ],
        "'SEMI": [
          -1,
          194
        ],
        "'SHADOW": [
          -1,
          194
        ],
        "'LET": [
          -1,
          194
        ],
        "'BLOCK": [
          -1,
          194
        ],
        "'LETREC": [
          -1,
          194
        ],
        "'TYPE-LET": [
          -1,
          194
        ],
        "'FUN": [
          -1,
          194
        ],
        "'LANGLE": [
          -1,
          194
        ],
        "'LT": [
          -1,
          194
        ],
        "'GT": [
          -1,
          194
        ],
        "'PARENAFTERBRACE": [
          -1,
          194
        ],
        "'WHERE": [
          -1,
          194
        ],
        "'CHECK": [
          -1,
          194
        ],
        "'EXAMPLES": [
          -1,
          194
        ],
        "'CHECKCOLON": [
          -1,
          194
        ],
        "'EXAMPLESCOLON": [
          -1,
          194
        ],
        "'BECAUSE": [
          -1,
          194
        ],
        "'BAR": [
          -1,
          194
        ],
        "'SHARING": [
          -1,
          194
        ],
        "'VAR": [
          -1,
          194
        ],
        "'REC": [
          -1,
          194
        ],
        "'WHEN": [
          -1,
          194
        ],
        "'PLUS": [
          -1,
          194
        ],
        "'DASH": [
          -1,
          194
        ],
        "'SLASH": [
          -1,
          194
        ],
        "'LEQ": [
          -1,
          194
        ],
        "'GEQ": [
          -1,
          194
        ],
        "'EQUALEQUAL": [
          -1,
          194
        ],
        "'SPACESHIP": [
          -1,
          194
        ],
        "'EQUALTILDE": [
          -1,
          194
        ],
        "'NEQ": [
          -1,
          194
        ],
        "'AND": [
          -1,
          194
        ],
        "'OR": [
          -1,
          194
        ],
        "'CARET": [
          -1,
          194
        ],
        "'IS": [
          -1,
          194
        ],
        "'ISEQUALEQUAL": [
          -1,
          194
        ],
        "'ISEQUALTILDE": [
          -1,
          194
        ],
        "'ISSPACESHIP": [
          -1,
          194
        ],
        "'ISROUGHLY": [
          -1,
          194
        ],
        "'ISNOT": [
          -1,
          194
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          194
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          194
        ],
        "'ISNOTSPACESHIP": [
          -1,
          194
        ],
        "'RAISES": [
          -1,
          194
        ],
        "'RAISESOTHER": [
          -1,
          194
        ],
        "'SATISFIES": [
          -1,
          194
        ],
        "'SATISFIESNOT": [
          -1,
          194
        ],
        "'RAISESSATISFIES": [
          -1,
          194
        ],
        "'RAISESVIOLATES": [
          -1,
          194
        ],
        "'RAISESNOT": [
          -1,
          194
        ],
        "'DOTDOTDOT": [
          -1,
          194
        ],
        "'NUMBER": [
          -1,
          194
        ],
        "'RATIONAL": [
          -1,
          194
        ],
        "'ROUGHRATIONAL": [
          -1,
          194
        ],
        "'TRUE": [
          -1,
          194
        ],
        "'FALSE": [
          -1,
          194
        ],
        "'LAM": [
          -1,
          194
        ],
        "'METHOD": [
          -1,
          194
        ],
        "'LBRACK": [
          -1,
          194
        ],
        "'RBRACK": [
          -1,
          194
        ],
        "'TABLE": [
          -1,
          194
        ],
        "'ROW": [
          -1,
          194
        ],
        "'REACTOR": [
          -1,
          194
        ],
        "'BANG": [
          -1,
          194
        ],
        "'IF": [
          -1,
          194
        ],
        "'ELSECOLON": [
          -1,
          194
        ],
        "'ELSEIF": [
          -1,
          194
        ],
        "'ASK": [
          -1,
          194
        ],
        "'THENCOLON": [
          -1,
          194
        ],
        "'CASES": [
          -1,
          194
        ],
        "'FOR": [
          -1,
          194
        ],
        "'TABLE-SELECT": [
          -1,
          194
        ],
        "'TABLE-FILTER": [
          -1,
          194
        ],
        "'USING": [
          -1,
          194
        ],
        "'TABLE-ORDER": [
          -1,
          194
        ],
        "'TABLE-EXTRACT": [
          -1,
          194
        ],
        "'TABLE-UPDATE": [
          -1,
          194
        ],
        "'TABLE-EXTEND": [
          -1,
          194
        ],
        "'OF": [
          -1,
          194
        ],
        "'LOAD-TABLE": [
          -1,
          194
        ],
        "'SOURCECOLON": [
          -1,
          194
        ],
        "'SANITIZE": [
          -1,
          194
        ]
      },
      {
        "$": [
          -1,
          196
        ],
        "'COLON": [
          -1,
          196
        ],
        "'END": [
          -1,
          196
        ],
        "'COMMA": [
          -1,
          196
        ],
        "'NAME": [
          -1,
          196
        ],
        "'PARENNOSPACE": [
          -1,
          196
        ],
        "'STRING": [
          -1,
          196
        ],
        "'RPAREN": [
          -1,
          196
        ],
        "'TYPE": [
          -1,
          196
        ],
        "'DATA": [
          -1,
          196
        ],
        "'TIMES": [
          -1,
          196
        ],
        "'PARENSPACE": [
          -1,
          196
        ],
        "'DOT": [
          -1,
          196
        ],
        "'SPY": [
          -1,
          196
        ],
        "'NEWTYPE": [
          -1,
          196
        ],
        "'LBRACE": [
          -1,
          196
        ],
        "'RBRACE": [
          -1,
          196
        ],
        "'SEMI": [
          -1,
          196
        ],
        "'SHADOW": [
          -1,
          196
        ],
        "'LET": [
          -1,
          196
        ],
        "'BLOCK": [
          -1,
          196
        ],
        "'LETREC": [
          -1,
          196
        ],
        "'TYPE-LET": [
          -1,
          196
        ],
        "'FUN": [
          -1,
          196
        ],
        "'LANGLE": [
          -1,
          196
        ],
        "'LT": [
          -1,
          196
        ],
        "'GT": [
          -1,
          196
        ],
        "'PARENAFTERBRACE": [
          -1,
          196
        ],
        "'WHERE": [
          -1,
          196
        ],
        "'CHECK": [
          -1,
          196
        ],
        "'EXAMPLES": [
          -1,
          196
        ],
        "'CHECKCOLON": [
          -1,
          196
        ],
        "'EXAMPLESCOLON": [
          -1,
          196
        ],
        "'BECAUSE": [
          -1,
          196
        ],
        "'BAR": [
          -1,
          196
        ],
        "'SHARING": [
          -1,
          196
        ],
        "'VAR": [
          -1,
          196
        ],
        "'REC": [
          -1,
          196
        ],
        "'WHEN": [
          -1,
          196
        ],
        "'PLUS": [
          -1,
          196
        ],
        "'DASH": [
          -1,
          196
        ],
        "'SLASH": [
          -1,
          196
        ],
        "'LEQ": [
          -1,
          196
        ],
        "'GEQ": [
          -1,
          196
        ],
        "'EQUALEQUAL": [
          -1,
          196
        ],
        "'SPACESHIP": [
          -1,
          196
        ],
        "'EQUALTILDE": [
          -1,
          196
        ],
        "'NEQ": [
          -1,
          196
        ],
        "'AND": [
          -1,
          196
        ],
        "'OR": [
          -1,
          196
        ],
        "'CARET": [
          -1,
          196
        ],
        "'IS": [
          -1,
          196
        ],
        "'ISEQUALEQUAL": [
          -1,
          196
        ],
        "'ISEQUALTILDE": [
          -1,
          196
        ],
        "'ISSPACESHIP": [
          -1,
          196
        ],
        "'ISROUGHLY": [
          -1,
          196
        ],
        "'ISNOT": [
          -1,
          196
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          196
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          196
        ],
        "'ISNOTSPACESHIP": [
          -1,
          196
        ],
        "'RAISES": [
          -1,
          196
        ],
        "'RAISESOTHER": [
          -1,
          196
        ],
        "'SATISFIES": [
          -1,
          196
        ],
        "'SATISFIESNOT": [
          -1,
          196
        ],
        "'RAISESSATISFIES": [
          -1,
          196
        ],
        "'RAISESVIOLATES": [
          -1,
          196
        ],
        "'RAISESNOT": [
          -1,
          196
        ],
        "'DOTDOTDOT": [
          -1,
          196
        ],
        "'NUMBER": [
          -1,
          196
        ],
        "'RATIONAL": [
          -1,
          196
        ],
        "'ROUGHRATIONAL": [
          -1,
          196
        ],
        "'TRUE": [
          -1,
          196
        ],
        "'FALSE": [
          -1,
          196
        ],
        "'LAM": [
          -1,
          196
        ],
        "'METHOD": [
          -1,
          196
        ],
        "'LBRACK": [
          -1,
          196
        ],
        "'RBRACK": [
          -1,
          196
        ],
        "'TABLE": [
          -1,
          196
        ],
        "'ROW": [
          -1,
          196
        ],
        "'REACTOR": [
          -1,
          196
        ],
        "'BANG": [
          -1,
          196
        ],
        "'IF": [
          -1,
          196
        ],
        "'ELSECOLON": [
          -1,
          196
        ],
        "'ELSEIF": [
          -1,
          196
        ],
        "'ASK": [
          -1,
          196
        ],
        "'THENCOLON": [
          -1,
          196
        ],
        "'CASES": [
          -1,
          196
        ],
        "'FOR": [
          -1,
          196
        ],
        "'TABLE-SELECT": [
          -1,
          196
        ],
        "'TABLE-FILTER": [
          -1,
          196
        ],
        "'USING": [
          -1,
          196
        ],
        "'TABLE-ORDER": [
          -1,
          196
        ],
        "'TABLE-EXTRACT": [
          -1,
          196
        ],
        "'TABLE-UPDATE": [
          -1,
          196
        ],
        "'TABLE-EXTEND": [
          -1,
          196
        ],
        "'OF": [
          -1,
          196
        ],
        "'LOAD-TABLE": [
          -1,
          196
        ],
        "'SOURCECOLON": [
          -1,
          196
        ],
        "'SANITIZE": [
          -1,
          196
        ]
      },
      {
        "$": [
          -1,
          198
        ],
        "'COLON": [
          -1,
          198
        ],
        "'END": [
          -1,
          198
        ],
        "'COMMA": [
          -1,
          198
        ],
        "'NAME": [
          -1,
          198
        ],
        "'PARENNOSPACE": [
          -1,
          198
        ],
        "'STRING": [
          -1,
          198
        ],
        "'RPAREN": [
          -1,
          198
        ],
        "'TYPE": [
          -1,
          198
        ],
        "'DATA": [
          -1,
          198
        ],
        "'TIMES": [
          -1,
          198
        ],
        "'PARENSPACE": [
          -1,
          198
        ],
        "'DOT": [
          -1,
          198
        ],
        "'SPY": [
          -1,
          198
        ],
        "'NEWTYPE": [
          -1,
          198
        ],
        "'LBRACE": [
          -1,
          198
        ],
        "'RBRACE": [
          -1,
          198
        ],
        "'SEMI": [
          -1,
          198
        ],
        "'SHADOW": [
          -1,
          198
        ],
        "'LET": [
          -1,
          198
        ],
        "'BLOCK": [
          -1,
          198
        ],
        "'LETREC": [
          -1,
          198
        ],
        "'TYPE-LET": [
          -1,
          198
        ],
        "'FUN": [
          -1,
          198
        ],
        "'LANGLE": [
          -1,
          198
        ],
        "'LT": [
          -1,
          198
        ],
        "'GT": [
          -1,
          198
        ],
        "'PARENAFTERBRACE": [
          -1,
          198
        ],
        "'WHERE": [
          -1,
          198
        ],
        "'CHECK": [
          -1,
          198
        ],
        "'EXAMPLES": [
          -1,
          198
        ],
        "'CHECKCOLON": [
          -1,
          198
        ],
        "'EXAMPLESCOLON": [
          -1,
          198
        ],
        "'BECAUSE": [
          -1,
          198
        ],
        "'BAR": [
          -1,
          198
        ],
        "'SHARING": [
          -1,
          198
        ],
        "'VAR": [
          -1,
          198
        ],
        "'REC": [
          -1,
          198
        ],
        "'WHEN": [
          -1,
          198
        ],
        "'PLUS": [
          -1,
          198
        ],
        "'DASH": [
          -1,
          198
        ],
        "'SLASH": [
          -1,
          198
        ],
        "'LEQ": [
          -1,
          198
        ],
        "'GEQ": [
          -1,
          198
        ],
        "'EQUALEQUAL": [
          -1,
          198
        ],
        "'SPACESHIP": [
          -1,
          198
        ],
        "'EQUALTILDE": [
          -1,
          198
        ],
        "'NEQ": [
          -1,
          198
        ],
        "'AND": [
          -1,
          198
        ],
        "'OR": [
          -1,
          198
        ],
        "'CARET": [
          -1,
          198
        ],
        "'IS": [
          -1,
          198
        ],
        "'ISEQUALEQUAL": [
          -1,
          198
        ],
        "'ISEQUALTILDE": [
          -1,
          198
        ],
        "'ISSPACESHIP": [
          -1,
          198
        ],
        "'ISROUGHLY": [
          -1,
          198
        ],
        "'ISNOT": [
          -1,
          198
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          198
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          198
        ],
        "'ISNOTSPACESHIP": [
          -1,
          198
        ],
        "'RAISES": [
          -1,
          198
        ],
        "'RAISESOTHER": [
          -1,
          198
        ],
        "'SATISFIES": [
          -1,
          198
        ],
        "'SATISFIESNOT": [
          -1,
          198
        ],
        "'RAISESSATISFIES": [
          -1,
          198
        ],
        "'RAISESVIOLATES": [
          -1,
          198
        ],
        "'RAISESNOT": [
          -1,
          198
        ],
        "'DOTDOTDOT": [
          -1,
          198
        ],
        "'NUMBER": [
          -1,
          198
        ],
        "'RATIONAL": [
          -1,
          198
        ],
        "'ROUGHRATIONAL": [
          -1,
          198
        ],
        "'TRUE": [
          -1,
          198
        ],
        "'FALSE": [
          -1,
          198
        ],
        "'LAM": [
          -1,
          198
        ],
        "'METHOD": [
          -1,
          198
        ],
        "'LBRACK": [
          -1,
          198
        ],
        "'RBRACK": [
          -1,
          198
        ],
        "'TABLE": [
          -1,
          198
        ],
        "'ROW": [
          -1,
          198
        ],
        "'REACTOR": [
          -1,
          198
        ],
        "'BANG": [
          -1,
          198
        ],
        "'IF": [
          -1,
          198
        ],
        "'ELSECOLON": [
          -1,
          198
        ],
        "'ELSEIF": [
          -1,
          198
        ],
        "'ASK": [
          -1,
          198
        ],
        "'THENCOLON": [
          -1,
          198
        ],
        "'CASES": [
          -1,
          198
        ],
        "'FOR": [
          -1,
          198
        ],
        "'TABLE-SELECT": [
          -1,
          198
        ],
        "'TABLE-FILTER": [
          -1,
          198
        ],
        "'USING": [
          -1,
          198
        ],
        "'TABLE-ORDER": [
          -1,
          198
        ],
        "'TABLE-EXTRACT": [
          -1,
          198
        ],
        "'TABLE-UPDATE": [
          -1,
          198
        ],
        "'TABLE-EXTEND": [
          -1,
          198
        ],
        "'OF": [
          -1,
          198
        ],
        "'LOAD-TABLE": [
          -1,
          198
        ],
        "'SOURCECOLON": [
          -1,
          198
        ],
        "'SANITIZE": [
          -1,
          198
        ]
      },
      {
        "$": [
          -1,
          200
        ],
        "'COLON": [
          -1,
          200
        ],
        "'END": [
          -1,
          200
        ],
        "'COMMA": [
          -1,
          200
        ],
        "'NAME": [
          -1,
          200
        ],
        "'PARENNOSPACE": [
          -1,
          200
        ],
        "'STRING": [
          -1,
          200
        ],
        "'RPAREN": [
          -1,
          200
        ],
        "'TYPE": [
          -1,
          200
        ],
        "'DATA": [
          -1,
          200
        ],
        "'TIMES": [
          -1,
          200
        ],
        "'PARENSPACE": [
          -1,
          200
        ],
        "'DOT": [
          -1,
          200
        ],
        "'SPY": [
          -1,
          200
        ],
        "'NEWTYPE": [
          -1,
          200
        ],
        "'LBRACE": [
          -1,
          200
        ],
        "'RBRACE": [
          -1,
          200
        ],
        "'SEMI": [
          -1,
          200
        ],
        "'SHADOW": [
          -1,
          200
        ],
        "'LET": [
          -1,
          200
        ],
        "'BLOCK": [
          -1,
          200
        ],
        "'LETREC": [
          -1,
          200
        ],
        "'TYPE-LET": [
          -1,
          200
        ],
        "'FUN": [
          -1,
          200
        ],
        "'LANGLE": [
          -1,
          200
        ],
        "'LT": [
          -1,
          200
        ],
        "'GT": [
          -1,
          200
        ],
        "'PARENAFTERBRACE": [
          -1,
          200
        ],
        "'WHERE": [
          -1,
          200
        ],
        "'CHECK": [
          -1,
          200
        ],
        "'EXAMPLES": [
          -1,
          200
        ],
        "'CHECKCOLON": [
          -1,
          200
        ],
        "'EXAMPLESCOLON": [
          -1,
          200
        ],
        "'BECAUSE": [
          -1,
          200
        ],
        "'BAR": [
          -1,
          200
        ],
        "'SHARING": [
          -1,
          200
        ],
        "'VAR": [
          -1,
          200
        ],
        "'REC": [
          -1,
          200
        ],
        "'WHEN": [
          -1,
          200
        ],
        "'PLUS": [
          -1,
          200
        ],
        "'DASH": [
          -1,
          200
        ],
        "'SLASH": [
          -1,
          200
        ],
        "'LEQ": [
          -1,
          200
        ],
        "'GEQ": [
          -1,
          200
        ],
        "'EQUALEQUAL": [
          -1,
          200
        ],
        "'SPACESHIP": [
          -1,
          200
        ],
        "'EQUALTILDE": [
          -1,
          200
        ],
        "'NEQ": [
          -1,
          200
        ],
        "'AND": [
          -1,
          200
        ],
        "'OR": [
          -1,
          200
        ],
        "'CARET": [
          -1,
          200
        ],
        "'IS": [
          -1,
          200
        ],
        "'ISEQUALEQUAL": [
          -1,
          200
        ],
        "'ISEQUALTILDE": [
          -1,
          200
        ],
        "'ISSPACESHIP": [
          -1,
          200
        ],
        "'ISROUGHLY": [
          -1,
          200
        ],
        "'ISNOT": [
          -1,
          200
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          200
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          200
        ],
        "'ISNOTSPACESHIP": [
          -1,
          200
        ],
        "'RAISES": [
          -1,
          200
        ],
        "'RAISESOTHER": [
          -1,
          200
        ],
        "'SATISFIES": [
          -1,
          200
        ],
        "'SATISFIESNOT": [
          -1,
          200
        ],
        "'RAISESSATISFIES": [
          -1,
          200
        ],
        "'RAISESVIOLATES": [
          -1,
          200
        ],
        "'RAISESNOT": [
          -1,
          200
        ],
        "'DOTDOTDOT": [
          -1,
          200
        ],
        "'NUMBER": [
          -1,
          200
        ],
        "'RATIONAL": [
          -1,
          200
        ],
        "'ROUGHRATIONAL": [
          -1,
          200
        ],
        "'TRUE": [
          -1,
          200
        ],
        "'FALSE": [
          -1,
          200
        ],
        "'LAM": [
          -1,
          200
        ],
        "'METHOD": [
          -1,
          200
        ],
        "'LBRACK": [
          -1,
          200
        ],
        "'RBRACK": [
          -1,
          200
        ],
        "'TABLE": [
          -1,
          200
        ],
        "'ROW": [
          -1,
          200
        ],
        "'REACTOR": [
          -1,
          200
        ],
        "'BANG": [
          -1,
          200
        ],
        "'IF": [
          -1,
          200
        ],
        "'ELSECOLON": [
          -1,
          200
        ],
        "'ELSEIF": [
          -1,
          200
        ],
        "'ASK": [
          -1,
          200
        ],
        "'THENCOLON": [
          -1,
          200
        ],
        "'CASES": [
          -1,
          200
        ],
        "'FOR": [
          -1,
          200
        ],
        "'TABLE-SELECT": [
          -1,
          200
        ],
        "'TABLE-FILTER": [
          -1,
          200
        ],
        "'USING": [
          -1,
          200
        ],
        "'TABLE-ORDER": [
          -1,
          200
        ],
        "'TABLE-EXTRACT": [
          -1,
          200
        ],
        "'TABLE-UPDATE": [
          -1,
          200
        ],
        "'TABLE-EXTEND": [
          -1,
          200
        ],
        "'OF": [
          -1,
          200
        ],
        "'LOAD-TABLE": [
          -1,
          200
        ],
        "'SOURCECOLON": [
          -1,
          200
        ],
        "'SANITIZE": [
          -1,
          200
        ]
      },
      {
        "$": [
          -1,
          202
        ],
        "'COLON": [
          -1,
          202
        ],
        "'END": [
          -1,
          202
        ],
        "'COMMA": [
          -1,
          202
        ],
        "'NAME": [
          -1,
          202
        ],
        "'PARENNOSPACE": [
          -1,
          202
        ],
        "'STRING": [
          -1,
          202
        ],
        "'RPAREN": [
          -1,
          202
        ],
        "'TYPE": [
          -1,
          202
        ],
        "'DATA": [
          -1,
          202
        ],
        "'TIMES": [
          -1,
          202
        ],
        "'PARENSPACE": [
          -1,
          202
        ],
        "'DOT": [
          -1,
          202
        ],
        "'SPY": [
          -1,
          202
        ],
        "'NEWTYPE": [
          -1,
          202
        ],
        "'LBRACE": [
          -1,
          202
        ],
        "'RBRACE": [
          -1,
          202
        ],
        "'SEMI": [
          -1,
          202
        ],
        "'SHADOW": [
          -1,
          202
        ],
        "'LET": [
          -1,
          202
        ],
        "'BLOCK": [
          -1,
          202
        ],
        "'LETREC": [
          -1,
          202
        ],
        "'TYPE-LET": [
          -1,
          202
        ],
        "'FUN": [
          -1,
          202
        ],
        "'LANGLE": [
          -1,
          202
        ],
        "'LT": [
          -1,
          202
        ],
        "'GT": [
          -1,
          202
        ],
        "'PARENAFTERBRACE": [
          -1,
          202
        ],
        "'WHERE": [
          -1,
          202
        ],
        "'CHECK": [
          -1,
          202
        ],
        "'EXAMPLES": [
          -1,
          202
        ],
        "'CHECKCOLON": [
          -1,
          202
        ],
        "'EXAMPLESCOLON": [
          -1,
          202
        ],
        "'BECAUSE": [
          -1,
          202
        ],
        "'BAR": [
          -1,
          202
        ],
        "'SHARING": [
          -1,
          202
        ],
        "'VAR": [
          -1,
          202
        ],
        "'REC": [
          -1,
          202
        ],
        "'WHEN": [
          -1,
          202
        ],
        "'PLUS": [
          -1,
          202
        ],
        "'DASH": [
          -1,
          202
        ],
        "'SLASH": [
          -1,
          202
        ],
        "'LEQ": [
          -1,
          202
        ],
        "'GEQ": [
          -1,
          202
        ],
        "'EQUALEQUAL": [
          -1,
          202
        ],
        "'SPACESHIP": [
          -1,
          202
        ],
        "'EQUALTILDE": [
          -1,
          202
        ],
        "'NEQ": [
          -1,
          202
        ],
        "'AND": [
          -1,
          202
        ],
        "'OR": [
          -1,
          202
        ],
        "'CARET": [
          -1,
          202
        ],
        "'IS": [
          -1,
          202
        ],
        "'ISEQUALEQUAL": [
          -1,
          202
        ],
        "'ISEQUALTILDE": [
          -1,
          202
        ],
        "'ISSPACESHIP": [
          -1,
          202
        ],
        "'ISROUGHLY": [
          -1,
          202
        ],
        "'ISNOT": [
          -1,
          202
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          202
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          202
        ],
        "'ISNOTSPACESHIP": [
          -1,
          202
        ],
        "'RAISES": [
          -1,
          202
        ],
        "'RAISESOTHER": [
          -1,
          202
        ],
        "'SATISFIES": [
          -1,
          202
        ],
        "'SATISFIESNOT": [
          -1,
          202
        ],
        "'RAISESSATISFIES": [
          -1,
          202
        ],
        "'RAISESVIOLATES": [
          -1,
          202
        ],
        "'RAISESNOT": [
          -1,
          202
        ],
        "'DOTDOTDOT": [
          -1,
          202
        ],
        "'NUMBER": [
          -1,
          202
        ],
        "'RATIONAL": [
          -1,
          202
        ],
        "'ROUGHRATIONAL": [
          -1,
          202
        ],
        "'TRUE": [
          -1,
          202
        ],
        "'FALSE": [
          -1,
          202
        ],
        "'LAM": [
          -1,
          202
        ],
        "'METHOD": [
          -1,
          202
        ],
        "'LBRACK": [
          -1,
          202
        ],
        "'RBRACK": [
          -1,
          202
        ],
        "'TABLE": [
          -1,
          202
        ],
        "'ROW": [
          -1,
          202
        ],
        "'REACTOR": [
          -1,
          202
        ],
        "'BANG": [
          -1,
          202
        ],
        "'IF": [
          -1,
          202
        ],
        "'ELSECOLON": [
          -1,
          202
        ],
        "'ELSEIF": [
          -1,
          202
        ],
        "'ASK": [
          -1,
          202
        ],
        "'THENCOLON": [
          -1,
          202
        ],
        "'CASES": [
          -1,
          202
        ],
        "'FOR": [
          -1,
          202
        ],
        "'TABLE-SELECT": [
          -1,
          202
        ],
        "'TABLE-FILTER": [
          -1,
          202
        ],
        "'USING": [
          -1,
          202
        ],
        "'TABLE-ORDER": [
          -1,
          202
        ],
        "'TABLE-EXTRACT": [
          -1,
          202
        ],
        "'TABLE-UPDATE": [
          -1,
          202
        ],
        "'TABLE-EXTEND": [
          -1,
          202
        ],
        "'OF": [
          -1,
          202
        ],
        "'LOAD-TABLE": [
          -1,
          202
        ],
        "'SOURCECOLON": [
          -1,
          202
        ],
        "'SANITIZE": [
          -1,
          202
        ]
      },
      {
        "$": [
          -1,
          204
        ],
        "'COLON": [
          -1,
          204
        ],
        "'END": [
          -1,
          204
        ],
        "'COMMA": [
          -1,
          204
        ],
        "'NAME": [
          -1,
          204
        ],
        "'PARENNOSPACE": [
          -1,
          204
        ],
        "'STRING": [
          -1,
          204
        ],
        "'RPAREN": [
          -1,
          204
        ],
        "'TYPE": [
          -1,
          204
        ],
        "'DATA": [
          -1,
          204
        ],
        "'TIMES": [
          -1,
          204
        ],
        "'PARENSPACE": [
          -1,
          204
        ],
        "'DOT": [
          -1,
          204
        ],
        "'SPY": [
          -1,
          204
        ],
        "'NEWTYPE": [
          -1,
          204
        ],
        "'LBRACE": [
          -1,
          204
        ],
        "'RBRACE": [
          -1,
          204
        ],
        "'SEMI": [
          -1,
          204
        ],
        "'SHADOW": [
          -1,
          204
        ],
        "'LET": [
          -1,
          204
        ],
        "'BLOCK": [
          -1,
          204
        ],
        "'LETREC": [
          -1,
          204
        ],
        "'TYPE-LET": [
          -1,
          204
        ],
        "'FUN": [
          -1,
          204
        ],
        "'LANGLE": [
          -1,
          204
        ],
        "'LT": [
          -1,
          204
        ],
        "'GT": [
          -1,
          204
        ],
        "'PARENAFTERBRACE": [
          -1,
          204
        ],
        "'WHERE": [
          -1,
          204
        ],
        "'CHECK": [
          -1,
          204
        ],
        "'EXAMPLES": [
          -1,
          204
        ],
        "'CHECKCOLON": [
          -1,
          204
        ],
        "'EXAMPLESCOLON": [
          -1,
          204
        ],
        "'BECAUSE": [
          -1,
          204
        ],
        "'BAR": [
          -1,
          204
        ],
        "'SHARING": [
          -1,
          204
        ],
        "'VAR": [
          -1,
          204
        ],
        "'REC": [
          -1,
          204
        ],
        "'WHEN": [
          -1,
          204
        ],
        "'PLUS": [
          -1,
          204
        ],
        "'DASH": [
          -1,
          204
        ],
        "'SLASH": [
          -1,
          204
        ],
        "'LEQ": [
          -1,
          204
        ],
        "'GEQ": [
          -1,
          204
        ],
        "'EQUALEQUAL": [
          -1,
          204
        ],
        "'SPACESHIP": [
          -1,
          204
        ],
        "'EQUALTILDE": [
          -1,
          204
        ],
        "'NEQ": [
          -1,
          204
        ],
        "'AND": [
          -1,
          204
        ],
        "'OR": [
          -1,
          204
        ],
        "'CARET": [
          -1,
          204
        ],
        "'IS": [
          -1,
          204
        ],
        "'ISEQUALEQUAL": [
          -1,
          204
        ],
        "'ISEQUALTILDE": [
          -1,
          204
        ],
        "'ISSPACESHIP": [
          -1,
          204
        ],
        "'ISROUGHLY": [
          -1,
          204
        ],
        "'ISNOT": [
          -1,
          204
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          204
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          204
        ],
        "'ISNOTSPACESHIP": [
          -1,
          204
        ],
        "'RAISES": [
          -1,
          204
        ],
        "'RAISESOTHER": [
          -1,
          204
        ],
        "'SATISFIES": [
          -1,
          204
        ],
        "'SATISFIESNOT": [
          -1,
          204
        ],
        "'RAISESSATISFIES": [
          -1,
          204
        ],
        "'RAISESVIOLATES": [
          -1,
          204
        ],
        "'RAISESNOT": [
          -1,
          204
        ],
        "'DOTDOTDOT": [
          -1,
          204
        ],
        "'NUMBER": [
          -1,
          204
        ],
        "'RATIONAL": [
          -1,
          204
        ],
        "'ROUGHRATIONAL": [
          -1,
          204
        ],
        "'TRUE": [
          -1,
          204
        ],
        "'FALSE": [
          -1,
          204
        ],
        "'LAM": [
          -1,
          204
        ],
        "'METHOD": [
          -1,
          204
        ],
        "'LBRACK": [
          -1,
          204
        ],
        "'RBRACK": [
          -1,
          204
        ],
        "'TABLE": [
          -1,
          204
        ],
        "'ROW": [
          -1,
          204
        ],
        "'REACTOR": [
          -1,
          204
        ],
        "'BANG": [
          -1,
          204
        ],
        "'IF": [
          -1,
          204
        ],
        "'ELSECOLON": [
          -1,
          204
        ],
        "'ELSEIF": [
          -1,
          204
        ],
        "'ASK": [
          -1,
          204
        ],
        "'THENCOLON": [
          -1,
          204
        ],
        "'CASES": [
          -1,
          204
        ],
        "'FOR": [
          -1,
          204
        ],
        "'TABLE-SELECT": [
          -1,
          204
        ],
        "'TABLE-FILTER": [
          -1,
          204
        ],
        "'USING": [
          -1,
          204
        ],
        "'TABLE-ORDER": [
          -1,
          204
        ],
        "'TABLE-EXTRACT": [
          -1,
          204
        ],
        "'TABLE-UPDATE": [
          -1,
          204
        ],
        "'TABLE-EXTEND": [
          -1,
          204
        ],
        "'OF": [
          -1,
          204
        ],
        "'LOAD-TABLE": [
          -1,
          204
        ],
        "'SOURCECOLON": [
          -1,
          204
        ],
        "'SANITIZE": [
          -1,
          204
        ]
      },
      {
        "ty-params": [
          187
        ],
        "fun-header": [
          228
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'PARENNOSPACE": [
          -1,
          96,
          98
        ],
        "'PARENAFTERBRACE": [
          -1,
          96,
          98
        ]
      },
      {
        "ty-params": [
          187
        ],
        "fun-header": [
          229
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'PARENNOSPACE": [
          -1,
          96,
          98
        ],
        "'PARENAFTERBRACE": [
          -1,
          96,
          98
        ]
      },
      {
        "construct-modifier": [
          230
        ],
        "'LAZY": [
          231
        ],
        "'NAME": [
          -1,
          206
        ],
        "'STRING": [
          -1,
          206
        ],
        "'PARENSPACE": [
          -1,
          206
        ],
        "'LBRACE": [
          -1,
          206
        ],
        "'LET": [
          -1,
          206
        ],
        "'BLOCK": [
          -1,
          206
        ],
        "'LETREC": [
          -1,
          206
        ],
        "'TYPE-LET": [
          -1,
          206
        ],
        "'PARENAFTERBRACE": [
          -1,
          206
        ],
        "'DOTDOTDOT": [
          -1,
          206
        ],
        "'NUMBER": [
          -1,
          206
        ],
        "'RATIONAL": [
          -1,
          206
        ],
        "'ROUGHRATIONAL": [
          -1,
          206
        ],
        "'TRUE": [
          -1,
          206
        ],
        "'FALSE": [
          -1,
          206
        ],
        "'LAM": [
          -1,
          206
        ],
        "'METHOD": [
          -1,
          206
        ],
        "'LBRACK": [
          -1,
          206
        ],
        "'TABLE": [
          -1,
          206
        ],
        "'REACTOR": [
          -1,
          206
        ],
        "'IF": [
          -1,
          206
        ],
        "'ASK": [
          -1,
          206
        ],
        "'CASES": [
          -1,
          206
        ],
        "'FOR": [
          -1,
          206
        ],
        "'TABLE-SELECT": [
          -1,
          206
        ],
        "'TABLE-FILTER": [
          -1,
          206
        ],
        "'TABLE-ORDER": [
          -1,
          206
        ],
        "'TABLE-EXTRACT": [
          -1,
          206
        ],
        "'TABLE-UPDATE": [
          -1,
          206
        ],
        "'TABLE-EXTEND": [
          -1,
          206
        ],
        "'LOAD-TABLE": [
          -1,
          206
        ]
      },
      {
        "table-headers": [
          232
        ],
        "table-headers_I0?": [
          233
        ],
        "table-headers_I0": [
          234
        ],
        "table-headers_I0_I0*": [
          235
        ],
        "'END": [
          -1,
          208,
          210
        ],
        "'NAME": [
          -1,
          212
        ],
        "'ROW": [
          -1,
          208,
          210
        ]
      },
      {
        "'COLON": [
          236
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          237
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'COLON": [
          238
        ],
        "'BLOCK": [
          239
        ],
        "if-pipe-expr_I1": [
          240
        ]
      },
      {
        "'PARENNOSPACE": [
          241
        ],
        "'PARENSPACE": [
          242
        ],
        "cases-expr_I1": [
          243
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          244
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          245
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          246
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          247
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          248
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          249
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          250
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'COLON": [
          251
        ]
      },
      {
        "$": [
          -1,
          214
        ],
        "'INCLUDE": [
          -1,
          214
        ],
        "'IMPORT": [
          -1,
          214
        ],
        "'NAME": [
          -1,
          214
        ],
        "'STRING": [
          -1,
          214
        ],
        "'TYPE": [
          -1,
          214
        ],
        "'DATA": [
          -1,
          214
        ],
        "'PARENSPACE": [
          -1,
          214
        ],
        "'SPY": [
          -1,
          214
        ],
        "'NEWTYPE": [
          -1,
          214
        ],
        "'LBRACE": [
          -1,
          214
        ],
        "'SHADOW": [
          -1,
          214
        ],
        "'LET": [
          -1,
          214
        ],
        "'BLOCK": [
          -1,
          214
        ],
        "'LETREC": [
          -1,
          214
        ],
        "'TYPE-LET": [
          -1,
          214
        ],
        "'FUN": [
          -1,
          214
        ],
        "'PARENAFTERBRACE": [
          -1,
          214
        ],
        "'CHECK": [
          -1,
          214
        ],
        "'EXAMPLES": [
          -1,
          214
        ],
        "'CHECKCOLON": [
          -1,
          214
        ],
        "'EXAMPLESCOLON": [
          -1,
          214
        ],
        "'VAR": [
          -1,
          214
        ],
        "'REC": [
          -1,
          214
        ],
        "'WHEN": [
          -1,
          214
        ],
        "'DOTDOTDOT": [
          -1,
          214
        ],
        "'NUMBER": [
          -1,
          214
        ],
        "'RATIONAL": [
          -1,
          214
        ],
        "'ROUGHRATIONAL": [
          -1,
          214
        ],
        "'TRUE": [
          -1,
          214
        ],
        "'FALSE": [
          -1,
          214
        ],
        "'LAM": [
          -1,
          214
        ],
        "'METHOD": [
          -1,
          214
        ],
        "'LBRACK": [
          -1,
          214
        ],
        "'TABLE": [
          -1,
          214
        ],
        "'REACTOR": [
          -1,
          214
        ],
        "'IF": [
          -1,
          214
        ],
        "'ASK": [
          -1,
          214
        ],
        "'CASES": [
          -1,
          214
        ],
        "'FOR": [
          -1,
          214
        ],
        "'TABLE-SELECT": [
          -1,
          214
        ],
        "'TABLE-FILTER": [
          -1,
          214
        ],
        "'TABLE-ORDER": [
          -1,
          214
        ],
        "'TABLE-EXTRACT": [
          -1,
          214
        ],
        "'TABLE-UPDATE": [
          -1,
          214
        ],
        "'TABLE-EXTEND": [
          -1,
          214
        ],
        "'LOAD-TABLE": [
          -1,
          214
        ]
      },
      {
        "$": [
          -1,
          216
        ],
        "'INCLUDE": [
          -1,
          216
        ],
        "'IMPORT": [
          -1,
          216
        ],
        "'NAME": [
          -1,
          216
        ],
        "'STRING": [
          -1,
          216
        ],
        "'TYPE": [
          -1,
          216
        ],
        "'DATA": [
          -1,
          216
        ],
        "'PARENSPACE": [
          -1,
          216
        ],
        "'SPY": [
          -1,
          216
        ],
        "'NEWTYPE": [
          -1,
          216
        ],
        "'LBRACE": [
          -1,
          216
        ],
        "'SHADOW": [
          -1,
          216
        ],
        "'LET": [
          -1,
          216
        ],
        "'BLOCK": [
          -1,
          216
        ],
        "'LETREC": [
          -1,
          216
        ],
        "'TYPE-LET": [
          -1,
          216
        ],
        "'FUN": [
          -1,
          216
        ],
        "'PARENAFTERBRACE": [
          -1,
          216
        ],
        "'CHECK": [
          -1,
          216
        ],
        "'EXAMPLES": [
          -1,
          216
        ],
        "'CHECKCOLON": [
          -1,
          216
        ],
        "'EXAMPLESCOLON": [
          -1,
          216
        ],
        "'VAR": [
          -1,
          216
        ],
        "'REC": [
          -1,
          216
        ],
        "'WHEN": [
          -1,
          216
        ],
        "'DOTDOTDOT": [
          -1,
          216
        ],
        "'NUMBER": [
          -1,
          216
        ],
        "'RATIONAL": [
          -1,
          216
        ],
        "'ROUGHRATIONAL": [
          -1,
          216
        ],
        "'TRUE": [
          -1,
          216
        ],
        "'FALSE": [
          -1,
          216
        ],
        "'LAM": [
          -1,
          216
        ],
        "'METHOD": [
          -1,
          216
        ],
        "'LBRACK": [
          -1,
          216
        ],
        "'TABLE": [
          -1,
          216
        ],
        "'REACTOR": [
          -1,
          216
        ],
        "'IF": [
          -1,
          216
        ],
        "'ASK": [
          -1,
          216
        ],
        "'CASES": [
          -1,
          216
        ],
        "'FOR": [
          -1,
          216
        ],
        "'TABLE-SELECT": [
          -1,
          216
        ],
        "'TABLE-FILTER": [
          -1,
          216
        ],
        "'TABLE-ORDER": [
          -1,
          216
        ],
        "'TABLE-EXTRACT": [
          -1,
          216
        ],
        "'TABLE-UPDATE": [
          -1,
          216
        ],
        "'TABLE-EXTEND": [
          -1,
          216
        ],
        "'LOAD-TABLE": [
          -1,
          216
        ]
      },
      {
        "import-source": [
          252
        ],
        "'FROM": [
          253
        ],
        "'NAME": [
          254
        ],
        "import-special": [
          255
        ],
        "import-name": [
          256
        ]
      },
      {
        "import-source": [
          257
        ],
        "'NAME": [
          258
        ],
        "comma-names": [
          259
        ],
        "import-special": [
          255
        ],
        "import-name": [
          256
        ]
      },
      {
        "module-ref": [
          260
        ],
        "module-ref_I0*": [
          155
        ],
        "'NAME": [
          -1,
          44
        ]
      },
      {
        "'END": [
          261
        ]
      },
      {
        "$": [
          -1,
          218
        ],
        "'INCLUDE": [
          -1,
          218
        ],
        "'IMPORT": [
          -1,
          218
        ],
        "'NAME": [
          -1,
          218
        ],
        "'STRING": [
          -1,
          218
        ],
        "'TYPE": [
          -1,
          218
        ],
        "'DATA": [
          -1,
          218
        ],
        "'PROVIDE": [
          -1,
          218
        ],
        "'PROVIDE-TYPES": [
          -1,
          218
        ],
        "'PROVIDECOLON": [
          -1,
          218
        ],
        "'PARENSPACE": [
          -1,
          218
        ],
        "'SPY": [
          -1,
          218
        ],
        "'NEWTYPE": [
          -1,
          218
        ],
        "'LBRACE": [
          -1,
          218
        ],
        "'SHADOW": [
          -1,
          218
        ],
        "'LET": [
          -1,
          218
        ],
        "'BLOCK": [
          -1,
          218
        ],
        "'LETREC": [
          -1,
          218
        ],
        "'TYPE-LET": [
          -1,
          218
        ],
        "'FUN": [
          -1,
          218
        ],
        "'PARENAFTERBRACE": [
          -1,
          218
        ],
        "'CHECK": [
          -1,
          218
        ],
        "'EXAMPLES": [
          -1,
          218
        ],
        "'CHECKCOLON": [
          -1,
          218
        ],
        "'EXAMPLESCOLON": [
          -1,
          218
        ],
        "'VAR": [
          -1,
          218
        ],
        "'REC": [
          -1,
          218
        ],
        "'WHEN": [
          -1,
          218
        ],
        "'DOTDOTDOT": [
          -1,
          218
        ],
        "'NUMBER": [
          -1,
          218
        ],
        "'RATIONAL": [
          -1,
          218
        ],
        "'ROUGHRATIONAL": [
          -1,
          218
        ],
        "'TRUE": [
          -1,
          218
        ],
        "'FALSE": [
          -1,
          218
        ],
        "'LAM": [
          -1,
          218
        ],
        "'METHOD": [
          -1,
          218
        ],
        "'LBRACK": [
          -1,
          218
        ],
        "'TABLE": [
          -1,
          218
        ],
        "'REACTOR": [
          -1,
          218
        ],
        "'IF": [
          -1,
          218
        ],
        "'ASK": [
          -1,
          218
        ],
        "'CASES": [
          -1,
          218
        ],
        "'FOR": [
          -1,
          218
        ],
        "'TABLE-SELECT": [
          -1,
          218
        ],
        "'TABLE-FILTER": [
          -1,
          218
        ],
        "'TABLE-ORDER": [
          -1,
          218
        ],
        "'TABLE-EXTRACT": [
          -1,
          218
        ],
        "'TABLE-UPDATE": [
          -1,
          218
        ],
        "'TABLE-EXTEND": [
          -1,
          218
        ],
        "'LOAD-TABLE": [
          -1,
          218
        ]
      },
      {
        "$": [
          -1,
          220
        ],
        "'INCLUDE": [
          -1,
          220
        ],
        "'IMPORT": [
          -1,
          220
        ],
        "'NAME": [
          -1,
          220
        ],
        "'STRING": [
          -1,
          220
        ],
        "'TYPE": [
          -1,
          220
        ],
        "'DATA": [
          -1,
          220
        ],
        "'PROVIDE": [
          -1,
          220
        ],
        "'PROVIDE-TYPES": [
          -1,
          220
        ],
        "'PROVIDECOLON": [
          -1,
          220
        ],
        "'PARENSPACE": [
          -1,
          220
        ],
        "'SPY": [
          -1,
          220
        ],
        "'NEWTYPE": [
          -1,
          220
        ],
        "'LBRACE": [
          -1,
          220
        ],
        "'SHADOW": [
          -1,
          220
        ],
        "'LET": [
          -1,
          220
        ],
        "'BLOCK": [
          -1,
          220
        ],
        "'LETREC": [
          -1,
          220
        ],
        "'TYPE-LET": [
          -1,
          220
        ],
        "'FUN": [
          -1,
          220
        ],
        "'PARENAFTERBRACE": [
          -1,
          220
        ],
        "'CHECK": [
          -1,
          220
        ],
        "'EXAMPLES": [
          -1,
          220
        ],
        "'CHECKCOLON": [
          -1,
          220
        ],
        "'EXAMPLESCOLON": [
          -1,
          220
        ],
        "'VAR": [
          -1,
          220
        ],
        "'REC": [
          -1,
          220
        ],
        "'WHEN": [
          -1,
          220
        ],
        "'DOTDOTDOT": [
          -1,
          220
        ],
        "'NUMBER": [
          -1,
          220
        ],
        "'RATIONAL": [
          -1,
          220
        ],
        "'ROUGHRATIONAL": [
          -1,
          220
        ],
        "'TRUE": [
          -1,
          220
        ],
        "'FALSE": [
          -1,
          220
        ],
        "'LAM": [
          -1,
          220
        ],
        "'METHOD": [
          -1,
          220
        ],
        "'LBRACK": [
          -1,
          220
        ],
        "'TABLE": [
          -1,
          220
        ],
        "'REACTOR": [
          -1,
          220
        ],
        "'IF": [
          -1,
          220
        ],
        "'ASK": [
          -1,
          220
        ],
        "'CASES": [
          -1,
          220
        ],
        "'FOR": [
          -1,
          220
        ],
        "'TABLE-SELECT": [
          -1,
          220
        ],
        "'TABLE-FILTER": [
          -1,
          220
        ],
        "'TABLE-ORDER": [
          -1,
          220
        ],
        "'TABLE-EXTRACT": [
          -1,
          220
        ],
        "'TABLE-UPDATE": [
          -1,
          220
        ],
        "'TABLE-EXTEND": [
          -1,
          220
        ],
        "'LOAD-TABLE": [
          -1,
          220
        ]
      },
      {
        "$": [
          -1,
          222
        ],
        "'INCLUDE": [
          -1,
          222
        ],
        "'IMPORT": [
          -1,
          222
        ],
        "'NAME": [
          -1,
          222
        ],
        "'STRING": [
          -1,
          222
        ],
        "'TYPE": [
          -1,
          222
        ],
        "'DATA": [
          -1,
          222
        ],
        "'PROVIDE": [
          -1,
          222
        ],
        "'PROVIDE-TYPES": [
          -1,
          222
        ],
        "'PROVIDECOLON": [
          -1,
          222
        ],
        "'PARENSPACE": [
          -1,
          222
        ],
        "'SPY": [
          -1,
          222
        ],
        "'NEWTYPE": [
          -1,
          222
        ],
        "'LBRACE": [
          -1,
          222
        ],
        "'SHADOW": [
          -1,
          222
        ],
        "'LET": [
          -1,
          222
        ],
        "'BLOCK": [
          -1,
          222
        ],
        "'LETREC": [
          -1,
          222
        ],
        "'TYPE-LET": [
          -1,
          222
        ],
        "'FUN": [
          -1,
          222
        ],
        "'PARENAFTERBRACE": [
          -1,
          222
        ],
        "'CHECK": [
          -1,
          222
        ],
        "'EXAMPLES": [
          -1,
          222
        ],
        "'CHECKCOLON": [
          -1,
          222
        ],
        "'EXAMPLESCOLON": [
          -1,
          222
        ],
        "'VAR": [
          -1,
          222
        ],
        "'REC": [
          -1,
          222
        ],
        "'WHEN": [
          -1,
          222
        ],
        "'DOTDOTDOT": [
          -1,
          222
        ],
        "'NUMBER": [
          -1,
          222
        ],
        "'RATIONAL": [
          -1,
          222
        ],
        "'ROUGHRATIONAL": [
          -1,
          222
        ],
        "'TRUE": [
          -1,
          222
        ],
        "'FALSE": [
          -1,
          222
        ],
        "'LAM": [
          -1,
          222
        ],
        "'METHOD": [
          -1,
          222
        ],
        "'LBRACK": [
          -1,
          222
        ],
        "'TABLE": [
          -1,
          222
        ],
        "'REACTOR": [
          -1,
          222
        ],
        "'IF": [
          -1,
          222
        ],
        "'ASK": [
          -1,
          222
        ],
        "'CASES": [
          -1,
          222
        ],
        "'FOR": [
          -1,
          222
        ],
        "'TABLE-SELECT": [
          -1,
          222
        ],
        "'TABLE-FILTER": [
          -1,
          222
        ],
        "'TABLE-ORDER": [
          -1,
          222
        ],
        "'TABLE-EXTRACT": [
          -1,
          222
        ],
        "'TABLE-UPDATE": [
          -1,
          222
        ],
        "'TABLE-EXTEND": [
          -1,
          222
        ],
        "'LOAD-TABLE": [
          -1,
          222
        ]
      },
      {
        "$": [
          -1,
          224
        ],
        "'INCLUDE": [
          -1,
          224
        ],
        "'IMPORT": [
          -1,
          224
        ],
        "'NAME": [
          -1,
          224
        ],
        "'STRING": [
          -1,
          224
        ],
        "'TYPE": [
          -1,
          224
        ],
        "'DATA": [
          -1,
          224
        ],
        "'PROVIDE": [
          -1,
          224
        ],
        "'PROVIDE-TYPES": [
          -1,
          224
        ],
        "'PROVIDECOLON": [
          -1,
          224
        ],
        "'PARENSPACE": [
          -1,
          224
        ],
        "'SPY": [
          -1,
          224
        ],
        "'NEWTYPE": [
          -1,
          224
        ],
        "'LBRACE": [
          -1,
          224
        ],
        "'SHADOW": [
          -1,
          224
        ],
        "'LET": [
          -1,
          224
        ],
        "'BLOCK": [
          -1,
          224
        ],
        "'LETREC": [
          -1,
          224
        ],
        "'TYPE-LET": [
          -1,
          224
        ],
        "'FUN": [
          -1,
          224
        ],
        "'PARENAFTERBRACE": [
          -1,
          224
        ],
        "'CHECK": [
          -1,
          224
        ],
        "'EXAMPLES": [
          -1,
          224
        ],
        "'CHECKCOLON": [
          -1,
          224
        ],
        "'EXAMPLESCOLON": [
          -1,
          224
        ],
        "'VAR": [
          -1,
          224
        ],
        "'REC": [
          -1,
          224
        ],
        "'WHEN": [
          -1,
          224
        ],
        "'DOTDOTDOT": [
          -1,
          224
        ],
        "'NUMBER": [
          -1,
          224
        ],
        "'RATIONAL": [
          -1,
          224
        ],
        "'ROUGHRATIONAL": [
          -1,
          224
        ],
        "'TRUE": [
          -1,
          224
        ],
        "'FALSE": [
          -1,
          224
        ],
        "'LAM": [
          -1,
          224
        ],
        "'METHOD": [
          -1,
          224
        ],
        "'LBRACK": [
          -1,
          224
        ],
        "'TABLE": [
          -1,
          224
        ],
        "'REACTOR": [
          -1,
          224
        ],
        "'IF": [
          -1,
          224
        ],
        "'ASK": [
          -1,
          224
        ],
        "'CASES": [
          -1,
          224
        ],
        "'FOR": [
          -1,
          224
        ],
        "'TABLE-SELECT": [
          -1,
          224
        ],
        "'TABLE-FILTER": [
          -1,
          224
        ],
        "'TABLE-ORDER": [
          -1,
          224
        ],
        "'TABLE-EXTRACT": [
          -1,
          224
        ],
        "'TABLE-UPDATE": [
          -1,
          224
        ],
        "'TABLE-EXTEND": [
          -1,
          224
        ],
        "'LOAD-TABLE": [
          -1,
          224
        ]
      },
      {
        "$": [
          -1,
          226
        ],
        "'INCLUDE": [
          -1,
          226
        ],
        "'IMPORT": [
          -1,
          226
        ],
        "'NAME": [
          -1,
          226
        ],
        "'STRING": [
          -1,
          226
        ],
        "'TYPE": [
          -1,
          226
        ],
        "'DATA": [
          -1,
          226
        ],
        "'PROVIDE": [
          -1,
          226
        ],
        "'PROVIDE-TYPES": [
          -1,
          226
        ],
        "'PROVIDECOLON": [
          -1,
          226
        ],
        "'PARENSPACE": [
          -1,
          226
        ],
        "'SPY": [
          -1,
          226
        ],
        "'NEWTYPE": [
          -1,
          226
        ],
        "'LBRACE": [
          -1,
          226
        ],
        "'SHADOW": [
          -1,
          226
        ],
        "'LET": [
          -1,
          226
        ],
        "'BLOCK": [
          -1,
          226
        ],
        "'LETREC": [
          -1,
          226
        ],
        "'TYPE-LET": [
          -1,
          226
        ],
        "'FUN": [
          -1,
          226
        ],
        "'PARENAFTERBRACE": [
          -1,
          226
        ],
        "'CHECK": [
          -1,
          226
        ],
        "'EXAMPLES": [
          -1,
          226
        ],
        "'CHECKCOLON": [
          -1,
          226
        ],
        "'EXAMPLESCOLON": [
          -1,
          226
        ],
        "'VAR": [
          -1,
          226
        ],
        "'REC": [
          -1,
          226
        ],
        "'WHEN": [
          -1,
          226
        ],
        "'DOTDOTDOT": [
          -1,
          226
        ],
        "'NUMBER": [
          -1,
          226
        ],
        "'RATIONAL": [
          -1,
          226
        ],
        "'ROUGHRATIONAL": [
          -1,
          226
        ],
        "'TRUE": [
          -1,
          226
        ],
        "'FALSE": [
          -1,
          226
        ],
        "'LAM": [
          -1,
          226
        ],
        "'METHOD": [
          -1,
          226
        ],
        "'LBRACK": [
          -1,
          226
        ],
        "'TABLE": [
          -1,
          226
        ],
        "'REACTOR": [
          -1,
          226
        ],
        "'IF": [
          -1,
          226
        ],
        "'ASK": [
          -1,
          226
        ],
        "'CASES": [
          -1,
          226
        ],
        "'FOR": [
          -1,
          226
        ],
        "'TABLE-SELECT": [
          -1,
          226
        ],
        "'TABLE-FILTER": [
          -1,
          226
        ],
        "'TABLE-ORDER": [
          -1,
          226
        ],
        "'TABLE-EXTRACT": [
          -1,
          226
        ],
        "'TABLE-UPDATE": [
          -1,
          226
        ],
        "'TABLE-EXTEND": [
          -1,
          226
        ],
        "'LOAD-TABLE": [
          -1,
          226
        ]
      },
      {
        "$": [
          -1,
          228
        ],
        "'INCLUDE": [
          -1,
          228
        ],
        "'IMPORT": [
          -1,
          228
        ],
        "'NAME": [
          -1,
          228
        ],
        "'STRING": [
          -1,
          228
        ],
        "'TYPE": [
          -1,
          228
        ],
        "'DATA": [
          -1,
          228
        ],
        "'PROVIDE": [
          -1,
          228
        ],
        "'PROVIDE-TYPES": [
          -1,
          228
        ],
        "'PROVIDECOLON": [
          -1,
          228
        ],
        "'PARENSPACE": [
          -1,
          228
        ],
        "'SPY": [
          -1,
          228
        ],
        "'NEWTYPE": [
          -1,
          228
        ],
        "'LBRACE": [
          -1,
          228
        ],
        "'SHADOW": [
          -1,
          228
        ],
        "'LET": [
          -1,
          228
        ],
        "'BLOCK": [
          -1,
          228
        ],
        "'LETREC": [
          -1,
          228
        ],
        "'TYPE-LET": [
          -1,
          228
        ],
        "'FUN": [
          -1,
          228
        ],
        "'PARENAFTERBRACE": [
          -1,
          228
        ],
        "'CHECK": [
          -1,
          228
        ],
        "'EXAMPLES": [
          -1,
          228
        ],
        "'CHECKCOLON": [
          -1,
          228
        ],
        "'EXAMPLESCOLON": [
          -1,
          228
        ],
        "'VAR": [
          -1,
          228
        ],
        "'REC": [
          -1,
          228
        ],
        "'WHEN": [
          -1,
          228
        ],
        "'DOTDOTDOT": [
          -1,
          228
        ],
        "'NUMBER": [
          -1,
          228
        ],
        "'RATIONAL": [
          -1,
          228
        ],
        "'ROUGHRATIONAL": [
          -1,
          228
        ],
        "'TRUE": [
          -1,
          228
        ],
        "'FALSE": [
          -1,
          228
        ],
        "'LAM": [
          -1,
          228
        ],
        "'METHOD": [
          -1,
          228
        ],
        "'LBRACK": [
          -1,
          228
        ],
        "'TABLE": [
          -1,
          228
        ],
        "'REACTOR": [
          -1,
          228
        ],
        "'IF": [
          -1,
          228
        ],
        "'ASK": [
          -1,
          228
        ],
        "'CASES": [
          -1,
          228
        ],
        "'FOR": [
          -1,
          228
        ],
        "'TABLE-SELECT": [
          -1,
          228
        ],
        "'TABLE-FILTER": [
          -1,
          228
        ],
        "'TABLE-ORDER": [
          -1,
          228
        ],
        "'TABLE-EXTRACT": [
          -1,
          228
        ],
        "'TABLE-UPDATE": [
          -1,
          228
        ],
        "'TABLE-EXTEND": [
          -1,
          228
        ],
        "'LOAD-TABLE": [
          -1,
          228
        ]
      },
      {
        "$": [
          -1,
          230
        ],
        "'INCLUDE": [
          -1,
          230
        ],
        "'IMPORT": [
          -1,
          230
        ],
        "'NAME": [
          -1,
          230
        ],
        "'STRING": [
          -1,
          230
        ],
        "'TYPE": [
          -1,
          230
        ],
        "'DATA": [
          -1,
          230
        ],
        "'PROVIDE": [
          -1,
          230
        ],
        "'PROVIDE-TYPES": [
          -1,
          230
        ],
        "'PROVIDECOLON": [
          -1,
          230
        ],
        "'PARENSPACE": [
          -1,
          230
        ],
        "'SPY": [
          -1,
          230
        ],
        "'NEWTYPE": [
          -1,
          230
        ],
        "'LBRACE": [
          -1,
          230
        ],
        "'SHADOW": [
          -1,
          230
        ],
        "'LET": [
          -1,
          230
        ],
        "'BLOCK": [
          -1,
          230
        ],
        "'LETREC": [
          -1,
          230
        ],
        "'TYPE-LET": [
          -1,
          230
        ],
        "'FUN": [
          -1,
          230
        ],
        "'PARENAFTERBRACE": [
          -1,
          230
        ],
        "'CHECK": [
          -1,
          230
        ],
        "'EXAMPLES": [
          -1,
          230
        ],
        "'CHECKCOLON": [
          -1,
          230
        ],
        "'EXAMPLESCOLON": [
          -1,
          230
        ],
        "'VAR": [
          -1,
          230
        ],
        "'REC": [
          -1,
          230
        ],
        "'WHEN": [
          -1,
          230
        ],
        "'DOTDOTDOT": [
          -1,
          230
        ],
        "'NUMBER": [
          -1,
          230
        ],
        "'RATIONAL": [
          -1,
          230
        ],
        "'ROUGHRATIONAL": [
          -1,
          230
        ],
        "'TRUE": [
          -1,
          230
        ],
        "'FALSE": [
          -1,
          230
        ],
        "'LAM": [
          -1,
          230
        ],
        "'METHOD": [
          -1,
          230
        ],
        "'LBRACK": [
          -1,
          230
        ],
        "'TABLE": [
          -1,
          230
        ],
        "'REACTOR": [
          -1,
          230
        ],
        "'IF": [
          -1,
          230
        ],
        "'ASK": [
          -1,
          230
        ],
        "'CASES": [
          -1,
          230
        ],
        "'FOR": [
          -1,
          230
        ],
        "'TABLE-SELECT": [
          -1,
          230
        ],
        "'TABLE-FILTER": [
          -1,
          230
        ],
        "'TABLE-ORDER": [
          -1,
          230
        ],
        "'TABLE-EXTRACT": [
          -1,
          230
        ],
        "'TABLE-UPDATE": [
          -1,
          230
        ],
        "'TABLE-EXTEND": [
          -1,
          230
        ],
        "'LOAD-TABLE": [
          -1,
          230
        ]
      },
      {
        "'NAME": [
          262
        ],
        "comma-ann-field": [
          263
        ],
        "ann-field": [
          264
        ],
        "trailing-opt-comma-ann-field": [
          265
        ],
        "trailing-opt-comma-ann-field_I0": [
          266
        ],
        "'RBRACE": [
          -1,
          232,
          234
        ]
      },
      {
        "'AS": [
          267
        ],
        "'END": [
          -1,
          236
        ],
        "'COMMA": [
          -1,
          236
        ]
      },
      {
        "'END": [
          -1,
          238
        ],
        "'COMMA": [
          -1,
          238
        ]
      },
      {
        "module-ref": [
          140
        ],
        "name-spec": [
          268
        ],
        "'STAR": [
          145
        ],
        "'TIMES": [
          146
        ],
        "name-spec_A0_I0": [
          154
        ],
        "module-ref_I0*": [
          155
        ],
        "'NAME": [
          -1,
          44
        ]
      },
      {
        "module-ref": [
          269
        ],
        "data-name-spec": [
          270
        ],
        "'STAR": [
          271
        ],
        "'TIMES": [
          272
        ],
        "data-name-spec_A0_I0": [
          273
        ],
        "module-ref_I0*": [
          155
        ],
        "'NAME": [
          -1,
          44
        ]
      },
      {
        "module-ref": [
          140
        ],
        "name-spec": [
          274
        ],
        "'STAR": [
          145
        ],
        "'TIMES": [
          146
        ],
        "name-spec_A0_I0": [
          154
        ],
        "module-ref_I0*": [
          155
        ],
        "'NAME": [
          -1,
          44
        ]
      },
      {
        "'END": [
          -1,
          240
        ],
        "'COMMA": [
          -1,
          240
        ],
        "'HIDING": [
          -1,
          240
        ]
      },
      {
        "'END": [
          -1,
          242
        ],
        "'COMMA": [
          -1,
          242
        ],
        "'HIDING": [
          -1,
          242
        ]
      },
      {
        "'END": [
          275
        ]
      },
      {
        "'END": [
          -1,
          244
        ]
      },
      {
        "provide-block_A0_I1_I1*": [
          276
        ],
        "'END": [
          -1,
          246,
          248
        ],
        "'COMMA": [
          -1,
          248
        ]
      },
      {
        "'END": [
          -1,
          250
        ],
        "'COMMA": [
          -1,
          250
        ]
      },
      {
        "'END": [
          -1,
          252
        ],
        "'COMMA": [
          -1,
          252
        ]
      },
      {
        "'END": [
          -1,
          254
        ],
        "'COMMA": [
          -1,
          254
        ]
      },
      {
        "'END": [
          -1,
          256
        ],
        "'COMMA": [
          -1,
          256
        ]
      },
      {
        "hiding-spec": [
          277
        ],
        "name-spec_A0_I1?": [
          278
        ],
        "name-spec_A0_I1": [
          279
        ],
        "'HIDING": [
          280
        ],
        "'END": [
          -1,
          258,
          260
        ],
        "'COMMA": [
          -1,
          258,
          260
        ]
      },
      {
        "'NAME": [
          281
        ],
        "module-ref_I0": [
          282
        ]
      },
      {
        "ty-params": [
          283
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'NAME": [
          -1,
          96,
          98
        ],
        "'PARENNOSPACE": [
          -1,
          96,
          98
        ],
        "'PARENSPACE": [
          -1,
          96,
          98
        ],
        "'LBRACE": [
          -1,
          96,
          98
        ],
        "'PARENAFTERBRACE": [
          -1,
          96,
          98
        ],
        "'THINARROW": [
          -1,
          96,
          98
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          284
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "ty-params": [
          285
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'EQUALS": [
          -1,
          96,
          98
        ]
      },
      {
        "ty-params": [
          286
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'COLON": [
          -1,
          96,
          98
        ]
      },
      {
        "$": [
          -1,
          46
        ],
        "'COLON": [
          -1,
          46
        ],
        "'END": [
          -1,
          46
        ],
        "'COMMA": [
          -1,
          46
        ],
        "'NAME": [
          -1,
          46
        ],
        "'PARENNOSPACE": [
          -1,
          46
        ],
        "'STRING": [
          -1,
          46
        ],
        "'RPAREN": [
          -1,
          46
        ],
        "'TYPE": [
          -1,
          46
        ],
        "'DATA": [
          -1,
          46
        ],
        "'TIMES": [
          -1,
          46
        ],
        "'PARENSPACE": [
          -1,
          46
        ],
        "'DOT": [
          -1,
          46
        ],
        "'SPY": [
          -1,
          46
        ],
        "'NEWTYPE": [
          -1,
          46
        ],
        "'LBRACE": [
          -1,
          46
        ],
        "'RBRACE": [
          -1,
          46
        ],
        "'SEMI": [
          -1,
          46
        ],
        "'SHADOW": [
          -1,
          46
        ],
        "'LET": [
          -1,
          46
        ],
        "'BLOCK": [
          -1,
          46
        ],
        "'LETREC": [
          -1,
          46
        ],
        "'TYPE-LET": [
          -1,
          46
        ],
        "'FUN": [
          -1,
          46
        ],
        "'LANGLE": [
          -1,
          46
        ],
        "'LT": [
          -1,
          46
        ],
        "'GT": [
          -1,
          46
        ],
        "'PARENAFTERBRACE": [
          -1,
          46
        ],
        "'WHERE": [
          -1,
          46
        ],
        "'CHECK": [
          -1,
          46
        ],
        "'EXAMPLES": [
          -1,
          46
        ],
        "'CHECKCOLON": [
          -1,
          46
        ],
        "'EXAMPLESCOLON": [
          -1,
          46
        ],
        "'BECAUSE": [
          -1,
          46
        ],
        "'BAR": [
          -1,
          46
        ],
        "'SHARING": [
          -1,
          46
        ],
        "'VAR": [
          -1,
          46
        ],
        "'REC": [
          -1,
          46
        ],
        "'WHEN": [
          -1,
          46
        ],
        "'PLUS": [
          -1,
          46
        ],
        "'DASH": [
          -1,
          46
        ],
        "'SLASH": [
          -1,
          46
        ],
        "'LEQ": [
          -1,
          46
        ],
        "'GEQ": [
          -1,
          46
        ],
        "'EQUALEQUAL": [
          -1,
          46
        ],
        "'SPACESHIP": [
          -1,
          46
        ],
        "'EQUALTILDE": [
          -1,
          46
        ],
        "'NEQ": [
          -1,
          46
        ],
        "'AND": [
          -1,
          46
        ],
        "'OR": [
          -1,
          46
        ],
        "'CARET": [
          -1,
          46
        ],
        "'IS": [
          -1,
          46
        ],
        "'ISEQUALEQUAL": [
          -1,
          46
        ],
        "'ISEQUALTILDE": [
          -1,
          46
        ],
        "'ISSPACESHIP": [
          -1,
          46
        ],
        "'ISROUGHLY": [
          -1,
          46
        ],
        "'ISNOT": [
          -1,
          46
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          46
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          46
        ],
        "'ISNOTSPACESHIP": [
          -1,
          46
        ],
        "'RAISES": [
          -1,
          46
        ],
        "'RAISESOTHER": [
          -1,
          46
        ],
        "'SATISFIES": [
          -1,
          46
        ],
        "'SATISFIESNOT": [
          -1,
          46
        ],
        "'RAISESSATISFIES": [
          -1,
          46
        ],
        "'RAISESVIOLATES": [
          -1,
          46
        ],
        "'RAISESNOT": [
          -1,
          46
        ],
        "'DOTDOTDOT": [
          -1,
          46
        ],
        "'NUMBER": [
          -1,
          46
        ],
        "'RATIONAL": [
          -1,
          46
        ],
        "'ROUGHRATIONAL": [
          -1,
          46
        ],
        "'TRUE": [
          -1,
          46
        ],
        "'FALSE": [
          -1,
          46
        ],
        "'LAM": [
          -1,
          46
        ],
        "'METHOD": [
          -1,
          46
        ],
        "'LBRACK": [
          -1,
          46
        ],
        "'RBRACK": [
          -1,
          46
        ],
        "'TABLE": [
          -1,
          46
        ],
        "'ROW": [
          -1,
          46
        ],
        "'REACTOR": [
          -1,
          46
        ],
        "'BANG": [
          -1,
          46
        ],
        "'IF": [
          -1,
          46
        ],
        "'ELSECOLON": [
          -1,
          46
        ],
        "'ELSEIF": [
          -1,
          46
        ],
        "'ASK": [
          -1,
          46
        ],
        "'THENCOLON": [
          -1,
          46
        ],
        "'CASES": [
          -1,
          46
        ],
        "'FOR": [
          -1,
          46
        ],
        "'TABLE-SELECT": [
          -1,
          46
        ],
        "'TABLE-FILTER": [
          -1,
          46
        ],
        "'USING": [
          -1,
          46
        ],
        "'TABLE-ORDER": [
          -1,
          46
        ],
        "'TABLE-EXTRACT": [
          -1,
          46
        ],
        "'TABLE-UPDATE": [
          -1,
          46
        ],
        "'TABLE-EXTEND": [
          -1,
          46
        ],
        "'OF": [
          -1,
          46
        ],
        "'LOAD-TABLE": [
          -1,
          46
        ],
        "'SOURCECOLON": [
          -1,
          46
        ],
        "'SANITIZE": [
          -1,
          46
        ]
      },
      {
        "'COLON": [
          287
        ]
      },
      {
        "'COLON": [
          -1,
          262
        ]
      },
      {
        "'COLON": [
          -1,
          264
        ]
      },
      {
        "'NAME": [
          185
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          186
        ],
        "id-expr": [
          39
        ],
        "ty-params": [
          187
        ],
        "'LBRACE": [
          164
        ],
        "'RBRACE": [
          189
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "fun-header": [
          190
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'PARENAFTERBRACE": [
          57,
          96,
          98
        ],
        "'REF": [
          196
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          197
        ],
        "tuple-fields": [
          198
        ],
        "obj-fields": [
          199
        ],
        "obj-field": [
          200
        ],
        "key": [
          201
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ],
        "'PARENNOSPACE": [
          -1,
          96,
          98
        ]
      },
      {
        "check-test_A0_I2?": [
          288
        ],
        "check-test_A0_I2": [
          289
        ],
        "'PERCENT": [
          290
        ],
        "'NAME": [
          -1,
          266
        ],
        "'STRING": [
          -1,
          266
        ],
        "'PARENSPACE": [
          -1,
          266
        ],
        "'LBRACE": [
          -1,
          266
        ],
        "'LET": [
          -1,
          266
        ],
        "'BLOCK": [
          -1,
          266
        ],
        "'LETREC": [
          -1,
          266
        ],
        "'TYPE-LET": [
          -1,
          266
        ],
        "'PARENAFTERBRACE": [
          -1,
          266
        ],
        "'DOTDOTDOT": [
          -1,
          266
        ],
        "'NUMBER": [
          -1,
          266
        ],
        "'RATIONAL": [
          -1,
          266
        ],
        "'ROUGHRATIONAL": [
          -1,
          266
        ],
        "'TRUE": [
          -1,
          266
        ],
        "'FALSE": [
          -1,
          266
        ],
        "'LAM": [
          -1,
          266
        ],
        "'METHOD": [
          -1,
          266
        ],
        "'LBRACK": [
          -1,
          266
        ],
        "'TABLE": [
          -1,
          266
        ],
        "'REACTOR": [
          -1,
          266
        ],
        "'IF": [
          -1,
          266
        ],
        "'ASK": [
          -1,
          266
        ],
        "'CASES": [
          -1,
          266
        ],
        "'FOR": [
          -1,
          266
        ],
        "'TABLE-SELECT": [
          -1,
          266
        ],
        "'TABLE-FILTER": [
          -1,
          266
        ],
        "'TABLE-ORDER": [
          -1,
          266
        ],
        "'TABLE-EXTRACT": [
          -1,
          266
        ],
        "'TABLE-UPDATE": [
          -1,
          266
        ],
        "'TABLE-EXTEND": [
          -1,
          266
        ],
        "'LOAD-TABLE": [
          -1,
          266
        ]
      },
      {
        "'BECAUSE": [
          291
        ],
        "check-test_A1_I2?": [
          292
        ],
        "check-test_A1_I2": [
          293
        ],
        "$": [
          -1,
          268,
          270
        ],
        "'END": [
          -1,
          268,
          270
        ],
        "'NAME": [
          -1,
          268,
          270
        ],
        "'STRING": [
          -1,
          268,
          270
        ],
        "'TYPE": [
          -1,
          268,
          270
        ],
        "'DATA": [
          -1,
          268,
          270
        ],
        "'PARENSPACE": [
          -1,
          268,
          270
        ],
        "'SPY": [
          -1,
          268,
          270
        ],
        "'NEWTYPE": [
          -1,
          268,
          270
        ],
        "'LBRACE": [
          -1,
          268,
          270
        ],
        "'RBRACE": [
          -1,
          268,
          270
        ],
        "'SHADOW": [
          -1,
          268,
          270
        ],
        "'LET": [
          -1,
          268,
          270
        ],
        "'BLOCK": [
          -1,
          268,
          270
        ],
        "'LETREC": [
          -1,
          268,
          270
        ],
        "'TYPE-LET": [
          -1,
          268,
          270
        ],
        "'FUN": [
          -1,
          268,
          270
        ],
        "'PARENAFTERBRACE": [
          -1,
          268,
          270
        ],
        "'WHERE": [
          -1,
          268,
          270
        ],
        "'CHECK": [
          -1,
          268,
          270
        ],
        "'EXAMPLES": [
          -1,
          268,
          270
        ],
        "'CHECKCOLON": [
          -1,
          268,
          270
        ],
        "'EXAMPLESCOLON": [
          -1,
          268,
          270
        ],
        "'BAR": [
          -1,
          268,
          270
        ],
        "'VAR": [
          -1,
          268,
          270
        ],
        "'REC": [
          -1,
          268,
          270
        ],
        "'WHEN": [
          -1,
          268,
          270
        ],
        "'DOTDOTDOT": [
          -1,
          268,
          270
        ],
        "'NUMBER": [
          -1,
          268,
          270
        ],
        "'RATIONAL": [
          -1,
          268,
          270
        ],
        "'ROUGHRATIONAL": [
          -1,
          268,
          270
        ],
        "'TRUE": [
          -1,
          268,
          270
        ],
        "'FALSE": [
          -1,
          268,
          270
        ],
        "'LAM": [
          -1,
          268,
          270
        ],
        "'METHOD": [
          -1,
          268,
          270
        ],
        "'LBRACK": [
          -1,
          268,
          270
        ],
        "'TABLE": [
          -1,
          268,
          270
        ],
        "'REACTOR": [
          -1,
          268,
          270
        ],
        "'IF": [
          -1,
          268,
          270
        ],
        "'ELSECOLON": [
          -1,
          268,
          270
        ],
        "'ELSEIF": [
          -1,
          268,
          270
        ],
        "'ASK": [
          -1,
          268,
          270
        ],
        "'CASES": [
          -1,
          268,
          270
        ],
        "'FOR": [
          -1,
          268,
          270
        ],
        "'TABLE-SELECT": [
          -1,
          268,
          270
        ],
        "'TABLE-FILTER": [
          -1,
          268,
          270
        ],
        "'TABLE-ORDER": [
          -1,
          268,
          270
        ],
        "'TABLE-EXTRACT": [
          -1,
          268,
          270
        ],
        "'TABLE-UPDATE": [
          -1,
          268,
          270
        ],
        "'TABLE-EXTEND": [
          -1,
          268,
          270
        ],
        "'LOAD-TABLE": [
          -1,
          268,
          270
        ]
      },
      {
        "'NAME": [
          -1,
          272
        ],
        "'STRING": [
          -1,
          272
        ],
        "'PARENSPACE": [
          -1,
          272
        ],
        "'LBRACE": [
          -1,
          272
        ],
        "'LET": [
          -1,
          272
        ],
        "'BLOCK": [
          -1,
          272
        ],
        "'LETREC": [
          -1,
          272
        ],
        "'TYPE-LET": [
          -1,
          272
        ],
        "'PARENAFTERBRACE": [
          -1,
          272
        ],
        "'PERCENT": [
          -1,
          272
        ],
        "'DOTDOTDOT": [
          -1,
          272
        ],
        "'NUMBER": [
          -1,
          272
        ],
        "'RATIONAL": [
          -1,
          272
        ],
        "'ROUGHRATIONAL": [
          -1,
          272
        ],
        "'TRUE": [
          -1,
          272
        ],
        "'FALSE": [
          -1,
          272
        ],
        "'LAM": [
          -1,
          272
        ],
        "'METHOD": [
          -1,
          272
        ],
        "'LBRACK": [
          -1,
          272
        ],
        "'TABLE": [
          -1,
          272
        ],
        "'REACTOR": [
          -1,
          272
        ],
        "'IF": [
          -1,
          272
        ],
        "'ASK": [
          -1,
          272
        ],
        "'CASES": [
          -1,
          272
        ],
        "'FOR": [
          -1,
          272
        ],
        "'TABLE-SELECT": [
          -1,
          272
        ],
        "'TABLE-FILTER": [
          -1,
          272
        ],
        "'TABLE-ORDER": [
          -1,
          272
        ],
        "'TABLE-EXTRACT": [
          -1,
          272
        ],
        "'TABLE-UPDATE": [
          -1,
          272
        ],
        "'TABLE-EXTEND": [
          -1,
          272
        ],
        "'LOAD-TABLE": [
          -1,
          272
        ]
      },
      {
        "'NAME": [
          -1,
          274
        ],
        "'STRING": [
          -1,
          274
        ],
        "'PARENSPACE": [
          -1,
          274
        ],
        "'LBRACE": [
          -1,
          274
        ],
        "'LET": [
          -1,
          274
        ],
        "'BLOCK": [
          -1,
          274
        ],
        "'LETREC": [
          -1,
          274
        ],
        "'TYPE-LET": [
          -1,
          274
        ],
        "'PARENAFTERBRACE": [
          -1,
          274
        ],
        "'PERCENT": [
          -1,
          274
        ],
        "'DOTDOTDOT": [
          -1,
          274
        ],
        "'NUMBER": [
          -1,
          274
        ],
        "'RATIONAL": [
          -1,
          274
        ],
        "'ROUGHRATIONAL": [
          -1,
          274
        ],
        "'TRUE": [
          -1,
          274
        ],
        "'FALSE": [
          -1,
          274
        ],
        "'LAM": [
          -1,
          274
        ],
        "'METHOD": [
          -1,
          274
        ],
        "'LBRACK": [
          -1,
          274
        ],
        "'TABLE": [
          -1,
          274
        ],
        "'REACTOR": [
          -1,
          274
        ],
        "'IF": [
          -1,
          274
        ],
        "'ASK": [
          -1,
          274
        ],
        "'CASES": [
          -1,
          274
        ],
        "'FOR": [
          -1,
          274
        ],
        "'TABLE-SELECT": [
          -1,
          274
        ],
        "'TABLE-FILTER": [
          -1,
          274
        ],
        "'TABLE-ORDER": [
          -1,
          274
        ],
        "'TABLE-EXTRACT": [
          -1,
          274
        ],
        "'TABLE-UPDATE": [
          -1,
          274
        ],
        "'TABLE-EXTEND": [
          -1,
          274
        ],
        "'LOAD-TABLE": [
          -1,
          274
        ]
      },
      {
        "'NAME": [
          -1,
          276
        ],
        "'STRING": [
          -1,
          276
        ],
        "'PARENSPACE": [
          -1,
          276
        ],
        "'LBRACE": [
          -1,
          276
        ],
        "'LET": [
          -1,
          276
        ],
        "'BLOCK": [
          -1,
          276
        ],
        "'LETREC": [
          -1,
          276
        ],
        "'TYPE-LET": [
          -1,
          276
        ],
        "'PARENAFTERBRACE": [
          -1,
          276
        ],
        "'PERCENT": [
          -1,
          276
        ],
        "'DOTDOTDOT": [
          -1,
          276
        ],
        "'NUMBER": [
          -1,
          276
        ],
        "'RATIONAL": [
          -1,
          276
        ],
        "'ROUGHRATIONAL": [
          -1,
          276
        ],
        "'TRUE": [
          -1,
          276
        ],
        "'FALSE": [
          -1,
          276
        ],
        "'LAM": [
          -1,
          276
        ],
        "'METHOD": [
          -1,
          276
        ],
        "'LBRACK": [
          -1,
          276
        ],
        "'TABLE": [
          -1,
          276
        ],
        "'REACTOR": [
          -1,
          276
        ],
        "'IF": [
          -1,
          276
        ],
        "'ASK": [
          -1,
          276
        ],
        "'CASES": [
          -1,
          276
        ],
        "'FOR": [
          -1,
          276
        ],
        "'TABLE-SELECT": [
          -1,
          276
        ],
        "'TABLE-FILTER": [
          -1,
          276
        ],
        "'TABLE-ORDER": [
          -1,
          276
        ],
        "'TABLE-EXTRACT": [
          -1,
          276
        ],
        "'TABLE-UPDATE": [
          -1,
          276
        ],
        "'TABLE-EXTEND": [
          -1,
          276
        ],
        "'LOAD-TABLE": [
          -1,
          276
        ]
      },
      {
        "'NAME": [
          -1,
          278
        ],
        "'STRING": [
          -1,
          278
        ],
        "'PARENSPACE": [
          -1,
          278
        ],
        "'LBRACE": [
          -1,
          278
        ],
        "'LET": [
          -1,
          278
        ],
        "'BLOCK": [
          -1,
          278
        ],
        "'LETREC": [
          -1,
          278
        ],
        "'TYPE-LET": [
          -1,
          278
        ],
        "'PARENAFTERBRACE": [
          -1,
          278
        ],
        "'PERCENT": [
          -1,
          278
        ],
        "'DOTDOTDOT": [
          -1,
          278
        ],
        "'NUMBER": [
          -1,
          278
        ],
        "'RATIONAL": [
          -1,
          278
        ],
        "'ROUGHRATIONAL": [
          -1,
          278
        ],
        "'TRUE": [
          -1,
          278
        ],
        "'FALSE": [
          -1,
          278
        ],
        "'LAM": [
          -1,
          278
        ],
        "'METHOD": [
          -1,
          278
        ],
        "'LBRACK": [
          -1,
          278
        ],
        "'TABLE": [
          -1,
          278
        ],
        "'REACTOR": [
          -1,
          278
        ],
        "'IF": [
          -1,
          278
        ],
        "'ASK": [
          -1,
          278
        ],
        "'CASES": [
          -1,
          278
        ],
        "'FOR": [
          -1,
          278
        ],
        "'TABLE-SELECT": [
          -1,
          278
        ],
        "'TABLE-FILTER": [
          -1,
          278
        ],
        "'TABLE-ORDER": [
          -1,
          278
        ],
        "'TABLE-EXTRACT": [
          -1,
          278
        ],
        "'TABLE-UPDATE": [
          -1,
          278
        ],
        "'TABLE-EXTEND": [
          -1,
          278
        ],
        "'LOAD-TABLE": [
          -1,
          278
        ]
      },
      {
        "'NAME": [
          -1,
          280
        ],
        "'STRING": [
          -1,
          280
        ],
        "'PARENSPACE": [
          -1,
          280
        ],
        "'LBRACE": [
          -1,
          280
        ],
        "'LET": [
          -1,
          280
        ],
        "'BLOCK": [
          -1,
          280
        ],
        "'LETREC": [
          -1,
          280
        ],
        "'TYPE-LET": [
          -1,
          280
        ],
        "'PARENAFTERBRACE": [
          -1,
          280
        ],
        "'PERCENT": [
          -1,
          280
        ],
        "'DOTDOTDOT": [
          -1,
          280
        ],
        "'NUMBER": [
          -1,
          280
        ],
        "'RATIONAL": [
          -1,
          280
        ],
        "'ROUGHRATIONAL": [
          -1,
          280
        ],
        "'TRUE": [
          -1,
          280
        ],
        "'FALSE": [
          -1,
          280
        ],
        "'LAM": [
          -1,
          280
        ],
        "'METHOD": [
          -1,
          280
        ],
        "'LBRACK": [
          -1,
          280
        ],
        "'TABLE": [
          -1,
          280
        ],
        "'REACTOR": [
          -1,
          280
        ],
        "'IF": [
          -1,
          280
        ],
        "'ASK": [
          -1,
          280
        ],
        "'CASES": [
          -1,
          280
        ],
        "'FOR": [
          -1,
          280
        ],
        "'TABLE-SELECT": [
          -1,
          280
        ],
        "'TABLE-FILTER": [
          -1,
          280
        ],
        "'TABLE-ORDER": [
          -1,
          280
        ],
        "'TABLE-EXTRACT": [
          -1,
          280
        ],
        "'TABLE-UPDATE": [
          -1,
          280
        ],
        "'TABLE-EXTEND": [
          -1,
          280
        ],
        "'LOAD-TABLE": [
          -1,
          280
        ]
      },
      {
        "'NAME": [
          -1,
          282
        ],
        "'STRING": [
          -1,
          282
        ],
        "'PARENSPACE": [
          -1,
          282
        ],
        "'LBRACE": [
          -1,
          282
        ],
        "'LET": [
          -1,
          282
        ],
        "'BLOCK": [
          -1,
          282
        ],
        "'LETREC": [
          -1,
          282
        ],
        "'TYPE-LET": [
          -1,
          282
        ],
        "'PARENAFTERBRACE": [
          -1,
          282
        ],
        "'PERCENT": [
          -1,
          282
        ],
        "'DOTDOTDOT": [
          -1,
          282
        ],
        "'NUMBER": [
          -1,
          282
        ],
        "'RATIONAL": [
          -1,
          282
        ],
        "'ROUGHRATIONAL": [
          -1,
          282
        ],
        "'TRUE": [
          -1,
          282
        ],
        "'FALSE": [
          -1,
          282
        ],
        "'LAM": [
          -1,
          282
        ],
        "'METHOD": [
          -1,
          282
        ],
        "'LBRACK": [
          -1,
          282
        ],
        "'TABLE": [
          -1,
          282
        ],
        "'REACTOR": [
          -1,
          282
        ],
        "'IF": [
          -1,
          282
        ],
        "'ASK": [
          -1,
          282
        ],
        "'CASES": [
          -1,
          282
        ],
        "'FOR": [
          -1,
          282
        ],
        "'TABLE-SELECT": [
          -1,
          282
        ],
        "'TABLE-FILTER": [
          -1,
          282
        ],
        "'TABLE-ORDER": [
          -1,
          282
        ],
        "'TABLE-EXTRACT": [
          -1,
          282
        ],
        "'TABLE-UPDATE": [
          -1,
          282
        ],
        "'TABLE-EXTEND": [
          -1,
          282
        ],
        "'LOAD-TABLE": [
          -1,
          282
        ]
      },
      {
        "'NAME": [
          -1,
          284
        ],
        "'STRING": [
          -1,
          284
        ],
        "'PARENSPACE": [
          -1,
          284
        ],
        "'LBRACE": [
          -1,
          284
        ],
        "'LET": [
          -1,
          284
        ],
        "'BLOCK": [
          -1,
          284
        ],
        "'LETREC": [
          -1,
          284
        ],
        "'TYPE-LET": [
          -1,
          284
        ],
        "'PARENAFTERBRACE": [
          -1,
          284
        ],
        "'PERCENT": [
          -1,
          284
        ],
        "'DOTDOTDOT": [
          -1,
          284
        ],
        "'NUMBER": [
          -1,
          284
        ],
        "'RATIONAL": [
          -1,
          284
        ],
        "'ROUGHRATIONAL": [
          -1,
          284
        ],
        "'TRUE": [
          -1,
          284
        ],
        "'FALSE": [
          -1,
          284
        ],
        "'LAM": [
          -1,
          284
        ],
        "'METHOD": [
          -1,
          284
        ],
        "'LBRACK": [
          -1,
          284
        ],
        "'TABLE": [
          -1,
          284
        ],
        "'REACTOR": [
          -1,
          284
        ],
        "'IF": [
          -1,
          284
        ],
        "'ASK": [
          -1,
          284
        ],
        "'CASES": [
          -1,
          284
        ],
        "'FOR": [
          -1,
          284
        ],
        "'TABLE-SELECT": [
          -1,
          284
        ],
        "'TABLE-FILTER": [
          -1,
          284
        ],
        "'TABLE-ORDER": [
          -1,
          284
        ],
        "'TABLE-EXTRACT": [
          -1,
          284
        ],
        "'TABLE-UPDATE": [
          -1,
          284
        ],
        "'TABLE-EXTEND": [
          -1,
          284
        ],
        "'LOAD-TABLE": [
          -1,
          284
        ]
      },
      {
        "'NAME": [
          -1,
          286
        ],
        "'STRING": [
          -1,
          286
        ],
        "'PARENSPACE": [
          -1,
          286
        ],
        "'LBRACE": [
          -1,
          286
        ],
        "'LET": [
          -1,
          286
        ],
        "'BLOCK": [
          -1,
          286
        ],
        "'LETREC": [
          -1,
          286
        ],
        "'TYPE-LET": [
          -1,
          286
        ],
        "'PARENAFTERBRACE": [
          -1,
          286
        ],
        "'PERCENT": [
          -1,
          286
        ],
        "'DOTDOTDOT": [
          -1,
          286
        ],
        "'NUMBER": [
          -1,
          286
        ],
        "'RATIONAL": [
          -1,
          286
        ],
        "'ROUGHRATIONAL": [
          -1,
          286
        ],
        "'TRUE": [
          -1,
          286
        ],
        "'FALSE": [
          -1,
          286
        ],
        "'LAM": [
          -1,
          286
        ],
        "'METHOD": [
          -1,
          286
        ],
        "'LBRACK": [
          -1,
          286
        ],
        "'TABLE": [
          -1,
          286
        ],
        "'REACTOR": [
          -1,
          286
        ],
        "'IF": [
          -1,
          286
        ],
        "'ASK": [
          -1,
          286
        ],
        "'CASES": [
          -1,
          286
        ],
        "'FOR": [
          -1,
          286
        ],
        "'TABLE-SELECT": [
          -1,
          286
        ],
        "'TABLE-FILTER": [
          -1,
          286
        ],
        "'TABLE-ORDER": [
          -1,
          286
        ],
        "'TABLE-EXTRACT": [
          -1,
          286
        ],
        "'TABLE-UPDATE": [
          -1,
          286
        ],
        "'TABLE-EXTEND": [
          -1,
          286
        ],
        "'LOAD-TABLE": [
          -1,
          286
        ]
      },
      {
        "'NAME": [
          -1,
          288
        ],
        "'STRING": [
          -1,
          288
        ],
        "'PARENSPACE": [
          -1,
          288
        ],
        "'LBRACE": [
          -1,
          288
        ],
        "'LET": [
          -1,
          288
        ],
        "'BLOCK": [
          -1,
          288
        ],
        "'LETREC": [
          -1,
          288
        ],
        "'TYPE-LET": [
          -1,
          288
        ],
        "'PARENAFTERBRACE": [
          -1,
          288
        ],
        "'PERCENT": [
          -1,
          288
        ],
        "'DOTDOTDOT": [
          -1,
          288
        ],
        "'NUMBER": [
          -1,
          288
        ],
        "'RATIONAL": [
          -1,
          288
        ],
        "'ROUGHRATIONAL": [
          -1,
          288
        ],
        "'TRUE": [
          -1,
          288
        ],
        "'FALSE": [
          -1,
          288
        ],
        "'LAM": [
          -1,
          288
        ],
        "'METHOD": [
          -1,
          288
        ],
        "'LBRACK": [
          -1,
          288
        ],
        "'TABLE": [
          -1,
          288
        ],
        "'REACTOR": [
          -1,
          288
        ],
        "'IF": [
          -1,
          288
        ],
        "'ASK": [
          -1,
          288
        ],
        "'CASES": [
          -1,
          288
        ],
        "'FOR": [
          -1,
          288
        ],
        "'TABLE-SELECT": [
          -1,
          288
        ],
        "'TABLE-FILTER": [
          -1,
          288
        ],
        "'TABLE-ORDER": [
          -1,
          288
        ],
        "'TABLE-EXTRACT": [
          -1,
          288
        ],
        "'TABLE-UPDATE": [
          -1,
          288
        ],
        "'TABLE-EXTEND": [
          -1,
          288
        ],
        "'LOAD-TABLE": [
          -1,
          288
        ]
      },
      {
        "'NAME": [
          -1,
          290
        ],
        "'STRING": [
          -1,
          290
        ],
        "'PARENSPACE": [
          -1,
          290
        ],
        "'LBRACE": [
          -1,
          290
        ],
        "'LET": [
          -1,
          290
        ],
        "'BLOCK": [
          -1,
          290
        ],
        "'LETREC": [
          -1,
          290
        ],
        "'TYPE-LET": [
          -1,
          290
        ],
        "'PARENAFTERBRACE": [
          -1,
          290
        ],
        "'PERCENT": [
          -1,
          290
        ],
        "'DOTDOTDOT": [
          -1,
          290
        ],
        "'NUMBER": [
          -1,
          290
        ],
        "'RATIONAL": [
          -1,
          290
        ],
        "'ROUGHRATIONAL": [
          -1,
          290
        ],
        "'TRUE": [
          -1,
          290
        ],
        "'FALSE": [
          -1,
          290
        ],
        "'LAM": [
          -1,
          290
        ],
        "'METHOD": [
          -1,
          290
        ],
        "'LBRACK": [
          -1,
          290
        ],
        "'TABLE": [
          -1,
          290
        ],
        "'REACTOR": [
          -1,
          290
        ],
        "'IF": [
          -1,
          290
        ],
        "'ASK": [
          -1,
          290
        ],
        "'CASES": [
          -1,
          290
        ],
        "'FOR": [
          -1,
          290
        ],
        "'TABLE-SELECT": [
          -1,
          290
        ],
        "'TABLE-FILTER": [
          -1,
          290
        ],
        "'TABLE-ORDER": [
          -1,
          290
        ],
        "'TABLE-EXTRACT": [
          -1,
          290
        ],
        "'TABLE-UPDATE": [
          -1,
          290
        ],
        "'TABLE-EXTEND": [
          -1,
          290
        ],
        "'LOAD-TABLE": [
          -1,
          290
        ]
      },
      {
        "'NAME": [
          -1,
          292
        ],
        "'STRING": [
          -1,
          292
        ],
        "'PARENSPACE": [
          -1,
          292
        ],
        "'LBRACE": [
          -1,
          292
        ],
        "'LET": [
          -1,
          292
        ],
        "'BLOCK": [
          -1,
          292
        ],
        "'LETREC": [
          -1,
          292
        ],
        "'TYPE-LET": [
          -1,
          292
        ],
        "'PARENAFTERBRACE": [
          -1,
          292
        ],
        "'PERCENT": [
          -1,
          292
        ],
        "'DOTDOTDOT": [
          -1,
          292
        ],
        "'NUMBER": [
          -1,
          292
        ],
        "'RATIONAL": [
          -1,
          292
        ],
        "'ROUGHRATIONAL": [
          -1,
          292
        ],
        "'TRUE": [
          -1,
          292
        ],
        "'FALSE": [
          -1,
          292
        ],
        "'LAM": [
          -1,
          292
        ],
        "'METHOD": [
          -1,
          292
        ],
        "'LBRACK": [
          -1,
          292
        ],
        "'TABLE": [
          -1,
          292
        ],
        "'REACTOR": [
          -1,
          292
        ],
        "'IF": [
          -1,
          292
        ],
        "'ASK": [
          -1,
          292
        ],
        "'CASES": [
          -1,
          292
        ],
        "'FOR": [
          -1,
          292
        ],
        "'TABLE-SELECT": [
          -1,
          292
        ],
        "'TABLE-FILTER": [
          -1,
          292
        ],
        "'TABLE-ORDER": [
          -1,
          292
        ],
        "'TABLE-EXTRACT": [
          -1,
          292
        ],
        "'TABLE-UPDATE": [
          -1,
          292
        ],
        "'TABLE-EXTEND": [
          -1,
          292
        ],
        "'LOAD-TABLE": [
          -1,
          292
        ]
      },
      {
        "'NAME": [
          -1,
          294
        ],
        "'STRING": [
          -1,
          294
        ],
        "'PARENSPACE": [
          -1,
          294
        ],
        "'LBRACE": [
          -1,
          294
        ],
        "'LET": [
          -1,
          294
        ],
        "'BLOCK": [
          -1,
          294
        ],
        "'LETREC": [
          -1,
          294
        ],
        "'TYPE-LET": [
          -1,
          294
        ],
        "'PARENAFTERBRACE": [
          -1,
          294
        ],
        "'PERCENT": [
          -1,
          294
        ],
        "'DOTDOTDOT": [
          -1,
          294
        ],
        "'NUMBER": [
          -1,
          294
        ],
        "'RATIONAL": [
          -1,
          294
        ],
        "'ROUGHRATIONAL": [
          -1,
          294
        ],
        "'TRUE": [
          -1,
          294
        ],
        "'FALSE": [
          -1,
          294
        ],
        "'LAM": [
          -1,
          294
        ],
        "'METHOD": [
          -1,
          294
        ],
        "'LBRACK": [
          -1,
          294
        ],
        "'TABLE": [
          -1,
          294
        ],
        "'REACTOR": [
          -1,
          294
        ],
        "'IF": [
          -1,
          294
        ],
        "'ASK": [
          -1,
          294
        ],
        "'CASES": [
          -1,
          294
        ],
        "'FOR": [
          -1,
          294
        ],
        "'TABLE-SELECT": [
          -1,
          294
        ],
        "'TABLE-FILTER": [
          -1,
          294
        ],
        "'TABLE-ORDER": [
          -1,
          294
        ],
        "'TABLE-EXTRACT": [
          -1,
          294
        ],
        "'TABLE-UPDATE": [
          -1,
          294
        ],
        "'TABLE-EXTEND": [
          -1,
          294
        ],
        "'LOAD-TABLE": [
          -1,
          294
        ]
      },
      {
        "'NAME": [
          -1,
          296
        ],
        "'STRING": [
          -1,
          296
        ],
        "'PARENSPACE": [
          -1,
          296
        ],
        "'LBRACE": [
          -1,
          296
        ],
        "'LET": [
          -1,
          296
        ],
        "'BLOCK": [
          -1,
          296
        ],
        "'LETREC": [
          -1,
          296
        ],
        "'TYPE-LET": [
          -1,
          296
        ],
        "'PARENAFTERBRACE": [
          -1,
          296
        ],
        "'PERCENT": [
          -1,
          296
        ],
        "'DOTDOTDOT": [
          -1,
          296
        ],
        "'NUMBER": [
          -1,
          296
        ],
        "'RATIONAL": [
          -1,
          296
        ],
        "'ROUGHRATIONAL": [
          -1,
          296
        ],
        "'TRUE": [
          -1,
          296
        ],
        "'FALSE": [
          -1,
          296
        ],
        "'LAM": [
          -1,
          296
        ],
        "'METHOD": [
          -1,
          296
        ],
        "'LBRACK": [
          -1,
          296
        ],
        "'TABLE": [
          -1,
          296
        ],
        "'REACTOR": [
          -1,
          296
        ],
        "'IF": [
          -1,
          296
        ],
        "'ASK": [
          -1,
          296
        ],
        "'CASES": [
          -1,
          296
        ],
        "'FOR": [
          -1,
          296
        ],
        "'TABLE-SELECT": [
          -1,
          296
        ],
        "'TABLE-FILTER": [
          -1,
          296
        ],
        "'TABLE-ORDER": [
          -1,
          296
        ],
        "'TABLE-EXTRACT": [
          -1,
          296
        ],
        "'TABLE-UPDATE": [
          -1,
          296
        ],
        "'TABLE-EXTEND": [
          -1,
          296
        ],
        "'LOAD-TABLE": [
          -1,
          296
        ]
      },
      {
        "'NAME": [
          -1,
          298
        ],
        "'STRING": [
          -1,
          298
        ],
        "'PARENSPACE": [
          -1,
          298
        ],
        "'LBRACE": [
          -1,
          298
        ],
        "'LET": [
          -1,
          298
        ],
        "'BLOCK": [
          -1,
          298
        ],
        "'LETREC": [
          -1,
          298
        ],
        "'TYPE-LET": [
          -1,
          298
        ],
        "'PARENAFTERBRACE": [
          -1,
          298
        ],
        "'PERCENT": [
          -1,
          298
        ],
        "'DOTDOTDOT": [
          -1,
          298
        ],
        "'NUMBER": [
          -1,
          298
        ],
        "'RATIONAL": [
          -1,
          298
        ],
        "'ROUGHRATIONAL": [
          -1,
          298
        ],
        "'TRUE": [
          -1,
          298
        ],
        "'FALSE": [
          -1,
          298
        ],
        "'LAM": [
          -1,
          298
        ],
        "'METHOD": [
          -1,
          298
        ],
        "'LBRACK": [
          -1,
          298
        ],
        "'TABLE": [
          -1,
          298
        ],
        "'REACTOR": [
          -1,
          298
        ],
        "'IF": [
          -1,
          298
        ],
        "'ASK": [
          -1,
          298
        ],
        "'CASES": [
          -1,
          298
        ],
        "'FOR": [
          -1,
          298
        ],
        "'TABLE-SELECT": [
          -1,
          298
        ],
        "'TABLE-FILTER": [
          -1,
          298
        ],
        "'TABLE-ORDER": [
          -1,
          298
        ],
        "'TABLE-EXTRACT": [
          -1,
          298
        ],
        "'TABLE-UPDATE": [
          -1,
          298
        ],
        "'TABLE-EXTEND": [
          -1,
          298
        ],
        "'LOAD-TABLE": [
          -1,
          298
        ]
      },
      {
        "'NAME": [
          -1,
          300
        ],
        "'STRING": [
          -1,
          300
        ],
        "'PARENSPACE": [
          -1,
          300
        ],
        "'LBRACE": [
          -1,
          300
        ],
        "'LET": [
          -1,
          300
        ],
        "'BLOCK": [
          -1,
          300
        ],
        "'LETREC": [
          -1,
          300
        ],
        "'TYPE-LET": [
          -1,
          300
        ],
        "'PARENAFTERBRACE": [
          -1,
          300
        ],
        "'PERCENT": [
          -1,
          300
        ],
        "'DOTDOTDOT": [
          -1,
          300
        ],
        "'NUMBER": [
          -1,
          300
        ],
        "'RATIONAL": [
          -1,
          300
        ],
        "'ROUGHRATIONAL": [
          -1,
          300
        ],
        "'TRUE": [
          -1,
          300
        ],
        "'FALSE": [
          -1,
          300
        ],
        "'LAM": [
          -1,
          300
        ],
        "'METHOD": [
          -1,
          300
        ],
        "'LBRACK": [
          -1,
          300
        ],
        "'TABLE": [
          -1,
          300
        ],
        "'REACTOR": [
          -1,
          300
        ],
        "'IF": [
          -1,
          300
        ],
        "'ASK": [
          -1,
          300
        ],
        "'CASES": [
          -1,
          300
        ],
        "'FOR": [
          -1,
          300
        ],
        "'TABLE-SELECT": [
          -1,
          300
        ],
        "'TABLE-FILTER": [
          -1,
          300
        ],
        "'TABLE-ORDER": [
          -1,
          300
        ],
        "'TABLE-EXTRACT": [
          -1,
          300
        ],
        "'TABLE-UPDATE": [
          -1,
          300
        ],
        "'TABLE-EXTEND": [
          -1,
          300
        ],
        "'LOAD-TABLE": [
          -1,
          300
        ]
      },
      {
        "$": [
          -1,
          302
        ],
        "'END": [
          -1,
          302
        ],
        "'NAME": [
          -1,
          302
        ],
        "'STRING": [
          -1,
          302
        ],
        "'TYPE": [
          -1,
          302
        ],
        "'DATA": [
          -1,
          302
        ],
        "'PARENSPACE": [
          -1,
          302
        ],
        "'SPY": [
          -1,
          302
        ],
        "'NEWTYPE": [
          -1,
          302
        ],
        "'LBRACE": [
          -1,
          302
        ],
        "'RBRACE": [
          -1,
          302
        ],
        "'SHADOW": [
          -1,
          302
        ],
        "'LET": [
          -1,
          302
        ],
        "'BLOCK": [
          -1,
          302
        ],
        "'LETREC": [
          -1,
          302
        ],
        "'TYPE-LET": [
          -1,
          302
        ],
        "'FUN": [
          -1,
          302
        ],
        "'PARENAFTERBRACE": [
          -1,
          302
        ],
        "'WHERE": [
          -1,
          302
        ],
        "'CHECK": [
          -1,
          302
        ],
        "'EXAMPLES": [
          -1,
          302
        ],
        "'CHECKCOLON": [
          -1,
          302
        ],
        "'EXAMPLESCOLON": [
          -1,
          302
        ],
        "'BECAUSE": [
          -1,
          302
        ],
        "'BAR": [
          -1,
          302
        ],
        "'VAR": [
          -1,
          302
        ],
        "'REC": [
          -1,
          302
        ],
        "'WHEN": [
          -1,
          302
        ],
        "'DOTDOTDOT": [
          -1,
          302
        ],
        "'NUMBER": [
          -1,
          302
        ],
        "'RATIONAL": [
          -1,
          302
        ],
        "'ROUGHRATIONAL": [
          -1,
          302
        ],
        "'TRUE": [
          -1,
          302
        ],
        "'FALSE": [
          -1,
          302
        ],
        "'LAM": [
          -1,
          302
        ],
        "'METHOD": [
          -1,
          302
        ],
        "'LBRACK": [
          -1,
          302
        ],
        "'TABLE": [
          -1,
          302
        ],
        "'REACTOR": [
          -1,
          302
        ],
        "'IF": [
          -1,
          302
        ],
        "'ELSECOLON": [
          -1,
          302
        ],
        "'ELSEIF": [
          -1,
          302
        ],
        "'ASK": [
          -1,
          302
        ],
        "'CASES": [
          -1,
          302
        ],
        "'FOR": [
          -1,
          302
        ],
        "'TABLE-SELECT": [
          -1,
          302
        ],
        "'TABLE-FILTER": [
          -1,
          302
        ],
        "'TABLE-ORDER": [
          -1,
          302
        ],
        "'TABLE-EXTRACT": [
          -1,
          302
        ],
        "'TABLE-UPDATE": [
          -1,
          302
        ],
        "'TABLE-EXTEND": [
          -1,
          302
        ],
        "'LOAD-TABLE": [
          -1,
          302
        ]
      },
      {
        "'AS": [
          294
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          295
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'COLON": [
          -1,
          304
        ],
        "'PARENNOSPACE": [
          -1,
          46
        ],
        "'TIMES": [
          -1,
          46
        ],
        "'DOT": [
          -1,
          46
        ],
        "'RBRACE": [
          -1,
          46
        ],
        "'SEMI": [
          -1,
          46
        ],
        "'LANGLE": [
          -1,
          46
        ],
        "'LT": [
          -1,
          46
        ],
        "'GT": [
          -1,
          46
        ],
        "'PLUS": [
          -1,
          46
        ],
        "'DASH": [
          -1,
          46
        ],
        "'SLASH": [
          -1,
          46
        ],
        "'LEQ": [
          -1,
          46
        ],
        "'GEQ": [
          -1,
          46
        ],
        "'EQUALEQUAL": [
          -1,
          46
        ],
        "'SPACESHIP": [
          -1,
          46
        ],
        "'EQUALTILDE": [
          -1,
          46
        ],
        "'NEQ": [
          -1,
          46
        ],
        "'AND": [
          -1,
          46
        ],
        "'OR": [
          -1,
          46
        ],
        "'CARET": [
          -1,
          46
        ],
        "'LBRACK": [
          -1,
          46
        ],
        "'BANG": [
          -1,
          46
        ]
      },
      {
        "tuple-fields_I1*": [
          296
        ],
        "'RBRACE": [
          -1,
          306,
          308
        ],
        "'SEMI": [
          -1,
          308
        ]
      },
      {
        "'PARENNOSPACE": [
          297
        ],
        "args": [
          298
        ],
        "args_I0": [
          299
        ],
        "'PARENAFTERBRACE": [
          300
        ]
      },
      {
        "binding": [
          301
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "tuple-binding_I1": [
          302
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "'NAME": [
          -1,
          24
        ]
      },
      {
        "$": [
          -1,
          310
        ],
        "'COLON": [
          -1,
          310
        ],
        "'END": [
          -1,
          310
        ],
        "'COMMA": [
          -1,
          310
        ],
        "'NAME": [
          -1,
          310
        ],
        "'PARENNOSPACE": [
          -1,
          310
        ],
        "'STRING": [
          -1,
          310
        ],
        "'RPAREN": [
          -1,
          310
        ],
        "'TYPE": [
          -1,
          310
        ],
        "'DATA": [
          -1,
          310
        ],
        "'TIMES": [
          -1,
          310
        ],
        "'PARENSPACE": [
          -1,
          310
        ],
        "'DOT": [
          -1,
          310
        ],
        "'SPY": [
          -1,
          310
        ],
        "'NEWTYPE": [
          -1,
          310
        ],
        "'LBRACE": [
          -1,
          310
        ],
        "'RBRACE": [
          -1,
          310
        ],
        "'SEMI": [
          -1,
          310
        ],
        "'SHADOW": [
          -1,
          310
        ],
        "'LET": [
          -1,
          310
        ],
        "'BLOCK": [
          -1,
          310
        ],
        "'LETREC": [
          -1,
          310
        ],
        "'TYPE-LET": [
          -1,
          310
        ],
        "'FUN": [
          -1,
          310
        ],
        "'LANGLE": [
          -1,
          310
        ],
        "'LT": [
          -1,
          310
        ],
        "'GT": [
          -1,
          310
        ],
        "'PARENAFTERBRACE": [
          -1,
          310
        ],
        "'WHERE": [
          -1,
          310
        ],
        "'CHECK": [
          -1,
          310
        ],
        "'EXAMPLES": [
          -1,
          310
        ],
        "'CHECKCOLON": [
          -1,
          310
        ],
        "'EXAMPLESCOLON": [
          -1,
          310
        ],
        "'BECAUSE": [
          -1,
          310
        ],
        "'BAR": [
          -1,
          310
        ],
        "'SHARING": [
          -1,
          310
        ],
        "'VAR": [
          -1,
          310
        ],
        "'REC": [
          -1,
          310
        ],
        "'WHEN": [
          -1,
          310
        ],
        "'PLUS": [
          -1,
          310
        ],
        "'DASH": [
          -1,
          310
        ],
        "'SLASH": [
          -1,
          310
        ],
        "'LEQ": [
          -1,
          310
        ],
        "'GEQ": [
          -1,
          310
        ],
        "'EQUALEQUAL": [
          -1,
          310
        ],
        "'SPACESHIP": [
          -1,
          310
        ],
        "'EQUALTILDE": [
          -1,
          310
        ],
        "'NEQ": [
          -1,
          310
        ],
        "'AND": [
          -1,
          310
        ],
        "'OR": [
          -1,
          310
        ],
        "'CARET": [
          -1,
          310
        ],
        "'IS": [
          -1,
          310
        ],
        "'ISEQUALEQUAL": [
          -1,
          310
        ],
        "'ISEQUALTILDE": [
          -1,
          310
        ],
        "'ISSPACESHIP": [
          -1,
          310
        ],
        "'ISROUGHLY": [
          -1,
          310
        ],
        "'ISNOT": [
          -1,
          310
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          310
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          310
        ],
        "'ISNOTSPACESHIP": [
          -1,
          310
        ],
        "'RAISES": [
          -1,
          310
        ],
        "'RAISESOTHER": [
          -1,
          310
        ],
        "'SATISFIES": [
          -1,
          310
        ],
        "'SATISFIESNOT": [
          -1,
          310
        ],
        "'RAISESSATISFIES": [
          -1,
          310
        ],
        "'RAISESVIOLATES": [
          -1,
          310
        ],
        "'RAISESNOT": [
          -1,
          310
        ],
        "'DOTDOTDOT": [
          -1,
          310
        ],
        "'NUMBER": [
          -1,
          310
        ],
        "'RATIONAL": [
          -1,
          310
        ],
        "'ROUGHRATIONAL": [
          -1,
          310
        ],
        "'TRUE": [
          -1,
          310
        ],
        "'FALSE": [
          -1,
          310
        ],
        "'LAM": [
          -1,
          310
        ],
        "'METHOD": [
          -1,
          310
        ],
        "'LBRACK": [
          -1,
          310
        ],
        "'RBRACK": [
          -1,
          310
        ],
        "'TABLE": [
          -1,
          310
        ],
        "'ROW": [
          -1,
          310
        ],
        "'REACTOR": [
          -1,
          310
        ],
        "'BANG": [
          -1,
          310
        ],
        "'IF": [
          -1,
          310
        ],
        "'ELSECOLON": [
          -1,
          310
        ],
        "'ELSEIF": [
          -1,
          310
        ],
        "'ASK": [
          -1,
          310
        ],
        "'THENCOLON": [
          -1,
          310
        ],
        "'CASES": [
          -1,
          310
        ],
        "'FOR": [
          -1,
          310
        ],
        "'TABLE-SELECT": [
          -1,
          310
        ],
        "'TABLE-FILTER": [
          -1,
          310
        ],
        "'USING": [
          -1,
          310
        ],
        "'TABLE-ORDER": [
          -1,
          310
        ],
        "'TABLE-EXTRACT": [
          -1,
          310
        ],
        "'TABLE-UPDATE": [
          -1,
          310
        ],
        "'TABLE-EXTEND": [
          -1,
          310
        ],
        "'OF": [
          -1,
          310
        ],
        "'LOAD-TABLE": [
          -1,
          310
        ],
        "'SOURCECOLON": [
          -1,
          310
        ],
        "'SANITIZE": [
          -1,
          310
        ]
      },
      {
        "'COLON": [
          303
        ],
        "'BLOCK": [
          304
        ],
        "lambda-expr_A1_I2": [
          305
        ]
      },
      {
        "'COLON": [
          -1,
          312
        ],
        "'NAME": [
          -1,
          312
        ],
        "'PARENNOSPACE": [
          -1,
          312
        ],
        "'PARENSPACE": [
          -1,
          312
        ],
        "'EQUALS": [
          -1,
          312
        ],
        "'LBRACE": [
          -1,
          312
        ],
        "'PARENAFTERBRACE": [
          -1,
          312
        ],
        "'THINARROW": [
          -1,
          312
        ]
      },
      {
        "'COLON": [
          -1,
          314
        ],
        "'NAME": [
          -1,
          314
        ],
        "'PARENNOSPACE": [
          -1,
          314
        ],
        "'PARENSPACE": [
          -1,
          314
        ],
        "'EQUALS": [
          -1,
          314
        ],
        "'LBRACE": [
          -1,
          314
        ],
        "'PARENAFTERBRACE": [
          -1,
          314
        ],
        "'THINARROW": [
          -1,
          314
        ]
      },
      {
        "'NAME": [
          306
        ],
        "comma-names": [
          307
        ]
      },
      {
        "'NAME": [
          -1,
          316
        ]
      },
      {
        "'NAME": [
          -1,
          318
        ]
      },
      {
        "'NAME": [
          308
        ],
        "key": [
          309
        ]
      },
      {
        "'NAME": [
          308
        ],
        "ty-params": [
          187
        ],
        "fun-header": [
          229
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "key": [
          310
        ],
        "'PARENNOSPACE": [
          -1,
          96,
          98
        ],
        "'PARENAFTERBRACE": [
          -1,
          96,
          98
        ]
      },
      {
        "'RBRACE": [
          311
        ]
      },
      {
        "'RBRACE": [
          312
        ]
      },
      {
        "obj-fields_I1*": [
          313
        ],
        "'END": [
          -1,
          320,
          322
        ],
        "'COMMA": [
          -1,
          322
        ],
        "'RBRACE": [
          -1,
          320,
          322
        ]
      },
      {
        "'COLON": [
          314
        ]
      },
      {
        "name-binding_I2?": [
          315
        ],
        "name-binding_I2": [
          316
        ],
        "'COLONCOLON": [
          317
        ],
        "'FROM": [
          -1,
          324,
          326
        ],
        "'COLON": [
          -1,
          324,
          326
        ],
        "'COMMA": [
          -1,
          324,
          326
        ],
        "'RPAREN": [
          -1,
          324,
          326
        ],
        "'EQUALS": [
          -1,
          324,
          326
        ],
        "'RBRACE": [
          -1,
          324,
          326
        ],
        "'SEMI": [
          -1,
          324,
          326
        ]
      },
      {
        "'COLON": [
          -1,
          328
        ],
        "'COMMA": [
          -1,
          328
        ],
        "'BLOCK": [
          -1,
          328
        ]
      },
      {
        "'COLON": [
          -1,
          330
        ],
        "'COMMA": [
          -1,
          330
        ],
        "'BLOCK": [
          -1,
          330
        ]
      },
      {
        "tuple-binding_I1*": [
          188
        ],
        "'NAME": [
          -1,
          94
        ],
        "'LBRACE": [
          -1,
          94
        ],
        "'SHADOW": [
          -1,
          94
        ]
      },
      {
        "multi-let-expr_I2*": [
          318
        ],
        "'COLON": [
          -1,
          332
        ],
        "'COMMA": [
          -1,
          332
        ],
        "'BLOCK": [
          -1,
          332
        ]
      },
      {
        "'END": [
          319
        ]
      },
      {
        "letrec-expr_I2*": [
          320
        ],
        "'COLON": [
          -1,
          334
        ],
        "'COMMA": [
          -1,
          334
        ],
        "'BLOCK": [
          -1,
          334
        ]
      },
      {
        "ty-params": [
          321
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'EQUALS": [
          -1,
          96,
          98
        ]
      },
      {
        "'NAME": [
          322
        ]
      },
      {
        "'COLON": [
          -1,
          336
        ],
        "'COMMA": [
          -1,
          336
        ],
        "'BLOCK": [
          -1,
          336
        ]
      },
      {
        "'COLON": [
          -1,
          338
        ],
        "'COMMA": [
          -1,
          338
        ],
        "'BLOCK": [
          -1,
          338
        ]
      },
      {
        "type-let-expr_I2*": [
          323
        ],
        "'COLON": [
          -1,
          340
        ],
        "'COMMA": [
          -1,
          340
        ],
        "'BLOCK": [
          -1,
          340
        ]
      },
      {
        "ty-params": [
          187
        ],
        "fun-header": [
          324
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'PARENNOSPACE": [
          -1,
          96,
          98
        ],
        "'PARENAFTERBRACE": [
          -1,
          96,
          98
        ]
      },
      {
        "'COLON": [
          325
        ]
      },
      {
        "'END": [
          326
        ]
      },
      {
        "'EQUALS": [
          327
        ]
      },
      {
        "'EQUALS": [
          328
        ]
      },
      {
        "'COLON": [
          329
        ],
        "'BLOCK": [
          330
        ],
        "when-expr_I2": [
          331
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          332
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "opt-comma-binops": [
          333
        ],
        "opt-comma-binops_I0?": [
          334
        ],
        "opt-comma-binops_I0": [
          335
        ],
        "comma-binops": [
          336
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ],
        "'RPAREN": [
          -1,
          342,
          344
        ]
      },
      {
        "'NAME": [
          337
        ],
        "'LBRACE": [
          338
        ]
      },
      {
        "'NAME": [
          339
        ],
        "'PARENNOSPACE": [
          340
        ],
        "record-ann": [
          341
        ],
        "'PARENSPACE": [
          342
        ],
        "ann": [
          343
        ],
        "'LBRACE": [
          344
        ],
        "'PARENAFTERBRACE": [
          345
        ],
        "name-ann": [
          346
        ],
        "arrow-ann": [
          347
        ],
        "app-ann": [
          348
        ],
        "pred-ann": [
          349
        ],
        "dot-ann": [
          350
        ],
        "tuple-ann": [
          351
        ],
        "arrow-ann_I0": [
          352
        ],
        "app-ann_I0": [
          353
        ]
      },
      {
        "'TIMES": [
          354
        ],
        "'LT": [
          355
        ],
        "'GT": [
          356
        ],
        "binop-expr_I1": [
          357
        ],
        "binop": [
          358
        ],
        "'PLUS": [
          359
        ],
        "'DASH": [
          360
        ],
        "'SLASH": [
          361
        ],
        "'LEQ": [
          362
        ],
        "'GEQ": [
          363
        ],
        "'EQUALEQUAL": [
          364
        ],
        "'SPACESHIP": [
          365
        ],
        "'EQUALTILDE": [
          366
        ],
        "'NEQ": [
          367
        ],
        "'AND": [
          368
        ],
        "'OR": [
          369
        ],
        "'CARET": [
          370
        ],
        "$": [
          -1,
          346
        ],
        "'COLON": [
          -1,
          346
        ],
        "'END": [
          -1,
          346
        ],
        "'COMMA": [
          -1,
          346
        ],
        "'NAME": [
          -1,
          346
        ],
        "'STRING": [
          -1,
          346
        ],
        "'RPAREN": [
          -1,
          346
        ],
        "'TYPE": [
          -1,
          346
        ],
        "'DATA": [
          -1,
          346
        ],
        "'PARENSPACE": [
          -1,
          346
        ],
        "'SPY": [
          -1,
          346
        ],
        "'NEWTYPE": [
          -1,
          346
        ],
        "'LBRACE": [
          -1,
          346
        ],
        "'RBRACE": [
          -1,
          346
        ],
        "'SEMI": [
          -1,
          346
        ],
        "'SHADOW": [
          -1,
          346
        ],
        "'LET": [
          -1,
          346
        ],
        "'BLOCK": [
          -1,
          346
        ],
        "'LETREC": [
          -1,
          346
        ],
        "'TYPE-LET": [
          -1,
          346
        ],
        "'FUN": [
          -1,
          346
        ],
        "'PARENAFTERBRACE": [
          -1,
          346
        ],
        "'WHERE": [
          -1,
          346
        ],
        "'CHECK": [
          -1,
          346
        ],
        "'EXAMPLES": [
          -1,
          346
        ],
        "'CHECKCOLON": [
          -1,
          346
        ],
        "'EXAMPLESCOLON": [
          -1,
          346
        ],
        "'BECAUSE": [
          -1,
          346
        ],
        "'BAR": [
          -1,
          346
        ],
        "'SHARING": [
          -1,
          346
        ],
        "'VAR": [
          -1,
          346
        ],
        "'REC": [
          -1,
          346
        ],
        "'WHEN": [
          -1,
          346
        ],
        "'IS": [
          -1,
          346
        ],
        "'ISEQUALEQUAL": [
          -1,
          346
        ],
        "'ISEQUALTILDE": [
          -1,
          346
        ],
        "'ISSPACESHIP": [
          -1,
          346
        ],
        "'ISROUGHLY": [
          -1,
          346
        ],
        "'ISNOT": [
          -1,
          346
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          346
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          346
        ],
        "'ISNOTSPACESHIP": [
          -1,
          346
        ],
        "'RAISES": [
          -1,
          346
        ],
        "'RAISESOTHER": [
          -1,
          346
        ],
        "'SATISFIES": [
          -1,
          346
        ],
        "'SATISFIESNOT": [
          -1,
          346
        ],
        "'RAISESSATISFIES": [
          -1,
          346
        ],
        "'RAISESVIOLATES": [
          -1,
          346
        ],
        "'RAISESNOT": [
          -1,
          346
        ],
        "'DOTDOTDOT": [
          -1,
          346
        ],
        "'NUMBER": [
          -1,
          346
        ],
        "'RATIONAL": [
          -1,
          346
        ],
        "'ROUGHRATIONAL": [
          -1,
          346
        ],
        "'TRUE": [
          -1,
          346
        ],
        "'FALSE": [
          -1,
          346
        ],
        "'LAM": [
          -1,
          346
        ],
        "'METHOD": [
          -1,
          346
        ],
        "'LBRACK": [
          -1,
          346
        ],
        "'RBRACK": [
          -1,
          346
        ],
        "'TABLE": [
          -1,
          346
        ],
        "'ROW": [
          -1,
          346
        ],
        "'REACTOR": [
          -1,
          346
        ],
        "'IF": [
          -1,
          346
        ],
        "'ELSECOLON": [
          -1,
          346
        ],
        "'ELSEIF": [
          -1,
          346
        ],
        "'ASK": [
          -1,
          346
        ],
        "'THENCOLON": [
          -1,
          346
        ],
        "'CASES": [
          -1,
          346
        ],
        "'FOR": [
          -1,
          346
        ],
        "'TABLE-SELECT": [
          -1,
          346
        ],
        "'TABLE-FILTER": [
          -1,
          346
        ],
        "'TABLE-ORDER": [
          -1,
          346
        ],
        "'TABLE-EXTRACT": [
          -1,
          346
        ],
        "'TABLE-UPDATE": [
          -1,
          346
        ],
        "'TABLE-EXTEND": [
          -1,
          346
        ],
        "'LOAD-TABLE": [
          -1,
          346
        ]
      },
      {
        "$": [
          -1,
          348
        ],
        "'COLON": [
          -1,
          348
        ],
        "'END": [
          -1,
          348
        ],
        "'COMMA": [
          -1,
          348
        ],
        "'NAME": [
          -1,
          348
        ],
        "'PARENNOSPACE": [
          -1,
          348
        ],
        "'STRING": [
          -1,
          348
        ],
        "'RPAREN": [
          -1,
          348
        ],
        "'TYPE": [
          -1,
          348
        ],
        "'DATA": [
          -1,
          348
        ],
        "'TIMES": [
          -1,
          348
        ],
        "'PARENSPACE": [
          -1,
          348
        ],
        "'DOT": [
          -1,
          348
        ],
        "'SPY": [
          -1,
          348
        ],
        "'NEWTYPE": [
          -1,
          348
        ],
        "'LBRACE": [
          -1,
          348
        ],
        "'RBRACE": [
          -1,
          348
        ],
        "'SEMI": [
          -1,
          348
        ],
        "'SHADOW": [
          -1,
          348
        ],
        "'LET": [
          -1,
          348
        ],
        "'BLOCK": [
          -1,
          348
        ],
        "'LETREC": [
          -1,
          348
        ],
        "'TYPE-LET": [
          -1,
          348
        ],
        "'FUN": [
          -1,
          348
        ],
        "'LANGLE": [
          -1,
          348
        ],
        "'LT": [
          -1,
          348
        ],
        "'GT": [
          -1,
          348
        ],
        "'PARENAFTERBRACE": [
          -1,
          348
        ],
        "'WHERE": [
          -1,
          348
        ],
        "'CHECK": [
          -1,
          348
        ],
        "'EXAMPLES": [
          -1,
          348
        ],
        "'CHECKCOLON": [
          -1,
          348
        ],
        "'EXAMPLESCOLON": [
          -1,
          348
        ],
        "'BECAUSE": [
          -1,
          348
        ],
        "'BAR": [
          -1,
          348
        ],
        "'SHARING": [
          -1,
          348
        ],
        "'VAR": [
          -1,
          348
        ],
        "'REC": [
          -1,
          348
        ],
        "'WHEN": [
          -1,
          348
        ],
        "'PLUS": [
          -1,
          348
        ],
        "'DASH": [
          -1,
          348
        ],
        "'SLASH": [
          -1,
          348
        ],
        "'LEQ": [
          -1,
          348
        ],
        "'GEQ": [
          -1,
          348
        ],
        "'EQUALEQUAL": [
          -1,
          348
        ],
        "'SPACESHIP": [
          -1,
          348
        ],
        "'EQUALTILDE": [
          -1,
          348
        ],
        "'NEQ": [
          -1,
          348
        ],
        "'AND": [
          -1,
          348
        ],
        "'OR": [
          -1,
          348
        ],
        "'CARET": [
          -1,
          348
        ],
        "'IS": [
          -1,
          348
        ],
        "'ISEQUALEQUAL": [
          -1,
          348
        ],
        "'ISEQUALTILDE": [
          -1,
          348
        ],
        "'ISSPACESHIP": [
          -1,
          348
        ],
        "'ISROUGHLY": [
          -1,
          348
        ],
        "'ISNOT": [
          -1,
          348
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          348
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          348
        ],
        "'ISNOTSPACESHIP": [
          -1,
          348
        ],
        "'RAISES": [
          -1,
          348
        ],
        "'RAISESOTHER": [
          -1,
          348
        ],
        "'SATISFIES": [
          -1,
          348
        ],
        "'SATISFIESNOT": [
          -1,
          348
        ],
        "'RAISESSATISFIES": [
          -1,
          348
        ],
        "'RAISESVIOLATES": [
          -1,
          348
        ],
        "'RAISESNOT": [
          -1,
          348
        ],
        "'DOTDOTDOT": [
          -1,
          348
        ],
        "'NUMBER": [
          -1,
          348
        ],
        "'RATIONAL": [
          -1,
          348
        ],
        "'ROUGHRATIONAL": [
          -1,
          348
        ],
        "'TRUE": [
          -1,
          348
        ],
        "'FALSE": [
          -1,
          348
        ],
        "'LAM": [
          -1,
          348
        ],
        "'METHOD": [
          -1,
          348
        ],
        "'LBRACK": [
          -1,
          348
        ],
        "'RBRACK": [
          -1,
          348
        ],
        "'TABLE": [
          -1,
          348
        ],
        "'ROW": [
          -1,
          348
        ],
        "'REACTOR": [
          -1,
          348
        ],
        "'BANG": [
          -1,
          348
        ],
        "'IF": [
          -1,
          348
        ],
        "'ELSECOLON": [
          -1,
          348
        ],
        "'ELSEIF": [
          -1,
          348
        ],
        "'ASK": [
          -1,
          348
        ],
        "'THENCOLON": [
          -1,
          348
        ],
        "'CASES": [
          -1,
          348
        ],
        "'FOR": [
          -1,
          348
        ],
        "'TABLE-SELECT": [
          -1,
          348
        ],
        "'TABLE-FILTER": [
          -1,
          348
        ],
        "'USING": [
          -1,
          348
        ],
        "'TABLE-ORDER": [
          -1,
          348
        ],
        "'TABLE-EXTRACT": [
          -1,
          348
        ],
        "'TABLE-UPDATE": [
          -1,
          348
        ],
        "'TABLE-EXTEND": [
          -1,
          348
        ],
        "'OF": [
          -1,
          348
        ],
        "'LOAD-TABLE": [
          -1,
          348
        ],
        "'SOURCECOLON": [
          -1,
          348
        ],
        "'SANITIZE": [
          -1,
          348
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          371
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          372
        ],
        "'LBRACE": [
          373
        ]
      },
      {
        "'RPAREN": [
          374
        ]
      },
      {
        "'COLON": [
          375
        ],
        "'BLOCK": [
          376
        ],
        "lambda-expr_A0_I2": [
          377
        ]
      },
      {
        "'COLON": [
          378
        ],
        "'BLOCK": [
          379
        ],
        "method-expr_I2": [
          380
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          381
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          -1,
          350
        ],
        "'STRING": [
          -1,
          350
        ],
        "'PARENSPACE": [
          -1,
          350
        ],
        "'LBRACE": [
          -1,
          350
        ],
        "'LET": [
          -1,
          350
        ],
        "'BLOCK": [
          -1,
          350
        ],
        "'LETREC": [
          -1,
          350
        ],
        "'TYPE-LET": [
          -1,
          350
        ],
        "'PARENAFTERBRACE": [
          -1,
          350
        ],
        "'DOTDOTDOT": [
          -1,
          350
        ],
        "'NUMBER": [
          -1,
          350
        ],
        "'RATIONAL": [
          -1,
          350
        ],
        "'ROUGHRATIONAL": [
          -1,
          350
        ],
        "'TRUE": [
          -1,
          350
        ],
        "'FALSE": [
          -1,
          350
        ],
        "'LAM": [
          -1,
          350
        ],
        "'METHOD": [
          -1,
          350
        ],
        "'LBRACK": [
          -1,
          350
        ],
        "'TABLE": [
          -1,
          350
        ],
        "'REACTOR": [
          -1,
          350
        ],
        "'IF": [
          -1,
          350
        ],
        "'ASK": [
          -1,
          350
        ],
        "'CASES": [
          -1,
          350
        ],
        "'FOR": [
          -1,
          350
        ],
        "'TABLE-SELECT": [
          -1,
          350
        ],
        "'TABLE-FILTER": [
          -1,
          350
        ],
        "'TABLE-ORDER": [
          -1,
          350
        ],
        "'TABLE-EXTRACT": [
          -1,
          350
        ],
        "'TABLE-UPDATE": [
          -1,
          350
        ],
        "'TABLE-EXTEND": [
          -1,
          350
        ],
        "'LOAD-TABLE": [
          -1,
          350
        ]
      },
      {
        "table-rows": [
          382
        ],
        "table-rows_I0?": [
          383
        ],
        "table-rows_I0": [
          384
        ],
        "table-rows_I0_I0*": [
          385
        ],
        "'END": [
          -1,
          352,
          354
        ],
        "'ROW": [
          -1,
          356
        ]
      },
      {
        "'END": [
          -1,
          358
        ],
        "'ROW": [
          -1,
          358
        ],
        "'SOURCECOLON": [
          -1,
          358
        ],
        "'SANITIZE": [
          -1,
          358
        ]
      },
      {
        "'END": [
          -1,
          360
        ],
        "'ROW": [
          -1,
          360
        ],
        "'SOURCECOLON": [
          -1,
          360
        ],
        "'SANITIZE": [
          -1,
          360
        ]
      },
      {
        "'NAME": [
          386
        ],
        "table-header": [
          387
        ],
        "table-headers_I0_I0": [
          388
        ],
        "list-table-header": [
          389
        ]
      },
      {
        "'NAME": [
          308
        ],
        "fields": [
          390
        ],
        "'METHOD": [
          391
        ],
        "key": [
          392
        ],
        "field": [
          393
        ]
      },
      {
        "'COLON": [
          394
        ],
        "'BLOCK": [
          395
        ],
        "if-expr_I2": [
          396
        ]
      },
      {
        "'END": [
          -1,
          362
        ],
        "'BAR": [
          -1,
          362
        ]
      },
      {
        "'END": [
          -1,
          364
        ],
        "'BAR": [
          -1,
          364
        ]
      },
      {
        "if-pipe-expr_I2*": [
          397
        ],
        "'END": [
          -1,
          366
        ],
        "'BAR": [
          -1,
          366
        ]
      },
      {
        "'NAME": [
          -1,
          368
        ],
        "'PARENNOSPACE": [
          -1,
          368
        ],
        "'PARENSPACE": [
          -1,
          368
        ],
        "'LBRACE": [
          -1,
          368
        ],
        "'PARENAFTERBRACE": [
          -1,
          368
        ]
      },
      {
        "'NAME": [
          -1,
          370
        ],
        "'PARENNOSPACE": [
          -1,
          370
        ],
        "'PARENSPACE": [
          -1,
          370
        ],
        "'LBRACE": [
          -1,
          370
        ],
        "'PARENAFTERBRACE": [
          -1,
          370
        ]
      },
      {
        "'NAME": [
          339
        ],
        "'PARENNOSPACE": [
          340
        ],
        "record-ann": [
          341
        ],
        "'PARENSPACE": [
          342
        ],
        "ann": [
          398
        ],
        "'LBRACE": [
          344
        ],
        "'PARENAFTERBRACE": [
          345
        ],
        "name-ann": [
          346
        ],
        "arrow-ann": [
          347
        ],
        "app-ann": [
          348
        ],
        "pred-ann": [
          349
        ],
        "dot-ann": [
          350
        ],
        "tuple-ann": [
          351
        ],
        "arrow-ann_I0": [
          352
        ],
        "app-ann_I0": [
          353
        ]
      },
      {
        "'PARENNOSPACE": [
          399
        ],
        "'DOT": [
          221
        ],
        "'LANGLE": [
          222
        ],
        "app-args": [
          224
        ],
        "'LBRACK": [
          225
        ],
        "'BANG": [
          226
        ]
      },
      {
        "table-select_I2*": [
          400
        ],
        "'FROM": [
          -1,
          372
        ],
        "'COMMA": [
          -1,
          372
        ]
      },
      {
        "'PARENNOSPACE": [
          220
        ],
        "'DOT": [
          221
        ],
        "'LANGLE": [
          222
        ],
        "app-args": [
          224
        ],
        "'LBRACK": [
          225
        ],
        "'BANG": [
          226
        ],
        "table-filter_I2?": [
          401
        ],
        "table-filter_I2": [
          402
        ],
        "'USING": [
          403
        ],
        "'COLON": [
          -1,
          374
        ]
      },
      {
        "'COLON": [
          404
        ],
        "'PARENNOSPACE": [
          220
        ],
        "'DOT": [
          221
        ],
        "'LANGLE": [
          222
        ],
        "app-args": [
          224
        ],
        "'LBRACK": [
          225
        ],
        "'BANG": [
          226
        ]
      },
      {
        "'FROM": [
          405
        ]
      },
      {
        "'PARENNOSPACE": [
          220
        ],
        "'DOT": [
          221
        ],
        "'LANGLE": [
          222
        ],
        "app-args": [
          224
        ],
        "'LBRACK": [
          225
        ],
        "'BANG": [
          226
        ],
        "'USING": [
          406
        ],
        "table-update_I2?": [
          407
        ],
        "table-update_I2": [
          408
        ],
        "'COLON": [
          -1,
          376
        ]
      },
      {
        "'PARENNOSPACE": [
          220
        ],
        "'DOT": [
          221
        ],
        "'LANGLE": [
          222
        ],
        "app-args": [
          224
        ],
        "'LBRACK": [
          225
        ],
        "'BANG": [
          226
        ],
        "'USING": [
          409
        ],
        "table-extend_I2?": [
          410
        ],
        "table-extend_I2": [
          411
        ],
        "'COLON": [
          -1,
          378
        ]
      },
      {
        "table-headers": [
          412
        ],
        "table-headers_I0?": [
          233
        ],
        "table-headers_I0": [
          234
        ],
        "table-headers_I0_I0*": [
          235
        ],
        "'END": [
          -1,
          208,
          210
        ],
        "'NAME": [
          -1,
          212
        ],
        "'SOURCECOLON": [
          -1,
          208,
          210
        ],
        "'SANITIZE": [
          -1,
          208,
          210
        ]
      },
      {
        "$": [
          -1,
          380
        ],
        "'INCLUDE": [
          -1,
          380
        ],
        "'IMPORT": [
          -1,
          380
        ],
        "'NAME": [
          -1,
          380
        ],
        "'STRING": [
          -1,
          380
        ],
        "'TYPE": [
          -1,
          380
        ],
        "'DATA": [
          -1,
          380
        ],
        "'PARENSPACE": [
          -1,
          380
        ],
        "'SPY": [
          -1,
          380
        ],
        "'NEWTYPE": [
          -1,
          380
        ],
        "'LBRACE": [
          -1,
          380
        ],
        "'SHADOW": [
          -1,
          380
        ],
        "'LET": [
          -1,
          380
        ],
        "'BLOCK": [
          -1,
          380
        ],
        "'LETREC": [
          -1,
          380
        ],
        "'TYPE-LET": [
          -1,
          380
        ],
        "'FUN": [
          -1,
          380
        ],
        "'PARENAFTERBRACE": [
          -1,
          380
        ],
        "'CHECK": [
          -1,
          380
        ],
        "'EXAMPLES": [
          -1,
          380
        ],
        "'CHECKCOLON": [
          -1,
          380
        ],
        "'EXAMPLESCOLON": [
          -1,
          380
        ],
        "'VAR": [
          -1,
          380
        ],
        "'REC": [
          -1,
          380
        ],
        "'WHEN": [
          -1,
          380
        ],
        "'DOTDOTDOT": [
          -1,
          380
        ],
        "'NUMBER": [
          -1,
          380
        ],
        "'RATIONAL": [
          -1,
          380
        ],
        "'ROUGHRATIONAL": [
          -1,
          380
        ],
        "'TRUE": [
          -1,
          380
        ],
        "'FALSE": [
          -1,
          380
        ],
        "'LAM": [
          -1,
          380
        ],
        "'METHOD": [
          -1,
          380
        ],
        "'LBRACK": [
          -1,
          380
        ],
        "'TABLE": [
          -1,
          380
        ],
        "'REACTOR": [
          -1,
          380
        ],
        "'IF": [
          -1,
          380
        ],
        "'ASK": [
          -1,
          380
        ],
        "'CASES": [
          -1,
          380
        ],
        "'FOR": [
          -1,
          380
        ],
        "'TABLE-SELECT": [
          -1,
          380
        ],
        "'TABLE-FILTER": [
          -1,
          380
        ],
        "'TABLE-ORDER": [
          -1,
          380
        ],
        "'TABLE-EXTRACT": [
          -1,
          380
        ],
        "'TABLE-UPDATE": [
          -1,
          380
        ],
        "'TABLE-EXTEND": [
          -1,
          380
        ],
        "'LOAD-TABLE": [
          -1,
          380
        ]
      },
      {
        "module-ref": [
          413
        ],
        "module-ref_I0*": [
          155
        ],
        "'NAME": [
          -1,
          44
        ]
      },
      {
        "'PARENNOSPACE": [
          414
        ],
        "$": [
          -1,
          382
        ],
        "'INCLUDE": [
          -1,
          382
        ],
        "'IMPORT": [
          -1,
          382
        ],
        "'NAME": [
          -1,
          382
        ],
        "'STRING": [
          -1,
          382
        ],
        "'TYPE": [
          -1,
          382
        ],
        "'DATA": [
          -1,
          382
        ],
        "'PARENSPACE": [
          -1,
          382
        ],
        "'SPY": [
          -1,
          382
        ],
        "'NEWTYPE": [
          -1,
          382
        ],
        "'LBRACE": [
          -1,
          382
        ],
        "'SHADOW": [
          -1,
          382
        ],
        "'LET": [
          -1,
          382
        ],
        "'BLOCK": [
          -1,
          382
        ],
        "'LETREC": [
          -1,
          382
        ],
        "'TYPE-LET": [
          -1,
          382
        ],
        "'FUN": [
          -1,
          382
        ],
        "'PARENAFTERBRACE": [
          -1,
          382
        ],
        "'CHECK": [
          -1,
          382
        ],
        "'EXAMPLES": [
          -1,
          382
        ],
        "'CHECKCOLON": [
          -1,
          382
        ],
        "'EXAMPLESCOLON": [
          -1,
          382
        ],
        "'VAR": [
          -1,
          382
        ],
        "'REC": [
          -1,
          382
        ],
        "'WHEN": [
          -1,
          382
        ],
        "'DOTDOTDOT": [
          -1,
          382
        ],
        "'NUMBER": [
          -1,
          382
        ],
        "'RATIONAL": [
          -1,
          382
        ],
        "'ROUGHRATIONAL": [
          -1,
          382
        ],
        "'TRUE": [
          -1,
          382
        ],
        "'FALSE": [
          -1,
          382
        ],
        "'LAM": [
          -1,
          382
        ],
        "'METHOD": [
          -1,
          382
        ],
        "'LBRACK": [
          -1,
          382
        ],
        "'TABLE": [
          -1,
          382
        ],
        "'REACTOR": [
          -1,
          382
        ],
        "'IF": [
          -1,
          382
        ],
        "'ASK": [
          -1,
          382
        ],
        "'CASES": [
          -1,
          382
        ],
        "'FOR": [
          -1,
          382
        ],
        "'TABLE-SELECT": [
          -1,
          382
        ],
        "'TABLE-FILTER": [
          -1,
          382
        ],
        "'TABLE-ORDER": [
          -1,
          382
        ],
        "'TABLE-EXTRACT": [
          -1,
          382
        ],
        "'TABLE-UPDATE": [
          -1,
          382
        ],
        "'TABLE-EXTEND": [
          -1,
          382
        ],
        "'LOAD-TABLE": [
          -1,
          382
        ]
      },
      {
        "$": [
          -1,
          384
        ],
        "'INCLUDE": [
          -1,
          384
        ],
        "'IMPORT": [
          -1,
          384
        ],
        "'AS": [
          -1,
          384
        ],
        "'NAME": [
          -1,
          384
        ],
        "'STRING": [
          -1,
          384
        ],
        "'TYPE": [
          -1,
          384
        ],
        "'DATA": [
          -1,
          384
        ],
        "'PARENSPACE": [
          -1,
          384
        ],
        "'SPY": [
          -1,
          384
        ],
        "'NEWTYPE": [
          -1,
          384
        ],
        "'LBRACE": [
          -1,
          384
        ],
        "'SHADOW": [
          -1,
          384
        ],
        "'LET": [
          -1,
          384
        ],
        "'BLOCK": [
          -1,
          384
        ],
        "'LETREC": [
          -1,
          384
        ],
        "'TYPE-LET": [
          -1,
          384
        ],
        "'FUN": [
          -1,
          384
        ],
        "'PARENAFTERBRACE": [
          -1,
          384
        ],
        "'CHECK": [
          -1,
          384
        ],
        "'EXAMPLES": [
          -1,
          384
        ],
        "'CHECKCOLON": [
          -1,
          384
        ],
        "'EXAMPLESCOLON": [
          -1,
          384
        ],
        "'VAR": [
          -1,
          384
        ],
        "'REC": [
          -1,
          384
        ],
        "'WHEN": [
          -1,
          384
        ],
        "'DOTDOTDOT": [
          -1,
          384
        ],
        "'NUMBER": [
          -1,
          384
        ],
        "'RATIONAL": [
          -1,
          384
        ],
        "'ROUGHRATIONAL": [
          -1,
          384
        ],
        "'TRUE": [
          -1,
          384
        ],
        "'FALSE": [
          -1,
          384
        ],
        "'LAM": [
          -1,
          384
        ],
        "'METHOD": [
          -1,
          384
        ],
        "'LBRACK": [
          -1,
          384
        ],
        "'TABLE": [
          -1,
          384
        ],
        "'REACTOR": [
          -1,
          384
        ],
        "'IF": [
          -1,
          384
        ],
        "'ASK": [
          -1,
          384
        ],
        "'CASES": [
          -1,
          384
        ],
        "'FOR": [
          -1,
          384
        ],
        "'TABLE-SELECT": [
          -1,
          384
        ],
        "'TABLE-FILTER": [
          -1,
          384
        ],
        "'TABLE-ORDER": [
          -1,
          384
        ],
        "'TABLE-EXTRACT": [
          -1,
          384
        ],
        "'TABLE-UPDATE": [
          -1,
          384
        ],
        "'TABLE-EXTEND": [
          -1,
          384
        ],
        "'LOAD-TABLE": [
          -1,
          384
        ]
      },
      {
        "$": [
          -1,
          386
        ],
        "'INCLUDE": [
          -1,
          386
        ],
        "'IMPORT": [
          -1,
          386
        ],
        "'AS": [
          -1,
          386
        ],
        "'NAME": [
          -1,
          386
        ],
        "'STRING": [
          -1,
          386
        ],
        "'TYPE": [
          -1,
          386
        ],
        "'DATA": [
          -1,
          386
        ],
        "'PARENSPACE": [
          -1,
          386
        ],
        "'SPY": [
          -1,
          386
        ],
        "'NEWTYPE": [
          -1,
          386
        ],
        "'LBRACE": [
          -1,
          386
        ],
        "'SHADOW": [
          -1,
          386
        ],
        "'LET": [
          -1,
          386
        ],
        "'BLOCK": [
          -1,
          386
        ],
        "'LETREC": [
          -1,
          386
        ],
        "'TYPE-LET": [
          -1,
          386
        ],
        "'FUN": [
          -1,
          386
        ],
        "'PARENAFTERBRACE": [
          -1,
          386
        ],
        "'CHECK": [
          -1,
          386
        ],
        "'EXAMPLES": [
          -1,
          386
        ],
        "'CHECKCOLON": [
          -1,
          386
        ],
        "'EXAMPLESCOLON": [
          -1,
          386
        ],
        "'VAR": [
          -1,
          386
        ],
        "'REC": [
          -1,
          386
        ],
        "'WHEN": [
          -1,
          386
        ],
        "'DOTDOTDOT": [
          -1,
          386
        ],
        "'NUMBER": [
          -1,
          386
        ],
        "'RATIONAL": [
          -1,
          386
        ],
        "'ROUGHRATIONAL": [
          -1,
          386
        ],
        "'TRUE": [
          -1,
          386
        ],
        "'FALSE": [
          -1,
          386
        ],
        "'LAM": [
          -1,
          386
        ],
        "'METHOD": [
          -1,
          386
        ],
        "'LBRACK": [
          -1,
          386
        ],
        "'TABLE": [
          -1,
          386
        ],
        "'REACTOR": [
          -1,
          386
        ],
        "'IF": [
          -1,
          386
        ],
        "'ASK": [
          -1,
          386
        ],
        "'CASES": [
          -1,
          386
        ],
        "'FOR": [
          -1,
          386
        ],
        "'TABLE-SELECT": [
          -1,
          386
        ],
        "'TABLE-FILTER": [
          -1,
          386
        ],
        "'TABLE-ORDER": [
          -1,
          386
        ],
        "'TABLE-EXTRACT": [
          -1,
          386
        ],
        "'TABLE-UPDATE": [
          -1,
          386
        ],
        "'TABLE-EXTEND": [
          -1,
          386
        ],
        "'LOAD-TABLE": [
          -1,
          386
        ]
      },
      {
        "'AS": [
          415
        ]
      },
      {
        "'PARENNOSPACE": [
          414
        ],
        "comma-names_I1*": [
          416
        ],
        "'FROM": [
          -1,
          388,
          390
        ],
        "'COMMA": [
          -1,
          390
        ],
        "'AS": [
          -1,
          382
        ]
      },
      {
        "'FROM": [
          417
        ]
      },
      {
        "'COLON": [
          418
        ]
      },
      {
        "$": [
          -1,
          392
        ],
        "'INCLUDE": [
          -1,
          392
        ],
        "'IMPORT": [
          -1,
          392
        ],
        "'NAME": [
          -1,
          392
        ],
        "'STRING": [
          -1,
          392
        ],
        "'TYPE": [
          -1,
          392
        ],
        "'DATA": [
          -1,
          392
        ],
        "'PROVIDE": [
          -1,
          392
        ],
        "'PROVIDE-TYPES": [
          -1,
          392
        ],
        "'PROVIDECOLON": [
          -1,
          392
        ],
        "'PARENSPACE": [
          -1,
          392
        ],
        "'SPY": [
          -1,
          392
        ],
        "'NEWTYPE": [
          -1,
          392
        ],
        "'LBRACE": [
          -1,
          392
        ],
        "'SHADOW": [
          -1,
          392
        ],
        "'LET": [
          -1,
          392
        ],
        "'BLOCK": [
          -1,
          392
        ],
        "'LETREC": [
          -1,
          392
        ],
        "'TYPE-LET": [
          -1,
          392
        ],
        "'FUN": [
          -1,
          392
        ],
        "'PARENAFTERBRACE": [
          -1,
          392
        ],
        "'CHECK": [
          -1,
          392
        ],
        "'EXAMPLES": [
          -1,
          392
        ],
        "'CHECKCOLON": [
          -1,
          392
        ],
        "'EXAMPLESCOLON": [
          -1,
          392
        ],
        "'VAR": [
          -1,
          392
        ],
        "'REC": [
          -1,
          392
        ],
        "'WHEN": [
          -1,
          392
        ],
        "'DOTDOTDOT": [
          -1,
          392
        ],
        "'NUMBER": [
          -1,
          392
        ],
        "'RATIONAL": [
          -1,
          392
        ],
        "'ROUGHRATIONAL": [
          -1,
          392
        ],
        "'TRUE": [
          -1,
          392
        ],
        "'FALSE": [
          -1,
          392
        ],
        "'LAM": [
          -1,
          392
        ],
        "'METHOD": [
          -1,
          392
        ],
        "'LBRACK": [
          -1,
          392
        ],
        "'TABLE": [
          -1,
          392
        ],
        "'REACTOR": [
          -1,
          392
        ],
        "'IF": [
          -1,
          392
        ],
        "'ASK": [
          -1,
          392
        ],
        "'CASES": [
          -1,
          392
        ],
        "'FOR": [
          -1,
          392
        ],
        "'TABLE-SELECT": [
          -1,
          392
        ],
        "'TABLE-FILTER": [
          -1,
          392
        ],
        "'TABLE-ORDER": [
          -1,
          392
        ],
        "'TABLE-EXTRACT": [
          -1,
          392
        ],
        "'TABLE-UPDATE": [
          -1,
          392
        ],
        "'TABLE-EXTEND": [
          -1,
          392
        ],
        "'LOAD-TABLE": [
          -1,
          392
        ]
      },
      {
        "'COLONCOLON": [
          419
        ]
      },
      {
        "'COMMA": [
          420
        ],
        "trailing-opt-comma-ann-field_I0_A0_I1?": [
          421
        ],
        "trailing-opt-comma-ann-field_I0_A0_I1": [
          422
        ],
        "'RBRACE": [
          -1,
          394,
          396
        ]
      },
      {
        "comma-ann-field_I1*": [
          423
        ],
        "'COMMA": [
          -1,
          398,
          400
        ],
        "'RPAREN": [
          -1,
          398,
          400
        ],
        "'RBRACE": [
          -1,
          398,
          400
        ]
      },
      {
        "'RBRACE": [
          424
        ]
      },
      {
        "'RBRACE": [
          -1,
          402
        ]
      },
      {
        "'NAME": [
          425
        ]
      },
      {
        "'END": [
          -1,
          404
        ],
        "'COMMA": [
          -1,
          404
        ]
      },
      {
        "'END": [
          -1,
          406
        ],
        "'COMMA": [
          -1,
          406
        ],
        "'HIDING": [
          -1,
          406
        ]
      },
      {
        "hiding-spec": [
          426
        ],
        "provide-data-spec_I2?": [
          427
        ],
        "provide-data-spec_I2": [
          428
        ],
        "'HIDING": [
          280
        ],
        "'END": [
          -1,
          408,
          410
        ],
        "'COMMA": [
          -1,
          408,
          410
        ]
      },
      {
        "'END": [
          -1,
          412
        ],
        "'COMMA": [
          -1,
          412
        ],
        "'HIDING": [
          -1,
          412
        ]
      },
      {
        "'END": [
          -1,
          414
        ],
        "'COMMA": [
          -1,
          414
        ],
        "'HIDING": [
          -1,
          414
        ]
      },
      {
        "'END": [
          -1,
          416
        ],
        "'COMMA": [
          -1,
          416
        ],
        "'HIDING": [
          -1,
          416
        ]
      },
      {
        "'END": [
          -1,
          418
        ],
        "'COMMA": [
          -1,
          418
        ]
      },
      {
        "$": [
          -1,
          420
        ],
        "'INCLUDE": [
          -1,
          420
        ],
        "'IMPORT": [
          -1,
          420
        ],
        "'NAME": [
          -1,
          420
        ],
        "'STRING": [
          -1,
          420
        ],
        "'TYPE": [
          -1,
          420
        ],
        "'DATA": [
          -1,
          420
        ],
        "'PROVIDE": [
          -1,
          420
        ],
        "'PROVIDE-TYPES": [
          -1,
          420
        ],
        "'PROVIDECOLON": [
          -1,
          420
        ],
        "'PARENSPACE": [
          -1,
          420
        ],
        "'SPY": [
          -1,
          420
        ],
        "'NEWTYPE": [
          -1,
          420
        ],
        "'LBRACE": [
          -1,
          420
        ],
        "'SHADOW": [
          -1,
          420
        ],
        "'LET": [
          -1,
          420
        ],
        "'BLOCK": [
          -1,
          420
        ],
        "'LETREC": [
          -1,
          420
        ],
        "'TYPE-LET": [
          -1,
          420
        ],
        "'FUN": [
          -1,
          420
        ],
        "'PARENAFTERBRACE": [
          -1,
          420
        ],
        "'CHECK": [
          -1,
          420
        ],
        "'EXAMPLES": [
          -1,
          420
        ],
        "'CHECKCOLON": [
          -1,
          420
        ],
        "'EXAMPLESCOLON": [
          -1,
          420
        ],
        "'VAR": [
          -1,
          420
        ],
        "'REC": [
          -1,
          420
        ],
        "'WHEN": [
          -1,
          420
        ],
        "'DOTDOTDOT": [
          -1,
          420
        ],
        "'NUMBER": [
          -1,
          420
        ],
        "'RATIONAL": [
          -1,
          420
        ],
        "'ROUGHRATIONAL": [
          -1,
          420
        ],
        "'TRUE": [
          -1,
          420
        ],
        "'FALSE": [
          -1,
          420
        ],
        "'LAM": [
          -1,
          420
        ],
        "'METHOD": [
          -1,
          420
        ],
        "'LBRACK": [
          -1,
          420
        ],
        "'TABLE": [
          -1,
          420
        ],
        "'REACTOR": [
          -1,
          420
        ],
        "'IF": [
          -1,
          420
        ],
        "'ASK": [
          -1,
          420
        ],
        "'CASES": [
          -1,
          420
        ],
        "'FOR": [
          -1,
          420
        ],
        "'TABLE-SELECT": [
          -1,
          420
        ],
        "'TABLE-FILTER": [
          -1,
          420
        ],
        "'TABLE-ORDER": [
          -1,
          420
        ],
        "'TABLE-EXTRACT": [
          -1,
          420
        ],
        "'TABLE-UPDATE": [
          -1,
          420
        ],
        "'TABLE-EXTEND": [
          -1,
          420
        ],
        "'LOAD-TABLE": [
          -1,
          420
        ]
      },
      {
        "'COMMA": [
          429
        ],
        "provide-block_A0_I1_I2?": [
          430
        ],
        "provide-block_A0_I1_I1": [
          431
        ],
        "provide-block_A0_I1_I2": [
          432
        ],
        "'END": [
          -1,
          422,
          424
        ]
      },
      {
        "'END": [
          -1,
          426
        ],
        "'COMMA": [
          -1,
          426
        ]
      },
      {
        "'END": [
          -1,
          428
        ],
        "'COMMA": [
          -1,
          428
        ]
      },
      {
        "'END": [
          -1,
          430
        ],
        "'COMMA": [
          -1,
          430
        ]
      },
      {
        "'PARENNOSPACE": [
          433
        ],
        "hiding-spec_I1": [
          434
        ],
        "'PARENSPACE": [
          435
        ]
      },
      {
        "'DOT": [
          436
        ],
        "'COLON": [
          -1,
          432
        ],
        "'END": [
          -1,
          432
        ],
        "'COMMA": [
          -1,
          432
        ],
        "'AS": [
          -1,
          432
        ],
        "'HIDING": [
          -1,
          432
        ]
      },
      {
        "'NAME": [
          -1,
          434
        ]
      },
      {
        "'NAME": [
          339
        ],
        "'PARENNOSPACE": [
          437
        ],
        "record-ann": [
          341
        ],
        "'PARENSPACE": [
          438
        ],
        "ann": [
          439
        ],
        "'LBRACE": [
          344
        ],
        "contract-stmt_I3": [
          440
        ],
        "noparen-arrow-ann": [
          441
        ],
        "'PARENAFTERBRACE": [
          442
        ],
        "name-ann": [
          346
        ],
        "arrow-ann": [
          347
        ],
        "app-ann": [
          348
        ],
        "pred-ann": [
          349
        ],
        "dot-ann": [
          350
        ],
        "tuple-ann": [
          351
        ],
        "noparen-arrow-ann_I0?": [
          443
        ],
        "noparen-arrow-ann_I0": [
          444
        ],
        "arrow-ann-args": [
          445
        ],
        "comma-anns": [
          446
        ],
        "arrow-ann-args_A1_I0": [
          447
        ],
        "arrow-ann_I0": [
          352
        ],
        "app-ann_I0": [
          353
        ],
        "'THINARROW": [
          -1,
          436
        ]
      },
      {
        "$": [
          -1,
          438
        ],
        "'END": [
          -1,
          438
        ],
        "'NAME": [
          -1,
          438
        ],
        "'STRING": [
          -1,
          438
        ],
        "'TYPE": [
          -1,
          438
        ],
        "'DATA": [
          -1,
          438
        ],
        "'PARENSPACE": [
          -1,
          438
        ],
        "'SPY": [
          -1,
          438
        ],
        "'NEWTYPE": [
          -1,
          438
        ],
        "'LBRACE": [
          -1,
          438
        ],
        "'RBRACE": [
          -1,
          438
        ],
        "'SHADOW": [
          -1,
          438
        ],
        "'LET": [
          -1,
          438
        ],
        "'BLOCK": [
          -1,
          438
        ],
        "'LETREC": [
          -1,
          438
        ],
        "'TYPE-LET": [
          -1,
          438
        ],
        "'FUN": [
          -1,
          438
        ],
        "'PARENAFTERBRACE": [
          -1,
          438
        ],
        "'WHERE": [
          -1,
          438
        ],
        "'CHECK": [
          -1,
          438
        ],
        "'EXAMPLES": [
          -1,
          438
        ],
        "'CHECKCOLON": [
          -1,
          438
        ],
        "'EXAMPLESCOLON": [
          -1,
          438
        ],
        "'BAR": [
          -1,
          438
        ],
        "'VAR": [
          -1,
          438
        ],
        "'REC": [
          -1,
          438
        ],
        "'WHEN": [
          -1,
          438
        ],
        "'DOTDOTDOT": [
          -1,
          438
        ],
        "'NUMBER": [
          -1,
          438
        ],
        "'RATIONAL": [
          -1,
          438
        ],
        "'ROUGHRATIONAL": [
          -1,
          438
        ],
        "'TRUE": [
          -1,
          438
        ],
        "'FALSE": [
          -1,
          438
        ],
        "'LAM": [
          -1,
          438
        ],
        "'METHOD": [
          -1,
          438
        ],
        "'LBRACK": [
          -1,
          438
        ],
        "'TABLE": [
          -1,
          438
        ],
        "'REACTOR": [
          -1,
          438
        ],
        "'IF": [
          -1,
          438
        ],
        "'ELSECOLON": [
          -1,
          438
        ],
        "'ELSEIF": [
          -1,
          438
        ],
        "'ASK": [
          -1,
          438
        ],
        "'CASES": [
          -1,
          438
        ],
        "'FOR": [
          -1,
          438
        ],
        "'TABLE-SELECT": [
          -1,
          438
        ],
        "'TABLE-FILTER": [
          -1,
          438
        ],
        "'TABLE-ORDER": [
          -1,
          438
        ],
        "'TABLE-EXTRACT": [
          -1,
          438
        ],
        "'TABLE-UPDATE": [
          -1,
          438
        ],
        "'TABLE-EXTEND": [
          -1,
          438
        ],
        "'LOAD-TABLE": [
          -1,
          438
        ]
      },
      {
        "'EQUALS": [
          448
        ]
      },
      {
        "'COLON": [
          449
        ]
      },
      {
        "'NAME": [
          450
        ],
        "spy-stmt_I3?": [
          451
        ],
        "spy-stmt_I3": [
          452
        ],
        "spy-contents": [
          453
        ],
        "spy-field": [
          454
        ],
        "id-expr": [
          455
        ],
        "'END": [
          -1,
          440
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          456
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          -1,
          442
        ],
        "'STRING": [
          -1,
          442
        ],
        "'PARENSPACE": [
          -1,
          442
        ],
        "'LBRACE": [
          -1,
          442
        ],
        "'LET": [
          -1,
          442
        ],
        "'BLOCK": [
          -1,
          442
        ],
        "'LETREC": [
          -1,
          442
        ],
        "'TYPE-LET": [
          -1,
          442
        ],
        "'PARENAFTERBRACE": [
          -1,
          442
        ],
        "'DOTDOTDOT": [
          -1,
          442
        ],
        "'NUMBER": [
          -1,
          442
        ],
        "'RATIONAL": [
          -1,
          442
        ],
        "'ROUGHRATIONAL": [
          -1,
          442
        ],
        "'TRUE": [
          -1,
          442
        ],
        "'FALSE": [
          -1,
          442
        ],
        "'LAM": [
          -1,
          442
        ],
        "'METHOD": [
          -1,
          442
        ],
        "'LBRACK": [
          -1,
          442
        ],
        "'TABLE": [
          -1,
          442
        ],
        "'REACTOR": [
          -1,
          442
        ],
        "'IF": [
          -1,
          442
        ],
        "'ASK": [
          -1,
          442
        ],
        "'CASES": [
          -1,
          442
        ],
        "'FOR": [
          -1,
          442
        ],
        "'TABLE-SELECT": [
          -1,
          442
        ],
        "'TABLE-FILTER": [
          -1,
          442
        ],
        "'TABLE-ORDER": [
          -1,
          442
        ],
        "'TABLE-EXTRACT": [
          -1,
          442
        ],
        "'TABLE-UPDATE": [
          -1,
          442
        ],
        "'TABLE-EXTEND": [
          -1,
          442
        ],
        "'LOAD-TABLE": [
          -1,
          442
        ]
      },
      {
        "'PARENNOSPACE": [
          457
        ],
        "'PARENSPACE": [
          458
        ],
        "check-test_A0_I2_I1": [
          459
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          460
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "$": [
          -1,
          444
        ],
        "'END": [
          -1,
          444
        ],
        "'NAME": [
          -1,
          444
        ],
        "'STRING": [
          -1,
          444
        ],
        "'TYPE": [
          -1,
          444
        ],
        "'DATA": [
          -1,
          444
        ],
        "'PARENSPACE": [
          -1,
          444
        ],
        "'SPY": [
          -1,
          444
        ],
        "'NEWTYPE": [
          -1,
          444
        ],
        "'LBRACE": [
          -1,
          444
        ],
        "'RBRACE": [
          -1,
          444
        ],
        "'SHADOW": [
          -1,
          444
        ],
        "'LET": [
          -1,
          444
        ],
        "'BLOCK": [
          -1,
          444
        ],
        "'LETREC": [
          -1,
          444
        ],
        "'TYPE-LET": [
          -1,
          444
        ],
        "'FUN": [
          -1,
          444
        ],
        "'PARENAFTERBRACE": [
          -1,
          444
        ],
        "'WHERE": [
          -1,
          444
        ],
        "'CHECK": [
          -1,
          444
        ],
        "'EXAMPLES": [
          -1,
          444
        ],
        "'CHECKCOLON": [
          -1,
          444
        ],
        "'EXAMPLESCOLON": [
          -1,
          444
        ],
        "'BAR": [
          -1,
          444
        ],
        "'VAR": [
          -1,
          444
        ],
        "'REC": [
          -1,
          444
        ],
        "'WHEN": [
          -1,
          444
        ],
        "'DOTDOTDOT": [
          -1,
          444
        ],
        "'NUMBER": [
          -1,
          444
        ],
        "'RATIONAL": [
          -1,
          444
        ],
        "'ROUGHRATIONAL": [
          -1,
          444
        ],
        "'TRUE": [
          -1,
          444
        ],
        "'FALSE": [
          -1,
          444
        ],
        "'LAM": [
          -1,
          444
        ],
        "'METHOD": [
          -1,
          444
        ],
        "'LBRACK": [
          -1,
          444
        ],
        "'TABLE": [
          -1,
          444
        ],
        "'REACTOR": [
          -1,
          444
        ],
        "'IF": [
          -1,
          444
        ],
        "'ELSECOLON": [
          -1,
          444
        ],
        "'ELSEIF": [
          -1,
          444
        ],
        "'ASK": [
          -1,
          444
        ],
        "'CASES": [
          -1,
          444
        ],
        "'FOR": [
          -1,
          444
        ],
        "'TABLE-SELECT": [
          -1,
          444
        ],
        "'TABLE-FILTER": [
          -1,
          444
        ],
        "'TABLE-ORDER": [
          -1,
          444
        ],
        "'TABLE-EXTRACT": [
          -1,
          444
        ],
        "'TABLE-UPDATE": [
          -1,
          444
        ],
        "'TABLE-EXTEND": [
          -1,
          444
        ],
        "'LOAD-TABLE": [
          -1,
          444
        ]
      },
      {
        "$": [
          -1,
          446
        ],
        "'END": [
          -1,
          446
        ],
        "'NAME": [
          -1,
          446
        ],
        "'STRING": [
          -1,
          446
        ],
        "'TYPE": [
          -1,
          446
        ],
        "'DATA": [
          -1,
          446
        ],
        "'PARENSPACE": [
          -1,
          446
        ],
        "'SPY": [
          -1,
          446
        ],
        "'NEWTYPE": [
          -1,
          446
        ],
        "'LBRACE": [
          -1,
          446
        ],
        "'RBRACE": [
          -1,
          446
        ],
        "'SHADOW": [
          -1,
          446
        ],
        "'LET": [
          -1,
          446
        ],
        "'BLOCK": [
          -1,
          446
        ],
        "'LETREC": [
          -1,
          446
        ],
        "'TYPE-LET": [
          -1,
          446
        ],
        "'FUN": [
          -1,
          446
        ],
        "'PARENAFTERBRACE": [
          -1,
          446
        ],
        "'WHERE": [
          -1,
          446
        ],
        "'CHECK": [
          -1,
          446
        ],
        "'EXAMPLES": [
          -1,
          446
        ],
        "'CHECKCOLON": [
          -1,
          446
        ],
        "'EXAMPLESCOLON": [
          -1,
          446
        ],
        "'BAR": [
          -1,
          446
        ],
        "'VAR": [
          -1,
          446
        ],
        "'REC": [
          -1,
          446
        ],
        "'WHEN": [
          -1,
          446
        ],
        "'DOTDOTDOT": [
          -1,
          446
        ],
        "'NUMBER": [
          -1,
          446
        ],
        "'RATIONAL": [
          -1,
          446
        ],
        "'ROUGHRATIONAL": [
          -1,
          446
        ],
        "'TRUE": [
          -1,
          446
        ],
        "'FALSE": [
          -1,
          446
        ],
        "'LAM": [
          -1,
          446
        ],
        "'METHOD": [
          -1,
          446
        ],
        "'LBRACK": [
          -1,
          446
        ],
        "'TABLE": [
          -1,
          446
        ],
        "'REACTOR": [
          -1,
          446
        ],
        "'IF": [
          -1,
          446
        ],
        "'ELSECOLON": [
          -1,
          446
        ],
        "'ELSEIF": [
          -1,
          446
        ],
        "'ASK": [
          -1,
          446
        ],
        "'CASES": [
          -1,
          446
        ],
        "'FOR": [
          -1,
          446
        ],
        "'TABLE-SELECT": [
          -1,
          446
        ],
        "'TABLE-FILTER": [
          -1,
          446
        ],
        "'TABLE-ORDER": [
          -1,
          446
        ],
        "'TABLE-EXTRACT": [
          -1,
          446
        ],
        "'TABLE-UPDATE": [
          -1,
          446
        ],
        "'TABLE-EXTEND": [
          -1,
          446
        ],
        "'LOAD-TABLE": [
          -1,
          446
        ]
      },
      {
        "'NAME": [
          461
        ]
      },
      {
        "$": [
          -1,
          448
        ],
        "'COLON": [
          -1,
          448
        ],
        "'END": [
          -1,
          448
        ],
        "'COMMA": [
          -1,
          448
        ],
        "'NAME": [
          -1,
          448
        ],
        "'STRING": [
          -1,
          448
        ],
        "'TYPE": [
          -1,
          448
        ],
        "'DATA": [
          -1,
          448
        ],
        "'PARENSPACE": [
          -1,
          448
        ],
        "'SPY": [
          -1,
          448
        ],
        "'NEWTYPE": [
          -1,
          448
        ],
        "'LBRACE": [
          -1,
          448
        ],
        "'RBRACE": [
          -1,
          448
        ],
        "'SHADOW": [
          -1,
          448
        ],
        "'LET": [
          -1,
          448
        ],
        "'BLOCK": [
          -1,
          448
        ],
        "'LETREC": [
          -1,
          448
        ],
        "'TYPE-LET": [
          -1,
          448
        ],
        "'FUN": [
          -1,
          448
        ],
        "'PARENAFTERBRACE": [
          -1,
          448
        ],
        "'WHERE": [
          -1,
          448
        ],
        "'CHECK": [
          -1,
          448
        ],
        "'EXAMPLES": [
          -1,
          448
        ],
        "'CHECKCOLON": [
          -1,
          448
        ],
        "'EXAMPLESCOLON": [
          -1,
          448
        ],
        "'BAR": [
          -1,
          448
        ],
        "'VAR": [
          -1,
          448
        ],
        "'REC": [
          -1,
          448
        ],
        "'WHEN": [
          -1,
          448
        ],
        "'DOTDOTDOT": [
          -1,
          448
        ],
        "'NUMBER": [
          -1,
          448
        ],
        "'RATIONAL": [
          -1,
          448
        ],
        "'ROUGHRATIONAL": [
          -1,
          448
        ],
        "'TRUE": [
          -1,
          448
        ],
        "'FALSE": [
          -1,
          448
        ],
        "'LAM": [
          -1,
          448
        ],
        "'METHOD": [
          -1,
          448
        ],
        "'LBRACK": [
          -1,
          448
        ],
        "'TABLE": [
          -1,
          448
        ],
        "'REACTOR": [
          -1,
          448
        ],
        "'IF": [
          -1,
          448
        ],
        "'ELSECOLON": [
          -1,
          448
        ],
        "'ELSEIF": [
          -1,
          448
        ],
        "'ASK": [
          -1,
          448
        ],
        "'CASES": [
          -1,
          448
        ],
        "'FOR": [
          -1,
          448
        ],
        "'TABLE-SELECT": [
          -1,
          448
        ],
        "'TABLE-FILTER": [
          -1,
          448
        ],
        "'TABLE-ORDER": [
          -1,
          448
        ],
        "'TABLE-EXTRACT": [
          -1,
          448
        ],
        "'TABLE-UPDATE": [
          -1,
          448
        ],
        "'TABLE-EXTEND": [
          -1,
          448
        ],
        "'LOAD-TABLE": [
          -1,
          448
        ]
      },
      {
        "'SEMI": [
          462
        ],
        "tuple-fields_I2?": [
          463
        ],
        "tuple-fields_I1": [
          464
        ],
        "tuple-fields_I2": [
          465
        ],
        "'RBRACE": [
          -1,
          450,
          452
        ]
      },
      {
        "'NAME": [
          -1,
          454
        ],
        "'RPAREN": [
          -1,
          454
        ],
        "'LBRACE": [
          -1,
          454
        ],
        "'SHADOW": [
          -1,
          454
        ]
      },
      {
        "return-ann": [
          466
        ],
        "return-ann_I0?": [
          467
        ],
        "return-ann_I0": [
          468
        ],
        "'THINARROW": [
          469
        ],
        "'COLON": [
          -1,
          456,
          458,
          460
        ],
        "'BLOCK": [
          -1,
          456,
          458,
          460
        ]
      },
      {
        "binding": [
          470
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "args_I1?": [
          471
        ],
        "args_I1": [
          472
        ],
        "'NAME": [
          -1,
          24
        ],
        "'RPAREN": [
          -1,
          462
        ]
      },
      {
        "'NAME": [
          -1,
          464
        ],
        "'RPAREN": [
          -1,
          464
        ],
        "'LBRACE": [
          -1,
          464
        ],
        "'SHADOW": [
          -1,
          464
        ]
      },
      {
        "tuple-binding_I3?": [
          473
        ],
        "'SEMI": [
          474
        ],
        "tuple-binding_I3": [
          475
        ],
        "'RBRACE": [
          -1,
          466
        ]
      },
      {
        "'NAME": [
          -1,
          468
        ],
        "'LBRACE": [
          -1,
          468
        ],
        "'SHADOW": [
          -1,
          468
        ]
      },
      {
        "'NAME": [
          -1,
          470
        ],
        "'STRING": [
          -1,
          470
        ],
        "'TYPE": [
          -1,
          470
        ],
        "'DATA": [
          -1,
          470
        ],
        "'PARENSPACE": [
          -1,
          470
        ],
        "'SPY": [
          -1,
          470
        ],
        "'NEWTYPE": [
          -1,
          470
        ],
        "'LBRACE": [
          -1,
          470
        ],
        "'RBRACE": [
          -1,
          470
        ],
        "'SHADOW": [
          -1,
          470
        ],
        "'LET": [
          -1,
          470
        ],
        "'BLOCK": [
          -1,
          470
        ],
        "'LETREC": [
          -1,
          470
        ],
        "'TYPE-LET": [
          -1,
          470
        ],
        "'FUN": [
          -1,
          470
        ],
        "'PARENAFTERBRACE": [
          -1,
          470
        ],
        "'DOC": [
          -1,
          470
        ],
        "'WHERE": [
          -1,
          470
        ],
        "'CHECK": [
          -1,
          470
        ],
        "'EXAMPLES": [
          -1,
          470
        ],
        "'CHECKCOLON": [
          -1,
          470
        ],
        "'EXAMPLESCOLON": [
          -1,
          470
        ],
        "'VAR": [
          -1,
          470
        ],
        "'REC": [
          -1,
          470
        ],
        "'WHEN": [
          -1,
          470
        ],
        "'DOTDOTDOT": [
          -1,
          470
        ],
        "'NUMBER": [
          -1,
          470
        ],
        "'RATIONAL": [
          -1,
          470
        ],
        "'ROUGHRATIONAL": [
          -1,
          470
        ],
        "'TRUE": [
          -1,
          470
        ],
        "'FALSE": [
          -1,
          470
        ],
        "'LAM": [
          -1,
          470
        ],
        "'METHOD": [
          -1,
          470
        ],
        "'LBRACK": [
          -1,
          470
        ],
        "'TABLE": [
          -1,
          470
        ],
        "'REACTOR": [
          -1,
          470
        ],
        "'IF": [
          -1,
          470
        ],
        "'ASK": [
          -1,
          470
        ],
        "'CASES": [
          -1,
          470
        ],
        "'FOR": [
          -1,
          470
        ],
        "'TABLE-SELECT": [
          -1,
          470
        ],
        "'TABLE-FILTER": [
          -1,
          470
        ],
        "'TABLE-ORDER": [
          -1,
          470
        ],
        "'TABLE-EXTRACT": [
          -1,
          470
        ],
        "'TABLE-UPDATE": [
          -1,
          470
        ],
        "'TABLE-EXTEND": [
          -1,
          470
        ],
        "'LOAD-TABLE": [
          -1,
          470
        ]
      },
      {
        "'NAME": [
          -1,
          472
        ],
        "'STRING": [
          -1,
          472
        ],
        "'TYPE": [
          -1,
          472
        ],
        "'DATA": [
          -1,
          472
        ],
        "'PARENSPACE": [
          -1,
          472
        ],
        "'SPY": [
          -1,
          472
        ],
        "'NEWTYPE": [
          -1,
          472
        ],
        "'LBRACE": [
          -1,
          472
        ],
        "'RBRACE": [
          -1,
          472
        ],
        "'SHADOW": [
          -1,
          472
        ],
        "'LET": [
          -1,
          472
        ],
        "'BLOCK": [
          -1,
          472
        ],
        "'LETREC": [
          -1,
          472
        ],
        "'TYPE-LET": [
          -1,
          472
        ],
        "'FUN": [
          -1,
          472
        ],
        "'PARENAFTERBRACE": [
          -1,
          472
        ],
        "'DOC": [
          -1,
          472
        ],
        "'WHERE": [
          -1,
          472
        ],
        "'CHECK": [
          -1,
          472
        ],
        "'EXAMPLES": [
          -1,
          472
        ],
        "'CHECKCOLON": [
          -1,
          472
        ],
        "'EXAMPLESCOLON": [
          -1,
          472
        ],
        "'VAR": [
          -1,
          472
        ],
        "'REC": [
          -1,
          472
        ],
        "'WHEN": [
          -1,
          472
        ],
        "'DOTDOTDOT": [
          -1,
          472
        ],
        "'NUMBER": [
          -1,
          472
        ],
        "'RATIONAL": [
          -1,
          472
        ],
        "'ROUGHRATIONAL": [
          -1,
          472
        ],
        "'TRUE": [
          -1,
          472
        ],
        "'FALSE": [
          -1,
          472
        ],
        "'LAM": [
          -1,
          472
        ],
        "'METHOD": [
          -1,
          472
        ],
        "'LBRACK": [
          -1,
          472
        ],
        "'TABLE": [
          -1,
          472
        ],
        "'REACTOR": [
          -1,
          472
        ],
        "'IF": [
          -1,
          472
        ],
        "'ASK": [
          -1,
          472
        ],
        "'CASES": [
          -1,
          472
        ],
        "'FOR": [
          -1,
          472
        ],
        "'TABLE-SELECT": [
          -1,
          472
        ],
        "'TABLE-FILTER": [
          -1,
          472
        ],
        "'TABLE-ORDER": [
          -1,
          472
        ],
        "'TABLE-EXTRACT": [
          -1,
          472
        ],
        "'TABLE-UPDATE": [
          -1,
          472
        ],
        "'TABLE-EXTEND": [
          -1,
          472
        ],
        "'LOAD-TABLE": [
          -1,
          472
        ]
      },
      {
        "doc-string": [
          476
        ],
        "doc-string_I0?": [
          477
        ],
        "doc-string_I0": [
          478
        ],
        "'DOC": [
          479
        ],
        "'NAME": [
          -1,
          474,
          476
        ],
        "'STRING": [
          -1,
          474,
          476
        ],
        "'TYPE": [
          -1,
          474,
          476
        ],
        "'DATA": [
          -1,
          474,
          476
        ],
        "'PARENSPACE": [
          -1,
          474,
          476
        ],
        "'SPY": [
          -1,
          474,
          476
        ],
        "'NEWTYPE": [
          -1,
          474,
          476
        ],
        "'LBRACE": [
          -1,
          474,
          476
        ],
        "'RBRACE": [
          -1,
          474,
          476
        ],
        "'SHADOW": [
          -1,
          474,
          476
        ],
        "'LET": [
          -1,
          474,
          476
        ],
        "'BLOCK": [
          -1,
          474,
          476
        ],
        "'LETREC": [
          -1,
          474,
          476
        ],
        "'TYPE-LET": [
          -1,
          474,
          476
        ],
        "'FUN": [
          -1,
          474,
          476
        ],
        "'PARENAFTERBRACE": [
          -1,
          474,
          476
        ],
        "'WHERE": [
          -1,
          474,
          476
        ],
        "'CHECK": [
          -1,
          474,
          476
        ],
        "'EXAMPLES": [
          -1,
          474,
          476
        ],
        "'CHECKCOLON": [
          -1,
          474,
          476
        ],
        "'EXAMPLESCOLON": [
          -1,
          474,
          476
        ],
        "'VAR": [
          -1,
          474,
          476
        ],
        "'REC": [
          -1,
          474,
          476
        ],
        "'WHEN": [
          -1,
          474,
          476
        ],
        "'DOTDOTDOT": [
          -1,
          474,
          476
        ],
        "'NUMBER": [
          -1,
          474,
          476
        ],
        "'RATIONAL": [
          -1,
          474,
          476
        ],
        "'ROUGHRATIONAL": [
          -1,
          474,
          476
        ],
        "'TRUE": [
          -1,
          474,
          476
        ],
        "'FALSE": [
          -1,
          474,
          476
        ],
        "'LAM": [
          -1,
          474,
          476
        ],
        "'METHOD": [
          -1,
          474,
          476
        ],
        "'LBRACK": [
          -1,
          474,
          476
        ],
        "'TABLE": [
          -1,
          474,
          476
        ],
        "'REACTOR": [
          -1,
          474,
          476
        ],
        "'IF": [
          -1,
          474,
          476
        ],
        "'ASK": [
          -1,
          474,
          476
        ],
        "'CASES": [
          -1,
          474,
          476
        ],
        "'FOR": [
          -1,
          474,
          476
        ],
        "'TABLE-SELECT": [
          -1,
          474,
          476
        ],
        "'TABLE-FILTER": [
          -1,
          474,
          476
        ],
        "'TABLE-ORDER": [
          -1,
          474,
          476
        ],
        "'TABLE-EXTRACT": [
          -1,
          474,
          476
        ],
        "'TABLE-UPDATE": [
          -1,
          474,
          476
        ],
        "'TABLE-EXTEND": [
          -1,
          474,
          476
        ],
        "'LOAD-TABLE": [
          -1,
          474,
          476
        ]
      },
      {
        "comma-names_I1*": [
          416
        ],
        "'COMMA": [
          -1,
          390
        ],
        "'RANGLE": [
          -1,
          388,
          390
        ],
        "'GT": [
          -1,
          388,
          390
        ]
      },
      {
        "ty-params_I0_I2": [
          480
        ],
        "'RANGLE": [
          481
        ],
        "'GT": [
          482
        ]
      },
      {
        "'COLON": [
          -1,
          304
        ],
        "'PARENNOSPACE": [
          -1,
          304
        ],
        "'COLONCOLON": [
          -1,
          304
        ],
        "'LANGLE": [
          -1,
          304
        ],
        "'LT": [
          -1,
          304
        ],
        "'PARENAFTERBRACE": [
          -1,
          304
        ]
      },
      {
        "'COLONCOLON": [
          483
        ],
        "obj-field_A1_I2?": [
          484
        ],
        "obj-field_A1_I2": [
          485
        ],
        "'COLON": [
          -1,
          478
        ]
      },
      {
        "ty-params": [
          187
        ],
        "fun-header": [
          486
        ],
        "ty-params_I0?": [
          191
        ],
        "ty-params_I0": [
          192
        ],
        "ty-params_I0_I0": [
          193
        ],
        "'LANGLE": [
          194
        ],
        "'LT": [
          195
        ],
        "'PARENNOSPACE": [
          -1,
          96,
          98
        ],
        "'PARENAFTERBRACE": [
          -1,
          96,
          98
        ]
      },
      {
        "$": [
          -1,
          480
        ],
        "'COLON": [
          -1,
          480
        ],
        "'END": [
          -1,
          480
        ],
        "'COMMA": [
          -1,
          480
        ],
        "'NAME": [
          -1,
          480
        ],
        "'PARENNOSPACE": [
          -1,
          480
        ],
        "'STRING": [
          -1,
          480
        ],
        "'RPAREN": [
          -1,
          480
        ],
        "'TYPE": [
          -1,
          480
        ],
        "'DATA": [
          -1,
          480
        ],
        "'TIMES": [
          -1,
          480
        ],
        "'PARENSPACE": [
          -1,
          480
        ],
        "'DOT": [
          -1,
          480
        ],
        "'SPY": [
          -1,
          480
        ],
        "'NEWTYPE": [
          -1,
          480
        ],
        "'LBRACE": [
          -1,
          480
        ],
        "'RBRACE": [
          -1,
          480
        ],
        "'SEMI": [
          -1,
          480
        ],
        "'SHADOW": [
          -1,
          480
        ],
        "'LET": [
          -1,
          480
        ],
        "'BLOCK": [
          -1,
          480
        ],
        "'LETREC": [
          -1,
          480
        ],
        "'TYPE-LET": [
          -1,
          480
        ],
        "'FUN": [
          -1,
          480
        ],
        "'LANGLE": [
          -1,
          480
        ],
        "'LT": [
          -1,
          480
        ],
        "'GT": [
          -1,
          480
        ],
        "'PARENAFTERBRACE": [
          -1,
          480
        ],
        "'WHERE": [
          -1,
          480
        ],
        "'CHECK": [
          -1,
          480
        ],
        "'EXAMPLES": [
          -1,
          480
        ],
        "'CHECKCOLON": [
          -1,
          480
        ],
        "'EXAMPLESCOLON": [
          -1,
          480
        ],
        "'BECAUSE": [
          -1,
          480
        ],
        "'BAR": [
          -1,
          480
        ],
        "'SHARING": [
          -1,
          480
        ],
        "'VAR": [
          -1,
          480
        ],
        "'REC": [
          -1,
          480
        ],
        "'WHEN": [
          -1,
          480
        ],
        "'PLUS": [
          -1,
          480
        ],
        "'DASH": [
          -1,
          480
        ],
        "'SLASH": [
          -1,
          480
        ],
        "'LEQ": [
          -1,
          480
        ],
        "'GEQ": [
          -1,
          480
        ],
        "'EQUALEQUAL": [
          -1,
          480
        ],
        "'SPACESHIP": [
          -1,
          480
        ],
        "'EQUALTILDE": [
          -1,
          480
        ],
        "'NEQ": [
          -1,
          480
        ],
        "'AND": [
          -1,
          480
        ],
        "'OR": [
          -1,
          480
        ],
        "'CARET": [
          -1,
          480
        ],
        "'IS": [
          -1,
          480
        ],
        "'ISEQUALEQUAL": [
          -1,
          480
        ],
        "'ISEQUALTILDE": [
          -1,
          480
        ],
        "'ISSPACESHIP": [
          -1,
          480
        ],
        "'ISROUGHLY": [
          -1,
          480
        ],
        "'ISNOT": [
          -1,
          480
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          480
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          480
        ],
        "'ISNOTSPACESHIP": [
          -1,
          480
        ],
        "'RAISES": [
          -1,
          480
        ],
        "'RAISESOTHER": [
          -1,
          480
        ],
        "'SATISFIES": [
          -1,
          480
        ],
        "'SATISFIESNOT": [
          -1,
          480
        ],
        "'RAISESSATISFIES": [
          -1,
          480
        ],
        "'RAISESVIOLATES": [
          -1,
          480
        ],
        "'RAISESNOT": [
          -1,
          480
        ],
        "'DOTDOTDOT": [
          -1,
          480
        ],
        "'NUMBER": [
          -1,
          480
        ],
        "'RATIONAL": [
          -1,
          480
        ],
        "'ROUGHRATIONAL": [
          -1,
          480
        ],
        "'TRUE": [
          -1,
          480
        ],
        "'FALSE": [
          -1,
          480
        ],
        "'LAM": [
          -1,
          480
        ],
        "'METHOD": [
          -1,
          480
        ],
        "'LBRACK": [
          -1,
          480
        ],
        "'RBRACK": [
          -1,
          480
        ],
        "'TABLE": [
          -1,
          480
        ],
        "'ROW": [
          -1,
          480
        ],
        "'REACTOR": [
          -1,
          480
        ],
        "'BANG": [
          -1,
          480
        ],
        "'IF": [
          -1,
          480
        ],
        "'ELSECOLON": [
          -1,
          480
        ],
        "'ELSEIF": [
          -1,
          480
        ],
        "'ASK": [
          -1,
          480
        ],
        "'THENCOLON": [
          -1,
          480
        ],
        "'CASES": [
          -1,
          480
        ],
        "'FOR": [
          -1,
          480
        ],
        "'TABLE-SELECT": [
          -1,
          480
        ],
        "'TABLE-FILTER": [
          -1,
          480
        ],
        "'USING": [
          -1,
          480
        ],
        "'TABLE-ORDER": [
          -1,
          480
        ],
        "'TABLE-EXTRACT": [
          -1,
          480
        ],
        "'TABLE-UPDATE": [
          -1,
          480
        ],
        "'TABLE-EXTEND": [
          -1,
          480
        ],
        "'OF": [
          -1,
          480
        ],
        "'LOAD-TABLE": [
          -1,
          480
        ],
        "'SOURCECOLON": [
          -1,
          480
        ],
        "'SANITIZE": [
          -1,
          480
        ]
      },
      {
        "$": [
          -1,
          482
        ],
        "'COLON": [
          -1,
          482
        ],
        "'END": [
          -1,
          482
        ],
        "'COMMA": [
          -1,
          482
        ],
        "'NAME": [
          -1,
          482
        ],
        "'PARENNOSPACE": [
          -1,
          482
        ],
        "'STRING": [
          -1,
          482
        ],
        "'RPAREN": [
          -1,
          482
        ],
        "'TYPE": [
          -1,
          482
        ],
        "'DATA": [
          -1,
          482
        ],
        "'TIMES": [
          -1,
          482
        ],
        "'PARENSPACE": [
          -1,
          482
        ],
        "'DOT": [
          -1,
          482
        ],
        "'SPY": [
          -1,
          482
        ],
        "'NEWTYPE": [
          -1,
          482
        ],
        "'LBRACE": [
          -1,
          482
        ],
        "'RBRACE": [
          -1,
          482
        ],
        "'SEMI": [
          -1,
          482
        ],
        "'SHADOW": [
          -1,
          482
        ],
        "'LET": [
          -1,
          482
        ],
        "'BLOCK": [
          -1,
          482
        ],
        "'LETREC": [
          -1,
          482
        ],
        "'TYPE-LET": [
          -1,
          482
        ],
        "'FUN": [
          -1,
          482
        ],
        "'LANGLE": [
          -1,
          482
        ],
        "'LT": [
          -1,
          482
        ],
        "'GT": [
          -1,
          482
        ],
        "'PARENAFTERBRACE": [
          -1,
          482
        ],
        "'WHERE": [
          -1,
          482
        ],
        "'CHECK": [
          -1,
          482
        ],
        "'EXAMPLES": [
          -1,
          482
        ],
        "'CHECKCOLON": [
          -1,
          482
        ],
        "'EXAMPLESCOLON": [
          -1,
          482
        ],
        "'BECAUSE": [
          -1,
          482
        ],
        "'BAR": [
          -1,
          482
        ],
        "'SHARING": [
          -1,
          482
        ],
        "'VAR": [
          -1,
          482
        ],
        "'REC": [
          -1,
          482
        ],
        "'WHEN": [
          -1,
          482
        ],
        "'PLUS": [
          -1,
          482
        ],
        "'DASH": [
          -1,
          482
        ],
        "'SLASH": [
          -1,
          482
        ],
        "'LEQ": [
          -1,
          482
        ],
        "'GEQ": [
          -1,
          482
        ],
        "'EQUALEQUAL": [
          -1,
          482
        ],
        "'SPACESHIP": [
          -1,
          482
        ],
        "'EQUALTILDE": [
          -1,
          482
        ],
        "'NEQ": [
          -1,
          482
        ],
        "'AND": [
          -1,
          482
        ],
        "'OR": [
          -1,
          482
        ],
        "'CARET": [
          -1,
          482
        ],
        "'IS": [
          -1,
          482
        ],
        "'ISEQUALEQUAL": [
          -1,
          482
        ],
        "'ISEQUALTILDE": [
          -1,
          482
        ],
        "'ISSPACESHIP": [
          -1,
          482
        ],
        "'ISROUGHLY": [
          -1,
          482
        ],
        "'ISNOT": [
          -1,
          482
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          482
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          482
        ],
        "'ISNOTSPACESHIP": [
          -1,
          482
        ],
        "'RAISES": [
          -1,
          482
        ],
        "'RAISESOTHER": [
          -1,
          482
        ],
        "'SATISFIES": [
          -1,
          482
        ],
        "'SATISFIESNOT": [
          -1,
          482
        ],
        "'RAISESSATISFIES": [
          -1,
          482
        ],
        "'RAISESVIOLATES": [
          -1,
          482
        ],
        "'RAISESNOT": [
          -1,
          482
        ],
        "'DOTDOTDOT": [
          -1,
          482
        ],
        "'NUMBER": [
          -1,
          482
        ],
        "'RATIONAL": [
          -1,
          482
        ],
        "'ROUGHRATIONAL": [
          -1,
          482
        ],
        "'TRUE": [
          -1,
          482
        ],
        "'FALSE": [
          -1,
          482
        ],
        "'LAM": [
          -1,
          482
        ],
        "'METHOD": [
          -1,
          482
        ],
        "'LBRACK": [
          -1,
          482
        ],
        "'RBRACK": [
          -1,
          482
        ],
        "'TABLE": [
          -1,
          482
        ],
        "'ROW": [
          -1,
          482
        ],
        "'REACTOR": [
          -1,
          482
        ],
        "'BANG": [
          -1,
          482
        ],
        "'IF": [
          -1,
          482
        ],
        "'ELSECOLON": [
          -1,
          482
        ],
        "'ELSEIF": [
          -1,
          482
        ],
        "'ASK": [
          -1,
          482
        ],
        "'THENCOLON": [
          -1,
          482
        ],
        "'CASES": [
          -1,
          482
        ],
        "'FOR": [
          -1,
          482
        ],
        "'TABLE-SELECT": [
          -1,
          482
        ],
        "'TABLE-FILTER": [
          -1,
          482
        ],
        "'USING": [
          -1,
          482
        ],
        "'TABLE-ORDER": [
          -1,
          482
        ],
        "'TABLE-EXTRACT": [
          -1,
          482
        ],
        "'TABLE-UPDATE": [
          -1,
          482
        ],
        "'TABLE-EXTEND": [
          -1,
          482
        ],
        "'OF": [
          -1,
          482
        ],
        "'LOAD-TABLE": [
          -1,
          482
        ],
        "'SOURCECOLON": [
          -1,
          482
        ],
        "'SANITIZE": [
          -1,
          482
        ]
      },
      {
        "'COMMA": [
          487
        ],
        "obj-fields_I2?": [
          488
        ],
        "obj-fields_I1": [
          489
        ],
        "obj-fields_I2": [
          490
        ],
        "'END": [
          -1,
          484,
          486
        ],
        "'RBRACE": [
          -1,
          484,
          486
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          491
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'FROM": [
          -1,
          488
        ],
        "'COLON": [
          -1,
          488
        ],
        "'COMMA": [
          -1,
          488
        ],
        "'RPAREN": [
          -1,
          488
        ],
        "'EQUALS": [
          -1,
          488
        ],
        "'RBRACE": [
          -1,
          488
        ],
        "'SEMI": [
          -1,
          488
        ]
      },
      {
        "'FROM": [
          -1,
          490
        ],
        "'COLON": [
          -1,
          490
        ],
        "'COMMA": [
          -1,
          490
        ],
        "'RPAREN": [
          -1,
          490
        ],
        "'EQUALS": [
          -1,
          490
        ],
        "'RBRACE": [
          -1,
          490
        ],
        "'SEMI": [
          -1,
          490
        ]
      },
      {
        "'NAME": [
          339
        ],
        "'PARENNOSPACE": [
          340
        ],
        "record-ann": [
          341
        ],
        "'PARENSPACE": [
          342
        ],
        "ann": [
          492
        ],
        "'LBRACE": [
          344
        ],
        "'PARENAFTERBRACE": [
          345
        ],
        "name-ann": [
          346
        ],
        "arrow-ann": [
          347
        ],
        "app-ann": [
          348
        ],
        "pred-ann": [
          349
        ],
        "dot-ann": [
          350
        ],
        "tuple-ann": [
          351
        ],
        "arrow-ann_I0": [
          352
        ],
        "app-ann_I0": [
          353
        ]
      },
      {
        "'COLON": [
          493
        ],
        "'COMMA": [
          494
        ],
        "multi-let-expr_I3": [
          495
        ],
        "multi-let-expr_I2": [
          496
        ],
        "'BLOCK": [
          497
        ]
      },
      {
        "$": [
          -1,
          492
        ],
        "'COLON": [
          -1,
          492
        ],
        "'END": [
          -1,
          492
        ],
        "'COMMA": [
          -1,
          492
        ],
        "'NAME": [
          -1,
          492
        ],
        "'PARENNOSPACE": [
          -1,
          492
        ],
        "'STRING": [
          -1,
          492
        ],
        "'RPAREN": [
          -1,
          492
        ],
        "'TYPE": [
          -1,
          492
        ],
        "'DATA": [
          -1,
          492
        ],
        "'TIMES": [
          -1,
          492
        ],
        "'PARENSPACE": [
          -1,
          492
        ],
        "'DOT": [
          -1,
          492
        ],
        "'SPY": [
          -1,
          492
        ],
        "'NEWTYPE": [
          -1,
          492
        ],
        "'LBRACE": [
          -1,
          492
        ],
        "'RBRACE": [
          -1,
          492
        ],
        "'SEMI": [
          -1,
          492
        ],
        "'SHADOW": [
          -1,
          492
        ],
        "'LET": [
          -1,
          492
        ],
        "'BLOCK": [
          -1,
          492
        ],
        "'LETREC": [
          -1,
          492
        ],
        "'TYPE-LET": [
          -1,
          492
        ],
        "'FUN": [
          -1,
          492
        ],
        "'LANGLE": [
          -1,
          492
        ],
        "'LT": [
          -1,
          492
        ],
        "'GT": [
          -1,
          492
        ],
        "'PARENAFTERBRACE": [
          -1,
          492
        ],
        "'WHERE": [
          -1,
          492
        ],
        "'CHECK": [
          -1,
          492
        ],
        "'EXAMPLES": [
          -1,
          492
        ],
        "'CHECKCOLON": [
          -1,
          492
        ],
        "'EXAMPLESCOLON": [
          -1,
          492
        ],
        "'BECAUSE": [
          -1,
          492
        ],
        "'BAR": [
          -1,
          492
        ],
        "'SHARING": [
          -1,
          492
        ],
        "'VAR": [
          -1,
          492
        ],
        "'REC": [
          -1,
          492
        ],
        "'WHEN": [
          -1,
          492
        ],
        "'PLUS": [
          -1,
          492
        ],
        "'DASH": [
          -1,
          492
        ],
        "'SLASH": [
          -1,
          492
        ],
        "'LEQ": [
          -1,
          492
        ],
        "'GEQ": [
          -1,
          492
        ],
        "'EQUALEQUAL": [
          -1,
          492
        ],
        "'SPACESHIP": [
          -1,
          492
        ],
        "'EQUALTILDE": [
          -1,
          492
        ],
        "'NEQ": [
          -1,
          492
        ],
        "'AND": [
          -1,
          492
        ],
        "'OR": [
          -1,
          492
        ],
        "'CARET": [
          -1,
          492
        ],
        "'IS": [
          -1,
          492
        ],
        "'ISEQUALEQUAL": [
          -1,
          492
        ],
        "'ISEQUALTILDE": [
          -1,
          492
        ],
        "'ISSPACESHIP": [
          -1,
          492
        ],
        "'ISROUGHLY": [
          -1,
          492
        ],
        "'ISNOT": [
          -1,
          492
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          492
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          492
        ],
        "'ISNOTSPACESHIP": [
          -1,
          492
        ],
        "'RAISES": [
          -1,
          492
        ],
        "'RAISESOTHER": [
          -1,
          492
        ],
        "'SATISFIES": [
          -1,
          492
        ],
        "'SATISFIESNOT": [
          -1,
          492
        ],
        "'RAISESSATISFIES": [
          -1,
          492
        ],
        "'RAISESVIOLATES": [
          -1,
          492
        ],
        "'RAISESNOT": [
          -1,
          492
        ],
        "'DOTDOTDOT": [
          -1,
          492
        ],
        "'NUMBER": [
          -1,
          492
        ],
        "'RATIONAL": [
          -1,
          492
        ],
        "'ROUGHRATIONAL": [
          -1,
          492
        ],
        "'TRUE": [
          -1,
          492
        ],
        "'FALSE": [
          -1,
          492
        ],
        "'LAM": [
          -1,
          492
        ],
        "'METHOD": [
          -1,
          492
        ],
        "'LBRACK": [
          -1,
          492
        ],
        "'RBRACK": [
          -1,
          492
        ],
        "'TABLE": [
          -1,
          492
        ],
        "'ROW": [
          -1,
          492
        ],
        "'REACTOR": [
          -1,
          492
        ],
        "'BANG": [
          -1,
          492
        ],
        "'IF": [
          -1,
          492
        ],
        "'ELSECOLON": [
          -1,
          492
        ],
        "'ELSEIF": [
          -1,
          492
        ],
        "'ASK": [
          -1,
          492
        ],
        "'THENCOLON": [
          -1,
          492
        ],
        "'CASES": [
          -1,
          492
        ],
        "'FOR": [
          -1,
          492
        ],
        "'TABLE-SELECT": [
          -1,
          492
        ],
        "'TABLE-FILTER": [
          -1,
          492
        ],
        "'USING": [
          -1,
          492
        ],
        "'TABLE-ORDER": [
          -1,
          492
        ],
        "'TABLE-EXTRACT": [
          -1,
          492
        ],
        "'TABLE-UPDATE": [
          -1,
          492
        ],
        "'TABLE-EXTEND": [
          -1,
          492
        ],
        "'OF": [
          -1,
          492
        ],
        "'LOAD-TABLE": [
          -1,
          492
        ],
        "'SOURCECOLON": [
          -1,
          492
        ],
        "'SANITIZE": [
          -1,
          492
        ]
      },
      {
        "'COLON": [
          498
        ],
        "'COMMA": [
          499
        ],
        "'BLOCK": [
          500
        ],
        "letrec-expr_I3": [
          501
        ],
        "letrec-expr_I2": [
          502
        ]
      },
      {
        "'EQUALS": [
          503
        ]
      },
      {
        "'AS": [
          504
        ]
      },
      {
        "'COLON": [
          505
        ],
        "'COMMA": [
          506
        ],
        "'BLOCK": [
          507
        ],
        "type-let-expr_I3": [
          508
        ],
        "type-let-expr_I2": [
          509
        ]
      },
      {
        "'COLON": [
          510
        ],
        "'BLOCK": [
          511
        ],
        "fun-expr_I3": [
          512
        ]
      },
      {
        "block": [
          513
        ],
        "block_I0*": [
          6
        ],
        "'END": [
          -1,
          10,
          12
        ],
        "'NAME": [
          -1,
          12
        ],
        "'STRING": [
          -1,
          12
        ],
        "'TYPE": [
          -1,
          12
        ],
        "'DATA": [
          -1,
          12
        ],
        "'PARENSPACE": [
          -1,
          12
        ],
        "'SPY": [
          -1,
          12
        ],
        "'NEWTYPE": [
          -1,
          12
        ],
        "'LBRACE": [
          -1,
          12
        ],
        "'SHADOW": [
          -1,
          12
        ],
        "'LET": [
          -1,
          12
        ],
        "'BLOCK": [
          -1,
          12
        ],
        "'LETREC": [
          -1,
          12
        ],
        "'TYPE-LET": [
          -1,
          12
        ],
        "'FUN": [
          -1,
          12
        ],
        "'PARENAFTERBRACE": [
          -1,
          12
        ],
        "'CHECK": [
          -1,
          12
        ],
        "'EXAMPLES": [
          -1,
          12
        ],
        "'CHECKCOLON": [
          -1,
          12
        ],
        "'EXAMPLESCOLON": [
          -1,
          12
        ],
        "'VAR": [
          -1,
          12
        ],
        "'REC": [
          -1,
          12
        ],
        "'WHEN": [
          -1,
          12
        ],
        "'DOTDOTDOT": [
          -1,
          12
        ],
        "'NUMBER": [
          -1,
          12
        ],
        "'RATIONAL": [
          -1,
          12
        ],
        "'ROUGHRATIONAL": [
          -1,
          12
        ],
        "'TRUE": [
          -1,
          12
        ],
        "'FALSE": [
          -1,
          12
        ],
        "'LAM": [
          -1,
          12
        ],
        "'METHOD": [
          -1,
          12
        ],
        "'LBRACK": [
          -1,
          12
        ],
        "'TABLE": [
          -1,
          12
        ],
        "'REACTOR": [
          -1,
          12
        ],
        "'IF": [
          -1,
          12
        ],
        "'ASK": [
          -1,
          12
        ],
        "'CASES": [
          -1,
          12
        ],
        "'FOR": [
          -1,
          12
        ],
        "'TABLE-SELECT": [
          -1,
          12
        ],
        "'TABLE-FILTER": [
          -1,
          12
        ],
        "'TABLE-ORDER": [
          -1,
          12
        ],
        "'TABLE-EXTRACT": [
          -1,
          12
        ],
        "'TABLE-UPDATE": [
          -1,
          12
        ],
        "'TABLE-EXTEND": [
          -1,
          12
        ],
        "'LOAD-TABLE": [
          -1,
          12
        ]
      },
      {
        "$": [
          -1,
          494
        ],
        "'END": [
          -1,
          494
        ],
        "'NAME": [
          -1,
          494
        ],
        "'STRING": [
          -1,
          494
        ],
        "'TYPE": [
          -1,
          494
        ],
        "'DATA": [
          -1,
          494
        ],
        "'PARENSPACE": [
          -1,
          494
        ],
        "'SPY": [
          -1,
          494
        ],
        "'NEWTYPE": [
          -1,
          494
        ],
        "'LBRACE": [
          -1,
          494
        ],
        "'RBRACE": [
          -1,
          494
        ],
        "'SHADOW": [
          -1,
          494
        ],
        "'LET": [
          -1,
          494
        ],
        "'BLOCK": [
          -1,
          494
        ],
        "'LETREC": [
          -1,
          494
        ],
        "'TYPE-LET": [
          -1,
          494
        ],
        "'FUN": [
          -1,
          494
        ],
        "'PARENAFTERBRACE": [
          -1,
          494
        ],
        "'WHERE": [
          -1,
          494
        ],
        "'CHECK": [
          -1,
          494
        ],
        "'EXAMPLES": [
          -1,
          494
        ],
        "'CHECKCOLON": [
          -1,
          494
        ],
        "'EXAMPLESCOLON": [
          -1,
          494
        ],
        "'BAR": [
          -1,
          494
        ],
        "'VAR": [
          -1,
          494
        ],
        "'REC": [
          -1,
          494
        ],
        "'WHEN": [
          -1,
          494
        ],
        "'DOTDOTDOT": [
          -1,
          494
        ],
        "'NUMBER": [
          -1,
          494
        ],
        "'RATIONAL": [
          -1,
          494
        ],
        "'ROUGHRATIONAL": [
          -1,
          494
        ],
        "'TRUE": [
          -1,
          494
        ],
        "'FALSE": [
          -1,
          494
        ],
        "'LAM": [
          -1,
          494
        ],
        "'METHOD": [
          -1,
          494
        ],
        "'LBRACK": [
          -1,
          494
        ],
        "'TABLE": [
          -1,
          494
        ],
        "'REACTOR": [
          -1,
          494
        ],
        "'IF": [
          -1,
          494
        ],
        "'ELSECOLON": [
          -1,
          494
        ],
        "'ELSEIF": [
          -1,
          494
        ],
        "'ASK": [
          -1,
          494
        ],
        "'CASES": [
          -1,
          494
        ],
        "'FOR": [
          -1,
          494
        ],
        "'TABLE-SELECT": [
          -1,
          494
        ],
        "'TABLE-FILTER": [
          -1,
          494
        ],
        "'TABLE-ORDER": [
          -1,
          494
        ],
        "'TABLE-EXTRACT": [
          -1,
          494
        ],
        "'TABLE-UPDATE": [
          -1,
          494
        ],
        "'TABLE-EXTEND": [
          -1,
          494
        ],
        "'LOAD-TABLE": [
          -1,
          494
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          514
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          515
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'END": [
          -1,
          496
        ],
        "'NAME": [
          -1,
          496
        ],
        "'STRING": [
          -1,
          496
        ],
        "'TYPE": [
          -1,
          496
        ],
        "'DATA": [
          -1,
          496
        ],
        "'PARENSPACE": [
          -1,
          496
        ],
        "'SPY": [
          -1,
          496
        ],
        "'NEWTYPE": [
          -1,
          496
        ],
        "'LBRACE": [
          -1,
          496
        ],
        "'SHADOW": [
          -1,
          496
        ],
        "'LET": [
          -1,
          496
        ],
        "'BLOCK": [
          -1,
          496
        ],
        "'LETREC": [
          -1,
          496
        ],
        "'TYPE-LET": [
          -1,
          496
        ],
        "'FUN": [
          -1,
          496
        ],
        "'PARENAFTERBRACE": [
          -1,
          496
        ],
        "'CHECK": [
          -1,
          496
        ],
        "'EXAMPLES": [
          -1,
          496
        ],
        "'CHECKCOLON": [
          -1,
          496
        ],
        "'EXAMPLESCOLON": [
          -1,
          496
        ],
        "'VAR": [
          -1,
          496
        ],
        "'REC": [
          -1,
          496
        ],
        "'WHEN": [
          -1,
          496
        ],
        "'DOTDOTDOT": [
          -1,
          496
        ],
        "'NUMBER": [
          -1,
          496
        ],
        "'RATIONAL": [
          -1,
          496
        ],
        "'ROUGHRATIONAL": [
          -1,
          496
        ],
        "'TRUE": [
          -1,
          496
        ],
        "'FALSE": [
          -1,
          496
        ],
        "'LAM": [
          -1,
          496
        ],
        "'METHOD": [
          -1,
          496
        ],
        "'LBRACK": [
          -1,
          496
        ],
        "'TABLE": [
          -1,
          496
        ],
        "'REACTOR": [
          -1,
          496
        ],
        "'IF": [
          -1,
          496
        ],
        "'ASK": [
          -1,
          496
        ],
        "'CASES": [
          -1,
          496
        ],
        "'FOR": [
          -1,
          496
        ],
        "'TABLE-SELECT": [
          -1,
          496
        ],
        "'TABLE-FILTER": [
          -1,
          496
        ],
        "'TABLE-ORDER": [
          -1,
          496
        ],
        "'TABLE-EXTRACT": [
          -1,
          496
        ],
        "'TABLE-UPDATE": [
          -1,
          496
        ],
        "'TABLE-EXTEND": [
          -1,
          496
        ],
        "'LOAD-TABLE": [
          -1,
          496
        ]
      },
      {
        "'END": [
          -1,
          498
        ],
        "'NAME": [
          -1,
          498
        ],
        "'STRING": [
          -1,
          498
        ],
        "'TYPE": [
          -1,
          498
        ],
        "'DATA": [
          -1,
          498
        ],
        "'PARENSPACE": [
          -1,
          498
        ],
        "'SPY": [
          -1,
          498
        ],
        "'NEWTYPE": [
          -1,
          498
        ],
        "'LBRACE": [
          -1,
          498
        ],
        "'SHADOW": [
          -1,
          498
        ],
        "'LET": [
          -1,
          498
        ],
        "'BLOCK": [
          -1,
          498
        ],
        "'LETREC": [
          -1,
          498
        ],
        "'TYPE-LET": [
          -1,
          498
        ],
        "'FUN": [
          -1,
          498
        ],
        "'PARENAFTERBRACE": [
          -1,
          498
        ],
        "'CHECK": [
          -1,
          498
        ],
        "'EXAMPLES": [
          -1,
          498
        ],
        "'CHECKCOLON": [
          -1,
          498
        ],
        "'EXAMPLESCOLON": [
          -1,
          498
        ],
        "'VAR": [
          -1,
          498
        ],
        "'REC": [
          -1,
          498
        ],
        "'WHEN": [
          -1,
          498
        ],
        "'DOTDOTDOT": [
          -1,
          498
        ],
        "'NUMBER": [
          -1,
          498
        ],
        "'RATIONAL": [
          -1,
          498
        ],
        "'ROUGHRATIONAL": [
          -1,
          498
        ],
        "'TRUE": [
          -1,
          498
        ],
        "'FALSE": [
          -1,
          498
        ],
        "'LAM": [
          -1,
          498
        ],
        "'METHOD": [
          -1,
          498
        ],
        "'LBRACK": [
          -1,
          498
        ],
        "'TABLE": [
          -1,
          498
        ],
        "'REACTOR": [
          -1,
          498
        ],
        "'IF": [
          -1,
          498
        ],
        "'ASK": [
          -1,
          498
        ],
        "'CASES": [
          -1,
          498
        ],
        "'FOR": [
          -1,
          498
        ],
        "'TABLE-SELECT": [
          -1,
          498
        ],
        "'TABLE-FILTER": [
          -1,
          498
        ],
        "'TABLE-ORDER": [
          -1,
          498
        ],
        "'TABLE-EXTRACT": [
          -1,
          498
        ],
        "'TABLE-UPDATE": [
          -1,
          498
        ],
        "'TABLE-EXTEND": [
          -1,
          498
        ],
        "'LOAD-TABLE": [
          -1,
          498
        ]
      },
      {
        "block": [
          516
        ],
        "block_I0*": [
          6
        ],
        "'END": [
          -1,
          10,
          12
        ],
        "'NAME": [
          -1,
          12
        ],
        "'STRING": [
          -1,
          12
        ],
        "'TYPE": [
          -1,
          12
        ],
        "'DATA": [
          -1,
          12
        ],
        "'PARENSPACE": [
          -1,
          12
        ],
        "'SPY": [
          -1,
          12
        ],
        "'NEWTYPE": [
          -1,
          12
        ],
        "'LBRACE": [
          -1,
          12
        ],
        "'SHADOW": [
          -1,
          12
        ],
        "'LET": [
          -1,
          12
        ],
        "'BLOCK": [
          -1,
          12
        ],
        "'LETREC": [
          -1,
          12
        ],
        "'TYPE-LET": [
          -1,
          12
        ],
        "'FUN": [
          -1,
          12
        ],
        "'PARENAFTERBRACE": [
          -1,
          12
        ],
        "'CHECK": [
          -1,
          12
        ],
        "'EXAMPLES": [
          -1,
          12
        ],
        "'CHECKCOLON": [
          -1,
          12
        ],
        "'EXAMPLESCOLON": [
          -1,
          12
        ],
        "'VAR": [
          -1,
          12
        ],
        "'REC": [
          -1,
          12
        ],
        "'WHEN": [
          -1,
          12
        ],
        "'DOTDOTDOT": [
          -1,
          12
        ],
        "'NUMBER": [
          -1,
          12
        ],
        "'RATIONAL": [
          -1,
          12
        ],
        "'ROUGHRATIONAL": [
          -1,
          12
        ],
        "'TRUE": [
          -1,
          12
        ],
        "'FALSE": [
          -1,
          12
        ],
        "'LAM": [
          -1,
          12
        ],
        "'METHOD": [
          -1,
          12
        ],
        "'LBRACK": [
          -1,
          12
        ],
        "'TABLE": [
          -1,
          12
        ],
        "'REACTOR": [
          -1,
          12
        ],
        "'IF": [
          -1,
          12
        ],
        "'ASK": [
          -1,
          12
        ],
        "'CASES": [
          -1,
          12
        ],
        "'FOR": [
          -1,
          12
        ],
        "'TABLE-SELECT": [
          -1,
          12
        ],
        "'TABLE-FILTER": [
          -1,
          12
        ],
        "'TABLE-ORDER": [
          -1,
          12
        ],
        "'TABLE-EXTRACT": [
          -1,
          12
        ],
        "'TABLE-UPDATE": [
          -1,
          12
        ],
        "'TABLE-EXTEND": [
          -1,
          12
        ],
        "'LOAD-TABLE": [
          -1,
          12
        ]
      },
      {
        "comma-binops_I1*": [
          517
        ],
        "'COMMA": [
          -1,
          500,
          502
        ],
        "'RPAREN": [
          -1,
          500,
          502
        ],
        "'RBRACK": [
          -1,
          500,
          502
        ]
      },
      {
        "'RPAREN": [
          518
        ]
      },
      {
        "'RPAREN": [
          -1,
          504
        ]
      },
      {
        "'RPAREN": [
          -1,
          506
        ]
      },
      {
        "'RPAREN": [
          -1,
          508
        ]
      },
      {
        "$": [
          -1,
          510
        ],
        "'COLON": [
          -1,
          510
        ],
        "'END": [
          -1,
          510
        ],
        "'COMMA": [
          -1,
          510
        ],
        "'NAME": [
          -1,
          510
        ],
        "'PARENNOSPACE": [
          -1,
          510
        ],
        "'STRING": [
          -1,
          510
        ],
        "'RPAREN": [
          -1,
          510
        ],
        "'TYPE": [
          -1,
          510
        ],
        "'DATA": [
          -1,
          510
        ],
        "'TIMES": [
          -1,
          510
        ],
        "'PARENSPACE": [
          -1,
          510
        ],
        "'DOT": [
          -1,
          510
        ],
        "'SPY": [
          -1,
          510
        ],
        "'NEWTYPE": [
          -1,
          510
        ],
        "'LBRACE": [
          -1,
          510
        ],
        "'RBRACE": [
          -1,
          510
        ],
        "'SEMI": [
          -1,
          510
        ],
        "'SHADOW": [
          -1,
          510
        ],
        "'LET": [
          -1,
          510
        ],
        "'BLOCK": [
          -1,
          510
        ],
        "'LETREC": [
          -1,
          510
        ],
        "'TYPE-LET": [
          -1,
          510
        ],
        "'FUN": [
          -1,
          510
        ],
        "'LANGLE": [
          -1,
          510
        ],
        "'LT": [
          -1,
          510
        ],
        "'GT": [
          -1,
          510
        ],
        "'PARENAFTERBRACE": [
          -1,
          510
        ],
        "'WHERE": [
          -1,
          510
        ],
        "'CHECK": [
          -1,
          510
        ],
        "'EXAMPLES": [
          -1,
          510
        ],
        "'CHECKCOLON": [
          -1,
          510
        ],
        "'EXAMPLESCOLON": [
          -1,
          510
        ],
        "'BECAUSE": [
          -1,
          510
        ],
        "'BAR": [
          -1,
          510
        ],
        "'SHARING": [
          -1,
          510
        ],
        "'VAR": [
          -1,
          510
        ],
        "'REC": [
          -1,
          510
        ],
        "'WHEN": [
          -1,
          510
        ],
        "'PLUS": [
          -1,
          510
        ],
        "'DASH": [
          -1,
          510
        ],
        "'SLASH": [
          -1,
          510
        ],
        "'LEQ": [
          -1,
          510
        ],
        "'GEQ": [
          -1,
          510
        ],
        "'EQUALEQUAL": [
          -1,
          510
        ],
        "'SPACESHIP": [
          -1,
          510
        ],
        "'EQUALTILDE": [
          -1,
          510
        ],
        "'NEQ": [
          -1,
          510
        ],
        "'AND": [
          -1,
          510
        ],
        "'OR": [
          -1,
          510
        ],
        "'CARET": [
          -1,
          510
        ],
        "'IS": [
          -1,
          510
        ],
        "'ISEQUALEQUAL": [
          -1,
          510
        ],
        "'ISEQUALTILDE": [
          -1,
          510
        ],
        "'ISSPACESHIP": [
          -1,
          510
        ],
        "'ISROUGHLY": [
          -1,
          510
        ],
        "'ISNOT": [
          -1,
          510
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          510
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          510
        ],
        "'ISNOTSPACESHIP": [
          -1,
          510
        ],
        "'RAISES": [
          -1,
          510
        ],
        "'RAISESOTHER": [
          -1,
          510
        ],
        "'SATISFIES": [
          -1,
          510
        ],
        "'SATISFIESNOT": [
          -1,
          510
        ],
        "'RAISESSATISFIES": [
          -1,
          510
        ],
        "'RAISESVIOLATES": [
          -1,
          510
        ],
        "'RAISESNOT": [
          -1,
          510
        ],
        "'DOTDOTDOT": [
          -1,
          510
        ],
        "'NUMBER": [
          -1,
          510
        ],
        "'RATIONAL": [
          -1,
          510
        ],
        "'ROUGHRATIONAL": [
          -1,
          510
        ],
        "'TRUE": [
          -1,
          510
        ],
        "'FALSE": [
          -1,
          510
        ],
        "'LAM": [
          -1,
          510
        ],
        "'METHOD": [
          -1,
          510
        ],
        "'LBRACK": [
          -1,
          510
        ],
        "'RBRACK": [
          -1,
          510
        ],
        "'TABLE": [
          -1,
          510
        ],
        "'ROW": [
          -1,
          510
        ],
        "'REACTOR": [
          -1,
          510
        ],
        "'BANG": [
          -1,
          510
        ],
        "'IF": [
          -1,
          510
        ],
        "'ELSECOLON": [
          -1,
          510
        ],
        "'ELSEIF": [
          -1,
          510
        ],
        "'ASK": [
          -1,
          510
        ],
        "'THENCOLON": [
          -1,
          510
        ],
        "'CASES": [
          -1,
          510
        ],
        "'FOR": [
          -1,
          510
        ],
        "'TABLE-SELECT": [
          -1,
          510
        ],
        "'TABLE-FILTER": [
          -1,
          510
        ],
        "'USING": [
          -1,
          510
        ],
        "'TABLE-ORDER": [
          -1,
          510
        ],
        "'TABLE-EXTRACT": [
          -1,
          510
        ],
        "'TABLE-UPDATE": [
          -1,
          510
        ],
        "'TABLE-EXTEND": [
          -1,
          510
        ],
        "'OF": [
          -1,
          510
        ],
        "'LOAD-TABLE": [
          -1,
          510
        ],
        "'SOURCECOLON": [
          -1,
          510
        ],
        "'SANITIZE": [
          -1,
          510
        ]
      },
      {
        "'NAME": [
          308
        ],
        "fields": [
          519
        ],
        "'NUMBER": [
          520
        ],
        "'METHOD": [
          391
        ],
        "key": [
          392
        ],
        "field": [
          393
        ]
      },
      {
        "'DOT": [
          521
        ],
        "$": [
          -1,
          512
        ],
        "'FROM": [
          -1,
          512
        ],
        "'COLON": [
          -1,
          512
        ],
        "'END": [
          -1,
          512
        ],
        "'COMMA": [
          -1,
          512
        ],
        "'NAME": [
          -1,
          512
        ],
        "'STRING": [
          -1,
          512
        ],
        "'RPAREN": [
          -1,
          512
        ],
        "'TYPE": [
          -1,
          512
        ],
        "'DATA": [
          -1,
          512
        ],
        "'PARENSPACE": [
          -1,
          512
        ],
        "'SPY": [
          -1,
          512
        ],
        "'EQUALS": [
          -1,
          512
        ],
        "'NEWTYPE": [
          -1,
          512
        ],
        "'LBRACE": [
          -1,
          512
        ],
        "'RBRACE": [
          -1,
          512
        ],
        "'SEMI": [
          -1,
          512
        ],
        "'SHADOW": [
          -1,
          512
        ],
        "'LET": [
          -1,
          512
        ],
        "'BLOCK": [
          -1,
          512
        ],
        "'LETREC": [
          -1,
          512
        ],
        "'TYPE-LET": [
          -1,
          512
        ],
        "'FUN": [
          -1,
          512
        ],
        "'LANGLE": [
          -1,
          512
        ],
        "'RANGLE": [
          -1,
          512
        ],
        "'GT": [
          -1,
          512
        ],
        "'PARENAFTERBRACE": [
          -1,
          512
        ],
        "'THINARROW": [
          -1,
          512
        ],
        "'WHERE": [
          -1,
          512
        ],
        "'CHECK": [
          -1,
          512
        ],
        "'EXAMPLES": [
          -1,
          512
        ],
        "'CHECKCOLON": [
          -1,
          512
        ],
        "'EXAMPLESCOLON": [
          -1,
          512
        ],
        "'PERCENT": [
          -1,
          512
        ],
        "'BAR": [
          -1,
          512
        ],
        "'VAR": [
          -1,
          512
        ],
        "'REC": [
          -1,
          512
        ],
        "'WHEN": [
          -1,
          512
        ],
        "'DOTDOTDOT": [
          -1,
          512
        ],
        "'NUMBER": [
          -1,
          512
        ],
        "'RATIONAL": [
          -1,
          512
        ],
        "'ROUGHRATIONAL": [
          -1,
          512
        ],
        "'TRUE": [
          -1,
          512
        ],
        "'FALSE": [
          -1,
          512
        ],
        "'LAM": [
          -1,
          512
        ],
        "'METHOD": [
          -1,
          512
        ],
        "'LBRACK": [
          -1,
          512
        ],
        "'TABLE": [
          -1,
          512
        ],
        "'ROW": [
          -1,
          512
        ],
        "'REACTOR": [
          -1,
          512
        ],
        "'IF": [
          -1,
          512
        ],
        "'ELSECOLON": [
          -1,
          512
        ],
        "'ELSEIF": [
          -1,
          512
        ],
        "'ASK": [
          -1,
          512
        ],
        "'CASES": [
          -1,
          512
        ],
        "'FOR": [
          -1,
          512
        ],
        "'TABLE-SELECT": [
          -1,
          512
        ],
        "'TABLE-FILTER": [
          -1,
          512
        ],
        "'TABLE-ORDER": [
          -1,
          512
        ],
        "'TABLE-EXTRACT": [
          -1,
          512
        ],
        "'TABLE-UPDATE": [
          -1,
          512
        ],
        "'TABLE-EXTEND": [
          -1,
          512
        ],
        "'LOAD-TABLE": [
          -1,
          512
        ],
        "'SOURCECOLON": [
          -1,
          512
        ],
        "'SANITIZE": [
          -1,
          512
        ]
      },
      {
        "'NAME": [
          -1,
          514
        ],
        "'PARENNOSPACE": [
          -1,
          514
        ],
        "'PARENSPACE": [
          -1,
          514
        ],
        "'LBRACE": [
          -1,
          514
        ],
        "'PARENAFTERBRACE": [
          -1,
          514
        ],
        "'THINARROW": [
          -1,
          514
        ]
      },
      {
        "$": [
          -1,
          516
        ],
        "'FROM": [
          -1,
          516
        ],
        "'COLON": [
          -1,
          516
        ],
        "'END": [
          -1,
          516
        ],
        "'COMMA": [
          -1,
          516
        ],
        "'NAME": [
          -1,
          516
        ],
        "'STRING": [
          -1,
          516
        ],
        "'RPAREN": [
          -1,
          516
        ],
        "'TYPE": [
          -1,
          516
        ],
        "'DATA": [
          -1,
          516
        ],
        "'PARENSPACE": [
          -1,
          516
        ],
        "'SPY": [
          -1,
          516
        ],
        "'EQUALS": [
          -1,
          516
        ],
        "'NEWTYPE": [
          -1,
          516
        ],
        "'LBRACE": [
          -1,
          516
        ],
        "'RBRACE": [
          -1,
          516
        ],
        "'SEMI": [
          -1,
          516
        ],
        "'SHADOW": [
          -1,
          516
        ],
        "'LET": [
          -1,
          516
        ],
        "'BLOCK": [
          -1,
          516
        ],
        "'LETREC": [
          -1,
          516
        ],
        "'TYPE-LET": [
          -1,
          516
        ],
        "'FUN": [
          -1,
          516
        ],
        "'RANGLE": [
          -1,
          516
        ],
        "'GT": [
          -1,
          516
        ],
        "'PARENAFTERBRACE": [
          -1,
          516
        ],
        "'THINARROW": [
          -1,
          516
        ],
        "'WHERE": [
          -1,
          516
        ],
        "'CHECK": [
          -1,
          516
        ],
        "'EXAMPLES": [
          -1,
          516
        ],
        "'CHECKCOLON": [
          -1,
          516
        ],
        "'EXAMPLESCOLON": [
          -1,
          516
        ],
        "'PERCENT": [
          -1,
          516
        ],
        "'BAR": [
          -1,
          516
        ],
        "'VAR": [
          -1,
          516
        ],
        "'REC": [
          -1,
          516
        ],
        "'WHEN": [
          -1,
          516
        ],
        "'DOTDOTDOT": [
          -1,
          516
        ],
        "'NUMBER": [
          -1,
          516
        ],
        "'RATIONAL": [
          -1,
          516
        ],
        "'ROUGHRATIONAL": [
          -1,
          516
        ],
        "'TRUE": [
          -1,
          516
        ],
        "'FALSE": [
          -1,
          516
        ],
        "'LAM": [
          -1,
          516
        ],
        "'METHOD": [
          -1,
          516
        ],
        "'LBRACK": [
          -1,
          516
        ],
        "'TABLE": [
          -1,
          516
        ],
        "'ROW": [
          -1,
          516
        ],
        "'REACTOR": [
          -1,
          516
        ],
        "'IF": [
          -1,
          516
        ],
        "'ELSECOLON": [
          -1,
          516
        ],
        "'ELSEIF": [
          -1,
          516
        ],
        "'ASK": [
          -1,
          516
        ],
        "'CASES": [
          -1,
          516
        ],
        "'FOR": [
          -1,
          516
        ],
        "'TABLE-SELECT": [
          -1,
          516
        ],
        "'TABLE-FILTER": [
          -1,
          516
        ],
        "'TABLE-ORDER": [
          -1,
          516
        ],
        "'TABLE-EXTRACT": [
          -1,
          516
        ],
        "'TABLE-UPDATE": [
          -1,
          516
        ],
        "'TABLE-EXTEND": [
          -1,
          516
        ],
        "'LOAD-TABLE": [
          -1,
          516
        ],
        "'SOURCECOLON": [
          -1,
          516
        ],
        "'SANITIZE": [
          -1,
          516
        ]
      },
      {
        "'NAME": [
          -1,
          518
        ],
        "'PARENNOSPACE": [
          -1,
          518
        ],
        "'PARENSPACE": [
          -1,
          518
        ],
        "'LBRACE": [
          -1,
          518
        ],
        "'PARENAFTERBRACE": [
          -1,
          518
        ],
        "'THINARROW": [
          -1,
          518
        ]
      },
      {
        "'PERCENT": [
          522
        ],
        "inst-expr_I3*": [
          523
        ],
        "'COMMA": [
          -1,
          520
        ],
        "'RANGLE": [
          -1,
          520
        ],
        "'GT": [
          -1,
          520
        ]
      },
      {
        "'NAME": [
          524
        ],
        "'PARENNOSPACE": [
          340
        ],
        "record-ann": [
          341
        ],
        "'PARENSPACE": [
          342
        ],
        "ann": [
          525
        ],
        "'LBRACE": [
          344
        ],
        "'PARENAFTERBRACE": [
          345
        ],
        "name-ann": [
          346
        ],
        "arrow-ann": [
          347
        ],
        "app-ann": [
          348
        ],
        "pred-ann": [
          349
        ],
        "dot-ann": [
          350
        ],
        "tuple-ann": [
          351
        ],
        "comma-ann-field": [
          263
        ],
        "ann-field": [
          264
        ],
        "trailing-opt-comma-ann-field": [
          265
        ],
        "trailing-opt-comma-ann-field_I0": [
          266
        ],
        "arrow-ann_I0": [
          352
        ],
        "app-ann_I0": [
          353
        ],
        "'RBRACE": [
          -1,
          232,
          234
        ]
      },
      {
        "'NAME": [
          -1,
          522
        ],
        "'PARENNOSPACE": [
          -1,
          522
        ],
        "'PARENSPACE": [
          -1,
          522
        ],
        "'LBRACE": [
          -1,
          522
        ],
        "'PARENAFTERBRACE": [
          -1,
          522
        ],
        "'THINARROW": [
          -1,
          522
        ]
      },
      {
        "$": [
          -1,
          524
        ],
        "'FROM": [
          -1,
          524
        ],
        "'COLON": [
          -1,
          524
        ],
        "'END": [
          -1,
          524
        ],
        "'COMMA": [
          -1,
          524
        ],
        "'NAME": [
          -1,
          524
        ],
        "'STRING": [
          -1,
          524
        ],
        "'RPAREN": [
          -1,
          524
        ],
        "'TYPE": [
          -1,
          524
        ],
        "'DATA": [
          -1,
          524
        ],
        "'PARENSPACE": [
          -1,
          524
        ],
        "'SPY": [
          -1,
          524
        ],
        "'EQUALS": [
          -1,
          524
        ],
        "'NEWTYPE": [
          -1,
          524
        ],
        "'LBRACE": [
          -1,
          524
        ],
        "'RBRACE": [
          -1,
          524
        ],
        "'SEMI": [
          -1,
          524
        ],
        "'SHADOW": [
          -1,
          524
        ],
        "'LET": [
          -1,
          524
        ],
        "'BLOCK": [
          -1,
          524
        ],
        "'LETREC": [
          -1,
          524
        ],
        "'TYPE-LET": [
          -1,
          524
        ],
        "'FUN": [
          -1,
          524
        ],
        "'LANGLE": [
          -1,
          526
        ],
        "'RANGLE": [
          -1,
          524
        ],
        "'GT": [
          -1,
          524
        ],
        "'PARENAFTERBRACE": [
          -1,
          524
        ],
        "'THINARROW": [
          -1,
          524
        ],
        "'WHERE": [
          -1,
          524
        ],
        "'CHECK": [
          -1,
          524
        ],
        "'EXAMPLES": [
          -1,
          524
        ],
        "'CHECKCOLON": [
          -1,
          524
        ],
        "'EXAMPLESCOLON": [
          -1,
          524
        ],
        "'PERCENT": [
          -1,
          524
        ],
        "'BAR": [
          -1,
          524
        ],
        "'VAR": [
          -1,
          524
        ],
        "'REC": [
          -1,
          524
        ],
        "'WHEN": [
          -1,
          524
        ],
        "'DOTDOTDOT": [
          -1,
          524
        ],
        "'NUMBER": [
          -1,
          524
        ],
        "'RATIONAL": [
          -1,
          524
        ],
        "'ROUGHRATIONAL": [
          -1,
          524
        ],
        "'TRUE": [
          -1,
          524
        ],
        "'FALSE": [
          -1,
          524
        ],
        "'LAM": [
          -1,
          524
        ],
        "'METHOD": [
          -1,
          524
        ],
        "'LBRACK": [
          -1,
          524
        ],
        "'TABLE": [
          -1,
          524
        ],
        "'ROW": [
          -1,
          524
        ],
        "'REACTOR": [
          -1,
          524
        ],
        "'IF": [
          -1,
          524
        ],
        "'ELSECOLON": [
          -1,
          524
        ],
        "'ELSEIF": [
          -1,
          524
        ],
        "'ASK": [
          -1,
          524
        ],
        "'CASES": [
          -1,
          524
        ],
        "'FOR": [
          -1,
          524
        ],
        "'TABLE-SELECT": [
          -1,
          524
        ],
        "'TABLE-FILTER": [
          -1,
          524
        ],
        "'TABLE-ORDER": [
          -1,
          524
        ],
        "'TABLE-EXTRACT": [
          -1,
          524
        ],
        "'TABLE-UPDATE": [
          -1,
          524
        ],
        "'TABLE-EXTEND": [
          -1,
          524
        ],
        "'LOAD-TABLE": [
          -1,
          524
        ],
        "'SOURCECOLON": [
          -1,
          524
        ],
        "'SANITIZE": [
          -1,
          524
        ]
      },
      {
        "$": [
          -1,
          528
        ],
        "'FROM": [
          -1,
          528
        ],
        "'COLON": [
          -1,
          528
        ],
        "'END": [
          -1,
          528
        ],
        "'COMMA": [
          -1,
          528
        ],
        "'NAME": [
          -1,
          528
        ],
        "'STRING": [
          -1,
          528
        ],
        "'RPAREN": [
          -1,
          528
        ],
        "'TYPE": [
          -1,
          528
        ],
        "'DATA": [
          -1,
          528
        ],
        "'PARENSPACE": [
          -1,
          528
        ],
        "'SPY": [
          -1,
          528
        ],
        "'EQUALS": [
          -1,
          528
        ],
        "'NEWTYPE": [
          -1,
          528
        ],
        "'LBRACE": [
          -1,
          528
        ],
        "'RBRACE": [
          -1,
          528
        ],
        "'SEMI": [
          -1,
          528
        ],
        "'SHADOW": [
          -1,
          528
        ],
        "'LET": [
          -1,
          528
        ],
        "'BLOCK": [
          -1,
          528
        ],
        "'LETREC": [
          -1,
          528
        ],
        "'TYPE-LET": [
          -1,
          528
        ],
        "'FUN": [
          -1,
          528
        ],
        "'RANGLE": [
          -1,
          528
        ],
        "'GT": [
          -1,
          528
        ],
        "'PARENAFTERBRACE": [
          -1,
          528
        ],
        "'THINARROW": [
          -1,
          528
        ],
        "'WHERE": [
          -1,
          528
        ],
        "'CHECK": [
          -1,
          528
        ],
        "'EXAMPLES": [
          -1,
          528
        ],
        "'CHECKCOLON": [
          -1,
          528
        ],
        "'EXAMPLESCOLON": [
          -1,
          528
        ],
        "'PERCENT": [
          -1,
          528
        ],
        "'BAR": [
          -1,
          528
        ],
        "'VAR": [
          -1,
          528
        ],
        "'REC": [
          -1,
          528
        ],
        "'WHEN": [
          -1,
          528
        ],
        "'DOTDOTDOT": [
          -1,
          528
        ],
        "'NUMBER": [
          -1,
          528
        ],
        "'RATIONAL": [
          -1,
          528
        ],
        "'ROUGHRATIONAL": [
          -1,
          528
        ],
        "'TRUE": [
          -1,
          528
        ],
        "'FALSE": [
          -1,
          528
        ],
        "'LAM": [
          -1,
          528
        ],
        "'METHOD": [
          -1,
          528
        ],
        "'LBRACK": [
          -1,
          528
        ],
        "'TABLE": [
          -1,
          528
        ],
        "'ROW": [
          -1,
          528
        ],
        "'REACTOR": [
          -1,
          528
        ],
        "'IF": [
          -1,
          528
        ],
        "'ELSECOLON": [
          -1,
          528
        ],
        "'ELSEIF": [
          -1,
          528
        ],
        "'ASK": [
          -1,
          528
        ],
        "'CASES": [
          -1,
          528
        ],
        "'FOR": [
          -1,
          528
        ],
        "'TABLE-SELECT": [
          -1,
          528
        ],
        "'TABLE-FILTER": [
          -1,
          528
        ],
        "'TABLE-ORDER": [
          -1,
          528
        ],
        "'TABLE-EXTRACT": [
          -1,
          528
        ],
        "'TABLE-UPDATE": [
          -1,
          528
        ],
        "'TABLE-EXTEND": [
          -1,
          528
        ],
        "'LOAD-TABLE": [
          -1,
          528
        ],
        "'SOURCECOLON": [
          -1,
          528
        ],
        "'SANITIZE": [
          -1,
          528
        ]
      },
      {
        "$": [
          -1,
          530
        ],
        "'FROM": [
          -1,
          530
        ],
        "'COLON": [
          -1,
          530
        ],
        "'END": [
          -1,
          530
        ],
        "'COMMA": [
          -1,
          530
        ],
        "'NAME": [
          -1,
          530
        ],
        "'STRING": [
          -1,
          530
        ],
        "'RPAREN": [
          -1,
          530
        ],
        "'TYPE": [
          -1,
          530
        ],
        "'DATA": [
          -1,
          530
        ],
        "'PARENSPACE": [
          -1,
          530
        ],
        "'SPY": [
          -1,
          530
        ],
        "'EQUALS": [
          -1,
          530
        ],
        "'NEWTYPE": [
          -1,
          530
        ],
        "'LBRACE": [
          -1,
          530
        ],
        "'RBRACE": [
          -1,
          530
        ],
        "'SEMI": [
          -1,
          530
        ],
        "'SHADOW": [
          -1,
          530
        ],
        "'LET": [
          -1,
          530
        ],
        "'BLOCK": [
          -1,
          530
        ],
        "'LETREC": [
          -1,
          530
        ],
        "'TYPE-LET": [
          -1,
          530
        ],
        "'FUN": [
          -1,
          530
        ],
        "'RANGLE": [
          -1,
          530
        ],
        "'GT": [
          -1,
          530
        ],
        "'PARENAFTERBRACE": [
          -1,
          530
        ],
        "'THINARROW": [
          -1,
          530
        ],
        "'WHERE": [
          -1,
          530
        ],
        "'CHECK": [
          -1,
          530
        ],
        "'EXAMPLES": [
          -1,
          530
        ],
        "'CHECKCOLON": [
          -1,
          530
        ],
        "'EXAMPLESCOLON": [
          -1,
          530
        ],
        "'PERCENT": [
          -1,
          530
        ],
        "'BAR": [
          -1,
          530
        ],
        "'VAR": [
          -1,
          530
        ],
        "'REC": [
          -1,
          530
        ],
        "'WHEN": [
          -1,
          530
        ],
        "'DOTDOTDOT": [
          -1,
          530
        ],
        "'NUMBER": [
          -1,
          530
        ],
        "'RATIONAL": [
          -1,
          530
        ],
        "'ROUGHRATIONAL": [
          -1,
          530
        ],
        "'TRUE": [
          -1,
          530
        ],
        "'FALSE": [
          -1,
          530
        ],
        "'LAM": [
          -1,
          530
        ],
        "'METHOD": [
          -1,
          530
        ],
        "'LBRACK": [
          -1,
          530
        ],
        "'TABLE": [
          -1,
          530
        ],
        "'ROW": [
          -1,
          530
        ],
        "'REACTOR": [
          -1,
          530
        ],
        "'IF": [
          -1,
          530
        ],
        "'ELSECOLON": [
          -1,
          530
        ],
        "'ELSEIF": [
          -1,
          530
        ],
        "'ASK": [
          -1,
          530
        ],
        "'CASES": [
          -1,
          530
        ],
        "'FOR": [
          -1,
          530
        ],
        "'TABLE-SELECT": [
          -1,
          530
        ],
        "'TABLE-FILTER": [
          -1,
          530
        ],
        "'TABLE-ORDER": [
          -1,
          530
        ],
        "'TABLE-EXTRACT": [
          -1,
          530
        ],
        "'TABLE-UPDATE": [
          -1,
          530
        ],
        "'TABLE-EXTEND": [
          -1,
          530
        ],
        "'LOAD-TABLE": [
          -1,
          530
        ],
        "'SOURCECOLON": [
          -1,
          530
        ],
        "'SANITIZE": [
          -1,
          530
        ]
      },
      {
        "$": [
          -1,
          532
        ],
        "'FROM": [
          -1,
          532
        ],
        "'COLON": [
          -1,
          532
        ],
        "'END": [
          -1,
          532
        ],
        "'COMMA": [
          -1,
          532
        ],
        "'NAME": [
          -1,
          532
        ],
        "'STRING": [
          -1,
          532
        ],
        "'RPAREN": [
          -1,
          532
        ],
        "'TYPE": [
          -1,
          532
        ],
        "'DATA": [
          -1,
          532
        ],
        "'PARENSPACE": [
          -1,
          532
        ],
        "'SPY": [
          -1,
          532
        ],
        "'EQUALS": [
          -1,
          532
        ],
        "'NEWTYPE": [
          -1,
          532
        ],
        "'LBRACE": [
          -1,
          532
        ],
        "'RBRACE": [
          -1,
          532
        ],
        "'SEMI": [
          -1,
          532
        ],
        "'SHADOW": [
          -1,
          532
        ],
        "'LET": [
          -1,
          532
        ],
        "'BLOCK": [
          -1,
          532
        ],
        "'LETREC": [
          -1,
          532
        ],
        "'TYPE-LET": [
          -1,
          532
        ],
        "'FUN": [
          -1,
          532
        ],
        "'RANGLE": [
          -1,
          532
        ],
        "'GT": [
          -1,
          532
        ],
        "'PARENAFTERBRACE": [
          -1,
          532
        ],
        "'THINARROW": [
          -1,
          532
        ],
        "'WHERE": [
          -1,
          532
        ],
        "'CHECK": [
          -1,
          532
        ],
        "'EXAMPLES": [
          -1,
          532
        ],
        "'CHECKCOLON": [
          -1,
          532
        ],
        "'EXAMPLESCOLON": [
          -1,
          532
        ],
        "'PERCENT": [
          -1,
          532
        ],
        "'BAR": [
          -1,
          532
        ],
        "'VAR": [
          -1,
          532
        ],
        "'REC": [
          -1,
          532
        ],
        "'WHEN": [
          -1,
          532
        ],
        "'DOTDOTDOT": [
          -1,
          532
        ],
        "'NUMBER": [
          -1,
          532
        ],
        "'RATIONAL": [
          -1,
          532
        ],
        "'ROUGHRATIONAL": [
          -1,
          532
        ],
        "'TRUE": [
          -1,
          532
        ],
        "'FALSE": [
          -1,
          532
        ],
        "'LAM": [
          -1,
          532
        ],
        "'METHOD": [
          -1,
          532
        ],
        "'LBRACK": [
          -1,
          532
        ],
        "'TABLE": [
          -1,
          532
        ],
        "'ROW": [
          -1,
          532
        ],
        "'REACTOR": [
          -1,
          532
        ],
        "'IF": [
          -1,
          532
        ],
        "'ELSECOLON": [
          -1,
          532
        ],
        "'ELSEIF": [
          -1,
          532
        ],
        "'ASK": [
          -1,
          532
        ],
        "'CASES": [
          -1,
          532
        ],
        "'FOR": [
          -1,
          532
        ],
        "'TABLE-SELECT": [
          -1,
          532
        ],
        "'TABLE-FILTER": [
          -1,
          532
        ],
        "'TABLE-ORDER": [
          -1,
          532
        ],
        "'TABLE-EXTRACT": [
          -1,
          532
        ],
        "'TABLE-UPDATE": [
          -1,
          532
        ],
        "'TABLE-EXTEND": [
          -1,
          532
        ],
        "'LOAD-TABLE": [
          -1,
          532
        ],
        "'SOURCECOLON": [
          -1,
          532
        ],
        "'SANITIZE": [
          -1,
          532
        ]
      },
      {
        "$": [
          -1,
          534
        ],
        "'FROM": [
          -1,
          534
        ],
        "'COLON": [
          -1,
          534
        ],
        "'END": [
          -1,
          534
        ],
        "'COMMA": [
          -1,
          534
        ],
        "'NAME": [
          -1,
          534
        ],
        "'STRING": [
          -1,
          534
        ],
        "'RPAREN": [
          -1,
          534
        ],
        "'TYPE": [
          -1,
          534
        ],
        "'DATA": [
          -1,
          534
        ],
        "'PARENSPACE": [
          -1,
          534
        ],
        "'SPY": [
          -1,
          534
        ],
        "'EQUALS": [
          -1,
          534
        ],
        "'NEWTYPE": [
          -1,
          534
        ],
        "'LBRACE": [
          -1,
          534
        ],
        "'RBRACE": [
          -1,
          534
        ],
        "'SEMI": [
          -1,
          534
        ],
        "'SHADOW": [
          -1,
          534
        ],
        "'LET": [
          -1,
          534
        ],
        "'BLOCK": [
          -1,
          534
        ],
        "'LETREC": [
          -1,
          534
        ],
        "'TYPE-LET": [
          -1,
          534
        ],
        "'FUN": [
          -1,
          534
        ],
        "'LANGLE": [
          -1,
          536
        ],
        "'RANGLE": [
          -1,
          534
        ],
        "'GT": [
          -1,
          534
        ],
        "'PARENAFTERBRACE": [
          -1,
          534
        ],
        "'THINARROW": [
          -1,
          534
        ],
        "'WHERE": [
          -1,
          534
        ],
        "'CHECK": [
          -1,
          534
        ],
        "'EXAMPLES": [
          -1,
          534
        ],
        "'CHECKCOLON": [
          -1,
          534
        ],
        "'EXAMPLESCOLON": [
          -1,
          534
        ],
        "'PERCENT": [
          -1,
          534
        ],
        "'BAR": [
          -1,
          534
        ],
        "'VAR": [
          -1,
          534
        ],
        "'REC": [
          -1,
          534
        ],
        "'WHEN": [
          -1,
          534
        ],
        "'DOTDOTDOT": [
          -1,
          534
        ],
        "'NUMBER": [
          -1,
          534
        ],
        "'RATIONAL": [
          -1,
          534
        ],
        "'ROUGHRATIONAL": [
          -1,
          534
        ],
        "'TRUE": [
          -1,
          534
        ],
        "'FALSE": [
          -1,
          534
        ],
        "'LAM": [
          -1,
          534
        ],
        "'METHOD": [
          -1,
          534
        ],
        "'LBRACK": [
          -1,
          534
        ],
        "'TABLE": [
          -1,
          534
        ],
        "'ROW": [
          -1,
          534
        ],
        "'REACTOR": [
          -1,
          534
        ],
        "'IF": [
          -1,
          534
        ],
        "'ELSECOLON": [
          -1,
          534
        ],
        "'ELSEIF": [
          -1,
          534
        ],
        "'ASK": [
          -1,
          534
        ],
        "'CASES": [
          -1,
          534
        ],
        "'FOR": [
          -1,
          534
        ],
        "'TABLE-SELECT": [
          -1,
          534
        ],
        "'TABLE-FILTER": [
          -1,
          534
        ],
        "'TABLE-ORDER": [
          -1,
          534
        ],
        "'TABLE-EXTRACT": [
          -1,
          534
        ],
        "'TABLE-UPDATE": [
          -1,
          534
        ],
        "'TABLE-EXTEND": [
          -1,
          534
        ],
        "'LOAD-TABLE": [
          -1,
          534
        ],
        "'SOURCECOLON": [
          -1,
          534
        ],
        "'SANITIZE": [
          -1,
          534
        ]
      },
      {
        "$": [
          -1,
          538
        ],
        "'FROM": [
          -1,
          538
        ],
        "'COLON": [
          -1,
          538
        ],
        "'END": [
          -1,
          538
        ],
        "'COMMA": [
          -1,
          538
        ],
        "'NAME": [
          -1,
          538
        ],
        "'STRING": [
          -1,
          538
        ],
        "'RPAREN": [
          -1,
          538
        ],
        "'TYPE": [
          -1,
          538
        ],
        "'DATA": [
          -1,
          538
        ],
        "'PARENSPACE": [
          -1,
          538
        ],
        "'SPY": [
          -1,
          538
        ],
        "'EQUALS": [
          -1,
          538
        ],
        "'NEWTYPE": [
          -1,
          538
        ],
        "'LBRACE": [
          -1,
          538
        ],
        "'RBRACE": [
          -1,
          538
        ],
        "'SEMI": [
          -1,
          538
        ],
        "'SHADOW": [
          -1,
          538
        ],
        "'LET": [
          -1,
          538
        ],
        "'BLOCK": [
          -1,
          538
        ],
        "'LETREC": [
          -1,
          538
        ],
        "'TYPE-LET": [
          -1,
          538
        ],
        "'FUN": [
          -1,
          538
        ],
        "'RANGLE": [
          -1,
          538
        ],
        "'GT": [
          -1,
          538
        ],
        "'PARENAFTERBRACE": [
          -1,
          538
        ],
        "'THINARROW": [
          -1,
          538
        ],
        "'WHERE": [
          -1,
          538
        ],
        "'CHECK": [
          -1,
          538
        ],
        "'EXAMPLES": [
          -1,
          538
        ],
        "'CHECKCOLON": [
          -1,
          538
        ],
        "'EXAMPLESCOLON": [
          -1,
          538
        ],
        "'PERCENT": [
          -1,
          538
        ],
        "'BAR": [
          -1,
          538
        ],
        "'VAR": [
          -1,
          538
        ],
        "'REC": [
          -1,
          538
        ],
        "'WHEN": [
          -1,
          538
        ],
        "'DOTDOTDOT": [
          -1,
          538
        ],
        "'NUMBER": [
          -1,
          538
        ],
        "'RATIONAL": [
          -1,
          538
        ],
        "'ROUGHRATIONAL": [
          -1,
          538
        ],
        "'TRUE": [
          -1,
          538
        ],
        "'FALSE": [
          -1,
          538
        ],
        "'LAM": [
          -1,
          538
        ],
        "'METHOD": [
          -1,
          538
        ],
        "'LBRACK": [
          -1,
          538
        ],
        "'TABLE": [
          -1,
          538
        ],
        "'ROW": [
          -1,
          538
        ],
        "'REACTOR": [
          -1,
          538
        ],
        "'IF": [
          -1,
          538
        ],
        "'ELSECOLON": [
          -1,
          538
        ],
        "'ELSEIF": [
          -1,
          538
        ],
        "'ASK": [
          -1,
          538
        ],
        "'CASES": [
          -1,
          538
        ],
        "'FOR": [
          -1,
          538
        ],
        "'TABLE-SELECT": [
          -1,
          538
        ],
        "'TABLE-FILTER": [
          -1,
          538
        ],
        "'TABLE-ORDER": [
          -1,
          538
        ],
        "'TABLE-EXTRACT": [
          -1,
          538
        ],
        "'TABLE-UPDATE": [
          -1,
          538
        ],
        "'TABLE-EXTEND": [
          -1,
          538
        ],
        "'LOAD-TABLE": [
          -1,
          538
        ],
        "'SOURCECOLON": [
          -1,
          538
        ],
        "'SANITIZE": [
          -1,
          538
        ]
      },
      {
        "'NAME": [
          339
        ],
        "'PARENNOSPACE": [
          437
        ],
        "record-ann": [
          341
        ],
        "'PARENSPACE": [
          438
        ],
        "ann": [
          526
        ],
        "'LBRACE": [
          344
        ],
        "'PARENAFTERBRACE": [
          442
        ],
        "name-ann": [
          346
        ],
        "arrow-ann": [
          347
        ],
        "app-ann": [
          348
        ],
        "pred-ann": [
          349
        ],
        "dot-ann": [
          350
        ],
        "tuple-ann": [
          351
        ],
        "arrow-ann-args": [
          527
        ],
        "comma-anns": [
          446
        ],
        "arrow-ann-args_A1_I0": [
          447
        ],
        "arrow-ann_I0": [
          352
        ],
        "arrow-ann_I1?": [
          528
        ],
        "arrow-ann_I1": [
          529
        ],
        "app-ann_I0": [
          353
        ],
        "'THINARROW": [
          -1,
          540
        ]
      },
      {
        "'LANGLE": [
          530
        ]
      },
      {
        "'NAME": [
          -1,
          542
        ],
        "'STRING": [
          -1,
          542
        ],
        "'PARENSPACE": [
          -1,
          542
        ],
        "'LBRACE": [
          -1,
          542
        ],
        "'LET": [
          -1,
          542
        ],
        "'BLOCK": [
          -1,
          542
        ],
        "'LETREC": [
          -1,
          542
        ],
        "'TYPE-LET": [
          -1,
          542
        ],
        "'PARENAFTERBRACE": [
          -1,
          542
        ],
        "'DOTDOTDOT": [
          -1,
          542
        ],
        "'NUMBER": [
          -1,
          542
        ],
        "'RATIONAL": [
          -1,
          542
        ],
        "'ROUGHRATIONAL": [
          -1,
          542
        ],
        "'TRUE": [
          -1,
          542
        ],
        "'FALSE": [
          -1,
          542
        ],
        "'LAM": [
          -1,
          542
        ],
        "'METHOD": [
          -1,
          542
        ],
        "'LBRACK": [
          -1,
          542
        ],
        "'TABLE": [
          -1,
          542
        ],
        "'REACTOR": [
          -1,
          542
        ],
        "'IF": [
          -1,
          542
        ],
        "'ASK": [
          -1,
          542
        ],
        "'CASES": [
          -1,
          542
        ],
        "'FOR": [
          -1,
          542
        ],
        "'TABLE-SELECT": [
          -1,
          542
        ],
        "'TABLE-FILTER": [
          -1,
          542
        ],
        "'TABLE-ORDER": [
          -1,
          542
        ],
        "'TABLE-EXTRACT": [
          -1,
          542
        ],
        "'TABLE-UPDATE": [
          -1,
          542
        ],
        "'TABLE-EXTEND": [
          -1,
          542
        ],
        "'LOAD-TABLE": [
          -1,
          542
        ]
      },
      {
        "'NAME": [
          -1,
          544
        ],
        "'STRING": [
          -1,
          544
        ],
        "'PARENSPACE": [
          -1,
          544
        ],
        "'LBRACE": [
          -1,
          544
        ],
        "'LET": [
          -1,
          544
        ],
        "'BLOCK": [
          -1,
          544
        ],
        "'LETREC": [
          -1,
          544
        ],
        "'TYPE-LET": [
          -1,
          544
        ],
        "'PARENAFTERBRACE": [
          -1,
          544
        ],
        "'DOTDOTDOT": [
          -1,
          544
        ],
        "'NUMBER": [
          -1,
          544
        ],
        "'RATIONAL": [
          -1,
          544
        ],
        "'ROUGHRATIONAL": [
          -1,
          544
        ],
        "'TRUE": [
          -1,
          544
        ],
        "'FALSE": [
          -1,
          544
        ],
        "'LAM": [
          -1,
          544
        ],
        "'METHOD": [
          -1,
          544
        ],
        "'LBRACK": [
          -1,
          544
        ],
        "'TABLE": [
          -1,
          544
        ],
        "'REACTOR": [
          -1,
          544
        ],
        "'IF": [
          -1,
          544
        ],
        "'ASK": [
          -1,
          544
        ],
        "'CASES": [
          -1,
          544
        ],
        "'FOR": [
          -1,
          544
        ],
        "'TABLE-SELECT": [
          -1,
          544
        ],
        "'TABLE-FILTER": [
          -1,
          544
        ],
        "'TABLE-ORDER": [
          -1,
          544
        ],
        "'TABLE-EXTRACT": [
          -1,
          544
        ],
        "'TABLE-UPDATE": [
          -1,
          544
        ],
        "'TABLE-EXTEND": [
          -1,
          544
        ],
        "'LOAD-TABLE": [
          -1,
          544
        ]
      },
      {
        "'NAME": [
          -1,
          546
        ],
        "'STRING": [
          -1,
          546
        ],
        "'PARENSPACE": [
          -1,
          546
        ],
        "'LBRACE": [
          -1,
          546
        ],
        "'LET": [
          -1,
          546
        ],
        "'BLOCK": [
          -1,
          546
        ],
        "'LETREC": [
          -1,
          546
        ],
        "'TYPE-LET": [
          -1,
          546
        ],
        "'PARENAFTERBRACE": [
          -1,
          546
        ],
        "'DOTDOTDOT": [
          -1,
          546
        ],
        "'NUMBER": [
          -1,
          546
        ],
        "'RATIONAL": [
          -1,
          546
        ],
        "'ROUGHRATIONAL": [
          -1,
          546
        ],
        "'TRUE": [
          -1,
          546
        ],
        "'FALSE": [
          -1,
          546
        ],
        "'LAM": [
          -1,
          546
        ],
        "'METHOD": [
          -1,
          546
        ],
        "'LBRACK": [
          -1,
          546
        ],
        "'TABLE": [
          -1,
          546
        ],
        "'REACTOR": [
          -1,
          546
        ],
        "'IF": [
          -1,
          546
        ],
        "'ASK": [
          -1,
          546
        ],
        "'CASES": [
          -1,
          546
        ],
        "'FOR": [
          -1,
          546
        ],
        "'TABLE-SELECT": [
          -1,
          546
        ],
        "'TABLE-FILTER": [
          -1,
          546
        ],
        "'TABLE-ORDER": [
          -1,
          546
        ],
        "'TABLE-EXTRACT": [
          -1,
          546
        ],
        "'TABLE-UPDATE": [
          -1,
          546
        ],
        "'TABLE-EXTEND": [
          -1,
          546
        ],
        "'LOAD-TABLE": [
          -1,
          546
        ]
      },
      {
        "$": [
          -1,
          548
        ],
        "'COLON": [
          -1,
          548
        ],
        "'END": [
          -1,
          548
        ],
        "'COMMA": [
          -1,
          548
        ],
        "'NAME": [
          -1,
          548
        ],
        "'STRING": [
          -1,
          548
        ],
        "'RPAREN": [
          -1,
          548
        ],
        "'TYPE": [
          -1,
          548
        ],
        "'DATA": [
          -1,
          548
        ],
        "'TIMES": [
          -1,
          548
        ],
        "'PARENSPACE": [
          -1,
          548
        ],
        "'SPY": [
          -1,
          548
        ],
        "'NEWTYPE": [
          -1,
          548
        ],
        "'LBRACE": [
          -1,
          548
        ],
        "'RBRACE": [
          -1,
          548
        ],
        "'SEMI": [
          -1,
          548
        ],
        "'SHADOW": [
          -1,
          548
        ],
        "'LET": [
          -1,
          548
        ],
        "'BLOCK": [
          -1,
          548
        ],
        "'LETREC": [
          -1,
          548
        ],
        "'TYPE-LET": [
          -1,
          548
        ],
        "'FUN": [
          -1,
          548
        ],
        "'LT": [
          -1,
          548
        ],
        "'GT": [
          -1,
          548
        ],
        "'PARENAFTERBRACE": [
          -1,
          548
        ],
        "'WHERE": [
          -1,
          548
        ],
        "'CHECK": [
          -1,
          548
        ],
        "'EXAMPLES": [
          -1,
          548
        ],
        "'CHECKCOLON": [
          -1,
          548
        ],
        "'EXAMPLESCOLON": [
          -1,
          548
        ],
        "'BECAUSE": [
          -1,
          548
        ],
        "'BAR": [
          -1,
          548
        ],
        "'SHARING": [
          -1,
          548
        ],
        "'VAR": [
          -1,
          548
        ],
        "'REC": [
          -1,
          548
        ],
        "'WHEN": [
          -1,
          548
        ],
        "'PLUS": [
          -1,
          548
        ],
        "'DASH": [
          -1,
          548
        ],
        "'SLASH": [
          -1,
          548
        ],
        "'LEQ": [
          -1,
          548
        ],
        "'GEQ": [
          -1,
          548
        ],
        "'EQUALEQUAL": [
          -1,
          548
        ],
        "'SPACESHIP": [
          -1,
          548
        ],
        "'EQUALTILDE": [
          -1,
          548
        ],
        "'NEQ": [
          -1,
          548
        ],
        "'AND": [
          -1,
          548
        ],
        "'OR": [
          -1,
          548
        ],
        "'CARET": [
          -1,
          548
        ],
        "'IS": [
          -1,
          548
        ],
        "'ISEQUALEQUAL": [
          -1,
          548
        ],
        "'ISEQUALTILDE": [
          -1,
          548
        ],
        "'ISSPACESHIP": [
          -1,
          548
        ],
        "'ISROUGHLY": [
          -1,
          548
        ],
        "'ISNOT": [
          -1,
          548
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          548
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          548
        ],
        "'ISNOTSPACESHIP": [
          -1,
          548
        ],
        "'RAISES": [
          -1,
          548
        ],
        "'RAISESOTHER": [
          -1,
          548
        ],
        "'SATISFIES": [
          -1,
          548
        ],
        "'SATISFIESNOT": [
          -1,
          548
        ],
        "'RAISESSATISFIES": [
          -1,
          548
        ],
        "'RAISESVIOLATES": [
          -1,
          548
        ],
        "'RAISESNOT": [
          -1,
          548
        ],
        "'DOTDOTDOT": [
          -1,
          548
        ],
        "'NUMBER": [
          -1,
          548
        ],
        "'RATIONAL": [
          -1,
          548
        ],
        "'ROUGHRATIONAL": [
          -1,
          548
        ],
        "'TRUE": [
          -1,
          548
        ],
        "'FALSE": [
          -1,
          548
        ],
        "'LAM": [
          -1,
          548
        ],
        "'METHOD": [
          -1,
          548
        ],
        "'LBRACK": [
          -1,
          548
        ],
        "'RBRACK": [
          -1,
          548
        ],
        "'TABLE": [
          -1,
          548
        ],
        "'ROW": [
          -1,
          548
        ],
        "'REACTOR": [
          -1,
          548
        ],
        "'IF": [
          -1,
          548
        ],
        "'ELSECOLON": [
          -1,
          548
        ],
        "'ELSEIF": [
          -1,
          548
        ],
        "'ASK": [
          -1,
          548
        ],
        "'THENCOLON": [
          -1,
          548
        ],
        "'CASES": [
          -1,
          548
        ],
        "'FOR": [
          -1,
          548
        ],
        "'TABLE-SELECT": [
          -1,
          548
        ],
        "'TABLE-FILTER": [
          -1,
          548
        ],
        "'TABLE-ORDER": [
          -1,
          548
        ],
        "'TABLE-EXTRACT": [
          -1,
          548
        ],
        "'TABLE-UPDATE": [
          -1,
          548
        ],
        "'TABLE-EXTEND": [
          -1,
          548
        ],
        "'LOAD-TABLE": [
          -1,
          548
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          531
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "'NAME": [
          -1,
          550
        ],
        "'STRING": [
          -1,
          550
        ],
        "'PARENSPACE": [
          -1,
          550
        ],
        "'LBRACE": [
          -1,
          550
        ],
        "'LET": [
          -1,
          550
        ],
        "'BLOCK": [
          -1,
          550
        ],
        "'LETREC": [
          -1,
          550
        ],
        "'TYPE-LET": [
          -1,
          550
        ],
        "'PARENAFTERBRACE": [
          -1,
          550
        ],
        "'DOTDOTDOT": [
          -1,
          550
        ],
        "'NUMBER": [
          -1,
          550
        ],
        "'RATIONAL": [
          -1,
          550
        ],
        "'ROUGHRATIONAL": [
          -1,
          550
        ],
        "'TRUE": [
          -1,
          550
        ],
        "'FALSE": [
          -1,
          550
        ],
        "'LAM": [
          -1,
          550
        ],
        "'METHOD": [
          -1,
          550
        ],
        "'LBRACK": [
          -1,
          550
        ],
        "'TABLE": [
          -1,
          550
        ],
        "'REACTOR": [
          -1,
          550
        ],
        "'IF": [
          -1,
          550
        ],
        "'ASK": [
          -1,
          550
        ],
        "'CASES": [
          -1,
          550
        ],
        "'FOR": [
          -1,
          550
        ],
        "'TABLE-SELECT": [
          -1,
          550
        ],
        "'TABLE-FILTER": [
          -1,
          550
        ],
        "'TABLE-ORDER": [
          -1,
          550
        ],
        "'TABLE-EXTRACT": [
          -1,
          550
        ],
        "'TABLE-UPDATE": [
          -1,
          550
        ],
        "'TABLE-EXTEND": [
          -1,
          550
        ],
        "'LOAD-TABLE": [
          -1,
          550
        ]
      },
      {
        "'NAME": [
          -1,
          552
        ],
        "'STRING": [
          -1,
          552
        ],
        "'PARENSPACE": [
          -1,
          552
        ],
        "'LBRACE": [
          -1,
          552
        ],
        "'LET": [
          -1,
          552
        ],
        "'BLOCK": [
          -1,
          552
        ],
        "'LETREC": [
          -1,
          552
        ],
        "'TYPE-LET": [
          -1,
          552
        ],
        "'PARENAFTERBRACE": [
          -1,
          552
        ],
        "'DOTDOTDOT": [
          -1,
          552
        ],
        "'NUMBER": [
          -1,
          552
        ],
        "'RATIONAL": [
          -1,
          552
        ],
        "'ROUGHRATIONAL": [
          -1,
          552
        ],
        "'TRUE": [
          -1,
          552
        ],
        "'FALSE": [
          -1,
          552
        ],
        "'LAM": [
          -1,
          552
        ],
        "'METHOD": [
          -1,
          552
        ],
        "'LBRACK": [
          -1,
          552
        ],
        "'TABLE": [
          -1,
          552
        ],
        "'REACTOR": [
          -1,
          552
        ],
        "'IF": [
          -1,
          552
        ],
        "'ASK": [
          -1,
          552
        ],
        "'CASES": [
          -1,
          552
        ],
        "'FOR": [
          -1,
          552
        ],
        "'TABLE-SELECT": [
          -1,
          552
        ],
        "'TABLE-FILTER": [
          -1,
          552
        ],
        "'TABLE-ORDER": [
          -1,
          552
        ],
        "'TABLE-EXTRACT": [
          -1,
          552
        ],
        "'TABLE-UPDATE": [
          -1,
          552
        ],
        "'TABLE-EXTEND": [
          -1,
          552
        ],
        "'LOAD-TABLE": [
          -1,
          552
        ]
      },
      {
        "'NAME": [
          -1,
          554
        ],
        "'STRING": [
          -1,
          554
        ],
        "'PARENSPACE": [
          -1,
          554
        ],
        "'LBRACE": [
          -1,
          554
        ],
        "'LET": [
          -1,
          554
        ],
        "'BLOCK": [
          -1,
          554
        ],
        "'LETREC": [
          -1,
          554
        ],
        "'TYPE-LET": [
          -1,
          554
        ],
        "'PARENAFTERBRACE": [
          -1,
          554
        ],
        "'DOTDOTDOT": [
          -1,
          554
        ],
        "'NUMBER": [
          -1,
          554
        ],
        "'RATIONAL": [
          -1,
          554
        ],
        "'ROUGHRATIONAL": [
          -1,
          554
        ],
        "'TRUE": [
          -1,
          554
        ],
        "'FALSE": [
          -1,
          554
        ],
        "'LAM": [
          -1,
          554
        ],
        "'METHOD": [
          -1,
          554
        ],
        "'LBRACK": [
          -1,
          554
        ],
        "'TABLE": [
          -1,
          554
        ],
        "'REACTOR": [
          -1,
          554
        ],
        "'IF": [
          -1,
          554
        ],
        "'ASK": [
          -1,
          554
        ],
        "'CASES": [
          -1,
          554
        ],
        "'FOR": [
          -1,
          554
        ],
        "'TABLE-SELECT": [
          -1,
          554
        ],
        "'TABLE-FILTER": [
          -1,
          554
        ],
        "'TABLE-ORDER": [
          -1,
          554
        ],
        "'TABLE-EXTRACT": [
          -1,
          554
        ],
        "'TABLE-UPDATE": [
          -1,
          554
        ],
        "'TABLE-EXTEND": [
          -1,
          554
        ],
        "'LOAD-TABLE": [
          -1,
          554
        ]
      },
      {
        "'NAME": [
          -1,
          556
        ],
        "'STRING": [
          -1,
          556
        ],
        "'PARENSPACE": [
          -1,
          556
        ],
        "'LBRACE": [
          -1,
          556
        ],
        "'LET": [
          -1,
          556
        ],
        "'BLOCK": [
          -1,
          556
        ],
        "'LETREC": [
          -1,
          556
        ],
        "'TYPE-LET": [
          -1,
          556
        ],
        "'PARENAFTERBRACE": [
          -1,
          556
        ],
        "'DOTDOTDOT": [
          -1,
          556
        ],
        "'NUMBER": [
          -1,
          556
        ],
        "'RATIONAL": [
          -1,
          556
        ],
        "'ROUGHRATIONAL": [
          -1,
          556
        ],
        "'TRUE": [
          -1,
          556
        ],
        "'FALSE": [
          -1,
          556
        ],
        "'LAM": [
          -1,
          556
        ],
        "'METHOD": [
          -1,
          556
        ],
        "'LBRACK": [
          -1,
          556
        ],
        "'TABLE": [
          -1,
          556
        ],
        "'REACTOR": [
          -1,
          556
        ],
        "'IF": [
          -1,
          556
        ],
        "'ASK": [
          -1,
          556
        ],
        "'CASES": [
          -1,
          556
        ],
        "'FOR": [
          -1,
          556
        ],
        "'TABLE-SELECT": [
          -1,
          556
        ],
        "'TABLE-FILTER": [
          -1,
          556
        ],
        "'TABLE-ORDER": [
          -1,
          556
        ],
        "'TABLE-EXTRACT": [
          -1,
          556
        ],
        "'TABLE-UPDATE": [
          -1,
          556
        ],
        "'TABLE-EXTEND": [
          -1,
          556
        ],
        "'LOAD-TABLE": [
          -1,
          556
        ]
      },
      {
        "'NAME": [
          -1,
          558
        ],
        "'STRING": [
          -1,
          558
        ],
        "'PARENSPACE": [
          -1,
          558
        ],
        "'LBRACE": [
          -1,
          558
        ],
        "'LET": [
          -1,
          558
        ],
        "'BLOCK": [
          -1,
          558
        ],
        "'LETREC": [
          -1,
          558
        ],
        "'TYPE-LET": [
          -1,
          558
        ],
        "'PARENAFTERBRACE": [
          -1,
          558
        ],
        "'DOTDOTDOT": [
          -1,
          558
        ],
        "'NUMBER": [
          -1,
          558
        ],
        "'RATIONAL": [
          -1,
          558
        ],
        "'ROUGHRATIONAL": [
          -1,
          558
        ],
        "'TRUE": [
          -1,
          558
        ],
        "'FALSE": [
          -1,
          558
        ],
        "'LAM": [
          -1,
          558
        ],
        "'METHOD": [
          -1,
          558
        ],
        "'LBRACK": [
          -1,
          558
        ],
        "'TABLE": [
          -1,
          558
        ],
        "'REACTOR": [
          -1,
          558
        ],
        "'IF": [
          -1,
          558
        ],
        "'ASK": [
          -1,
          558
        ],
        "'CASES": [
          -1,
          558
        ],
        "'FOR": [
          -1,
          558
        ],
        "'TABLE-SELECT": [
          -1,
          558
        ],
        "'TABLE-FILTER": [
          -1,
          558
        ],
        "'TABLE-ORDER": [
          -1,
          558
        ],
        "'TABLE-EXTRACT": [
          -1,
          558
        ],
        "'TABLE-UPDATE": [
          -1,
          558
        ],
        "'TABLE-EXTEND": [
          -1,
          558
        ],
        "'LOAD-TABLE": [
          -1,
          558
        ]
      },
      {
        "'NAME": [
          -1,
          560
        ],
        "'STRING": [
          -1,
          560
        ],
        "'PARENSPACE": [
          -1,
          560
        ],
        "'LBRACE": [
          -1,
          560
        ],
        "'LET": [
          -1,
          560
        ],
        "'BLOCK": [
          -1,
          560
        ],
        "'LETREC": [
          -1,
          560
        ],
        "'TYPE-LET": [
          -1,
          560
        ],
        "'PARENAFTERBRACE": [
          -1,
          560
        ],
        "'DOTDOTDOT": [
          -1,
          560
        ],
        "'NUMBER": [
          -1,
          560
        ],
        "'RATIONAL": [
          -1,
          560
        ],
        "'ROUGHRATIONAL": [
          -1,
          560
        ],
        "'TRUE": [
          -1,
          560
        ],
        "'FALSE": [
          -1,
          560
        ],
        "'LAM": [
          -1,
          560
        ],
        "'METHOD": [
          -1,
          560
        ],
        "'LBRACK": [
          -1,
          560
        ],
        "'TABLE": [
          -1,
          560
        ],
        "'REACTOR": [
          -1,
          560
        ],
        "'IF": [
          -1,
          560
        ],
        "'ASK": [
          -1,
          560
        ],
        "'CASES": [
          -1,
          560
        ],
        "'FOR": [
          -1,
          560
        ],
        "'TABLE-SELECT": [
          -1,
          560
        ],
        "'TABLE-FILTER": [
          -1,
          560
        ],
        "'TABLE-ORDER": [
          -1,
          560
        ],
        "'TABLE-EXTRACT": [
          -1,
          560
        ],
        "'TABLE-UPDATE": [
          -1,
          560
        ],
        "'TABLE-EXTEND": [
          -1,
          560
        ],
        "'LOAD-TABLE": [
          -1,
          560
        ]
      },
      {
        "'NAME": [
          -1,
          562
        ],
        "'STRING": [
          -1,
          562
        ],
        "'PARENSPACE": [
          -1,
          562
        ],
        "'LBRACE": [
          -1,
          562
        ],
        "'LET": [
          -1,
          562
        ],
        "'BLOCK": [
          -1,
          562
        ],
        "'LETREC": [
          -1,
          562
        ],
        "'TYPE-LET": [
          -1,
          562
        ],
        "'PARENAFTERBRACE": [
          -1,
          562
        ],
        "'DOTDOTDOT": [
          -1,
          562
        ],
        "'NUMBER": [
          -1,
          562
        ],
        "'RATIONAL": [
          -1,
          562
        ],
        "'ROUGHRATIONAL": [
          -1,
          562
        ],
        "'TRUE": [
          -1,
          562
        ],
        "'FALSE": [
          -1,
          562
        ],
        "'LAM": [
          -1,
          562
        ],
        "'METHOD": [
          -1,
          562
        ],
        "'LBRACK": [
          -1,
          562
        ],
        "'TABLE": [
          -1,
          562
        ],
        "'REACTOR": [
          -1,
          562
        ],
        "'IF": [
          -1,
          562
        ],
        "'ASK": [
          -1,
          562
        ],
        "'CASES": [
          -1,
          562
        ],
        "'FOR": [
          -1,
          562
        ],
        "'TABLE-SELECT": [
          -1,
          562
        ],
        "'TABLE-FILTER": [
          -1,
          562
        ],
        "'TABLE-ORDER": [
          -1,
          562
        ],
        "'TABLE-EXTRACT": [
          -1,
          562
        ],
        "'TABLE-UPDATE": [
          -1,
          562
        ],
        "'TABLE-EXTEND": [
          -1,
          562
        ],
        "'LOAD-TABLE": [
          -1,
          562
        ]
      },
      {
        "'NAME": [
          -1,
          564
        ],
        "'STRING": [
          -1,
          564
        ],
        "'PARENSPACE": [
          -1,
          564
        ],
        "'LBRACE": [
          -1,
          564
        ],
        "'LET": [
          -1,
          564
        ],
        "'BLOCK": [
          -1,
          564
        ],
        "'LETREC": [
          -1,
          564
        ],
        "'TYPE-LET": [
          -1,
          564
        ],
        "'PARENAFTERBRACE": [
          -1,
          564
        ],
        "'DOTDOTDOT": [
          -1,
          564
        ],
        "'NUMBER": [
          -1,
          564
        ],
        "'RATIONAL": [
          -1,
          564
        ],
        "'ROUGHRATIONAL": [
          -1,
          564
        ],
        "'TRUE": [
          -1,
          564
        ],
        "'FALSE": [
          -1,
          564
        ],
        "'LAM": [
          -1,
          564
        ],
        "'METHOD": [
          -1,
          564
        ],
        "'LBRACK": [
          -1,
          564
        ],
        "'TABLE": [
          -1,
          564
        ],
        "'REACTOR": [
          -1,
          564
        ],
        "'IF": [
          -1,
          564
        ],
        "'ASK": [
          -1,
          564
        ],
        "'CASES": [
          -1,
          564
        ],
        "'FOR": [
          -1,
          564
        ],
        "'TABLE-SELECT": [
          -1,
          564
        ],
        "'TABLE-FILTER": [
          -1,
          564
        ],
        "'TABLE-ORDER": [
          -1,
          564
        ],
        "'TABLE-EXTRACT": [
          -1,
          564
        ],
        "'TABLE-UPDATE": [
          -1,
          564
        ],
        "'TABLE-EXTEND": [
          -1,
          564
        ],
        "'LOAD-TABLE": [
          -1,
          564
        ]
      },
      {
        "'NAME": [
          -1,
          566
        ],
        "'STRING": [
          -1,
          566
        ],
        "'PARENSPACE": [
          -1,
          566
        ],
        "'LBRACE": [
          -1,
          566
        ],
        "'LET": [
          -1,
          566
        ],
        "'BLOCK": [
          -1,
          566
        ],
        "'LETREC": [
          -1,
          566
        ],
        "'TYPE-LET": [
          -1,
          566
        ],
        "'PARENAFTERBRACE": [
          -1,
          566
        ],
        "'DOTDOTDOT": [
          -1,
          566
        ],
        "'NUMBER": [
          -1,
          566
        ],
        "'RATIONAL": [
          -1,
          566
        ],
        "'ROUGHRATIONAL": [
          -1,
          566
        ],
        "'TRUE": [
          -1,
          566
        ],
        "'FALSE": [
          -1,
          566
        ],
        "'LAM": [
          -1,
          566
        ],
        "'METHOD": [
          -1,
          566
        ],
        "'LBRACK": [
          -1,
          566
        ],
        "'TABLE": [
          -1,
          566
        ],
        "'REACTOR": [
          -1,
          566
        ],
        "'IF": [
          -1,
          566
        ],
        "'ASK": [
          -1,
          566
        ],
        "'CASES": [
          -1,
          566
        ],
        "'FOR": [
          -1,
          566
        ],
        "'TABLE-SELECT": [
          -1,
          566
        ],
        "'TABLE-FILTER": [
          -1,
          566
        ],
        "'TABLE-ORDER": [
          -1,
          566
        ],
        "'TABLE-EXTRACT": [
          -1,
          566
        ],
        "'TABLE-UPDATE": [
          -1,
          566
        ],
        "'TABLE-EXTEND": [
          -1,
          566
        ],
        "'LOAD-TABLE": [
          -1,
          566
        ]
      },
      {
        "'NAME": [
          -1,
          568
        ],
        "'STRING": [
          -1,
          568
        ],
        "'PARENSPACE": [
          -1,
          568
        ],
        "'LBRACE": [
          -1,
          568
        ],
        "'LET": [
          -1,
          568
        ],
        "'BLOCK": [
          -1,
          568
        ],
        "'LETREC": [
          -1,
          568
        ],
        "'TYPE-LET": [
          -1,
          568
        ],
        "'PARENAFTERBRACE": [
          -1,
          568
        ],
        "'DOTDOTDOT": [
          -1,
          568
        ],
        "'NUMBER": [
          -1,
          568
        ],
        "'RATIONAL": [
          -1,
          568
        ],
        "'ROUGHRATIONAL": [
          -1,
          568
        ],
        "'TRUE": [
          -1,
          568
        ],
        "'FALSE": [
          -1,
          568
        ],
        "'LAM": [
          -1,
          568
        ],
        "'METHOD": [
          -1,
          568
        ],
        "'LBRACK": [
          -1,
          568
        ],
        "'TABLE": [
          -1,
          568
        ],
        "'REACTOR": [
          -1,
          568
        ],
        "'IF": [
          -1,
          568
        ],
        "'ASK": [
          -1,
          568
        ],
        "'CASES": [
          -1,
          568
        ],
        "'FOR": [
          -1,
          568
        ],
        "'TABLE-SELECT": [
          -1,
          568
        ],
        "'TABLE-FILTER": [
          -1,
          568
        ],
        "'TABLE-ORDER": [
          -1,
          568
        ],
        "'TABLE-EXTRACT": [
          -1,
          568
        ],
        "'TABLE-UPDATE": [
          -1,
          568
        ],
        "'TABLE-EXTEND": [
          -1,
          568
        ],
        "'LOAD-TABLE": [
          -1,
          568
        ]
      },
      {
        "'NAME": [
          -1,
          570
        ],
        "'STRING": [
          -1,
          570
        ],
        "'PARENSPACE": [
          -1,
          570
        ],
        "'LBRACE": [
          -1,
          570
        ],
        "'LET": [
          -1,
          570
        ],
        "'BLOCK": [
          -1,
          570
        ],
        "'LETREC": [
          -1,
          570
        ],
        "'TYPE-LET": [
          -1,
          570
        ],
        "'PARENAFTERBRACE": [
          -1,
          570
        ],
        "'DOTDOTDOT": [
          -1,
          570
        ],
        "'NUMBER": [
          -1,
          570
        ],
        "'RATIONAL": [
          -1,
          570
        ],
        "'ROUGHRATIONAL": [
          -1,
          570
        ],
        "'TRUE": [
          -1,
          570
        ],
        "'FALSE": [
          -1,
          570
        ],
        "'LAM": [
          -1,
          570
        ],
        "'METHOD": [
          -1,
          570
        ],
        "'LBRACK": [
          -1,
          570
        ],
        "'TABLE": [
          -1,
          570
        ],
        "'REACTOR": [
          -1,
          570
        ],
        "'IF": [
          -1,
          570
        ],
        "'ASK": [
          -1,
          570
        ],
        "'CASES": [
          -1,
          570
        ],
        "'FOR": [
          -1,
          570
        ],
        "'TABLE-SELECT": [
          -1,
          570
        ],
        "'TABLE-FILTER": [
          -1,
          570
        ],
        "'TABLE-ORDER": [
          -1,
          570
        ],
        "'TABLE-EXTRACT": [
          -1,
          570
        ],
        "'TABLE-UPDATE": [
          -1,
          570
        ],
        "'TABLE-EXTEND": [
          -1,
          570
        ],
        "'LOAD-TABLE": [
          -1,
          570
        ]
      },
      {
        "'NAME": [
          -1,
          572
        ],
        "'STRING": [
          -1,
          572
        ],
        "'PARENSPACE": [
          -1,
          572
        ],
        "'LBRACE": [
          -1,
          572
        ],
        "'LET": [
          -1,
          572
        ],
        "'BLOCK": [
          -1,
          572
        ],
        "'LETREC": [
          -1,
          572
        ],
        "'TYPE-LET": [
          -1,
          572
        ],
        "'PARENAFTERBRACE": [
          -1,
          572
        ],
        "'DOTDOTDOT": [
          -1,
          572
        ],
        "'NUMBER": [
          -1,
          572
        ],
        "'RATIONAL": [
          -1,
          572
        ],
        "'ROUGHRATIONAL": [
          -1,
          572
        ],
        "'TRUE": [
          -1,
          572
        ],
        "'FALSE": [
          -1,
          572
        ],
        "'LAM": [
          -1,
          572
        ],
        "'METHOD": [
          -1,
          572
        ],
        "'LBRACK": [
          -1,
          572
        ],
        "'TABLE": [
          -1,
          572
        ],
        "'REACTOR": [
          -1,
          572
        ],
        "'IF": [
          -1,
          572
        ],
        "'ASK": [
          -1,
          572
        ],
        "'CASES": [
          -1,
          572
        ],
        "'FOR": [
          -1,
          572
        ],
        "'TABLE-SELECT": [
          -1,
          572
        ],
        "'TABLE-FILTER": [
          -1,
          572
        ],
        "'TABLE-ORDER": [
          -1,
          572
        ],
        "'TABLE-EXTRACT": [
          -1,
          572
        ],
        "'TABLE-UPDATE": [
          -1,
          572
        ],
        "'TABLE-EXTEND": [
          -1,
          572
        ],
        "'LOAD-TABLE": [
          -1,
          572
        ]
      },
      {
        "'RBRACK": [
          532
        ]
      },
      {
        "$": [
          -1,
          574
        ],
        "'COLON": [
          -1,
          574
        ],
        "'END": [
          -1,
          574
        ],
        "'COMMA": [
          -1,
          574
        ],
        "'NAME": [
          -1,
          574
        ],
        "'PARENNOSPACE": [
          -1,
          574
        ],
        "'STRING": [
          -1,
          574
        ],
        "'RPAREN": [
          -1,
          574
        ],
        "'TYPE": [
          -1,
          574
        ],
        "'DATA": [
          -1,
          574
        ],
        "'TIMES": [
          -1,
          574
        ],
        "'PARENSPACE": [
          -1,
          574
        ],
        "'DOT": [
          -1,
          574
        ],
        "'SPY": [
          -1,
          574
        ],
        "'NEWTYPE": [
          -1,
          574
        ],
        "'LBRACE": [
          -1,
          574
        ],
        "'RBRACE": [
          -1,
          574
        ],
        "'SEMI": [
          -1,
          574
        ],
        "'SHADOW": [
          -1,
          574
        ],
        "'LET": [
          -1,
          574
        ],
        "'BLOCK": [
          -1,
          574
        ],
        "'LETREC": [
          -1,
          574
        ],
        "'TYPE-LET": [
          -1,
          574
        ],
        "'FUN": [
          -1,
          574
        ],
        "'LANGLE": [
          -1,
          574
        ],
        "'LT": [
          -1,
          574
        ],
        "'GT": [
          -1,
          574
        ],
        "'PARENAFTERBRACE": [
          -1,
          574
        ],
        "'WHERE": [
          -1,
          574
        ],
        "'CHECK": [
          -1,
          574
        ],
        "'EXAMPLES": [
          -1,
          574
        ],
        "'CHECKCOLON": [
          -1,
          574
        ],
        "'EXAMPLESCOLON": [
          -1,
          574
        ],
        "'BECAUSE": [
          -1,
          574
        ],
        "'BAR": [
          -1,
          574
        ],
        "'SHARING": [
          -1,
          574
        ],
        "'VAR": [
          -1,
          574
        ],
        "'REC": [
          -1,
          574
        ],
        "'WHEN": [
          -1,
          574
        ],
        "'PLUS": [
          -1,
          574
        ],
        "'DASH": [
          -1,
          574
        ],
        "'SLASH": [
          -1,
          574
        ],
        "'LEQ": [
          -1,
          574
        ],
        "'GEQ": [
          -1,
          574
        ],
        "'EQUALEQUAL": [
          -1,
          574
        ],
        "'SPACESHIP": [
          -1,
          574
        ],
        "'EQUALTILDE": [
          -1,
          574
        ],
        "'NEQ": [
          -1,
          574
        ],
        "'AND": [
          -1,
          574
        ],
        "'OR": [
          -1,
          574
        ],
        "'CARET": [
          -1,
          574
        ],
        "'IS": [
          -1,
          574
        ],
        "'ISEQUALEQUAL": [
          -1,
          574
        ],
        "'ISEQUALTILDE": [
          -1,
          574
        ],
        "'ISSPACESHIP": [
          -1,
          574
        ],
        "'ISROUGHLY": [
          -1,
          574
        ],
        "'ISNOT": [
          -1,
          574
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          574
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          574
        ],
        "'ISNOTSPACESHIP": [
          -1,
          574
        ],
        "'RAISES": [
          -1,
          574
        ],
        "'RAISESOTHER": [
          -1,
          574
        ],
        "'SATISFIES": [
          -1,
          574
        ],
        "'SATISFIESNOT": [
          -1,
          574
        ],
        "'RAISESSATISFIES": [
          -1,
          574
        ],
        "'RAISESVIOLATES": [
          -1,
          574
        ],
        "'RAISESNOT": [
          -1,
          574
        ],
        "'DOTDOTDOT": [
          -1,
          574
        ],
        "'NUMBER": [
          -1,
          574
        ],
        "'RATIONAL": [
          -1,
          574
        ],
        "'ROUGHRATIONAL": [
          -1,
          574
        ],
        "'TRUE": [
          -1,
          574
        ],
        "'FALSE": [
          -1,
          574
        ],
        "'LAM": [
          -1,
          574
        ],
        "'METHOD": [
          -1,
          574
        ],
        "'LBRACK": [
          -1,
          574
        ],
        "'RBRACK": [
          -1,
          574
        ],
        "'TABLE": [
          -1,
          574
        ],
        "'ROW": [
          -1,
          574
        ],
        "'REACTOR": [
          -1,
          574
        ],
        "'BANG": [
          -1,
          574
        ],
        "'IF": [
          -1,
          574
        ],
        "'ELSECOLON": [
          -1,
          574
        ],
        "'ELSEIF": [
          -1,
          574
        ],
        "'ASK": [
          -1,
          574
        ],
        "'THENCOLON": [
          -1,
          574
        ],
        "'CASES": [
          -1,
          574
        ],
        "'FOR": [
          -1,
          574
        ],
        "'TABLE-SELECT": [
          -1,
          574
        ],
        "'TABLE-FILTER": [
          -1,
          574
        ],
        "'USING": [
          -1,
          574
        ],
        "'TABLE-ORDER": [
          -1,
          574
        ],
        "'TABLE-EXTRACT": [
          -1,
          574
        ],
        "'TABLE-UPDATE": [
          -1,
          574
        ],
        "'TABLE-EXTEND": [
          -1,
          574
        ],
        "'OF": [
          -1,
          574
        ],
        "'LOAD-TABLE": [
          -1,
          574
        ],
        "'SOURCECOLON": [
          -1,
          574
        ],
        "'SANITIZE": [
          -1,
          574
        ]
      },
      {
        "'NAME": [
          308
        ],
        "fields": [
          533
        ],
        "'METHOD": [
          391
        ],
        "key": [
          392
        ],
        "field": [
          393
        ]
      },
      {
        "$": [
          -1,
          576
        ],
        "'COLON": [
          -1,
          576
        ],
        "'END": [
          -1,
          576
        ],
        "'COMMA": [
          -1,
          576
        ],
        "'NAME": [
          -1,
          576
        ],
        "'PARENNOSPACE": [
          -1,
          576
        ],
        "'STRING": [
          -1,
          576
        ],
        "'RPAREN": [
          -1,
          576
        ],
        "'TYPE": [
          -1,
          576
        ],
        "'DATA": [
          -1,
          576
        ],
        "'TIMES": [
          -1,
          576
        ],
        "'PARENSPACE": [
          -1,
          576
        ],
        "'DOT": [
          -1,
          576
        ],
        "'SPY": [
          -1,
          576
        ],
        "'NEWTYPE": [
          -1,
          576
        ],
        "'LBRACE": [
          -1,
          576
        ],
        "'RBRACE": [
          -1,
          576
        ],
        "'SEMI": [
          -1,
          576
        ],
        "'SHADOW": [
          -1,
          576
        ],
        "'LET": [
          -1,
          576
        ],
        "'BLOCK": [
          -1,
          576
        ],
        "'LETREC": [
          -1,
          576
        ],
        "'TYPE-LET": [
          -1,
          576
        ],
        "'FUN": [
          -1,
          576
        ],
        "'LANGLE": [
          -1,
          576
        ],
        "'LT": [
          -1,
          576
        ],
        "'GT": [
          -1,
          576
        ],
        "'PARENAFTERBRACE": [
          -1,
          576
        ],
        "'WHERE": [
          -1,
          576
        ],
        "'CHECK": [
          -1,
          576
        ],
        "'EXAMPLES": [
          -1,
          576
        ],
        "'CHECKCOLON": [
          -1,
          576
        ],
        "'EXAMPLESCOLON": [
          -1,
          576
        ],
        "'BECAUSE": [
          -1,
          576
        ],
        "'BAR": [
          -1,
          576
        ],
        "'SHARING": [
          -1,
          576
        ],
        "'VAR": [
          -1,
          576
        ],
        "'REC": [
          -1,
          576
        ],
        "'WHEN": [
          -1,
          576
        ],
        "'PLUS": [
          -1,
          576
        ],
        "'DASH": [
          -1,
          576
        ],
        "'SLASH": [
          -1,
          576
        ],
        "'LEQ": [
          -1,
          576
        ],
        "'GEQ": [
          -1,
          576
        ],
        "'EQUALEQUAL": [
          -1,
          576
        ],
        "'SPACESHIP": [
          -1,
          576
        ],
        "'EQUALTILDE": [
          -1,
          576
        ],
        "'NEQ": [
          -1,
          576
        ],
        "'AND": [
          -1,
          576
        ],
        "'OR": [
          -1,
          576
        ],
        "'CARET": [
          -1,
          576
        ],
        "'IS": [
          -1,
          576
        ],
        "'ISEQUALEQUAL": [
          -1,
          576
        ],
        "'ISEQUALTILDE": [
          -1,
          576
        ],
        "'ISSPACESHIP": [
          -1,
          576
        ],
        "'ISROUGHLY": [
          -1,
          576
        ],
        "'ISNOT": [
          -1,
          576
        ],
        "'ISNOTEQUALEQUAL": [
          -1,
          576
        ],
        "'ISNOTEQUALTILDE": [
          -1,
          576
        ],
        "'ISNOTSPACESHIP": [
          -1,
          576
        ],
        "'RAISES": [
          -1,
          576
        ],
        "'RAISESOTHER": [
          -1,
          576
        ],
        "'SATISFIES": [
          -1,
          576
        ],
        "'SATISFIESNOT": [
          -1,
          576
        ],
        "'RAISESSATISFIES": [
          -1,
          576
        ],
        "'RAISESVIOLATES": [
          -1,
          576
        ],
        "'RAISESNOT": [
          -1,
          576
        ],
        "'DOTDOTDOT": [
          -1,
          576
        ],
        "'NUMBER": [
          -1,
          576
        ],
        "'RATIONAL": [
          -1,
          576
        ],
        "'ROUGHRATIONAL": [
          -1,
          576
        ],
        "'TRUE": [
          -1,
          576
        ],
        "'FALSE": [
          -1,
          576
        ],
        "'LAM": [
          -1,
          576
        ],
        "'METHOD": [
          -1,
          576
        ],
        "'LBRACK": [
          -1,
          576
        ],
        "'RBRACK": [
          -1,
          576
        ],
        "'TABLE": [
          -1,
          576
        ],
        "'ROW": [
          -1,
          576
        ],
        "'REACTOR": [
          -1,
          576
        ],
        "'BANG": [
          -1,
          576
        ],
        "'IF": [
          -1,
          576
        ],
        "'ELSECOLON": [
          -1,
          576
        ],
        "'ELSEIF": [
          -1,
          576
        ],
        "'ASK": [
          -1,
          576
        ],
        "'THENCOLON": [
          -1,
          576
        ],
        "'CASES": [
          -1,
          576
        ],
        "'FOR": [
          -1,
          576
        ],
        "'TABLE-SELECT": [
          -1,
          576
        ],
        "'TABLE-FILTER": [
          -1,
          576
        ],
        "'USING": [
          -1,
          576
        ],
        "'TABLE-ORDER": [
          -1,
          576
        ],
        "'TABLE-EXTRACT": [
          -1,
          576
        ],
        "'TABLE-UPDATE": [
          -1,
          576
        ],
        "'TABLE-EXTEND": [
          -1,
          576
        ],
        "'OF": [
          -1,
          576
        ],
        "'LOAD-TABLE": [
          -1,
          576
        ],
        "'SOURCECOLON": [
          -1,
          576
        ],
        "'SANITIZE": [
          -1,
          576
        ]
      },
      {
        "'END": [
          -1,
          578
        ],
        "'NAME": [
          -1,
          578
        ],
        "'STRING": [
          -1,
          578
        ],
        "'TYPE": [
          -1,
          578
        ],
        "'DATA": [
          -1,
          578
        ],
        "'PARENSPACE": [
          -1,
          578
        ],
        "'SPY": [
          -1,
          578
        ],
        "'NEWTYPE": [
          -1,
          578
        ],
        "'LBRACE": [
          -1,
          578
        ],
        "'SHADOW": [
          -1,
          578
        ],
        "'LET": [
          -1,
          578
        ],
        "'BLOCK": [
          -1,
          578
        ],
        "'LETREC": [
          -1,
          578
        ],
        "'TYPE-LET": [
          -1,
          578
        ],
        "'FUN": [
          -1,
          578
        ],
        "'PARENAFTERBRACE": [
          -1,
          578
        ],
        "'DOC": [
          -1,
          578
        ],
        "'WHERE": [
          -1,
          578
        ],
        "'CHECK": [
          -1,
          578
        ],
        "'EXAMPLES": [
          -1,
          578
        ],
        "'CHECKCOLON": [
          -1,
          578
        ],
        "'EXAMPLESCOLON": [
          -1,
          578
        ],
        "'VAR": [
          -1,
          578
        ],
        "'REC": [
          -1,
          578
        ],
        "'WHEN": [
          -1,
          578
        ],
        "'DOTDOTDOT": [
          -1,
          578
        ],
        "'NUMBER": [
          -1,
          578
        ],
        "'RATIONAL": [
          -1,
          578
        ],
        "'ROUGHRATIONAL": [
          -1,
          578
        ],
        "'TRUE": [
          -1,
          578
        ],
        "'FALSE": [
          -1,
          578
        ],
        "'LAM": [
          -1,
          578
        ],
        "'METHOD": [
          -1,
          578
        ],
        "'LBRACK": [
          -1,
          578
        ],
        "'TABLE": [
          -1,
          578
        ],
        "'REACTOR": [
          -1,
          578
        ],
        "'IF": [
          -1,
          578
        ],
        "'ASK": [
          -1,
          578
        ],
        "'CASES": [
          -1,
          578
        ],
        "'FOR": [
          -1,
          578
        ],
        "'TABLE-SELECT": [
          -1,
          578
        ],
        "'TABLE-FILTER": [
          -1,
          578
        ],
        "'TABLE-ORDER": [
          -1,
          578
        ],
        "'TABLE-EXTRACT": [
          -1,
          578
        ],
        "'TABLE-UPDATE": [
          -1,
          578
        ],
        "'TABLE-EXTEND": [
          -1,
          578
        ],
        "'LOAD-TABLE": [
          -1,
          578
        ]
      },
      {
        "'END": [
          -1,
          580
        ],
        "'NAME": [
          -1,
          580
        ],
        "'STRING": [
          -1,
          580
        ],
        "'TYPE": [
          -1,
          580
        ],
        "'DATA": [
          -1,
          580
        ],
        "'PARENSPACE": [
          -1,
          580
        ],
        "'SPY": [
          -1,
          580
        ],
        "'NEWTYPE": [
          -1,
          580
        ],
        "'LBRACE": [
          -1,
          580
        ],
        "'SHADOW": [
          -1,
          580
        ],
        "'LET": [
          -1,
          580
        ],
        "'BLOCK": [
          -1,
          580
        ],
        "'LETREC": [
          -1,
          580
        ],
        "'TYPE-LET": [
          -1,
          580
        ],
        "'FUN": [
          -1,
          580
        ],
        "'PARENAFTERBRACE": [
          -1,
          580
        ],
        "'DOC": [
          -1,
          580
        ],
        "'WHERE": [
          -1,
          580
        ],
        "'CHECK": [
          -1,
          580
        ],
        "'EXAMPLES": [
          -1,
          580
        ],
        "'CHECKCOLON": [
          -1,
          580
        ],
        "'EXAMPLESCOLON": [
          -1,
          580
        ],
        "'VAR": [
          -1,
          580
        ],
        "'REC": [
          -1,
          580
        ],
        "'WHEN": [
          -1,
          580
        ],
        "'DOTDOTDOT": [
          -1,
          580
        ],
        "'NUMBER": [
          -1,
          580
        ],
        "'RATIONAL": [
          -1,
          580
        ],
        "'ROUGHRATIONAL": [
          -1,
          580
        ],
        "'TRUE": [
          -1,
          580
        ],
        "'FALSE": [
          -1,
          580
        ],
        "'LAM": [
          -1,
          580
        ],
        "'METHOD": [
          -1,
          580
        ],
        "'LBRACK": [
          -1,
          580
        ],
        "'TABLE": [
          -1,
          580
        ],
        "'REACTOR": [
          -1,
          580
        ],
        "'IF": [
          -1,
          580
        ],
        "'ASK": [
          -1,
          580
        ],
        "'CASES": [
          -1,
          580
        ],
        "'FOR": [
          -1,
          580
        ],
        "'TABLE-SELECT": [
          -1,
          580
        ],
        "'TABLE-FILTER": [
          -1,
          580
        ],
        "'TABLE-ORDER": [
          -1,
          580
        ],
        "'TABLE-EXTRACT": [
          -1,
          580
        ],
        "'TABLE-UPDATE": [
          -1,
          580
        ],
        "'TABLE-EXTEND": [
          -1,
          580
        ],
        "'LOAD-TABLE": [
          -1,
          580
        ]
      },
      {
        "doc-string": [
          534
        ],
        "doc-string_I0?": [
          477
        ],
        "doc-string_I0": [
          478
        ],
        "'DOC": [
          479
        ],
        "'END": [
          -1,
          474,
          476
        ],
        "'NAME": [
          -1,
          474,
          476
        ],
        "'STRING": [
          -1,
          474,
          476
        ],
        "'TYPE": [
          -1,
          474,
          476
        ],
        "'DATA": [
          -1,
          474,
          476
        ],
        "'PARENSPACE": [
          -1,
          474,
          476
        ],
        "'SPY": [
          -1,
          474,
          476
        ],
        "'NEWTYPE": [
          -1,
          474,
          476
        ],
        "'LBRACE": [
          -1,
          474,
          476
        ],
        "'SHADOW": [
          -1,
          474,
          476
        ],
        "'LET": [
          -1,
          474,
          476
        ],
        "'BLOCK": [
          -1,
          474,
          476
        ],
        "'LETREC": [
          -1,
          474,
          476
        ],
        "'TYPE-LET": [
          -1,
          474,
          476
        ],
        "'FUN": [
          -1,
          474,
          476
        ],
        "'PARENAFTERBRACE": [
          -1,
          474,
          476
        ],
        "'WHERE": [
          -1,
          474,
          476
        ],
        "'CHECK": [
          -1,
          474,
          476
        ],
        "'EXAMPLES": [
          -1,
          474,
          476
        ],
        "'CHECKCOLON": [
          -1,
          474,
          476
        ],
        "'EXAMPLESCOLON": [
          -1,
          474,
          476
        ],
        "'VAR": [
          -1,
          474,
          476
        ],
        "'REC": [
          -1,
          474,
          476
        ],
        "'WHEN": [
          -1,
          474,
          476
        ],
        "'DOTDOTDOT": [
          -1,
          474,
          476
        ],
        "'NUMBER": [
          -1,
          474,
          476
        ],
        "'RATIONAL": [
          -1,
          474,
          476
        ],
        "'ROUGHRATIONAL": [
          -1,
          474,
          476
        ],
        "'TRUE": [
          -1,
          474,
          476
        ],
        "'FALSE": [
          -1,
          474,
          476
        ],
        "'LAM": [
          -1,
          474,
          476
        ],
        "'METHOD": [
          -1,
          474,
          476
        ],
        "'LBRACK": [
          -1,
          474,
          476
        ],
        "'TABLE": [
          -1,
          474,
          476
        ],
        "'REACTOR": [
          -1,
          474,
          476
        ],
        "'IF": [
          -1,
          474,
          476
        ],
        "'ASK": [
          -1,
          474,
          476
        ],
        "'CASES": [
          -1,
          474,
          476
        ],
        "'FOR": [
          -1,
          474,
          476
        ],
        "'TABLE-SELECT": [
          -1,
          474,
          476
        ],
        "'TABLE-FILTER": [
          -1,
          474,
          476
        ],
        "'TABLE-ORDER": [
          -1,
          474,
          476
        ],
        "'TABLE-EXTRACT": [
          -1,
          474,
          476
        ],
        "'TABLE-UPDATE": [
          -1,
          474,
          476
        ],
        "'TABLE-EXTEND": [
          -1,
          474,
          476
        ],
        "'LOAD-TABLE": [
          -1,
          474,
          476
        ]
      },
      {
        "'END": [
          -1,
          582
        ],
        "'NAME": [
          -1,
          582
        ],
        "'STRING": [
          -1,
          582
        ],
        "'TYPE": [
          -1,
          582
        ],
        "'DATA": [
          -1,
          582
        ],
        "'PARENSPACE": [
          -1,
          582
        ],
        "'SPY": [
          -1,
          582
        ],
        "'NEWTYPE": [
          -1,
          582
        ],
        "'LBRACE": [
          -1,
          582
        ],
        "'SHADOW": [
          -1,
          582
        ],
        "'LET": [
          -1,
          582
        ],
        "'BLOCK": [
          -1,
          582
        ],
        "'LETREC": [
          -1,
          582
        ],
        "'TYPE-LET": [
          -1,
          582
        ],
        "'FUN": [
          -1,
          582
        ],
        "'PARENAFTERBRACE": [
          -1,
          582
        ],
        "'DOC": [
          -1,
          582
        ],
        "'WHERE": [
          -1,
          582
        ],
        "'CHECK": [
          -1,
          582
        ],
        "'EXAMPLES": [
          -1,
          582
        ],
        "'CHECKCOLON": [
          -1,
          582
        ],
        "'EXAMPLESCOLON": [
          -1,
          582
        ],
        "'VAR": [
          -1,
          582
        ],
        "'REC": [
          -1,
          582
        ],
        "'WHEN": [
          -1,
          582
        ],
        "'DOTDOTDOT": [
          -1,
          582
        ],
        "'NUMBER": [
          -1,
          582
        ],
        "'RATIONAL": [
          -1,
          582
        ],
        "'ROUGHRATIONAL": [
          -1,
          582
        ],
        "'TRUE": [
          -1,
          582
        ],
        "'FALSE": [
          -1,
          582
        ],
        "'LAM": [
          -1,
          582
        ],
        "'METHOD": [
          -1,
          582
        ],
        "'LBRACK": [
          -1,
          582
        ],
        "'TABLE": [
          -1,
          582
        ],
        "'REACTOR": [
          -1,
          582
        ],
        "'IF": [
          -1,
          582
        ],
        "'ASK": [
          -1,
          582
        ],
        "'CASES": [
          -1,
          582
        ],
        "'FOR": [
          -1,
          582
        ],
        "'TABLE-SELECT": [
          -1,
          582
        ],
        "'TABLE-FILTER": [
          -1,
          582
        ],
        "'TABLE-ORDER": [
          -1,
          582
        ],
        "'TABLE-EXTRACT": [
          -1,
          582
        ],
        "'TABLE-UPDATE": [
          -1,
          582
        ],
        "'TABLE-EXTEND": [
          -1,
          582
        ],
        "'LOAD-TABLE": [
          -1,
          582
        ]
      },
      {
        "'END": [
          -1,
          584
        ],
        "'NAME": [
          -1,
          584
        ],
        "'STRING": [
          -1,
          584
        ],
        "'TYPE": [
          -1,
          584
        ],
        "'DATA": [
          -1,
          584
        ],
        "'PARENSPACE": [
          -1,
          584
        ],
        "'SPY": [
          -1,
          584
        ],
        "'NEWTYPE": [
          -1,
          584
        ],
        "'LBRACE": [
          -1,
          584
        ],
        "'SHADOW": [
          -1,
          584
        ],
        "'LET": [
          -1,
          584
        ],
        "'BLOCK": [
          -1,
          584
        ],
        "'LETREC": [
          -1,
          584
        ],
        "'TYPE-LET": [
          -1,
          584
        ],
        "'FUN": [
          -1,
          584
        ],
        "'PARENAFTERBRACE": [
          -1,
          584
        ],
        "'DOC": [
          -1,
          584
        ],
        "'WHERE": [
          -1,
          584
        ],
        "'CHECK": [
          -1,
          584
        ],
        "'EXAMPLES": [
          -1,
          584
        ],
        "'CHECKCOLON": [
          -1,
          584
        ],
        "'EXAMPLESCOLON": [
          -1,
          584
        ],
        "'VAR": [
          -1,
          584
        ],
        "'REC": [
          -1,
          584
        ],
        "'WHEN": [
          -1,
          584
        ],
        "'DOTDOTDOT": [
          -1,
          584
        ],
        "'NUMBER": [
          -1,
          584
        ],
        "'RATIONAL": [
          -1,
          584
        ],
        "'ROUGHRATIONAL": [
          -1,
          584
        ],
        "'TRUE": [
          -1,
          584
        ],
        "'FALSE": [
          -1,
          584
        ],
        "'LAM": [
          -1,
          584
        ],
        "'METHOD": [
          -1,
          584
        ],
        "'LBRACK": [
          -1,
          584
        ],
        "'TABLE": [
          -1,
          584
        ],
        "'REACTOR": [
          -1,
          584
        ],
        "'IF": [
          -1,
          584
        ],
        "'ASK": [
          -1,
          584
        ],
        "'CASES": [
          -1,
          584
        ],
        "'FOR": [
          -1,
          584
        ],
        "'TABLE-SELECT": [
          -1,
          584
        ],
        "'TABLE-FILTER": [
          -1,
          584
        ],
        "'TABLE-ORDER": [
          -1,
          584
        ],
        "'TABLE-EXTRACT": [
          -1,
          584
        ],
        "'TABLE-UPDATE": [
          -1,
          584
        ],
        "'TABLE-EXTEND": [
          -1,
          584
        ],
        "'LOAD-TABLE": [
          -1,
          584
        ]
      },
      {
        "doc-string": [
          535
        ],
        "doc-string_I0?": [
          477
        ],
        "doc-string_I0": [
          478
        ],
        "'DOC": [
          479
        ],
        "'END": [
          -1,
          474,
          476
        ],
        "'NAME": [
          -1,
          474,
          476
        ],
        "'STRING": [
          -1,
          474,
          476
        ],
        "'TYPE": [
          -1,
          474,
          476
        ],
        "'DATA": [
          -1,
          474,
          476
        ],
        "'PARENSPACE": [
          -1,
          474,
          476
        ],
        "'SPY": [
          -1,
          474,
          476
        ],
        "'NEWTYPE": [
          -1,
          474,
          476
        ],
        "'LBRACE": [
          -1,
          474,
          476
        ],
        "'SHADOW": [
          -1,
          474,
          476
        ],
        "'LET": [
          -1,
          474,
          476
        ],
        "'BLOCK": [
          -1,
          474,
          476
        ],
        "'LETREC": [
          -1,
          474,
          476
        ],
        "'TYPE-LET": [
          -1,
          474,
          476
        ],
        "'FUN": [
          -1,
          474,
          476
        ],
        "'PARENAFTERBRACE": [
          -1,
          474,
          476
        ],
        "'WHERE": [
          -1,
          474,
          476
        ],
        "'CHECK": [
          -1,
          474,
          476
        ],
        "'EXAMPLES": [
          -1,
          474,
          476
        ],
        "'CHECKCOLON": [
          -1,
          474,
          476
        ],
        "'EXAMPLESCOLON": [
          -1,
          474,
          476
        ],
        "'VAR": [
          -1,
          474,
          476
        ],
        "'REC": [
          -1,
          474,
          476
        ],
        "'WHEN": [
          -1,
          474,
          476
        ],
        "'DOTDOTDOT": [
          -1,
          474,
          476
        ],
        "'NUMBER": [
          -1,
          474,
          476
        ],
        "'RATIONAL": [
          -1,
          474,
          476
        ],
        "'ROUGHRATIONAL": [
          -1,
          474,
          476
        ],
        "'TRUE": [
          -1,
          474,
          476
        ],
        "'FALSE": [
          -1,
          474,
          476
        ],
        "'LAM": [
          -1,
          474,
          476
        ],
        "'METHOD": [
          -1,
          474,
          476
        ],
        "'LBRACK": [
          -1,
          474,
          476
        ],
        "'TABLE": [
          -1,
          474,
          476
        ],
        "'REACTOR": [
          -1,
          474,
          476
        ],
        "'IF": [
          -1,
          474,
          476
        ],
        "'ASK": [
          -1,
          474,
          476
        ],
        "'CASES": [
          -1,
          474,
          476
        ],
        "'FOR": [
          -1,
          474,
          476
        ],
        "'TABLE-SELECT": [
          -1,
          474,
          476
        ],
        "'TABLE-FILTER": [
          -1,
          474,
          476
        ],
        "'TABLE-ORDER": [
          -1,
          474,
          476
        ],
        "'TABLE-EXTRACT": [
          -1,
          474,
          476
        ],
        "'TABLE-UPDATE": [
          -1,
          474,
          476
        ],
        "'TABLE-EXTEND": [
          -1,
          474,
          476
        ],
        "'LOAD-TABLE": [
          -1,
          474,
          476
        ]
      },
      {
        "'COLON": [
          536
        ]
      },
      {
        "'END": [
          537
        ]
      },
      {
        "'END": [
          -1,
          586
        ]
      },
      {
        "'END": [
          -1,
          588
        ]
      },
      {
        "table-row": [
          538
        ],
        "table-rows_I0_I0": [
          539
        ],
        "'ROW": [
          540
        ]
      },
      {
        "'COLONCOLON": [
          541
        ],
        "table-header_I1?": [
          542
        ],
        "table-header_I1": [
          543
        ],
        "'END": [
          -1,
          590,
          592
        ],
        "'COMMA": [
          -1,
          590,
          592
        ],
        "'ROW": [
          -1,
          590,
          592
        ],
        "'SOURCECOLON": [
          -1,
          590,
          592
        ],
        "'SANITIZE": [
          -1,
          590,
          592
        ]
      },
      {
        "'COMMA": [
          544
        ],
        "'END": [
          -1,
          594
        ],
        "'ROW": [
          -1,
          594
        ],
        "'SOURCECOLON": [
          -1,
          594
        ],
        "'SANITIZE": [
          -1,
          594
        ]
      },
      {
        "'NAME": [
          -1,
          596
        ]
      },
      {
        "'NAME": [
          -1,
          598
        ]
      },
      {
        "'END": [
          545
        ]
      },
      {
        "'NAME": [
          308
        ],
        "key": [
          546
        ]
      },
      {
        "'COLON": [
          547
        ]
      },
      {
        "fields_I1*": [
          548
        ],
        "'END": [
          -1,
          600,
          602
        ],
        "'COMMA": [
          -1,
          602
        ],
        "'RBRACE": [
          -1,
          600,
          602
        ],
        "'WHERE": [
          -1,
          600,
          602
        ],
        "'BAR": [
          -1,
          600,
          602
        ],
        "'SHARING": [
          -1,
          600,
          602
        ]
      },
      {
        "'END": [
          -1,
          604
        ],
        "'NAME": [
          -1,
          604
        ],
        "'STRING": [
          -1,
          604
        ],
        "'TYPE": [
          -1,
          604
        ],
        "'DATA": [
          -1,
          604
        ],
        "'PARENSPACE": [
          -1,
          604
        ],
        "'SPY": [
          -1,
          604
        ],
        "'NEWTYPE": [
          -1,
          604
        ],
        "'LBRACE": [
          -1,
          604
        ],
        "'SHADOW": [
          -1,
          604
        ],
        "'LET": [
          -1,
          604
        ],
        "'BLOCK": [
          -1,
          604
        ],
        "'LETREC": [
          -1,
          604
        ],
        "'TYPE-LET": [
          -1,
          604
        ],
        "'FUN": [
          -1,
          604
        ],
        "'PARENAFTERBRACE": [
          -1,
          604
        ],
        "'CHECK": [
          -1,
          604
        ],
        "'EXAMPLES": [
          -1,
          604
        ],
        "'CHECKCOLON": [
          -1,
          604
        ],
        "'EXAMPLESCOLON": [
          -1,
          604
        ],
        "'VAR": [
          -1,
          604
        ],
        "'REC": [
          -1,
          604
        ],
        "'WHEN": [
          -1,
          604
        ],
        "'DOTDOTDOT": [
          -1,
          604
        ],
        "'NUMBER": [
          -1,
          604
        ],
        "'RATIONAL": [
          -1,
          604
        ],
        "'ROUGHRATIONAL": [
          -1,
          604
        ],
        "'TRUE": [
          -1,
          604
        ],
        "'FALSE": [
          -1,
          604
        ],
        "'LAM": [
          -1,
          604
        ],
        "'METHOD": [
          -1,
          604
        ],
        "'LBRACK": [
          -1,
          604
        ],
        "'TABLE": [
          -1,
          604
        ],
        "'REACTOR": [
          -1,
          604
        ],
        "'IF": [
          -1,
          604
        ],
        "'ELSECOLON": [
          -1,
          604
        ],
        "'ELSEIF": [
          -1,
          604
        ],
        "'ASK": [
          -1,
          604
        ],
        "'CASES": [
          -1,
          604
        ],
        "'FOR": [
          -1,
          604
        ],
        "'TABLE-SELECT": [
          -1,
          604
        ],
        "'TABLE-FILTER": [
          -1,
          604
        ],
        "'TABLE-ORDER": [
          -1,
          604
        ],
        "'TABLE-EXTRACT": [
          -1,
          604
        ],
        "'TABLE-UPDATE": [
          -1,
          604
        ],
        "'TABLE-EXTEND": [
          -1,
          604
        ],
        "'LOAD-TABLE": [
          -1,
          604
        ]
      },
      {
        "'END": [
          -1,
          606
        ],
        "'NAME": [
          -1,
          606
        ],
        "'STRING": [
          -1,
          606
        ],
        "'TYPE": [
          -1,
          606
        ],
        "'DATA": [
          -1,
          606
        ],
        "'PARENSPACE": [
          -1,
          606
        ],
        "'SPY": [
          -1,
          606
        ],
        "'NEWTYPE": [
          -1,
          606
        ],
        "'LBRACE": [
          -1,
          606
        ],
        "'SHADOW": [
          -1,
          606
        ],
        "'LET": [
          -1,
          606
        ],
        "'BLOCK": [
          -1,
          606
        ],
        "'LETREC": [
          -1,
          606
        ],
        "'TYPE-LET": [
          -1,
          606
        ],
        "'FUN": [
          -1,
          606
        ],
        "'PARENAFTERBRACE": [
          -1,
          606
        ],
        "'CHECK": [
          -1,
          606
        ],
        "'EXAMPLES": [
          -1,
          606
        ],
        "'CHECKCOLON": [
          -1,
          606
        ],
        "'EXAMPLESCOLON": [
          -1,
          606
        ],
        "'VAR": [
          -1,
          606
        ],
        "'REC": [
          -1,
          606
        ],
        "'WHEN": [
          -1,
          606
        ],
        "'DOTDOTDOT": [
          -1,
          606
        ],
        "'NUMBER": [
          -1,
          606
        ],
        "'RATIONAL": [
          -1,
          606
        ],
        "'ROUGHRATIONAL": [
          -1,
          606
        ],
        "'TRUE": [
          -1,
          606
        ],
        "'FALSE": [
          -1,
          606
        ],
        "'LAM": [
          -1,
          606
        ],
        "'METHOD": [
          -1,
          606
        ],
        "'LBRACK": [
          -1,
          606
        ],
        "'TABLE": [
          -1,
          606
        ],
        "'REACTOR": [
          -1,
          606
        ],
        "'IF": [
          -1,
          606
        ],
        "'ELSECOLON": [
          -1,
          606
        ],
        "'ELSEIF": [
          -1,
          606
        ],
        "'ASK": [
          -1,
          606
        ],
        "'CASES": [
          -1,
          606
        ],
        "'FOR": [
          -1,
          606
        ],
        "'TABLE-SELECT": [
          -1,
          606
        ],
        "'TABLE-FILTER": [
          -1,
          606
        ],
        "'TABLE-ORDER": [
          -1,
          606
        ],
        "'TABLE-EXTRACT": [
          -1,
          606
        ],
        "'TABLE-UPDATE": [
          -1,
          606
        ],
        "'TABLE-EXTEND": [
          -1,
          606
        ],
        "'LOAD-TABLE": [
          -1,
          606
        ]
      },
      {
        "block": [
          549
        ],
        "block_I0*": [
          6
        ],
        "'END": [
          -1,
          10,
          12
        ],
        "'NAME": [
          -1,
          12
        ],
        "'STRING": [
          -1,
          12
        ],
        "'TYPE": [
          -1,
          12
        ],
        "'DATA": [
          -1,
          12
        ],
        "'PARENSPACE": [
          -1,
          12
        ],
        "'SPY": [
          -1,
          12
        ],
        "'NEWTYPE": [
          -1,
          12
        ],
        "'LBRACE": [
          -1,
          12
        ],
        "'SHADOW": [
          -1,
          12
        ],
        "'LET": [
          -1,
          12
        ],
        "'BLOCK": [
          -1,
          12
        ],
        "'LETREC": [
          -1,
          12
        ],
        "'TYPE-LET": [
          -1,
          12
        ],
        "'FUN": [
          -1,
          12
        ],
        "'PARENAFTERBRACE": [
          -1,
          12
        ],
        "'CHECK": [
          -1,
          12
        ],
        "'EXAMPLES": [
          -1,
          12
        ],
        "'CHECKCOLON": [
          -1,
          12
        ],
        "'EXAMPLESCOLON": [
          -1,
          12
        ],
        "'VAR": [
          -1,
          12
        ],
        "'REC": [
          -1,
          12
        ],
        "'WHEN": [
          -1,
          12
        ],
        "'DOTDOTDOT": [
          -1,
          12
        ],
        "'NUMBER": [
          -1,
          12
        ],
        "'RATIONAL": [
          -1,
          12
        ],
        "'ROUGHRATIONAL": [
          -1,
          12
        ],
        "'TRUE": [
          -1,
          12
        ],
        "'FALSE": [
          -1,
          12
        ],
        "'LAM": [
          -1,
          12
        ],
        "'METHOD": [
          -1,
          12
        ],
        "'LBRACK": [
          -1,
          12
        ],
        "'TABLE": [
          -1,
          12
        ],
        "'REACTOR": [
          -1,
          12
        ],
        "'IF": [
          -1,
          12
        ],
        "'ELSECOLON": [
          -1,
          10,
          12
        ],
        "'ELSEIF": [
          -1,
          10,
          12
        ],
        "'ASK": [
          -1,
          12
        ],
        "'CASES": [
          -1,
          12
        ],
        "'FOR": [
          -1,
          12
        ],
        "'TABLE-SELECT": [
          -1,
          12
        ],
        "'TABLE-FILTER": [
          -1,
          12
        ],
        "'TABLE-ORDER": [
          -1,
          12
        ],
        "'TABLE-EXTRACT": [
          -1,
          12
        ],
        "'TABLE-UPDATE": [
          -1,
          12
        ],
        "'TABLE-EXTEND": [
          -1,
          12
        ],
        "'LOAD-TABLE": [
          -1,
          12
        ]
      },
      {
        "'BAR": [
          550
        ],
        "if-pipe-expr_I3?": [
          551
        ],
        "if-pipe-expr_I2": [
          552
        ],
        "if-pipe-branch": [
          553
        ],
        "if-pipe-expr_I3": [
          554
        ],
        "'END": [
          -1,
          608
        ]
      },
      {
        "'RPAREN": [
          555
        ],
        "'PERCENT": [
          522
        ]
      },
      {
        "'NAME": [
          160,
          24
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "binop-expr": [
          332
        ],
        "id-expr": [
          39
        ],
        "binding": [
          556
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          45
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          67
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "opt-comma-binops": [
          333
        ],
        "opt-comma-binops_I0?": [
          334
        ],
        "opt-comma-binops_I0": [
          335
        ],
        "comma-binops": [
          336
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "for-bind": [
          557
        ],
        "'FOR": [
          118
        ],
        "for-expr_I3?": [
          558
        ],
        "for-expr_I3": [
          559
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ],
        "'RPAREN": [
          -1,
          610,
          342,
          344
        ]
      },
      {
        "'FROM": [
          560
        ],
        "'COMMA": [
          561
        ],
        "table-select_I2": [
          562
        ]
      },
      {
        "'COLON": [
          563
        ]
      },
      {
        "'COLON": [
          -1,
          612
        ]
      },
      {
        "binding": [
          564
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "'NAME": [
          -1,
          24
        ]
      },
      {
        "'NAME": [
          565
        ],
        "column-order": [
          566
        ]
      },
      {
        "'NAME": [
          160
        ],
        "'STRING": [
          18
        ],
        "'PARENSPACE": [
          22
        ],
        "id-expr": [
          39
        ],
        "'LBRACE": [
          164
        ],
        "multi-let-expr": [
          49
        ],
        "'LET": [
          50
        ],
        "'BLOCK": [
          51
        ],
        "letrec-expr": [
          52
        ],
        "'LETREC": [
          53
        ],
        "type-let-expr": [
          54
        ],
        "'TYPE-LET": [
          55
        ],
        "'PARENAFTERBRACE": [
          57
        ],
        "expr": [
          567
        ],
        "paren-expr": [
          68
        ],
        "prim-expr": [
          69
        ],
        "lambda-expr": [
          70
        ],
        "method-expr": [
          71
        ],
        "app-expr": [
          72
        ],
        "obj-expr": [
          73
        ],
        "tuple-expr": [
          74
        ],
        "tuple-get": [
          75
        ],
        "dot-expr": [
          76
        ],
        "template-expr": [
          77
        ],
        "bracket-expr": [
          78
        ],
        "get-bang-expr": [
          79
        ],
        "update-expr": [
          80
        ],
        "extend-expr": [
          81
        ],
        "if-expr": [
          82
        ],
        "if-pipe-expr": [
          83
        ],
        "cases-expr": [
          84
        ],
        "for-expr": [
          85
        ],
        "user-block-expr": [
          86
        ],
        "inst-expr": [
          87
        ],
        "construct-expr": [
          88
        ],
        "table-select": [
          89
        ],
        "table-extend": [
          90
        ],
        "table-filter": [
          91
        ],
        "table-order": [
          92
        ],
        "table-extract": [
          93
        ],
        "table-update": [
          94
        ],
        "table-expr": [
          95
        ],
        "load-table-expr": [
          96
        ],
        "reactor-expr": [
          97
        ],
        "'DOTDOTDOT": [
          98
        ],
        "paren-expr_I0": [
          99
        ],
        "num-expr": [
          100
        ],
        "frac-expr": [
          101
        ],
        "rfrac-expr": [
          102
        ],
        "bool-expr": [
          103
        ],
        "string-expr": [
          104
        ],
        "'NUMBER": [
          105
        ],
        "'RATIONAL": [
          106
        ],
        "'ROUGHRATIONAL": [
          107
        ],
        "'TRUE": [
          108
        ],
        "'FALSE": [
          109
        ],
        "'LAM": [
          110
        ],
        "'METHOD": [
          111
        ],
        "'LBRACK": [
          112
        ],
        "'TABLE": [
          113
        ],
        "'REACTOR": [
          114
        ],
        "'IF": [
          115
        ],
        "'ASK": [
          116
        ],
        "'CASES": [
          117
        ],
        "'FOR": [
          118
        ],
        "'TABLE-SELECT": [
          119
        ],
        "'TABLE-FILTER": [
          120
        ],
        "'TABLE-ORDER": [
          121
        ],
        "'TABLE-EXTRACT": [
          122
        ],
        "'TABLE-UPDATE": [
          123
        ],
        "'TABLE-EXTEND": [
          124
        ],
        "'LOAD-TABLE": [
          125
        ]
      },
      {
        "binding": [
          568
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "'NAME": [
          -1,
          24
        ]
      },
      {
        "'COLON": [
          569
        ]
      },
      {
        "'COLON": [
          -1,
          614
        ]
      },
      {
        "binding": [
          570
        ],
        "name-binding": [
          43
        ],
        "tuple-binding": [
          44
        ],
        "'LBRACE": [
          205
        ],
        "name-binding_I0?": [
          46
        ],
        "name-binding_I0": [
          47
        ],
        "'SHADOW": [
          48
        ],
        "'NAME": [
          -1,
          24
        ]
      },
      {
        "'COLON": [
          571
        ]
      },
      {
        "'COLON": [
          -1,
          616
        ]
      },
      {
        "load-table-expr_I3?": [
          572
        ],
        "load-table-expr_I3": [
          573
        ],
        "load-table-specs": [
          574
        ],
        "load-table-specs_I0*": [
          575
        ],
        "'END": [
          -1,
          618
        ],
        "'SOURCECOLON": [
          -1,
          620
        ],
        "'SANITIZE": [
          -1,
          620
        ]
      },
      {
        "'COLON": [
          576
        ]
      },
      {
        "'STRING": [
          577
        ]
      },
      {
        "'NAME": [
          578
        ]
      },
      {
        "'COMMA": [
          579
        ],
        "comma-names_I1": [
          580
        ],
        "'FROM": [
          -1,
          622
        ],
        "'RANGLE": [
          -1,
          622
        ],
        "'GT": [
          -1,
          622
        ]
      },
      {
        "import-source": [
          581
        ],
        "'NAME": [
          254
        ],
        "import-special": [
          255
        ],
        "import-name": [
          256
        ]
      },
      {
        "module-ref": [
          140
        ],
        "name-spec": [
          141
        ],
        "'TYPE": [
          142
        ],
        "'DATA": [
          143
        ],
        "'MODULE": [
          144
        ],
        "'STAR": [
          145
        ],
        "'TIMES": [
          146
        ],
        "provide-spec": [
          582
        ],
        "provide-block_A1_I4?": [
          583
        ],
        "provide-block_A1_I4": [
          584
        ],
        "provide-name-spec": [
          150
        ],
        "provide-type-spec": [
          151
        ],
        "provide-data-spec": [
          152
        ],
        "provide-module-spec": [
          153
        ],
        "name-spec_A0_I0": [
          154
        ],
        "module-ref_I0*": [
          155
        ],
        "'END": [
          -1,
          624
        ],
        "'NAME": [
          -1,
          44
        ]
      },
      {
      {