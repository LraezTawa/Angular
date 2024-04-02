import { AuthorInterface } from "./author.interface";

export interface TaskInterafce{
    title:string;
    description:string;
    author:AuthorInterface;
}