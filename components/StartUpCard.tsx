import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const StartUpCard = ({post} : {post:StartUpTypeCard}) => {
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">
                    {formatDate(post._createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon  className="size-6 text-primary"/>
                    <span className="text-16-medium">{post.views}</span>
                </div>
            </div>
            <div className="flex-between mt-5 gap-5">
                    <div className="flex-1">
                        <Link href={`/user/${post.author?._id}`}>
                        <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
                        </Link>
                        <Link href={`/startup/${post._id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
                        </Link>

                    </div>
                </div>

        </li>
    )
}

export default StartUpCard;