class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  search(root, toFind) {
    if (!root) {
      return false;
    }
    // base case
    if (root.data === toFind) {
      return true;
    }

    if (toFind < root.data) {
      if (root.left) {
        this.search(root.left, toFind);
      }
    } else {
      if (root.right) {
        this.search(root.right, toFind);
      }
    }
    return false;
  }
}
