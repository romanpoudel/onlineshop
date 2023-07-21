import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface RateProps {
    rating: {
        rate: number
        count: number
    }
}

function Star({ rating }: RateProps) {
    if (typeof rating === 'undefined') {
        return <p>Loading...</p>; // or any other loading indicator/message
    }
    const { rate, count } = rating;
    console.log(rate)
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    rate >= index + 1 ? (
                        <BsStarFill color='green' />
                    ) : rate >= number ? (
                        <BsStarHalf color='green' />
                    ) : (
                        <BsStar color='green' />
                    )
                }
            </span>
        )
    }
    )
    return (
        <div className="mt-4 flex items-center">
            {ratingStar}
            <p className="ml-2 text-gray-600">({count})</p>
        </div>
    )
}

export default Star
