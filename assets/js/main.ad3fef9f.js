(self["webpackChunkbte_docs"] = self["webpackChunkbte_docs"] || []).push([[179],{

/***/ 8996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ emotion_cache_browser_esm)
});

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (false) { var isImportRule; }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (false) {}
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var Utility_assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return Utility_charat(value, 0) ^ 45 ? (((((((length << 2) ^ Utility_charat(value, 0)) << 2) ^ Utility_charat(value, 1)) << 2) ^ Utility_charat(value, 2)) << 2) ^ Utility_charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function Utility_match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function Utility_replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function Utility_charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function Utility_substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function Utility_strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function Utility_sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function Utility_combine (array, callback) {
	return array.map(callback).join('')
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Tokenizer.js


var line = 1
var column = 1
var Tokenizer_length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function Tokenizer_copy (root, props) {
	return Utility_assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function Tokenizer_char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? Utility_charat(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < Tokenizer_length ? Utility_charat(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return Utility_charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return Utility_substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, Tokenizer_length = Utility_strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function Tokenizer_tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + Utility_from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Enum.js
var Enum_MS = '-ms-'
var Enum_MOZ = '-moz-'
var Enum_WEBKIT = '-webkit-'

var COMMENT = 'comm'
var Enum_RULESET = 'rule'
var Enum_DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var Enum_KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'

;// CONCATENATED MODULE: ./node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function Serializer_serialize (children, callback) {
	var output = ''
	var length = Utility_sizeof(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case IMPORT: case Enum_DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case Enum_KEYFRAMES: return element.return = element.value + '{' + Serializer_serialize(element.children, callback) + '}'
		case Enum_RULESET: element.value = element.props.join(',')
	}

	return Utility_strlen(children = Serializer_serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Middleware.js






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = Utility_sizeof(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children)
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(element.props, function (value) {
							switch (match(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return serialize([copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return serialize([
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && Utility_charat(characters, length - 1) == 58) {
					if (indexof(characters += Utility_replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous)
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7)
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						Utility_append(comment(commenter(next(), caret()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = Utility_strlen(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && (Utility_strlen(characters) - length))
							Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(Utility_replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && Utility_charat(characters, 3) === 110 ? 100 : atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + Utility_strlen(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += Utility_from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = (Utility_strlen(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next())

						atrule = peek(), offset = length = Utility_strlen(type = characters += identifier(caret())), character++
						break
					// -
					case 45:
						if (previous === 45 && Utility_strlen(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = Utility_sizeof(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = Utility_substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : Utility_replace(y, /&\f/g, rule[x])))
				props[k++] = z

	return node(value, root, parent, offset === 0 ? Enum_RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), Utility_substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, Enum_DECLARATION, Utility_substr(value, 0, length), Utility_substr(value, length + 1, -1), length)
}

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js





var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Utility_from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? children[0].children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function emotion_cache_browser_esm_prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return Enum_WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Enum_WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Enum_WEBKIT + value + Enum_MOZ + value + Enum_MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return Enum_WEBKIT + value + Enum_MS + value + value;
    // order

    case 6165:
      return Enum_WEBKIT + value + Enum_MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return Enum_WEBKIT + value + Utility_replace(value, /(\w+).+(:[^]+)/, Enum_WEBKIT + 'box-$1$2' + Enum_MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return Enum_WEBKIT + value + Enum_MS + 'flex-item-' + Utility_replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return Enum_WEBKIT + value + Enum_MS + 'flex-line-pack' + Utility_replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return Enum_WEBKIT + 'box-' + Utility_replace(value, '-grow', '') + Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return Enum_WEBKIT + Utility_replace(value, /([^-])(transform)/g, '$1' + Enum_WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return Utility_replace(Utility_replace(Utility_replace(value, /(zoom-|grab)/, Enum_WEBKIT + '$1'), /(image-set)/, Enum_WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return Utility_replace(value, /(image-set\([^]*)/, Enum_WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return Utility_replace(Utility_replace(value, /(.+:)(flex-)?(.*)/, Enum_WEBKIT + 'box-pack:$3' + Enum_MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + Enum_WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Utility_replace(value, /(.+)-inline(.+)/, Enum_WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (Utility_strlen(value) - 1 - length > 6) switch (Utility_charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (Utility_charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return Utility_replace(value, /(.+:)(.+)-([^]+)/, '$1' + Enum_WEBKIT + '$2-$3' + '$1' + Enum_MOZ + (Utility_charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? emotion_cache_browser_esm_prefix(Utility_replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (Utility_charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (Utility_charat(value, Utility_strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return Utility_replace(value, ':', ':' + Enum_WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return Utility_replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + Enum_WEBKIT + (Utility_charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + Enum_WEBKIT + '$2$3' + '$1' + Enum_MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (Utility_charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return Enum_WEBKIT + value + Enum_MS + value + value;
  }

  return value;
}

var emotion_cache_browser_esm_prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case Enum_DECLARATION:
      element["return"] = emotion_cache_browser_esm_prefix(element.value, element.length);
      break;

    case Enum_KEYFRAMES:
      return Serializer_serialize([Tokenizer_copy(element, {
        value: Utility_replace(element.value, '@', '@' + Enum_WEBKIT)
      })], callback);

    case Enum_RULESET:
      if (element.length) return Utility_combine(element.props, function (value) {
        switch (Utility_match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return Serializer_serialize([Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(read-\w+)/, ':' + Enum_MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return Serializer_serialize([Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, ':' + Enum_WEBKIT + 'input-$1')]
            }), Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, ':' + Enum_MOZ + '$1')]
            }), Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, Enum_MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [emotion_cache_browser_esm_prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (false) {}

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (false) {}

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (false) {}

  {
    var currentSheet;
    var finalizingPlugins = [stringify,  false ? 0 : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return Serializer_serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (false) {}

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ const emotion_cache_browser_esm = (createCache);


/***/ }),

/***/ 1683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ ThemeContext),
  "a": () => (/* binding */ ThemeProvider),
  "w": () => (/* binding */ withEmotionCache)
});

// UNUSED EXPORTS: C, E, _, b, c, h, u

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 7 modules
var emotion_cache_browser_esm = __webpack_require__(8996);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
;// CONCATENATED MODULE: ./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ const emotion_weak_memoize_esm = (weakMemoize);

// EXTERNAL MODULE: ./node_modules/@emotion/react/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js + 3 modules
var emotion_serialize_browser_esm = __webpack_require__(804);
// EXTERNAL MODULE: ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(7278);
;// CONCATENATED MODULE: ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js









var emotion_element_6a883da9_browser_esm_hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,emotion_cache_browser_esm/* default */.Z)({
  key: 'css'
}) : null);

if (false) {}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return useContext(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */(0,react.createContext)({});

if (false) {}

var useTheme = function useTheme() {
  return useContext(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (false) {}

  return (0,esm_extends/* default */.Z)({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */emotion_weak_memoize_esm(function (outerTheme) {
  return emotion_weak_memoize_esm(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = (0,react.useContext)(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/(0,react.createElement)(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = useContext(ThemeContext);
    return /*#__PURE__*/createElement(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics(WithTheme, Component);
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_6a883da9_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (false) { var label; }

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, useContext(ThemeContext));

  if (false) { var labelFromStack; }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_6a883da9_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/createElement(WrappedComponent, newProps));
})));

if (false) {}




/***/ }),

/***/ 8012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xB": () => (/* binding */ Global),
  "iv": () => (/* binding */ css)
});

// UNUSED EXPORTS: CacheProvider, ClassNames, ThemeContext, ThemeProvider, __unsafe_useEmotionCache, createElement, jsx, keyframes, useTheme, withEmotionCache, withTheme

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 7 modules
var emotion_cache_browser_esm = __webpack_require__(8996);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js + 1 modules
var emotion_element_6a883da9_browser_esm = __webpack_require__(1683);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
;// CONCATENATED MODULE: ./node_modules/@emotion/react/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = "object" !== 'undefined';
function emotion_utils_browser_esm_getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var emotion_utils_browser_esm_registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var emotion_utils_browser_esm_insertStyles = function insertStyles(cache, serialized, isStringTag) {
  emotion_utils_browser_esm_registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};



// EXTERNAL MODULE: ./node_modules/@emotion/react/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js + 3 modules
var emotion_serialize_browser_esm = __webpack_require__(804);
// EXTERNAL MODULE: ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(7278);
;// CONCATENATED MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js












var pkg = {
	name: "@emotion/react",
	version: "11.10.6",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				worker: "./dist/emotion-react.worker.esm.js",
				browser: "./dist/emotion-react.browser.esm.js",
				"default": "./dist/emotion-react.esm.js"
			},
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			module: {
				worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
				browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
			},
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			module: {
				worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
				browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
			},
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			module: {
				worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
				browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
			},
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": "./macro.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.10.6",
		"@emotion/cache": "^11.10.5",
		"@emotion/serialize": "^1.1.1",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
		"@emotion/utils": "^1.2.0",
		"@emotion/weak-memoize": "^0.3.0",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.10.6",
		"@emotion/css-prettifier": "1.1.1",
		"@emotion/server": "11.10.0",
		"@emotion/styled": "11.10.6",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^4.5.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact",
		exports: {
			envConditions: [
				"browser",
				"worker"
			],
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": "./macro.js"
			}
		}
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,emotion_element_6a883da9_browser_esm.w)(function (props, cache) {
  if (false) {}

  var styles = props.styles;
  var serialized = (0,emotion_serialize_browser_esm/* serializeStyles */.O)([styles], undefined, (0,react.useContext)(emotion_element_6a883da9_browser_esm.T));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react.useRef)();
  (0,emotion_use_insertion_effect_with_fallbacks_browser_esm/* useInsertionEffectWithLayoutFallback */.j)(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,emotion_use_insertion_effect_with_fallbacks_browser_esm/* useInsertionEffectWithLayoutFallback */.j)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      emotion_utils_browser_esm_insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (false) {}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,emotion_serialize_browser_esm/* serializeStyles */.O)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
})));

if (false) {}

if (false) { var globalKey, globalContext, isTestEnv, emotion_react_browser_esm_isBrowser; }




/***/ }),

/***/ 804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ serializeStyles)
});

;// CONCATENATED MODULE: ./node_modules/@emotion/react/node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const emotion_hash_esm = (murmur2);

;// CONCATENATED MODULE: ./node_modules/@emotion/react/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const emotion_unitless_esm = (unitlessKeys);

;// CONCATENATED MODULE: ./node_modules/@emotion/react/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const emotion_memoize_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/react/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */emotion_memoize_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (emotion_unitless_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var noComponentSelectorMessage = (/* unused pure expression or super */ null && ('Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.'));

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = emotion_hash_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ 7278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useInsertionEffectWithLayoutFallback)
/* harmony export */ });
/* unused harmony export useInsertionEffectAlwaysWithSyncFallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);



var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))['useInsertion' + 'Effect'] ? /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback =  useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;




/***/ }),

/***/ 9834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ ActionIcon)
});

// UNUSED EXPORTS: _ActionIcon

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.styles.js


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const sizes = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44
};
function getVariantStyles({ variant, theme, color, gradient }) {
  const colors = theme.fn.variant({ color, variant, gradient });
  if (variant === "gradient") {
    return {
      border: 0,
      backgroundImage: colors.background,
      color: colors.color,
      "&:hover": theme.fn.hover({
        backgroundSize: "200%"
      })
    };
  }
  return __spreadValues({
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    color: colors.color
  }, theme.fn.hover({
    backgroundColor: colors.hover
  }));
}
var useStyles = (0,create_styles/* createStyles */.k)((theme, { color, size, radius, variant, gradient }) => ({
  root: __spreadProps(__spreadValues({}, getVariantStyles({ variant, theme, color, gradient })), {
    position: "relative",
    height: theme.fn.size({ size, sizes }),
    minHeight: theme.fn.size({ size, sizes }),
    width: theme.fn.size({ size, sizes }),
    minWidth: theme.fn.size({ size, sizes }),
    borderRadius: theme.fn.radius(radius),
    padding: 0,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:active": theme.activeStyles,
    "&:disabled, &[data-disabled]": {
      color: theme.colors.gray[theme.colorScheme === "dark" ? 6 : 4],
      cursor: "not-allowed",
      backgroundColor: variant === "transparent" ? void 0 : theme.fn.themeColor("gray", theme.colorScheme === "dark" ? 8 : 1),
      borderColor: variant === "transparent" ? void 0 : theme.fn.themeColor("gray", theme.colorScheme === "dark" ? 8 : 1),
      backgroundImage: "none",
      pointerEvents: "none",
      "&:active": {
        transform: "none"
      }
    },
    "&[data-loading]": {
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
        borderRadius: theme.fn.radius(radius),
        cursor: "not-allowed"
      }
    }
  })
}));

/* harmony default export */ const ActionIcon_styles = (useStyles);

//# sourceMappingURL=ActionIcon.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Loader/Loader.js + 3 modules
var Loader = __webpack_require__(966);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js + 1 modules
var UnstyledButton = __webpack_require__(4736);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/ActionIcon/ActionIcon.js







var ActionIcon_defProp = Object.defineProperty;
var ActionIcon_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ActionIcon_hasOwnProp = Object.prototype.hasOwnProperty;
var ActionIcon_propIsEnum = Object.prototype.propertyIsEnumerable;
var ActionIcon_defNormalProp = (obj, key, value) => key in obj ? ActionIcon_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ActionIcon_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ActionIcon_hasOwnProp.call(b, prop))
      ActionIcon_defNormalProp(a, prop, b[prop]);
  if (ActionIcon_getOwnPropSymbols)
    for (var prop of ActionIcon_getOwnPropSymbols(b)) {
      if (ActionIcon_propIsEnum.call(b, prop))
        ActionIcon_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ActionIcon_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ActionIcon_getOwnPropSymbols)
    for (var prop of ActionIcon_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ActionIcon_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  color: "gray",
  size: "md",
  variant: "subtle",
  loading: false
};
const _ActionIcon = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("ActionIcon", defaultProps, props), {
    className,
    color,
    children,
    radius,
    size,
    variant,
    gradient,
    disabled,
    loaderProps,
    loading,
    unstyled
  } = _a, others = __objRest(_a, [
    "className",
    "color",
    "children",
    "radius",
    "size",
    "variant",
    "gradient",
    "disabled",
    "loaderProps",
    "loading",
    "unstyled"
  ]);
  const { classes, cx, theme } = ActionIcon_styles({ size, radius, color, variant, gradient }, { name: "ActionIcon", unstyled });
  const colors = theme.fn.variant({ color, variant });
  const loader = /* @__PURE__ */ react.createElement(Loader/* Loader */.a, ActionIcon_spreadValues({
    color: colors.color,
    size: theme.fn.size({ size, sizes: sizes }) - 12
  }, loaderProps));
  return /* @__PURE__ */ react.createElement(UnstyledButton/* UnstyledButton */.k, ActionIcon_spreadValues({
    className: cx(classes.root, className),
    ref,
    disabled,
    "data-disabled": disabled || void 0,
    "data-loading": loading || void 0,
    unstyled
  }, others), loading ? loader : children);
});
_ActionIcon.displayName = "@mantine/core/ActionIcon";
const ActionIcon = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_ActionIcon);


//# sourceMappingURL=ActionIcon.js.map


/***/ }),

/***/ 4685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ Anchor)
});

// UNUSED EXPORTS: _Anchor

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Text/Text.js + 1 modules
var Text = __webpack_require__(5117);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Anchor/Anchor.styles.js


var useStyles = (0,create_styles/* createStyles */.k)(() => ({
  root: {
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: 0,
    border: 0
  }
}));

/* harmony default export */ const Anchor_styles = (useStyles);
//# sourceMappingURL=Anchor.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Anchor/Anchor.js






var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {};
const _Anchor = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Anchor", defaultProps, props), { component, className, unstyled } = _a, others = __objRest(_a, ["component", "className", "unstyled"]);
  const { classes, cx } = Anchor_styles(null, { name: "Anchor", unstyled });
  const buttonProps = component === "button" ? { type: "button" } : null;
  return /* @__PURE__ */ react.createElement(Text/* Text */.x, __spreadValues(__spreadValues({
    component: component || "a",
    variant: "link",
    ref,
    className: cx(classes.root, className)
  }, buttonProps), others));
});
_Anchor.displayName = "@mantine/core/Anchor";
const Anchor = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_Anchor);


//# sourceMappingURL=Anchor.js.map


/***/ }),

/***/ 7414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ Box)
});

// UNUSED EXPORTS: _Box

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/extract-system-styles/extract-system-styles.js
var extract_system_styles = __webpack_require__(2756);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/use-css.js + 9 modules
var use_css = __webpack_require__(2140);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/get-responsive-value/get-responsive-value.js
function getSortedKeys(value, theme) {
  const sorted = Object.keys(value).filter((breakpoint) => breakpoint !== "base").sort((a, b) => theme.fn.size({ size: a, sizes: theme.breakpoints }) - theme.fn.size({ size: b, sizes: theme.breakpoints }));
  return "base" in value ? ["base", ...sorted] : sorted;
}
function getResponsiveValue({ value, theme, getValue, property }) {
  if (value == null) {
    return void 0;
  }
  if (typeof value === "object") {
    const result = getSortedKeys(value, theme).reduce((acc, breakpointKey) => {
      if (breakpointKey === "base" && value.base !== void 0) {
        const baseValue = getValue(value.base, theme);
        if (Array.isArray(property)) {
          property.forEach((prop) => {
            acc[prop] = baseValue;
          });
          return acc;
        }
        acc[property] = baseValue;
        return acc;
      }
      const breakpointValue = getValue(value[breakpointKey], theme);
      if (Array.isArray(property)) {
        acc[theme.fn.largerThan(breakpointKey)] = {};
        property.forEach((prop) => {
          acc[theme.fn.largerThan(breakpointKey)][prop] = breakpointValue;
        });
        return acc;
      }
      acc[theme.fn.largerThan(breakpointKey)] = {
        [property]: breakpointValue
      };
      return acc;
    }, {});
    return result;
  }
  const cssValue = getValue(value, theme);
  if (Array.isArray(property)) {
    return property.reduce((acc, prop) => {
      acc[prop] = cssValue;
      return acc;
    }, {});
  }
  return { [property]: cssValue };
}


//# sourceMappingURL=get-responsive-value.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-color-value.js
function getColorValue(color, theme) {
  if (color === "dimmed") {
    return theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6];
  }
  return theme.fn.variant({ variant: "filled", color, primaryFallback: false }).background;
}


//# sourceMappingURL=get-color-value.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-default-value.js
function getDefaultValue(value) {
  return value;
}


//# sourceMappingURL=get-default-value.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-font-size-value.js
function getFontSizeValue(size, theme) {
  return theme.fn.size({ size, sizes: theme.fontSizes });
}


//# sourceMappingURL=get-font-size-value.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/get-spacing-value.js
const NEGATIVE_VALUES = ["-xs", "-sm", "-md", "-lg", "-xl"];
function getSpacingValue(size, theme) {
  if (NEGATIVE_VALUES.includes(size)) {
    return theme.fn.size({ size: size.replace("-", ""), sizes: theme.spacing }) * -1;
  }
  return theme.fn.size({ size, sizes: theme.spacing });
}


//# sourceMappingURL=get-spacing-value.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/value-getters/value-getters.js





const valueGetters = {
  color: getColorValue,
  default: getDefaultValue,
  fontSize: getFontSizeValue,
  spacing: getSpacingValue
};


//# sourceMappingURL=value-getters.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/system-props/system-props.js
const SYSTEM_PROPS = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "color", property: "color" },
  opacity: { type: "default", property: "opacity" },
  ff: { type: "default", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "default", property: "fontWeight" },
  lts: { type: "default", property: "letterSpacing" },
  ta: { type: "default", property: "textAlign" },
  lh: { type: "default", property: "lineHeight" },
  fs: { type: "default", property: "fontStyle" },
  tt: { type: "default", property: "textTransform" },
  td: { type: "default", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "default", property: "background-size" },
  bgp: { type: "default", property: "background-position" },
  bgr: { type: "default", property: "background-repeat" },
  bga: { type: "default", property: "background-attachment" },
  pos: { type: "default", property: "position" },
  top: { type: "default", property: "top" },
  left: { type: "default", property: "left" },
  bottom: { type: "default", property: "bottom" },
  right: { type: "default", property: "right" },
  inset: { type: "default", property: "inset" },
  display: { type: "default", property: "display" }
};


//# sourceMappingURL=system-props.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/style-system-props/get-system-styles/get-system-styles.js




var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function getSystemStyles(systemStyles, theme, systemProps = SYSTEM_PROPS) {
  const styles = Object.keys(systemProps).reduce((acc, systemProp) => {
    if (systemProp in systemStyles && systemStyles[systemProp] !== void 0) {
      acc.push(getResponsiveValue({
        value: systemStyles[systemProp],
        getValue: valueGetters[systemProps[systemProp].type],
        property: systemProps[systemProp].property,
        theme
      }));
    }
    return acc;
  }, []);
  return styles.reduce((acc, stylesPartial) => {
    Object.keys(stylesPartial).forEach((property) => {
      if (typeof stylesPartial[property] === "object" && stylesPartial[property] !== null) {
        if (!(property in acc)) {
          acc[property] = stylesPartial[property];
        } else {
          acc[property] = __spreadValues(__spreadValues({}, acc[property]), stylesPartial[property]);
        }
      } else {
        acc[property] = stylesPartial[property];
      }
    });
    return acc;
  }, {});
}


//# sourceMappingURL=get-system-styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/use-sx/use-sx.js



function extractSx(sx, theme) {
  return typeof sx === "function" ? sx(theme) : sx;
}
function useSx(sx, systemProps, className) {
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  const { css, cx } = (0,use_css/* useCss */.Z)();
  if (Array.isArray(sx)) {
    return cx(className, css(getSystemStyles(systemProps, theme)), sx.map((partial) => css(extractSx(partial, theme))));
  }
  return cx(className, css(extractSx(sx, theme)), css(getSystemStyles(systemProps, theme)));
}


//# sourceMappingURL=use-sx.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Box/Box.js





var Box_defProp = Object.defineProperty;
var Box_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Box_hasOwnProp = Object.prototype.hasOwnProperty;
var Box_propIsEnum = Object.prototype.propertyIsEnumerable;
var Box_defNormalProp = (obj, key, value) => key in obj ? Box_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Box_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Box_hasOwnProp.call(b, prop))
      Box_defNormalProp(a, prop, b[prop]);
  if (Box_getOwnPropSymbols)
    for (var prop of Box_getOwnPropSymbols(b)) {
      if (Box_propIsEnum.call(b, prop))
        Box_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Box_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Box_getOwnPropSymbols)
    for (var prop of Box_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Box_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const _Box = (0,react.forwardRef)((_a, ref) => {
  var _b = _a, { className, component, style, sx } = _b, others = __objRest(_b, ["className", "component", "style", "sx"]);
  const { systemStyles, rest } = (0,extract_system_styles/* extractSystemStyles */.x)(others);
  const Element = component || "div";
  return /* @__PURE__ */ react.createElement(Element, Box_spreadValues({
    ref,
    className: useSx(sx, systemStyles, className),
    style
  }, rest));
});
_Box.displayName = "@mantine/core/Box";
const Box = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_Box);


//# sourceMappingURL=Box.js.map


/***/ }),

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ extractSystemStyles)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6896);


var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function extractSystemStyles(others) {
  const _a = others, {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display
  } = _a, rest = __objRest(_a, [
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "bg",
    "c",
    "opacity",
    "ff",
    "fz",
    "fw",
    "lts",
    "ta",
    "lh",
    "fs",
    "tt",
    "td",
    "w",
    "miw",
    "maw",
    "h",
    "mih",
    "mah",
    "bgsz",
    "bgp",
    "bgr",
    "bga",
    "pos",
    "top",
    "left",
    "bottom",
    "right",
    "inset",
    "display"
  ]);
  const systemStyles = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__/* .filterProps */ .L)({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display
  });
  return { systemStyles, rest };
}


//# sourceMappingURL=extract-system-styles.js.map


/***/ }),

/***/ 2445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ Container)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Container/Container.styles.js


var useStyles = (0,create_styles/* createStyles */.k)((theme, { fluid, size, sizes }) => ({
  root: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    maxWidth: fluid ? "100%" : theme.fn.size({ size, sizes }),
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

/* harmony default export */ const Container_styles = (useStyles);
//# sourceMappingURL=Container.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Container/Container.js





var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  sizes: {
    xs: 540,
    sm: 720,
    md: 960,
    lg: 1140,
    xl: 1320
  }
};
const Container = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Container", defaultProps, props), { className, fluid, size, unstyled, sizes } = _a, others = __objRest(_a, ["className", "fluid", "size", "unstyled", "sizes"]);
  const { classes, cx } = Container_styles({ fluid, size, sizes }, { unstyled, name: "Container" });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, __spreadValues({
    className: cx(classes.root, className),
    ref
  }, others));
});
Container.displayName = "@mantine/core/Container";


//# sourceMappingURL=Container.js.map


/***/ }),

/***/ 1232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Group)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Group/filter-falsy-children/filter-falsy-children.js


function filterFalsyChildren(children) {
  return react.Children.toArray(children).filter(Boolean);
}


//# sourceMappingURL=filter-falsy-children.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Group/Group.styles.js
var Group_styles = __webpack_require__(9893);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Group/Group.js






var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  position: "left",
  spacing: "md"
};
const Group = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Group", defaultProps, props), { className, position, align, children, noWrap, grow, spacing, unstyled } = _a, others = __objRest(_a, ["className", "position", "align", "children", "noWrap", "grow", "spacing", "unstyled"]);
  const filteredChildren = filterFalsyChildren(children);
  const { classes, cx } = (0,Group_styles/* default */.Z)({
    align,
    grow,
    noWrap,
    spacing,
    position,
    count: filteredChildren.length
  }, { unstyled, name: "Group" });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, __spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), filteredChildren);
});
Group.displayName = "@mantine/core/Group";


//# sourceMappingURL=Group.js.map


/***/ }),

/***/ 9893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ GROUP_POSITIONS),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6817);


const GROUP_POSITIONS = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between"
};
var useStyles = (0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__/* .createStyles */ .k)((theme, { spacing, position, noWrap, grow, align, count }) => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: align || "center",
    flexWrap: noWrap ? "nowrap" : "wrap",
    justifyContent: GROUP_POSITIONS[position],
    gap: theme.fn.size({ size: spacing, sizes: theme.spacing }),
    "& > *": {
      boxSizing: "border-box",
      maxWidth: grow ? `calc(${100 / count}% - ${theme.fn.size({ size: spacing, sizes: theme.spacing }) - theme.fn.size({ size: spacing, sizes: theme.spacing }) / count}px)` : void 0,
      flexGrow: grow ? 1 : 0
    }
  }
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

//# sourceMappingURL=Group.styles.js.map


/***/ }),

/***/ 966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ Loader)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Loader/loaders/Bars.js


var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Bars(_a) {
  var _b = _a, { size, color } = _b, others = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ react.createElement("svg", __spreadValues({
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color,
    width: `${size}px`
  }, others), /* @__PURE__ */ react.createElement("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ react.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ react.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ react.createElement("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ react.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ react.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ react.createElement("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, /* @__PURE__ */ react.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ react.createElement("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ react.createElement("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ react.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ react.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ react.createElement("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ react.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ react.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
}


//# sourceMappingURL=Bars.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Loader/loaders/Oval.js


var Oval_defProp = Object.defineProperty;
var Oval_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Oval_hasOwnProp = Object.prototype.hasOwnProperty;
var Oval_propIsEnum = Object.prototype.propertyIsEnumerable;
var Oval_defNormalProp = (obj, key, value) => key in obj ? Oval_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Oval_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Oval_hasOwnProp.call(b, prop))
      Oval_defNormalProp(a, prop, b[prop]);
  if (Oval_getOwnPropSymbols)
    for (var prop of Oval_getOwnPropSymbols(b)) {
      if (Oval_propIsEnum.call(b, prop))
        Oval_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Oval_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Oval_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Oval_getOwnPropSymbols)
    for (var prop of Oval_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Oval_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Oval(_a) {
  var _b = _a, { size, color } = _b, others = Oval_objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ react.createElement("svg", Oval_spreadValues({
    width: `${size}px`,
    height: `${size}px`,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color
  }, others), /* @__PURE__ */ react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ react.createElement("g", {
    transform: "translate(2.5 2.5)",
    strokeWidth: "5"
  }, /* @__PURE__ */ react.createElement("circle", {
    strokeOpacity: ".5",
    cx: "16",
    cy: "16",
    r: "16"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M32 16c0-9.94-8.06-16-16-16"
  }, /* @__PURE__ */ react.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 16 16",
    to: "360 16 16",
    dur: "1s",
    repeatCount: "indefinite"
  })))));
}


//# sourceMappingURL=Oval.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Loader/loaders/Dots.js


var Dots_defProp = Object.defineProperty;
var Dots_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Dots_hasOwnProp = Object.prototype.hasOwnProperty;
var Dots_propIsEnum = Object.prototype.propertyIsEnumerable;
var Dots_defNormalProp = (obj, key, value) => key in obj ? Dots_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Dots_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Dots_hasOwnProp.call(b, prop))
      Dots_defNormalProp(a, prop, b[prop]);
  if (Dots_getOwnPropSymbols)
    for (var prop of Dots_getOwnPropSymbols(b)) {
      if (Dots_propIsEnum.call(b, prop))
        Dots_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Dots_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Dots_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Dots_getOwnPropSymbols)
    for (var prop of Dots_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Dots_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function Dots(_a) {
  var _b = _a, { size, color } = _b, others = Dots_objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ react.createElement("svg", Dots_spreadValues({
    width: `${size}px`,
    height: `${size / 4}px`,
    viewBox: "0 0 120 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, others), /* @__PURE__ */ react.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, /* @__PURE__ */ react.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ react.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ react.createElement("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    fillOpacity: "0.3"
  }, /* @__PURE__ */ react.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ react.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ react.createElement("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, /* @__PURE__ */ react.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ react.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
}


//# sourceMappingURL=Dots.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Loader/Loader.js







var Loader_defProp = Object.defineProperty;
var Loader_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Loader_hasOwnProp = Object.prototype.hasOwnProperty;
var Loader_propIsEnum = Object.prototype.propertyIsEnumerable;
var Loader_defNormalProp = (obj, key, value) => key in obj ? Loader_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Loader_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Loader_hasOwnProp.call(b, prop))
      Loader_defNormalProp(a, prop, b[prop]);
  if (Loader_getOwnPropSymbols)
    for (var prop of Loader_getOwnPropSymbols(b)) {
      if (Loader_propIsEnum.call(b, prop))
        Loader_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Loader_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Loader_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Loader_getOwnPropSymbols)
    for (var prop of Loader_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Loader_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
const sizes = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58
};
const defaultProps = {
  size: "md"
};
function Loader(props) {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Loader", defaultProps, props), { size, color, variant } = _a, others = Loader_objRest(_a, ["size", "color", "variant"]);
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  const defaultLoader = variant in LOADERS ? variant : theme.loader;
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, Loader_spreadValues({
    role: "presentation",
    component: LOADERS[defaultLoader] || LOADERS.bars,
    size: theme.fn.size({ size, sizes }),
    color: theme.fn.variant({
      variant: "filled",
      primaryFallback: false,
      color: color || theme.primaryColor
    }).background
  }, others));
}
Loader.displayName = "@mantine/core/Loader";


//# sourceMappingURL=Loader.js.map


/***/ }),

/***/ 5117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ Text)
});

// UNUSED EXPORTS: _Text

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Text/Text.styles.js


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function getTextDecoration({
  underline,
  strikethrough
}) {
  const styles = [];
  if (underline) {
    styles.push("underline");
  }
  if (strikethrough) {
    styles.push("line-through");
  }
  return styles.length > 0 ? styles.join(" ") : "none";
}
function getTextColor({ theme, color, variant }) {
  if (color === "dimmed") {
    return theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6];
  }
  return typeof color === "string" && (color in theme.colors || color.split(".")[0] in theme.colors) ? theme.fn.variant({ variant: "filled", color }).background : variant === "link" ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 7] : color || "inherit";
}
function getLineClamp(lineClamp) {
  if (typeof lineClamp === "number") {
    return {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: "vertical"
    };
  }
  return null;
}
function getTruncate({ theme, truncate }) {
  if (truncate === "start") {
    return {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      direction: theme.dir === "ltr" ? "rtl" : "ltr",
      textAlign: theme.dir === "ltr" ? "right" : "left"
    };
  }
  if (truncate) {
    return {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    };
  }
  return null;
}
var useStyles = (0,create_styles/* createStyles */.k)((theme, {
  color,
  variant,
  size,
  lineClamp,
  truncate,
  inline,
  inherit,
  underline,
  gradient,
  weight,
  transform,
  align,
  strikethrough,
  italic
}) => {
  const colors = theme.fn.variant({ variant: "gradient", gradient });
  return {
    root: __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, theme.fn.fontStyles()), theme.fn.focusStyles()), getLineClamp(lineClamp)), getTruncate({ theme, truncate })), {
      color: getTextColor({ color, theme, variant }),
      fontFamily: inherit ? "inherit" : theme.fontFamily,
      fontSize: inherit || size === void 0 ? "inherit" : theme.fn.size({ size, sizes: theme.fontSizes }),
      lineHeight: inherit ? "inherit" : inline ? 1 : theme.lineHeight,
      textDecoration: getTextDecoration({ underline, strikethrough }),
      WebkitTapHighlightColor: "transparent",
      fontWeight: inherit ? "inherit" : weight,
      textTransform: transform,
      textAlign: align,
      fontStyle: italic ? "italic" : void 0
    }), theme.fn.hover(variant === "link" && underline === void 0 ? {
      textDecoration: "underline"
    } : void 0)),
    gradient: {
      backgroundImage: colors.background,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  };
});

/* harmony default export */ const Text_styles = (useStyles);
//# sourceMappingURL=Text.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Text/Text.js






var Text_defProp = Object.defineProperty;
var Text_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Text_hasOwnProp = Object.prototype.hasOwnProperty;
var Text_propIsEnum = Object.prototype.propertyIsEnumerable;
var Text_defNormalProp = (obj, key, value) => key in obj ? Text_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Text_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Text_hasOwnProp.call(b, prop))
      Text_defNormalProp(a, prop, b[prop]);
  if (Text_getOwnPropSymbols)
    for (var prop of Text_getOwnPropSymbols(b)) {
      if (Text_propIsEnum.call(b, prop))
        Text_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Text_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Text_getOwnPropSymbols)
    for (var prop of Text_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Text_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {
  variant: "text"
};
const _Text = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Text", defaultProps, props), {
    className,
    size,
    weight,
    transform,
    color,
    align,
    variant,
    lineClamp,
    truncate,
    gradient,
    inline,
    inherit,
    underline,
    strikethrough,
    italic,
    classNames,
    styles,
    unstyled,
    span
  } = _a, others = __objRest(_a, [
    "className",
    "size",
    "weight",
    "transform",
    "color",
    "align",
    "variant",
    "lineClamp",
    "truncate",
    "gradient",
    "inline",
    "inherit",
    "underline",
    "strikethrough",
    "italic",
    "classNames",
    "styles",
    "unstyled",
    "span"
  ]);
  const { classes, cx } = Text_styles({
    variant,
    color,
    size,
    lineClamp,
    truncate,
    inline,
    inherit,
    underline,
    strikethrough,
    italic,
    weight,
    transform,
    align,
    gradient
  }, { unstyled, name: "Text" });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, Text_spreadValues({
    ref,
    className: cx(classes.root, { [classes.gradient]: variant === "gradient" }, className),
    component: span ? "span" : "div"
  }, others));
});
_Text.displayName = "@mantine/core/Text";
const Text = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_Text);


//# sourceMappingURL=Text.js.map


/***/ }),

/***/ 8036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ Transition)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Transition/transitions.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const popIn = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: "scale(.9) translateY(10px)" },
  transitionProperty: "transform, opacity"
};
const transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "center center" }
  }),
  "pop-bottom-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom left" }
  }),
  "pop-bottom-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "bottom right" }
  }),
  "pop-top-left": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top left" }
  }),
  "pop-top-right": __spreadProps(__spreadValues({}, popIn), {
    common: { transformOrigin: "top right" }
  })
};


//# sourceMappingURL=transitions.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Transition/get-transition-styles/get-transition-styles.js


var get_transition_styles_defProp = Object.defineProperty;
var get_transition_styles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var get_transition_styles_hasOwnProp = Object.prototype.hasOwnProperty;
var get_transition_styles_propIsEnum = Object.prototype.propertyIsEnumerable;
var get_transition_styles_defNormalProp = (obj, key, value) => key in obj ? get_transition_styles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var get_transition_styles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (get_transition_styles_hasOwnProp.call(b, prop))
      get_transition_styles_defNormalProp(a, prop, b[prop]);
  if (get_transition_styles_getOwnPropSymbols)
    for (var prop of get_transition_styles_getOwnPropSymbols(b)) {
      if (get_transition_styles_propIsEnum.call(b, prop))
        get_transition_styles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return null;
    }
    return get_transition_styles_spreadValues(get_transition_styles_spreadValues(get_transition_styles_spreadValues({
      transitionProperty: transitions[transition].transitionProperty
    }, shared), transitions[transition].common), transitions[transition][transitionStatuses[state]]);
  }
  return get_transition_styles_spreadValues(get_transition_styles_spreadValues(get_transition_styles_spreadValues({
    transitionProperty: transition.transitionProperty
  }, shared), transition.common), transition[transitionStatuses[state]]);
}


//# sourceMappingURL=get-transition-styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.js
var use_reduced_motion = __webpack_require__(3678);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.js
var use_did_update = __webpack_require__(7048);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Transition/use-transition.js




function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited
}) {
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  const shouldReduceMotion = (0,use_reduced_motion/* useReducedMotion */.J)();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionStatus, setStatus] = (0,react.useState)(mounted ? "entered" : "exited");
  let transitionDuration = reduceMotion ? 0 : duration;
  const timeoutRef = (0,react.useRef)(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
    window.clearTimeout(timeoutRef.current);
    transitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    if (transitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === "function" && preHandler();
        setStatus(shouldMount ? "entering" : "exiting");
      }, 10);
      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      }, transitionDuration);
    }
  };
  (0,use_did_update/* useDidUpdate */.l)(() => {
    handleStateChange(mounted);
  }, [mounted]);
  (0,react.useEffect)(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || theme.transitionTimingFunction
  };
}


//# sourceMappingURL=use-transition.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Transition/Transition.js




function Transition({
  transition,
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction,
  onExit,
  onEntered,
  onEnter,
  onExited
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited
  });
  if (transitionDuration === 0) {
    return mounted ? /* @__PURE__ */ react.createElement(react.Fragment, null, children({})) : null;
  }
  return transitionStatus === "exited" ? null : /* @__PURE__ */ react.createElement(react.Fragment, null, children(getTransitionStyles({
    transition,
    duration: transitionDuration,
    state: transitionStatus,
    timingFunction: transitionTimingFunction
  })));
}
Transition.displayName = "@mantine/core/Transition";


//# sourceMappingURL=Transition.js.map


/***/ }),

/***/ 4736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ UnstyledButton)
});

// UNUSED EXPORTS: _UnstyledButton

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.styles.js


var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useStyles = (0,create_styles/* createStyles */.k)((theme) => ({
  root: __spreadProps(__spreadValues(__spreadValues({}, theme.fn.focusStyles()), theme.fn.fontStyles()), {
    cursor: "pointer",
    border: 0,
    padding: 0,
    appearance: "none",
    fontSize: theme.fontSizes.md,
    backgroundColor: "transparent",
    textAlign: "left",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    textDecoration: "none",
    boxSizing: "border-box"
  })
}));

/* harmony default export */ const UnstyledButton_styles = (useStyles);
//# sourceMappingURL=UnstyledButton.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js






var UnstyledButton_defProp = Object.defineProperty;
var UnstyledButton_getOwnPropSymbols = Object.getOwnPropertySymbols;
var UnstyledButton_hasOwnProp = Object.prototype.hasOwnProperty;
var UnstyledButton_propIsEnum = Object.prototype.propertyIsEnumerable;
var UnstyledButton_defNormalProp = (obj, key, value) => key in obj ? UnstyledButton_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var UnstyledButton_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (UnstyledButton_hasOwnProp.call(b, prop))
      UnstyledButton_defNormalProp(a, prop, b[prop]);
  if (UnstyledButton_getOwnPropSymbols)
    for (var prop of UnstyledButton_getOwnPropSymbols(b)) {
      if (UnstyledButton_propIsEnum.call(b, prop))
        UnstyledButton_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (UnstyledButton_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && UnstyledButton_getOwnPropSymbols)
    for (var prop of UnstyledButton_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && UnstyledButton_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const _UnstyledButton = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("UnstyledButton", {}, props), {
    className,
    component = "button",
    unstyled
  } = _a, others = __objRest(_a, [
    "className",
    "component",
    "unstyled"
  ]);
  const { classes, cx } = UnstyledButton_styles(null, { name: "UnstyledButton", unstyled });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, UnstyledButton_spreadValues({
    component,
    ref,
    className: cx(classes.root, className),
    type: component === "button" ? "button" : void 0
  }, others));
});
_UnstyledButton.displayName = "@mantine/core/UnstyledButton";
const UnstyledButton = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_UnstyledButton);


//# sourceMappingURL=UnstyledButton.js.map


/***/ }),

/***/ 7048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useDidUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function useDidUpdate(fn, dependencies) {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    mounted.current = false;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}


//# sourceMappingURL=use-did-update.js.map


/***/ }),

/***/ 4065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialValueInEffect ? initialValue : getInitialValue(query, initialValue));
  const queryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches;
}


//# sourceMappingURL=use-media-query.js.map


/***/ }),

/***/ 3678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useReducedMotion)
/* harmony export */ });
/* harmony import */ var _use_media_query_use_media_query_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4065);


function useReducedMotion(initialValue, options) {
  return (0,_use_media_query_use_media_query_js__WEBPACK_IMPORTED_MODULE_0__/* .useMediaQuery */ .a)("(prefers-reduced-motion: reduce)", initialValue, options);
}


//# sourceMappingURL=use-reduced-motion.js.map


/***/ }),

/***/ 6972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ColorSchemeProvider),
/* harmony export */   "X": () => (/* binding */ useMantineColorScheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


const ColorSchemeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function useMantineColorScheme() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ColorSchemeContext);
  if (!ctx) {
    throw new Error("useMantineColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");
  }
  return ctx;
}
function ColorSchemeProvider({
  colorScheme,
  toggleColorScheme,
  children
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorSchemeContext.Provider, {
    value: { colorScheme, toggleColorScheme }
  }, children);
}
ColorSchemeProvider.displayName = "@mantine/core/ColorSchemeProvider";


//# sourceMappingURL=ColorSchemeProvider.js.map


/***/ }),

/***/ 8495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Me": () => (/* binding */ MantineProvider),
  "N4": () => (/* binding */ useComponentDefaultProps),
  "T1": () => (/* binding */ useMantineEmotionCache),
  "O2": () => (/* binding */ useMantineProviderStyles),
  "rZ": () => (/* binding */ useMantineTheme)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js + 1 modules
var emotion_element_6a883da9_browser_esm = __webpack_require__(1683);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(8012);
;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/default-colors.js
const DEFAULT_COLORS = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};


//# sourceMappingURL=default-colors.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/font-styles/font-styles.js
function fontStyles(theme) {
  return () => ({ fontFamily: theme.fontFamily || "sans-serif" });
}


//# sourceMappingURL=font-styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/focus-styles/focus-styles.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function focusStyles(theme) {
  return (selector) => ({
    WebkitTapHighlightColor: "transparent",
    [selector || "&:focus"]: __spreadValues({}, theme.focusRing === "always" || theme.focusRing === "auto" ? theme.focusRingStyles.styles(theme) : theme.focusRingStyles.resetStyles(theme)),
    [selector ? selector.replace(":focus", ":focus:not(:focus-visible)") : "&:focus:not(:focus-visible)"]: __spreadValues({}, theme.focusRing === "auto" || theme.focusRing === "never" ? theme.focusRingStyles.resetStyles(theme) : null)
  });
}


//# sourceMappingURL=focus-styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/primary-shade/primary-shade.js
function primaryShade(theme) {
  return (colorScheme) => {
    if (typeof theme.primaryShade === "number") {
      return theme.primaryShade;
    }
    return theme.primaryShade[colorScheme || theme.colorScheme];
  };
}


//# sourceMappingURL=primary-shade.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/theme-color/theme-color.js


function themeColor(theme) {
  const getPrimaryShade = primaryShade(theme);
  return (color, shade, primaryFallback = true, useSplittedShade = true) => {
    if (typeof color === "string" && color.includes(".")) {
      const [splitterColor, _splittedShade] = color.split(".");
      const splittedShade = parseInt(_splittedShade, 10);
      if (splitterColor in theme.colors && splittedShade >= 0 && splittedShade < 10) {
        return theme.colors[splitterColor][typeof shade === "number" && !useSplittedShade ? shade : splittedShade];
      }
    }
    const _shade = typeof shade === "number" ? shade : getPrimaryShade();
    return color in theme.colors ? theme.colors[color][_shade] : primaryFallback ? theme.colors[theme.primaryColor][_shade] : color;
  };
}


//# sourceMappingURL=theme-color.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/gradient/get-gradient-color-stops/get-gradient-color-stops.js
function getGradientColorStops(colors) {
  let stops = "";
  for (let i = 1; i < colors.length - 1; i += 1) {
    stops += `${colors[i]} ${i / (colors.length - 1) * 100}%, `;
  }
  return `${colors[0]} 0%, ${stops}${colors[colors.length - 1]} 100%`;
}


//# sourceMappingURL=get-gradient-color-stops.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/gradient/gradient.js




function linearGradient(deg, ...colors) {
  return `linear-gradient(${deg}deg, ${getGradientColorStops(colors)})`;
}
function radialGradient(...colors) {
  return `radial-gradient(circle, ${getGradientColorStops(colors)})`;
}
function gradient(theme) {
  const getThemeColor = themeColor(theme);
  const getPrimaryShade = primaryShade(theme);
  return (payload) => {
    const merged = {
      from: (payload == null ? void 0 : payload.from) || theme.defaultGradient.from,
      to: (payload == null ? void 0 : payload.to) || theme.defaultGradient.to,
      deg: (payload == null ? void 0 : payload.deg) || theme.defaultGradient.deg
    };
    return `linear-gradient(${merged.deg}deg, ${getThemeColor(merged.from, getPrimaryShade(), false)} 0%, ${getThemeColor(merged.to, getPrimaryShade(), false)} 100%)`;
  };
}


//# sourceMappingURL=gradient.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/size/size.js
function size(props) {
  if (typeof props.size === "number") {
    return props.size;
  }
  const computedSize = props.sizes[props.size];
  return computedSize !== void 0 ? computedSize : props.size || props.sizes.md;
}


//# sourceMappingURL=size.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/breakpoints/breakpoints.js


function largerThan(theme) {
  return (breakpoint) => `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
}
function smallerThan(theme) {
  return (breakpoint) => `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) - 1}px)`;
}


//# sourceMappingURL=breakpoints.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/utils/to-rgba/to-rgba.js
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  const parsed = parseInt(hexString, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g, b, a: a || 1 };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}


//# sourceMappingURL=to-rgba.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/rgba/rgba.js


function rgba(color, alpha) {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


//# sourceMappingURL=rgba.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/cover/cover.js
function cover(offset = 0) {
  return {
    position: "absolute",
    top: offset,
    right: offset,
    left: offset,
    bottom: offset
  };
}


//# sourceMappingURL=cover.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/darken/darken.js


function darken(color, alpha) {
  const { r, g, b, a } = toRgba(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
}


//# sourceMappingURL=darken.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/lighten/lighten.js


function lighten(color, alpha) {
  const { r, g, b, a } = toRgba(color);
  const light = (input) => Math.round(input + (255 - input) * alpha);
  return `rgba(${light(r)}, ${light(g)}, ${light(b)}, ${a})`;
}


//# sourceMappingURL=lighten.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/radius/radius.js
function radius(theme) {
  return (size) => {
    if (typeof size === "number") {
      return size;
    }
    const defaultRadius = typeof theme.defaultRadius === "number" ? theme.defaultRadius : theme.radius[theme.defaultRadius] || theme.defaultRadius;
    return theme.radius[size] || size || defaultRadius;
  };
}


//# sourceMappingURL=radius.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/variant/variant.js





function getColorIndexInfo(color, theme) {
  if (typeof color === "string" && color.includes(".")) {
    const [splittedColor, _splittedShade] = color.split(".");
    const splittedShade = parseInt(_splittedShade, 10);
    if (splittedColor in theme.colors && splittedShade >= 0 && splittedShade < 10) {
      return { isSplittedColor: true, key: splittedColor, shade: splittedShade };
    }
  }
  return { isSplittedColor: false };
}
function variant(theme) {
  const getThemeColor = themeColor(theme);
  const getPrimaryShade = primaryShade(theme);
  const getGradient = gradient(theme);
  return ({ variant: variant2, color, gradient: gradient2, primaryFallback }) => {
    const colorInfo = getColorIndexInfo(color, theme);
    switch (variant2) {
      case "light": {
        return {
          border: "transparent",
          background: rgba(getThemeColor(color, theme.colorScheme === "dark" ? 8 : 0, primaryFallback, false), theme.colorScheme === "dark" ? 0.2 : 1),
          color: color === "dark" ? theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9] : getThemeColor(color, theme.colorScheme === "dark" ? 2 : getPrimaryShade("light")),
          hover: rgba(getThemeColor(color, theme.colorScheme === "dark" ? 7 : 1, primaryFallback, false), theme.colorScheme === "dark" ? 0.25 : 0.65)
        };
      }
      case "subtle": {
        return {
          border: "transparent",
          background: "transparent",
          color: color === "dark" ? theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9] : getThemeColor(color, theme.colorScheme === "dark" ? 2 : getPrimaryShade("light")),
          hover: rgba(getThemeColor(color, theme.colorScheme === "dark" ? 8 : 0, primaryFallback, false), theme.colorScheme === "dark" ? 0.2 : 1)
        };
      }
      case "outline": {
        return {
          border: getThemeColor(color, theme.colorScheme === "dark" ? 5 : getPrimaryShade("light")),
          background: "transparent",
          color: getThemeColor(color, theme.colorScheme === "dark" ? 5 : getPrimaryShade("light")),
          hover: theme.colorScheme === "dark" ? rgba(getThemeColor(color, 5, primaryFallback, false), 0.05) : rgba(getThemeColor(color, 0, primaryFallback, false), 0.35)
        };
      }
      case "default": {
        return {
          border: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],
          background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
          hover: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
        };
      }
      case "white": {
        return {
          border: "transparent",
          background: theme.white,
          color: getThemeColor(color, getPrimaryShade()),
          hover: null
        };
      }
      case "transparent": {
        return {
          border: "transparent",
          color: color === "dark" ? theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.dark[9] : getThemeColor(color, theme.colorScheme === "dark" ? 2 : getPrimaryShade("light")),
          background: "transparent",
          hover: null
        };
      }
      case "gradient": {
        return {
          background: getGradient(gradient2),
          color: theme.white,
          border: "transparent",
          hover: null
        };
      }
      default: {
        const _primaryShade = getPrimaryShade();
        const _shade = colorInfo.isSplittedColor ? colorInfo.shade : _primaryShade;
        const _color = colorInfo.isSplittedColor ? colorInfo.key : color;
        return {
          border: "transparent",
          background: getThemeColor(_color, _shade, primaryFallback),
          color: theme.white,
          hover: getThemeColor(_color, _shade === 9 ? 8 : _shade + 1)
        };
      }
    }
  };
}


//# sourceMappingURL=variant.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/primary-color/primary-color.js


function primaryColor(theme) {
  return (colorScheme) => {
    const shade = primaryShade(theme)(colorScheme);
    return theme.colors[theme.primaryColor][shade];
  };
}


//# sourceMappingURL=primary-color.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/hover/hover.js
function hover(hoverStyle) {
  return {
    "@media (hover: hover)": {
      "&:hover": hoverStyle
    },
    "@media (hover: none)": {
      "&:active": hoverStyle
    }
  };
}


//# sourceMappingURL=hover.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/placeholder-styles/placeholder-styles.js
function placeholderStyles(theme) {
  return () => ({
    userSelect: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
  });
}


//# sourceMappingURL=placeholder-styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/fns/index.js

















const fns = {
  fontStyles: fontStyles,
  themeColor: themeColor,
  focusStyles: focusStyles,
  linearGradient: linearGradient,
  radialGradient: radialGradient,
  smallerThan: smallerThan,
  largerThan: largerThan,
  rgba: rgba,
  size: size,
  cover: cover,
  darken: darken,
  lighten: lighten,
  radius: radius,
  variant: variant,
  primaryShade: primaryShade,
  hover: hover,
  gradient: gradient,
  primaryColor: primaryColor,
  placeholderStyles: placeholderStyles
};


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/functions/attach-functions.js


var attach_functions_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var attach_functions_getOwnPropSymbols = Object.getOwnPropertySymbols;
var attach_functions_hasOwnProp = Object.prototype.hasOwnProperty;
var attach_functions_propIsEnum = Object.prototype.propertyIsEnumerable;
var attach_functions_defNormalProp = (obj, key, value) => key in obj ? attach_functions_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var attach_functions_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (attach_functions_hasOwnProp.call(b, prop))
      attach_functions_defNormalProp(a, prop, b[prop]);
  if (attach_functions_getOwnPropSymbols)
    for (var prop of attach_functions_getOwnPropSymbols(b)) {
      if (attach_functions_propIsEnum.call(b, prop))
        attach_functions_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function attachFunctions(themeBase) {
  return __spreadProps(attach_functions_spreadValues({}, themeBase), {
    fn: {
      fontStyles: fns.fontStyles(themeBase),
      themeColor: fns.themeColor(themeBase),
      focusStyles: fns.focusStyles(themeBase),
      largerThan: fns.largerThan(themeBase),
      smallerThan: fns.smallerThan(themeBase),
      radialGradient: fns.radialGradient,
      linearGradient: fns.linearGradient,
      gradient: fns.gradient(themeBase),
      rgba: fns.rgba,
      size: fns.size,
      cover: fns.cover,
      lighten: fns.lighten,
      darken: fns.darken,
      primaryShade: fns.primaryShade(themeBase),
      radius: fns.radius(themeBase),
      variant: fns.variant(themeBase),
      hover: fns.hover,
      primaryColor: fns.primaryColor(themeBase),
      placeholderStyles: fns.placeholderStyles(themeBase)
    }
  });
}


//# sourceMappingURL=attach-functions.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/default-theme.js



const MANTINE_COLORS = Object.keys(DEFAULT_COLORS);
const MANTINE_SIZES = (/* unused pure expression or super */ null && (["xs", "sm", "md", "lg", "xl"]));
const _DEFAULT_THEME = {
  dir: "ltr",
  primaryShade: {
    light: 6,
    dark: 8
  },
  focusRing: "auto",
  loader: "oval",
  dateFormat: "MMMM D, YYYY",
  colorScheme: "light",
  white: "#fff",
  black: "#000",
  defaultRadius: "sm",
  transitionTimingFunction: "ease",
  colors: DEFAULT_COLORS,
  lineHeight: 1.55,
  fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  primaryColor: "blue",
  respectReducedMotion: true,
  cursorType: "default",
  defaultGradient: {
    from: "indigo",
    to: "cyan",
    deg: 45
  },
  shadows: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
    md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
    xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32
  },
  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24
  },
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400
  },
  headings: {
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 34, lineHeight: 1.3, fontWeight: void 0 },
      h2: { fontSize: 26, lineHeight: 1.35, fontWeight: void 0 },
      h3: { fontSize: 22, lineHeight: 1.4, fontWeight: void 0 },
      h4: { fontSize: 18, lineHeight: 1.45, fontWeight: void 0 },
      h5: { fontSize: 16, lineHeight: 1.5, fontWeight: void 0 },
      h6: { fontSize: 14, lineHeight: 1.5, fontWeight: void 0 }
    }
  },
  other: {},
  components: {},
  activeStyles: { transform: "translateY(1px)" },
  datesLocale: "en",
  globalStyles: void 0,
  focusRingStyles: {
    styles: (theme) => ({
      outlineOffset: 2,
      outline: `2px solid ${theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5]}`
    }),
    resetStyles: () => ({ outline: "none" }),
    inputStyles: (theme) => ({
      outline: "none",
      borderColor: theme.colors[theme.primaryColor][typeof theme.primaryShade === "object" ? theme.primaryShade[theme.colorScheme] : theme.primaryShade]
    })
  }
};
const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);


//# sourceMappingURL=default-theme.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/GlobalStyles.js



var GlobalStyles_defProp = Object.defineProperty;
var GlobalStyles_defProps = Object.defineProperties;
var GlobalStyles_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var GlobalStyles_getOwnPropSymbols = Object.getOwnPropertySymbols;
var GlobalStyles_hasOwnProp = Object.prototype.hasOwnProperty;
var GlobalStyles_propIsEnum = Object.prototype.propertyIsEnumerable;
var GlobalStyles_defNormalProp = (obj, key, value) => key in obj ? GlobalStyles_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var GlobalStyles_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (GlobalStyles_hasOwnProp.call(b, prop))
      GlobalStyles_defNormalProp(a, prop, b[prop]);
  if (GlobalStyles_getOwnPropSymbols)
    for (var prop of GlobalStyles_getOwnPropSymbols(b)) {
      if (GlobalStyles_propIsEnum.call(b, prop))
        GlobalStyles_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var GlobalStyles_spreadProps = (a, b) => GlobalStyles_defProps(a, GlobalStyles_getOwnPropDescs(b));
function GlobalStyles({ theme }) {
  return /* @__PURE__ */ react.createElement(emotion_react_browser_esm/* Global */.xB, {
    styles: {
      "*, *::before, *::after": {
        boxSizing: "border-box"
      },
      html: {
        colorScheme: theme.colorScheme === "dark" ? "dark" : "light"
      },
      body: GlobalStyles_spreadProps(GlobalStyles_spreadValues({}, theme.fn.fontStyles()), {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
        fontSize: theme.fontSizes.md,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      })
    }
  });
}


//# sourceMappingURL=GlobalStyles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/MantineCssVariables.js



function assignSizeVariables(variables, sizes, name) {
  Object.keys(sizes).forEach((size) => {
    variables[`--mantine-${name}-${size}`] = typeof sizes[size] === "number" ? `${sizes[size]}px` : sizes[size];
  });
}
function MantineCssVariables({ theme }) {
  const variables = {
    "--mantine-color-white": theme.white,
    "--mantine-color-black": theme.black,
    "--mantine-transition-timing-function": theme.transitionTimingFunction,
    "--mantine-line-height": `${theme.lineHeight}`,
    "--mantine-font-family": theme.fontFamily,
    "--mantine-font-family-monospace": theme.fontFamilyMonospace,
    "--mantine-font-family-headings": theme.headings.fontFamily,
    "--mantine-heading-font-weight": `${theme.headings.fontWeight}`
  };
  assignSizeVariables(variables, theme.shadows, "shadow");
  assignSizeVariables(variables, theme.fontSizes, "font-size");
  assignSizeVariables(variables, theme.radius, "radius");
  assignSizeVariables(variables, theme.spacing, "spacing");
  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--mantine-color-${color}-${index}`] = shade;
    });
  });
  const headings = theme.headings.sizes;
  Object.keys(headings).forEach((heading) => {
    variables[`--mantine-${heading}-font-size`] = `${headings[heading].fontSize}px`;
    variables[`--mantine-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });
  return /* @__PURE__ */ react.createElement(emotion_react_browser_esm/* Global */.xB, {
    styles: {
      ":root": variables
    }
  });
}


//# sourceMappingURL=MantineCssVariables.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/utils/merge-theme/merge-theme.js


var merge_theme_defProp = Object.defineProperty;
var merge_theme_defProps = Object.defineProperties;
var merge_theme_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var merge_theme_getOwnPropSymbols = Object.getOwnPropertySymbols;
var merge_theme_hasOwnProp = Object.prototype.hasOwnProperty;
var merge_theme_propIsEnum = Object.prototype.propertyIsEnumerable;
var merge_theme_defNormalProp = (obj, key, value) => key in obj ? merge_theme_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var merge_theme_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (merge_theme_hasOwnProp.call(b, prop))
      merge_theme_defNormalProp(a, prop, b[prop]);
  if (merge_theme_getOwnPropSymbols)
    for (var prop of merge_theme_getOwnPropSymbols(b)) {
      if (merge_theme_propIsEnum.call(b, prop))
        merge_theme_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var merge_theme_spreadProps = (a, b) => merge_theme_defProps(a, merge_theme_getOwnPropDescs(b));
function mergeTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    return currentTheme;
  }
  const result = Object.keys(currentTheme).reduce((acc, key) => {
    if (key === "headings" && themeOverride.headings) {
      const sizes = themeOverride.headings.sizes ? Object.keys(currentTheme.headings.sizes).reduce((headingsAcc, h) => {
        headingsAcc[h] = merge_theme_spreadValues(merge_theme_spreadValues({}, currentTheme.headings.sizes[h]), themeOverride.headings.sizes[h]);
        return headingsAcc;
      }, {}) : currentTheme.headings.sizes;
      return merge_theme_spreadProps(merge_theme_spreadValues({}, acc), {
        headings: merge_theme_spreadProps(merge_theme_spreadValues(merge_theme_spreadValues({}, currentTheme.headings), themeOverride.headings), {
          sizes
        })
      });
    }
    acc[key] = typeof themeOverride[key] === "object" ? merge_theme_spreadValues(merge_theme_spreadValues({}, currentTheme[key]), themeOverride[key]) : typeof themeOverride[key] === "number" || typeof themeOverride[key] === "boolean" || typeof themeOverride[key] === "function" ? themeOverride[key] : themeOverride[key] || currentTheme[key];
    return acc;
  }, {});
  if (!(result.primaryColor in result.colors)) {
    throw new Error("MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color");
  }
  return result;
}
function mergeThemeWithFunctions(currentTheme, themeOverride) {
  return attachFunctions(mergeTheme(currentTheme, themeOverride));
}


//# sourceMappingURL=merge-theme.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/filter-props/filter-props.js
var filter_props = __webpack_require__(6896);
;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/NormalizeCSS.js



const styles = {
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%"
  },
  body: {
    margin: 0
  },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block"
  },
  h1: {
    fontSize: "2em"
  },
  hr: {
    boxSizing: "content-box",
    height: 0,
    overflow: "visible"
  },
  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  a: {
    background: "transparent",
    textDecorationSkip: "objects"
  },
  "a:active, a:hover": {
    outlineWidth: 0
  },
  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline"
  },
  "b, strong": {
    fontWeight: "bolder"
  },
  "code, kbp, samp": {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  dfn: {
    fontStyle: "italic"
  },
  mark: {
    backgroundColor: "#ff0",
    color: "#000"
  },
  small: {
    fontSize: "80%"
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sup: {
    top: "-0.5em"
  },
  sub: {
    bottom: "-0.25em"
  },
  "audio, video": {
    display: "inline-block"
  },
  "audio:not([controls])": {
    display: "none",
    height: 0
  },
  img: {
    borderStyle: "none",
    verticalAlign: "middle"
  },
  "svg:not(:root)": {
    overflow: "hidden"
  },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0
  },
  "button, input": {
    overflow: "visible"
  },
  "button, select": {
    textTransform: "none"
  },
  "button, [type=reset], [type=submit]": {
    WebkitAppearance: "button"
  },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner": {
    borderStyle: "none",
    padding: 0
  },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring": {
    outline: "1px dotted ButtonText"
  },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal"
  },
  progress: {
    display: "inline-block",
    verticalAlign: "baseline"
  },
  textarea: {
    overflow: "auto"
  },
  "[type=checkbox], [type=radio]": {
    boxSizing: "border-box",
    padding: 0
  },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type=search]": {
    appearance: "none"
  },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
    appearance: "none"
  },
  "::-webkit-file-upload-button": {
    appearance: "button",
    font: "inherit"
  },
  "details, menu": {
    display: "block"
  },
  summary: {
    display: "list-item"
  },
  canvas: {
    display: "inline-block"
  },
  template: {
    display: "none"
  },
  "[hidden]": {
    display: "none"
  }
};
function NormalizeCSS() {
  return /* @__PURE__ */ react.createElement(emotion_react_browser_esm/* Global */.xB, {
    styles
  });
}


//# sourceMappingURL=NormalizeCSS.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js









var MantineProvider_defProp = Object.defineProperty;
var MantineProvider_getOwnPropSymbols = Object.getOwnPropertySymbols;
var MantineProvider_hasOwnProp = Object.prototype.hasOwnProperty;
var MantineProvider_propIsEnum = Object.prototype.propertyIsEnumerable;
var MantineProvider_defNormalProp = (obj, key, value) => key in obj ? MantineProvider_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var MantineProvider_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (MantineProvider_hasOwnProp.call(b, prop))
      MantineProvider_defNormalProp(a, prop, b[prop]);
  if (MantineProvider_getOwnPropSymbols)
    for (var prop of MantineProvider_getOwnPropSymbols(b)) {
      if (MantineProvider_propIsEnum.call(b, prop))
        MantineProvider_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const MantineProviderContext = (0,react.createContext)({
  theme: DEFAULT_THEME
});
function useMantineTheme() {
  var _a;
  return ((_a = (0,react.useContext)(MantineProviderContext)) == null ? void 0 : _a.theme) || DEFAULT_THEME;
}
function useMantineProviderStyles(component) {
  const theme = useMantineTheme();
  const getStyles = (name) => {
    var _a, _b;
    return {
      styles: ((_a = theme.components[name]) == null ? void 0 : _a.styles) || {},
      classNames: ((_b = theme.components[name]) == null ? void 0 : _b.classNames) || {}
    };
  };
  if (Array.isArray(component)) {
    return component.map(getStyles);
  }
  return [getStyles(component)];
}
function useMantineEmotionCache() {
  var _a;
  return (_a = (0,react.useContext)(MantineProviderContext)) == null ? void 0 : _a.emotionCache;
}
function useComponentDefaultProps(component, defaultProps, props) {
  var _a;
  const theme = useMantineTheme();
  const contextPropsPayload = (_a = theme.components[component]) == null ? void 0 : _a.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return MantineProvider_spreadValues(MantineProvider_spreadValues(MantineProvider_spreadValues({}, defaultProps), contextProps), (0,filter_props/* filterProps */.L)(props));
}
function MantineProvider({
  theme,
  emotionCache,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children
}) {
  const ctx = (0,react.useContext)(MantineProviderContext);
  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, inherit ? MantineProvider_spreadValues(MantineProvider_spreadValues({}, ctx.theme), theme) : theme);
  return /* @__PURE__ */ react.createElement(emotion_element_6a883da9_browser_esm.a, {
    theme: mergedTheme
  }, /* @__PURE__ */ react.createElement(MantineProviderContext.Provider, {
    value: { theme: mergedTheme, emotionCache }
  }, withNormalizeCSS && /* @__PURE__ */ react.createElement(NormalizeCSS, null), withGlobalStyles && /* @__PURE__ */ react.createElement(GlobalStyles, {
    theme: mergedTheme
  }), withCSSVariables && /* @__PURE__ */ react.createElement(MantineCssVariables, {
    theme: mergedTheme
  }), typeof mergedTheme.globalStyles === "function" && /* @__PURE__ */ react.createElement(emotion_react_browser_esm/* Global */.xB, {
    styles: mergedTheme.globalStyles(mergedTheme)
  }), children));
}
MantineProvider.displayName = "@mantine/core/MantineProvider";


//# sourceMappingURL=MantineProvider.js.map


/***/ }),

/***/ 6896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ filterProps)
/* harmony export */ });
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}


//# sourceMappingURL=filter-props.js.map


/***/ }),

/***/ 3594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getDefaultZIndex)
/* harmony export */ });
const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}


//# sourceMappingURL=get-default-z-index.js.map


/***/ }),

/***/ 6817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ createStyles)
});

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/use-css.js + 9 modules
var use_css = __webpack_require__(2140);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/tss/utils/merge-class-names/merge-class-names.js
function mergeClassNames({
  cx,
  classes,
  context,
  classNames,
  name,
  cache
}) {
  const contextClassNames = context.reduce((acc, item) => {
    Object.keys(item.classNames).forEach((key) => {
      if (typeof acc[key] !== "string") {
        acc[key] = `${item.classNames[key]}`;
      } else {
        acc[key] = `${acc[key]} ${item.classNames[key]}`;
      }
    });
    return acc;
  }, {});
  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(classes[className], contextClassNames[className], classNames != null && classNames[className], Array.isArray(name) ? name.filter(Boolean).map((part) => `${(cache == null ? void 0 : cache.key) || "mantine"}-${part}-${className}`).join(" ") : name ? `${(cache == null ? void 0 : cache.key) || "mantine"}-${name}-${className}` : null);
    return acc;
  }, {});
}


//# sourceMappingURL=merge-class-names.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js




var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function createRef(refName) {
  return `__mantine-ref-${refName || ""}`;
}
function getStyles(styles, theme, params) {
  const extractStyles = (stylesPartial) => typeof stylesPartial === "function" ? stylesPartial(theme, params || {}) : stylesPartial || {};
  if (Array.isArray(styles)) {
    return styles.map((item) => extractStyles(item.styles)).reduce((acc, item) => {
      Object.keys(item).forEach((key) => {
        if (!acc[key]) {
          acc[key] = __spreadValues({}, item[key]);
        } else {
          acc[key] = __spreadValues(__spreadValues({}, acc[key]), item[key]);
        }
      });
      return acc;
    }, {});
  }
  return extractStyles(styles);
}
function createStyles(input) {
  const getCssObject = typeof input === "function" ? input : () => input;
  function useStyles(params, options) {
    const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
    const context = (0,MantineProvider/* useMantineProviderStyles */.O2)(options == null ? void 0 : options.name);
    const cache = (0,MantineProvider/* useMantineEmotionCache */.T1)();
    const { css, cx } = (0,use_css/* useCss */.Z)();
    const cssObject = getCssObject(theme, params, createRef);
    const componentStyles = getStyles(options == null ? void 0 : options.styles, theme, params);
    const providerStyles = getStyles(context, theme, params);
    const classes = Object.fromEntries(Object.keys(cssObject).map((key) => {
      const mergedStyles = cx({ [css(cssObject[key])]: !(options == null ? void 0 : options.unstyled) }, css(providerStyles[key]), css(componentStyles[key]));
      return [key, mergedStyles];
    }));
    return {
      classes: mergeClassNames({
        cx,
        classes,
        context,
        classNames: options == null ? void 0 : options.classNames,
        name: options == null ? void 0 : options.name,
        cache
      }),
      cx,
      theme
    };
  }
  return useStyles;
}


//# sourceMappingURL=create-styles.js.map


/***/ }),

/***/ 2140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useCss)
});

// UNUSED EXPORTS: cssFactory

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function clsx_m() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}

;// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const hash_browser_esm = (murmur2);

;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const unitless_browser_esm = (unitlessKeys);

;// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const memoize_browser_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize_browser_esm(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitless_browser_esm[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_browser_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};



;// CONCATENATED MODULE: ./node_modules/@emotion/utils/dist/utils.browser.esm.js
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};



// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/tss/utils/use-guaranteed-memo/use-guaranteed-memo.js


function useGuaranteedMemo(fn, deps) {
  const ref = (0,react.useRef)();
  if (!ref.current || deps.length !== ref.current.prevDeps.length || ref.current.prevDeps.map((v, i) => v === deps[i]).indexOf(false) >= 0) {
    ref.current = {
      v: fn(),
      prevDeps: [...deps]
    };
  }
  return ref.current.v;
}


//# sourceMappingURL=use-guaranteed-memo.js.map

// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 7 modules
var emotion_cache_browser_esm = __webpack_require__(8996);
;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/tss/default-emotion-cache.js


const defaultMantineEmotionCache = (0,emotion_cache_browser_esm/* default */.Z)({ key: "mantine", prepend: true });


//# sourceMappingURL=default-emotion-cache.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/tss/use-emotion-cache.js



function useEmotionCache() {
  const cache = (0,MantineProvider/* useMantineEmotionCache */.T1)();
  return cache || defaultMantineEmotionCache;
}


//# sourceMappingURL=use-emotion-cache.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/tss/use-css.js






var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const refPropertyName = "ref";
function getRef(args) {
  let ref;
  if (args.length !== 1) {
    return { args, ref };
  }
  const [arg] = args;
  if (!(arg instanceof Object)) {
    return { args, ref };
  }
  if (!(refPropertyName in arg)) {
    return { args, ref };
  }
  ref = arg[refPropertyName];
  const argCopy = __spreadValues({}, arg);
  delete argCopy[refPropertyName];
  return { args: [argCopy], ref };
}
const { cssFactory } = (() => {
  function merge(registered, css, className) {
    const registeredStyles = [];
    const rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css(registeredStyles);
  }
  function _cssFactory(params) {
    const { cache } = params;
    const css = (...styles) => {
      const { ref, args } = getRef(styles);
      const serialized = serializeStyles(args, cache.registered);
      insertStyles(cache, serialized, false);
      return `${cache.key}-${serialized.name}${ref === void 0 ? "" : ` ${ref}`}`;
    };
    const cx = (...args) => merge(cache.registered, css, clsx_m(args));
    return { css, cx };
  }
  return { cssFactory: _cssFactory };
})();
function useCss() {
  const cache = useEmotionCache();
  return useGuaranteedMemo(() => cssFactory({ cache }), [cache]);
}


//# sourceMappingURL=use-css.js.map


/***/ }),

/***/ 8427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ createPolymorphicComponent)
/* harmony export */ });
function createPolymorphicComponent(component) {
  return component;
}


//# sourceMappingURL=create-polymorphic-component.js.map


/***/ }),

/***/ 3991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A2c": () => (/* binding */ Cee),
/* harmony export */   "DpU": () => (/* binding */ Se),
/* harmony export */   "Ec8": () => (/* binding */ ea),
/* harmony export */   "O31": () => (/* binding */ EAe),
/* harmony export */   "TRY": () => (/* binding */ CEe),
/* harmony export */   "Us8": () => (/* binding */ zte),
/* harmony export */   "WBX": () => (/* binding */ N2),
/* harmony export */   "ZdG": () => (/* binding */ Dae),
/* harmony export */   "mhH": () => (/* binding */ Pj),
/* harmony export */   "y_Q": () => (/* binding */ Bq),
/* harmony export */   "zG9": () => (/* binding */ Gme)
/* harmony export */ });
/* unused harmony exports Icon123, Icon24Hours, Icon2fa, Icon360, Icon360View, Icon3dCubeSphere, Icon3dCubeSphereOff, Icon3dRotate, IconAB, IconAB2, IconABOff, IconAbacus, IconAbacusOff, IconAbc, IconAccessPoint, IconAccessPointOff, IconAccessible, IconAccessibleOff, IconActivity, IconActivityHeartbeat, IconAd, IconAd2, IconAdOff, IconAddressBook, IconAddressBookOff, IconAdjustments, IconAdjustmentsAlt, IconAdjustmentsHorizontal, IconAdjustmentsOff, IconAerialLift, IconAffiliate, IconAirBalloon, IconAirConditioning, IconAirConditioningDisabled, IconAlarm, IconAlarmMinus, IconAlarmOff, IconAlarmPlus, IconAlarmSnooze, IconAlbum, IconAlbumOff, IconAlertCircle, IconAlertOctagon, IconAlien, IconAlignBoxBottomCenter, IconAlignBoxBottomLeft, IconAlignBoxBottomRight, IconAlignBoxLeftBottom, IconAlignBoxLeftMiddle, IconAlignBoxLeftTop, IconAlignBoxRightBottom, IconAlignBoxRightMiddle, IconAlignBoxRightTop, IconAlignBoxTopCenter, IconAlignBoxTopLeft, IconAlignBoxTopRight, IconAlignCenter, IconAlignJustified, IconAlignLeft, IconAlignRight, IconAlpha, IconAlphabetCyrillic, IconAlphabetGreek, IconAlphabetLatin, IconAmbulance, IconAmpersand, IconAnalyze, IconAnalyzeOff, IconAnchor, IconAnchorOff, IconAngle, IconAnkh, IconAntenna, IconAntennaBars1, IconAntennaBars2, IconAntennaBars3, IconAntennaBars4, IconAntennaBars5, IconAntennaBarsOff, IconAntennaOff, IconAperture, IconApertureOff, IconApi, IconApiApp, IconApiAppOff, IconApiOff, IconAppWindow, IconApple, IconApps, IconAppsOff, IconArchive, IconArchiveOff, IconArmchair, IconArmchair2, IconArmchair2Off, IconArmchairOff, IconArrowAutofitContent, IconArrowAutofitDown, IconArrowAutofitHeight, IconArrowAutofitLeft, IconArrowAutofitRight, IconArrowAutofitUp, IconArrowAutofitWidth, IconArrowBack, IconArrowBackUp, IconArrowBadgeDown, IconArrowBadgeLeft, IconArrowBadgeRight, IconArrowBadgeUp, IconArrowBarDown, IconArrowBarLeft, IconArrowBarRight, IconArrowBarToDown, IconArrowBarToLeft, IconArrowBarToRight, IconArrowBarToUp, IconArrowBarUp, IconArrowBearLeft, IconArrowBearLeft2, IconArrowBearRight, IconArrowBearRight2, IconArrowBigDown, IconArrowBigDownLine, IconArrowBigDownLines, IconArrowBigLeft, IconArrowBigLeftLine, IconArrowBigLeftLines, IconArrowBigRight, IconArrowBigRightLine, IconArrowBigRightLines, IconArrowBigTop, IconArrowBigUpLine, IconArrowBigUpLines, IconArrowBounce, IconArrowCurveLeft, IconArrowCurveRight, IconArrowDown, IconArrowDownBar, IconArrowDownCircle, IconArrowDownLeft, IconArrowDownLeftCircle, IconArrowDownRhombus, IconArrowDownRight, IconArrowDownRightCircle, IconArrowDownSquare, IconArrowDownTail, IconArrowFork, IconArrowForward, IconArrowForwardUp, IconArrowGuide, IconArrowIteration, IconArrowLeft, IconArrowLeftBar, IconArrowLeftCircle, IconArrowLeftRhombus, IconArrowLeftRight, IconArrowLeftSquare, IconArrowLeftTail, IconArrowLoopLeft, IconArrowLoopLeft2, IconArrowLoopRight, IconArrowLoopRight2, IconArrowMerge, IconArrowMergeBoth, IconArrowMergeLeft, IconArrowMergeRight, IconArrowMoveDown, IconArrowMoveLeft, IconArrowMoveRight, IconArrowMoveUp, IconArrowNarrowDown, IconArrowNarrowLeft, IconArrowNarrowRight, IconArrowNarrowUp, IconArrowRampLeft, IconArrowRampLeft2, IconArrowRampLeft3, IconArrowRampRight, IconArrowRampRight2, IconArrowRampRight3, IconArrowRightBar, IconArrowRightCircle, IconArrowRightRhombus, IconArrowRightSquare, IconArrowRightTail, IconArrowRotaryFirstLeft, IconArrowRotaryFirstRight, IconArrowRotaryLastLeft, IconArrowRotaryLastRight, IconArrowRotaryLeft, IconArrowRotaryRight, IconArrowRotaryStraight, IconArrowRoundaboutLeft, IconArrowRoundaboutRight, IconArrowSharpTurnLeft, IconArrowSharpTurnRight, IconArrowUp, IconArrowUpBar, IconArrowUpCircle, IconArrowUpLeft, IconArrowUpLeftCircle, IconArrowUpRhombus, IconArrowUpRight, IconArrowUpRightCircle, IconArrowUpSquare, IconArrowUpTail, IconArrowWaveLeftDown, IconArrowWaveLeftUp, IconArrowWaveRightDown, IconArrowWaveRightUp, IconArrowZigZag, IconArrowsCross, IconArrowsDiagonal, IconArrowsDiagonal2, IconArrowsDiagonalMinimize, IconArrowsDiagonalMinimize2, IconArrowsDiff, IconArrowsDoubleNeSw, IconArrowsDoubleNwSe, IconArrowsDoubleSeNw, IconArrowsDoubleSwNe, IconArrowsDown, IconArrowsDownUp, IconArrowsExchange, IconArrowsExchange2, IconArrowsHorizontal, IconArrowsJoin, IconArrowsJoin2, IconArrowsLeft, IconArrowsLeftDown, IconArrowsLeftRight, IconArrowsMaximize, IconArrowsMinimize, IconArrowsMove, IconArrowsMoveHorizontal, IconArrowsMoveVertical, IconArrowsRandom, IconArrowsRight, IconArrowsRightDown, IconArrowsRightLeft, IconArrowsShuffle, IconArrowsShuffle2, IconArrowsSort, IconArrowsSplit, IconArrowsSplit2, IconArrowsTransferDown, IconArrowsTransferUp, IconArrowsUp, IconArrowsUpDown, IconArrowsUpLeft, IconArrowsUpRight, IconArrowsVertical, IconArtboard, IconArtboardOff, IconArticle, IconArticleOff, IconAspectRatio, IconAspectRatioOff, IconAssembly, IconAssemblyOff, IconAsset, IconAsterisk, IconAsteriskSimple, IconAt, IconAtOff, IconAtom, IconAtom2, IconAtomOff, IconAugmentedReality, IconAugmentedReality2, IconAugmentedRealityOff, IconAward, IconAwardOff, IconAxe, IconAxisX, IconAxisY, IconBabyBottle, IconBabyCarriage, IconBackhoe, IconBackpack, IconBackpackOff, IconBackspace, IconBadge, IconBadge3d, IconBadge4k, IconBadge8k, IconBadgeAd, IconBadgeAr, IconBadgeCc, IconBadgeHd, IconBadgeOff, IconBadgeSd, IconBadgeTm, IconBadgeVo, IconBadgeVr, IconBadgeWc, IconBadges, IconBadgesOff, IconBaguette, IconBallAmericanFootball, IconBallAmericanFootballOff, IconBallBaseball, IconBallBasketball, IconBallBowling, IconBallFootball, IconBallFootballOff, IconBallTennis, IconBallVolleyball, IconBallon, IconBallonOff, IconBallpen, IconBallpenOff, IconBan, IconBandage, IconBandageOff, IconBarbell, IconBarbellOff, IconBarcode, IconBarcodeOff, IconBarrel, IconBarrelOff, IconBarrierBlock, IconBarrierBlockOff, IconBaseline, IconBasket, IconBasketOff, IconBat, IconBath, IconBathOff, IconBattery, IconBattery1, IconBattery2, IconBattery3, IconBattery4, IconBatteryAutomotive, IconBatteryCharging, IconBatteryCharging2, IconBatteryEco, IconBatteryOff, IconBeach, IconBeachOff, IconBed, IconBedOff, IconBeer, IconBeerOff, IconBell, IconBellMinus, IconBellOff, IconBellPlus, IconBellRinging, IconBellRinging2, IconBellSchool, IconBellX, IconBellZ, IconBeta, IconBible, IconBike, IconBikeOff, IconBinary, IconBinaryOff, IconBinaryTree, IconBinaryTree2, IconBiohazard, IconBiohazardOff, IconBlade, IconBleach, IconBleachChlorine, IconBleachNoChlorine, IconBleachOff, IconBlockquote, IconBluetooth, IconBluetoothConnected, IconBluetoothOff, IconBluetoothX, IconBlur, IconBlurOff, IconBmp, IconBold, IconBoldOff, IconBolt, IconBoltOff, IconBomb, IconBone, IconBoneOff, IconBong, IconBongOff, IconBook, IconBook2, IconBookDownload, IconBookOff, IconBookUpload, IconBookmark, IconBookmarkOff, IconBookmarks, IconBookmarksOff, IconBooks, IconBooksOff, IconBorderAll, IconBorderBottom, IconBorderHorizontal, IconBorderInner, IconBorderLeft, IconBorderNone, IconBorderOuter, IconBorderRadius, IconBorderRight, IconBorderStyle, IconBorderStyle2, IconBorderTop, IconBorderVertical, IconBottle, IconBottleOff, IconBounceLeft, IconBounceRight, IconBow, IconBowl, IconBox, IconBoxAlignBottom, IconBoxAlignBottomLeft, IconBoxAlignBottomRight, IconBoxAlignLeft, IconBoxAlignRight, IconBoxAlignTop, IconBoxAlignTopLeft, IconBoxAlignTopRight, IconBoxMargin, IconBoxModel, IconBoxModel2, IconBoxModel2Off, IconBoxModelOff, IconBoxMultiple, IconBoxMultiple0, IconBoxMultiple1, IconBoxMultiple2, IconBoxMultiple3, IconBoxMultiple4, IconBoxMultiple5, IconBoxMultiple6, IconBoxMultiple7, IconBoxMultiple8, IconBoxMultiple9, IconBoxOff, IconBoxPadding, IconBoxSeam, IconBraces, IconBracesOff, IconBrackets, IconBracketsContain, IconBracketsContainEnd, IconBracketsContainStart, IconBracketsOff, IconBraile, IconBrain, IconBrand4chan, IconBrandAbstract, IconBrandAdobe, IconBrandAdonisJs, IconBrandAirbnb, IconBrandAirtable, IconBrandAlgolia, IconBrandAlpineJs, IconBrandAmazon, IconBrandAmd, IconBrandAmigo, IconBrandAmongus, IconBrandAndroid, IconBrandAngular, IconBrandAo3, IconBrandAppgallery, IconBrandApple, IconBrandAppleArcade, IconBrandApplePodcast, IconBrandAppstore, IconBrandAsana, IconBrandBackbone, IconBrandBadoo, IconBrandBaidu, IconBrandBandcamp, IconBrandBandlab, IconBrandBeats, IconBrandBehance, IconBrandBinance, IconBrandBing, IconBrandBitbucket, IconBrandBlackbery, IconBrandBlender, IconBrandBlogger, IconBrandBooking, IconBrandBootstrap, IconBrandBulma, IconBrandBumble, IconBrandBunpo, IconBrandCampaignmonitor, IconBrandCarbon, IconBrandCashapp, IconBrandChrome, IconBrandCitymapper, IconBrandCodecov, IconBrandCodepen, IconBrandCodesandbox, IconBrandCohost, IconBrandCoinbase, IconBrandComedyCentral, IconBrandCoreos, IconBrandCouchdb, IconBrandCouchsurfing, IconBrandCpp, IconBrandCss3, IconBrandCtemplar, IconBrandCucumber, IconBrandCupra, IconBrandCypress, IconBrandD3, IconBrandDaysCounter, IconBrandDcos, IconBrandDebian, IconBrandDeliveroo, IconBrandDeno, IconBrandDenodo, IconBrandDeviantart, IconBrandDingtalk, IconBrandDiscord, IconBrandDisney, IconBrandDisqus, IconBrandDjango, IconBrandDocker, IconBrandDoctrine, IconBrandDolbyDigital, IconBrandDouban, IconBrandDribbble, IconBrandDrops, IconBrandDrupal, IconBrandEdge, IconBrandElastic, IconBrandEmber, IconBrandEnvato, IconBrandEtsy, IconBrandEvernote, IconBrandFacebook, IconBrandFigma, IconBrandFinder, IconBrandFirebase, IconBrandFirefox, IconBrandFlickr, IconBrandFlightradar24, IconBrandFlipboard, IconBrandFlutter, IconBrandFortnite, IconBrandFoursquare, IconBrandFramer, IconBrandFunimation, IconBrandGatsby, IconBrandGit, IconBrandGithub, IconBrandGithubCopilot, IconBrandGitlab, IconBrandGmail, IconBrandGoogle, IconBrandGoogleAnalytics, IconBrandGoogleBigQuery, IconBrandGoogleDrive, IconBrandGoogleFit, IconBrandGoogleHome, IconBrandGoogleOne, IconBrandGooglePhotos, IconBrandGooglePlay, IconBrandGooglePodcasts, IconBrandGrammarly, IconBrandGraphql, IconBrandGravatar, IconBrandGrindr, IconBrandGuardian, IconBrandGumroad, IconBrandHbo, IconBrandHeadlessui, IconBrandHipchat, IconBrandHtml5, IconBrandInertia, IconBrandInstagram, IconBrandIntercom, IconBrandJavascript, IconBrandKickstarter, IconBrandKotlin, IconBrandLaravel, IconBrandLastfm, IconBrandLinkedin, IconBrandLinktree, IconBrandLinqpad, IconBrandLoom, IconBrandMailgun, IconBrandMantine, IconBrandMastercard, IconBrandMastodon, IconBrandMatrix, IconBrandMcdonalds, IconBrandMedium, IconBrandMercedes, IconBrandMessenger, IconBrandMeta, IconBrandMiniprogram, IconBrandMixpanel, IconBrandMonday, IconBrandMongodb, IconBrandMyOppo, IconBrandMysql, IconBrandNationalGeographic, IconBrandNem, IconBrandNetbeans, IconBrandNeteaseMusic, IconBrandNetflix, IconBrandNexo, IconBrandNextcloud, IconBrandNextjs, IconBrandNordVpn, IconBrandNotion, IconBrandNpm, IconBrandNuxt, IconBrandNytimes, IconBrandOffice, IconBrandOkRu, IconBrandOnedrive, IconBrandOnlyfans, IconBrandOpenSource, IconBrandOpenvpn, IconBrandOpera, IconBrandPagekit, IconBrandPatreon, IconBrandPaypal, IconBrandPaypay, IconBrandPeanut, IconBrandPepsi, IconBrandPhp, IconBrandPicsart, IconBrandPinterest, IconBrandPocket, IconBrandPolymer, IconBrandPowershell, IconBrandPrisma, IconBrandProducthunt, IconBrandPushbullet, IconBrandPushover, IconBrandPython, IconBrandQq, IconBrandReact, IconBrandReactNative, IconBrandReason, IconBrandReddit, IconBrandRedhat, IconBrandRedux, IconBrandRevolut, IconBrandSafari, IconBrandSamsungpass, IconBrandSass, IconBrandSentry, IconBrandSharik, IconBrandShazam, IconBrandShopee, IconBrandSketch, IconBrandSkype, IconBrandSlack, IconBrandSnapchat, IconBrandSnapseed, IconBrandSnowflake, IconBrandSocketIo, IconBrandSolidjs, IconBrandSoundcloud, IconBrandSpacehey, IconBrandSpotify, IconBrandStackoverflow, IconBrandStackshare, IconBrandSteam, IconBrandStorybook, IconBrandStorytel, IconBrandStrava, IconBrandStripe, IconBrandSublimeText, IconBrandSuperhuman, IconBrandSupernova, IconBrandSurfshark, IconBrandSvelte, IconBrandSymfony, IconBrandTabler, IconBrandTailwind, IconBrandTaobao, IconBrandTed, IconBrandTelegram, IconBrandTether, IconBrandThreejs, IconBrandTidal, IconBrandTiktok, IconBrandTinder, IconBrandTopbuzz, IconBrandTorchain, IconBrandToyota, IconBrandTrello, IconBrandTripadvisor, IconBrandTumblr, IconBrandTwilio, IconBrandTwitch, IconBrandTwitter, IconBrandTypescript, IconBrandUber, IconBrandUbuntu, IconBrandUnity, IconBrandUnsplash, IconBrandUpwork, IconBrandValorant, IconBrandVercel, IconBrandVimeo, IconBrandVinted, IconBrandVisa, IconBrandVisualStudio, IconBrandVite, IconBrandVivaldi, IconBrandVk, IconBrandVolkswagen, IconBrandVsco, IconBrandVscode, IconBrandVue, IconBrandWalmart, IconBrandWaze, IconBrandWebflow, IconBrandWechat, IconBrandWeibo, IconBrandWhatsapp, IconBrandWindows, IconBrandWindy, IconBrandWish, IconBrandWix, IconBrandWordpress, IconBrandXbox, IconBrandXing, IconBrandYahoo, IconBrandYatse, IconBrandYcombinator, IconBrandYoutube, IconBrandYoutubeKids, IconBrandZalando, IconBrandZapier, IconBrandZeit, IconBrandZhihu, IconBrandZoom, IconBrandZulip, IconBrandZwift, IconBread, IconBreadOff, IconBriefcase, IconBriefcaseOff, IconBrightness, IconBrightness2, IconBrightnessDown, IconBrightnessHalf, IconBrightnessOff, IconBrightnessUp, IconBroadcast, IconBroadcastOff, IconBrowser, IconBrowserCheck, IconBrowserOff, IconBrowserPlus, IconBrowserX, IconBrush, IconBrushOff, IconBucket, IconBucketDroplet, IconBucketOff, IconBug, IconBugOff, IconBuilding, IconBuildingArch, IconBuildingBank, IconBuildingBridge, IconBuildingBridge2, IconBuildingBroadcastTower, IconBuildingCarousel, IconBuildingCastle, IconBuildingChurch, IconBuildingCircus, IconBuildingCommunity, IconBuildingCottage, IconBuildingEstate, IconBuildingFactory, IconBuildingFactory2, IconBuildingFortress, IconBuildingHospital, IconBuildingLighthouse, IconBuildingMonument, IconBuildingPavilon, IconBuildingSkyscraper, IconBuildingStadium, IconBuildingStore, IconBuildingTunnel, IconBuildingWarehouse, IconBuildingWindTurbine, IconBulbOff, IconBulldozer, IconBus, IconBusOff, IconBusStop, IconBusinessplan, IconButterfly, IconCSharp, IconCactus, IconCactusOff, IconCake, IconCakeOff, IconCalculator, IconCalculatorOff, IconCalendar, IconCalendarDue, IconCalendarEvent, IconCalendarMinus, IconCalendarOff, IconCalendarPlus, IconCalendarStats, IconCalendarTime, IconCamera, IconCameraMinus, IconCameraOff, IconCameraPlus, IconCameraRotate, IconCameraSelfie, IconCampfire, IconCandle, IconCandy, IconCandyOff, IconCane, IconCannabis, IconCapture, IconCaptureOff, IconCar, IconCarCrane, IconCarCrash, IconCarOff, IconCarTurbine, IconCaravan, IconCardboards, IconCardboardsOff, IconCards, IconCaretDown, IconCaretLeft, IconCaretRight, IconCaretUp, IconCarouselHorizontal, IconCarouselVertical, IconCarrot, IconCarrotOff, IconCash, IconCashBanknote, IconCashBanknoteOff, IconCashOff, IconCast, IconCastOff, IconCat, IconCategory, IconCategory2, IconCe, IconCeOff, IconCell, IconCellSignal1, IconCellSignal2, IconCellSignal3, IconCellSignal4, IconCellSignal5, IconCellSignalOff, IconCertificate, IconCertificate2, IconCertificate2Off, IconCertificateOff, IconChairDirector, IconChalkboard, IconChalkboardOff, IconChargingPile, IconChartArcs, IconChartArcs3, IconChartArea, IconChartAreaLine, IconChartArrows, IconChartArrowsVertical, IconChartBar, IconChartBarOff, IconChartBubble, IconChartCandle, IconChartCircles, IconChartDonut, IconChartDonut2, IconChartDonut3, IconChartDonut4, IconChartDots, IconChartDots2, IconChartDots3, IconChartGridDots, IconChartHistogram, IconChartInfographic, IconChartLine, IconChartPie, IconChartPie2, IconChartPie3, IconChartPie4, IconChartPieOff, IconChartPpf, IconChartRadar, IconChartSankey, IconChartTreemap, IconCheck, IconCheckbox, IconChecklist, IconChecks, IconCheckupList, IconCheese, IconChefHat, IconChefHatOff, IconCherry, IconChess, IconChessBishop, IconChessKing, IconChessKnight, IconChessQueen, IconChessRook, IconChevronDown, IconChevronDownLeft, IconChevronDownRight, IconChevronLeft, IconChevronRight, IconChevronUpLeft, IconChevronUpRight, IconChevronsDown, IconChevronsDownLeft, IconChevronsDownRight, IconChevronsLeft, IconChevronsRight, IconChevronsUp, IconChevronsUpLeft, IconChevronsUpRight, IconChisel, IconChristmasTree, IconChristmasTreeOff, IconCircle, IconCircleCaretDown, IconCircleCaretLeft, IconCircleCaretRight, IconCircleCaretUp, IconCircleCheck, IconCircleChevronDown, IconCircleChevronLeft, IconCircleChevronRight, IconCircleChevronUp, IconCircleChevronsDown, IconCircleChevronsLeft, IconCircleChevronsRight, IconCircleChevronsUp, IconCircleDashed, IconCircleDot, IconCircleDotted, IconCircleHalf, IconCircleHalf2, IconCircleHalfVertical, IconCircleKey, IconCircleLetterA, IconCircleLetterB, IconCircleLetterC, IconCircleLetterD, IconCircleLetterE, IconCircleLetterF, IconCircleLetterG, IconCircleLetterH, IconCircleLetterI, IconCircleLetterJ, IconCircleLetterK, IconCircleLetterL, IconCircleLetterM, IconCircleLetterN, IconCircleLetterO, IconCircleLetterP, IconCircleLetterQ, IconCircleLetterR, IconCircleLetterS, IconCircleLetterT, IconCircleLetterU, IconCircleLetterV, IconCircleLetterW, IconCircleLetterX, IconCircleLetterY, IconCircleLetterZ, IconCircleMinus, IconCircleNumber0, IconCircleNumber1, IconCircleNumber2, IconCircleNumber3, IconCircleNumber4, IconCircleNumber5, IconCircleNumber6, IconCircleNumber7, IconCircleNumber8, IconCircleNumber9, IconCircleOff, IconCirclePlus, IconCircleRectangle, IconCircleRectangleOff, IconCircleSquare, IconCircleTriangle, IconCircleX, IconCircles, IconCirclesRelation, IconCircuitAmmeter, IconCircuitBattery, IconCircuitBulb, IconCircuitCapacitor, IconCircuitCapacitorPolarized, IconCircuitCell, IconCircuitCellPlus, IconCircuitChangeover, IconCircuitDiode, IconCircuitDiodeZener, IconCircuitGround, IconCircuitGroundDigital, IconCircuitInductor, IconCircuitMotor, IconCircuitPushbutton, IconCircuitResistor, IconCircuitSwitchClosed, IconCircuitSwitchOpen, IconCircuitVoltmeter, IconClearAll, IconClearFormatting, IconClick, IconClipboard, IconClipboardCheck, IconClipboardCopy, IconClipboardData, IconClipboardHeart, IconClipboardList, IconClipboardOff, IconClipboardPlus, IconClipboardText, IconClipboardTypography, IconClipboardX, IconClock, IconClock2, IconClockCancel, IconClockEdit, IconClockHour1, IconClockHour10, IconClockHour11, IconClockHour12, IconClockHour2, IconClockHour3, IconClockHour4, IconClockHour5, IconClockHour6, IconClockHour7, IconClockHour8, IconClockHour9, IconClockOff, IconClockPause, IconClockPlay, IconClockRecord, IconClockStop, IconClothesRack, IconClothesRackOff, IconCloud, IconCloudComputing, IconCloudDataConnection, IconCloudDownload, IconCloudFog, IconCloudLock, IconCloudLockOpen, IconCloudOff, IconCloudRain, IconCloudSnow, IconCloudStorm, IconCloudUpload, IconClover, IconClover2, IconClubs, IconCode, IconCodeAsterix, IconCodeCircle, IconCodeCircle2, IconCodeDots, IconCodeMinus, IconCodeOff, IconCodePlus, IconCoffee, IconCoffeeOff, IconCoffin, IconCoin, IconCoinBitcoin, IconCoinEuro, IconCoinMonero, IconCoinOff, IconCoinPound, IconCoinRupee, IconCoinYen, IconCoinYuan, IconCoins, IconColorFilter, IconColorPicker, IconColorPickerOff, IconColorSwatch, IconColorSwatchOff, IconColumnInsertLeft, IconColumnInsertRight, IconColumns, IconColumnsOff, IconComet, IconCommand, IconCommandOff, IconCompass, IconCompassOff, IconComponents, IconComponentsOff, IconCone, IconCone2, IconConeOff, IconConfetti, IconConfettiOff, IconConfucius, IconContainer, IconContainerOff, IconContrast, IconContrast2, IconContrast2Off, IconContrastOff, IconCooker, IconCookie, IconCookieMan, IconCookieOff, IconCopy, IconCopyOff, IconCopyleft, IconCopyleftOff, IconCopyright, IconCopyrightOff, IconCornerDownLeft, IconCornerDownLeftDouble, IconCornerDownRight, IconCornerDownRightDouble, IconCornerLeftDown, IconCornerLeftDownDouble, IconCornerLeftUp, IconCornerLeftUpDouble, IconCornerRightDown, IconCornerRightDownDouble, IconCornerRightUp, IconCornerRightUpDouble, IconCornerUpLeft, IconCornerUpLeftDouble, IconCornerUpRight, IconCornerUpRightDouble, IconCpu, IconCpu2, IconCpuOff, IconCrane, IconCraneOff, IconCreativeCommons, IconCreativeCommonsBy, IconCreativeCommonsNc, IconCreativeCommonsNd, IconCreativeCommonsOff, IconCreativeCommonsSa, IconCreativeCommonsZero, IconCreditCard, IconCreditCardOff, IconCricket, IconCrop, IconCross, IconCrossOff, IconCrosshair, IconCrown, IconCrownOff, IconCrutches, IconCrutchesOff, IconCrystalBall, IconCubeSend, IconCubeUnfolded, IconCup, IconCupOff, IconCurling, IconCurlyLoop, IconCurrency, IconCurrencyAfghani, IconCurrencyBahraini, IconCurrencyBaht, IconCurrencyBitcoin, IconCurrencyCent, IconCurrencyDinar, IconCurrencyDirham, IconCurrencyDogecoin, IconCurrencyDollar, IconCurrencyDollarAustralian, IconCurrencyDollarBrunei, IconCurrencyDollarCanadian, IconCurrencyDollarGuyanese, IconCurrencyDollarOff, IconCurrencyDollarSingapore, IconCurrencyDollarZimbabwean, IconCurrencyDong, IconCurrencyDram, IconCurrencyEthereum, IconCurrencyEuro, IconCurrencyEuroOff, IconCurrencyForint, IconCurrencyFrank, IconCurrencyGuarani, IconCurrencyHryvnia, IconCurrencyKip, IconCurrencyKroneCzech, IconCurrencyKroneDanish, IconCurrencyKroneSwedish, IconCurrencyLari, IconCurrencyLeu, IconCurrencyLira, IconCurrencyLitecoin, IconCurrencyLyd, IconCurrencyManat, IconCurrencyMonero, IconCurrencyNaira, IconCurrencyOff, IconCurrencyPaanga, IconCurrencyPeso, IconCurrencyPound, IconCurrencyPoundOff, IconCurrencyQuetzal, IconCurrencyReal, IconCurrencyRenminbi, IconCurrencyRipple, IconCurrencyRiyal, IconCurrencyRubel, IconCurrencyRufiyaa, IconCurrencyRupee, IconCurrencyRupeeNepalese, IconCurrencyShekel, IconCurrencySolana, IconCurrencySom, IconCurrencyTaka, IconCurrencyTenge, IconCurrencyTugrik, IconCurrencyWon, IconCurrencyYen, IconCurrencyYenOff, IconCurrencyYuan, IconCurrencyZloty, IconCurrentLocation, IconCurrentLocationOff, IconCursorOff, IconCursorText, IconCut, IconCylinder, IconDashboard, IconDashboardOff, IconDatabase, IconDatabaseExport, IconDatabaseImport, IconDatabaseOff, IconDeer, IconDelta, IconDental, IconDentalBroken, IconDentalOff, IconDetails, IconDetailsOff, IconDeviceAirpods, IconDeviceAirpodsCase, IconDeviceAnalytics, IconDeviceAudioTape, IconDeviceCameraPhone, IconDeviceCctv, IconDeviceCctvOff, IconDeviceComputerCamera, IconDeviceComputerCameraOff, IconDeviceDesktop, IconDeviceDesktopAnalytics, IconDeviceDesktopOff, IconDeviceFloppy, IconDeviceGamepad, IconDeviceGamepad2, IconDeviceHeartMonitor, IconDeviceIpad, IconDeviceIpadHorizontal, IconDeviceLandlinePhone, IconDeviceLaptop, IconDeviceLaptopOff, IconDeviceMobile, IconDeviceMobileCharging, IconDeviceMobileMessage, IconDeviceMobileOff, IconDeviceMobileRotated, IconDeviceMobileVibration, IconDeviceNintendo, IconDeviceNintendoOff, IconDeviceSdCard, IconDeviceSim, IconDeviceSim1, IconDeviceSim2, IconDeviceSim3, IconDeviceSpeaker, IconDeviceSpeakerOff, IconDeviceTablet, IconDeviceTabletOff, IconDeviceTv, IconDeviceTvOff, IconDeviceTvOld, IconDeviceWatch, IconDeviceWatchOff, IconDeviceWatchStats, IconDeviceWatchStats2, IconDevices, IconDevices2, IconDevicesOff, IconDevicesPc, IconDevicesPcOff, IconDialpad, IconDialpadOff, IconDiamond, IconDiamondOff, IconDiamonds, IconDice, IconDice1, IconDice2, IconDice3, IconDice4, IconDice5, IconDice6, IconDimensions, IconDirection, IconDirectionHorizontal, IconDirectionSign, IconDirectionSignOff, IconDirections, IconDirectionsOff, IconDisabled, IconDisabled2, IconDisabledOff, IconDisc, IconDiscGolf, IconDiscOff, IconDiscount, IconDiscount2, IconDiscount2Off, IconDiscountCheck, IconDiscountOff, IconDivide, IconDna, IconDna2, IconDna2Off, IconDnaOff, IconDog, IconDogBowl, IconDoor, IconDoorEnter, IconDoorExit, IconDoorOff, IconDots, IconDotsCircleHorizontal, IconDotsDiagonal, IconDotsDiagonal2, IconDotsVertical, IconDownload, IconDownloadOff, IconDragDrop, IconDragDrop2, IconDrone, IconDroneOff, IconDropCircle, IconDroplet, IconDropletFilled, IconDropletFilled2, IconDropletHalf, IconDropletHalf2, IconDropletOff, IconEPassport, IconEar, IconEarOff, IconEaseIn, IconEaseInControlPoint, IconEaseInOut, IconEaseInOutControlPoints, IconEaseOut, IconEaseOutControlPoint, IconEdit, IconEditCircle, IconEditCircleOff, IconEditOff, IconEgg, IconEggCracked, IconEggFried, IconEggOff, IconEggs, IconElevator, IconElevatorOff, IconEmergencyBed, IconEmpathize, IconEmpathizeOff, IconEmphasis, IconEngine, IconEngineOff, IconEqual, IconEqualDouble, IconEqualNot, IconEraser, IconEraserOff, IconError404, IconError404Off, IconExchange, IconExchangeOff, IconExclamationCircle, IconExclamationMark, IconExclamationMarkOff, IconExplicit, IconExplicitOff, IconExposure, IconExposure0, IconExposureMinus1, IconExposureMinus2, IconExposureOff, IconExposurePlus1, IconExposurePlus2, IconExternalLink, IconExternalLinkOff, IconEye, IconEyeCheck, IconEyeOff, IconEyeTable, IconEyeglass, IconEyeglass2, IconEyeglassOff, IconFaceId, IconFaceIdError, IconFaceMask, IconFaceMaskOff, IconFall, IconFeather, IconFeatherOff, IconFence, IconFenceOff, IconFidgetSpinner, IconFile, IconFile3d, IconFileAlert, IconFileAnalytics, IconFileArrowLeft, IconFileArrowRight, IconFileBarcode, IconFileBroken, IconFileCertificate, IconFileChart, IconFileCheck, IconFileCode, IconFileCode2, IconFileDatabase, IconFileDelta, IconFileDescription, IconFileDiff, IconFileDigit, IconFileDislike, IconFileDollar, IconFileDots, IconFileDownload, IconFileEuro, IconFileExport, IconFileFunction, IconFileHorizontal, IconFileImport, IconFileInfinity, IconFileInfo, IconFileInvoice, IconFileLambda, IconFileLike, IconFileMinus, IconFileMusic, IconFileOff, IconFileOrientation, IconFilePencil, IconFilePercent, IconFilePhone, IconFilePlus, IconFilePower, IconFileReport, IconFileRss, IconFileScissors, IconFileSearch, IconFileSettings, IconFileShredder, IconFileSignal, IconFileSpreadsheet, IconFileStack, IconFileStar, IconFileSymlink, IconFileText, IconFileTime, IconFileTypography, IconFileUnknown, IconFileUpload, IconFileVector, IconFileX, IconFileZip, IconFiles, IconFilesOff, IconFilter, IconFilterOff, IconFingerprint, IconFingerprintOff, IconFireHydrant, IconFireHydrantOff, IconFiretruck, IconFirstAidKit, IconFirstAidKitOff, IconFish, IconFishBone, IconFishChristianity, IconFishHook, IconFishHookOff, IconFishOff, IconFlag, IconFlag2, IconFlag2Off, IconFlag3, IconFlagOff, IconFlameOff, IconFlare, IconFlask, IconFlask2, IconFlask2Off, IconFlaskOff, IconFlipFlops, IconFlipHorizontal, IconFlipVertical, IconFloatCenter, IconFloatLeft, IconFloatNone, IconFloatRight, IconFlower, IconFlowerOff, IconFocus, IconFocus2, IconFocusCentered, IconFold, IconFoldDown, IconFoldUp, IconFolder, IconFolderMinus, IconFolderOff, IconFolderPlus, IconFolderX, IconFolders, IconFoldersOff, IconForbid, IconForbid2, IconForklift, IconForms, IconFountain, IconFountainOff, IconFrame, IconFrameOff, IconFreeRights, IconFridge, IconFridgeOff, IconFriends, IconFriendsOff, IconFunction, IconFunctionOff, IconGardenCart, IconGardenCartOff, IconGasStation, IconGasStationOff, IconGauge, IconGaugeOff, IconGavel, IconGenderAgender, IconGenderAndrogyne, IconGenderBigender, IconGenderDemiboy, IconGenderDemigirl, IconGenderEpicene, IconGenderFemale, IconGenderFemme, IconGenderGenderfluid, IconGenderGenderless, IconGenderGenderqueer, IconGenderHermaphrodite, IconGenderIntergender, IconGenderMale, IconGenderNeutrois, IconGenderThird, IconGenderTransgender, IconGenderTrasvesti, IconGeometry, IconGhost, IconGhost2, IconGhostOff, IconGif, IconGift, IconGiftCard, IconGiftOff, IconGitBranch, IconGitBranchDeleted, IconGitCherryPick, IconGitCommit, IconGitCompare, IconGitFork, IconGitMerge, IconGitPullRequest, IconGitPullRequestClosed, IconGitPullRequestDraft, IconGizmo, IconGlass, IconGlassFull, IconGlassOff, IconGlobe, IconGlobeOff, IconGoGame, IconGolf, IconGolfOff, IconGps, IconGradienter, IconGrain, IconGraph, IconGraphOff, IconGrave, IconGrave2, IconGridDots, IconGridPattern, IconGrill, IconGrillFork, IconGrillOff, IconGrillSpatula, IconGripHorizontal, IconGripVertical, IconGrowth, IconGuitarPick, IconH1, IconH2, IconH3, IconH4, IconH5, IconH6, IconHammer, IconHammerOff, IconHandClick, IconHandFinger, IconHandFingerOff, IconHandGrab, IconHandLittleFinger, IconHandMiddleFinger, IconHandMove, IconHandOff, IconHandRingFinger, IconHandRock, IconHandSanitizer, IconHandStop, IconHandThreeFingers, IconHandTwoFingers, IconHanger, IconHanger2, IconHangerOff, IconHash, IconHaze, IconHeading, IconHeadingOff, IconHeadphones, IconHeadphonesOff, IconHeadset, IconHeadsetOff, IconHealthRecognition, IconHeart, IconHeartBroken, IconHeartHandshake, IconHeartMinus, IconHeartOff, IconHeartPlus, IconHeartRateMonitor, IconHeartbeat, IconHearts, IconHeartsOff, IconHelicopter, IconHelicopterLanding, IconHelmet, IconHelmetOff, IconHelp, IconHelpOff, IconHexagon, IconHexagon3d, IconHexagonLetterA, IconHexagonLetterB, IconHexagonLetterC, IconHexagonLetterD, IconHexagonLetterE, IconHexagonLetterF, IconHexagonLetterG, IconHexagonLetterH, IconHexagonLetterI, IconHexagonLetterJ, IconHexagonLetterK, IconHexagonLetterL, IconHexagonLetterM, IconHexagonLetterN, IconHexagonLetterO, IconHexagonLetterP, IconHexagonLetterQ, IconHexagonLetterR, IconHexagonLetterS, IconHexagonLetterT, IconHexagonLetterU, IconHexagonLetterV, IconHexagonLetterW, IconHexagonLetterX, IconHexagonLetterY, IconHexagonLetterZ, IconHexagonNumber0, IconHexagonNumber1, IconHexagonNumber2, IconHexagonNumber3, IconHexagonNumber4, IconHexagonNumber5, IconHexagonNumber6, IconHexagonNumber7, IconHexagonNumber8, IconHexagonNumber9, IconHexagonOff, IconHexagons, IconHexagonsOff, IconHierarchy, IconHierarchy2, IconHierarchy3, IconHierarchyOff, IconHighlight, IconHighlightOff, IconHistory, IconHistoryOff, IconHistoryToggle, IconHome2, IconHomeBolt, IconHomeCancel, IconHomeCheck, IconHomeCog, IconHomeDollar, IconHomeDot, IconHomeDown, IconHomeEco, IconHomeEdit, IconHomeExclamation, IconHomeHand, IconHomeHeart, IconHomeInfinity, IconHomeLink, IconHomeMinus, IconHomeMove, IconHomeOff, IconHomePlus, IconHomeQuestion, IconHomeRibbon, IconHomeSearch, IconHomeShare, IconHomeShield, IconHomeSignal, IconHomeStar, IconHomeStats, IconHomeUp, IconHomeX, IconHorseToy, IconHotelService, IconHourglass, IconHourglassEmpty, IconHourglassHigh, IconHourglassLow, IconHourglassOff, IconIceCream, IconIceCream2, IconIceCreamOff, IconIceSkating, IconIcons, IconIconsOff, IconId, IconIdBadge, IconIdBadge2, IconIdBadgeOff, IconIdOff, IconInbox, IconInboxOff, IconIndentDecrease, IconIndentIncrease, IconInfinity, IconInfinityOff, IconInfoSquare, IconInfoSquareRounded, IconInnerShadowBottom, IconInnerShadowBottomLeft, IconInnerShadowBottomRight, IconInnerShadowLeft, IconInnerShadowRight, IconInnerShadowTop, IconInnerShadowTopLeft, IconInnerShadowTopRight, IconInputSearch, IconIroning1, IconIroning2, IconIroning3, IconIroningOff, IconIroningSteam, IconIroningSteamOff, IconItalic, IconJacket, IconJetpack, IconJewishStar, IconJpg, IconJumpRope, IconKarate, IconKayak, IconKering, IconKey, IconKeyOff, IconKeyboard, IconKeyboardHide, IconKeyboardOff, IconKeyboardShow, IconKeyframe, IconKeyframeAlignCenter, IconKeyframeAlignHorizontal, IconKeyframeAlignVertical, IconKeyframes, IconLadder, IconLadderOff, IconLambda, IconLamp, IconLamp2, IconLampOff, IconLanguage, IconLanguageHiragana, IconLanguageKatakana, IconLanguageOff, IconLasso, IconLassoOff, IconLassoPolygon, IconLayersDifference, IconLayersIntersect, IconLayersIntersect2, IconLayersLinked, IconLayersOff, IconLayersSubtract, IconLayersUnion, IconLayout, IconLayout2, IconLayoutAlignBottom, IconLayoutAlignCenter, IconLayoutAlignLeft, IconLayoutAlignMiddle, IconLayoutAlignRight, IconLayoutAlignTop, IconLayoutBoard, IconLayoutBoardSplit, IconLayoutBottombar, IconLayoutBottombarCollapse, IconLayoutBottombarExpand, IconLayoutCards, IconLayoutCollage, IconLayoutColumns, IconLayoutDashboard, IconLayoutDistributeHorizontal, IconLayoutDistributeVertical, IconLayoutGrid, IconLayoutGridAdd, IconLayoutKanban, IconLayoutList, IconLayoutNavbar, IconLayoutNavbarCollapse, IconLayoutNavbarExpand, IconLayoutOff, IconLayoutRows, IconLayoutSidebar, IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftExpand, IconLayoutSidebarRight, IconLayoutSidebarRightCollapse, IconLayoutSidebarRightExpand, IconLeaf, IconLeafOff, IconLego, IconLegoOff, IconLemon, IconLemon2, IconLetterA, IconLetterB, IconLetterC, IconLetterCase, IconLetterCaseLower, IconLetterCaseToggle, IconLetterCaseUpper, IconLetterD, IconLetterE, IconLetterF, IconLetterG, IconLetterH, IconLetterI, IconLetterJ, IconLetterK, IconLetterL, IconLetterM, IconLetterN, IconLetterO, IconLetterP, IconLetterQ, IconLetterR, IconLetterS, IconLetterSpacing, IconLetterT, IconLetterU, IconLetterV, IconLetterW, IconLetterX, IconLetterY, IconLetterZ, IconLicense, IconLicenseOff, IconLifebuoy, IconLifebuoyOff, IconLine, IconLineDashed, IconLineDotted, IconLineHeight, IconLink, IconLinkOff, IconListCheck, IconListDetails, IconListNumbers, IconListSearch, IconLivePhoto, IconLivePhotoOff, IconLiveView, IconLoader, IconLoader2, IconLoader3, IconLoaderQuarter, IconLocation, IconLocationBroken, IconLocationOff, IconLock, IconLockAccess, IconLockAccessOff, IconLockOff, IconLockOpen, IconLockOpenOff, IconLockSquare, IconLockSquareRounded, IconLogicAnd, IconLogicBuffer, IconLogicNand, IconLogicNor, IconLogicNot, IconLogicOr, IconLogicXnor, IconLogicXor, IconLogin, IconLogout, IconLollipop, IconLollipopOff, IconLuggage, IconLuggageOff, IconLungs, IconLungsOff, IconMacro, IconMacroOff, IconMagnet, IconMagnetOff, IconMail, IconMailFast, IconMailForward, IconMailOff, IconMailOpened, IconMailbox, IconMailboxOff, IconMan, IconManualGearbox, IconMap, IconMap2, IconMapOff, IconMapPin, IconMapPinOff, IconMapPins, IconMapSearch, IconMarkdown, IconMarkdownOff, IconMarquee, IconMarquee2, IconMarqueeOff, IconMars, IconMask, IconMaskOff, IconMasksTheater, IconMasksTheaterOff, IconMassage, IconMatchstick, IconMath, IconMath1Divide2, IconMath1Divide3, IconMathAvg, IconMathEqualGreater, IconMathEqualLower, IconMathFunction, IconMathFunctionOff, IconMathFunctionY, IconMathGreater, IconMathIntegral, IconMathIntegralX, IconMathIntegrals, IconMathLower, IconMathMax, IconMathMin, IconMathNot, IconMathOff, IconMathPi, IconMathPiDivide2, IconMathSymbols, IconMathXDivide2, IconMathXDivideY, IconMathXDivideY2, IconMathXMinusX, IconMathXMinusY, IconMathXPlusX, IconMathXPlusY, IconMathXy, IconMathYMinusY, IconMathYPlusY, IconMaximize, IconMaximizeOff, IconMeat, IconMeatOff, IconMedal, IconMedal2, IconMedicalCross, IconMedicalCrossOff, IconMedicineSyrup, IconMeeple, IconMenorah, IconMenu, IconMenu2, IconMenuOrder, IconMessage, IconMessage2, IconMessage2Code, IconMessage2Off, IconMessage2Share, IconMessageChatbot, IconMessageCircle, IconMessageCircle2, IconMessageCircleOff, IconMessageCode, IconMessageDots, IconMessageForward, IconMessageLanguage, IconMessageOff, IconMessagePlus, IconMessageReport, IconMessageShare, IconMessages, IconMessagesOff, IconMeteor, IconMeteorOff, IconMickey, IconMicrophone, IconMicrophone2, IconMicrophone2Off, IconMicrophoneOff, IconMicroscope, IconMicroscopeOff, IconMicrowave, IconMicrowaveOff, IconMilitaryAward, IconMilitaryRank, IconMilk, IconMilkOff, IconMilkshake, IconMinimize, IconMinus, IconMinusVertical, IconMist, IconMistOff, IconMoneybag, IconMoodAngry, IconMoodAnnoyed, IconMoodAnnoyed2, IconMoodBoy, IconMoodConfuzed, IconMoodCrazyHappy, IconMoodCry, IconMoodEmpty, IconMoodHappy, IconMoodKid, IconMoodLookLeft, IconMoodLookRight, IconMoodNerd, IconMoodNervous, IconMoodNeutral, IconMoodOff, IconMoodSad, IconMoodSad2, IconMoodSadDizzy, IconMoodSadSquint, IconMoodSick, IconMoodSilence, IconMoodSing, IconMoodSmile, IconMoodSmileBeam, IconMoodSmileDizzy, IconMoodSuprised, IconMoodTongue, IconMoodTongueWink, IconMoodTongueWink2, IconMoodUnamused, IconMoodWink, IconMoodWink2, IconMoodWrrr, IconMoodXd, IconMoon, IconMoon2, IconMoonOff, IconMoped, IconMotorbike, IconMountain, IconMountainOff, IconMouse, IconMouse2, IconMouseOff, IconMoustache, IconMovie, IconMovieOff, IconMug, IconMugOff, IconMultiplier05x, IconMultiplier15x, IconMultiplier1x, IconMultiplier2x, IconMushroom, IconMushroomOff, IconMusic, IconMusicOff, IconNavigation, IconNavigationOff, IconNeedle, IconNeedleThread, IconNetwork, IconNetworkOff, IconNewSection, IconNews, IconNewsOff, IconNfc, IconNfcOff, IconNoCopyright, IconNoCreativeCommons, IconNoDerivatives, IconNorthStar, IconNote, IconNoteOff, IconNotebook, IconNotebookOff, IconNotes, IconNotesOff, IconNotification, IconNotificationOff, IconNumber, IconNumber0, IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconNumber5, IconNumber6, IconNumber7, IconNumber8, IconNumber9, IconNumbers, IconNurse, IconOctagon, IconOctagonOff, IconOld, IconOlympics, IconOlympicsOff, IconOm, IconOmega, IconOutbound, IconOutlet, IconOval, IconOvalVertical, IconOverline, IconPackage, IconPackageOff, IconPackages, IconPackgeExport, IconPackgeImport, IconPacman, IconPageBreak, IconPaint, IconPaintOff, IconPalette, IconPaletteOff, IconPanoramaHorizontal, IconPanoramaHorizontalOff, IconPanoramaVertical, IconPanoramaVerticalOff, IconPaperBag, IconPaperBagOff, IconPaperclip, IconParachute, IconParachuteOff, IconParentheses, IconParenthesesOff, IconParking, IconParkingOff, IconPassword, IconPaw, IconPawOff, IconPeace, IconPencilMinus, IconPencilOff, IconPencilPlus, IconPennant, IconPennant2, IconPennantOff, IconPentagon, IconPentagonOff, IconPentagram, IconPepper, IconPepperOff, IconPercentage, IconPerfume, IconPerspective, IconPerspectiveOff, IconPhone, IconPhoneCall, IconPhoneCalling, IconPhoneCheck, IconPhoneIncoming, IconPhoneOff, IconPhoneOutgoing, IconPhonePause, IconPhonePlus, IconPhoneX, IconPhoto, IconPhotoCancel, IconPhotoCheck, IconPhotoDown, IconPhotoEdit, IconPhotoHeart, IconPhotoMinus, IconPhotoOff, IconPhotoPlus, IconPhotoSearch, IconPhotoShield, IconPhotoStar, IconPhotoUp, IconPhotoX, IconPhysotherapist, IconPictureInPicture, IconPictureInPictureOff, IconPictureInPictureOn, IconPictureInPictureTop, IconPig, IconPigMoney, IconPigOff, IconPilcrow, IconPill, IconPillOff, IconPills, IconPin, IconPingPong, IconPinned, IconPinnedOff, IconPizza, IconPizzaOff, IconPlaceholder, IconPlane, IconPlaneArrival, IconPlaneDeparture, IconPlaneInflight, IconPlaneOff, IconPlaneTilt, IconPlanet, IconPlanetOff, IconPlant, IconPlant2, IconPlant2Off, IconPlantOff, IconPlayCard, IconPlayCardOff, IconPlayerEject, IconPlayerPause, IconPlayerPlay, IconPlayerRecord, IconPlayerSkipBack, IconPlayerSkipForward, IconPlayerStop, IconPlayerTrackNext, IconPlayerTrackPrev, IconPlaylist, IconPlaylistAdd, IconPlaylistOff, IconPlaylistX, IconPlaystationCircle, IconPlaystationSquare, IconPlaystationTriangle, IconPlaystationX, IconPlug, IconPlugConnected, IconPlugConnectedX, IconPlugOff, IconPlugX, IconPlus, IconPng, IconPodium, IconPodiumOff, IconPoint, IconPointOff, IconPointer, IconPokeball, IconPokeballOff, IconPokerChip, IconPolaroid, IconPolygon, IconPolygonOff, IconPoo, IconPool, IconPoolOff, IconPower, IconPray, IconPremiumRights, IconPrescription, IconPresentation, IconPresentationAnalytics, IconPresentationOff, IconPrinter, IconPrinterOff, IconPrison, IconPrompt, IconPropeller, IconPropellerOff, IconPumpkinScary, IconPuzzle, IconPuzzle2, IconPuzzleOff, IconPyramid, IconPyramidOff, IconQrcode, IconQrcodeOff, IconQuestionCircle, IconQuestionMark, IconQuote, IconQuoteOff, IconRadar, IconRadar2, IconRadarOff, IconRadio, IconRadioOff, IconRadioactive, IconRadioactiveOff, IconRadiusBottomLeft, IconRadiusBottomRight, IconRadiusTopLeft, IconRadiusTopRight, IconRainbow, IconRainbowOff, IconRating12Plus, IconRating14Plus, IconRating16Plus, IconRating18Plus, IconRating21Plus, IconRazor, IconRazorElectric, IconReceipt, IconReceipt2, IconReceiptOff, IconReceiptRefund, IconReceiptTax, IconRecharging, IconRecordMail, IconRecordMailOff, IconRectangle, IconRectangleVertical, IconRecycle, IconRecycleOff, IconRefresh, IconRefreshAlert, IconRefreshDot, IconRefreshOff, IconRegex, IconRegexOff, IconRegistered, IconRelationManyToMany, IconRelationOneToMany, IconRelationOneToOne, IconReload, IconRepeat, IconRepeatOff, IconRepeatOnce, IconReplace, IconReplaceOff, IconReport, IconReportAnalytics, IconReportMedical, IconReportMoney, IconReportOff, IconReportSearch, IconResize, IconRibbonHealth, IconRipple, IconRippleOff, IconRoad, IconRoadOff, IconRoadSign, IconRobot, IconRobotOff, IconRocket, IconRocketOff, IconRollerSkating, IconRollercoaster, IconRollercoasterOff, IconRosette, IconRosetteNumber0, IconRosetteNumber1, IconRosetteNumber2, IconRosetteNumber3, IconRosetteNumber4, IconRosetteNumber5, IconRosetteNumber6, IconRosetteNumber7, IconRosetteNumber8, IconRosetteNumber9, IconRotate, IconRotate2, IconRotate360, IconRotateClockwise, IconRotateClockwise2, IconRotateDot, IconRotateRectangle, IconRoute, IconRoute2, IconRouteOff, IconRouter, IconRouterOff, IconRowInsertBottom, IconRowInsertTop, IconRss, IconRubberStamp, IconRubberStampOff, IconRuler, IconRuler2, IconRuler2Off, IconRuler3, IconRulerMeasure, IconRulerOff, IconRun, IconSTurnDown, IconSTurnLeft, IconSTurnRight, IconSTurnUp, IconSailboat, IconSailboat2, IconSailboatOff, IconSalad, IconSalt, IconSatellite, IconSatelliteOff, IconSausage, IconScale, IconScaleOff, IconScaleOutline, IconScaleOutlineOff, IconScan, IconScanEye, IconSchema, IconSchemaOff, IconSchool, IconSchoolBell, IconSchoolOff, IconScissors, IconScissorsOff, IconScooter, IconScooterElectric, IconScreenShare, IconScreenShareOff, IconScreenshot, IconScribble, IconScribbleOff, IconScript, IconScriptMinus, IconScriptPlus, IconScriptX, IconScubaMask, IconScubaMaskOff, IconSdk, IconSearch, IconSearchOff, IconSection, IconSectionSign, IconSeeding, IconSeedingOff, IconSelect, IconSelector, IconSend, IconSendOff, IconSeo, IconSeparator, IconSeparatorHorizontal, IconSeparatorVertical, IconServer, IconServer2, IconServerBolt, IconServerCog, IconServerOff, IconServicemark, IconSettings, IconSettings2, IconSettingsAutomation, IconSettingsOff, IconShadow, IconShadowOff, IconShape, IconShape2, IconShape3, IconShapeOff, IconShare, IconShareOff, IconShield, IconShieldCheck, IconShieldCheckered, IconShieldChevron, IconShieldHalf, IconShieldHalfFilled, IconShieldLock, IconShieldOff, IconShieldX, IconShip, IconShipOff, IconShirt, IconShirtOff, IconShirtSport, IconShoe, IconShoeOff, IconShoppingBag, IconShoppingCart, IconShoppingCartDiscount, IconShoppingCartOff, IconShoppingCartPlus, IconShoppingCartX, IconShovel, IconShredder, IconSignLeft, IconSignRight, IconSignal3g, IconSignal4g, IconSignal4gPlus, IconSignal5g, IconSignature, IconSignatureOff, IconSitemap, IconSitemapOff, IconSkateboard, IconSkateboardOff, IconSkull, IconSlash, IconSlashes, IconSleigh, IconSlice, IconSlideshow, IconSmartHome, IconSmartHomeOff, IconSmoking, IconSmokingNo, IconSnowflake, IconSnowflakeOff, IconSnowman, IconSoccerField, IconSocial, IconSocialOff, IconSock, IconSofa, IconSofaOff, IconSort09, IconSort90, IconSortAZ, IconSortAscending, IconSortAscending2, IconSortAscendingLetters, IconSortAscendingNumbers, IconSortDescending, IconSortDescending2, IconSortDescendingLetters, IconSortDescendingNumbers, IconSortZA, IconSos, IconSoup, IconSoupOff, IconSourceCode, IconSpace, IconSpaceOff, IconSpacingHorizontal, IconSpacingVertical, IconSpade, IconSpeakerphone, IconSpeedboat, IconSpider, IconSpiral, IconSpiralOff, IconSportBillard, IconSpray, IconSpy, IconSpyOff, IconSquare, IconSquareArrowDown, IconSquareArrowLeft, IconSquareArrowRight, IconSquareArrowUp, IconSquareAsterisk, IconSquareCheck, IconSquareChevronDown, IconSquareChevronLeft, IconSquareChevronRight, IconSquareChevronUp, IconSquareChevronsDown, IconSquareChevronsLeft, IconSquareChevronsRight, IconSquareChevronsUp, IconSquareDot, IconSquareF0, IconSquareF1, IconSquareF2, IconSquareF3, IconSquareF4, IconSquareF5, IconSquareF6, IconSquareF7, IconSquareF8, IconSquareF9, IconSquareForbid, IconSquareForbid2, IconSquareHalf, IconSquareKey, IconSquareLetterA, IconSquareLetterB, IconSquareLetterC, IconSquareLetterD, IconSquareLetterE, IconSquareLetterF, IconSquareLetterG, IconSquareLetterH, IconSquareLetterI, IconSquareLetterJ, IconSquareLetterK, IconSquareLetterL, IconSquareLetterM, IconSquareLetterN, IconSquareLetterO, IconSquareLetterP, IconSquareLetterQ, IconSquareLetterR, IconSquareLetterS, IconSquareLetterT, IconSquareLetterU, IconSquareLetterV, IconSquareLetterW, IconSquareLetterX, IconSquareLetterY, IconSquareLetterZ, IconSquareMinus, IconSquareNumber0, IconSquareNumber1, IconSquareNumber2, IconSquareNumber3, IconSquareNumber4, IconSquareNumber5, IconSquareNumber6, IconSquareNumber7, IconSquareNumber8, IconSquareNumber9, IconSquareOff, IconSquarePlus, IconSquareRoot, IconSquareRoot2, IconSquareRotated, IconSquareRotatedForbid, IconSquareRotatedForbid2, IconSquareRotatedOff, IconSquareRounded, IconSquareRoundedArrowDown, IconSquareRoundedArrowLeft, IconSquareRoundedArrowRight, IconSquareRoundedArrowUp, IconSquareRoundedCheck, IconSquareRoundedChevronDown, IconSquareRoundedChevronLeft, IconSquareRoundedChevronRight, IconSquareRoundedChevronUp, IconSquareRoundedChevronsDown, IconSquareRoundedChevronsLeft, IconSquareRoundedChevronsRight, IconSquareRoundedChevronsUp, IconSquareRoundedLetterA, IconSquareRoundedLetterB, IconSquareRoundedLetterC, IconSquareRoundedLetterD, IconSquareRoundedLetterE, IconSquareRoundedLetterF, IconSquareRoundedLetterG, IconSquareRoundedLetterH, IconSquareRoundedLetterI, IconSquareRoundedLetterJ, IconSquareRoundedLetterK, IconSquareRoundedLetterL, IconSquareRoundedLetterM, IconSquareRoundedLetterN, IconSquareRoundedLetterO, IconSquareRoundedLetterP, IconSquareRoundedLetterQ, IconSquareRoundedLetterR, IconSquareRoundedLetterS, IconSquareRoundedLetterT, IconSquareRoundedLetterU, IconSquareRoundedLetterV, IconSquareRoundedLetterW, IconSquareRoundedLetterX, IconSquareRoundedLetterY, IconSquareRoundedLetterZ, IconSquareRoundedMinus, IconSquareRoundedNumber0, IconSquareRoundedNumber1, IconSquareRoundedNumber2, IconSquareRoundedNumber3, IconSquareRoundedNumber4, IconSquareRoundedNumber5, IconSquareRoundedNumber6, IconSquareRoundedNumber7, IconSquareRoundedNumber8, IconSquareRoundedNumber9, IconSquareRoundedPlus, IconSquareRoundedX, IconSquareToggle, IconSquareToggleHorizontal, IconSquareX, IconSquaresDiagonal, IconSquaresFilled, IconStack, IconStack2, IconStack3, IconStackPop, IconStackPush, IconStairs, IconStairsDown, IconStairsUp, IconStar, IconStarHalf, IconStarOff, IconStars, IconStarsOff, IconStatusChange, IconSteam, IconSteeringWheel, IconSteeringWheelOff, IconStepInto, IconStepOut, IconStereoGlasses, IconStethoscope, IconStethoscopeOff, IconSticker, IconStorm, IconStormOff, IconStretching, IconStrikethrough, IconSubmarine, IconSubscript, IconSubtask, IconSum, IconSumOff, IconSunHigh, IconSunLow, IconSunMoon, IconSunOff, IconSunWind, IconSunglasses, IconSunrise, IconSunset, IconSunset2, IconSuperscript, IconSvg, IconSwimming, IconSwipe, IconSwitch, IconSwitch2, IconSwitch3, IconSwitchHorizontal, IconSwitchVertical, IconSword, IconSwordOff, IconSwords, IconTable, IconTableAlias, IconTableExport, IconTableImport, IconTableOff, IconTableOptions, IconTableShortcut, IconTag, IconTagOff, IconTags, IconTagsOff, IconTallymark1, IconTallymark2, IconTallymark3, IconTallymark4, IconTallymarks, IconTank, IconTarget, IconTargetArrow, IconTargetOff, IconTeapot, IconTelescope, IconTelescopeOff, IconTemperature, IconTemperatureCelsius, IconTemperatureFahrenheit, IconTemperatureMinus, IconTemperatureOff, IconTemperaturePlus, IconTemplate, IconTemplateOff, IconTent, IconTentOff, IconTerminal, IconTerminal2, IconTestPipe, IconTestPipe2, IconTestPipeOff, IconTex, IconTextCaption, IconTextColor, IconTextDecrease, IconTextDirectionLtr, IconTextDirectionRtl, IconTextIncrease, IconTextOrientation, IconTextPlus, IconTextRecognition, IconTextResize, IconTextSize, IconTextSpellcheck, IconTextWrap, IconTextWrapDisabled, IconTexture, IconThermometer, IconThumbDown, IconThumbDownOff, IconThumbUp, IconThumbUpOff, IconTicTac, IconTicket, IconTicketOff, IconTie, IconTilde, IconTiltShift, IconTiltShiftOff, IconTimeline, IconTimelineEvent, IconTimelineEventExclamation, IconTimelineEventMinus, IconTimelineEventPlus, IconTimelineEventText, IconTimelineEventX, IconTir, IconToggleLeft, IconToggleRight, IconToiletPaper, IconToiletPaperOff, IconTool, IconTools, IconToolsKitchen, IconToolsKitchen2, IconToolsKitchen2Off, IconToolsKitchenOff, IconToolsOff, IconTooltip, IconTopologyBus, IconTopologyComplex, IconTopologyFull, IconTopologyFullHierarchy, IconTopologyRing, IconTopologyRing2, IconTopologyRing3, IconTopologyStar, IconTopologyStar2, IconTopologyStar3, IconTopologyStarRing, IconTopologyStarRing2, IconTopologyStarRing3, IconTorii, IconTornado, IconTournament, IconTower, IconTowerOff, IconTrack, IconTractor, IconTrademark, IconTrafficCone, IconTrafficConeOff, IconTrafficLights, IconTrafficLightsOff, IconTrain, IconTransferIn, IconTransferOut, IconTransform, IconTransitionBottom, IconTransitionLeft, IconTransitionRight, IconTransitionTop, IconTrash, IconTrashOff, IconTrashX, IconTree, IconTrees, IconTrekking, IconTrendingDown, IconTrendingDown2, IconTrendingDown3, IconTrendingUp, IconTrendingUp2, IconTrendingUp3, IconTriangle, IconTriangleInverted, IconTriangleOff, IconTriangleSquareCircle, IconTriangles, IconTrident, IconTrolley, IconTrophy, IconTrophyOff, IconTrowel, IconTruck, IconTruckDelivery, IconTruckLoading, IconTruckOff, IconTruckReturn, IconTxt, IconTypography, IconTypographyOff, IconUfOff, IconUfo, IconUmbrella, IconUmbrellaOff, IconUnderline, IconUnlink, IconUpload, IconUrgent, IconUsb, IconUser, IconUserCheck, IconUserCircle, IconUserExclamation, IconUserMinus, IconUserOff, IconUserPlus, IconUserSearch, IconUserX, IconUsers, IconUvIndex, IconUxCircle, IconVaccine, IconVaccineBottle, IconVaccineBottleOff, IconVaccineOff, IconVacuumCleaner, IconVariable, IconVariableMinus, IconVariableOff, IconVariablePlus, IconVector, IconVectorBezier, IconVectorBezier2, IconVectorBezierArc, IconVectorBezierCircle, IconVectorOff, IconVectorSpline, IconVectorTriangle, IconVectorTriangleOff, IconVenus, IconVersions, IconVersionsOff, IconVideo, IconVideoMinus, IconVideoOff, IconVideoPlus, IconView360, IconView360Off, IconViewfinder, IconViewfinderOff, IconViewportNarrow, IconViewportWide, IconVinyl, IconVip, IconVipOff, IconVirus, IconVirusOff, IconVirusSearch, IconVocabulary, IconVocabularyOff, IconVolume, IconVolume2, IconVolume3, IconVolumeOff, IconWalk, IconWall, IconWallOff, IconWallet, IconWalletOff, IconWallpaper, IconWallpaperOff, IconWand, IconWandOff, IconWash, IconWashDry, IconWashDry1, IconWashDry2, IconWashDry3, IconWashDryA, IconWashDryDip, IconWashDryF, IconWashDryHang, IconWashDryOff, IconWashDryP, IconWashDryShade, IconWashDryW, IconWashDryclean, IconWashDrycleanOff, IconWashGentle, IconWashMachine, IconWashOff, IconWashPress, IconWashTemperature1, IconWashTemperature2, IconWashTemperature3, IconWashTemperature4, IconWashTemperature5, IconWashTemperature6, IconWashTumbleDry, IconWashTumbleOff, IconWaveSawTool, IconWaveSine, IconWaveSquare, IconWebhook, IconWebhookOff, IconWeight, IconWheelchair, IconWheelchairOff, IconWhirl, IconWifi, IconWifi0, IconWifi1, IconWifi2, IconWifiOff, IconWind, IconWindOff, IconWindmill, IconWindmillOff, IconWindow, IconWindowMaximize, IconWindowMinimize, IconWindowOff, IconWindsock, IconWiper, IconWiperWash, IconWoman, IconWood, IconWorld, IconWorldDownload, IconWorldLatitude, IconWorldLongitude, IconWorldOff, IconWorldUpload, IconWorldWww, IconWreckingBall, IconWriting, IconWritingOff, IconWritingSign, IconWritingSignOff, IconX, IconXboxA, IconXboxB, IconXboxX, IconXboxY, IconYinYang, IconYoga, IconZeppelin, IconZeppelinOff, IconZip, IconZodiacAquarius, IconZodiacAries, IconZodiacCancer, IconZodiacCapricorn, IconZodiacGemini, IconZodiacLeo, IconZodiacLibra, IconZodiacPisces, IconZodiacSagittarius, IconZodiacScorpio, IconZodiacTaurus, IconZodiacVirgo, IconZoomCancel, IconZoomCheck, IconZoomCode, IconZoomExclamation, IconZoomIn, IconZoomInArea, IconZoomMoney, IconZoomOut, IconZoomOutArea, IconZoomPan, IconZoomQuestion, IconZoomReplace, IconZoomReset, IconZzz, IconZzzOff */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ routes)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(8356);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./.docusaurus/routesChunkNames.json
var routesChunkNames = __webpack_require__(6887);
;// CONCATENATED MODULE: ./.docusaurus/registry.js
/* harmony default export */ const registry = ({'083ee91e':[()=>__webpack_require__.e(/* import() | 083ee91e */ 66).then(__webpack_require__.t.bind(__webpack_require__, 3769, 19)),'/home/runner/work/docs-website/docs-website/.docusaurus/docusaurus-plugin-content-docs/default/plugin-route-context-module-100.json',/*require.resolve*/(3769)],'0e384e19':[()=>__webpack_require__.e(/* import() | 0e384e19 */ 671).then(__webpack_require__.bind(__webpack_require__, 9881)),'@site/docs/intro.md',/*require.resolve*/(9881)],'14eb3368':[()=>Promise.all(/* import() | 14eb3368 */[__webpack_require__.e(532), __webpack_require__.e(817)]).then(__webpack_require__.bind(__webpack_require__, 5340)),'@theme/DocCategoryGeneratedIndexPage',/*require.resolve*/(5340)],'17896441':[()=>Promise.all(/* import() | 17896441 */[__webpack_require__.e(532), __webpack_require__.e(870), __webpack_require__.e(918)]).then(__webpack_require__.bind(__webpack_require__, 1189)),'@theme/DocItem',/*require.resolve*/(1189)],'1be78505':[()=>Promise.all(/* import() | 1be78505 */[__webpack_require__.e(532), __webpack_require__.e(274), __webpack_require__.e(604), __webpack_require__.e(514)]).then(__webpack_require__.bind(__webpack_require__, 1651)),'@theme/DocPage',/*require.resolve*/(1651)],'1df93b7f':[()=>Promise.all(/* import() | 1df93b7f */[__webpack_require__.e(274), __webpack_require__.e(237)]).then(__webpack_require__.bind(__webpack_require__, 6945)),'@site/src/pages/index.tsx',/*require.resolve*/(6945)],'3720c009':[()=>Promise.all(/* import() | 3720c009 */[__webpack_require__.e(532), __webpack_require__.e(751)]).then(__webpack_require__.bind(__webpack_require__, 9861)),'@theme/DocTagsListPage',/*require.resolve*/(9861)],'3ef332b8':[()=>__webpack_require__.e(/* import() | 3ef332b8 */ 425).then(__webpack_require__.bind(__webpack_require__, 8219)),'@site/docs/development/apis.md',/*require.resolve*/(8219)],'55960ee5':[()=>__webpack_require__.e(/* import() | 55960ee5 */ 121).then(__webpack_require__.t.bind(__webpack_require__, 8070, 19)),'~docs/default/tags-list-current-prop-15a.json',/*require.resolve*/(8070)],'5e9f5e1a':[()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6809)),'@generated/docusaurus.config',/*require.resolve*/(6809)],'71f35c7b':[()=>__webpack_require__.e(/* import() | 71f35c7b */ 664).then(__webpack_require__.t.bind(__webpack_require__, 7876, 19)),'~docs/default/category-docs-tutorialsidebar-category-development-8c5.json',/*require.resolve*/(7876)],'823128eb':[()=>__webpack_require__.e(/* import() | 823128eb */ 735).then(__webpack_require__.t.bind(__webpack_require__, 9407, 19)),'~docs/default/tag-docs-tags-website-d9e.json',/*require.resolve*/(9407)],'87a50603':[()=>__webpack_require__.e(/* import() | 87a50603 */ 723).then(__webpack_require__.t.bind(__webpack_require__, 9602, 19)),'~docs/default/tag-docs-tags-api-a37.json',/*require.resolve*/(9602)],'935f2afb':[()=>__webpack_require__.e(/* import() | 935f2afb */ 53).then(__webpack_require__.t.bind(__webpack_require__, 1109, 19)),'~docs/default/version-current-metadata-prop-751.json',/*require.resolve*/(1109)],'9c584f2d':[()=>__webpack_require__.e(/* import() | 9c584f2d */ 210).then(__webpack_require__.t.bind(__webpack_require__, 5481, 19)),'~docs/default/tag-docs-tags-plot-system-97d.json',/*require.resolve*/(5481)],'df203c0f':[()=>__webpack_require__.e(/* import() | df203c0f */ 924).then(__webpack_require__.bind(__webpack_require__, 7068)),'@theme/DocTagDocListPage',/*require.resolve*/(7068)],'ee0d642a':[()=>__webpack_require__.e(/* import() | ee0d642a */ 378).then(__webpack_require__.t.bind(__webpack_require__, 5745, 19)),'/home/runner/work/docs-website/docs-website/.docusaurus/docusaurus-plugin-content-pages/default/plugin-route-context-module-100.json',/*require.resolve*/(5745)]});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/theme-fallback/Loading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function Loading(_ref){let{error,retry,pastDelay}=_ref;if(error){return/*#__PURE__*/react.createElement("div",{style:{textAlign:'center',color:'#fff',backgroundColor:'#fa383e',borderColor:'#fa383e',borderStyle:'solid',borderRadius:'0.25rem',borderWidth:'1px',boxSizing:'border-box',display:'block',padding:'1rem',flex:'0 0 50%',marginLeft:'25%',marginRight:'25%',marginTop:'5rem',maxWidth:'50%',width:'100%'}},/*#__PURE__*/react.createElement("p",null,String(error)),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("button",{type:"button",onClick:retry},"Retry")));}if(pastDelay){return/*#__PURE__*/react.createElement("div",{style:{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}},/*#__PURE__*/react.createElement("svg",{id:"loader",style:{width:128,height:110,position:'absolute',top:'calc(100vh - 64%)'},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#61dafb"},/*#__PURE__*/react.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},/*#__PURE__*/react.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},/*#__PURE__*/react.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/react.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/react.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),/*#__PURE__*/react.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},/*#__PURE__*/react.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/react.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),/*#__PURE__*/react.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),/*#__PURE__*/react.createElement("circle",{cx:"22",cy:"22",r:"8"},/*#__PURE__*/react.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})))));}return null;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/flat.js
var flat = __webpack_require__(9670);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/routeContext.js
var client_routeContext = __webpack_require__(226);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ComponentCreator.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ComponentCreator(path,hash){// 404 page
if(path==='*'){return lib_default()({loading:Loading,loader:()=>Promise.all(/* import() */[__webpack_require__.e(274), __webpack_require__.e(486)]).then(__webpack_require__.bind(__webpack_require__, 486)),modules:['@theme/NotFound'],webpack:()=>[/*require.resolve*/(486)],render(loaded,props){const NotFound=loaded.default;return/*#__PURE__*/react.createElement(client_routeContext/* RouteContextProvider */.z// Do we want a better name than native-default?
,{value:{plugin:{name:'native',id:'default'}}},/*#__PURE__*/react.createElement(NotFound,props));}});}const chunkNames=routesChunkNames[`${path}-${hash}`];// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loader={};const modules=[];const optsWebpack=[];// A map from prop names to chunk names.
// e.g. Suppose the plugin added this as route:
//   { __comp: "...", prop: { foo: "..." }, items: ["...", "..."] }
// It will become:
//   { __comp: "...", "prop.foo": "...", "items.0": "...", "items.1": ... }
// Loadable.Map will _map_ over `loader` and load each key.
const flatChunkNames=(0,flat/* default */.Z)(chunkNames);Object.entries(flatChunkNames).forEach(_ref=>{let[keyPath,chunkName]=_ref;const chunkRegistry=registry[chunkName];if(chunkRegistry){// eslint-disable-next-line prefer-destructuring
loader[keyPath]=chunkRegistry[0];modules.push(chunkRegistry[1]);optsWebpack.push(chunkRegistry[2]);}});return lib_default().Map({loading:Loading,loader,modules,webpack:()=>optsWebpack,render(loaded,props){// `loaded` will be a map from key path (as returned from the flattened
// chunk names) to the modules loaded from the loaders. We now have to
// restore the chunk names' previous shape from this flat record.
// We do so by taking advantage of the existing `chunkNames` and replacing
// each chunk name with its loaded module, so we don't create another
// object from scratch.
const loadedModules=JSON.parse(JSON.stringify(chunkNames));Object.entries(loaded).forEach(_ref2=>{let[keyPath,loadedModule]=_ref2;// JSON modules are also loaded as `{ default: ... }` (`import()`
// semantics) but we just want to pass the actual value to props.
const chunk=loadedModule.default;// One loaded chunk can only be one of two things: a module (props) or a
// component. Modules are always JSON, so `default` always exists. This
// could only happen with a user-defined component.
if(!chunk){throw new Error(`The page component at ${path} doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.`);}// A module can be a primitive, for example, if the user stored a string
// as a prop. However, there seems to be a bug with swc-loader's CJS
// logic, in that it would load a JSON module with content "foo" as
// `{ default: "foo", 0: "f", 1: "o", 2: "o" }`. Just to be safe, we
// first make sure that the chunk is non-primitive.
if(typeof chunk==='object'||typeof chunk==='function'){Object.keys(loadedModule).filter(k=>k!=='default').forEach(nonDefaultKey=>{chunk[nonDefaultKey]=loadedModule[nonDefaultKey];});}// We now have this chunk prepared. Go down the key path and replace the
// chunk name with the actual chunk.
let val=loadedModules;const keyPaths=keyPath.split('.');keyPaths.slice(0,-1).forEach(k=>{val=val[k];});val[keyPaths[keyPaths.length-1]]=chunk;});/* eslint-disable no-underscore-dangle */const Component=loadedModules.__comp;delete loadedModules.__comp;const routeContext=loadedModules.__context;delete loadedModules.__context;/* eslint-enable no-underscore-dangle */ // Is there any way to put this RouteContextProvider upper in the tree?
return/*#__PURE__*/react.createElement(client_routeContext/* RouteContextProvider */.z,{value:routeContext},/*#__PURE__*/react.createElement(Component,(0,esm_extends/* default */.Z)({},loadedModules,props)));}});}
;// CONCATENATED MODULE: ./.docusaurus/routes.js
/* harmony default export */ const routes = ([{path:'/docs/tags',component:ComponentCreator('/docs/tags','80a'),exact:true},{path:'/docs/tags/api',component:ComponentCreator('/docs/tags/api','f94'),exact:true},{path:'/docs/tags/plot-system',component:ComponentCreator('/docs/tags/plot-system','0af'),exact:true},{path:'/docs/tags/website',component:ComponentCreator('/docs/tags/website','e05'),exact:true},{path:'/docs',component:ComponentCreator('/docs','7cd'),routes:[{path:'/docs/category/development',component:ComponentCreator('/docs/category/development','089'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/development/apis',component:ComponentCreator('/docs/development/apis','e51'),exact:true,sidebar:"tutorialSidebar"},{path:'/docs/intro',component:ComponentCreator('/docs/intro','aed'),exact:true,sidebar:"tutorialSidebar"}]},{path:'/',component:ComponentCreator('/','b3e'),exact:true},{path:'*',component:ComponentCreator('*')}]);

/***/ }),

/***/ 8934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Context),
/* harmony export */   "t": () => (/* binding */ BrowserContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Encapsulate the logic to avoid React hydration problems
// See https://www.joshwcomeau.com/react/the-perils-of-rehydration/
// On first client-side render, we need to render exactly as the server rendered
// isBrowser is set to true only after a successful hydration
// Note, isBrowser is not part of useDocusaurusContext() for perf reasons
// Using useDocusaurusContext() (much more common need) should not trigger
// re-rendering after a successful hydration
const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);function BrowserContextProvider(_ref){let{children}=_ref;const[isBrowser,setIsBrowser]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsBrowser(true);},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:isBrowser},children);}

/***/ }),

/***/ 6402:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-helmet-async/lib/index.module.js
var index_module = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
;// CONCATENATED MODULE: ./.docusaurus/client-modules.js
/* harmony default export */ const client_modules = ([__webpack_require__(2497),__webpack_require__(3310),__webpack_require__(8320),__webpack_require__(2295)]);
// EXTERNAL MODULE: ./.docusaurus/routes.js + 3 modules
var routes = __webpack_require__(723);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6550);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(8790);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/ColorSchemeProvider.js
var ColorSchemeProvider = __webpack_require__(6972);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.js
var use_media_query = __webpack_require__(4065);
;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-color-scheme/use-color-scheme.js


function useColorScheme(initialValue, options) {
  return (0,use_media_query/* useMediaQuery */.a)("(prefers-color-scheme: dark)", initialValue === "dark", options) ? "dark" : "light";
}


//# sourceMappingURL=use-color-scheme.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-window-event/use-window-event.js


function useWindowEvent(type, listener, options) {
  (0,react.useEffect)(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
}


//# sourceMappingURL=use-window-event.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-local-storage/create-storage.js



function serializeJSON(value, hookName) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    throw new Error(`@mantine/hooks ${hookName}: Failed to serialize the value`);
  }
}
function deserializeJSON(value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}
function createStorage(type, hookName) {
  const eventName = type === "localStorage" ? "mantine-local-storage" : "mantine-session-storage";
  return function useStorage({
    key,
    defaultValue = void 0,
    getInitialValueInEffect = true,
    deserialize = deserializeJSON,
    serialize = (value) => serializeJSON(value, hookName)
  }) {
    const readStorageValue = (0,react.useCallback)((skipStorage) => {
      if (typeof window === "undefined" || !(type in window) || window[type] === null || skipStorage) {
        return defaultValue;
      }
      const storageValue = window[type].getItem(key);
      return storageValue !== null ? deserialize(storageValue) : defaultValue;
    }, [key, defaultValue]);
    const [value, setValue] = (0,react.useState)(readStorageValue(getInitialValueInEffect));
    const setStorageValue = (0,react.useCallback)((val) => {
      if (val instanceof Function) {
        setValue((current) => {
          const result = val(current);
          window[type].setItem(key, serialize(result));
          window.dispatchEvent(new CustomEvent(eventName, { detail: { key, value: val(current) } }));
          return result;
        });
      } else {
        window[type].setItem(key, serialize(val));
        window.dispatchEvent(new CustomEvent(eventName, { detail: { key, value: val } }));
        setValue(val);
      }
    }, [key]);
    const removeStorageValue = (0,react.useCallback)(() => {
      window[type].removeItem(key);
      window.dispatchEvent(new CustomEvent(eventName, { detail: { key, value: defaultValue } }));
    }, []);
    useWindowEvent("storage", (event) => {
      var _a;
      if (event.storageArea === window[type] && event.key === key) {
        setValue(deserialize((_a = event.newValue) != null ? _a : void 0));
      }
    });
    useWindowEvent(eventName, (event) => {
      if (event.detail.key === key) {
        setValue(event.detail.value);
      }
    });
    (0,react.useEffect)(() => {
      if (defaultValue !== void 0 && value === void 0) {
        setStorageValue(defaultValue);
      }
    }, [defaultValue, value, setStorageValue]);
    (0,react.useEffect)(() => {
      if (getInitialValueInEffect) {
        setValue(readStorageValue());
      }
    }, []);
    return [
      value === void 0 ? defaultValue : value,
      setStorageValue,
      removeStorageValue
    ];
  };
}


//# sourceMappingURL=create-storage.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-local-storage/use-local-storage.js


function useLocalStorage(props) {
  return createStorage("localStorage", "use-local-storage")(props);
}


//# sourceMappingURL=use-local-storage.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-hotkeys/parse-hotkey.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function parseHotkey(hotkey) {
  const keys = hotkey.toLowerCase().split("+").map((part) => part.trim());
  const modifiers = {
    alt: keys.includes("alt"),
    ctrl: keys.includes("ctrl"),
    meta: keys.includes("meta"),
    mod: keys.includes("mod"),
    shift: keys.includes("shift")
  };
  const reservedKeys = ["alt", "ctrl", "meta", "shift", "mod"];
  const freeKey = keys.find((key) => !reservedKeys.includes(key));
  return __spreadProps(__spreadValues({}, modifiers), {
    key: freeKey
  });
}
function isExactHotkey(hotkey, event) {
  const { alt, ctrl, meta, mod, shift, key } = hotkey;
  const { altKey, ctrlKey, metaKey, shiftKey, key: pressedKey } = event;
  if (alt !== altKey) {
    return false;
  }
  if (mod) {
    if (!ctrlKey && !metaKey) {
      return false;
    }
  } else {
    if (ctrl !== ctrlKey) {
      return false;
    }
    if (meta !== metaKey) {
      return false;
    }
  }
  if (shift !== shiftKey) {
    return false;
  }
  if (key && (pressedKey.toLowerCase() === key.toLowerCase() || event.code.replace("Key", "").toLowerCase() === key.toLowerCase())) {
    return true;
  }
  return false;
}
function getHotkeyMatcher(hotkey) {
  return (event) => isExactHotkey(parseHotkey(hotkey), event);
}
function getHotkeyHandler(hotkeys) {
  return (event) => {
    const _event = "nativeEvent" in event ? event.nativeEvent : event;
    hotkeys.forEach(([hotkey, handler, options = { preventDefault: true }]) => {
      if (getHotkeyMatcher(hotkey)(_event)) {
        if (options.preventDefault) {
          event.preventDefault();
        }
        handler(_event);
      }
    });
  };
}


//# sourceMappingURL=parse-hotkey.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-hotkeys/use-hotkeys.js




function shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable = false) {
  if (event.target instanceof HTMLElement) {
    if (triggerOnContentEditable) {
      return !tagsToIgnore.includes(event.target.tagName);
    }
    return !event.target.isContentEditable && !tagsToIgnore.includes(event.target.tagName);
  }
  return true;
}
function useHotkeys(hotkeys, tagsToIgnore = ["INPUT", "TEXTAREA", "SELECT"], triggerOnContentEditable = false) {
  (0,react.useEffect)(() => {
    const keydownListener = (event) => {
      hotkeys.forEach(([hotkey, handler, options = { preventDefault: true }]) => {
        if (getHotkeyMatcher(hotkey)(event) && shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable)) {
          if (options.preventDefault) {
            event.preventDefault();
          }
          handler(event);
        }
      });
    };
    document.documentElement.addEventListener("keydown", keydownListener);
    return () => document.documentElement.removeEventListener("keydown", keydownListener);
  }, [hotkeys]);
}


//# sourceMappingURL=use-hotkeys.js.map

;// CONCATENATED MODULE: ./src/theme/Root.tsx
function Root(_ref){let{children}=_ref;const preferredColorScheme=useColorScheme("dark");const[colorScheme,setColorScheme]=useLocalStorage({key:"scheme",defaultValue:preferredColorScheme,getInitialValueInEffect:true});const toggleColorScheme=value=>{const newTheme=value||(colorScheme==="dark"?"light":"dark");setColorScheme(newTheme);window.localStorage.setItem("theme",newTheme);window.location.reload();};useHotkeys([["mod+J",()=>toggleColorScheme()]]);if(!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM)return/*#__PURE__*/react.createElement(react.Fragment,null);else return/*#__PURE__*/react.createElement(ColorSchemeProvider/* ColorSchemeProvider */.A,{colorScheme:colorScheme,toggleColorScheme:toggleColorScheme},/*#__PURE__*/react.createElement(MantineProvider/* MantineProvider */.Me,{theme:{colorScheme,fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'},withGlobalStyles:true,withNormalizeCSS:true},children));}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5742);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6668);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useAlternatePageUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Permits to obtain the url of the current page in another locale, useful to
 * generate hreflang meta headers etc...
 *
 * @see https://developers.google.com/search/docs/advanced/crawling/localized-versions
 */function useAlternatePageUtils(){const{siteConfig:{baseUrl,url},i18n:{defaultLocale,currentLocale}}=(0,useDocusaurusContext/* default */.Z)();const{pathname}=(0,react_router/* useLocation */.TH)();const baseUrlUnlocalized=currentLocale===defaultLocale?baseUrl:baseUrl.replace(`/${currentLocale}/`,'/');const pathnameSuffix=pathname.replace(baseUrl,'');function getLocalizedBaseUrl(locale){return locale===defaultLocale?`${baseUrlUnlocalized}`:`${baseUrlUnlocalized}${locale}/`;}// TODO support correct alternate url when localized site is deployed on
// another domain
function createUrl(_ref){let{locale,fullyQualified}=_ref;return`${fullyQualified?url:''}${getLocalizedBaseUrl(locale)}${pathnameSuffix}`;}return{createUrl};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js + 1 modules
var useKeyboardNavigation = __webpack_require__(9727);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(3320);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(197);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SiteMetadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to SiteMetadataDefaults or theme-common ?
// Useful for i18n/SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(){const{i18n:{defaultLocale,localeConfigs}}=(0,useDocusaurusContext/* default */.Z)();const alternatePageUtils=useAlternatePageUtils();// Note: it is fine to use both "x-default" and "en" to target the same url
// See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
return/*#__PURE__*/react.createElement(Head/* default */.Z,null,Object.entries(localeConfigs).map(_ref=>{let[locale,{htmlLang}]=_ref;return/*#__PURE__*/react.createElement("link",{key:locale,rel:"alternate",href:alternatePageUtils.createUrl({locale,fullyQualified:true}),hrefLang:htmlLang});}),/*#__PURE__*/react.createElement("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:defaultLocale,fullyQualified:true}),hrefLang:"x-default"}));}// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl(){const{siteConfig:{url:siteUrl}}=(0,useDocusaurusContext/* default */.Z)();const{pathname}=(0,react_router/* useLocation */.TH)();return siteUrl+(0,useBaseUrl/* default */.Z)(pathname);}// TODO move to SiteMetadataDefaults or theme-common ?
function CanonicalUrlHeaders(_ref2){let{permalink}=_ref2;const{siteConfig:{url:siteUrl}}=(0,useDocusaurusContext/* default */.Z)();const defaultCanonicalUrl=useDefaultCanonicalUrl();const canonicalUrl=permalink?`${siteUrl}${permalink}`:defaultCanonicalUrl;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/react.createElement("link",{rel:"canonical",href:canonicalUrl}));}function SiteMetadata(){const{i18n:{currentLocale}}=(0,useDocusaurusContext/* default */.Z)();// TODO maybe move these 2 themeConfig to siteConfig?
// These seems useful for other themes as well
const{metadata,image:defaultImage}=(0,useThemeConfig/* useThemeConfig */.L)();return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react.createElement("body",{className:useKeyboardNavigation/* keyboardFocusedClassName */.h})),defaultImage&&/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{image:defaultImage}),/*#__PURE__*/react.createElement(CanonicalUrlHeaders,null),/*#__PURE__*/react.createElement(AlternateLangHeaders,null),/*#__PURE__*/react.createElement(SearchMetadata/* default */.Z,{tag:searchUtils/* DEFAULT_SEARCH_TAG */.HX,locale:currentLocale}),/*#__PURE__*/react.createElement(Head/* default */.Z,null,metadata.map((metadatum,i)=>/*#__PURE__*/react.createElement("meta",(0,esm_extends/* default */.Z)({key:i},metadatum)))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/normalizeLocation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Memoize previously normalized pathnames.
const pathnames=new Map();function normalizeLocation(location){if(pathnames.has(location.pathname)){return{...location,pathname:pathnames.get(location.pathname)};}// If the location was registered with an `.html` extension, we don't strip it
// away, or it will render to a 404 page.
const matchedRoutes=(0,react_router_config/* matchRoutes */.f)(routes/* default */.Z,location.pathname);if(matchedRoutes.some(_ref=>{let{route}=_ref;return route.exact===true;})){pathnames.set(location.pathname,location.pathname);return location;}const pathname=location.pathname.trim().replace(/(?:\/index)?\.html$/,'')||'/';pathnames.set(location.pathname,pathname);return{...location,pathname};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/browserContext.js
var browserContext = __webpack_require__(8934);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js + 3 modules
var docusaurusContext = __webpack_require__(8940);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/ClientLifecyclesDispatcher.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function dispatchLifecycleAction(lifecycleAction){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}const callbacks=client_modules.map(clientModule=>{const lifecycleFunction=clientModule.default?.[lifecycleAction]??clientModule[lifecycleAction];return lifecycleFunction?.(...args);});return()=>callbacks.forEach(cb=>cb?.());}function scrollAfterNavigation(_ref){let{location,previousLocation}=_ref;if(!previousLocation){return;// no-op: use native browser feature
}const samePathname=location.pathname===previousLocation.pathname;const sameHash=location.hash===previousLocation.hash;const sameSearch=location.search===previousLocation.search;// Query-string changes: do not scroll to top/hash
if(samePathname&&sameHash&&!sameSearch){return;}const{hash}=location;if(!hash){window.scrollTo(0,0);}else{const id=decodeURIComponent(hash.substring(1));const element=document.getElementById(id);element?.scrollIntoView();}}function ClientLifecyclesDispatcher(_ref2){let{children,location,previousLocation}=_ref2;(0,react.useLayoutEffect)(()=>{if(previousLocation!==location){scrollAfterNavigation({location,previousLocation});dispatchLifecycleAction('onRouteDidUpdate',{previousLocation,location});}},[previousLocation,location]);return children;}/* harmony default export */ const client_ClientLifecyclesDispatcher = (ClientLifecyclesDispatcher);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/preload.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper function to make sure all async components for that particular route
 * is preloaded before rendering. This is especially useful to avoid loading
 * screens.
 *
 * @param pathname the route pathname, example: /docs/installation
 * @returns Promise object represents whether pathname has been preloaded
 */function preload(pathname){const matches=Array.from(new Set([pathname,decodeURI(pathname)])).map(p=>(0,react_router_config/* matchRoutes */.f)(routes/* default */.Z,p)).flat();return Promise.all(matches.map(match=>match.route.component.preload?.()));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/PendingNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */class PendingNavigation extends react.Component{constructor(props){super(props);// previousLocation doesn't affect rendering, hence not stored in state.
this.previousLocation=void 0;this.routeUpdateCleanupCb=void 0;this.previousLocation=null;this.routeUpdateCleanupCb=ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM?dispatchLifecycleAction('onRouteUpdate',{previousLocation:null,location:this.props.location}):()=>{};this.state={nextRouteHasLoaded:true};}// Intercept location update and still show current route until next route
// is done loading.
shouldComponentUpdate(nextProps,nextState){if(nextProps.location===this.props.location){// `nextRouteHasLoaded` is false means there's a pending route transition.
// Don't update until it's done.
return nextState.nextRouteHasLoaded;}// props.location being different means the router is trying to navigate to
// a new route. We will preload the new route.
const nextLocation=nextProps.location;// Save the location first.
this.previousLocation=this.props.location;this.setState({nextRouteHasLoaded:false});this.routeUpdateCleanupCb=dispatchLifecycleAction('onRouteUpdate',{previousLocation:this.previousLocation,location:nextLocation});// Load data while the old screen remains. Force preload instead of using
// `window.docusaurus`, because we want to avoid loading screen even when
// user is on saveData
preload(nextLocation.pathname).then(()=>{this.routeUpdateCleanupCb();this.setState({nextRouteHasLoaded:true});}).catch(e=>{console.warn(e);// If chunk loading failed, it could be because the path to a chunk
// no longer exists due to a new deployment. Force refresh the page
// instead of just not navigating.
window.location.reload();});return false;}render(){const{children,location}=this.props;// Use a controlled <Route> to trick all descendants into rendering the old
// location.
return/*#__PURE__*/react.createElement(client_ClientLifecyclesDispatcher,{previousLocation:this.previousLocation,location:location},/*#__PURE__*/react.createElement(react_router/* Route */.AW,{location:location,render:()=>children}));}}/* harmony default export */ const client_PendingNavigation = (PendingNavigation);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/BaseUrlIssueBanner/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/BaseUrlIssueBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Double-security: critical CSS will hide the banner if CSS can load!
const BannerContainerId='docusaurus-base-url-issue-banner-container';const BannerId='docusaurus-base-url-issue-banner';const SuggestionContainerId='docusaurus-base-url-issue-banner-suggestion-container';const InsertBannerWindowAttribute='__DOCUSAURUS_INSERT_BASEURL_BANNER';// It is important to not use React to render this banner
// otherwise Google would index it, even if it's hidden with some critical CSS!
// See https://github.com/facebook/docusaurus/issues/4028
// - We can't SSR (or it would be indexed)
// - We can't CSR (as it means the baseurl is correct)
function createInlineHtmlBanner(baseUrl){return`
<div id="${BannerId}" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">
   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>
   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseurl" style="font-weight: bold;">baseUrl configuration</a>.</p>
   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">${baseUrl}</span> ${baseUrl==='/'?' (default value)':''}</p>
   <p>We suggest trying baseUrl = <span id="${SuggestionContainerId}" style="font-weight: bold; color: green;"></span></p>
</div>
`;}// Needs to work for older browsers!
function createInlineScript(baseUrl){/* language=js */return`
window['${InsertBannerWindowAttribute}'] = true;

document.addEventListener('DOMContentLoaded', maybeInsertBanner);

function maybeInsertBanner() {
  var shouldInsert = window['${InsertBannerWindowAttribute}'];
  shouldInsert && insertBanner();
}

function insertBanner() {
  var bannerContainer = document.getElementById('${BannerContainerId}');
  if (!bannerContainer) {
    return;
  }
  var bannerHtml = ${JSON.stringify(createInlineHtmlBanner(baseUrl))// See https://redux.js.org/recipes/server-rendering/#security-considerations
.replace(/</g,'\\\u003c')};
  bannerContainer.innerHTML = bannerHtml;
  var suggestionContainer = document.getElementById('${SuggestionContainerId}');
  var actualHomePagePath = window.location.pathname;
  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'
        ? actualHomePagePath
        : actualHomePagePath + '/';
  suggestionContainer.innerHTML = suggestedBaseUrl;
}
`;}function BaseUrlIssueBanner(){const{siteConfig:{baseUrl}}=(0,useDocusaurusContext/* default */.Z)();// useLayoutEffect fires before DOMContentLoaded.
// It gives the opportunity to avoid inserting the banner in the first place
(0,react.useLayoutEffect)(()=>{window[InsertBannerWindowAttribute]=false;},[]);return/*#__PURE__*/react.createElement(react.Fragment,null,!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM&&/*#__PURE__*/ // Safe to use `ExecutionEnvironment`, because `Head` is purely
// side-effect and doesn't affect hydration
react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("script",null,createInlineScript(baseUrl))),/*#__PURE__*/react.createElement("div",{id:BannerContainerId}));}/**
 * We want to help the users with a bad baseUrl configuration (very common
 * error). Help message is inlined, and hidden if JS or CSS is able to load.
 *
 * This component only inserts the base URL banner for the homepage, to avoid
 * polluting every statically rendered page.
 *
 * Note: it might create false positives (ie network failures): not a big deal
 *
 * @see https://github.com/facebook/docusaurus/pull/3621
 */function MaybeBaseUrlIssueBanner(){const{siteConfig:{baseUrl,baseUrlIssueBanner}}=(0,useDocusaurusContext/* default */.Z)();const{pathname}=(0,react_router/* useLocation */.TH)();const isHomePage=pathname===baseUrl;const enabled=baseUrlIssueBanner&&isHomePage;return enabled?/*#__PURE__*/react.createElement(BaseUrlIssueBanner,null):null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/SiteMetadataDefaults.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SiteMetadataDefaults(){const{siteConfig:{favicon,title,noIndex},i18n:{currentLocale,localeConfigs}}=(0,useDocusaurusContext/* default */.Z)();const faviconUrl=(0,useBaseUrl/* default */.Z)(favicon);const{htmlLang,direction:htmlDir}=localeConfigs[currentLocale];return/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{lang:htmlLang,dir:htmlDir}),/*#__PURE__*/react.createElement("title",null,title),/*#__PURE__*/react.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),noIndex&&/*#__PURE__*/react.createElement("meta",{name:"robots",content:"noindex, nofollow"}),favicon&&/*#__PURE__*/react.createElement("link",{rel:"icon",href:faviconUrl}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(4763);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/App.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO, quick fix for CSS insertion order
// eslint-disable-next-line import/order
function App(){const routeElement=(0,react_router_config/* renderRoutes */.H)(routes/* default */.Z);const location=(0,react_router/* useLocation */.TH)();return/*#__PURE__*/react.createElement(ErrorBoundary/* default */.Z,null,/*#__PURE__*/react.createElement(docusaurusContext/* DocusaurusContextProvider */.M,null,/*#__PURE__*/react.createElement(browserContext/* BrowserContextProvider */.t,null,/*#__PURE__*/react.createElement(Root,null,/*#__PURE__*/react.createElement(SiteMetadataDefaults,null),/*#__PURE__*/react.createElement(SiteMetadata,null),/*#__PURE__*/react.createElement(MaybeBaseUrlIssueBanner,null),/*#__PURE__*/react.createElement(client_PendingNavigation,{location:normalizeLocation(location)},routeElement)))));}
// EXTERNAL MODULE: ./.docusaurus/routesChunkNames.json
var routesChunkNames = __webpack_require__(6887);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/prefetch.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function supports(feature){try{const fakeLink=document.createElement('link');return fakeLink.relList.supports(feature);}catch{return false;}}function linkPrefetchStrategy(url){return new Promise((resolve,reject)=>{if(typeof document==='undefined'){reject();return;}const link=document.createElement('link');link.setAttribute('rel','prefetch');link.setAttribute('href',url);link.onload=()=>resolve();link.onerror=()=>reject();const parentElement=document.getElementsByTagName('head')[0]??document.getElementsByName('script')[0]?.parentNode;parentElement?.appendChild(link);});}function xhrPrefetchStrategy(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open('GET',url,true);req.withCredentials=true;req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});}const supportedPrefetchStrategy=supports('prefetch')?linkPrefetchStrategy:xhrPrefetchStrategy;function prefetch(url){return supportedPrefetchStrategy(url).catch(()=>{});// 404s are logged to the console anyway.
}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/flat.js
var flat = __webpack_require__(9670);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/docusaurus.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const fetched=new Set();const loaded=new Set();// If user is on slow or constrained connection.
const isSlowConnection=()=>navigator.connection?.effectiveType.includes('2g')||navigator.connection?.saveData;const canPrefetch=routePath=>!isSlowConnection()&&!loaded.has(routePath)&&!fetched.has(routePath);const canPreload=routePath=>!isSlowConnection()&&!loaded.has(routePath);const getChunkNamesToLoad=path=>Object.entries(routesChunkNames).filter(// Remove the last part containing the route hash
// input: /blog/2018/12/14/Happy-First-Birthday-Slash-fe9
// output: /blog/2018/12/14/Happy-First-Birthday-Slash
_ref=>{let[routeNameWithHash]=_ref;return routeNameWithHash.replace(/-[^-]+$/,'')===path;}).flatMap(_ref2=>{let[,routeChunks]=_ref2;return Object.values((0,flat/* default */.Z)(routeChunks));});const docusaurus={prefetch(routePath){if(!canPrefetch(routePath)){return false;}fetched.add(routePath);// Find all webpack chunk names needed.
const matches=(0,react_router_config/* matchRoutes */.f)(routes/* default */.Z,routePath);const chunkNamesNeeded=matches.flatMap(match=>getChunkNamesToLoad(match.route.path));// Prefetch all webpack chunk assets file needed.
return Promise.all(chunkNamesNeeded.map(chunkName=>{// "__webpack_require__.gca" is injected by ChunkAssetPlugin. Pass it
// the name of the chunk you want to load and it will return its URL.
// eslint-disable-next-line camelcase
const chunkAsset=__webpack_require__.gca(chunkName);// In some cases, webpack might decide to optimize further, leading to
// the chunk assets being merged to another chunk. In this case, we can
// safely filter it out and don't need to load it.
if(chunkAsset&&!chunkAsset.includes('undefined')){return prefetch(chunkAsset);}return Promise.resolve();}));},preload(routePath){if(!canPreload(routePath)){return false;}loaded.add(routePath);return preload(routePath);}};// This object is directly mounted onto window, better freeze it
/* harmony default export */ const client_docusaurus = (Object.freeze(docusaurus));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/clientEntry.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Client-side render (e.g: running in browser) to become single-page
// application (SPA).
if(ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM){window.docusaurus=client_docusaurus;// For production, attempt to hydrate existing markup for performant
// first-load experience.
// For development, there is no existing markup so we had to render it.
// We also preload async component to avoid first-load loading screen.
const renderMethod= true?react_dom.hydrate:0;preload(window.location.pathname).then(()=>{renderMethod(/*#__PURE__*/react.createElement(index_module/* HelmetProvider */.B6,null,/*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK,null,/*#__PURE__*/react.createElement(App,null))),document.getElementById('__docusaurus'));});// Webpack Hot Module Replacement API
if(false){}}

/***/ }),

/***/ 8940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ Context),
  "M": () => (/* binding */ DocusaurusContextProvider)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(6809);
;// CONCATENATED MODULE: ./.docusaurus/globalData.json
const globalData_namespaceObject = JSON.parse('{"docusaurus-plugin-content-docs":{"default":{"path":"/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/docs","mainDocId":"intro","docs":[{"id":"development/apis","path":"/docs/development/apis","sidebar":"tutorialSidebar"},{"id":"intro","path":"/docs/intro","sidebar":"tutorialSidebar"},{"id":"/category/development","path":"/docs/category/development","sidebar":"tutorialSidebar"}],"draftIds":[],"sidebars":{"tutorialSidebar":{"link":{"path":"/docs/intro","label":"intro"}}}}],"breadcrumbs":true}}}');
;// CONCATENATED MODULE: ./.docusaurus/i18n.json
const i18n_namespaceObject = JSON.parse('{"defaultLocale":"en","locales":["en"],"path":"i18n","currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory","path":"en"}}}');
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(7529);
;// CONCATENATED MODULE: ./.docusaurus/site-metadata.json
const site_metadata_namespaceObject = JSON.parse('{"docusaurusVersion":"2.3.1","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.3.1"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"2.3.1"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.3.1"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.3.1"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.3.1"}}}');
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/docusaurusContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Static value on purpose: don't make it dynamic!
// Using context is still useful for testability reasons.
const contextValue={siteConfig: docusaurus_config["default"],siteMetadata: site_metadata_namespaceObject,globalData: globalData_namespaceObject,i18n: i18n_namespaceObject,codeTranslations: codeTranslations};const Context=/*#__PURE__*/react.createContext(contextValue);function DocusaurusContextProvider(_ref){let{children}=_ref;return/*#__PURE__*/react.createElement(Context.Provider,{value:contextValue},children);}

/***/ }),

/***/ 4763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ErrorBoundary)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5742);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 18 modules
var Layout = __webpack_require__(4204);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/theme-fallback/Error/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Should we translate theme-fallback?
/* eslint-disable @docusaurus/no-untranslated-text */function ErrorDisplay(_ref){let{error,tryAgain}=_ref;return/*#__PURE__*/react.createElement("div",{style:{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'50vh',width:'100%',fontSize:'20px'}},/*#__PURE__*/react.createElement("h1",null,"This page crashed."),/*#__PURE__*/react.createElement("p",null,error.message),/*#__PURE__*/react.createElement("button",{type:"button",onClick:tryAgain},"Try again"));}function Error(_ref2){let{error,tryAgain}=_ref2;// We wrap the error in its own error boundary because the layout can actually
// throw too... Only the ErrorDisplay component is simple enough to be
// considered safe to never throw
return/*#__PURE__*/react.createElement(ErrorBoundary// Note: we display the original error here, not the error that we
// captured in this extra error boundary
,{fallback:()=>/*#__PURE__*/react.createElement(ErrorDisplay,{error:error,tryAgain:tryAgain})},/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("title",null,"Page Error")),/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement(ErrorDisplay,{error:error,tryAgain:tryAgain})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
const DefaultFallback=params=>/*#__PURE__*/react.createElement(Error,params);class ErrorBoundary extends react.Component{constructor(props){super(props);this.state={error:null};}componentDidCatch(error){// Catch errors in any components below and re-render with error message
if(ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM){this.setState({error});}}render(){const{children}=this.props;const{error}=this.state;if(error){const fallbackParams={error,tryAgain:()=>this.setState({error:null})};const fallback=this.props.fallback??DefaultFallback;return fallback(fallbackParams);}// See https://github.com/facebook/docusaurus/issues/6337#issuecomment-1012913647
return children??null;}}

/***/ }),

/***/ 412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const canUseDOM=typeof window!=='undefined'&&'document'in window&&'createElement'in window.document;const ExecutionEnvironment={canUseDOM,// window.attachEvent is IE-specific; it's very likely Docusaurus won't work
// on IE anyway.
canUseEventListeners:canUseDOM&&('addEventListener'in window||'attachEvent'in window),canUseIntersectionObserver:canUseDOM&&'IntersectionObserver'in window,canUseViewport:canUseDOM&&'screen'in window};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExecutionEnvironment);

/***/ }),

/***/ 5742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Head(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__/* .Helmet */ .ql,props);}

/***/ }),

/***/ 5999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Translate),
  "I": () => (/* binding */ translate)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Interpolate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function interpolate(text,values){// eslint-disable-next-line prefer-named-capture-group
const segments=text.split(/(\{\w+\})/).map((seg,index)=>{// Odd indices (1, 3, 5...) of the segments are (potentially) interpolatable
if(index%2===1){const value=values?.[seg.slice(1,-1)];if(value!==undefined){return value;}// No match: add warning? There's no way to "escape" interpolation though
}return seg;});if(segments.some(seg=>/*#__PURE__*/(0,react.isValidElement)(seg))){return segments.map((seg,index)=>/*#__PURE__*/(0,react.isValidElement)(seg)?/*#__PURE__*/react.cloneElement(seg,{key:index}):seg).filter(seg=>seg!=='');}return segments.join('');}function Interpolate(_ref){let{children,values}=_ref;if(typeof children!=='string'){throw new Error(`The Docusaurus <Interpolate> component only accept simple string values. Received: ${/*#__PURE__*/isValidElement(children)?'React element':typeof children}`);}return/*#__PURE__*/React.createElement(React.Fragment,null,interpolate(children,values));}
// EXTERNAL MODULE: ./.docusaurus/codeTranslations.json
var codeTranslations = __webpack_require__(7529);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Can't read it from context, due to exposing imperative API
function getLocalizedMessage(_ref){let{id,message}=_ref;if(typeof id==='undefined'&&typeof message==='undefined'){throw new Error('Docusaurus translation declarations must have at least a translation id or a default translation message');}return codeTranslations[id??message]??message??id;}// Imperative translation API is useful for some edge-cases:
// - translating page titles (meta)
// - translating string props (input placeholders, image alt, aria labels...)
function translate(_ref2,values){let{message,id}=_ref2;const localizedMessage=getLocalizedMessage({message,id});return interpolate(localizedMessage,values);}// Maybe we'll want to improve this component with additional features
// Like toggling a translation mode that adds a little translation button near
// the text?
function Translate(_ref3){let{children,id,values}=_ref3;if(children&&typeof children!=='string'){console.warn('Illegal <Translate> children',children);throw new Error('The Docusaurus <Translate> component only accept simple string values');}const localizedMessage=getLocalizedMessage({message:children,id});return/*#__PURE__*/react.createElement(react.Fragment,null,interpolate(localizedMessage,values));}

/***/ }),

/***/ 9935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ DEFAULT_PLUGIN_ID)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Constants used on the client-side: duplicated from server-side code
const DEFAULT_PLUGIN_ID='default';

/***/ }),

/***/ 3919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isInternalUrl),
/* harmony export */   "b": () => (/* binding */ hasProtocol)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hasProtocol(url){return /^(?:\w*:|\/\/)/.test(url);}function isInternalUrl(url){return typeof url!=='undefined'&&!hasProtocol(url);}

/***/ }),

/***/ 4996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useBaseUrlUtils),
/* harmony export */   "Z": () => (/* binding */ useBaseUrl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2263);
/* harmony import */ var _isInternalUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3919);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function addBaseUrl(siteUrl,baseUrl,url,_temp){let{forcePrependBaseUrl=false,absolute=false}=_temp===void 0?{}:_temp;// It never makes sense to add base url to a local anchor url, or one with a
// protocol
if(!url||url.startsWith('#')||(0,_isInternalUrl__WEBPACK_IMPORTED_MODULE_2__/* .hasProtocol */ .b)(url)){return url;}if(forcePrependBaseUrl){return baseUrl+url.replace(/^\//,'');}// /baseUrl -> /baseUrl/
// https://github.com/facebook/docusaurus/issues/6315
if(url===baseUrl.replace(/\/$/,'')){return baseUrl;}// We should avoid adding the baseurl twice if it's already there
const shouldAddBaseUrl=!url.startsWith(baseUrl);const basePath=shouldAddBaseUrl?baseUrl+url.replace(/^\//,''):url;return absolute?siteUrl+basePath:basePath;}function useBaseUrlUtils(){const{siteConfig:{baseUrl,url:siteUrl}}=(0,_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();const withBaseUrl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((url,options)=>addBaseUrl(siteUrl,baseUrl,url,options),[siteUrl,baseUrl]);return{withBaseUrl};}function useBaseUrl(url,options){if(options===void 0){options={};}const{withBaseUrl}=useBaseUrlUtils();return withBaseUrl(url,options);}

/***/ }),

/***/ 2263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDocusaurusContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8940);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useDocusaurusContext(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_docusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ ._);}

/***/ }),

/***/ 2389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useIsBrowser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _browserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8934);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useIsBrowser(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_browserContext__WEBPACK_IMPORTED_MODULE_1__/* .Context */ ._);}

/***/ }),

/***/ 9670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ flat)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const isTree=x=>typeof x==='object'&&!!x&&Object.keys(x).length>0;/**
 * Takes a tree, and flattens it into a map of keyPath -> value.
 *
 * ```js
 * flat({ a: { b: 1 } }) === { "a.b": 1 };
 * flat({ a: [1, 2] }) === { "a.0": 1, "a.1": 2 };
 * ```
 */function flat(target){const delimiter='.';const output={};function dfs(object,prefix){Object.entries(object).forEach(_ref=>{let[key,value]=_ref;const newKey=prefix?`${prefix}${delimiter}${key}`:key;if(isTree(value)){dfs(value,newKey);}else{output[newKey]=value;}});}dfs(target);return output;}

/***/ }),

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Context),
/* harmony export */   "z": () => (/* binding */ RouteContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function mergeContexts(_ref){let{parent,value}=_ref;if(!parent){if(!value){throw new Error('Unexpected: no Docusaurus route context found');}else if(!('plugin'in value)){throw new Error('Unexpected: Docusaurus topmost route context has no `plugin` attribute');}return value;}// TODO deep merge this
const data={...parent.data,...value?.data};return{// Nested routes are not supposed to override plugin attribute
plugin:parent.plugin,data};}function RouteContextProvider(_ref2){let{children,value}=_ref2;const parent=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);const mergedValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>mergeContexts({parent,value}),[parent,value]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:mergedValue},children);}

/***/ }),

/***/ 143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gA": () => (/* binding */ useActivePlugin),
  "_r": () => (/* binding */ useAllDocsData),
  "Jo": () => (/* binding */ useDocVersionSuggestions),
  "zh": () => (/* binding */ useDocsData)
});

// UNUSED EXPORTS: useActiveDocContext, useActivePluginAndVersion, useActiveVersion, useLatestVersion, useVersions

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6550);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/constants.js
var constants = __webpack_require__(9935);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useGlobalData.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useGlobalData(){const{globalData}=(0,useDocusaurusContext/* default */.Z)();return globalData;}function useAllPluginInstancesData(pluginName,options){if(options===void 0){options={};}const globalData=useGlobalData();const pluginGlobalData=globalData[pluginName];if(!pluginGlobalData&&options.failfast){throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin.`);}return pluginGlobalData;}function usePluginData(pluginName,pluginId,options){if(pluginId===void 0){pluginId=constants/* DEFAULT_PLUGIN_ID */.m;}if(options===void 0){options={};}const pluginGlobalData=useAllPluginInstancesData(pluginName);const pluginInstanceGlobalData=pluginGlobalData?.[pluginId];if(!pluginInstanceGlobalData&&options.failfast){throw new Error(`Docusaurus plugin global data not found for "${pluginName}" plugin with id "${pluginId}".`);}return pluginInstanceGlobalData;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsClientUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This code is not part of the api surface, not in ./theme on purpose
// get the data of the plugin that is currently "active"
// ie the docs of that plugin are currently browsed
// it is useful to support multiple docs plugin instances
function getActivePlugin(allPluginData,pathname,options){if(options===void 0){options={};}const activeEntry=Object.entries(allPluginData)// Route sorting: '/android/foo' should match '/android' instead of '/'
.sort((a,b)=>b[1].path.localeCompare(a[1].path)).find(_ref=>{let[,pluginData]=_ref;return!!(0,react_router/* matchPath */.LX)(pathname,{path:pluginData.path,exact:false,strict:false});});const activePlugin=activeEntry?{pluginId:activeEntry[0],pluginData:activeEntry[1]}:undefined;if(!activePlugin&&options.failfast){throw new Error(`Can't find active docs plugin for "${pathname}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(allPluginData).map(plugin=>plugin.path).join(', ')}`);}return activePlugin;}const docsClientUtils_getLatestVersion=data=>data.versions.find(version=>version.isLast);function docsClientUtils_getActiveVersion(data,pathname){const lastVersion=docsClientUtils_getLatestVersion(data);// Last version is a route like /docs/*,
// we need to match it last or it would match /docs/version-1.0/* as well
const orderedVersionsMetadata=[...data.versions.filter(version=>version!==lastVersion),lastVersion];return orderedVersionsMetadata.find(version=>!!(0,react_router/* matchPath */.LX)(pathname,{path:version.path,exact:false,strict:false}));}function docsClientUtils_getActiveDocContext(data,pathname){const activeVersion=docsClientUtils_getActiveVersion(data,pathname);const activeDoc=activeVersion?.docs.find(doc=>!!(0,react_router/* matchPath */.LX)(pathname,{path:doc.path,exact:true,strict:false}));function getAlternateVersionDocs(docId){const result={};data.versions.forEach(version=>{version.docs.forEach(doc=>{if(doc.id===docId){result[version.name]=doc;}});});return result;}const alternateVersionDocs=activeDoc?getAlternateVersionDocs(activeDoc.id):{};return{activeVersion,activeDoc,alternateDocVersions:alternateVersionDocs};}function getDocVersionSuggestions(data,pathname){const latestVersion=docsClientUtils_getLatestVersion(data);const activeDocContext=docsClientUtils_getActiveDocContext(data,pathname);const latestDocSuggestion=activeDocContext.alternateDocVersions[latestVersion.name];return{latestDocSuggestion,latestVersionSuggestion:latestVersion};}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Important to use a constant object to avoid React useEffect executions etc.
// see https://github.com/facebook/docusaurus/issues/5089
const StableEmptyObject={};// In blog-only mode, docs hooks are still used by the theme. We need a fail-
// safe fallback when the docs plugin is not in use
const useAllDocsData=()=>useAllPluginInstancesData('docusaurus-plugin-content-docs')??StableEmptyObject;const useDocsData=pluginId=>usePluginData('docusaurus-plugin-content-docs',pluginId,{failfast:true});// TODO this feature should be provided by docusaurus core
function useActivePlugin(options){if(options===void 0){options={};}const data=useAllDocsData();const{pathname}=(0,react_router/* useLocation */.TH)();return getActivePlugin(data,pathname,options);}function useActivePluginAndVersion(options){if(options===void 0){options={};}const activePlugin=useActivePlugin(options);const{pathname}=useLocation();if(!activePlugin){return undefined;}const activeVersion=getActiveVersion(activePlugin.pluginData,pathname);return{activePlugin,activeVersion};}/** Versions are returned ordered (most recent first). */function useVersions(pluginId){const data=useDocsData(pluginId);return data.versions;}function useLatestVersion(pluginId){const data=useDocsData(pluginId);return getLatestVersion(data);}/**
 * Returns `undefined` on doc-unrelated pages, because there's no version
 * currently considered as active.
 */function useActiveVersion(pluginId){const data=useDocsData(pluginId);const{pathname}=useLocation();return getActiveVersion(data,pathname);}function useActiveDocContext(pluginId){const data=useDocsData(pluginId);const{pathname}=useLocation();return getActiveDocContext(data,pathname);}/**
 * Useful to say "hey, you are not on the latest docs version, please switch"
 */function useDocVersionSuggestions(pluginId){const data=useDocsData(pluginId);const{pathname}=(0,react_router/* useLocation */.TH)();return getDocVersionSuggestions(data,pathname);}

/***/ }),

/***/ 8320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4865);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */nprogress__WEBPACK_IMPORTED_MODULE_0___default().configure({showSpinner:false});const delay=200;const clientModule={onRouteUpdate(_ref){let{location,previousLocation}=_ref;if(previousLocation&&location.pathname!==previousLocation.pathname){const progressBarTimeout=window.setTimeout(()=>{nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();},delay);return()=>window.clearTimeout(progressBarTimeout);}return undefined;},onRouteDidUpdate(){nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientModule);

/***/ }),

/***/ 3310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(7410);
// EXTERNAL MODULE: ./.docusaurus/docusaurus.config.mjs
var docusaurus_config = __webpack_require__(6809);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/prism-include-languages.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function prismIncludeLanguages(PrismObject){const{themeConfig:{prism}}=docusaurus_config["default"];const{additionalLanguages}=prism;// Prism components work on the Prism instance on the window, while prism-
// react-renderer uses its own Prism instance. We temporarily mount the
// instance onto window, import components to enhance it, then remove it to
// avoid polluting global namespace.
// You can mutate PrismObject: registering plugins, deleting languages... As
// long as you don't re-assign it
globalThis.Prism=PrismObject;additionalLanguages.forEach(lang=>{// eslint-disable-next-line global-require, import/no-dynamic-require
__webpack_require__(6726)(`./prism-${lang}`);});delete globalThis.Prism;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/prism-include-languages.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */prismIncludeLanguages(prism/* default */.Z);

/***/ }),

/***/ 4204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ErrorBoundary.js + 1 modules
var ErrorBoundary = __webpack_require__(4763);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6550);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(5936);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/skipToContentUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * The id of the element that should become focused on a page
 * that does not have a <main> html tag.
 * Focusing the Docusaurus Layout children is a reasonable fallback.
 */const SkipToContentFallbackId='docusaurus_skipToContent_fallback';/**
 * Returns the skip to content element to focus when the link is clicked.
 */function getSkipToContentTarget(){return(// Try to focus the <main> in priority
// Note: this will only work if JS is enabled
// See https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
document.querySelector('main:first-of-type')??// Then try to focus the fallback element (usually the Layout children)
document.getElementById(SkipToContentFallbackId));}function programmaticFocus(el){el.setAttribute('tabindex','-1');el.focus();el.removeAttribute('tabindex');}/** This hook wires the logic for a skip-to-content link. */function useSkipToContent(){const containerRef=(0,react.useRef)(null);const{action}=(0,react_router/* useHistory */.k6)();const onClick=(0,react.useCallback)(e=>{e.preventDefault();const targetElement=getSkipToContentTarget();if(targetElement){programmaticFocus(targetElement);}},[]);// "Reset" focus when navigating.
// See https://github.com/facebook/docusaurus/pull/8204#issuecomment-1276547558
(0,useLocationChange/* useLocationChange */.S)(_ref=>{let{location}=_ref;if(containerRef.current&&!location.hash&&action==='PUSH'){programmaticFocus(containerRef.current);}});return{containerRef,onClick};}const DefaultSkipToContentLabel=(0,Translate/* translate */.I)({id:'theme.common.skipToMainContent',description:'The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation',message:'Skip to main content'});function SkipToContentLink(props){const linkLabel=props.children??DefaultSkipToContentLabel;const{containerRef,onClick}=useSkipToContent();return/*#__PURE__*/react.createElement("div",{ref:containerRef,role:"region","aria-label":DefaultSkipToContentLabel},/*#__PURE__*/react.createElement("a",(0,esm_extends/* default */.Z)({},props,{// Note this is a fallback href in case JS is disabled
// It has limitations, see https://github.com/facebook/docusaurus/issues/6411#issuecomment-1284136069
href:`#${SkipToContentFallbackId}`,onClick:onClick}),linkLabel));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js + 1 modules
var useKeyboardNavigation = __webpack_require__(9727);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"skipToContent":"skipToContent_fXgn"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SkipToContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SkipToContent(){return/*#__PURE__*/react.createElement(SkipToContentLink,{className:styles_module.skipToContent});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6668);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(2389);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(12);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(902);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const AnnouncementBarDismissStorageKey='docusaurus.announcement.dismiss';const AnnouncementBarIdStorageKey='docusaurus.announcement.id';const AnnouncementBarDismissStorage=(0,storageUtils/* createStorageSlot */.WA)(AnnouncementBarDismissStorageKey);const IdStorage=(0,storageUtils/* createStorageSlot */.WA)(AnnouncementBarIdStorageKey);const isDismissedInStorage=()=>AnnouncementBarDismissStorage.get()==='true';const setDismissedInStorage=bool=>AnnouncementBarDismissStorage.set(String(bool));const Context=/*#__PURE__*/react.createContext(null);function useContextValue(){const{announcementBar}=(0,useThemeConfig/* useThemeConfig */.L)();const isBrowser=(0,useIsBrowser/* default */.Z)();const[isClosed,setClosed]=(0,react.useState)(()=>isBrowser?// On client navigation: init with local storage value
isDismissedInStorage():// On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
false);// Update state after hydration
(0,react.useEffect)(()=>{setClosed(isDismissedInStorage());},[]);const handleClose=(0,react.useCallback)(()=>{setDismissedInStorage(true);setClosed(true);},[]);(0,react.useEffect)(()=>{if(!announcementBar){return;}const{id}=announcementBar;let viewedId=IdStorage.get();// Retrocompatibility due to spelling mistake of default id
// see https://github.com/facebook/docusaurus/issues/3338
// cSpell:ignore annoucement
if(viewedId==='annoucement-bar'){viewedId='announcement-bar';}const isNewAnnouncement=id!==viewedId;IdStorage.set(id);if(isNewAnnouncement){setDismissedInStorage(false);}if(isNewAnnouncement||!isDismissedInStorage()){setClosed(false);}},[announcementBar]);return (0,react.useMemo)(()=>({isActive:!!announcementBar&&!isClosed,close:handleClose}),[announcementBar,isClosed,handleClose]);}function AnnouncementBarProvider(_ref){let{children}=_ref;const value=useContextValue();return/*#__PURE__*/react.createElement(Context.Provider,{value:value},children);}function useAnnouncementBar(){const api=(0,react.useContext)(Context);if(!api){throw new reactUtils/* ReactContextError */.i6('AnnouncementBarProvider');}return api;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Close/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconClose(_ref){let{width=21,height=21,color='currentColor',strokeWidth=1.2,className,...restProps}=_ref;return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({viewBox:"0 0 15 15",width:width,height:height},restProps),/*#__PURE__*/react.createElement("g",{stroke:color,strokeWidth:strokeWidth},/*#__PURE__*/react.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/CloseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CloseButton_styles_module = ({"closeButton":"closeButton_CVFx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/CloseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBarCloseButton(props){return/*#__PURE__*/react.createElement("button",(0,esm_extends/* default */.Z)({type:"button","aria-label":(0,Translate/* translate */.I)({id:'theme.AnnouncementBar.closeButtonAriaLabel',message:'Close',description:'The ARIA label for close button of announcement bar'})},props,{className:(0,clsx_m/* default */.Z)('clean-btn close',CloseButton_styles_module.closeButton,props.className)}),/*#__PURE__*/react.createElement(IconClose,{width:14,height:14,strokeWidth:3.1}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"content":"content_knG7"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBarContent(props){const{announcementBar}=(0,useThemeConfig/* useThemeConfig */.L)();const{content}=announcementBar;return/*#__PURE__*/react.createElement("div",(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)(Content_styles_module.content,props.className)// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const AnnouncementBar_styles_module = ({"announcementBar":"announcementBar_mb4j","announcementBarPlaceholder":"announcementBarPlaceholder_vyr4","announcementBarClose":"announcementBarClose_gvF7","announcementBarContent":"announcementBarContent_xLdY"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){const{announcementBar}=(0,useThemeConfig/* useThemeConfig */.L)();const{isActive,close}=useAnnouncementBar();if(!isActive){return null;}const{backgroundColor,textColor,isCloseable}=announcementBar;return/*#__PURE__*/react.createElement("div",{className:AnnouncementBar_styles_module.announcementBar,style:{backgroundColor,color:textColor},role:"banner"},isCloseable&&/*#__PURE__*/react.createElement("div",{className:AnnouncementBar_styles_module.announcementBarPlaceholder}),/*#__PURE__*/react.createElement(AnnouncementBarContent,{className:AnnouncementBar_styles_module.announcementBarContent}),isCloseable&&/*#__PURE__*/react.createElement(AnnouncementBarCloseButton,{onClick:close,className:AnnouncementBar_styles_module.announcementBarClose}));}
// EXTERNAL MODULE: ./src/components/Header.tsx + 12 modules
var Header = __webpack_require__(2644);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
;// CONCATENATED MODULE: ./src/theme/Navbar/index.tsx
function Navbar(){const{siteConfig}=(0,useDocusaurusContext/* default */.Z)();const items=siteConfig.themeConfig.navbar.items;const links=items.map(i=>({label:i.label,link:i.to}));return/*#__PURE__*/react.createElement(Header/* default */.Z,{links:links,title:siteConfig.themeConfig.navbar.title});}
// EXTERNAL MODULE: ./src/components/Footer.tsx
var Footer = __webpack_require__(5800);
;// CONCATENATED MODULE: ./src/theme/Footer/index.tsx
function Footer_Footer(){const{footer}=(0,useThemeConfig/* useThemeConfig */.L)();if(!footer){return null;}var items=[];const{copyright,links,logo,style}=footer;links.forEach(link=>{link.items.forEach(i=>items.push({label:i.label,link:i.href}));});console.log(copyright,links,logo,style);return/*#__PURE__*/react.createElement(Footer/* default */.Z,{links:items,copyright:copyright});}/* harmony default export */ const theme_Footer = (/*#__PURE__*/react.memo(Footer_Footer));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var colorMode = __webpack_require__(2949);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(2466);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(373);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js + 1 modules
var navbarMobileSidebar = __webpack_require__(2961);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var navbarSecondaryMenu_content = __webpack_require__(3102);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/display.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const display_Context=/*#__PURE__*/react.createContext(null);function display_useContextValue(){const mobileSidebar=(0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();const content=(0,navbarSecondaryMenu_content/* useNavbarSecondaryMenuContent */.HY)();const[shown,setShown]=(0,react.useState)(false);const hasContent=content.component!==null;const previousHasContent=(0,reactUtils/* usePrevious */.D9)(hasContent);// When content is become available for the first time (set in useEffect)
// we set this content to be shown!
(0,react.useEffect)(()=>{const contentBecameAvailable=hasContent&&!previousHasContent;if(contentBecameAvailable){setShown(true);}},[hasContent,previousHasContent]);// On sidebar close, secondary menu is set to be shown on next re-opening
// (if any secondary menu content available)
(0,react.useEffect)(()=>{if(!hasContent){setShown(false);return;}if(!mobileSidebar.shown){setShown(true);}},[mobileSidebar.shown,hasContent]);return (0,react.useMemo)(()=>[shown,setShown],[shown]);}/** @internal */function NavbarSecondaryMenuDisplayProvider(_ref){let{children}=_ref;const value=display_useContextValue();return/*#__PURE__*/react.createElement(display_Context.Provider,{value:value},children);}function renderElement(content){if(content.component){const Comp=content.component;return/*#__PURE__*/React.createElement(Comp,content.props);}return undefined;}/** Wires the logic for rendering the mobile navbar secondary menu. */function useNavbarSecondaryMenu(){const value=useContext(display_Context);if(!value){throw new ReactContextError('NavbarSecondaryMenuDisplayProvider');}const[shown,setShown]=value;const hide=useCallback(()=>setShown(false),[setShown]);const content=useNavbarSecondaryMenuContent();return useMemo(()=>({shown,hide,content:renderElement(content)}),[hide,content,shown]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/navbarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DefaultNavItemPosition='right';/**
 * Split links by left/right. If position is unspecified, fallback to right.
 */function splitNavbarItems(items){function isLeft(item){return(item.position??DefaultNavItemPosition)==='left';}const leftItems=items.filter(isLeft);const rightItems=items.filter(item=>!isLeft(item));return[leftItems,rightItems];}/**
 * Composes multiple navbar state providers that are mutually dependent and
 * hence can't be re-ordered.
 */function NavbarProvider(_ref){let{children}=_ref;return/*#__PURE__*/react.createElement(navbarSecondaryMenu_content/* NavbarSecondaryMenuContentProvider */.n2,null,/*#__PURE__*/react.createElement(navbarMobileSidebar/* NavbarMobileSidebarProvider */.M,null,/*#__PURE__*/react.createElement(NavbarSecondaryMenuDisplayProvider,null,children)));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/Provider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Provider=(0,reactUtils/* composeProviders */.Qc)([colorMode/* ColorModeProvider */.S,AnnouncementBarProvider,scrollUtils/* ScrollControllerProvider */.OC,docsPreferredVersion/* DocsPreferredVersionContextProvider */.L5,metadataUtils/* PluginHtmlClassNameProvider */.VC,NavbarProvider]);function LayoutProvider(_ref){let{children}=_ref;return/*#__PURE__*/react.createElement(Provider,null,children);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ErrorPageContent.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ErrorPageContent(_ref){let{error,tryAgain}=_ref;return/*#__PURE__*/react.createElement("main",{className:"container margin-vert--xl"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"col col--6 col--offset-3"},/*#__PURE__*/react.createElement("h1",{className:"hero__title"},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.ErrorPageContent.title",description:"The title of the fallback page when the page crashed"},"This page crashed.")),/*#__PURE__*/react.createElement("p",null,error.message),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("button",{type:"button",onClick:tryAgain},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.ErrorPageContent.tryAgain",description:"The label of the button to try again when the page crashed"},"Try again"))))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"mainWrapper":"mainWrapper_z2l0"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){const{children,noFooter,wrapperClassName,// Not really layout-related, but kept for convenience/retro-compatibility
title,description}=props;(0,useKeyboardNavigation/* useKeyboardNavigation */.t)();return/*#__PURE__*/react.createElement(LayoutProvider,null,/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title,description:description}),/*#__PURE__*/react.createElement(SkipToContent,null),/*#__PURE__*/react.createElement(AnnouncementBar,null),/*#__PURE__*/react.createElement(Navbar,null),/*#__PURE__*/react.createElement("div",{id:SkipToContentFallbackId,className:(0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.wrapper.main */.k.wrapper.main,Layout_styles_module.mainWrapper,wrapperClassName)},/*#__PURE__*/react.createElement(ErrorBoundary/* default */.Z,{fallback:params=>/*#__PURE__*/react.createElement(ErrorPageContent,params)},children)),!noFooter&&/*#__PURE__*/react.createElement(theme_Footer,null));}

/***/ }),

/***/ 197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchMetadata)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5742);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Note: we bias toward using Algolia metadata on purpose
// Not doing so leads to confusion in the community,
// as it requires to first crawl the site with the Algolia plugin enabled first
// - https://github.com/facebook/docusaurus/issues/6693
// - https://github.com/facebook/docusaurus/issues/4555
function SearchMetadata(_ref){let{locale,version,tag}=_ref;// Seems safe to consider here the locale is the language, as the existing
// docsearch:language filter is afaik a regular string-based filter
const language=locale;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,locale&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docusaurus_locale",content:locale}),version&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docusaurus_version",content:version}),tag&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docusaurus_tag",content:tag}),language&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docsearch:language",content:language}),version&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docsearch:version",content:version}),tag&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"docsearch:docusaurus_tag",content:tag}));}

/***/ }),

/***/ 2949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useColorMode),
/* harmony export */   "S": () => (/* binding */ ColorModeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(902);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6668);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);const ColorModeStorageKey='theme';const ColorModeStorage=(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_2__/* .createStorageSlot */ .WA)(ColorModeStorageKey);const ColorModes={light:'light',dark:'dark'};// Ensure to always return a valid colorMode even if input is invalid
const coerceToColorMode=colorMode=>colorMode===ColorModes.dark?ColorModes.dark:ColorModes.light;const getInitialColorMode=defaultMode=>_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM?coerceToColorMode(document.documentElement.getAttribute('data-theme')):coerceToColorMode(defaultMode);const storeColorMode=newColorMode=>{ColorModeStorage.set(coerceToColorMode(newColorMode));};function useContextValue(){const{colorMode:{defaultMode,disableSwitch,respectPrefersColorScheme}}=(0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_3__/* .useThemeConfig */ .L)();const[colorMode,setColorModeState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialColorMode(defaultMode));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// A site is deployed without disableSwitch
// => User visits the site and has a persisted value
// => Site later enabled disableSwitch
// => Clear the previously stored value to apply the site's setting
if(disableSwitch){ColorModeStorage.del();}},[disableSwitch]);const setColorMode=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(newColorMode,options){if(options===void 0){options={};}const{persist=true}=options;if(newColorMode){setColorModeState(newColorMode);if(persist){storeColorMode(newColorMode);}}else{if(respectPrefersColorScheme){setColorModeState(window.matchMedia('(prefers-color-scheme: dark)').matches?ColorModes.dark:ColorModes.light);}else{setColorModeState(defaultMode);}ColorModeStorage.del();}},[respectPrefersColorScheme,defaultMode]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{document.documentElement.setAttribute('data-theme',coerceToColorMode(colorMode));},[colorMode]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(disableSwitch){return undefined;}const onChange=e=>{if(e.key!==ColorModeStorageKey){return;}const storedColorMode=ColorModeStorage.get();if(storedColorMode!==null){setColorMode(coerceToColorMode(storedColorMode));}};window.addEventListener('storage',onChange);return()=>window.removeEventListener('storage',onChange);},[disableSwitch,setColorMode]);// PCS is coerced to light mode when printing, which causes the color mode to
// be reset to dark when exiting print mode, disregarding user settings. When
// the listener fires only because of a print/screen switch, we don't change
// color mode. See https://github.com/facebook/docusaurus/pull/6490
const previousMediaIsPrint=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(disableSwitch&&!respectPrefersColorScheme){return undefined;}const mql=window.matchMedia('(prefers-color-scheme: dark)');const onChange=()=>{if(window.matchMedia('print').matches||previousMediaIsPrint.current){previousMediaIsPrint.current=window.matchMedia('print').matches;return;}setColorMode(null);};mql.addListener(onChange);return()=>mql.removeListener(onChange);},[setColorMode,disableSwitch,respectPrefersColorScheme]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({colorMode,setColorMode,get isDarkTheme(){if(false){}return colorMode===ColorModes.dark;},setLightTheme(){if(false){}setColorMode(ColorModes.light);},setDarkTheme(){if(false){}setColorMode(ColorModes.dark);}}),[colorMode,setColorMode]);}function ColorModeProvider(_ref){let{children}=_ref;const value=useContextValue();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:value},children);}function useColorMode(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(context==null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_4__/* .ReactContextError */ .i6('ColorModeProvider','Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.');}return context;}

/***/ }),

/***/ 373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useDocsPreferredVersion),
/* harmony export */   "L5": () => (/* binding */ DocsPreferredVersionContextProvider)
/* harmony export */ });
/* unused harmony export useDocsPreferredVersionByPluginId */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _docusaurus_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9935);
/* harmony import */ var _utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6668);
/* harmony import */ var _utils_docsUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3438);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(902);
/* harmony import */ var _utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const storageKey=pluginId=>`docs-preferred-version-${pluginId}`;const DocsPreferredVersionStorage={save:(pluginId,persistence,versionName)=>{(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .WA)(storageKey(pluginId),{persistence}).set(versionName);},read:(pluginId,persistence)=>(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .WA)(storageKey(pluginId),{persistence}).get(),clear:(pluginId,persistence)=>{(0,_utils_storageUtils__WEBPACK_IMPORTED_MODULE_1__/* .createStorageSlot */ .WA)(storageKey(pluginId),{persistence}).del();}};/**
 * Initial state is always null as we can't read local storage from node SSR
 */const getInitialState=pluginIds=>Object.fromEntries(pluginIds.map(id=>[id,{preferredVersionName:null}]));/**
 * Read storage for all docs plugins, assigning each doc plugin a preferred
 * version (if found)
 */function readStorageState(_ref){let{pluginIds,versionPersistence,allDocsData}=_ref;/**
     * The storage value we read might be stale, and belong to a version that does
     * not exist in the site anymore. In such case, we remove the storage value to
     * avoid downstream errors.
     */function restorePluginState(pluginId){const preferredVersionNameUnsafe=DocsPreferredVersionStorage.read(pluginId,versionPersistence);const pluginData=allDocsData[pluginId];const versionExists=pluginData.versions.some(version=>version.name===preferredVersionNameUnsafe);if(versionExists){return{preferredVersionName:preferredVersionNameUnsafe};}DocsPreferredVersionStorage.clear(pluginId,versionPersistence);return{preferredVersionName:null};}return Object.fromEntries(pluginIds.map(id=>[id,restorePluginState(id)]));}function useVersionPersistence(){return (0,_utils_useThemeConfig__WEBPACK_IMPORTED_MODULE_2__/* .useThemeConfig */ .L)().docs.versionPersistence;}const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useContextValue(){const allDocsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useAllDocsData */ ._r)();const versionPersistence=useVersionPersistence();const pluginIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Object.keys(allDocsData),[allDocsData]);// Initial state is empty, as we can't read browser storage in node/SSR
const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialState(pluginIds));// On mount, we set the state read from browser storage
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setState(readStorageState({allDocsData,versionPersistence,pluginIds}));},[allDocsData,versionPersistence,pluginIds]);// The API that we expose to consumer hooks (memo for constant object)
const api=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{function savePreferredVersion(pluginId,versionName){DocsPreferredVersionStorage.save(pluginId,versionPersistence,versionName);setState(s=>({...s,[pluginId]:{preferredVersionName:versionName}}));}return{savePreferredVersion};},[versionPersistence]);return[state,api];}function DocsPreferredVersionContextProviderUnsafe(_ref2){let{children}=_ref2;const value=useContextValue();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:value},children);}/**
 * This is a maybe-layer. If the docs plugin is not enabled, this provider is a
 * simple pass-through.
 */function DocsPreferredVersionContextProvider(_ref3){let{children}=_ref3;if(_utils_docsUtils__WEBPACK_IMPORTED_MODULE_4__/* .isDocsPluginEnabled */ .cE){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocsPreferredVersionContextProviderUnsafe,null,children);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children);}function useDocsPreferredVersionContext(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_5__/* .ReactContextError */ .i6('DocsPreferredVersionContextProvider');}return value;}/**
 * Returns a read-write interface to a plugin's preferred version. The
 * "preferred version" is defined as the last version that the user visited.
 * For example, if a user is using v3, even when v4 is later published, the user
 * would still be browsing v3 docs when she opens the website next time. Note,
 * the `preferredVersion` attribute will always be `null` before mount.
 */function useDocsPreferredVersion(pluginId){if(pluginId===void 0){pluginId=_docusaurus_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_PLUGIN_ID */ .m;}const docsData=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useDocsData */ .zh)(pluginId);const[state,api]=useDocsPreferredVersionContext();const{preferredVersionName}=state[pluginId];const preferredVersion=docsData.versions.find(version=>version.name===preferredVersionName)??null;const savePreferredVersionName=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(versionName=>{api.savePreferredVersion(pluginId,versionName);},[api,pluginId]);return{preferredVersion,savePreferredVersionName};}function useDocsPreferredVersionByPluginId(){const allDocsData=useAllDocsData();const[state]=useDocsPreferredVersionContext();function getPluginIdPreferredVersion(pluginId){const docsData=allDocsData[pluginId];const{preferredVersionName}=state[pluginId];return docsData.versions.find(version=>version.name===preferredVersionName)??null;}const pluginIds=Object.keys(allDocsData);return Object.fromEntries(pluginIds.map(id=>[id,getPluginIdPreferredVersion(id)]));}

/***/ }),

/***/ 1116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useDocsSidebar),
/* harmony export */   "b": () => (/* binding */ DocsSidebarProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(902);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a Symbol because null is a valid context value (a doc with no sidebar)
// Inspired by https://github.com/jamiebuilds/unstated-next/blob/master/src/unstated-next.tsx
const EmptyContext=Symbol('EmptyContext');const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(EmptyContext);/**
 * Provide the current sidebar to your children.
 */function DocsSidebarProvider(_ref){let{children,name,items}=_ref;const stableValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>name&&items?{name,items}:null,[name,items]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:stableValue},children);}/**
 * Gets the sidebar that's currently displayed, or `null` if there isn't one
 */function useDocsSidebar(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(value===EmptyContext){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('DocsSidebarProvider');}return value;}

/***/ }),

/***/ 4477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useDocsVersion),
/* harmony export */   "q": () => (/* binding */ DocsVersionProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(902);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/**
 * Provide the current version's metadata to your children.
 */function DocsVersionProvider(_ref){let{children,version}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:version},children);}/**
 * Gets the version metadata of the current doc page.
 */function useDocsVersion(){const version=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(version===null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('DocsVersionProvider');}return version;}

/***/ }),

/***/ 2961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ NavbarMobileSidebarProvider),
  "e": () => (/* binding */ useNavbarMobileSidebar)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(3102);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(7524);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6550);
// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(1688);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(902);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// @ts-expect-error: TODO temporary until React 18 upgrade
/**
 * Permits to register a handler that will be called on history actions (pop,
 * push, replace). If the handler returns `false`, the navigation transition
 * will be blocked/cancelled.
 */function useHistoryActionHandler(handler){const history=(0,react_router/* useHistory */.k6)();const stableHandler=(0,reactUtils/* useEvent */.zX)(handler);(0,react.useEffect)(// See https://github.com/remix-run/history/blob/main/docs/blocking-transitions.md
()=>history.block((location,action)=>stableHandler(location,action)),[history,stableHandler]);}/**
 * Permits to register a handler that will be called on history pop navigation
 * (backward/forward). If the handler returns `false`, the backward/forward
 * transition will be blocked. Unfortunately there's no good way to detect the
 * "direction" (backward/forward) of the POP event.
 */function useHistoryPopHandler(handler){useHistoryActionHandler((location,action)=>{if(action==='POP'){// Maybe block navigation if handler returns false
return handler(location,action);}// Don't block other navigation actions
return undefined;});}/**
 * Permits to efficiently subscribe to a slice of the history
 * See https://thisweekinreact.com/articles/useSyncExternalStore-the-underrated-react-api
 * @param selector
 */function useHistorySelector(selector){const history=useHistory();return useSyncExternalStore(history.listen,()=>selector(history),()=>selector(history));}/**
 * Permits to efficiently subscribe to a specific querystring value
 * @param key
 */function useQueryStringValue(key){return useHistorySelector(history=>{if(key===null){return null;}return new URLSearchParams(history.location.search).get(key);});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6668);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react.createContext(undefined);function useIsNavbarMobileSidebarDisabled(){const secondaryMenuContent=(0,content/* useNavbarSecondaryMenuContent */.HY)();const{items}=(0,useThemeConfig/* useThemeConfig */.L)().navbar;return items.length===0&&!secondaryMenuContent.component;}function useContextValue(){const disabled=useIsNavbarMobileSidebarDisabled();const windowSize=(0,useWindowSize/* useWindowSize */.i)();const shouldRender=!disabled&&windowSize==='mobile';const[shown,setShown]=(0,react.useState)(false);// Close mobile sidebar on navigation pop
// Most likely firing when using the Android back button (but not only)
useHistoryPopHandler(()=>{if(shown){setShown(false);// Prevent pop navigation; seems desirable enough
// See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
return false;}return undefined;});const toggle=(0,react.useCallback)(()=>{setShown(s=>!s);},[]);(0,react.useEffect)(()=>{if(windowSize==='desktop'){setShown(false);}},[windowSize]);return (0,react.useMemo)(()=>({disabled,shouldRender,toggle,shown}),[disabled,shouldRender,toggle,shown]);}function NavbarMobileSidebarProvider(_ref){let{children}=_ref;const value=useContextValue();return/*#__PURE__*/react.createElement(Context.Provider,{value:value},children);}function useNavbarMobileSidebar(){const context=react.useContext(Context);if(context===undefined){throw new reactUtils/* ReactContextError */.i6('NavbarMobileSidebarProvider');}return context;}

/***/ }),

/***/ 3102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HY": () => (/* binding */ useNavbarSecondaryMenuContent),
/* harmony export */   "Zo": () => (/* binding */ NavbarSecondaryMenuFiller),
/* harmony export */   "n2": () => (/* binding */ NavbarSecondaryMenuContentProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(902);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/** @internal */function NavbarSecondaryMenuContentProvider(_ref){let{children}=_ref;const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({component:null,props:null});return/*#__PURE__*/ (// @ts-expect-error: this context is hard to type
react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:value},children));}/** @internal */function useNavbarSecondaryMenuContent(){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!value){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('NavbarSecondaryMenuContentProvider');}return value[0];}/**
 * This component renders nothing by itself, but it fills the placeholder in the
 * generic secondary menu layout. This reduces coupling between the main layout
 * and the specific page.
 *
 * This kind of feature is often called portal/teleport/gateway/outlet...
 * Various unmaintained React libs exist. Most up-to-date one:
 * https://github.com/gregberge/react-teleporter
 * Not sure any of those is safe regarding concurrent mode.
 */function NavbarSecondaryMenuFiller(_ref2){let{component,props}=_ref2;const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!context){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('NavbarSecondaryMenuContentProvider');}const[,setContent]=context;// To avoid useless context re-renders, props are memoized shallowly
const memoizedProps=(0,_utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .useShallowMemoObject */ .Ql)(props);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// @ts-expect-error: this context is hard to type
setContent({component,props:memoizedProps});},[setContent,component,memoizedProps]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>setContent({component:null,props:null}),[setContent]);return null;}

/***/ }),

/***/ 9727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ keyboardFocusedClassName),
  "t": () => (/* binding */ useKeyboardNavigation)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/styles.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useKeyboardNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const keyboardFocusedClassName='navigation-with-keyboard';/**
 * Side-effect that adds the `keyboardFocusedClassName` to the body element when
 * the keyboard has been pressed, or removes it when the mouse is clicked.
 *
 * The presence of this class name signals that the user may be using keyboard
 * for navigation, and the theme **must** add focus outline when this class name
 * is present. (And optionally not if it's absent, for design purposes)
 *
 * Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
 */function useKeyboardNavigation(){(0,react.useEffect)(()=>{function handleOutlineStyles(e){if(e.type==='keydown'&&e.key==='Tab'){document.body.classList.add(keyboardFocusedClassName);}if(e.type==='mousedown'){document.body.classList.remove(keyboardFocusedClassName);}}document.addEventListener('keydown',handleOutlineStyles);document.addEventListener('mousedown',handleOutlineStyles);return()=>{document.body.classList.remove(keyboardFocusedClassName);document.removeEventListener('keydown',handleOutlineStyles);document.removeEventListener('mousedown',handleOutlineStyles);};},[]);}

/***/ }),

/***/ 7524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const windowSizes={desktop:'desktop',mobile:'mobile',ssr:'ssr'};const DesktopThresholdWidth=996;function getWindowSize(){if(!_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM){return windowSizes.ssr;}return window.innerWidth>DesktopThresholdWidth?windowSizes.desktop:windowSizes.mobile;}const DevSimulateSSR= false&&0;/**
 * Gets the current window size as an enum value. We don't want it to return the
 * actual width value, so that it only re-renders once a breakpoint is crossed.
 *
 * It may return `"ssr"`, which is very important to handle hydration FOUC or
 * layout shifts. You have to handle it explicitly upfront. On the server, you
 * may need to render BOTH the mobile/desktop elements (and hide one of them
 * with mediaquery). We don't return `undefined` on purpose, to make it more
 * explicit.
 *
 * In development mode, this hook will still return `"ssr"` for one second, to
 * catch potential layout shifts, similar to strict mode calling effects twice.
 */function useWindowSize(){const[windowSize,setWindowSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{if(DevSimulateSSR){return'ssr';}return getWindowSize();});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function updateWindowSize(){setWindowSize(getWindowSize());}const timeout=DevSimulateSSR?window.setTimeout(updateWindowSize,1000):undefined;window.addEventListener('resize',updateWindowSize);return()=>{window.removeEventListener('resize',updateWindowSize);clearTimeout(timeout);};},[]);return windowSize;}

/***/ }),

/***/ 5281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ThemeClassNames)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Please do not modify the classnames! This is a breaking change, and annoying
// for users!
/**
 * These class names are used to style page layouts in Docusaurus, meant to be
 * targeted by user-provided custom CSS selectors.
 */const ThemeClassNames={page:{blogListPage:'blog-list-page',blogPostPage:'blog-post-page',blogTagsListPage:'blog-tags-list-page',blogTagPostListPage:'blog-tags-post-list-page',docsDocPage:'docs-doc-page',docsTagsListPage:'docs-tags-list-page',docsTagDocListPage:'docs-tags-doc-list-page',mdxPage:'mdx-page'},wrapper:{main:'main-wrapper',blogPages:'blog-wrapper',docsPages:'docs-wrapper',mdxPages:'mdx-wrapper'},common:{editThisPage:'theme-edit-this-page',lastUpdated:'theme-last-updated',backToTopButton:'theme-back-to-top-button',codeBlock:'theme-code-block',admonition:'theme-admonition',admonitionType:type=>`theme-admonition-${type}`},layout:{// TODO add other stable classNames here
},/**
     * Follows the naming convention "theme-{blog,doc,version,page}?-<suffix>"
     */docs:{docVersionBanner:'theme-doc-version-banner',docVersionBadge:'theme-doc-version-badge',docBreadcrumbs:'theme-doc-breadcrumbs',docMarkdown:'theme-doc-markdown',docTocMobile:'theme-doc-toc-mobile',docTocDesktop:'theme-doc-toc-desktop',docFooter:'theme-doc-footer',docFooterTagsRow:'theme-doc-footer-tags-row',docFooterEditMetaRow:'theme-doc-footer-edit-meta-row',docSidebarContainer:'theme-doc-sidebar-container',docSidebarMenu:'theme-doc-sidebar-menu',docSidebarItemCategory:'theme-doc-sidebar-item-category',docSidebarItemLink:'theme-doc-sidebar-item-link',docSidebarItemCategoryLevel:level=>`theme-doc-sidebar-item-category-level-${level}`,docSidebarItemLinkLevel:level=>`theme-doc-sidebar-item-link-level-${level}`// TODO add other stable classNames here
},blog:{// TODO add other stable classNames here
}};

/***/ }),

/***/ 3438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MN": () => (/* binding */ filterDocCardListItems),
/* harmony export */   "Wl": () => (/* binding */ findFirstCategoryLink),
/* harmony export */   "_F": () => (/* binding */ isActiveSidebarItem),
/* harmony export */   "cE": () => (/* binding */ isDocsPluginEnabled),
/* harmony export */   "hI": () => (/* binding */ useDocRouteMetadata),
/* harmony export */   "jA": () => (/* binding */ useCurrentSidebarCategory),
/* harmony export */   "s1": () => (/* binding */ useSidebarBreadcrumbs),
/* harmony export */   "xz": () => (/* binding */ useDocById)
/* harmony export */ });
/* unused harmony exports findSidebarCategory, useDocsVersionCandidates, useLayoutDocsSidebar, useLayoutDoc */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6550);
/* harmony import */ var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8790);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(143);
/* harmony import */ var _contexts_docsVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4477);
/* harmony import */ var _contexts_docsSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1116);
/* harmony import */ var _routesUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8596);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO not ideal, see also "useDocs"
const isDocsPluginEnabled=!!_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useAllDocsData */ ._r;function useDocById(id){const version=(0,_contexts_docsVersion__WEBPACK_IMPORTED_MODULE_2__/* .useDocsVersion */ .E)();if(!id){return undefined;}const doc=version.docs[id];if(!doc){throw new Error(`no version doc found by id=${id}`);}return doc;}/**
 * Pure function, similar to `Array#find`, but works on the sidebar tree.
 */function findSidebarCategory(sidebar,predicate){for(const item of sidebar){if(item.type==='category'){if(predicate(item)){return item;}const subItem=findSidebarCategory(item.items,predicate);if(subItem){return subItem;}}}return undefined;}/**
 * Best effort to assign a link to a sidebar category. If the category doesn't
 * have a link itself, we link to the first sub item with a link.
 */function findFirstCategoryLink(item){if(item.href){return item.href;}for(const subItem of item.items){if(subItem.type==='link'){return subItem.href;}else if(subItem.type==='category'){const categoryLink=findFirstCategoryLink(subItem);if(categoryLink){return categoryLink;}}// Could be "html" items
}return undefined;}/**
 * Gets the category associated with the current location. Should only be used
 * on category index pages.
 */function useCurrentSidebarCategory(){const{pathname}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .TH)();const sidebar=(0,_contexts_docsSidebar__WEBPACK_IMPORTED_MODULE_4__/* .useDocsSidebar */ .V)();if(!sidebar){throw new Error('Unexpected: cant find current sidebar in context');}const categoryBreadcrumbs=getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname,onlyCategories:true});const deepestCategory=categoryBreadcrumbs.slice(-1)[0];if(!deepestCategory){throw new Error(`${pathname} is not associated with a category. useCurrentSidebarCategory() should only be used on category index pages.`);}return deepestCategory;}const isActive=(testedPath,activePath)=>typeof testedPath!=='undefined'&&(0,_routesUtils__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .Mg)(testedPath,activePath);const containsActiveSidebarItem=(items,activePath)=>items.some(subItem=>isActiveSidebarItem(subItem,activePath));/**
 * Checks if a sidebar item should be active, based on the active path.
 */function isActiveSidebarItem(item,activePath){if(item.type==='link'){return isActive(item.href,activePath);}if(item.type==='category'){return isActive(item.href,activePath)||containsActiveSidebarItem(item.items,activePath);}return false;}/**
 * Get the sidebar the breadcrumbs for a given pathname
 * Ordered from top to bottom
 */function getSidebarBreadcrumbs(_ref){let{sidebarItems,pathname,onlyCategories=false}=_ref;const breadcrumbs=[];function extract(items){for(const item of items){if(item.type==='category'&&((0,_routesUtils__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .Mg)(item.href,pathname)||extract(item.items))||item.type==='link'&&(0,_routesUtils__WEBPACK_IMPORTED_MODULE_5__/* .isSamePath */ .Mg)(item.href,pathname)){const filtered=onlyCategories&&item.type!=='category';if(!filtered){breadcrumbs.unshift(item);}return true;}}return false;}extract(sidebarItems);return breadcrumbs;}/**
 * Gets the breadcrumbs of the current doc page, based on its sidebar location.
 * Returns `null` if there's no sidebar or breadcrumbs are disabled.
 */function useSidebarBreadcrumbs(){const sidebar=(0,_contexts_docsSidebar__WEBPACK_IMPORTED_MODULE_4__/* .useDocsSidebar */ .V)();const{pathname}=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .TH)();const breadcrumbsOption=(0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_1__/* .useActivePlugin */ .gA)()?.pluginData.breadcrumbs;if(breadcrumbsOption===false||!sidebar){return null;}return getSidebarBreadcrumbs({sidebarItems:sidebar.items,pathname});}/**
 * "Version candidates" are mostly useful for the layout components, which must
 * be able to work on all pages. For example, if a user has `{ type: "doc",
 * docId: "intro" }` as a navbar item, which version does that refer to? We
 * believe that it could refer to at most three version candidates:
 *
 * 1. The **active version**, the one that the user is currently browsing. See
 * {@link useActiveDocContext}.
 * 2. The **preferred version**, the one that the user last visited. See
 * {@link useDocsPreferredVersion}.
 * 3. The **latest version**, the "default". See {@link useLatestVersion}.
 *
 * @param docsPluginId The plugin ID to get versions from.
 * @returns An array of 1~3 versions with priorities defined above, guaranteed
 * to be unique and non-sparse. Will be memoized, hence stable for deps array.
 */function useDocsVersionCandidates(docsPluginId){const{activeVersion}=useActiveDocContext(docsPluginId);const{preferredVersion}=useDocsPreferredVersion(docsPluginId);const latestVersion=useLatestVersion(docsPluginId);return useMemo(()=>uniq([activeVersion,preferredVersion,latestVersion].filter(Boolean)),[activeVersion,preferredVersion,latestVersion]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a sidebar ID could
 * be ambiguous. This hook would always return a sidebar to be linked to. See
 * also {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a sidebar with said ID is not found.
 */function useLayoutDocsSidebar(sidebarId,docsPluginId){const versions=useDocsVersionCandidates(docsPluginId);return useMemo(()=>{const allSidebars=versions.flatMap(version=>version.sidebars?Object.entries(version.sidebars):[]);const sidebarEntry=allSidebars.find(sidebar=>sidebar[0]===sidebarId);if(!sidebarEntry){throw new Error(`Can't find any sidebar with id "${sidebarId}" in version${versions.length>1?'s':''} ${versions.map(version=>version.name).join(', ')}".
  Available sidebar ids are:
  - ${Object.keys(allSidebars).join('\n- ')}`);}return sidebarEntry[1];},[sidebarId,versions]);}/**
 * The layout components, like navbar items, must be able to work on all pages,
 * even on non-doc ones where there's no version context, so a doc ID could be
 * ambiguous. This hook would always return a doc to be linked to. See also
 * {@link useDocsVersionCandidates} for how this selection is done.
 *
 * @throws This hook throws if a doc with said ID is not found.
 */function useLayoutDoc(docId,docsPluginId){const versions=useDocsVersionCandidates(docsPluginId);return useMemo(()=>{const allDocs=versions.flatMap(version=>version.docs);const doc=allDocs.find(versionDoc=>versionDoc.id===docId);if(!doc){const isDraft=versions.flatMap(version=>version.draftIds).includes(docId);// Drafts should be silently filtered instead of throwing
if(isDraft){return null;}throw new Error(`DocNavbarItem: couldn't find any doc with id "${docId}" in version${versions.length>1?'s':''} ${versions.map(version=>version.name).join(', ')}".
Available doc ids are:
- ${uniq(allDocs.map(versionDoc=>versionDoc.id)).join('\n- ')}`);}return doc;},[docId,versions]);}// TODO later read version/route directly from context
/**
 * The docs plugin creates nested routes, with the top-level route providing the
 * version metadata, and the subroutes creating individual doc pages. This hook
 * will match the current location against all known sub-routes.
 *
 * @param props The props received by `@theme/DocPage`
 * @returns The data of the relevant document at the current location, or `null`
 * if no document associated with the current location can be found.
 */function useDocRouteMetadata(_ref2){let{route,versionMetadata}=_ref2;const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */ .TH)();const docRoutes=route.routes;const currentDocRoute=docRoutes.find(docRoute=>(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .matchPath */ .LX)(location.pathname,docRoute));if(!currentDocRoute){return null;}// For now, the sidebarName is added as route config: not ideal!
const sidebarName=currentDocRoute.sidebar;const sidebarItems=sidebarName?versionMetadata.docsSidebars[sidebarName]:undefined;const docElement=(0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_6__/* .renderRoutes */ .H)(docRoutes);return{docElement,sidebarName,sidebarItems};}/**
 * Filter categories that don't have a link.
 * @param items
 */function filterDocCardListItems(items){return items.filter(item=>{if(item.type==='category'){return!!findFirstCategoryLink(item);}return true;});}

/***/ }),

/***/ 1944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FG": () => (/* binding */ HtmlClassNameProvider),
  "d": () => (/* binding */ PageMetadata),
  "VC": () => (/* binding */ PluginHtmlClassNameProvider)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5742);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/routeContext.js
var routeContext = __webpack_require__(226);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useRouteContext(){const context=react.useContext(routeContext/* Context */._);if(!context){throw new Error('Unexpected: no Docusaurus route context found');}return context;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4996);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2263);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/generalUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Formats the page's title based on relevant site config and other contexts.
 */function useTitleFormatter(title){const{siteConfig}=(0,useDocusaurusContext/* default */.Z)();const{title:siteTitle,titleDelimiter}=siteConfig;return title?.trim().length?`${title.trim()} ${titleDelimiter} ${siteTitle}`:siteTitle;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Helper component to manipulate page metadata and override site defaults.
 * Works in the same way as Helmet.
 */function PageMetadata(_ref){let{title,description,keywords,image,children}=_ref;const pageTitle=useTitleFormatter(title);const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.C)();const pageImage=image?withBaseUrl(image,{absolute:true}):undefined;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,title&&/*#__PURE__*/react.createElement("title",null,pageTitle),title&&/*#__PURE__*/react.createElement("meta",{property:"og:title",content:pageTitle}),description&&/*#__PURE__*/react.createElement("meta",{name:"description",content:description}),description&&/*#__PURE__*/react.createElement("meta",{property:"og:description",content:description}),keywords&&/*#__PURE__*/react.createElement("meta",{name:"keywords",content:// https://github.com/microsoft/TypeScript/issues/17002
Array.isArray(keywords)?keywords.join(','):keywords}),pageImage&&/*#__PURE__*/react.createElement("meta",{property:"og:image",content:pageImage}),pageImage&&/*#__PURE__*/react.createElement("meta",{name:"twitter:image",content:pageImage}),children);}const HtmlClassNameContext=/*#__PURE__*/react.createContext(undefined);/**
 * Every layer of this provider will append a class name to the HTML element.
 * There's no consumer for this hook: it's side-effect-only. This wrapper is
 * necessary because Helmet does not "merge" classes.
 * @see https://github.com/staylor/react-helmet-async/issues/161
 */function HtmlClassNameProvider(_ref2){let{className:classNameProp,children}=_ref2;const classNameContext=react.useContext(HtmlClassNameContext);const className=(0,clsx_m/* default */.Z)(classNameContext,classNameProp);return/*#__PURE__*/react.createElement(HtmlClassNameContext.Provider,{value:className},/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{className:className})),children);}function pluginNameToClassName(pluginName){return`plugin-${pluginName.replace(/docusaurus-(?:plugin|theme)-(?:content-)?/gi,'')}`;}/**
 * A very thin wrapper around `HtmlClassNameProvider` that adds the plugin ID +
 * name to the HTML class name.
 */function PluginHtmlClassNameProvider(_ref3){let{children}=_ref3;const routeContext=useRouteContext();const nameClass=pluginNameToClassName(routeContext.plugin.name);const idClass=`plugin-id-${routeContext.plugin.id}`;return/*#__PURE__*/react.createElement(HtmlClassNameProvider,{className:(0,clsx_m/* default */.Z)(nameClass,idClass)},children);}

/***/ }),

/***/ 902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D9": () => (/* binding */ usePrevious),
/* harmony export */   "Qc": () => (/* binding */ composeProviders),
/* harmony export */   "Ql": () => (/* binding */ useShallowMemoObject),
/* harmony export */   "i6": () => (/* binding */ ReactContextError),
/* harmony export */   "zX": () => (/* binding */ useEvent)
/* harmony export */ });
/* unused harmony export useIsomorphicLayoutEffect */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * This hook is like `useLayoutEffect`, but without the SSR warning.
 * It seems hacky but it's used in many React libs (Redux, Formik...).
 * Also mentioned here: https://github.com/facebook/react/issues/16956
 *
 * It is useful when you need to update a ref as soon as possible after a React
 * render (before `useEffect`).
 */const useIsomorphicLayoutEffect=_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;/**
 * Temporary userland implementation until an official hook is implemented
 * See RFC: https://github.com/reactjs/rfcs/pull/220
 *
 * Permits to transform an unstable callback (like an arrow function provided as
 * props) to a "stable" callback that is safe to use in a `useEffect` dependency
 * array. Useful to avoid React stale closure problems + avoid useless effect
 * re-executions.
 *
 * This generally works but has some potential drawbacks, such as
 * https://github.com/facebook/react/issues/16956#issuecomment-536636418
 */function useEvent(callback){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);useIsomorphicLayoutEffect(()=>{ref.current=callback;},[callback]);// @ts-expect-error: TS is right that this callback may be a supertype of T,
// but good enough for our use
return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){return ref.current(...arguments);},[]);}/**
 * Gets `value` from the last render.
 */function usePrevious(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();useIsomorphicLayoutEffect(()=>{ref.current=value;});return ref.current;}/**
 * This error is thrown when a context is consumed outside its provider. Allows
 * reusing a generic error message format and reduces bundle size. The hook's
 * name will be extracted from its stack, so only the provider's name is needed.
 */class ReactContextError extends Error{constructor(providerName,additionalInfo){super();this.name='ReactContextError';this.message=`Hook ${this.stack?.split('\n')[1]?.match(/at (?:\w+\.)?(?<name>\w+)/)?.groups.name??''} is called outside the <${providerName}>. ${additionalInfo??''}`;}}/**
 * Shallow-memoize an object. This means the returned object will be the same as
 * the previous render if the property keys and values did not change. This
 * works for simple cases: when property values are primitives or stable
 * objects.
 *
 * @param obj
 */function useShallowMemoObject(obj){const deps=Object.entries(obj);// Sort by keys to make it order-insensitive
deps.sort((a,b)=>a[0].localeCompare(b[0]));// eslint-disable-next-line react-hooks/exhaustive-deps
return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>obj,deps.flat());}/**
 * Creates a single React provider from an array of existing providers
 * assuming providers only take "children" as props.
 *
 * Prevents the annoying React element nesting
 * Example here: https://getfrontend.tips/compose-multiple-react-providers/
 *
 * The order matters:
 * - The first provider is at the top of the tree.
 * - The last provider is the most nested one
 *
 * @param providers array of providers to compose
 */function composeProviders(providers){// Creates a single React component: it's cheaper to compose JSX elements
return _ref=>{let{children}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,providers.reduceRight((element,CurrentProvider)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentProvider,null,element),children));};}

/***/ }),

/***/ 8596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mg": () => (/* binding */ isSamePath),
/* harmony export */   "Ns": () => (/* binding */ useHomePageRoute)
/* harmony export */ });
/* unused harmony export findHomePageRoute */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _generated_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(723);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2263);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Compare the 2 paths, case insensitive and ignoring trailing slash
 */function isSamePath(path1,path2){const normalize=pathname=>(!pathname||pathname.endsWith('/')?pathname:`${pathname}/`)?.toLowerCase();return normalize(path1)===normalize(path2);}/**
 * Note that sites don't always have a homepage in practice, so we can't assume
 * that linking to '/' is always safe.
 * @see https://github.com/facebook/docusaurus/pull/6517#issuecomment-1048709116
 */function findHomePageRoute(_ref){let{baseUrl,routes:initialRoutes}=_ref;function isHomePageRoute(route){return route.path===baseUrl&&route.exact===true;}function isHomeParentRoute(route){return route.path===baseUrl&&!route.exact;}function doFindHomePageRoute(routes){if(routes.length===0){return undefined;}const homePage=routes.find(isHomePageRoute);if(homePage){return homePage;}const indexSubRoutes=routes.filter(isHomeParentRoute).flatMap(route=>route.routes??[]);return doFindHomePageRoute(indexSubRoutes);}return doFindHomePageRoute(initialRoutes);}/**
 * Fetches the route that points to "/". Use this instead of the naive "/",
 * because the homepage may not exist.
 */function useHomePageRoute(){const{baseUrl}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)().siteConfig;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>findHomePageRoute({routes:_generated_routes__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,baseUrl}),[baseUrl]);}

/***/ }),

/***/ 2466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ct": () => (/* binding */ useSmoothScrollTo),
/* harmony export */   "OC": () => (/* binding */ ScrollControllerProvider),
/* harmony export */   "RF": () => (/* binding */ useScrollPosition)
/* harmony export */ });
/* unused harmony exports useScrollController, useScrollPositionBlocker */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(412);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2389);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(902);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useScrollControllerContextValue(){const scrollEventsEnabledRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({scrollEventsEnabledRef,enableScrollEvents:()=>{scrollEventsEnabledRef.current=true;},disableScrollEvents:()=>{scrollEventsEnabledRef.current=false;}}),[]);}const ScrollMonitorContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);function ScrollControllerProvider(_ref){let{children}=_ref;const value=useScrollControllerContextValue();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScrollMonitorContext.Provider,{value:value},children);}/**
 * We need a way to update the scroll position while ignoring scroll events
 * so as not to toggle Navbar/BackToTop visibility.
 *
 * This API permits to temporarily disable/ignore scroll events. Motivated by
 * https://github.com/facebook/docusaurus/pull/5618
 */function useScrollController(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScrollMonitorContext);if(context==null){throw new _reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .ReactContextError */ .i6('ScrollControllerProvider');}return context;}const getScrollPosition=()=>_docusaurus_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__/* ["default"].canUseDOM */ .Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;/**
 * This hook fires an effect when the scroll position changes. The effect will
 * be provided with the before/after scroll positions. Note that the effect may
 * not be always run: if scrolling is disabled through `useScrollController`, it
 * will be a no-op.
 *
 * @see {@link useScrollController}
 */function useScrollPosition(effect,deps){if(deps===void 0){deps=[];}const{scrollEventsEnabledRef}=useScrollController();const lastPositionRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getScrollPosition());const dynamicEffect=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_3__/* .useEvent */ .zX)(effect);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleScroll=()=>{if(!scrollEventsEnabledRef.current){return;}const currentPosition=getScrollPosition();dynamicEffect(currentPosition,lastPositionRef.current);lastPositionRef.current=currentPosition;};const opts={passive:true};handleScroll();window.addEventListener('scroll',handleScroll,opts);return()=>window.removeEventListener('scroll',handleScroll,opts);// eslint-disable-next-line react-hooks/exhaustive-deps
},[dynamicEffect,scrollEventsEnabledRef,...deps]);}function useScrollPositionSaver(){const lastElementRef=useRef({elem:null,top:0});const save=useCallback(elem=>{lastElementRef.current={elem,top:elem.getBoundingClientRect().top};},[]);const restore=useCallback(()=>{const{current:{elem,top}}=lastElementRef;if(!elem){return{restored:false};}const newTop=elem.getBoundingClientRect().top;const heightDiff=newTop-top;if(heightDiff){window.scrollBy({left:0,top:heightDiff});}lastElementRef.current={elem:null,top:0};return{restored:heightDiff!==0};},[]);return useMemo(()=>({save,restore}),[restore,save]);}/**
 * This hook permits to "block" the scroll position of a DOM element.
 * The idea is that we should be able to update DOM content above this element
 * but the screen position of this element should not change.
 *
 * Feature motivated by the Tabs groups: clicking on a tab may affect tabs of
 * the same group upper in the tree, yet to avoid a bad UX, the clicked tab must
 * remain under the user mouse.
 *
 * @see https://github.com/facebook/docusaurus/pull/5618
 */function useScrollPositionBlocker(){const scrollController=useScrollController();const scrollPositionSaver=useScrollPositionSaver();const nextLayoutEffectCallbackRef=useRef(undefined);const blockElementScrollPositionUntilNextRender=useCallback(el=>{scrollPositionSaver.save(el);scrollController.disableScrollEvents();nextLayoutEffectCallbackRef.current=()=>{const{restored}=scrollPositionSaver.restore();nextLayoutEffectCallbackRef.current=undefined;// Restoring the former scroll position will trigger a scroll event. We
// need to wait for next scroll event to happen before enabling the
// scrollController events again.
if(restored){const handleScrollRestoreEvent=()=>{scrollController.enableScrollEvents();window.removeEventListener('scroll',handleScrollRestoreEvent);};window.addEventListener('scroll',handleScrollRestoreEvent);}else{scrollController.enableScrollEvents();}};},[scrollController,scrollPositionSaver]);useLayoutEffect(()=>{// Queuing permits to restore scroll position after all useLayoutEffect
// have run, and yet preserve the sync nature of the scroll restoration
// See https://github.com/facebook/docusaurus/issues/8625
queueMicrotask(()=>nextLayoutEffectCallbackRef.current?.());});return{blockElementScrollPositionUntilNextRender};}function smoothScrollNative(top){window.scrollTo({top,behavior:'smooth'});return()=>{// Nothing to cancel, it's natively cancelled if user tries to scroll down
};}function smoothScrollPolyfill(top){let raf=null;const isUpScroll=document.documentElement.scrollTop>top;function rafRecursion(){const currentScroll=document.documentElement.scrollTop;if(isUpScroll&&currentScroll>top||!isUpScroll&&currentScroll<top){raf=requestAnimationFrame(rafRecursion);window.scrollTo(0,Math.floor((currentScroll-top)*0.85)+top);}}rafRecursion();// Break the recursion. Prevents the user from "fighting" against that
// recursion producing a weird UX
return()=>raf&&cancelAnimationFrame(raf);}/**
 * A "smart polyfill" of `window.scrollTo({ top, behavior: "smooth" })`.
 * This currently always uses a polyfilled implementation unless
 * `scroll-behavior: smooth` has been set in CSS, because native support
 * detection for scroll behavior seems unreliable.
 *
 * This hook does not do anything by itself: it returns a start and a stop
 * handle. You can execute either handle at any time.
 */function useSmoothScrollTo(){const cancelRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();// Not all have support for smooth scrolling (particularly Safari mobile iOS)
// TODO proper detection is currently unreliable!
// see https://github.com/wessberg/scroll-behavior-polyfill/issues/16
// For now, we only use native scroll behavior if smooth is already set,
// because otherwise the polyfill produces a weird UX when both CSS and JS try
// to scroll a page, and they cancel each other.
const supportsNativeSmoothScrolling=isBrowser&&getComputedStyle(document.documentElement).scrollBehavior==='smooth';return{startScroll:top=>{cancelRef.current=supportsNativeSmoothScrolling?smoothScrollNative(top):smoothScrollPolyfill(top);},cancelScroll:()=>cancelRef.current?.()};}

/***/ }),

/***/ 3320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HX": () => (/* binding */ DEFAULT_SEARCH_TAG),
/* harmony export */   "os": () => (/* binding */ docVersionSearchTag)
/* harmony export */ });
/* unused harmony export useContextualSearchFilters */
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2263);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const DEFAULT_SEARCH_TAG='default';/** The search tag to append as each doc's metadata. */function docVersionSearchTag(pluginId,versionName){return`docs-${pluginId}-${versionName}`;}/**
 * Gets the relevant context information for contextual search.
 *
 * The value is generic and not coupled to Algolia/DocSearch, since we may want
 * to support multiple search engines, or allowing users to use their own search
 * engine solution.
 */function useContextualSearchFilters(){const{i18n}=useDocusaurusContext();const allDocsData=useAllDocsData();const activePluginAndVersion=useActivePluginAndVersion();const docsPreferredVersionByPluginId=useDocsPreferredVersionByPluginId();// This can't use more specialized hooks because we are mapping over all
// plugin instances.
function getDocPluginTags(pluginId){const activeVersion=activePluginAndVersion?.activePlugin.pluginId===pluginId?activePluginAndVersion.activeVersion:undefined;const preferredVersion=docsPreferredVersionByPluginId[pluginId];const latestVersion=allDocsData[pluginId].versions.find(v=>v.isLast);const version=activeVersion??preferredVersion??latestVersion;return docVersionSearchTag(pluginId,version.name);}const tags=[DEFAULT_SEARCH_TAG,...Object.keys(allDocsData).map(getDocPluginTags)];return{locale:i18n.currentLocale,tags};}

/***/ }),

/***/ 12:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WA": () => (/* binding */ createStorageSlot)
/* harmony export */ });
/* unused harmony exports useStorageSlot, listStorageKeys */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1688);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// @ts-expect-error: TODO temp error until React 18 upgrade
const StorageTypes=(/* unused pure expression or super */ null && (['localStorage','sessionStorage','none']));const DefaultStorageType='localStorage';// window.addEventListener('storage') only works for different windows...
// so for current window we have to dispatch the event manually
// Now we can listen for both cross-window / current-window storage changes!
// see https://stackoverflow.com/a/71177640/82609
// see https://stackoverflow.com/questions/26974084/listen-for-changes-with-localstorage-on-the-same-window
function dispatchChangeEvent(_ref){let{key,oldValue,newValue,storage}=_ref;// If we set multiple times the same storage value, events should not be fired
// The native events behave this way, so our manual event dispatch should
// rather behave exactly the same. Not doing so might create infinite loops.
// See https://github.com/facebook/docusaurus/issues/8594
if(oldValue===newValue){return;}const event=document.createEvent('StorageEvent');event.initStorageEvent('storage',false,false,key,oldValue,newValue,window.location.href,storage);window.dispatchEvent(event);}/**
 * Will return `null` if browser storage is unavailable (like running Docusaurus
 * in an iframe). This should NOT be called in SSR.
 *
 * @see https://github.com/facebook/docusaurus/pull/4501
 */function getBrowserStorage(storageType){if(storageType===void 0){storageType=DefaultStorageType;}if(typeof window==='undefined'){throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');}if(storageType==='none'){return null;}try{return window[storageType];}catch(err){logOnceBrowserStorageNotAvailableWarning(err);return null;}}let hasLoggedBrowserStorageNotAvailableWarning=false;/**
 * Poor man's memoization to avoid logging multiple times the same warning.
 * Sometimes, `localStorage`/`sessionStorage` is unavailable due to browser
 * policies.
 */function logOnceBrowserStorageNotAvailableWarning(error){if(!hasLoggedBrowserStorageNotAvailableWarning){console.warn(`Docusaurus browser storage is not available.
Possible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.`,error);hasLoggedBrowserStorageNotAvailableWarning=true;}}const NoopStorageSlot={get:()=>null,set:()=>{},del:()=>{},listen:()=>()=>{}};// Fail-fast, as storage APIs should not be used during the SSR process
function createServerStorageSlot(key){function throwError(){throw new Error(`Illegal storage API usage for storage key "${key}".
Docusaurus storage APIs are not supposed to be called on the server-rendering process.
Please only call storage APIs in effects and event handlers.`);}return{get:throwError,set:throwError,del:throwError,listen:throwError};}/**
 * Creates an interface to work on a particular key in the storage model.
 * Note that this function only initializes the interface, but doesn't allocate
 * anything by itself (i.e. no side-effects).
 *
 * The API is fail-safe, since usage of browser storage should be considered
 * unreliable. Local storage might simply be unavailable (iframe + browser
 * security) or operations might fail individually. Please assume that using
 * this API can be a no-op. See also https://github.com/facebook/docusaurus/issues/6036
 */function createStorageSlot(key,options){if(typeof window==='undefined'){return createServerStorageSlot(key);}const storage=getBrowserStorage(options?.persistence);if(storage===null){return NoopStorageSlot;}return{get:()=>{try{return storage.getItem(key);}catch(err){console.error(`Docusaurus storage error, can't get key=${key}`,err);return null;}},set:newValue=>{try{const oldValue=storage.getItem(key);storage.setItem(key,newValue);dispatchChangeEvent({key,oldValue,newValue,storage});}catch(err){console.error(`Docusaurus storage error, can't set ${key}=${newValue}`,err);}},del:()=>{try{const oldValue=storage.getItem(key);storage.removeItem(key);dispatchChangeEvent({key,oldValue,newValue:null,storage});}catch(err){console.error(`Docusaurus storage error, can't delete key=${key}`,err);}},listen:onChange=>{try{const listener=event=>{if(event.storageArea===storage&&event.key===key){onChange(event);}};window.addEventListener('storage',listener);return()=>window.removeEventListener('storage',listener);}catch(err){console.error(`Docusaurus storage error, can't listen for changes of key=${key}`,err);return()=>{};}}};}function useStorageSlot(key,options){// Not ideal but good enough: assumes storage slot config is constant
const storageSlot=useRef(()=>{if(key===null){return NoopStorageSlot;}return createStorageSlot(key,options);}).current();const listen=useCallback(onChange=>{// Do not try to add a listener during SSR
if(typeof window==='undefined'){return()=>{};}return storageSlot.listen(onChange);},[storageSlot]);const currentValue=useSyncExternalStore(listen,()=>{// TODO this check should be useless after React 18
if(typeof window==='undefined'){return null;}return storageSlot.get();},()=>null);return[currentValue,storageSlot];}/**
 * Returns a list of all the keys currently stored in browser storage,
 * or an empty list if browser storage can't be accessed.
 */function listStorageKeys(storageType){if(storageType===void 0){storageType=DefaultStorageType;}const browserStorage=getBrowserStorage(storageType);if(!browserStorage){return[];}const keys=[];for(let i=0;i<browserStorage.length;i+=1){const key=browserStorage.key(i);if(key!==null){keys.push(key);}}return keys;}

/***/ }),

/***/ 5936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6550);
/* harmony import */ var _reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(902);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Fires an effect when the location changes (which includes hash, query, etc.).
 * Importantly, doesn't fire when there's no previous location: see
 * https://github.com/facebook/docusaurus/pull/6696
 */function useLocationChange(onLocationChange){const location=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useLocation */ .TH)();const previousLocation=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .usePrevious */ .D9)(location);const onLocationChangeDynamic=(0,_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .useEvent */ .zX)(onLocationChange);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!previousLocation){return;}if(location!==previousLocation){onLocationChangeDynamic({location,previousLocation});}},[onLocationChangeDynamic,location,previousLocation]);}

/***/ }),

/***/ 6668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useThemeConfig)
/* harmony export */ });
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2263);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * A convenient/more semantic way to get theme config from context.
 */function useThemeConfig(){return (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().siteConfig.themeConfig;}

/***/ }),

/***/ 5800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6817);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6972);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4685);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2445);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1232);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9834);
/* harmony import */ var _tabler_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3991);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const useStyles=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__/* .createStyles */ .k)(theme=>({footer:{borderTop:`1px solid ${theme.colorScheme==="dark"?theme.colors.dark[5]:"#eaeaea"}`,backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[7]:"#fafafa"},inner:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:theme.spacing.sm,paddingBottom:theme.spacing.sm,[theme.fn.smallerThan("xs")]:{flexDirection:"column"}},links:{[theme.fn.smallerThan("xs")]:{marginTop:theme.spacing.md}}}));function Footer(_ref){let{links,style,copyright}=_ref;const{colorScheme,toggleColorScheme}=(0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__/* .useMantineColorScheme */ .X)();const{classes}=useStyles();const items=links.map(link=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_3__/* .Anchor */ .e,{color:"dimmed",key:link.label,href:link.link,target:"_blank",size:"sm",variant:"text"},link.label));return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classes.footer,style:style},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W,{className:classes.inner,size:"xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_3__/* .Anchor */ .e,{style:{fontSize:"14px"},color:"#666",variant:"text"},copyright||"Copyright BuildTheEarth Community."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_5__/* .Group */ .Z,{className:classes.links},items,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_6__/* .ActionIcon */ .A,{variant:"transparent",onClick:()=>toggleColorScheme(),title:"Toggle color scheme"},colorScheme=="dark"?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_7__/* .IconSun */ .O31,{size:18}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tabler_icons__WEBPACK_IMPORTED_MODULE_7__/* .IconMoonStars */ .zG9,{size:18})))));}

/***/ }),

/***/ 2644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/tss/create-styles.js + 1 modules
var create_styles = __webpack_require__(6817);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/ColorSchemeProvider.js
var ColorSchemeProvider = __webpack_require__(6972);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/MantineProvider.js + 26 modules
var MantineProvider = __webpack_require__(8495);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js
var get_default_z_index = __webpack_require__(3594);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(8012);
;// CONCATENATED MODULE: ./node_modules/@mantine/styles/esm/tss/Global.js




function Global({ styles }) {
  const theme = (0,MantineProvider/* useMantineTheme */.rZ)();
  return /* @__PURE__ */ react.createElement(emotion_react_browser_esm/* Global */.xB, {
    styles: (0,emotion_react_browser_esm/* css */.iv)(typeof styles === "function" ? styles(theme) : styles)
  });
}


//# sourceMappingURL=Global.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/AppShell/AppShell.context.js


const AppShellContext = (0,react.createContext)({
  zIndex: 1e3,
  fixed: false,
  layout: "default"
});
const AppShellProvider = AppShellContext.Provider;
function useAppShellContext() {
  return (0,react.useContext)(AppShellContext);
}


//# sourceMappingURL=AppShell.context.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/AppShell/HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints.js
function getSortedBreakpoints(breakpoints, theme) {
  if (!breakpoints) {
    return [];
  }
  const values = Object.keys(breakpoints).filter((breakpoint) => breakpoint !== "base").map((breakpoint) => [
    theme.fn.size({ size: breakpoint, sizes: theme.breakpoints }),
    breakpoints[breakpoint]
  ]);
  values.sort((a, b) => a[0] - b[0]);
  return values;
}


//# sourceMappingURL=get-sorted-breakpoints.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/AppShell/VerticalSection/VerticalSection.styles.js



var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var useStyles = (0,create_styles/* createStyles */.k)((theme, { height, fixed, position, zIndex, borderPosition, layout }) => {
  const breakpoints = typeof height === "object" && height !== null ? getSortedBreakpoints(height, theme).reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (min-width: ${breakpoint}px)`] = {
      height: breakpointSize,
      minHeight: breakpointSize
    };
    return acc;
  }, {}) : null;
  return {
    root: __spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadValues({}, theme.fn.fontStyles()), position), {
      zIndex,
      left: layout === "alt" ? "var(--mantine-navbar-width, 0)" : 0,
      right: layout === "alt" ? "var(--mantine-aside-width, 0)" : 0,
      height: typeof height === "object" ? (height == null ? void 0 : height.base) || "100%" : height,
      maxHeight: typeof height === "object" ? (height == null ? void 0 : height.base) || "100%" : height,
      position: fixed ? "fixed" : "static",
      boxSizing: "border-box",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }), breakpoints), {
      borderBottom: borderPosition === "bottom" ? `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}` : void 0,
      borderTop: borderPosition === "top" ? `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}` : void 0
    })
  };
});

/* harmony default export */ const VerticalSection_styles = (useStyles);
//# sourceMappingURL=VerticalSection.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Box/Box.js + 9 modules
var Box = __webpack_require__(7414);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/AppShell/VerticalSection/VerticalSection.js







var VerticalSection_defProp = Object.defineProperty;
var VerticalSection_getOwnPropSymbols = Object.getOwnPropertySymbols;
var VerticalSection_hasOwnProp = Object.prototype.hasOwnProperty;
var VerticalSection_propIsEnum = Object.prototype.propertyIsEnumerable;
var VerticalSection_defNormalProp = (obj, key, value) => key in obj ? VerticalSection_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var VerticalSection_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (VerticalSection_hasOwnProp.call(b, prop))
      VerticalSection_defNormalProp(a, prop, b[prop]);
  if (VerticalSection_getOwnPropSymbols)
    for (var prop of VerticalSection_getOwnPropSymbols(b)) {
      if (VerticalSection_propIsEnum.call(b, prop))
        VerticalSection_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (VerticalSection_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && VerticalSection_getOwnPropSymbols)
    for (var prop of VerticalSection_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && VerticalSection_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const VerticalSection = (0,react.forwardRef)((_a, ref) => {
  var _b = _a, {
    children,
    className,
    classNames,
    styles,
    height,
    fixed = false,
    withBorder = true,
    position,
    zIndex,
    section,
    unstyled,
    __staticSelector
  } = _b, others = __objRest(_b, [
    "children",
    "className",
    "classNames",
    "styles",
    "height",
    "fixed",
    "withBorder",
    "position",
    "zIndex",
    "section",
    "unstyled",
    "__staticSelector"
  ]);
  const ctx = useAppShellContext();
  const _zIndex = zIndex || ctx.zIndex || (0,get_default_z_index/* getDefaultZIndex */.w)("app");
  const { classes, cx, theme } = VerticalSection_styles({
    height,
    fixed: ctx.fixed || fixed,
    position,
    zIndex: typeof _zIndex === "number" && ctx.layout === "default" ? _zIndex + 1 : _zIndex,
    layout: ctx.layout,
    borderPosition: withBorder ? section === "header" ? "bottom" : "top" : "none"
  }, { name: __staticSelector, classNames, styles, unstyled });
  const breakpoints = typeof height === "object" && height !== null ? getSortedBreakpoints(height, theme).reduce((acc, [breakpoint, breakpointSize]) => {
    acc[`@media (min-width: ${breakpoint}px)`] = {
      [`--mantine-${section}-height`]: `${breakpointSize}px`
    };
    return acc;
  }, {}) : null;
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, VerticalSection_spreadValues({
    component: section === "header" ? "header" : "footer",
    className: cx(classes.root, className),
    ref
  }, others), children, /* @__PURE__ */ react.createElement(Global, {
    styles: () => ({
      ":root": VerticalSection_spreadValues({
        [`--mantine-${section}-height`]: typeof height === "object" ? `${height == null ? void 0 : height.base}px` || "100%" : `${height}px`
      }, breakpoints)
    })
  }));
});
VerticalSection.displayName = "@mantine/core/VerticalSection";


//# sourceMappingURL=VerticalSection.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/AppShell/Header/Header.js




var Header_defProp = Object.defineProperty;
var Header_defProps = Object.defineProperties;
var Header_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var Header_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Header_hasOwnProp = Object.prototype.hasOwnProperty;
var Header_propIsEnum = Object.prototype.propertyIsEnumerable;
var Header_defNormalProp = (obj, key, value) => key in obj ? Header_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Header_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Header_hasOwnProp.call(b, prop))
      Header_defNormalProp(a, prop, b[prop]);
  if (Header_getOwnPropSymbols)
    for (var prop of Header_getOwnPropSymbols(b)) {
      if (Header_propIsEnum.call(b, prop))
        Header_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Header_spreadProps = (a, b) => Header_defProps(a, Header_getOwnPropDescs(b));
const defaultProps = {
  fixed: false,
  position: { top: 0, left: 0, right: 0 }
};
const Header = (0,react.forwardRef)((props, ref) => {
  const _props = (0,MantineProvider/* useComponentDefaultProps */.N4)("Header", defaultProps, props);
  return /* @__PURE__ */ react.createElement(VerticalSection, Header_spreadProps(Header_spreadValues({
    section: "header",
    __staticSelector: "Header"
  }, _props), {
    ref
  }));
});
Header.displayName = "@mantine/core/Header";


//# sourceMappingURL=Header.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Container/Container.js + 1 modules
var Container = __webpack_require__(2445);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Group/Group.js + 1 modules
var Group = __webpack_require__(1232);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Burger/Burger.styles.js


const sizes = {
  xs: 12,
  sm: 18,
  md: 24,
  lg: 34,
  xl: 42
};
var Burger_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, { size, color, transitionDuration }) => {
  const sizeValue = theme.fn.size({ size, sizes });
  const _color = color || (theme.colorScheme === "dark" ? theme.white : theme.black);
  return {
    root: {
      borderRadius: theme.radius.sm,
      width: `calc(${sizeValue}px + ${theme.spacing.xs}px)`,
      height: `calc(${sizeValue}px + ${theme.spacing.xs}px)`,
      padding: `calc(${theme.spacing.xs}px / 2)`,
      cursor: "pointer"
    },
    burger: {
      position: "relative",
      userSelect: "none",
      boxSizing: "border-box",
      "&, &::before, &::after": {
        display: "block",
        width: sizeValue,
        height: Math.ceil(sizeValue / 12),
        backgroundColor: _color,
        outline: "1px solid transparent",
        transitionProperty: "background-color, transform",
        transitionDuration: `${transitionDuration}ms`,
        "@media (prefers-reduced-motion)": {
          transitionDuration: theme.respectReducedMotion ? "0ms" : void 0
        }
      },
      "&::before, &::after": {
        position: "absolute",
        content: '""',
        left: 0
      },
      "&::before": {
        top: sizeValue / 3 * -1
      },
      "&::after": {
        top: sizeValue / 3
      },
      "&[data-opened]": {
        backgroundColor: "transparent",
        "&::before": {
          transform: `translateY(${sizeValue / 3}px) rotate(45deg)`
        },
        "&::after": {
          transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`
        }
      }
    }
  };
});

/* harmony default export */ const Burger_styles = (Burger_styles_useStyles);
//# sourceMappingURL=Burger.styles.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/UnstyledButton/UnstyledButton.js + 1 modules
var UnstyledButton = __webpack_require__(4736);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Burger/Burger.js





var Burger_defProp = Object.defineProperty;
var Burger_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Burger_hasOwnProp = Object.prototype.hasOwnProperty;
var Burger_propIsEnum = Object.prototype.propertyIsEnumerable;
var Burger_defNormalProp = (obj, key, value) => key in obj ? Burger_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Burger_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Burger_hasOwnProp.call(b, prop))
      Burger_defNormalProp(a, prop, b[prop]);
  if (Burger_getOwnPropSymbols)
    for (var prop of Burger_getOwnPropSymbols(b)) {
      if (Burger_propIsEnum.call(b, prop))
        Burger_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Burger_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Burger_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Burger_getOwnPropSymbols)
    for (var prop of Burger_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Burger_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Burger_defaultProps = {
  size: "md",
  transitionDuration: 300
};
const Burger = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Burger", Burger_defaultProps, props), { className, opened, color, size, classNames, styles, transitionDuration } = _a, others = Burger_objRest(_a, ["className", "opened", "color", "size", "classNames", "styles", "transitionDuration"]);
  const { classes, cx } = Burger_styles({ color, size, transitionDuration }, { classNames, styles, name: "Burger" });
  return /* @__PURE__ */ react.createElement(UnstyledButton/* UnstyledButton */.k, Burger_spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), /* @__PURE__ */ react.createElement("div", {
    "data-opened": opened || void 0,
    className: classes.burger
  }));
});
Burger.displayName = "@mantine/core/Burger";


//# sourceMappingURL=Burger.js.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/Transition/Transition.js + 3 modules
var Transition = __webpack_require__(8036);
// EXTERNAL MODULE: ./node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js
var create_polymorphic_component = __webpack_require__(8427);
;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Paper/Paper.styles.js


var Paper_styles_useStyles = (0,create_styles/* createStyles */.k)((theme, { radius, shadow, withBorder }) => ({
  root: {
    outline: 0,
    WebkitTapHighlightColor: "transparent",
    display: "block",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxSizing: "border-box",
    borderRadius: theme.fn.radius(radius),
    boxShadow: theme.shadows[shadow] || shadow || "none",
    border: withBorder ? `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}` : void 0
  }
}));

/* harmony default export */ const Paper_styles = (Paper_styles_useStyles);
//# sourceMappingURL=Paper.styles.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/core/esm/Paper/Paper.js






var Paper_defProp = Object.defineProperty;
var Paper_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Paper_hasOwnProp = Object.prototype.hasOwnProperty;
var Paper_propIsEnum = Object.prototype.propertyIsEnumerable;
var Paper_defNormalProp = (obj, key, value) => key in obj ? Paper_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Paper_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Paper_hasOwnProp.call(b, prop))
      Paper_defNormalProp(a, prop, b[prop]);
  if (Paper_getOwnPropSymbols)
    for (var prop of Paper_getOwnPropSymbols(b)) {
      if (Paper_propIsEnum.call(b, prop))
        Paper_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Paper_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Paper_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Paper_getOwnPropSymbols)
    for (var prop of Paper_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Paper_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Paper_defaultProps = {};
const _Paper = (0,react.forwardRef)((props, ref) => {
  const _a = (0,MantineProvider/* useComponentDefaultProps */.N4)("Paper", Paper_defaultProps, props), { className, children, radius, withBorder, shadow, unstyled } = _a, others = Paper_objRest(_a, ["className", "children", "radius", "withBorder", "shadow", "unstyled"]);
  const { classes, cx } = Paper_styles({ radius, shadow, withBorder }, { name: "Paper", unstyled });
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, Paper_spreadValues({
    className: cx(classes.root, className),
    ref
  }, others), children);
});
_Paper.displayName = "@mantine/core/Paper";
const Paper = (0,create_polymorphic_component/* createPolymorphicComponent */.F)(_Paper);


//# sourceMappingURL=Paper.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.js


function useDisclosure(initialState = false, callbacks) {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = (0,react.useState)(initialState);
  const open = (0,react.useCallback)(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen == null ? void 0 : onOpen();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);
  const close = (0,react.useCallback)(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose == null ? void 0 : onClose();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);
  const toggle = (0,react.useCallback)(() => {
    opened ? close() : open();
  }, [close, open, opened]);
  return [opened, { open, close, toggle }];
}


//# sourceMappingURL=use-disclosure.js.map

;// CONCATENATED MODULE: ./node_modules/@mantine/hooks/esm/use-click-outside/use-click-outside.js


const DEFAULT_EVENTS = ["mousedown", "touchstart"];
function useClickOutside(handler, events, nodes) {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    const listener = (event) => {
      const { target } = event != null ? event : {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = (target == null ? void 0 : target.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(target) && target.tagName !== "HTML";
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        shouldTrigger && !shouldIgnore && handler();
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };
    (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));
    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler, nodes]);
  return ref;
}


//# sourceMappingURL=use-click-outside.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(412);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./src/components/Header.tsx
const Header_useStyles=(0,create_styles/* createStyles */.k)(theme=>({root:{zIndex:99},dropdown:{position:"absolute",top:60,left:0,right:0,zIndex:0,borderTopRightRadius:0,borderTopLeftRadius:0,borderTopWidth:0,overflow:"hidden",boxShadow:theme.shadows.md,[theme.fn.largerThan("sm")]:{display:"none"}},header:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%"},logo:{fontFamily:"Minecraft",fontSize:"20px",position:"relative",top:"2px",cursor:"pointer",userSelect:"none",WebkitUserSelect:"none",img:{position:"relative",top:"-2px"}},links:{[theme.fn.smallerThan("sm")]:{display:"none"}},burger:{[theme.fn.largerThan("sm")]:{display:"none"},display:"flex",justifyContent:"space-between",alignItems:"center"},link:{display:"block",lineHeight:1,padding:"8px 12px",cursor:"pointer",borderRadius:theme.radius.sm,textDecoration:"none",color:theme.colorScheme==="dark"?theme.colors.dark[0]:"#666",fontSize:theme.fontSizes.sm,"&:hover":{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[6]:theme.colors.gray[0],color:theme.colorScheme==="dark"?theme.colors.dark[0]:"#000"},[theme.fn.smallerThan("sm")]:{borderRadius:0,padding:theme.spacing.md}},linkActive:{"&, &:hover":{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[4]:theme.colors.gray[2],color:theme.colorScheme==="dark"?theme.colors.dark[0]:"#000"}},userMenu:{border:"none !important",[theme.fn.smallerThan("xs")]:{display:"none"}},userActive:{"&, &:hover":{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[4]:theme.colors.gray[2]}},user:{color:theme.colorScheme==="dark"?theme.colors.dark[0]:theme.colors.gray[7],padding:`${theme.spacing.xs}px ${theme.spacing.sm}px`,borderRadius:theme.radius.sm,marginLeft:theme.spacing.xs,transition:"background-color 100ms ease",[theme.fn.smallerThan("sm")]:{borderRadius:0,padding:theme.spacing.md,margin:0,width:"100%"},"&:hover":{backgroundColor:theme.colorScheme==="dark"?theme.colors.dark[6]:theme.colors.gray[0]}}}));const Header_Header=_ref=>{let{links,className,title}=_ref;const[opened,handler]=useDisclosure(false);const[userMenuOpened,setUserMenuOpened]=(0,react.useState)(false);const{colorScheme,toggleColorScheme}=(0,ColorSchemeProvider/* useMantineColorScheme */.X)();const{classes,cx}=Header_useStyles();const theme=(0,MantineProvider/* useMantineTheme */.rZ)();const dark=colorScheme==="dark";const mobilePaperRef=useClickOutside(()=>handler.close());const items=links.map(link=>/*#__PURE__*/react.createElement("a",{key:link.label,id:link.label,className:cx(classes.link),onClick:()=>{window.location.href=link.link;handler.close();}},link.label));if(!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM)return/*#__PURE__*/react.createElement(react.Fragment,null);else return/*#__PURE__*/react.createElement(Header,{height:60,className:(0,clsx_m/* default */.Z)(classes.root,className),fixed:true},/*#__PURE__*/react.createElement(Container/* Container */.W,{className:classes.header,size:"xl"},/*#__PURE__*/react.createElement(Group/* Group */.Z,{spacing:5,className:classes.logo,onClick:()=>window.location.href="/"},/*#__PURE__*/react.createElement("img",{src:"/logo.png",alt:title||"BuildTheEarth",height:"40",style:{marginRight:"4px"}}),title||"BuildTheEarth"),/*#__PURE__*/react.createElement(Group/* Group */.Z,{spacing:5,className:classes.links},items),/*#__PURE__*/react.createElement(Group/* Group */.Z,{spacing:5,className:classes.links}),/*#__PURE__*/react.createElement(Group/* Group */.Z,{spacing:5,className:classes.burger},/*#__PURE__*/react.createElement(Burger,{opened:opened,onClick:()=>handler.open(),size:"sm"})),/*#__PURE__*/react.createElement(Transition/* Transition */.u,{transition:"scale-y",duration:200,mounted:opened},styles=>/*#__PURE__*/react.createElement(Paper,{className:classes.dropdown,withBorder:true,style:styles,ref:mobilePaperRef},items)),/*#__PURE__*/react.createElement("div",null)));};/* harmony default export */ const components_Header = (Header_Header);

/***/ }),

/***/ 6010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 9318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lX": () => (/* binding */ createBrowserHistory),
  "q_": () => (/* binding */ createHashHistory),
  "ob": () => (/* binding */ createLocation),
  "PP": () => (/* binding */ createMemoryHistory),
  "Ep": () => (/* binding */ createPath)
});

// UNUSED EXPORTS: locationsAreEqual, parsePath

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
;// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const resolve_pathname = (resolvePathname);

// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var tiny_invariant = __webpack_require__(8776);
;// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,esm_extends/* default */.Z)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant/* default */.Z)(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : (0,tiny_invariant/* default */.Z)(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends/* default */.Z)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ 8679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(9864);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 5826:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 2497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 4865:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 7418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 7410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */

 var Prism = (function () {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},


		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}

	return _;

}());

var prism = Prism;
Prism.default = Prism;

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = prism.languages.markup['entity'];
prism.languages.markup['doctype'].inside['internal-subset'].inside = prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function (attrName, lang) {
    prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\s=]+/,
        'attr-value': {
          pattern: /=[\s\S]+/,
          inside: {
            'value': {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend('markup', {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below

  };
  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp('\\$' + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp('(\\{)' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    }, // “Normal” string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        'entity': insideString.entity
      }
    }],
    'environment': {
      pattern: RegExp('\\$?' + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(prism);
/* "prismjs/components/prism-clike" */


prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  'boolean': /\b(?:false|true)\b/,
  'function': /\b\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

prism.languages.c = prism.languages.extend('clike', {
  'comment': {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'string': {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  'function': /\b[a-z_]\w*(?=\s*\()/i,
  'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore('c', 'string', {
  'char': {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c['string']],
      'char': prism.languages.c['char'],
      'comment': prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\(?=[\r\n])/,
      'expression': {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore('c', 'function', {
  // highlight predefined macros as constants
  'constant': /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

(function (Prism) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    'keyword': keyword,
    'number': {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    'operator': />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    'boolean': /\b(?:false|true)\b/
  });
  Prism.languages.insertBefore('cpp', 'string', {
    'module': {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + '(?:' + // header-name
      /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + '|' + // module name or partition or both
      /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ')'),
      lookbehind: true,
      greedy: true,
      inside: {
        'string': /^[<"][\s\S]+/,
        'operator': /:/,
        'punctuation': /\./
      }
    },
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  });
  Prism.languages.insertBefore('cpp', 'keyword', {
    'generic-function': {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        'function': /^\w+/,
        'generic': {
          pattern: /<[\s\S]+/,
          alias: 'class-name',
          inside: Prism.languages.cpp
        }
      }
    }
  });
  Prism.languages.insertBefore('cpp', 'operator', {
    'double-colon': {
      pattern: /::/,
      alias: 'punctuation'
    }
  });
  Prism.languages.insertBefore('cpp', 'class-name', {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    'base-clause': {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism.languages.extend('cpp', {})
    }
  });
  Prism.languages.insertBefore('inside', 'double-colon', {
    // All untokenized words that are not namespaces should be class names
    'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism.languages.cpp['base-clause']);
})(prism);
/* "prismjs/components/prism-css" */


(function (Prism) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    'important': /!important\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(prism);
/* "prismjs/components/prism-css-extras" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      'class': /\.[-\w]+/,
      'id': /#[-\w]+/,
      'attribute': {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\|$/
            }
          },
          'attr-name': {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          'attr-value': [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          'number': /[\dn]+/,
          'operator': /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      'combinator': />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      'punctuation': /[(),]/
    }
  };
  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;
  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: 'color'
    },
    'color': [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    // it's important that there is no boundary assertion after the hex digits
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });
})(prism);
/* "prismjs/components/prism-javascript" */


prism.languages.javascript = prism.languages.extend('clike', {
  'class-name': [prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': {
    pattern: RegExp(/(^|[^\w$])/.source + '(?:' + ( // constant
    /NaN|Infinity/.source + '|' + // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
    /\d+(?:_\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: prism.languages.regex
      },
      'regex-delimiter': /^\/|\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});

if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined('script', 'javascript'); // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}

prism.languages.js = prism.languages.javascript;
/* "prismjs/components/prism-coffeescript" */

(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        'script': {
          pattern: /[\s\S]+/,
          alias: 'language-javascript',
          inside: Prism.languages.javascript
        }
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(prism);
/* "prismjs/components/prism-yaml" */


(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters

  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/false|true/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(prism);
/* "prismjs/components/prism-markdown" */


(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */

  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'front-matter': {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'code-snippet': {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ['code', 'keyword']
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'variable': {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'); // only use the first word

          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang; // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');
  /**
   * A list of known entity names.
   *
   * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
   *
   * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
   */

  var KNOWN_ENTITY_NAMES = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"'
  }; // IE 11 doesn't support `String.fromCodePoint`

  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  /**
   * Returns the text content of a given HTML source code string.
   *
   * @param {string} html
   * @returns {string}
   */

  function textContent(html) {
    // remove all tags
    var text = html.replace(tagPattern, ''); // decode known entities

    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();

      if (code[0] === '#') {
        var value;

        if (code[1] === 'x') {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }

        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];

        if (known) {
          return known;
        } // unable to decode


        return m;
      }
    });
    return text;
  }

  Prism.languages.md = Prism.languages.markdown;
})(prism);
/* "prismjs/components/prism-graphql" */


prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:false|true)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'atom-input': {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: 'class-name'
  },
  'scalar': /\b(?:Boolean|Float|ID|Int|String)\b/,
  'constant': /\b[A-Z][A-Z_\d]*\b/,
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-mutation': {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-query': {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  'operator': /[!=|&]|\.{3}/,
  'property-query': /\w+(?=\s*\()/,
  'object': /\w+(?=\s*\{)/,
  'punctuation': /[!(){}\[\]:=,]/,
  'property': /\w+/
};
prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {
  if (env.language !== 'graphql') {
    return;
  }
  /**
   * get the graphql token stream that we want to customize
   *
   * @typedef {InstanceType<import("./prism-core")["Token"]>} Token
   * @type {Token[]}
   */


  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== 'string' && token.type !== 'comment' && token.type !== 'scalar';
  });
  var currentIndex = 0;
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {number} offset
   * @returns {Token | undefined}
   */

  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {readonly string[]} types
   * @param {number} [offset=0]
   * @returns {boolean}
   */


  function isTokenType(types, offset) {
    offset = offset || 0;

    for (var i = 0; i < types.length; i++) {
      var token = getToken(i + offset);

      if (!token || token.type !== types[i]) {
        return false;
      }
    }

    return true;
  }
  /**
   * Returns the index of the closing bracket to an opening bracket.
   *
   * It is assumed that `token[currentIndex - 1]` is an opening bracket.
   *
   * If no closing bracket could be found, `-1` will be returned.
   *
   * @param {RegExp} open
   * @param {RegExp} close
   * @returns {number}
   */


  function findClosingBracket(open, close) {
    var stackHeight = 1;

    for (var i = currentIndex; i < validTokens.length; i++) {
      var token = validTokens[i];
      var content = token.content;

      if (token.type === 'punctuation' && typeof content === 'string') {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;

          if (stackHeight === 0) {
            return i;
          }
        }
      }
    }

    return -1;
  }
  /**
   * Adds an alias to the given token.
   *
   * @param {Token} token
   * @param {string} alias
   * @returns {void}
   */


  function addAlias(token, alias) {
    var aliases = token.alias;

    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }

    aliases.push(alias);
  }

  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++]; // add special aliases for mutation tokens

    if (startToken.type === 'keyword' && startToken.content === 'mutation') {
      // any array of the names of all input variables (if any)
      var inputVariables = [];

      if (isTokenType(['definition-mutation', 'punctuation']) && getToken(1).content === '(') {
        // definition
        currentIndex += 2; // skip 'definition-mutation' and 'punctuation'

        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);

        if (definitionEnd === -1) {
          continue;
        } // find all input variables


        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);

          if (t.type === 'variable') {
            addAlias(t, 'variable-input');
            inputVariables.push(t.content);
          }
        }

        currentIndex = definitionEnd + 1;
      }

      if (isTokenType(['punctuation', 'property-query']) && getToken(0).content === '{') {
        currentIndex++; // skip opening bracket

        addAlias(getToken(0), 'property-mutation');

        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);

          if (mutationEnd === -1) {
            continue;
          } // give references to input variables a special alias


          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];

            if (varToken.type === 'variable' && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, 'variable-input');
            }
          }
        }
      }
    }
  }
});
/* "prismjs/components/prism-sql" */

prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'identifier': {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      'punctuation': /^`|`$/
    }
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:FALSE|NULL|TRUE)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-js-templates" */

(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return `undefined` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. `markdown`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html`<p></p>`
  // div.innerHTML = `<p></p>`
  createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
  createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
  createTemplate('markdown', /\b(?:markdown|md)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
  createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), // sql`...`
  createTemplate('sql', /\bsql/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. `"${42}"`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
          /* noop */
        }

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
/* "prismjs/components/prism-typescript" */


(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below

    },
    'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }); // The keywords TypeScript adds to JavaScript

  Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, // keywords that have to be followed by an identifier
  /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, // This is for `import type *, {}`
  /\btype\b(?=\s*(?:[\{*]|$))/); // doesn't work with TS because TS is too complex

  delete Prism.languages.typescript['parameter'];
  delete Prism.languages.typescript['literal-property']; // a version of typescript specifically for highlighting types

  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'decorator': {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        'at': {
          pattern: /^@/,
          alias: 'operator'
        },
        'function': /^[\s\S]+/
      }
    },
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        'generic': {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  /**
   * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
   *
   * @param {string} source
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }

  Prism.languages.insertBefore('javascript', 'keyword', {
    'imports': {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    'exports': {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: 'control-flow'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(prism);
/* "prismjs/components/prism-jsx" */


(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  /**
   * @param {string} source
   * @param {string} [flags]
   */

  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }

  spread = re(spread).source;
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: re(/<SPREAD>/.source),
      inside: Prism.languages.jsx
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'special-attr', {
    'script': {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: 'language-javascript',
      inside: {
        'script-punctuation': {
          pattern: /^=(?=\{)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      }
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === 'diff') {
      alias.push('bold');
    }

    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(prism);
/* "prismjs/components/prism-git" */


prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit-sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

prism.languages.go = prism.languages.extend('clike', {
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'boolean': /\b(?:_|false|iota|nil|true)\b/,
  'number': [// binary and octal integers
  /\b0(?:b[01_]+|o[0-7_]+)i?\b/i, // hexadecimal integers and floats
  /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, // decimal integers and floats
  /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore('go', 'string', {
  'char': {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go['class-name'];
/* "prismjs/components/prism-markup-templating" */

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(prism);
/* "prismjs/components/prism-handlebars" */


(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:false|true)\b/,
    'block': {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
  Prism.languages.hbs = Prism.languages.handlebars;
})(prism);
/* "prismjs/components/prism-json" */
// https://www.json.org/json-en.html


prism.languages.json = {
  'property': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
prism.languages.webmanifest = prism.languages.json;
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

prism.languages.less = prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  'operator': /[+\-*\/]/
});
prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      'punctuation': /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'builtin-target': {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: 'builtin'
  },
  'target': {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: 'symbol',
    inside: {
      'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  'keyword': /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  'function': {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-objectivec" */

prism.languages.objectivec = prism.languages.extend('c', {
  'string': {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'keyword': /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec['class-name'];
prism.languages.objc = prism.languages.objectivec;
/* "prismjs/components/prism-ocaml" */
// https://ocaml.org/manual/lex.html

prism.languages.ocaml = {
  'comment': {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  'char': {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  'string': [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  'number': [// binary and octal
  /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, // hexadecimal
  /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, // decimal
  /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
  'directive': {
    pattern: /\B#\w+/,
    alias: 'property'
  },
  'label': {
    pattern: /\B~\w+/,
    alias: 'property'
  },
  'type-variable': {
    pattern: /\B'\w+/,
    alias: 'function'
  },
  'variant': {
    pattern: /`\w+/,
    alias: 'symbol'
  },
  // For the list of keywords and operators,
  // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  'operator-like-punctuation': {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: 'punctuation'
  },
  // Custom operators are allowed
  'operator': /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  'punctuation': /;;|::|[(){}\[\].,:;#]|\b_\b/
};
/* "prismjs/components/prism-python" */

prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  'string-interpolation': {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:False|None|True)\b/,
  'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
/* "prismjs/components/prism-reason" */

prism.languages.reason = prism.languages.extend('clike', {
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore('reason', 'class-name', {
  'char': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  // Negative look-ahead prevents from matching things like String.capitalize
  'constructor': /\b[A-Z]\w*\b(?!\s*\.)/,
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
/* "prismjs/components/prism-scss" */


prism.languages.scss = prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore('scss', 'function', {
  'module-modifier': {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: 'keyword'
  },
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss['atrule'].inside.rest = prism.languages.scss;
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'url': {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'boolean': /\b(?:false|true)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'number': number,
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^\{|\}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'atrule-declaration': {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        'keyword': /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'comment': inside.comment,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(prism);
/* "prismjs/components/prism-tsx" */


(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // doesn't work with TS because TS is too complex

  delete Prism.languages.tsx['parameter'];
  delete Prism.languages.tsx['literal-property']; // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
/* "prismjs/components/prism-wasm" */


prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prism);


/***/ }),

/***/ 9901:
/***/ ((module) => {

var components = {"core":{"meta":{"path":"components/prism-core.js","option":"mandatory"},"core":"Core"},"themes":{"meta":{"path":"themes/{id}.css","link":"index.html?theme={id}","exclusive":true},"prism":{"title":"Default","option":"default"},"prism-dark":"Dark","prism-funky":"Funky","prism-okaidia":{"title":"Okaidia","owner":"ocodia"},"prism-twilight":{"title":"Twilight","owner":"remybach"},"prism-coy":{"title":"Coy","owner":"tshedor"},"prism-solarizedlight":{"title":"Solarized Light","owner":"hectormatos2011 "},"prism-tomorrow":{"title":"Tomorrow Night","owner":"Rosey"}},"languages":{"meta":{"path":"components/prism-{id}","noCSS":true,"examplesPath":"examples/prism-{id}","addCheckAll":true},"markup":{"title":"Markup","alias":["html","xml","svg","mathml","ssml","atom","rss"],"aliasTitles":{"html":"HTML","xml":"XML","svg":"SVG","mathml":"MathML","ssml":"SSML","atom":"Atom","rss":"RSS"},"option":"default"},"css":{"title":"CSS","option":"default","modify":"markup"},"clike":{"title":"C-like","option":"default"},"javascript":{"title":"JavaScript","require":"clike","modify":"markup","optional":"regex","alias":"js","option":"default"},"abap":{"title":"ABAP","owner":"dellagustin"},"abnf":{"title":"ABNF","owner":"RunDevelopment"},"actionscript":{"title":"ActionScript","require":"javascript","modify":"markup","owner":"Golmote"},"ada":{"title":"Ada","owner":"Lucretia"},"agda":{"title":"Agda","owner":"xy-ren"},"al":{"title":"AL","owner":"RunDevelopment"},"antlr4":{"title":"ANTLR4","alias":"g4","owner":"RunDevelopment"},"apacheconf":{"title":"Apache Configuration","owner":"GuiTeK"},"apex":{"title":"Apex","require":["clike","sql"],"owner":"RunDevelopment"},"apl":{"title":"APL","owner":"ngn"},"applescript":{"title":"AppleScript","owner":"Golmote"},"aql":{"title":"AQL","owner":"RunDevelopment"},"arduino":{"title":"Arduino","require":"cpp","alias":"ino","owner":"dkern"},"arff":{"title":"ARFF","owner":"Golmote"},"armasm":{"title":"ARM Assembly","alias":"arm-asm","owner":"RunDevelopment"},"arturo":{"title":"Arturo","alias":"art","optional":["bash","css","javascript","markup","markdown","sql"],"owner":"drkameleon"},"asciidoc":{"alias":"adoc","title":"AsciiDoc","owner":"Golmote"},"aspnet":{"title":"ASP.NET (C#)","require":["markup","csharp"],"owner":"nauzilus"},"asm6502":{"title":"6502 Assembly","owner":"kzurawel"},"asmatmel":{"title":"Atmel AVR Assembly","owner":"cerkit"},"autohotkey":{"title":"AutoHotkey","owner":"aviaryan"},"autoit":{"title":"AutoIt","owner":"Golmote"},"avisynth":{"title":"AviSynth","alias":"avs","owner":"Zinfidel"},"avro-idl":{"title":"Avro IDL","alias":"avdl","owner":"RunDevelopment"},"awk":{"title":"AWK","alias":"gawk","aliasTitles":{"gawk":"GAWK"},"owner":"RunDevelopment"},"bash":{"title":"Bash","alias":["sh","shell"],"aliasTitles":{"sh":"Shell","shell":"Shell"},"owner":"zeitgeist87"},"basic":{"title":"BASIC","owner":"Golmote"},"batch":{"title":"Batch","owner":"Golmote"},"bbcode":{"title":"BBcode","alias":"shortcode","aliasTitles":{"shortcode":"Shortcode"},"owner":"RunDevelopment"},"bbj":{"title":"BBj","owner":"hyyan"},"bicep":{"title":"Bicep","owner":"johnnyreilly"},"birb":{"title":"Birb","require":"clike","owner":"Calamity210"},"bison":{"title":"Bison","require":"c","owner":"Golmote"},"bnf":{"title":"BNF","alias":"rbnf","aliasTitles":{"rbnf":"RBNF"},"owner":"RunDevelopment"},"bqn":{"title":"BQN","owner":"yewscion"},"brainfuck":{"title":"Brainfuck","owner":"Golmote"},"brightscript":{"title":"BrightScript","owner":"RunDevelopment"},"bro":{"title":"Bro","owner":"wayward710"},"bsl":{"title":"BSL (1C:Enterprise)","alias":"oscript","aliasTitles":{"oscript":"OneScript"},"owner":"Diversus23"},"c":{"title":"C","require":"clike","owner":"zeitgeist87"},"csharp":{"title":"C#","require":"clike","alias":["cs","dotnet"],"owner":"mvalipour"},"cpp":{"title":"C++","require":"c","owner":"zeitgeist87"},"cfscript":{"title":"CFScript","require":"clike","alias":"cfc","owner":"mjclemente"},"chaiscript":{"title":"ChaiScript","require":["clike","cpp"],"owner":"RunDevelopment"},"cil":{"title":"CIL","owner":"sbrl"},"cilkc":{"title":"Cilk/C","require":"c","alias":"cilk-c","owner":"OpenCilk"},"cilkcpp":{"title":"Cilk/C++","require":"cpp","alias":["cilk-cpp","cilk"],"owner":"OpenCilk"},"clojure":{"title":"Clojure","owner":"troglotit"},"cmake":{"title":"CMake","owner":"mjrogozinski"},"cobol":{"title":"COBOL","owner":"RunDevelopment"},"coffeescript":{"title":"CoffeeScript","require":"javascript","alias":"coffee","owner":"R-osey"},"concurnas":{"title":"Concurnas","alias":"conc","owner":"jasontatton"},"csp":{"title":"Content-Security-Policy","owner":"ScottHelme"},"cooklang":{"title":"Cooklang","owner":"ahue"},"coq":{"title":"Coq","owner":"RunDevelopment"},"crystal":{"title":"Crystal","require":"ruby","owner":"MakeNowJust"},"css-extras":{"title":"CSS Extras","require":"css","modify":"css","owner":"milesj"},"csv":{"title":"CSV","owner":"RunDevelopment"},"cue":{"title":"CUE","owner":"RunDevelopment"},"cypher":{"title":"Cypher","owner":"RunDevelopment"},"d":{"title":"D","require":"clike","owner":"Golmote"},"dart":{"title":"Dart","require":"clike","owner":"Golmote"},"dataweave":{"title":"DataWeave","owner":"machaval"},"dax":{"title":"DAX","owner":"peterbud"},"dhall":{"title":"Dhall","owner":"RunDevelopment"},"diff":{"title":"Diff","owner":"uranusjr"},"django":{"title":"Django/Jinja2","require":"markup-templating","alias":"jinja2","owner":"romanvm"},"dns-zone-file":{"title":"DNS zone file","owner":"RunDevelopment","alias":"dns-zone"},"docker":{"title":"Docker","alias":"dockerfile","owner":"JustinBeckwith"},"dot":{"title":"DOT (Graphviz)","alias":"gv","optional":"markup","owner":"RunDevelopment"},"ebnf":{"title":"EBNF","owner":"RunDevelopment"},"editorconfig":{"title":"EditorConfig","owner":"osipxd"},"eiffel":{"title":"Eiffel","owner":"Conaclos"},"ejs":{"title":"EJS","require":["javascript","markup-templating"],"owner":"RunDevelopment","alias":"eta","aliasTitles":{"eta":"Eta"}},"elixir":{"title":"Elixir","owner":"Golmote"},"elm":{"title":"Elm","owner":"zwilias"},"etlua":{"title":"Embedded Lua templating","require":["lua","markup-templating"],"owner":"RunDevelopment"},"erb":{"title":"ERB","require":["ruby","markup-templating"],"owner":"Golmote"},"erlang":{"title":"Erlang","owner":"Golmote"},"excel-formula":{"title":"Excel Formula","alias":["xlsx","xls"],"owner":"RunDevelopment"},"fsharp":{"title":"F#","require":"clike","owner":"simonreynolds7"},"factor":{"title":"Factor","owner":"catb0t"},"false":{"title":"False","owner":"edukisto"},"firestore-security-rules":{"title":"Firestore security rules","require":"clike","owner":"RunDevelopment"},"flow":{"title":"Flow","require":"javascript","owner":"Golmote"},"fortran":{"title":"Fortran","owner":"Golmote"},"ftl":{"title":"FreeMarker Template Language","require":"markup-templating","owner":"RunDevelopment"},"gml":{"title":"GameMaker Language","alias":"gamemakerlanguage","require":"clike","owner":"LiarOnce"},"gap":{"title":"GAP (CAS)","owner":"RunDevelopment"},"gcode":{"title":"G-code","owner":"RunDevelopment"},"gdscript":{"title":"GDScript","owner":"RunDevelopment"},"gedcom":{"title":"GEDCOM","owner":"Golmote"},"gettext":{"title":"gettext","alias":"po","owner":"RunDevelopment"},"gherkin":{"title":"Gherkin","owner":"hason"},"git":{"title":"Git","owner":"lgiraudel"},"glsl":{"title":"GLSL","require":"c","owner":"Golmote"},"gn":{"title":"GN","alias":"gni","owner":"RunDevelopment"},"linker-script":{"title":"GNU Linker Script","alias":"ld","owner":"RunDevelopment"},"go":{"title":"Go","require":"clike","owner":"arnehormann"},"go-module":{"title":"Go module","alias":"go-mod","owner":"RunDevelopment"},"gradle":{"title":"Gradle","require":"clike","owner":"zeabdelkhalek-badido18"},"graphql":{"title":"GraphQL","optional":"markdown","owner":"Golmote"},"groovy":{"title":"Groovy","require":"clike","owner":"robfletcher"},"haml":{"title":"Haml","require":"ruby","optional":["css","css-extras","coffeescript","erb","javascript","less","markdown","scss","textile"],"owner":"Golmote"},"handlebars":{"title":"Handlebars","require":"markup-templating","alias":["hbs","mustache"],"aliasTitles":{"mustache":"Mustache"},"owner":"Golmote"},"haskell":{"title":"Haskell","alias":"hs","owner":"bholst"},"haxe":{"title":"Haxe","require":"clike","optional":"regex","owner":"Golmote"},"hcl":{"title":"HCL","owner":"outsideris"},"hlsl":{"title":"HLSL","require":"c","owner":"RunDevelopment"},"hoon":{"title":"Hoon","owner":"matildepark"},"http":{"title":"HTTP","optional":["csp","css","hpkp","hsts","javascript","json","markup","uri"],"owner":"danielgtaylor"},"hpkp":{"title":"HTTP Public-Key-Pins","owner":"ScottHelme"},"hsts":{"title":"HTTP Strict-Transport-Security","owner":"ScottHelme"},"ichigojam":{"title":"IchigoJam","owner":"BlueCocoa"},"icon":{"title":"Icon","owner":"Golmote"},"icu-message-format":{"title":"ICU Message Format","owner":"RunDevelopment"},"idris":{"title":"Idris","alias":"idr","owner":"KeenS","require":"haskell"},"ignore":{"title":".ignore","owner":"osipxd","alias":["gitignore","hgignore","npmignore"],"aliasTitles":{"gitignore":".gitignore","hgignore":".hgignore","npmignore":".npmignore"}},"inform7":{"title":"Inform 7","owner":"Golmote"},"ini":{"title":"Ini","owner":"aviaryan"},"io":{"title":"Io","owner":"AlesTsurko"},"j":{"title":"J","owner":"Golmote"},"java":{"title":"Java","require":"clike","owner":"sherblot"},"javadoc":{"title":"JavaDoc","require":["markup","java","javadoclike"],"modify":"java","optional":"scala","owner":"RunDevelopment"},"javadoclike":{"title":"JavaDoc-like","modify":["java","javascript","php"],"owner":"RunDevelopment"},"javastacktrace":{"title":"Java stack trace","owner":"RunDevelopment"},"jexl":{"title":"Jexl","owner":"czosel"},"jolie":{"title":"Jolie","require":"clike","owner":"thesave"},"jq":{"title":"JQ","owner":"RunDevelopment"},"jsdoc":{"title":"JSDoc","require":["javascript","javadoclike","typescript"],"modify":"javascript","optional":["actionscript","coffeescript"],"owner":"RunDevelopment"},"js-extras":{"title":"JS Extras","require":"javascript","modify":"javascript","optional":["actionscript","coffeescript","flow","n4js","typescript"],"owner":"RunDevelopment"},"json":{"title":"JSON","alias":"webmanifest","aliasTitles":{"webmanifest":"Web App Manifest"},"owner":"CupOfTea696"},"json5":{"title":"JSON5","require":"json","owner":"RunDevelopment"},"jsonp":{"title":"JSONP","require":"json","owner":"RunDevelopment"},"jsstacktrace":{"title":"JS stack trace","owner":"sbrl"},"js-templates":{"title":"JS Templates","require":"javascript","modify":"javascript","optional":["css","css-extras","graphql","markdown","markup","sql"],"owner":"RunDevelopment"},"julia":{"title":"Julia","owner":"cdagnino"},"keepalived":{"title":"Keepalived Configure","owner":"dev-itsheng"},"keyman":{"title":"Keyman","owner":"mcdurdin"},"kotlin":{"title":"Kotlin","alias":["kt","kts"],"aliasTitles":{"kts":"Kotlin Script"},"require":"clike","owner":"Golmote"},"kumir":{"title":"KuMir (КуМир)","alias":"kum","owner":"edukisto"},"kusto":{"title":"Kusto","owner":"RunDevelopment"},"latex":{"title":"LaTeX","alias":["tex","context"],"aliasTitles":{"tex":"TeX","context":"ConTeXt"},"owner":"japborst"},"latte":{"title":"Latte","require":["clike","markup-templating","php"],"owner":"nette"},"less":{"title":"Less","require":"css","optional":"css-extras","owner":"Golmote"},"lilypond":{"title":"LilyPond","require":"scheme","alias":"ly","owner":"RunDevelopment"},"liquid":{"title":"Liquid","require":"markup-templating","owner":"cinhtau"},"lisp":{"title":"Lisp","alias":["emacs","elisp","emacs-lisp"],"owner":"JuanCaicedo"},"livescript":{"title":"LiveScript","owner":"Golmote"},"llvm":{"title":"LLVM IR","owner":"porglezomp"},"log":{"title":"Log file","optional":"javastacktrace","owner":"RunDevelopment"},"lolcode":{"title":"LOLCODE","owner":"Golmote"},"lua":{"title":"Lua","owner":"Golmote"},"magma":{"title":"Magma (CAS)","owner":"RunDevelopment"},"makefile":{"title":"Makefile","owner":"Golmote"},"markdown":{"title":"Markdown","require":"markup","optional":"yaml","alias":"md","owner":"Golmote"},"markup-templating":{"title":"Markup templating","require":"markup","owner":"Golmote"},"mata":{"title":"Mata","owner":"RunDevelopment"},"matlab":{"title":"MATLAB","owner":"Golmote"},"maxscript":{"title":"MAXScript","owner":"RunDevelopment"},"mel":{"title":"MEL","owner":"Golmote"},"mermaid":{"title":"Mermaid","owner":"RunDevelopment"},"metafont":{"title":"METAFONT","owner":"LaeriExNihilo"},"mizar":{"title":"Mizar","owner":"Golmote"},"mongodb":{"title":"MongoDB","owner":"airs0urce","require":"javascript"},"monkey":{"title":"Monkey","owner":"Golmote"},"moonscript":{"title":"MoonScript","alias":"moon","owner":"RunDevelopment"},"n1ql":{"title":"N1QL","owner":"TMWilds"},"n4js":{"title":"N4JS","require":"javascript","optional":"jsdoc","alias":"n4jsd","owner":"bsmith-n4"},"nand2tetris-hdl":{"title":"Nand To Tetris HDL","owner":"stephanmax"},"naniscript":{"title":"Naninovel Script","owner":"Elringus","alias":"nani"},"nasm":{"title":"NASM","owner":"rbmj"},"neon":{"title":"NEON","owner":"nette"},"nevod":{"title":"Nevod","owner":"nezaboodka"},"nginx":{"title":"nginx","owner":"volado"},"nim":{"title":"Nim","owner":"Golmote"},"nix":{"title":"Nix","owner":"Golmote"},"nsis":{"title":"NSIS","owner":"idleberg"},"objectivec":{"title":"Objective-C","require":"c","alias":"objc","owner":"uranusjr"},"ocaml":{"title":"OCaml","owner":"Golmote"},"odin":{"title":"Odin","owner":"edukisto"},"opencl":{"title":"OpenCL","require":"c","modify":["c","cpp"],"owner":"Milania1"},"openqasm":{"title":"OpenQasm","alias":"qasm","owner":"RunDevelopment"},"oz":{"title":"Oz","owner":"Golmote"},"parigp":{"title":"PARI/GP","owner":"Golmote"},"parser":{"title":"Parser","require":"markup","owner":"Golmote"},"pascal":{"title":"Pascal","alias":"objectpascal","aliasTitles":{"objectpascal":"Object Pascal"},"owner":"Golmote"},"pascaligo":{"title":"Pascaligo","owner":"DefinitelyNotAGoat"},"psl":{"title":"PATROL Scripting Language","owner":"bertysentry"},"pcaxis":{"title":"PC-Axis","alias":"px","owner":"RunDevelopment"},"peoplecode":{"title":"PeopleCode","alias":"pcode","owner":"RunDevelopment"},"perl":{"title":"Perl","owner":"Golmote"},"php":{"title":"PHP","require":"markup-templating","owner":"milesj"},"phpdoc":{"title":"PHPDoc","require":["php","javadoclike"],"modify":"php","owner":"RunDevelopment"},"php-extras":{"title":"PHP Extras","require":"php","modify":"php","owner":"milesj"},"plant-uml":{"title":"PlantUML","alias":"plantuml","owner":"RunDevelopment"},"plsql":{"title":"PL/SQL","require":"sql","owner":"Golmote"},"powerquery":{"title":"PowerQuery","alias":["pq","mscript"],"owner":"peterbud"},"powershell":{"title":"PowerShell","owner":"nauzilus"},"processing":{"title":"Processing","require":"clike","owner":"Golmote"},"prolog":{"title":"Prolog","owner":"Golmote"},"promql":{"title":"PromQL","owner":"arendjr"},"properties":{"title":".properties","owner":"Golmote"},"protobuf":{"title":"Protocol Buffers","require":"clike","owner":"just-boris"},"pug":{"title":"Pug","require":["markup","javascript"],"optional":["coffeescript","ejs","handlebars","less","livescript","markdown","scss","stylus","twig"],"owner":"Golmote"},"puppet":{"title":"Puppet","owner":"Golmote"},"pure":{"title":"Pure","optional":["c","cpp","fortran"],"owner":"Golmote"},"purebasic":{"title":"PureBasic","require":"clike","alias":"pbfasm","owner":"HeX0R101"},"purescript":{"title":"PureScript","require":"haskell","alias":"purs","owner":"sriharshachilakapati"},"python":{"title":"Python","alias":"py","owner":"multipetros"},"qsharp":{"title":"Q#","require":"clike","alias":"qs","owner":"fedonman"},"q":{"title":"Q (kdb+ database)","owner":"Golmote"},"qml":{"title":"QML","require":"javascript","owner":"RunDevelopment"},"qore":{"title":"Qore","require":"clike","owner":"temnroegg"},"r":{"title":"R","owner":"Golmote"},"racket":{"title":"Racket","require":"scheme","alias":"rkt","owner":"RunDevelopment"},"cshtml":{"title":"Razor C#","alias":"razor","require":["markup","csharp"],"optional":["css","css-extras","javascript","js-extras"],"owner":"RunDevelopment"},"jsx":{"title":"React JSX","require":["markup","javascript"],"optional":["jsdoc","js-extras","js-templates"],"owner":"vkbansal"},"tsx":{"title":"React TSX","require":["jsx","typescript"]},"reason":{"title":"Reason","require":"clike","owner":"Golmote"},"regex":{"title":"Regex","owner":"RunDevelopment"},"rego":{"title":"Rego","owner":"JordanSh"},"renpy":{"title":"Ren'py","alias":"rpy","owner":"HyuchiaDiego"},"rescript":{"title":"ReScript","alias":"res","owner":"vmarcosp"},"rest":{"title":"reST (reStructuredText)","owner":"Golmote"},"rip":{"title":"Rip","owner":"ravinggenius"},"roboconf":{"title":"Roboconf","owner":"Golmote"},"robotframework":{"title":"Robot Framework","alias":"robot","owner":"RunDevelopment"},"ruby":{"title":"Ruby","require":"clike","alias":"rb","owner":"samflores"},"rust":{"title":"Rust","owner":"Golmote"},"sas":{"title":"SAS","optional":["groovy","lua","sql"],"owner":"Golmote"},"sass":{"title":"Sass (Sass)","require":"css","optional":"css-extras","owner":"Golmote"},"scss":{"title":"Sass (SCSS)","require":"css","optional":"css-extras","owner":"MoOx"},"scala":{"title":"Scala","require":"java","owner":"jozic"},"scheme":{"title":"Scheme","owner":"bacchus123"},"shell-session":{"title":"Shell session","require":"bash","alias":["sh-session","shellsession"],"owner":"RunDevelopment"},"smali":{"title":"Smali","owner":"RunDevelopment"},"smalltalk":{"title":"Smalltalk","owner":"Golmote"},"smarty":{"title":"Smarty","require":"markup-templating","optional":"php","owner":"Golmote"},"sml":{"title":"SML","alias":"smlnj","aliasTitles":{"smlnj":"SML/NJ"},"owner":"RunDevelopment"},"solidity":{"title":"Solidity (Ethereum)","alias":"sol","require":"clike","owner":"glachaud"},"solution-file":{"title":"Solution file","alias":"sln","owner":"RunDevelopment"},"soy":{"title":"Soy (Closure Template)","require":"markup-templating","owner":"Golmote"},"sparql":{"title":"SPARQL","require":"turtle","owner":"Triply-Dev","alias":"rq"},"splunk-spl":{"title":"Splunk SPL","owner":"RunDevelopment"},"sqf":{"title":"SQF: Status Quo Function (Arma 3)","require":"clike","owner":"RunDevelopment"},"sql":{"title":"SQL","owner":"multipetros"},"squirrel":{"title":"Squirrel","require":"clike","owner":"RunDevelopment"},"stan":{"title":"Stan","owner":"RunDevelopment"},"stata":{"title":"Stata Ado","require":["mata","java","python"],"owner":"RunDevelopment"},"iecst":{"title":"Structured Text (IEC 61131-3)","owner":"serhioromano"},"stylus":{"title":"Stylus","owner":"vkbansal"},"supercollider":{"title":"SuperCollider","alias":"sclang","owner":"RunDevelopment"},"swift":{"title":"Swift","owner":"chrischares"},"systemd":{"title":"Systemd configuration file","owner":"RunDevelopment"},"t4-templating":{"title":"T4 templating","owner":"RunDevelopment"},"t4-cs":{"title":"T4 Text Templates (C#)","require":["t4-templating","csharp"],"alias":"t4","owner":"RunDevelopment"},"t4-vb":{"title":"T4 Text Templates (VB)","require":["t4-templating","vbnet"],"owner":"RunDevelopment"},"tap":{"title":"TAP","owner":"isaacs","require":"yaml"},"tcl":{"title":"Tcl","owner":"PeterChaplin"},"tt2":{"title":"Template Toolkit 2","require":["clike","markup-templating"],"owner":"gflohr"},"textile":{"title":"Textile","require":"markup","optional":"css","owner":"Golmote"},"toml":{"title":"TOML","owner":"RunDevelopment"},"tremor":{"title":"Tremor","alias":["trickle","troy"],"owner":"darach","aliasTitles":{"trickle":"trickle","troy":"troy"}},"turtle":{"title":"Turtle","alias":"trig","aliasTitles":{"trig":"TriG"},"owner":"jakubklimek"},"twig":{"title":"Twig","require":"markup-templating","owner":"brandonkelly"},"typescript":{"title":"TypeScript","require":"javascript","optional":"js-templates","alias":"ts","owner":"vkbansal"},"typoscript":{"title":"TypoScript","alias":"tsconfig","aliasTitles":{"tsconfig":"TSConfig"},"owner":"dkern"},"unrealscript":{"title":"UnrealScript","alias":["uscript","uc"],"owner":"RunDevelopment"},"uorazor":{"title":"UO Razor Script","owner":"jaseowns"},"uri":{"title":"URI","alias":"url","aliasTitles":{"url":"URL"},"owner":"RunDevelopment"},"v":{"title":"V","require":"clike","owner":"taggon"},"vala":{"title":"Vala","require":"clike","optional":"regex","owner":"TemplarVolk"},"vbnet":{"title":"VB.Net","require":"basic","owner":"Bigsby"},"velocity":{"title":"Velocity","require":"markup","owner":"Golmote"},"verilog":{"title":"Verilog","owner":"a-rey"},"vhdl":{"title":"VHDL","owner":"a-rey"},"vim":{"title":"vim","owner":"westonganger"},"visual-basic":{"title":"Visual Basic","alias":["vb","vba"],"aliasTitles":{"vba":"VBA"},"owner":"Golmote"},"warpscript":{"title":"WarpScript","owner":"RunDevelopment"},"wasm":{"title":"WebAssembly","owner":"Golmote"},"web-idl":{"title":"Web IDL","alias":"webidl","owner":"RunDevelopment"},"wgsl":{"title":"WGSL","owner":"Dr4gonthree"},"wiki":{"title":"Wiki markup","require":"markup","owner":"Golmote"},"wolfram":{"title":"Wolfram language","alias":["mathematica","nb","wl"],"aliasTitles":{"mathematica":"Mathematica","nb":"Mathematica Notebook"},"owner":"msollami"},"wren":{"title":"Wren","owner":"clsource"},"xeora":{"title":"Xeora","require":"markup","alias":"xeoracube","aliasTitles":{"xeoracube":"XeoraCube"},"owner":"freakmaxi"},"xml-doc":{"title":"XML doc (.net)","require":"markup","modify":["csharp","fsharp","vbnet"],"owner":"RunDevelopment"},"xojo":{"title":"Xojo (REALbasic)","owner":"Golmote"},"xquery":{"title":"XQuery","require":"markup","owner":"Golmote"},"yaml":{"title":"YAML","alias":"yml","owner":"hason"},"yang":{"title":"YANG","owner":"RunDevelopment"},"zig":{"title":"Zig","owner":"RunDevelopment"}},"plugins":{"meta":{"path":"plugins/{id}/prism-{id}","link":"plugins/{id}/"},"line-highlight":{"title":"Line Highlight","description":"Highlights specific lines and/or line ranges."},"line-numbers":{"title":"Line Numbers","description":"Line number at the beginning of code lines.","owner":"kuba-kubula"},"show-invisibles":{"title":"Show Invisibles","description":"Show hidden characters such as tabs and line breaks.","optional":["autolinker","data-uri-highlight"]},"autolinker":{"title":"Autolinker","description":"Converts URLs and emails in code to clickable links. Parses Markdown links in comments."},"wpd":{"title":"WebPlatform Docs","description":"Makes tokens link to <a href=\"https://webplatform.github.io/docs/\">WebPlatform.org documentation</a>. The links open in a new tab."},"custom-class":{"title":"Custom Class","description":"This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.","owner":"dvkndn","noCSS":true},"file-highlight":{"title":"File Highlight","description":"Fetch external files and highlight them with Prism. Used on the Prism website itself.","noCSS":true},"show-language":{"title":"Show Language","description":"Display the highlighted language in code blocks (inline code does not show the label).","owner":"nauzilus","noCSS":true,"require":"toolbar"},"jsonp-highlight":{"title":"JSONP Highlight","description":"Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).","noCSS":true,"owner":"nauzilus"},"highlight-keywords":{"title":"Highlight Keywords","description":"Adds special CSS classes for each keyword for fine-grained highlighting.","owner":"vkbansal","noCSS":true},"remove-initial-line-feed":{"title":"Remove initial line feed","description":"Removes the initial line feed in code blocks.","owner":"Golmote","noCSS":true},"inline-color":{"title":"Inline color","description":"Adds a small inline preview for colors in style sheets.","require":"css-extras","owner":"RunDevelopment"},"previewers":{"title":"Previewers","description":"Previewers for angles, colors, gradients, easing and time.","require":"css-extras","owner":"Golmote"},"autoloader":{"title":"Autoloader","description":"Automatically loads the needed languages to highlight the code blocks.","owner":"Golmote","noCSS":true},"keep-markup":{"title":"Keep Markup","description":"Prevents custom markup from being dropped out during highlighting.","owner":"Golmote","optional":"normalize-whitespace","noCSS":true},"command-line":{"title":"Command Line","description":"Display a command line with a prompt and, optionally, the output/response from the commands.","owner":"chriswells0"},"unescaped-markup":{"title":"Unescaped Markup","description":"Write markup without having to escape anything."},"normalize-whitespace":{"title":"Normalize Whitespace","description":"Supports multiple operations to normalize whitespace in code blocks.","owner":"zeitgeist87","optional":"unescaped-markup","noCSS":true},"data-uri-highlight":{"title":"Data-URI Highlight","description":"Highlights data-URI contents.","owner":"Golmote","noCSS":true},"toolbar":{"title":"Toolbar","description":"Attach a toolbar for plugins to easily register buttons on the top of a code block.","owner":"mAAdhaTTah"},"copy-to-clipboard":{"title":"Copy to Clipboard Button","description":"Add a button that copies the code block to the clipboard when clicked.","owner":"mAAdhaTTah","require":"toolbar","noCSS":true},"download-button":{"title":"Download Button","description":"A button in the toolbar of a code block adding a convenient way to download a code file.","owner":"Golmote","require":"toolbar","noCSS":true},"match-braces":{"title":"Match braces","description":"Highlights matching braces.","owner":"RunDevelopment"},"diff-highlight":{"title":"Diff Highlight","description":"Highlights the code inside diff blocks.","owner":"RunDevelopment","require":"diff"},"filter-highlight-all":{"title":"Filter highlightAll","description":"Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.","owner":"RunDevelopment","noCSS":true},"treeview":{"title":"Treeview","description":"A language with special styles to highlight file system tree structures.","owner":"Golmote"}}};
if ( true && module.exports) { module.exports = components; }

/***/ }),

/***/ 2885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const components = __webpack_require__(9901);
const getLoader = __webpack_require__(9642);


/**
 * The set of all languages which have been loaded using the below function.
 *
 * @type {Set<string>}
 */
const loadedLanguages = new Set();

/**
 * Loads the given languages and adds them to the current Prism instance.
 *
 * If no languages are provided, __all__ Prism languages will be loaded.
 *
 * @param {string|string[]} [languages]
 * @returns {void}
 */
function loadLanguages(languages) {
	if (languages === undefined) {
		languages = Object.keys(components.languages).filter(l => l != 'meta');
	} else if (!Array.isArray(languages)) {
		languages = [languages];
	}

	// the user might have loaded languages via some other way or used `prism.js` which already includes some
	// we don't need to validate the ids because `getLoader` will ignore invalid ones
	const loaded = [...loadedLanguages, ...Object.keys(Prism.languages)];

	getLoader(components, languages, loaded).load(lang => {
		if (!(lang in components.languages)) {
			if (!loadLanguages.silent) {
				console.warn('Language does not exist: ' + lang);
			}
			return;
		}

		const pathToLanguage = './prism-' + lang;

		// remove from require cache and from Prism
		delete __webpack_require__.c[/*require.resolve*/(__webpack_require__(6500).resolve(pathToLanguage))];
		delete Prism.languages[lang];

		__webpack_require__(6500)(pathToLanguage);

		loadedLanguages.add(lang);
	});
}

/**
 * Set this to `true` to prevent all warning messages `loadLanguages` logs.
 */
loadLanguages.silent = false;

module.exports = loadLanguages;


/***/ }),

/***/ 6726:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": 2885
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6726;

/***/ }),

/***/ 6500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": 2885
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6500;

/***/ }),

/***/ 9642:
/***/ ((module) => {

"use strict";


/**
 * @typedef {Object<string, ComponentCategory>} Components
 * @typedef {Object<string, ComponentEntry | string>} ComponentCategory
 *
 * @typedef ComponentEntry
 * @property {string} [title] The title of the component.
 * @property {string} [owner] The GitHub user name of the owner.
 * @property {boolean} [noCSS=false] Whether the component doesn't have style sheets which should also be loaded.
 * @property {string | string[]} [alias] An optional list of aliases for the id of the component.
 * @property {Object<string, string>} [aliasTitles] An optional map from an alias to its title.
 *
 * Aliases which are not in this map will the get title of the component.
 * @property {string | string[]} [optional]
 * @property {string | string[]} [require]
 * @property {string | string[]} [modify]
 */

var getLoader = (function () {

	/**
	 * A function which does absolutely nothing.
	 *
	 * @type {any}
	 */
	var noop = function () { };

	/**
	 * Invokes the given callback for all elements of the given value.
	 *
	 * If the given value is an array, the callback will be invokes for all elements. If the given value is `null` or
	 * `undefined`, the callback will not be invoked. In all other cases, the callback will be invoked with the given
	 * value as parameter.
	 *
	 * @param {null | undefined | T | T[]} value
	 * @param {(value: T, index: number) => void} callbackFn
	 * @returns {void}
	 * @template T
	 */
	function forEach(value, callbackFn) {
		if (Array.isArray(value)) {
			value.forEach(callbackFn);
		} else if (value != null) {
			callbackFn(value, 0);
		}
	}

	/**
	 * Returns a new set for the given string array.
	 *
	 * @param {string[]} array
	 * @returns {StringSet}
	 *
	 * @typedef {Object<string, true>} StringSet
	 */
	function toSet(array) {
		/** @type {StringSet} */
		var set = {};
		for (var i = 0, l = array.length; i < l; i++) {
			set[array[i]] = true;
		}
		return set;
	}

	/**
	 * Creates a map of every components id to its entry.
	 *
	 * @param {Components} components
	 * @returns {EntryMap}
	 *
	 * @typedef {{ readonly [id: string]: Readonly<ComponentEntry> | undefined }} EntryMap
	 */
	function createEntryMap(components) {
		/** @type {Object<string, Readonly<ComponentEntry>>} */
		var map = {};

		for (var categoryName in components) {
			var category = components[categoryName];
			for (var id in category) {
				if (id != 'meta') {
					/** @type {ComponentEntry | string} */
					var entry = category[id];
					map[id] = typeof entry == 'string' ? { title: entry } : entry;
				}
			}
		}

		return map;
	}

	/**
	 * Creates a full dependencies map which includes all types of dependencies and their transitive dependencies.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {DependencyResolver}
	 *
	 * @typedef {(id: string) => StringSet} DependencyResolver
	 */
	function createDependencyResolver(entryMap) {
		/** @type {Object<string, StringSet>} */
		var map = {};
		var _stackArray = [];

		/**
		 * Adds the dependencies of the given component to the dependency map.
		 *
		 * @param {string} id
		 * @param {string[]} stack
		 */
		function addToMap(id, stack) {
			if (id in map) {
				return;
			}

			stack.push(id);

			// check for circular dependencies
			var firstIndex = stack.indexOf(id);
			if (firstIndex < stack.length - 1) {
				throw new Error('Circular dependency: ' + stack.slice(firstIndex).join(' -> '));
			}

			/** @type {StringSet} */
			var dependencies = {};

			var entry = entryMap[id];
			if (entry) {
				/**
				 * This will add the direct dependency and all of its transitive dependencies to the set of
				 * dependencies of `entry`.
				 *
				 * @param {string} depId
				 * @returns {void}
				 */
				function handleDirectDependency(depId) {
					if (!(depId in entryMap)) {
						throw new Error(id + ' depends on an unknown component ' + depId);
					}
					if (depId in dependencies) {
						// if the given dependency is already in the set of deps, then so are its transitive deps
						return;
					}

					addToMap(depId, stack);
					dependencies[depId] = true;
					for (var transitiveDepId in map[depId]) {
						dependencies[transitiveDepId] = true;
					}
				}

				forEach(entry.require, handleDirectDependency);
				forEach(entry.optional, handleDirectDependency);
				forEach(entry.modify, handleDirectDependency);
			}

			map[id] = dependencies;

			stack.pop();
		}

		return function (id) {
			var deps = map[id];
			if (!deps) {
				addToMap(id, _stackArray);
				deps = map[id];
			}
			return deps;
		};
	}

	/**
	 * Returns a function which resolves the aliases of its given id of alias.
	 *
	 * @param {EntryMap} entryMap
	 * @returns {(idOrAlias: string) => string}
	 */
	function createAliasResolver(entryMap) {
		/** @type {Object<string, string> | undefined} */
		var map;

		return function (idOrAlias) {
			if (idOrAlias in entryMap) {
				return idOrAlias;
			} else {
				// only create the alias map if necessary
				if (!map) {
					map = {};

					for (var id in entryMap) {
						var entry = entryMap[id];
						forEach(entry && entry.alias, function (alias) {
							if (alias in map) {
								throw new Error(alias + ' cannot be alias for both ' + id + ' and ' + map[alias]);
							}
							if (alias in entryMap) {
								throw new Error(alias + ' cannot be alias of ' + id + ' because it is a component.');
							}
							map[alias] = id;
						});
					}
				}
				return map[idOrAlias] || idOrAlias;
			}
		};
	}

	/**
	 * @typedef LoadChainer
	 * @property {(before: T, after: () => T) => T} series
	 * @property {(values: T[]) => T} parallel
	 * @template T
	 */

	/**
	 * Creates an implicit DAG from the given components and dependencies and call the given `loadComponent` for each
	 * component in topological order.
	 *
	 * @param {DependencyResolver} dependencyResolver
	 * @param {StringSet} ids
	 * @param {(id: string) => T} loadComponent
	 * @param {LoadChainer<T>} [chainer]
	 * @returns {T}
	 * @template T
	 */
	function loadComponentsInOrder(dependencyResolver, ids, loadComponent, chainer) {
		var series = chainer ? chainer.series : undefined;
		var parallel = chainer ? chainer.parallel : noop;

		/** @type {Object<string, T>} */
		var cache = {};

		/**
		 * A set of ids of nodes which are not depended upon by any other node in the graph.
		 *
		 * @type {StringSet}
		 */
		var ends = {};

		/**
		 * Loads the given component and its dependencies or returns the cached value.
		 *
		 * @param {string} id
		 * @returns {T}
		 */
		function handleId(id) {
			if (id in cache) {
				return cache[id];
			}

			// assume that it's an end
			// if it isn't, it will be removed later
			ends[id] = true;

			// all dependencies of the component in the given ids
			var dependsOn = [];
			for (var depId in dependencyResolver(id)) {
				if (depId in ids) {
					dependsOn.push(depId);
				}
			}

			/**
			 * The value to be returned.
			 *
			 * @type {T}
			 */
			var value;

			if (dependsOn.length === 0) {
				value = loadComponent(id);
			} else {
				var depsValue = parallel(dependsOn.map(function (depId) {
					var value = handleId(depId);
					// none of the dependencies can be ends
					delete ends[depId];
					return value;
				}));
				if (series) {
					// the chainer will be responsibly for calling the function calling loadComponent
					value = series(depsValue, function () { return loadComponent(id); });
				} else {
					// we don't have a chainer, so we call loadComponent ourselves
					loadComponent(id);
				}
			}

			// cache and return
			return cache[id] = value;
		}

		for (var id in ids) {
			handleId(id);
		}

		/** @type {T[]} */
		var endValues = [];
		for (var endId in ends) {
			endValues.push(cache[endId]);
		}
		return parallel(endValues);
	}

	/**
	 * Returns whether the given object has any keys.
	 *
	 * @param {object} obj
	 */
	function hasKeys(obj) {
		for (var key in obj) {
			return true;
		}
		return false;
	}

	/**
	 * Returns an object which provides methods to get the ids of the components which have to be loaded (`getIds`) and
	 * a way to efficiently load them in synchronously and asynchronous contexts (`load`).
	 *
	 * The set of ids to be loaded is a superset of `load`. If some of these ids are in `loaded`, the corresponding
	 * components will have to reloaded.
	 *
	 * The ids in `load` and `loaded` may be in any order and can contain duplicates.
	 *
	 * @param {Components} components
	 * @param {string[]} load
	 * @param {string[]} [loaded=[]] A list of already loaded components.
	 *
	 * If a component is in this list, then all of its requirements will also be assumed to be in the list.
	 * @returns {Loader}
	 *
	 * @typedef Loader
	 * @property {() => string[]} getIds A function to get all ids of the components to load.
	 *
	 * The returned ids will be duplicate-free, alias-free and in load order.
	 * @property {LoadFunction} load A functional interface to load components.
	 *
	 * @typedef {<T> (loadComponent: (id: string) => T, chainer?: LoadChainer<T>) => T} LoadFunction
	 * A functional interface to load components.
	 *
	 * The `loadComponent` function will be called for every component in the order in which they have to be loaded.
	 *
	 * The `chainer` is useful for asynchronous loading and its `series` and `parallel` functions can be thought of as
	 * `Promise#then` and `Promise.all`.
	 *
	 * @example
	 * load(id => { loadComponent(id); }); // returns undefined
	 *
	 * await load(
	 *     id => loadComponentAsync(id), // returns a Promise for each id
	 *     {
	 *         series: async (before, after) => {
	 *             await before;
	 *             await after();
	 *         },
	 *         parallel: async (values) => {
	 *             await Promise.all(values);
	 *         }
	 *     }
	 * );
	 */
	function getLoader(components, load, loaded) {
		var entryMap = createEntryMap(components);
		var resolveAlias = createAliasResolver(entryMap);

		load = load.map(resolveAlias);
		loaded = (loaded || []).map(resolveAlias);

		var loadSet = toSet(load);
		var loadedSet = toSet(loaded);

		// add requirements

		load.forEach(addRequirements);
		function addRequirements(id) {
			var entry = entryMap[id];
			forEach(entry && entry.require, function (reqId) {
				if (!(reqId in loadedSet)) {
					loadSet[reqId] = true;
					addRequirements(reqId);
				}
			});
		}

		// add components to reload

		// A component x in `loaded` has to be reloaded if
		//  1) a component in `load` modifies x.
		//  2) x depends on a component in `load`.
		// The above two condition have to be applied until nothing changes anymore.

		var dependencyResolver = createDependencyResolver(entryMap);

		/** @type {StringSet} */
		var loadAdditions = loadSet;
		/** @type {StringSet} */
		var newIds;
		while (hasKeys(loadAdditions)) {
			newIds = {};

			// condition 1)
			for (var loadId in loadAdditions) {
				var entry = entryMap[loadId];
				forEach(entry && entry.modify, function (modId) {
					if (modId in loadedSet) {
						newIds[modId] = true;
					}
				});
			}

			// condition 2)
			for (var loadedId in loadedSet) {
				if (!(loadedId in loadSet)) {
					for (var depId in dependencyResolver(loadedId)) {
						if (depId in loadSet) {
							newIds[loadedId] = true;
							break;
						}
					}
				}
			}

			loadAdditions = newIds;
			for (var newId in loadAdditions) {
				loadSet[newId] = true;
			}
		}

		/** @type {Loader} */
		var loader = {
			getIds: function () {
				var ids = [];
				loader.load(function (id) {
					ids.push(id);
				});
				return ids;
			},
			load: function (loadComponent, chainer) {
				return loadComponentsInOrder(dependencyResolver, loadSet, loadComponent, chainer);
			}
		};

		return loader;
	}

	return getLoader;

}());

if (true) {
	module.exports = getLoader;
}


/***/ }),

/***/ 2703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 4448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(7294),m=__webpack_require__(7418),r=__webpack_require__(3840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
b;c.lastBaseUpdate=b}




