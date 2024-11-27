import TestimonialCard, { TestimonialsProps } from "../../component/testimonials";
import { GoDotFill } from "react-icons/go";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";



export default function Testimonials() {
    const testimonials: TestimonialsProps[] = [
        {
            description: "The courses provided here are simply amazing! I learned so much about web development and felt fully supported throughout my journey.",
            image: "/images/team-member5.png",
            name: "James Neduku",
            designation: "Software Developer"
        },
        {
            description: "I really appreciated the hands-on projects and the personalized feedback from instructors. It helped me gain real-world skills.",
            image: "/images/team-member3.png",
            name: "Erick Kipkemboi",
            designation: "Scrum Master"
        },
        {
            description: "The UI/UX design course was a game-changer for me. I now have the confidence to work on my own design projects, thanks to the guidance and resources provided.",
            image: "/images/team-member2.png",
            name: "Stephen Karubo",
            designation: "UI/UX Designer"
        },
    ];

    return (
        <div className="flex w-full max-w-[1280px] bg-secondary flex-col max-h-screen items-center gap-y-4 py-12 bg-slate-100 ">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-center block sm:hidden">
                    What Our Students Say
                </h1>
                <h1 className="text-4xl font-bold mb-4 text-center hidden sm:block">
                    Customer Testimonials
                </h1>
            </div>
            <p className="text-gray-600 mb-10 max-w-xl text-center mx-auto">
                Hear from some of our amazing students who have transformed their careers through our courses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 md:px-8  max-w-6xl ">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        <div className="w-[80%] flex flex-row justify-between ">
            <div className="flex items-center">
                <GoDotFill className="text-xl"/>
                <GoDotFill className="text-xl text-gray-400"/>
                <GoDotFill className="text-xl text-gray-400"/>
                <GoDotFill className="text-xl text-gray-400"/>
                <GoDotFill className="text-xl text-gray-400"/>
            </div>
            <div className="flex space-x-3 ">
             <FiArrowLeftCircle className="text-3xl"/>
             <FiArrowRightCircle className="text-3xl"/>

            </div>
        </div>
        </div>
    );
}