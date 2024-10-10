// Implementación de BST utilizando el nodo nulo personalizado
//Luis David Ixquiac Sac - 15212223
//Miguel Antonio Salguero Sandoval
import { NodeTree } from "./Archivo1";

class BST {
    private root: NodeTree;

    constructor() {
        this.root = NodeTree.nullNode; 
    }

    private setRoot(newRoot: NodeTree): void {
        this.root = newRoot;
    }

    public getRoot(): NodeTree {
        return this.root;
    }

    public insert(data: number): void {
        let newNode: NodeTree = new NodeTree(data);
        let parent: NodeTree = NodeTree.nullNode;
        let current: NodeTree = this.root;

        while (!current.isNullNode()) {
            parent = current;
            if (newNode.getData() < current.getData()) {
                current = current.getleftChild();
            } else {
                current = current.getRightChild();
            }
        }

        newNode.setFather(parent);
        if (parent.isNullNode()) {
            this.root = newNode;
        } else if (newNode.getData() < parent.getData()) {
            parent.setleftChild(newNode);
        } else {
            parent.setRightChild(newNode);
        }
    }

    public searchRecursive(dataToSearch: number, node: NodeTree = this.root): number {
        if (node.isNullNode()) {
            return -1
        }
        if (node.getData() === dataToSearch) {
            return node.getData();
        }
        return dataToSearch < node.getData()
            ? this.searchRecursive(dataToSearch, node.getleftChild())
            : this.searchRecursive(dataToSearch, node.getRightChild());
    }

    private printNode(nodo: NodeTree): void {
        if (!nodo.getleftChild().isNullNode()) {
            this.printNode(nodo.getleftChild());
        }
        if (!nodo.isNullNode()) {
            console.log(nodo.getData());
        }
        if (!nodo.getRightChild().isNullNode()) {
            this.printNode(nodo.getRightChild());
        }
    }

    public printAll(): void {
        this.printNode(this.root);
    }
}


const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log("Se encontro: " + bst.searchRecursive(7));  // 7
console.log("Se encontro: " + bst.searchRecursive(8));  //-1 (no encontrado)

bst.printAll()