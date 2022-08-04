/* eslint-disable array-callback-return */
import Title from './../../components/landing/Title';
import KategoriCard from './../../components/kategori/KategoriCard';
import React, {useEffect, useState} from 'react';
import Api from './../../Api'; 
export default function TeamSection() {
    const [category, setCategory] = useState([]);
    const [msg, setMsg] = useState('...Loading...');
    useEffect(()=>{
        dataCategoryMenu();
    },[]);
    const dataCategoryMenu = () => {
        Api.get(`categories.php`)
        .then(body => {
            if(body.data.categories !== null){
                setCategory(body.data.categories);
            } else {
                setMsg("Data Kategori Tidak Ditemukan!!");
            }
        })
        .catch(err => {
            console.log(err, 'error');
        });
    };
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Jelajahi Kategori">
                    Kategori Restaurant yang bisa anda jadikan referensi destinasi liburan.
                </Title>
                {category.length !== 0 ?
                <div className="flex flex-wrap">
                    {category.map((data)=>{
                        return( <KategoriCard
                        img={data.strCategoryThumb}
                        name={data.strCategory}
                        visi={`${data.strCategoryDescription.substring(0, 40)}....`}
                        />)
                    })}
                </div>
                : <div class='text-center'>{msg}</div>}
            </div>
        </section>
    );
}
