import React from "react";
import '../../starRating.css';
const StarRating = ({ averageRate = 0 }) => {
    const filledPercentage = (averageRate / 5) * 100;

    const backgroundStyle = {
        background: `linear-gradient(90deg, rgb(255, 204, 0) ${filledPercentage}%, rgb(217, 221, 229) ${filledPercentage}%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };

    return (
        <div className="inline-flex items-center gap-2">
            <div
                className="s-rate flex items-center text-xs"
                style={backgroundStyle}
                data-average-rate={averageRate}
            >
                <i className="icon star" />
                <i className="icon star" />
                <i className="icon star" />
                <i className="icon star" />
                <i className="icon star" />
            </div>
            <span className="font-bold text-xs">
                {averageRate}
            </span>
        </div>
    );
};

export default StarRating;
