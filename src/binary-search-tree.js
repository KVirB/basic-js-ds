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

  find(data) {
    return this.findNode(this.rootElement, data);
  }

  findNode = (node, data) => {
    if (node === null || node === undefined) {
      return null;
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  };

  remove(data) {
    return this.removeNode(this.rootElement, data);
  }
  removeNode(node, data) {
    if (node === null || node === undefined) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }
  minNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  min() {
    return this.minData(this.rootElement);
  }
  minData(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.minData(node.left);
    }
  }

  max() {
    return this.maxData(this.rootElement);
  }
  maxData(node) {
    if (node.right === null) {
      return node.data;
    } else {
      return this.maxData(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
