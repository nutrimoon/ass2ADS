import java.util.LinkedList;
import java.util.Stack;

import java.util.Arrays;

import java.util.ArrayList<T>;  //to be honest, some parts of code I got from some sources(not students, websites), because, we yet not cover heap at lecture. it was kind of hard, so I do some research. But, I didn't copy, I understood.

public class ADS2<T extends Comparable<T>> {
    private Object[] array;
    private int size = 0;
    private int capacity = 10;

    private T get(int index) {
        return (T) array[index];
    }

    T minElement = get(1);

    private int getLeftChildInd(int index) {  //formulas
        return 2 * index;
    }

    private int getRightChildInd(int index) {
        return ((2 * index) + 1);
    }

    private void capacityCheck() {
        if (size == capacity) {
            array = Arrays.copyOf(array, capacity * 2); //I remember, you explained this part to us, like what if we have 100000 items in array, but capacity is 5, it will doubled each time
            capacity = capacity * 2;
        }
    }

    public void add(T item) {
        capacityCheck();
        array[size] = item;
        size++;
    }

    public T removeRoot() {
        if (size == 0) {
            System.out.println("no such element");
            ;
        }

        int element = (int) array[0];
        array[0] = array[size - 1];
        size--;
    }

    boolean remove(T item) {
        if (array[size] == null) {
            return false;
        }
    }

    private void heapify() {
        int left = getLeftChildInd(1);
        int right = getRightChildInd(1);
        int largest = 1;
        if (left <= size) {
            if (array[left] > array[largest]) {
                largest = left;
            }
        }
        if (right <= size) {
            if (array[right] > array[largest]) {
                largest = right;
            }
        }
        if (largest != 1) {
            swap(array[1], array[largest]);
            heapify(array, largest);
        }

    }
}
