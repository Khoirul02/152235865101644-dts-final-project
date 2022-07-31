/* eslint-disable array-callback-return */
import Title from './../../components/landing/Title';
import RestaurantCard from './../../components/landing/RestaurantCard';
import Api from '../../Api';
import React, {useEffect, useState} from 'react';

export default function TeamSection() {
    const [meal, setMeal] = useState([]);
    useEffect(()=>{
        dataMenuRestaurant();
    },[]);
    const dataMenuRestaurant = () => {
        Api.get('search.php?s=')
        .then(body => {
            setMeal(body.data.meals)
        })
        .catch(err => {
            console.log(err, 'error');
        });
    };
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Jelajahi Resturant">
                    Ayo Jelajahi Menu Restaurant yang mungkin bisa
                    anda jadikan destinasi tempat anda makan dan liburan.
                </Title>
                <div className="flex flex-wrap">
                    {meal.length !== 0 ?
                    meal.map((data)=>{
                        return( <RestaurantCard
                        img={data.strMealThumb}
                        name={data.strMeal}
                        visi={`${data.strInstructions.substring(0, 30)}....`}
                        />)
                    }) : <p>....Loading...</p>}
                </div>
            </div>
        </section>
    );
}
