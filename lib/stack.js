// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor () {
    this.top = null
    this.length = 0
  }

  push (val) {
    const newNode = new Node(val)
    if (this.length > 0) newNode.next = this.top
    this.length++
    this.top = newNode
    return this.length
  }

  pop () {
    if (this.length === 0) return null

    const removedNode = this.top
    if (this.length === 1) {
      this.top = null
    } else {
      this.top = this.top.next
    }
    this.length--
    return removedNode.value
  }

  size () {
    return this.length
  }
}

exports.Node = Node
exports.Stack = Stack
