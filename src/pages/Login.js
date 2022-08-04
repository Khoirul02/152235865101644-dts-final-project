/* eslint-disable array-callback-return */
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from './../components/DefaultNavbar';
import SimpleFooter from './../components/SimpleFooter';
import Page from './../components/login/Page';
import Container from './../components/login/Container';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import RepoUtil from '../helper/RepoUtil';

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [alert, setAlert] = useState(false);
    const [msg, setMsg] = useState("");
    const [status, setStatus] = useState("");
    const set1 = (event) => {
        setEmail(event.target.value)
    }
    const set2 = (event) => {
        setPass(event.target.value)
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        let status = 0;
        if(email !== "" && pass !== ""){
            let data = RepoUtil.GetAsObject('@user');
            if(data !== null){
                data.map(data => {
                    if(data.email === email && data.pass === pass){
                        status = 1;
                        let session = {
                            nama : data.nama,
                            email : data.email,
                        }
                        RepoUtil.StoreAsObject('@session', session);
                    }   
                })
            }
            if(status === 1){
                setStatus(status);
                setAlert(true);
                setMsg("Login Berhasil");
            } else {
                setStatus(status);
                setAlert(true)
                setMsg("Login Gagal, Cek Ulang Username & Password Anda");
            }
        } else {
            setStatus(status);
            setAlert(true)
            setMsg("Username & Password masih kosong !!");
        }
    }
    return (
        <Page>
            <DefaultNavbar />
            {alert === true ?
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 transition-opacity"></div>
                    <div class="fixed z-10 inset-0 overflow-y-auto">
                        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
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
                                    <p class="text-sm text-gray-500">{msg}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            {status === 0 ?
                            <button onClick={()=> setAlert(false)} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Oke</button>
                            :
                            <Link to="/"
                            rel="noreferrer">
                                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Oke</button>
                            </Link>
                            }
                            </div>
                            </div>
                        </div>
                    </div>
                    </div> : null}
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Login
                        </H5>
                    </CardHeader>
                    <form onSubmit={handelSubmit}>
                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                onChange={set1}
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                                onChange={set2}
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="submit"
                                size="lg"
                                ripple="dark"
                            >
                                Login
                            </Button>
                        </div>
                    </CardFooter>
                    </form>
                </Card>
                <p
                    rel="noreferrer"
                    className="text-white font-medium block pb-2 text-sm text-center mt-5"
                >
                    Belum punya akun ?
                </p>
                <Link to="/register"
                    rel="noreferrer"
                    className="text-white font-medium block pb-2 text-sm text-center"
                >
                    Registrasi
                </Link>
            </Container>
            <SimpleFooter />
        </Page>
    );
}
