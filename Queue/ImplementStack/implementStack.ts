    class MyStack {

    push(x: number): void {
        const { emptyQueue, usedQueue } = this.getQueues();

        emptyQueue.queue(x);

        while (!usedQueue.isEmpty()) {
        emptyQueue.queue(usedQueue.dequeue());
        }
    }

    pop(): number {
        const { usedQueue } = this.getQueues();

        return usedQueue.dequeue();
    }

    top(): number {
        const { usedQueue } = this.getQueues();

        return usedQueue.peek();
    }

    empty(): boolean {
        const { usedQueue } = this.getQueues();

        return usedQueue.isEmpty();
    }

    private queueOne = new myQueue();
    private queueTwo = new myQueue();

    private isOneEmpty = () => {
        return this.queueOne.isEmpty();
    };

    // we could save space by getting usedQueue and empty Queue separately, but then we risk getting them mixed up.
    private getQueues = () => {
        if (this.isOneEmpty())
        return { emptyQueue: this.queueOne, usedQueue: this.queueTwo };
        else return { emptyQueue: this.queueTwo, usedQueue: this.queueOne };
    };
    }

    class myQueue {
    queue = (x: number) => {
        this.internalArr.push(x);
    };

    dequeue = () => {
        const dqedVal = this.internalArr.shift();
        if (dqedVal !== undefined) return dqedVal;
        throw "invalid dequeue";
    };

    peek = () => {
        return this.internalArr[0];
    };

    size = () => {
        return this.internalArr.length;
    };

    isEmpty = () => {
        return this.size() === 0;
    };

    private internalArr: number[] = [];
    }

    export default MyStack;

    /**
     * Your MyStack object will be instantiated and called as such:
     * var obj = new MyStack()
     * obj.push(x)
     * var param_2 = obj.pop()
     * var param_3 = obj.top()
     * var param_4 = obj.empty()
     */
