import { useState } from 'react';
import images from '~/asset/images';

const Image = ({ src, alt, fallBack: customerImage = images.noImage, ...props }) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customerImage);
    };

    return <img {...props} src={fallBack || src || customerImage || images.noImage} alt={alt} onError={handleError} />;
};

export default Image;
