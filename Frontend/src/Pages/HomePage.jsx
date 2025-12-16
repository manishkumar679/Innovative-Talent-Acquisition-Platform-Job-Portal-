
import Companies from "../Components/LandingPage/Companies";
import DreamJob from "../Components/LandingPage/DreamJob";
import JobCategory from "../Components/LandingPage/JobCategory";
import Testimonials from "../Components/LandingPage/Testimonials";
import Working from "../Components/LandingPage/Working";

const HomePage=()=>{
    return (
        <div className="min-h-[90vh] bg-[#0a0a0a] font-['poppins']">
            <DreamJob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            {/* <Subscribe/> */}
        </div>
    )
}
export default HomePage;