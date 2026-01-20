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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import DeleteConfirmation from "./DeleteConfirmation";

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
    const [data, setData] = useState(articles);
    const router = useRouter();
    const handleDelete = async (id: string) => {
        // if (!confirm("Are you sure you want to delete this post?")) return;

        try {
            const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/post/${id}`,
                { method: "DELETE", credentials: "include" }
            )

            const result = await res.json();

            if (res.ok && result.success !== false) {
                toast.success("Post deleted Successfully!");
                setData(prev => prev.filter(item => item.id !== id));
                router.refresh();
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    }
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
                    {data?.map((item, idx) => (
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
                                {/* <DeleteIcon onClick={() => handleDelete(item.id)} className="text-red-600 size-6 cursor-pointer" /> */}
                                <DeleteConfirmation onConfirm={() => handleDelete(item.id)}>
                                    <DeleteIcon
                                        className="text-red-600 size-6 cursor-pointer hover:text-red-800 transition-colors"
                                    />
                                </DeleteConfirmation>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BlogActionCard;
