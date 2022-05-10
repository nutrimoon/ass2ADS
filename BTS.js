public class BST<K extends Comparable<K>, V> {
private Node root;
private class Node{
private K key;
private V val;
private Node right,left;
public Node(K key, V val){
    this.key=key;
    this.val=val;
}
}
public void put(K key, V val){
    if (root == null) {
        return new Node(key);
    }

    if (key < root.val) {
        root.left = insert(root.left, key);
    }
    else {
        root.right = insert(root.right, key);
    }

    return root;
}
public V get(K key){
    Node n=root;
    if(n == null)
        return null;
    int gap = key.compareTo(n.key);
    if(gap < 0)
        return get(n.left, key);
    else if(gap > 0)
        return get(n.right, key);
    else
        return n.val;
}
public void delete(K key){
    Node n=root;
    if(n == null)
        return null;
    int gap = key.compareTo(n.key);
    if(gap < 0)
        n.left = delete(n.left, key);
    else if(gap > 0)
        n.right = delete(n.right, key);
    else{
        if(n.right == null)
            return n.left;
        if(n.left == null)
            return n.right;
        Node n1 = n;
        n = min(n1.right);
        n.right = deleteMin(n1.right);
        n.left = n1.left;
    }
    return n;
}
public Iterable<K> iterator() {
    Node n=root;
    Stack<Node> stack = new Stack<Node>();
    Queue<K> queue = new Queue<K>();

    while (n != || !stack.isEmpty()) {
        if (n != null) {
            stack.push(n);
            n = n.left;
        }
        else {
            n = stack.pop();
            queue.enqueue(n.key);
            n = n.right;
        }
    }
    return queue;
}
}
