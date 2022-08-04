/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import NavLink from '@material-tailwind/react/NavLink';
import ReactPlayer from "react-player";
import RepoUtil from '../../helper/RepoUtil';
import React, {useState, useEffect} from 'react';
export default function Content({email,id,foto,nama,lokasi,deskripsi,utama, kategori, youtube, web}) {
    const [label, setLabel] = useState("ADD TO FAVORITE");
    const [status, setStatus] = useState(0);
    useEffect(()=>{
        checkStatusFavorite();
    },[]);
    const checkStatusFavorite = () => {
        const check = RepoUtil.GetAsObject('@favorite');
        if(check !== null){
            for (let index = 0; index < check.length; index++) {
                if(check[index].idMeal === id){
                    setStatus(1);
                    setLabel("UNFAVORITE");
                }   
            }
        }
    };
    const addFavorite = () => {
        const data = {
            emailUser : email,
            idMeal : id,
            strMeal : nama,
            strMealThumb : foto,
            strInstructions : deskripsi,
        }
        const status = RepoUtil.GetAsObject('@favorite');
        if(status == null){
            let menu = [];
            menu.push(data);
            RepoUtil.StoreAsObject('@favorite', menu);
            console.log(menu);
        } else {
            let menuAll = status;
            menuAll.push(data);
            RepoUtil.StoreAsObject('@favorite', menuAll)
            console.log(menuAll);
        }
        setStatus(1);
        setLabel("UNFAVORITE")
    };
    const unFavorite = () => {
        const data = RepoUtil.GetAsObject('@favorite');
        for (var i = data.length - 1; i >= 0; --i) {
            if (data[i].idMeal === id && data[i].emailUser === email) {
                data.splice(i,1);
            }
        }
        RepoUtil.StoreAsObject('@favorite', data);
        console.log(data);
        setStatus(0);
        setLabel("ADD TO FAVORITE");
    };
    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image
                                            src={foto}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-5 lg:justify-end lg:mt-0">
                                <NavLink>
                                    <Button onClick={()=> status === 0 ? addFavorite() : unFavorite()} color="lightBlue" ripple="light">
                                        {label}
                                    </Button>
                                </NavLink>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            -
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Friends
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            -
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Photos
                                        </span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            -
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Comments
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">{nama}</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                {lokasi}
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                <Icon name="star" size="xl" />
                                Menu Utama - {utama}
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                <Icon name="category" size="xl" />
                                {kategori}
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <ReactPlayer
                                    width='100%'
                                    url={youtube}
                                />
                                <div className="w-full lg:w-12/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                        {deskripsi}
                                    </LeadText>
                                </div>
                                <NavLink
                                    href={web}
                                    target="_blank"
                                >
                                <Button color="lightBlue" ripple="light">
                                        Read More
                                </Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
