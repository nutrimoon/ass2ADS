import java.util.LinkedList;  //I have only 50 from 1 ass, so here I am using java.util
import java.util.Queue;
import java.util.ArrayList<T>;
public class Queue {

Queue<T> example = new ArrayList<>();
        public T peek () {
            if (isEmpty() == true) {    //if isEmpty is true, which means that size is 0
                System.out.println("EMPTY");
                return null;
            }
            return get(example.size - 1);
        }

        public T enqueue (T newItem){
            example.add(newItem); // add function appends new item to the end, exactly what we need for enqueue
            return newItem;
        }

        public T dequeue () {
            if (isEmpty() == true) {
                System.out.println("EMPTY");
                return null;
            }
            T firstElement=peek();

            return example.remove(firstElement); //or we can write remove(0), but I  first retrieve then remove
        }

        public boolean isEmpty () {
            if (example.size == 0) {
                return true;
            } else {
                return false;
            }
        }
    }


