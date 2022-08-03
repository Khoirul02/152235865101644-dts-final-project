/* eslint-disable array-callback-return */
import Title from './../../components/landing/Title';
import RestaurantCard from './../../components/landing/RestaurantCard';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import Api from './../../api';
import React, {useEffect, useState} from 'react';

export default function TeamSection() {
    const [meal, setMeal] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [msg, setMsg] = useState('...Loading...');
    useEffect(()=>{
        dataMenuRestaurant('');
    },[]);
    const dataMenuRestaurant = (key) => {
        Api.get(`search.php?s=${key}`)
        .then(body => {
            if(body.data.meals !== null){
                setMeal(body.data.meals);
            } else {
                setMsg("Pencarian Tidak Ada");
            }
        })
        .catch(err => {
            console.log(err, 'error');
        });
    };
    const setQuery = (event) => {
        setKeyword(event.target.value)
    }
    const search = (event) => {
        event.preventDefault();
        setMsg('...Loading...')
        setMeal([]);
        dataMenuRestaurant(keyword);
    }
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Jelajahi Resturant">
                    Ayo Jelajahi Menu Restaurant yang mungkin bisa
                    anda jadikan destinasi tempat anda makan dan liburan.
                </Title>
                <form onSubmit={search}>
                    <div className="flex gap-4 mt-16 mb-12 mr-10">
                                <Input
                                    type="text"
                                    placeholder="Ketik Menu"
                                    onChange={setQuery}
                                    color="lightBlue"
                                />
                                <Button color="lightBlue" ripple="light" type="submit">
                                    Cari
                                </Button>
                    </div>
                </form>
                <div className="flex flex-wrap">
                    {meal.length !== 0 ?
                    meal.map((data)=>{
                        return( <RestaurantCard
                        id={data.idMeal}
                        img={data.strMealThumb}
                        name={data.strMeal}
                        visi={`${data.strInstructions.substring(0, 40)}....`}
                        />)
                    }) : <p>{msg}</p>}
                </div>
            </div>
        </section>
    );
}
