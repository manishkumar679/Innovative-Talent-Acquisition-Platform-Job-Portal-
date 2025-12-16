import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";
import { changeProfile } from "../../Slices/ProfileSlice";

const Card = (props) => {
    const dispatch=useDispatch();
    const profile=useSelector((state)=>state.profile);
    const handleSaveJob = () => {
        let savedJobs=[...profile.savedJobs];
        if(savedJobs.includes(props.id)){
            savedJobs=savedJobs.filter((job)=>job!=props.id);
        }else{ 
            savedJobs.push(props.id);
        }
        let updatedProfile={...profile,savedJobs:savedJobs};
        dispatch(changeProfile(updatedProfile));
    }
    return <div className="p-4 rounded-xl bg-[#1a1a1a]   hover:shadow-[0_0_5px_1px_#4682B4] shadow-[#4682B4]!  transition duration-300 ease-in-out w-72 flex flex-col gap-3">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-[#212529] rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold ">{props.jobTitle}</div>
                    <div className="text-xs text-[#ced4da]"><Link className="hover:text-[#dee2e6]" to="/company">{props.company}</Link> &bull; {props.applicants?props.applicants.length:0} Applicants</div>
                </div>
            </div>
            {profile.savedJobs?.includes(props.id) ? <IconBookmarkFilled onClick={handleSaveJob} className="cursor-pointer text-[#4682B4] " stroke={1.5} /> : <IconBookmark onClick={handleSaveJob} className="cursor-pointer text-[#ced4da]" stroke={1.5} />}
        </div>
        <div className="flex gap-2">
            <div className="p-2 py-1 bg-[#212529] text-[#4682B4] rounded-lg text-xs">{props.experience}</div>
            <div className="p-2 py-1  bg-[#212529] text-[#4682B4] rounded-lg text-xs">{props.jobType}</div>
            <div className="p-2 py-1  bg-[#212529] text-[#4682B4] rounded-lg text-xs">{props.location}</div>
        </div>
        <div>
            <Text className="text-xs! text-justify text-[#ced4da]!" lineClamp={3}>{props.about}
            </Text>
        </div>
        <Divider color="mineShaft.7" size="xs" />
        <div className="flex justify-between">
            <div className="font-semibold text-[#dee2e6]">&#8377;{props.packageOffered} LPA</div>
            <div className="text-xs flex gap-1 items-center text-[#adb5bd]">
                <IconClockHour3 className="h-5 w-5" stroke={1.5} /> {props.applied || props.interviewing? "Applied" : props.offered ? "Interviewed" : "Posted"} {timeAgo(props.postTime)}
            </div>
        </div>
        {(props.offered || props.interviewing) && <Divider color="mineShaft.7" size="xs" />}
        {props.offered &&
        <div className="flex gap-2">
            <Button color="brightSun.4" variant="outline" fullWidth>Accept</Button>
            <Button color="brightSun.4" variant="light" fullWidth>Reject</Button>
        </div>
        }
        {props.interviewing &&<div className="flex gap-1 text-sm">
        <IconCalendarMonth className=" text-[#4682B4] w-5 h-5" stroke={1.5} /> Sun, 25 August &bull; <span className="text-[#adb5bd]">10 AM - 11 AM</span>
        </div>}
        <Link  to={`/jobs/${props.id}`}>
        <Button color="brightSun.4" variant="light" fullWidth>View Job</Button>
        </Link>
    </div>
}
export default Card;