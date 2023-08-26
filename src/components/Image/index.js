//For display if the the image isnt loaded by website
import classNames from 'classnames';
import {useState, forwardRef} from 'react';
import styles from './Image.module.scss'
import images from '~/assets/images';


const Image = forwardRef(({className, src, alt,fallback: customFallback = images.noImage, ...props},ref)=> {
    const [fallback, setFallback]= useState('')

    const handleError=()=>{
        setFallback(customFallback)
    }
    return ( <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError}/> );
});

export default Image;