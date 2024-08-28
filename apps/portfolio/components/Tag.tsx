import { cn } from "@repo/ui/lib/utils";
import React from "react";
import { RepositoryTagsBackgroundColors } from "~/lib/constants";
import { IRepositoryTopic } from "~/types/portfolio";
interface ITag extends IRepositoryTopic {
  index: number;
}
const Tag = ({ topic, index }: ITag) => {
  const backgroundColor =
    RepositoryTagsBackgroundColors[
      index % RepositoryTagsBackgroundColors.length
    ];
  return (
    <span
      style={{ backgroundColor: backgroundColor?.color }}
      className={cn("text-sm px-1.5 py-0.5 rounded-full italic")}
    >
      {topic.name || ""}
    </span>
  );
};

export default Tag;
