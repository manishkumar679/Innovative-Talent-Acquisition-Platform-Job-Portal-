import { Divider } from "@mantine/core";
import Profile from "../Components/Profile/Profile";

const ProfilePage = () => {
    return <div className="min-h-[90vh] bg-[#0a0a0a] font-['poppins'] ">
        <Divider mx="md" mb="xl" />
        
            <Profile />
    </div>
}
export default ProfilePage;