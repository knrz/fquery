/**
 * Detach a node from the DOM, perform updates, then replace the original node
 *
 * @param {Element} node - the node to perform actions on
 * @param {Object<String, Array> || Function} funcs - keys matching functions, values being arguments array
 * @return {Element} the replaced node
 */
n.tap = function(node, funcs) {
  return n.replace(node, apply(n.clone(node), funcs));
};

/**
 * Remove a node.
 *
 * @param {Element} node - the node
 * @returns {Element} the node
 */
n.remove = function(node) {
  node.parentNode.removeChild(node);
  return node;
};

/**
 * Replace a node with a node
 *
 * @param {Element} oldNode - the node to replace
 * @param {Element} newNode - the node that's replacing
 * @return {Element} the new node
 */
n.replace = function(oldNode, newNode) {
  oldNode.parentNode.replaceChild(newNode, oldNode);
  return newNode;
};

/**
 * Return a copy of a node.
 *
 * @param {Element} node - the node
 * @returns {Element} the cloned node
 */
n.clone = function(node) {
  return node.cloneNode(true);
};

/**
 * Create a new node.
 *
 * @param {String} tag - the HTML tag of the new node
 * @param {Object<String, Array> || Function} funcs - keys matching functions, values being arguments array
 * @returns {Element} the new node
 */
n.node = function(tag, funcs) {
  return apply(d.createElement(tag), funcs);
};

/**
 * Create a document fragment.
 *
 * @returns {DocumentFragment} a new document fragment
 */
n.fragment = function() {
  return d.createDocumentFragment();
};

/**
 * Insert an `Element` after a reference node.
 *
 * @param {Element} value - the node to insert
 * @returns {Element} the inserted node
 */
n.insertAfter = function(value, node) {
  node.parentNode.insertBefore(value, node.nextSibling);
  return node;
};

/**
 * Insert an `Element` before a reference node.
 *
 * @param {Element} value - the node to insert
 * @returns {Element} the inserted node
 */
n.insertBefore = function(value, node) {
  node.parentNode.insertBefore(value, node);
  return node;
};

/**
 * Append an `Element` to an `Element`.
 *
 * @param {Element} value - the node to append
 * @param {Element} node - the parent node
 * @returns {Element} the parent node
 */
n.append = function(value, node) {
  node.appendChild(get(value, node));
  return node;
};

/**
 * Prepend an `Element` to an `Element`.
 *
 * @param {Element} value - the node to prepend
 * @param {Element} node - the parent node
 * @returns {Element} the parent node
 */
n.prepend = function(value, node) {
  if (node.childNodes[1]) {
    node.insertBefore(value, node.childNodes[1]);
  } else {
    n.append(value, node);
  }
  return node;
};
