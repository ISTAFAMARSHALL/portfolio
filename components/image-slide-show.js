
'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image'

import maybellineImg1 from '@/public/images/projects/maybelline/Maybelline Catelog Screenshot.jpeg'
import maybellineImg2 from '@/public/images/projects/maybelline/Maybelline Catelog Screenshot 2.png'
import maybellineImg3 from '@/public/images/projects/maybelline/Maybelline Catelog Screenshot 3.png'
import maybellineImg4 from '@/public/images/projects/maybelline/Maybelline Catelog Screenshot 4.png'
import maybellineImg5 from '@/public/images/projects/maybelline/Maybelline Catelog Screenshot 5.png'

import reservationImg1 from '@/public/images/projects/reservations/Reservation App Screenshot.jpeg'
import reservationImg2 from '@/public/images/projects/reservations/Reservation App Screenshot 2.jpeg'
import reservationImg3 from '@/public/images/projects/reservations/Reservation App Screenshot 3.png'
import reservationImg4 from '@/public/images/projects/reservations/Reservation App Screenshot 4.png'
import reservationImg5 from '@/public/images/projects/reservations/Reservation App Screenshot 5.png'

import stimsImg1 from '@/public/images/projects/stims/S.T.I.M.S Screenshot .jpeg'
import stimsImg2 from '@/public/images/projects/stims/S.T.I.M.S Screenshot 2.png'
import stimsImg3 from '@/public/images/projects/stims/S.T.I.M.S Screenshot 3.png'
import stimsImg4 from '@/public/images/projects/stims/S.T.I.M.S Screenshot 4.png'
import stimsImg5 from '@/public/images/projects/stims/S.T.I.M.S Screenshot 5.png'

import smartbuyImg1 from '@/public/images/projects/smart-buy/SmartBuy Screenshot .jpeg'
import smartbuyImg2 from '@/public/images/projects/smart-buy/SmartBuy Screenshot 2.jpeg'
import smartbuyImg3 from '@/public/images/projects/smart-buy/SmartBuy Screenshot 3.jpeg'
import smartbuyImg4 from '@/public/images/projects/smart-buy/SmartBuy Screenshot 4.png'
import smartbuyImg5 from '@/public/images/projects/smart-buy/SmartBuy Screenshot 5.png'

import moreThanJustaLunchappImg1 from '@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 1.png'
import moreThanJustaLunchappImg2 from '@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 2.png'
import moreThanJustaLunchappImg3 from '@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 3.png'
import moreThanJustaLunchappImg4 from '@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 4.png'
import moreThanJustaLunchappImg5 from '@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 5.png'
import moreThanJustaLunchappImg6 from '@/public/images/projects/more-than-just-a-lunch/More than Just a Lunch IMG 6.png'

let allImgs = [
    {image: smartbuyImg1, alt:'smartbuyImg1'},
    {image: smartbuyImg2, alt:'smartbuyImg2'},
    {image: smartbuyImg3, alt:'smartbuyImg3'},
    {image: smartbuyImg4, alt:'smartbuyImg4'},
    {image: smartbuyImg5, alt:'smartbuyImg5'},
    {image: stimsImg1, alt:'stimsImg1'},
    {image: stimsImg2, alt:'stimsImg2 '},
    {image: stimsImg3, alt:'stimsImg3'},
    {image: stimsImg4, alt:'stimsImg4'},
    {image: stimsImg5, alt:'stimsImg5'},
    {image: reservationImg1, alt:'reservationImg1'},
    {image: reservationImg2, alt:'reservationImg2'},
    {image: reservationImg3, alt:'reservationImg3'},
    {image: reservationImg4, alt:'reservationImg4'},
    {image: reservationImg5, alt:'reservationImg5'},
    {image: maybellineImg1, alt:'maybellineImg1'},
    {image: maybellineImg2, alt:'maybellineImg2'},
    {image: maybellineImg3, alt:'maybellineImg3'},
    {image: maybellineImg4, alt:'maybellineImg4'},
    {image: maybellineImg5, alt:'maybellineImg5'},
    {image: moreThanJustaLunchappImg1, alt:'more-than-just-a-lunch-appIMG1'},
    {image: moreThanJustaLunchappImg2, alt:'more-than-just-a-lunch-appIMG2'},
    {image: moreThanJustaLunchappImg3, alt:'more-than-just-a-lunch-appIMG3'},
    {image: moreThanJustaLunchappImg4, alt:'more-than-just-a-lunch-appIMG4'},
    {image: moreThanJustaLunchappImg5, alt:'more-than-just-a-lunch-appIMG6'},
    {image: moreThanJustaLunchappImg6, alt:'more-than-just-a-lunch-appIMG6'},
]

export default function ImageSlideShow (props) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex < selectedProjectsImgs.length - 1 ? prevIndex + 1 : 0
        );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    let selectedProjectsImgs = allImgs.filter((item) => item.alt.includes(props.slug.split('-').shift()));

    return (
        <div >
            <Image
                style={{width: '900px' , height: '600px'}}
                src={selectedProjectsImgs[currentImageIndex].image}
                alt={selectedProjectsImgs[currentImageIndex].alt}
                priority
            />
      </div>
    )
}