/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Button from '@material-tailwind/react/Button';
import RepoUtil from '../helper/RepoUtil';
import { useHistory } from "react-router-dom";

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [status, setStatus] = useState('');
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState(false);
    const history = useHistory();
    useEffect(()=>{
        loadSession();
    },[]);
    const loadSession = () => {
        const session = RepoUtil.GetAsObject('@session');
        setStatus(session);
        if(session !== null){
            setNama(session.nama);
            setEmail(session.email);
        }
    }
    const logout = () => {
        setAlert(false);
        RepoUtil.RemoveValue('@session');
        history.push("/login");
    }
    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <Link
                        to="/"
                        rel="noreferrer"
                    >
                        <NavbarBrand>Restaurant Apps</NavbarBrand>
                    </Link>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            {status !== null ?
                            <><NavLink
                                    rel="noreferrer"
                                    ripple="light"
                                >
                                    <Link to="/">
                                        Beranda
                                    </Link>
                                </NavLink><NavLink
                                    rel="noreferrer"
                                    ripple="light"
                                >
                                        <Link to="/favorite">
                                            Favorite
                                        </Link>
                                    </NavLink></>
                            : null}
                            {status === null ?
                            <NavLink
                                href="/login"
                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4"
                                    ripple="dark"
                                >
                                    Login
                                </Button>
                            </NavLink>
                            : <NavLink
                                onClick={()=> setAlert(true)}
                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4"
                                    ripple="dark"
                                >
                                    Logout
                                </Button>
                            </NavLink>}
                        </div>
                    </Nav>
                </NavbarCollapse>
                {alert === true ?
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 transition-opacity"></div>
                    <div class="fixed z-10 inset-0 overflow-y-auto">
                        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                </div>
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Restaurant Apps</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">Nama : {nama}</p>
                                    <p class="text-sm text-gray-500">Email : {email}</p>
                                    <p class="text-sm text-gray-500">Apakah anda yakin mau logout ?</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button onClick={()=> logout()} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Iya</button>
                            <button onClick={()=> setAlert(false)}type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Batal</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div> : null}
            </NavbarContainer>
        </Navbar>
    );
}
