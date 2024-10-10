// Nodo BST
// Miguel Salguero
// David Ixquiac
export class NodeTree {
    private data: number;
    private father: NodeTree;
    private leftChild: NodeTree;
    private rightChild: NodeTree;
    static nullNode: NodeTree = new NodeTree(0, true);

    constructor(data: number, isLeaf: boolean = false) {
        this.data = data;
        this.father = NodeTree.nullNode;
        this.leftChild = NodeTree.nullNode;
        this.rightChild = NodeTree.nullNode;
    }

    public getData(): number {
        return this.data;
    }

    public setFather(newFather: NodeTree): void {
        this.father = newFather;
    }

    public getFather(): NodeTree {
        return this.father;
    }

    public setleftChild(newChild: NodeTree): void {
        this.leftChild = newChild;
    }

    public getleftChild(): NodeTree {
        return this.leftChild;
    }

    public setRightChild(newChild: NodeTree): void {
        this.rightChild = newChild;
    }

    public getRightChild(): NodeTree {
        return this.rightChild;
    }

    public isLeaf(): boolean {
        return this.leftChild === NodeTree.nullNode && this.rightChild === NodeTree.nullNode;
    }

    public isNullNode(): boolean {
        return this === NodeTree.nullNode;
    }
}
