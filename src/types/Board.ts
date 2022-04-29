import Thread from '../types/Thread'

export default interface Board {
    description: string;
    name: string;
    threads: Array<Thread>;
    __v: number,
    _id: string;
}