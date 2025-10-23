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

export type Project = {
    thumbnail: string;
    tech: string[];
    title: string;
    desc: string;
    live_url: string;
    github: string;
};

type ProjectActionCardProps = {
    project: Project[];
};

const ProjectActionCard = ({ project }: ProjectActionCardProps) => {
    return (
        <div>
            <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Tag</TableHead>
                        <TableHead>Update</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {project?.map((pro, idx) => (
                        <TableRow key={idx}>
                            <TableCell className="font-medium">{pro.title}</TableCell>
                            <TableCell>
                                <Image
                                    width="40"
                                    height="50"
                                    src={pro.thumbnail}
                                    alt={pro.title}
                                    className="w-12 h-12 object-cover rounded"
                                />
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-2">
                                    {pro.tech.map((tag, i) => (
                                        <span
                                            key={i}
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

export default ProjectActionCard;
