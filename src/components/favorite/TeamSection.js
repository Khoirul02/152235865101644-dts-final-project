/* eslint-disable array-callback-return */
import Title from './../../components/landing/Title';
import RestaurantCard from './../../components/landing/RestaurantCard';
import React, {useEffect, useState} from 'react';
import RepoUtil from '../../helper/RepoUtil';

export default function TeamSection() {
    const [meal, setMeal] = useState([]);
    const [msg, setMsg] = useState('...Loading...');
    useEffect(()=>{
        dataMenuRestaurant();
    },[]);
    const dataMenuRestaurant = () => {
        const data = RepoUtil.GetAsObject('@favorite');
        const session = RepoUtil.GetAsObject('@session');
        console.log(data);
        if(data === null){
            setMsg("Data Favorite Anda Kosong !!");
        } else {
            if(data.length === 0){
                setMsg("Data Favorite Anda Kosong !!");
            } else {
                let itemSessionUSer = [];
                data.forEach(element => {
                    if(element.emailUser === session.email){
                        itemSessionUSer.push(element);
                    }
                });
                setMeal(itemSessionUSer);
                if(itemSessionUSer.length === 0){ setMsg("Data Favorite Anda Kosong !!") }
            }
        }
    };
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Favorite Resturant">
                    Menu Restaurant yang sudah anda jadikan list favorite destinasi liburan.
                </Title>
                {meal.length !== 0 ?
                <div className="flex flex-wrap">
                    {meal.map((data)=>{
                        return( <RestaurantCard
                        id={data.idMeal}
                        img={data.strMealThumb}
                        name={data.strMeal}
                        visi={`${data.strInstructions.substring(0, 40)}....`}
                        />)
                    })}
                </div>
                : <div class='text-center'>{msg}</div>}
            </div>
        </section>
    );
}
