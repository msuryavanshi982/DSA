# Data Structure and Algorithms

* Data Structure:
   - It is a special way of arranging data on a computer so that it can be accessed and updated efficiently.
   - Data structure is the collection of data types arranged in a specific order.
* Algorithms :

   - An algorithm is a set of well-defined instructions to solve a particular problem. It takes a set of input(s) and produces the desired output.
   - An algorithm shouldn't include computer code. Instead, the algorithm should be written in such a way that it can be used in different programming languages.

  * Example:

        Step 1: Start
        Step 2: Declare variables num1, num2 and sum. 
        Step 3: Read values num1 and num2. 
        Step 4: Add num1 and num2 and assign the result to sum.
         sum←num1+num2 
        Step 5: Display sum 
        Step 6: Stop



* Advantages of DS - Data orgnization,efficiency,reusability abstration ect.
* Need of DS - Processor speed ,data search ect...

# DS
  1. Linear DS - linear data structures, the elements are arranged in sequence one after the other. 

    A] Static 
       a. Array
    B] Dynamic
       a. Linked List
       b. Stack
       c. Queue

  2. Non-Linear DS

    a. Tree
    b. Graph

# ARRAY :

 Linear DS which stores elements in memory are arranged in continuous memory.

   operations on the arrays:

   1. Insertion

     a. Start
     b. middle
     c. end
     d. Given Index

   2. Deletion

     a. Start
     b. middle
     c. end
     d. Given Index

   3. Searching

     a. Linear/ sequential/ unsorted array TC O(N)
        Interate each and every element of the array and find the target element if it found then  return index of that element else return -1

        
        Algorithm:

        let arr=[78,90,65,45,80]
        let key=80;
        function linearSearch(arr,key){
         for( let i=0;i<arr.length;i++){
         if(arr[i]===key) {
          flag=1
         break;
         }
         }
         if(flag==1) return true;
         return false;
         }


     b. Binary /sorted array
        find the middle element of the array and check it is equal to target element or not if it equal then return index else check the middle lement is greater than target elment then makes h to mid-1 else l=mid+1

      Algorithm:

      function BinarySearch(arr, target) {
        let l=0,h=arr.length-1
          while(l<=h){
           let mid=l+parseInt((h-l)/2);
            if(arr[mid]==target){
             console.log("Yes")
              return 
             }else if(arr[mid]<target){
               l=mid+1
              }else{
                h=mid-1
             }
           }
            console.log("No")

          }
          let arr=[58,60,65,75,80],target=80
          BinarySearch(arr,target)

     
      // Recursive Approch
           function recursiveBinarySearch(arr, target) {
            let end=arr.length-1,start=0
              if (end>= start){
                  let middle = start + (end - start )/2;
                  if (arr[middle] == target)
                      return middle;
                   if (arr[middle] >target)
                     return recursiveBinarySearch(arr, start_index, middle-1, element);
                     return recursiveBinarySearch(arr, middle+1, end_index, element);
                    }
                       return -1;
                  }
 
            let arr=[8,9,12,23,35,56,67],target=9
            console.log(BinarySearchRecursive(arr, target))
  





   4. Sorting

    Sorting-Arrangeing elements in ascending or descending order.
     a. Selection Sort
     b. Insertion Sort
     c. Bubble Sort
     d. Merge Sort
     e. Quick Sort  



# Insertion Sort :

    function insertionSort(arr) {
      for (let i = 0; i < arr.length; i++){
       let j = i - 1;
        while (j >= 0 && arr[j + 1] < arr[j]) {
           [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]  //ES6 Swapping
            j--
          }
        }
         return arr
    }



# Bubble Sort :

        function bubbleSort(arr) {
           let swap=false
           for (let i = 0; i < arr.length - 1; i++){
             for (let j = 1; j < arr.length - i; j++){
                 if (arr[j - 1] > arr[j]) {
                // [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]] //ES6 Swapping
                arr[j - 1] = arr[j - 1] + arr[j]
                arr[j] = arr[j - 1] - arr[j]
                arr[j-1]=arr[j-1]-arr[j]
                swap=true
              }
                if (swap == false)
                break  
            } 
         }
             return arr
          }


## Merge Sort :

       function merge(left, right) {
            let i = 0, j = 0,arr=[]
            while (i < left.length && j < right.length) {
              if (left[i] < right[j]) {
                arr.push(left[i])
                i++
              } else {
                arr.push(right[j])
                j++
              }
            }
            while (i < left.length) {
               arr.push(left[i])
               i++
            }
            while (j < right.length) {
               arr.push(right[j])
               j++
           }
            return arr
           }

       function mergeSort(arr) {
         if (arr.length <= 1) return arr
           let mid = arr.length/2
           let left = mergeSort(arr.slice(0,mid))
           let right = mergeSort(arr.slice(mid))
           return merge(left ,right)
         }

          let nums=[45,22,11,34,5,6,7,1,9,10,33,24]
          console.log(mergeSort(nums));



# Quick Sort

           function swap(arr,left,right){
             let temp=arr[left]
             arr[left]=arr[right]
             arr[right]=temp;
           }

            function Partition(arr,low,high){
              let pivot=arr[high]
              let i=low-1
              for(let j=low;j<high;j++){
                if(pivot>arr[i]){
                 i++
                 swap(arr,i,j)
               }
             }
              swap(arr,i+1,high)
              return i+1
           }

        const QuickSort=(arr,low,high)=>{
           if(low<high){
            let pivotIndex=partition(arr,low,high)
            QuickSort(arr,low,pivotIndex-1)
            QuickSort(arr,pivotIndex+1,high)
          }
        }

         QuickSort(arr,0,arr.length-1)



 # Selection Sort  
         function selectionSort(arr) {
            for (let i = 0; i < arr.length - 1; i++){
             let min=i
              for (let j = i + 1; j < arr.length; j++){
                if (arr[min] > arr[j]) {
                   min=j
                }
              }
                let temp = arr[i]
                arr[i] = arr[min]
                arr[min]=temp
            }
             return arr
         }


# LINKED LIST :
  - LL can be defined as collection of objects called nodes that are randomly stored in the memory.
  - Data elements are connected through a series of nodes. And, each node contains the data items and address to the next node.
  

   1. Singly LL

    Node contain two parts:
     1. Data (value/element)
     2. next Pointer (address of the next node)

      
      Operations on Singly LL:

    # Insertion,Deletion Node from the LL

      class Node{
      constructor(element) {
        this.element = element;
        this.next=null
      }
    }
    class LinkedList{
       constructor() {
         this.head = null;
         this.size=0
     }

    insertAtHead(element) {
        let newNode = new Node(element)
        newNode.next = this.head;
        this.head=newNode
    }

    insertAtTail(element) {
        let newNode = new Node(element)
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next=newNode
    }

    insertAtPosition(element, position) {
        let newNode = new Node(element)
        let curr = this.head;
        let count = 1
        let prev = null
        if (position == 1) {
            newNode.next = this.head;
            this.head = newNode
        } else {
            while (count < position) {
                prev = curr
                curr = curr.next;
                count++
            }
            prev.next = newNode
            prev = prev.next
            prev.next = curr
        }
    }
      deleteFromHead() {
        var curr = this.head
        this.head = this.head.next
        return curr

    }

    deleteFromTail() {
        var curr = this.head
        while (curr.next.next != null) {
            curr=curr.next
        }
        curr.next=null
    }

    deleteFromPos(pos) {
        var curr = this.head
        let count = 1
        if (pos === 1) {
            this.deleteFromHead();
        }
        while (count < pos-1) {
            curr=curr.next
        }
        curr.next=curr.next.next
      }
    }
     let list = new LinkedList();




 2. Doubly LL

        class Node{
          constructor(data) {
          this.data = data
          this.next = null
          this.prev=null
         }
        }

        class LinkedList {
           constructor(head) {
             this.head = null
             this.size = 0
           }

         addAtHead(data) {
          let newNode = new Node(data)
          newNode.next = this.head
          newNode.prev = null
           if (this.head != null) {
              this.head.prev=newNode
           }
             this.head=newNode
          }
          addAtTail(data) {
            let newNode = new Node(data)
            let curr = this.head
             newNode.next=null
            if (this.head == null) {
              newNode.prev = null
              this.head = newNode
              return
            }
             while (curr.next != null) {
               curr=curr.next
             }
             curr.next = newNode
             newNode.prev=curr
           }
           
          }



   3. Circular LL


# STACK :
    It follows first-in-last-out technology (FILO) or last-in-first-out (LIFO)
     1. push()
        adding new element into the stack
     2. pop()
        removeing top element of the stack
     3. top()
        return the top element of the stack

    class Stack{
     constructor() {
        this.items=[]
     }

    push(value) {
    return this.items.push(value)
    }
    
    pop() {
        return this.items.pop()
    }
    isEmpty() {
        return this.items.length==0
    }
    isFull() {
        return this.items.length==this.maxLength
    }
    top() {
        return this.items[this.items.length-1]
      }
    }

    let stack = new Stack();



# QUEUE
    It follows first-in-first-out (FIFO)
    1. enqueue() 
        adding element into the queue from rare end
    2. dequeue()
        remove the elements from the queue from front

    class  Queue{
      constructor() {
        this.items = []
        this.maxSize=8
     }

      enqueue(value) {
        return this.items.push(value)
      }
      dequeue() {
        return this.items.shift();
      }
      isEmpty() {
        return  this.items.length==0
      }
      isFull() {
        return this.items.length===this.maxSize
      }
      top() {
        return this.items[0]
      }
    }

     var queue = new Queue();

# NON-Linear DS
   - Non-Linear DS are arranged in a hierarchical manner where one element will be connected to one or more elements.
   - elements in non-linear data structures are not in any sequence.
# TREE
  Tree is the non-linear heararchial representation of DS
  
  1. Binary Tree
     - A binary tree is a tree data structure in which each parent node can have at most two children. Each node of a binary tree consists of three items:
         - data item
         - address of left child
         - address of right child


    class Node {
          constructor(val) {
           this.value = val
           this.left = null
           this.right = null
          }
        }

    class BTree {
      constructor() {
        this.root = null;
      }

    makeTreeNode(val) {
        let treeNode = new Node(val);
        if (this.root === null) {
            this.root = treeNode;
        } else if (this.root.left == null) {
            this.root.left=treeNode
        } else {
            this.root.right=treeNode
        } 
     }
    }

      let Btree = new BTree();


* BST (Binary Search Tree) :

    binary search tree is similar to the binary tree but there is codition the value of left node of bst is smaller than root node and the value of right node is greater than root node.
     
       class Node {
        constructor(val) {
        this.value = val
        this.left = null
        this.right = null
        }
       }

      class BSTree {
       constructor() {
         this.root = null;
        }

       isTreeEmpty() {
         return this.root === null
        }

        makeTreeNode(val) {
          let treeNode = new Node(val);
            if (this.root === null) {
              this.root = treeNode;
            } else {
              this.insertTreeNode(this.root,treeNode)
           }
         }
           insertTreeNode(root,newNode) {
              if (root.value > newNode.value) {
                if (root.left === null) {
                   root.left = newNode;
               } else {
                    this.insertTreeNode(root.left,newNode)
              }
            } else {
                 if (root.right === null) {
                   root.right=newNode
                } else {
                      this.insertTreeNode(root.right,newNode)
                 }
              }
           }

             search(root, val) {
                if (root == null) {
                   return false
               } else if (root.value === val) {
                     return true
                } else if (root.value > val) {
                   return this.search(root.left,val)
              } else {
                 return this.search(root.right,val)
               }
             }

    
             minValue(root) {
               if (!root.left) {
                 return root.value
              } else {
                    return this.minValue(root.left)
              }
            }

               maxValue(root) {
                 if (!root.right) {
                       return root.value
                    } else {
                      return this.maxValue(root.right)
                  }
                }
              }

           let bst = new BSTree();





  1. PreOrder(root-left-right)

          function preOrder(root) {
            if (root) {
              console.log(root.value)
              this.preOrder(root.left)
              this.preOrder(root.right)
            }
          }

  2. PostOrder(left-right-root)

          function postOrder(root) {
            if (root) {
              this.postOrder(root.left)
              this.postOrder(root.right)
              console.log(root.value)
            }
          }


  3. InOrder(left-root-right)
          
          function inOrder(root) {
             if (root) {
               this.inOrder(root.left)
               console.log(root.value)
                this.inOrder(root.right)
            
              }
          }

   





   
# Array Inbuilt Methods:
  1. arr.length() => It returns the length of array
  2. arr.sort()  => arrange elements in ascending or descending order
  3. arr.push() => add element at last into the array
  4. arr.unshift() => add element start of the array
  5. arr.shift() => delete element from the start
  6. arr.pop() => delete element from the last
  7. arr.splice()
  8. arr.slice()
  9. arr.includes() => check element present in the array
  10. arr.reverse() => reverse the array elements








# HOF - (Higher Order Functions)   
  1. arr.map()
  2. arr.filter()
  3. arr.reduce()
  4. arr.forEach()


# String 
 collection of characters

# Inbuilt methods of strings
 1. str.split()
 2. str.join()
 3. str.reverse()
 4. str.length()
 5. str.substr()
 6. str.splice()
 7. str.slice()
 8. str.concat()



# Math function
  1. Math.random()
  2. Math.floor()
  3. Math.ceil()
  4. Math.round()

