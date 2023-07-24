/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Rate = ({ count, rating, color, onRating }) => {
    const [hoverRating, setHoverRating] = useState(0)
    const getColor = index => {
        if (hoverRating >= index) {
            return color.filled;
        } else if (!hoverRating && rating) {
            return color.filled
        }
        return color.unfilled;
    }
    const starRating = useMemo(() => {
        return Array(count)
            .fill(0)
            .map((_, i) => i + 1)
            .map((idx) => (
                <FaStar
                    key={idx}
                    className="cursor-pointer"
                    color={idx <= rating ? color.filled : color.unfilled}
                    onClick={() => onRating(idx)}
                    style={{ color: getColor(idx) }}
                    onMouseEnter={() => setHoverRating(idx)}
                    onMoMouseLeave={() => setHoverRating(0)}
                />
            ));
    }, [count, rating, hoverRating]);

    return <div className="flex my-2">{starRating}</div>;
};

Rate.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onRating: PropTypes.func,
    color: {
        filled: PropTypes.string,
        unfilled: PropTypes.string,
    },
};

Rate.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: "#f5cb3b",
        unfilled: "#DCDCDC",
    },
};

export default Rate;
