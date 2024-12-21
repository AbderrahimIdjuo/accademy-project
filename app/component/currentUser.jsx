import { currentUser } from "@clerk/nextjs/server";
const user = await currentUser()
const userName = user?.username

export default userName
