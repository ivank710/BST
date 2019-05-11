class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    
    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
        return;
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
        return;
      } else {
        this.insert(val, root.right);
      }
    }
  }

  searchRecur(val) {
    if (!this.root) return false;

    
  }

  searchIter(val) {
    if (!this.root) return false;

    let queue = [this.root];

    while(queue.length) {
      let node = queue.shift();

      if(node.val === val) return true;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return false;
  }

}

module.exports = {
    TreeNode,
    BST
};