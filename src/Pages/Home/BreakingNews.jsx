import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    const newsText = [
        "Breaking: Global markets show signs of recovery after months of decline.",
        "Sports: Local team clinches championship in a thrilling final game.",
        "Tech: New AI breakthrough promises advancements in healthcare technology.",
        "Weather: Heavy rains expected in the northwest region this weekend.",
        "Entertainment: Upcoming blockbuster movie breaks pre-sale ticket records.",
        "Economy: Inflation rates drop to their lowest levels in two years.",
        "Politics: Historic peace agreement signed between neighboring countries.",
        "Science: Researchers discover a new exoplanet capable of supporting life.",
        "Health: Experts advise new dietary guidelines to combat rising obesity rates.",
        "Education: Major reforms announced to enhance public school curriculum.",
        "Travel: Airlines report increased bookings ahead of the holiday season.",
        "Environment: Conservation efforts save endangered species from extinction.",
        "Technology: Tech giant unveils its latest smartphone with cutting-edge features.",
        "World News: International summit focuses on renewable energy solutions.",
        "Culture: Ancient artifacts unearthed in groundbreaking archaeological dig.",
        "Finance: Stock market hits an all-time high as investors regain confidence.",
        "Local: Community raises funds to rebuild school after devastating fire.",
        "Transportation: Major upgrades planned for city’s public transit system.",
        "Space: Astronomers capture stunning images of distant galaxies.",
        "Lifestyle: New fitness trend takes the world by storm."
    ]
    return (
        <div className="flex my-8 gap-2 bg-[#F3F3F3] p-4">
            <button className="btn bg-[#D72050] text-white rounded-none">Breaking News</button>
            <Marquee pauseOnHover={true}>
                {
                    newsText.map((news, idx) => {
                        const [category, headline] = news.split(":")
                        return (
                            <span key={idx} className="mr-10 text-lg"><Link className="font-semibold" to={`/`}>{category} :</Link> {headline}</span>
                        )
                    })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;