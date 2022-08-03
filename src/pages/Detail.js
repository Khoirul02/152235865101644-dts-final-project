/* eslint-disable react-hooks/exhaustive-deps */
import DefaultNavbar from './../components/DefaultNavbar';
import DefaultFooter from './../components/DefaultFooter';
import Header from './../components/detail/Header';
import Content from './../components/detail/Content';
import Api from './../Api';
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
export default function Detail() {
    let { id } = useParams();
    const [detailMeal, setDetailMeal] = useState();
    const [fotoDetailMeal, setFotoDetailMeal] = useState();
    const [lokasiDetailMeal, setLokasiDetailMeal] = useState();
    const [deskripsiDetailMeal, setDeskripsiDetailMeal] = useState();
    const [menuUtamaMeal, setMenuUtamaMeal] = useState();
    const [menuKategoriMeal, setKategoriMeal] = useState();
    const [youtube, setYoutube] = useState();
    const [web, setWeb] = useState();
    useEffect(()=>{
        dataDetailMenuRestaurant();
    },[]);
    const dataDetailMenuRestaurant = () => {
        Api.get(`lookup.php?i=${id}`)
        .then(body => {
            setDetailMeal(body.data.meals[0].strMeal);
            setFotoDetailMeal(body.data.meals[0].strMealThumb);
            setLokasiDetailMeal(body.data.meals[0].strArea);
            setDeskripsiDetailMeal(body.data.meals[0].strInstructions);
            setMenuUtamaMeal(body.data.meals[0].strIngredient1);
            setKategoriMeal(body.data.meals[0].strCategory);
            setYoutube(body.data.meals[0].strYoutube)
            setWeb(body.data.meals[0].strSource)
        })
        .catch(err => {
            console.log(err, 'error');
        });
    };
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <Content 
                    foto={fotoDetailMeal}
                    nama={detailMeal}
                    lokasi={lokasiDetailMeal}
                    deskripsi={deskripsiDetailMeal}
                    utama={menuUtamaMeal}
                    kategori={menuKategoriMeal}
                    youtube={youtube}
                    web={web} />
            </main>
            <DefaultFooter />
        </>
    );
}
