// Create a new JavaScript file named llNodeListing.js

// Node class
class Node {
    constructor(value) {
            this.value = value; // Set the value of the node
                    this.next = null;   // Initialize the next node as null
                        }
                        }

                        // LinkedList class
                        class LinkedList {
                            constructor() {
                                    this.head = null;   // Initialize head as null
                                            this.size = 0;      // Initialize size as 0
                                                }

                                                    // Append function to add nodes to the list
                                                        append(value) {
                                                                const newNode = new Node(value);
                                                                        if (!this.head) {
                                                                                    this.head = newNode; // If list is empty, set head to new node
                                                                                            } else {
                                                                                                        let current = this.head;
                                                                                                                    while (current.next) {
                                                                                                                                    current = current.next; // Traverse to the end of the list
                                                                                                                                                }
                                                                                                                                                            current.next = newNode; // Link the last node to the new node
                                                                                                                                                                    }
                                                                                                                                                                            this.size++;
                                                                                                                                                                                    this.print(); // Print the list after adding a new node
                                                                                                                                                                                        }

                                                                                                                                                                                            // Print function to display the linked list
                                                                                                                                                                                                print() {
                                                                                                                                                                                                        let current = this.head;
                                                                                                                                                                                                                const result = [];
                                                                                                                                                                                                                        while (current) {
                                                                                                                                                                                                                                    result.push(current.value); // Add each node's value to the result array
                                                                                                                                                                                                                                                current = current.next;
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                console.log("Current Linked List:", result.join(" -> "));
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                    const linkedList = new LinkedList();
                                                                                                                                                                                                                                                                    linkedList.append("Data Structures – Array");
                                                                                                                                                                                                                                                                    linkedList.append("Variable Type – Integer");
                                                                                                                                                                                                                                                                    linkedList.append("Sorting Algorithm – Bubble Sort");