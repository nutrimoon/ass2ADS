public class MyHashTable(K,V) {
    private class HashNode<K, V>
    {
        private K key;
        private V value;
        private HashNode<K, V> next;

        public HashNode(K key, V value){
            this.key=key;
            this.value=value;
        }

        @Override
        public String toString() {
            return "HashNode{" +
                    "key=" + key +
                    ", value=" + value +
                    ", next=" + next +
                    '}';
        }
    }

private HashNode<K, V> []chainArray;
    private int M=11;
    private int size;

    public MyHashTable(){
        chainArray = new HashNode[size];
    }
    public MyHashTable(int M){
        chainArray = new HashNode[M];
    }
private int hash(K key){
    return (Math.abs(key.hashCode())) % chainArray.length;
}

public void put(K key, V value){
    int index = hash(key);
    HashNode hasht = chainArray[index];
    while (hasht != null) {
        if (hasht.key.equals(key))
            return hasht;
        hasht = hasht.next;
    }
    if (hasht != null) {
        hasht.value = value;
        return;
    }
    HashNode node = new HashNode();
    node.key = key;
    node.value = value;
    node.next = chainArray[index];
    chainArray[index] = node;
    size++;
}

public V get(K key){
    int index = hash(key);
    HashNode hasht = chainArray[index];
    while (hasht != null) {
        if (hasht.key.equals(key))
            return hasht.value;
        hasht = hasht.next;
    }
        return null;
    }
    public V remove(K key) {
        int index = hash(key);
        if (chainArray[index] == null) {

            return;
        }
        if (chainArray[index].key.equals(key)) {
            chainArray[index] = chainArray[index].next;
            size--;
            return;
        }

        HashNode head = chainArray[index];
        HashNode prev = head.next;
        while (prev != null && !prev.key.equals(key)) {
            prev = prev.next;
            head = prev;
        }
        if (prev != null)
            head.next = prev.next;
            size--;
            return prev.value;
    }
    public boolean contains(K key) {
        int index = hash(key);
        HashNode hasht = chainArray[index];
        while (hasht != null) {
            if (hasht.key.equals(key))
                return true;
            hasht = hasht.next;
        }
        return false;
    }
    public K getKey(V value){}
}


