import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../Data/Data";

const Testimonials = () => {
    return (
        <div className="mt-20 pb-10 px-8 overflow-hidden">
            <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-8 text-[#e9ecef]">
                What <span className="text-[#4682B4]">Professionals</span> Say About Us
            </div>
            <div className="text-center text-[#ced4da] max-w-2xl mx-auto mb-10">
                Hear from job seekers who have successfully found their ideal positions through CareerConnect's innovative platform.
            </div>
            
            <div className="flex justify-center flex-wrap gap-8 mt-10">
                {testimonials.map((data, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col gap-4 w-[22%] md-mx:w-[45%] xs-mx:w-full bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#4682B4]"
                    >
                        <div className="flex items-center mb-2">
                            <Avatar 
                                className="h-16! w-16! border-2 border-[#4682B4]" 
                                src={`/avatar${index+1}.png`} 
                                alt={data.name} 
                            />
                            <div className="ml-4">
                                <div className="text-lg sm-mx:text-base font-semibold text-[#e9ecef]">
                                    {data.name}
                                </div>
                                <Rating 
                                    value={data.rating} 
                                    fractions={2} 
                                    readOnly 
                                    color="yellow" 
                                    size="sm"
                                />
                            </div>
                        </div>
                        
                        <div className="text-sm leading-relaxed text-[#ced4da] italic">
                            "{data.testimonial}"
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Testimonials;