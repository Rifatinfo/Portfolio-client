'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { DeleteIcon, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

interface Article {
    id: string;
    title: string;
    tags: string[];
    thumbnail: string;
    content: string;
    view: number;
}

interface BlogActionCardProps {
    articles: Article[];
}

const BlogActionCard = ({ articles }: BlogActionCardProps) => {
    return (
        <div>
            <Table>
                <TableCaption>List of all articles</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Tags</TableHead>
                        <TableHead>Update</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {articles?.map((item, idx) => (
                        <TableRow key={idx}>
                            <TableCell className="font-medium">{item.title}</TableCell>
                            <TableCell>
                                <Image
                                    width={50}
                                    height={50}
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-12 h-12 object-cover rounded"
                                />
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="bg-primary text-white font-semibold px-3 py-1 rounded-full shadow-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </TableCell>
                            <TableCell>
                                <SquareArrowOutUpRight className="size-5 cursor-pointer" />
                            </TableCell>
                            <TableCell>
                                <DeleteIcon className="text-red-600 size-6 cursor-pointer" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BlogActionCard;
