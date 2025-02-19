import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import { Link } from 'react-router-dom';
import RepoUtil from '../../helper/RepoUtil';
import React, {useState, useEffect} from 'react';

export default function KategoriCard({img, name,visi }) {
    const [status, setStatus] = useState('');
    const [alert, setAlert] = useState(false);
    useEffect(()=>{
        loadSession();
    },[]);
    const loadSession = () => {
        const session = RepoUtil.GetAsObject('@session');
        setStatus(session);
    }
    const handling = () => {
        setAlert(true);
    };
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-12 mb-12 px-4">
            {alert === true ?
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 transition-opacity"></div>
                    <div class="fixed z-10 inset-0 overflow-y-auto">
                        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                </div>
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Restaurant Apps</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">Anda harus Login terlebih dahulu.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button onClick={()=> setAlert(false)} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Oke</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div> : null}
            <Card>
            <div className="px-6">
                <CardImage alt="Card Image" src={img}/>
                <div className="pt-6 text-center">
                    <H6 color="gray">{name}</H6>
                    <Paragraph color="blueGray">{visi}</Paragraph>
                    <div className="flex items-center justify-center">
                        {status !== null ?
                        <Link to={`/kategori/${name}`}>
                            <Button color="lightBlue" ripple="light">
                                Lihat
                            </Button>
                        </Link>
                        : <Button onClick={()=> handling()} color="lightBlue" ripple="light">
                            Lihat
                          </Button>}
                    </div>
                </div>
            </div>
            </Card>
        </div>
    );
}
