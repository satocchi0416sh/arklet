import React, { useEffect, useState } from 'react'
import "./Home.css"
import { AboutSection, HeroSection, ProjectSection, ServiceSection } from '../../components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const Home = () => {

    const length = 300;
    const [images, setImages] = useState(0);

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isTop, setIsTop] = useState(true);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        const imgArr = []
        const fetchImage = async () => {
            try {
                for (let i = 0; i < length; i++) {
                    const response = await import(`../../anim/bg_${i}.png`)
                    imgArr.push(response.default);
                }
                setImages(imgArr);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [])

    useEffect(() => {
        getImages()
    }, [images]);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (scrollPosition >= 80) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const posImage = (i) => {
        return Math.floor(i / 2) % length;
    }

    // 画像プリロード用関数
    const getImages = () => {

        for (let i = 0; i < images.length; i++) {
            var img = document.createElement('img');
            img.src = images[i];
            console.log(img);

            if (i === images.length - 1)
                loadedComplete();
        }
    }

    const loadedComplete = () => {
        setLoaded(true)
    }

    return (
        <>
            <div className="content">
                <div id="anim_img_box">
                    <img className={loaded && "loaded-img"} alt='bg' id="anim_img" src={images[posImage(scrollPosition)]} style={{ width: "100%" }} />
                </div>
                <HeroSection loaded={loaded} />
                <AboutSection scroll={scrollPosition} />
                <ProjectSection scroll={scrollPosition} />
                <ServiceSection scroll={scrollPosition} />
            </div>
        </>
    )
}

export default Home
