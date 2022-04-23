import java.util.LinkedList;
import java.util.Stack;
import java.util.ArrayList<T>;
public class Stack {
    Stack<T> example = new ArrayList<>();

    public T push(T newItem){
        example.add(newItem); //here we do not need isempty, because even to empty list we can add items
        return newItem;
    }

    public T peek(){
        if (example.size()==0 {
                System.out.println("EMPTY");
                return null;
            }
        return get(example.size() - 1);   //same as queue's peek
    }

    public T pop(){
        if (example.size()==0 {
                System.out.println("EMPTY");
                return null;
            }
        T firstElement=peek();

        return example.remove(firstElement); //same as queue's dequeue
    }

  
    }

