const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootElement === null) {
      this.rootElement = newNode;
    } else {
      this.insertNode(this.rootElement, newNode);
    }
  }
  insertNode = (node, newNode) => {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };
  has(data) {
    return this.hasNode(this.rootElement, data);
  }
  hasNode = (node, data) => {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.hasNode(node.left, data);
    } else if (data > node.data) {
      return this.hasNode(node.right, data);
    } else {
      return true;
    }
  };

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
