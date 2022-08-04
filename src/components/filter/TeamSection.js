/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import Title from './../../components/landing/Title';
import MenuCategoryCard from './../../components/filter/MenuCategoryCard';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Api from './../../Api'; 
export default function TeamSection() {
    let { id } = useParams();
    const [meals, setMeals] = useState([]);
    const [msg, setMsg] = useState('...Loading...');
    useEffect(()=>{
        dataCategoryMenu();
    },[]);
    const dataCategoryMenu = () => {
        Api.get(`filter.php?c=${id}`)
        .then(body => {
            if(body.data.meals !== null){
                setMeals(body.data.meals);
            } else {
                setMsg("Data Menu Tidak Ditemukan!!");
            }
        })
        .catch(err => {
            console.log(err, 'error');
        });
    };
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Jelajahi Restaurant">
                    Menu - Kategori {id} pada Restaurant Apps.
                </Title>
                {meals.length !== 0 ?
                <div className="flex flex-wrap">
                    {meals.map((data)=>{
                        return( <MenuCategoryCard
                        id={data.idMeal}
                        img={data.strMealThumb}
                        name={`${data.strMeal.substring(0, 15)}..`}
                        />)
                    })}
                </div>
                : <div class='text-center'>{msg}</div>}
            </div>
        </section>
    );
}
