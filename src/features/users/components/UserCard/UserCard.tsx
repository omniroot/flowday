import { IUser } from "@features/users/api/getUser/getUser.types.ts";
import styles from "./UserCard.module.css";
import { FC } from "react";
import { Typography } from "@components/ui/Typography/Typography.tsx";
import { Badge } from "@components/ui/Badge/Badge.tsx";
import dayjs from "dayjs";
import { Tooltip } from "@components/ui/Tooltip/Tooltip.tsx";

interface IUserCardProps {
	user: IUser;
}
export const UserCard: FC<IUserCardProps> = ({ user }) => {
	const lastOnline = dayjs(user.last_online_at).fromNow();
	const userOnline = user?.last_online === "сейчас на сайте" ? "Online" : "Offline";

	return (
		<div className={styles.user_card}>
			<img src={user.image.x160} className={styles.avatar} />
			<div className={styles.info}>
				<div className={styles.line}>
					<Typography size="title" weight="title">
						{user.nickname}
					</Typography>
					<Tooltip title={lastOnline}>
						<Badge>{userOnline}</Badge>
					</Tooltip>
				</div>
				<Typography className={styles.about}>{user.about}</Typography>
			</div>
		</div>
	);
};
